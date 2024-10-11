import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from 'pages/Layout'
import Home from 'pages/Home'
import Fundamentals from 'pages/Fundamentals'
import NoPage from 'pages/NoPage'
import Rendering from 'pages/Rendering'
import Hook from 'pages/Hook'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fundamentals" element={<Fundamentals />} />
          <Route path="rendering" element={<Rendering />} />
          <Route path="hook" element={<Hook />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

