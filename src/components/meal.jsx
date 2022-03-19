import React, { useState } from 'react';
import './meal.scss';



const RandomMeal = () => {
  const baseUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

  const fetchMeal = () => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(res => {
        setMeal(res.meals[0]);
      });
  }

  const [ meal, setMeal ] = useState([]);
  console.log(meal);


  

  return (
    <div className='wrapper'>
      <div className="header">
        <h1>Feeling hungry?</h1>
        <button className='btn-meal' onClick={fetchMeal}>
          Get a meal
        </button>
      </div>
      <div className="body">
        <div className="meal-data">
          <div className="left">
            {/* image */}
            <img className='icon-meal' src={meal.strMealThumb} alt={meal.strMeal}/>
            {/* infos */}

            {/* ingredients */}
            <div className="ingredients">
              <h3>Ingredients:</h3>
                <li>{meal.strMeasure1} {meal.strIngredient1}</li>
                <li>{meal.strMeasure2} {meal.strIngredient2}</li>
                <li>{meal.strMeasure3} {meal.strIngredient3}</li>
                <li>{meal.strMeasure4} {meal.strIngredient4}</li>
                <li>{meal.strMeasure5} {meal.strIngredient5}</li>
                <li>{meal.strMeasure6} {meal.strIngredient6}</li>
                <li>{meal.strMeasure7} {meal.strIngredient7}</li>
                <li>{meal.strMeasure8} {meal.strIngredient8}</li>
                <li>{meal.strMeasure9} {meal.strIngredient9}</li>
            </div>
          </div>
          <div className="right">
            {/* title */}
            <h1>{meal.strMeal}</h1>
            <span>Category: {meal.strCategory}</span>
            <span>Area: {meal.strArea}</span>
            {/* recipe step by step */}
            <p className='recipe'>{meal.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RandomMeal;
