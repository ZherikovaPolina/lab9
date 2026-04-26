import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedWagon, setSelectedWagon] = useState(1);

  const [refresh, setRefresh] = useState(false);

  return (
    <BookingContext.Provider
      value={{
        selectedSeats,
        setSelectedSeats,
        selectedWagon,
        setSelectedWagon,
        refresh,
        setRefresh,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => useContext(BookingContext);