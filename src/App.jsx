// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './Card';
import SideBar from './SideBar';
import Plans from './Plans';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/card" element={<Card />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/" element={<Plans />} />
      </Routes>
    </Router>
  );
}

export default App;
