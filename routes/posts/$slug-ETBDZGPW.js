import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-W742IFAV.js";

// browser-route-module:/Users/sdosch/src/remix/blog/app/routes/posts/$slug.tsx?browser
init_react();

// app/routes/posts/$slug.tsx
init_react();
function PostSlug() {
  const post = useLoaderData();
  return /* @__PURE__ */ React.createElement("article", {
    className: "prose prose-slate prose-xl m-6",
    dangerouslySetInnerHTML: { __html: post.html }
  });
}
export {
  PostSlug as default
};
//# sourceMappingURL=/build/routes/posts/$slug-ETBDZGPW.js.map