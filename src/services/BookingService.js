export function saveBooking(seats, user, wagonId) {
  const existing = JSON.parse(localStorage.getItem("bookedSeats")) || [];

  const updated = [
    ...existing,
    ...seats.map((seat) => ({
      seat,
      wagonId,
      user,
    })),
  ];

  localStorage.setItem("bookedSeats", JSON.stringify(updated));
}

export function getBookedSeats() {
  return JSON.parse(localStorage.getItem("bookedSeats")) || [];
}