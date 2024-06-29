import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import "./assets/scss/BuyTicket.scss";
import PaymentModal from './PaymentModal';

const BuyTicket = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState(id || '');
  const [dates, setDates] = useState([]);
  const [event, setEvent] = useState('');
  const [seans, setSeans] = useState([]);
  const [ticketType, setTicketType] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [reservedSeats, setReservedSeats] = useState([]);
  const [price, setPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ticketPrice = price || 50;
  const seats = Array.from({ length: 60 }, (_, i) => i + 1);

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/tickets');
        setMovies(response.data);
        if (id) {
          const selectedMovie = response.data.find(movie => movie._id === id);
          if (selectedMovie) {
            setCategory(id);
            setDates([selectedMovie.date]);
            setSeans(selectedMovie.seans);
            setPrice(selectedMovie.price);
          }
        }
      } catch (error) {
        console.error("Failed to fetch movies from API:", error);
        Swal.fire({
          icon: 'error',
          title: 'API Error',
          text: 'Failed to fetch movies, please try again later.'
        });
      }
    };

    fetchMovies();
  }, [id]);

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

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setEvent(selectedDate);
    setTicketType('');
    setReservedSeats([]);
  };

  const handleSeansChange = async (e) => {
    const selectedSeans = e.target.value;
    setTicketType(selectedSeans);

    if (category && event && selectedSeans) {
      try {
        const response = await axios.get('http://localhost:3000/api/reserv', {
          params: { movieId: category, date: event, seans: selectedSeans }
        });

        const groupedReservations = {};
        response.data.forEach(reserv => {
          if (!groupedReservations[reserv.movieId]) {
            groupedReservations[reserv.movieId] = {};
          }
          if (!groupedReservations[reserv.movieId][reserv.seans]) {
            groupedReservations[reserv.movieId][reserv.seans] = new Set(reserv.selectedSeats);
          } else {
            reserv.selectedSeats.forEach(seat => groupedReservations[reserv.movieId][reserv.seans].add(seat));
          }
        });

        const selectedMovie = movies.find(movie => movie._id === category);
        const selectedSeansTime = selectedMovie ? selectedMovie.seans.find(seans => seans === selectedSeans) : '';

        const reservedSeatsData = groupedReservations[category] && groupedReservations[category][selectedSeansTime]
          ? Array.from(groupedReservations[category][selectedSeansTime])
          : [];

        setReservedSeats(reservedSeatsData);
      } catch (error) {
        console.error("Failed to fetch reservation data:", error);
        Swal.fire({
          icon: 'error',
          title: 'Reservation Error',
          text: 'Failed to fetch reservation data, please try again later.'
        });
        setReservedSeats([]);
      }
    } else {
      setReservedSeats([]);
    }
  };

  const handleQuantityChange = (action) => {
    setQuantity(prev => {
      const newQuantity = action === 'increment' ? Math.min(prev + 1, 60) : Math.max(prev - 1, 1);
      if (newQuantity < selectedSeats.length) {
        setSelectedSeats(prevSelectedSeats => prevSelectedSeats.slice(0, newQuantity));
      }
      return newQuantity;
    });
  };

  useEffect(() => {
    setTotal(quantity * ticketPrice);
  }, [quantity, ticketPrice]);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      if (selectedSeats.length < quantity) {
        setSelectedSeats([...selectedSeats, seat]);
      }
    }
  };


  const openPaymentModal = () => {
    if (!user) {
      Swal.fire({
        title: 'Login Required',
        text: 'Please login to buy tickets. Would you like to login now?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/login';
        }
      });
      return;
    }

    if (!category || !event || !ticketType || selectedSeats.length !== quantity) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Information',
        text: 'Please fill in all fields and select the correct number of seats.'
      });
      return;
    }

    setIsModalOpen(true);
  };

  const handlePaymentSuccess = async () => {
    const selectedMovie = movies.find(movie => movie._id === category);
    const selectedSeansTime = selectedMovie ? selectedMovie.seans.find(seans => seans === ticketType) : '';

    const newReservation = {
      movieId: category,
      name: selectedMovie?.name,
      date: event,
      seans: selectedSeansTime,
      selectedSeats,
      price: total
    };

    try {
      await axios.post('http://localhost:3000/api/reserv', newReservation);

      const updatedOrders = [...(user.orders || []), newReservation];
      await axios.patch(`http://localhost:3000/api/users/${user._id}`, { orders: updatedOrders });

      const updatedUser = { ...user, orders: updatedOrders };
      localStorage.setItem('user', JSON.stringify(updatedUser));

      Swal.fire({
        icon: 'success',
        title: 'Reservation Successful',
        text: 'Reservation successfully completed!'
      });

      setCategory('');
      setEvent('');
      setTicketType('');
      setQuantity(1);
      setTotal(0);
      setSelectedSeats([]);
      setReservedSeats([]);
    } catch (error) {
      console.error("Reservation failed:", error);
      Swal.fire({
        icon: 'error',
        title: 'Reservation Failed',
        text: 'Reservation failed, please try again.'
      });
    }
  };

  return (
    <section id="buyTicket">
      <div className="container buyTicket">
        <form className="ticketForm" onSubmit={(e) => e.preventDefault()}>
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
              <button type="button" className='butl' onClick={() => handleQuantityChange('decrement')}>-</button>
              <input type="number" value={quantity} readOnly />
              <button type="button" className='butl' onClick={() => handleQuantityChange('increment')}>+</button>
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

          <button type="button" className="buyButton" onClick={openPaymentModal}>Buy Now</button>
        </form>

        <PaymentModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          onPaymentSuccess={handlePaymentSuccess}
        />
      </div>
    </section>
  );
}

export default BuyTicket;
