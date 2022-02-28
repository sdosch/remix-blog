import { Link, Outlet, useLoaderData, useNavigate } from "remix";

import { getPosts } from "~/post";
import type { Post } from "~/post";

import adminStyles from "~/styles/admin.css";

export const links = () => {
  return [{ rel: "stylesheet", href: adminStyles }];
};

export const loader = async () => {
  return getPosts();
};

export default function Admin() {
  const posts = useLoaderData<Post[]>();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Admin</h1>
      <div className="admin">
        <nav>
          <ul>
            {posts.map((post) => (
              <li
                key={post.slug}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1em",
                }}
              >
                <Link to={`/admin/${post.slug}/edit`}>{post.title}</Link>
                <Link to={`/admin/${post.slug}/delete`}>delete</Link>
              </li>
            ))}
          </ul>
          <button onClick={() => navigate("/admin/new")}>new Post</button>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
