"use strict";function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function _arrayWithHoles(a){if(Array.isArray(a))return a}function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}var _ref=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)o(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(p(a.children[h]=u(a.children[h]),c,d));return a.node=f},q=function(a){return null==a?null:a.key},r=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=u(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,s=e.props,t=d.children,v=e.children,w=0,x=0,y=t.length-1,z=v.length-1;for(var A in g=g||"svg"===e.name,j(n,s))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==s[A]&&o(c,A,n[A],s[A],f,g);for(;x<=z&&w<=y&&null!=(l=q(t[w]))&&l===q(v[x]);)r(c,t[w].node,t[w],v[x]=u(v[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=q(t[y]))&&l===q(v[z]);)r(c,t[y].node,t[y],v[z]=u(v[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(v[x]=u(v[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=q(k=t[w]),m=q(v[x]=u(v[x],k)),C[l]||null!=m&&m===q(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(r(c,k&&k.node,k,v[x],f,g),x++),w++):(l===m?(r(c,k.node,k,v[x],f,g),C[m]=!0,w++):null==(h=B[m])?r(c,k&&k.node,null,v[x],f,g):(r(c,c.insertBefore(h.node,k&&k.node),h,v[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==q(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},s=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},t=function(a){return"object"===_typeof(a)?a:w(a)},u=function(b,c){return b.type===a?((!c||c.type!==a||s(c.lazy,b.lazy))&&((c=t(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},v=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},w=function(a,e){return v(a,c,d,e,void 0,b)},x=function(a){return a.nodeType===b?w(a.nodeValue,a):v(a.nodeName.toLowerCase(),c,e.call(a.childNodes,x),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(t(d));return b=b||c,"function"==typeof a?a(b,g):v(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&x(e),i=a.subscriptions,j=[],l=function(a){o(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),o)),d&&!c&&g(p,c=!0)),b},o=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?o(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?o(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](o,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=r(e.parentNode,e,h,h=t(d(b)),l)};o(a.init)}}}(),h=_ref.h,app=_ref.app,C=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===_typeof(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return h(a,{},b);return h(a,b,d)}},a=C("a"),button=C("button"),circle=C("circle"),div=C("div"),em=C("em"),footer=C("footer"),g=C("g"),h1=C("h1"),h2=C("h2"),h3=C("h3"),h4=C("h4"),h5=C("h5"),img=C("img"),input=C("input"),label=C("label"),li=C("li"),link=C("link"),main=C("main"),meta=C("meta"),nav=C("nav"),p=C("p"),path=C("path"),script=C("script"),span=C("span"),strong=C("strong"),svg=C("svg"),table=C("table"),tbody=C("tbody"),td=C("td"),th=C("th"),thead=C("thead"),title=C("title"),tr=C("tr"),ul=C("ul"),view=C("view"),initialState={dealwithit:!1,description:["Not a Conference."," Not a Conjob."," 3-6. April 2020, Vienna"],footer:{one:{menu:[{text:"privacy notice",to:"https://noncon.org/privacy/"},{text:"code of conduct",to:"https://www.parallele.at/code-of-conduct/"}],title:"NonCon"},three:{menu:[{text:"parallele.at",to:"https://parallele.at"},{text:"bwb.is",to:"https://bwb.is"},{text:"riat.at",to:"https://riat.at"}],title:"Network"},two:{menu:[{text:"keybase",to:"https://keybase.io/noncon"},{text:"github",to:"https://github.com/nonconorg"},{text:"telegram",to:"https://t.me/joinchat/E9fhuBVwENCRcC3-df9wxA"},{text:"twitter",to:"https://twitter.com/ParallelePolis"}],title:"Social"}},gdpr:{allowed:[],show:!1},hero:{},menu:[],pageClass:{},pages:{"/404/":{title:"404 - not found"}},root:"/",theme:"dark",title:"NonCon 2020",url:"/"},helpers={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},BlogMonth=function(a){var b,c=a.blog,d=a.link,e=a.month,f=a.url,g=a.year,h=Object.entries(c[g][e]),i=[e];return d?b="".concat(d).concat(e,"/"):i.push(" - ",g),[h3(b?Link({to:b},i):i),h.map(function(c){var d=_slicedToArray(c,2),e=d[0],f=d[1];return f.map(function(c){return BlogTeaser(_objectSpread({},a,{},c.state,{name:c.name,link:b,day:e}))})})]},BlogTeaser=function(a){return div([h4([a.day,"-",a.month,"-",a.year," - ",Link({to:a.name},a.title)]),p(a.description)])},BlogYear=function(a){var b,c=a.link,d=a.year,e=a.blog,f=a.url;return c?b="".concat(c).concat(d,"/"):f.endsWith("".concat(d,"/"))&&(b=f),div([h2(c?Link({to:b},d):d),Object.entries(e[d]).map(function(c){var d=_slicedToArray(c,2),e=d[0],f=d[1];return BlogMonth(_objectSpread({},a,{month:e,days:f,link:b}))})])},Footer=function(a){var b=a.footer,c=b.one,d=b.two,e=b.three;return footer({class:"Footer"},[div({class:"Container"},[div({class:"Menus"},[c&&div({class:"Child Info"},[c.title&&h2(c.title),c.before&&c.before.map(function(b){return p(b)}),c.menu&&ul([c.menu.map(function(a){return li(Link(a))})]),c.after&&c.after.map(function(b){return p(b)})]),d&&div({class:"Child"},[d.title&&h2(d.title),d.before&&d.before.map(function(b){return p(b)}),d.menu&&ul([d.menu.map(function(a){return li(Link(a))})]),d.after&&d.after.map(function(b){return p(b)})]),e&&div({class:"Child"},[e.title&&h2(e.title),e.before&&e.before.map(function(b){return p(b)}),e.menu&&ul([e.menu.map(function(a){return li(Link(a))})]),e.after&&e.after.map(function(b){return p(b)})])]),div({class:"Credits"},[p("created by the parallele polis dao"),p(["made with a few bits of ",Link({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])])])},Gdpr=function(a){var b=a.gdpr,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,h=c.title,i=void 0===h?"Privacy Information":h,j=c.content,k=void 0===j?"This app neither saves, collects, nor shares any data about you.":j,l=c.noDataText,m=void 0===l?"Awesome.":l,n=c.allowTitle,o=void 0===n?"Allow:":n,q=c.allowAllText,r=void 0===q?"All":q,s=c.allowText,t=void 0===s?"Selected":s,u=c.denyText,v=void 0===u?"None":u;if(!f)return div({class:"Gdpr"},svg({class:"ShowHide",onclick:[actions.gdpr.show,{show:!0}],viewBox:"0 0 512 512"},[g([path({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),circle({cx:"192",cy:"128",r:"32"}),circle({cx:"128",cy:"256",r:"32"}),circle({cx:"288",cy:"384",r:"32"}),circle({cx:"272",cy:"272",r:"16"}),circle({cx:"400",cy:"336",r:"16"}),circle({cx:"176",cy:"368",r:"16"})])]));var w=!!e.length;return div({class:"Gdpr"},[div({class:"Container"},[i&&h3(i),k&&p(k),w&&[ul(e.map(function(a){var b=a.name,d=a.title,e=a.content,f=a.allowed;return li({class:"Cookie"},[input({type:"checkbox",title:"allow ".concat(b," data"),id:b,checked:c.allowed.includes(b),onchange:[actions.gdpr.toggleAllow,{name:b}]}),(d||e)&&label({for:b},[d&&h4(d),e&&p(e)])])}))],w?[h5(o),input({class:"allow all",onclick:actions.gdpr.allow,type:"button",value:r}),input({class:"allow",onclick:actions.gdpr.close,type:"button",value:t}),input({class:"allow none",onclick:actions.gdpr.deny,type:"button",value:v})]:input({onclick:actions.gdpr.close,value:m,type:"button"})])])},Header=function(){return[]},HeroImage=function(){return Link({class:"HeroImage",to:"/"},Img({height:300,src:"/img/noncon2020-banner.jpg"}))},Img=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),img(a)},LightSwitch=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return button({class:"LightSwitch",onclick:actions.changeTheme},svg({viewBox:"0 0 352 460"},[path({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),path({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),path({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})]))},Link=function(b){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],d=b.to,e=b.action,f=void 0===e?actions.go:e,g=_objectWithoutProperties(b,["to","action"]),h=g.href,i=g.text,j=g.nofollow,k=g.noreferrer,l=_objectWithoutProperties(g,["href","text","nofollow","noreferrer"]);d=d||h||"",l.href=d;var m="/"===d[0]||"#"===d[0];return m?l.onclick=[f,lib.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),a(l,[i,c])},List=function(a){return ul({class:"List"},a.map(function(a){return[li(Link({to:a.to},[Img({src:a.img,height:"90"}),a.title]))]}))},MenuItem=function(a){var b=a.text,c=a.items,d=void 0===c?[]:c,e=a.url,f=a.root,g=a.parentTo,h=void 0===g?void 0:g,j=a.collapse,k=_objectWithoutProperties(a,["text","items","url","root","parentTo","collapse"]),l={class:{}},i=k.to;f&&i.startsWith("/")&&(i=i.substr(1));var m=k.to[0];h&&("-"===m||"#"===m)&&(i=h+i);var n=i.startsWith(f);f&&("/"===m||"-"===m||"#"===m)&&!n&&(i=f+i),k.to=i.replace(/\/\//g,"/"),k.to===e&&(l["class"].active=!0);var o=[],p=e.startsWith(k.to)||!j;return p&&d.length&&(o=ul(d.map(function(a){return MenuItem(_objectSpread({parentTo:k.to,url:e,root:f,collapse:j},a))}))),li(l,[k.to?MenuLink(k,b):span(k,b),o])},MenuLink=function(a,b){return Link(a,b)},Page=function(a){var b=a.page,c=a.state;b=b?b(c):"404 - Page not found.";var d={id:"Magic",class:c.pageClass};return main(d,div({class:{Wrapper:!0}},Route({state:c,page:b})))},Route=function(a){var b=a.page,c=a.state;return[Header(c),div({class:"Page",id:"page"},b),Footer(c)]},lib={db:function(){return{set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=lib.db.init(),g=lib.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d))):void(f[d]=g,a(c,{key:d,value:e}))},get:function get(a,b){var c=b.action,d=b.key,e=lib.db.init(),f=void 0;return d&&e[d]&&(f=lib.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},del:function del(a,b){var c=b.action,d=b.key,e=lib.db.init();d&&e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}}}}(),json:function(){var a=function(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}},b=a(JSON.parse),c=a(JSON.stringify);return{parse:b,stringify:c}}(),preventDefault:function(){return function preventDefault(a){return a.preventDefault(),a}}()},actions={changeTheme:function changeTheme(a){return _objectSpread({},a,{pageClass:_objectSpread({},a.pageClass,{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},dealwithit:{toggle:function toggle(a){return _objectSpread({},a,{dealwithit:!a.dealwithit})}},gdpr:{allow:function allow(a){return[_objectSpread({},a,{gdpr:_objectSpread({},a.gdpr,{allowed:a.cookies.map(function(a){return a.name}),show:!1})}),[lib.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:[actions.gdpr.show,{show:!1}]}]]},close:function close(a){return[_objectSpread({},a,{gdpr:_objectSpread({},a.gdpr,{show:!1})}),[lib.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:[actions.gdpr.show,{show:!1}]}]]},deny:function deny(a){return[_objectSpread({},a,{gdpr:_objectSpread({},a.gdpr,{allowed:[]})}),[lib.db.set,{key:"magic-gdpr",value:{allowed:[],show:!1},action:[actions.gdpr.show,{show:!1}]}]]},show:function(a,b){var c=b.show,d=b.allowed,e=void 0===d?a.gdpr.allowed:d;return b.value&&(c=b.value.show,b.value.allowed&&(e=b.value.allowed)),"boolean"==typeof c?_objectSpread({},a,{gdpr:_objectSpread({},a.gdpr,{show:c,allowed:e})}):a},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,f=e.allowed.includes(d);return f?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),_objectSpread({},a,{gdpr:e})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=_slicedToArray(d,2),f=e[0],g=e[1],h=void 0===g?"":g;if(f===a.url&&h===a.hash)return a;var i=window,j=i.scrollY,k=a.titles[f];if(k&&(document.title=a.title=k),f===a.url)window.location.hash=h;else if(!h){var l=document.getElementsByTagName("html"),m=_slicedToArray(l,1),n=m[0],o=n.style.scrollBehavior;n.style.scrollBehavior="auto",window.scrollTo({top:0,behavior:"smooth"}),n.style.scrollBehavior=o}return window.history.pushState({url:f,hash:h,scrollY:j},a.title,c),_objectSpread({},a,{url:f,hash:h,prev:a.url})},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;e=e.substring(1);var f=0;return b.state&&(d=b.state.url,e=b.state.hash,f=b.state.scrollY||0),e?window.location.hash=e:window.scroll({top:f,behavior:"smooth"}),_objectSpread({},a,{url:d,hash:e})}},pages={"/":function _(a){return[p(HeroImage(a)),div([h1({id:"noncon2020-sponsor-deck"},"NONCON2020 Sponsor Deck"),p(["All prices quoted are payable in Cryptocurrency of your choice,\nand will not include VAT, as we are a registered non-profit."]),p("Which means your support is potentially tax-deductible, based on your jurisdiction. Yay!"),h3({id:"some-numbers"},"Some numbers:"),p("(as of 27.02.20)"),p("current applications to attend: 60"),p("current number of confirmed speakers: 18"),p("sponsor applications: 10"),p("community partners: 17"),p("media partners: 1"),p("Extrapolated expected attendance: 300")]),div({class:"SponsorTier"},[h2({id:"tier-presented-by"},"Tier \"Presented by\""),h3({id:"one-slot--20020-euros"},"(One Slot @ 20,020 Euros)"),p(["We don't need this \"Ultra Tier\" amount to produce the event,\nthe sponsor tiers below will cover that."]),p("This is about Prestige, Honor, and Recognition."),p(["The Institution, Foundation, Product (or Whale) that sponsor this slot\ndoes so because they recognize the skillset, values,\nand goals of the Parallele Polis Team,\nand want to support their efforts for the rest of the 2020 calendar year.\nWe won't accept this contribution from just ANYONE though. We'll have to respect you too."]),p(["There is no booth, workshop, or other services offered for this slot\nbeyond visual branding in meatspace and cyber-cyberspace.\nThe only Perk is that we will carry the commitment over to\nthe main Parallele Polis website,\nand all venues we work and produce events in this year."]),p(["It's essentially a Grant,\nwith no strings attached because you trust us to use the donation wisely,\nin part to compensate our volunteers during the event,\nand to give the speakers a token amount to cover their costs."])]),div({class:"SponsorTier"},[h2({id:"tier-corona-disruption-response"},"Tier Corona Disruption Response"),h3({id:"one-slot-12020-euro"},"(One Slot, 12,020 Euro)"),h4({id:"sole-branding-of-virtual-conference-room"},"Sole branding of virtual conference room"),p(["We will provide livestreams from all event rooms to our virtual conference space,\n",Link({to:"https://interspace.noncon.org"},"interspace.noncon.org"),"\nwhere users can log in via video / audio and talk /chat with each other\nwhile watching the livestream, with seperate audio controls for each user."]),p(strong("interspace.noncon.org \"presented by XX\" with logo")),p(strong("Sole Logo placement on Mask schwag together w/ NONCON Logo")),p(strong("4 (Four) staff passes incl. Off-location Sponsors Dinner (Sunday)")),p(strong("4 (Ten) guest passes")),p("Pre-event blog post & post-event communication."),p("Logo on all digital & swag promo material."),p("Logo on event roll-ups and posters"),p("Social media publishing during event"),p("copyright-free professional photos of your event presence")]),div({class:"SponsorTier"},[h2({id:"tier-one"},"Tier One"),h3({id:"three-slots--10020-euro--slot"},"(Three Slots @ 10,020 Euro / slot)"),p(strong("15 mins to explain your tech at the Opening Ceremony (Friday)")),p(strong("One four hour workshop slot")),p([strong(["(ability to add additional 5,050 Euro hack bounty for your tech,\npayable directly to winner, announced at Monday Closing Ceremony)"])]),p("**Large table & space in RECEPTION area (max 3m x 2m) for ALL FOUR DAYS of the event, furniture provided by NONCON2020')),"),p("**Logo on all Speaker / Talk announcement slides')),"),p("**Logo on Livestream Window for the whole event')),"),p("**6 (Six) staff passes including Off-location Sponsors Dinner (Sunday)')),"),p([strong(["6 (Six) pieces limited edition Parallele Polis insider brag schwag w/ NFT provenance Token')),\n*",em(["4 (Four) passes for Fiaker Horse Carriage Tour of Vienna's Historical 1st District (Monday)\")),\n*"]),"10 (Ten) guest passes"])," freely distributable before or during event,\nalso valid for PARTY on Saturday night"]),p([strong("Customizable experience - what's your idea?"),strong("Large Logo")," on all digital & swag promo material."]),p("Logo on event roll-ups and posters."),p("Social media publishing during event."),p("copyright-free professional photos of your event presence.")]),div({class:"SponsorTier"},[h2({id:"tier-two"},"Tier Two"),h3({id:"five-slots--5020-euro--slot"},"(Five Slots @ 5,020 Euro / slot)"),p([strong(["(add additional 2,020 Euro hack bounty for your tech,\npayable directly to winner, announced on Monday)"])]),p(strong("Table & space in CONFERENCE area (max 2m x 2m) furniture provided by NONCON2020")),p(strong("One hour workshop slot")),p(strong("4 (Four) staff passes incl. Off-location Sponsors Dinner (Sunday)")),p(strong("4 (Four) dev / guest passes")),p("Pre-event blog post & post-event communication."),p("Logo on all digital & swag promo material."),p("Logo on event roll-ups and posters"),p("Social media publishing during event\ncopyright-free professional photos of your event presence")]),div({class:"SponsorTier"},[h2({id:"tier-three"},"Tier Three"),h3({id:"ten-slots--1020-euro--slot"},"(Ten Slots @ 1,020 Euro / slot)"),p(strong("2 (Two) sponsors passes including Off location Sponsors Dinner (Sunday)")),p(strong("2 (Two) passes for Fiaker Horse Carriage Tour of Vienna's Historical 1st District (Monday)")),p(strong("10 (Ten) guest passes")),p("Pre-event blog post & post-event communication."),p("Logo on all digital & swag promo material."),p("Logo on event roll-ups and posters"),p("copyright-free professional photos of your event presence"),p("Social media publishing during event.")]),div([h3({id:"approved-speakers-list"},"Approved speakers list:"),p("(as of 27.02.20)"),table([thead([tr([th("Name"),th("Title")])]),tbody([tr([td("Artem Vorotnikov"),td("OpenEthereum onboarding and development")]),tr([td("Anja Blaj"),td("Legal challenges and dimensions for virtual conducts")]),tr([td("Stefan Starflinger"),td("Deep dive into the ETH 2.0 Beacon Chain explorer")]),tr([td("Jacob Czepluch"),td("Layer 2 scalability and payment channels")]),tr([td("Maria Magenes"),td("DeFi and the role of Maker")]),tr([td("Stina Gustafsson"),td("Blockchain and art")]),tr([td("Alessandromlt"),td("DFO: The Next wave of Dapps without founders")]),tr([td("Matilde Park"),td("Interfaces for sovereign & p2p communities stacks")]),tr([td("John Adler"),td("Fuel: Scaling Ethereum with Optimistic Rollups")]),tr([td("Edgar Kamitov"),td("Multi-Party Computation in cryptowallets")]),tr([td("Thomas Zeinzinger"),td("Minerva - Digital Wallet Multiverse")]),tr([td("johba"),td("layer-2, rollups, plasma, onboarding-ux")]),tr([td("Afri Schoeden"),td("G\xF6rli TBD")]),tr([td("Griff Green"),td("Using Token Engineering to align incentives around non-profit causes")]),tr([td("Carol-Ann"),td("Substrate: The Blockchain Framework")]),tr([td("TBD"),td("Aeternity's Sophia smart contract language")]),tr([td(),td()])])]),div([h3({id:"links"},"Links"),p(Link({to:"https://www.parallele.at/not-a-conference-not-a-conjob/"},"Event Announcement Blogpost")),p(Link({to:"https://noncon.org"},"NONCON2020 website")),p(Link({to:"https://interspace.noncon.org"},"Virtual noncon website")),p(Link({to:"https://the-commons-stack.typeform.com/to/SemYgK"},"Speaker / Sponsor Signup Form")),p(Link({to:"https://etherscan.io/enslookup?q=noncon.eth"},"Our wallet address")),p(["contact: ",Link({to:"mailto:info@parallele.at"},"info@parallele.at")]),p(["Event produced by ",Link({to:"https://parallele.at"},"Parallele Polis")," and ",Link({to:"https://riat.at"},"riat.at")])])])]},"/404/":function _(a){return[p(HeroImage(a)),div([h1({id:"404---not-found"},"404 - not found"),p("unfortunately, there is nothing here but nothingness."),p([Link({to:"/"},"click here")," to get back to safety."])])]}};app({init:[_objectSpread({},initialState,{url:window.location.pathname,hash:window.location.hash.substr(1)}),[[lib.db.get,{key:"magic-gdpr",action:actions.gdpr.show}]]],subscriptions:function subscriptions(){return[[helpers.listenPopState,actions.pop]]},view:function(a){var b=pages[a.url]?a.url:"/404/",c=pages[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),a.titles={"/404/":"404 - not found"},Page({page:c,state:a},[LightSwitch(a),Gdpr(a)])},node:document.getElementById("Magic")});