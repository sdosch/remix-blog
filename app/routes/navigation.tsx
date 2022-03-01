import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHome } from "@fortawesome/free-solid-svg-icons";

import { Link } from "remix";

export const Navigation = () => {
  return (
    <nav className="bg-sky-600">
      <ul className="flex px-3">
        <li>
          <Link to="/" className="block p-3 font-bold text-white no-underline">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </li>
        <li>
          <Link
            to="/posts"
            className="block p-3 font-bold text-white no-underline"
          >
            Posts
          </Link>
        </li>
        <li>
          <Link
            to="/admin"
            className="block p-3 font-bold text-white no-underline"
          >
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
};
