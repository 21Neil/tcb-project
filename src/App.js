import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './component/Main';

function App() {
  return (
    <Routes>
      <Route path='/*' element={<Main />} />
    </Routes>
  );
}

export default App;
