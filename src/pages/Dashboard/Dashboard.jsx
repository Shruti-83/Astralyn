import React from 'react'
import './Dashboard.css'
import Chatbot from '../../components/Chatbot'
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import user from '../../assets/user.jpg'
import { useNavigate } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import AstrologyGuide from '../../components/AstrologyGuide';
import DailyHoroscope from '../../components/DailyHoroscope';
import ZodiacSigns from '../../components/ZodiacSigns';
import Compatibility from '../../components/Compatibility';
import BirthChart from '../../components/BirthChart';
import MoonPhases from '../../components/MoonPhases';
import { useUser } from '../../context/UserContext';
import userProfile from '../../assets/userProfile.png'
const Dashboard = () => {
  
    const navigate = useNavigate();
    const { currentUser } = useUser();
    const [profileImage, setProfileImage] = useState(user);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/')

        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

   
    const formattedDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className='astro-container'>
            <div className="astro">
                <header className="astro-header">
                    <h1>Astralyn</h1>
                    <div className='pro-info'>
                        <h1>{formattedDate}</h1>
                        <div className="profile" >
                            <img src={user} alt="Profile"  />
                        </div>
                    </div>

                </header>

                <div className="astro-body">
                    <div className="astro-content">
                        <div className="user">
                            <img src={user} alt="User Image" />
                            <p>{currentUser?.username || 'User'}</p>
                        </div>
                        <nav className="categories">
                            <h1 className="nav-heading">Categories</h1>
                            <div className="nav-links">
                                <div className="navbar-brand">
                                 <Link to="/dashboard" className='nav-link'>Astrology Guide</Link>
                                </div>

                               
                                <Link to="/dashboard/daily-horoscope" className='nav-link'>Daily Horoscope</Link>
                                <Link to="/dashboard/zodiac-signs" className='nav-link'>Zodiac Signs</Link>
                                <Link to="/dashboard/compatibility" className='nav-link'>Compatibility</Link>
                                <Link to="/dashboard/birth-chart" className='nav-link'>Birth Chart</Link>
                                <Link to="/dashboard/moon-phases" className='nav-link'>Moon Phases</Link>
                                <div className='set-log'>
                                    <button className='logout-btn' onClick={handleLogout}>LogOut</button>
                                </div>
                            </div>
                        </nav>


                    </div>
                    <div className="astro-section">
                    <Routes>
                            <Route index element={<AstrologyGuide />} />
                            <Route path="daily-horoscope" element={<DailyHoroscope />} />
                            <Route path="zodiac-signs" element={<ZodiacSigns />} />
                            <Route path="compatibility" element={<Compatibility />} />
                            <Route path="birth-chart" element={<BirthChart />} />
                            <Route path="moon-phases" element={<MoonPhases />} />
                        </Routes>

                    </div>
                    <div className="chatbot">

                        <Chatbot userId={currentUser?.uid} />

                    </div>
                </div>



            </div>
        </div>

    )
}

export default Dashboard
