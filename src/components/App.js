import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Fondo from './layout/Fondo';
import Saludo from './Saludo';
import Skills from './Skills';



import Footer from './layout/Footer';

// Card


const App = () => {
	return (
		<Router>
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

		</Router>
		
	);
}

export default App;