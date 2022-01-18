import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Books from './pages/books';
import Categories from './pages/categories';
import './App.css';

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={(
            <>
              <Header />
              <Books />
            </>
          )}
        />
        <Route
          path="/categories"
          element={(
            <>
              <Header />
              <Categories />
            </>
          )}
        />
      </Routes>
    </Router>
  </div>
);

export default App;
