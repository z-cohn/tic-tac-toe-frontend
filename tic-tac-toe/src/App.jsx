import Register from './pages//Register'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/register" element={<Register />}/>
        <Route path="*" element={<h1>Page Not Found</h1>}></Route>
      </Routes>
    </>
  )
}

export default App;
