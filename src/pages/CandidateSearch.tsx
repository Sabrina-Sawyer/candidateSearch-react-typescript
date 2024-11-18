import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import Card from 'react-bootstrap/Card';

const CandidateSearch = () => {
  const [candidateData, setCandidateData] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);

  useEffect(() => {
    const getInitialData = async () => {
      const ghData = await searchGithub();
      setCandidateData(ghData);
    };
    getInitialData();
  }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (candidateData.length > 0) {
        const userDeets = await searchGithubUser(candidateData[currentIndex].login);
        setCurrentCandidate(userDeets);
      }
    };
    fetchUserDetails();
  }, [currentIndex, candidateData]);



  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % candidateData.length; // Loop back to start if at the end
    setCurrentIndex(nextIndex);
  };

  const handleSave = (candidate: Candidate) => {
    const storedCands = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    storedCands.push(candidate);
    localStorage.setItem('savedCandidates', JSON.stringify(storedCands));
    const nextIndex = (currentIndex + 1) % candidateData.length;
    setCurrentIndex(nextIndex);
  }

  return (
    <>
      <h1>CandidateSearch</h1>
      {currentCandidate ? (
        <>
          <div className='card-container'>
            <Card>
              <Card.Img
                variant="top"
                src={currentCandidate.avatar_url}
                alt={currentCandidate.id}
              />
              <Card.Body>
                <Card.Title>{currentCandidate.login}</Card.Title>
                <Card.Text>Location: {currentCandidate.location}</Card.Text>
                <Card.Text>Email: {currentCandidate.email}</Card.Text>
                <Card.Text>Company: {currentCandidate.company}</Card.Text>
                <Card.Text>Bio: {currentCandidate.bio}</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <button onClick={handleNext}>Next</button>
            <button onClick={() => handleSave(currentCandidate)}>Save Candidate</button>
          </div>
        </>
      ) : (
        <div>No candidate data</div>
      )}
    </>
  );
};

export default CandidateSearch;