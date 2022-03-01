import {
  Link,
  Outlet,
  React,
  init_react,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-3MFQM2D7.js";

// browser-route-module:/Users/sdosch/src/remix/blog/app/routes/posts.tsx?browser
init_react();

// app/routes/posts.tsx
init_react();
function Admin() {
  const posts = useLoaderData();
  const navigate = useNavigate();
  return /* @__PURE__ */ React.createElement("div", {
    className: "prose prose-slate prose-sm m-6"
  }, /* @__PURE__ */ React.createElement("h1", null, "Admin"), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "pr-10"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "pl-0 mb-5"
  }, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: post.slug
  }, post.title)))), /* @__PURE__ */ React.createElement("button", {
    onClick: () => navigate("/admin/new")
  }, "new Post")), /* @__PURE__ */ React.createElement("main", {
    className: "flex-1 pl-10 border-l-4"
  }, /* @__PURE__ */ React.createElement(Outlet, null))));
}
export {
  Admin as default
};
//# sourceMappingURL=/build/routes/posts-F6KVQSFX.js.map
