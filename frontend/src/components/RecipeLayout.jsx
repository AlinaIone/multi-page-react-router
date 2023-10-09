import React from 'react'
import RecipeNavigation from './RecipeNavigation'
import { Outlet } from 'react-router-dom'

const RecipeLayout = () => {
  return (
    <>
    <RecipeNavigation/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default RecipeLayout