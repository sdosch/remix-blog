import {
  Form,
  useLoaderData,
  useTransition
} from "/build/_shared/chunk-K7RDRCKN.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:/Users/sdosch/src/remix/blog/app/routes/admin/$slug.delete.tsx?browser
init_react();

// app/routes/admin/$slug.delete.tsx
init_react();
function DeletePost() {
  const transition = useTransition();
  const loaderData = useLoaderData();
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("h2", null, "Delete ", loaderData.slug, "?"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "slug",
    value: loaderData.slug
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "bg-red-600 text-white"
  }, transition.submission ? "Deleting..." : "Delete")));
}
export {
  DeletePost as default
};
//# sourceMappingURL=/build/routes/admin/$slug.delete-22NEQUZ7.js.map
