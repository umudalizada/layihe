import React, { useState, useEffect } from 'react';
import "./assets/scss/BuyTicket.scss";

const BuyTicket = () => {
  const [category, setCategory] = useState('');
  const [event, setEvent] = useState('');
  const [ticketType, setTicketType] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const ticketPrice = 50; // Example ticket price, adjust as needed

  // Handle quantity change
  const handleQuantityChange = (action) => {
    setQuantity(prev => {
      const newQuantity = action === 'increment' ? Math.min(prev + 1, 60) : Math.max(prev - 1, 1);
      // Adjust selected seats if new quantity is less than current number of selected seats
      if (newQuantity < selectedSeats.length) {
        setSelectedSeats(prevSelectedSeats => prevSelectedSeats.slice(0, newQuantity));
      }
      return newQuantity;
    });
  };

  // Handle total calculation
  useEffect(() => {
    setTotal(quantity * ticketPrice);
  }, [quantity]);

  // Handle seat selection
  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      if (selectedSeats.length < quantity) {
        setSelectedSeats([...selectedSeats, seat]);
      }
    }
  };

  const seats = Array.from({ length: 60 }, (_, i) => i + 1);

  return (
    <section id="buyTicket">
      <div className="container buyTicket">
        <form className="ticketForm">
          <div className="form-group">
            <label htmlFor="category">Movie</label>
            <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select Movie</option>
              <option value="music">Music</option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
              <option value="sports">Sports</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="event">Date</label>
            <select id="event" name="event" value={event} onChange={(e) => setEvent(e.target.value)}>
              <option value="">Select Date</option>
              <option value="concert">Concert</option>
              <option value="theater">Theater</option>
              <option value="sports">Sports</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="ticketType">Seans</label>
            <select id="ticketType" name="ticketType" value={ticketType} onChange={(e) => setTicketType(e.target.value)}>
              <option value="">Select Seans</option>
              <option value="vip">VIP</option>
              <option value="standard">Standard</option>
              <option value="economy">Economy</option>
            </select>
          </div>

          <div className="form-group">
            <label>Quantity</label>
            <div className="quantity-controls">
              <button type="button" onClick={() => handleQuantityChange('decrement')}>-</button>
              <input type="number" value={quantity} readOnly />
              <button type="button" onClick={() => handleQuantityChange('increment')}>+</button>
            </div>
          </div>

          <div className="form-group">
            <label>Total: ${total}</label>
          </div>

          <div className="form-group seats">
            <label>Select Seats</label>
            <div className="seat-grid">
              {seats.map(seat => (
                <button
                  key={seat}
                  type="button"
                  className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                  onClick={() => handleSeatClick(seat)}
                  disabled={selectedSeats.length >= quantity && !selectedSeats.includes(seat)}
                >
                  {seat}
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className="buyButton">Buy Now</button>
        </form>
      </div>
    </section>
  );
}

export default BuyTicket;
