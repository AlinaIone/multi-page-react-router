import React from 'react'
import classes from './RecipeNavigation.module.css'
import { NavLink } from 'react-router-dom'


const RecipeNavigation = () => {
  return (
    <header className={classes.header}>
    <nav>
      <ul className={classes.list}>
        <li>
          <NavLink end
            to="/recipes" className={({isActive})=> isActive ? classes.active: undefined}
          >
            All Recipes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/recipes/new"  className={({isActive})=> isActive ? classes.active: undefined}
          >
           New Recipe
          </NavLink>
        </li>
      </ul>
    </nav>
    </header>
  )
}

export default RecipeNavigation