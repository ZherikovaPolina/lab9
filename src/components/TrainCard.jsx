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
        <div>{train.from}</div>
        <div className="train-arrow">→</div>
        <div>{train.to}</div>
      </div>

      <div className="train-footer">
        Відправлення: {train.departure}
      </div>
    </div>
  );
}