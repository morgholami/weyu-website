(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{970:function(e,t,r){"use strict";var n=r(14),o=r(130).find,l=r(248),c="find",v=!0;c in[]&&Array(1).find((function(){v=!1})),n({target:"Array",proto:!0,forced:v},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),l(c)},991:function(e,t,r){"use strict";r.r(t);var n=r(10),o=(r(105),r(131),r(249),r(74),r(970),r(73),r(962)),l=r(950),c=r(951),v=r(246),_=r(959),d={computed:{loggedIn:function(){return this.$bsc&&this.$bsc.token},maxPage:function(){return Math.ceil(this.userCount/20)}},components:{vueTelegramLogin:o.vueTelegramLogin,ErrorModal:l.default,WeyuFooter:v.default,AccountStatus:c.default,AccountActionBlocks:_.default},data:function(){return{loading:!1,loadingUserCount:!1,error:null,userCount:null,users:null,user:null,page:1,search:"",filter:""}},watch:{page:function(){this.getUsers()}},created:function(){this.loggedIn?(this.getUsers(),this.getUserCount()):(this.$bsc.loginModal=!0,this.$router.push({path:"/",query:{redirect:"admin"}}))},methods:{getUserCount:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loadingUserCount=!0,t.prev=1,t.next=4,e.$axios.get("/admin/users/count");case 4:r=t.sent,e.userCount=r.data,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),t.t0.response&&t.t0.response.data?t.t0.response.data.error?e.error=t.t0.response.data.error:e.error=t.t0.response.data:t.t0.message?e.error=t.t0.message:e.error=t.t0;case 11:e.loadingUserCount=!1;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()},getUser:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.loading=!0,r.prev=1,r.next=4,t.$axios.get("/admin/user/".concat(e));case 4:n=r.sent,t.user=n.data,r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),r.t0.response&&r.t0.response.data?r.t0.response.data.error?t.error=r.t0.response.data.error:t.error=r.t0.response.data:r.t0.message?t.error=r.t0.message:t.error=r.t0;case 11:t.loading=!1;case 12:case"end":return r.stop()}}),r,null,[[1,8]])})))()},getUsers:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.$axios.get("/admin/users?page=".concat(e.page,"&q=").concat(e.search,"&f=").concat(e.filter));case 4:r=t.sent,e.users=r.data.users,e.userCount=r.data.count,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),t.t0.response&&t.t0.response.data?t.t0.response.data.error?e.error=t.t0.response.data.error:e.error=t.t0.response.data:t.t0.message?e.error=t.t0.message:e.error=t.t0;case 12:e.loading=!1;case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},setUserSaleStatus:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.loading=!0,n.prev=1,n.next=4,r.$axios.post("/admin/user/".concat(e,"/status"),{status:t});case 4:r.users.find((function(t){return t.id===e})).saleStatus=t,n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),n.t0.response&&n.t0.response.data?n.t0.response.data.error?r.error=n.t0.response.data.error:r.error=n.t0.response.data:n.t0.message?r.error=n.t0.message:r.error=n.t0;case 10:r.loading=!1;case 11:case"end":return n.stop()}}),n,null,[[1,7]])})))()}}},f=r(26),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"section"},[e.user?r("div",{staticClass:"modal is-active"},[r("div",{staticClass:"modal-background",on:{click:function(t){e.user=null}}}),e._v(" "),r("div",{staticClass:"modal-content"},[r("div",{staticClass:"box has-text-black"},[r("div",{staticClass:"block"},[r("b",[e._v("Address:")]),e._v(" "+e._s(e.user.address))]),e._v(" "),r("div",{staticClass:"block"},[r("b",[e._v("Email:")]),e._v(" "+e._s(e.user.email))]),e._v(" "),r("div",{staticClass:"block"},[r("b",[e._v("Telegram:")]),e._v(" "),e.user.telegram_meta?r("span",[e._v(e._s(e.user.telegram_meta.first_name)),e.user.telegram_meta.username?r("span",[e._v("(@"+e._s(e.user.telegram_meta.username)+")")]):e._e()]):e._e()]),e._v(" "),r("div",{staticClass:"block"},[r("b",[e._v("Tickets:")]),e._v(" "+e._s(e.user.tickets))]),e._v(" "),r("div",{staticClass:"block"},[r("b",[e._v("Created:")]),e._v(" "+e._s(e.user.created_at))]),e._v(" "),r("div",{staticClass:"block"},[r("b",[e._v("Referrals:")]),e._v(" "+e._s(e.user.referrals))]),e._v(" "),r("div",{staticClass:"block"},[r("b",[e._v("Referral Code:")]),e._v(" "+e._s(e.user.referral_code))]),e._v(" "),r("div",{staticClass:"block"},[r("b",[e._v("Referrer:")]),e._v(" "+e._s(e.user.referrer))]),e._v(" "),r("div",{staticClass:"block"},[r("b",[e._v("Tasks:")]),e._v(" "),e._l(e.user.tasks,(function(t){return r("div",{staticClass:"block"},[e._v("\n            - "+e._s(t.key)+": "),r("b",[e._v(e._s(t.answer))]),r("br"),e._v("completed: "+e._s(t.created_at)+"\n          ")])}))],2),e._v(" "),r("div",{staticClass:"block"},[r("b",[e._v("Telegram Meta:")]),e._v(" "+e._s(e.user.telegram_meta))]),e._v(" "),r("div",{staticClass:"block"},[r("b",[e._v("Token Sale Status:")]),e._v(" "),e.user.saleStatus?r("span",[e._v(e._s(e.user.saleStatus))]):e._e()]),e._v(" "),r("div",{staticClass:"block"},[r("b",[e._v("KYC Status:")]),e._v(" "),e.user.kycStatus?r("span",[e._v(e._s(e.user.kycStatus))]):e._e()]),e._v(" "),r("div",{staticClass:"block"},[r("b",[e._v("Token Sale Address:")]),e._v(" "),e.user.tokenSaleAddress?r("span",[e._v(e._s(e.user.tokenSaleAddress))]):e._e()])])]),e._v(" "),r("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:function(t){e.user=null}}})]):e._e(),e._v(" "),r("div",{staticClass:"container"},[r("error-modal"),e._v(" "),r("h2",{staticClass:"subtitle"},[e._v("Whitelisted Users")]),e._v(" "),r("div",{staticClass:"block"},[r("h2",{staticClass:"subtitle has-text-black has-text-weight-bold"},[null===e.userCount||e.loadingUserCount?r("span",[e._v("...")]):r("span",[e._v(e._s(e.userCount))]),e._v(" users "),r("a",{on:{click:e.getUserCount}},[r("small",{staticClass:"is-size-7"},[e._v("refresh")])])])]),e._v(" "),r("form",{on:{submit:function(t){t.preventDefault(),e.page=1,e.getUsers()}}},[r("div",{staticClass:"field has-addons"},[r("div",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"input",attrs:{type:"text",placeholder:"Search.."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),e._v(" "),e._m(0)])]),e._v(" "),r("div",{staticClass:"field has-addons"},[r("div",{staticClass:"control"},[r("div",{staticClass:"select"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.filter=t.target.multiple?r:r[0]},function(t){e.page=1,e.getUsers()}]}},[r("option",{attrs:{value:""}},[e._v("-")]),e._v(" "),r("option",{attrs:{value:"SELECTED"}},[e._v("Selected")]),e._v(" "),r("option",{attrs:{value:"REJECTED"}},[e._v("Rejected")])])])])]),e._v(" "),e.loading?r("div",{staticClass:"has-text-centered subtitle"},[r("progress",{staticClass:"progress is-small is-primary",attrs:{max:"100"}},[e._v("Loading")])]):e._e(),e._v(" "),r("div",{staticClass:"table-container"},[r("table",{staticClass:"table is-fullwidth is-striped is-hoverable"},[e._m(1),e._v(" "),r("tbody",e._l(e.users,(function(t){return r("tr",{key:t.id,staticClass:"is-size-7",on:{click:function(r){return e.getUser(t.id)}}},[r("td",[r("span",{staticClass:" blockchain-address"},[e._v(e._s(t.address))])]),e._v(" "),r("td",[e._v(e._s(t.email))]),e._v(" "),r("td",[t.telegram_meta?r("span",[e._v(e._s(t.telegram_meta.first_name)),t.telegram_meta.username?r("span",[e._v("(@"+e._s(t.telegram_meta.username)+")")]):e._e()]):e._e()]),e._v(" "),r("td",[e._v(e._s(t.referrals))]),e._v(" "),r("td",[r("a",{on:{click:function(r){r.preventDefault(),r.stopPropagation(),e.search=t.referrer}}},[e._v(e._s(t.referrer))])]),e._v(" "),r("td",[r("a",{on:{click:function(r){r.preventDefault(),r.stopPropagation(),e.search=t.referral_code}}},[e._v(e._s(t.referral_code))])]),e._v(" "),r("td",[e._v(e._s(t.created_at))]),e._v(" "),r("td",[e._v(e._s(2*parseInt(t.referrals)+parseInt(t.taskTickets||0)+3))]),e._v(" "),r("td",[t.saleStatus?r("div",[e._v("\n              "+e._s(t.saleStatus)+"\n              "),r("span",{staticClass:"icon is-small",staticStyle:{cursor:"pointer"},on:{click:function(r){return r.stopPropagation(),e.setUserSaleStatus(t.id,null)}}},[r("i",{staticClass:"fas fa-times"})])]):r("div",{staticClass:"buttons has-addons"},[r("button",{staticClass:"button is-small",attrs:{"data-tooltip":"Select User"},on:{click:function(r){return r.stopPropagation(),e.setUserSaleStatus(t.id,"SELECTED")}}},[e._m(2,!0)]),e._v(" "),r("button",{staticClass:"button is-small",attrs:{"data-tooltip":"Reject User"},on:{click:function(r){return r.stopPropagation(),e.setUserSaleStatus(t.id,"REJECTED")}}},[e._m(3,!0)])])])])})),0)])]),e._v(" "),e.userCount&&e.users?r("nav",{staticClass:"pagination",attrs:{role:"navigation","aria-label":"pagination"}},[r("span",[e._v(e._s(20*(e.page-1)+1)+"-"+e._s(20*(e.page-1)+e.users.length)+" of "+e._s(e.userCount))]),e._v(" "),r("a",{staticClass:"pagination-previous",attrs:{disabled:1==e.page},on:{click:function(t){e.page=e.page-1}}},[e._v("Previous")]),e._v(" "),r("a",{staticClass:"pagination-next",attrs:{disabled:!e.maxPage||e.page==e.maxPage},on:{click:function(t){e.page=e.page+1}}},[e._v("Next page")]),e._v(" "),r("ul",{staticClass:"pagination-list"},[e.page>2?r("li",[r("a",{staticClass:"pagination-link",on:{click:function(t){e.page=1}}},[e._v("1")])]):e._e(),e._v(" "),e.page>3?r("li",[r("span",{staticClass:"pagination-ellipsis"},[e._v("…")])]):e._e(),e._v(" "),e.page>1?r("li",[r("a",{staticClass:"pagination-link",on:{click:function(t){e.page=e.page-1}}},[e._v(e._s(e.page-1))])]):e._e(),e._v(" "),r("li",[r("a",{staticClass:"pagination-link is-current",attrs:{"aria-current":"page"}},[e._v(e._s(e.page))])]),e._v(" "),e.page<e.maxPage?r("li",[r("a",{staticClass:"pagination-link",on:{click:function(t){e.page=e.page+1}}},[e._v(e._s(e.page+1))])]):e._e(),e._v(" "),e.maxPage>e.page+2?r("li",[r("span",{staticClass:"pagination-ellipsis"},[e._v("…")])]):e._e(),e._v(" "),e.maxPage>e.page+1?r("li",[r("a",{staticClass:"pagination-link",on:{click:function(t){e.page=e.maxPage}}},[e._v(e._s(e.maxPage))])]):e._e()])]):e._e(),e._v(" "),r("div",{staticClass:"has-text-centered container"},[r("div",{staticClass:"has-text-centered mb-4"},[r("a",{staticClass:"button is-outlined is-danger is-small",staticStyle:{"border-radius":"6px"},on:{click:function(t){return e.$bsc.logout()}}},[e._v("\n          Logout\n        ")])]),e._v(" "),r("weyu-footer")],1)],1)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"control"},[r("button",{staticClass:"button is-info",attrs:{type:"submit"}},[e._v("\n            Search\n          ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v("Address")]),e._v(" "),r("th",[e._v("Email")]),e._v(" "),r("th",[e._v("Telegram")]),e._v(" "),r("th",[e._v("Referrals")]),e._v(" "),r("th",[e._v("Referrer")]),e._v(" "),r("th",[e._v("Referral Code")]),e._v(" "),r("th",[e._v("Created")]),e._v(" "),r("th",[e._v("Tickets")]),e._v(" "),r("th",[e._v("Select/Reject User")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon is-small"},[t("i",{staticClass:"fas fa-check"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon is-small"},[t("i",{staticClass:"fas fa-times"})])}],!1,null,"8e6116f0",null);t.default=component.exports;installComponents(component,{ErrorModal:r(950).default})}}]);