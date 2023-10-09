import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import RecipesPage, { recipeLoader } from "./pages/Recipes";
import RecipeDetailsPage from "./pages/RecipeDetails";
import NewRecipePage from "./pages/NewRecipe";
import EditRecipePage from "./pages/EditRecipe";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./pages/Error";
import RecipeLayout from "./components/RecipeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {
        path: "recipes",
        element: <RecipeLayout />,
        children: [
          { index: true, element: <RecipesPage />, loader:recipeLoader },
          { path: ":recipeId", element: <RecipeDetailsPage /> },
          { path: "new", element: <NewRecipePage /> },
          { path: "edit", element: <EditRecipePage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
