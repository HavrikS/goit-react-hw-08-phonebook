(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[867],{888:function(e,a,r){"use strict";var t=r(9047);function s(){}function i(){}i.resetWarningCache=s,e.exports=function(){function e(e,a,r,s,i,n){if(n!==t){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:s};return r.PropTypes=r,r}},2007:function(e,a,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6157:function(e,a,r){"use strict";r.d(a,{Z:function(){return b}});var t=r(1413),s=r(885),i=r(5987),n=r(1694),o=r.n(n),l=r(2791),c=r(184),d=["as","disabled"];function f(e){var a=e.tagName,r=e.disabled,t=e.href,s=e.target,i=e.rel,n=e.role,o=e.onClick,l=e.tabIndex,c=void 0===l?0:l,d=e.type;a||(a=null!=t||null!=s||null!=i?"a":"button");var f={tagName:a};if("button"===a)return[{type:d||"button",disabled:r},f];var u=function(e){(r||"a"===a&&function(e){return!e||"#"===e.trim()}(t))&&e.preventDefault(),r?e.stopPropagation():null==o||o(e)};return"a"===a&&(t||(t="#"),r&&(t=void 0)),[{role:null!=n?n:"button",disabled:void 0,tabIndex:r?void 0:c,href:t,target:"a"===a?s:void 0,"aria-disabled":r||void 0,rel:"a"===a?i:void 0,onClick:u,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),u(e))}},f]}var u=l.forwardRef((function(e,a){var r=e.as,t=e.disabled,i=function(e,a){if(null==e)return{};var r,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(s[r]=e[r]);return s}(e,d),n=f(Object.assign({tagName:r,disabled:t},i)),o=(0,s.Z)(n,2),l=o[0],u=o[1].tagName;return(0,c.jsx)(u,Object.assign({},i,l,{ref:a}))}));u.displayName="Button";var v=r(162),m=["as","bsPrefix","variant","size","active","className"],p=l.forwardRef((function(e,a){var r=e.as,n=e.bsPrefix,l=e.variant,d=e.size,u=e.active,p=e.className,b=(0,i.Z)(e,m),x=(0,v.vE)(n,"btn"),y=f((0,t.Z)({tagName:r},b)),N=(0,s.Z)(y,2),h=N[0],Z=N[1].tagName;return(0,c.jsx)(Z,(0,t.Z)((0,t.Z)((0,t.Z)({},h),b),{},{ref:a,className:o()(p,x,u&&"active",l&&"".concat(x,"-").concat(l),d&&"".concat(x,"-").concat(d),b.href&&b.disabled&&"disabled")}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1};var b=p},2677:function(e,a,r){"use strict";var t=r(885),s=r(1413),i=r(5987),n=r(1694),o=r.n(n),l=r(2791),c=r(162),d=r(184),f=["as","bsPrefix","className"],u=["className"];var v=l.forwardRef((function(e,a){var r=function(e){var a=e.as,r=e.bsPrefix,t=e.className,n=(0,i.Z)(e,f);r=(0,c.vE)(r,"col");var l=(0,c.pi)(),d=(0,c.zG)(),u=[],v=[];return l.forEach((function(e){var a,t,s,i=n[e];delete n[e],"object"===typeof i&&null!=i?(a=i.span,t=i.offset,s=i.order):a=i;var o=e!==d?"-".concat(e):"";a&&u.push(!0===a?"".concat(r).concat(o):"".concat(r).concat(o,"-").concat(a)),null!=s&&v.push("order".concat(o,"-").concat(s)),null!=t&&v.push("offset".concat(o,"-").concat(t))})),[(0,s.Z)((0,s.Z)({},n),{},{className:o().apply(void 0,[t].concat(u,v))}),{as:a,bsPrefix:r,spans:u}]}(e),n=(0,t.Z)(r,2),l=n[0],v=l.className,m=(0,i.Z)(l,u),p=n[1],b=p.as,x=void 0===b?"div":b,y=p.bsPrefix,N=p.spans;return(0,d.jsx)(x,(0,s.Z)((0,s.Z)({},m),{},{ref:a,className:o()(v,!N.length&&y)}))}));v.displayName="Col",a.Z=v},3855:function(e,a,r){"use strict";r.d(a,{Z:function(){return ae}});var t=r(1413),s=r(5987),i=r(1694),n=r.n(i),o=r(2007),l=r.n(o),c=r(2791),d=r(184),f=["as","className","type","tooltip"],u={type:l().string,tooltip:l().bool,as:l().elementType},v=c.forwardRef((function(e,a){var r=e.as,i=void 0===r?"div":r,o=e.className,l=e.type,c=void 0===l?"valid":l,u=e.tooltip,v=void 0!==u&&u,m=(0,s.Z)(e,f);return(0,d.jsx)(i,(0,t.Z)((0,t.Z)({},m),{},{ref:a,className:n()(o,"".concat(c,"-").concat(v?"tooltip":"feedback"))}))}));v.displayName="Feedback",v.propTypes=u;var m=v,p=c.createContext({}),b=r(162),x=["id","bsPrefix","className","type","isValid","isInvalid","as"],y=c.forwardRef((function(e,a){var r=e.id,i=e.bsPrefix,o=e.className,l=e.type,f=void 0===l?"checkbox":l,u=e.isValid,v=void 0!==u&&u,m=e.isInvalid,y=void 0!==m&&m,N=e.as,h=void 0===N?"input":N,Z=(0,s.Z)(e,x),P=(0,c.useContext)(p).controlId;return i=(0,b.vE)(i,"form-check-input"),(0,d.jsx)(h,(0,t.Z)((0,t.Z)({},Z),{},{ref:a,type:f,id:r||P,className:n()(o,i,v&&"is-valid",y&&"is-invalid")}))}));y.displayName="FormCheckInput";var N=y,h=["bsPrefix","className","htmlFor"],Z=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.htmlFor,l=(0,s.Z)(e,h),f=(0,c.useContext)(p).controlId;return r=(0,b.vE)(r,"form-check-label"),(0,d.jsx)("label",(0,t.Z)((0,t.Z)({},l),{},{ref:a,htmlFor:o||f,className:n()(i,r)}))}));Z.displayName="FormCheckLabel";var P=Z;var g=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],j=c.forwardRef((function(e,a){var r=e.id,i=e.bsPrefix,o=e.bsSwitchPrefix,l=e.inline,f=void 0!==l&&l,u=e.reverse,v=void 0!==u&&u,x=e.disabled,y=void 0!==x&&x,h=e.isValid,Z=void 0!==h&&h,j=e.isInvalid,k=void 0!==j&&j,w=e.feedbackTooltip,I=void 0!==w&&w,C=e.feedback,F=e.feedbackType,R=e.className,E=e.style,O=e.title,T=void 0===O?"":O,S=e.type,_=void 0===S?"checkbox":S,z=e.label,V=e.children,L=e.as,D=void 0===L?"input":L,H=(0,s.Z)(e,g);i=(0,b.vE)(i,"form-check"),o=(0,b.vE)(o,"form-switch");var U=(0,c.useContext)(p).controlId,B=(0,c.useMemo)((function(){return{controlId:r||U}}),[U,r]),G=!V&&null!=z&&!1!==z||function(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}(V,P),W=(0,d.jsx)(N,(0,t.Z)((0,t.Z)({},H),{},{type:"switch"===_?"checkbox":_,ref:a,isValid:Z,isInvalid:k,disabled:y,as:D}));return(0,d.jsx)(p.Provider,{value:B,children:(0,d.jsx)("div",{style:E,className:n()(R,G&&i,f&&"".concat(i,"-inline"),v&&"".concat(i,"-reverse"),"switch"===_&&o),children:V||(0,d.jsxs)(d.Fragment,{children:[W,G&&(0,d.jsx)(P,{title:T,children:z}),C&&(0,d.jsx)(m,{type:F,tooltip:I,children:C})]})})})}));j.displayName="FormCheck";var k=Object.assign(j,{Input:N,Label:P}),w=r(4942),I=(r(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),C=c.forwardRef((function(e,a){var r,i,o=e.bsPrefix,l=e.type,f=e.size,u=e.htmlSize,v=e.id,m=e.className,x=e.isValid,y=void 0!==x&&x,N=e.isInvalid,h=void 0!==N&&N,Z=e.plaintext,P=e.readOnly,g=e.as,j=void 0===g?"input":g,k=(0,s.Z)(e,I),C=(0,c.useContext)(p).controlId;(o=(0,b.vE)(o,"form-control"),Z)?r=(0,w.Z)({},"".concat(o,"-plaintext"),!0):(i={},(0,w.Z)(i,o,!0),(0,w.Z)(i,"".concat(o,"-").concat(f),f),r=i);return(0,d.jsx)(j,(0,t.Z)((0,t.Z)({},k),{},{type:l,size:u,ref:a,readOnly:P,id:v||C,className:n()(m,r,y&&"is-valid",h&&"is-invalid","color"===l&&"".concat(o,"-color"))}))}));C.displayName="FormControl";var F=Object.assign(C,{Feedback:m}),R=(0,r(6543).Z)("form-floating"),E=["controlId","as"],O=c.forwardRef((function(e,a){var r=e.controlId,i=e.as,n=void 0===i?"div":i,o=(0,s.Z)(e,E),l=(0,c.useMemo)((function(){return{controlId:r}}),[r]);return(0,d.jsx)(p.Provider,{value:l,children:(0,d.jsx)(n,(0,t.Z)((0,t.Z)({},o),{},{ref:a}))})}));O.displayName="FormGroup";var T=O,S=r(2677),_=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],z=c.forwardRef((function(e,a){var r=e.as,i=void 0===r?"label":r,o=e.bsPrefix,l=e.column,f=e.visuallyHidden,u=e.className,v=e.htmlFor,m=(0,s.Z)(e,_),x=(0,c.useContext)(p).controlId;o=(0,b.vE)(o,"form-label");var y="col-form-label";"string"===typeof l&&(y="".concat(y," ").concat(y,"-").concat(l));var N=n()(u,o,f&&"visually-hidden",l&&y);return v=v||x,l?(0,d.jsx)(S.Z,(0,t.Z)({ref:a,as:"label",className:N,htmlFor:v},m)):(0,d.jsx)(i,(0,t.Z)({ref:a,className:N,htmlFor:v},m))}));z.displayName="FormLabel",z.defaultProps={column:!1,visuallyHidden:!1};var V=z,L=["bsPrefix","className","id"],D=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.id,l=(0,s.Z)(e,L),f=(0,c.useContext)(p).controlId;return r=(0,b.vE)(r,"form-range"),(0,d.jsx)("input",(0,t.Z)((0,t.Z)({},l),{},{type:"range",ref:a,className:n()(i,r),id:o||f}))}));D.displayName="FormRange";var H=D,U=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],B=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.size,o=e.htmlSize,l=e.className,f=e.isValid,u=void 0!==f&&f,v=e.isInvalid,m=void 0!==v&&v,x=e.id,y=(0,s.Z)(e,U),N=(0,c.useContext)(p).controlId;return r=(0,b.vE)(r,"form-select"),(0,d.jsx)("select",(0,t.Z)((0,t.Z)({},y),{},{size:o,ref:a,className:n()(l,r,i&&"".concat(r,"-").concat(i),u&&"is-valid",m&&"is-invalid"),id:x||N}))}));B.displayName="FormSelect";var G=B,W=["bsPrefix","className","as","muted"],A=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.as,l=void 0===o?"small":o,c=e.muted,f=(0,s.Z)(e,W);return r=(0,b.vE)(r,"form-text"),(0,d.jsx)(l,(0,t.Z)((0,t.Z)({},f),{},{ref:a,className:n()(i,r,c&&"text-muted")}))}));A.displayName="FormText";var M=A,q=c.forwardRef((function(e,a){return(0,d.jsx)(k,(0,t.Z)((0,t.Z)({},e),{},{ref:a,type:"switch"}))}));q.displayName="Switch";var K=Object.assign(q,{Input:k.Input,Label:k.Label}),Y=["bsPrefix","className","children","controlId","label"],J=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.children,l=e.controlId,c=e.label,f=(0,s.Z)(e,Y);return r=(0,b.vE)(r,"form-floating"),(0,d.jsxs)(T,(0,t.Z)((0,t.Z)({ref:a,className:n()(i,r),controlId:l},f),{},{children:[o,(0,d.jsx)("label",{htmlFor:l,children:c})]}))}));J.displayName="FloatingLabel";var Q=J,X=["className","validated","as"],$={_ref:l().any,validated:l().bool,as:l().elementType},ee=c.forwardRef((function(e,a){var r=e.className,i=e.validated,o=e.as,l=void 0===o?"form":o,c=(0,s.Z)(e,X);return(0,d.jsx)(l,(0,t.Z)((0,t.Z)({},c),{},{ref:a,className:n()(r,i&&"was-validated")}))}));ee.displayName="Form",ee.propTypes=$;var ae=Object.assign(ee,{Group:T,Control:F,Floating:R,Check:k,Switch:K,Label:V,Text:M,Range:H,Select:G,FloatingLabel:Q})},6543:function(e,a,r){"use strict";r.d(a,{Z:function(){return v}});var t=r(1413),s=r(5987),i=r(1694),n=r.n(i),o=/-(.)/g;var l=r(2791),c=r(162),d=r(184),f=["className","bsPrefix","as"],u=function(e){return e[0].toUpperCase()+(a=e,a.replace(o,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function v(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.displayName,i=void 0===r?u(e):r,o=a.Component,v=a.defaultProps,m=l.forwardRef((function(a,r){var i=a.className,l=a.bsPrefix,u=a.as,v=void 0===u?o||"div":u,m=(0,s.Z)(a,f),p=(0,c.vE)(l,e);return(0,d.jsx)(v,(0,t.Z)({ref:r,className:n()(i,p)},m))}));return m.defaultProps=v,m.displayName=i,m}},2391:function(e){"use strict";var a=function(){};e.exports=a}}]);
//# sourceMappingURL=867.7a6512c6.chunk.js.map