import React, { useState } from 'react';
import './PaymentPage.css';
function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('card'); // Default to card payment

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className="payment-page">
      <h2 className="cicada">Your Trust Matters to Us !</h2>
      <form className="payment-form">
        <div className="bg-white rounded-50">
          <label className="">Choose Your Payment Method:</label>
          <select id="paymentMethod" onChange={handlePaymentMethodChange}>
            <option value="upi">UPI</option>
            <option value="gpay">GPay</option>
            <option value="card">Credit/Debit Card</option>
            <option value="netbanking">Net Banking</option>
          </select>
        </div>

        {/* Display payment fields based on selected method (placeholder) */}
        {paymentMethod === 'upi' && (
          <div>
            <label>UPI ID:</label>
            <input type="text" name="upiId" />
          </div>
        )}
        {/* ... other payment method fields */}
        <div className="button-container">
          <button type="submit" className="cancel-button">Proceed to Payment</button>
          <button type="button" className="cancel-button" onClick={() => navigate("/register")}>
            Nevermind, I am broke..
          </button>
        </div>
        
      </form>
    </div>
  );
}

export default Payment;