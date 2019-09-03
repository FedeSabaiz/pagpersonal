import React from 'react';

import video from '../../assets/video/video.mp4';

class Fondo extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = { classFlecha: 'mov'}
    // }

    componentWillMount() {
        
        window.onscroll = () => {
            console.log(window.scrollY);
            
        }
        // window.onscroll = () => this.handleMov()
    }
    
    // handleMov = () => {
    //     if(document.documentElement.scrollTop > 250) {
    //         this.setState( { classFlecha: 'hiden-arrow' } )
    //     }

    //     if(document.documentElement.scrollTop < 250) {
    //         this.setState( { classFlecha:'mov' } )
    //     }
    // }
    
    render() { 
        
        return ( 
                <video className="fondo" playsinline autoplay muted loop loop={true} autoPlay={true}>
                    <source src={video} type="video/mp4"/>
                {/* <source src={video} type="video/ogg"/> */}
                </video>
            
         );
    }
}
 
export default Fondo;
