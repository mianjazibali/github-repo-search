import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import HomeView from './components/HomeView';
import UserProfileView from './components/UserProfileView';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/:username' element={<UserProfileView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
