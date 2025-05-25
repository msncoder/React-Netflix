import logo from "../Logonetflix.png";
import { Link } from "react-router-dom";
import "./Header.scss";
import { IoIosSearch } from "react-icons/io";

function Header() {
  // console.log(logo);

  return (
    <nav className="header">
      <img src={logo} alt="logo" />
      <div>
        <Link to="/tvShows">TV Shows</Link>
        <Link to="/tvShows">Movies</Link>
        <Link to="/tvShows">Recently Added</Link>
        <Link to="/tvShows">My List</Link>
      </div>
      <IoIosSearch id="icon" />
    </nav>
  );
}

export default Header;
