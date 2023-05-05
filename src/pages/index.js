import { createBrowserRouter } from "react-router-dom";
import Index from "./Index/Index";
import IndexLayout from "../layouts/IndexLayout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout />,
    children: [{ path: "/", element: <Index /> }],
  },
]);
