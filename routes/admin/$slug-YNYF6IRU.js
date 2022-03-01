import {
  Form,
  React,
  __toESM,
  init_react,
  require_react,
  useActionData,
  useLoaderData,
  useTransition
} from "/build/_shared/chunk-454AS57Y.js";

// browser-route-module:/Users/sdosch/src/remix/blog/app/routes/admin/$slug.tsx?browser
init_react();

// app/routes/admin/$slug.tsx
init_react();
var import_react = __toESM(require_react());
function EditSlug() {
  const errors = useActionData();
  const transition = useTransition();
  const [post, setPost] = (0, import_react.useState)(useLoaderData());
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Post Title: ", (errors == null ? void 0 : errors.title) ? /* @__PURE__ */ React.createElement("em", null, "Title is required") : null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title"
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Post Slug: ", (errors == null ? void 0 : errors.slug) ? /* @__PURE__ */ React.createElement("em", null, "Slug is required") : null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "slug"
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "markdown"
  }, "Markdownd:"), (errors == null ? void 0 : errors.markdown) ? /* @__PURE__ */ React.createElement("em", null, "Markdown is required") : null, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("textarea", {
    id: "markdown",
    rows: 20,
    name: "markdown",
    value: post.body
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, transition.submission ? "Creating..." : "Create Post")));
}
export {
  EditSlug as default
};
//# sourceMappingURL=/build/routes/admin/$slug-YNYF6IRU.js.map
