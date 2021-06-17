import React, {Fragment} from 'react';
import { ServiceDescription } from './ServiceDescription';
import { ServiceType } from './ServiceType';
import { Icon } from '../shared/Icon';

export class ServicesContainer extends React.Component{

    static renderHotelero(){
      return(
        <div className="services2Container row text-uppercase">
          <div className="col-lg-12 pb-2">
            <h4 className="fjalla">Hotelero</h4>
          </div>
          <ServiceDescription>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>CCTV
            </ServiceType>
            <ServiceType type="Secondary">Discreción</ServiceType>
            <ServiceType type="Secondary">Equipos resistentes</ServiceType>
            <ServiceType type="Secondary">Tecnología</ServiceType>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>Rondineros
            </ServiceType>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>Interruptores de energía
            </ServiceType>
          </ServiceDescription>

          <ServiceDescription>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>Control de acceso
            </ServiceType>
            <ServiceType type="Secondary">Chapas inteligentes</ServiceType>
            <ServiceType type="Secondary">Ingreso con pulseras o tarjetas rfid</ServiceType>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>Control de tiempo y asistencia
            </ServiceType>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>Tarjeta de entrada
            </ServiceType>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>Cajas fuertes
            </ServiceType>
          </ServiceDescription>

        </div>
      );
    }

    static renderIndustrial(){
      return(
        <div className="services2Container row text-uppercase">
          <div className="col-lg-12 pb-2">
            <h4 className="fjalla">Industrial</h4>
          </div>
          <ServiceDescription>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>Cctv
            </ServiceType>
            <ServiceType type="Secondary">Cámaras de alta resistencia</ServiceType>
            <ServiceType type="Secondary">Videomuros</ServiceType>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>Capacitación
            </ServiceType>
          </ServiceDescription>

          <ServiceDescription>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>Control de Acceso
            </ServiceType>
            <ServiceType type="Secondary">Biométricos</ServiceType>
            <ServiceType type="Secondary">Torniquetes</ServiceType>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>Mantenimiento
            </ServiceType>
          </ServiceDescription>

        </div>
      );
    }

    static renderEmpresarial(){
      return(
        <div className="services2Container row text-uppercase">
          <div className="col-lg-12 pb-2">
            <h4 className="fjalla">Empresarial</h4>
          </div>
          <ServiceDescription>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>Cctv
            </ServiceType>
            <ServiceType type="Secondary">Discreción</ServiceType>
            <ServiceType type="Secondary">Tecnología</ServiceType>
            <ServiceType type="Secondary">Vanguardia</ServiceType>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>automatización
            </ServiceType>
          </ServiceDescription>

          <ServiceDescription>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>Control de acceso
            </ServiceType>
            <ServiceType type="Secondary">Control de tiempo </ServiceType>
            <ServiceType type="Secondary">Asistencia</ServiceType>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>Telefonía IP
            </ServiceType>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>Aires acondicionados
            </ServiceType>
          </ServiceDescription>

        </div>
      );
    }

    static renderArquitecto(){
      return(
        <div className="services2Container row text-uppercase">
          <div className="col-lg-12 pb-2">
            <h4 className="fjalla">Arquitecto contratista</h4>
          </div>
          <ServiceDescription>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>Desarrollo de Proyectos
            </ServiceType>
            <ServiceType type="Secondary">Obra negra</ServiceType>
            <ServiceType type="Secondary">Coordinación con encargados</ServiceType>
          </ServiceDescription>
        </div>
      );
    }

    static renderHogar(){
      return(
        <div className="services2Container row text-uppercase">
          <div className="col-lg-12 pb-2">
            <h4 className="fjalla">Hogar y condominios</h4>
          </div>
          <ServiceDescription>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>CCTV
            </ServiceType>
            <ServiceType type="Secondary">Monitoreo desde una app</ServiceType>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>Acceso remoto
            </ServiceType>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>Rondineros
            </ServiceType>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>Automatización
            </ServiceType>
          </ServiceDescription>

          <ServiceDescription>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>Control de acceso
            </ServiceType>
            <ServiceType type="Secondary">Inferfones</ServiceType>
            <ServiceType type="Secondary">Multiapartamentos</ServiceType>
            <ServiceType type="Secondary">Timbres IP</ServiceType>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>Aires acondicionados
            </ServiceType>
          </ServiceDescription>

        </div>
      );
    }

    static renderSanitizacion(){
      return(
        <div className="services2Container row text-uppercase">
          <div className="col-lg-12 pb-2">
            <h4 className="fjalla">Sanitizacion e higiene</h4>
          </div>
          <ServiceDescription>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>Sistemas de desinfección
            </ServiceType>
            <ServiceType type="Secondary">Industrial</ServiceType>
            <ServiceType type="Secondary">Residencial</ServiceType>
            <ServiceType type="Secondary">Hotelera</ServiceType>
            <ServiceType type="Secondary">Vehicular</ServiceType>
          </ServiceDescription>

          <ServiceDescription>
            <ServiceType type="Secondary">Avalados con pruebas de laboratorio, erradicando y previniendo +60 virus, bacterias y hongos incluyendo Coronavirus SARS-CoV-2 (COVID-19), influenza H1N1, entre otros</ServiceType>
            <ServiceType type="Primary">
              <Icon icon="check"></Icon>Purifog
            </ServiceType>
            <ServiceType type="Secondary">Cañon de niebla desinfectante</ServiceType>
          </ServiceDescription>

        </div>
      );
    }

    render() {
      let content = null;

      switch(this.props.service){
        case "Hotelero":
          content = ServicesContainer.renderHotelero();
          break;
        case "Industrial": 
          content = ServicesContainer.renderIndustrial();
          break;
        case "Empresarial": 
          content = ServicesContainer.renderEmpresarial();
          break;
        case "Arquitecto": 
          content = ServicesContainer.renderArquitecto();
          break;
        case "Hogar": 
          content = ServicesContainer.renderHogar();
          break;
        case "Sanitizacion": 
          content = ServicesContainer.renderSanitizacion();
          break;
        default: 
          content = ServicesContainer.renderIndustrial();
      }

      return(
        <Fragment>
          {content}
        </Fragment>
      );
    }
}