import { Navigate, createBrowserRouter } from "react-router-dom";
import { CharactersPage } from ".";
import { HomePage } from ".";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/" />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/characters/:id",
    element: <CharactersPage />,
  },
]);
