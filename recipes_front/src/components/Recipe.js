import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table'; // Не забудь этот импорт!
import 'bootstrap/dist/css/bootstrap.min.css'; // если ещё не подключал
import "../styles/Recipe.css";

function Recipe() {
    const params  = useParams(); //используем хук для определения id выбранной категории из адресной строки
	const id = params.id
    // const [category, setCategory] = useState(''); 
	const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        
            fetch(`http://localhost:8000/api/recipes/${id}`)
                .then(response => response.json())
                .then(data => {
                    setRecipe(data);
                })
                .catch(error => {
                    console.error('Error getting recipe :', error);
                });
                          
        
    }, [id]);
    console.log(id)
    console.log(recipe)
	return (
		<div className = "recipes"> <h2>Recipe "{recipe.title}"</h2>
			<Table striped bordered hover className='categories'> 
				<thead>
					<tr>
                        <th>ID</th>
						<th>Title</th>
						<th>Text</th>
                        <th>Date</th>

					</tr>
				</thead>
				<tbody>
					
                        <tr key={recipe.time_create}>
                            <td>{recipe.id}</td>
                            <td>{recipe.title}</td>
                            <td>{recipe.text}</td>
                            <td>{recipe.time_create}</td>
                        </tr>
				
				</tbody>
			</Table>
		</div>
	);
}

export default Recipe;
