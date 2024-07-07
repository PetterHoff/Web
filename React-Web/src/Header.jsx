
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Hjem</Link></li>
          <li><Link to="/beskrivelse">Beskrivelse</Link></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/kontakt">Kontakt oss</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
