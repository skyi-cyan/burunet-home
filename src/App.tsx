import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import CompanyLayout from './layouts/CompanyLayout'
import CompanyOverview from './pages/company/CompanyOverview'
import CompanyGreeting from './pages/company/CompanyGreeting'
import CompanyHistory from './pages/company/CompanyHistory'
import CompanyLocation from './pages/company/CompanyLocation'
import './App.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<CompanyLayout />}>
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<CompanyOverview />} />
            <Route path="greeting" element={<CompanyGreeting />} />
            <Route path="history" element={<CompanyHistory />} />
            <Route path="location" element={<CompanyLocation />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
