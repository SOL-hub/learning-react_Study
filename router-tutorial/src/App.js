import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router path="/" element={<Home />} />
      <Router path="/about" element={<About />} />
      <Router path="/profiles/:username" element={<Profile />} />
    </div>
  );
}

export default App;
