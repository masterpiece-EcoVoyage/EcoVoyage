import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Website/Home';
import Login from './components/Users/Login';
import Signup from './components/Users/Signup';
import Destinations from './components/Website/Destinations';
import Accommodations from './components/Website/Accommodations';
import DestinationDetails from './components/Website/DestinationDetails';
import AboutUs from './components/Website/AboutUs';
import Contact from './components/Website/Contact';

function App() {
  return (
    <div className="App">
      <Router >
        <Header />
        <div className='h-full' id='root'>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/destinations' element={<Destinations />} />
            <Route path='/accommodations' element={<Accommodations />} />
            <Route path='/destination/:id' element={<DestinationDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
