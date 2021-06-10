import React, { Component } from 'react';

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
                <ul className="navbar-nav text-uppercase mr-auto font-weight-bold">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Inicio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Servicios</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Nosotros</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Blog</a>
                  </li>
                </ul>
                <ul className="navbar-nav text-uppercase ml-auto">
                  <li className="nav-item d-none d-md-block d-lg-block">
                    <a className="btn btn-light bg-white text-black rounded-pill font-weight-bold px-4 mr-2 btn-contact" href="#">Contacto</a>
                  </li>
                  <li className="nav-item d-sm-flex d-md-none">
                    <a className="nav-link font-weight-bold" href="#">Contacto</a>
                  </li>
                  <li className="nav-item">
                    <span className="text-white w-25 px-3 flagContainer" href="#">
                      <a className="font-weight-bolder languages">EN</a>
                      <span className="ml-2 font-weight-lighter">|</span>
                      <a className="ml-2 font-weight-bolder languages">ES</a>
                    </span>
                  </li>
                </ul>
              </div>
            </nav>
        </header>
    );
  }
}
