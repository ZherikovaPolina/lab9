import { useNavigate } from "react-router-dom";

export default function TrainCard({ train }) {
  const navigate = useNavigate();

  return (
    <div
      className="train-card"
      onClick={() => navigate(`/booking/${train.id}`)}
    >
      <div className="train-header">
        <span>{train.number}</span>
        <span>{train.duration}</span>
      </div>

      <div className="train-route">
        {train.from} → {train.to}
      </div>

      <div className="train-footer">
        {train.departure}
      </div>
    </div>
  );
}