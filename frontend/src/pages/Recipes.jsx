import React from "react";
import RecipeList from "../components/RecipeList";
import { json, useLoaderData } from "react-router-dom";

const RecipesPage = () => {
  const recipesFromBE = useLoaderData();

  return <RecipeList recipes={recipesFromBE.recipes} />;
};

export default RecipesPage;

// The loader code executes in the browser (user-side) not on the server
export const recipeLoader = async () => {
  const response = await fetch("http://localhost:8080/recipes");

  if (!response.ok) {
    // Here we can throw a object or a response
    // Not posible throwing an error because we are in a async await f.

    //- Option 1
    // throw new Response(
    //   JSON.stringify({ message: "There is a problem in the recipe page" }),
    //   { status: 500 }
    // );

    //- Option 2 (less code)- no need to stringify or parse (json method will handle it)
    throw json(
      { message: "There is a problem in the recipe page" },
      { status: 500 }
    );
  } else {
    // no need to extract the data, the router loader will manage it
    // const resData = await response.json();
    return response;
  }
};
