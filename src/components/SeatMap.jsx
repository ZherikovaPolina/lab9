import { useState } from "react";
import { useBooking } from "../context/BookingContext";

export default function SeatMap() {
  const { selectedSeats, setSelectedSeats } = useBooking();

  const [bookedSeats, setBookedSeats] = useState([]);

  const seats = Array.from({ length: 32 }, (_, i) => i + 1);

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return;

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="seat-grid">
      {seats.map((seat) => (
        <div key={seat} className="seat" onClick={() => toggleSeat(seat)}>
          {seat}
        </div>
      ))}
    </div>
  );
}