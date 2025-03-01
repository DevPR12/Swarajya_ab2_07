import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RequestBlood from "./components/RequestBlood";
import FindDonor from "./components/FindDonor";
import Sos from "./components/Sos";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request" element={<RequestBlood />} />
        <Route path="/donors" element={<FindDonor />} />
        <Route path="/sos" element={<Sos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
