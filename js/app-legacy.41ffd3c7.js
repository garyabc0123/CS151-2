(function(){"use strict";var t={1358:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),n("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[t._v("Latest Release")]),n("v-icon",[t._v("mdi-open-in-new")])],1)],1),n("v-main",[n("HelloWorld")],1)],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-app-bar",{attrs:{app:"",color:"white",flat:""}},[n("v-container",{staticClass:"py-0 fill-height"},[n("v-avatar",{staticClass:"mr-10",attrs:{color:"grey darken-1",size:"32"}},[n("img",{attrs:{alt:"Avatar",src:"https://e.ecimg.tw/img/icon/24-32x32.ico"}})]),n("v-spacer"),n("v-responsive",{attrs:{"max-width":"260"}},[n("v-text-field",{attrs:{dense:"",flat:"","hide-details":"",rounded:"","solo-inverted":""}})],1)],1)],1),n("v-main",{staticClass:"grey lighten-3"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"3"}},[n("v-sheet",{attrs:{rounded:"lg"}},[n("v-list",{attrs:{rounded:""}},[n("v-list-item-group",{attrs:{multiple:""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},[t._l(t.diskType,(function(e,r){return[e?n("v-list-item",{key:"item-"+r,attrs:{value:e,"active-class":"deep-purple--text text--accent-4"},scopedSlots:t._u([{key:"default",fn:function(r){var i=r.active;return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e)}})],1),n("v-list-item-action",[n("v-checkbox",{attrs:{"input-value":i,color:"deep-purple accent-4"}})],1)]}}],null,!0)}):n("v-divider",{key:"divider-"+r})]}))],2)],1)],1)],1),n("v-col",[n("v-sheet",{attrs:{"min-height":"70vh",rounded:"lg"}})],1)],1)],1)],1)],1)},s=[],l={data:function(){return{diskType:["3.5吋機械硬碟","2.5吋機械硬碟","2.5吋固態硬碟","Gen3 固態硬碟","Gen4 固態硬碟"]}}},c=l,u=n(1001),p=n(3453),v=n.n(p),d=n(7524),f=n(3583),m=n(6370),h=n(9362),g=n(2102),y=n(9846),Z=n(1418),V=n(6816),b=n(7620),k=n(3099),w=n(5760),x=n(3249),C=n(7877),_=n(3857),O=n(2877),j=n(3385),S=n(9762),T=n(9091),A=(0,u.Z)(c,a,s,!1,null,null,null),L=A.exports;v()(A,{VApp:d.Z,VAppBar:f.Z,VAvatar:m.Z,VCheckbox:h.Z,VCol:g.Z,VContainer:y.Z,VDivider:Z.Z,VList:V.Z,VListItem:b.Z,VListItemAction:k.Z,VListItemContent:w.km,VListItemGroup:x.Z,VListItemTitle:w.V9,VMain:C.Z,VResponsive:_.Z,VRow:O.Z,VSheet:j.Z,VSpacer:S.Z,VTextField:T.Z});var I={name:"App",components:{HelloWorld:L},data:function(){return{}}},M=I,P=n(4995),B=n(6428),E=n(2829),G=(0,u.Z)(M,i,o,!1,null,null,null),R=G.exports;v()(G,{VApp:d.Z,VAppBar:f.Z,VBtn:P.Z,VIcon:B.Z,VImg:E.Z,VMain:C.Z,VSpacer:S.Z});var $=n(858);r.Z.use($.Z);var F=new $.Z({});r.Z.config.productionTip=!1,new r.Z({vuetify:F,render:function(t){return t(R)}}).$mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var a=1/0;for(u=0;u<t.length;u++){r=t[u][0],i=t[u][1],o=t[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&o||a>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(s=!1,o<a&&(a=o));if(s){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,a=r[0],s=r[1],l=r[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var u=l(n)}for(e&&e(r);c<a.length;c++)o=a[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},r=self["webpackChunkpchomediskprice"]=self["webpackChunkpchomediskprice"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1358)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.41ffd3c7.js.map