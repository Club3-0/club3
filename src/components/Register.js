import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../css/Register.css'
import { userSchema } from '../Validations/UserValidation';
import * as yup from 'yup';

const Register = () => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        club: "",
    });
    const [disabled, setDisabled] = useState(true);
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        club: "",
    });
    const [post, setPost] = useState({
        message: "",
    })

    useEffect(() => {
        userSchema.isValid(state).then(valid => {
            setDisabled(!valid);
        })
    }, [state]);


    const userInfo = {
        firstName: state.firstName,
        lastName: state.lastName,
        phone: state.phone,
        email: state.email,
        club: state.club,
    }
    

    const handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        yup
            .reach(userSchema,name)
            .validate(value)
            .then(valid => {
                setErrors({
                    ...errors, [name]: ""
                });
            })
            .catch(err => {
                setErrors({
                    ...errors, [name]: err.errors[0]
                });
            });
        setState({
            ...state,
            [name]: value
        });

    } 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = await userSchema.isValid(userInfo);
        // Failed request
        //axios.post('https://reqres.in/api/register', userInfo)
        // Successful request
        axios.post('https://reqres.in/api/register', {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        })
        .then((res) => {
            console.log(res);
            setPost({message: "Thanks for your demo request! We will be contacting you soon!"});
        })
        .catch((err) => {
            console.log(err);
            setPost({message: "Failed to submit demo request."});
        })
    }
    return (
        <div className='formContainer'>
            <form onSubmit={handleSubmit} className='form'>
                <h2>Submit a demo request</h2>
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
                {errors.firstName.length > 0 && <p className="error">{errors.firstName}</p>}{errors.lastName.length > 0 && <p className="error">{errors.lastName}</p>}
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
                {errors.phone.length > 0 && <p className="error">{errors.phone}</p>}
                <label className='label'>
                    <input 
                        autoComplete='off'
                        className='inputField' 
                        type="text" 
                        placeholder='Your email'
                        name="email"
                        value={state.email}
                        onChange={handleInputChange} />
                </label>
                {errors.email.length > 0 && <p className="error">{errors.email}</p>}
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
                {errors.club.length > 0 && <p className="error">{errors.club}</p>}
                {post.message}
                <button disabled={disabled} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register
