import type { LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import invariant from "tiny-invariant";

import { getPost } from "~/post";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
};

export default function PostSlug() {
  const post = useLoaderData();
  return (
    <article
      className="prose prose-slate prose-xl m-6"
      dangerouslySetInnerHTML={{ __html: post.html }}
    />
  );
}
