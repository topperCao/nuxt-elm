(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{186:function(t,e){t.exports={IS_RELEASE:!0,BASE_URL:"http://localhost:3000/api",IMG_URL:"https://easytuan.gitee.io/node-elm-api/public/",HEADERS:{"Content-Type":"application/json;charset=UTF-8"},TIMEOUT:12e3}},187:function(t,e,a){"use strict";a(51);var n=a(3),r=a.n(n),i=a(70),s=a.n(i),o=a(186),c=a.n(o),l=a(69);s.a.defaults.baseURL=c.a.BASE_URL,s.a.defaults.timeout=c.a.TIMEOUT,s.a.defaults.headers=c.a.HEADERS,s.a.interceptors.request.use(function(t){return c.a.IS_RELEASE||console.log("".concat((new Date).toLocaleString(),"【 M=").concat(t.url," 】P="),t.params||t.data),t},function(t){return Promise.reject(t)}),e.a=r()(regeneratorRuntime.mark(function t(){var e,a,n,r=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{method:"GET"},a=!0,"POST"!==e.method.toUpperCase()&&"PUT"!==e.method.toUpperCase()&&"PATCH"!==e.method.toUpperCase()&&(a=!1),t.next=5,s()({method:e.method,url:e.url,data:a?e.data:null,params:a?null:e.data});case 5:if(!((n=t.sent).status>=200&&n.status<300)){t.next=12;break}return c.a.IS_RELEASE||console.log("".concat((new Date).toLocaleString(),"【接口响应：】"),n.data),"undefined"!=typeof window&&0!==n.data.code&&Object(l.Toast)(n.data.msg),t.abrupt("return",n.data);case 12:"undefined"!=typeof window&&0!==n.data.code&&Object(l.Toast)("请求错误");case 13:case"end":return t.stop()}},t,this)}))},188:function(t,e,a){var n=a(198);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(18).default)("24adb7b2",n,!0,{sourceMap:!1})},189:function(t,e,a){var n=a(202);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(18).default)("53dad9a6",n,!0,{sourceMap:!1})},196:function(t,e,a){"use strict";a.d(e,"c",function(){return i}),a.d(e,"d",function(){return s}),a.d(e,"a",function(){return o}),a.d(e,"b",function(){return c});var n=a(187),r="/shopping",i=function(t){return Object(n.a)({url:"".concat(r,"/restaurants"),method:"GET",data:t})},s=function(t){return Object(n.a)({url:"".concat(r,"/seller"),method:"GET",data:t})},o=function(t){return Object(n.a)({url:"".concat(r,"/goods"),method:"GET",data:t})},c=function(t){return Object(n.a)({url:"".concat(r,"/ratings"),method:"GET",data:t})}},197:function(t,e,a){"use strict";var n=a(188);a.n(n).a},198:function(t,e,a){(t.exports=a(17)(!1)).push([t.i,"\n.mint-tabbar>.mint-tab-item.is-selected[data-v-eb6c6784]{background:#fafafa\n}\n.mint-tab-item-icon[data-v-eb6c6784]{width:22px;height:22px\n}\n.mint-tabbar[data-v-eb6c6784]{color:#818181;position:fixed\n}\n.mint-tabbar>.mint-tab-item.is-selected[data-v-eb6c6784]{color:#4aa5f0\n}",""])},201:function(t,e,a){"use strict";var n=a(189);a.n(n).a},202:function(t,e,a){(t.exports=a(17)(!1)).push([t.i,"\n.rating_container[data-v-5bf05df5]{position:relative;top:.1rem;width:2rem;height:.4rem\n}\n.rating_container .star_overflow[data-v-5bf05df5]{overflow:hidden;position:relative;height:100%\n}\n.rating_container .star_container[data-v-5bf05df5]{position:absolute;display:flex;width:2rem;height:.4rem;top:-.02rem;left:-.02rem\n}\n.rating_container .star_container .grey_fill[data-v-5bf05df5]{fill:#d1d1d1\n}\n.rating_container .star_container .orange_fill[data-v-5bf05df5]{fill:#f8ce46\n}",""])},205:function(t,e,a){var n=a(362);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(18).default)("5743b3de",n,!0,{sourceMap:!1})},206:function(t,e,a){"use strict";var n={props:["rating"]},r=(a(201),a(13)),i=Object(r.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rating_container"},[e("section",{staticClass:"star_container"},this._l(5,function(t){return e("svg",{key:t,staticClass:"grey_fill"},[e("svg",{attrs:{id:"star",viewBox:"0 0 32 32",width:"100%",height:"100%"}},[e("path",{staticClass:"path1",attrs:{d:"M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"}})])])})),this._v(" "),e("div",{staticClass:"star_overflow",style:"width:"+2*this.rating/5+"rem"},[e("section",{staticClass:"star_container"},this._l(5,function(t){return e("svg",{key:t,staticClass:"orange_fill"},[e("svg",{attrs:{id:"star",viewBox:"0 0 32 32",width:"100%",height:"100%"}},[e("path",{staticClass:"path1",attrs:{d:"M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"}})])])}))])])},[],!1,null,"5bf05df5",null);i.options.__file="ratingStar.vue";e.a=i.exports},207:function(t,e,a){"use strict";a(54);var n={props:{page:{default:0}},data:function(){return{selected:0}},created:function(){this.selected=this.page},methods:{goPage:function(t){this.$router.replace(t)}}},r=(a(197),a(13)),i=Object(r.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mt-tabbar",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("mt-tab-item",{attrs:{id:"0"}},[a("div",{on:{click:function(e){t.goPage("/")}}},[a("div",{staticClass:"mint-tab-item-icon"},[0==t.selected?a("svg",{attrs:{viewBox:"0 0 22 22",width:"100%",height:"100%"}},[a("path",{attrs:{fill:"#4aa5f0","fill-rule":"evenodd",d:"M16.822 17.089l.456.707c.212.33.14.778-.174 1.033a9.91 9.91 0 0 1-.767.555 9.817 9.817 0 0 1-7.473 1.395 9.867 9.867 0 0 1-6.265-4.334C-.383 11.822.927 5.618 5.52 2.616a9.81 9.81 0 0 1 7.475-1.394 9.866 9.866 0 0 1 6.264 4.334c.166.258.323.528.466.803.19.385.072.82-.262 1.039l-9.05 5.916a.783.783 0 0 1-1.086-.232l-.47-.73a1.668 1.668 0 0 1 .484-2.295l5.766-3.769a.286.286 0 0 0 .03-.455 6.576 6.576 0 0 0-7.821-.434 6.636 6.636 0 0 0-2.877 4.213 6.671 6.671 0 0 0 .926 5.026c1.99 3.085 6.104 3.968 9.17 1.969a1.65 1.65 0 0 1 2.288.482zm3.878-5.445c.56.863.314 2.02-.549 2.58l-.906.59a.786.786 0 0 1-1.086-.232l-1.177-1.812a.787.787 0 0 1 .23-1.086l1.813-1.176a.783.783 0 0 1 1.086.23l.589.906z"}})]):t._e(),t._v(" "),0!=t.selected?a("svg",{attrs:{viewBox:"0 0 22 22",width:"100%",height:"100%"}},[a("path",{attrs:{fill:"#818181","fill-rule":"nonzero",d:"M7.924 6.273A5.597 5.597 0 0 0 5.48 9.828a5.596 5.596 0 0 0 .787 4.242 5.646 5.646 0 0 0 7.793 1.66 2.188 2.188 0 0 1 3.02.638l.43.663c.377.58.247 1.358-.3 1.798a10 10 0 0 1-.771.555 9.93 9.93 0 0 1-7.523 1.395 9.937 9.937 0 0 1-6.306-4.334C-.393 11.82.926 5.618 5.55 2.615a9.935 9.935 0 0 1 7.523-1.393 9.937 9.937 0 0 1 6.781 5.148c.318.64.12 1.396-.467 1.777l-8.54 5.546c-.632.41-1.478.23-1.89-.401l-.443-.684a2.182 2.182 0 0 1 .641-3.016l5.011-3.255a5.612 5.612 0 0 0-6.242-.064zm6.813 10.507c-3.184 2.062-7.453 1.152-9.519-2.03a6.846 6.846 0 0 1-.96-5.182 6.847 6.847 0 0 1 2.986-4.344 6.869 6.869 0 0 1 8.13.46.892.892 0 0 1-.098 1.422l-5.44 3.534a.932.932 0 0 0-.274 1.287l.444.684a.117.117 0 0 0 .16.034l8.54-5.547c.05-.032.067-.095.035-.16a8.687 8.687 0 0 0-5.928-4.494 8.685 8.685 0 0 0-6.583 1.22c-4.044 2.627-5.198 8.056-2.572 12.1a8.686 8.686 0 0 0 5.517 3.792 8.68 8.68 0 0 0 6.583-1.22c.231-.15.458-.314.672-.483.047-.038.057-.102.032-.142l-.43-.662a.938.938 0 0 0-1.295-.269zm5.88-5.517c.714 1.099.4 2.571-.697 3.284l-.851.553a1.362 1.362 0 0 1-1.882-.401l-1.103-1.7a1.362 1.362 0 0 1 .4-1.882l1.699-1.102a1.357 1.357 0 0 1 1.883.399l.552.85zm-1.6-.168a.107.107 0 0 0-.07-.048.107.107 0 0 0-.083.016l-1.699 1.102a.112.112 0 0 0-.032.154l1.102 1.698c.021.032.056.05.095.05a.108.108 0 0 0 .06-.016l.849-.552c.519-.337.667-1.035.33-1.555l-.551-.849z"}})]):t._e()]),t._v("\n      首页\n    ")])]),t._v(" "),a("mt-tab-item",{attrs:{id:"1"}},[a("div",{on:{click:function(e){t.goPage("/discover")}}},[a("div",{staticClass:"mint-tab-item-icon"},[1==t.selected?a("svg",{attrs:{viewBox:"0 0 22 22",width:"100%",height:"100%"}},[a("path",{attrs:{fill:"#4aa5f0","fill-rule":"evenodd",d:"M3.929 3.929c3.899-3.9 10.243-3.9 14.142 0 3.899 3.899 3.899 10.243 0 14.142-3.899 3.9-10.243 3.9-14.142 0-3.9-3.899-3.9-10.243 0-14.142zM14.639 7a.363.363 0 0 0-.146.03l-4.39 1.901c-.254.11-.493.264-.701.471a2.23 2.23 0 0 0-.476.712l-1.896 4.38a.363.363 0 0 0 .476.476l4.38-1.896a2.203 2.203 0 0 0 1.183-1.178l1.9-4.39A.363.363 0 0 0 14.64 7zM11 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"}})]):t._e(),t._v(" "),1!=t.selected?a("svg",{attrs:{viewBox:"0 0 22 22",width:"100%",height:"100%"}},[a("path",{attrs:{fill:"#818181","fill-rule":"nonzero",d:"M16.62 2.727a.75.75 0 0 1-.844 1.24 8.455 8.455 0 0 0-4.095-1.44 8.5 8.5 0 0 0-9.153 7.792 8.499 8.499 0 0 0 7.79 9.153 8.5 8.5 0 0 0 9.154-7.791 8.46 8.46 0 0 0-1.435-5.449.75.75 0 1 1 1.24-.842 9.96 9.96 0 0 1 1.69 6.411c-.442 5.505-5.264 9.609-10.768 9.166-5.505-.442-9.61-5.263-9.166-10.768C1.475 4.694 6.296.59 11.8 1.033c1.75.14 3.398.727 4.819 1.694zM14.638 7c.244 0 .44.254.331.506l-1.9 4.39c-.11.255-.264.494-.471.702-.21.21-.454.367-.712.476l-4.38 1.895a.363.363 0 0 1-.476-.476l1.895-4.38c.11-.258.266-.5.477-.711.207-.208.447-.362.7-.471l4.391-1.9A.367.367 0 0 1 14.638 7zM12.45 9.55l-1.751.757a.737.737 0 0 0-.237.156.753.753 0 0 0-.156.236l-.758 1.752 1.742-.753a.766.766 0 0 0 .247-.161.733.733 0 0 0 .154-.234l.76-1.754z"}})]):t._e()]),t._v("\n      发现\n    ")])]),t._v(" "),a("mt-tab-item",{attrs:{id:"2"}},[a("div",{on:{click:function(e){t.goPage("/order")}}},[a("div",{staticClass:"mint-tab-item-icon"},[2==t.selected?a("svg",{attrs:{viewBox:"0 0 22 22",width:"100%",height:"100%"}},[a("path",{attrs:{fill:"#4aa5f0","fill-rule":"evenodd",d:"M2.75 1.5h16.5a.75.75 0 0 1 .75.75v11.5a6.758 6.758 0 0 1-6.75 6.75H2.75a.75.75 0 0 1-.75-.75V2.25a.75.75 0 0 1 .75-.75zm12 6.5a.75.75 0 0 0 0-1.5h-7.5a.75.75 0 0 0 0 1.5h7.5zm-3.002 5.003a.75.75 0 0 0 0-1.5H7.25a.75.75 0 0 0 0 1.5h4.498z"}})]):t._e(),t._v(" "),2!=t.selected?a("svg",{attrs:{viewBox:"0 0 22 22",width:"100%",height:"100%"}},[a("path",{attrs:{fill:"#818181","fill-rule":"nonzero",d:"M7.25 8a.75.75 0 0 1 0-1.5h7.5a.75.75 0 1 1 0 1.5h-7.5zm0 5.004a.75.75 0 1 1 0-1.5h4.498a.75.75 0 1 1 0 1.5H7.25zM3.5 3v16h9.75c2.9 0 5.25-2.35 5.25-5.25V5.748a.75.75 0 1 1 1.5 0v8.002a6.75 6.75 0 0 1-6.75 6.75H2.75a.75.75 0 0 1-.75-.75V2.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 1 1 0 1.5H3.5z"}})]):t._e()]),t._v("\n      订单\n    ")])]),t._v(" "),a("mt-tab-item",{attrs:{id:"3"}},[a("div",{on:{click:function(e){t.goPage("/user")}}},[a("div",{staticClass:"mint-tab-item-icon"},[3==t.selected?a("svg",{attrs:{viewBox:"0 0 22 22",width:"100%",height:"100%"}},[a("path",{attrs:{fill:"#4aa5f0","fill-rule":"evenodd",d:"M11 1c2.757 0 5 2.243 5 5v1c0 2.757-2.243 5-5 5S6 9.757 6 7V6c0-2.757 2.243-5 5-5zm5.967 10.071A6.76 6.76 0 0 1 21 17.251v3a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75v-3a6.76 6.76 0 0 1 4.033-6.18.992.992 0 0 1 1.135.263A6.476 6.476 0 0 0 11 13.5c1.919 0 3.642-.84 4.832-2.166a.993.993 0 0 1 1.135-.263z"}})]):t._e(),t._v(" "),3!=t.selected?a("svg",{attrs:{viewBox:"0 0 22 22",width:"100%",height:"100%"}},[a("path",{attrs:{fill:"#818181","fill-rule":"nonzero",d:"M10.955 12H7.75a5.25 5.25 0 0 0-5.25 5.25v2.25h17v-2.25a5.244 5.244 0 0 0-2.626-4.548.75.75 0 0 1 .75-1.3l.183.11A6.745 6.745 0 0 1 21 17.25v3a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75v-3a6.75 6.75 0 0 1 6.436-6.743A4.984 4.984 0 0 1 6 7V6a5 5 0 0 1 10 0v1a5 5 0 0 1-5.045 5zM11 10.5A3.5 3.5 0 0 0 14.5 7V6a3.5 3.5 0 0 0-7 0v1a3.5 3.5 0 0 0 3.5 3.5z"}})]):t._e()]),t._v("\n      我的\n    ")])])],1)},[],!1,null,"eb6c6784",null);i.options.__file="tabbar.vue";e.a=i.exports},357:function(t,e,a){var n=a(358),r=a(359),i=a(360);t.exports=function(t){return n(t)||r(t)||i()}},358:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}},359:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},360:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},361:function(t,e,a){"use strict";var n=a(205);a.n(n).a},362:function(t,e,a){(t.exports=a(17)(!1)).push([t.i,'\n@charset "UTF-8";\n.shoplist_container[data-v-2c527275]{background-color:#fff\n}\n.shop_li[data-v-2c527275]{display:flex;border-bottom:.025rem solid #f1f1f1;padding:.7rem .4rem\n}\n.shop_img[data-v-2c527275]{width:2.7rem;height:2.7rem;display:block;margin-right:.4rem\n}\n.list_back_li[data-v-2c527275]{height:4.85rem\n}\n.list_back_li .list_back_svg[data-v-2c527275]{width:100%;height:100%\n}\n.shop_right[data-v-2c527275]{flex:auto\n}\n.shop_right .shop_detail_header[data-v-2c527275]{display:flex;justify-content:space-between;align-items:center\n}\n.shop_right .shop_detail_header .shop_title[data-v-2c527275]{width:8.5rem;color:#333;padding-top:.01rem;font:.65rem/.65rem PingFangSC-Regular;font-weight:700\n}\n.shop_right .shop_detail_header .premium[data-v-2c527275]:before{content:"\\54C1\\724C";display:inline-block;font-size:.5rem;line-height:.6rem;color:#333;background-color:#ffd930;padding:0 .1rem;border-radius:.1rem;margin-right:.2rem\n}\n.shop_right .shop_detail_header .shop_detail_ul[data-v-2c527275]{display:flex;-webkit-transform:scale(.8);transform:scale(.8);margin-right:-.3rem\n}\n.shop_right .shop_detail_header .shop_detail_ul .supports[data-v-2c527275]{font-size:.5rem;color:#999;border:.025rem solid #f1f1f1;padding:0 .04rem;border-radius:.08rem;margin-left:.05rem\n}\n.shop_right .rating_order_num[data-v-2c527275]{display:flex;justify-content:space-between;height:.6rem;margin-top:.52rem\n}\n.shop_right .rating_order_num .rating_order_num_left[data-v-2c527275]{display:flex;justify-content:flex-start\n}\n.shop_right .rating_order_num .rating_order_num_left .rating_section[data-v-2c527275]{display:flex\n}\n.shop_right .rating_order_num .rating_order_num_left .rating_section .rating_num[data-v-2c527275]{font-size:.4rem;color:#ff6000;margin:0 .2rem\n}\n.shop_right .rating_order_num .rating_order_num_left .order_section[data-v-2c527275]{-webkit-transform:scale(.8);transform:scale(.8);margin-left:-.2rem;font-size:.4rem;color:#666\n}\n.shop_right .rating_order_num .rating_order_num_right[data-v-2c527275]{display:flex;align-items:center;-webkit-transform:scale(.7);transform:scale(.7);min-width:5rem;justify-content:flex-end;margin-right:-.8rem\n}\n.shop_right .rating_order_num .rating_order_num_right .delivery_style[data-v-2c527275]{font-size:.4rem;padding:.04rem .08rem 0;border-radius:.08rem;margin-left:.08rem;border:1px\n}\n.shop_right .rating_order_num .rating_order_num_right .delivery_left[data-v-2c527275]{color:#fff;background-color:#1070ff;border:.025rem solid #1070ff\n}\n.shop_right .rating_order_num .rating_order_num_right .delivery_right[data-v-2c527275]{color:#1070ff;border:.025rem solid #1070ff\n}\n.shop_right .fee_distance[data-v-2c527275]{margin-top:.52rem;display:flex;justify-content:space-between;font-size:.5rem;color:#333\n}\n.shop_right .fee_distance .fee[data-v-2c527275]{font-size:.5rem;color:#666\n}\n.shop_right .fee_distance .distance_time[data-v-2c527275],.shop_right .fee_distance .fee[data-v-2c527275]{-webkit-transform:scale(.9);transform:scale(.9)\n}\n.shop_right .fee_distance .distance_time span[data-v-2c527275]{color:#999\n}\n.shop_right .fee_distance .distance_time .order_time[data-v-2c527275]{color:#1070ff\n}\n.shop_right .fee_distance .distance_time .segmentation[data-v-2c527275]{color:#ccc\n}\n.loader_more[data-v-2c527275]{font:.6rem/3 Microsoft YaHei;text-align:center;color:#999\n}\n.empty_data[data-v-2c527275]{font-size:.5rem;color:#666;text-align:center;line-height:2rem\n}\n.return_top[data-v-2c527275]{position:fixed;bottom:3rem;right:1rem\n}\n.return_top .back_top_svg[data-v-2c527275]{width:2rem;height:2rem\n}\n.loading-enter-active[data-v-2c527275],.loading-leave-active[data-v-2c527275]{transition:opacity 1s\n}\n.loading-enter[data-v-2c527275],.loading-leave-active[data-v-2c527275]{opacity:0\n}',""])},373:function(t,e,a){var n=a(412);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(18).default)("798c3abc",n,!0,{sourceMap:!1})},374:function(t,e,a){"use strict";a(21);var n,r,i,s=a(357),o=a.n(s),c=(a(51),a(3)),l=a.n(c),d=a(206),h=a(186),u=a.n(h),p=a(196),f={components:{ratingStar:d.a},props:["restaurantCategoryId","restaurantCategoryIds","sortByType","deliveryMode","supportIds","confirmSelect","geohash"],data:function(){return{offset:0,shopListArr:[],preventRepeatReuqest:!1,showBackStatus:!1,touchend:!1}},watch:{restaurantCategoryIds:function(t){this.listenPropChange()},sortByType:function(t){this.listenPropChange()},confirmSelect:function(t){this.listenPropChange()}},mounted:function(){this.initData()},methods:{initData:(i=l()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.c)();case 2:(e=t.sent).data.map(function(t){t.image_path=u.a.IMG_URL+t.image_path}),this.shopListArr=o()(e.data),e.data.length<20&&(this.touchend=!0);case 6:case"end":return t.stop()}},t,this)})),function(){return i.apply(this,arguments)}),loaderMore:(r=l()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.touchend){t.next=2;break}return t.abrupt("return");case 2:if(!this.preventRepeatReuqest){t.next=4;break}return t.abrupt("return");case 4:return this.preventRepeatReuqest=!0,this.offset+=20,t.next=8,shopList(this.latitude,this.longitude,this.offset,this.restaurantCategoryId);case 8:if(e=t.sent,this.shopListArr=o()(this.shopListArr).concat(o()(e)),!(e.length<20)){t.next=13;break}return this.touchend=!0,t.abrupt("return");case 13:this.preventRepeatReuqest=!1;case 14:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)}),backTop:function(){animate(document.body,{scrollTop:"0"},400,"ease-out")},listenPropChange:(n=l()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.offset=0,t.next=3,shopList(this.latitude,this.longitude,this.offset,"",this.restaurantCategoryIds,this.sortByType,this.deliveryMode,this.supportIds);case 3:e=t.sent,this.hideLoading(),this.shopListArr=o()(e);case 6:case"end":return t.stop()}},t,this)})),function(){return n.apply(this,arguments)}),zhunshi:function(t){var e;return t instanceof Array&&t.length?t.forEach(function(t){"准"===t.icon_name&&(e=!0)}):e=!1,e}}},_=(a(361),a(13)),m=Object(_.a)(f,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shoplist_container"},[t.shopListArr.length?a("ul",{attrs:{type:"1"}},t._l(t.shopListArr,function(e){return a("router-link",{key:e.id,staticClass:"shop_li",attrs:{to:{path:"shop",query:{geohash:t.geohash,id:e.id}}}},[a("section",[a("img",{staticClass:"shop_img",attrs:{src:e.image_path}})]),t._v(" "),a("hgroup",{staticClass:"shop_right"},[a("header",{staticClass:"shop_detail_header"},[a("h4",{staticClass:"shop_title ellipsis",class:e.is_premium?"premium":""},[t._v(t._s(e.name))]),t._v(" "),a("ul",{staticClass:"shop_detail_ul"},t._l(e.supports,function(e){return a("li",{key:e.id,staticClass:"supports"},[t._v(t._s(e.icon_name))])}))]),t._v(" "),a("h5",{staticClass:"rating_order_num"},[a("section",{staticClass:"rating_order_num_left"},[a("section",{staticClass:"rating_section"},[a("rating-star",{attrs:{rating:e.rating}}),t._v(" "),a("span",{staticClass:"rating_num"},[t._v(t._s(e.rating))])],1),t._v(" "),a("section",{staticClass:"order_section"},[t._v("\n              月售"+t._s(e.recent_order_num)+"单\n            ")])]),t._v(" "),a("section",{staticClass:"rating_order_num_right"},[e.delivery_mode?a("span",{staticClass:"delivery_style delivery_left"},[t._v(t._s(e.delivery_mode.text))]):t._e(),t._v(" "),t.zhunshi(e.supports)?a("span",{staticClass:"delivery_style delivery_right"},[t._v("准时达")]):t._e()])]),t._v(" "),a("h5",{staticClass:"fee_distance"},[a("p",{staticClass:"fee"},[t._v("\n            ¥"+t._s(e.float_minimum_order_amount)+"起送\n            "),a("span",{staticClass:"segmentation"},[t._v("/")]),t._v("\n            "+t._s(e.piecewise_agent_fee&&e.piecewise_agent_fee.tips)+"\n          ")]),t._v(" "),a("p",{staticClass:"distance_time"},[Number(e.distance)?a("span",[t._v(t._s(e.distance>1e3?(e.distance/1e3).toFixed(2)+"km":e.distance+"m")+"\n              "),a("span",{staticClass:"segmentation"},[t._v("/")])]):a("span",[t._v(t._s(e.distance))]),t._v(" "),a("span",{staticClass:"segmentation"},[t._v("/")]),t._v(" "),a("span",{staticClass:"order_time"},[t._v(t._s(e.order_lead_time))])])])])])})):t._e(),t._v(" "),t.touchend?a("p",{staticClass:"empty_data"},[t._v("没有更多了")]):t._e(),t._v(" "),t.showBackStatus?a("aside",{staticClass:"return_top",on:{click:t.backTop}},[a("svg",{staticClass:"back_top_svg"},[a("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#backtop"}})])]):t._e(),t._v(" "),a("div",{ref:"abc",staticStyle:{"background-color":"red"}})])},[],!1,null,"2c527275",null);m.options.__file="shopList.vue";e.a=m.exports},411:function(t,e,a){"use strict";var n=a(373);a.n(n).a},412:function(t,e,a){(t.exports=a(17)(!1)).push([t.i,"\n.home-page{background-color:#fff;padding:1.87733rem 0 53px\n}\n.home-page .nav-container{display:flex;justify-content:space-between;flex-wrap:wrap;margin-bottom:.64rem\n}\n.home-page .nav-container .nav-item{width:20%;height:80px;text-align:center;color:#666;font-size:.512rem;padding-top:.21333rem\n}\n.home-page .nav-container .nav-item img{display:block;margin:0 auto;width:50px;height:50px\n}\n.home-page .swiper{padding:0 .4rem\n}\n.home-page .shoplist-title{display:flex;justify-content:center;font-size:.64rem;margin-bottom:.42667rem\n}\n.home-page .show-list{padding:0 .4rem\n}\n.home-page .show-list a{display:inline-block;width:49%;height:auto;float:left\n}\n.home-page .show-list a:last-of-type{float:right\n}",""])},414:function(t,e,a){"use strict";a.r(e);a(51);var n,r=a(3),i=a.n(r),s=a(207),o=a(374),c=a(186),l=a.n(c),d=a(187),h={components:{Tabbar:s.a,ShopList:o.a},data:function(){return{data:"静安区",navList:[],show1:"".concat(l.a.IMG_URL,"show1.png"),show2:"".concat(l.a.IMG_URL,"show2.png"),bannerList:["".concat(l.a.IMG_URL,"banner/4a6f8262a2a006c0bd6ba31b137c4jpeg.png"),"".concat(l.a.IMG_URL,"banner/146be328e7121c456ac67f54b59fbjpeg.png"),"".concat(l.a.IMG_URL,"banner/b28f567a846a21f01aa39a55d6facjpeg.png")]}},asyncData:(n=i()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a=void 0,Object(d.a)({url:"".concat("/common","/getHomeData"),method:"GET",data:a});case 2:return(e=t.sent).data.map(function(t){t.imgUrl=l.a.IMG_URL+t.imgUrl}),t.abrupt("return",{navList:e.data});case 5:case"end":return t.stop()}var a},t,this)})),function(){return n.apply(this,arguments)})},u=(a(411),a(13)),p=Object(u.a)(h,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-page"},[a("mt-header",{attrs:{fixed:"",title:"静安区"}},[a("mt-button",{attrs:{slot:"right",icon:"search"},on:{click:function(e){t.$router.push("/search")}},slot:"right"})],1),t._v(" "),a("nav",{staticClass:"nav-container"},t._l(t.navList,function(e,n){return a("div",{key:n,staticClass:"nav-item",on:{click:function(a){t.$router.push({path:"/newretail",query:{title:e.text}})}}},[a("img",{attrs:{src:e.imgUrl,alt:""}}),t._v("\n      "+t._s(e.text)+"\n    ")])})),t._v(" "),a("div",{staticClass:"show-list"},[a("a",{attrs:{href:"https://h5.ele.me/ranking/#type=quality_meal&activity_id=1&title=%E5%93%81%E8%B4%A8%E5%A5%97%E9%A4%90&navType=0&geohash=wtw3ycy6v7pe"}},[a("img",{attrs:{src:t.show1,alt:""}})]),t._v(" "),a("a",{attrs:{href:"https://h5.ele.me/sales/#geohash=wtw3ycy6v7pe"}},[a("img",{attrs:{src:t.show2,alt:""}})])]),t._v(" "),a("div",{staticStyle:{height:"5px",clear:"both"}}),t._v(" "),a("div",{staticClass:"swiper"},[a("mt-swipe",{staticStyle:{height:"100px"},attrs:{auto:3e3}},t._l(t.bannerList,function(t,e){return a("mt-swipe-item",{key:e},[a("img",{attrs:{src:t,alt:""}})])}))],1),t._v(" "),a("div",{staticStyle:{height:"10px",clear:"both"}}),t._v(" "),a("p",{staticClass:"shoplist-title"},[t._v("—— 推荐商家 ——")]),t._v(" "),a("ShopList"),t._v(" "),a("Tabbar",{attrs:{page:"0"}})],1)},[],!1,null,null,null);p.options.__file="index.vue";e.default=p.exports}}]);