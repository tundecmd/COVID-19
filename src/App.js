import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CountryList from './components/CountryList';
import WorldUpdates from './components/WorldUpdates';
import SearchForm from './components/SearchForm';
import FAQS from './components/FAQS/FAQS';
import Navbar from './components/Navbar';


const App = () => {
  
  
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <WorldUpdates />
          <SearchForm />
          <CountryList />
        </div>
      </BrowserRouter>
  )
}

export default App;