import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './redux/books/books';
import './App.css';

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<h1>Under Construction</h1>} />
      </Routes>
    </Router>
  </div>
);

export default App;
