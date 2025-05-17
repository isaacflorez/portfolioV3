import './App.css';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
