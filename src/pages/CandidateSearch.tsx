import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [candidate, setCandidate] = useState<Candidate | null>(null);

  useEffect(() => {
    localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
  }, [savedCandidates]);

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
    <><p>Welcome to the Candidate Search</p><p>   Add Candidates and Then search to find the right one!</p></>
  );
};

export default CandidateSearch;
