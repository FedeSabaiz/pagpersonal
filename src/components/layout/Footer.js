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
                            <LinkedinLogo className="logo-linkedin" />
                        </div>
                        <div className="col">
                            <GithubLogo className="logo-github" />
                        </div>
                    </div>
                    
                    
                </div>
               
                <div className="col-3 footer">
                    <div className="row">
                        <div className="col ciudad">
                            <p>Licencias</p> 
                            <p>snippets utilizados bajo licencia MIT</p>
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