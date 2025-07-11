import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth,db} from '../../firebase';
import React from 'react'
import { doc,setDoc } from 'firebase/firestore';
import './Register.css'
import AtomicOrbitalLoader from '../../components/AtomicOrbitalLoader'
const Register = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  


  const handleSubmit =async (e) =>{
    e.preventDefault();
    setLoading(true);
    

    try{
      await new Promise(resolve=> setTimeout(resolve,2000));
     await createUserWithEmailAndPassword(auth,email,password)
     
    
     
      navigate('/birth-details');

    }catch(error){
      if (error.code === "auth/email-already-in-use") {
        alert("User already registered with this email.");
      } else {
        alert("Registration failed: " + error.message);
      }
    }finally{
      setLoading(false);
    }

  }
  return (
    <div className='container'>
      { loading ? (
        <AtomicOrbitalLoader/>
      ):(
          <form onSubmit={handleSubmit} className="register-box">
              <div className="register-heading">
                <h3>Registration Form</h3>
              </div>
               <div className="form-content">
                <h3>User Name</h3>
                <input onChange={(e)=> setUsername(e.target.value)} name='username' className='input-box ' type="text" placeholder='enter your name'/>
               </div>

               <div className="form-content">
                <h3>Email</h3>
                <input onChange={(e)=> setEmail(e.target.value)} name='email' className='input-box' type="email" placeholder='enter your email'/>
               </div>

               <div className="form-content">
                <h3>Password</h3>
                <input onChange={(e)=> setPassword(e.target.value)} name='password' className='input-box' type="password" placeholder='enter your password'/>
               </div>
               <div className="login-register">
                 <button type='submit' className='btn'>Register</button>
                 <button type='button' onClick={()=> navigate('/login')}  className='login-btn'>Login</button>
               </div>
                

              
         </form>
      )
      }
       
    </div>
  )
}

export default Register