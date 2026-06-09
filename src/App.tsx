import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import CompanyLayout from './layouts/CompanyLayout'
import ProductsLayout from './layouts/ProductsLayout'
import PricingLayout from './layouts/PricingLayout'
import CompanyOverview from './pages/company/CompanyOverview'
import CompanyGreeting from './pages/company/CompanyGreeting'
import CompanyHistory from './pages/company/CompanyHistory'
import CompanyLocation from './pages/company/CompanyLocation'
import ProductsLanding from './pages/products/ProductsLanding'
import ProductDetail from './pages/products/ProductDetail'
import ProductPricingPage from './pages/pricing/ProductPricingPage'
import './App.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsLayout />}>
            <Route index element={<ProductsLanding />} />
            <Route path="overview" element={<Navigate to="/products" replace />} />
            <Route path=":slug" element={<ProductDetail />} />
          </Route>
          <Route path="/pricing" element={<PricingLayout />}>
            <Route index element={<Navigate to="infraai" replace />} />
            <Route path=":slug" element={<ProductPricingPage />} />
          </Route>
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
