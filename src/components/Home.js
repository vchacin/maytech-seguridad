import React, { Component } from 'react';
import { Masterhead } from './Masterhead';
import { Section } from './shared/Section';
import { ServicesContainer } from './services/ServicesContainer';
import arrowRight from '../assets/svg/arrowRight.png';
import arrowLeft from '../assets/svg/arrowLeft.png';
import logo from '../assets/img/Logo.png';
import { ServicesItem } from './cards/ServicesItem';

import syscom from '../assets/img/Syscom.png';

import { ButtonCustom } from './bootstrap/ButtonCustom';
import { Contact } from './Contact';
import { ThanksContainer } from './thanks/ThanksContainer';
import { InfoContainer } from './info/InfoContainer';
import { StepContainer } from './steps/StepContainer';
import { Slider } from './Slider';
import { Clients } from './Clients';

export class Home extends Component {
  static displayName = Home.name;

  constructor(props){
    super(props);
    this.state = {
      service: ""
    }
  }

  SetService(nombre){
    this.setState({
      service: nombre
    })
  }

  render () {
      return (
        <div>
          <Masterhead/>
          <Contact/>
          <Section id="info"> 
            <div id="carouselExampleFade" className="bg-light carousel slide carousel-fade w-100 sectionPadding" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner py-5 px-5 text-uppercase fjalla">
                <div className="carousel-item active">
                  <p className="d-block w-100 infoCarousel">El mejor aliado para asegurar tus espacios</p>
                </div>
                <div className="carousel-item">
                  <p className="d-block w-100 infoCarousel">Optimice sus recursos con grandes soluciones</p>
                </div>
                <div className="carousel-item">
                  <p className="d-block w-100 infoCarousel">Aseguramos tus espacios con equipo y soporte profesional</p>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span><img src={arrowLeft} className="carouselArrow" aria-hidden="true" alt="arrow left"/></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span><img src={arrowRight} className="carouselArrow" aria-hidden="true" alt="arrow right"/></span>
                <span className="sr-only">Next</span>
              </a>
            </div>

            <div className="infoDiv w-100 h-50 sectionPadding">
                <InfoContainer></InfoContainer>
            </div>
          </Section>

          <Section id="thanks"> 
            <div className="thanksDiv w-100 sectionPadding text-white text-uppercase">
              <h3 className="sectionTitle fjalla">Te mantenemos seguro</h3>
              <p className="sectionDescription font-weight-bold">Brindamos alternativas de seguridad tecnológica y soluciones integrales para asegurar tu proyecto con numerosos beneficios de manera profesional</p>
              <ButtonCustom color="blue-cta" href="https://api.whatsapp.com/send?phone=529842879394&text=Hola%2C%20deseo%20obtener%20mayor%20informaci%C3%B3n%20de%20Maytech%20Seguridad%20electr%C3%B3nica.">Ver más<i className="fas fa-chevron-right ml-3"></i></ButtonCustom>
            </div>

            <div className="w-100 py-4 thanksDescriptionDiv text-uppercase sectionPadding1">

              <div className="row">

                <div className="col-md-6 d-flex flex-row align-items-center px-lg-5">
                  <div className="thanksItem">
                    <i className="fas fa-user-lock text-white"></i>
                  </div>
                  <div className="thanksItem2 txt-black ml-4 py-3">
                    <h4 className="mb-2 fjalla sectionSubtitle">Expertos en seguridad</h4>
                    <p className="font-weight-bold">Instalaciones para viviendas, empresas y negocios</p>
                  </div>
                </div>

                <div className="col-md-6 px-0 py-1 txt-black">

                  <ThanksContainer></ThanksContainer>

                </div>

              </div>
            </div> 
          </Section>

          <Section id="services"> 
            <div className="services1 w-100 text-center">
              <ServicesItem></ServicesItem>
              <ButtonCustom color="blue-cta" href="https://api.whatsapp.com/send?phone=529842879394&text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20asesor%C3%ADa%20personalizada%20sobre%20sus%20sistemas%20de%20seguridad%20electr%C3%B3nica.">Asesoría personalizada<i className="fas fa-chevron-right ml-3"></i></ButtonCustom>
            </div> 
          </Section>

          <Section id="services2"> 
            <div className="services2 w-100 sectionPadding">
              <h3 className="sectionTitle txt-black text-uppercase fjalla">Nuestros servicios</h3>
              <div className="row text-uppercase py-3">

                <div className="col-md-4 d-flex justify-content-around p-0 m-0">
                  <div className="service2Item col-6 px-2" onClick={() => this.SetService('Industrial')}>
                    <i className="service2Shape fas fa-industry mb-3"></i>
                    <p className="service2Name txt-black font-weight-bold">Industrial</p>
                  </div>
                  <div className="service2Item col-6 px-2" onClick={() => this.SetService('Hotelero')}>
                    <i className="service2Shape fas fa-hotel mb-3"></i>
                    <p className="service2Name txt-black font-weight-bold">Hotelero</p>
                  </div>
                </div>

                <div className="col-md-4 d-flex justify-content-around p-0 m-0">
                  <div className="service2Item col-6 px-2" onClick={() => this.SetService('Empresarial')}>
                    <i className="service2Shape fas fa-building mb-3"></i>
                    <p className="service2Name txt-black font-weight-bold">Empresarial</p>
                  </div>
                  <div className="service2Item col-6 px-2" onClick={() => this.SetService('Arquitecto')}>
                    <i className="service2Shape fas fa-hard-hat mb-3"></i>
                    <p className="service2Name txt-black font-weight-bold">Arquitecto contratista</p>
                  </div>
                </div>

                <div className="col-md-4 d-flex justify-content-around p-0 m-0">
                  <div className="service2Item col-6 px-2" onClick={() => this.SetService('Hogar')}>
                    <i className="service2Shape fas fa-home mb-3"></i>
                    <p className="service2Name txt-black font-weight-bold">Hogar y condominios</p>
                  </div>
                  <div className="service2Item col-6 px-2" onClick={() => this.SetService('Sanitizacion')}>
                    <i className="service2Shape fas fa-hands-wash mb-3"></i>
                    <p className="service2Name txt-black font-weight-bold">Sanitización e higiene</p>
                  </div>
                </div>

              </div>
            </div>
            <div className="services2Div w-100 sectionPadding1">
              <ServicesContainer service={`${this.state.service}`}></ServicesContainer>
            </div>
          </Section>

          <Section id="solutions" css="solutionsDiv"> 
            <div className="solutionsText w-100 sectionPadding text-white text-uppercase">
              <h3 className="sectionTitle fjalla">Soluciones integrales</h3>
              <p className="sectionDescription">Realizamos plan de seguridad integral, con profesionales capacitados en gestión y desarrollo de proyectos</p>
              <ButtonCustom color="blue-cta" href="https://api.whatsapp.com/send?phone=529842879394&text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20de%20seguridad%20electr%C3%B3nica.">Cotizar mi proyecto<i className="fas fa-chevron-right ml-3"></i></ButtonCustom>
            </div>

            <StepContainer></StepContainer>
          </Section>

          <Section id="about"> 
            <div className="aboutDiv sectionPadding text-white text-uppercase">
              <h3 className="sectionTitle fjalla">Maytech seguridad</h3>
              <div className="aboutDiv1">
                <p className="sectionDescription">Venta e instalación de equipos de seguridad, control y automatización con tecnología de vanguardia <br/> <br/>
                Contamos con capital humano, capacitado para generar soluciones eficientes para nuestros clientes
                </p>
                <img className="logoSyscom mb-3" src={syscom} alt="logo syscom"/><br></br>
                <ButtonCustom color="blue-cta mb-2 mr-2">Comprar equipo<i className="fas fa-chevron-right ml-3"></i></ButtonCustom>
                <ButtonCustom color="transparent" href="https://api.whatsapp.com/send?phone=529842879394&text=Hola%2C%20deseo%20obtener%20mayor%20informaci%C3%B3n%20de%20Maytech%20Seguridad%20electr%C3%B3nica.">Más información<i className="fas fa-chevron-right ml-3"></i></ButtonCustom>
              </div>
            </div>

            <div className="aboutBrandDiv sectionPadding1 w-100 d-flex align-items-center flex-column relative">
              <h4 className="txt-black text-uppercase fjalla sectionSubtitle">Trabajamos con las mejores marcas</h4>
              <Slider></Slider>
            </div> 
          </Section>

          <Section id="contact" css="contactDiv sectionPadding2"> 
              <h3 className="sectionTitle text-white text-uppercase fjalla">Contacto e información</h3>
              <p className="sectionDescription text-white text-uppercase pr-5">Disfrute de todos los beneficios al trabajar con nosotros, el mejor aliado para tu seguridad</p>
                <div  className="row contactContainer d-flex justify-content-between">

                  <div className="checkListContainer col-md-6 text-white p-0">

                    <div className="d-flex align-items-center checkList py-4">
                      <i className="checkItem fas fa-check"></i>
                      <div className="checkListLine checkListLine0"></div>
                      <div className="checkDescription">
                        <h4 className="text-uppercase m-0 font-weight-bold">Expertos en seguridad</h4>
                        <p className="m-0">Para uso doméstico, comercial e industrial</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center checkList pb-4">
                      <i className="checkItem fas fa-check"></i>
                      <div className="checkListLine checkListLine1"></div>
                      <div className="checkDescription">
                        <h4 className="text-uppercase m-0 font-weight-bold">Satisfacción asegurada</h4>
                        <p className="m-0">Ofrecemos 1 año de garantía en nuestra línea</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center checkList pb-4">
                      <i className="checkItem fas fa-check"></i>
                      <div className="checkListLine checkListLine2"></div>
                      <div className="checkDescription">
                        <h4 className="text-uppercase m-0 font-weight-bold">Marcas líderes</h4>
                        <p className="m-0">Empleamos las mejores marcas en seguridad</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center checkList pb-4">
                      <i className="checkItem fas fa-check"></i>
                      <div className="checkDescription">
                        <h4 className="text-uppercase m-0 font-weight-bold">24/7 soporte técnico</h4>
                        <p className="m-0">Contamos con soporte técnico especializado</p>
                      </div>
                    </div>

                  </div>

                  <div className="col-md-6 formContainer">
                    
                    <form className="text-white pt-3 pb-5 px-lg-4">

                      <div className="form-row text-uppercase">
                        <div className="form-group col-md-6 mb-0">
                          <label className="font-weight-bold">Nombre</label>
                          <input type="text" className="form-control" id="name" placeholder="Ingresa tu nombre" maxLength="25" required/>
                        </div>
                        <div className="form-group col-md-6 mb-0">
                        <label className="font-weight-bold">Telefóno</label>
                          <input type="text" className="form-control" id="inputPhone" placeholder="Ingresa tu teléfono" maxLength="14" required/>
                        </div>
                      </div>

                      <div className="form-group text-uppercase mb-0">
                        <label className="font-weight-bold">Correo</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Ingresa tu correo electrónico" aria-describedby="emailHelp" required/>
                      </div>

                      <div className="form-group text-uppercase mb-0">
                        <label className="font-weight-bold">Mensaje</label>
                        <textarea type="text" className="form-control" id="inputText" placeholder="Déjanos tu mensaje" maxLength="100"/>
                      </div>

                      <button type="submit" className="btn btn-enviar my-3 font-weight-bold text-uppercase">Enviar</button>

                      <div className="form-row d-flex flex-column formDirection px-2 font-weight-bold">
                        <div className="d-flex align-items-center mb-2">
                          <i className="fas fa-map-marker-alt pr-2"></i>
                          <p className="m-0">Playa del Carmen, Quintana Roo - México</p>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <i className="fas fa-phone pr-2"></i>
                          <p className="m-0">+(521) 984 287 9394</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="fas fa-envelope pr-2"></i>
                          <p className="m-0">info@maytechseguridad.com</p>
                        </div>
                      </div>

                    </form>

                  </div>
                
                </div>
          </Section>

          <Section id="clients" css="clientsDiv sectionPadding">
              <h3 className="sectionTitle txt-black text-uppercase fjalla">Nuestros clientes maytech</h3>
              <div className="row d-flex align-items-center py-lg-3">
                <div className="col-md-6 px-0">
                  <h4 className="txt-black text-uppercase fjalla">Tu mejor aliado en seguridad</h4>
                </div>
                <div className="col-md-6 px-0">
                  <ul className="list-unstyled txt-black text-uppercase font-weight-bold">
                    <li>5 años de experiencia</li>
                    <li>Cobertura regional en el sureste mexicano</li>
                    <li>Venta de equipo a nivel nacional</li>
                    <li>Análisis y gestión de proyectos especializados</li>
                  </ul>
                </div>

                <Clients></Clients>

              </div>
          </Section>

          <Section id="blog"> 
            <div className="blogDiv w-100 sectionPadding">
              <h3 className="sectionTitle text-white text-uppercase fjalla">Mantente actualizado</h3>
              <div className="d-flex flex-column flex-lg-row justify-content-between">

                <div className="blogItem col-md-6 d-flex flex-column justify-content-between bg-light mr-2 py-2 px-4">
                  <div>
                    <h5 className="text-uppercase fjalla">7 herramientas básicas para todo técnico en cctv, control de acceso y alarmas</h5>
                    <p className="m-0">10 octubre, 2020</p>
                  </div>
                  <div className="d-flex align-items-center readMore">
                    <p className="my-2 font-weight-bolder">Leer más</p>
                    <i className="fas fa-chevron-right mx-2"></i>
                  </div>
                </div>

                <div className="blogItem col-md-6 d-flex flex-column justify-content-between bg-light ml-lg-2 py-2 px-4">
                  <div>
                    <h5 className="text-uppercase fjalla">Organiza tu plan de acción</h5>
                    <p className="m-0">19 junio, 2020</p>
                  </div>
                  <div className="d-flex align-items-center readMore">
                    <p className="my-2 font-weight-bolder">Leer más</p>
                    <i className="fas fa-chevron-right mx-2"></i>
                  </div>
                </div>
                
              </div>
            </div>

            <div className="footerDiv row d-flex align-items-start w-100 sectionPadding1 mb-2">
                
                <div className="col-md-4 px-md-0 pt-4">
                  <img src={logo} alt="logo maytech" className="mb-2"/>
                  <p className="text-white font-weight-lighter pr-5 mb-3 md-mb-5">Venta e instalación de equipos de seguridad, control y automatización con tecnología de vanguardia</p>
                  <div className="rrss">
                    <a href="https://www.facebook.com/maytechseguridad" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=529842879394&text=Hola%2C%20deseo%20obtener%20mayor%20informaci%C3%B3n%20de%20Maytech%20Seguridad%20electr%C3%B3nica."><i className="fab fa-whatsapp"></i></a>
                    <a href="https://www.instagram.com/maytechseguridad/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/maytechplaya/about/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>

                <div className="col-md-4 pt-4">
                  <h5 className="footerTittle text-white text-uppercase fjalla">Contáctanos</h5>
                  <div className="footerLine mb-2 mb-lg-4"></div>
                  <p className="text-white font-weight-lighter">Playa del Carmen, México<br/><br/>
                    teléfono : <span className="font-weight-bold">+(521) 984 287 9394</span><br/>
                    email : <span className="font-weight-bold">info@maytechseguridad.com</span>
                  </p>
                </div>

                <div className="col-md-4 pr-md-0 pt-2 pt-md-4 pb-sm-3">
                  <h5 className="footerTittle text-white text-uppercase fjalla">Suscríbete</h5>
                  <div className="footerLine mb-md-2 mb-lg-4"></div>
                  <p className="text-white pr-lg-5 font-weight-lighter">Suscríbete y recibe increíbles descuentos</p>
                  <form>
                    <input className="mb-md-3 px-2" placeholder="Déjanos tu correo electrónico"></input><br/>
                    <button type="submit font-weight-bold" className="text-uppercase mb-3">Enviar<i className="fas fa-chevron-right ml-3"></i></button>
                  </form>
                </div>

                <div className="copyDiv col m-0 p-0">
                  <p className="copyright font-weight-light text-white">
                  <span className="font-weight-bold">Maytech Seguridad © 2021</span> | Todos los derechos reservados
                  </p>
                </div>
            </div>
          </Section>
        </div>
    );
  }
}
