import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import ProjectList from "./components/ProjectList"
import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
      <HomePage />
  );
}

export default App;
