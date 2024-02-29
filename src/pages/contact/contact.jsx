import React, { useState } from 'react';
import './contact.scss';
import contactFormService from '../../services/contactFormService';
import { useInfoMessage } from '../../context/infoMessageContext';
import { InfoType } from '../../components/infoMessage/infoMessage';
// import contactFormService from '../../services/contactFormService';

function Contact() {

    const MAX_CHARACTERS = 500;
    const [charsCount, setCharsCount] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });
    const { showToast } = useInfoMessage();
    


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'message') {
            setCharsCount(value.length);
        }
        if (name == "phone") {
            const onlyNums = value.replace(/[^0-9]/g, '');
            setFormData({
                ...formData,
                [name]: onlyNums,
            });
            return;
        }
        setFormData({
            ...formData,
            [name]: value,
        });

    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform validation here
        if (formData.firstName.trim() === '') {
            showToast('Veuillez renseigner votre nom', InfoType.ERROR);
            return;
        }

        if (formData.lastName.trim() === '') {
            showToast('Veuillez renseigner votre prenom', InfoType.ERROR);
            return;
        }

        if (formData.email.trim() === '') {
            showToast('Veuillez renseigner votre email', InfoType.ERROR);
            return;
        }

        if (formData.phone.trim() === '' || formData.phone.length < 10) {
            showToast('Veuillez renseigner votre telephone', InfoType.ERROR);
            return;
        }

        if (formData.message.trim() === '') {
            showToast('Veuillez renseigner votre demande', InfoType.ERROR);
            return;
        }
        if (formData.message.length > MAX_CHARACTERS) {
            showToast('Veuillez ne pas dépasser 500 caractères', InfoType.ERROR);
            return;
        }

        // If validation passes, you can proceed with handling the form data
        console.log('Form data submitted:', formData);
        contactFormService.sendContact(formData).then((response) => {
            if (response?.status === 200) {
                showToast('Votre demande a bien été envoyée', InfoType.SUCCESS);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                });
                setCharsCount(0);
            } else {
                showToast('error', InfoType.ERROR);

            }
        })
    };

    return (
        <>
            <div className="general-cont-contact">
                <h1 className="title">Veux-tu devenir l'un de nous ?</h1>

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <input
                            type="text"
                            placeholder="Nom"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder="Prenom"
                            name="lastName"
                            value={formData.lastName}
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
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <textarea
                        placeholder="Votre demande"
                        name="message"
                        value={formData.message}
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
