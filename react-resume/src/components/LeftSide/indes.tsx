import Contacts from "./Contacts";
import Photo from "./Photo";
import "./style.css";

function LeftSide() {
  return (
    <div className="leftSide">
      <Photo />
      <Contacts />
    </div>
  );
}

export default LeftSide;
