(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{372:function(e,t,l){},485:function(e,t,l){"use strict";var a=l(372);l.n(a).a},654:function(e,t,l){"use strict";l.r(t);var a={name:"",data:function(){return{colorx:"#103767",select1:3,select2:"primary",options1:[{text:"Square",value:1},{text:"Rectangle",value:2},{text:"Rombo",value:3},{text:"Romboid",value:4},{text:"Trapeze",value:5},{text:"Triangle",value:6},{text:"Polygon",value:7},{text:"Regular polygon",value:8},{text:"Circumference",value:9},{text:"Circle",value:10},{text:"Circular sector",value:11},{text:"Circular trapeze",value:12}],options2:[{text:"Primary",value:"primary"},{text:"Success",value:"success"},{text:"Danger",value:"danger"},{text:"Warning",value:"warning"},{text:"Dark",value:"dark"}]}},methods:{prueba:function(){console.log("prueba de focsu")}}},s=(l(485),l(0)),o=Object(s.a)(a,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"con-select-example"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.colorx,expression:"colorx"}],attrs:{type:"color",name:"",value:""},domProps:{value:e.colorx},on:{input:function(t){t.target.composing||(e.colorx=t.target.value)}}}),l("vs-select",{staticClass:"selectExample",attrs:{"vs-color":e.colorx,label:"Figuras"},model:{value:e.select1,callback:function(t){e.select1=t},expression:"select1"}},e._l(e.options1,function(e,t){return l("vs-select-item",{key:t,attrs:{"vs-value":e.value,"vs-text":e.text}})})),l("vs-select",{staticClass:"selectExample",attrs:{"vs-color":e.select2,label:"Figuras"},model:{value:e.select2,callback:function(t){e.select2=t},expression:"select2"}},e._l(e.options2,function(e,t){return l("vs-select-item",{key:t,attrs:{"vs-value":e.value,"vs-text":e.text}})}))],1)},[],!1,null,null,null);t.default=o.exports}}]);