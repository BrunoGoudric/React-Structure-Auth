import { useEffect, useState } from "react";
import { HeaderLayout, HeaderType, LayoutProps } from "./types";
import LoginImg  from "../../assets/login.png";
import RegisterImg  from "../../assets/register.png";
import ForgotPasswordImg  from "../../assets/forgotPassword.png";
import { Container } from "./styles";

const headers: HeaderLayout = [
    {
        page: "Register",
        title: "Financial Manager",
        urlImg: RegisterImg,
    },
    {
        page: "Login",
        title: "Financial Manager",
        urlImg: LoginImg,
    },
    {
        page: "ForgotPassword",
        title: "Financial Manager",
        urlImg: ForgotPasswordImg,
    },
]

const Header = ({dataType} : {dataType: HeaderType}) => {
    const [selectedHeader, setSelectedHeader] = useState<LayoutProps | undefined>();

    useEffect(() => {
        const header = headers.find((item) => item.page === dataType);
        setSelectedHeader(header);
    }, [dataType]); 

    if (!selectedHeader) {
        return <div>Carregando cabeçalho...</div>;
    }
   
    return (
        <Container>
            <h2>{selectedHeader.title}</h2>
            <img src={selectedHeader.urlImg} alt={`${selectedHeader.page} page`} />
        </Container>
    )
}

export default Header;