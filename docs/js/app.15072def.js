(function(t){function e(e){for(var n,i,s=e[0],l=e[1],u=e[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vocabulation/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:""}},[a("h1",[t._v("Vocabulation")])]),a("v-main",[a("v-container",[a("v-alert",{attrs:{dense:"",type:"warning",transition:"scale-transition",value:t.fail}},[t._v("ไม่ถูกต้อง")]),a("v-card",{staticClass:"pa-10 mt-10",attrs:{elevation:"2"}},[a("v-row",{attrs:{justify:"center"}},[t.question.thai?a("h1",[t._v(t._s(t.question.thai))]):t._e()])],1),a("v-form",{ref:"form",staticClass:"mt-5",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("v-text-field",{ref:"answer",attrs:{label:"Answer",required:"",autocomplete:"off"},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}}),a("v-btn",{attrs:{block:"",color:"success",elevation:"2",large:"",type:"submit"}},[t._v("OK")])],1),a("h1",{staticClass:"mt-10"},[t._v("คำที่ถูกก่อนหน้า")]),t.oldCorrect.thai?a("h3",{staticClass:"success--text"},[t._v(" "+t._s(t.oldCorrect.thai)+" : "+t._s(t.oldCorrect.english)+" ")]):t._e(),a("v-pagination",{staticClass:"mt-10",attrs:{length:Math.ceil(t.vocabulations.length/10),"total-visible":7},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}),a("router-view")],1)],1),a("v-footer",{attrs:{app:""}})],1)},o=[],i=a("1da1"),s=(a("96cf"),a("2591")),l=s["a"].initializeApp({apiKey:"AIzaSyA1dfFZfziaqIbLpTdHSWw3-tUwBsnlSiw",authDomain:"vocab-e1163.firebaseapp.com",databaseURL:"https://vocab-e1163-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"vocab-e1163",storageBucket:"vocab-e1163.appspot.com",messagingSenderId:"452569342327",appId:"1:452569342327:web:2442781fa4d9f16e938172",measurementId:"G-X1K9J05NBX"}),u=l.database(),c=u.ref("vocab");console.log(c);var f={name:"App",data:function(){return{fail:!1,page:1,question:{},answer:"",oldCorrect:{},vocabulations:[]}},methods:{clearAnswer:function(){this.answer=""},onSubmit:function(){this.answer===this.question.english?(this.oldCorrect=this.question,this.random(),this.fail=!1):this.fail=!0,this.clearAnswer()},random:function(){var t=10*(this.page-1),e=this.vocabulations.length-1,a=Math.floor(Math.random()*(e-t+1))+t;this.question=this.vocabulations[a]},focusAnswer:function(){this.$refs.answer.focus()}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.focusAnswer(),e.next=3,c.get();case 3:for(n in a=e.sent.val(),a)t.vocabulations.push(a[n]);t.random();case 6:case"end":return e.stop()}}),e)})))()},watch:{page:function(){this.random()}}},p=f,h=a("2877"),v=a("6544"),d=a.n(v),b=a("0798"),m=a("7496"),g=a("40dc"),w=a("8336"),y=a("b0af"),_=a("a523"),x=a("553a"),V=a("4bd4"),O=a("f6c4"),j=a("891e"),C=a("0fd9"),A=a("8654"),S=Object(h["a"])(p,r,o,!1,null,null,null),k=S.exports;d()(S,{VAlert:b["a"],VApp:m["a"],VAppBar:g["a"],VBtn:w["a"],VCard:y["a"],VContainer:_["a"],VFooter:x["a"],VForm:V["a"],VMain:O["a"],VPagination:j["a"],VRow:C["a"],VTextField:A["a"]});var q=a("f309");n["a"].use(q["a"]);var M=new q["a"]({}),P=a("8c4f"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("v-text-field",{ref:"english",attrs:{label:"English",required:""},model:{value:t.english,callback:function(e){t.english=e},expression:"english"}}),a("v-text-field",{attrs:{label:"Thai",required:""},model:{value:t.thai,callback:function(e){t.thai=e},expression:"thai"}}),a("v-btn",{staticClass:"mr-4",attrs:{type:"submit"}},[t._v(" submit ")])],1)},B=[],F={data:function(){return{english:"",thai:""}},methods:{submit:function(){c.push({english:this.english,thai:this.thai}),this.english="",this.thai="",this.$refs.english.focus()}}},I=F,$=Object(h["a"])(I,T,B,!1,null,null,null),R=$.exports;d()($,{VBtn:w["a"],VForm:V["a"],VTextField:A["a"]}),n["a"].use(P["a"]),n["a"].config.productionTip=!1;var z=[{path:"/new",component:R}],D=new P["a"]({routes:z});new n["a"]({vuetify:M,router:D,render:function(t){return t(k)}}).$mount("#app")}});
//# sourceMappingURL=app.15072def.js.map