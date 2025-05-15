import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'; // Не забудь этот импорт!
import 'bootstrap/dist/css/bootstrap.min.css'; // если ещё не подключал
import "../styles/Categories.css";
import { Link } from 'react-router-dom';

function Categories() {
	
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		if (!categories.length) {
			fetch('http://127.0.0.1:8000/api/categories/')
				.then(response => response.json())
				.then(data => {
					setCategories(data);
				})
				.catch(error => {
					console.error('Error getting categories:', error);
				});
		}
	}, []);

	return (
		<div className = "categories">All recipe categories
			<Table striped bordered hover className='categories'> 
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Key</th>
					</tr>
				</thead>
				<tbody>
					{categories.map(category => (
						<tr key={category.unique_key}>
							<td>{category.id}</td>
							<td><Link to={`/categories/${category.id}`}>{category.name}</Link></td>
							<td>{category.unique_key}</td>
						</tr>
					))}
				</tbody>
			</Table>

		</div>
	);
}

export default Categories;
