import React, {useState} from 'react';
import Footer from './Footer'
import Heading from './Heading';
import "../scss/ContactForm.scss";

const ContactForm = () => {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");

    const userNameHandler = (e) => {
        setUserName(e.target.value)
        console.log(userName);
    }

    const userEmailHandler = (e) => {
        setUserEmail(e.target.value)
    }

    const userMessageHandler = (e) => {
        setUserMessage(e.target.value)
        if (e.target.scrollHeight < 270) {
            resize(e.target);
        }
    }

    function resize(area) {
        area.style.height = 'auto';
        area.style.height = area.scrollHeight + 'px';
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <section className="contact-form" id="contact-form">
            <div className="container">
                <div className="contact-form-wrapper3">
                    <div className="contact-form-wrapper">
                        <Heading text="Skontaktuj się z nami" />
                        <form className="form" onSubmit={e => handleSubmit(e)}>
                            <div className="form-section">
                                <div className="form-group many">
                                    <label for="name">Wpisz swoje imię</label>
                                    <input type="text" id="name" name="name" placeholder="Krzysztof"
                                       onChange={(e) => userNameHandler(e)} required />
                                </div>
                                <div className="form-group many">
                                    <label for="email">Wpisz swój email</label>
                                    <input type="email" id="email" name="email" placeholder="abc@xyz.pl"
                                        onChange={(e) => userEmailHandler(e)} required />
                                </div>
                            </div>
                            <div className="form-section">
                                <div className="form-group">
                                    <label for="message">Wpisz swoją wiadomość</label>
                                    <textarea id="message"
                                        name="message"
                                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum quam."
                                        onChange={(e) => userMessageHandler(e)}
                                        required />
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