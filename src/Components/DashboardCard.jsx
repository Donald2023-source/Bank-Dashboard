import chipBlack from "../assets/Chip black.png";
import chipWhite from "../assets/Chip White.png";
import Elipse from "../assets/Elipse.png";
export default function DashboardCard({ chipColor }) {
  return (
    <div className="p-5  flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span>
          <p>Balance</p>
          <p>$5,765</p>
        </span>
        {chipColor === "white" ? (
          <img src={chipWhite} alt="Elipse" />
        ) : (
          <img src={chipBlack} alt="Elipse" />
        )}
      </div>
      <div className="flex items-center pb-2 justify-between">
        <span>
          <p>CARD HOLDER</p>
          <p>Eddy Lucas</p>
        </span>
        <span>
          <p>VALID THRU</p>
          <p>12/22</p>
        </span>
      </div>

      <div className="flex items-center border-t border-gray-400 py-2 justify-between">
        <p className="font-semibold">3829 **** **** 1208</p>
        <img src={Elipse} alt="Elipse" />
      </div>
    </div>
  );
}
