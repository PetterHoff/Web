import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { addYears } from 'date-fns';
import emailjs from 'emailjs-com';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './calendar_new.css'; // Import the CSS file for styling
import 'react-phone-number-input/style.css'; // phone number styling
import PhoneInput from 'react-phone-number-input'; // phone input 
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const BookingForm = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [phoneValue, setPhoneValue] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSubmit = (event) => { // when button is clicked
    event.preventDefault();
    const formData = { // object
      firstName: event.target.fname.value,
      lastName: event.target.lname.value,
      address: event.target.address.value,
      apartment_unit: event.target.apartment_unit.value,
      city: event.target.city.value,
      state: event.target.state.value,
      zip: event.target.zip.value,
      country: event.target.country.value,
      email: event.target.email.value,
      phone: phoneValue,
      number_of_visitors: event.target.num_people.value,
      comments: event.target.comments.value,
      startDate: state[0].startDate.toLocaleDateString(),
      endDate: state[0].endDate.toLocaleDateString()
    };

    // Send email with form data
    emailjs.send('service_i0sm1gm', 'template_b56ucfo', formData, 'BE88S6rY2LNNpFGj6')
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        navigate('/success'); // Redirect to success page using navigate
      }, (error) => {
        console.error('Error sending email:', error.text);
        alert('Error sending email. Please try again.');
      });
  };

  return (
    <div className="booking-container">
      <form onSubmit={handleSubmit} className="booking-form">
        <label htmlFor="fname">First Name:</label>
        <input type="text" id="fname" name="fname" placeholder="First Name" required />

        <label htmlFor="lname">Last Name:</label>
        <input type="text" id="lname" name="lname" placeholder="Last Name" required />

        <label htmlFor="address">Street Address:</label>
        <input type="text" id="address" name="address" placeholder="Street Address" required />

        <label htmlFor="apartment_unit">Apartment/Unit Number:</label>
        <input type="text" id="apartment_unit" name="apartment_unit" placeholder="Apartment/Unit Number (not required)" />

        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" placeholder="City" required />

        <label htmlFor="state">State/Province/Region:</label>
        <input type="text" id="state" name="state" placeholder="State/Province/Region" required />

        <label htmlFor="zip">Zip code:</label>
        <input type="text" id="zip" name="zip" placeholder="Zip code" required />

        <label htmlFor="country">Country:</label>
        <input type="text" id="country" name="country" placeholder="Country" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Email" required />

        <label htmlFor="phone">Phone Number:</label>
        
        <PhoneInput placeholder="Enter phone number" value={phoneValue} onChange={setPhoneValue} required />
   
        
        <label htmlFor="num_people">How many will be staying?</label>
        <div className="num-people-options">
          <input type="radio" id="three_or_less" name="num_people" value="3 or less"  />
          <label htmlFor="three_or_less">3 or less</label><br />
          <input type="radio" id="four" name="num_people" value="4" />
          <label htmlFor="four">4</label><br />
          <input type="radio" id="five" name="num_people" value="5" />
          <label htmlFor="five">5</label><br />
          <input type="radio" id="six" name="num_people" value="6" />
          <label htmlFor="six">6</label>

        </div>



        <label htmlFor="comments">Other important comments:</label>
        <textarea id="comments" name="comments" placeholder="Other important comments" rows={5} />
        
        <button type="submit">Book Now</button>  
      </form> 
      <div className="calendar-wrapper">
        <DateRangePicker
          ranges={state}
          onChange={item => setState([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          direction="horizontal"
          preventSnapRefocus={true}
          calendarFocus="backwards"
          minDate={new Date()}
          maxDate={addYears(new Date(), 1)}
          staticRanges={[]}
          inputRanges={[]}
        />
        <h3>Total Cost</h3>
        <h3>Cleaning fee - 1900kr</h3>
      </div>
    </div>
  );
};

export default BookingForm;
