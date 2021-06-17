import React from 'react';
import { Icon } from '../shared/Icon';
import {InfoItem} from './InfoItem';
import {InfoIcon} from './InfoIcon';
import {InfoNumber} from './InfoNumber';
import {InfoDescription} from './InfoDescription';

export class InfoContainer extends React.Component {
  render(){
      return(
        <div className="row text-uppercase text-white font-weight-bold">

          <InfoItem>
            <InfoIcon>
              <Icon icon="building"></Icon>
            </InfoIcon>
            <InfoNumber>146</InfoNumber>
            <InfoDescription>Espacios seguros</InfoDescription>
          </InfoItem>

          <InfoItem>
            <InfoIcon>
              <Icon icon="shield-alt"></Icon>
            </InfoIcon>
            <InfoNumber>791</InfoNumber>
            <InfoDescription>Sistemas de seguridad instalados</InfoDescription>
          </InfoItem>

          <InfoItem>
            <InfoIcon>
              <Icon icon="shopping-cart"></Icon>
            </InfoIcon>
            <InfoNumber>1072</InfoNumber>
            <InfoDescription>Equipos profesionales vendidos</InfoDescription>
          </InfoItem>

          <InfoItem>
            <InfoIcon>
              <Icon icon="wrench"></Icon>
            </InfoIcon>
            <InfoNumber>960</InfoNumber>
            <InfoDescription>Pólizas de mantenimiento</InfoDescription>
          </InfoItem>

        </div>
      );
  }
}