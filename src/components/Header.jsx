
import "../styles/Header.css";
import { BellIcon, PlusIcon, SearchIcon } from "../assets/icons";

const Header = () => {
  return (
    <header>
        <div className="logo">Logo</div>
        <div className="search">
          <SearchIcon />
          <input id="search-bar" type="text" placeholder="Search" />
          <BellIcon />  
        </div>
        <div className="user-set">
          <div className="user-logo">

          </div>
          <PlusIcon />
        </div>
    </header>
  )
}

export default Header