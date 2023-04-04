import "./CandidateItem.module.scss";
import { Link } from "react-router-dom";

const CandidateItem = ({ idProp, emailProp, avatarProp, nameProp }) => {
  return (
    <li>
      <Link to={`/candidate/${idProp}`}>
        <img src={avatarProp} alt="" />
        <div>{nameProp}</div>
        <div>{emailProp}</div>
      </Link>
    </li>
  );
};

export default CandidateItem;
