import React from 'react';
import { Switch, Route, Routes } from 'react-router-dom';

//navigation
import Navigation from './navigation/Navigation';

//components
import Products from './components/Products';
import Likes from './components/Likes';

//CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
          <Routes>
            <Route path="/" element={<Products/>} exact/>
            <Route path="/likes" element={<Likes/>}/>
          </Routes>
      </main>
    </div>
  );
}

export default App;
