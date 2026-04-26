export function saveBooking(seats) {
  const existing = JSON.parse(localStorage.getItem("bookedSeats")) || [];

  const updated = [...existing, ...seats];

  localStorage.setItem("bookedSeats", JSON.stringify(updated));
}

export function getBookedSeats() {
  return JSON.parse(localStorage.getItem("bookedSeats")) || [];
}