import * as yup from 'yup'


export const userSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup.string().max(10).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    confirm: yup.string().oneOf([yup.ref('password'), null], 'The passwords you entered do not match.'),
    club: yup.string().required(),
});

