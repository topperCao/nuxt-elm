(window.webpackJsonp=window.webpackJsonp||[]).push([[16,19],{186:function(e,t){e.exports={IS_RELEASE:!0,BASE_URL:"http://localhost:3000/api",IMG_URL:"https://easytuan.gitee.io/node-elm-api/public/",HEADERS:{"Content-Type":"application/json;charset=UTF-8"},TIMEOUT:12e3}},187:function(e,t,n){"use strict";n(51);var r=n(3),a=n.n(r),u=n(70),o=n.n(u),i=n(186),s=n.n(i),c=n(69);o.a.defaults.baseURL=s.a.BASE_URL,o.a.defaults.timeout=s.a.TIMEOUT,o.a.defaults.headers=s.a.HEADERS,o.a.interceptors.request.use(function(e){return s.a.IS_RELEASE||console.log("".concat((new Date).toLocaleString(),"【 M=").concat(e.url," 】P="),e.params||e.data),e},function(e){return Promise.reject(e)}),t.a=a()(regeneratorRuntime.mark(function e(){var t,n,r,a=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{method:"GET"},n=!0,"POST"!==t.method.toUpperCase()&&"PUT"!==t.method.toUpperCase()&&"PATCH"!==t.method.toUpperCase()&&(n=!1),e.next=5,o()({method:t.method,url:t.url,data:n?t.data:null,params:n?null:t.data});case 5:if(!((r=e.sent).status>=200&&r.status<300)){e.next=12;break}return s.a.IS_RELEASE||console.log("".concat((new Date).toLocaleString(),"【接口响应：】"),r.data),"undefined"!=typeof window&&0!==r.data.code&&Object(c.Toast)(r.data.msg),e.abrupt("return",r.data);case 12:"undefined"!=typeof window&&0!==r.data.code&&Object(c.Toast)("请求错误");case 13:case"end":return e.stop()}},e,this)}))},190:function(e,t,n){"use strict";var r=n(2),a=n(16),u=n(20),o=n(104),i=n(52),s=n(10),c=n(53).f,d=n(72).f,l=n(9).f,f=n(191).trim,p=r.Number,m=p,h=p.prototype,b="Number"==u(n(71)(h)),v="trim"in String.prototype,g=function(e){var t=i(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,u=(t=v?t.trim():f(t,3)).charCodeAt(0);if(43===u||45===u){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===u){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var o,s=t.slice(2),c=0,d=s.length;c<d;c++)if((o=s.charCodeAt(c))<48||o>a)return NaN;return parseInt(s,r)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(b?s(function(){h.valueOf.call(n)}):"Number"!=u(n))?o(new m(g(t)),n,p):g(t)};for(var k,y=n(6)?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;y.length>E;E++)a(m,k=y[E])&&!a(p,k)&&l(p,k,d(m,k));p.prototype=h,h.constructor=p,n(11)(r,"Number",p)}},191:function(e,t,n){var r=n(5),a=n(19),u=n(10),o=n(192),i="["+o+"]",s=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),d=function(e,t,n){var a={},i=u(function(){return!!o[e]()||"​"!="​"[e]()}),s=a[e]=i?t(l):o[e];n&&(a[n]=s),r(r.P+r.F*i,"String",a)},l=d.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(c,"")),e};e.exports=d},192:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},195:function(e,t,n){"use strict";n.d(t,"d",function(){return a}),n.d(t,"e",function(){return u}),n.d(t,"f",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return s}),n.d(t,"b",function(){return c});var r=n(187),a=function(e){return Object(r.a)({url:"".concat("/user","/login"),method:"POST",data:e})},u=function(e){return Object(r.a)({url:"".concat("/user","/retsetName"),method:"POST",data:e})},o=function(e){return Object(r.a)({url:"".concat("/user","/retsetPassword"),method:"POST",data:e})},i=function(e){return Object(r.a)({url:"".concat("/user","/getAddress"),method:"GET",data:e})},s=function(e){return Object(r.a)({url:"".concat("/user","/addAddress"),method:"POST",data:e})},c=function(e){return Object(r.a)({url:"".concat("/user","/deleteAddress"),method:"DELETE",data:e})}},338:function(e,t,n){"use strict";n.d(t,"a",function(){return i});n(190),n(73),n(74);var r=n(339),a=n.n(r),u=n(340),o=n.n(u),i=function(){function e(){a()(this,e)}return o()(e,null,[{key:"required",value:function(e){if("number"==typeof e)e=e.toString();else if("boolean"==typeof e)return!0;return e&&e.length>0}},{key:"noDuplicate",value:function(e){for(var t=0;t<e.length;t++)for(var n=0;n<e.length;n++)if(e[t]==e[n]&&t!=n)return!1;return!0}},{key:"email",value:function(e){return/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)}},{key:"tel",value:function(e){return/^1[234578]\d{9}$/.test(e)}},{key:"phone",value:function(e){return/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/.test(e)}},{key:"call",value:function(e){return/(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}\-))?(1[358]\d{9})$)/.test(e)}},{key:"fax",value:function(e){return/^(\d{3,4}-)\d{7,8}$/.test(e)}},{key:"url",value:function(e){return/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)}},{key:"date",value:function(e){return!/Invalid|NaN/.test(new Date(e).toString())}},{key:"dateISO",value:function(e){return/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)}},{key:"number",value:function(e){return/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)}},{key:"digits",value:function(e){return/^\d+$/.test(e)}},{key:"amount",value:function(e){return/^[1-9]\d*$/.test(e)}},{key:"idcard",value:function(e){return/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(e)}},{key:"equalTo",value:function(e,t){return e==t}},{key:"contains",value:function(e,t){return e.indexOf(t)>=0}},{key:"minlength",value:function(e,t){return e.length>=t}},{key:"maxlength",value:function(e,t){return e.length<=t}},{key:"rangelength",value:function(e,t){return e.length>=t[0]&&e.length<=t[1]}},{key:"min",value:function(e,t){return Number(e)>=Number(t)}},{key:"max",value:function(e,t){return Number(e)<=Number(t)}},{key:"range",value:function(e,t){return e>=t[0]&&e<=t[1]}}]),e}()},339:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},340:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},371:function(e,t,n){var r=n(408);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(18).default)("d1e8dbf6",r,!0,{sourceMap:!1})},407:function(e,t,n){"use strict";var r=n(371);n.n(r).a},408:function(e,t,n){(e.exports=n(17)(!1)).push([e.i,"\n.page-addAddress{padding:1.87733rem 0 0\n}\n.page-addAddress .mint-cell-wrapper,.page-addAddress .mint-field-core{font-size:14px\n}\n.page-addAddress .submit-btn{width:90%;display:block;margin:1.06667rem auto;height:1.70667rem;background:#56d176;border:none;color:#fff;font-size:.59733rem;border-radius:2px\n}",""])},420:function(e,t,n){"use strict";n.r(t);n(27),n(51);var r,a=n(3),u=n.n(a),o=n(22),i=n.n(o),s=n(69),c=n(23),d=n(338),l=n(195),f={data:function(){return{name:"",phone:"",address:"",details:""}},head:{title:"添加地址"},computed:i()({},Object(c.c)(["userInfo"])),mounted:function(){this.initData()},methods:{initData:function(){this.$route.query.pkid},submit:(r=u()(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(d.a.required(this.name)){e.next=3;break}return Object(s.Toast)({message:"请输入联系人",position:"bottom",duration:1500}),e.abrupt("return");case 3:if(d.a.tel(this.phone)){e.next=6;break}return Object(s.Toast)({message:"手机号格式不正确",position:"bottom",duration:1500}),e.abrupt("return");case 6:if(d.a.required(this.address)){e.next=9;break}return Object(s.Toast)({message:"请输入地址",position:"bottom",duration:1500}),e.abrupt("return");case 9:return e.next=11,Object(l.a)({name:this.name,phone:this.phone,address:this.address,details:this.details});case 11:t=e.sent,0===t.code&&(Object(s.Toast)({message:"保存成功!",position:"bottom",duration:1500}),this.$router.go(-1));case 14:case"end":return e.stop()}},e,this)})),function(){return r.apply(this,arguments)})}},p=(n(407),n(13)),m=Object(p.a)(f,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-addAddress"},[n("mt-header",{attrs:{fixed:"",title:"添加地址"}},[n("div",{attrs:{slot:"left"},on:{click:function(t){e.$router.go(-1)}},slot:"left"},[n("mt-button",{attrs:{icon:"back"}})],1)]),e._v(" "),n("mt-field",{attrs:{label:"联系人",placeholder:"你的姓名"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("mt-field",{attrs:{label:"电话",placeholder:"你的手机号",type:"tel"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),e._v(" "),n("mt-field",{attrs:{label:"地址",placeholder:"小区、写字楼、学校等"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),e._v(" "),n("mt-field",{attrs:{label:"门牌号",placeholder:"10号楼5层501室"},model:{value:e.details,callback:function(t){e.details=t},expression:"details"}}),e._v(" "),n("button",{staticClass:"submit-btn",on:{click:function(t){e.submit()}}},[e._v("保存")])],1)},[],!1,null,null,null);m.options.__file="addAddress.vue";t.default=m.exports}}]);