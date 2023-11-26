import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const notify = () => toast("Wow so easy!")
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
      setIsLoading(true);
    if (username === 'klabadmin@gmail.com' && password === 'password') {
      setTimeout(()=>{
        toast.success("Welcome Admin");
        alert('Admin')
        setIsLoading(false)
        navigate('/dashboard');
      }, 5000)

    } else if(username === 'mugisha@gmail.com' && password === 'password') {
      setTimeout(()=>{
        toast.success("Welcome Mugisha");
        setIsLoading(false)
        navigate('/userdashboard');
      }, 5000)

    }else{
      setTimeout(()=>{
        toast.error("Missing some credentials")
        setIsLoading(false)
        navigate('/Login');
      }, 5000)

    }
  };

  return (
    <div className='flex items-center justify-center'>
      <ToastContainer/>
      <div className='bg-[#E2F4FF] rounded-2xl border shadow-md  pb-10 m-12 overflow-hidden md:w-1/3 w-full'>
        <h1 className=' font-extrabold uppercase text-2xl w-full bg-[#0C7489] px-4 py-8 text-center text-white'>Login</h1>
        <div className='mt-4 mb-2 text-xl font-semibold md:ml-8 ml-4'>
          <label>Username</label>
        </div>

        <div className='w-full md:ml-8 ml-4'>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='rounded-lg  p-2 mb-2 md:w-4/6 w-5/6'/>
        </div>
        
        <div className='mt-4 mb-2 text-xl font-semibold md:ml-8 ml-4'>
          <label>Password</label>
        </div>

        <div className='w-full md:ml-8 ml-4'>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='rounded-lg  p-2 mb-2 md:w-4/6 w-5/6'/>
          <p className=' text-sm m-2 w-4/6 text-right'>forgot password? <span className='text-blue-600 cursor-pointer'>reset</span></p>
        </div>
        {/* sm:motion-safe:hover:animate-spin */}
        <button onClick={handleLogin} className='bg-[#0C7489] rounded-full w-2/6 px-5 text-xl font-bold text-white text-center pb-2 mt-3 ml-8 py-1 '>
          {isLoading ?( "Loging in... ") : ("Login")}
        </button>
      </div>
      
    </div>
  );
};

export default Login;
