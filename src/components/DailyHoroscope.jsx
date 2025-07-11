import React, { useState } from 'react'
import './DailyHoroscope.css';

const horoscopeData = {
    aries: {
      yesterday: {
        date: "July 14, 2024",
        description: "Yesterday brought challenges that tested your patience and determination. You handled them with remarkable grace and resilience, proving once again that your fiery spirit can overcome any obstacle. The universe was testing your leadership abilities, and you rose to the occasion beautifully. Your natural courage shone through even in difficult moments, inspiring those around you to push through their own challenges.",
        love: "💖 Past conversations still resonate deeply within your heart. The words exchanged yesterday carry more weight than you initially realized. Someone from your past may be thinking of you, and the emotional connection you shared continues to grow stronger. Trust your instincts about rekindling old flames or deepening existing bonds.",
        career: "💼 Previous efforts are being recognized by those in positions of authority. Your hard work and dedication haven't gone unnoticed, and you may receive unexpected praise or opportunities for advancement. The seeds you planted yesterday are beginning to sprout, bringing new possibilities for growth and success."
      },
      today: {
        date: "July 15, 2024",
        description: "Today brings an incredible surge of fiery energy that propels you forward with unstoppable momentum! The stars align perfectly to amplify your natural leadership qualities and pioneering spirit. Take bold actions that align with your deepest passions, but remember to channel your enthusiasm wisely to avoid impulsive decisions. Your charisma is at its peak, making this the perfect time to inspire others and pursue your most ambitious goals.",
        love: "💖 Sparks fly with unexpected encounters that could change your romantic landscape forever. Your magnetic energy attracts attention from all directions, and someone special may be drawn to your confident aura. Be open to spontaneous connections and trust that the universe is orchestrating beautiful romantic opportunities just for you.",
        career: "💼 Leadership opportunities arise naturally as your commanding presence becomes impossible to ignore. Your innovative ideas and bold approach to challenges earn you respect and admiration from colleagues and superiors alike. This is the perfect day to take charge of important projects and showcase your natural leadership abilities."
      },
      tomorrow: {
        date: "July 16, 2024",
        description: "Tomorrow promises exciting new beginnings that align perfectly with your adventurous spirit and desire for fresh challenges. The cosmic energy supports your natural inclination to pioneer new paths and explore uncharted territory. Trust your instincts completely, as they are sharper than ever and will guide you toward opportunities that match your ambitious nature perfectly.",
        love: "💖 New connections form naturally as your authentic energy attracts like-minded souls who appreciate your bold and honest approach to relationships. Be open to unexpected romantic developments that could lead to meaningful partnerships built on mutual respect and shared passion for life's adventures.",
        career: "💼 Innovation leads to success as your creative thinking and willingness to take calculated risks pay off in remarkable ways. Your ability to think outside the box and implement bold solutions earns you recognition and opens doors to exciting new professional opportunities."
      }
    },
    taurus: {
      yesterday: {
        date: "July 14, 2024",
        description: "Yesterday was a day of deep reflection and thoughtful planning that allowed you to tap into your natural wisdom and practical approach to life. You made decisions with careful consideration, weighing all options before committing to a course of action. Your patience and methodical thinking served you well, creating a solid foundation for future success. The universe rewarded your steady approach with moments of clarity and insight.",
        love: "💖 Deep conversations strengthened the bonds in your most important relationships, creating a sense of security and trust that will continue to grow. Your natural loyalty and commitment to those you care about was evident, and your loved ones felt truly valued and appreciated in your presence.",
        career: "💼 Strategic thinking paid off as your careful planning and attention to detail resulted in positive outcomes that exceeded expectations. Your reliable nature and consistent work ethic were recognized, setting the stage for future opportunities and advancement in your professional life."
      },
      today: {
        date: "July 15, 2024",
        description: "Steady progress is your greatest strength today, as the earth element amplifies your natural ability to build lasting foundations and achieve sustainable success. Stick to your established routines and trusted methods, as they will bring you the most reliable results. Your practical wisdom and patient approach to challenges will serve you well, allowing you to make steady progress toward your long-term goals.",
        love: "💖 Heartfelt conversations deepen bonds with those who matter most, creating moments of genuine connection and understanding. Your natural warmth and sincerity shine through, making others feel safe and valued in your presence. Express your feelings openly and honestly.",
        career: "💼 Focus and dedication bring rewards as your consistent efforts and reliable work ethic are recognized and appreciated. Your attention to detail and commitment to quality work sets you apart and creates opportunities for advancement and increased responsibility."
      },
      tomorrow: {
        date: "July 16, 2024",
        description: "Tomorrow brings a beautiful sense of stability and growth that aligns perfectly with your earth sign nature. Your patience and persistence will be rewarded as the seeds you've been carefully nurturing begin to bloom. Trust in your ability to create lasting change through steady, consistent effort, and know that your methodical approach to life is your greatest strength.",
        love: "💖 Long-term relationships flourish as your natural commitment and loyalty create deeper, more meaningful connections. Your steady presence and reliable nature make you an ideal partner, and those who appreciate stability will be drawn to your calming energy and genuine care for others.",
        career: "💼 Consistent effort leads to advancement as your reliable work ethic and attention to detail earn you recognition and respect. Your ability to build solid foundations and maintain high standards creates opportunities for long-term success and professional growth."
      }
    },
    gemini: {
      yesterday: {
        date: "July 14, 2024",
        description: "Yesterday was filled with dynamic social interactions and exciting learning opportunities that perfectly suited your curious and adaptable nature. Your natural communication skills were in high demand, and you found yourself connecting with people from all walks of life. The exchange of ideas and information was particularly stimulating, leaving you feeling energized and intellectually fulfilled. Your versatility and quick thinking helped you navigate various social situations with ease.",
        love: "💖 Communication opened new doors in your romantic life as your natural charm and wit created opportunities for meaningful connections. Your ability to adapt to different personalities and find common ground made you particularly attractive to potential partners who appreciate intellectual stimulation and lively conversation.",
        career: "💼 Networking proved incredibly valuable as your natural ability to connect with diverse groups of people created unexpected opportunities and valuable professional relationships. Your communication skills and adaptability were recognized as assets that can contribute significantly to team success and project outcomes."
      },
      today: {
        date: "July 15, 2024",
        description: "Communication is absolutely key today, as the air element amplifies your natural gift for expression and connection. Express yourself clearly and confidently, as your words carry more weight and influence than usual. Your intellectual curiosity and ability to see multiple perspectives make you an invaluable voice in any discussion or decision-making process.",
        love: "💖 Flirtation turns into something more meaningful as your natural charm and wit create deeper connections with those who appreciate your intellectual approach to romance. Your ability to engage in stimulating conversations and adapt to different communication styles makes you particularly attractive to potential partners.",
        career: "💼 Collaborations open new doors as your natural ability to bridge different perspectives and communicate effectively makes you an essential team member. Your innovative thinking and adaptability create opportunities for creative problem-solving and successful project outcomes."
      },
      tomorrow: {
        date: "July 16, 2024",
        description: "Tomorrow brings intellectual stimulation and exciting new ideas to explore that will satisfy your naturally curious mind. Your mental agility and ability to process information quickly will be particularly sharp, making this an excellent time for learning, research, and creative thinking. Trust your instincts about which ideas to pursue.",
        love: "💖 Mental connection deepens romance as intellectual compatibility becomes increasingly important in your relationships. Your natural curiosity and ability to engage in stimulating conversations create opportunities for meaningful connections with partners who appreciate your quick wit and diverse interests.",
        career: "💼 Creative solutions emerge as your natural ability to think outside the box and see multiple perspectives leads to innovative approaches to challenges. Your communication skills and adaptability make you an invaluable asset in any professional setting."
      }
    },
    cancer: {
      yesterday: {
        date: "July 14, 2024",
        description: "Yesterday was emotionally intense but ultimately healing, as the moon's influence brought deep feelings to the surface for processing and release. You experienced moments of profound insight and emotional clarity that helped you understand yourself and others on a deeper level. Your natural empathy and intuitive nature were particularly strong, allowing you to navigate emotional waters with wisdom and compassion.",
        love: "💖 Vulnerability brought you closer to those you care about, creating deeper emotional bonds and a greater sense of intimacy. Your natural nurturing instincts and emotional intelligence helped you create safe spaces for authentic connection and meaningful relationship growth.",
        career: "💼 Intuition guided important choices as your natural ability to read between the lines and understand unspoken needs proved invaluable in professional situations. Your emotional intelligence and caring nature were recognized as assets that contribute to positive workplace dynamics."
      },
      today: {
        date: "July 15, 2024",
        description: "Emotional insights guide your day with remarkable clarity, as your natural intuition and emotional intelligence are heightened. Listen carefully to your inner voice, as it carries wisdom that can help you make important decisions and understand the deeper meaning behind events and interactions. Your caring nature and ability to create emotional safety for others will be particularly appreciated.",
        love: "💖 Family and home bring comfort and joy as your natural nurturing instincts create warm, welcoming environments where love can flourish. Your ability to create emotional security and provide unconditional support makes you an ideal partner for those seeking deep, meaningful connections.",
        career: "💼 Intuition helps in tricky decisions as your natural ability to read emotional undercurrents and understand unspoken needs proves invaluable in professional situations. Your caring approach and attention to the human element in business create positive workplace relationships."
      },
      tomorrow: {
        date: "July 16, 2024",
        description: "Tomorrow brings emotional clarity and deeper understanding that will help you navigate relationships and life decisions with greater wisdom and compassion. Your natural empathy and intuitive abilities will be particularly strong, allowing you to connect with others on a profound level and understand the deeper meaning behind events and interactions.",
        love: "💖 Emotional bonds strengthen as your natural ability to create deep, meaningful connections and provide emotional security becomes increasingly important in your relationships. Your caring nature and intuitive understanding of others' needs make you an ideal partner for long-term commitment.",
        career: "💼 Empathy enhances teamwork as your natural ability to understand and support colleagues creates positive workplace dynamics and improves team performance. Your emotional intelligence and caring approach to professional relationships are recognized as valuable assets."
      }
    },
    leo: {
      yesterday: {
        date: "July 14, 2024",
        description: "Yesterday showcased your natural leadership abilities and magnetic personality in ways that left lasting impressions on everyone around you. Your confidence and charisma were particularly strong, drawing people toward you and inspiring them to follow your lead. The universe was highlighting your natural talents for motivating others and creating positive change through your infectious enthusiasm and warm heart.",
        love: "💖 Your charisma attracted attention from all directions, as your natural confidence and warm personality made you irresistible to potential romantic partners. Your generous spirit and natural leadership qualities created opportunities for meaningful connections with those who appreciate your bold approach to love and life.",
        career: "💼 Recognition came your way as your natural leadership abilities and confident approach to challenges were noticed by those in positions of authority. Your ability to inspire and motivate others was recognized as a valuable asset that can drive team success and project outcomes."
      },
      today: {
        date: "July 15, 2024",
        description: "You're in the spotlight today, and it's time to own it completely! Your natural confidence and magnetic personality are amplified by the sun's energy, making you impossible to ignore. This is your moment to shine, inspire others, and pursue your most ambitious goals with the full force of your passionate nature. Your leadership qualities and warm heart will be particularly appreciated.",
        love: "💖 Passionate moments await as your natural charisma and confident energy attract romantic attention from those who appreciate your bold approach to love. Your generous spirit and natural leadership qualities create opportunities for deep, passionate connections that could lead to lasting relationships.",
        career: "💼 A bold move impresses superiors as your natural confidence and leadership abilities create opportunities for advancement and recognition. Your ability to inspire others and take charge of important projects earns you respect and opens doors to new professional opportunities."
      },
      tomorrow: {
        date: "July 16, 2024",
        description: "Tomorrow brings creative inspiration and artistic expression that will allow you to showcase your natural talents and unique perspective. Your imagination and passion for self-expression will be particularly strong, making this an excellent time to pursue creative projects, artistic endeavors, or innovative approaches to challenges. Trust your creative instincts.",
        love: "💖 Romance takes center stage as your natural passion and creative approach to relationships create opportunities for deep, meaningful connections. Your generous spirit and natural leadership qualities make you an ideal partner for those seeking passionate, committed relationships.",
        career: "💼 Innovation leads to breakthroughs as your natural creativity and confident approach to challenges create opportunities for professional advancement and recognition. Your ability to think outside the box and inspire others makes you a valuable asset in any professional setting."
      }
    },
    virgo: {
      yesterday: {
        date: "July 14, 2024",
        description: "Yesterday required your natural attention to detail and careful planning, and you rose to the occasion with your characteristic precision and dedication. Your analytical mind and practical approach to problem-solving were particularly valuable, helping you navigate challenges with efficiency and grace. The universe was testing your organizational skills, and you proved that your methodical nature is a true strength.",
        love: "💖 Practical gestures showed care in ways that spoke volumes to those who appreciate your thoughtful approach to relationships. Your attention to detail and willingness to go the extra mile for those you care about created moments of genuine appreciation and deeper emotional connections.",
        career: "💼 Organization skills shone as your natural ability to create order from chaos and implement efficient systems was recognized and appreciated. Your attention to detail and practical approach to problem-solving proved invaluable in professional situations."
      },
      today: {
        date: "July 15, 2024",
        description: "Pay attention to details today, as your natural precision and analytical abilities are particularly sharp. A small tweak or adjustment could bring significant improvements to your projects and relationships. Your practical wisdom and methodical approach to challenges will serve you well, allowing you to create order and efficiency in all areas of your life.",
        love: "💖 Stability in relationships grows as your natural reliability and thoughtful approach to partnerships create deeper, more meaningful connections. Your attention to detail and willingness to work through challenges with patience and care make you an ideal partner for long-term commitment.",
        career: "💼 Perfect day to organize and plan as your natural organizational skills and attention to detail create opportunities for professional advancement and recognition. Your practical approach to problem-solving and ability to create efficient systems are valuable assets in any workplace."
      },
      tomorrow: {
        date: "July 16, 2024",
        description: "Tomorrow brings efficiency and productivity to new heights as your natural organizational abilities and attention to detail create opportunities for significant progress and achievement. Your analytical mind and practical approach to challenges will help you identify and implement improvements that lead to lasting success.",
        love: "💖 Thoughtful actions speak volumes as your natural attention to detail and willingness to go the extra mile for those you care about create deeper emotional connections and stronger relationships. Your practical approach to love and commitment is appreciated by partners who value reliability and genuine care.",
        career: "💼 Systems improvement leads to success as your natural ability to identify inefficiencies and implement practical solutions creates opportunities for professional advancement and recognition. Your attention to detail and organizational skills are valuable assets in any professional setting."
      }
    },
    libra: {
      yesterday: {
        date: "July 14, 2024",
        description: "Yesterday was about finding balance in all areas of life, and your natural diplomatic skills and sense of fairness were particularly valuable. You navigated complex situations with grace and wisdom, helping others find common ground and peaceful resolutions. Your natural ability to see multiple perspectives and create harmony was appreciated by everyone around you.",
        love: "💖 Harmony prevailed in relationships as your natural diplomatic skills and desire for fairness created peaceful, balanced connections with those you care about. Your ability to see multiple perspectives and find common ground made you an ideal partner for meaningful, long-term relationships.",
        career: "💼 Diplomacy resolved conflicts as your natural ability to mediate disputes and find fair solutions was recognized and appreciated. Your diplomatic skills and commitment to creating harmonious work environments proved valuable in professional situations."
      },
      today: {
        date: "July 15, 2024",
        description: "Balance is your mantra today, as the air element amplifies your natural desire for harmony and fairness in all interactions. Seek equilibrium in your relationships, work, and personal life, and trust your instincts about what feels right and just. Your natural diplomatic skills and ability to see multiple perspectives will be particularly valuable.",
        love: "💖 Charming vibes attract the right attention as your natural grace and diplomatic approach to relationships create opportunities for meaningful connections with those who appreciate your balanced perspective and commitment to fairness. Your natural charm and desire for harmony make you particularly attractive.",
        career: "💼 Diplomacy wins today as your natural ability to mediate conflicts and find fair solutions creates opportunities for professional advancement and recognition. Your commitment to creating harmonious work environments and your diplomatic skills are valuable assets in any professional setting."
      },
      tomorrow: {
        date: "July 16, 2024",
        description: "Tomorrow brings perfect equilibrium and peaceful resolutions that align beautifully with your natural desire for balance and harmony. Your diplomatic skills and sense of fairness will be particularly strong, helping you navigate complex situations with grace and wisdom. Trust your instincts about what feels right and just.",
        love: "💖 Fairness strengthens partnerships as your natural commitment to equality and balanced relationships creates deeper, more meaningful connections. Your diplomatic approach to love and your desire for harmony make you an ideal partner for long-term, committed relationships.",
        career: "💼 Mediation skills are valued as your natural ability to resolve conflicts and create harmonious work environments earns you recognition and respect. Your diplomatic approach to professional relationships and your commitment to fairness are valuable assets in any workplace."
      }
    },
    scorpio: {
      yesterday: {
        date: "July 14, 2024",
        description: "Yesterday revealed hidden truths and deeper meanings that helped you understand yourself and others on a profound level. Your natural intuition and ability to see beneath the surface were particularly strong, allowing you to uncover important insights that others might miss. The universe was testing your depth and resilience, and you proved that your transformative nature is a true gift.",
        love: "💖 Intense emotions surfaced as your natural depth and passion created opportunities for profound emotional connections and meaningful relationship growth. Your ability to see beneath the surface and understand the deeper meaning of love and commitment was particularly valuable.",
        career: "💼 Research uncovered valuable insights as your natural ability to dig deep and uncover hidden information proved invaluable in professional situations. Your analytical skills and attention to detail created opportunities for significant discoveries and breakthroughs."
      },
      today: {
        date: "July 15, 2024",
        description: "Depth and transformation define your day, as your natural intensity and ability to see beneath the surface are particularly strong. Embrace inner change and trust your instincts about what needs to be transformed in your life. Your natural resilience and ability to navigate complex emotional waters will serve you well.",
        love: "💖 Intense feelings may surface as your natural depth and passion create opportunities for profound emotional connections and meaningful relationship growth. Your ability to see beneath the surface and understand the deeper meaning of love and commitment is particularly valuable today.",
        career: "💼 Secrets revealed could work in your favor as your natural ability to uncover hidden information and understand complex situations creates opportunities for professional advancement and recognition. Your analytical skills and attention to detail are valuable assets."
      },
      tomorrow: {
        date: "July 16, 2024",
        description: "Tomorrow brings powerful transformations and renewed strength that align perfectly with your natural ability to navigate change and emerge stronger. Your natural resilience and depth will be particularly valuable as you face challenges and opportunities for growth. Trust your instincts about what needs to be transformed.",
        love: "💖 Deep connections intensify as your natural ability to create profound emotional bonds and understand the deeper meaning of love and commitment creates opportunities for meaningful, long-term relationships. Your passion and depth are particularly attractive to potential partners.",
        career: "💼 Strategic thinking leads to breakthroughs as your natural ability to analyze complex situations and uncover hidden opportunities creates chances for professional advancement and recognition. Your analytical skills and attention to detail are valuable assets in any professional setting."
      }
    },
    sagittarius: {
      yesterday: {
        date: "July 14, 2024",
        description: "Yesterday was about exploration and expanding your horizons in ways that satisfied your natural curiosity and adventurous spirit. You embraced new experiences and learning opportunities with enthusiasm, and your optimistic outlook helped you see possibilities where others might see obstacles. The universe was encouraging your natural desire for growth and expansion.",
        love: "💖 Adventure brought excitement to your romantic life as your natural enthusiasm and optimistic approach to relationships created opportunities for meaningful connections with those who share your love for exploration and new experiences. Your adventurous spirit was particularly attractive.",
        career: "💼 Learning new skills paid off as your natural curiosity and willingness to embrace new challenges created opportunities for professional growth and advancement. Your optimistic approach to learning and your ability to see opportunities in every situation were valuable assets."
      },
      today: {
        date: "July 15, 2024",
        description: "Adventure is calling today, and your natural enthusiasm and optimistic spirit are perfectly aligned to answer that call. Try something new and expand your vision, as your natural curiosity and willingness to embrace the unknown will lead to exciting discoveries and opportunities. Trust your instincts about which paths to explore.",
        love: "💖 Shared dreams bring you closer to potential partners who appreciate your adventurous spirit and optimistic approach to life. Your natural enthusiasm and willingness to explore new possibilities make you particularly attractive to those who share your love for adventure and growth.",
        career: "💼 Learning something new enhances your career as your natural curiosity and willingness to embrace new challenges create opportunities for professional advancement and recognition. Your optimistic approach to learning and your ability to see opportunities in every situation are valuable assets."
      },
      tomorrow: {
        date: "July 16, 2024",
        description: "Tomorrow brings exciting opportunities and philosophical insights that align perfectly with your natural desire for growth and expansion. Your optimistic outlook and adventurous spirit will help you see possibilities where others might see obstacles, creating opportunities for significant personal and professional growth.",
        love: "💖 Travel plans may form as your natural love for adventure and exploration creates opportunities for romantic connections with those who share your enthusiasm for new experiences and cultural exploration. Your optimistic approach to love and life is particularly attractive.",
        career: "💼 International connections develop as your natural curiosity and willingness to embrace new cultures and perspectives create opportunities for professional advancement and recognition. Your optimistic approach to learning and your ability to see opportunities in every situation are valuable assets."
      }
    },
    capricorn: {
      yesterday: {
        date: "July 14, 2024",
        description: "Yesterday required discipline and long-term thinking, and you rose to the occasion with your characteristic determination and practical wisdom. Your natural ability to plan for the future and work steadily toward your goals was particularly valuable, helping you make progress even in challenging circumstances. The universe was testing your resilience, and you proved that your methodical approach is a true strength.",
        love: "💖 Commitment felt natural as your reliable nature and long-term approach to relationships created opportunities for meaningful connections with those who appreciate your steady presence and genuine care. Your practical approach to love and commitment was particularly valuable.",
        career: "💼 Hard work began to show results as your natural discipline and commitment to long-term goals created opportunities for professional advancement and recognition. Your practical approach to problem-solving and your ability to work steadily toward objectives were valuable assets."
      },
      today: {
        date: "July 15, 2024",
        description: "Discipline pays off today, as your natural determination and practical approach to life are particularly strong. Keep your focus on your long-term goals and trust that your steady, methodical approach will lead to success. Your natural ability to plan for the future and work consistently toward your objectives will serve you well.",
        love: "💖 Commitment feels more comfortable as your natural reliability and long-term approach to relationships create opportunities for meaningful connections with those who appreciate your steady presence and genuine care. Your practical approach to love and commitment is particularly valuable.",
        career: "💼 Long-term goals get a boost as your natural discipline and commitment to steady progress create opportunities for professional advancement and recognition. Your practical approach to problem-solving and your ability to work consistently toward objectives are valuable assets."
      },
      tomorrow: {
        date: "July 16, 2024",
        description: "Tomorrow brings achievement and recognition for your efforts as your natural discipline and long-term thinking create opportunities for significant success and advancement. Your practical wisdom and methodical approach to challenges will help you reach important milestones and earn the respect you deserve.",
        love: "💖 Stability strengthens relationships as your natural reliability and long-term approach to partnerships create deeper, more meaningful connections with those who appreciate your steady presence and genuine care. Your practical approach to love and commitment is particularly valuable.",
        career: "💼 Leadership opportunities arise as your natural discipline and commitment to excellence create opportunities for professional advancement and recognition. Your practical approach to problem-solving and your ability to work consistently toward objectives are valuable assets in any professional setting."
      }
    },
    aquarius: {
      yesterday: {
        date: "July 14, 2024",
        description: "Yesterday brought innovative ideas and unconventional thinking that set you apart from the crowd and created opportunities for significant breakthroughs. Your natural creativity and willingness to think outside the box were particularly valuable, helping you see solutions and possibilities that others might miss. The universe was encouraging your unique perspective and humanitarian instincts.",
        love: "💖 Unique connections formed as your natural individuality and unconventional approach to relationships created opportunities for meaningful connections with those who appreciate your authentic self and innovative thinking. Your humanitarian instincts and desire for genuine connection were particularly valuable.",
        career: "💼 Creative solutions emerged as your natural ability to think outside the box and approach problems from unique angles created opportunities for professional advancement and recognition. Your innovative thinking and willingness to challenge conventional wisdom were valuable assets."
      },
      today: {
        date: "July 15, 2024",
        description: "Innovation is your superpower today, as your natural creativity and willingness to think outside the box are particularly strong. Trust your unique perspective and unconventional ideas, as they have the potential to create significant breakthroughs and positive change. Your humanitarian instincts and desire to make the world a better place will be particularly valuable.",
        love: "💖 Surprising connections bloom as your natural individuality and unconventional approach to relationships create opportunities for meaningful connections with those who appreciate your authentic self and innovative thinking. Your humanitarian instincts and desire for genuine connection are particularly valuable.",
        career: "💼 A unique idea earns recognition as your natural ability to think outside the box and approach problems from innovative angles creates opportunities for professional advancement and recognition. Your creative thinking and willingness to challenge conventional wisdom are valuable assets."
      },
      tomorrow: {
        date: "July 16, 2024",
        description: "Tomorrow brings revolutionary ideas and technological breakthroughs that align perfectly with your natural creativity and innovative thinking. Your unique perspective and willingness to challenge conventional wisdom will help you see opportunities and solutions that others might miss, creating chances for significant personal and professional advancement.",
        love: "💖 Intellectual attraction grows as your natural individuality and unconventional approach to relationships create opportunities for meaningful connections with those who appreciate your authentic self and innovative thinking. Your humanitarian instincts and desire for genuine connection are particularly valuable.",
        career: "💼 Innovation leads to advancement as your natural ability to think outside the box and approach problems from unique angles creates opportunities for professional growth and recognition. Your creative thinking and willingness to challenge conventional wisdom are valuable assets in any professional setting."
      }
    },
    pisces: {
      yesterday: {
        date: "July 14, 2024",
        description: "Yesterday was deeply intuitive and spiritually meaningful, as your natural connection to the unseen world and your compassionate nature were particularly strong. You experienced moments of profound insight and spiritual clarity that helped you understand yourself and others on a deeper level. The universe was encouraging your natural gifts for healing and artistic expression.",
        love: "💖 Dreams revealed hidden feelings as your natural intuition and spiritual sensitivity helped you understand the deeper meaning of your romantic connections and emotional experiences. Your compassionate nature and ability to create deep emotional bonds were particularly valuable.",
        career: "💼 Creativity flowed naturally as your natural artistic abilities and intuitive understanding of complex situations created opportunities for professional advancement and recognition. Your compassionate approach to work and your ability to see the bigger picture were valuable assets."
      },
      today: {
        date: "July 15, 2024",
        description: "Dream big but stay grounded today, as your natural imagination and spiritual sensitivity are particularly strong. Balance your creative vision with practical action, and trust your intuition about which dreams to pursue and which to let go. Your natural compassion and artistic abilities will be particularly valuable.",
        love: "💖 Romantic gestures mean a lot as your natural sensitivity and compassionate nature create opportunities for deep, meaningful connections with those who appreciate your emotional depth and artistic soul. Your ability to understand and support others' emotional needs is particularly valuable.",
        career: "💼 Creativity helps solve complex issues as your natural artistic abilities and intuitive understanding of complex situations create opportunities for professional advancement and recognition. Your compassionate approach to work and your ability to see the bigger picture are valuable assets."
      },
      tomorrow: {
        date: "July 16, 2024",
        description: "Tomorrow brings spiritual insights and artistic inspiration that align perfectly with your natural connection to the unseen world and your creative abilities. Your intuition and compassionate nature will be particularly strong, helping you understand yourself and others on a deeper level and create meaningful connections.",
        love: "💖 Soul connections deepen as your natural spiritual sensitivity and compassionate nature create opportunities for profound emotional bonds and meaningful relationships. Your ability to understand and support others' emotional needs is particularly valuable in romantic partnerships.",
        career: "💼 Intuition guides important decisions as your natural spiritual sensitivity and artistic abilities create opportunities for professional advancement and recognition. Your compassionate approach to work and your ability to see the bigger picture are valuable assets in any professional setting."
      }
    }
  };

// Function to determine zodiac sign based on date of birth
const getZodiacSign = (dateOfBirth) => {
  if (!dateOfBirth) return null;
  
  const date = new Date(dateOfBirth);
  const month = date.getMonth() + 1; // getMonth() returns 0-11
  const day = date.getDate();
  
  // Zodiac sign date ranges
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'aries';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'taurus';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'gemini';
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'cancer';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'leo';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'virgo';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'libra';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'scorpio';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'sagittarius';
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'capricorn';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'aquarius';
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'pisces';
  
  return null;
};
  
const DailyHoroscope = ({ zodiacSign, dateOfBirth }) => {
  const [selectedDate, setSelectedDate] = useState('today');
  
  // Determine zodiac sign from date of birth if provided, otherwise use zodiacSign prop
  let signKey;
  
  if (dateOfBirth) {
    signKey = getZodiacSign(dateOfBirth);
  } else {
    signKey = zodiacSign ? zodiacSign.toLowerCase() : 'aries';
  }
  
  const data = horoscopeData[signKey]?.[selectedDate];

  return (
    <div className='dailyHoroscope-content'>
      <h2 className='dailyHoroscope-heading'>🔮 Your Daily Horoscope</h2>
      
      {signKey && horoscopeData[signKey] ? (
        <div>
         <div className="userInfo">
           <div className="dateOfBirth">
             <h3>{signKey.toUpperCase()} - <span>{data.date}</span></h3>
          {dateOfBirth && (
            <p><strong>Based on your birth date:</strong> {new Date(dateOfBirth).toLocaleDateString()}</p>
          )}
          </div>
           
          <div className='select-date' style={{ marginBottom: '20px' }}>
            <label style={{ marginRight: '10px' }}>Select Date:</label>
            <select 
              value={selectedDate} 
              onChange={(e) => setSelectedDate(e.target.value)}
              style={{ padding: '5px', marginRight: '10px' }}
            >
              <option value="yesterday">Yesterday</option>
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
            </select>
          </div>
         </div>
         
          
        <div className='dailyHoroscope-content'>
           <p className='description'><strong>Description:</strong> {data.description}</p>
          <p className='love'><strong>Love:</strong> {data.love}</p>
          <p className='career'><strong>Career:</strong> {data.career}</p>
        </div>
        </div>
      ) : signKey && !horoscopeData[signKey] ? (
        <div>
          <h3>Horoscope Not Found</h3>
          <p>Sorry, we don't have a horoscope for "{zodiacSign}".</p>
        </div>
      ) : (
        <div>
          <p>Please provide your zodiac sign or date of birth to see your daily horoscope.</p>
        </div>
      )}
    </div>
  )
}

export default DailyHoroscope