import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Signup from './component/Signup';
import Login from './component/Login';
import NoteState from './context/NoteState';
import Dashboard from './component/Dashboard';
import PrivateRoute from './component/PrivateRoute';


function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Home/>} />
          
       </Routes>

      </Router>
    </NoteState>
  );
}

export default App;