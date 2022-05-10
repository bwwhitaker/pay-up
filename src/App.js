import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Routes/Login/Login';
import Home from './Components/Routes/Home/Home';

function App() {
	return (
		<div>
			<Navbar />
			<Login />
			<Home />
		</div>
	);
}

export default App;
