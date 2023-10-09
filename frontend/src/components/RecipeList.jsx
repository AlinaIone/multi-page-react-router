import React from "react";
import classes from "./RecipeList.module.css";

import { Link } from "react-router-dom";

const RecipeList = ({ recipes }) => {
  return (
    <div className={classes.recipes}>
      <h1>Recipes</h1>
      <ul className={classes.list}>
        {recipes.map(recipe => (
          <li key ={recipe.id} className={classes.item}>
            <Link to={`/recipes/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.name}/>
              <h3 className={classes.name}>{recipe.name}</h3>
              <p className={classes.description}>{recipe.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
