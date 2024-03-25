import * as Yup from 'yup';
import { loginValidationSchema } from './validation';

export type LoginProps = Yup.InferType<typeof loginValidationSchema>;