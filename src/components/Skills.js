import React from 'react';
import { ReactComponent as Logo } from '../assets/html/ventana1.svg';
import SvgRuby from './svg/SvgRuby';
import { ReactComponent as Logoen } from "../assets/js/engrane.svg";
import { ReactComponent as LogoReactCom } from '../assets/react/asset-react.svg'; 
import { ReactComponent as LogoWac } from "../assets/illustrator/wacom.svg";



const Skills = () => {

    return ( 
        <div className="container skills">
            <div className="row row-skills">
                <div className="col-4 ven-html">
                    <Logo className="ventana imagen"/>
                </div>
                <div className="col-8 ven-html">
                    <p className="parr-skills" >Con <span className="texto-stack">HTML5</span> puedo construir los cimientos para tu aplicación.</p>
                </div>
            </div>

            <div className="row row-css">
                <div className="col-8 ven-css">
                    <p className="parr-skills" >Las herramientos de <span className="texto-stack" >CSS3</span> harán de tu proyecto obras de arte.</p>

                </div>
                <div className="col-4 ven-css">
                    <SvgRuby className="ruby imagen" />

                </div>
            </div>

            <div className="row row-skills">
                <div className="col-4 ven-js">
                    <Logoen className="imagen engrane"/>
                    <Logoen className=" imagen engrane1" />
                </div>
                <div className="col-8 ven-js">
                    <p className="parr-skills" >Con <span className="texto-stack">JS</span> la lógica del proyecto le dará movimiento.</p>

                </div>
            </div>

            <div className="row row-css">
                <div className="col-8 ven-react">
                    <p className="parr-skills" >Manipulando la complejidad de la aplicación con <span className="texto-stack" >React</span>. </p>
                </div>
                <div className="col-4 ven-react">
                    <LogoReactCom className="imagen componentes"/>
                </div>
            </div>

            <div className="row row-skills">
                <div className="col-4 ven-illus">
                    <LogoWac className="imagen" />
                </div>
                <div className="col-8 ven-illus">
                    <p className="parr-skills" >Sólo dime <span className="texto-stack" >qué necesitas.</span></p>
                </div>
            </div>

            <div className="row row-contacto" id="contacto">
                <div className="col-3 contacto">
                    <p className="parr-contacto" >
                        <span className="texto-stack">Contacto</span>
                    </p>
                </div>
                <div className="col-9 contacto">
                    <p className="parr-contacto" >Si puedo <span className="texto-stack">ayudar a tu proyecto</span> házmelo saber: federico.gomez.sa@gmail.com</p>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;