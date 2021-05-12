import React, {useState} from 'react';
import Heading from './Heading';
import "../scss/ContactForm.scss";

const ContactForm = () => {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [nameValidation, setNameValidation] = useState();
    const [emailValidation, setEmailValidation] = useState();
    const [messageValidation, setMessageValidation] = useState();
    const [sendingResult, setSendingResult] = useState({
        message: "",
        status: ""
    });

    const userNameHandle = (e) => {
        setUserName((e.target.value).trim());
    }

    const checkIfNameHasMoreThanOneWord = (name) => {
        return name.indexOf(' ') !== -1;
    }

    const validateName = () => {
        if (checkIfNameHasMoreThanOneWord(userName)) {
            setNameValidation("Podaj tylko jedno imię!");
        } else if (userName === "") {
            setNameValidation("Imię nie może być puste!");
        } else {
            setNameValidation("");
        }
    }

    const userEmailHandle = (e) => {
        setUserEmail((e.target.value).trim());
    }

    const validateEmail = () => {
        const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (userEmail === "") {
            setEmailValidation("Email nie może być pusty!");
        } else if (!re.test(userEmail)) {
            setEmailValidation("Podany email jest nieprawidłowy!");
        } else {
            setEmailValidation("");
        }
    }

    const resize = (textArea) => {
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + 'px';
    } 

    const userMessageHandle = (e) => {
        setUserMessage(e.target.value);
        const maxScrollHeight = 270;
        if (e.target.scrollHeight < maxScrollHeight) {
            resize(e.target);
        }
    }

    const validateMessage = () => {
        const maxMessageLength = 120;
        if (userMessage.length < maxMessageLength) {
            setMessageValidation(`Wiadomość musi mieć co najmniej ${maxMessageLength} znaków!`);
        } else {
            setMessageValidation("");
        }
    }

    const validateForm = () => {
        validateName();
        validateEmail();
        validateMessage();
    }

    const clearForm = () => {
        resize(document.getElementById("message"));
        console.log(document.getElementById("message"))
        setUserEmail("");
        setUserName("");
        setUserMessage("");
    }

    const sendMessage = (dataToSend) => {
        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    setSendingResult({ message: "Wiadomość została wysłana", status: "success" });
                    clearForm();
                } else {
                    setSendingResult({ message: "Wiadomość nie została wysłana", status: "error" });
                }
            })
            .catch(error => {
                setSendingResult({ message: "Wiadomość nie została wysłana", status: "error" });
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm();
        
        const dataToSend = {
            name: userName,
            email: userEmail,
            message: userMessage,
        }
        
        sendMessage(dataToSend);
    }
    
    return (
        <section className="contact-form" id="contact-form">
            <div className="container">
                <div className="contact-form-container">
                    <div className="contact-form-wrapper">
                        <Heading text="Skontaktuj się z nami" />
                        <form className="form" onSubmit={e => handleSubmit(e)}>
                            {sendingResult.status !== "success" ? 
                                <p className="error-input">{sendingResult.message}</p> : 
                                <p className="success-input">{sendingResult.message}</p>}
                            <div className="form-section">
                                <div className="form-group many">
                                    <label htmlFor="name">Wpisz swoje imię</label>
                                    <input type="text" id="name" name="name" placeholder="Krzysztof"
                                       onChange={e => userNameHandle(e)}
                                       onBlur={validateName} value={userName} />
                                    {nameValidation ? <p className="invalid-input">{nameValidation}</p> : null}
                                </div>
                                <div className="form-group many">
                                    <label htmlFor="email">Wpisz swój email</label>
                                    <input type="email" id="email" name="email" placeholder="abc@xyz.pl"
                                        onChange={e => userEmailHandle(e)}
                                        onBlur={validateEmail} value={userEmail} />
                                    {emailValidation ? <p className="invalid-input">{emailValidation}</p> : null}
                                </div>
                            </div>
                            <div className="form-section">
                                <div className="form-group">
                                    <label htmlFor="message">Wpisz swoją wiadomość</label>
                                    <textarea id="message"
                                        name="message"
                                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum quam."
                                        onChange={e => userMessageHandle(e)}
                                        onBlur={validateMessage} value={userMessage} />
                                    {messageValidation ? <p className="invalid-input">{messageValidation}</p> : null}
                                </div>
                            </div>
                            <button type="submit">Wyślij</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default ContactForm;