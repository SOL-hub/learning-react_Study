import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import {Route, Routes} from 'react-router-dom';

import Article from './pages/Article;'
import Articles from './pages/Articles;'
import 


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={<Profile />} />
      <Route path="/articles" element={<Articles />} />
      <Route path=":id" element={<Article />} />
    </Routes>
  );
}

export default App;
