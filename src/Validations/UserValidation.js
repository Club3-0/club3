import * as yup from 'yup'


export const userSchema = yup.object().shape({
    firstName: yup.string()
        .required('Enter a first name.'),
    lastName: yup.string()
        .required('Enter a last name.'),
    phone: yup.string()
        .max(10, 'Must be a 10 digit phone number.')
        .required('Enter a valid phone number.'),
    email: yup.string()
        .email()
        .required('Enter a valid email address.'),
    password: yup.string()
        .min(6, 'Password must be at least 6 characters.')
        .required('Enter a password.'),
    confirm: yup.string()
        .oneOf([yup.ref('password'), null], 'The passwords you entered do not match.')
        .required('Confirm your password.'),
    club: yup.string()
        .required('Enter a club name.'),
});

