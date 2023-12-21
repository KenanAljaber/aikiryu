import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../services/authenticationService";
import "./events.scss";

export const Events = () => {
  const auth= useAuth();
  const navigator=useNavigate();
    

    return (
        <>
        <div className="main-cont-event">
            
            <h1>Admin Dashboard</h1>
        </div>
        </>
    );
};