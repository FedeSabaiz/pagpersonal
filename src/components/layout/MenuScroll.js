import React, { Component } from 'react';
import SvgFlecha from '../svg/SvgFlecha';

class MenuScroll extends Component {
    constructor(props) {
        super(props)
        this.state = { classMenu: 'hiden',
                        classFlecha: 'mov' }
    }
   
    componentDidMount() {
        window.onscroll = () => this.handleAnimation();
    }

    handleAnimation = () => {
        if( document.documentElement.scrollTop > 100 ) {
            this.setState( { classMenu: 'fijado' });
        }

        if (document.documentElement.scrollTop < 100) {
            this.setState( { classMenu: 'hiden' } );
        }

        if(window.scrollY > 106 ) {
            this.setState( { classFlecha: 'hiden-arrow' } );
        }

        if(window.scrollY < 106 ) {
            this.setState( { classFlecha:'mov' } )
        }
        // console.log(window.scrollY);
    }
    render() { 

  
        return ( 
            <div>
                <nav className={this.state.classMenu} >
                    <ul id="navigationMenu">
                        <li>
                            <a className="home" href="#home">
                                
                            </a>
                        </li>

                        <li>
                            <a className="about" href="#stack" >
                            
                            </a>
                        </li>

                        <li>
                            <a className="services" href="#contacto">
                                
                            </a>
                        </li>
                    </ul>
                </nav>
                <a href="#stack">
                    <SvgFlecha className={`flecha ${this.state.classFlecha}`} />
                </a>
            </div>
         );
    }
}
 
export default MenuScroll;
 

