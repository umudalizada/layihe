import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./assets/scss/BuyTicket.scss";

const BuyTicket = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState('');
  const [dates, setDates] = useState([]);
  const [event, setEvent] = useState('');
  const [seans, setSeans] = useState([]);
  const [ticketType, setTicketType] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [reservedSeats, setReservedSeats] = useState([]);
  const [price, setPrice] = useState(0);
  const ticketPrice = price || 50;
  const seats = Array.from({ length: 60 }, (_, i) => i + 1);

  // Kullanıcıyı localStorage'dan al
  const user = JSON.parse(localStorage.getItem('user'));

  // API'den filmleri çekme
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/tickets');
        setMovies(response.data);
      } catch (error) {
        console.error("API'den filmler çekilemedi:", error);
      }
    };

    fetchMovies();
  }, []);

  // Kategori değişimi
  const handleCategoryChange = (e) => {
    const selectedMovieId = e.target.value;
    setCategory(selectedMovieId);
    const selectedMovie = movies.find(movie => movie._id === selectedMovieId);

    if (selectedMovie) {
      setDates([selectedMovie.date]);
      setSeans(selectedMovie.seans);
      setPrice(selectedMovie.price);
    } else {
      setDates([]);
      setSeans([]);
      setPrice(0);
    }
    setEvent('');
    setTicketType('');
    setReservedSeats([]);
  };

  // Tarih değişimi
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setEvent(selectedDate);
    setTicketType('');
    setReservedSeats([]);
  };

// Seans değişimi
const handleSeansChange = async (e) => {
  const selectedSeans = e.target.value;
  setTicketType(selectedSeans);

  if (category && event && selectedSeans) {
    try {
      const response = await axios.get('http://localhost:3000/api/reserv', {
        params: { movieId: category, date: event, seans: selectedSeans }
      });
      const reservedSeatsData = response.data.reduce((acc, reserv) => acc.concat(reserv.selectedSeats), []);
      setReservedSeats(reservedSeatsData);
    } catch (error) {
      console.error("Rezervasyon verileri çekilemedi:", error);
      setReservedSeats([]);
    }
  } else {
    setReservedSeats([]);
  }
};

  // Miktar değişimi
  const handleQuantityChange = (action) => {
    setQuantity(prev => {
      const newQuantity = action === 'increment' ? Math.min(prev + 1, 60) : Math.max(prev - 1, 1);
      if (newQuantity < selectedSeats.length) {
        setSelectedSeats(prevSelectedSeats => prevSelectedSeats.slice(0, newQuantity));
      }
      return newQuantity;
    });
  };

  // Toplamı hesaplama
  useEffect(() => {
    setTotal(quantity * ticketPrice);
  }, [quantity, ticketPrice]);

  // Koltuk seçimi
  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      if (selectedSeats.length < quantity) {
        setSelectedSeats([...selectedSeats, seat]);
      }
    }
  };

  // Form gönderimi
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category || !event || !ticketType || selectedSeats.length !== quantity) {
      alert('Please fill all fields and select the required number of seats.');
      return;
    }
    
    const newReservation = {
      movieId: category,
      date: event,
      seans: ticketType,
      selectedSeats
    };

    try {
      // API'ye rezervasyon gönder
      await axios.post('http://localhost:3000/api/reserv', newReservation);

      // Kullanıcının orders dizisini güncelle
      const updatedOrders = [...user.orders, newReservation];
      await axios.patch(`http://localhost:3000/api/users/${user._id}`, { orders: updatedOrders });

      // Güncellenmiş kullanıcı verilerini localStorage'a kaydet
      const updatedUser = { ...user, orders: updatedOrders };
      localStorage.setItem('user', JSON.stringify(updatedUser));

      alert('Reservation successful!');
      setCategory('');
      setEvent('');
      setTicketType('');
      setQuantity(1);
      setTotal(0);
      setSelectedSeats([]);
      setReservedSeats([]);
    } catch (error) {
      console.error("Rezervasyon işlemi başarısız:", error);
      alert('Reservation failed. Please try again.');
    }
  };

  return (
    <section id="buyTicket">
      <div className="container buyTicket">
        <form className="ticketForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="category">Movie</label>
            <select id="category" name="category" value={category} onChange={handleCategoryChange}>
              <option value="">Select Movie</option>
              {movies.map(movie => (
                <option key={movie._id} value={movie._id}>{movie.name}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="event">Date</label>
            <select id="event" name="event" value={event} onChange={handleDateChange}>
              <option value="">Select Date</option>
              {dates.length > 0 ? dates.map(date => (
                <option key={date} value={date}>{new Date(date).toLocaleDateString()}</option>
              )) : <option value="" disabled>No Dates Available</option>}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="ticketType">Seans</label>
            <select id="ticketType" name="ticketType" value={ticketType} onChange={handleSeansChange}>
              <option value="">Select Seans</option>
              {seans.length > 0 ? seans.map((s, index) => (
                <option key={index} value={s}>{s}</option>
              )) : <option value="" disabled>No Seans Available</option>}
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
                  className={`seat ${selectedSeats.includes(seat) ? 'selected' : reservedSeats.includes(seat) ? 'reserved' : ''}`}
                  onClick={() => handleSeatClick(seat)}
                  disabled={reservedSeats.includes(seat)}
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
