import React, { useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './assets/scss/PaymentModal.scss'; 
import visaImage from "./assets/Images/visa.png";
import masterImage from "./assets/Images/master.png";

Modal.setAppElement('#root'); 

const PaymentModal = ({ isOpen, onRequestClose, onPaymentSuccess }) => {
  const [cardType, setCardType] = useState(null); 
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState(null); 
  const [cvc, setCvc] = useState('');

  const handlePayment = () => {
    if (cardNumber.length === 16 && expiryDate && cvc.length === 3) {
      setTimeout(() => {
        Swal.fire({
          icon: 'success',
          title: 'Payment Successful',
          text: 'Your payment has been processed successfully!'
        });
        onPaymentSuccess();
        onRequestClose();
      }, 1000);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Payment Failed',
        text: 'Please fill in all card details correctly.'
      });
    }
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Sadece rakamları al

    // Sadece 16 haneli ve 4 veya 5 ile başlayan kart numaralarını kabul et
    if (value.length <= 16 && (value.startsWith('4') || value.startsWith('5'))) {
      setCardNumber(value);

      if (value.startsWith('4')) {
        setCardType('visa');
      } else if (value.startsWith('5')) {
        setCardType('mastercard');
      } else {
        setCardType(null);
      }
    } else {
      // Kart numarası geçersiz ise boş bırak
      setCardNumber('');
      setCardType(null); // Kart tipini sıfırla
    }
  };

  const handleExpiryDateChange = (date) => {
    setExpiryDate(date);
  };

  const handleCvcChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); 
    if (value.length <= 3) {
      setCvc(value);
    }
  };

  const isAfter2024 = (date) => {
    const year = date.getFullYear();
    return year >= 2024;
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Payment Modal"
      className="payment-modal"
      overlayClassName="payment-modal-overlay"
    >
      {cardType && (
        <div className="card-type-icon">
          <img style={{ width: "40px" }} src={cardType === 'visa' ? visaImage : masterImage} alt={cardType === 'visa' ? 'Visa Card' : 'MasterCard'} />
        </div>
      )}

      <h2>Payment Information</h2>
      <form>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength="16"
            placeholder="1234 5678 9012 3456"
            pattern="\d{16}"
            required
            onKeyDown={(e) => {
              // Sadece rakam veya delete/backspace tuşlarını kabul et
              const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Delete', 'Backspace'];
              if (!allowedKeys.includes(e.key)) {
                e.preventDefault();
              }
            }}
          />
        </div>
        <div className="form-group">
          <label>Expiry Date</label>
          <DatePicker
            selected={expiryDate}
            onChange={handleExpiryDateChange}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            placeholderText="MM/YYYY"
            className="form-control"
            required
            minDate={new Date(2024, 0, 1)} 
            filterDate={isAfter2024} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvc">CVC</label>
          <input
            type="text"
            id="cvc"
            value={cvc}
            onChange={handleCvcChange}
            maxLength="3"
            placeholder="123"
            pattern="\d{3}"
            required
          />
        </div>
        <button type="button" onClick={handlePayment}>OK</button>
      </form>
    </Modal>
  );
};

export default PaymentModal;
