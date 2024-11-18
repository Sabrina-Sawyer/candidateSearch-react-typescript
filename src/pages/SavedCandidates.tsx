import Candidate from '../interfaces/Candidate.interface';
import Table from 'react-bootstrap/Table';
import { useState, useEffect, } from 'react';


const SavedCandidates = () => {
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        const savedCandidates = localStorage.getItem('savedCandidates');
        const potentials = JSON.parse(savedCandidates ? savedCandidates : '[]');
        setSaved(potentials);
    }, [])

    const savedPotentials = saved.map((potentialsSaved: Candidate) =>
        <tr>
            <td>{potentialsSaved.id}</td>
            <td>{potentialsSaved.location}</td>
            <td>{potentialsSaved.avatar_url}</td>
            <td>{potentialsSaved.email}</td>
            <td>{potentialsSaved.html_url}</td>
            <td>{potentialsSaved.company}</td>
        </tr>
    );
    return (
        <>
            <h1>Potential Candidates</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>user</th>
                        <th>location</th>
                        <th>email</th>
                        <th>github</th>
                        <th>company</th>
                    </tr>
                </thead>
                <tbody>
                    {savedPotentials}
                </tbody>
            </Table>
        </>
    );
};

export default SavedCandidates;