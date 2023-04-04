import { useEffect, useState, React } from "react";

import CandidatesFilter from "./CandidatesFilter";
import AvailableCandidates from "./AvailableCandidates";

import classes from "./Candidates.module.scss";

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setfilteredCandidates] = useState([]);

  useEffect(() => {
    //povlacimo sve candidates i dodeljujemo u candidates state
    const fetchCandidates = async () => {
      const response = await fetch("http://localhost:3333/api/candidates");

      const responseData = await response.json();

      const loadedCandidates = [];
      for (const key in responseData) {
        loadedCandidates.push({
          id: responseData[key].id,
          name: responseData[key].name,
          email: responseData[key].email.toLowerCase(),
          avatar: responseData[key].avatar,
        });
      }

      setCandidates(loadedCandidates);
    };

    fetchCandidates();
  }, []);

  const filterCandidates = (value) => {
    const filtered = [];
    if (value.trim() === "") {
      setfilteredCandidates(candidates);
    } else {
      filtered = candidates.filter((cand) =>
      cand.name.toLowerCase().includes(value.toLowerCase())
    );
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
