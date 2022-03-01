import {
  Form,
  ActionFunction,
  LoaderFunction,
  useTransition,
  redirect,
} from "remix";
import { useLoaderData } from "remix";
import invariant from "tiny-invariant";

import { deletePost, getPost } from "~/post";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
};

export const action: ActionFunction = async ({ request }) => {
  await new Promise((res) => setTimeout(res, 1000));

  const formData = await request.formData();
  const slug = formData.get("slug");

  invariant(typeof slug === "string");
  await deletePost(slug);

  return redirect("/admin");
};

export default function DeletePost() {
  const transition = useTransition();
  const loaderData = useLoaderData();

  return (
    <Form method="post">
      <h2>Delete {loaderData.slug}?</h2>
      <p>
        <input type="hidden" name="slug" value={loaderData.slug} />
        <button type="submit" className="bg-red-600 text-white">
          {transition.submission ? "Deleting..." : "Delete"}
        </button>
      </p>
    </Form>
  );
}
