import React from 'react';
import './App.css'
import Banner from './components/Banner';
import NavigationBar from './components/NavigationBar';
import { FooterContainer } from './containers/footer'

function App() {
  return (
   <div className="App">
    <NavigationBar />
     <Banner />
    <FooterContainer />
   </div>
  );
}

export default App;

