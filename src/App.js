import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import NavMenu from './Components/NavMenu/NavMenu';
import Login from './Components/Routes/Login/Login';
import Home from './Components/Routes/Home/Home';

function App() {
	return (
		<div>
			<NavMenu />
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/Home' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
