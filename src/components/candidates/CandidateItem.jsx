import "./CandidateItem.module.scss";
import { Link } from "react-router-dom";

const CandidateItem = ({ emailProp, avatarProp, nameProp }) => {
  return (
    <li>
      <Link to="/reports">
        <img src={avatarProp} alt="" />
        <div>{nameProp}</div>
        <div>{emailProp}</div>
      </Link>
    </li>
  );
};

export default CandidateItem;
