
import { Routes, Route } from "react-router-dom"
import './App.css';
import Header from './components/header';
import Home from './pages/Home';
import Footer from './components/footer';
import Profile from './pages/Profile';
import OurStory from "./pages/OurStory";
import Terms from "./pages/Terms";


function App() {
 

  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/profile'element={<Profile/>}/>
        <Route path='/ourstory'element={<OurStory/>}/>
        <Route path='/terms'element={<Terms/>}/>
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
