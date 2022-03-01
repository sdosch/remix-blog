import {
  Link,
  Outlet
} from "/build/_shared/chunk-WAI5AELG.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:/Users/sdosch/src/remix/blog/app/routes/nav.tsx?browser
init_react();

// app/routes/nav.tsx
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/posts"
  }, "Posts")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/admin"
  }, "Admin"))), /* @__PURE__ */ React.createElement(Outlet, null));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/nav-4OTIH52F.js.map
