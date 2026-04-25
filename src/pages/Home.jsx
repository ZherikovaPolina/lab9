import { useState } from "react";
import { trains } from "../data/trains";
import TrainList from "../components/TrainList";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [search, setSearch] = useState("");

  const filtered = trains.filter((t) =>
    `${t.number} ${t.from} ${t.to}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>🚆 Railway Booking</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <TrainList trains={filtered} />
    </div>
  );
}