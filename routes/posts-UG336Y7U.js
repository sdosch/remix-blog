import {
  Link,
  Outlet,
  useLoaderData
} from "/build/_shared/chunk-3GOTXJQT.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:/Users/sdosch/src/remix/blog/app/routes/posts.tsx?browser
init_react();

// app/routes/posts.tsx
init_react();
function Posts() {
  const posts = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "m-6"
  }, /* @__PURE__ */ React.createElement("h1", null, "Posts"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-3"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "pr-10"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "pl-0 mb-5"
  }, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: post.slug
  }, post.title))))), /* @__PURE__ */ React.createElement("main", {
    className: "col-span-2 pl-10 border-l-4"
  }, /* @__PURE__ */ React.createElement(Outlet, null))));
}
export {
  Posts as default
};
//# sourceMappingURL=/build/routes/posts-UG336Y7U.js.map
