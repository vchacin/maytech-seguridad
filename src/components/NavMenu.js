import React, { Component } from 'react';
import es from '../assets/flags/mex.png';
import en from '../assets/flags/eeuu.png';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  render () {
    return (
        <header>
            <nav className="navbar bg-transparent navbar-dark fixed-top navbar-expand-md paddingXaxis" id="mainNav">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars fa-2x text-white"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbarBorder navbar-nav text-uppercase mr-auto font-weight-bold">
                  <li className="nav-item active">
                    <a className="nav-link opacity" href="#home">Inicio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link opacity" href="#services">Servicios</a> 
                  </li>
                  <li className="nav-item">
                    <a className="nav-link opacity" href="#about">Nosotros</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link opacity" href="#blog">Blog</a> 
                  </li>
                </ul>

                <ul className="navbar-nav text-uppercase ml-auto">
                  <li className="nav-item d-none d-md-block d-lg-block">
                    <a className="btn btn-light bg-white text-black rounded-pill font-weight-bold px-4 mr-2 btn-contact" href="#contact">Contacto</a>
                  </li>

                  <li className="nav-item d-sm-flex d-md-none">
                    <a className="nav-link font-weight-bold" href="#contact">Contacto</a>
                  </li>

                  <li className="nav-item d-flex">
                      <div className="flagContainer d-flex align-items-start text-white font-weight-bold">
                        <div className="d-flex flagDiv flag1">
                          <img className="flag mr-2" src={en} alt="eeuu flag"/>
                          <p className="">EN <span className="mx-2">|</span></p>
                        </div>
                        <div className="d-flex flagDiv flag2">
                          <img className="flag mr-2"src={es} alt="mexico flag"/>
                          <p className="">ES</p>
                        </div>
                      </div>
                  </li>

                </ul>

              </div>
            </nav>
        </header>
    );
  }
}
