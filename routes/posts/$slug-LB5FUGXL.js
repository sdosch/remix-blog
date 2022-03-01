import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-4RDDVIPJ.js";

// browser-route-module:/Users/sdosch/src/remix/blog/app/routes/posts/$slug.tsx?browser
init_react();

// app/routes/posts/$slug.tsx
init_react();
function PostSlug() {
  const post = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: post.html }
  });
}
export {
  PostSlug as default
};
//# sourceMappingURL=/build/routes/posts/$slug-LB5FUGXL.js.map
