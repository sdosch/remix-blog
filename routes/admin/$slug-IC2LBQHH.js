import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-454AS57Y.js";

// browser-route-module:/Users/sdosch/src/remix/blog/app/routes/admin/$slug.tsx?browser
init_react();

// app/routes/admin/$slug.tsx
init_react();
function PostSlug() {
  const post = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: post.html }
  });
}
export {
  PostSlug as default
};
//# sourceMappingURL=/build/routes/admin/$slug-IC2LBQHH.js.map
