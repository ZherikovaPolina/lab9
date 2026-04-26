export function saveBooking(seats, user, wagonId, trainId) {
  const existing = JSON.parse(localStorage.getItem("bookedSeats")) || [];
  const newBookings = seats.map((seat) => ({
    seat,
    wagonId,
    trainId,
    user,
  }));

  const updated = [...existing, ...newBookings];

  localStorage.setItem("bookedSeats", JSON.stringify(updated));
}

export function getBookedSeats() {
  return JSON.parse(localStorage.getItem("bookedSeats")) || [];
}