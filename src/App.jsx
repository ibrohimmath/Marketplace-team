import clsx from "clsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import CreateAccount from "./pages/create_account";

import "./components/styles/global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "create-account",
    element: <CreateAccount />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
