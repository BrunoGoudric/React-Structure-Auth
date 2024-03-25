import * as Yup from 'yup';
import { passwordResetValidationSchema } from './validation';

export type PasswordResetProps = Yup.InferType<typeof passwordResetValidationSchema>;