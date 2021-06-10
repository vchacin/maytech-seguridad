import React, { Component } from 'react';
import { Masterhead } from './Masterhead';
import { Section } from './shared/Section';


export class Home extends Component {
  static displayName = Home.name;

  render () {
      return (
        <div>
          <Masterhead />
          <Section>
            <div id="carouselExampleFade" className="bg-light carousel slide carousel-fade w-100 h-50 sectionPadding" data-ride="carousel">
              <div className="carousel-inner px-5 text-uppercase">
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
                <span><i class="fa fa-angle-left carouselArrow fa-3x" aria-hidden="true"></i></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span><i class="fa fa-angle-right carouselArrow fa-3x" aria-hidden="true"></i></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div className="infoDiv w-100 h-50 sectionPadding">

            </div>
          </Section>

          <Section>
            <div className="thanksDiv w-100 sectionPadding">
              <h3 className="sectionTittle text-white">TE MANTENEMOS SEGURO</h3>
            </div>
            <div className="w-100">

            </div>
          </Section>

          <Section>
            <div className="services1 w-100 h-100">

            </div>
          </Section>

          <Section>
            <div className="services2 w-100 h-50 sectionPadding">
              <h3 className="sectionTittle txt-black">NUESTROS SERVICIOS</h3>
            </div>
            <div className="w-100 h-50">

            </div>
          </Section>

          <Section className="solutionsDiv">
            <div className="solutionsText w-100 sectionPadding">
              <h3 className="sectionTittle text-white">SOLUCIONES INTEGRALES</h3>
            </div>
            <div className="row h-100">
              <div className="step step1 col-md-3 col-sm-6 h-75">

              </div>
              <div className="step step2 col-md-3 col-sm-6 h-75">
                
              </div>
              <div className="step step3 col-md-3 col-sm-6 h-75">
                
              </div>
              <div className="step step4 col-md-3 col-sm-6 h-75">
                
              </div>
            </div>
          </Section>

          <Section>
            <div className="aboutDiv w-100 sectionPadding">
              <h3 className="sectionTittle text-white">MAYTECH SEGURIDAD</h3>
            </div>
            <div className="w-100">

            </div>
          </Section>

          <Section image="contactDiv sectionPadding">
              <h3 className="sectionTittle text-white">CONTACTO E INFORMACIÓN</h3>
          </Section>

          <Section image="clientsDiv sectionPadding">
              <h3 className="sectionTittle txt-black">NUESTROS CLIENTES MAYTECH</h3>
          </Section>

          <Section>
            <div id="blog" className="blogDiv w-100 h-50 sectionPadding">
              <h3 className="sectionTittle text-white">MANTENTE ACTUALIZADO</h3>
            </div>
            <div className="footerDiv w-100 h-50 sectionPadding">
                <div>

                </div>
                <div>
                  <h5 className="footerTittle text-white">CONTÁCTANOS</h5>
                  <div className="footerLine"></div>
                </div>
                <div>
                  <h5 className="footerTittle text-white">SUSCRÍBETE</h5>
                  <div className="footerLine"></div>
                </div>
                <div>
                  <p className="font-weight-light text-white copyright"><span className="font-weight-bold">Maytech Seguridad © 2021</span> | Todos los derechos reservados</p>
                </div>
            </div>
          </Section>
        </div>
    );
  }
}
