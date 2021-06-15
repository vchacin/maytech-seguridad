import React from 'react';
import logo from '../assets/img/Logo.png';
import arrowDown from '../assets/svg/arrowDown.png';

export class Masterhead extends React.Component {
    render() {
        return(
            <header id="home" className="masthead">
                <div className="container px-0 mb-3">
                    <img className="mb-3" src={logo} alt="logo maytech"/>
                    <div className="d-flex flex-row align-items-center">
                        <div className="divisionLine mr-2"></div>
                        <div className="masthead-subheading text-uppercase">Diseño de sistemas adaptados a tu necesidad</div>
                    </div>
                    <div className="masthead-heading text-uppercase">SEGURIDAD ELECTRÓNICA PARA TODOS <div className="tittleHighlighted">TUS PROYECTOS</div></div>
                </div>
                <a href="#info"><img className="arrowDown" src={arrowDown} alt="arrow down"/></a>
            </header>
        );
    }
}
