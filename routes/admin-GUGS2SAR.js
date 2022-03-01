import {
  Form,
  Link,
  Outlet,
  React,
  init_react,
  useActionData,
  useLoaderData,
  useTransition
} from "/build/_shared/chunk-A352R2CQ.js";

// browser-route-module:/Users/sdosch/src/remix/blog/app/routes/admin.tsx?browser
init_react();

// app/routes/admin.tsx
init_react();

// app/styles/admin.css
var admin_default = "/build/_assets/admin-MN44LWAP.css";

// app/routes/admin.tsx
var links = () => {
  return [{ rel: "stylesheet", href: admin_default }];
};
function Admin() {
  const posts = useLoaderData();
  const errors = useActionData();
  const transition = useTransition();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Admin"), /* @__PURE__ */ React.createElement("div", {
    className: "admin"
  }, /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, post.title, /* @__PURE__ */ React.createElement(Link, {
    to: `/admin/${post.slug}/edit`
  }, "edit"), /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    value: post.slug
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    id: post.slug,
    name: post.slug
  }, transition.submission ? "Deleting..." : "Delete Post")))))), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(Outlet, null))));
}
export {
  Admin as default,
  links
};
//# sourceMappingURL=/build/routes/admin-GUGS2SAR.js.map
