import{g as u,h as m,i as d,j as p}from"/build/_shared/chunk-5NKBV7YK.js";import{c as w,e as f,f as t,g as n}from"/build/_shared/chunk-TOAMQMCD.js";n();n();var r=w(f());function g(){let e=d(),l=p(),s=m(),[o,i]=(0,r.useState)(s);return(0,r.useEffect)(()=>{i(s)},[l]),t.createElement(u,{method:"post"},t.createElement("p",null,t.createElement("label",null,"Post Title: ",(e==null?void 0:e.title)?t.createElement("em",null,"Title is required"):null,t.createElement("input",{type:"text",name:"title",value:o.title,onChange:a=>i({...o,title:a.currentTarget.value})}))),t.createElement("p",null,t.createElement("label",null,"Post Slug: ",(e==null?void 0:e.slug)?t.createElement("em",null,"Slug is required"):null,t.createElement("input",{type:"text",name:"slug",value:o.slug,disabled:!0}))),t.createElement("p",null,t.createElement("label",{htmlFor:"markdown"},"Markdown:"),(e==null?void 0:e.markdown)?t.createElement("em",null,"Markdown is required"):null,t.createElement("br",null),t.createElement("textarea",{id:"markdown",rows:10,name:"markdown",value:o.markdown,onChange:a=>i({...o,markdown:a.currentTarget.value})})),t.createElement("p",null,t.createElement("button",{type:"submit",className:"text-white bg-green-600"},l.submission?"Saving...":"Save")))}export{g as default};