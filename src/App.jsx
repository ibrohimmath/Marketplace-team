import clsx from "clsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import CreateAccount from "./pages/create_account";
import Marketplace from "./pages/marketplace";

import "./components/styles/global.scss";
import Rankings from "./pages/rankings";
import ConnectWallet from "./pages/connect_wallet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "create-account",
    element: <CreateAccount />,
  },
  {
    path: "marketplace",
    element: <Marketplace />,
  },
  {
    path: "rankings",
    element: <Rankings />,
  },
  {
    path: "connect-wallet",
    element: <ConnectWallet />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
