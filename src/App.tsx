import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import GlobalStyle from "./styles/global";
import PasswordReset from "./pages/PasswordReset";
import Register from "./pages/Register";
import { AuthProvider } from "./context/Auth/AuthProvider";
import Home from "./pages/Home";
import { RequireAuth } from "./context/Auth/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reset_password" element={<PasswordReset />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
