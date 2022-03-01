import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-454AS57Y.js";

// browser-route-module:/Users/sdosch/src/remix/blog/app/routes/admin/$slug.tsx?browser
init_react();

// app/routes/admin/$slug.tsx
init_react();
function EditSlug() {
  const post = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: post.html }
  });
}
export {
  EditSlug as default
};
//# sourceMappingURL=/build/routes/admin/$slug-QY7AU4AB.js.map
