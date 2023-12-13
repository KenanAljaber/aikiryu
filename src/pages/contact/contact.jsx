import React, { useState } from 'react';
import './contact.scss';

function Contact() {

    const MAX_CHARACTERS = 500;
    const [charsCount, setCharsCount] = useState(0);
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        demande: '',
    });
    const [showError, setShowError] = useState(false);
    const [errorText, setErrorText] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'demande') {
            setCharsCount(value.length);
        }
        setFormData({
            ...formData,
            [name]: value,
        });

    };

    const showToast = (message) => {
        setErrorText(message);
        setShowError(true);
        setTimeout(() => {
            setShowError(false);
            setErrorText('');
        }, 3000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform validation here
        if (formData.nom.trim() === '') {
            showToast('Veuillez renseigner votre nom');
            return;
        }

        if (formData.prenom.trim() === '') {
            showToast('Veuillez renseigner votre prenom');
            return;
        }

        if (formData.email.trim() === '') {
            showToast('Veuillez renseigner votre email');
            return;
        }

        if (formData.telephone.trim() === '' || formData.telephone.length < 10) {
            showToast('Veuillez renseigner votre telephone');
            return;
        }

        if (formData.demande.trim() === '') {
            showToast('Veuillez renseigner votre demande');
            return;
        }
        if (formData.demande.length > MAX_CHARACTERS) {
            showToast('Veuillez ne pas dépasser 500 caractères');
            return;
        }

        // If validation passes, you can proceed with handling the form data
        console.log('Form data submitted:', formData);
    };

    return (
        <>
            <div className="general-cont-contact">
                <h1 className="title">Veux-tu devenir l'un de nous ?</h1>
                {showError && <div className="error">
                    <p>{errorText}</p>
                </div>}
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <input
                            type="text"
                            placeholder="Nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder="Prenom"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="row">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <input
                            type="tel"
                            placeholder="Téléphone"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <textarea
                        placeholder="Votre demande"
                        name="demande"
                        value={formData.demande}
                        onChange={handleInputChange}
                    ></textarea>
                    <small className="char-count" style={{ color: charsCount >= MAX_CHARACTERS ? 'red' : 'black' }}>{charsCount}/{MAX_CHARACTERS}</small>
                    <button className="black-button" type="submit">
                        Envoyer
                    </button>
                </form>
            </div>
        </>
    );
}

export default Contact;
