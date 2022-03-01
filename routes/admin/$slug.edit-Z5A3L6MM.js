import {
  Form,
  useActionData,
  useLoaderData,
  useTransition
} from "/build/_shared/chunk-Q6TFRAWE.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:/Users/sdosch/src/remix/blog/app/routes/admin/$slug.edit.tsx?browser
init_react();

// app/routes/admin/$slug.edit.tsx
init_react();
var import_react = __toESM(require_react());
function EditPost() {
  const errors = useActionData();
  const transition = useTransition();
  const loaderData = useLoaderData();
  const [post, setPost] = (0, import_react.useState)(loaderData);
  (0, import_react.useEffect)(() => {
    setPost(loaderData);
  }, [transition]);
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Post Title: ", (errors == null ? void 0 : errors.title) ? /* @__PURE__ */ React.createElement("em", null, "Title is required") : null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    value: post.title,
    onChange: (e) => setPost({ ...post, title: e.currentTarget.value })
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Post Slug: ", (errors == null ? void 0 : errors.slug) ? /* @__PURE__ */ React.createElement("em", null, "Slug is required") : null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "slug",
    value: post.slug,
    onChange: (e) => setPost({ ...post, slug: e.currentTarget.value })
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "markdown"
  }, "Markdown:"), (errors == null ? void 0 : errors.markdown) ? /* @__PURE__ */ React.createElement("em", null, "Markdown is required") : null, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("textarea", {
    id: "markdown",
    rows: 10,
    name: "markdown",
    value: post.markdown,
    onChange: (e) => setPost({ ...post, markdown: e.currentTarget.value })
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, transition.submission ? "Saving..." : "Save Post")));
}
export {
  EditPost as default
};
//# sourceMappingURL=/build/routes/admin/$slug.edit-Z5A3L6MM.js.map
