import React, { Component } from 'react';
import { Masterhead } from './Masterhead';
import { Section } from './shared/Section';
import { ServicesContainer } from './services/ServicesContainer';
import arrowRight from '../assets/svg/arrowRight.png';
import arrowLeft from '../assets/svg/arrowLeft.png';
import logo from '../assets/img/Logo.png';
import venta from '../assets/img/Venta.png';
import seguridad from '../assets/img/Seguridad.png';
import control from '../assets/img/Control.png';
import cctv from '../assets/img/CCTV.png';
import intrusion from '../assets/img/Intrusion.png';
import syscom from '../assets/img/Syscom.png';

import belden from '../assets/brands/Belden.jpg';
import condumex from '../assets/brands/Condumex.jpg';
import dks from '../assets/brands/DKS.jpg';
import epcom from '../assets/brands/Epcom.jpg';
import faac from '../assets/brands/FAAC.jpg';

import grandstream from '../assets/brands/GrandStream.jpg';
import hangua from '../assets/brands/Hangua.jpg';
import hikvision from '../assets/brands/Hikvision.jpg';
import honeywell from '../assets/brands/Honeywell.jpg';
import idis from '../assets/brands/IDIS.jpg';

import linkedpro from '../assets/brands/Linkedpro.jpg';
import samsung from '../assets/brands/Samsung.jpg';
import tplink from '../assets/brands/TP-link.jpg';
import ubiquiti from '../assets/brands/Ubiquiti.jpg';
import zteco from '../assets/brands/Zteco.jpg';

import alma from '../assets/clients/Alma.png';
import vidanta from '../assets/clients/Vidanta.png';
import jardines from '../assets/clients/Jardines.png';
import playacar from '../assets/clients/Playacar.png';
import plaza from '../assets/clients/Plaza.png';
import cerma from '../assets/clients/Cerma.png';
import corasol from '../assets/clients/Corasol.png';
import jv from '../assets/clients/JV.png';
import clandestino from '../assets/clients/Clandestino.webp';
import bbcondos from '../assets/clients/BBCondos.png';
import plank from '../assets/clients/Plank.png';
import { ButtonCustom } from './bootstrap/ButtonCustom';
import { Contact } from './Contact';

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
          <Section id="info"> {/* INFO */}
            <div id="carouselExampleFade" className="bg-light carousel slide carousel-fade w-100 sectionPadding" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner py-5 px-5 text-uppercase">
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
                <div className="row text-uppercase text-white">

                  <div className="col-3 p-0 infoItem">
                    <div className="infoSvg pb-2"><i className="fas fa-building"></i></div>
                    <h3 className="borderR">146</h3>
                    <p className="px-lg-5">Espacios seguros</p>
                  </div>
                  <div className="col-3 p-0 infoItem">
                    <div className="infoSvg pb-2"><i className="fas fa-shield-alt"></i></div>
                    <h3 className="borderR">791</h3>
                    <p className="px-lg-5">Sistemas de seguridad instalados</p>
                  </div>
                  <div className="col-3 p-0 infoItem">
                    <div className="infoSvg pb-2"><i className="fas fa-shopping-cart"></i></div>
                    <h3 className="borderR">1072</h3>
                    <p className="px-lg-5">Equipos profesionales vendidos</p>
                  </div>
                  <div className="col-3 p-0 infoItem">
                    <div className="infoSvg pb-2"><i className="fas fa-wrench"></i></div>
                    <h3 className="">960</h3>
                    <p className="px-lg-5">Pólizas de mantenimiento</p>
                  </div>

                </div>
            </div>
          </Section>

          <Section> {/* THANKS */}
            <div className="thanksDiv w-100 sectionPadding text-white text-uppercase">
              <h3 className="sectionTitle">Te mantenemos seguro</h3>
              <p className="sectionDescription">Brindamos alternativas de seguridad tecnológica y soluciones integrales para asegurar tu proyecto con numerosos beneficios de manera profesional</p>
              <ButtonCustom color="blue-cta" href="https://api.whatsapp.com/send?phone=529842879394&text=Hola%2C%20deseo%20obtener%20mayor%20informaci%C3%B3n%20de%20Maytech%20Seguridad%20electr%C3%B3nica.">Ver más<i className="fas fa-chevron-right ml-3"></i></ButtonCustom>
            </div>

            <div className="w-100 py-4 thanksDescriptionDiv text-uppercase sectionPadding1">

              <div className="row">

                <div className="col-lg-6 d-flex flex-row align-items-center px-lg-5">
                  <div className="thanksItem">
                    <i className="fas fa-user-lock text-white"></i>
                  </div>
                  <div className="thanksItem2 txt-black ml-4 py-3">
                    <h4 className="mb-2">Expertos en seguridad</h4>
                    <p>Instalaciones para viviendas, empresas y negocios</p>
                  </div>
                </div>

                <div className="col-lg-6 px-0 py-1 txt-black">
                  <ul>

                    <li className="d-flex align-items-center py-2">
                      <i className="fas fa-circle pr-3"></i>
                      <div>
                        <p className="descriptionTitle mb-0">24/7 Soporte técnico</p>
                        <p className="mb-0">Contamos con soporte técnico especializado</p>
                      </div>
                    </li>

                    <li className="d-flex align-items-center pb-2">
                      <i className="fas fa-circle pr-3"></i>
                      <div>
                        <p className="descriptionTitle mb-0">Satisfacción asegurada</p>
                        <p className="mb-0">Ofrecemos 1 año de garantía en nuestra línea</p>
                      </div>
                    </li>

                    <li className="d-flex align-items-center">
                      <i className="fas fa-circle pr-3"></i>
                      <div>
                        <p className="descriptionTitle mb-0">Marcas líderes</p>
                        <p className="mb-0">Empleamos las mejores marcas en seguridad</p>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>
            </div> 
          </Section>

          <Section id="services"> {/* SERVICES 1 */}
            <div className="services1 w-100 text-center">
              <div className="row sectionPadding text-center d-flex justify-content-center text-uppercase mt-4">

                <div className="serviceItem col-lg-3 py-2 mx-2 mb-3">
                  <img className="pt-2 pb-2" src={venta} alt="ventas"/>
                  <h4 className="py-2 txt-black">Venta de equipo</h4>
                  <p className="pb-2 m-0 txt-black">Proveemos equipo profesional para tu proyecto</p>
                </div>

                <div className="serviceItem col-lg-3 py-2 mx-2 mb-3">
                  <img className="pt-2" src={seguridad} alt="seguridad"/>
                  <h4 className="py-2 txt-black">Seguridad integral</h4>
                  <p className="pb-2 m-0 txt-black">Soluciones completas en sistemas de seguridad</p>
                </div>

                <div className="serviceItem col-lg-3 py-2 mx-2 mb-3">
                  <img className="pt-2 pb-2" src={control} alt="control de hogar"/>
                  <h4 className="py-2 txt-black">Control de acceso</h4>
                  <p className="pb-2 m-0 txt-black">Restringe el acceso con tecnología de gama</p>
                </div>

                <div className="serviceItem col-lg-3 py-2 mx-2 mb-3">
                  <img className="pt-2 pb-3 mt-2" src={cctv} alt="cctv"/>
                  <h4 className="py-2 txt-black">Cctv</h4>
                  <p className="pb-2 m-0 txt-black">Vigila tu casa o negocio desde el celular</p>
                </div>
                
                <div className="serviceItem col-lg-3 py-2 mx-2 mb-3">
                  <img className="pt-2" src={intrusion} alt="intrusion"/>
                  <h4 className="py-2 txt-black">Intrusión</h4>
                  <p className="pb-2 m-0 txt-black">Prevención automática de robo en cualquier entorno</p>
                </div>
              </div>
              <ButtonCustom color="blue-cta" href="https://api.whatsapp.com/send?phone=529842879394&text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20asesor%C3%ADa%20personalizada%20sobre%20sus%20sistemas%20de%20seguridad%20electr%C3%B3nica.">Asesoría personalizada<i className="fas fa-chevron-right ml-3"></i></ButtonCustom>
            </div> 
          </Section>

          <Section> {/* SERVICES 2 */}
            <div className="services2 w-100 sectionPadding">
              <h3 className="sectionTitle txt-black text-uppercase">Nuestros servicios</h3>
              <div className="row text-uppercase py-3">

                <div className="col-md-4 d-flex justify-content-around p-0 m-0">
                  <div className="service2Item col-6 px-2" onClick={() => this.SetService('Industrial')}>
                    <i className="service2Shape fas fa-industry mb-3"></i>
                    <p className="service2Name txt-black">Industrial</p>
                  </div>
                  <div className="service2Item col-6 px-2" onClick={() => this.SetService('Hotelero')}>
                    <i className="service2Shape fas fa-hotel mb-3"></i>
                    <p className="service2Name txt-black">Hotelero</p>
                  </div>
                </div>

                <div className="col-md-4 d-flex justify-content-around p-0 m-0">
                  <div className="service2Item col-6 px-2" onClick={() => this.SetService('Empresarial')}>
                    <i className="service2Shape fas fa-building mb-3"></i>
                    <p className="service2Name txt-black">Empresarial</p>
                  </div>
                  <div className="service2Item col-6 px-2" onClick={() => this.SetService('Arquitecto')}>
                    <i className="service2Shape fas fa-hard-hat mb-3"></i>
                    <p className="service2Name txt-black">Arquitecto contratista</p>
                  </div>
                </div>

                <div className="col-md-4 d-flex justify-content-around p-0 m-0">
                  <div className="service2Item col-6 px-2" onClick={() => this.SetService('Hogar')}>
                    <i className="service2Shape fas fa-home mb-3"></i>
                    <p className="service2Name txt-black">Hogar y condominios</p>
                  </div>
                  <div className="service2Item col-6 px-2" onClick={() => this.SetService('Sanitizacion')}>
                    <i className="service2Shape fas fa-hands-wash mb-3"></i>
                    <p className="service2Name txt-black">Sanitización e higiene</p>
                  </div>
                </div>

              </div>
            </div>
            <div className="services2Div w-100 sectionPadding1">
              <ServicesContainer service={`${this.state.service}`}></ServicesContainer>
            </div>
          </Section>

          <Section className="solutionsDiv"> {/* SOLUTIONS */}
            <div className="solutionsText w-100 sectionPadding text-white text-uppercase">
              <h3 className="sectionTitle">Soluciones integrales</h3>
              <p className="sectionDescription">Realizamos plan de seguridad integral, con profesionales capacitados en gestión y desarrollo de proyectos</p>
              <ButtonCustom color="blue-cta" href="https://api.whatsapp.com/send?phone=529842879394&text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20de%20seguridad%20electr%C3%B3nica.">Cotizar mi proyecto<i className="fas fa-chevron-right ml-3"></i></ButtonCustom>
            </div>
            <div className="stepsDiv row text-white text-uppercase">

              <div className="step step1 col-md-3 col-sm-6 d-flex flex-column p-3 relative">
                <div className="stepContainer">
                  <div className="d-flex align-items-center">
                    <p className="stepNumber pr-2">1</p>
                    <p className="stepName">Análisis de riesgo</p>
                  </div>
                  <p className="stepDescription py-3">Diagnóstico de posibles amenazas y consecuencias</p>
                </div>
              </div>

              <div className="step step2 col-md-3 col-sm-6 d-flex flex-column p-3 relative">
                <div className="stepContainer">
                  <div className="d-flex align-items-center">
                    <p className="stepNumber pr-2">2</p>
                    <p className="stepName">Proyecto personalizado</p>
                  </div>
                  <p className="stepDescription py-3">Diagnóstico de posibles amenazas y consecuencias</p>
                </div>
              </div>

              <div className="step step3 col-md-3 col-sm-6 d-flex flex-column p-3 relative">
                <div className="stepContainer">
                  <div className="d-flex align-items-center">
                    <p className="stepNumber pr-2">3</p>
                    <p className="stepName">Desarrollo e instalación</p>
                  </div>
                  <p className="stepDescription py-3">Plan con las mejores herramientas y tecnología</p>
                </div>
              </div>

              <div className="step step4 col-md-3 col-sm-6 d-flex flex-column p-3 relative">
                <div className="stepContainer">
                  <div className="d-flex align-items-center">
                    <p className="stepNumber pr-2">4</p>
                    <p className="stepName">Mantenimiento y soporte</p>
                  </div>
                  <p className="stepDescription py-3">Diagnóstico de posibles amenazas y consecuencias</p>
                </div>
              </div>

            </div>
          </Section>

          <Section id="about"> {/* ABOUT */}
            <div className="aboutDiv sectionPadding text-white text-uppercase">
              <h3 className="sectionTitle">Maytech seguridad</h3>
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
              <h4 className="txt-black text-uppercase">Trabajamos con las mejores marcas</h4>
              <div className="slider">
                <div className="slide-track">

                  <div className="slide">
                    <img className="brand" src={belden} alt="logo belden" />
                  </div>
                  <div className="slide">
                    <img className="brand" src={condumex} alt="logo condumex" />
                  </div>
                  <div className="slide">
                    <img className="brand" src={dks} alt="logo dks" />
                  </div>
                  <div className="slide">
                    <img className="brand" src={epcom} alt="logo epcom" />
                  </div>
                  <div className="slide">
                    <img className="brand" src={faac} alt="logo faac" />
                  </div>

                  <div className="slide">
                    <img className="brand" src={grandstream} alt="logo grandstream" />
                  </div>
                  <div className="slide">
                    <img className="brand" src={hangua} alt="logo hangua" />
                  </div>
                  <div className="slide">
                    <img className="brand" src={hikvision} alt="logo hikvision" />
                  </div>
                  <div className="slide">
                    <img className="brand" src={honeywell} alt="logo honeywell" />
                  </div>
                  <div className="slide">
                    <img className="brand" src={idis} alt="logo idis" />
                  </div>

                  <div className="slide">
                    <img className="brand" src={linkedpro} alt="logo linkedpro" />
                  </div>
                  <div className="slide">
                    <img className="brand" src={samsung} alt="logo samsung" />
                  </div>
                  <div className="slide">
                    <img className="brand" src={tplink} alt="logo tplink" />
                  </div>
                  <div className="slide">
                    <img className="brand" src={ubiquiti} alt="logo ubiquiti" />
                  </div>
                  <div className="slide">
                    <img className="brand" src={zteco} alt="logo zteco" />
                  </div>

                </div>
              </div>
            </div> 
          </Section>

          <Section id="contact" image="contactDiv sectionPadding2"> {/* CONTACT */}
              <h3 className="sectionTitle text-white text-uppercase">Contacto e información</h3>
              <p className="sectionDescription text-white text-uppercase pr-5">Disfrute de todos los beneficios al trabajar con nosotros, el mejor aliado para tu seguridad</p>
                <div  className="row contactContainer d-flex justify-content-between">

                  <div className="checkListContainer col-md-6 text-white p-0">

                    <div className="d-flex align-items-center checkList py-4">
                      <i className="checkItem fas fa-check"></i>
                      <div className="checkListLine"></div>
                      <div className="checkDescription">
                        <h4 className="text-uppercase m-0">Expertos en seguridad</h4>
                        <p className="m-0">Para uso doméstico, comercial e industrial</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center checkList pb-4">
                      <i className="checkItem fas fa-check"></i>
                      <div className="checkListLine1"></div>
                      <div className="checkDescription">
                        <h4 className="text-uppercase m-0">Satisfacción asegurada</h4>
                        <p className="m-0">Ofrecemos 1 año de garantía en nuestra línea</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center checkList pb-4">
                      <i className="checkItem fas fa-check"></i>
                      <div className="checkListLine2"></div>
                      <div className="checkDescription">
                        <h4 className="text-uppercase m-0">Marcas líderes</h4>
                        <p className="m-0">Empleamos las mejores marcas en seguridad</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center checkList pb-4">
                      <i className="checkItem fas fa-check"></i>
                      <div className="checkDescription">
                        <h4 className="text-uppercase m-0">24/7 soporte técnico</h4>
                        <p className="m-0">Contamos con soporte técnico especializado</p>
                      </div>
                    </div>

                  </div>

                  <div className="col-md-6 formContainer">
                    
                    <form className="text-white pt-3 pb-5 px-lg-4">

                      <div className="form-row text-uppercase">
                        <div className="form-group col-md-6 mb-0">
                          <label>Nombre</label>
                          <input type="text" className="form-control" id="name" placeholder="Ingresa tu nombre" maxLength="25" required/>
                        </div>
                        <div className="form-group col-md-6 mb-0">
                          <label>Telefóno</label>
                          <input type="text" className="form-control" id="inputPhone" placeholder="Ingresa tu teléfono" maxLength="14" required/>
                        </div>
                      </div>

                      <div className="form-group text-uppercase mb-0">
                        <label>Correo</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Ingresa tu correo electrónico" aria-describedby="emailHelp" required/>
                      </div>

                      <div className="form-group text-uppercase mb-0">
                        <label>Mensaje</label>
                        <textarea type="text" className="form-control" id="inputText" placeholder="Déjanos tu mensaje" maxLength="100"/>
                      </div>

                      <button type="submit" className="btn btn-enviar my-3">Enviar</button>

                      <div className="form-row d-flex flex-column formDirection px-2">
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

          <Section image="clientsDiv sectionPadding"> {/* CLIENTS */}
              <h3 className="sectionTitle txt-black text-uppercase">Nuestros clientes maytech</h3>
              <div className="row d-flex align-items-center py-lg-3">
                <div className="col-lg-6 px-0">
                  <h4 className="txt-black text-uppercase">Tu mejor aliado en seguridad</h4>
                </div>
                <div className="col-lg-6 px-0">
                  <ul className="list-unstyled txt-black text-uppercase">
                    <li>5 años de experiencia</li>
                    <li>Cobertura regional en el sureste mexicano</li>
                    <li>Venta de equipo a nivel nacional</li>
                    <li>Análisis y gestión de proyectos especializados</li>
                  </ul>
                </div>
                <div className="col">
                  <div className="col mb-3 d-flex align-items-center justify-content-between">
                    <img className="client client1" src={alma} alt="logo alma tulum"/>
                    <img className="client client2" src={vidanta} alt="logo vidanta"/>
                    <img className="client client3" src={jardines} alt="logo jardines"/>
                    <img className="client client4" src={playacar} alt="logo playacar"/>
                    <img className="client client5" src={plaza} alt="logo plaza congreso"/>
                  </div>
                  <div className="col mb-3 d-flex align-items-center justify-content-around">
                    <img className="client client6" src={cerma} alt="logo grupo cerma"/>
                    <img className="client client7" src={corasol} alt="logo corasol"/>
                    <img className="client client8" src={jv} alt="logo jv"/>
                    <img className="client client9" src={clandestino} alt="logo clandestino"/>
                    <img className="client client10" src={bbcondos} alt="logo bb condos"/>
                  </div>
                  <div className="col mb-sm-3 d-flex align-items-center justify-content-center">
                    <img className="client client11" src={plank} alt="logo plank"/>
                  </div>
                </div>
              </div>
          </Section>

          <Section id="blog"> {/* BOTTON */}
            <div className="blogDiv w-100 sectionPadding">
              <h3 className="sectionTitle text-white text-uppercase">Mantente actualizado</h3>
              <div className="d-flex flex-column flex-lg-row justify-content-between">

                <div className="blogItem col-lg-6 d-flex flex-column justify-content-between bg-light mr-2 py-2 px-4">
                  <div>
                    <h5 className="text-uppercase">7 herramientas básicas para todo técnico en cctv, control de acceso y alarmas</h5>
                    <p className="m-0">10 octubre, 2020</p>
                  </div>
                  <div className="d-flex align-items-center readMore">
                    <p className="my-2 font-weight-bolder">Leer más</p>
                    <i className="fas fa-chevron-right mx-2"></i>
                  </div>
                </div>

                <div className="blogItem col-lg-6 d-flex flex-column justify-content-between bg-light ml-lg-2 py-2 px-4">
                  <div>
                    <h5 className="text-uppercase">Organiza tu plan de acción</h5>
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
                
                <div className="col-md-4 pl-lg-0 pt-4">
                  <img src={logo} alt="logo maytech" className="mb-2"/>
                  <p className="text-white pr-5 mb-3">Venta e instalación de equipos de seguridad, control y automatización con tecnología de vanguardia</p>
                  <div className="rrss">
                    <a href="https://www.facebook.com/maytechseguridad" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=529842879394&text=Hola%2C%20deseo%20obtener%20mayor%20informaci%C3%B3n%20de%20Maytech%20Seguridad%20electr%C3%B3nica."><i className="fab fa-whatsapp"></i></a>
                    <a href="https://www.instagram.com/maytechseguridad/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/maytechplaya/about/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>

                <div className="col-md-4 pt-4">
                  <h5 className="footerTittle text-white text-uppercase">Contáctanos</h5>
                  <div className="footerLine mb-2 mb-lg-4"></div>
                  <p className="text-white">Playa del Carmen, México<br/><br/>
                    teléfono : <span className="font-weight-bold">+(521) 984 287 9394</span><br/>
                    email : <span className="font-weight-bold">info@maytechseguridad.com</span>
                  </p>
                </div>

                <div className="col-md-4 pr-lg-0 pt-2 pt-lg-4 pb-sm-3">
                  <h5 className="footerTittle text-white text-uppercase">Suscríbete</h5>
                  <div className="footerLine mb-2 mb-lg-4"></div>
                  <p className="text-white pr-5">Suscríbete y recibe increíbles descuentos</p>
                  <form>
                    <input className="mb-3 px-2" placeholder="Déjanos tu correo electrónico"></input><br/>
                    <button type="submit" className="text-uppercase mb-3">Enviar<i className="fas fa-chevron-right ml-3"></i></button>
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
