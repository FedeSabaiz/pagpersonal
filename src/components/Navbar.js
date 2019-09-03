import React from 'react';
import $ from 'jquery';

class Navbar extends React.Component {
	state = {  }

	componentDidMount() {

	$('.plus-btn').click(function(){
		$('body').toggleClass('menu-open');
	  })

	}

	render() { 
		return ( 
		<div>
			<div className="plus-btn-pos">
				<div className="plus-btn">
					<div className="r1"></div>
					<div className="r2"></div>
				</div>
			</div>

			

			<div className="menu-container">
				<div className="menu-sliders"></div>
				<div className="menu-sliders"></div>
				<div className="menu-sliders"></div>

				<div className="menu">
					<ul>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#stack">Skills</a>
						</li>
						<li>
							<a href="#contacto">Contacto</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		 );
	}
}
 
export default Navbar;