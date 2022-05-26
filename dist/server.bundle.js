(()=>{"use strict";var e={167:e=>{e.exports=require("axios")},53:e=>{e.exports=require("canny-edge-detector")},31:e=>{e.exports=require("cross-fetch")},233:e=>{e.exports=require("image-js")},210:e=>{e.exports=require("nedb")},671:e=>{e.exports=require("regenerator-runtime")},147:e=>{e.exports=require("fs")}},t={};function n(s){var a=t[s];if(void 0!==a)return a.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=require("path");var t=n.n(e);const s=require("express");var a=n.n(s);function r(e,t,n,s,a,r,i){try{var c=e[r](i),o=c.value}catch(e){return void n(e)}c.done?t(o):Promise.resolve(o).then(s,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(s,a){var i=e.apply(t,n);function c(e){r(i,s,a,c,o,"next",e)}function o(e){r(i,s,a,c,o,"throw",e)}c(void 0)}))}}var c=n(671),o=n(147),u=n(31),p=n(167).default,d=n(210),m=n(53),l=n(233).Image;console.log(t().resolve(__dirname,"../"));var g=a()(),f=__dirname,v=t().resolve(f,"client/index.html");g.use(a().static(f)),g.use(a().json({limit:"10mb"})),g.get("/",(function(e,t){t.sendFile(v)}));var x=process.env.PORT||5e3;g.listen(x,(function(){console.log("Listening at ".concat(x))}));var b=new d("./src/server/db/citiesDatabase.db");function h(e){return y.apply(this,arguments)}function y(){return(y=i(c.mark((function e(t){var n,s,a,r;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="./dist/client/assets/tempImages",o.existsSync(n)||o.mkdirSync(n),o.existsSync("./dist/client/assets/tempImages/image.png")&&o.unlink("./dist/client/assets/tempImages/image.png",(function(e){})),o.existsSync("./dist/client/assets/tempImages/edge.png")&&o.unlink("./dist/client/assets/tempImages/edge.png",(function(e){})),e.next=6,u(t);case 6:return s=e.sent,a=s.buffer(),e.t0=o,e.next=11,a;case 11:return e.t1=e.sent,e.t2=i(c.mark((function e(){var t,n,s,a;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.load("./dist/client/assets/tempImages/image.png");case 2:return t=e.sent,e.next=5,t.grey();case 5:return n=e.sent,s={lowThreshold:120,highThreshold:130,gaussianBlur:.6,brightness:.8},e.next=9,m(n,s);case 9:return a=e.sent,e.next=12,a.save("./dist/client/assets/tempImages/edge.png");case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)}))),r=e.t0.writeFile.call(e.t0,"./dist/client/assets/tempImages/image.png",e.t1,e.t2),e.abrupt("return",r);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}b.loadDatabase(),g.get("/bkgImage/:cityname",function(){var e=i(c.mark((function e(t,n){var s,a,r,i,o,u,d,m;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.params.cityname,e.prev=1,r="https://pixabay.com/api/?key=".concat("14002767-fc7a727782d5b5a6b70bdeb00","&q=").concat(s,"&category=travel&image_type=photo"),e.next=6,p.get(r);case 6:return i=e.sent,e.next=9,i.data;case 9:return o=e.sent,e.next=12,o.hits[0].largeImageURL;case 12:a=e.sent,n.json(o);try{h(a)}catch(e){h(a)}e.next=37;break;case 17:return e.prev=17,e.t0=e.catch(1),e.prev=19,u="https://api.teleport.org/api/urban_areas/slug:".concat(s.toLowerCase(),"/images/"),e.next=23,p.get(u);case 23:return d=e.sent,e.next=26,d.data;case 26:return m=e.sent,e.next=29,m.photos[0].image.web;case 29:a=e.sent,n.json(m),h(a),e.next=37;break;case 34:e.prev=34,e.t1=e.catch(19),n.json(e.t1.data);case 37:case"end":return e.stop()}}),e,null,[[1,17],[19,34]])})));return function(t,n){return e.apply(this,arguments)}}()),g.post("/queryDb",(function(e,t){b.loadDatabase();var n=e.body;b.find({name:n.name},(function(e,s){e?t.end():0==s.length?t.json({status:"success",action:"Not in database",name:n.name}):t.json({status:"success",action:"read from db",name:n.name,title:s[0].title,data:s[0].data})}))})),g.post("/saveDb",(function(e,t){var n=e.body;b.insert(n),t.json({status:"success",action:"saved on database",name:n.name})})),g.get("/menu",(function(e,t){b.find({},(function(e,n){t.json({status:"success",action:"reading from db",data:n})}))})),g.post("/cancelDb",(function(e,t){var n=e.body.name;b.find({name:n},(function(e,n){b.remove({_id:n[0]._id},(function(e,n){t.json({status:"success",action:"cancel from db",data:n})}))}))}))})()})();