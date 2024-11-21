import { useState, useEffect } from 'react';
import { getFromCache } from './utils/cacheLocalStorage';
import { useCache } from './utils/CacheContext';

const SavedCandidates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [candidates, setCandidates] = useState(getFromCache<Array<any>>('savedCandidates') || []);

  useEffect(() => {
    const saved = localStorage.getItem('savedCandidates');
    if (saved) {
      setCandidates(JSON.parse(saved));
    }
  }, []);
  const { cache, setCache } = useCache();

  const savedCandidates = cache.savedCandidates || [];
  const handleRemoveCandidate = (index: number) => {
    const updatedCandidates = savedCandidates.filter((_: any, i: number) => i !== index);
    setCache('savedCandidates', updatedCandidates);
  };

  if (candidates.length === 0) {
    return <p>No saved candidates yet!</p>;
  }
  const nextCandidate = () => {
    if (currentIndex < candidates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCandidate = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section>
      <h1>Saved Candidates</h1>
      {candidates.length > 0 ? (
        <>
          <div>
            <img
              src={candidates[currentIndex].avatar}
              alt={`${candidates[currentIndex].name}'s avatar`}
            />
            <p><strong>Name:</strong> {candidates[currentIndex].name}</p>
            <p><strong>Username:</strong> {candidates[currentIndex].username}</p>
            <p><strong>Location:</strong> {candidates[currentIndex].location}</p>
            <p><strong>Email:</strong> {candidates[currentIndex].email}</p>
            <p><strong>Company:</strong> {candidates[currentIndex].company}</p>
            <p>
              <strong>Profile:</strong>{' '}
              <a href={candidates[currentIndex].html_url} target="_blank" rel="noopener noreferrer">
                View GitHub Profile
              </a>
            </p>
          </div>
          <div style={{ marginTop: '20px' }}>
            <button onClick={prevCandidate} disabled={currentIndex === 0}>
              Previous
            </button>
            <button
              onClick={nextCandidate}
              disabled={currentIndex === candidates.length - 1}
            >
              Next
            </button>
            <button onClick={() => handleRemoveCandidate(currentIndex)}>
              Remove Candidate
            </button>
          </div>
        </>
      ) : (
        <p>No candidates saved yet!</p>
      )}
      {currentIndex === candidates.length - 1 && candidates.length > 0 && (
        <p>No more candidates to display.</p>
      )}
    </section>
  );
};




export default SavedCandidates;



