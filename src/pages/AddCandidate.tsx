import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCandidate = () => {
  const [candidate, setCandidate] = useState({
    name: '',
    username: '',
    location: '',
    avatar_url: '',
    email: '',
    html_url: '',
    company: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCandidate({ ...candidate, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existingCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    localStorage.setItem('savedCandidates', JSON.stringify([...existingCandidates, candidate]));
    navigate('/SavedCandidates');
  };

  return (
    <div>
      <h1>Add a New Candidate</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={candidate.name} onChange={handleChange} required />
        </label>
        <label>
          Username:
          <input type="text" name="username" value={candidate.username} onChange={handleChange} required />
        </label>
        <label>
          Location:
          <input type="text" name="location" value={candidate.location} onChange={handleChange} />
        </label>
        <label>
          Avatar URL:
          <input type="text" name="avatar_url" value={candidate.avatar_url} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={candidate.email} onChange={handleChange} />
        </label>
        <label>
          GitHub Profile URL:
          <input type="url" name="html_url" value={candidate.html_url} onChange={handleChange} />
        </label>
        <label>
          Company:
          <input type="text" name="company" value={candidate.company} onChange={handleChange} />
        </label>
        <button type="submit">Save Candidate</button>
      </form>
    </div>
  );
};

export default AddCandidate;
