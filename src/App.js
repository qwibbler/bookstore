import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Books from './redux/books/books';
import Categories from './redux/categories/categories';
import './App.css';

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route
          path="/books"
          element={
            <>
              <Header />
              <Books />
            </>
          }
        />
        <Route
          path="/categories"
          element={
            <>
              <Header />
              <Categories />
            </>
          }
        />
      </Routes>
    </Router>
  </div>
);

export default App;
