import React from 'react';
import { ReactComponent as Logo1 } from '../assets/html/html5.svg';
import { ReactComponent as Logo3 } from '../assets/css/css.svg';
import { ReactComponent as Logojs } from '../assets/js/js.svg';
import { ReactComponent as LogoReact } from "../assets/react/react.svg";
import { ReactComponent as LogoIllus } from "../assets/illustrator/ilust.svg";
import { ReactComponent as LogoSass } from '../assets/sass/sassLogo.svg';

class Saludo extends React.Component {
	state = {  }

	leerDatos(e) {
		console.log(e.target.value);
		
	}

	render() { 
		return ( 
			<div className="container" >

				<div id="stack" className="row ">
					<div className="col-9">
						<section className="rw-wrapper">
							<div className="rw-sentence">
								<p className="parr-saludo">
									<span className="texto-stack">Hola</span> mi nombre es <span>Federico Gómez</span> y soy	<span className="texto-stack" >desarrollador WEB. </span>
								</p>
								<p className="parr-saludo">Tengo conocimientos en:</p>
								<div className="rw-words rw-words-1">
									<span>HTML5.</span>
									<span>CSS3.</span>
									<span>JAVASCRIPT.</span>
									<span>SASS.</span>
									<span>REACT.</span>
									<span>ILLUSTRATOR.</span>
								</div>
								
							</div>
						</section>
					</div>
					<div className="col-3 escudos">
						<Logo1 className="escudo-html imagen" />
						<Logo3 className="escudo-css imagen" />
						<Logojs className="escudo-js imagen" />
						<LogoSass className="escudo-sass imagen" />
						<LogoReact className="escudo-react imagen" />
						<LogoIllus className="escudo-illus imagen" />
					</div>
				</div>
			</div>
		 );
	}
}
 
export default Saludo;