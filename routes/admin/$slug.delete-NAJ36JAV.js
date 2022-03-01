import {
  Form,
  React,
  init_react,
  useLoaderData,
  useTransition
} from "/build/_shared/chunk-7PAAWXUG.js";

// browser-route-module:/Users/sdosch/src/remix/blog/app/routes/admin/$slug.delete.tsx?browser
init_react();

// app/routes/admin/$slug.delete.tsx
init_react();
function DeletePost() {
  const transition = useTransition();
  const loaderData = useLoaderData();
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("p", null, "Delete ", loaderData.slug, "?"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "slug",
    value: loaderData.slug
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, transition.submission ? "Deleting..." : "Delete")));
}
export {
  DeletePost as default
};
//# sourceMappingURL=/build/routes/admin/$slug.delete-NAJ36JAV.js.map
