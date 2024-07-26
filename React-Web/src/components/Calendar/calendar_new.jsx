import React, { useState, useEffect } from 'react';
import { DateRangePicker } from "@nextui-org/date-picker";
import emailjs from 'emailjs-com';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useNavigate } from 'react-router-dom';
import './calendar_new.css';
import "nice-forms.css";

const BookingForm = () => {
  const [dateRange, setDateRange] = useState({ startDate: new Date(), endDate: new Date() });
  const [phoneValue, setPhoneValue] = useState('');
  const [totalCost, setTotalCost] = useState(1000);
  const navigate = useNavigate();
  const days = Math.max(1, (dateRange.endDate - dateRange.startDate) / (1000 * 60 * 60 * 24) + 1);
  const [numPeople, setNumPeople] = useState(3);

  useEffect(() => {
    let rate = numPeople <= 3 ? 1000 : 1250;
    let cost = days * rate + 1900;
    setTotalCost(cost);
  }, [dateRange, numPeople]);

  const handleNumPeopleChange = (event) => {
    setNumPeople(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName: event.target.fname.value,
      lastName: event.target.lname.value,
      country: event.target.country.value,
      email: event.target.email.value,
      phone: phoneValue,
      number_of_visitors: numPeople,
      comments: event.target.comments.value,
      startDate: dateRange.startDate.toLocaleDateString(),
      endDate: dateRange.endDate.toLocaleDateString(),
      Amount: totalCost,
      totalCost: totalCost + 10000,
    };

    if (days < 3) {
      alert('The minimum booking duration is 3 days. Please select a longer stay.');
      return;
    }

    emailjs.send('service_i0sm1gm', 'template_b56ucfo', formData, 'BE88S6rY2LNNpFGj6')
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        navigate('/success');
      }, (error) => {
        console.error('Error sending email:', error.text);
        alert('Error sending email. Please try again.');
      });
  };

  return (
    <div className="booking-container">
      <DateRangePicker
        label="Stay duration" 
        isRequired
        value={dateRange}
        onChange={setDateRange}
      />
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="nice-form-group">
          <label htmlFor="fname">First Name:</label>
          <input type="text" id="fname" name="fname" placeholder="First Name" required />

          <label htmlFor="lname">Last Name:</label>
          <input type="text" id="lname" name="lname" placeholder="Last Name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Email" required />

          <label htmlFor="phone">Phone Number:</label>
          <PhoneInput className='phone-input' placeholder="Enter phone number" value={phoneValue} onChange={setPhoneValue} required />

          <label htmlFor="country">Country:</label>
          <input type="text" id="country" name="country" placeholder="Country" required />
        </div>

        <div className="nice-form-group">
          <h3>How many people, including yourself, will be staying in the apartment?</h3>
          <input type="radio" id="three_or_less" name="num_people" value={3} onChange={handleNumPeopleChange} checked={numPeople === 3} />
          <label htmlFor="three_or_less">3 or less</label><br />
          <input type="radio" id="four" name="num_people" value={4} onChange={handleNumPeopleChange} />
          <label htmlFor="four">4</label><br />
          <input type="radio" id="five" name="num_people" value={5} onChange={handleNumPeopleChange} />
          <label htmlFor="five">5</label><br />
          <input type="radio" id="six" name="num_people" value={6} onChange={handleNumPeopleChange} />
          <label htmlFor="six">6</label>
        </div>

        <div className="form-section additional-details">
          <label htmlFor="comments">Other important comments:</label>
          <textarea id="comments" name="comments" placeholder="Other important comments" rows={5} />
        </div>

        <div className="form-section total-cost">
          <div className="cost-item">
            <span className="label">Total Days:</span>
            <span className="value">{days}</span>
          </div>
          <div className="cost-item">
            <span className="label">Daily Rate:</span>
            <span className="value">{numPeople <= 3 ? '1000 kr' : '1250 kr'}</span>
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
    </div>
  );
};

export default BookingForm;
