import {
  Navigation
} from "/build/_shared/chunk-FCHU25Q4.js";
import {
  Link,
  Outlet,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-K7RDRCKN.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:/Users/sdosch/src/remix/blog/app/routes/admin.tsx?browser
init_react();

// app/routes/admin.tsx
init_react();
function Admin() {
  const posts = useLoaderData();
  const navigate = useNavigate();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Navigation, null), /* @__PURE__ */ React.createElement("div", {
    className: "m-10"
  }, /* @__PURE__ */ React.createElement("h1", null, "Admin"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-4"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "pr-10"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "pl-0 mb-5"
  }, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug,
    className: "pl-0 flex gap-5 justify-between"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/admin/${post.slug}/edit`
  }, post.title), /* @__PURE__ */ React.createElement(Link, {
    to: `/admin/${post.slug}/delete`
  }, "Delete")))), /* @__PURE__ */ React.createElement("button", {
    onClick: () => navigate("/admin/new"),
    className: "text-white bg-green-600"
  }, "Create Post")), /* @__PURE__ */ React.createElement("main", {
    className: "col-span-3 pl-10 border-l-4"
  }, /* @__PURE__ */ React.createElement(Outlet, null)))));
}
export {
  Admin as default
};
//# sourceMappingURL=/build/routes/admin-IR4U7GDI.js.map
