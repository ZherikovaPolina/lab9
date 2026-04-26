import { useEffect, useState } from "react";
import { useBooking } from "../context/BookingContext";
import { getBookedSeats } from "../services/BookingService";

export default function SeatMap() {
  const {
    selectedSeats,
    setSelectedSeats,
    selectedWagon,
  } = useBooking();

  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    const data = getBookedSeats();

    const filtered = data
      .filter((b) => b.wagonId === selectedWagon)
      .map((b) => b.seat);

    setBookedSeats(filtered);
  }, [selectedWagon]);

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
      {seats.map((seat) => {
        let className = "seat";

        if (bookedSeats.includes(seat)) className += " booked";
        else if (selectedSeats.includes(seat)) className += " selected";

        return (
          <div
            key={seat}
            className={className}
            onClick={() => toggleSeat(seat)}
          >
            {seat}
          </div>
        );
      })}
    </div>
  );
}