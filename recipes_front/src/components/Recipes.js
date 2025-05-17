import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'; // Не забудь этот импорт!
import 'bootstrap/dist/css/bootstrap.min.css'; // если ещё не подключал
import "../styles/Categories.css";
import { Link } from 'react-router-dom';

function Recipes() {
	
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		if (!recipes.length) {
			fetch(`http://127.0.0.1:8000/api/recipes/`)
				.then(response => response.json())
				.then(data => {
					setRecipes(data);
				})
				.catch(error => {
					console.error('Error getting categories:', error);
				});
		}
	}, []);

	return (
		<div className = "recipes">All recipes
			<Table striped bordered hover className='recipes'> 
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>


					</tr>
				</thead>
				<tbody>
					{recipes.map(recipe => (
						<tr key={recipe .time_create}>
							<td>{recipe.id}</td>
							<td><Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link></td>

						</tr>
					))}
				</tbody>
			</Table>

		</div>
	);
}

export default Recipes;
