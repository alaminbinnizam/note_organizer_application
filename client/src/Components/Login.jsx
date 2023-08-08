import React from 'react'
import '../Styles/Signup.css'
import Layout from '../Layout/Layout'
import { useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuth } from '../Context/auth';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();




    //form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/login',
                { email, password });
            if (res?.data?.success) {
                toast.success(res?.data?.message);
                setAuth({
                    ...auth,
                    user: res?.data?.user,
                    token: res?.data?.token
                })
                localStorage.setItem('auth', JSON.stringify(res?.data));
                navigate(location.state || '/')
            } else {
                toast.error(res?.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error('Something Went Wrong')
        }
    }

    return (
        <>
            <Layout title={'Login Page'}>
                <form onSubmit={handleSubmit} method="post">

                    <div className="container">

                        <label htmlFor="uname"><b>Email</b></label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter an Valid Email" name="uname" required />

                        <label htmlFor="uname"><b>Password</b></label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter a Valid Password" name="uname" required />

                        {/* <label htmlFor="uname"><b>Answer</b></label>
                        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)}
                            placeholder="Enter a Hint" name="uname" required /> */}

                        <button type="submit">LOGIN</button>

                    </div>

                    <div className="container" >
                        <span className="psw" onClick={() => { navigate('/forgot-password') }}>Forgot Password</span>
                    </div>
                </form>
            </Layout>

        </>
    )
}

export default Login
