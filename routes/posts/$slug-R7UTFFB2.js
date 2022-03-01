import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-KB7ANMLH.js";

// browser-route-module:/Users/sdosch/src/remix/blog/app/routes/posts/$slug.tsx?browser
init_react();

// app/routes/posts/$slug.tsx
init_react();
function PostSlug() {
  const post = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, post.title));
}
export {
  PostSlug as default
};
//# sourceMappingURL=/build/routes/posts/$slug-R7UTFFB2.js.map
