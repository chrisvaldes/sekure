 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Arrow from './Components/Arrow';
import CardArrow from './Components/CardArrow';
import CardHoriz from './Components/CardHoriz';
import Cards from './Components/Cards';
import CardSmile from './Components/CardSmile';
import CardVert from './Components/CardVert';
import MiniCard from './Components/MiniCard';
import MiniCardSquare from './Components/MiniCardSquare';
import Accueil from './Pages/Accueil/Accueil';
import Customer from './Pages/Customer/Customer';
import Screening from './Pages/Screening/Screening';
import Pricing from './Pages/Pricing/Pricing';
import About from './Pages/About/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Accueil}/>
          <Route path='/customer' Component={Customer}/>
          <Route path='/screening' Component={Screening} />
          <Route path='/pricing' Component={Pricing}/>
          <Route path='/about' Component={About}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
