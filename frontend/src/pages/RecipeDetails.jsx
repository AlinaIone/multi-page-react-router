import React from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetailsPage = () => {
  const params = useParams()

  return (
    <>
    <div>RecipeDetailsPage</div>
    <p>id: {params.recipeId}</p>
    </>
  )
}

export default RecipeDetailsPage