import { useBooking } from "../context/BookingContext";

export default function WagonSelector() {
  const { setSelectedWagon } = useBooking();

  const wagons = [1, 2, 3, 4];

  return (
    <div>
      {wagons.map((w) => (
        <button key={w} onClick={() => setSelectedWagon(w)}>
          Вагон {w}
        </button>
      ))}
    </div>
  );
}