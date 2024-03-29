import "./loginPage.scss";
import aikidoSymbol from "../../../assets/images/aikido-symbol.jpg.png";
import loginService from "../../../services/loginService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../services/authenticationService";
import { CONSTANTS } from "../../../utils/constants";
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
                localStorage.setItem(CONSTANTS.TOKEN, response.token);
                localStorage.setItem(CONSTANTS.USERNAME, response.username);
                localStorage.setItem(CONSTANTS.USER_ID, response.id);

                auth.login();
                navigate('/sensei/admin/events');
            }
        }
    }

    return (
        <>
            <div className="general-cont-login-page">

                <div className="form">
                    <h1>Bienvénue</h1>
                    <img className="aikido" src={aikidoSymbol} alt="" />
                    <input name="username" onChange={handleInputChange}  placeholder="Nom d'utilisateur" type="text" />
                    <input name="password" onChange={handleInputChange} placeholder="Mot de passe" type="password" />
                    <button onClick={handleSubmit}>Connexion</button>
                    <button onClick={() => navigate('/home')}>Retour</button>
                </div>
            </div>

        </>
    );
}