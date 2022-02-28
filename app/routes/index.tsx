import { Link } from "remix";

export default function Index() {
  return (
    <ul>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
}
