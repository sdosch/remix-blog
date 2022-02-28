import { Link, Outlet, useLoaderData, useNavigate } from "remix";

import { getPosts } from "~/post";
import type { Post } from "~/post";

// import adminStyles from "~/styles/admin.css";

// export const links = () => {
//   return [{ rel: "stylesheet", href: adminStyles }];
// };

export const loader = async () => {
  return getPosts();
};

export default function Admin() {
  const posts = useLoaderData<Post[]>();
  const navigate = useNavigate();
  return (
    <div className="prose prose-slate prose-sm m-6">
      <h1>Admin</h1>
      <div className="flex">
        <nav className="pr-10">
          <ul className="pl-0 mb-5">
            {posts.map((post) => (
              <li key={post.slug} className="pl-0 flex gap-5 justify-between">
                <Link to={`/admin/${post.slug}/edit`}>{post.title}</Link>
                <Link to={`/admin/${post.slug}/delete`}>delete</Link>
              </li>
            ))}
          </ul>
          <button onClick={() => navigate("/admin/new")}>new Post</button>
        </nav>
        <main className="flex-1 pl-10 border-l-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
