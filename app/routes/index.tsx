import { Link } from "remix";

export default function Index() {
  return (
    <nav className="prose prose-slate prose-sm m-6">
      <ul>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}
