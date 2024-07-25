import Calendar from "../components/Calendar/calendar_new.jsx";
import "./booking_style.css"
const Booking = () => {
  return (
    <div className="form">
      <h1>Booking</h1>
      <h3>Customer information</h3>
      <p>Please write your details down below so we can contact you for more information</p>
      <p>The minimum booking duration is 3 days</p>
      <Calendar />
    </div>
    
  );
};

export default Booking;
