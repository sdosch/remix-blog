import {
  Form,
  React,
  init_react,
  useActionData,
  useTransition
} from "/build/_shared/chunk-XAMK7OVK.js";

// browser-route-module:/Users/sdosch/src/remix/blog/app/routes/admin/$slug.edit.tsx?browser
init_react();

// app/routes/admin/$slug.edit.tsx
init_react();
function NewPost() {
  const errors = useActionData();
  const transition = useTransition();
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
  }, "Markdown:"), (errors == null ? void 0 : errors.markdown) ? /* @__PURE__ */ React.createElement("em", null, "Markdown is required") : null, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("textarea", {
    id: "markdown",
    rows: 20,
    name: "markdown"
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, transition.submission ? "Creating..." : "Create Post")));
}
export {
  NewPost as default
};
//# sourceMappingURL=/build/routes/admin/$slug.edit-HWDYCV7C.js.map
