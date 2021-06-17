import React from 'react';
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
import { Image } from './shared/Image';



export class Slider extends React.Component{
  render(){
    return(
        <div className="slider">
            <div className="slide-track">
                <div className="slide">
                    <Image css="brand" src={belden} alt="logo belden"/>
                </div>
                <div className="slide">
                    <Image css="brand" src={condumex} alt="logo condumex"/>
                </div>
                <div className="slide">
                    <Image css="brand" src={dks} alt="logo dks"/>
                </div>
                <div className="slide">
                    <Image css="brand" src={epcom} alt="logo epcom"/>
                </div>
                <div className="slide">
                    <Image css="brand" src={faac} alt="logo faac"/>
                </div>
                <div className="slide">
                    <Image css="brand" src={grandstream} alt="logo grandstream"/>
                </div>
                <div className="slide">
                    <Image css="brand" src={hangua} alt="logo hangua"/>
                </div>
                <div className="slide">
                    <Image css="brand" src={hikvision} alt="logo hikvision"/>
                </div>
                <div className="slide">
                    <Image css="brand" src={honeywell} alt="logo honeywell"/>
                </div>
                <div className="slide">
                    <Image css="brand" src={idis} alt="logo idis"/>
                </div>
                <div className="slide">
                    <Image css="brand" src={linkedpro} alt="logo linkedpro"/>
                </div>
                <div className="slide">
                    <Image css="brand" src={samsung} alt="logo samsung"/>
                </div>
                <div className="slide">
                    <Image css="brand" src={tplink} alt="logo tplink"/>
                </div>
                <div className="slide">
                    <Image css="brand" src={ubiquiti} alt="logo ubiquiti"/>
                </div>
                <div className="slide">
                    <Image css="brand" src={zteco} alt="logo zteco"/>
                </div>
            </div>
        </div>
    );
  }
}