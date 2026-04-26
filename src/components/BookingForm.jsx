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

  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.email) {
      setError("Заповніть всі поля");
      return;
    }

    saveBooking(selectedSeats, form, selectedWagon);
    setSelectedSeats([]);
    setError("");
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

      {error && <p className="error">{error}</p>}

      <button onClick={handleSubmit}>
        Забронювати
      </button>
    </div>
  );
}