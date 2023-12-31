import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Website/Home";
import Login from "./components/Users/Login";
import Signup from "./components/Users/Signup";
import Destinations from "./components/Website/Destinations";
import Accommodations from "./components/Website/Accommodations";
import DestinationDetails from "./components/Website/DestinationDetails";
import AboutUs from "./components/Website/AboutUs";
import Contact from "./components/Website/Contact";
import AccommodationDetails from "./components/Website/AccommodationDetails";
import Activites from "./components/Website/Activites";
import Packages from "./components/Website/Packages";
import PackageDetails from "./components/Website/PackageDetails";
import NotFound from "./components/NotFound";
import AdminAccount from "./components/Admin/AdminAccount";
import Payment from "./components/Website/Payment/Payment";
import Flights from "./components/Website/Flights";
import Profile from "./components/Users/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="h-full" id="root">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/accommodations" element={<Accommodations />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/activities" element={<Activites />} />
            <Route path="/destination/:id" element={<DestinationDetails />} />
            <Route
              path="/accommodation/:id"
              element={<AccommodationDetails />}
            />
            <Route path="/package/:id" element={<PackageDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<AdminAccount />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/flights/:id" element={<Flights />} />
            {/* <Route path="/flight/:id" element={<Flights />} /> */}
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
