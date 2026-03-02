import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';

import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Staff from './Staff/Staff';
import Contact from './Contact/Contact';
import Menu from './Menu/Menu';
import UsersTable from "./Axios";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    <UsersTable/>
  );
}

export default App;

