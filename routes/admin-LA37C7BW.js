import {
  Link,
  Outlet,
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-3RHGKTM7.js";

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
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Admin"), /* @__PURE__ */ React.createElement("div", {
    className: "admin"
  }, /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug,
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/admin/${post.slug}/edit`
  }, post.title), /* @__PURE__ */ React.createElement(Link, {
    to: `/admin/${post.slug}/delete`
  }, "delete"))))), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(Outlet, null))));
}
export {
  Admin as default,
  links
};
//# sourceMappingURL=/build/routes/admin-LA37C7BW.js.map
