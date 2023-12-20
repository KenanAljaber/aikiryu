import "./loginPage.scss";
import aikidoSymbol from "../../../assets/images/aikido-symbol.jpg.png";
import loginService from "../../../services/loginService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../services/authenticationService";
export const LoginPage = () => {
const navigate=useNavigate();

const auth=useAuth();
    const[user, setUser]=useState({
        username: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    }

    const handleSubmit =async () => {
        if(user.username === '' || user.password === '') {
            alert('Veuillez renseigner tous les champs');
        }
        else {
            const response = await loginService.login(user);
            if(response) {
                //navigate to /admin/dashboard
                auth.login();
                navigate('/sensei/admin/dashboard');
            }
        }
    }

    return (
        <>
            <div className="general-cont-login-page">
                <div className="form">
                    <img className="aikido" src={aikidoSymbol} alt="" />
                    <input name="username" onChange={handleInputChange}  placeholder="Nom d'utilisateur" type="text" />
                    <input name="password" onChange={handleInputChange} placeholder="Mot de passe" type="password" />
                    <button onClick={handleSubmit}>Connexion</button>
                </div>
            </div>

        </>
    );
}