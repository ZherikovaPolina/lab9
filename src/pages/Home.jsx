import { useState } from "react";
import { trains } from "../data/trains";
import TrainList from "../components/TrainList";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [number, setNumber] = useState("");

  const filtered = trains.filter((t) => {
    return (
      t.from.toLowerCase().includes(from.toLowerCase()) &&
      t.to.toLowerCase().includes(to.toLowerCase()) &&
      t.number.toLowerCase().includes(number.toLowerCase())
    );
  });

  return (
    <div className="container">
      <h1>Railway Booking</h1>

      <SearchBar
        from={from}
        to={to}
        number={number}
        setFrom={setFrom}
        setTo={setTo}
        setNumber={setNumber}
      />

      <TrainList trains={filtered} />
    </div>
  );
}