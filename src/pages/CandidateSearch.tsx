import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../types/Candidate';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      const results = await searchGithub();
      setCandidates(results);
      setCandidate(results[0]);
    };

    fetchCandidates();
  }, []);

  const handleSaveCandidate = () => {
    if (candidate) {
      setSavedCandidates([...savedCandidates, candidate]);
      nextCandidate();
    }
  };

  const nextCandidate = () => {
    setCandidates(candidates.slice(1));
    setCandidate(candidates[1] || null);
  };

  return candidate ? (
    <div>
      <img src={candidate.avatar_url} alt={candidate.name} />
      <h2>{candidate.name}</h2>
      <p>Username: {candidate.username}</p>
      <p>Location: {candidate.location}</p>
      <p>Company: {candidate.company}</p>
      <a href={candidate.html_url}>Profile</a>
      <button onClick={handleSaveCandidate}>+</button>
      <button onClick={nextCandidate}>-</button>
    </div>
  ) : (
    <p>No more candidates available</p>
  );
};

export default CandidateSearch;
