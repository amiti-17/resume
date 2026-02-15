import "./style.css";
import LeftSide from "../LeftSide/indes";
import RightSide from "../RightSide";

function AppWrapper() {
  return (
    <div className="appWrapper">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default AppWrapper;
