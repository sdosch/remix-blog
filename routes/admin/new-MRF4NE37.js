import {
  Form,
  React,
  init_react
} from "/build/_shared/chunk-2M2AUXMA.js";

// browser-route-module:/Users/sdosch/src/remix/blog/app/routes/admin/new.tsx?browser
init_react();

// app/routes/admin/new.tsx
init_react();
function NewPost() {
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Post Title: ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title"
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Post Slug: ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "slug"
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "markdown"
  }, "Markdown:"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("textarea", {
    id: "markdown",
    rows: 20,
    name: "markdown"
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Create Post")));
}
export {
  NewPost as default
};
//# sourceMappingURL=/build/routes/admin/new-MRF4NE37.js.map
