import { useState } from "react";
import { useBooking } from "../context/BookingContext";
import { saveBooking } from "../services/BookingService";
import Toast from "./Toast";

export default function BookingForm({ trainId }) {
  const {
    selectedSeats,
    setSelectedSeats,
    selectedWagon,
    refreshSeats,
  } = useBooking();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [toast, setToast] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.email) return;

    saveBooking(selectedSeats, form, selectedWagon, trainId);

    setSelectedSeats([]);

    refreshSeats();

    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  return (
    <div className="booking-form">
      <Toast show={toast} message="Бронювання успішне 🎉" />

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

      <button onClick={handleSubmit} disabled={selectedSeats.length === 0}>
        Забронювати ({selectedSeats.length})
      </button>
    </div>
  );
}