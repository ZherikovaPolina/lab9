export default function SearchBar({ search, setSearch }) {
  return (
    <input
      className="search-input"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search trains..."
    />
  );
}