import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';


const Modal = ({isOpen, onClose}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '', general: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email and password are empty
    if (!email || !password) {
      setErrors({ email: !email ? 'Please enter your email' : '', password: !password ? 'Please enter your password' : '', /* general: 'Please enter details'  */});
      return;
    }

    // Validate email and password
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }

    if (password.length < 6) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password must be at least 6 characters long' }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }

    if (isValid) {
      // Simulate a successful login
      setIsLoggedIn(true);
      

      // Clear form values
      setEmail('');
      setPassword('');

      /* setSuccessMessage('You Successfully login '); */
      alert('You have successfully login! WELCOME :)');

      window.location.href = '/';

      // Display success message for a few seconds
     /*  setTimeout(() => {
        setIsLoggedIn(false);
      }, 2000); */
      
    }
  };
  
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
      <div className='modal-container'>
        <div className='bg-indigo-700 text-center p-5 lg:w-[500px] rounded shadow-md'>
          {/* modal content */}
          <h2 className='text-xl font-semibold  mt-6 mb-5 uppercase'>Please Login Here!</h2>
          {/* General Error Message */}
            {errors.general && <p className="text-red-500 text-xs mb-2">{errors.general}</p>}
          <form onSubmit={handleSubmit} className='px-4'>
            {/* email */}
            <div className='mb-5'>
            <input 
            type="email" 
            name='email' 
            id='email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='example@gmail.com' 
            className={`w-full rounded-md border boredr-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6872BB] outline-none focus:border-[#6a64f1] focus:shadow-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
            {errors.email && <p className="text-red-500 text-lg mt-1 font-bold">{errors.email}</p>}
            </div>
            {/* password */}
            <div className='mb-5'>
              <input 
              type="password" 
              name='password' 
              id='password' 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              placeholder='Enter your password' 
              className={`w-full rounded-md border boredr-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6872BB] outline-none focus:border-[#6a64f1] focus:shadow-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}/>

              {errors.password && <p className="text-red-500 text-lg mt-1 font-bold">{errors.password}</p>}
            </div>
             {/* Success Message */}
             {/*  {isLoggedIn && <p className="text-green-500 text-lg mb-2 font-bold">You logged in successfully</p>} */}
            <div>
              <button className='hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none'>Login</button>
            </div>
            
          </form>

         
          {/* modal close btn */}
          <button onClick={onClose} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-8 rounded inline-flex items-center mt-5  '>
            Close
          </button>
        </div>

      </div>

    </div>
  )
}

export default Modal