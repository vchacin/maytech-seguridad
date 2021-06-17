import React from 'react';
import { ServicesItemContainer } from './ServicesItemContainer';
import venta from '../../assets/img/Venta.png';
import seguridad from '../../assets/img/Seguridad.png';
import control from '../../assets/img/Control.png';
import cctv from '../../assets/img/CCTV.png';
import intrusion from '../../assets/img/Intrusion.png';
import { Image } from '../shared/Image';
import { ServicesTitle } from './ServicesTitle';
import { ServicesDetails } from './ServicesDetails';

export class ServicesItem extends React.Component{
  render(){
    return(
      <div className="row sectionPadding text-center d-flex justify-content-center text-uppercase mt-4">
        
        <ServicesItemContainer>
          <Image css="pt-2 pb-2" src={venta} alt="ventas"/>
          <ServicesTitle>Venta de equipo</ServicesTitle>
          <ServicesDetails>Proveemos equipo profesional para tu proyecto</ServicesDetails>
        </ServicesItemContainer>

        <ServicesItemContainer>
          <Image css="pt-2" src={seguridad} alt="seguridad"/>
          <ServicesTitle>Seguridad integral</ServicesTitle>
          <ServicesDetails>Soluciones completas en sistemas de seguridad</ServicesDetails>
        </ServicesItemContainer>

        <ServicesItemContainer>
          <Image css="pt-2 pb-2" src={control} alt="control de hogar"/>
          <ServicesTitle>Control de acceso</ServicesTitle>
          <ServicesDetails>Restringe el acceso con tecnología de gama</ServicesDetails>
        </ServicesItemContainer>

        <ServicesItemContainer>
          <Image css="pt-2 pb-3 mt-2" src={cctv} alt="cctv"/>
          <ServicesTitle>Cctv</ServicesTitle>
          <ServicesDetails>Vigila tu casa o negocio desde el celular</ServicesDetails>
        </ServicesItemContainer>

        <ServicesItemContainer>
          <Image css="pt-2" src={intrusion} alt="intrusion"/>
          <ServicesTitle>Intrusión</ServicesTitle>
          <ServicesDetails>Prevención automática de robo en cualquier entorno</ServicesDetails>
        </ServicesItemContainer>

      </div>
    );
  }
}

    