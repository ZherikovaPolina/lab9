export function saveBooking(seats) {
  localStorage.setItem("bookedSeats", JSON.stringify(seats));
}

export function getBookedSeats() {
  return JSON.parse(localStorage.getItem("bookedSeats")) || [];
}