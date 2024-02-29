import { BrowserRouter as Router, Route, Navigate, Routes, useNavigate } from 'react-router-dom';
import AboutUs from "./pages/about-us/about-us";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import "./assets/styles/global-style.css";
import { CalendarPage } from "./pages/calendar/calendar";
import ProtectedRoute from "./routes/protectedRoute";
import { LoginPage } from './pages/admin/loginPage/loginPage';
import { Events } from './pages/admin/events/events';
import { useAuth } from './services/authenticationService';
import { InfoMessageProvider } from './context/infoMessageContext';
import { IsLoadingProvider } from './context/isLoadingContext';
import axiosInstance from './interceptor/interceptor';
function App() {
  const auth = useAuth();

  const showNavBarAndFooter = (window.location.pathname.search('login') == -1);
  const adminSignedIn = auth.isAuthenticated;
  console.log(adminSignedIn);

  return (
      
    <InfoMessageProvider>
        <Router>
          {showNavBarAndFooter && <Navbar></Navbar>}
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/sensei/admin/login" element={!adminSignedIn ? <LoginPage /> : <Navigate to="/sensei/admin/dashboard" />} />
            <Route exact path='/sensei/admin/events' element={<ProtectedRoute />}>
              <Route exact path='/sensei/admin/events' element={<Events />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />

          </Routes>
          {showNavBarAndFooter && <Footer></Footer>}
        </Router>
    </InfoMessageProvider>
      
  );
}

export default App;
