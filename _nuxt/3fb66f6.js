(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{944:function(e,t,r){var content=r(951);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(72).default)("14c4d023",content,!0,{sourceMap:!1})},950:function(e,t,r){"use strict";r(944)},951:function(e,t,r){var c=r(71)(!1);c.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),c.push([e.i,"@import url(https://use.typekit.net/smr8yaj.css);"]),c.push([e.i,'.account-status-block[data-v-46238644]{position:relative;background:#200142}.account-status-block[data-v-46238644]:before{border-radius:15px;content:"";background-image:linear-gradient(65deg,#1cecf3,#df007e);top:-2px;left:-2px;bottom:-2px;right:-2px;position:absolute;z-index:-1}',""]),e.exports=c},956:function(e,t,r){"use strict";r.r(t);var c={mounted:function(){},props:{user:Object}},l=(r(950),r(26)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"account-status-block mt-4 px-5 py-4 has-radius is-horizontal-centered is-6 column"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"is-one-third column is-size-7 has-text-white"},[r("div",[r("div",{staticClass:"is-flex is-flex-direction-column is-justify-content-space-between"},[r("i",{staticClass:"is-size-5 mb-2 far has-text-primary",class:[e.user.address?"fa-check-circle":"fa-times-circle"]}),e._v(" "),r("a",{staticClass:"has-text-white blockchain-address",attrs:{href:e.$bsc.explorer+"/address/"+e.user.address,target:"_blank"}},[e._v(e._s(e.user.address?e.user.address:""))]),e._v(" "),r("p",{staticClass:"has-text-primary has-text-weight-medium"},[e._v(e._s(e.user.address?"Verified":" Not verified"))])])])]),e._v(" "),r("div",{staticClass:"is-one-third column  is-size-7 has-text-white"},[r("div",[e.user.telegram_meta?r("div",{staticClass:"is-flex is-flex-direction-column is-justify-content-space-between"},[r("i",{staticClass:"is-size-5 mb-2 far has-text-primary",class:[e.user.telegram_meta?"fa-check-circle":"fa-times-circle"]}),e._v(" "),r("p",{staticClass:"has-text-white"},[e._v(e._s(e.user.telegram_meta.username?"@"+e.user.telegram_meta.username:e.user.telegram_meta.first_name))]),e._v(" "),r("p",{class:[e.user.telegram_meta?"has-text-primary":"has-text-secondary","has-text-weight-medium"]},[e._v(e._s(e.user.telegram_meta?"Connected":" Not connected"))])]):e._e()])]),e._v(" "),r("div",{staticClass:"is-one-third column  is-size-7 has-text-white"},[r("div",[r("div",{staticClass:"is-flex is-flex-direction-column is-justify-content-space-between"},[r("i",{staticClass:"is-size-5 mb-2 far has-text-primary",class:[e.user.email?"fa-check-circle":"fa-times-circle"]}),e._v(" "),r("p",{staticClass:"has-text-white"},[e._v(e._s(e.user.email?e.user.email:""))]),e._v(" "),r("p",{class:[e.user.email?"has-text-primary":"has-text-secondary","has-text-weight-medium"]},[e._v(e._s(e.user.email?"Connected":" Not connected"))])])])])])])}),[],!1,null,"46238644",null);t.default=component.exports}}]);