import {
  Link,
  Outlet,
  React,
  init_react,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-AZN6X2WU.js";

// browser-route-module:/Users/sdosch/src/remix/blog/app/routes/admin.tsx?browser
init_react();

// app/routes/admin.tsx
init_react();
function Admin() {
  const posts = useLoaderData();
  const navigate = useNavigate();
  return /* @__PURE__ */ React.createElement("div", {
    className: "prose prose-slate prose-sm m-6"
  }, /* @__PURE__ */ React.createElement("h1", null, "Admin"), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "pr-2"
  }, /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug,
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "1em"
    }
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/admin/${post.slug}/edit`
  }, post.title), /* @__PURE__ */ React.createElement(Link, {
    to: `/admin/${post.slug}/delete`
  }, "delete")))), /* @__PURE__ */ React.createElement("button", {
    onClick: () => navigate("/admin/new")
  }, "new Post")), /* @__PURE__ */ React.createElement("main", {
    className: "flex-1 pl-2 border-l-4"
  }, /* @__PURE__ */ React.createElement(Outlet, null))));
}
export {
  Admin as default
};
//# sourceMappingURL=/build/routes/admin-GAQHIHTO.js.map
