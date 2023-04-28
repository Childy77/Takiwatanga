import { Routes, Route } from "react-router-dom"
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import Header from './components/header';
import Home from './pages/Home';
import Footer from './components/footer';
import Profile from './pages/Profile/Profile';
import OurStory from "./pages/OurStory";
import Terms from "./pages/Terms";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";

import './App.css';
import "./pages/Signin/Signin.css";
import "./pages/Signup/Signup.css"
import "./pages/Profile/Profile.css"

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
 
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/profile'element={<Profile/>}/>
        <Route path='/ourstory'element={<OurStory/>}/>
        <Route path='/terms'element={<Terms/>}/>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </div>
    </ApolloProvider>
  );
}

export default App;
