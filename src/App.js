import './App.css';
import Landing from './components/Landing';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
