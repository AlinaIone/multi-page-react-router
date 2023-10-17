import React from "react";
import RecipeList from "../components/RecipeList";
import { useLoaderData } from "react-router-dom";


const RecipesPage = () => {
  const recipesFromBE = useLoaderData();

  return <RecipeList recipes={recipesFromBE.recipes} />;
};

export default RecipesPage;


// The loader code executes in the browser (user-side) not on the server
export const recipeLoader = async () => {
  const response = await fetch("http://localhost:8080/recipes");

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "There are a problem in the recipe page" }),
      { status: 500 }
    );
  } else {
    // no need to extract the data, the router loader will manage it
    // const resData = await response.json();
    return response;
  }
};
