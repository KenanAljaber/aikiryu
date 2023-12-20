import { Navigate, Outlet, Route,redirect } from "react-router-dom";
import { useAuth } from "../services/authenticationService";

const ProtectedRoute=({Component,...rest})=>{
    const {isAuthenticated}=useAuth();
    
    return isAuthenticated ? <Outlet/> : <Navigate to="/sensei/admin/login"/>;
    
}
export default ProtectedRoute;