
import { Routes, Route } from "react-router-dom"
import './App.css';
import Header from './components/header';
import Home from './pages/Home';
import Footer from './components/footer';
import Profile from './pages/Profile';

function App() {
 

  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/profile'element={<Profile/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
