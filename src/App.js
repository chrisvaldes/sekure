import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Accueil from "./Pages/Accueil/Accueil";
import Connexion from "./Pages/connection/Connexion";
import Customer from "./Pages/Customer/Customer";
import Enregistrement from "./Pages/enregistrer/Enregistrement";
import OTPVerification from "./Pages/OTPVerification/OTPVerification";
import NextPricing from "./Pages/Pricing/NextPricing";
import Pricing from "./Pages/Pricing/Pricing";
import Screening from "./Pages/Screening/Screening";
import ScrollToTop from "./Components/scrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" Component={Connexion} />
          <Route path="/verification" Component={OTPVerification} />
          <Route path="/creation-compte" Component={Enregistrement} />
          <Route path="/accueil" Component={Accueil} />
          <Route path="/customer" Component={Customer} />
          <Route path="/screening" Component={Screening} />
          <Route path="/pricing" Component={Pricing} />
          <Route path="/pricing-final" Component={NextPricing} />
          <Route path="/about" Component={About} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
