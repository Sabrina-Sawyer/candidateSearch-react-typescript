import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
// import Card from 'react-bootstrap/Card';
// import CandidateCard from '../components/CandidateCards';


const CandidateSearch = () => {
  const [candidateData, setCandidateData] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [detailedData, setDetailedData] = useState<Candidate[]>([]);
  useEffect(() => {
    searchGithub().then((data) => {
      //console.log("the things", data);
      setCandidateData(data);
      getGitHubDetails(candidateData);
      async function getGitHubDetails(candidates: Candidate[]) {
        await Promise.all(candidates.map((candidate) => getDetails(candidate.login)));
        //setDetailedData(detailedCandidates);
        console.log('detailedData', detailedData);
      }
    });
  }, []);


  async function getDetails(username: string) {
    const response = await searchGithubUser(username);
    //console.log('response bro: ', response);
    if (!response) {
      return 'no data found for this user';
    }
    const data = await response.json();
    // return data;
    setDetailedData((prev) => [...prev, ...data]);

  }
  



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
        {/* <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`${candidateData[currentIndex].img}`} alt={`${candidateData[currentIndex].name}`} />
            <Card.Body>
                <Card.Title>{candidateData[currentIndex].name}</Card.Title>
                <Card.Text>
                    Location: {candidateData[currentIndex].location}
                </Card.Text>
                <Card.Text>
                    Email: {candidateData[currentIndex].email}
                </Card.Text>
                <Card.Text>
                    Company: {candidateData[currentIndex].company}
                </Card.Text>
                <Card.Text>
                    Bio: {candidateData[currentIndex].bio}
                </Card.Text>
            </Card.Body>
        </Card> */}
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
