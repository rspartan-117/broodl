'use client'
import { Fugaz_One } from 'next/font/google';
import React, { useState } from 'react'
import Button from './Button';
import { useAuth } from '@/context/AuthContext';
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegister, setIsRegister] = useState(false)
    const [authenticating, setAuthenticating] = useState(false)
    const [passError, setPassError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [submitError, setSubmitError] = useState('');


    const { signup, login } = useAuth()

    async function handleSubmit() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !emailRegex.test(email)) {
            setEmailError(true);
            return;
}
        if (!password || password.length < 8) {
            setPassError(true);
            return;
} 
        setAuthenticating(true)
        try {
            if (isRegister) {
                console.log('Signing up a new user')
                await signup(email, password)
            } else {
                console.log('Logging in existing user')
                await login(email, password)
            }

        } catch (err) {
            if (err.code === 'auth/user-not-found') {
                setSubmitError('No account found with this email.');
              } else if (err.code === 'auth/wrong-password') {
                setSubmitError('Incorrect password. Please try again.');
              } else if (err.code === 'auth/email-already-in-use') {
                setSubmitError('Email is already registered. Please log in.');
              } else {
                setSubmitError('Something went wrong. Please try again.');
              }
            } finally {
              setAuthenticating(false);
            }
          }

    return (
        <div className='flex flex-col flex-1 justify-center items-center gap-4'>
            <h3 className={'text-4xl sm:text-5xl md:text-6xl ' + fugaz.className}>{isRegister ? 'Register' : 'Log In'}</h3>
            <p>You&#39;re one step away!</p>
            <p className='text-center'>{isRegister ? 'Already have an account? ' : 'Don\'t have an account? '}<button onClick={() => setIsRegister(!isRegister)} className='text-indigo-600'>{isRegister ? 'Sign in' : 'Sign up'}</button></p>
            <input value={email} onChange={(e) => {
             setEmail(e.target.value);
                if (emailError) setEmailError(false);
        }}className='w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none' placeholder='Email' />
            <input value={password} onChange={(e) => {
                setPassword(e.target.value)
                if (passError) setPassError(false);
            }} className='w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none' placeholder='Password' type='password' />
             <div className="text-red-600"> {passError ? "Password must be 8 characters." : ""}</div>
             <div className="text-red-600"> {emailError ? "Email must be Valid" : ""}</div>
            <div className='max-w-[400px] w-full mx-auto'>
            <Button 
            clickHandler={handleSubmit} 
            text={authenticating ? 'Submitting...' : 'Submit'} 
            disabled={authenticating}
            full 
            />
            {submitError && (
              <div className="text-red-600 text-center max-w-[400px] mx-auto">
                {submitError}
              </div>
            )}
            </div>
            
           
        </div>
    )
}
