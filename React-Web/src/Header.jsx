
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/beskrivelse">Description</Link></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/kontakt">Contact us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
