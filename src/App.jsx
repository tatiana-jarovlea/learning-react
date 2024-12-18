import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from 'pages/Layout'
import Home from 'pages/Home'
import Fundamentals from 'pages/Fundamentals'
import NoPage from 'pages/NoPage'
import Rendering from 'pages/Rendering'
import Hook from 'pages/Hook'
import { Forms } from 'pages/Forms'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fundamentals" element={<Fundamentals />} />
          <Route path="rendering" element={<Rendering />} />
          <Route path="hook" element={<Hook />} />
          <Route path="forms" element={<Forms />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
