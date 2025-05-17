import React, { useState, useEffect} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'; // Не забудь этот импорт!
import 'bootstrap/dist/css/bootstrap.min.css'; // если ещё не подключал
import axios from "axios";


function Category() {
    const params  = useParams(); //используем хук для определения id выбранной категории из адресной строки
	const id = params.id
    const [category, setCategory] = useState(null); // состояние выбранной категории
    const [recipes, setRecipes] = useState([]); // состояние списка рецептов по выбранной категории
	

    useEffect(() => {
		
        fetch(`http://127.0.0.1:8000/api/categories/${id}`)
				.then(response => response.json())
				.then(data => {
                    console.log(data)
					setCategory(data);
				})
				.catch(error => {
					console.error('Error getting category:', error);
				});
 
            fetch(`http://127.0.0.1:8000/api/recipes/?category=${id}`)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data)
                            setRecipes(data);
                        })
                        .catch(error => {
                            console.error('Error getting recipes of the category:', error);
                        }); 
                          
		
	}, [id]); //отслеживанием изменение id
    console.log(id)

	return (
        <div className="recipe-list">
            <h2> Category recipes: </h2>
                <Table striped bordered hover className='recipes'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Key</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipes.map(recipe => (
                            <tr key={recipe.time_create}>
                                <td>{recipe.id}</td>
                                <td><Link to={`/recipes/${recipe.id}`}> {recipe.title} </Link></td>
                                <td>{recipe.time_create}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
        </div>
	);
}

export default Category;
