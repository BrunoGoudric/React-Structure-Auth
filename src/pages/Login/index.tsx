import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { loginValidationSchema } from "./validation";
import { LoginProps } from "./types";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginValidationSchema)
    })

    const onSubmit = async (data: LoginProps) =>{
        const isLogged = await auth.signIn(data.email, data.password);

        if(isLogged){
            navigate('/home');
        }else {
            alert("Não deu certo!")
        }
    }
    
    return (
        <Container>
            <Header dataType="Login" />

            <div>
                <span>Login</span>

                <div className="form">
                   <input data-test="emailInput" type="email" placeholder="E-mail" {...register('email')} />
                   <p>{errors.email?.message}</p> 
                   <input data-test="passwordInput" type="password"  placeholder="Password" {...register('password')} /> 
                   <p>{errors.password?.message}</p> 
                </div>
                <div className="forgotPassword">
                    <a href="/reset_password">Reset password</a>
                </div>
                <Button testName="btnContinue" className="btnContinue" onClick={handleSubmit(onSubmit)}>Continue</Button>
                <div className="msgNewUser">
                    <p>New to Financial Manager? <a href="/register">Register</a></p>
                </div>
            </div>
        </Container>
    )
}

export default Login;