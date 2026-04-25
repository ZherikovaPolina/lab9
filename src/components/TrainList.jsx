export default function TrainList({ trains }) {
  return (
    <div>
      {trains.map((train) => (
        <TrainCard train={train} />
      ))}
    </div>
  );
}