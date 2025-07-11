import React from 'react'
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useState } from 'react';
import './BirthDetails.css'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import AtomicOrbitalLoader from '../../components/AtomicOrbitalLoader';

const calculateZodiacSign = (birthDate) => {
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();
  
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini';
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
  return 'Pisces';
};



const BirthDetails = () => {

  const { currentUser } = useUser();
  const navigate = useNavigate();
  const [birthData, setBirthData] = useState({
    birthDate: '',
    birthTime: '00:00',
    birthPlace: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!birthData.birthDate){
      setError('Birth date is required');
      return;
    }
    
    if(!birthData.birthPlace || birthData.birthPlace.trim().length < 2){
      setError('Birth place is required and must be at least 2 characters long');
      return;
    }
 
    setLoading(true);
    try {
      // updateDoc is a Firebase Firestore function that updates specific fields in a document
      // Parameters:
      // 1. doc(db, "collection", "documentId") - creates a document reference
      // 2. { field1: value1, field2: value2 } - object containing fields to update
      // 
      // In this case, we're updating the "users" collection document with ID currentUser.uid
      // We're adding/updating the birthDetails field with the user's birth information
      await updateDoc(doc(db, "users", currentUser.uid), {
        birthDetails: {
          ...birthData,
          zodiacSign: calculateZodiacSign(new Date(birthData.birthDate))
        },
       
      });
      navigate('/dashboard');
    } catch (error) {
      setError('Failed to save details: ' + error.message);
    }
    finally{
      setLoading(false);
    }
  };
  console.log('Rendering BirthDetails:', {
    currentUser,
    birthData,
   
    
  });


  return (
    <div className="birth-detail-container">

      <div className="birth-detail-box">
        <form onSubmit={handleSubmit}>
          <h3>Fill the required Form</h3>
          {error && <div className="error-message">{error}</div>}
          <label>
            Birth Date*
            <input className='birth-date' type="date"
              max={new Date().toISOString().split('T')[0]}
              onChange={(e) => setBirthData({...birthData, birthDate: e.target.value})}
              required />
          </label>
          <label>
          Birth Time
          <input className='birth-time'
            type="time"
            onChange={(e) => setBirthData({...birthData, birthTime: e.target.value})}
          />
        </label>
        <label>
          Birth Place*
          <input
          className='birth-place'
            type="text"
            required
            placeholder="City, Country"
            onChange={(e) => setBirthData({...birthData, birthPlace: e.target.value})}
          />
        </label>
        <button 
            className='submit-btn' 
            type='submit'
            disabled={loading}
          >
            {loading ? (
                <AtomicOrbitalLoader size="small" />
            ) : (
                'Submit'
            )}
           
          </button>
        </form>
      </div>
     

    </div>
  )
}

export default BirthDetails