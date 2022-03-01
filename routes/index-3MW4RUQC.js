import {
  Link,
  Outlet,
  React,
  init_react
} from "/build/_shared/chunk-7PAAWXUG.js";

// browser-route-module:/Users/sdosch/src/remix/blog/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement("nav", {
    className: "prose prose-slate prose-sm m-6"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/posts"
  }, "Posts")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/admin"
  }, "Admin"))), /* @__PURE__ */ React.createElement(Outlet, null));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-3MW4RUQC.js.map
