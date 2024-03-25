import * as yup from 'yup';

export const passwordResetValidationSchema = yup.object({
    email: yup.string().email().required(),
})