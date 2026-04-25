export default function TrainList({ trains }) {
  return (
    <div>
      {trains.map((t) => (
        <div>{t.number}</div>
      ))}
    </div>
  );
}