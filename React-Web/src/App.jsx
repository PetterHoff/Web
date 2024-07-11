
import { Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Beskrivelse from "./pages/beskrivelse.jsx";
import Booking from "./pages/booking.jsx";
import Kontakt from "./pages/kontakt.jsx";
import Hjem from "./pages/hjem.jsx";
import Success from "../src/components/Calendar/Sucsess.jsx";


function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Hjem />} />
          <Route path="/description" element={<Beskrivelse />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Kontakt />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
