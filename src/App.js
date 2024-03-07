import { BrowserRouter as Router, Route, Navigate, Routes, useNavigate } from 'react-router-dom';
import AboutUs from "./pages/about-us/about-us";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import "./assets/styles/global-style.css";
import CalendarPage  from "./pages/calendar/calendarPage";
import ProtectedRoute from "./routes/protectedRoute";
import { LoginPage } from './pages/admin/loginPage/loginPage';
import { Events } from './pages/admin/events/events';
import { useAuth } from './services/authenticationService';
import { InfoMessageProvider } from './context/infoMessageContext';
import { useBlockUi } from './context/isLoadingContext';
import interceptor from './interceptor/interceptor';
import { useEffect } from 'react';
function App() {
  const auth = useAuth();

  const adminSignedIn = auth.isAuthenticated;
  // initialize interceptor
  const { showLoading, hideLoading } = useBlockUi();
  interceptor.initializeInterceptor(showLoading, hideLoading);




  return (

    <InfoMessageProvider>
      <Router>
         <Navbar></Navbar>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/sensei/admin/login" element={!adminSignedIn ? <LoginPage /> : <Navigate to="/sensei/admin/events" />} />
          <Route exact path='/sensei/admin/events' element={<ProtectedRoute />}>
            <Route exact path='/sensei/admin/events' element={<Events />} />
          </Route>

          <Route path="*" element={<Home />} />

        </Routes>
        <Footer></Footer>
      </Router>
    </InfoMessageProvider>

  );
}

export default App;

