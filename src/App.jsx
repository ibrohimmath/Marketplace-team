import clsx from "clsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import CreateAccount from "./pages/create_account";
import Marketplace from "./pages/marketplace";
import Rankings from "./pages/rankings";
import ConnectWallet from "./pages/connect_wallet";
import Artist from "./pages/artist";
import NftPage from "./pages/nft";

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
  {
    path: "artist",
    element: <Artist />,
  },
  {
    path: "nft",
    element: <NftPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
