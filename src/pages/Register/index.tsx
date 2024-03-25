import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form"
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Container } from "./style";
import { registerValidationSchema } from "./validation";
import { RegisterProps }  from './types';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerValidationSchema)
    })

    const onSubmit = (data: RegisterProps) =>{
        console.log("Data=", data)
    }


   

    return (
        <Container>
            <Header dataType="Register" />

            <div>
                <span>Register</span>

                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                   <input data-test="fullName" type="text" placeholder="Full Name" {...register("fullName")} /> 
                   <p>{errors.fullName?.message}</p>
                   <input data-test="emailInput" type="email" placeholder="E-mail" {...register("email")} />
                   <p>{errors.email?.message}</p>
                   <input data-test="passwordInput" type="password" placeholder="Password" {...register("password")} /> 
                   <p>{errors.password?.message}</p>

                    <Button testName="btnRegister" className="btnRegister" type="submit">Register</Button>
                </form>
                
                
            </div>
        </Container>
    )
}

export default Register;