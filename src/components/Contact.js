import React from 'react';
import msn from '../assets/img/Msn.png';
import whatsapp from '../assets/img/Whatsapp.png';
import email from '../assets/img/Email.png';

export class Contact extends React.Component{
    render() {
        return(
            <div className="d-flex flex-column contactItemsContainer">
                <a className="rss messengerIcon" href="https://m.me/maytechseguridad">
                    <img src={msn} className="my-float" alt="facebook messenger logo"/>
                </a>
                <a className="rss whats-app" href="https://api.whatsapp.com/send?phone=529842879394&text=Hola%2C%20deseo%20obtener%20mayor%20informaci%C3%B3n%20de%20Maytech%20Seguridad%20electr%C3%B3nica.">
                    <img src={whatsapp} className="my-float" alt="whatsapp logo"/>
                </a>
                <a className="rss emailIcon" href="#contact">
                    <img src={email} className="my-float" alt="email logo"/>
                </a>
            </div>
        );
    }
}