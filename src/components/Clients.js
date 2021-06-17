import React from 'react';
import alma from '../assets/clients/Alma.png';
import vidanta from '../assets/clients/Vidanta.png';
import jardines from '../assets/clients/Jardines.png';
import playacar from '../assets/clients/Playacar.png';
import plaza from '../assets/clients/Plaza.png';
import cerma from '../assets/clients/Cerma.png';
import corasol from '../assets/clients/Corasol.png';
import jv from '../assets/clients/JV.png';
import clandestino from '../assets/clients/Clandestino.png';
import bbcondos from '../assets/clients/BBCondos.png';
import plank from '../assets/clients/Plank.png';
import { Image } from './shared/Image';



export class Clients extends React.Component{
  render(){
    return(
        <div className="col">
            <div className="col mb-3 d-flex align-items-center justify-content-between">
                <Image css="client client1" src={alma} alt="logo alma tulum"/>
                <Image css="client client2" src={vidanta} alt="logo vidanta"/>
                <Image css="client client3" src={jardines} alt="logo jardines"/>
                <Image css="client client4" src={playacar} alt="logo playacar"/>
                <Image css="client client5" src={plaza} alt="logo plaza congreso"/>
            </div>
            <div className="col mb-3 d-flex align-items-center justify-content-around">
                <Image css="client client6" src={cerma} alt="logo grupo cerma"/>
                <Image css="client client7" src={corasol} alt="logo corasol"/>
                <Image css="client client8" src={jv} alt="logo jv"/>
                <Image css="client client9" src={clandestino} alt="logo clandestino"/>
                <Image css="client client10" src={bbcondos} alt="logo bb condos"/>
            </div>
            <div className="col mb-sm-3 d-flex align-items-center justify-content-center">
                <Image css="client client11" src={plank} alt="logo plank"/>
            </div>
        </div>
    );
  }
}



