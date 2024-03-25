import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Container } from "./styles";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { PasswordResetProps } from "./types";
import { passwordResetValidationSchema } from "./validation";

const PasswordReset = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm({
    resolver: yupResolver(passwordResetValidationSchema)
})

const onSubmit = (data: PasswordResetProps) =>{
    alert("Em Desenvolvimento");
}
  return (
    <Container>
      <Header dataType="ForgotPassword" />
      <div>
        <span>
          Enter your email to <br /> reset password
        </span>

        <form className="form" >
          <input
            data-test="emailInput"
            type="email"
            placeholder="E-mail"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </form>

        <div className="btnBox">
          <Button testName="btnReset" className="btnReset" onClick={handleSubmit(onSubmit)}>
            Reset password
          </Button>
          <Link data-test="btnCancel" className="btnCancel" to={"/"}>
            Cancel
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default PasswordReset;
