import "./Header.module.scss";
import { Link } from 'react-router-dom';


const Header = () => {
	return (
	  <header>
		<h2>Interviews Reports</h2>
		<Link to="/"><button>Candidates</button></Link>
	  </header>
	);
  };
  
  export default Header;