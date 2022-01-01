import React from 'react'
import '../css/Form.css'

const Register = () => {
    return (
        <div className='formContainer'>
            <form className='form'>
                <h2>Create your demo account</h2>
                <p>Set up a time to discuss how we can best serve you</p>
                <label className='nameLabel'> 
                    <input className='inputField' type="text" placeholder='First name'/>
                    <input className='inputField' type="text" placeholder='Last name'/>
                </label>
                <label className='label'>
                    <input className='inputField' type="text" placeholder='Phone number*'/>
                </label>
                <label className='label'>
                    <input className='inputField' type="text" placeholder='Your email*'/>
                    This will be your username
                </label>
                <label className='label'>
                    <input className='inputField' type="text" placeholder='Club name*'/>
                </label>
            </form>
        </div>
    )
}

export default Register
