
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ManageSubscriptionPage from './pages/manage-subscription'
import SubscriptionPage from './pages/subscription'
import TenantPage from './pages/tenant'

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path=":tenant" element={<TenantPage />} />
        <Route path=":tenant/:subscription" element={< SubscriptionPage />} />
        <Route path=":tenant/:subscription/manage" element={< ManageSubscriptionPage />} />
      </Routes>
    </div>
  )
}

export default App
