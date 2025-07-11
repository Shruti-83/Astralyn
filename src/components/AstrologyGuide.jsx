import './AstrologyGuide.css'
import aries from '../assets/aries.png';
import taurus from '../assets/taurus.png'
import gemini from '../assets/gemini.png'
import cancer from '../assets/cancer.png'
import leo from '../assets/leo.png'
import virgo from '../assets/virgo.png'
import libra from '../assets/libra.png'
import scorpio from '../assets/scorpio.png'
import sagittarius from '../assets/sagittarius.png'
import capricorn from '../assets/capricorn.png'
import aquarius from '../assets/aquarius.png'
import pisces from '../assets/pisces.png'




const AstrologyGuide = () => {
    return (
        <div className="guide-content">
            <div className="intro">
                <div className="intro-heading">Introduction to Astrology</div>
                <p>Astrology is the ancient study of how celestial bodies influence human life and personality. By analyzing the positions of planets, stars, and zodiac signs at the time of birth, astrologers provide insights into personality traits, relationships, career paths, and future trends.</p>

            </div>
            <div className="zodiac-signs">
                <div className="div1 box">

                     <div className="div-img">
                        <img src={aries} alt="" />
                     </div>
                    <div className="div-heading">
                        Aries Dates
                    </div>

                    <div className="div-content">
                        Mar 21 - Apr 19
                       </div>
                       <div className="div-heading">
                       Aries Traits
                    </div>

                    <div className="div-content">
                        Eager, dynamic, quick and competitive
                       </div>
                    <a href="https://www.horoscope.com/zodiac-signs/aries">Learn More</a>


                       
                    </div>
                    <div className="div2 box">

<div className="div-img">
   <img src={taurus} alt="" />
</div>
<div className="div-heading">
   Taurus Dates
</div>

<div className="div-content">
   Apr 20 - May 20
  </div>
  <div className="div-heading">
  Taurus Traits
</div>

<div className="div-content">
   Strong, dependable , sensual and creative
  </div>
<a href="https://www.horoscope.com/zodiac-signs/taurus">Learn More</a>


  
</div>
<div className="div3 box">

<div className="div-img">
   <img src={gemini} alt="" />
</div>
<div className="div-heading">
   Gemini Dates
</div>

<div className="div-content">
  May 21 - june 20
  </div>
  <div className="div-heading">
  Gemini Traits
</div>

<div className="div-content">
  Versatile ,expressive ,curious and kind
  </div>
<a href="https://www.horoscope.com/zodiac-signs/gemini">Learn More</a>


  
</div>
<div className="div4 box">

<div className="div-img">
   <img src={cancer} alt="" />
</div>
<div className="div-heading">
   Cancer Dates
</div>

<div className="div-content">
  june 21 - Jul 22
  </div>
  <div className="div-heading">
 Cancer Traits
</div>

<div className="div-content">
  Intuitive , sentimental, compassionate and protective
  </div>
<a href="https://www.horoscope.com/zodiac-signs/cancer">Learn More</a>


  
</div>
<div className="div5 box">

<div className="div-img">
   <img src={leo} alt="" />
</div>
<div className="div-heading">
   Leo Dates
</div>

<div className="div-content">
   Jul 23-Aug 22
  </div>
  <div className="div-heading">
 Leo Traits
</div>

<div className="div-content">
 Dramatic, outgoing, fiery and self-assured
  </div>
<a href="https://www.horoscope.com/zodiac-signs/leo">Learn More</a>


  
</div>
<div className="div6 box">

<div className="div-img">
   <img src={virgo} alt="" />
</div>
<div className="div-heading">
   Virgo Dates
</div>

<div className="div-content">
  Aug23-Sep22
  </div>
  <div className="div-heading">
 Virgo Traits
</div>

<div className="div-content">
  Practical,loyal,gental and analytical
  </div>
<a href="https://www.horoscope.com/zodiac-signs/virgo">Learn More</a>


  
</div>
<div className="div7 box">

<div className="div-img">
   <img src={libra} alt="" />
</div>
<div className="div-heading">
   Libra Dates
</div>

<div className="div-content">
 Sep 23-Oct 22
  </div>
  <div className="div-heading">
Libra Traits
</div>

<div className="div-content">
 Social, fair-minded, diplomatic and gracious
  </div>
<a href="https://www.horoscope.com/zodiac-signs/libra">Learn More</a>


  
</div>
<div className="div8 box">

<div className="div-img">
   <img src={scorpio} alt="" />
</div>
<div className="div-heading">
  Scorpio Dates
</div>

<div className="div-content">
   Oct 23-Nov 21
  </div>
  <div className="div-heading">
 Scorpio Traits
</div>

<div className="div-content">
  Passionate, stubborn, resourceful and brave
  </div>
<a href="https://www.horoscope.com/zodiac-signs/scorpio">Learn More</a>


  
</div>
<div className="div9 box">

<div className="div-img">
   <img src={sagittarius} alt="" />
</div>
<div className="div-heading">
   Sagittarius Dates
</div>

<div className="div-content">
 Nov 22-Dec 21
  </div>
  <div className="div-heading">
Sagittarius Traits
</div>

<div className="div-content">
  Extroverted, optimistic, funny and generous
  </div>
<a href="https://www.horoscope.com/zodiac-signs/sagittarius">Learn More</a>


  
</div>
<div className="div10 box">

<div className="div-img">
   <img src={capricorn} alt="" />
</div>
<div className="div-heading">
   Capricorn Dates
</div>

<div className="div-content">
 Dec 22-Jan 19
  </div>
  <div className="div-heading">
 Capricorn Traits
</div>

<div className="div-content">
 Serious, independent, disciplaned and tenacious
  </div>
<a href="https://www.horoscope.com/zodiac-signs/capricorn">Learn More</a>


  
</div>
<div className="div11 box">

<div className="div-img">
   <img src={aquarius} alt="" />
</div>
<div className="div-heading">
   Aquarius Dates
</div>

<div className="div-content">
Jan 20- Feb 18
  </div>
  <div className="div-heading">
Aquarius Traits
</div>

<div className="div-content">
  Deep, imaginative, original and uncompromising
  </div>
<a href="https://www.horoscope.com/zodiac-signs/aquarius">Learn More</a>


  
</div>
<div className="div12 box">

<div className="div-img">
   <img src={pisces} alt="" />
</div>
<div className="div-heading">
   Pisces Dates
</div>

<div className="div-content">
Feb 19-March 20
  </div>
  <div className="div-heading">
Pisces Traits
</div>

<div className="div-content">
Affectionate, empathetic, wise and artistic
  </div>
<a href="https://www.horoscope.com/zodiac-signs/pisces">Learn More</a>


  
</div>


                </div>
              
        </div>
    );
};
export default AstrologyGuide;