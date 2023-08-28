import "./App.css";
import Home from "./components/Home";
import Header from "./components/Layout/Header";
import { Routes, Route } from "react-router-dom";
import MoviePage from './components/MoviePage'

function App() {
  return (
    
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<MoviePage />} /> 
      </Routes>
    </div>
    
  );
}

export default App;
