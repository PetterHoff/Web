import React, { useState, useEffect } from 'react';
import { DateRangePicker } from 'react-date-range';
import { addYears, differenceInDays } from 'date-fns';
import emailjs from 'emailjs-com';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './calendar_new.css'; // Import the CSS file for styling
import 'react-phone-number-input/style.css'; // phone number styling
import PhoneInput from 'react-phone-number-input'; // phone input 
import { useNavigate } from 'react-router-dom'; 

const BookingForm = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
 //variables for scope inside functioon booking form, basicly global
  const [phoneValue, setPhoneValue] = useState('');
  const [totalCost, setTotalCost] = useState(1000); // Initialize with one day's cost (1000kr)
  const navigate = useNavigate(); 
  const days = differenceInDays(state[0].endDate, state[0].startDate) + 1;
 //useEffect, function to determine cost for renting, maybe implement inside the cost ?? 
  useEffect(() => {
    const cost = days * 1000 + 1900;
    setTotalCost(cost);
  }, [state]);

  const handleSubmit = (event) => { // when button is clicked, we gather value from the forms, then send to an email which i have configured
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
    <div className="booking-container">  {/* form,  each label is for each input */}
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
        
        <label htmlFor="num_people">How many people, including yourself, will be staying in the apartment?</label> {/* 3 or less no extra, 4 or more 500kr?? extra per night  */}
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



        <div className="total-cost">
          <div className="cost-item">
            <span className="label">Total Days:</span>
            <span className="value">{days}</span>
          </div>
          <div className="cost-item">
            <span className="label">Daily Rate:</span>
            <span className="value">1000 kr</span>
          </div>
          <div className="cost-item">
            <span className="label">Cleaning Fee:</span>
            <span className="value">1900 kr</span>
          </div>
          <div className="cost-item total">
            <span className="label">Total Cost:</span>
            <span className="value">{totalCost} kr</span>
          </div>
          <div className="cost-item"> 
            <span className="label">Deposit:</span>
            <span className="value">10 000 kr</span>
          </div>
          <div className="cost-item total">
            <span className="label">Total Payment:</span>
            <span className="value">{totalCost + 10000} kr</span> 
          </div>
        </div>



        <button type="submit">Book Now</button>  
      </form> 
      <div className="calendar-wrapper">  {/* calendar, imported */}
        <DateRangePicker             
          ranges={state}
          onChange={item => setState([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          direction="horizontal"
          preventSnapRefocus={true}
          calendarFocus="fowards"
          minDate={new Date()}
          maxDate={addYears(new Date(), 1)}
          staticRanges={[]}
          inputRanges={[]}
        />
      </div>
    </div>
  );
};

export default BookingForm;
