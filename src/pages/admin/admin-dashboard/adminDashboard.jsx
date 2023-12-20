import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../services/authenticationService";


export const AdminDashboard = () => {
  const auth= useAuth();
  const navigator=useNavigate();
    
const logout=()=>{
    auth.logout();

}
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <button onClick={logout}>Se déconnecter</button>
        </div>
    );
};