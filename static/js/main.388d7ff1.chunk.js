(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),o=(a(9),a(1));a(10);var s=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),": ",e.alert.msg)};function i(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},e.aboutText))),l.a.createElement("div",{class:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{class:"form-check-input",type:"checkbox",onClick:e.togglemode,role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{class:"form-check-label",for:"flexSwitchCheckDefault"},"Enable Dark mode")))))}function m(e){var t=Object(n.useState)("Enter text here"),a=Object(o.a)(t,2),c=a[0],r=a[1];return l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",id:"TxtBox",style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"},value:c,onChange:function(e){console.log("On change"),r(e.target.value)},rows:"4"})),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){console.log("Button was clicked");var e=c.toUpperCase();r(e)}},"Convert to Uppercase"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){console.log("Button was clicked");var e=c.toLowerCase();r(e)}},"Convert to Lowercase"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){console.log("Button was clicked");var e=c.split(" "),t="";e.forEach(function(e){t+=e.charAt(0).toUpperCase()+e.slice(1)+" "}),r(t)}},"Convert to Capital"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){console.log("Text is copied");var e=document.getElementById("TxtBox");e.select(),navigator.clipboard.writeText(e.value)}},"Copy Text"),l.a.createElement("div",{className:"container my-3 ",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("h2",null,"Your text changes"),l.a.createElement("p",null,c.split(" ").length,"  word and ",c.length,"characters"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,c)))}i.defaultProps={title:"Set title here",aboutText:"About"};var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),u=Object(o.a)(r,2),d=u[0],b=u[1],g=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{title:"TextUtils",mode:a,togglemode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="#042743",document.title="Textutils- Dark mode ",g("Dark mode activated","success")):(c("light"),document.body.style.backgroundColor="white",document.title="Textutils- Home ",g("Dark mode is deactivated","success"))}}),l.a.createElement(s,{alert:d}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(m,{showAlert:g,heading:"Enter the text to analyze below",mode:a})))},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),c(e),r(e)})};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null)),document.getElementById("root")),d()}],[[4,1,2]]]);
//# sourceMappingURL=main.388d7ff1.chunk.js.map