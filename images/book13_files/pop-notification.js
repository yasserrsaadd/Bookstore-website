!function(p,e,n,i,r,t,a){var l,s,c,o;p.LooxPop||((e=e||{}).pop||(e.pop={}),p.jade=function(){var l={};function s(t){return null!=t&&""!==t}function c(o){return(Array.isArray(o)?o.map(c):o&&"object"==typeof o?Object.keys(o).filter(function(t){return o[t]}):[o]).filter(s).join(" ")}l.merge=function t(o,i){if(1===arguments.length){for(var e=o[0],n=1;n<o.length;n++)e=t(e,o[n]);return e}var r,a=o.class,l=i.class;for(r in(a||l)&&(a=a||[],l=l||[],Array.isArray(a)||(a=[a]),Array.isArray(l)||(l=[l]),o.class=a.concat(l).filter(s)),i)"class"!=r&&(o[r]=i[r]);return o},l.joinClasses=c,l.cls=function(t,o){for(var i=[],e=0;e<t.length;e++)o&&o[e]?i.push(l.escape(c([t[e]]))):i.push(c(t[e]));var n=c(i);return n.length?' class="'+n+'"':""},l.style=function(o){return o&&"object"==typeof o?Object.keys(o).map(function(t){return t+":"+o[t]}).join(";"):o},l.attr=function(t,o,i,e){return"boolean"==typeof(o="style"===t?l.style(o):o)||null==o?o?" "+(e?t:t+'="'+t+'"'):"":0==t.indexOf("data")&&"string"!=typeof o?(-1!==JSON.stringify(o).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),o&&"function"==typeof o.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+t+"='"+JSON.stringify(o).replace(/'/g,"&apos;")+"'"):i?(o&&"function"==typeof o.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+t+'="'+l.escape(o)+'"'):(o&&"function"==typeof o.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+t+'="'+o+'"')},l.attrs=function(t,o){var i=[],e=Object.keys(t);if(e.length)for(var n=0;n<e.length;++n){var r=e[n],a=t[r];"class"==r?(a=c(a))&&i.push(" "+r+'="'+a+'"'):i.push(l.attr(r,a,!1,o))}return i.join("")};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},i=/[&<>"]/g;function e(t){return o[t]||t}return l.escape=function(t){var o=String(t).replace(i,e);return o===""+t?t:o},l.rethrow=function o(i,t,e,n){if(!(i instanceof Error))throw i;if(!(void 0===p&&t||n))throw i.message+=" on line "+e,i;try{n=n||require("fs").readFileSync(t,"utf8")}catch(t){o(i,null,e)}var r=n.split("\n"),a=Math.max(e-3,0),n=Math.min(r.length,e+3),n=r.slice(a,n).map(function(t,o){o=o+a+1;return(o==e?"  > ":"    ")+o+"| "+t}).join("\n");throw i.path=t,i.message=(t||"Jade")+":"+e+"\n"+n+"\n\n"+i.message,i},l.DebugItem=function(t,o){this.lineno=t,this.filename=o},l}(),l={set:function(t,o,i){t=t+"="+o+";path=/;";i&&((o=new Date).setTime(o.getTime()+864e5*i),t+="expires="+o.toGMTString()),document.cookie=t},get:function(t){t=document.cookie.match("(^|;) ?"+t+"=([^;]*)(;|$)");return t?t[2]:null},delete:function(t){setCookie(t,"",-1)}},s=t?console.log.bind(p.console):function(){},c=function(t){for(var o,i,e=t.length;0!==e;)i=Math.floor(Math.random()*e),o=t[--e],t[e]=t[i],t[i]=o;return t},o=null,(t=function(){var t=this;if(o)return o;o=t,s("Loox pop client settings",r),t.classes={main:"loox-pn",noBranding:"loox-pn--no-branding",shown:"loox-pn--shown",hidden:"loox-pn--hidden",close:"loox-pn-close",branding:"loox-pn-branding",rtl:"loox-rtl"},t.timings={start:5e3,waitBetween:5e3,display:5e3},r.initial_delay&&(t.timings.start=1e3*Math.max(1,parseInt(r.initial_delay))),r.between_delay&&(t.timings.waitBetween=1e3*Math.max(1,parseInt(r.between_delay))),r.display_time&&(t.timings.display=1e3*Math.max(1,parseInt(r.display_time))),e.pop_demo_overwrites&&(s("loox.pop_demo_overwrites",e.pop_demo_overwrites),t.timings={start:e.pop_demo_overwrites.start||t.timings.start,waitBetween:e.pop_demo_overwrites.waitBetween||t.timings.waitBetween,display:e.pop_demo_overwrites.display||t.timings.display},r.position=e.pop_demo_overwrites.position||null,r.noShuffle=e.pop_demo_overwrites.noShuffle||!1),s("Timings",t.timings),t.timer={id:null,started:null,remaining:null,callback:null},t.notificationVisible=!1,t.$body=document.querySelector("body"),t.minWidth=720,t.initLoop()}).prototype.initLoop=function(){var t,o,i,e=this;if(0==n.length||l.get("loox-pop-stopped")||e.hideOnScreenSize())return e.stopLoop();r.noShuffle||(t=[],o=n.filter(function(t){return Boolean(t.img)}),i=n.filter(function(t){return!1===Boolean(t.img)}),o&&o.length&&(t=c(o)),i&&i.length&&(t=t.concat(c(i))),n=t),s("We have "+n.length+" reviews to pop"),e.initNotificationElement(),e.appendStyles(),setTimeout(function(){e.$body.appendChild(e.$notification),e.handleNotitifications()},e.timings.start)},t.prototype.hideOnScreenSize=function(){return!!r.hide_on_mobile&&((p.innerWidth||document.documentElement.clientWidth||this.$body.clientWidth)<this.minWidth||void 0)},t.prototype.initNotificationElement=function(){var o=this;o.$notification=document.createElement("div"),o.$notification.classList.add(o.classes.main,o.classes.hidden),r.rtl&&o.$notification.classList.add(o.classes.rtl),r.noBranding&&o.$notification.classList.add(o.classes.noBranding),o.$notification.classList.add("loox-pn-"+(r.position||"bottom_left")),o.$notification.style.display="none",o.$notification.addEventListener("transitionend",function(){-1!=o.$notification.classList.value.indexOf(o.classes.hidden)&&(o.$notification.style.display="none")},!1);var i=null;o.$notification.addEventListener("mouseenter",function(t){if(this==t.currentTarget&&o.notificationVisible){if(s("Notification hovered"),!i)return o.timerPause();clearTimeout(i),i=null}},!1),o.$notification.addEventListener("mouseleave",function(t){this==t.currentTarget&&o.notificationVisible&&(s("Notification blured"),i=setTimeout(function(){i=null,o.timerResume()},500))},!1),o.$notification.addEventListener("click",function(t){t.stopPropagation(),t.preventDefault(),this==t.currentTarget&&o.notificationVisible&&(e.openQV?e.openQV(o.$review.getAttribute("data-post-id"),"loox-pop"):console.error("No loox.openQV function"),o.hide(),o.timerResume())},!1),o.initReviewElement(),o.initProductElement(),o.initCloserElement(),o.initBrandingElement()},t.prototype.initReviewElement=function(){this.$review=document.createElement("div")},t.prototype.initProductElement=function(){this.$product=document.createElement("div")},t.prototype.initCloserElement=function(){var o=this;o.$closer=document.createElement("a"),o.$closer.className=o.classes.close,o.$closer.href="#",o.$closer.addEventListener("click",function(t){t.stopPropagation(),t.preventDefault(),o.hideAndStop()},!1)},t.prototype.initBrandingElement=function(){var o=this;o.$looxBranding=document.createElement("a"),o.$looxBranding.className=o.classes.branding,o.$looxBranding.href="#",o.$looxBranding.addEventListener("click",function(t){t.stopPropagation(),t.preventDefault(),this==t.currentTarget&&o.notificationVisible&&p.open("https://loox.io/app/notification","_blank").focus()},!1)},t.prototype.appendStyles=function(){var t=document.querySelector("head");r.widget_font&&((o=document.createElement("link")).setAttribute("rel","stylesheet"),o.setAttribute("href",a+"/css?family="+r.widget_font),t.appendChild(o));var o=document.createElement("style");o.innerText=".loox-pn,.loox-pn *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:transparent;background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;display:inline;empty-cells:show;float:none;font:normal;font-family:inherit;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;quotes:'\\201C' '\\201D' '\\2018' '\\2019';right:auto;tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;width:auto;word-spacing:normal;z-index:auto}.loox-pn{display:block;position:fixed;z-index:9999;bottom:25px;left:10px;color:#333;transition:transform .6s cubic-bezier(.68,-.55,.265,1.55),opacity .6s;background:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,0.31),0 2px 4px 0 rgba(0,0,0,0.28);margin-bottom:15px;cursor:pointer}.loox-pn--hidden{transform:translateX(-100%);opacity:0}.loox-pn--shown{transform:translateX(0);opacity:1}.loox-pn--no-branding{margin-bottom:0}.loox-pn-bottom_left{right:auto;top:auto;bottom:25px;left:10px}.loox-pn-bottom_left.loox-pn--hidden{transform:translateX(-100%);opacity:0}.loox-pn-bottom_right{top:auto;bottom:25px;left:auto;right:10px}.loox-pn-bottom_right.loox-pn--hidden{transform:translateX(100%);opacity:0}.loox-pn-top_left{top:10px;bottom:auto;left:10px;right:auto}.loox-pn-top_left.loox-pn--hidden{transform:translateX(-100%);opacity:0}.loox-pn-top_right{top:10px;bottom:auto;left:auto;right:10px}.loox-pn-top_right.loox-pn--hidden{transform:translateX(100%);opacity:0}.loox-pn-review{display:block;max-width:120px;cursor:pointer;overflow:hidden;font-size:12px}.loox-pn-review *{cursor:pointer}.loox-pn-review__link{display:block;cursor:pointer}.loox-pn-review__image img{display:block;max-width:100%;height:auto;transition-duration:.25s;opacity:1}.loox-pn-review__body{display:block;padding:2.5px 8px 5px;text-decoration:none;color:#333}.loox-pn-review__nickname{display:block;padding:2.5px 0;line-height:1.4;font-weight:bold;font-size:12px;color:#4a4a4a}.loox-pn-review__stars{display:flex;padding:2.5px 0;line-height:12px}.loox-pn-review__star{display:block;margin-right:2px}.loox-pn-review__star:last-child{margin-right:0}.loox-pn-review__content{display:block;padding:2.5px 0;font-size:12px;color:#4a4a4a;line-height:1.4;font-style:italic}.loox-pn-review__content:before{content:'\"'}.loox-pn-review__content:after{content:'\"'}.loox-pn-product{display:flex;max-width:120px;overflow:hidden;font-size:12px;padding:8px;align-items:center;position:relative;box-sizing:border-box;cursor:pointer;border-top:1px solid #e7e7e7}.loox-pn-product *{cursor:pointer}.loox-pn-product__image-wrap{display:block;flex-grow:1;margin-right:8px;width:25px;max-width:25px;min-width:25px}.loox-pn-product__image{display:block;width:25px;height:25px;background-position:center;background-size:cover;background-repeat:no-repeat}.loox-pn-product__image{display:block;flex-grow:1;width:25px;min-height:25px;max-height:max-width}.loox-pn-product__image : $product-image-size,.loox-pn-product__image min-width: $product-image-size,.loox-pn-product__image background-position: center,.loox-pn-product__image background-size: cover,.loox-pn-product__image background-repeat: no-repeat,.loox-pn-product__image img{display:block;width:25px;height:auto}.loox-pn-product__title{font-size:10px;line-height:1.2;color:#4a4a4a}.loox-pn-product__hover{display:flex;position:absolute;top:0;bottom:0;left:0;right:0;background:#ccc;color:#000;font-size:10px;text-transform:uppercase;align-items:center;justify-content:center;opacity:0;transition:opacity .25s}.loox-pn-product:hover .loox-pn-product__hover,.loox-pn-product:focus .loox-pn-product__hover{opacity:1}.loox-pn-close{position:absolute;cursor:pointer;display:block;background:#fff;width:25px;line-height:25px;height:25px;border-radius:50%;box-shadow:0 0 5px -1px rgba(0,0,0,0.47);top:0;right:-35px;bottom:auto;left:auto}.loox-pn-close:empty{display:block}.loox-pn-close:before{display:block;content:\"\";position:absolute;top:50%;left:50%;margin-top:-5px;margin-left:-5px;width:10px;height:10px;background-image:url(\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTZweCIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiPgogIDxnPgogICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTI4Ljk0MSwzMS43ODZMMC42MTMsNjAuMTE0Yy0wLjc4NywwLjc4Ny0wLjc4NywyLjA2MiwwLDIuODQ5YzAuMzkzLDAuMzk0LDAuOTA5LDAuNTksMS40MjQsMC41OSAgIGMwLjUxNiwwLDEuMDMxLTAuMTk2LDEuNDI0LTAuNTlsMjguNTQxLTI4LjU0MWwyOC41NDEsMjguNTQxYzAuMzk0LDAuMzk0LDAuOTA5LDAuNTksMS40MjQsMC41OWMwLjUxNSwwLDEuMDMxLTAuMTk2LDEuNDI0LTAuNTkgICBjMC43ODctMC43ODcsMC43ODctMi4wNjIsMC0yLjg0OUwzNS4wNjQsMzEuNzg2TDYzLjQxLDMuNDM4YzAuNzg3LTAuNzg3LDAuNzg3LTIuMDYyLDAtMi44NDljLTAuNzg3LTAuNzg2LTIuMDYyLTAuNzg2LTIuODQ4LDAgICBMMzIuMDAzLDI5LjE1TDMuNDQxLDAuNTljLTAuNzg3LTAuNzg2LTIuMDYxLTAuNzg2LTIuODQ4LDBjLTAuNzg3LDAuNzg3LTAuNzg3LDIuMDYyLDAsMi44NDlMMjguOTQxLDMxLjc4NnoiLz4KICA8L2c+Cjwvc3ZnPgo=\");background-position:center;background-repeat:no-repeat;background-size:cover}.loox-pn-bottom_left .loox-pn-close,.loox-pn-top_left .loox-pn-close{top:0;right:-35px;bottom:auto;left:auto}.loox-pn-bottom_right .loox-pn-close,.loox-pn-top_right .loox-pn-close{top:0;left:-35px;bottom:auto;right:auto}.loox-pn-branding{cursor:pointer;display:block;width:26px;height:10px;background-image:url(\"data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3My43IDI4LjM1Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzE5MTkxOTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkFydGJvYXJkIDM8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTAsMjQuNTJWMy44OEgzLjM4VjIxLjQ3aDguMjNsMS41NiwzLjA1Wm01My4zNy0yLjc4YTEwLjg4LDEwLjg4LDAsMCwxLTE1LDAsOS40Miw5LjQyLDAsMCwxLTEuMTYtMS4zNWwtNi44Mi04LjU1LTIuNi0zdi4wNmwtLjEyLS4xM2E2Ljc5LDYuNzksMCwwLDAtNS4wOS0yLDYuNzksNi43OSwwLDAsMC01LjEsMiw3LjUyLDcuNTIsMCwwLDAtMiw1LjQyLDcuNTcsNy41NywwLDAsMCwyLDUuNDQsNi43Nyw2Ljc3LDAsMCwwLDUuMSwyLjA2YzUuNDQsMCw4LjItNS43Nyw4LjItNS43N2wyLjI1LDIuNjdzLTMuMjIsMy40Mi0zLDMuMjFhMTAuMzEsMTAuMzEsMCwwLDEtNy40NSwyLjk1LDEwLjM0LDEwLjM0LDAsMCwxLTcuNS0zLDEwLjEsMTAuMSwwLDAsMS0zLjA2LTcuNTdBMTAuMTQsMTAuMTQsMCwwLDEsMTUuMTEsNi42YTEwLjMzLDEwLjMzLDAsMCwxLDcuNS0zLDEwLjI2LDEwLjI2LDAsMCwxLDcuNDgsMywxMC42NCwxMC42NCwwLDAsMSwxLjI4LDEuNTJsOS40LDExLjU1YTcuMzEsNy4zMSwwLDAsMCw1LjEsMkE2LjgxLDYuODEsMCwwLDAsNTEsMTkuNjFhNy41Nyw3LjU3LDAsMCwwLDItNS40NCw3LjUyLDcuNTIsMCwwLDAtMi01LjQyLDYuNzksNi43OSwwLDAsMC01LjEtMiw2Ljc5LDYuNzksMCwwLDAtNS4wOSwybC0uMDUuMDZ2MGwtMywzLjY5LTItMi40OVMzNy44OCw3LjEsMzguMzksNi42YTEwLjMzLDEwLjMzLDAsMCwxLDcuNS0zQTEwLjMsMTAuMywwLDAsMSw1Ni40MiwxNC4xN2ExMC4xMywxMC4xMywwLDAsMS0zLjA1LDcuNTdabS0yMy4zMSwwLDAsMCwwLDBabTM3LjItNy41Niw2LjQxLDEwLjNoLTMuOEw2NS4yMSwxN2wtNC4zNyw3LjQ4SDU3bDYuNDItMTAuM0w1NywzLjg4aDMuOGw0LjY3LDcuNTJMNjkuOSwzLjg4aDMuOEw2Ny4yNiwxNC4yMloiLz48L3N2Zz4=\");background-position:center center;background-repeat:no-repeat;background-size:cover;margin:0 0 0 auto;position:absolute;bottom:-15px;right:0}@font-face{font-family:'LooxIcons';src:url(\"data:application/x-font-woff;base64,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\");font-weight:normal;font-style:normal}.loox-pn-icon{display:inline-block;font:normal normal normal 14px/1 LooxIcons !important;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.loox-pn-icon-star:after{content:'\\e800\\fe0e'}.loox-pn-icon-star-o:after{content:'\\e801\\fe0e'}.loox-pn-icon-star-half-o:after{content:'\\f123\\fe0e'}.loox-rtl.loox-pn{direction:rtl}.loox-rtl .loox-pn-product>.loox-pn-product__image-wrap{margin:0 0 0 8px}.loox-rtl .loox-pn-review__star{margin:0 0 0 2px}",r.styles&&(o.innerText+=r.styles),t.appendChild(o)},t.prototype.handleNotitifications=function(){var t=this;if(0==n.length)return t.stopLoop();t.$notification.append(t.$closer);var o=n.shift();t.$review.innerHTML=i.review({review:o,ratingIconsEnabled:!!p.loox_rating_icons_enabled}).trim(),t.$review.setAttribute("data-post-id",o._id),t.$notification.append(t.$review),!e.pop.hide_product&&o.product&&(t.$product.innerHTML=i.product({product:o.product}).trim(),t.$product.setAttribute("data-product-url",o.product.url),t.$notification.append(t.$product)),r.noBranding||t.$notification.append(t.$looxBranding),t.preloadImages(o,function(){t.show(),t.timerStart(function(){t.hide(),t.timerStart(function(){t.handleNotitifications()},t.timings.waitBetween)},t.timings.display)})},t.prototype.preloadImages=function(t,o){if(!o)throw new Error("No callback");var i=[];t.img&&i.push(t.img),t.product&&t.product.imageUrl&&i.push(t.product.imageUrl);var e=i.length;if(0==e)return o();var n=[],r=0;s("Need to load "+e+" images",i);for(var a=0;a<e;a++){function l(){++r==e&&(s(e+" images loaded"),o())}n[a]=new Image,n[a].onload=l,n[a].onerror=l,n[a].src=i[a]}},t.prototype.show=function(){var t=this;s("Showing notification"),t.notificationVisible=!0,t.$notification.style.display="block",setTimeout(function(){t.$notification.classList.replace(t.classes.hidden,t.classes.shown)},100)},t.prototype.hide=function(){s("Hiding notification"),this.notificationVisible=!1,this.$notification.classList.replace(this.classes.shown,this.classes.hidden)},t.prototype.hideAndStop=function(){l.set("loox-pop-stopped","yes"),this.hide(),this.stopLoop()},t.prototype.stopLoop=function(){s("Stopped. Maybe we will wait."),this.timerStop()},t.prototype.timerStart=function(t,o){var i=this;i.timer.started=Date.now(),i.timer.remaining=o,i.timer.callback=t,i.timer.id=p.setTimeout(t,i.timer.remaining),s("Timer started:",i.timer)},t.prototype.timerPause=function(){var t=this;t.timer.remaining=t.timer.started+t.timer.remaining-Date.now(),p.clearTimeout(t.timer.id),s("Timer paused:",t.timer)},t.prototype.timerResume=function(){this.timerStart(this.timer.callback,this.timer.remaining)},t.prototype.timerStop=function(){p.clearTimeout(this.timer.id),this.timer={id:null,started:null,remaining:null,callback:null}},p.LooxPop=new t)}(window,LOOX,[],{review:function(t){var l,A=[],g={},t=t||{};return function(c,p,a,e,t,o){A.push(""),g.RatingIcon=l=function(t){this&&this.block;var o=this&&this.attributes||{},i=(t=t||{}).iconId||"looxicons-rating-icon",e=t.color,n=t.fill,t=t.size||"1em";const r=["display: block"];t&&(t="number"==typeof t?t+"px":t,r.push("width: "+t),r.push("height: "+t)),e&&r.push("color: "+e);e=(o.style||"").split(";").map(t=>t.trim()).filter(t=>t),e=r.concat(e).join("; ")+";",e=a.assign({},o,{style:e});A.push("<svg"+jade.attrs(jade.merge([{viewBox:"0 0 24 24","data-lx-fill":"string"==typeof(l=n)?jade.escape(l):l,class:"loox-icon"},e]),!1)+"><use"+jade.attr("href","#"+i,!0,!1)+"></use></svg>")};const d=o=>t=>t<=o?"full":t<=o+.5?"half":"empty",u=o=>t=>t<=o?"full":"empty";g.RatingIcons=l=function(t){this&&this.block,this&&this.attributes;const o=(t=t||{}).fillHalf?d:u;var i="number"!=typeof t.rating||p.isNaN(t.rating)?0:t.rating,i=c.max(0,i);const n=[1,2,3,4,5].map(o(i)),r=t.iconId,a=t.size,l=t.iconAttributes||{},e=t.listAttributes||{},s=t.listItemAttributes||{};t="display: inline-flex; margin: unset; padding: unset; text-indent: unset; list-style-type: none; gap: 2px;";e.style=t+(e.style||""),A.push("<ul"+jade.attrs(jade.merge([{style:jade.escape(jade.style(t))},e]),!1)+">"),function(){var t=n;if("number"==typeof t.length)for(var o=0,i=t.length;o<i;o++){var e=t[o];A.push("<li"+jade.attrs(jade.merge([s]),!1)+">"),g.RatingIcon.call({attributes:jade.merge([l])},{iconId:r,fill:e,size:a}),A.push("</li>")}else{i=0;for(o in t){i++;e=t[o];A.push("<li"+jade.attrs(jade.merge([s]),!1)+">"),g.RatingIcon.call({attributes:jade.merge([l])},{iconId:r,fill:e,size:a}),A.push("</li>")}}}.call(this),A.push("</ul>")},g.RatingIconsOrStars=l=function(t){var o=this&&this.block,i=this&&this.attributes||{};t.ratingIconsEnabled||e&&e.ratingIconsEnabled()?g.RatingIcons.call({attributes:jade.merge([i])},t):o&&o()},A.push('<div class="loox-pn-review">'),o.img&&A.push('<div href="#review-popup" class="loox-pn-review__image"><img'+jade.attr("src",o.img,!0,!1)+' onerror="this.parentElement.removeChild(this)"'+jade.attr("alt",o.nickname+" review of "+o.product.untrimmed_name,!0,!1)+"/></div>"),A.push('<div href="#review-popup" class="loox-pn-review__body"><div class="loox-pn-review__nickname">'+jade.escape(null==(l=o.nickname)?"":l)+'</div><div class="loox-pn-review__stars">'),g.RatingIconsOrStars.call({block:function(){for(var t=1;t<=5;)t<=o.rating?A.push('<i class="loox-pn-review__star loox-pn-icon loox-pn-icon-star"></i>'):A.push('<i class="loox-pn-review__star loox-pn-icon loox-pn-icon-star-o"></i>'),t++}},{rating:o.rating,ratingIconsEnabled:t,iconAttributes:{class:"loox-pn-review__star loox-pn-icon"}}),A.push("</div>"),o.review&&A.push("<div"+jade.attr("title",o.untrimmed_review,!0,!1)+' class="loox-pn-review__content">'+jade.escape(null==(l=o.review)?"":l)+"</div>"),A.push("</div></div>")}.call(this,"Math"in t?t.Math:"undefined"!=typeof Math?Math:void 0,"Number"in t?t.Number:"undefined"!=typeof Number?Number:void 0,"Object"in t?t.Object:"undefined"!=typeof Object?Object:void 0,"client"in t?t.client:"undefined"!=typeof client?client:void 0,"ratingIconsEnabled"in t?t.ratingIconsEnabled:"undefined"!=typeof ratingIconsEnabled?ratingIconsEnabled:void 0,"review"in t?t.review:"undefined"!=typeof review?review:void 0),A.join("")},product:function(t){var o,i=[],t=t||{};return function(t){i.push('<div class="loox-pn-product">'),t.imageUrl&&i.push('<div class="loox-pn-product__image-wrap"><div'+jade.attr("style","background-image: url("+t.imageUrl+")",!0,!1)+' class="loox-pn-product__image"></div></div>'),t.name&&i.push("<div"+jade.attr("title",t.untrimmed_name,!0,!1)+' class="loox-pn-product__title">'+jade.escape(null==(o=t.name)?"":o)+"</div>"),i.push("</div>")}.call(this,"product"in t?t.product:"undefined"!=typeof product?product:void 0),i.join("")}},{"widget_font":"Poppins","rtl":false,"styles":".loox-pn-review__nickname,.loox-pn-review__content{font-family:'Poppins',sans-serif}.loox-pn-review__star{color:#000000}.loox-pn-product__title{font-family:'Poppins',sans-serif}\n\t\t.loox-pn {\n\t\t\tbox-shadow: 0px 2px 6px rgb(0 0 0 / 5%), 0px 4px 55px rgb(0 0 0 / 15%);\n\t\t}\n\t\t.loox-pn a.loox-pn-close {\n\t\t\ttop: -4px;\n\t\t\tpadding: 6px;\n\t\t\tbox-sizing: border-box;\n\t\t\tbox-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);\n\t\t}\n\t\t.loox-pn a.loox-pn-close:before {\n\t\t\tbackground-image: url('https://images.loox.io/uploads/assets/widgets/exit-popup-icon.svg');\n\t\t\tposition: relative;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tmargin: 0;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t}\n\t\t.loox-pn.loox-pn-bottom_right .loox-pn-close,\n\t\t.loox-pn.loox-pn-top_right .loox-pn-close,\n\t\t.loox-pn.loox-pn-bottom_left .loox-pn-close,\n\t\t.loox-pn.loox-pn-top_left .loox-pn-close {\n\t\t\tleft: auto;\n\t\t\tright: -6px;\n\t\t}\n\n\t\t.loox-rtl.loox-pn.loox-pn-bottom_right .loox-pn-close,\n\t\t.loox-rtl.loox-pn.loox-pn-top_right .loox-pn-close,\n\t\t.loox-rtl.loox-pn.loox-pn-bottom_left .loox-pn-close,\n\t\t.loox-rtl.loox-pn.loox-pn-top_left .loox-pn-close {\n\t\t\tleft: -6px;\n\t\t\tright: auto;\n\t\t}\n\n\t\t.loox-pn-review__content {\n\t\t\tfont-weight: normal;\n\t\t\tfont-style: normal;\n\t\t\tcolor: black;\n\t\t}\n\t\t.loox-pn-review__nickname {\n\t\t\tpadding: 8px 0 0px 0;\n\t\t\tcolor: black;\n\t\t}\n\t\t.loox-pn-review__image img {\n\t\t\tmax-height: 160px;\n\t\t\twidth: 100%;\n\t\t\tobject-fit: cover;\n\t\t\toverflow: hidden;\n\t\t}\n\t\t.loox-pn-review__body {\n\t\t\tmax-height: 160px;\n\t\t}\n\t\n\t\t.loox-pn,\n\t\t.loox-pn .loox-pn-review {\n\t\t\tborder-radius: 2px;\n\t\t}\n\t","position":"bottom_left"},false,"https://fonts.loox.io");