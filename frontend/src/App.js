import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import RecipesPage from "./pages/Recipes";
import RecipeDetailsPage from "./pages/RecipeDetails";
import NewRecipePage from "./pages/NewRecipe";
import EditRecipePage from "./pages/EditRecipe";
import Layout from "./components/Layout";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index:true, element: <HomePage /> },
      { path: "recipes", element: <RecipesPage /> },
      { path: "recipes/:recipeId", element: <RecipeDetailsPage /> },
      { path: "recipes/new", element: <NewRecipePage /> },
      { path: "recipes/:recipeId/edit", element: <EditRecipePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
