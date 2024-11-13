// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    login: string | null;
    name: string | null;
    id: string | null;
    location: string | null;
    img: string | null;
    email: string | null;
    html_url: string | null;
    company: string | null;
    bio: string;
}

export default Candidate;