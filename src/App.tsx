import './App.css';
import { } from "./";
import Header from './Header/header';
import Footer from './Footer/my-footer';
import Routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
