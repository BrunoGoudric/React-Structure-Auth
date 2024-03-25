import * as yup from 'yup';

export const registerValidationSchema = yup.object({
    fullName: yup.string().min(3).max(60),
    email: yup.string().email(),
    password: yup.string()
})