import React from 'react'
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import AtomicOrbitalLoader from '../../components/AtomicOrbitalLoader';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

   
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      alert('something is wrong');
      
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='container'>
    { loading ? (
      <AtomicOrbitalLoader/>
    ):(
        <form onSubmit={handleSubmit} className="register-box">
            <div className="register-heading">
              <h3>Login User</h3>
            </div>
           
           

             <div className="form-content">
              <h3>Email Name</h3>
              <input onChange={(e)=> setEmail(e.target.value)} name='email' className='input-box' type="text" placeholder='enter your name'/>
             </div>

             <div className="form-content">
              <h3>Password</h3>
              <input onChange={(e)=> setPassword(e.target.value)} name='password' className='input-box' type="text" placeholder='enter your name'/>
             </div>
             <div className="login-register">
               <button type='submit' className='btn'>Login</button>
               <button type='button' onClick={()=> navigate('/signUp')}  className='login-btn'>SignUp</button>
             </div>
              

            
       </form>
    )
    }
     
  </div>
  )
}

export default Login