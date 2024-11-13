import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
// import CandidateCard from '../components/CandidateCards';


const CandidateSearch = () => {
  const [candidateData, setCandidateData] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  useEffect(() => {
    searchGithub().then((data) => {
      console.log(data);
      setCandidateData(data);
      console.log(candidateData);
    });
  }, []);




  // const [currentCandidate, setCurrentCandidate] = useState({});

  // const [searchInput, setSearchInput] = useState<string>('');

  // const addToSaveCandidate = () => {
  //   let parsedSaveCandidate: Candidate[] = [];
  //   const storedSaveCandidate = localStorage.getItem('saveCandidate');
  //   if (typeof storedSaveCandidate === 'string') {
  //     parsedSaveCandidate = JSON.parse(storedSaveCandidate);
  //   }
  //   parsedSaveCandidate.push(currentCandidate);
  //   localStorage.setItem('saveCandidate', JSON.stringify(parsedSaveCandidate));
  // };

  function handleNext() {
    setCurrentIndex((prev) => prev + 1);


  }





  return (<>
    <h1>CandidateSearch</h1>
    {candidateData.length > 0 && candidateData[currentIndex] ?
      (
        <div>
          {candidateData[currentIndex].login}
          <button
        onClick={handleNext}>
          Next
        </button>
        </div>
      ) : (
        <div>
          No candidate data
        </div>
      )}
  </>);
};

export default CandidateSearch;
