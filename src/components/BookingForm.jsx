import { useState } from "react";
import { useBooking } from "../context/BookingContext";
import { saveBooking } from "../services/BookingService";

export default function BookingForm() {
  const { selectedSeats, setSelectedSeats, selectedWagon } = useBooking();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = () => {
    saveBooking(selectedSeats, form, selectedWagon);
    setSelectedSeats([]);
  };

  return (
    <div className="booking-form">
      <input
        placeholder="Ім’я"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Телефон"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <button onClick={handleSubmit}>
        Забронювати
      </button>
    </div>
  );
}