import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'leaflet/dist/leaflet.css';
import { AuthProvider } from './services/authenticationService';
import { IsLoadingProvider } from './context/isLoadingContext';
import { InfoMessageProvider } from './context/infoMessageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <IsLoadingProvider>
        <InfoMessageProvider>

            <AuthProvider>

                <App />
            </AuthProvider>
        </InfoMessageProvider>
    </IsLoadingProvider>
);
