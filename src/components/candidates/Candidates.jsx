import { useEffect, useState, React } from "react";
import CandidatesFilter from "./CandidatesFilter";
import AvailableCandidates from "./AvailableCandidates";
import classes from "./Candidates.module.scss";
import { useParams } from 'react-router-dom';

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setfilteredCandidates] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCandidates = async () => {
      const response = await fetch("http://localhost:3333/api/candidates");

      const responseData = await response.json();

      const loadedCandidates = responseData.map((cand) => {
        return {
          id: cand.id,
          name: cand.name,
          email: cand.email.toLowerCase(),
          avatar: cand.avatar,
        };
      });

      setCandidates(loadedCandidates);
      setfilteredCandidates(loadedCandidates);
    };

    fetchCandidates();
  }, []);

  useEffect(() => {
    if (id) {
      const selectedCandidate = candidates.find((cand) => cand.id === id);
      setfilteredCandidates([selectedCandidate]);
    } else {
      setfilteredCandidates(candidates);
    }
  }, [id, candidates]);

  const filterCandidates = (value) => {
    const filtered = candidates.filter((cand) =>
      cand.name.toLowerCase().includes(value.toLowerCase())
    );
    if (value.trim() === "") {
      setfilteredCandidates(candidates);
    } else {
      setfilteredCandidates(filtered);
    }
  };

  return (
    <section className={classes.candidates}>
      <CandidatesFilter onFilter={filterCandidates} />
      <AvailableCandidates candidatesProp={filteredCandidates} />
    </section>
  );
};



export default Candidates;
