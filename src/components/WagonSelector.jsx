import { useBooking } from "../context/BookingContext";

export default function WagonSelector() {
  const { selectedWagon, setSelectedWagon } = useBooking();

  const wagons = [1, 2, 3, 4];

  return (
    <div>
      {wagons.map((w) => (
        <button
          key={w}
          onClick={() => setSelectedWagon(w)}
          className={selectedWagon === w ? "active" : ""}
        >
          Вагон {w}
        </button>
      ))}
    </div>
  );
}