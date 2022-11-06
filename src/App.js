// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Movie from './components/Movie';
import { useState } from 'react';
function App() {
  const [progress, setProgress] = useState(1);
  const pageSize = 10;
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' pageSize={pageSize} element={<Movie/>}/>
        </Routes>
        </Router>    
    </div>
  );
}

export default App;
