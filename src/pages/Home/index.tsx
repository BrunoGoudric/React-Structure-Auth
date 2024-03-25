import { useContext } from "react"
import { AuthContext } from "../../context/Auth/AuthContext"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const auth  = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = async () => {
        await auth.signOut();
        navigate('/');
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleLogout}>Sair</button>
        </div>
    )
}

export default Home;