import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
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

const [searchInput, setSearchInput] = useState<string>('');

const addToSaveCandidate = () => {
  let parsedSaveCandidate: Candidate[] = [];
  const storedSaveCandidate = localStorage.getItem('saveCandidate');
  if (typeof storedSaveCandidate === 'string') {
    parsedSaveCandidate = JSON.parse(storedSaveCandidate);
  }
  parsedSaveCandidate.push(currentCandidate);
  localStorage.setItem('saveCandidate', JSON.stringify(parsedSaveCandidate));
};

const 


  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
