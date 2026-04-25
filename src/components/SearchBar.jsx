export default function SearchBar({
  from,
  to,
  number,
  setFrom,
  setTo,
  setNumber,
}) {
  return (
    <div className="search-panel">
      <input
        className="search-input"
        placeholder="Звідки"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />

      <input
        className="search-input"
        placeholder="Куди"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />

      <input
        className="search-input"
        placeholder="Номер потяга"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
    </div>
  );
}