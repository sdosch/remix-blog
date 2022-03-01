import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-BAP53VO3.js";

// browser-route-module:/Users/sdosch/src/remix/blog/app/routes/posts/index.tsx?browser
init_react();

// app/routes/posts/index.tsx
init_react();
function Posts() {
  const posts = useLoaderData();
  console.log(posts);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Posts"));
}
export {
  Posts as default
};
//# sourceMappingURL=/build/routes/posts/index-5LQC75YI.js.map
