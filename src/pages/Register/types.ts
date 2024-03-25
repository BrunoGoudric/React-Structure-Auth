import * as Yup from 'yup';
import { registerValidationSchema } from './validation';

export type RegisterProps = Yup.InferType<typeof registerValidationSchema>;