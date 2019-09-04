import React from 'react';

import video from '../../assets/video/video.mp4';

class Fondo extends React.Component {
     
    render() { 
        
        return ( 
                <video className="fondo" playsInline autoPlay muted loop>
                    <source src={video} type="video/mp4"/>
                </video>
            
         );
    }
}
 
export default Fondo;
