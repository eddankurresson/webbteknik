import Home from "./pages/Home";
import Omoss from "./pages/Omoss";
import Nyheter from "./pages/Nyheter";
import Kanot from "./pages/Kanot";
import Blimedlem from "./pages/Blimedlem";
import Veckobrev from "./pages/Veckobrev";
import Ungdomsverksamhet from "./pages/Ungdomsverksamhet";

import Header from "./components/Header"
import Footer from "./components/Footer"

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css';


function App() {
  return <div className="grid-Container">
   
      <Router >
      <Header />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/Omoss" element={<Omoss/>}  />
            <Route path="/Kanot" element={<Kanot/>}  />
            <Route path="/Nyheter" element={<Nyheter/>}  />
            <Route path="/Blimedlem" element={<Blimedlem/>}  />
            <Route path="/Ungdomsverksamhet" element={<Ungdomsverksamhet/>}  />
            <Route path="/Veckobrev" element={<Veckobrev/>}  />
          </Routes>
      </Router >
      <Footer />
    </div>;
}

export default App;
