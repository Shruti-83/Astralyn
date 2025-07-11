import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Your Firebase config
import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
import './Chatbot.css';
import image from '../assets/image.png'
const Chatbot = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showBot, setShowBot] = useState(false);

  // Load chat history from Firestore
  useEffect(() => {
    if (!userId) return;
    
    const q = query(
      collection(db, `users/${userId}/chats`), 
      orderBy('timestamp', 'asc')
    );
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push(doc.data());
      });
      setMessages(msgs);
    });
    
    return () => unsubscribe();
  }, [userId]);

  // Initial bot message
  useEffect(() => {
    if (messages.length === 0 && userId) {
      addBotMessage("Hello! I'm your astrology assistant. Ask me about your daily horoscope, zodiac signs, or compatibility!");
    }
  }, [userId]);

  const addBotMessage = async (text) => {
    await addDoc(collection(db, `users/${userId}/chats`), {
      text,
      sender: 'bot',
      timestamp: new Date()
    });
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    await addDoc(collection(db, `users/${userId}/chats`), {
      text: input,
      sender: 'user',
      timestamp: new Date()
    });

    setInput('');
    setLoading(true);

    try {
      // Process the message and get astrology response
      const botResponse = await getAstrologyResponse(input);
      await addBotMessage(botResponse);
    } catch (error) {
      await addBotMessage("Sorry, I couldn't fetch your astrology information. Please try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getAstrologyResponse = async (userInput) => {
    // Simple NLP to detect intent
    const inputLower = userInput.toLowerCase();
    
    // Daily horoscope request
    if (inputLower.includes('daily') || inputLower.includes('horoscope') || inputLower.includes('today')) {
      const sign = extractZodiacSign(userInput);
      if (sign) {
        return await fetchDailyHoroscope(sign);
      } else {
        return "Please tell me your zodiac sign so I can fetch your horoscope. For example: 'What's the horoscope for Aries today?'";
      }
    }
    
    // Compatibility request
    if (inputLower.includes('compatibility') || inputLower.includes('match')) {
      const signs = extractTwoZodiacSigns(userInput);
      if (signs.length === 2) {
        return await checkCompatibility(signs[0], signs[1]);
      } else {
        return "Please mention two zodiac signs to check compatibility. For example: 'How compatible are Aries and Leo?'";
      }
    }
    
    // Default response
    return "I can help with daily horoscopes, zodiac sign traits, and compatibility. Ask me something like: 'What's today's horoscope for Taurus?' or 'Are Virgo and Cancer compatible?'";
  };

  const extractZodiacSign = (text) => {
    const signs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 
                   'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];
    const inputLower = text.toLowerCase();
    return signs.find(sign => inputLower.includes(sign));
  };

  const extractTwoZodiacSigns = (text) => {
    const signs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 
                   'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];
    const inputLower = text.toLowerCase();
    return signs.filter(sign => inputLower.includes(sign)).slice(0, 2);
  };

  const fetchDailyHoroscope = async (sign) => {
    try {
      const response = await fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`, {
        method: 'POST'
      });
      const data = await response.json();
      
      return `Today's horoscope for ${sign.charAt(0).toUpperCase() + sign.slice(1)}:
              \n📅 Date: ${data.current_date}
              \n✨ ${data.description}
              \n💡 Advice: ${data.compatibility}
              \n😊 Mood: ${data.mood}
              \n🌈 Color: ${data.color}
              \n🍀 Lucky Number: ${data.lucky_number}
              \n⏳ Lucky Time: ${data.lucky_time}`;
    } catch (error) {
      console.error('Error fetching horoscope:', error);
      return "Sorry, I couldn't fetch your horoscope right now. Please try again later.";
    }
  };

  const checkCompatibility = async (sign1, sign2) => {
    // This is a simplified example - you might need a different API for detailed compatibility
    const compatibilities = {
      aries: { good: ['leo', 'sagittarius', 'gemini'], bad: ['cancer', 'capricorn'] },
      taurus: { good: ['virgo', 'capricorn', 'cancer'], bad: ['leo', 'aquarius'] },
      // Add all other signs...
    };
    
    if (compatibilities[sign1]?.good.includes(sign2)) {
      return `${sign1.charAt(0).toUpperCase() + sign1.slice(1)} and ${sign2.charAt(0).toUpperCase() + sign2.slice(1)} are highly compatible! They make a great match.`;
    } else if (compatibilities[sign1]?.bad.includes(sign2)) {
      return `${sign1.charAt(0).toUpperCase() + sign1.slice(1)} and ${sign2.charAt(0).toUpperCase() + sign2.slice(1)} might face some challenges in their relationship.`;
    } else {
      return `${sign1.charAt(0).toUpperCase() + sign1.slice(1)} and ${sign2.charAt(0).toUpperCase() + sign2.slice(1)} have an average compatibility. They can work well together with some effort.`;
    }
  };

  return (
    <div className={`chatbot-container ${showBot ? 'visible' : ''}`}>
      {!showBot ? (
        <button className="chatbot-toggle" onClick={() => setShowBot(true)}>
          <img src={image} alt="Astrology Bot" />
        </button>
      ) : (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Astrology Assistant</h3>
            <button onClick={() => setShowBot(false)}>×</button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="message bot">Thinking...</div>}
          </div>
          
          <form onSubmit={handleSend} className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about your horoscope..."
              disabled={loading}
            />
            <button type="submit" disabled={loading}>Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;