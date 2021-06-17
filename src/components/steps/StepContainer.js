import React from 'react';
import {StepNumber} from './StepNumber';
import {StepName} from './StepName';
import {StepDescription} from './StepDescription';

export class StepContainer extends React.Component {
  render(){
      return(
        <div className="stepsDiv row text-white text-uppercase">

              <div className="step step1 col-md-3 col-sm-6 d-flex flex-column p-3 relative">
                
                <div className="stepContainer">
                  <div className="d-flex align-items-center">
                    <StepNumber>1</StepNumber>
                    <StepName>Análisis de riesgo</StepName>
                  </div>
                  <StepDescription>Diagnóstico de posibles amenazas y consecuencias</StepDescription>
                </div>

              </div>

              <div className="step step2 col-md-3 col-sm-6 d-flex flex-column p-3 relative">
                <div className="stepContainer">
                  <div className="d-flex align-items-center">
                    <StepNumber>2</StepNumber>
                    <StepName>Proyecto personalizado</StepName>
                  </div>
                  <StepDescription>Propuesta ideal ajustándonos a sus requerimientos</StepDescription>
                </div>
              </div>

              <div className="step step3 col-md-3 col-sm-6 d-flex flex-column p-3 relative">
                <div className="stepContainer">
                  <div className="d-flex align-items-center">
                    <StepNumber>3</StepNumber>
                    <StepName>Desarrollo e instalación</StepName>
                  </div>
                  <StepDescription>Plan con las mejores herramientas y tecnología</StepDescription>
                </div>
              </div>

              <div className="step step4 col-md-3 col-sm-6 d-flex flex-column p-3 relative">
                <div className="stepContainer">
                  <div className="d-flex align-items-center">
                    <StepNumber>4</StepNumber>
                    <StepName>Mantenimiento y soporte</StepName>
                  </div>
                  <StepDescription>Hacemos un seguimiento del sistema después de su implementación</StepDescription>
                </div>
              </div>

            </div>
      );
  }
}