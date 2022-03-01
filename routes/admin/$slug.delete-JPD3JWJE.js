import {
  Form,
  React,
  __toESM,
  init_react,
  require_react,
  useActionData,
  useLoaderData,
  useTransition
} from "/build/_shared/chunk-3RHGKTM7.js";

// browser-route-module:/Users/sdosch/src/remix/blog/app/routes/admin/$slug.delete.tsx?browser
init_react();

// app/routes/admin/$slug.delete.tsx
init_react();
var import_react = __toESM(require_react());
function DeletePost() {
  const errors = useActionData();
  const transition = useTransition();
  const loaderData = useLoaderData();
  const [post, setPost] = (0, import_react.useState)(loaderData);
  (0, import_react.useEffect)(() => {
    setPost(loaderData);
  }, [transition]);
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, transition.submission ? "Deleting..." : "Delete Post")));
}
export {
  DeletePost as default
};
//# sourceMappingURL=/build/routes/admin/$slug.delete-JPD3JWJE.js.map
