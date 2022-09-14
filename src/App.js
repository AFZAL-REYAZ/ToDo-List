import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Search from './Components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './Components/Footer';
import  Form from './Components/Form';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
      <Route path='/' element={ <Search />}/>
      <Route path='/about' element={ <About/> }/>
      <Route path='/form' element={ <Form/> }/>
      </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
