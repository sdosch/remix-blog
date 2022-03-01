import { Link, Outlet, useLoaderData } from "remix";

import { getPosts } from "~/post";
import type { Post } from "~/post";
import { Navigation } from "./navigation";

export const loader = async () => {
  return getPosts();
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();
  return (
    <div>
      <Navigation />
      <div className="m-10">
        <h1>🐴 Blog</h1>
        <div className="grid grid-cols-4">
          <nav className="pr-10">
            <ul className="pl-0 mb-5 ">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link to={post.slug}>{post.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <main className="col-span-3 pl-10 border-l-4">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
