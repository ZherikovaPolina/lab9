import WagonSelector from "../components/WagonSelector";
import SeatMap from "../components/SeatMap";
import BookingForm from "../components/BookingForm";

export default function Booking() {
  return (
    <div className="container">
      <h2>Бронювання місць</h2>

      <WagonSelector />
      <SeatMap />
      <BookingForm />
    </div>
  );
}