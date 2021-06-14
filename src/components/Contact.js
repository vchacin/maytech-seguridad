import React from 'react';
import whatsapp from '../assets/img/Whatsapp.png';

export class Contact extends React.Component{
    render() {
        return(
            <a className="whats-app" href="https://api.whatsapp.com/send?phone=529842879394&text=Hola%2C%20deseo%20obtener%20mayor%20informaci%C3%B3n%20de%20Maytech%20Seguridad%20electr%C3%B3nica.">
                <img src={whatsapp} className="my-float"/>
            </a>
        );
    }
}