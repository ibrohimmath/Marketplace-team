import './App.css'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/layout/Navbar'
import SignUp from './pages/SingUp'
import ConnectWallet from './pages/ConnectWallet';
import Footer from './components/layout/Footer'
import CreatorCard from './pages/CreatorCard/CreatorCard';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/Home';
function App() {
  
  return (
    <div className='body'>
      <Router>
      <Navbar />
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={SignUp} />
        <Route path="/wallet" component={ConnectWallet} />
      </Switch>
      <Footer />
    </Router>
    </div>
  )
}

export default App
