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
    rows: 20,
    name: "markdown",
    value: post.markdown,
    onChange: (e) => setPost({ ...post, markdown: e.currentTarget.value })
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    disabled: errors
  }, transition.submission ? "Editing..." : "Edit Post")));
}
export {
  EditSlug as default
};
//# sourceMappingURL=/build/routes/admin/$slug-GW2SUIFA.js.map
