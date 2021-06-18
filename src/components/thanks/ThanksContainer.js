import React from 'react';
import { ThanksItem } from './ThanksItem';
import { Icon } from '../shared/Icon';
import { ThanksTitle } from './ThanksTitle';
import { ThanksDescription } from './ThanksDescription';

export class ThanksContainer extends React.Component{
  render(){
    return(
          <ul>
            <ThanksItem css="d-flex align-items-center py-2">
              <Icon icon="circle" css="pr-3"></Icon>
              <div>
                <ThanksTitle>24/7 Soporte técnico</ThanksTitle>
                <ThanksDescription>Contamos con soporte técnico especializado</ThanksDescription>
              </div>
            </ThanksItem>

            <ThanksItem css="d-flex align-items-center pb-2">
              <Icon icon="circle" css="pr-3"></Icon>
              <div>
                <ThanksTitle>Satisfacción asegurada</ThanksTitle>
                <ThanksDescription>Ofrecemos 1 año de garantía en nuestra línea</ThanksDescription>
              </div>
            </ThanksItem>

            <ThanksItem css="d-flex align-items-center">
              <Icon icon="circle" css="pr-3"></Icon>
              <div>
                <ThanksTitle>Marcas líderes</ThanksTitle>
                <ThanksDescription>Empleamos las mejores marcas en seguridad</ThanksDescription>
              </div>
            </ThanksItem>
          </ul>

    );
  }
}

    