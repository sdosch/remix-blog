import { Link, Outlet, useLoaderData, useNavigate } from "remix";

import { getPosts } from "~/post";
import type { Post } from "~/post";
import { Navigation } from "./navigation";

export const loader = async () => {
  return getPosts();
};

export default function Admin() {
  const posts = useLoaderData<Post[]>();
  const navigate = useNavigate();
  return (
    <div>
      <Navigation />
      <div className="m-10">
        <h1>🦄 Admin</h1>
        <div className="grid grid-cols-4">
          <nav className="pr-10">
            <ul className="pl-0 mb-5">
              {posts.map((post) => (
                <li key={post.slug} className="pl-0 flex gap-5 justify-between">
                  <Link to={`/admin/${post.slug}/edit`}>{post.title}</Link>
                  <Link to={`/admin/${post.slug}/delete`}>Delete</Link>
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate("/admin/new")}
              className="text-white bg-green-600"
            >
              Create Post
            </button>
          </nav>
          <main className="col-span-3 pl-10 border-l-4">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
