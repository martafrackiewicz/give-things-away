import React, {useState} from 'react';
import Footer from './Footer'
import Heading from './Heading';
import "../scss/ContactForm.scss";

const ContactForm = () => {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [submitInfo, setSubmitInfo] = useState({
        message: "",
        status: ""
    });

    const userNameHandler = (e) => {
        setUserName((e.target.value).trim());
    }

    const nameValidation = () => {
        if (userName.trim().indexOf(' ') !== -1) {
            setNameError("Podane imię jest nieprawidłowe!"); //check if name has more than one word
        } else if (userName === "") {
            setNameError("Imię nie może być puste!");
        } else {
            setNameError("");
        }
    }

    const userEmailHandler = (e) => {
        setUserEmail((e.target.value).trim());
    }

    const emailValidation = () => {
        const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (userEmail === "") {
            setEmailError("Email nie może być pusty!");
        } else if (!re.test(userEmail)) {
            setEmailError("Podany email jest nieprawidłowy!");
        } else {
            setEmailError("");
        }
    }

    const resize = (area) => {
        area.style.height = 'auto';
        area.style.height = area.scrollHeight + 'px';
    }

    const userMessageHandler = (e) => {
        setUserMessage(e.target.value)
        if (e.target.scrollHeight < 270) {
            resize(e.target);
        }
    }

    const messageValidation = () => {
        if (userMessage.length < 120) {
            setMessageError("Wiadomość musi mieć co najmniej 120 znaków!");
        } else {
            setMessageError("");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        nameValidation();
        emailValidation();
        messageValidation();
        document.getElementById("message").style.height = 'auto';
        setSubmitInfo({message: "", status: ""});
        const data = {
            name: userName,
            email: userEmail,
            message: userMessage,
        }
        
        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                if (data.status === 'success') {
                    setSubmitInfo({message: "Wiadomość została wysłana", status: "success"})
                    setUserEmail("");
                    setUserName("");
                    setUserMessage("");
                } else {
                    setSubmitInfo({message: "Wiadomość nie została wysłana", status: "error"});
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    
    return (
        <section className="contact-form" id="contact-form">
            <div className="container">
                <div className="contact-form-container">
                    <div className="contact-form-wrapper">
                        <Heading text="Skontaktuj się z nami" />
                        <form className="form" onSubmit={e => handleSubmit(e)}>
                            {submitInfo.status !== "success" ? 
                                <p className="error-input">{submitInfo.message}</p> : 
                                <p className="success-input">{submitInfo.message}</p>}
                            <div className="form-section">
                                <div className="form-group many">
                                    <label htmlFor="name">Wpisz swoje imię</label>
                                    <input type="text" id="name" name="name" placeholder="Krzysztof"
                                       onChange={(e) => userNameHandler(e)}
                                       onBlur={nameValidation} value={userName} />
                                    {nameError !== "" ? <p className="invalid-input">{nameError}</p> : null}
                                </div>
                                <div className="form-group many">
                                    <label htmlFor="email">Wpisz swój email</label>
                                    <input type="email" id="email" name="email" placeholder="abc@xyz.pl"
                                        onChange={(e) => userEmailHandler(e)}
                                        onBlur={emailValidation} value={userEmail} />
                                    {emailError !== "" ? <p className="invalid-input">{emailError}</p> : null}
                                </div>
                            </div>
                            <div className="form-section">
                                <div className="form-group">
                                    <label htmlFor="message">Wpisz swoją wiadomość</label>
                                    <textarea id="message"
                                        name="message"
                                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum quam."
                                        onChange={(e) => userMessageHandler(e)}
                                        onBlur={messageValidation} value={userMessage} />
                                    {messageError !== "" ? <p className="invalid-input">{messageError}</p> : null}
                                </div>
                            </div>
                            <button type="submit">Wyślij</button>
                        </form>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default ContactForm;