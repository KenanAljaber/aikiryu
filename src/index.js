import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'leaflet/dist/leaflet.css';
import { AuthProvider } from './services/authenticationService';
import { IsLoadingProvider } from './context/isLoadingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <IsLoadingProvider>
        <AuthProvider>

            <App />
        </AuthProvider>
    </IsLoadingProvider>
);
