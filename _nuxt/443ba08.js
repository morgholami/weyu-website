(window.webpackJsonp=window.webpackJsonp||[]).push([[3,8],{941:function(t,e,r){"use strict";r.r(e);var n=r(10),o=(r(73),{props:["task"],data:function(){return{loading:!1,checkbox:!1,answer:null}},mounted:function(){var t=document.createElement("script");t.setAttribute("src","https://platform.twitter.com/widgets.js"),document.head.appendChild(t)},methods:{submitTask:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.checkbox){e.next=2;break}return e.abrupt("return");case 2:return t.loading=!0,e.prev=3,e.next=6,t.$axios.post("/task/".concat(t.task.id,"/submit"),{answer:t.answer});case 6:t.$emit("submit-task"),t.checkbox=!1,t.answer=null,e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),alert("Could not submit task");case 15:t.loading=!1;case 16:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}),c=r(26),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal is-active"},[r("div",{staticClass:"modal-background",on:{click:function(e){t.$parent.selectedTask=null}}}),t._v(" "),r("div",{staticClass:"modal-card"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.submitTask(e)}}},[r("header",{staticClass:"modal-card-head"},[r("div",{staticClass:"subtitle has-text-black",staticStyle:{width:"100%"}},[t._v("\n          "+t._s(t.task.name)+"\n        ")]),t._v(" "),r("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){t.$parent.selectedTask=null}}})]),t._v(" "),r("section",{staticClass:"modal-card-body has-text-black pt-0"},[r("div",{staticClass:"has-background-white-bis has-text-left has-radius p-5 mx-2",staticStyle:{"line-height":"2"}},[t.task.description?r("div",{staticClass:"block"},[t._v(t._s(t.task.description))]):t._e(),t._v(" "),"twitter"===t.task.key?r("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),r("div",[t._v("3. Submit the link of your tagged tweet\n              "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],staticClass:"input",attrs:{type:"url",placeholder:"Your retweet URL",required:""},domProps:{value:t.answer},on:{input:function(e){e.target.composing||(t.answer=e.target.value)}}})])]):"telegram"===t.task.key?r("div",[t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)]):"youtube"===t.task.key?r("div",[t._m(5),t._v(" "),t._m(6),t._v(" "),r("div",[t._v("3. Enter your YouTube username\n            "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],staticClass:"input",attrs:{type:"text",placeholder:"Your YouTube username",required:""},domProps:{value:t.answer},on:{input:function(e){e.target.composing||(t.answer=e.target.value)}}})])]):"youtube2"===t.task.key?r("div",[t._m(7),t._v(" "),r("div",[t._v("2. Enter your YouTube username\n            "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],staticClass:"input",attrs:{type:"text",placeholder:"Your YouTube username",required:""},domProps:{value:t.answer},on:{input:function(e){e.target.composing||(t.answer=e.target.value)}}})])]):"youtube3"===t.task.key?r("div",[t._m(8),t._v(" "),r("div",[t._v("2. Enter your YouTube username\n            "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],staticClass:"input",attrs:{type:"text",placeholder:"Your YouTube username",required:""},domProps:{value:t.answer},on:{input:function(e){e.target.composing||(t.answer=e.target.value)}}})])]):"tiktok"===t.task.key?r("div",[t._m(9),t._v(" "),r("div",[t._v("2. Like 3 videos from @weyuofficial")]),t._v(" "),r("div",[t._v("3. Enter your TikTok username\n            "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],staticClass:"input",attrs:{type:"text",placeholder:"Your TikTok username",required:""},domProps:{value:t.answer},on:{input:function(e){e.target.composing||(t.answer=e.target.value)}}})])]):"medium"===t.task.key?r("div",[t._m(10),t._v(" "),r("div",[t._v("2. Enter your Medium username\n            "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],staticClass:"input",attrs:{type:"text",placeholder:"Your Medium username",required:""},domProps:{value:t.answer},on:{input:function(e){e.target.composing||(t.answer=e.target.value)}}})])]):"instagram"===t.task.key?r("div",[t._m(11),t._v(" "),r("div",[t._v("2. Enter your Instagram username\n              "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],staticClass:"input",attrs:{type:"text",placeholder:"Your Instagram username",required:""},domProps:{value:t.answer},on:{input:function(e){e.target.composing||(t.answer=e.target.value)}}})])]):"airdrops"===t.task.key?r("div",[t._m(12)]):t._e(),t._v(" "),r("label",{staticClass:"checkbox mt-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.checkbox,expression:"checkbox"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checkbox)?t._i(t.checkbox,null)>-1:t.checkbox},on:{change:function(e){var r=t.checkbox,n=e.target,o=!!n.checked;if(Array.isArray(r)){var c=t._i(r,null);n.checked?c<0&&(t.checkbox=r.concat([null])):c>-1&&(t.checkbox=r.slice(0,c).concat(r.slice(c+1)))}else t.checkbox=o}}}),t._v("\n          I have completed this task\n        ")])])]),t._v(" "),r("footer",{staticClass:"modal-card-foot"},[r("div",{staticClass:"column is-half"},[r("div",{staticClass:"button is-fullwidth",staticStyle:{"margin-left":"auto"},on:{click:function(e){e.preventDefault(),t.$parent.selectedTask=null}}},[t._v("Cancel")])]),t._v(" "),r("div",{staticClass:"column is-half"},[r("button",{staticClass:"button is-fullwidth is-secondary",class:{"is-loading":t.loading},attrs:{type:"submit",disabled:!t.checkbox}},[t._v("Submit")])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("1. "),r("a",{staticClass:"twitter-follow-button",attrs:{href:"https://twitter.com/weyuofficial?ref_src=twsrc%5Etfw","data-size":"large","data-show-count":"false"}},[t._v("Follow @weyuofficial")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("2. Retweet "),r("a",{attrs:{href:"https://twitter.com/weyuofficial/status/1399365047722418178",target:"_blank"}},[t._v("this tweet")]),t._v(" and tag 3 friends")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("1. Join "),r("a",{attrs:{href:"https://t.me/WEYUchat",target:"_blank"}},[t._v("WEYU Chat Telegram group")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("2. Add one friend to the "),r("a",{attrs:{href:"https://t.me/WEYUchat",target:"_blank"}},[t._v("Telegram Group")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("3. Join "),r("a",{attrs:{href:"https://t.me/weyuofficial",target:"_blank"}},[t._v("WEYU Announcement Telegram channel")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("1. Subscribe to "),r("a",{attrs:{href:"https://www.youtube.com/channel/UC00y0RUkr11MLorqxKkqhbQ",target:"_blank"}},[t._v("WEYU YouTube Channel")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("2. Like + comment on "),r("a",{attrs:{href:"https://youtu.be/CLNP9hVkiJE",target:"_blank"}},[t._v("this video")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("1. Subscribe + Like "),r("a",{attrs:{href:"https://youtu.be/KuPVcQ7T9RM",target:"_blank"}},[t._v("this video")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("1. Like "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=M_vr6frJ9r8",target:"_blank"}},[t._v("this YouTube video")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("1. Follow to "),r("a",{attrs:{href:"https://www.tiktok.com/@weyuofficial",target:"_blank"}},[t._v("@weyuofficial TikTok page")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("1. Give 50 claps to "),r("a",{attrs:{href:"https://weyu-io.medium.com/the-weyu-whitelist-airdrop-is-now-open-6a793c02302f",target:"_blank"}},[t._v("this medium post")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("1. "),r("a",{attrs:{href:"https://www.instagram.com/weyuofficial/",target:"_blank"}},[t._v("Follow @weyuofficial")]),t._v(" on Instagram")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("Give WEYU a "),r("strong",[t._v("+")]),t._v(" on "),r("a",{attrs:{href:"https://airdrops.io/weyu/",target:"_blank"}},[t._v("Airdrops.io")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:r(244).default})},943:function(t,e,r){t.exports=r.p+"9e0abadb0f91b2ceb6167395fa71dcc2.svg"},944:function(t,e,r){var content=r(954);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("835c50a6",content,!0,{sourceMap:!1})},949:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("Use your unique link below to refer your friend. You earn "),r("span",{staticClass:"has-text-secondary has-text-weight-bold"},[t._v("2x tickets")]),t._v(" for everyone who registers through your\n            link.")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"button is-outlined is-link"},[t._v("\n                  Share on Twitter\n                  "),r("i",{staticClass:"fab fa-twitter"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"button is-outlined is-link"},[t._v("\n                  Share on Telegram\n                  "),r("i",{staticClass:"fab fa-telegram"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column is-one-third"},[n("div",{staticClass:"task has-radius p-2"},[n("img",{staticClass:"my-3",staticStyle:{height:"53px"},attrs:{src:r(943)}}),t._v(" "),n("p",{staticClass:"has-text-secondary has-text-weight-bold"},[t._v("Earn more Tickets")]),t._v(" "),n("p",{staticStyle:{"min-height":"35px"}},[t._v("Come back later for more tasks")]),t._v(" "),n("button",{staticClass:"button has-text-weight-medium mt-4 is-static"},[t._v("\n                  Coming soon..\n                ")])])])}],o={components:{Task:r(941).default},data:function(){return{copied:!1,selectedTask:null}},mounted:function(){},props:["user","tasks","referrals"],methods:{copyToClipboard:function(){var t=this;navigator.clipboard.writeText("https://weyu.io?ref="+this.user.referral_code).then((function(){t.copied=!0}))}}},c=(r(953),r(26)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"account-action-blocks has-radius is-horizontal-centered"},[t.selectedTask?n("task",{attrs:{task:t.selectedTask},on:{"submit-task":function(e){t.selectedTask=null,t.$emit("submit-task")}}}):t._e(),t._v(" "),n("div",{staticClass:"columns is-variable is-8"},[n("div",{staticClass:"is-half column"},[n("div",{staticClass:"account-action-block px-6 py-5 has-radius",staticStyle:{position:"relative"}},[n("h3",{staticClass:"mb-3 px-2 pt-2 has-text-weight-medium"},[t._v("Refer friends for extra tickets")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"field has-addons mt-6"},[n("div",{staticClass:"control",staticStyle:{width:"100%"}},[n("input",{staticClass:"input is-medium copy px-5 py-5",attrs:{type:"text",readonly:""},domProps:{value:"https://weyu.io?ref="+t.user.referral_code}})]),t._v(" "),n("p",{staticClass:"control"},[n("a",{staticClass:"button is-accent is-medium copy px-5 py-5",on:{click:function(e){return t.copyToClipboard()}}},[t._v("\n                Copy link\n              ")])])]),t._v(" "),t.copied?n("p",{staticClass:"has-text-success has-text-weight-medium has-text-centered",staticStyle:{position:"absolute",left:"0",width:"100%"}},[t._v("Copied to clipboard!")]):t._e(),t._v(" "),n("div",{staticClass:"field is-grouped is-flex is-justify-content-center is-flex-wrap-wrap mt-6"},[n("div",{staticClass:"control"},[n("a",{attrs:{target:"_blank",href:"https://twitter.com/intent/tweet?url=https://weyu.io?ref="+t.user.referral_code+"&text=%F0%9F%9A%A8%24WEYU Whitelist %2B Airdrop is LIVE! Register now for guaranteed airdrop:"}},[t._m(1)])]),t._v(" "),n("div",{staticClass:"control"},[n("a",{attrs:{target:"_blank",href:"https://t.me/share/url?url=https://weyu.io?ref="+t.user.referral_code+"&text=%E2%98%9D%EF%B8%8F %24WEYU Whitelist %2B Airdrop is LIVE! Register now for guaranteed airdrop %E2%98%9D%EF%B8%8F"}},[t._m(2)])])])])]),t._v(" "),n("div",{staticClass:"is-half column"},[n("div",{staticClass:"account-action-block task-block px-5 py-5 has-radius"},[n("h3",{staticClass:"mb-3 pt-2 px-2 has-text-weight-medium"},[t._v("Do a task for extra tickets")]),t._v(" "),n("p",[t._v("All tasks will be verified before the $WEYU airdrop is distributed.")]),t._v(" "),n("div",{staticClass:"columns mt-5 is-multiline"},[null===t.tasks?n("div",[t._v("Loading tasks..")]):t._l(t.tasks,(function(e){return n("div",{directives:[{name:"show",rawName:"v-show",value:"airdrops"!==e.key&&"youtube"!==e.key||e.created_at,expression:"(task.key !== 'airdrops' && task.key !== 'youtube') || task.created_at"}],key:e.id,staticClass:"column is-one-third"},[n("div",{staticClass:"task has-radius p-2"},[n("img",{staticClass:"my-3",staticStyle:{height:"53px"},attrs:{src:e.tickets>1?r(943):r(952)}}),t._v(" "),n("p",{staticClass:"has-text-secondary has-text-weight-bold"},[t._v(t._s(e.tickets)+"x Ticket"),e.tickets>1?n("span",[t._v("s")]):t._e()]),t._v(" "),n("p",{staticStyle:{"min-height":"35px"}},[t._v(t._s(e.name))]),t._v(" "),e.created_at?n("button",{staticClass:"button has-text-weight-medium is-success mt-4"},[t._v("\n                  Completed\n                ")]):n("button",{staticClass:"button has-text-weight-medium is-outlined is-secondary is-link mt-4",on:{click:function(r){t.selectedTask=e}}},[t._v("\n                  Submit\n                ")])])])})),t._v(" "),t._m(3)],2)])])])],1)}),n,!1,null,"1810a83a",null);e.default=component.exports;installComponents(component,{Task:r(941).default})},952:function(t,e,r){t.exports=r.p+"3bca92eaf0f691f3628583b69fe3aea5.svg"},953:function(t,e,r){"use strict";r(944)},954:function(t,e,r){var n=r(71)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),n.push([t.i,"@import url(https://use.typekit.net/smr8yaj.css);"]),n.push([t.i,".account-action-block[data-v-1810a83a]{height:100%;background:linear-gradient(60deg,rgba(222,58,199,.7),hsla(0,0%,100%,.7) 33%,hsla(0,0%,100%,.7) 66%,rgba(28,236,243,.7));background-color:#fff;color:#000}.account-action-block h3[data-v-1810a83a]{font-size:1.2rem;color:#000}.account-action-block p[data-v-1810a83a]{font-size:.8rem}.account-action-block button .fab[data-v-1810a83a]{font-size:1.5rem;margin-left:20px}.account-action-block .copy[data-v-1810a83a]{font-size:.9rem}.account-action-block input.copy[data-v-1810a83a]{border:1px solid #de3ac7;background-color:#f9ebf9}.task-block .task[data-v-1810a83a]{background-color:#fff;height:100%}.task-block .task button[data-v-1810a83a]{width:100%}.task-block .task p[data-v-1810a83a]{font-size:.75rem}",""]),t.exports=n}}]);