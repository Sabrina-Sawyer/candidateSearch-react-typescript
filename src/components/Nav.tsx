import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <>
      <Link to='/savedcandidates'>
        Saved Candidates
      </Link>
      <Link to='/'>
        Home
      </Link>
    </>
  )
};

export default Nav;