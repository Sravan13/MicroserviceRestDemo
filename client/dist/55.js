webpackJsonp([55],{448:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function l(){}Object.defineProperty(t,"__esModule",{value:!0});var s=a(9),i=r(s),o=a(3),c=r(o),u=a(8),d=r(u),f=a(5),p=r(f),m=a(4),g=r(m),E=a(1),y=n(E),h=a(10),w=n(h),x=a(30),v=r(x),D=a(14),b=r(D),I=a(7),T=r(I),W=function(e){function t(e){(0,c.default)(this,t);var a=(0,p.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClose=function(e){e.preventDefault();var t=w.findDOMNode(a);t.style.height=t.offsetHeight+"px",t.style.height=t.offsetHeight+"px",a.setState({closing:!1}),(a.props.onClose||l)(e)},a.animationEnd=function(){a.setState({closed:!0,closing:!0}),(a.props.afterClose||l)()},a.state={closing:!0,closed:!1},a}return(0,g.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e,t=this.props,a=t.closable,n=t.description,r=t.type,l=t.prefixCls,s=void 0===l?"ant-alert":l,o=t.message,c=t.closeText,u=t.showIcon,d=t.banner,f=t.className,p=void 0===f?"":f,m=t.style,g=t.iconType;if(u=!(!d||void 0!==u)||u,r=d&&void 0===r?"warning":r||"info",!g){switch(r){case"success":g="check-circle";break;case"info":g="info-circle";break;case"error":g="cross-circle";break;case"warning":g="exclamation-circle";break;default:g="default"}n&&(g+="-o")}var E=(0,T.default)(s,(e={},(0,i.default)(e,s+"-"+r,!0),(0,i.default)(e,s+"-close",!this.state.closing),(0,i.default)(e,s+"-with-description",!!n),(0,i.default)(e,s+"-no-icon",!u),(0,i.default)(e,s+"-banner",!!d),e),p);c&&(a=!0);var h=a?y.createElement("a",{onClick:this.handleClose,className:s+"-close-icon"},c||y.createElement(b.default,{type:"cross"})):null;return this.state.closed?null:y.createElement(v.default,{component:"",showProp:"data-show",transitionName:s+"-slide-up",onEnd:this.animationEnd},y.createElement("div",{"data-show":this.state.closing,className:E,style:m},u?y.createElement(b.default,{className:s+"-icon",type:g}):null,y.createElement("span",{className:s+"-message"},o),y.createElement("span",{className:s+"-description"},n),h))}}]),t}(y.Component);t.default=W,e.exports=t.default},449:[1970,456],456:11,1217:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(37),l=n(r),s=a(42),i=n(s),o=a(47),c=n(o),u=a(448),d=n(u);a(40),a(43),a(48),a(449);var f=a(1),p=n(f),m=function(e){console.log(e,"I was closed.")},g=function(){return p.default.createElement("div",null," ",p.default.createElement(l.default,{gutter:10},p.default.createElement(i.default,{xs:24,md:12,lg:12},p.default.createElement(c.default,{title:"Basic Success Alert"},p.default.createElement(d.default,{message:"Success Alert",type:"success"})),p.default.createElement(c.default,{title:"Basic Info Alert"},p.default.createElement("div",null,p.default.createElement(d.default,{message:"Info Alert",type:"info"}))),p.default.createElement(c.default,{title:"Basic Warning Alert"},p.default.createElement("div",null,p.default.createElement(d.default,{message:"Warning Alert",type:"warning"}))),p.default.createElement(c.default,{title:"Basic Error Alert"},p.default.createElement("div",null,p.default.createElement(d.default,{message:"Error Alert!",type:"error"}))),p.default.createElement(c.default,{title:"Collapsable Alert"},p.default.createElement(d.default,{message:"Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text",type:"warning",closable:!0,onClose:m}),p.default.createElement(d.default,{message:"Info Text",type:"info",closeText:"Close Now"}),p.default.createElement(d.default,{message:"Error Text",description:"Error Description Error Description Error Description Error Description Error Description Error Description",type:"error",closable:!0,onClose:m})),p.default.createElement(c.default,{title:"Banner Alert"},p.default.createElement("div",null,p.default.createElement("div",null,p.default.createElement(d.default,{message:"Warning text",banner:!0}),p.default.createElement("br",null),p.default.createElement(d.default,{message:"Very long warning text warning text text text text text text text",banner:!0,closable:!0}))))),p.default.createElement(i.default,{xs:24,md:12,lg:12},p.default.createElement(c.default,{title:"Description Alert"},p.default.createElement("div",null,p.default.createElement(d.default,{message:"Success Text",description:"Success Description Success Description Success Description",type:"success"}),p.default.createElement(d.default,{message:"Info Text",description:"Info Description Info Description Info Description Info Description",type:"info"}),p.default.createElement(d.default,{message:"Warning Text",description:"Warning Description Warning Description Warning Description Warning Description",type:"warning"}),p.default.createElement(d.default,{message:"Error Text",description:"Error Description Error Description Error Description Error Description",type:"error"}))),p.default.createElement(c.default,{title:"Iconed Alert"},p.default.createElement("div",null,p.default.createElement(d.default,{message:"Success Tips",type:"success",showIcon:!0}),p.default.createElement(d.default,{message:"Informational Notes",type:"info",showIcon:!0}),p.default.createElement(d.default,{message:"Warning",type:"warning",showIcon:!0}),p.default.createElement(d.default,{message:"Error",type:"error",showIcon:!0}),p.default.createElement(d.default,{message:"success tips",description:"Detailed description and advices about successful copywriting.",type:"success",showIcon:!0}),p.default.createElement(d.default,{message:"Informational Notes",description:"Additional description and informations about copywriting.",type:"info",showIcon:!0}),p.default.createElement(d.default,{message:"Warning",description:"This is a warning notice about copywriting.",type:"warning",showIcon:!0}),p.default.createElement(d.default,{message:"Error",description:"This is an error message about copywriting.",type:"error",showIcon:!0})))))," ")};t.default=g,e.exports=t.default}});