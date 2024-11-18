import { useEffect, useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('savedCandidates');
    if (saved) {
      setSavedCandidates(JSON.parse(saved));
    }
  }, []);

  return savedCandidates.length > 0 ? (
    <div>
      <h1>Potential Candidates</h1>
      {savedCandidates.map((candidate) => (
        <div key={candidate.id}>
          <img src={candidate.avatar_url} alt={candidate.name} />
          <h2>{candidate.name}</h2>
          <p>{candidate.username}</p>
        </div>
      ))}
    </div>
  ) : (
    <p>No saved candidates.</p>
  );
};

export default SavedCandidates;



