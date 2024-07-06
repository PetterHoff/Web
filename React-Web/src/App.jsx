import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Routes, Route } from "react-router-dom";
import Hjem from "./pages/hjem.jsx";
import Beskrivelse from "./pages/beskrivelse.jsx";
import Booking from "./pages/booking.jsx";
import Kontakt from "./pages/kontakt.jsx";
// Importerer alle modulene, sidene, og det vi skal bruke i en samme oversikt, "App"

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Hjem />} />
          <Route path="/beskrivelse" element={<Beskrivelse />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
