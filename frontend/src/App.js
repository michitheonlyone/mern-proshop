import './lux.bootswatch.min.css';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
        <Header />
        <main className="py-3">
            <Container>
              <Route path="/" component={HomePage} exact />
              <Route path="/product/:id" component={ProductPage} />
            </Container>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
