// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    login: string;
    name: string;
    id: string;
    location: string;
    img: string;
    email: string;
    html_url: string;
    company: string;
    bio: string;
}

export default Candidate;