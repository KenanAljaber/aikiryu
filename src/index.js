import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'leaflet/dist/leaflet.css';
import { AuthProvider } from './services/authenticationService';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>

        <App />
    </AuthProvider>
);
