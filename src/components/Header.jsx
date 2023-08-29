import { Link } from "react-router-dom";
import "../styles/Header/Header.css";
import Search from "antd/es/input/Search";

const Header = (props) => {
  const username = localStorage.getItem("admin") || "John Doe";
  return (
    <header className="header">
      <nav className="container px-4 d-flex align-items-center justify-content-between">
        <div>
          <Search
            placeholder="Mijozlarni qidirish: Timur"
            onSearch={props.handleSearch}
						className="inp"
						onChange={props.handleSearchChange}
          />
        </div>
        <div className="d-flex align-items-center  gap-3">
          <div className="doira d-flex align-items-center justify-content-center">
            <i className="fa-regular fa-user fs-4 text-dark"></i>
          </div>

          <div className="dropdown-center">
            <span className="text-white">{username}</span>
            <button
              className="btn border-0 dropdown-toggle text-white mt-1"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <Link
              to={"/"}
              onClick={() => localStorage.clear()}
              className="dropdown-menu drop_dawn text-center text-decoration-none"
            >
              Log out
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
