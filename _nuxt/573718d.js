(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,3,4,8],{942:function(t,e,r){"use strict";r.r(e);var n=r(10),o=(r(73),{props:["task"],data:function(){return{loading:!1,checkbox:!1,answer:null}},mounted:function(){var t=document.createElement("script");t.setAttribute("src","https://platform.twitter.com/widgets.js"),document.head.appendChild(t)},methods:{submitTask:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.checkbox){e.next=2;break}return e.abrupt("return");case 2:return t.loading=!0,e.prev=3,e.next=6,t.$axios.post("/task/".concat(t.task.id,"/submit"),{answer:t.answer});case 6:t.$emit("submit-task"),t.checkbox=!1,t.answer=null,e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),alert("Could not submit task");case 15:t.loading=!1;case 16:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}),c=r(26),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal is-active"},[r("div",{staticClass:"modal-background",on:{click:function(e){t.$parent.selectedTask=null}}}),t._v(" "),r("div",{staticClass:"modal-card"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.submitTask(e)}}},[r("header",{staticClass:"modal-card-head"},[r("p",{staticClass:"modal-card-title"},[t._v("\n          "+t._s(t.task.name)+"\n        ")]),t._v(" "),r("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){t.$parent.selectedTask=null}}})]),t._v(" "),r("section",{staticClass:"modal-card-body has-text-black"},[r("div",{staticClass:"block"},[t._v(t._s(t.task.description))]),t._v(" "),"twitter"===t.task.key?r("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),r("div",[t._v("3. Submit the link of your tagged tweet\n              "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],staticClass:"input",attrs:{type:"url",placeholder:"Your retweet URL",required:""},domProps:{value:t.answer},on:{input:function(e){e.target.composing||(t.answer=e.target.value)}}})])]):"telegram"===t.task.key?r("div",[t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)]):"youtube"===t.task.key?r("div",[t._m(5),t._v(" "),t._m(6),t._v(" "),r("div",[t._v("3. Enter your YouTube username\n            "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],staticClass:"input",attrs:{type:"text",placeholder:"Your YouTube username",required:""},domProps:{value:t.answer},on:{input:function(e){e.target.composing||(t.answer=e.target.value)}}})])]):"medium"===t.task.key?r("div",[t._m(7),t._v(" "),r("div",[t._v("2. Enter your Medium username\n            "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],staticClass:"input",attrs:{type:"text",placeholder:"Your Medium username",required:""},domProps:{value:t.answer},on:{input:function(e){e.target.composing||(t.answer=e.target.value)}}})])]):t._e(),t._v(" "),r("label",{staticClass:"checkbox mt-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.checkbox,expression:"checkbox"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checkbox)?t._i(t.checkbox,null)>-1:t.checkbox},on:{change:function(e){var r=t.checkbox,n=e.target,o=!!n.checked;if(Array.isArray(r)){var c=t._i(r,null);n.checked?c<0&&(t.checkbox=r.concat([null])):c>-1&&(t.checkbox=r.slice(0,c).concat(r.slice(c+1)))}else t.checkbox=o}}}),t._v("\n          I have completed this task\n        ")])]),t._v(" "),r("footer",{staticClass:"modal-card-foot"},[r("div",{staticClass:"button",staticStyle:{"margin-left":"auto"},on:{click:function(e){e.preventDefault(),t.$parent.selectedTask=null}}},[t._v("Cancel")]),t._v(" "),r("button",{staticClass:"button is-secondary",class:{"is-loading":t.loading},attrs:{type:"submit",disabled:!t.checkbox}},[t._v("Submit")])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("1. "),r("a",{staticClass:"twitter-follow-button",attrs:{href:"https://twitter.com/weyuofficial?ref_src=twsrc%5Etfw","data-size":"large","data-show-count":"false"}},[t._v("Follow @weyuofficial")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("2. Retweet "),r("a",{attrs:{href:"https://twitter.com/weyuofficial/status/1398609096794902531",target:"_blank"}},[t._v("this tweet")]),t._v(" and tag 3 friends")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("1. Join "),r("a",{attrs:{href:"https://t.me/weyuofficial",target:"_blank"}},[t._v("WEYU Announcement Telegram channel")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("2. Join "),r("a",{attrs:{href:"https://t.me/WEYUchat",target:"_blank"}},[t._v("WEYU Chat Telegram group")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("3. Add one friend to the "),r("a",{attrs:{href:"https://t.me/WEYUchat",target:"_blank"}},[t._v("Telegram Group")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("1. Subscribe to "),r("a",{attrs:{href:"https://www.youtube.com/channel/UC00y0RUkr11MLorqxKkqhbQ",target:"_blank"}},[t._v("WEYU YouTube Channel")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("2. Like + comment on "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=vTPGpkchEog",target:"_blank"}},[t._v("this video")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("1. Give 50 claps to "),r("a",{attrs:{href:"https://weyu-io.medium.com/the-weyu-whitelist-airdrop-is-now-open-6a793c02302f",target:"_blank"}},[t._v("this medium post")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:r(245).default})},944:function(t,e,r){var content=r(951);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("14c4d023",content,!0,{sourceMap:!1})},945:function(t,e,r){t.exports=r.p+"9e0abadb0f91b2ceb6167395fa71dcc2.svg"},946:function(t,e,r){var content=r(954);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("32c01674",content,!0,{sourceMap:!1})},950:function(t,e,r){"use strict";r(944)},951:function(t,e,r){var n=r(71)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),n.push([t.i,"@import url(https://use.typekit.net/smr8yaj.css);"]),n.push([t.i,'.account-status-block[data-v-46238644]{position:relative;background:#200142}.account-status-block[data-v-46238644]:before{border-radius:15px;content:"";background-image:linear-gradient(65deg,#1cecf3,#df007e);top:-2px;left:-2px;bottom:-2px;right:-2px;position:absolute;z-index:-1}',""]),t.exports=n},952:function(t,e,r){t.exports=r.p+"3bca92eaf0f691f3628583b69fe3aea5.svg"},953:function(t,e,r){"use strict";r(946)},954:function(t,e,r){var n=r(71)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),n.push([t.i,"@import url(https://use.typekit.net/smr8yaj.css);"]),n.push([t.i,".account-action-block[data-v-b5f971ae]{height:100%;background:linear-gradient(60deg,rgba(222,58,199,.7),hsla(0,0%,100%,.7) 33%,hsla(0,0%,100%,.7) 66%,rgba(28,236,243,.7));background-color:#fff;color:#000}.account-action-block h3[data-v-b5f971ae]{font-size:1.2rem;color:#000}.account-action-block p[data-v-b5f971ae]{font-size:.8rem}.account-action-block button .fab[data-v-b5f971ae]{font-size:1.5rem;margin-left:20px}.account-action-block .copy[data-v-b5f971ae]{font-size:.9rem}.account-action-block input.copy[data-v-b5f971ae]{border:1px solid #de3ac7;background-color:#f9ebf9}.task-block .task[data-v-b5f971ae]{background-color:#fff;height:100%}.task-block .task button[data-v-b5f971ae]{width:100%}.task-block .task p[data-v-b5f971ae]{font-size:.75rem}",""]),t.exports=n},956:function(t,e,r){"use strict";r.r(e);var n={mounted:function(){},props:{user:Object}},o=(r(950),r(26)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"account-status-block mt-4 px-5 py-4 has-radius is-horizontal-centered is-6 column"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"is-one-third column is-size-7 has-text-white"},[r("div",[r("div",{staticClass:"is-flex is-flex-direction-column is-justify-content-space-between"},[r("i",{staticClass:"is-size-5 mb-2 far has-text-primary",class:[t.user.address?"fa-check-circle":"fa-times-circle"]}),t._v(" "),r("a",{staticClass:"has-text-white blockchain-address",attrs:{href:t.$bsc.explorer+"/address/"+t.user.address,target:"_blank"}},[t._v(t._s(t.user.address?t.user.address:""))]),t._v(" "),r("p",{staticClass:"has-text-primary has-text-weight-medium"},[t._v(t._s(t.user.address?"Verified":" Not verified"))])])])]),t._v(" "),r("div",{staticClass:"is-one-third column  is-size-7 has-text-white"},[r("div",[t.user.telegram_meta?r("div",{staticClass:"is-flex is-flex-direction-column is-justify-content-space-between"},[r("i",{staticClass:"is-size-5 mb-2 far has-text-primary",class:[t.user.telegram_meta?"fa-check-circle":"fa-times-circle"]}),t._v(" "),r("p",{staticClass:"has-text-white"},[t._v(t._s(t.user.telegram_meta.username?"@"+t.user.telegram_meta.username:t.user.telegram_meta.first_name))]),t._v(" "),r("p",{class:[t.user.telegram_meta?"has-text-primary":"has-text-secondary","has-text-weight-medium"]},[t._v(t._s(t.user.telegram_meta?"Connected":" Not connected"))])]):t._e()])]),t._v(" "),r("div",{staticClass:"is-one-third column  is-size-7 has-text-white"},[r("div",[r("div",{staticClass:"is-flex is-flex-direction-column is-justify-content-space-between"},[r("i",{staticClass:"is-size-5 mb-2 far has-text-primary",class:[t.user.email?"fa-check-circle":"fa-times-circle"]}),t._v(" "),r("p",{staticClass:"has-text-white"},[t._v(t._s(t.user.email?t.user.email:""))]),t._v(" "),r("p",{class:[t.user.email?"has-text-primary":"has-text-secondary","has-text-weight-medium"]},[t._v(t._s(t.user.email?"Connected":" Not connected"))])])])])])])}),[],!1,null,"46238644",null);e.default=component.exports},957:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("Use your unique link below to refer your friend. You earn "),r("span",{staticClass:"has-text-secondary has-text-weight-bold"},[t._v("2x tickets")]),t._v(" for everyone who registers through your\n            link.")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"button is-outlined is-link"},[t._v("\n                  Share on Twitter\n                  "),r("i",{staticClass:"fab fa-twitter"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"button is-outlined is-link"},[t._v("\n                  Share on Telegram\n                  "),r("i",{staticClass:"fab fa-telegram"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task has-radius p-2"},[n("img",{staticClass:"my-3",staticStyle:{height:"53px"},attrs:{src:r(945)}}),t._v(" "),n("p",{staticClass:"has-text-secondary has-text-weight-bold"},[t._v("Earn more Tickets")]),t._v(" "),n("p",{staticStyle:{"min-height":"35px"}},[t._v("Come back later for more tasks")]),t._v(" "),n("button",{staticClass:"button has-text-weight-medium mt-4 is-static"},[t._v("\n                  Coming soon..\n                ")])])}],o={components:{Task:r(942).default},data:function(){return{copied:!1,selectedTask:null}},mounted:function(){},props:["user","tasks","referrals"],methods:{copyToClipboard:function(){var t=this;navigator.clipboard.writeText("https://weyu.io?ref="+this.user.referral_code).then((function(){t.copied=!0}))}}},c=(r(953),r(26)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"account-action-blocks has-radius is-horizontal-centered"},[t.selectedTask?n("task",{attrs:{task:t.selectedTask},on:{"submit-task":function(e){t.selectedTask=null,t.$emit("submit-task")}}}):t._e(),t._v(" "),n("div",{staticClass:"columns is-variable is-8"},[n("div",{staticClass:"is-half column"},[n("div",{staticClass:"account-action-block px-6 py-5 has-radius",staticStyle:{position:"relative"}},[n("h3",{staticClass:"mb-3 px-2 pt-2 has-text-weight-medium"},[t._v("Refer friends for extra tickets")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"field has-addons mt-6"},[n("div",{staticClass:"control",staticStyle:{width:"100%"}},[n("input",{staticClass:"input is-medium copy px-5 py-5",attrs:{type:"text",readonly:""},domProps:{value:"https://weyu.io?ref="+t.user.referral_code}})]),t._v(" "),n("p",{staticClass:"control"},[n("a",{staticClass:"button is-accent is-medium copy px-5 py-5",on:{click:function(e){return t.copyToClipboard()}}},[t._v("\n                Copy link\n              ")])])]),t._v(" "),t.copied?n("p",{staticClass:"has-text-success has-text-weight-medium has-text-centered",staticStyle:{position:"absolute",left:"0",width:"100%"}},[t._v("Copied to clipboard!")]):t._e(),t._v(" "),n("div",{staticClass:"field is-grouped is-flex is-justify-content-center is-flex-wrap-wrap mt-6"},[n("div",{staticClass:"control"},[n("a",{attrs:{target:"_blank",href:"https://twitter.com/intent/tweet?url=https://weyu.io?ref="+t.user.referral_code+"&text=%F0%9F%9A%A8%24WEYU Whitelist %2B Airdrop is LIVE! Register now for guaranteed airdrop:"}},[t._m(1)])]),t._v(" "),n("div",{staticClass:"control"},[n("a",{attrs:{target:"_blank",href:"https://t.me/share/url?url=https://weyu.io?ref="+t.user.referral_code+"&text=%E2%98%9D%EF%B8%8F %24WEYU Whitelist %2B Airdrop is LIVE! Register now for guaranteed airdrop %E2%98%9D%EF%B8%8F"}},[t._m(2)])])])])]),t._v(" "),n("div",{staticClass:"is-half column"},[n("div",{staticClass:"account-action-block task-block px-5 py-5 has-radius"},[n("h3",{staticClass:"mb-3 pt-2 px-2 has-text-weight-medium"},[t._v("Do a task for extra tickets")]),t._v(" "),n("p",[t._v("All tasks will be verified before the $WEYU airdrop is distributed.")]),t._v(" "),n("div",{staticClass:"columns mt-5 is-multiline"},[null===t.tasks?n("div",[t._v("Loading tasks..")]):t._l(t.tasks,(function(e){return n("div",{key:e.id,staticClass:"column is-one-third"},[n("div",{staticClass:"task has-radius p-2"},[n("img",{staticClass:"my-3",staticStyle:{height:"53px"},attrs:{src:e.tickets>1?r(945):r(952)}}),t._v(" "),n("p",{staticClass:"has-text-secondary has-text-weight-bold"},[t._v(t._s(e.tickets)+"x Ticket"),e.tickets>1?n("span",[t._v("s")]):t._e()]),t._v(" "),n("p",{staticStyle:{"min-height":"35px"}},[t._v(t._s(e.name))]),t._v(" "),e.created_at?n("button",{staticClass:"button has-text-weight-medium is-success mt-4"},[t._v("\n                  Completed\n                ")]):n("button",{staticClass:"button has-text-weight-medium is-outlined is-secondary is-link mt-4",on:{click:function(r){t.selectedTask=e}}},[t._v("\n                  Submit\n                ")])])])})),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"column is-one-third"},[t._m(3)])],2)])])])],1)}),n,!1,null,"b5f971ae",null);e.default=component.exports;installComponents(component,{Task:r(942).default})},959:function(t,e,r){"use strict";r.r(e);var n=r(26),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal",class:{"is-active":t.$parent.error}},[r("div",{staticClass:"modal-background",on:{click:function(e){t.$parent.error=null}}}),t._v(" "),r("div",{staticClass:"modal-content p-5 has-background-danger has-radius has-text-white"},[r("h2",{staticClass:"subtitle is-3"},[t._v("Error")]),t._v(" "),r("p",[t._v(t._s(t.$parent.error))]),t._v(" "),r("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:function(e){t.$parent.error=null}}}),t._v(" "),r("div",{staticClass:"has-text-right"},[r("button",{staticClass:"button",on:{click:function(e){t.$parent.error=null}}},[t._v("OK")])])])])}),[],!1,null,null,null);e.default=component.exports},960:function(t,e,r){var content=r(969);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("b36a23d8",content,!0,{sourceMap:!1})},967:function(t,e,r){window,t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var n={name:"vue-telegram-login",props:{mode:{type:String,required:!0,validator:function(t){return["callback","redirect"].includes(t)}},telegramLogin:{type:String,required:!0,validator:function(t){return t.endsWith("bot")||t.endsWith("Bot")}},redirectUrl:{type:String,default:""},requestAccess:{type:String,default:"read",validator:function(t){return["read","write"].includes(t)}},size:{type:String,default:"large",validator:function(t){return["small","medium","large"].includes(t)}},userpic:{type:Boolean,default:!0},radius:{type:String}},methods:{onTelegramAuth:function(t){this.$emit("callback",t)}},mounted:function(){var t=document.createElement("script");t.async=!0,t.src="https://telegram.org/js/telegram-widget.js?3",t.setAttribute("data-size",this.size),t.setAttribute("data-userpic",this.userpic),t.setAttribute("data-telegram-login",this.telegramLogin),t.setAttribute("data-request-access",this.requestAccess),this.radius&&t.setAttribute("data-radius",this.radius),"callback"===this.mode?(window.onTelegramAuth=this.onTelegramAuth,t.setAttribute("data-onauth","window.onTelegramAuth(user)")):t.setAttribute("data-auth-url",this.redirectUrl),this.$refs.telegram.appendChild(t)}},i=function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"telegram"})};i._withStripped=!0;var o=function(t,e,r,n,i,o,u,a){var s=typeof(t=t||{}).default;"object"!==s&&"function"!==s||(t=t.default);var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=r,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId=o),u?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},l._ssrRegister=c):i&&(c=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var m=l.beforeCreate;l.beforeCreate=m?[].concat(m,c):[c]}return{exports:t,options:l}}(n,i,[],!1,null,null,null);o.options.__file="src/vue-telegram-login.vue";var u=o.exports;r.d(e,"vueTelegramLogin",(function(){return u}))}])},968:function(t,e,r){"use strict";r(960)},969:function(t,e,r){var n=r(71),o=r(246),c=r(970),l=n(!1);l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),l.push([t.i,"@import url(https://use.typekit.net/smr8yaj.css);"]);var d=o(c);l.push([t.i,".tickets[data-v-330345e1]{background:url("+d+');background-size:cover;margin:0 auto;width:100px;color:#fff}.step[data-v-330345e1]{font-size:1.7rem;display:flex;justify-content:center;align-items:center;width:42px;height:42px;font-family:eurostile-extended,sans-serif;border:1px solid #7a7a7a;border-radius:10px;margin-right:10px}.step[data-v-330345e1]:before{content:"";position:absolute;width:3px;height:35px;bottom:58px;background:#7a7a7a}.step.is-active[data-v-330345e1]{border-color:#de3ac7;color:#fff}.step.is-active[data-v-330345e1],.step.is-active[data-v-330345e1]:before{background:#de3ac7}.step.is-first[data-v-330345e1]:before{display:none}.input-weyu[data-v-330345e1]{padding:25px 160px 25px 20px}.input-weyu[disabled][data-v-330345e1]{border-color:#7a7a7a;background-color:rgba(0,0,0,.1)}.button-weyu[data-v-330345e1]{position:absolute;top:6px;right:5px}.button-weyu .button[data-v-330345e1]{height:40px;font-size:14px;min-width:150px}@media only screen and (max-width:768px){.step[data-v-330345e1]:before{display:none}.input-weyu[data-v-330345e1]{padding-right:20px}.button-weyu[data-v-330345e1]{overflow-x:scroll;max-width:225px;position:relative;margin-top:5px;text-align:center}}',""]),t.exports=l},970:function(t,e,r){t.exports=r.p+"b9ed6aa27f81b798ff614b83f899b695.svg"},996:function(t,e,r){"use strict";r.r(e);var n=r(10),o=(r(73),r(53),r(967)),c=r(959),l=r(956),d=r(245),m=r(957),v={computed:{loggedIn:function(){return this.$bsc&&this.$bsc.token},tickets:function(){if(null===this.referrals||null===this.tasks)return"..";var t=3;return t+=2*this.referrals,this.tasks.forEach((function(e){e.created_at&&(t+=e.tickets)})),t>100&&(t=100),t}},components:{vueTelegramLogin:o.vueTelegramLogin,ErrorModal:c.default,WeyuFooter:d.default,AccountStatus:l.default,AccountActionBlocks:m.default},data:function(){return{loading:!1,error:null,user:null,email:null,editEmail:!1,referrals:null,tasks:null}},created:function(){this.loggedIn?(this.getUser(),this.getReferrals(),this.getTasks()):(this.$bsc.loginModal=!0,this.$router.push("/"))},methods:{telegramLogin:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(t),e.loading=!0,r.prev=2,r.next=5,e.$axios.post("/user/telegram",t);case 5:n=r.sent,e.user=n.data,r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),r.t0.response&&r.t0.response.data?r.t0.response.data.error?e.error=r.t0.response.data.error:e.error=r.t0.response.data:r.t0.message?e.error=r.t0.message:e.error=r.t0;case 12:e.loading=!1;case 13:case"end":return r.stop()}}),r,null,[[2,9]])})))()},setEmail:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.loading=!0,t.email){e.next=4;break}return t.error="Email is required",e.abrupt("return");case 4:return e.prev=4,e.next=7,t.$axios.post("/user",{email:t.email});case 7:r=e.sent,t.user=r.data,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),e.t0.response&&e.t0.response.data?e.t0.response.data.error?t.error=e.t0.response.data.error:t.error=e.t0.response.data:e.t0.message?t.error=e.t0.message:t.error=e.t0;case 14:t.editEmail=!1,t.loading=!1;case 16:case"end":return e.stop()}}),e,null,[[4,11]])})))()},getUser:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$axios.get("/user");case 4:r=e.sent,t.user=r.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0.response&&e.t0.response.data?e.t0.response.data.error?t.error=e.t0.response.data.error:t.error=e.t0.response.data:e.t0.message?t.error=e.t0.message:t.error=e.t0;case 11:t.loading=!1;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()},getReferrals:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/user/referrals");case 3:r=e.sent,t.referrals=parseInt(r.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0.response&&e.t0.response.data?e.t0.response.data.error?t.error=e.t0.response.data.error:t.error=e.t0.response.data:e.t0.message?t.error=e.t0.message:t.error=e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getTasks:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/tasks");case 3:r=e.sent,t.tasks=r.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0.response&&e.t0.response.data?e.t0.response.data.error?t.error=e.t0.response.data.error:t.error=e.t0.response.data:e.t0.message?t.error=e.t0.message:t.error=e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},f=(r(968),r(26)),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("error-modal"),t._v(" "),t.loading?r("div",{staticClass:"has-text-centered subtitle"},[t._v("Loading..")]):t._e(),t._v(" "),t.user?r("div",[t.user.telegram_meta&&t.user.email?r("section",{staticClass:"section"},[r("div",{staticClass:"container "},[r("div",{staticClass:"has-text-centered"},[r("p",{staticClass:"has-text-white block"},[t._v("Congrats "+t._s(t.user.telegram_meta.first_name)+", you are registered!")]),t._v(" "),r("p",{staticClass:"is-size-6 has-text-white"},[t._v("You have")]),t._v(" "),r("div",{staticClass:"tickets"},[r("div",{staticClass:"is-size-4 has-text-weight-bold"},[t._v(t._s(t.tickets))]),t._v(" "),r("div",{staticStyle:{"margin-top":"-8px","padding-bottom":"3px"}},[t._v("Tickets")])]),t._v(" "),r("account-status",{attrs:{user:t.user}}),t._v(" "),r("h2",{staticClass:"title site-title is-1 has-text-weight-medium is-spaced mt-6"},[t._v("Earn Extra WEYU Tickets")]),t._v(" "),r("h4",{staticClass:"subtitle is-6 mb-6"},[t._v("Earning extra tickets is easy and fun!")]),t._v(" "),r("account-action-blocks",{attrs:{referrals:t.referrals,tasks:t.tasks,user:t.user},on:{"submit-task":t.getTasks}})],1)])]):r("div",{staticClass:"container"},[r("div",{staticClass:"has-text-centered"},[r("div",{staticClass:"is-horizontal-centered column is-three-quarters"},[r("div",{staticClass:"has-text-centered mt-5"},[t._m(0),t._v(" "),r("div",{staticClass:"gradient-block py-6"},[r("div",{staticClass:"column is-horizontal-centered is-8 is-flex is-justify-content-center is-align-items-center",staticStyle:{position:"relative"}},[t._m(1),t._v(" "),r("div",{staticClass:"field is-flex-grow-1",staticStyle:{position:"relative"}},[r("div",{staticClass:"control"},[r("input",{staticClass:"input is-transparent is-white has-text-white input-weyu",attrs:{type:"text",readonly:""},domProps:{value:t.user.address}})]),t._v(" "),t._m(2)])]),t._v(" "),r("div",{staticClass:"column is-horizontal-centered is-8 is-flex is-justify-content-center is-align-items-center",staticStyle:{position:"relative"}},[r("div",{staticClass:"step is-active"},[t.user.telegram?r("i",{staticClass:"fa-check-circle far"}):r("span",[t._v("2")])]),t._v(" "),r("div",{staticClass:"field is-flex-grow-1",staticStyle:{position:"relative"}},[r("div",{staticClass:"control"},[r("input",{staticClass:"input is-transparent is-primary has-text-white input-weyu",attrs:{type:"text",readonly:"",placeholder:"Connect Telegram >"},domProps:{value:t.user.telegram_meta?t.user.telegram_meta.username?"@"+t.user.telegram_meta.username:t.user.telegram_meta.first_name:null}})]),t._v(" "),r("div",{staticClass:"control button-weyu"},[t.user.telegram?r("div",{staticClass:"has-text-primary has-text-weight-bold",staticStyle:{padding:"7px 6px 0px 0px"}},[r("span",[t._v("Connected")])]):r("vue-telegram-login",{attrs:{mode:"callback","telegram-login":"weyu_bot",requestAccess:"write"},on:{callback:t.telegramLogin}})],1)])]),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.setEmail(e)}}},[r("div",{staticClass:"column is-horizontal-centered is-8 is-flex is-justify-content-center is-align-items-center",staticStyle:{position:"relative"}},[r("div",{staticClass:"step",class:{"is-active":t.user.telegram}},[t.user.email?r("i",{staticClass:"fa-check-circle far"}):r("span",[t._v("3")])]),t._v(" "),r("div",{staticClass:"field is-flex-grow-1",staticStyle:{position:"relative"}},[r("div",{staticClass:"control"},[t.user.email?r("input",{staticClass:"input is-transparent is-primary has-text-white input-weyu",attrs:{type:"email",readonly:""},domProps:{value:t.user.email}}):r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input is-transparent is-primary has-text-white input-weyu",attrs:{type:"email",disabled:!t.user.telegram_meta,placeholder:"Your email address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"control button-weyu"},[r("button",{staticClass:"button",class:[t.user.telegram_meta?"is-accent":"is-dark"],attrs:{type:"submit",disabled:!t.user.telegram_meta}},[t._v("Connect")])])])])])])])])])])]):t._e(),t._v(" "),r("div",{staticClass:"has-text-centered container"},[r("div",{staticClass:"has-text-centered mb-4"},[r("a",{staticClass:"button is-outlined is-primary is-small",staticStyle:{"border-radius":"6px"},on:{click:function(e){return t.$bsc.logout()}}},[t._v("\n          Logout\n        ")])]),t._v(" "),r("weyu-footer")],1)],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"column is-horizontal-centered is-9 block"},[r("h1",{staticClass:"title has-text-weight-medium"},[t._v("Welcome to the WEYU"),r("br"),t._v("Whitelist + Airdrop Registration")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"step is-first is-active"},[e("i",{staticClass:"fa-check-circle far"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"control button-weyu"},[r("div",{staticClass:"has-text-primary has-text-weight-bold",staticStyle:{padding:"7px 6px 0px 0px"}},[t._v("Verified")])])}],!1,null,"330345e1",null);e.default=component.exports;installComponents(component,{ErrorModal:r(959).default,AccountStatus:r(956).default,AccountActionBlocks:r(957).default})}}]);