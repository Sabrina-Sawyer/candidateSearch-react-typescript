// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    login: string;
    id: string;
    location: string;
    avatar_url: string;
    email: string;
    html_url: string;
    company: string;
    bio: string;
}

export default Candidate;