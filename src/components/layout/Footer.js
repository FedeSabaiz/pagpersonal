import React from 'react';
import { ReactComponent as LinkedinLogo } from '../../assets/redes/linkedin.svg';
import { ReactComponent as GithubLogo } from '../../assets/redes/github.svg';

const Footer = () => {
    return ( 
            <div className="row footer">
                <div className="col-4">
                    <div className="row footer">
                        <span>Redes</span> 
                    </div>
                    <div className="row">
                        <div className="col logo-col">
                            <a href="https://www.linkedin.com/in/federico-gómez-80bb05191" >
                                <LinkedinLogo className="logo-linkedin" />

                            </a>
                        </div>
                        <div className="col">
                            <a href="https://github.com/FedeSabaiz" >
                                <GithubLogo className="logo-github" />

                            </a>
                        </div>
                    </div>
                    
                    
                </div>
               
                <div className="col-3 footer">
                    <div className="row">
                        <div className="col ciudad">
                            <p>Licencias</p> 
                            <p>snippet utilizado bajo licencia MIT</p>
                            <p>video "CC0"</p>
                        </div>
                    </div>    
                </div>

                <div className="col-4 ciudad">
                    <p>Ciudad de México, México</p>
                    <p>Federico Gómez 2019.</p>
                </div>
            </div>
     );
}
 
export default Footer;