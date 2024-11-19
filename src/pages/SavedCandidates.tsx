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
  if (savedCandidates.length === 0) {
    return <p>No saved candidates yet!</p>;
  }

  return savedCandidates.length > 0 ? (
    <div>
      <h1>Potential Candidates</h1>
      {savedCandidates.map((candidate) => (
        <div key={candidate.id}>
          <img src={candidate.avatar_url} alt={candidate.name} />
          <h2>{candidate.name}</h2>
          <p>{candidate.username}</p>
          <p>Location: {candidate.location}</p>
          <p>Email: {candidate.email || 'Not available'}</p>
          <p>Company: {candidate.company || 'Not available'}</p>
          <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
        </div>
      ))}
    </div>
  ) : (
    <p>No saved candidates.</p>
  );
};

export default SavedCandidates;



