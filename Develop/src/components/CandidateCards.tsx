import type React from 'react';
import Card from 'react-bootstrap/Card';
import type { Candidate } from '../interfaces/Candidate.interface';



type CandidateCardProps = {
    currentCandidate: Candidate;
    addToSavedCandidate?: (() => void) | null;
    onSavedCandidate?: boolean | null;
    removeFromStorage?:
    | ((
        e: React.MouseEvent<SVGSVGElement, MouseEvent>,
        currentlyOnSavedCandidate: boolean | null | undefined,
        title: string | null) => void)
    | null;
};


const CandidateCard = ({
    currentCandidate,
    addToSavedCandidate,
    onSavedCandidate,
    removeFromStorage,
}: CandidateCardProps) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`${currentCandidate.img}`} alt={`${currentCandidate.name}`} />
            <Card.Body>
                <Card.Title>{currentCandidate.name}</Card.Title>
                <Card.Text>
                    Location: {currentCandidate.location}
                </Card.Text>
                <Card.Text>
                    Email: {currentCandidate.email}
                </Card.Text>
                <Card.Text>
                    Company: {currentCandidate.company}
                </Card.Text>
                <Card.Text>
                    Bio: {currentCandidate.bio}
                </Card.Text>
            </Card.Body>

            {/* add buttons to refresh and add candidate to keep searching
            {/* <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body> */}
        </Card>
            );
    }

            export default CandidateCard;