import './App.css';
import Landing from './components/Landing';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/home" element={<Landing />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
