(()=>{"use strict";var e={167:e=>{e.exports=require("axios")},53:e=>{e.exports=require("canny-edge-detector")},233:e=>{e.exports=require("image-js")},210:e=>{e.exports=require("nedb")},671:e=>{e.exports=require("regenerator-runtime")},147:e=>{e.exports=require("fs")}},t={};function n(s){var a=t[s];if(void 0!==a)return a.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=require("path");var t=n.n(e);const s=require("express");var a=n.n(s);function r(e,t,n,s,a,r,o){try{var i=e[r](o),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(s,a)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(s,a){var o=e.apply(t,n);function i(e){r(o,s,a,i,c,"next",e)}function c(e){r(o,s,a,i,c,"throw",e)}i(void 0)}))}}var i=n(671),c=n(147),u=n(167).default,p=n(210),d=n(53),l=n(233).Image;console.log(t().resolve(__dirname,"../"));var m=a()(),g=__dirname,f=t().resolve(g,"client/index.html");m.use(a().static(g)),m.use(a().json({limit:"10mb"})),m.get("/",(function(e,t){t.sendFile(f)}));var v=process.env.PORT||5e3;m.listen(v,(function(){console.log("Listening at ".concat(v))}));var x=new p("./src/server/db/citiesDatabase.db");function b(e){return h.apply(this,arguments)}function h(){return h=o(i.mark((function e(t){var n,s,a;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="./dist/client/assets/tempImages",c.existsSync(n)||c.mkdirSync(n),c.existsSync("./dist/client/assets/tempImages/image.png")&&c.unlink("./dist/client/assets/tempImages/image.png",(function(e){if(e)throw e})),c.existsSync("./dist/client/assets/tempImages/edge.png")&&c.unlink("./dist/client/assets/tempImages/edge.png",(function(e){if(e)throw e})),e.next=7,u({method:"get",url:t,responseType:"arraybuffer"});case 7:return s=e.sent,e.next=10,s.data;case 10:return a=e.sent,e.t0=c,e.next=14,a;case 14:e.t1=e.sent,e.t2=function(){var e=o(i.mark((function e(t){var n,s,a,r;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.load("./dist/client/assets/tempImages/image.png");case 2:return n=e.sent,e.next=5,n.grey();case 5:return s=e.sent,a={lowThreshold:120,highThreshold:130,gaussianBlur:.6,brightness:.8},e.next=9,d(s,a);case 9:return r=e.sent,e.abrupt("return",r.save("./dist/client/assets/tempImages/edge.png"));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.t0.writeFile.call(e.t0,"./dist/client/assets/tempImages/image.png",e.t1,e.t2),e.next=23;break;case 19:e.prev=19,e.t3=e.catch(0),console.log(e.t3),b(t);case 23:case"end":return e.stop()}}),e,null,[[0,19]])}))),h.apply(this,arguments)}x.loadDatabase(),m.get("/bkgImage/:cityname",function(){var e=o(i.mark((function e(t,n){var s,a,r,o,c,p,d,l;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.params.cityname,e.prev=1,r="https://pixabay.com/api/?key=".concat("14002767-fc7a727782d5b5a6b70bdeb00","&q=").concat(s,"&category=places&image_type=photo"),e.next=6,u.get(r);case 6:return o=e.sent,e.next=9,o.data;case 9:return c=e.sent,e.next=12,c.hits[0].largeImageURL;case 12:a=e.sent,n.json(c),b(a),e.next=37;break;case 17:return e.prev=17,e.t0=e.catch(1),e.prev=19,p="https://api.teleport.org/api/urban_areas/slug:".concat(s.toLowerCase(),"/images/"),e.next=23,u.get(p);case 23:return d=e.sent,e.next=26,d.data;case 26:return l=e.sent,e.next=29,l.photos[0].image.web;case 29:a=e.sent,n.json(l),b(a),e.next=37;break;case 34:e.prev=34,e.t1=e.catch(19),n.json(e.t1.data);case 37:case"end":return e.stop()}}),e,null,[[1,17],[19,34]])})));return function(t,n){return e.apply(this,arguments)}}()),m.post("/queryDb",(function(e,t){x.loadDatabase();var n=e.body;x.find({name:n.name},(function(e,s){e?t.end():0==s.length?t.json({status:"success",action:"Not in database",name:n.name}):t.json({status:"success",action:"read from db",name:n.name,title:s[0].title,data:s[0].data})}))})),m.post("/saveDb",(function(e,t){var n=e.body;x.insert(n),t.json({status:"success",action:"saved on database",name:n.name})})),m.get("/menu",(function(e,t){x.find({},(function(e,n){t.json({status:"success",action:"reading from db",data:n})}))})),m.post("/cancelDb",(function(e,t){var n=e.body.name;x.find({name:n},(function(e,n){x.remove({_id:n[0]._id},(function(e,n){t.json({status:"success",action:"cancel from db",data:n})}))}))}))})()})();