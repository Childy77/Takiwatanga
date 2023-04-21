import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Logo from './components/logo';
import About from './components/about';
import Start from './components/sign-up';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Logo/>
      <About/>
      <Start/>
      <Footer/>
    </div>
  );
}

export default App;
