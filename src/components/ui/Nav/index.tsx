import { Link } from "react-router-dom";

const pages: { name: string; path: string }[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "about" },
  { name: "Contact", path: "contact" },
];

function Nav() {
  return (
    <div id="main-nav">
      <ul>
        {pages.map((page) => {
          return (
            <li key={page.name}>
              <Link to={page.path}>{page.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Nav;
