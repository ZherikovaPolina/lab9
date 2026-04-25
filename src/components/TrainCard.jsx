export default function TrainCard({ train }) {
  return (
    <div className="card">
      <p>{train.number}</p>
      <p>{train.from} - {train.to}</p>
      <p>{train.departure}</p>
    </div>
  );
}