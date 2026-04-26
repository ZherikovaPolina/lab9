import { useBooking } from "../context/BookingContext";

export default function WagonSelector() {
  const { selectedWagon, setSelectedWagon } = useBooking();

  const wagons = [1, 2, 3, 4];

  return (
    <div className="wagon-wrapper">
      {wagons.map((wagon) => (
        <button
          key={wagon}
          onClick={() => setSelectedWagon(wagon)}
          className={`wagon-btn ${
            selectedWagon === wagon ? "active" : ""
          }`}
        >
          Вагон {wagon}
        </button>
      ))}
    </div>
  );
}