import * as yup from 'yup';


export const userSchema = yup.object().shape({
    firstName: yup.string()
        .required('Enter a first name.'),
    lastName: yup.string()
        .required('Enter a last name.'),
    phone: yup.string()
        .max(10, 'Must be a 10 digit phone number.')
        .required('Enter a valid phone number.'),
    email: yup.string()
        .email('Enter a valid email address.')
        .required('Enter a valid email address.'),
    club: yup.string()
        .required('Enter a club name.'),
});

