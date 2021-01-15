(this["webpackJsonpreact-onedrive-picker"]=this["webpackJsonpreact-onedrive-picker"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(1),o=n.n(c),r=n(3),s=n.n(r),a=(n(9),n.p+"static/media/sample.6c6b8c34.svg"),l=function(e){var t=e.clientID,n=e.onSuccess,o=e.onCancel,r=e.onError,s=e.action,a=e.multiSelect,l=e.children;return c.useEffect((function(){var e=!0;return e&&function(e){var t=document.createElement("script");t.src=e,t.async=!0,document.body.appendChild(t)}("https://js.live.net/v7.2/OneDrive.js"),function(){e=!1,function(e){for(var t=document.getElementsByTagName("script"),n=t.length;n>=0;n--){var i,c;t[n]&&null!==t[n].getAttribute("src")&&-1!==(null===(i=t[n].getAttribute("src"))||void 0===i?void 0:i.indexOf("".concat(e)))&&(null===(c=t[n].parentNode)||void 0===c||c.removeChild(t[n]))}}("https://js.live.net/v7.2/OneDrive.js")}}),[t]),Object(i.jsxs)("div",{onClick:function(e){e.preventDefault(),function(e,t,n,i){return new Promise((function(c,o){var r={clientId:e,action:i||"download",multiSelect:t,openInNewWindow:!0,advanced:n||{},success:function(e){c(e)},cancel:function(){c(null)},error:function(e){o(e)}};OneDrive.open(r)}))}(t,a,s).then((function(e){e?n(e):o&&o(null)})).catch((function(e){r&&r(e)}))},children:[l&&l,!l&&"Open With One Drive"]})};var d=function(){return Object(i.jsxs)("div",{id:"demo",children:[Object(i.jsx)("h1",{children:"React One drive picker"}),Object(i.jsx)("p",{children:"This component is using the iframe window to open the picker."}),Object(i.jsx)("h2",{children:"Motivation"}),Object(i.jsxs)("p",{children:["I have gone through the microsoft onedrive \xa0",Object(i.jsx)("a",{href:"https://docs.microsoft.com/en-us/onedrive/developer/controls/file-pickers/react/?view=odsp-graph-online",children:"documentation for react \xa0"}),"and I tried to folow what they have mention in documentation. Unfortunately I havnt get luck to setup react-application with FileBrowser as they mentioned. My intention is to access both sharepoint sites and personal onedrive using same file picker.I found one simple implementation"," ",Object(i.jsx)("a",{href:"https://www.meziantou.net/using-onedrive-file-picker-in-a-website.htm",children:"here"})," ","which seems pretty straight forward and enough for my usecase.",Object(i.jsx)("br",{}),"If you have any other bugs or suggestions please let us know."]}),Object(i.jsx)("h2",{children:"Implementation Strategy"}),Object(i.jsx)("p",{children:"Nothing special, just add simple wrapper and exposing the callbacks from the picker window."}),Object(i.jsx)("h2",{children:"Demo "}),Object(i.jsx)("p",{children:"the following is my demo implementation "}),Object(i.jsx)(l,{clientID:"c3e71009-3dd7-4fc8-9127-2de5ac14c89f",action:"share",multiSelect:!0,onSuccess:function(e){alert(JSON.stringify(e))},onCancel:function(e){alert(JSON.stringify(e))},children:Object(i.jsx)("button",{children:"Click Here"})}),Object(i.jsx)("img",{src:a,alt:"react-onedrive-implementation",width:"450"}),Object(i.jsxs)("footer",{children:["Made with ",Object(i.jsx)("span",{style:{color:"red"},children:"\u2764\ufe0f"})," by EzySign",Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{className:"fa fa-globe",style:{color:"#00b4ff"}}),"\xa0",Object(i.jsx)("a",{href:"http://ezysign.cc/#contact",children:"Web"})]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{className:"fab fa-github"}),"\xa0",Object(i.jsx)("a",{href:"http://github.com/winhtaikaung",children:"Github"})]})]})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,11)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),o(e),r(e)}))};s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root")),h()},9:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.02b4d1de.chunk.js.map