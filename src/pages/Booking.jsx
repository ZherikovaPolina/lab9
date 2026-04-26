import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

import WagonSelector from "../components/WagonSelector";
import SeatMap from "../components/SeatMap";
import BookingForm from "../components/BookingForm";

export default function Booking() {
  const { trainId } = useParams();
  const { setSelectedSeats } = useBooking();

  useEffect(() => {
    setSelectedSeats([]);
  }, [trainId]);

  return (
    <div className="container">
      <h2>Бронювання місць</h2>

      <WagonSelector />
      <SeatMap trainId={trainId} />
      <BookingForm trainId={trainId} />
    </div>
  );
}