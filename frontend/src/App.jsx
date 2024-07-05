import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import SignUp from './pages/Signup.jsx'
import Header from './components/Header.jsx'
import Signin from './pages/Signin.jsx'
import FooterCom from './components/Footer.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<Signin />} />
        
      </Routes>
      <FooterCom />
    </BrowserRouter>
  )
}