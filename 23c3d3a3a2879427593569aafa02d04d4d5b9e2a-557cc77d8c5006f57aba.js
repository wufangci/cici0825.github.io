(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+pmV":function(e,t,a){e.exports={post:"post-module--post--28Mq2",title:"post-module--title--3XBo2",coverImage:"post-module--coverImage--1GM7V",meta:"post-module--meta--3YtjE",tags:"post-module--tags--3RbqF",tag:"post-module--tag--16U9p",readMore:"post-module--readMore--3zWML",postContent:"post-module--postContent--1bfnt"}},"5l6m":function(e,t,a){"use strict";var r=a("+uX7"),i=a("m/aQ"),n=a("WD+B"),s=a("gQbX"),o=a("4jnk"),l=a("5Cvy"),d=a("G90C"),c=a("mh2x"),u=Math.max,f=Math.min;r("replace",2,(function(e,t,a,r){var p=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=r.REPLACE_KEEPS_$0,m=p?"$":"$0";return[function(a,r){var i=o(this),n=null==a?void 0:a[e];return void 0!==n?n.call(a,i,r):t.call(String(i),a,r)},function(e,r){if(!p&&g||"string"==typeof r&&-1===r.indexOf(m)){var o=a(t,e,this,r);if(o.done)return o.value}var h=i(e),v=String(this),b="function"==typeof r;b||(r=String(r));var y=h.global;if(y){var E=h.unicode;h.lastIndex=0}for(var S=[];;){var x=c(h,v);if(null===x)break;if(S.push(x),!y)break;""===String(x[0])&&(h.lastIndex=l(v,n(h.lastIndex),E))}for(var w,L="",R=0,I=0;I<S.length;I++){x=S[I];for(var z=String(x[0]),P=u(f(s(x.index),v.length),0),N=[],O=1;O<x.length;O++)N.push(void 0===(w=x[O])?w:String(w));var k=x.groups;if(b){var T=[z].concat(N,P,v);void 0!==k&&T.push(k);var C=String(r.apply(void 0,T))}else C=d(z,v,P,N,k,r);P>=R&&(L+=v.slice(R,P)+C,R=P+z.length)}return L+v.slice(R)}]}))},"6cYQ":function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("17x9"),s=a.n(n),o=a("Wbzz"),l=a("zHTP"),d=a.n(l),c=function(e){var t=e.nextPath,a=e.previousPath,r=e.nextLabel,n=e.previousLabel;return a||t?i.a.createElement("div",{className:d.a.navigation},a&&i.a.createElement("span",{className:d.a.button},i.a.createElement(o.Link,{to:a},i.a.createElement("span",{className:d.a.iconPrev},"←"),i.a.createElement("span",{className:d.a.buttonText},n))),t&&i.a.createElement("span",{className:d.a.button},i.a.createElement(o.Link,{to:t},i.a.createElement("span",{className:d.a.buttonText},r),i.a.createElement("span",{className:d.a.iconNext},"→")))):null};c.propTypes={nextPath:s.a.string,previousPath:s.a.string,nextLabel:s.a.string,previousLabel:s.a.string},t.a=c},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=p(t);return m[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function x(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},P=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=d.default.createElement(N,(0,l.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?d.default.createElement("picture",null,i(r),o):o})),N=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));N.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=p(t))&&(m[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,x=e.loading,R=e.draggable,I=m||h;if(!I)return null;var O=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,l.default)({opacity:O?1:0,transition:k?"opacity "+b+"ms":"none"},o),C="boolean"==typeof v?"lightgray":v,V={transitionDelay:b+"ms"},H=(0,l.default)({opacity:this.state.imgLoaded?0:1},k&&V,o,f),W={title:t,alt:this.state.isVisible?"":a,style:H,className:p,itemProp:E},j=this.state.isHydrated?g(I):I[0];if(m)return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:j.maxWidth?j.maxWidth+"px":null,maxHeight:j.maxHeight?j.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),C&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&V)}),j.base64&&d.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:W,imageVariants:I,generateSources:L}),j.tracedSVG&&d.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:W,imageVariants:I,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,S(I),d.default.createElement(N,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:x,draggable:R})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,l.default)({alt:a,title:t,loading:x},j,{imageVariants:I}))}}));if(h){var M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete M.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},C&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},k&&V)}),j.base64&&d.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:W,imageVariants:I,generateSources:L}),j.tracedSVG&&d.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:W,imageVariants:I,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,S(I),d.default.createElement(N,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:x,draggable:R})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,l.default)({alt:a,title:t,loading:x},j,{imageVariants:I}))}}))}return null},t}(d.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),T=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function C(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}O.propTypes={resolutions:k,sizes:T,fixed:C(c.default.oneOfType([k,c.default.arrayOf(k)])),fluid:C(c.default.oneOfType([T,c.default.arrayOf(T)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var V=O;t.default=V},G90C:function(e,t,a){var r=a("17+C"),i=Math.floor,n="".replace,s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,a,l,d,c){var u=a+e.length,f=l.length,p=o;return void 0!==d&&(d=r(d),p=s),n.call(c,p,(function(r,n){var s;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,a);case"'":return t.slice(u);case"<":s=d[n.slice(1,-1)];break;default:var o=+n;if(0===o)return r;if(o>f){var c=i(o/10);return 0===c?r:c<=f?void 0===l[c-1]?n.charAt(1):l[c-1]+n.charAt(1):r}s=l[o-1]}return void 0===s?"":s}))}},kAaw:function(e,t,a){var r=a("IvzW"),i=a("REpN"),n=a("ZRnM"),s=a("nynY"),o=a("jekk").f,l=a("zpoX").f,d=a("iwAE"),c=a("7npg"),u=a("zJsW"),f=a("+7hJ"),p=a("JhOX"),g=a("E9J1").set,m=a("43WK"),h=a("QD2z")("match"),v=i.RegExp,b=v.prototype,y=/a/g,E=/a/g,S=new v(y)!==y,x=u.UNSUPPORTED_Y;if(r&&n("RegExp",!S||x||p((function(){return E[h]=!1,v(y)!=y||v(E)==E||"/a/i"!=v(y,"i")})))){for(var w=function(e,t){var a,r=this instanceof w,i=d(e),n=void 0===t;if(!r&&i&&e.constructor===w&&n)return e;S?i&&!n&&(e=e.source):e instanceof w&&(n&&(t=c.call(e)),e=e.source),x&&(a=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,""));var o=s(S?new v(e,t):v(e,t),r?this:b,w);return x&&a&&g(o,{sticky:a}),o},L=function(e){e in w||o(w,e,{configurable:!0,get:function(){return v[e]},set:function(t){v[e]=t}})},R=l(v),I=0;R.length>I;)L(R[I++]);b.constructor=w,w.prototype=b,f(i,"RegExp",w)}m("RegExp")},rgsX:function(e,t,a){"use strict";a("LJRI");var r=a("q1tI"),i=a.n(r),n=a("17x9"),s=a.n(n),o=a("Wbzz"),l=a("9eSz"),d=a.n(l),c=a("6cYQ"),u=a("zpb6"),f=a("+pmV"),p=a.n(f),g=function(e){var t=e.title,a=e.date,r=e.path,n=e.coverImage,s=e.author,l=e.excerpt,f=e.tags,g=e.html,m=e.previousPost,h=e.nextPost,v=m&&m.frontmatter.path,b=m&&m.frontmatter.title,y=h&&h.frontmatter.path,E=h&&h.frontmatter.title;return i.a.createElement("div",{className:p.a.post},i.a.createElement("div",{className:p.a.postContent},i.a.createElement("h1",{className:p.a.title},l?i.a.createElement(o.Link,{to:r},t):t),i.a.createElement("div",{className:p.a.meta},a," ",s&&i.a.createElement(i.a.Fragment,null,"— Written by ",s),f?i.a.createElement("div",{className:p.a.tags},f.map((function(e){return i.a.createElement(o.Link,{to:"/tag/"+Object(u.toKebabCase)(e)+"/",key:Object(u.toKebabCase)(e)},i.a.createElement("span",{className:p.a.tag},"#",e))}))):null),n&&i.a.createElement(d.a,{fluid:n.childImageSharp.fluid,className:p.a.coverImage}),l?i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,l),i.a.createElement(o.Link,{to:r,className:p.a.readMore},"Read more →")):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{dangerouslySetInnerHTML:{__html:g}}),i.a.createElement(c.a,{previousPath:v,previousLabel:b,nextPath:y,nextLabel:E}))))};g.propTypes={title:s.a.string,date:s.a.string,path:s.a.string,coverImage:s.a.object,author:s.a.string,excerpt:s.a.string,html:s.a.string,tags:s.a.arrayOf(s.a.string),previousPost:s.a.object,nextPost:s.a.object},t.a=g},zHTP:function(e,t,a){e.exports={navigation:"navigation-module--navigation--3Zfju",button:"navigation-module--button--28kp3",buttonText:"navigation-module--buttonText--1Xod2",iconNext:"navigation-module--iconNext--3xyJ-",iconPrev:"navigation-module--iconPrev--23mg1"}},zpb6:function(e,t,a){a("5l6m"),a("kAaw"),e.exports.toKebabCase=function(e){return e.replace(new RegExp("(\\s|_|-)+","gmi"),"-")}}}]);
//# sourceMappingURL=23c3d3a3a2879427593569aafa02d04d4d5b9e2a-557cc77d8c5006f57aba.js.map