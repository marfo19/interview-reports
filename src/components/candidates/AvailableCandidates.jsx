import CandidatesItem from "./CandidateItem";

import "./AvailableCandidates.module.scss";

const AvailableCandidates = ({ candidatesProp }) => {
  const candidateList = candidatesProp.map((candidate) => {
    return (
      <CandidatesItem
        key={candidate.id}
        idProp={candidate.id}
        nameProp={candidate.name}
        emailProp={candidate.email}
        avatarProp={candidate.avatar}
      />
    );
  });

  return (
    <>
      <ul>{candidateList}</ul>
    </>
  );
};

export default AvailableCandidates;
