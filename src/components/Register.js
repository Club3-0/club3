import React from 'react'
import '../css/Register.css'

const Register = () => {
    return (
        <div className='formContainer'>
            <form className='form'>
                <h2>Create your demo account</h2>
                <p>Set up a time to discuss how we can best serve you</p>
                <label className='nameLabel'> 
                    <input className='nameInputField' type="text" placeholder='First name'/>
                    <input className='nameInputField' type="text" placeholder='Last name'/>
                </label>
                <label className='label'>
                    <input className='inputField' type="text" placeholder='Phone number'/>
                </label>
                <label className='label'>
                    <input className='inputField' type="text" placeholder='Your email'/>
                    <p>This will be your username</p>
                </label>
                <label className='label'>
                    <input className='inputField' type="password" placeholder='Password'/>
                </label>
                <label className='label'>
                    <input className='inputField' type="password" placeholder='Confirm Password'/>
                </label>
                <label className='label'>
                    <input className='inputField' type="text" placeholder='Club name'/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register
