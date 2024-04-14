import React, { lazy } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';

import './App.css'

const RemoteRootApp = lazy(() => import('remoteApp/RemoteRootApp') as any);

function App() {
 
  return (
    <div className="app">
    
    <React.Suspense fallback="Loading">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":tenant" element={< RemoteRootApp />} />
        <Route path=":tenant/*" element={< RemoteRootApp />} />
      </Routes>
    </React.Suspense>
  </div>
  )
}

export default App
