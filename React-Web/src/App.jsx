import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aktiviteter from "./pages/aktiviteter.jsx";
import Beskrivelse from "./pages/beskrivelse.jsx'";
import Booking from "./pages/booking.jsx";
import Kontakt from "./pages/kontakt.jsx";
//Importerer alle modulene, sidene, og det vi skal bruke i en samme oversikt, "App"





function App() {

  return(
    <>
      <Header></Header>
      <Footer></Footer>
    </>
  );

}

export default App
