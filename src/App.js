import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import User from './pages/user';
 
function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/about">About</Link> </li>
        <li> <Link to="/user/joaolindoso">User</Link> </li>
      </ul>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<h1>Not Found</h1>}/>
        <Route path="user/:name" element={<User />} >
          <Route path="edit" element={<h1>Editar perfil</h1>}/>
          <Route path="Order" element={<h1>Meus Pedidos</h1>}/>
        </Route>
      </Routes>
    </div>
    </Router>
  );
}
 
export default App;