import Header from './components/Header'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Links from './pages/Links'
import User from './pages/User'
import Admin from './pages/Admin'
import Unauthorized from './pages/Unauthorized'
import Layout from './components/Layout'
import RequireAuth from './components/RequireAuth'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="links" element={<Links />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          { /* Protected routes */ }
          <Route element={<RequireAuth />}>
            <Route path="/user" element={<User />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Route >

        { /* Catch all */ }
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App;
