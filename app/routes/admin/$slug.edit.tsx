import { useEffect, useState } from "react";
import {
  Form,
  ActionFunction,
  LoaderFunction,
  useActionData,
  useTransition,
  redirect,
} from "remix";
import { useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { createPost, getPost, NewPost } from "~/post";

type PostError = {
  title?: boolean;
  slug?: boolean;
  markdown?: boolean;
};

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
};

export const action: ActionFunction = async ({ request }) => {
  await new Promise((res) => setTimeout(res, 1000));
  const formData = await request.formData();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");

  const errors: PostError = {};
  if (!title) errors.title = true;
  if (!slug) errors.slug = true;
  if (!markdown) errors.markdown = true;

  if (Object.keys(errors).length) {
    return errors;
  }

  invariant(typeof title === "string");
  invariant(typeof slug === "string");
  invariant(typeof markdown === "string");

  await createPost({ title, slug, markdown });

  return redirect("/admin");
};

export default function EditPost() {
  const errors = useActionData();
  const transition = useTransition();
  const loaderData = useLoaderData();
  const [post, setPost] = useState<NewPost>(loaderData);

  useEffect(() => {
    setPost(loaderData);
  }, [transition]);

  return (
    <Form method="post">
      <input type="hidden" name="slug" value={post.slug} />
      <p>
        <label>
          Post Title: {errors?.title ? <em>Title is required</em> : null}
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.currentTarget.value })}
          />
        </label>
      </p>
      <p>
        <label htmlFor="markdown">Markdown:</label>
        {errors?.markdown ? <em>Markdown is required</em> : null}
        <br />
        <textarea
          id="markdown"
          rows={10}
          name="markdown"
          value={post.markdown}
          onChange={(e) =>
            setPost({ ...post, markdown: e.currentTarget.value })
          }
        />
      </p>
      <p>
        <button type="submit" className="text-white bg-green-600">
          {transition.submission ? "Saving..." : "Save"}
        </button>
      </p>
    </Form>
  );
}
