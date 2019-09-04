import React from 'react';
import Header from './Header';
import Fondo from './layout/Fondo';
import Saludo from './Saludo';
import Skills from './Skills';



import Footer from './layout/Footer';

// Card


const App = () => {
	return (
			<div>
				<div className="container-fluid">
				<div className="row">
					<Header />	
					<Fondo />
					
				</div>		
				</div>
						<Saludo />
				<div className="container">
					<div className="row">
						<Skills />	
					</div>
				</div>
		
				<div className="container-fluid info">
						<Footer />
				</div>
			</div>
		
	);
}

export default App;