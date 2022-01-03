import React, { useState, useLayoutEffect } from 'react'
import axios from 'axios';
import '../css/Register.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const initialState = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirm: "",
    club: "",
}

const Register = () => {
    const [state, setState] = useState(initialState);
    const userInfo = {email: state.email, password: state.password}
    
    useLayoutEffect(() => {
        ScrollTrigger.getById("landing-effect").kill();
    }, [])

    const handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setState({
            ...state,
            [name]: value
        });
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userInfo);
        axios.post('https://reqres.in/api/register', userInfo)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return (
        <div className='formContainer'>
            <form onSubmit={handleSubmit} className='form'>
                <h2>Create your demo account</h2>
                <p>Set up a time to discuss how we can best serve you</p>
                <label className='nameLabel'> 
                    <input 
                        autoComplete='off'
                        className='inputField' 
                        type="text" 
                        placeholder='First name'
                        name="firstName"
                        value={state.firstName}
                        onChange={handleInputChange} />
                    <input 
                        autoComplete='off'
                        className='inputField lastName' 
                        type="text" 
                        placeholder='Last name'
                        name="lastName"
                        value={state.lastName}
                        onChange={handleInputChange} />
                </label>
                <label className='label'>
                    <input 
                        autoComplete='off'
                        className='inputField' 
                        type="text" 
                        placeholder='Phone number'
                        name="phone"
                        value={state.phone}
                        onChange={handleInputChange} />
                </label>
                <label className='label'>
                    <input 
                        autoComplete='off'
                        className='inputField' 
                        type="email" 
                        placeholder='Your email'
                        name="email"
                        value={state.email}
                        onChange={handleInputChange} />
                    <p>This will be your username</p>
                </label>
                <label className='label'>
                    <input 
                        autoComplete='off'
                        className='inputField' 
                        type="password" 
                        placeholder='Password'
                        name="password"
                        value={state.password}
                        onChange={handleInputChange} />
                </label>
                <label className='label'>
                    <input 
                        autoComplete='off'
                        className='inputField' 
                        type="password" 
                        placeholder='Confirm Password'
                        name="confirm"
                        value={state.confirm}
                        onChange={handleInputChange}/>
                </label>
                <label className='label'>
                    <input 
                        autoComplete='off'
                        className='inputField' 
                        type="text" 
                        placeholder='Club name'
                        name="club"
                        value={state.club}
                        onChange={handleInputChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register
