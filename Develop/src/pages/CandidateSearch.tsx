import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCards';

const CandidateSearch = () => {
const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
  login: '',
  name: '',
  id: '',
  location: '',
  img: '',
  email: '',
  html_url: '',
  company: '',
  bio: '',
});

  return <h1>CandidateSearch</h1>;
};

// searchGithub user searchs for a single user
// 

export default CandidateSearch;
