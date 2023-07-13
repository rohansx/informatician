import "../Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function NavItems(props) {
  return (
    <div style={{}}>
      <ul
        id="nav-items"
        style={{
          marginBottom: 0,
          transform:
            !props.clicked & props.drawer
              ? "translateX(500px)"
              : "translateX(0px)",
          transition:
            props.clicked & props.drawer
              ? "transform 0.3s ease-out"
              : "transform 0.3s ease-in",
          background: props.theme === "dark" ? "#001229" : "#eff6ff",
        }}
      >
        <li>
          <div className="search-container search-mobile-view">
            <form action="" className="search-bar">
              <input type="text" placeholder="search..." name="q" />
              <button type="submit">
                <i className="fa-solid fa-search"></i>
              </button>
            </form>
          </div>
          <Link
            to="/"
            className={
              props.location.pathname === "/"
                ? "active"
                : props.theme === "dark"
                ? "text-white"
                : "text-dark"
            }
            onClick={props.handleOptionClick}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/books"
            className={
              props.location.pathname === "/books"
                ? "active"
                : props.theme === "dark"
                ? "text-white"
                : "text-dark"
            }
            onClick={props.handleOptionClick}
          >
            Books
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={
              props.location.pathname === "/about"
                ? "active"
                : props.theme === "dark"
                ? "text-white"
                : "text-dark"
            }
            onClick={props.handleOptionClick}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={
              props.location.pathname === "/contact"
                ? "active"
                : props.theme === "dark"
                ? "text-white"
                : "text-dark"
            }
            onClick={props.handleOptionClick}
          >
            Contact Us
          </Link>
        </li>

        <li>
          <Link to="/bookmark" onClick={scrollToTop}>
            <FontAwesomeIcon
              style={{
                color: props.theme === "dark" ? "white" : "",
                height: "24px",
              }}
              icon={faBookmark}
            />
          </Link>
        </li>
        <li>
          <Link
            to="/addBooks"
            onClick={scrollToTop}
            className="flex"
            style={{ width: "34px" }}
          >
            <img
              loading="lazy"
              src="https://img.icons8.com/ios/80/add-book.png"
              alt="Add Book Icon"
              className="h-8 mr-3 text-bold  hover:font-bold hover:shadow-md self-center  "
              style={{ filter: props.theme === "dark" ? "invert(1)" : "" }}
            />{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}
