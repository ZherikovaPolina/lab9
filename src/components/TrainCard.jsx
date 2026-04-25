export default function TrainCard({ train }) {
  return (
    <div>
      <p>{train.number}</p>
      <p>{train.from} - {train.to}</p>
    </div>
  );
}