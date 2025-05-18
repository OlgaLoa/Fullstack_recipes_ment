import React from 'react';
import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Categories from './Categories';
import Recipe from './Recipe';
import Recipes from './Recipes';
import Category from './Category';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
	
			<div className='app_style'>

				<Header />
				{/* Routes проверяет все свои дочерние элементы <Route>, чтобы найти наилучшее соответствие, и отображает эту часть пользовательского интерфейса */}
				<Routes> 
					<Route path="/" element={<Categories/>} />
					<Route path="categories/:id" element={<Category  />} />
					<Route path="/recipes/" element={<Recipes />} />
					<Route path="/recipes/:id" element={<Recipe />} />
				</Routes>
				<div className='footer_style'>
				<Footer />
				</div>
		</div>
	);
}

export default App;
