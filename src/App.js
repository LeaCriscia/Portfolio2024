import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./components/Navibar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Phone from './components/Phone';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>
    
      <Navibar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Resume' element={<Resume/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        {/* create route with params */}
        <Route path='/phone/:id' element={<Phone/>}/>
        {/* for other pages 404 */}
        <Route path='*' element={<h1 style={{textAlign:"center"}}>Error 404 - Page Not Found!</h1>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
};
export default App;