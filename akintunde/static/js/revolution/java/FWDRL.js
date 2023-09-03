// FWDAnimation classs for tweeningn not allowed to modify or use outside this plugin!
var _fwd_fwdScope;window.FWDAnimation||(((_fwd_fwdScope="undefined"!=typeof fwd_module&&fwd_module.exports&&"undefined"!=typeof fwd_global?fwd_global:this||window)._fwd_fwdQueue||(_fwd_fwdScope._fwd_fwdQueue=[])).push(function(){"use strict";function y(t,e,i,r){i===r&&(i=r-(r-e)/1e6),t===e&&(e=t+(i-t)/1e6),this.a=t,this.b=e,this.c=i,this.d=r,this.da=r-t,this.ca=i-t,this.ba=e-t}function w(t,e,i,r){var s={a:t},n={},a={},o={c:r},l=(t+e)/2,h=(e+i)/2,f=(i+r)/2,u=(l+h)/2,p=(h+f)/2,_=(p-u)/8;return s.b=l+(t-l)/4,n.b=u+_,s.c=n.a=(s.b+n.b)/2,n.c=a.a=(u+p)/2,a.b=p-_,o.b=f+(r-f)/4,a.c=o.a=(a.b+o.b)/2,[s,n,a,o]}function _(t,e,i,r,s,n){var a,o,l,h,f,u,p,_,c={},d=[],m=n||t[0];for(o in s="string"==typeof s?","+s+",":",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",null==e&&(e=1),t[0])d.push(o);if(1<t.length){for(_=t[t.length-1],p=!0,a=d.length;-1<--a;)if(o=d[a],.05<Math.abs(m[o]-_[o])){p=!1;break}p&&(t=t.concat(),n&&t.unshift(n),t.push(t[1]),n=t[t.length-3])}for(T.length=P.length=O.length=0,a=d.length;-1<--a;)o=d[a],g[o]=-1!==s.indexOf(","+o+","),c[o]=function(t,e,i,r){var s,n,a,o,l,h,f=[];if(r)for(n=(t=[r].concat(t)).length;-1<--n;)"string"==typeof(h=t[n][e])&&"="===h.charAt(1)&&(t[n][e]=r[e]+Number(h.charAt(0)+h.substr(2)));if((s=t.length-2)<0)return f[0]=new y(t[0][e],0,0,t[s<-1?0:1][e]),f;for(n=0;n<s;n++)a=t[n][e],o=t[n+1][e],f[n]=new y(a,0,0,o),i&&(l=t[n+2][e],T[n]=(T[n]||0)+(o-a)*(o-a),P[n]=(P[n]||0)+(l-o)*(l-o));return f[n]=new y(t[n][e],0,0,t[n+1][e]),f}(t,o,g[o],n);for(a=T.length;-1<--a;)T[a]=Math.sqrt(T[a]),P[a]=Math.sqrt(P[a]);if(!r){for(a=d.length;-1<--a;)if(g[o])for(u=(l=c[d[a]]).length-1,h=0;h<u;h++)f=l[h+1].da/P[h]+l[h].da/T[h]||0,O[h]=(O[h]||0)+f*f;for(a=O.length;-1<--a;)O[a]=Math.sqrt(O[a])}for(a=d.length,h=i?4:1;-1<--a;)(function(t,e,i,r,s){for(var n,a,o,l,h,f,u,p,_,c,d,m,g=t.length-1,y=0,v=t[0].a,x=0;x<g;x++)n=(l=t[y]).a,a=l.d,o=t[y+1].d,u=s?(c=T[x],m=((d=P[x])+c)*e*.25/(!r&&O[x]||.5),a-((h=a-(a-n)*(r?.5*e:0!==c?m/c:0))+(((f=a+(o-a)*(r?.5*e:0!==d?m/d:0))-h)*(3*c/(c+d)+.5)/4||0))):a-((h=a-(a-n)*e*.5)+(f=a+(o-a)*e*.5))/2,h+=u,f+=u,l.c=p=h,l.b=0!==x?v:v=l.a+.6*(l.c-l.a),l.da=a-n,l.ca=p-n,l.ba=v-n,i?(_=w(n,v,p,a),t.splice(y,1,_[0],_[1],_[2],_[3]),y+=4):y++,v=f;(l=t[y]).b=v,l.c=v+.4*(l.d-v),l.da=l.d-l.a,l.ca=l.c-l.a,l.ba=v-l.a,i&&(_=w(l.a,v,l.c,l.d),t.splice(y,1,_[0],_[1],_[2],_[3]))})(l=c[o=d[a]],e,i,r,g[o]),p&&(l.splice(0,h),l.splice(l.length-h,h));return c}var b,T,P,O,g,i,m,t;_fwd_fwdScope.FWDFWD_fwdDefine("FWDAnimation",["core.FWDAnimation","core.FWDSimpleTimeline","FWDTweenLite"],function(m,f,g){function y(t){for(var e=[],i=t.length,r=0;r!==i;e.push(t[r++]));return e}function v(t,e,i){var r,s,n=t.cycle;for(r in n)s=n[r],t[r]="function"==typeof s?s(i,e[i]):s[i%s.length];delete t.cycle}var m=function(t,e,i){g.call(this,t,e,i),this._cycle=0,this._yoyo=!0===this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=m.prototype.render},x=1e-10,w=g._internals,T=w.isSelector,b=w.isArray,t=m.prototype=g.to({},.1,{}),P=[];m.version="1.19.0",t.constructor=m,t.kill()._gc=!1,m.killTweensOf=m.killDelayedCallsTo=g.killTweensOf,m.getTweensOf=g.getTweensOf,m.lagSmoothing=g.lagSmoothing,m.ticker=g.ticker,m.render=g.render,t.invalidate=function(){return this._yoyo=!0===this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),g.prototype.invalidate.call(this)},t.updateTo=function(t,e){var i,r=this.ratio,s=this.vars.immediateRender||t.immediateRender;for(i in e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay)),t)this.vars[i]=t[i];if(this._initted||s)if(e)this._initted=!1,s&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&g._onPluginEvent("_onDisable",this),.998<this._time/this._duration){var n=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(n,!0,!1)}else if(this._initted=!1,this._init(),0<this._time||s)for(var a,o=1/(1-r),l=this._firstPT;l;)a=l.s+l.c,l.c*=o,l.s=a-l.c,l=l._next;return this},t.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var r,s,n,a,o,l,h,f,u,p=this._dirty?this.totalDuration():this._totalDuration,_=this._time,c=this._totalTime,d=this._cycle,m=this._duration,g=this._rawPrevTime;if(p-1e-7<=t?(this._totalTime=p,this._cycle=this._repeat,this._yoyo&&0!=(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=m,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(r=!0,s="onComplete",i=i||this._timeline.autoRemoveChildren),0===m&&(!this._initted&&this.vars.lazy&&!i||(this._startTime===this._timeline._duration&&(t=0),(g<0||t<=0&&-1e-7<=t||g===x&&"isPause"!==this.data)&&g!==t&&(i=!0,x<g&&(s="onReverseComplete")),this._rawPrevTime=f=!e||t||g===t?t:x))):t<1e-7?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==c||0===m&&0<g)&&(s="onReverseComplete",r=this._reversed),t<0&&(this._active=!1,0===m&&(!this._initted&&this.vars.lazy&&!i||(0<=g&&(i=!0),this._rawPrevTime=f=!e||t||g===t?t:x))),this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(a=m+this._repeatDelay,this._cycle=this._totalTime/a>>0,0!==this._cycle&&this._cycle===this._totalTime/a&&c<=t&&this._cycle--,this._time=this._totalTime-this._cycle*a,this._yoyo&&0!=(1&this._cycle)&&(this._time=m-this._time),this._time>m?this._time=m:this._time<0&&(this._time=0)),this._easeType?(o=this._time/m,(1===(l=this._easeType)||3===l&&.5<=o)&&(o=1-o),3===l&&(o*=2),1===(h=this._easePower)?o*=o:2===h?o*=o*o:3===h?o*=o*o*o:4===h&&(o*=o*o*o*o),1===l?this.ratio=1-o:2===l?this.ratio=o:this._time/m<.5?this.ratio=o/2:this.ratio=1-o/2):this.ratio=this._ease.getRatio(this._time/m)),_!==this._time||i||d!==this._cycle){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=_,this._totalTime=c,this._rawPrevTime=g,this._cycle=d,w.lazyTweens.push(this),void(this._lazy=[t,e]);this._time&&!r?this.ratio=this._ease.getRatio(this._time/m):r&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(!1!==this._lazy&&(this._lazy=!1),this._active||!this._paused&&this._time!==_&&0<=t&&(this._active=!0),0===c&&(2===this._initted&&0<t&&this._init(),this._startAt&&(0<=t?this._startAt.render(t,e,i):s=s||"_dummyGS"),this.vars.onStart&&(0===this._totalTime&&0!==m||e||this._callback("onStart"))),n=this._firstPT;n;){n.f?n.t[n.p](n.c*this.ratio+n.s):(u=n.c*this.ratio+n.s,"x"==n.p?n.t.setX(u):"y"==n.p?n.t.setY(u):"z"==n.p?n.t.setZ(u):"angleX"==n.p?n.t.setAngleX(u):"angleY"==n.p?n.t.setAngleY(u):"angleZ"==n.p?n.t.setAngleZ(u):"w"==n.p?n.t.setWidth(u):"h"==n.p?n.t.setHeight(u):"alpha"==n.p?n.t.setAlpha(u):"scale"==n.p?n.t.setScale2(u):n.t[n.p]=u),n=n._next}this._onUpdate&&(t<0&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||this._totalTime===c&&!s||this._callback("onUpdate")),this._cycle!==d&&(e||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),s&&(this._gc&&!i||(t<0&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),r&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[s]&&this._callback(s),0===m&&this._rawPrevTime===x&&f!==x&&(this._rawPrevTime=0)))}else c!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate"))},m.to=function(t,e,i){return new m(t,e,i)},m.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new m(t,e,i)},m.fromTo=function(t,e,i,r){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,new m(t,e,r)},m.staggerTo=m.allTo=function(t,e,i,r,s,n,a){r=r||0;function o(){i.onComplete&&i.onComplete.apply(i.onCompleteScope||this,arguments),s.apply(a||i.callbackScope||this,n||P)}var l,h,f,u,p=0,_=[],c=i.cycle,d=i.startAt&&i.startAt.cycle;for(b(t)||("string"==typeof t&&(t=g.selector(t)||t),T(t)&&(t=y(t))),t=t||[],r<0&&((t=y(t)).reverse(),r*=-1),l=t.length-1,f=0;f<=l;f++){for(u in h={},i)h[u]=i[u];if(c&&(v(h,t,f),null!=h.duration&&(e=h.duration,delete h.duration)),d){for(u in d=h.startAt={},i.startAt)d[u]=i.startAt[u];v(h.startAt,t,f)}h.delay=p+(h.delay||0),f===l&&s&&(h.onComplete=o),_[f]=new m(t[f],e,h),p+=r}return _},m.staggerFrom=m.allFrom=function(t,e,i,r,s,n,a){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,m.staggerTo(t,e,i,r,s,n,a)},m.staggerFromTo=m.allFromTo=function(t,e,i,r,s,n,a,o){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,m.staggerTo(t,e,r,s,n,a,o)},m.delayedCall=function(t,e,i,r,s){return new m(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:r,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,useFrames:s,overwrite:0})},m.set=function(t,e){return new m(t,0,e)},m.isTweening=function(t){return 0<g.getTweensOf(t,!0).length};var n=function(t,e){for(var i=[],r=0,s=t._first;s;)s instanceof g?i[r++]=s:(e&&(i[r++]=s),r=(i=i.concat(n(s,e))).length),s=s._next;return i},u=m.getAllTweens=function(t){return n(m._rootTimeline,t).concat(n(m._rootFramesTimeline,t))};m.killAll=function(t,e,i,r){null==e&&(e=!0),null==i&&(i=!0);for(var s,n,a=u(0!=r),o=a.length,l=e&&i&&r,h=0;h<o;h++)n=a[h],(l||n instanceof f||(s=n.target===n.vars.onComplete)&&i||e&&!s)&&(t?n.totalTime(n._reversed?0:n.totalDuration()):n._enabled(!1,!1))},m.killChildTweensOf=function(t,e){if(null!=t){var i,r,s,n,a,o=w.tweenLookup;if("string"==typeof t&&(t=g.selector(t)||t),T(t)&&(t=y(t)),b(t))for(n=t.length;-1<--n;)m.killChildTweensOf(t[n],e);else{for(s in i=[],o)for(r=o[s].target.parentNode;r;)r===t&&(i=i.concat(o[s].tweens)),r=r.parentNode;for(a=i.length,n=0;n<a;n++)e&&i[n].totalTime(i[n].totalDuration()),i[n]._enabled(!1,!1)}}};function r(t,e,i,r){e=!1!==e,i=!1!==i;for(var s,n,a=u(r=!1!==r),o=e&&i&&r,l=a.length;-1<--l;)n=a[l],(o||n instanceof f||(s=n.target===n.vars.onComplete)&&i||e&&!s)&&n.paused(t)}return m.pauseAll=function(t,e,i){r(!0,t,e,i)},m.resumeAll=function(t,e,i){r(!1,t,e,i)},m.globalTimeScale=function(t){var e=m._rootTimeline,i=g.ticker.time;return arguments.length?(t=t||x,e._startTime=i-(i-e._startTime)*e._timeScale/t,e=m._rootFramesTimeline,i=g.ticker.frame,e._startTime=i-(i-e._startTime)*e._timeScale/t,e._timeScale=m._rootTimeline._timeScale=t):e._timeScale},t.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!=(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},t.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},t.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!=(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},t.duration=function(t){return arguments.length?m.prototype.duration.call(this,t):this._duration},t.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},t.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},t.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},t.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},m},!0),b=180/Math.PI,T=[],P=[],O=[],g={},i=_fwd_fwdScope.FWDFWD_fwdDefine.globals,m=_fwd_fwdScope.FWDFWD_fwdDefine.plugin({propName:"bezier",priority:-1,version:"1.3.7",API:2,fwd_global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._mod={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var r,s,n,a,o,l,h=e.values||[],f={},u=h[0],p=e.autoRotate||i.vars.orientToBezier;for(r in this._autoRotate=p?p instanceof Array?p:[["x","y","rotation",!0!==p&&Number(p)||0]]:null,u)this._props.push(r);for(n=this._props.length;-1<--n;)r=this._props[n],this._overwriteProps.push(r),s=this._func[r]="function"==typeof t[r],f[r]=s?t[r.indexOf("set")||"function"!=typeof t["get"+r.substr(3)]?r:"get"+r.substr(3)]():parseFloat(t[r]),o||f[r]!==h[0][r]&&(o=f);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?_(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):function(t,e,i){var r,s,n,a,o,l,h,f,u,p,_,c={},d="cubic"===(e=e||"soft")?3:2,m="soft"===e,g=[];if(m&&i&&(t=[i].concat(t)),null==t||t.length<1+d)throw"invalid Bezier data";for(u in t[0])g.push(u);for(l=g.length;-1<--l;){for(c[u=g[l]]=o=[],p=0,f=t.length,h=0;h<f;h++)r=null==i?t[h][u]:"string"==typeof(_=t[h][u])&&"="===_.charAt(1)?i[u]+Number(_.charAt(0)+_.substr(2)):Number(_),m&&1<h&&h<f-1&&(o[p++]=(r+o[p-2])/2),o[p++]=r;for(f=p-d+1,h=p=0;h<f;h+=d)r=o[h],s=o[h+1],n=o[h+2],a=2==d?0:o[h+3],o[p++]=_=3==d?new y(r,s,n,a):new y(r,(2*s+r)/3,(2*s+n)/3,n);o.length=p}return c}(h,e.type,f),this._segCount=this._beziers[r].length,this._timeRes&&(l=function(t,e){var i,r,s,n,a=[],o=[],l=0,h=0,f=(e=e>>0||6)-1,u=[],p=[];for(i in t)!function(t,e,i){for(var r,s,n,a,o,l,h,f,u,p,_,c=1/i,d=t.length;-1<--d;)for(n=(p=t[d]).a,a=p.d-n,o=p.c-n,l=p.b-n,r=s=0,f=1;f<=i;f++)r=s-(s=((h=c*f)*h*a+3*(u=1-h)*(h*o+u*l))*h),e[_=d*i+f-1]=(e[_]||0)+r*r}(t[i],a,e);for(s=a.length,r=0;r<s;r++)l+=Math.sqrt(a[r]),p[n=r%e]=l,n===f&&(h+=l,u[n=r/e>>0]=p,o[n]=h,l=0,p=[]);return{length:h,lengths:o,segments:u}}(this._beziers,this._timeRes),this._length=l.length,this._lengths=l.lengths,this._segments=l.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length),p=this._autoRotate)for(this._initialRotations=[],p[0]instanceof Array||(this._autoRotate=p=[p]),n=p.length;-1<--n;){for(a=0;a<3;a++)r=p[n][a],this._func[r]="function"==typeof t[r]&&t[r.indexOf("set")||"function"!=typeof t["get"+r.substr(3)]?r:"get"+r.substr(3)];r=p[n][2],this._initialRotations[n]=(this._func[r]?this._func[r].call(this._target):this._target[r])||0,this._overwriteProps.push(r)}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(t){var e,i,r,s,n,a,o,l,h,f=this._segCount,u=this._func,p=this._target,_=t!==this._startRatio;if(this._timeRes){if(l=this._lengths,h=this._curSeg,t*=this._length,T=this._li,t>this._l2&&T<f-1){for(o=f-1;T<o&&(this._l2=l[++T])<=t;);this._l1=l[T-1],this._li=T,this._curSeg=h=this._segments[T],this._s2=h[this._s1=this._si=0]}else if(t<this._l1&&0<T){for(;0<T&&(this._l1=l[--T])>=t;);0===T&&t<this._l1?this._l1=0:T++,this._l2=l[T],this._li=T,this._curSeg=h=this._segments[T],this._s1=h[(this._si=h.length-1)-1]||0,this._s2=h[this._si]}if(e=T,t-=this._l1,T=this._si,t>this._s2&&T<h.length-1){for(o=h.length-1;T<o&&(this._s2=h[++T])<=t;);this._s1=h[T-1],this._si=T}else if(t<this._s1&&0<T){for(;0<T&&(this._s1=h[--T])>=t;);0===T&&t<this._s1?this._s1=0:T++,this._s2=h[T],this._si=T}n=(T+(t-this._s1)/(this._s2-this._s1))*this._prec||0}else n=(t-(e=t<0?0:1<=t?f-1:f*t>>0)*(1/f))*f;for(i=1-n,T=this._props.length;-1<--T;)r=this._props[T],a=(n*n*(s=this._beziers[r][e]).da+3*i*(n*s.ca+i*s.ba))*n+s.a,this._mod[r]&&(a=this._mod[r](a,p)),u[r]?p[r](a):"x"==r?p.setX(a):"y"==r?p.setY(a):"z"==r?p.setZ(a):"angleX"==r?p.setAngleX(a):"angleY"==r?p.setAngleY(a):"angleZ"==r?p.setAngleZ(a):"w"==r?p.setWidth(a):"h"==r?p.setHeight(a):"alpha"==r?p.setAlpha(a):"scale"==r?p.setScale2(a):p[r]=a;if(this._autoRotate)for(var c,d,m,g,y,v,x,w=this._autoRotate,T=w.length;-1<--T;)r=w[T][2],v=w[T][3]||0,x=!0===w[T][4]?1:b,s=this._beziers[w[T][0]],c=this._beziers[w[T][1]],s&&c&&(s=s[e],c=c[e],d=s.a+(s.b-s.a)*n,d+=((g=s.b+(s.c-s.b)*n)-d)*n,g+=(s.c+(s.d-s.c)*n-g)*n,m=c.a+(c.b-c.a)*n,m+=((y=c.b+(c.c-c.b)*n)-m)*n,y+=(c.c+(c.d-c.c)*n-y)*n,a=_?Math.atan2(y-m,g-d)*x+v:this._initialRotations[T],this._mod[r]&&(a=this._mod[r](a,p)),u[r]?p[r](a):p[r]=a)}}),t=m.prototype,m.bezierThrough=_,m.cubicToQuadratic=w,m._autoCSS=!0,m.quadraticToCubic=function(t,e,i){return new y(t,(2*e+t)/3,(2*e+i)/3,i)},m._cssRegister=function(){var t,_,c,d,e=i.CSSPlugin;e&&(t=e._internals,_=t._parseToProxy,c=t._setPluginRatio,d=t.CSSPropTween,t._registerComplexSpecialProp("bezier",{parser:function(t,e,i,r,s,n){e instanceof Array&&(e={values:e}),n=new m;var a,o,l,h=e.values,f=h.length-1,u=[],p={};if(f<0)return s;for(a=0;a<=f;a++)l=_(t,h[a],r,s,n,f!==a),u[a]=l.end;for(o in e)p[o]=e[o];return p.values=u,(s=new d(t,"bezier",0,0,l.pt,2)).data=l,s.plugin=n,s.setRatio=c,0===p.autoRotate&&(p.autoRotate=!0),!p.autoRotate||p.autoRotate instanceof Array||(a=!0===p.autoRotate?0:Number(p.autoRotate),p.autoRotate=null!=l.end.left?[["left","top","rotation",a,!1]]:null!=l.end.x&&[["x","y","rotation",a,!1]]),p.autoRotate&&(r._transform||r._enableTransforms(!1),l.autoRotate=r._target._fwdTransform,l.proxy.rotation=l.autoRotate.rotation||0,r._overwriteProps.push("rotation")),n._onInitTween(l.proxy,p,r._tween),s}}))},t._mod=function(t){for(var e,i=this._overwriteProps,r=i.length;-1<--r;)(e=t[i[r]])&&"function"==typeof e&&(this._mod[i[r]]=e)},t._kill=function(t){var e,i,r=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=r.length;-1<--i;)r[i]===e&&r.splice(i,1);if(r=this._autoRotate)for(i=r.length;-1<--i;)t[r[i][2]]&&r.splice(i,1);return this._super._kill.call(this,t)},_fwd_fwdScope.FWDFWD_fwdDefine("plugins.CSSPlugin",["plugins.TweenPlugin","FWDTweenLite"],function(n,B){var c,P,O,d,W=function(){n.call(this,"css"),this._overwriteProps.length=0,this.setRatio=W.prototype.setRatio},h=_fwd_fwdScope.FWDFWD_fwdDefine.globals,m={},t=W.prototype=new n("css");(t.constructor=W).version="1.19.0",W.API=2,W.defaultTransformPerspective=0,W.defaultSkewType="compensated",W.defaultSmoothOrigin=!0,t="px",W.suffixMap={top:t,right:t,bottom:t,left:t,width:t,height:t,fontSize:t,padding:t,margin:t,perspective:t,lineHeight:""};function a(t,e){return e.toUpperCase()}function e(t){return K.createElementNS?K.createElementNS("http://www.w3.org/1999/xhtml",t):K.createElement(t)}function o(t){return N.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1}function g(t){window.console&&console.log(t)}function k(t,e){var i,r,s=(e=e||J).style;if(void 0!==s[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],r=5;-1<--r&&void 0===s[i[r]+t];);return 0<=r?(st="-"+(nt=3===r?"ms":i[r]).toLowerCase()+"-",nt+t):null}function y(t,e){var i,r,s,n={};if(e=e||at(t,null))if(i=e.length)for(;-1<--i;)-1!==(s=e[i]).indexOf("-transform")&&It!==s||(n[s.replace(p,a)]=e.getPropertyValue(s));else for(i in e)-1!==i.indexOf("Transform")&&Xt!==i||(n[i]=e[i]);else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===n[i]&&(n[i.replace(p,a)]=e[i]);return rt||(n.opacity=o(t)),r=Zt(t,e,!1),n.rotation=r.rotation,n.skewX=r.skewX,n.scaleX=r.scaleX,n.scaleY=r.scaleY,n.x=r.x,n.y=r.y,Yt&&(n.z=r.z,n.rotationX=r.rotationX,n.rotationY=r.rotationY,n.scaleZ=r.scaleZ),n.filters&&delete n.filters,n}function v(t,e,i,r,s){var n,a,o,l={},h=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||s&&s[a])&&-1===a.indexOf("Origin")&&("number"!=typeof n&&"string"!=typeof n||(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(f,"")?n:0:ht(t,a),void 0!==h[a]&&(o=new vt(h,a,h[a],o))));if(r)for(a in r)"className"!==a&&(l[a]=r[a]);return{difs:l,firstMPT:o}}function R(t,e){return"function"==typeof t&&(t=t(D,F)),"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)||0}function S(t,e){return"function"==typeof t&&(t=t(D,F)),null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)||0}function A(t,e,i,r){var s,n,a,o,l;return"function"==typeof t&&(t=t(D,F)),(o=null==t?e:"number"==typeof t?t:(s=360,n=t.split("_"),a=((l="="===t.charAt(1))?parseInt(t.charAt(0)+"1",10)*parseFloat(n[0].substr(2)):parseFloat(n[0]))*(-1===t.indexOf("rad")?1:G)-(l?0:e),n.length&&(r&&(r[i]=e+a),-1!==t.indexOf("short")&&(a%=s)!==a%180&&(a=a<0?a+s:a-s),-1!==t.indexOf("_cw")&&a<0?a=(a+3599999999640)%s-(a/s|0)*s:-1!==t.indexOf("ccw")&&0<a&&(a=(a-3599999999640)%s-(a/s|0)*s)),e+a))<1e-6&&-1e-6<o&&(o=0),o}function _(t,e,i){return 255*(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(i-e)*t*6:t<.5?i:3*t<2?e+(i-e)*(2/3-t)*6:e)+.5|0}function r(t,e){for(var i,r,s=t.match(dt)||[],n=0,a=s.length?"":t,o=0;o<s.length;o++)i=s[o],n+=(r=t.substr(n,t.indexOf(i,n)-n)).length+i.length,3===(i=ct(i,e)).length&&i.push(1),a+=r+(e?"hsla("+i[0]+","+i[1]+"%,"+i[2]+"%,"+i[3]:"rgba("+i.join(","))+")";return a+t.substr(n)}var M,x,w,Y,T,C,F,D,i,s,z=/(?:\-|\.|\b)(\d|\.|e\-)+/g,X=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,b=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,f=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,I=/(?:\d|\-|\+|=|#|\.)*/g,N=/opacity *= *([^)]*)/i,E=/opacity:([^;]*)/i,l=/alpha\(opacity *=.+?\)/i,L=/^(rgb|hsl)/,u=/([A-Z])/g,p=/-([a-z])/gi,j=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,V=/(?:Left|Right|Width)/i,q=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,Z=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,U=/,(?=[^\)]*(?:\(|$))/gi,$=/[\s,\(]/i,Q=Math.PI/180,G=180/Math.PI,H={},K=document,J=e("div"),tt=e("img"),et=W._internals={_specialProps:m},it=navigator.userAgent,rt=(i=it.indexOf("Android"),s=e("a"),w=-1!==it.indexOf("Safari")&&-1===it.indexOf("Chrome")&&(-1===i||3<Number(it.substr(i+8,1))),T=w&&Number(it.substr(it.indexOf("Version/")+8,1))<6,Y=-1!==it.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(it)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(it))&&(C=parseFloat(RegExp.$1)),!!s&&(s.style.cssText="top:1px;opacity:.55;",/^0.55/.test(s.style.opacity))),st="",nt="",at=K.defaultView?K.defaultView.getComputedStyle:function(){},ot=W.style=function(t,e,i,r,s){var n;return rt||"opacity"!==e?(!r&&t.style[e]?n=t.style[e]:(i=i||at(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(u,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==s||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:s):o(t)},lt=et.convertToPixels=function(t,e,i,r,s){if("px"===r||!r)return i;if("auto"===r||!i)return 0;var n,a,o,l=V.test(e),h=t,f=J.style,u=i<0,p=1===i;if(u&&(i=-i),p&&(i*=100),"%"===r&&-1!==e.indexOf("border"))n=i/100*(l?t.clientWidth:t.clientHeight);else{if(f.cssText="border:0 solid red;position:"+ot(t,"position")+";line-height:0;","%"!==r&&h.appendChild&&"v"!==r.charAt(0)&&"rem"!==r)f[l?"borderLeftWidth":"borderTopWidth"]=i+r;else{if(a=(h=t.parentNode||K.body)._fwdCache,o=B.ticker.frame,a&&l&&a.time===o)return a.width*i/100;f[l?"width":"height"]=i+r}h.appendChild(J),n=parseFloat(J[l?"offsetWidth":"offsetHeight"]),h.removeChild(J),l&&"%"===r&&!1!==W.cacheWidths&&((a=h._fwdCache=h._fwdCache||{}).time=o,a.width=n/i*100),0!==n||s||(n=lt(t,e,i,r,!0))}return p&&(n/=100),u?-n:n},ht=et.calculateOffset=function(t,e,i){if("absolute"!==ot(t,"position",i))return 0;var r="left"===e?"Left":"Top",s=ot(t,"margin"+r,i);return t["offset"+r]-(lt(t,e,parseFloat(s),s.replace(I,""))||0)},ft={width:["Left","Right"],height:["Top","Bottom"]},ut=["marginLeft","marginRight","marginTop","marginBottom"],pt=function(t,e){if("contain"===t||"auto"===t||"auto auto"===t)return t+" ";null!=t&&""!==t||(t="0 0");var i,r=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":r[0],n=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":r[1];if(3<r.length&&!e){for(r=t.split(", ").join(",").split(","),t=[],i=0;i<r.length;i++)t.push(pt(r[i]));return t.join(",")}return null==n?n="center"===s?"50%":"0":"center"===n&&(n="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),t=s+" "+n+(2<r.length?" "+r[2]:""),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==n.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===n.charAt(1),e.ox=parseFloat(s.replace(f,"")),e.oy=parseFloat(n.replace(f,"")),e.v=t),e||t},_t={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ct=W.parseColor=function(t,e){var i,r,s,n,a,o,l,h,f,u,p;if(t)if("number"==typeof t)i=[t>>16,t>>8&255,255&t];else{if(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),_t[t])i=_t[t];else if("#"===t.charAt(0))4===t.length&&(t="#"+(r=t.charAt(1))+r+(s=t.charAt(2))+s+(n=t.charAt(3))+n),i=[(t=parseInt(t.substr(1),16))>>16,t>>8&255,255&t];else if("hsl"===t.substr(0,3))if(i=p=t.match(z),e){if(-1!==t.indexOf("="))return t.match(X)}else a=Number(i[0])%360/360,o=Number(i[1])/100,r=2*(l=Number(i[2])/100)-(s=l<=.5?l*(o+1):l+o-l*o),3<i.length&&(i[3]=Number(t[3])),i[0]=_(a+1/3,r,s),i[1]=_(a,r,s),i[2]=_(a-1/3,r,s);else i=t.match(z)||_t.transparent;i[0]=Number(i[0]),i[1]=Number(i[1]),i[2]=Number(i[2]),3<i.length&&(i[3]=Number(i[3]))}else i=_t.black;return e&&!p&&(r=i[0]/255,s=i[1]/255,n=i[2]/255,l=((h=Math.max(r,s,n))+(f=Math.min(r,s,n)))/2,h===f?a=o=0:(u=h-f,o=.5<l?u/(2-h-f):u/(h+f),a=h===r?(s-n)/u+(s<n?6:0):h===s?(n-r)/u+2:(r-s)/u+4,a*=60),i[0]=a+.5|0,i[1]=100*o+.5|0,i[2]=100*l+.5|0),i},dt="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(t in _t)dt+="|"+t+"\\b";dt=new RegExp(dt+")","gi"),W.colorStringFilter=function(t){var e,i=t[0]+t[1];dt.test(i)&&(e=-1!==i.indexOf("hsl(")||-1!==i.indexOf("hsla("),t[0]=r(t[0],e),t[1]=r(t[1],e)),dt.lastIndex=0},B.defaultStringFilter||(B.defaultStringFilter=W.colorStringFilter);function mt(t,e,n,a){if(null==t)return function(t){return t};var o,l=e?(t.match(dt)||[""])[0]:"",h=t.split(l).join("").match(b)||[],f=t.substr(0,t.indexOf(h[0])),u=")"===t.charAt(t.length-1)?")":"",p=-1!==t.indexOf(" ")?" ":",",_=h.length,c=0<_?h[0].replace(z,""):"";return _?o=e?function(t){var e,i,r,s;if("number"==typeof t)t+=c;else if(a&&U.test(t)){for(s=t.replace(U,"|").split("|"),r=0;r<s.length;r++)s[r]=o(s[r]);return s.join(",")}if(e=(t.match(dt)||[l])[0],r=(i=t.split(e).join("").match(b)||[]).length,_>r--)for(;++r<_;)i[r]=n?i[(r-1)/2|0]:h[r];return f+i.join(p)+p+e+u+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,i,r;if("number"==typeof t)t+=c;else if(a&&U.test(t)){for(i=t.replace(U,"|").split("|"),r=0;r<i.length;r++)i[r]=o(i[r]);return i.join(",")}if(r=(e=t.match(b)||[]).length,_>r--)for(;++r<_;)e[r]=n?e[(r-1)/2|0]:h[r];return f+e.join(p)+u}:function(t){return t}}function gt(h){return h=h.split(","),function(t,e,i,r,s,n,a){var o,l=(e+"").split(" ");for(a={},o=0;o<4;o++)a[h[o]]=l[o]=l[o]||l[(o-1)/2>>0];return r.parse(t,a,s,n)}}et._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,r,s,n,a=this.data,o=a.proxy,l=a.firstMPT;l;)e=o[l.v],l.r?e=Math.round(e):e<1e-6&&-1e-6<e&&(e=0),l.t[l.p]=e,l=l._next;if(a.autoRotate&&(a.autoRotate.rotation=a.mod?a.mod(o.rotation,this.t):o.rotation),1===t||0===t)for(l=a.firstMPT,n=1===t?"e":"b";l;){if((i=l.t).type){if(1===i.type){for(s=i.xs0+i.s+i.xs1,r=1;r<i.l;r++)s+=i["xn"+r]+i["xs"+(r+1)];i[n]=s}}else i[n]=i.s+i.xs0;l=l._next}};function yt(t,e,i,r,s,n){var a=new xt(t,e,i,r-i,s,-1,n);return a.b=i,a.e=a.xs0=r,a}var vt=function(t,e,i,r,s){this.t=t,this.p=e,this.v=i,this.r=s,r&&((r._prev=this)._next=r)},xt=(et._parseToProxy=function(t,e,i,r,s,n){var a,o,l,h,f,u=r,p={},_={},c=i._transform,d=H;for(i._transform=null,H=e,r=f=i.parse(t,e,r,s),H=d,n&&(i._transform=c,u&&(u._prev=null,u._prev&&(u._prev._next=null)));r&&r!==u;){if(r.type<=1&&(_[o=r.p]=r.s+r.c,p[o]=r.s,n||(h=new vt(r,"s",o,h,r.r),r.c=0),1===r.type))for(a=r.l;0<--a;)l="xn"+a,_[o=r.p+"_"+l]=r.data[l],p[o]=r[l],n||(h=new vt(r,l,o,h,r.rxp[l]));r=r._next}return{proxy:p,end:_,firstMPT:h,pt:f}},et.CSSPropTween=function(t,e,i,r,s,n,a,o,l,h,f){this.t=t,this.p=e,this.s=i,this.c=r,this.n=a||e,t instanceof xt||d.push(this.n),this.r=o,this.type=n||0,l&&(this.pr=l,c=!0),this.b=void 0===h?i:h,this.e=void 0===f?i+r:f,s&&((this._next=s)._prev=this)}),wt=W.parseComplex=function(t,e,i,r,s,n,a,o,l,h){i=i||n||"","function"==typeof r&&(r=r(D,F)),a=new xt(t,e,0,0,a,h?2:1,null,!1,o,i,r),r+="",s&&dt.test(r+i)&&(r=[i,r],W.colorStringFilter(r),i=r[0],r=r[1]);var f,u,p,_,c,d,m,g,y,v,x,w,T,b=i.split(", ").join(",").split(" "),P=r.split(", ").join(",").split(" "),O=b.length,k=!1!==M;for(-1===r.indexOf(",")&&-1===i.indexOf(",")||(b=b.join(" ").replace(U,", ").split(" "),P=P.join(" ").replace(U,", ").split(" "),O=b.length),O!==P.length&&(O=(b=(n||"").split(" ")).length),a.plugin=l,a.setRatio=h,f=dt.lastIndex=0;f<O;f++)if(_=b[f],c=P[f],(g=parseFloat(_))||0===g)a.appendXtra("",g,R(c,g),c.replace(X,""),k&&-1!==c.indexOf("px"),!0);else if(s&&dt.test(_))w=")"+((w=c.indexOf(")")+1)?c.substr(w):""),T=-1!==c.indexOf("hsl")&&rt,_=ct(_,T),c=ct(c,T),(y=6<_.length+c.length)&&!rt&&0===c[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(P[f]).join("transparent")):(rt||(y=!1),T?a.appendXtra(y?"hsla(":"hsl(",_[0],R(c[0],_[0]),",",!1,!0).appendXtra("",_[1],R(c[1],_[1]),"%,",!1).appendXtra("",_[2],R(c[2],_[2]),y?"%,":"%"+w,!1):a.appendXtra(y?"rgba(":"rgb(",_[0],c[0]-_[0],",",!0,!0).appendXtra("",_[1],c[1]-_[1],",",!0).appendXtra("",_[2],c[2]-_[2],y?",":w,!0),y&&(_=_.length<4?1:_[3],a.appendXtra("",_,(c.length<4?1:c[3])-_,w,!1))),dt.lastIndex=0;else if(d=_.match(z)){if(!(m=c.match(X))||m.length!==d.length)return a;for(u=p=0;u<d.length;u++)x=d[u],v=_.indexOf(x,p),a.appendXtra(_.substr(p,v-p),Number(x),R(m[u],x),"",k&&"px"===_.substr(v+x.length,2),0===u),p=v+x.length;a["xs"+a.l]+=_.substr(p)}else a["xs"+a.l]+=a.l||a["xs"+a.l]?" "+c:c;if(-1!==r.indexOf("=")&&a.data){for(w=a.xs0+a.data.s,f=1;f<a.l;f++)w+=a["xs"+f]+a.data["xn"+f];a.e=w+a["xs"+f]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},Tt=9;for((t=xt.prototype).l=t.pr=0;0<--Tt;)t["xn"+Tt]=0,t["xs"+Tt]="";t.xs0="",t._next=t._prev=t.xfirst=t.data=t.plugin=t.setRatio=t.rxp=null,t.appendXtra=function(t,e,i,r,s,n){var a=this,o=a.l;return a["xs"+o]+=n&&(o||a["xs"+o])?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=r||"",0<o?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=s,a["xn"+o]=e,a.plugin||(a.xfirst=new xt(a,"xn"+o,e,i,a.xfirst||a,0,a.n,s,a.pr),a.xfirst.xs0=0)):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=s),a):(a["xs"+o]+=e+(r||""),a)};function bt(t,e){e=e||{},this.p=e.prefix&&k(t)||t,(m[t]=m[this.p]=this).format=e.formatter||mt(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0}var Pt=et._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var r,s=t.split(","),n=e.defaultValue;for(i=i||[n],r=0;r<s.length;r++)e.prefix=0===r&&e.prefix,e.defaultValue=i[r]||n,new bt(s[r],e)},Ot=et._registerPluginProp=function(t){var l;m[t]||(l=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin",Pt(t,{parser:function(t,e,i,r,s,n,a){var o=h.com.fwd.plugins[l];return o?(o._cssRegister(),m[i].parse(t,e,i,r,s,n,a)):(g("Error: "+l+" js file not loaded."),s)}}))};(t=bt.prototype).parseComplex=function(t,e,i,r,s,n){var a,o,l,h,f,u,p=this.keyword;if(this.multi&&(U.test(i)||U.test(e)?(o=e.replace(U,"|").split("|"),l=i.replace(U,"|").split("|")):p&&(o=[e],l=[i])),l){for(h=l.length>o.length?l.length:o.length,a=0;a<h;a++)e=o[a]=o[a]||this.dflt,i=l[a]=l[a]||this.dflt,p&&(f=e.indexOf(p))!==(u=i.indexOf(p))&&(-1===u?o[a]=o[a].split(p).join(""):-1===f&&(o[a]+=" "+p));e=o.join(", "),i=l.join(", ")}return wt(t,this.p,e,i,this.clrs,this.dflt,r,this.pr,s,n)},t.parse=function(t,e,i,r,s,n,a){return this.parseComplex(t.style,this.format(ot(t,this.p,O,!1,this.dflt)),this.format(e),s,n)},W.registerSpecialProp=function(t,l,h){Pt(t,{parser:function(t,e,i,r,s,n,a){var o=new xt(t,i,0,0,s,2,i,!1,h);return o.plugin=n,o.setRatio=l(t,e,r._tween,i),o},priority:h})},W.useSVGTransformAttr=w||Y;function kt(t,e,i){var r,s=K.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(r in i)s.setAttributeNS(null,r.replace(n,"$1-$2").toLowerCase(),i[r]);return e.appendChild(s),s}function Rt(t,e,i,r,s,n){var a,o,l,h,f,u,p,_,c,d,m,g,y,v,x=t._fwdTransform,w=qt(t,!0);x&&(y=x.xOrigin,v=x.yOrigin),(!r||(a=r.split(" ")).length<2)&&(p=t.getBBox(),a=[(-1!==(e=pt(e).split(" "))[0].indexOf("%")?parseFloat(e[0])/100*p.width:parseFloat(e[0]))+p.x,(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*p.height:parseFloat(e[1]))+p.y]),i.xOrigin=h=parseFloat(a[0]),i.yOrigin=f=parseFloat(a[1]),r&&w!==Vt&&(u=w[0],p=w[1],_=w[2],c=w[3],d=w[4],o=h*(c/(g=u*c-p*_))+f*(-_/g)+(_*(m=w[5])-c*d)/g,l=h*(-p/g)+f*(u/g)-(u*m-p*d)/g,h=i.xOrigin=a[0]=o,f=i.yOrigin=a[1]=l),x&&(n&&(i.xOffset=x.xOffset,i.yOffset=x.yOffset,x=i),s||!1!==s&&!1!==W.defaultSmoothOrigin?(o=h-y,l=f-v,x.xOffset+=o*w[0]+l*w[2]-o,x.yOffset+=o*w[1]+l*w[3]-l):x.xOffset=x.yOffset=0),n||t.setAttribute("data-svg-origin",a.join(" "))}function St(t){var e,i,r=this.data,s=-r.rotation*Q,n=s+r.skewX*Q,a=1e5,o=(Math.cos(s)*r.scaleX*a|0)/a,l=(Math.sin(s)*r.scaleX*a|0)/a,h=(Math.sin(n)*-r.scaleY*a|0)/a,f=(Math.cos(n)*r.scaleY*a|0)/a,u=this.t.style,p=this.t.currentStyle;if(p){i=l,l=-h,h=-i,e=p.filter,u.filter="";var _=this.t.offsetWidth,c=this.t.offsetHeight,d="absolute"!==p.position,m="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+h+", M22="+f,g=r.x+_*r.xPercent/100,y=r.y+c*r.yPercent/100;if(null!=r.ox&&(g+=(b=(r.oxp?_*r.ox*.01:r.ox)-_/2)-(b*o+(P=(r.oyp?c*r.oy*.01:r.oy)-c/2)*l),y+=P-(b*h+P*f)),m+=d?", Dx="+((b=_/2)-(b*o+(P=c/2)*l)+g)+", Dy="+(P-(b*h+P*f)+y)+")":", sizingMethod='auto expand')",-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?u.filter=e.replace(Z,m):u.filter=m+" "+e,0!==t&&1!==t||1==o&&0===l&&0===h&&1==f&&(d&&-1===m.indexOf("Dx=0, Dy=0")||N.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf(e.indexOf("Alpha"))&&u.removeAttribute("filter")),!d){var v,x,w,T=C<8?1:-1,b=r.ieOffsetX||0,P=r.ieOffsetY||0;for(r.ieOffsetX=Math.round((_-((o<0?-o:o)*_+(l<0?-l:l)*c))/2+g),r.ieOffsetY=Math.round((c-((f<0?-f:f)*c+(h<0?-h:h)*_))/2+y),Tt=0;Tt<4;Tt++)w=(i=-1!==(v=p[x=ut[Tt]]).indexOf("px")?parseFloat(v):lt(this.t,x,parseFloat(v),v.replace(I,""))||0)!==r[x]?Tt<2?-r.ieOffsetX:-r.ieOffsetY:Tt<2?b-r.ieOffsetX:P-r.ieOffsetY,u[x]=(r[x]=Math.round(i-w*(0===Tt||2===Tt?1:T)))+"px"}}}var At,Mt,Ct,Ft,Dt,zt="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Xt=k("transform"),It=st+"transform",Nt=k("transformOrigin"),Yt=null!==k("perspective"),Et=et.Transform=function(){this.perspective=parseFloat(W.defaultTransformPerspective)||0,this.force3D=!(!1===W.defaultForce3D||!Yt)&&(W.defaultForce3D||"auto")},Bt=window.SVGElement,Wt=K.documentElement,Lt=(Dt=C||/Android/i.test(it)&&!window.chrome,K.createElementNS&&!Dt&&(Mt=kt("svg",Wt),Ft=(Ct=kt("rect",Mt,{width:100,height:50,x:100})).getBoundingClientRect().width,Ct.style[Nt]="50% 50%",Ct.style[Xt]="scaleX(0.5)",Dt=Ft===Ct.getBoundingClientRect().width&&!(Y&&Yt),Wt.removeChild(Mt)),Dt),jt=function(t){return!!(Bt&&t.getBBox&&t.getCTM&&function(t){try{return t.getBBox()}catch(t){}}(t)&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM))},Vt=[1,0,0,1,0,0],qt=function(t,e){var i,r,s,n,a,o,l=t._fwdTransform||new Et,h=t.style;if(Xt?r=ot(t,It,null,!0):t.currentStyle&&(r=(r=t.currentStyle.filter.match(q))&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),l.x||0,l.y||0].join(","):""),(i=!r||"none"===r||"matrix(1, 0, 0, 1, 0, 0)"===r)&&Xt&&((o="none"===at(t).display)||!t.parentNode)&&(o&&(n=h.display,h.display="block"),t.parentNode||(a=1,Wt.appendChild(t)),i=!(r=ot(t,It,null,!0))||"none"===r||"matrix(1, 0, 0, 1, 0, 0)"===r,n?h.display=n:o&&Gt(h,"display"),a&&Wt.removeChild(t)),(l.svg||t.getBBox&&jt(t))&&(i&&-1!==(h[Xt]+"").indexOf("matrix")&&(r=h[Xt],i=0),s=t.getAttribute("transform"),i&&s&&(-1!==s.indexOf("matrix")?(r=s,i=0):-1!==s.indexOf("translate")&&(r="matrix(1,0,0,1,"+s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",i=0))),i)return Vt;for(s=(r||"").match(z)||[],Tt=s.length;-1<--Tt;)n=Number(s[Tt]),s[Tt]=(a=n-(n|=0))?(1e5*a+(a<0?-.5:.5)|0)/1e5+n:n;return e&&6<s.length?[s[0],s[1],s[4],s[5],s[12],s[13]]:s},Zt=et.getTransform=function(t,e,i,r){if(t._fwdTransform&&i&&!r)return t._fwdTransform;var s,n,a,o,l,h,f,u,p,_,c,d,m,g,y,v,x,w,T,b,P,O,k,R,S,A,M,C,F,D,z,X,I=i&&t._fwdTransform||new Et,N=I.scaleX<0,Y=Yt&&(parseFloat(ot(t,Nt,e,!1,"0 0 0").split(" ")[2])||I.zOrigin)||0,E=parseFloat(W.defaultTransformPerspective)||0;if(I.svg=!(!t.getBBox||!jt(t)),I.svg&&(Rt(t,ot(t,Nt,e,!1,"50% 50%")+"",I,t.getAttribute("data-svg-origin")),At=W.useSVGTransformAttr||Lt),(s=qt(t))!==Vt)for(n in 16===s.length?(f=s[0],u=s[1],p=s[2],_=s[3],c=s[4],d=s[5],m=s[6],g=s[7],y=s[8],v=s[9],x=s[10],w=s[12],T=s[13],b=s[14],P=s[11],O=Math.atan2(m,x),I.zOrigin&&(w=y*(b=-I.zOrigin)-s[12],T=v*b-s[13],b=x*b+I.zOrigin-s[14]),I.rotationX=O*G,O&&(k=c*(A=Math.cos(-O))+y*(M=Math.sin(-O)),R=d*A+v*M,S=m*A+x*M,y=c*-M+y*A,v=d*-M+v*A,x=m*-M+x*A,P=g*-M+P*A,c=k,d=R,m=S),O=Math.atan2(-p,x),I.rotationY=O*G,O&&(R=u*(A=Math.cos(-O))-v*(M=Math.sin(-O)),S=p*A-x*M,v=u*M+v*A,x=p*M+x*A,P=_*M+P*A,f=k=f*A-y*M,u=R,p=S),O=Math.atan2(u,f),I.rotation=O*G,O&&(f=f*(A=Math.cos(-O))+c*(M=Math.sin(-O)),R=u*A+d*M,d=u*-M+d*A,m=p*-M+m*A,u=R),I.rotationX&&359.9<Math.abs(I.rotationX)+Math.abs(I.rotation)&&(I.rotationX=I.rotation=0,I.rotationY=180-I.rotationY),I.scaleX=(1e5*Math.sqrt(f*f+u*u)+.5|0)/1e5,I.scaleY=(1e5*Math.sqrt(d*d+v*v)+.5|0)/1e5,I.scaleZ=(1e5*Math.sqrt(m*m+x*x)+.5|0)/1e5,I.rotationX||I.rotationY?I.skewX=0:(I.skewX=c||d?Math.atan2(c,d)*G+I.rotation:I.skewX||0,90<Math.abs(I.skewX)&&Math.abs(I.skewX)<270&&(N?(I.scaleX*=-1,I.skewX+=I.rotation<=0?180:-180,I.rotation+=I.rotation<=0?180:-180):(I.scaleY*=-1,I.skewX+=I.skewX<=0?180:-180))),I.perspective=P?1/(P<0?-P:P):0,I.x=w,I.y=T,I.z=b,I.svg&&(I.x-=I.xOrigin-(I.xOrigin*f-I.yOrigin*c),I.y-=I.yOrigin-(I.yOrigin*u-I.xOrigin*d))):Yt&&!r&&s.length&&I.x===s[4]&&I.y===s[5]&&(I.rotationX||I.rotationY)||(F=(C=6<=s.length)?s[0]:1,D=s[1]||0,z=s[2]||0,X=C?s[3]:1,I.x=s[4]||0,I.y=s[5]||0,a=Math.sqrt(F*F+D*D),o=Math.sqrt(X*X+z*z),l=F||D?Math.atan2(D,F)*G:I.rotation||0,h=z||X?Math.atan2(z,X)*G+l:I.skewX||0,90<Math.abs(h)&&Math.abs(h)<270&&(N?(a*=-1,h+=l<=0?180:-180,l+=l<=0?180:-180):(o*=-1,h+=h<=0?180:-180)),I.scaleX=a,I.scaleY=o,I.rotation=l,I.skewX=h,Yt&&(I.rotationX=I.rotationY=I.z=0,I.perspective=E,I.scaleZ=1),I.svg&&(I.x-=I.xOrigin-(I.xOrigin*F+I.yOrigin*z),I.y-=I.yOrigin-(I.xOrigin*D+I.yOrigin*X))),I.zOrigin=Y,I)I[n]<2e-5&&-2e-5<I[n]&&(I[n]=0);return i&&(t._fwdTransform=I).svg&&(At&&t.style[Xt]?B.delayedCall(.001,function(){Gt(t.style,Xt)}):!At&&t.getAttribute("transform")&&B.delayedCall(.001,function(){t.removeAttribute("transform")})),I},Ut=et.set3DTransformRatio=et.setTransformRatio=function(t){var e,i,r,s,n,a,o,l,h,f,u,p,_,c,d,m,g,y,v,x,w,T,b,P=this.data,O=this.t.style,k=P.rotation,R=P.rotationX,S=P.rotationY,A=P.scaleX,M=P.scaleY,C=P.scaleZ,F=P.x,D=P.y,z=P.z,X=P.svg,I=P.perspective,N=P.force3D;if(!((1!==t&&0!==t||"auto"!==N||this.tween._totalTime!==this.tween._totalDuration&&this.tween._totalTime)&&N||z||I||S||R||1!==C)||At&&X||!Yt)k||P.skewX||X?(k*=Q,T=P.skewX*Q,b=1e5,e=Math.cos(k)*A,s=Math.sin(k)*A,i=Math.sin(k-T)*-M,n=Math.cos(k-T)*M,T&&"simple"===P.skewType&&(g=Math.tan(T-P.skewY*Q),i*=g=Math.sqrt(1+g*g),n*=g,P.skewY&&(g=Math.tan(P.skewY*Q),e*=g=Math.sqrt(1+g*g),s*=g)),X&&(F+=P.xOrigin-(P.xOrigin*e+P.yOrigin*i)+P.xOffset,D+=P.yOrigin-(P.xOrigin*s+P.yOrigin*n)+P.yOffset,At&&(P.xPercent||P.yPercent)&&(c=this.t.getBBox(),F+=.01*P.xPercent*c.width,D+=.01*P.yPercent*c.height),F<(c=1e-6)&&-c<F&&(F=0),D<c&&-c<D&&(D=0)),v=(e*b|0)/b+","+(s*b|0)/b+","+(i*b|0)/b+","+(n*b|0)/b+","+F+","+D+")",X&&At?this.t.setAttribute("transform","matrix("+v):O[Xt]=(P.xPercent||P.yPercent?"translate("+P.xPercent+"%,"+P.yPercent+"%) matrix(":"matrix(")+v):O[Xt]=(P.xPercent||P.yPercent?"translate("+P.xPercent+"%,"+P.yPercent+"%) matrix(":"matrix(")+A+",0,0,"+M+","+F+","+D+")";else{if(Y&&(A<(c=1e-4)&&-c<A&&(A=C=2e-5),M<c&&-c<M&&(M=C=2e-5),!I||P.z||P.rotationX||P.rotationY||(I=0)),k||P.skewX)k*=Q,d=e=Math.cos(k),m=s=Math.sin(k),P.skewX&&(k-=P.skewX*Q,d=Math.cos(k),m=Math.sin(k),"simple"===P.skewType&&(g=Math.tan((P.skewX-P.skewY)*Q),d*=g=Math.sqrt(1+g*g),m*=g,P.skewY&&(g=Math.tan(P.skewY*Q),e*=g=Math.sqrt(1+g*g),s*=g))),i=-m,n=d;else{if(!(S||R||1!==C||I||X))return void(O[Xt]=(P.xPercent||P.yPercent?"translate("+P.xPercent+"%,"+P.yPercent+"%) translate3d(":"translate3d(")+F+"px,"+D+"px,"+z+"px)"+(1!==A||1!==M?" scale("+A+","+M+")":""));e=n=1,i=s=0}h=1,r=a=o=l=f=u=0,p=I?-1/I:0,_=P.zOrigin,c=1e-6,x=",",w="0",(k=S*Q)&&(d=Math.cos(k),f=p*(o=-(m=Math.sin(k))),r=e*m,a=s*m,p*=h=d,e*=d,s*=d),(k=R*Q)&&(g=i*(d=Math.cos(k))+r*(m=Math.sin(k)),y=n*d+a*m,l=h*m,u=p*m,r=i*-m+r*d,a=n*-m+a*d,h*=d,p*=d,i=g,n=y),1!==C&&(r*=C,a*=C,h*=C,p*=C),1!==M&&(i*=M,n*=M,l*=M,u*=M),1!==A&&(e*=A,s*=A,o*=A,f*=A),(_||X)&&(_&&(F+=r*-_,D+=a*-_,z+=h*-_+_),X&&(F+=P.xOrigin-(P.xOrigin*e+P.yOrigin*i)+P.xOffset,D+=P.yOrigin-(P.xOrigin*s+P.yOrigin*n)+P.yOffset),F<c&&-c<F&&(F=w),D<c&&-c<D&&(D=w),z<c&&-c<z&&(z=0)),v=P.xPercent||P.yPercent?"translate("+P.xPercent+"%,"+P.yPercent+"%) matrix3d(":"matrix3d(",v+=(e<c&&-c<e?w:e)+x+(s<c&&-c<s?w:s)+x+(o<c&&-c<o?w:o),v+=x+(f<c&&-c<f?w:f)+x+(i<c&&-c<i?w:i)+x+(n<c&&-c<n?w:n),R||S||1!==C?(v+=x+(l<c&&-c<l?w:l)+x+(u<c&&-c<u?w:u)+x+(r<c&&-c<r?w:r),v+=x+(a<c&&-c<a?w:a)+x+(h<c&&-c<h?w:h)+x+(p<c&&-c<p?w:p)+x):v+=",0,0,0,0,1,0,",v+=F+x+D+x+z+x+(I?1+-z/I:1)+")",O[Xt]=v}};(t=Et.prototype).x=t.y=t.z=t.skewX=t.skewY=t.rotation=t.rotationX=t.rotationY=t.zOrigin=t.xPercent=t.yPercent=t.xOffset=t.yOffset=0,t.scaleX=t.scaleY=t.scaleZ=1,Pt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(t,e,i,r,s,n,a){if(r._lastParsedTransform===a)return s;var o;"function"==typeof(r._lastParsedTransform=a)[i]&&(o=a[i],a[i]=e);var l,h,f,u,p,_,c,d,m,g=t._fwdTransform,y=t.style,v=zt.length,x=a,w={},T="transformOrigin",b=Zt(t,O,!0,x.parseTransform),P=x.transform&&("function"==typeof x.transform?x.transform(D,F):x.transform);if(r._transform=b,P&&"string"==typeof P&&Xt)(h=J.style)[Xt]=P,h.display="block",h.position="absolute",K.body.appendChild(J),l=Zt(J,null,!1),b.svg&&(_=b.xOrigin,c=b.yOrigin,l.x-=b.xOffset,l.y-=b.yOffset,(x.transformOrigin||x.svgOrigin)&&(P={},Rt(t,pt(x.transformOrigin),P,x.svgOrigin,x.smoothOrigin,!0),_=P.xOrigin,c=P.yOrigin,l.x-=P.xOffset-b.xOffset,l.y-=P.yOffset-b.yOffset),(_||c)&&(d=qt(J,!0),l.x-=_-(_*d[0]+c*d[2]),l.y-=c-(_*d[1]+c*d[3]))),K.body.removeChild(J),l.perspective||(l.perspective=b.perspective),null!=x.xPercent&&(l.xPercent=S(x.xPercent,b.xPercent)),null!=x.yPercent&&(l.yPercent=S(x.yPercent,b.yPercent));else if("object"==typeof x){if(l={scaleX:S(null!=x.scaleX?x.scaleX:x.scale,b.scaleX),scaleY:S(null!=x.scaleY?x.scaleY:x.scale,b.scaleY),scaleZ:S(x.scaleZ,b.scaleZ),x:S(x.x,b.x),y:S(x.y,b.y),z:S(x.z,b.z),xPercent:S(x.xPercent,b.xPercent),yPercent:S(x.yPercent,b.yPercent),perspective:S(x.transformPerspective,b.perspective)},null!=(p=x.directionalRotation))if("object"==typeof p)for(h in p)x[h]=p[h];else x.rotation=p;"string"==typeof x.x&&-1!==x.x.indexOf("%")&&(l.x=0,l.xPercent=S(x.x,b.xPercent)),"string"==typeof x.y&&-1!==x.y.indexOf("%")&&(l.y=0,l.yPercent=S(x.y,b.yPercent)),l.rotation=A("rotation"in x?x.rotation:"shortRotation"in x?x.shortRotation+"_short":"rotationZ"in x?x.rotationZ:b.rotation-b.skewY,b.rotation-b.skewY,"rotation",w),Yt&&(l.rotationX=A("rotationX"in x?x.rotationX:"shortRotationX"in x?x.shortRotationX+"_short":b.rotationX||0,b.rotationX,"rotationX",w),l.rotationY=A("rotationY"in x?x.rotationY:"shortRotationY"in x?x.shortRotationY+"_short":b.rotationY||0,b.rotationY,"rotationY",w)),l.skewX=A(x.skewX,b.skewX-b.skewY),(l.skewY=A(x.skewY,b.skewY))&&(l.skewX+=l.skewY,l.rotation+=l.skewY)}for(Yt&&null!=x.force3D&&(b.force3D=x.force3D,u=!0),b.skewType=x.skewType||b.skewType||W.defaultSkewType,(f=b.force3D||b.z||b.rotationX||b.rotationY||l.z||l.rotationX||l.rotationY||l.perspective)||null==x.scale||(l.scaleZ=1);-1<--v;)(1e-6<(P=l[m=zt[v]]-b[m])||P<-1e-6||null!=x[m]||null!=H[m])&&(u=!0,s=new xt(b,m,b[m],P,s),m in w&&(s.e=w[m]),s.xs0=0,s.plugin=n,r._overwriteProps.push(s.n));return P=x.transformOrigin,b.svg&&(P||x.svgOrigin)&&(_=b.xOffset,c=b.yOffset,Rt(t,pt(P),l,x.svgOrigin,x.smoothOrigin),s=yt(b,"xOrigin",(g?b:l).xOrigin,l.xOrigin,s,T),s=yt(b,"yOrigin",(g?b:l).yOrigin,l.yOrigin,s,T),_===b.xOffset&&c===b.yOffset||(s=yt(b,"xOffset",g?_:b.xOffset,b.xOffset,s,T),s=yt(b,"yOffset",g?c:b.yOffset,b.yOffset,s,T)),P=At?null:"0px 0px"),(P||Yt&&f&&b.zOrigin)&&(Xt?(u=!0,m=Nt,P=(P||ot(t,m,O,!1,"50% 50%"))+"",(s=new xt(y,m,0,0,s,-1,T)).b=y[m],s.plugin=n,Yt?(h=b.zOrigin,P=P.split(" "),b.zOrigin=(2<P.length&&(0===h||"0px"!==P[2])?parseFloat(P[2]):h)||0,s.xs0=s.e=P[0]+" "+(P[1]||"50%")+" 0px",(s=new xt(b,"zOrigin",0,0,s,-1,s.n)).b=h,s.xs0=s.e=b.zOrigin):s.xs0=s.e=P):pt(P+"",b)),u&&(r._transformType=b.svg&&At||!f&&3!==this._transformType?2:3),o&&(a[i]=o),s},prefix:!0}),Pt("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),Pt("borderRadius",{defaultValue:"0px",parser:function(t,e,i,r,s,n){e=this.format(e);for(var a,o,l,h,f,u,p,_,c,d,m,g,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],v=t.style,x=parseFloat(t.offsetWidth),w=parseFloat(t.offsetHeight),T=e.split(" "),b=0;b<y.length;b++)this.p.indexOf("border")&&(y[b]=k(y[b])),-1!==(l=o=ot(t,y[b],O,!1,"0px")).indexOf(" ")&&(l=(o=l.split(" "))[0],o=o[1]),h=a=T[b],f=parseFloat(l),_=l.substr((f+"").length),""===(p=(c="="===h.charAt(1))?(u=parseInt(h.charAt(0)+"1",10),h=h.substr(2),u*=parseFloat(h),h.substr((u+"").length-(u<0?1:0))||""):(u=parseFloat(h),h.substr((u+"").length)))&&(p=P[i]||_),p!==_&&(d=lt(t,"borderLeft",f,_),m=lt(t,"borderTop",f,_),o="%"===p?(l=d/x*100+"%",m/w*100+"%"):"em"===p?(l=d/(g=lt(t,"borderLeft",1,"em"))+"em",m/g+"em"):(l=d+"px",m+"px"),c&&(h=parseFloat(l)+u+p,a=parseFloat(o)+u+p)),s=wt(v,y[b],l+" "+o,h+" "+a,!1,"0px",s);return s},prefix:!0,formatter:mt("0px 0px 0px 0px",!1,!0)}),Pt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(t,e,i,r,s,n){return wt(t.style,i,this.format(ot(t,i,O,!1,"0px 0px")),this.format(e),!1,"0px",s)},prefix:!0,formatter:mt("0px 0px",!1,!0)}),Pt("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,r,s,n){var a,o,l,h,f,u,p="background-position",_=O||at(t,null),c=this.format((_?C?_.getPropertyValue(p+"-x")+" "+_.getPropertyValue(p+"-y"):_.getPropertyValue(p):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),d=this.format(e);if(-1!==c.indexOf("%")!=(-1!==d.indexOf("%"))&&d.split(",").length<2&&(u=ot(t,"backgroundImage").replace(j,""))&&"none"!==u){for(a=c.split(" "),o=d.split(" "),tt.setAttribute("src",u),l=2;-1<--l;)(h=-1!==(c=a[l]).indexOf("%"))!=(-1!==o[l].indexOf("%"))&&(f=0===l?t.offsetWidth-tt.width:t.offsetHeight-tt.height,a[l]=h?parseFloat(c)/100*f+"px":parseFloat(c)/f*100+"%");c=a.join(" ")}return this.parseComplex(t.style,c,d,s,n)},formatter:pt}),Pt("backgroundSize",{defaultValue:"0 0",formatter:function(t){return pt(-1===(t+="").indexOf(" ")?t+" "+t:t)}}),Pt("perspective",{defaultValue:"0px",prefix:!0}),Pt("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),Pt("transformStyle",{prefix:!0}),Pt("backfaceVisibility",{prefix:!0}),Pt("userSelect",{prefix:!0}),Pt("margin",{parser:gt("marginTop,marginRight,marginBottom,marginLeft")}),Pt("padding",{parser:gt("paddingTop,paddingRight,paddingBottom,paddingLeft")}),Pt("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,r,s,n){var a,o,l;return e=C<9?(o=t.currentStyle,l=C<8?" ":",",a="rect("+o.clipTop+l+o.clipRight+l+o.clipBottom+l+o.clipLeft+")",this.format(e).split(",").join(l)):(a=this.format(ot(t,this.p,O,!1,this.dflt)),this.format(e)),this.parseComplex(t.style,a,e,s,n)}}),Pt("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),Pt("autoRound,strictUnits",{parser:function(t,e,i,r,s){return s}}),Pt("border",{defaultValue:"0px solid #000",parser:function(t,e,i,r,s,n){var a=ot(t,"borderTopWidth",O,!1,"0px"),o=this.format(e).split(" "),l=o[0].replace(I,"");return"px"!==l&&(a=parseFloat(a)/lt(t,"borderTopWidth",1,l)+l),this.parseComplex(t.style,this.format(a+" "+ot(t,"borderTopStyle",O,!1,"solid")+" "+ot(t,"borderTopColor",O,!1,"#000")),o.join(" "),s,n)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(dt)||["#000"])[0]}}),Pt("borderWidth",{parser:gt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),Pt("float,cssFloat,styleFloat",{parser:function(t,e,i,r,s,n){var a=t.style,o="cssFloat"in a?"cssFloat":"styleFloat";return new xt(a,o,0,0,s,-1,i,!1,0,a[o],e)}});function $t(t){var e,i=this.t,r=i.filter||ot(this.data,"filter")||"",s=this.s+this.c*t|0;100==s&&(e=-1===r.indexOf("atrix(")&&-1===r.indexOf("radient(")&&-1===r.indexOf("oader(")?(i.removeAttribute("filter"),!ot(this.data,"filter")):(i.filter=r.replace(l,""),!0)),e||(this.xn1&&(i.filter=r=r||"alpha(opacity="+s+")"),-1===r.indexOf("pacity")?0==s&&this.xn1||(i.filter=r+" alpha(opacity="+s+")"):i.filter=r.replace(N,"opacity="+s))}Pt("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,r,s,n){var a=parseFloat(ot(t,"opacity",O,!1,"1")),o=t.style,l="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+a),l&&1===a&&"hidden"===ot(t,"visibility",O)&&0!==e&&(a=0),rt?s=new xt(o,"opacity",a,e-a,s):((s=new xt(o,"opacity",100*a,100*(e-a),s)).xn1=l?1:0,o.zoom=1,s.type=2,s.b="alpha(opacity="+s.s+")",s.e="alpha(opacity="+(s.s+s.c)+")",s.data=t,s.plugin=n,s.setRatio=$t),l&&((s=new xt(o,"visibility",0,0,s,-1,null,!1,0,0!==a?"inherit":"hidden",0===e?"hidden":"inherit")).xs0="inherit",r._overwriteProps.push(s.n),r._overwriteProps.push(i)),s}});function Qt(t){if(this.t._fwdClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Gt(i,e.p),e=e._next;1===t&&this.t._fwdClassPT===this&&(this.t._fwdClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)}var Gt=function(t,e){e&&(t.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),t.removeProperty(e.replace(u,"-$1").toLowerCase())):t.removeAttribute(e))};Pt("className",{parser:function(t,e,i,r,s,n,a){var o,l,h,f,u,p=t.getAttribute("class")||"",_=t.style.cssText;if((s=r._classNamePT=new xt(t,i,0,0,s,2)).setRatio=Qt,s.pr=-11,c=!0,s.b=p,l=y(t,O),h=t._fwdClassPT){for(f={},u=h.data;u;)f[u.p]=1,u=u._next;h.setRatio(1)}return(t._fwdClassPT=s).e="="!==e.charAt(1)?e:p.replace(new RegExp("(?:\\s|^)"+e.substr(2)+"(?![\\w-])"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),t.setAttribute("class",s.e),o=v(t,l,y(t),a,f),t.setAttribute("class",p),s.data=o.firstMPT,t.style.cssText=_,s=s.xfirst=r.parse(t,o.difs,s,n)}});function Ht(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,r,s,n,a=this.t.style,o=m.transform.parse;if("all"===this.e)s=!(a.cssText="");else for(r=(e=this.e.split(" ").join("").split(",")).length;-1<--r;)i=e[r],m[i]&&(m[i].parse===o?s=!0:i="transformOrigin"===i?Nt:m[i].p),Gt(a,i);s&&(Gt(a,Xt),(n=this.t._fwdTransform)&&(n.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._fwdTransform))}}for(Pt("clearProps",{parser:function(t,e,i,r,s){return(s=new xt(t,i,0,0,s,2)).setRatio=Ht,s.e=e,s.pr=-10,s.data=r._tween,c=!0,s}}),t="bezier,throwProps,physicsProps,physics2D".split(","),Tt=t.length;Tt--;)Ot(t[Tt]);(t=W.prototype)._firstPT=t._lastParsedTransform=t._transform=null,t._onInitTween=function(t,e,i,r){if(!t.nodeType)return!1;this._target=F=t,this._tween=i,this._vars=e,D=r,M=e.autoRound,c=!1,P=e.suffixMap||W.suffixMap,O=at(t,""),d=this._overwriteProps;var s,n,a,o,l,h,f,u,p,_=t.style;if(x&&""===_.zIndex&&("auto"!==(s=ot(t,"zIndex",O))&&""!==s||this._addLazySet(_,"zIndex",0)),"string"==typeof e&&(o=_.cssText,s=y(t,O),_.cssText=o+";"+e,s=v(t,s,y(t)).difs,!rt&&E.test(e)&&(s.opacity=parseFloat(RegExp.$1)),e=s,_.cssText=o),e.className?this._firstPT=n=m.className.parse(t,e.className,"className",this,null,null,e):this._firstPT=n=this.parse(t,e,null),this._transformType){for(p=3===this._transformType,Xt?w&&(x=!0,""===_.zIndex&&("auto"!==(f=ot(t,"zIndex",O))&&""!==f||this._addLazySet(_,"zIndex",0)),T&&this._addLazySet(_,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(p?"visible":"hidden"))):_.zoom=1,a=n;a&&a._next;)a=a._next;u=new xt(t,"transform",0,0,null,2),this._linkCSSP(u,null,a),u.setRatio=Xt?Ut:St,u.data=this._transform||Zt(t,O,!0),u.tween=i,u.pr=-1,d.pop()}if(c){for(;n;){for(h=n._next,a=o;a&&a.pr>n.pr;)a=a._next;(n._prev=a?a._prev:l)?n._prev._next=n:o=n,(n._next=a)?a._prev=n:l=n,n=h}this._firstPT=o}return!0},t.parse=function(t,e,i,r){var s,n,a,o,l,h,f,u,p,_,c=t.style;for(s in e)"function"==typeof(h=e[s])&&(h=h(D,F)),(n=m[s])?i=n.parse(t,h,s,this,i,r,e):(l=ot(t,s,O)+"",p="string"==typeof h,"color"===s||"fill"===s||"stroke"===s||-1!==s.indexOf("Color")||p&&L.test(h)?(p||(h=(3<(h=ct(h)).length?"rgba(":"rgb(")+h.join(",")+")"),i=wt(c,s,l,h,!0,"transparent",i,0,r)):p&&$.test(h)?i=wt(c,s,l,h,!0,null,i,0,r):(f=(a=parseFloat(l))||0===a?l.substr((a+"").length):"",""!==l&&"auto"!==l||(f="width"===s||"height"===s?(a=function(t,e,i){if("svg"===(t.nodeName+"").toLowerCase())return(i||at(t))[e]||0;if(t.getBBox&&jt(t))return t.getBBox()[e]||0;var r=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),s=ft[e],n=s.length;for(i=i||at(t,null);-1<--n;)r-=parseFloat(ot(t,"padding"+s[n],i,!0))||0,r-=parseFloat(ot(t,"border"+s[n]+"Width",i,!0))||0;return r}(t,s,O),"px"):"left"===s||"top"===s?(a=ht(t,s,O),"px"):(a="opacity"!==s?0:1,"")),""===(u=(_=p&&"="===h.charAt(1))?(o=parseInt(h.charAt(0)+"1",10),h=h.substr(2),o*=parseFloat(h),h.replace(I,"")):(o=parseFloat(h),p?h.replace(I,""):""))&&(u=s in P?P[s]:f),h=o||0===o?(_?o+a:o)+u:e[s],f!==u&&""!==u&&(o||0===o)&&a&&(a=lt(t,s,a,f),"%"===u?(a/=lt(t,s,100,"%")/100,!0!==e.strictUnits&&(l=a+"%")):"em"===u||"rem"===u||"vw"===u||"vh"===u?a/=lt(t,s,1,u):"px"!==u&&(o=lt(t,s,o,u),u="px"),_&&(!o&&0!==o||(h=o+a+u))),_&&(o+=a),!a&&0!==a||!o&&0!==o?void 0!==c[s]&&(h||h+""!="NaN"&&null!=h)?(i=new xt(c,s,o||a||0,0,i,-1,s,!1,0,l,h)).xs0="none"!==h||"display"!==s&&-1===s.indexOf("Style")?h:l:g("invalid "+s+" tween value: "+e[s]):(i=new xt(c,s,a,o-a,i,0,s,!1!==M&&("px"===u||"zIndex"===s),0,l,h)).xs0=u)),r&&i&&!i.plugin&&(i.plugin=r);return i},t.setRatio=function(t){var e,i,r,s=this._firstPT;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||-1e-6===this._tween._rawPrevTime)for(;s;){if(e=s.c*t+s.s,s.r?e=Math.round(e):e<1e-6&&-1e-6<e&&(e=0),s.type)if(1===s.type)if(2===(r=s.l))s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2;else if(3===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3;else if(4===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4;else if(5===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4+s.xn4+s.xs5;else{for(i=s.xs0+e+s.xs1,r=1;r<s.l;r++)i+=s["xn"+r]+s["xs"+(r+1)];s.t[s.p]=i}else-1===s.type?s.t[s.p]=s.xs0:s.setRatio&&s.setRatio(t);else s.t[s.p]=e+s.xs0;s=s._next}else for(;s;)2!==s.type?s.t[s.p]=s.b:s.setRatio(t),s=s._next;else for(;s;){if(2!==s.type)if(s.r&&-1!==s.type)if(e=Math.round(s.s+s.c),s.type){if(1===s.type){for(r=s.l,i=s.xs0+e+s.xs1,r=1;r<s.l;r++)i+=s["xn"+r]+s["xs"+(r+1)];s.t[s.p]=i}}else s.t[s.p]=e+s.xs0;else s.t[s.p]=s.e;else s.setRatio(t);s=s._next}},t._enableTransforms=function(t){this._transform=this._transform||Zt(this._target,O,!0),this._transformType=this._transform.svg&&At||!t&&3!==this._transformType?2:3};function Kt(t){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)}t._addLazySet=function(t,e,i){var r=this._firstPT=new xt(t,e,0,0,this._firstPT,2);r.e=i,r.setRatio=Kt,r.data=this},t._linkCSSP=function(t,e,i,r){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,r=!0),i?i._next=t:r||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},t._mod=function(t){for(var e=this._firstPT;e;)"function"==typeof t[e.p]&&t[e.p]===Math.round&&(e.r=1),e=e._next},t._kill=function(t){var e,i,r,s=t;if(t.autoAlpha||t.alpha){for(i in s={},t)s[i]=t[i];s.opacity=1,s.autoAlpha&&(s.visibility=1)}for(t.className&&(e=this._classNamePT)&&((r=e.xfirst)&&r._prev?this._linkCSSP(r._prev,e._next,r._prev._prev):r===this._firstPT&&(this._firstPT=e._next),e._next&&this._linkCSSP(e._next,e._next._next,r._prev),this._classNamePT=null),e=this._firstPT;e;)e.plugin&&e.plugin!==i&&e.plugin._kill&&(e.plugin._kill(t),i=e.plugin),e=e._next;return n.prototype._kill.call(this,s)};var Jt=function(t,e,i){var r,s,n,a;if(t.slice)for(s=t.length;-1<--s;)Jt(t[s],e,i);else for(s=(r=t.childNodes).length;-1<--s;)a=(n=r[s]).type,n.style&&(e.push(y(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Jt(n,e,i)};return W.cascadeTo=function(t,e,i){var r,s,n,a,o=B.to(t,e,i),l=[o],h=[],f=[],u=[],p=B._internals.reservedProps;for(t=o._targets||o.target,Jt(t,h,u),o.render(e,!0,!0),Jt(t,f),o.render(0,!0,!0),o._enabled(!0),r=u.length;-1<--r;)if((s=v(u[r],h[r],f[r])).firstMPT){for(n in s=s.difs,i)p[n]&&(s[n]=i[n]);for(n in a={},s)a[n]=h[r][n];l.push(B.fromTo(u[r],e,a,s))}return l},n.activate([W]),W},!0),_fwd_fwdScope.FWDFWD_fwdDefine("easing.Back",["easing.Ease"],function(m){function t(t,e){var i=f("easing."+t,function(){},!0),r=i.prototype=new m;return r.constructor=i,r.getRatio=e,i}function e(t,e,i,r,s){var n=f("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new r},!0);return u(n,t),n}function g(t,e,i){this.t=t,this.v=e,i&&(((this.next=i).prev=this).c=i.v-e,this.gap=i.t-t)}function i(t,e){var i=f("easing."+t,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=i.prototype=new m;return r.constructor=i,r.getRatio=e,r.config=function(t){return new i(t)},i}var r,s,n,a=_fwd_fwdScope.FWDGlobals||_fwd_fwdScope,o=a.com.fwd,l=2*Math.PI,h=Math.PI/2,f=o._class,u=m.register||function(){},p=e("Back",i("BackOut",function(t){return--t*t*((this._p1+1)*t+this._p1)+1}),i("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),i("BackInOut",function(t){return(t*=2)<1?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),_=f("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:1<t&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=!0===i},!0),c=_.prototype=new m;return c.constructor=_,c.getRatio=function(t){var e=t+(.5-t)*this._p;return t<this._p1?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},_.ease=new _(.7,.7),c.config=_.config=function(t,e,i){return new _(t,e,i)},(c=(r=f("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0)).prototype=new m).constructor=r,c.getRatio=function(t){return t<0?t=0:1<=t&&(t=.999999999),(this._p2*t>>0)*this._p1},c.config=r.config=function(t){return new r(t)},(c=(s=f("easing.RoughEase",function(t){for(var e,i,r,s,n,a,o=(t=t||{}).taper||"none",l=[],h=0,f=0|(t.points||20),u=f,p=!1!==t.randomize,_=!0===t.clamp,c=t.template instanceof m?t.template:null,d="number"==typeof t.strength?.4*t.strength:.4;-1<--u;)e=p?Math.random():1/f*u,i=c?c.getRatio(e):e,r="none"===o?d:"out"===o?(s=1-e)*s*d:"in"===o?e*e*d:e<.5?(s=2*e)*s*.5*d:(s=2*(1-e))*s*.5*d,p?i+=Math.random()*r-.5*r:u%2?i+=.5*r:i-=.5*r,_&&(1<i?i=1:i<0&&(i=0)),l[h++]={x:e,y:i};for(l.sort(function(t,e){return t.x-e.x}),a=new g(1,1,null),u=f;-1<--u;)n=l[u],a=new g(n.x,n.y,a);this._prev=new g(0,0,0!==a.t?a:a.next)},!0)).prototype=new m).constructor=s,c.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&t<=e.t;)e=e.prev;return(this._prev=e).v+(t-e.t)/e.gap*e.c},c.config=function(t){return new s(t)},s.ease=new s,e("Bounce",t("BounceOut",function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),t("BounceIn",function(t){return(t=1-t)<1/2.75?1-7.5625*t*t:t<2/2.75?1-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),t("BounceInOut",function(t){var e=t<.5;return(t=e?1-2*t:2*t-1)<1/2.75?t*=7.5625*t:t=t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),e("Circ",t("CircOut",function(t){return Math.sqrt(1- --t*t)}),t("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),t("CircInOut",function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),e("Elastic",(n=function(t,e,i){var r=f("easing."+t,function(t,e){this._p1=1<=t?t:1,this._p2=(e||i)/(t<1?t:1),this._p3=this._p2/l*(Math.asin(1/this._p1)||0),this._p2=l/this._p2},!0),s=r.prototype=new m;return s.constructor=r,s.getRatio=e,s.config=function(t,e){return new r(t,e)},r})("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*this._p2)+1},.3),n("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*--t)*Math.sin((t-this._p3)*this._p2))},.3),n("ElasticInOut",function(t){return(t*=2)<1?this._p1*Math.pow(2,10*--t)*Math.sin((t-this._p3)*this._p2)*-.5:this._p1*Math.pow(2,-10*--t)*Math.sin((t-this._p3)*this._p2)*.5+1},.45)),e("Expo",t("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),t("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),t("ExpoInOut",function(t){return(t*=2)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),e("Sine",t("SineOut",function(t){return Math.sin(t*h)}),t("SineIn",function(t){return 1-Math.cos(t*h)}),t("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),f("easing.EaseLookup",{find:function(t){return m.map[t]}},!0),u(a.SlowMo,"SlowMo","ease,"),u(s,"RoughEase","ease,"),u(r,"SteppedEase","ease,"),p},!0)}),_fwd_fwdScope.FWDFWD_fwdDefine&&_fwd_fwdScope._fwd_fwdQueue.pop()(),function(_,c){"use strict";var d={},m=_.FWDGlobals=_.FWDGlobals||_;if(!m.FWDTweenLite){var g,e,i,y=function(t){for(var e=t.split("."),i=m,r=0;r<e.length;r++)i[e[r]]=i=i[e[r]]||{};return i},u=y("com.fwd"),v=1e-10,l=function(t){for(var e=[],i=t.length,r=0;r!==i;e.push(t[r++]));return e},r=function(){},x=(e=Object.prototype.toString,i=e.call([]),function(t){return null!=t&&(t instanceof Array||"object"==typeof t&&!!t.push&&e.call(t)===i)}),w={},T=function(l,h,f,u){this.sc=w[l]?w[l].sc:[],(w[l]=this).gsClass=null,this.func=f;var p=[];this.check=function(t){for(var e,i,r,s,n,a=h.length,o=a;-1<--a;)(e=w[h[a]]||new T(h[a],[])).gsClass?(p[a]=e.gsClass,o--):t&&e.sc.push(this);if(0===o&&f){if(r=(i=("com.fwd."+l).split(".")).pop(),s=y(i.join("."))[r]=this.gsClass=f.apply(f,p),u)if(m[r]=d[r]=s,!(n="undefined"!=typeof fwd_module&&fwd_module.exports)&&"function"==typeof define&&define.amd)define((_.FWDAMDPath?_.FWDAMDPath+"/":"")+l.split(".").pop(),[],function(){return s});else if(n)if(l===c)for(a in fwd_module.exports=d[c]=s,d)s[a]=d[a];else d[c]&&(d[c][r]=s);for(a=0;a<this.sc.length;a++)this.sc[a].check()}},this.check(!0)},s=_.FWDFWD_fwdDefine=function(t,e,i,r){return new T(t,e,i,r)},p=u._class=function(t,e,i){return e=e||function(){},s(t,[],function(){return e},i),e};s.globals=m;var t,n=[0,0,1,1],b=p("easing.Ease",function(t,e,i,r){this._func=t,this._type=i||0,this._power=r||0,this._params=e?n.concat(e):n},!0),P=b.map={},a=b.register=function(t,e,i,r){for(var s,n,a,o,l=e.split(","),h=l.length,f=(i||"easeIn,easeOut,easeInOut").split(",");-1<--h;)for(n=l[h],s=r?p("easing."+n,null,!0):u.easing[n]||{},a=f.length;-1<--a;)o=f[a],P[n+"."+o]=P[o+n]=s[o]=t.getRatio?t:t[o]||new t};for((t=b.prototype)._calcEnd=!1,t.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,r=1===e?1-t:2===e?t:t<.5?2*t:2*(1-t);return 1===i?r*=r:2===i?r*=r*r:3===i?r*=r*r*r:4===i&&(r*=r*r*r*r),1===e?1-r:2===e?r:t<.5?r/2:1-r/2},h=(o=["Linear","Quad","Cubic","Quart","Quint,Strong"]).length;-1<--h;)t=o[h]+",Power"+h,a(new b(null,null,1,h),t,"easeOut",!0),a(new b(null,null,2,h),t,"easeIn"+(0===h?",easeNone":"")),a(new b(null,null,3,h),t,"easeInOut");P.linear=u.easing.Linear.easeIn,P.swing=u.easing.Quad.easeInOut;var O=p("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});(t=O.prototype).addEventListener=function(t,e,i,r,s){s=s||0;var n,a,o=this._listeners[t],l=0;for(this!==M||g||M.wake(),null==o&&(this._listeners[t]=o=[]),a=o.length;-1<--a;)(n=o[a]).c===e&&n.s===i?o.splice(a,1):0===l&&n.pr<s&&(l=a+1);o.splice(l,0,{c:e,s:i,up:r,pr:s})},t.removeEventListener=function(t,e){var i,r=this._listeners[t];if(r)for(i=r.length;-1<--i;)if(r[i].c===e)return void r.splice(i,1)},t.dispatchEvent=function(t){var e,i,r,s=this._listeners[t];if(s)for(1<(e=s.length)&&(s=s.slice(0)),i=this._eventTarget;-1<--e;)(r=s[e])&&(r.up?r.c.call(r.s||i,{type:t,target:i}):r.c.call(r.s||i))};for(var o,k=_.requestAnimationFrame,R=_.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},A=S(),h=(o=["ms","moz","webkit","o"]).length;-1<--h&&!k;)k=_[o[h]+"RequestAnimationFrame"],R=_[o[h]+"CancelAnimationFrame"]||_[o[h]+"CancelRequestAnimationFrame"];p("Ticker",function(t,e){var s,n,a,o,l,h=this,f=S(),i=!(!1===e||!k)&&"auto",u=500,p=33,_=function(t){var e,i,r=S()-A;u<r&&(f+=r-p),A+=r,h.time=(A-f)/1e3,e=h.time-l,(!s||0<e||!0===t)&&(h.frame++,l+=e+(o<=e?.004:o-e),i=!0),!0!==t&&(a=n(_)),i&&h.dispatchEvent("tick")};O.call(h),h.time=h.frame=0,h.tick=function(){_(!0)},h.lagSmoothing=function(t,e){u=t||1e10,p=Math.min(e,u,0)},h.sleep=function(){null!=a&&((i&&R?R:clearTimeout)(a),n=r,a=null,h===M&&(g=!1))},h.wake=function(t){null!==a?h.sleep():t?f+=-A+(A=S()):10<h.frame&&(A=S()-u+5),n=0===s?r:i&&k?k:function(t){return setTimeout(t,1e3*(l-h.time)+1|0)},h===M&&(g=!0),_(2)},h.fps=function(t){if(!arguments.length)return s;o=1/((s=t)||60),l=this.time+o,h.wake()},h.useRAF=function(t){if(!arguments.length)return i;h.sleep(),i=t,h.fps(s)},h.fps(t),setTimeout(function(){"auto"===i&&h.frame<5&&"hidden"!==document.visibilityState&&h.useRAF(!1)},1500)}),(t=u.Ticker.prototype=new u.events.EventDispatcher).constructor=u.Ticker;var f=p("core.FWDAnimation",function(t,e){var i;this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=!0===e.immediateRender,this.data=e.data,this._reversed=!0===e.reversed,$&&(g||M.wake(),(i=this.vars.useFrames?U:$).add(this,i._time),this.vars.paused&&this.paused(!0))}),M=f.ticker=new u.Ticker;(t=f.prototype)._dirty=t._gc=t._initted=t._paused=!1,t._totalTime=t._time=0,t._rawPrevTime=-1,t._next=t._last=t._onUpdate=t._timeline=t.timeline=null,t._paused=!1;var C=function(){g&&2e3<S()-A&&M.wake(),setTimeout(C,2e3)};C(),t.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},t.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},t.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},t.seek=function(t,e){return this.totalTime(Number(t),!1!==e)},t.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,!1!==e,!0)},t.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},t.render=function(t,e,i){},t.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,!this._gc&&this.timeline||this._enabled(!0),this},t.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&t<i+this.totalDuration()/this._timeScale},t._enabled=function(t,e){return g||M.wake(),this._gc=!t,this._active=this.isActive(),!0!==e&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},t._kill=function(t,e){return this._enabled(!1,!1)},t.kill=function(t,e){return this._kill(t,e),this},t._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},t._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();-1<--e;)"{self}"===t[e]&&(i[e]=this);return i},t._callback=function(t){var e=this.vars,i=e[t],r=e[t+"Params"],s=e[t+"Scope"]||e.callbackScope||this;switch(r?r.length:0){case 0:i.call(s);break;case 1:i.call(s,r[0]);break;case 2:i.call(s,r[0],r[1]);break;default:i.apply(s,r)}},t.eventCallback=function(t,e,i,r){if("on"===(t||"").substr(0,2)){var s=this.vars;if(1===arguments.length)return s[t];null==e?delete s[t]:(s[t]=e,s[t+"Params"]=x(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,s[t+"Scope"]=r),"onUpdate"===t&&(this._onUpdate=e)}return this},t.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},t.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&0<this._time&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},t.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},t.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},t.totalTime=function(t,e,i){if(g||M.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(t<0&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var r=this._totalDuration,s=this._timeline;if(r<t&&!i&&(t=r),this._startTime=(this._paused?this._pauseTime:s._time)-(this._reversed?r-t:t)/this._timeScale,s._dirty||this._uncache(!1),s._timeline)for(;s._timeline;)s._timeline._time!==(s._startTime+s._totalTime)/s._timeScale&&s.totalTime(s._totalTime,!0),s=s._timeline}this._gc&&this._enabled(!0,!1),this._totalTime===t&&0!==this._duration||(X.length&&G(),this.render(t,e,!1),X.length&&G())}return this},t.progress=t.totalProgress=function(t,e){var i=this.duration();return arguments.length?this.totalTime(i*t,e):i?this._time/i:this.ratio},t.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},t.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},t.timeScale=function(t){return arguments.length?(t=t||v,this._timeline&&this._timeline.smoothChildTiming&&(i=(e=this._pauseTime)||0===e?e:this._timeline.totalTime(),this._startTime=i-(i-this._startTime)*this._timeScale/t),this._timeScale=t,this._uncache(!1)):this._timeScale;var e,i},t.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},t.paused=function(t){if(!arguments.length)return this._paused;var e,i,r=this._timeline;return t!=this._paused&&r&&(g||t||M.wake(),i=(e=r.rawTime())-this._pauseTime,!t&&r.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=this.isActive(),!t&&0!=i&&this._initted&&this.duration()&&(e=r.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,this.render(e,e===this._totalTime,!0))),this._gc&&!t&&this._enabled(!0,!1),this};var F=p("core.FWDSimpleTimeline",function(t){f.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});(t=F.prototype=new f).constructor=F,t.kill()._gc=!1,t._first=t._last=t._recent=null,t._sortChildren=!1,t.add=t.insert=function(t,e,i,r){var s,n;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),s=this._last,this._sortChildren)for(n=t._startTime;s&&s._startTime>n;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=s,this._recent=t,this._timeline&&this._uncache(!0),this},t._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},t.render=function(t,e,i){var r,s=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;s;)r=s._next,(s._active||t>=s._startTime&&!s._paused)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=r},t.rawTime=function(){return g||M.wake(),this._totalTime};var D=p("FWDTweenLite",function(t,e,i){if(f.call(this,e,i),this.render=D.prototype.render,null==t)throw"Cannot tween a null target.";this.target=t="string"==typeof t&&D.selector(t)||t;var r,s,n,a=t.jquery||t.length&&t!==_&&t[0]&&(t[0]===_||t[0].nodeType&&t[0].style&&!t.nodeType),o=this.vars.overwrite;if(this._overwrite=o=null==o?Z[D.defaultOverwrite]:"number"==typeof o?o>>0:Z[o],(a||t instanceof Array||t.push&&x(t))&&"number"!=typeof t[0])for(this._targets=n=l(t),this._propLookup=[],this._siblings=[],r=0;r<n.length;r++)(s=n[r])?"string"!=typeof s?s.length&&s!==_&&s[0]&&(s[0]===_||s[0].nodeType&&s[0].style&&!s.nodeType)?(n.splice(r--,1),this._targets=n=n.concat(l(s))):(this._siblings[r]=H(s,this,!1),1===o&&1<this._siblings[r].length&&J(s,this,null,1,this._siblings[r])):"string"==typeof(s=n[r--]=D.selector(s))&&n.splice(r+1,1):n.splice(r--,1);else this._propLookup={},this._siblings=H(t,this,!1),1===o&&1<this._siblings.length&&J(t,this,null,1,this._siblings);(this.vars.immediateRender||0===e&&0===this._delay&&!1!==this.vars.immediateRender)&&(this._time=-v,this.render(Math.min(0,-this._delay)))},!0),z=function(t){return t&&t.length&&t!==_&&t[0]&&(t[0]===_||t[0].nodeType&&t[0].style&&!t.nodeType)};(t=D.prototype=new f).constructor=D,t.kill()._gc=!1,t.ratio=0,t._firstPT=t._targets=t._overwrittenProps=t._startAt=null,t._notifyPluginsOfEnabled=t._lazy=!1,D.version="1.19.0",D.defaultEase=t._ease=new b(null,null,1,1),D.defaultOverwrite="auto",D.ticker=M,D.autoSleep=120,D.lagSmoothing=function(t,e){M.lagSmoothing(t,e)},D.selector=_.$||_.jQuery||function(t){var e=_.$||_.jQuery;return e?(D.selector=e)(t):"undefined"==typeof document?t:document.querySelectorAll?document.querySelectorAll(t):document.getElementById("#"===t.charAt(0)?t.substr(1):t)};var X=[],I={},N=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,Y=function(t){for(var e,i=this._firstPT;i;)e=i.blob?t?this.join(""):this.start:i.c*t+i.s,i.m?e=i.m(e,this._target||i.t):e<1e-6&&-1e-6<e&&(e=0),i.f?i.fp?i.t[i.p](i.fp,e):i.t[i.p](e):i.t[i.p]=e,i=i._next},E=function(t,e,i,r){var s,n,a,o,l,h,f,u=[t,e],p=0,_="",c=0;for(u.start=t,i&&(i(u),t=u[0],e=u[1]),u.length=0,s=t.match(N)||[],n=e.match(N)||[],r&&(r._next=null,r.blob=1,u._firstPT=u._applyPT=r),l=n.length,o=0;o<l;o++)f=n[o],_+=(h=e.substr(p,e.indexOf(f,p)-p))||!o?h:",",p+=h.length,c?c=(c+1)%5:"rgba("===h.substr(-5)&&(c=1),f===s[o]||s.length<=o?_+=f:(_&&(u.push(_),_=""),a=parseFloat(s[o]),u.push(a),u._firstPT={_next:u._firstPT,t:u,p:u.length-1,s:a,c:("="===f.charAt(1)?parseInt(f.charAt(0)+"1",10)*parseFloat(f.substr(2)):parseFloat(f)-a)||0,f:0,m:c&&c<4?Math.round:0}),p+=f.length;return(_+=e.substr(p))&&u.push(_),u.setRatio=Y,u},B=function(t,e,i,r,s,n,a,o,l){"function"==typeof r&&(r=r(l||0,t));var h,f="get"===i?t[e]:i,u=typeof t[e],p="string"==typeof r&&"="===r.charAt(1),_={t:t,p:e,s:f,f:"function"==u,pg:0,n:s||e,m:n?"function"==typeof n?n:Math.round:0,pr:0,c:p?parseInt(r.charAt(0)+"1",10)*parseFloat(r.substr(2)):parseFloat(r)-f||0};if("number"!=u&&("function"==u&&"get"===i&&(h=e.indexOf("set")||"function"!=typeof t["get"+e.substr(3)]?e:"get"+e.substr(3),_.s=f=a?t[h](a):t[h]()),"string"==typeof f&&(a||isNaN(f))?(_.fp=a,_={t:E(f,r,o||D.defaultStringFilter,_),p:"setRatio",s:0,c:1,f:2,pg:0,n:s||e,pr:0,m:0}):p||(_.s=parseFloat(f),_.c=parseFloat(r)-_.s||0)),_.c)return(_._next=this._firstPT)&&(_._next._prev=_),this._firstPT=_},W=D._internals={isArray:x,isSelector:z,lazyTweens:X,blobDif:E},L=D._plugins={},j=W.tweenLookup={},V=0,q=W.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1},Z={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,true:1,false:0},U=f._rootFramesTimeline=new F,$=f._rootTimeline=new F,Q=30,G=W.lazyRender=function(){var t,e=X.length;for(I={};-1<--e;)(t=X[e])&&!1!==t._lazy&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);X.length=0};$._startTime=M.time,U._startTime=M.frame,$._active=U._active=!0,setTimeout(G,1),f._updateRoot=D.render=function(){var t,e,i;if(X.length&&G(),$.render((M.time-$._startTime)*$._timeScale,!1,!1),U.render((M.frame-U._startTime)*U._timeScale,!1,!1),X.length&&G(),M.frame>=Q){for(i in Q=M.frame+(parseInt(D.autoSleep,10)||120),j){for(t=(e=j[i].tweens).length;-1<--t;)e[t]._gc&&e.splice(t,1);0===e.length&&delete j[i]}if((!(i=$._first)||i._paused)&&D.autoSleep&&!U._first&&1===M._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||M.sleep()}}},M.addEventListener("tick",f._updateRoot);var H=function(t,e,i){var r,s,n=t._fwdTweenID;if(j[n||(t._fwdTweenID=n="t"+V++)]||(j[n]={target:t,tweens:[]}),e&&((r=j[n].tweens)[s=r.length]=e,i))for(;-1<--s;)r[s]===e&&r.splice(s,1);return j[n].tweens},K=function(t,e,i,r){var s,n,a=t.vars.onOverwrite;return a&&(s=a(t,e,i,r)),(a=D.onOverwrite)&&(n=a(t,e,i,r)),!1!==s&&!1!==n},J=function(t,e,i,r,s){var n,a,o;if(1===r||4<=r){for(o=s.length,_=0;_<o;_++)if((a=s[_])!==e)a._gc||a._kill(null,t,e)&&(n=!0);else if(5===r)break;return n}for(var l,h=e._startTime+v,f=[],u=0,p=0===e._duration,_=s.length;-1<--_;)(a=s[_])===e||a._gc||a._paused||(a._timeline!==e._timeline?(l=l||tt(e,0,p),0===tt(a,l,p)&&(f[u++]=a)):a._startTime<=h&&a._startTime+a.totalDuration()/a._timeScale>h&&((p||!a._initted)&&h-a._startTime<=2e-10||(f[u++]=a)));for(_=u;-1<--_;)if(a=f[_],2===r&&a._kill(i,t,e)&&(n=!0),2!==r||!a._firstPT&&a._initted){if(2!==r&&!K(a,e))continue;a._enabled(!1,!1)&&(n=!0)}return n},tt=function(t,e,i){for(var r=t._timeline,s=r._timeScale,n=t._startTime;r._timeline;){if(n+=r._startTime,s*=r._timeScale,r._paused)return-100;r=r._timeline}return e<(n/=s)?n-e:i&&n===e||!t._initted&&n-e<2*v?v:(n+=t.totalDuration()/t._timeScale/s)>e+v?0:n-e-v};t._init=function(){var t,e,i,r,s,n,a=this.vars,o=this._overwrittenProps,l=this._duration,h=!!a.immediateRender,f=a.ease;if(a.startAt){for(r in this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),s={},a.startAt)s[r]=a.startAt[r];if(s.overwrite=!1,s.immediateRender=!0,s.lazy=h&&!1!==a.lazy,s.startAt=s.delay=null,this._startAt=D.to(this.target,0,s),h)if(0<this._time)this._startAt=null;else if(0!==l)return}else if(a.runBackwards&&0!==l)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{for(r in 0!==this._time&&(h=!1),i={},a)q[r]&&"autoCSS"!==r||(i[r]=a[r]);if(i.overwrite=0,i.data="isFromStart",i.lazy=h&&!1!==a.lazy,i.immediateRender=h,this._startAt=D.to(this.target,0,i),h){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=f=f?f instanceof b?f:"function"==typeof f?new b(f,a.easeParams):P[f]||D.defaultEase:D.defaultEase,a.easeParams instanceof Array&&f.config&&(this._ease=f.config.apply(f,a.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(n=this._targets.length,t=0;t<n;t++)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],o?o[t]:null,t)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,o,0);if(e&&D._onPluginEvent("_onInitAllProps",this),o&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),a.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=a.onUpdate,this._initted=!0},t._initProps=function(t,e,i,r,s){var n,a,o,l,h,f;if(null==t)return!1;for(n in I[t._fwdTweenID]&&G(),this.vars.css||t.style&&t!==_&&t.nodeType&&L.css&&!1!==this.vars.autoCSS&&function(t,e){var i,r={};for(i in t)q[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!L[i]||L[i]&&L[i]._autoCSS)||(r[i]=t[i],delete t[i]);t.css=r}(this.vars,t),this.vars)if(f=this.vars[n],q[n])f&&(f instanceof Array||f.push&&x(f))&&-1!==f.join("").indexOf("{self}")&&(this.vars[n]=f=this._swapSelfInParams(f,this));else if(L[n]&&(l=new L[n])._onInitTween(t,this.vars[n],this,s)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:1,n:n,pg:1,pr:l._priority,m:0},a=l._overwriteProps.length;-1<--a;)e[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0),h._next&&(h._next._prev=h)}else e[n]=B.call(this,t,n,"get",f,n,0,null,this.vars.stringFilter,s);return r&&this._kill(r,t)?this._initProps(t,e,i,r,s):1<this._overwrite&&this._firstPT&&1<i.length&&J(t,this,e,this._overwrite,i)?(this._kill(e,t),this._initProps(t,e,i,r,s)):(this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration)&&(I[t._fwdTweenID]=!0),o)},t.render=function(t,e,i){var r,s,n,a,o,l,h,f=this._time,u=this._duration,p=this._rawPrevTime;if(u-1e-7<=t?(this._totalTime=this._time=u,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(r=!0,s="onComplete",i=i||this._timeline.autoRemoveChildren),0===u&&(!this._initted&&this.vars.lazy&&!i||(this._startTime===this._timeline._duration&&(t=0),(p<0||t<=0&&-1e-7<=t||p===v&&"isPause"!==this.data)&&p!==t&&(i=!0,v<p&&(s="onReverseComplete")),this._rawPrevTime=a=!e||t||p===t?t:v))):t<1e-7?(this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==f||0===u&&0<p)&&(s="onReverseComplete",r=this._reversed),t<0&&(this._active=!1,0===u&&(!this._initted&&this.vars.lazy&&!i||(0<=p&&(p!==v||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||p===t?t:v))),this._initted||(i=!0)):(this._totalTime=this._time=t,this._easeType?(o=t/u,(1===(l=this._easeType)||3===l&&.5<=o)&&(o=1-o),3===l&&(o*=2),1===(h=this._easePower)?o*=o:2===h?o*=o*o:3===h?o*=o*o*o:4===h&&(o*=o*o*o*o),this.ratio=1===l?1-o:2===l?o:t/u<.5?o/2:1-o/2):this.ratio=this._ease.getRatio(t/u)),this._time!==f||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=f,this._rawPrevTime=p,X.push(this),void(this._lazy=[t,e]);this._time&&!r?this.ratio=this._ease.getRatio(this._time/u):r&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(!1!==this._lazy&&(this._lazy=!1),this._active||!this._paused&&this._time!==f&&0<=t&&(this._active=!0),0===f&&(this._startAt&&(0<=t?this._startAt.render(t,e,i):s=s||"_dummyGS"),this.vars.onStart&&(0===this._time&&0!==u||e||this._callback("onStart"))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(t<0&&this._startAt&&-1e-4!==t&&this._startAt.render(t,e,i),e||(this._time!==f||r||i)&&this._callback("onUpdate")),s&&(this._gc&&!i||(t<0&&this._startAt&&!this._onUpdate&&-1e-4!==t&&this._startAt.render(t,e,i),r&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[s]&&this._callback(s),0===u&&this._rawPrevTime===v&&a!==v&&(this._rawPrevTime=0)))}},t._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var r,s,n,a,o,l,h,f,u,p=i&&this._time&&i._startTime===this._startTime&&this._timeline===i._timeline;if((x(e)||z(e))&&"number"!=typeof e[0])for(r=e.length;-1<--r;)this._kill(t,e[r],i)&&(l=!0);else{if(this._targets){for(r=this._targets.length;-1<--r;)if(e===this._targets[r]){o=this._propLookup[r]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[r]=t?this._overwrittenProps[r]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(h=t||o,f=t!==s&&"all"!==s&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(D.onOverwrite||this.vars.onOverwrite)){for(n in h)o[n]&&(u=u||[]).push(n);if((u||!t)&&!K(this,i,e,u))return!1}for(n in h)(a=o[n])&&(p&&(a.f?a.t[a.p](a.s):a.t[a.p]=a.s,l=!0),a.pg&&a.t._kill(h)&&(l=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),f&&(s[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return l},t.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],f.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-v,this.render(Math.min(0,-this._delay))),this},t._enabled=function(t,e){if(g||M.wake(),t&&this._gc){var i,r=this._targets;if(r)for(i=r.length;-1<--i;)this._siblings[i]=H(r[i],this,!0);else this._siblings=H(this.target,this,!0)}return f.prototype._enabled.call(this,t,e),!(!this._notifyPluginsOfEnabled||!this._firstPT)&&D._onPluginEvent(t?"_onEnable":"_onDisable",this)},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,r){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,new D(t,e,r)},D.delayedCall=function(t,e,i,r,s){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:r,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:s,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];var i,r,s,n;if(t="string"==typeof t&&D.selector(t)||t,(x(t)||z(t))&&"number"!=typeof t[0]){for(i=t.length,r=[];-1<--i;)r=r.concat(D.getTweensOf(t[i],e));for(i=r.length;-1<--i;)for(n=r[i],s=i;-1<--s;)n===r[s]&&r.splice(i,1)}else for(i=(r=H(t).concat()).length;-1<--i;)(r[i]._gc||e&&!r[i].isActive())&&r.splice(i,1);return r},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var r=D.getTweensOf(t,e),s=r.length;-1<--s;)r[s]._kill(i,t)};var et=p("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=et.prototype},!0);if(t=et.prototype,et.version="1.19.0",et.API=2,t._firstPT=null,t._addTween=B,t.setRatio=Y,t._kill=function(t){var e,i=this._overwriteProps,r=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;-1<--e;)null!=t[i[e]]&&i.splice(e,1);for(;r;)null!=t[r.n]&&(r._next&&(r._next._prev=r._prev),r._prev?(r._prev._next=r._next,r._prev=null):this._firstPT===r&&(this._firstPT=r._next)),r=r._next;return!1},t._mod=t._roundProps=function(t){for(var e,i=this._firstPT;i;)(e=t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&"function"==typeof e&&(2===i.f?i.t._applyPT.m=e:i.m=e),i=i._next},D._onPluginEvent=function(t,e){var i,r,s,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,r=s;r&&r.pr>o.pr;)r=r._next;(o._prev=r?r._prev:n)?o._prev._next=o:s=o,(o._next=r)?r._prev=o:n=o,o=a}o=e._firstPT=s}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},et.activate=function(t){for(var e=t.length;-1<--e;)t[e].API===et.API&&(L[(new t[e])._propName]=t[e]);return!0},s.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,r=t.priority||0,s=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},a=p("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){et.call(this,i,r),this._overwriteProps=s||[]},!0===t.fwd_global),o=a.prototype=new et(i);for(e in(o.constructor=a).API=t.API,n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,et.activate([a]),a},o=_._fwd_fwdQueue){for(h=0;h<o.length;h++)o[h]();for(t in w)w[t].func||_.console.log("FWDAnimation encountered missing dependency: "+t)}g=!1}}("undefined"!=typeof fwd_module&&fwd_module.exports&&"undefined"!=typeof fwd_global?fwd_global:this||window,"FWDAnimation"));(function (window){
	
	var FWDRL = function(props){

		'use strict';
		
		var _s = this;
		FWDRL.inst.push(_s);

		/**
	 	 * Initialize RL.
	 	 */
		_s.init = function(){
			
			FWDRLUtils.checkIfHasTransforms();
			FWDTweenLite.ticker.useRAF(true);
			_s.props = props;
			 
			if(!_s.props){
				alert("FWDRL settings properties object is not defined!");
				return;
			}
		
			_s.instName = _s.props.instanceName;
			if(!_s.instName){
				alert("FWDRL instance name is required in the settings parameters!");
				return;
			}
			window[_s.instName] = _s;
			_s.fr = true;
		
			_s.stageContainer = document.getElementsByTagName("body")[0];
			_s._dc = document.documentElement;

			if(!_s.stageContainer) _s.stageContainer = _s._dc;
			_s.listeners = {events_ar:[]};

			FWDRL.cls = _s.cls = _s.props.cls || 'fwdrl';
			_s.fontIcon = _s.props.fontIcon || 'fwdrl-icon';

			_s.mediaSelector = _s.props.mediaSelector || '.fwdrel';

			_s.rightClickContextMenu = _s.props.rightClickContextMenu || "developer";
			_s.DRightClickContextMenu = _s.rightClickContextMenu;
		
			_s.buttonsAlignment = _s.props.buttonsAlignment || "in";
			_s.DFBtnsAlignment = _s.buttonsAlignment;
			
			_s.useDrag = _s.props.useDrag;
			if(_s.useDrag === undefined) _s.useDrag = true;
			_s.DUseDrag = _s.useDrag;

			_s.mediaLazyLoading = _s.props.mediaLazyLoading;
			if(_s.mediaLazyLoading === undefined) _s.mediaLazyLoading = true;
			_s.DMediaLazyLoading = _s.mediaLazyLoading;

			_s.captionPosition = _s.props.captionPosition || "bottomout";
			_s.captionPosition = _s.captionPosition.toLowerCase();
			_s.DCaptionPosition = _s.captionPosition;
			
			_s.captionAnimationType = _s.props.captionAnimationType || "motion";
			_s.DFDescriptionAnimationType = _s.captionAnimationType;

			_s.backgroundColor = _s.props.backgroundColor || "rgba(0,0,0,.99)";
			_s.DFBackgroundColor = _s.backgroundColor;

			_s.thumbnailsBorderColor = _s.props.thumbnailsBorderColor || "#FFFFFF";
			_s.DThumbnailsBorderColor = _s.thumbnailsBorderColor;

			_s.thumbnailsOverlayColor = _s.props.thumbnailsOverlayColor || 'rgba(0,0,0,.6)';
			_s.DFThumbnailsOverlayColor = _s.thumbnailsOverlayColor;
			
			if(_s.buttonsAlignment == FWDRL.BUTTONS_IN){
				_s.buttonsOffsetIn = _s.props.buttonsOffsetIn || 10;
			}else{
				_s.buttonsOffsetIn = _s.props.buttonsOffsetOut || 10;
			}
			_s.DFBtnsOffsetIn = _s.buttonsOffsetIn;
			
			if(_s.buttonsAlignment == FWDRL.BUTTONS_IN){
				_s.buttonsOffsetOut = _s.props.buttonsOffsetOut || 10;
			}else{
				_s.buttonsOffsetOut = _s.props.buttonsOffsetIn || 10;
			}
			_s.DFBtnsOffsetOut = _s.buttonsOffsetOut;
			
			_s.buttonsHideDelay = _s.props.buttonsHideDelay || 5;
			_s.buttonsHideDelay *= 1000;
			_s.DButtonsHideDelay = _s.buttonsHideDelay;

			_s.maxZoom = _s.props.maxZoom || 1; 
			_s.DMaxZoom = _s.maxZoom;

			_s.spaceBetweenBtns = _s.props.spaceBetweenBtns || 8; 
			_s.DFSpaceBetweenBtns = _s.spaceBetweenBtns;

			_s.defaultItemWidth = _s.props.defaultItemWidth || 1527;
			_s.DFDefaultItemW = _s.defaultItemWidth;

			_s.defaultItemHeight = _s.props.defaultItemHeight || 859;
			_s.DFDefaultItemH = _s.defaultItemHeight;

			_s.itemBorderColor = _s.props.itemBorderColor || "#FFFFFF";
			_s.DFitemBorderColor = _s.itemBorderColor;

			_s.itemBorderSize = _s.props.itemBorderSize || 0; 
			_s.DFItemBorderSize = _s.itemBorderSize;

			_s.itemBkColor = _s.props.itemBackgroundColor || "#212121";
			_s.DItemBkColor = _s.itemBkColor;
			
			_s.thumbnailsOffsetBottom = _s.props.thumbnailsOffsetBottom;
			if(_s.thumbnailsOffsetBottom == undefined) _s.thumbnailsOffsetBottom = 10;
			_s.DFThumbnailsOffsetBottom = _s.thumbnailsOffsetBottom;

			_s.rotationY360DegreeVideo = _s.props.rotationY360DegreeVideo;
			if(_s.rotationY360DegreeVideo == undefined) _s.rotationY360DegreeVideo = -90;
			_s.DFRotationY360DegreeVideo = _s.rotationY360DegreeVideo;

			_s.thumbnailsBorderSize = _s.props.thumbnailsBorderSize;
			if(_s.thumbnailsBorderSize ==  undefined) _s.thumbnailsBorderSize = 2;
			_s.DFThumbnailsBorderSize = _s.thumbnailsBorderSize;

			_s.show360DegreeVideoVrButton = _s.props.show360DegreeVideoVrButton;
			if(_s.show360DegreeVideoVrButton ==  undefined) _s.show360DegreeVideoVrButton = false;
			_s.DFShow360DegreeVideoVrButton = _s.show360DegreeVideoVrButton;

			_s.thumbnailH = _s.props.thumbnailsHeight || 80;
			_s.DFThumbnailH = _s.thumbnailH;
		
			_s.spaceBetweenThumbnails = _s.props.spaceBetweenThumbnails;
			if(_s.spaceBetweenThumbnails == undefined) _s.spaceBetweenThumbnails = 5;
			_s.DFSpaceBetweenThumbnails = _s.spaceBetweenThumbnails;
			
			_s.itemOffsetHeight = _s.props.itemOffsetHeight || 37;
			_s.DItemOffsetHeight = _s.itemOffsetHeight;

			_s.itemOffsetHeightButtonsTop = _s.props.itemOffsetHeightButtonsTop || 47;
			_s.DItemOffsetHeightButtonsTop = _s.itemOffsetHeightButtonsTop;

			_s.spaceBetweenThumbnailsAndItem = _s.props.spaceBetweenThumbnailsAndItem;
			if(_s.spaceBetweenThumbnailsAndItem == undefined) _s.spaceBetweenThumbnailsAndItem = 10;
			_s.DFSpaceBetweenThumbnailsAndItem = _s.spaceBetweenThumbnailsAndItem;	

			_s.slideShowDelay = _s.props.slideShowDelay * 1000;
			if(_s.props.slideShowDelay === undefined) _s.slideShowDelay = 6000;
			_s.DFSlideShowDelay = _s.slideShowDelay;

			_s.mId = -1;
			_s.prevId = -2;
			_s.friction = .9;
			_s.mouseY = 0;
			_s.vx = _s.vy = _s.vx2 = _s.vy2 = _s.mouseX = _s.dif = _s.lastPresedX = _s.lastPresedY = _s.gmx = _s.gmy = _s.finalY = _s.finalX =  _s.desc2H = _s.finalW = _s.finalH = _s.stageW = _s.stageH = _s.totalItems =  _s.originalW = _s.originalH = _s.buttonW = _s.buttonH = 0;

			_s.isMbl = FWDRLUtils.isMbl;

			_s.useVideo = _s.props.useVideo;
			if(_s.fr) _s.useVideo = false;
			if(_s.useVideo === undefined) _s.useVideo = true;

			_s.fillEntireScreenWithPoster = _s.props.fillEntireScreenWithPoster;
			if(_s.fillEntireScreenWithPoster === undefined) _s.fillEntireScreenWithPoster = true;

			_s.videoAutoPlayText = _s.props.videoAutoPlayText || 'Click to unmute';

			_s.showLogo = _s.props.showLogo;
			if(_s.showLogo === undefined) _s.showLogo = true;

			_s.logoPath = _s.props.logoPath || 'content/evp/skin/logo.png';

			_s.logoLink = _s.props.logoLink || '';

			_s.showControllerWhenVideoIsStopped = _s.props.showControllerWhenVideoIsStopped;
			_s.DhowControllerWhenVideoIsStopped = _s.showControllerWhenVideoIsStopped;

			_s.showDefaultControllerForVimeo = _s.props.showDefaultControllerForVimeo;
			if(_s.showDefaultControllerForVimeo == undefined) _s.showDefaultControllerForVimeo = true;

			_s.showScrubberWhenControllerIsHidden = _s.props.showScrubberWhenControllerIsHidden;
			if(_s.showScrubberWhenControllerIsHidden == undefined) _s.showScrubberWhenControllerIsHidden = true;

			_s.showVolumeButton = _s.props.showVolumeButton;
			if(_s.showVolumeButton == undefined) _s.showVolumeButton = true;

			_s.showTime = _s.props.showTime;
			if(_s.showTime == undefined) _s.showTime = true;

			_s.showRewindButton = _s.props.showRewindButton;
			if(_s.showRewindButton == undefined) _s.showRewindButton = true;

			_s.showQualityButton = _s.props.showQualityButton;
			if(_s.showQualityButton == undefined) _s.showQualityButton = true;

			_s.showAudioTracksButton = _s.props.showAudioTracksButton;
			if(_s.showAudioTracksButton == undefined) _s.showAudioTracksButton = true;

			_s.showChromecastButton = _s.props.showChromecastButton;
			if(_s.showChromecastButton == undefined) _s.showChromecastButton = true;

			_s.showPlaybackRateButton = _s.props.showPlaybackRateButton;
			if(_s.showPlaybackRateButton == undefined) _s.showPlaybackRateButton = true;


			_s.showFullScreenButton = _s.props.showFullScreenButton;
			if(_s.showFullScreenButton == undefined) _s.showFullScreenButton = true;

			_s.showScrubberToolTipLabel = _s.props.showScrubberToolTipLabel;
			if(_s.showScrubberToolTipLabel == undefined) _s.showScrubberToolTipLabel = true;

			_s.timeColor = _s.props.timeColor || '#B9B9B9';

			_s.youtubeQualityButtonNormalColor = _s.props.youtubeQualityButtonNormalColor || '#B9B9B9';
			_s.youtubeQualityButtonSelectedColor = _s.props.youtubeQualityButtonSelectedColor || '#FFFFFF';
			_s.scrubbersToolTipLabelBackgroundColor = _s.props.scrubbersToolTipLabelBackgroundColor || '#FFFFFF';
			_s.scrubbersToolTipLabelFontColor = _s.props.scrubbersToolTipLabelFontColor || '#5a5a5a';

			_s.audioVisualizerLinesColor = _s.props.audioVisualizerLinesColor || '#570AB8';
			_s.audioVisualizerCircleColor = _s.props.audioVisualizerCircleColor || '#b9b9b9';

			_s.thumbnailsPreviewWidth = _s.props.thumbnailsPreviewWidth || 196;
			
			_s.thumbnailsPreviewBackgroundColor = _s.props.thumbnailsPreviewBackgroundColor || '#2e2e2e';
			_s.thumbnailsPreviewBorderColor = _s.props.thumbnailsPreviewBorderColor || '#414141';
			_s.thumbnailsPreviewLabelBackgroundColor = _s.props.thumbnailsPreviewLabelBackgroundColor || '#414141';
			_s.thumbnailsPreviewLabelFontColor = _s.props.thumbnailsPreviewLabelFontColor || '#CCCCCC';

			_s.skipToVideoText = _s.props.skipToVideoText || 'You can skip to video in: ';
			_s.skipToVideoButtonText = _s.props.skipToVideoButtonText || 'Skip Ad'
			
			_s.useDeepLinking = _s.props.useDeepLinking;
			if(_s.useDeepLinking === undefined) _s.useDeepLinking = true;
			_s.DUseDeepLinking = _s.useDeepLinking;

			_s.useVectorIcons = _s.props.useVectorIcons;

			_s.showCloseButton = _s.props.showCloseButton; 
			if(_s.showCloseButton === undefined) _s.showCloseButton = true;
			_s.DFShowCloseButton = _s.showCloseButton;

			_s.showFullscreenButton = _s.props.showFullscreenButton;
			if(_s.showFullscreenButton === undefined) _s.showFullscreenButton = true;
			_s.DShowFullscreenButton = _s.showFullscreenButton;
			
			_s.showZoomButton = _s.props.showZoomButton; 
			if(_s.showZoomButton === undefined) _s.showZoomButton = true;
			_s.DShowZoomButton = _s.showZoomButton;

			_s.showNextAndPrevBtns = _s.props.showNextAndPrevBtns; 
			if(_s.showNextAndPrevBtns === undefined) _s.showNextAndPrevBtns = true;
			_s.DShowNextAndPrevBtns = _s.showNextAndPrevBtns;
			_s.DFSefaultShowNextAndPrevBtns = _s.defaultShowNextAndPrevBtns;
			
			_s.hideButtonsOnDrag = _s.props.hideButtonsOnDrag; 
			if(_s.hideButtonsOnDrag === undefined) _s.hideButtonsOnDrag = true;
			_s.DHideButtonsOnDrag = _s.hideButtonsOnDrag;
		
			_s.caption = _s.props.caption;
			if(_s.caption ==  undefined) _s.caption = true;
			_s.DCaption = _s.caption;

			_s.showCaptionOnSmallScreens = _s.props.showCaptionOnSmallScreens;
			_s.DShowCaptionOnSmallScreens = _s.showCaptionOnSmallScreens;

			_s.animateCaption = _s.props.animateCaption;
			_s.DAnimateCaption = _s.animateCaption;

			_s.useKeyboard = _s.props.useKeyboard;
			if(_s.useKeyboard === undefined) _s.useKeyboard = true;
			_s.DUseKeyboard = _s.useKeyboard;

			_s.useDoubleClick = _s.props.useDoubleClick;
			if(_s.useDoubleClick === undefined) _s.useDoubleClick = true;
			_s.DUseDoubleClick = _s.useDoubleClick;

			_s.preloaderBkColor = _s.props.preloaderBkColor || '#2e2e2e'
			_s.DPreloaderBkColor = _s.preloaderBkColor;

			_s.preloaderFillColor = _s.props.preloaderFillColor ||  '#FFFFFF';
			_s.DPreloaderFillColor = _s.preloaderFillColor;

			_s.slideShowBkColor = _s.props.slideShowBkColor || '#2e2e2e'
			_s.DSlideShowBkColor = _s.slideShowBkColor;

			_s.slideShowFillColor = _s.props.slideShowFillColor || '#FFFFFF'
			_s.DSlideShowFillColor = _s.slideShowFillColor;

			_s.slideShowAutoPlay = _s.props.slideShowAutoPlay;
			_s.DFSlideShowAutoPlay = _s.slideShowAutoPlay;

			_s.slideShowAutoStop = _s.props.slideShowAutoStop;
			_s.DSlideShowAutoStop = _s.slideShowAutoStop;

			_s.DShowThumbnails = _s.props.showThumbnails;
			if(_s.DShowThumbnails === undefined) _s.DShowThumbnails = true;
			_s.DFDefaultThumbnails = _s.DShowThumbnails;

			_s.showSlideShowButton = _s.props.showSlideShowButton;
			if(_s.showSlideShowButton === undefined) _s.showSlideShowButton = true; 
			_s.DFShowSlideShowButton = _s.showSlideShowButton;

			_s.showCounter = _s.props.showCounter;
			if(_s.showCounter === undefined) _s.showCounter = true; 
			_s.DShowCounter = _s.showCounter;

			_s.showSlideShowAnimation = _s.props.showSlideShowAnimation;
			if(_s.showSlideShowAnimation === undefined) _s.showSlideShowAnimation = true; 
			_s.DShowSlideShowAnimation = _s.showSlideShowAnimation;

			_s.addSlideShowAnimation_bl = false;

			_s.useAsModal = _s.props.useAsModal;
			_s.DFUseAsModal = _s.useAsModal;

			_s.shareButtons = _s.props.shareButtons || ['facebook', 'twitter', 'linkedin', 'tumblr', 'pinterest', 'reddit', 'buffer', 'digg','blogger'];
			_s.DShareButtons = _s.shareButtons;

			_s.showShareButton = _s.shareButtons.length;
			_s.DShowShareButton = _s.showShareButton;

			_s.shareText = _s.props.shareText || 'Share on';
			_s.DShareText = _s.shareText;

			_s.sharedURL = _s.props.sharedURL || 'deeplink';
			_s.DSharedURL = _s.sharedURL;

			_s.shareBackgroundColor = _s.props.shareBackgroundColor || '#FFFFFF';
			_s.DShareBackgroundColor = _s.shareBackgroundColor

			_s.shareMainBackgroundColor = _s.props.shareMainBackgroundColor || 'rgba(0,0,0,.4)';
			_s.DShareMainBackgroundColor = _s.shareMainBackgroundColor
	
			_s.showThumbnailsIcon = _s.props.showThumbnailsIcon; 
			if(_s.showThumbnailsIcon === undefined) _s.showThumbnailsIcon = true;
			_s.DShowThumbnailsIcon = _s.showThumbnailsIcon;

			// Video/audio player.
			_s.volume = _s.props.volume;
			if(_s.volume === undefined) _s.volume = 1;
			_s.DVolume = _s.volume;

			_s.videoAutoPlay = _s.props.videoAutoPlay;
			_s.DVideoAutoPlay = _s.videoAutoPlay;

			_s.nextVideoAutoPlay = _s.props.nextVideoAutoPlay;
			_s.DNextVideoAutoPlay = _s.nextVideoAutoPlay;
	
			_s.hasPointerEvent_bl = FWDRLUtils.hasPointerEvent;
			
			_s.initiallize();
		};
		
		/**
	 	 * Initialize main elements.
	 	 */
		_s.initiallize = function(){

			_s._dc.addEventListener('touchstart', onClick, {passive: false});
			_s._dc.addEventListener('mousedown', onClick);

			function onClick(e){
				_s.clicked = true;
				_s._dc.removeEventListener('touchstart', onClick);
				_s._dc.removeEventListener('click', onClick);
			}
			
			_s.main_do = new FWDRLDO("div");
			_s.main_do.screen.setAttribute("mId", _s.instName);
			_s.main_do.screen.className = _s.cls + ' ' + _s.instName;
			
			_s.main_do.style().msTouchAction = "none";
			_s.main_do.style().webkitTapHighlightColor = "rgba(0, 0, 0, 0)";
			_s.main_do.setBackfaceVisibility();

			if(!_s.isMbl && FWDRLUtils.isChrome){
				_s.main_do.hasTransform3d_bl =  false;
				_s.main_do.hasTransform2d_bl =  false;
			}
			_s.main_do.style().width = "100%";
			_s.main_do.style().zIndex = "2147483647";
			
			_s.bk_do = new FWDRLDO("div");
			_s.bk_do.screen.className = _s.cls + '-main-background'
			_s.bk_do.style().width = "100%";
			_s.bk_do.style().height = "100%";
			_s.bk_do.setAlpha(0);

			_s.itemDragHld_do = new FWDRLDO("div");	
			_s.itemDragHld_do.setOverflow('visible');
		
			_s.itemHld_do = new FWDRLDO("div");	
			_s.itemHld_do.screen.className = _s.cls + '-item';
			
			FWDRLCaption.setPrototype();
			_s.caption_do = new FWDRLCaption(
					_s, 
					_s.captionAnimationType,
					_s.captionPosition,
					_s.itemBorderSize,
					'in');

			FWDRLCaption.setPrototype();
			_s.caption2_do = new FWDRLCaption(
					_s, 
					_s.captionAnimationType,
					_s.captionPosition,
					_s.itemBorderSize,
					'out');

		
			_s.itemBorder_do = new FWDRLDO("div");
			_s.itemBorder_do.screen.className = _s.cls + '-item-border';
			_s.itemBorder_do.style().backgroundColor = _s.itemBorderColor;
			if((!_s.isMbl && FWDRLUtils.isChrome)
				|| FWDRLUtils.isAndroid){
				_s.itemBorder_do.hasTransform3d_bl = false;
				_s.itemBorder_do.hasTransform2d_bl = false;
				_s.itemBorder_do.setBackfaceVisibility();
				
			}
			_s.itemHolder_do = new FWDRLDO("div");
			_s.itemHolder_do.setOverflow("visible");

			_s.itemBk_do = new FWDRLDO("div");
			_s.itemBk_do.screen.className = _s.cls + '-item-background';
			_s.itemBk_do.style().backgroundColor = _s.itemBkColor;

			_s.itemHld_do.addChild(_s.itemBorder_do);
			_s.itemHld_do.addChild(_s.itemBk_do);
			_s.itemHld_do.addChild(_s.itemHolder_do);
			_s.itemHld_do.addChild(_s.caption_do);
			_s.itemHld_do.addChild(_s.caption2_do);

			_s.captionDumy_do = new FWDRLDO('div');
			_s.captionDumy_do.screen.className = _s.cls + '-caption out';
			_s.captionDumy_do.setVisible(false);			
			_s.captionDumy_do.setBkColor('#FF0000')
			
			_s.main_do.addChild(_s.bk_do);
			_s.main_do.addChild(_s.itemDragHld_do);
			_s.itemDragHld_do.addChild(_s.itemHld_do);
			_s.stageContainer.appendChild(_s.main_do.screen);
			_s.main_do.addChild(_s.caption2_do);
			_s.main_do.addChild(_s.captionDumy_do);
			
			if(!FWDRLUtils.isMbl || (FWDRLUtils.isMbl && FWDRLUtils.hasPointerEvent)) _s.main_do.setSelectable(false);
			_s.setupContextMenu();
			_s.setupHider();
			_s.setupDisableClick();
			_s.setupData();
			_s.setupInfoWindow();

			_s.dumy_do = new FWDRLDO("div");
			_s.dumy_do.style().cursor = _s.grabC;
			_s.dumy_do.style().width = '100%';
			_s.dumy_do.style().height = '100%';
			_s.removeGrabHand();

			if(_s.instName == 'rl0'){
				_s.setStaticGalleries();
			}

			if(_s.useDeepLinking){
				_s.setupDL();
			}

			setTimeout(function(){
				var instName = 	FWDRLDL.getParameter("rlinst");	
				var guId = FWDRLDL.getParameter("rlguid");
				var mId = FWDRLDL.getParameter("rlmid");

				if(instName && instName != _s.instName) return;

				_s.propsObjName = FWDRLDL.getParameter("rlprops");
				if(guId && mId){
					_s.show(guId, mId, _s.propsObjName);
				}
			}, 100);
		};

		_s.setGrabHand = function(grab){
			_s.dumy_do.setVisible(true);
			if(!_s.main_do.contains(_s.dumy_do)){
				 _s.main_do.addChild(_s.dumy_do);
			}
		}

		_s.removeGrabHand = function(){
			_s.dumy_do.setVisible(false);
			if(_s.main_do.contains(_s.dumy_do)){
				_s.main_do.removeChild(_s.dumy_do);
			} 
		}

		_s.setCaptionText = function(){
			//if(!_s.hasCaption) return;
			var dl = 800;
			if(!_s.showFirstTimeDone || !_s.animateCaption) dl = 0;

			if(dl){
				setTimeout(function(){
					_s.caption_do.setText(_s.gallery_ar[_s.mId].caption || '');
					_s.caption2_do.setText(_s.gallery_ar[_s.mId].caption || '');
				}, dl);
			}else{
				_s.caption_do.setText(_s.gallery_ar[_s.mId].caption || '');
				_s.caption2_do.setText(_s.gallery_ar[_s.mId].caption || '');
			}
		}
		
		/**
	 	 * Setup info window, this window displayes the error messages.
	 	 */
		_s.setupInfoWindow = function(){
			FWDRLInfo.setPrototype();
			_s.info_do = new FWDRLInfo(_s, _s._d.wrningIconPath_str);
		};	
		
		/**
	 	 * Setup right click context menu.
	 	 */
		_s.setupContextMenu = function(){
			_s.ctxMenu_do = new FWDRLContextMenu(_s.main_do, _s.rightClickContextMenu);
		};
		
		/**
	 	 * Setup hider.
	 	 */
		_s.setupHider = function(){
			FWDRLHider.setPrototype();
			_s.hider = new FWDRLHider(_s.main_do, _s.buttonsHideDelay);
			_s.hider.addListener(FWDRLHider.SHOW, _s.hiderShowHandler);
			_s.hider.addListener(FWDRLHider.HIDE, _s.hiderHideHandler);
		};
		
		_s.hiderShowHandler = function(){
			if(_s.isMax || _s.isAnimMaxOrMin || _s.isAnim) return;
			_s.hiderHidden = false;
			_s.positionBtns(true);
			
		};
		
		_s.hiderHideHandler = function(){

			if(_s.isMax || _s.share_do.isShowed || _s.isDragging) return;
			if(!_s.isMbl){
				if(_s.shareBtnsHolder_do){
					if(FWDRLUtils.hitTest(_s.shareBtnsHolder_do.screen, _s.hider.globalX, _s.hider.globalY)){
						_s.hider.reset();
						return;
					}
				}

				if(_s.showCloseButton){
					if(FWDRLUtils.hitTest(_s.closeBtn_do.screen, _s.hider.globalX, _s.hider.globalY)){
						_s.hider.reset();
						return;
					}
				}
				
				if(_s.showNextAndPrevBtns){
					if(FWDRLUtils.hitTest(_s.nextBtn_do.screen, _s.hider.globalX, _s.hider.globalY)
					   || FWDRLUtils.hitTest(_s.prevBtn_do.screen, _s.hider.globalX, _s.hider.globalY)){
						_s.hider.reset();
						return;
					}
				}
				
				if(_s.showZoomButton){
					if(FWDRLUtils.hitTest(_s.zoomBtn_do.screen, _s.hider.globalX, _s.hider.globalY)){
						_s.hider.reset();
						return;
					}
				}
				
				if(_s.showFullscreenButton){
					if(FWDRLUtils.hitTest(_s.fsBtn_do.screen, _s.hider.globalX, _s.hider.globalY)){
						_s.hider.reset();
						return;
					}
				}
				
				if(_s.showSlideShowButton){
					if(FWDRLUtils.hitTest(_s.slideShowBtn_do.screen, _s.hider.globalX, _s.hider.globalY)){
						_s.hider.reset();
						return;
					}
				}
			
				if(_s.showShareButton){
					if(FWDRLUtils.hitTest(_s.shareBtn_do.screen, _s.hider.globalX, _s.hider.globalY)){
						_s.hider.reset();
						return;
					}
				}
			}
			_s.hiderHidden = true;
			_s.hideBtns(true);
		};
		
		/**
	 	 * Setup disable click.
	 	 */
		_s.setupDisableClick = function(){
			_s.dClick_do = new FWDRLDO("div");
			if(FWDRLUtils.isIE) _s.dClick_do.setBkColor("rgba(0,0,0,.000001");
			//_s.dClick_do.setBkColor("rgba(255,0,0,.1");
		};
		
		_s.showDisable = function(grab, grab2, grab3){
			if(_s.isClkDisabled && !grab2) return;
			_s.isClkDisabled = true;

			if(_s.isGrab2) return;
			if(grab2)_s.isGrab2 = true;

			_s.dClick_do.setWidth(_s.stageW);
			var h = _s.stageH;
			if(grab && !grab2 && _s.thumbs_do) h = _s.stageH - _s.thumbs_do.stageH;
			_s.dClick_do.setHeight(h);
			var c = _s.defaultC;
			if(grab && !grab3){
				c = _s.grabC;
			}else if(_s.useDrag){
				c = _s.handC;
			}

		    _s.dClick_do.style().cursor = c;
		    _s.main_do.addChild(_s.dClick_do);
		};
		
		_s.hideDisable = function(){
			if(!_s.isClkDisabled) return;
			_s.isClkDisabled = _s.isGrab2 = false;
			_s.dClick_do.setWidth(0);
			_s.dClick_do.setHeight(0);
		};
			
		/**
	 	 * Resize and scroll functionality.
	 	 */
		_s.startResizeHandler = function(){
			
			window.addEventListener("orientationchange", _s.orientationChange);
			window.addEventListener("resize", _s.onResizeHandler);
			window.addEventListener("scroll", _s.scrollHandler, {passive:false});
			window.addEventListener ("mousewheel", _s.mouseDummyHandler, {capture:false, passive:false});
			window.addEventListener('DOMMouseScroll', _s.mouseDummyHandler, {capture:false, passive:false});
			if(_s.isMbl) window.addEventListener("touchmove", _s.mouseDummyHandler, {capture:false, passive:false});
			
			_s.onResizeHandler();
			setTimeout(_s.scrollHandler, 200);
			setTimeout(_s.scrollHandler, 500);
		};
	
		_s.stopResizeHandler = function(){
			clearTimeout(_s.resizeHandlerId_to);		
			window.removeEventListener("orientationchange", _s.orientationChange);
			window.removeEventListener("resize", _s.onResizeHandler);
			window.removeEventListener("scroll", _s.scrollHandler);
			window.removeEventListener ("mousewheel", _s.mouseDummyHandler, {capture:false, passive:false});
			window.removeEventListener('DOMMouseScroll', _s.mouseDummyHandler, {capture:false, passive:false});
			if(_s.isMbl) window.removeEventListener("touchmove", _s.mouseDummyHandler);
		};

		_s.orientationChange = function(){
			_s.resizeHandler();
			setTimeout(function(){
				_s.resizeHandler();
			}, 300);
			setTimeout(function(){
				_s.resizeHandler();
			}, 600);
		};
		
		_s.onResizeHandler = function(e){
			_s.resizeHandler(); 
		};
		
		_s.scrollHandler = function(e){
			_s.so = FWDRLUtils.getScrollOffsets();
			if(!_s.isShowed) return;
			_s.main_do.setX(_s.so.x);
			_s.main_do.setY(_s.so.y);
			if(e && e.preventDefault) e.preventDefault();
		};
		
		_s.addPreventMouseWheel = function(){
			window.addEventListener ("mousewheel", _s.mouseDummyHandler);
			window.addEventListener('DOMMouseScroll', _s.mouseDummyHandler);
		};
		
		_s.removePreventMouseWheel = function(){
			window.removeEventListener ("mousewheel", _s.mouseDummyHandler);
			window.removeEventListener('DOMMouseScroll', _s.mouseDummyHandler);
		};
		
		_s.mouseDummyHandler = function(e){
			if(e.preventDefault){
				e.preventDefault();
			}else{
				return false;
			}
		};
		
		_s.resizeHandler = function(overwrite){
			if(!_s.isShowed && !overwrite) return;
			_s.ws = FWDRLUtils.getViewportSize();
			_s.stageW = _s.ws.w;
			_s.stageH = _s.ws.h;
			
			if(_s.isMbl){
				_s.main_do.setWidth(_s.stageW);
				_s.main_do.setHeight(_s.stageH);
			}
			
			if(_s.preloader_do) _s.positionPreloader();
			if(_s.info_do && _s.info_do.isShowed) _s.info_do.positionAndResize();
			
			_s.resizeItem(true, false, true);
			_s.resizeItem();
			_s.positionBtns();
			if(_s.isMax) _s.hideBtns(false);
		
			_s.main_do.setX(_s.so.x);
			_s.main_do.setY(_s.so.y);
			_s.main_do.setHeight(_s.stageH);
			if(_s.thumbs_do && _s.tempThumbsShowed) _s.thumbs_do.positionAndResize();
			if(_s.share_do) _s.share_do.hide();
			
			clearTimeout(_s.resizeHandlerId_to);
			_s.resizeHandlerId_to = setTimeout(_s.checkStageSizeAndResize, 50);
		};
		
		_s.checkStageSizeAndResize = function(){
			_s.ws = FWDRLUtils.getViewportSize();
			if(_s.stageW != _s.ws.w) _s.resizeHandler();
		};
	
		/**
	 	 * Setup data object.
	 	 */
		_s.setupData = function(){
			FWDRLData.setPrototype();
			_s._d = new FWDRLData(_s.props, _s.rootElement_el, _s);
			
			_s.DFVideoControllerBackgroundColor_str = _s._d.videoControllerBackgroundColor_str;
			_s.DFVideoPosterBackgroundColor_str = _s._d.videoPosterBackgroundColor_str;
			_s.DFAudioControllerBackgroundColor_str = _s._d.audioControllerBackgroundColor_str;

			_s.defaultC = 'default';
			_s.handC = 'url(' + _s._d.skin + 'hand.cur), default';
			_s.grabC = 'url(' + _s._d.skin + 'grab.cur), default';

			_s.setupPreloader();
			if(_s.isShowed){
				_s.positionPreloader();
				_s.preloader_do.show(true);
				_s.resizeHandler();
			}
	
			_s._d.addListener(FWDRLData.LOAD_ERROR, _s.dataLoadError);
			_s._d.addListener(FWDRLData.SKIN_LOAD_COMPLETE, _s.dataSkinLoadComplete);
		};
		
		_s.dataLoadError = function(e){
			if(_s.preloader_do) _s.preloader_do.hide(false);
			_s.showError(e.text);
			setTimeout(_s.resizeHandler, 200);
			_s.showError(e.text);
		};
		
		_s.dataSkinLoadComplete = function(){
			_s.dataReady();
		};

		_s.dataReady = function(){
			if(_s.useVideo && !window['FWDEVPlayer']){
				_s.loadVideoPlayer();
			}else{
				_s.setupMainStuff();
			}
		}
		
		/**
	 	 * Setup main instances like buttons, video and audio players...
	 	 */
		_s.setupMainStuff = function(){
			_s.setupCounter();
			_s.setupBtns();
			_s.setupShare();
			_s.setupTimerManager();
			_s.hideStuffForGood();
			_s.setupEVPContainer();
			clearTimeout(_s.showOrHideCompleteId_to);

			setTimeout(function(){
				_s.isReady = true;
				_s.showComplete();
			}, 50);

			// Update properties if it's showed before inst are created.
			_s.tm.delay = _s.slideShowDelay;
			_s.slp_do.animDur = _s.slideShowDelay/1000;
			_s.hider.hideDelay = _s.buttonsHideDelay;
			_s.slp_do.updateColors(_s.slideShowBkColor, _s.slideShowFillColor);
			_s.slp_do.updateColors(_s.slideShowBkColor, _s.slideShowFillColor);
		};


		/**
	 	 * Setup video player.
	 	 */
	 	_s.loadVideoPlayer = function(){
	 		if(_s.fr){
	 			var error = "Video is not supported in the free version!";
	 			_s.showError(error);
	 			return;
	 		}

	 		if(!FWDRL.hasLoadEVP && !window['FWDEVPlayer']){
		 		var script = document.createElement('script');
				script.src = _s._d.mainFolderPath + 'evp/java/FWDEVPlayer.js?t=' + Math.random() * 99999999;
				document.head.appendChild(script);
				script.onload = _s.videoLoadDone;
				script.onerror = _s.onVidLoadError;
			}

			_s.evp_it = setInterval(function(){
				if(FWDRL.hasEVP || window['FWDEVPlayer']){
					_s.setupMainStuff();
					clearInterval(_s.evp_it);
				}
			}, 5);

			FWDRL.hasLoadEVP = true;
	 	}

	 	_s.onVidLoadError = function(){
	 		_s.hideDisable();
			var error = "Error loading video player!";
	 		_s.showError(error);
	 	}

	 	_s.videoLoadDone = function(){
	 		FWDRL.hasEVP = true;	
	 	}

	 	_s.setupEVPContainer = function(){
			_s.vidHld_do = new FWDRLDO("div");
			_s.vidHld_do.screen.setAttribute('id', _s.instName + '_evp_div');
			_s.vidHld_do.screen.className = "fwdevp";
			_s.vidHld_do.setOverflow('visible');
			_s.itemHld_do.addChildAt(_s.vidHld_do, 3);
		}

		_s.updateEVP = function(){
			
			if(!_s.evpInst){
				_s.isLoading = true;
				_s.evpInst = true;
				FWDEVPUtils.hasTransform3d = FWDRLUtils.hasTransform3d;
				FWDEVPUtils.hasTransform2d = FWDRLUtils.hasTransform2d;
				
				var isPrivate = _s.password ? 'yes' : 'no';
				var spaceBetweenButtons = _s.useVectorIcons ? 6 : 12;
				var startSpaceBetweenButtons = _s.useVectorIcons ? 12 : 16;
				var pushBtns = _s.useVectorIcons ? -2 : 0;
				var timeOffsetLeftWidth = _s.useVectorIcons ? 9 : 3;
				var	timeOffsetRightWidth = _s.useVectorIcons ? 6 : 2;

				var isPrivate = _s.password ? 'yes' : 'no';
				var spaceBetweenButtons = _s.useVectorIcons ? 2 : 12;
				var startSpaceBetweenButtons = _s.useVectorIcons ? 12 : 16;
				var pushBtns = _s.useVectorIcons ? -2 : 0;
				var timeOffsetLeftWidth = _s.useVectorIcons ? 9 : 3;
				var	timeOffsetRightWidth = _s.useVectorIcons ? 6 : 2;

				var volumeScrubberOffsetRightWidth =  _s.useVectorIcons ? 4 : 0;
				
				if(window['is_ACORA']){
					startSpaceBetweenButtons = 16;
					spaceBetweenButtons = 16;
					volumeScrubberOffsetRightWidth = 2;
					pushBtns = 1;
				}

				_s.videoType = undefined;
				if(_s.is360 != undefined){
					_s.videoType = '360DegreeVideo';
				}
				
				new FWDEVPlayer({		
					// Main settings.
					isRL:true,
					instanceName:_s.instName + '_evp',
					parentId:_s.instName + '_evp_div',
					fontIcon:_s.fontIcon,
					mainFolderPath:_s._d.mainFolderPath + 'evp/',
					skinPath:'skin',
					displayType:'afterparent',
					delayPoster:true,
					playsinline:'yes',
					useVectorIcons: _s.useVectorIcons ? 'yes' : 'no',
					privateVideoPassword:_s.password,
					preloaderBackgroundColor: _s.preloaderBkColor,
					preloaderFillColor: _s.preloaderFillColor,
					startAtVideoSource:0,
					videoSource:[{source:_s.src, label:"", isPrivate:isPrivate, videoType:_s.videoType, rotationY360DegreeVideo:_s.rotationY360DegreeVideo}],
					posterPath:_s.posterSrc,
					showErrorInfo:'no',
					fillEntireScreenWithPoster: _s.fillEntireScreenWithPoster ? 'yes' : 'no',
					addKeyboardSupport:_s.useKeyboard ? 'yes' : 'no',
					autoPlay:_s.videoAutoPlay ? 'yes' : 'no',
					autoPlayText:_s.videoAutoPlayText,
					volume:_s.volume,
					posterBackgroundColor:"#000000",
					backgroundColor:'#000000',
					// Logo.
					showLogo:_s.showLogo ? 'yes' : 'no',
					logoPath:_s.logoPath,
					hideLogoWithController:'yes',
					logoPosition:'topRight',
					logoLink:_s.logoLink,
					logoMargins:5,
					// Controller.
					pushBtns:pushBtns,
					showControllerWhenVideoIsStopped:_s.showControllerWhenVideoIsStopped ? 'yes' : 'no',
					showDefaultControllerForVimeo:_s.showDefaultControllerForVimeo ? 'yes' : 'no',
					showScrubberWhenControllerIsHidden:_s.showScrubberWhenControllerIsHidden ? 'yes' : 'no',
					showVolumeButton:_s.showVolumeButton ? 'yes' : 'no',
					showVolumeScrubber:_s.showVolumeButton ? 'yes' : 'no',
					showTime:_s.showTime ? 'yes' : 'no',
					showRewindButton:_s.showRewindButton ? 'yes' : 'no',
					showShareButton:"no",
					showEmbedButton:"no",
					showAudioTracksButton:_s.showAudioTracksButton ? 'yes' : 'no',
					showQualityButton:_s.showQualityButton ? 'yes' : 'no',
					showChromecastButton:_s.showChromecastButton ? 'yes' : 'no',
					showFullScreenButton:_s.showFullScreenButton ? 'yes' : 'no',
					showMainScrubberToolTipLabel:_s.showScrubberToolTipLabel ? 'yes' : 'no',
					show360DegreeVideoVrButton:_s.show360DegreeVideoVrButton  ? 'yes' : 'no',
					controllerHeight:42,
					controllerHideDelay:_s.buttonsHideDelay/1000,
					startSpaceBetweenButtons:startSpaceBetweenButtons,
					spaceBetweenButtons:spaceBetweenButtons,
					mainScrubberOffestTop:13,
					scrubbersOffsetWidth:3,
					timeOffsetLeftWidth:timeOffsetLeftWidth,
					timeOffsetRightWidth:timeOffsetRightWidth,
					volumeScrubberWidth:80,
					volumeScrubberOffsetRightWidth:volumeScrubberOffsetRightWidth,
					timeColor:_s.timeColor,
					youtubeQualityButtonNormalColor:_s.youtubeQualityButtonNormalColor,
					youtubeQualityButtonSelectedColor:_s.youtubeQualityButtonSelectedColor,
					scrubbersToolTipLabelBackgroundColor:_s.scrubbersToolTipLabelBackgroundColor,
					scrubbersToolTipLabelFontColor:_s.scrubbersToolTipLabelFontColor,
					// Subtitles.
					showSubtitleButton:'no',
					startAtSubtitle:1,
					subtitlesSource:[{subtitlePath:_s.subtitleSrc, subtileLabel:"test"}],
					// Playback rate/speed.
					showPlaybackRateButton:_s.showPlaybackRateButton ? 'yes' : 'no',
					defaultPlaybackRate:'1', //0.25, 0.5, 1, 1.25, 1.5, 2
					// Audio visualizer
					audioVisualizerLinesColor:_s.audioVisualizerLinesColor,
					audioVisualizerCircleColor:_s.audioVisualizerCircleColor,
					// Thumbnails preview.
					thumbnailsPreview:'auto',
					thumbnailsPreviewWidth:_s.thumbnailsPreviewWidth,
					thumbnailsPreviewBackgroundColor:_s.thumbnailsPreviewBackgroundColor,
					thumbnailsPreviewBorderColor:_s.thumbnailsPreviewBorderColor,
					thumbnailsPreviewLabelBackgroundColor:_s.thumbnailsPreviewLabelBackgroundColor,
					thumbnailsPreviewLabelFontColor:_s.thumbnailsPreviewLabelFontColor,
					// Ads.
					vastSource:_s.vastSrc,
					openNewPageAtTheEndOfTheAds:'no',
					adsButtonsPosition:'right',
					skipToVideoText:_s.skipToVideoText,
					skipToVideoButtonText:_s.skipToVideoButtonText,
					adsTextNormalColor:'#B9B9B9',
					adsTextSelectedColor:'#FFFFFF',
					adsBorderNormalColor:'#2e2e2e',
					adsBorderSelectedColor:'#FFFFFF',
					// context menu
					contextMenuType:'disabled',
					// Password window.
					embedWindowCloseButtonMargins:15,
					borderColor:"#333333",
					mainLabelsColor:"#FFFFFF",
					secondaryLabelsColor:"#a1a1a1",
					shareAndEmbedTextColor:"#5a5a5a",
					inputBackgroundColor:"#000000",
					inputColor:"#FFFFFF"
				});
				
				setTimeout(function(){
					_s.evp._d.thumbnailsPreview = _s.thumbnailsPreviewSrc;
				}, 200);
				
				// Register API.
				var api_it;
				registerAPI();
				function registerAPI(){
					clearTimeout(api_it);
					_s.evp = window[_s.instName + '_evp'];
					if(_s.evp){
						_s.evp.main_do.screen.className = "fwdevp";
						_s.evp.addListener(FWDEVPlayer.VR_START, _s.evpVRStart);
						_s.evp.addListener(FWDEVPlayer.VR_STOP, _s.evpVRStop);
						_s.evp.addListener(FWDEVPlayer.READY, _s.evpReady);
						_s.evp.addListener(FWDEVPlayer.FRAMEWORK_LOAD, _s.evpFrLoad);
						_s.evp.addListener(FWDEVPlayer.FRAMEWORK_DONE, _s.evpFrDone);
						_s.evp.addListener(FWDEVPlayer.ERROR, _s.evpError);
						_s.evp.addListener(FWDEVPlayer.VOLUME_SET, _s.evpVolume);
						_s.evp.addListener(FWDEVPlayer.HIDER_SHOW, _s.evpShowCursor);
						_s.evp.addListener(FWDEVPlayer.SHOW_CURSOR, _s.evpShowCursor);
						_s.evp.addListener(FWDEVPlayer.STOP, _s.evpStop);
						_s.evp.addListener(FWDEVPlayer.PAUSE, _s.evpPause);
						_s.evp.addListener(FWDEVPlayer.PLAY, _s.evpPlay);
						_s.evp.addListener(FWDEVPlayer.PLAY_START, _s.evpPlayStart);
						_s.evp.addListener(FWDEVPlayer.PLAY_COMPLETE, _s.evpPlayComplete);
						_s.evp.addListener(FWDEVPlayer.UPDATE, _s.evpUpdate);
						_s.evp.addListener(FWDEVPlayer.GO_FULLSCREEN, _s.evpFS);
						_s.evp.addListener(FWDEVPlayer.GO_NORMALSCREEN, _s.evpNS);
					}else{
						api_it = clearTimeout(api_it, 50);
					}
				};

			}else if(_s.evp){

				_s.videoType = '';
				
				if(_s.is360 != undefined){
					_s.videoType = '360DegreeVideo';
				}
				
				_s.evp._d.show360DegreeVideoVrButton_bl = _s.show360DegreeVideoVrButton;

				_s.evp.controller_do.hide(false, true);
				_s.evp._d.showControllerWhenVideoIsStopped_bl = _s.showControllerWhenVideoIsStopped;
				_s.evp.controller_do.showControllerWhenVideoIsStopped_bl = _s.showControllerWhenVideoIsStopped;
				
				_s.evp.prevVideoSource_str = '';
				if(_s.useKeyboard){
					_s.evp.addKeyboardSupport();
				}else{
					_s.evp.removeKeyboardSupport();
				}
				
				_s.evp._d.autoPlay_bl = _s.videoAutoPlay || _s.nextVideoAutoPlay;
				if(_s.clicked && !_s.nextVideoAutoPlay){
					_s.evp._d.autoPlay_bl = false;
				}

				if(!_s.showVideoFirstTime && _s.videoAutoPlay){
					_s.evp._d.autoPlay_bl = true;
					_s.showVideoFirstTime = false;
				}
				
				_s.evp.preloader_do.updateColors(_s.preloaderBkColor, _s.preloaderFillColor);
				_s.evp._d.subtitles_ar[0]["source"] = _s.subtitleSrc;
				_s.evp._d.thumbnailsPreview = _s.thumbnailsPreviewSrc || undefined;
				_s.evp.setVolume(_s.volume);
			
				_s.evp.setPosterSource(_s.posterSrc, true);
			
				// Set source.
				_s.evp._d.privateVideoPassword_str = _s.password;
				_s.evp.setVideoSource(_s.src, '', _s.videoType, false, _s.vastSrc, Boolean(_s.password), _s.rotationY360DegreeVideo);
			
  				if(_s.nextVideoAutoPlay){
  					 _s.playAudio();
  					 if(_s.type != FWDRL.AUDIO){
  					 	_s.tm.pause();
  					 	_s.videoStarted = true;
  					 }
  				}

  				// Resize to make sure it is on board.
  				_s.evp.resizeHandler();
  				
			}

		};

		_s.evpVRStart = function(){
			_s.main_do.style().zIndex = "1";
		}

		_s.evpVRStop = function(){
			_s.main_do.style().zIndex = "2147483647";
		}

		_s.evpPlayStart = function(){
			_s.tm.pause();
			_s.videoStarted = true;
		}

		_s.playAudio = function(){
			if(_s.evp && _s.type == FWDRL.AUDIO && _s.clicked){
				if(FWDRLUtils.isIOS && !_s.audioPlayed) return;
				_s.tm.pause();
  				_s.evp.play();
  				_s.videoStarted = true;
  			}
		}

		_s.evpReady = function(){
			_s.isLoading = false;
			if(_s.videoAutoPlay){
				_s.playAudio();
			}
		}

		_s.evpFrLoad = function(){
			_s.isLoading = true;
		}

		_s.evpFrDone = function(){
			_s.isLoading = false;
		}

		_s.evpError = function(e){
			_s.isLoading = false;
			_s.showError(e.error);
		}
		
		_s.evpVolume = function(e){
			if(!_s.isAnim && !_s.evp._d.autoPlay_bl){
				_s.volume = e.volume;
				if(_s.type == FWDRL.VIMEO){
					//_s.vimeoPlayed = true;
				}else if(_s.type == FWDRL.YOUTUBE){
					_s.youtubePlayed = true;
				}else if(_s.type == FWDRL.VIDEO){
					_s.videoPlayed = true;
				}else if(_s.type == FWDRL.AUDIO){
					_s.audioPlayed = true;
				}
			}
		}
		
		_s.evpShowCursor = function(){
			_s.updateEVPCursor();
		}

		_s.evpPause = function(){
			_s.evpNS(0,1);
		}

		_s.evpPlay = function(){
			_s.caption_do.hide(true);
			_s.updateEVPCursor();
			
			if(_s.clicked){
				if((FWDRLUtils.isMAC && (_s.type == FWDRL.VIDEO && !_s.videoPlayed))){
				   // do not change volume, MAC dose not allow it unless the media has played once / THANK YOU APPLE!!!
				   _s.evp.setupAPT();
				}else if(FWDRLUtils.isIOS
				   && (_s.type == FWDRL.VIDEO && !_s.videoPlayed 
				   	|| _s.type == FWDRL.VIMEO && !_s.vimeoPlayed
				   	|| _s.type == FWDRL.YOUTUBE && !_s.youtubePlayed)
				   ){
				   	// do not change volume, IOS dose not allow it unless the media has played once / THANK YOU APPLE!!!
				   _s.evp.setupAPT();
				}else{
					setTimeout(function(){
						_s.evp.setVolume(_s.volume, true);
					}, 10);
				}
			}
			if(!FWDRLUtils.isIOS){
				_s.audioPlayed = true;
				_s.videoPlayed = true;
			}
		};

		_s.evpPlayComplete = function(){
			_s.videoStarted = false;
			_s.tm.resume();
			if(_s.nextVideoAutoPlay || !_s.tm.isStopped){
				var id = _s.mId + 1;
				if(id < 0){
					id = _s.totalItems - 1;
				}else if(id > _s.totalItems - 1){
					id = 0;
				}
				var type = _s.gallery_ar[id].type;

				if(type == FWDRL.VIDEO
				|| type == FWDRL.YOUTUBE
				|| type == FWDRL.VIMEO
				|| type == FWDRL.AUDIO){
					_s.gotoNextItem();
				}else if(!_s.tm.isStopped){
					_s.gotoNextItem();
				}
			}
		}

		_s.evpUpdate = function(e){
			if(_s.videoStarted){
				_s.slp_do.drawFill(e.percent);
			}
		}

		_s.evpStop = function(){
			_s.caption_do.show(true);
			_s.evpNS(0,1);
			_s.dispatchEvent(FWDRL.EVP_STOP, {guId:_s.guId, mId:_s.mId});
		}
		
		_s.evpFS = function(){
			_s.itemHld_do.style().zIndex = 999999999;
			_s.fsX = _s.so.x;
			_s.fsY = _s.so.y;
			_s.isEvpFS = _s.isEvpFSDL = _s.isFullScreen = _s.evp.isFullScreen_bl;
			_s.itemHld_do.style().overflow = 'visible';
			_s.setBtnsInvisible();
			_s.tm.pause();
			_s.updateEVPCursor(0, true);
			_s.resizeHandler();
			if(_s.thumbs_do) _s.thumbs_do.setVisible(false);
		};
		
		_s.evpNS = function(e, res){
			
			_s.isEvpFS = _s.evp.isFullScreen_bl;
			if(e){
				setTimeout(function(){
					_s.isEvpFSDL = _s.evp.isFullScreen_bl;
				}, 200);
			}
			_s.itemHld_do.style().overflow = "hidden";
			if(!_s.isEvpFS){
				_s.itemHld_do.style().zIndex = 'auto';
				_s.setBtnsVisible();
			} 
			_s.tm.resume();
			_s.updateEVPCursor();
			if(!res) _s.resizeOnNS();
			if(_s.thumbs_do) _s.thumbs_do.setVisible(true);
		};
		
		_s.updateEVPCursor = function(c){
			if(_s.evp){
				if((_s.useDrag && !_s.isEvpFS && !_s.evp.isFullScreen_bl)
				|| (_s.is360 != undefined && _s.videoStarted)){
					if(!c) c = _s.handC;
					if(_s.evp.dClk_do) _s.evp.dClk_do.style().cursor = c;
					if(_s.item_do) _s.item_do.style().cursor = _s.handC;
				}else{
					if(_s.evp.dClk_do) _s.evp.dClk_do.style().cursor = _s.defaultC;
					if(_s.item_do) _s.item_do.style().cursor = _s.defaultC;
				}
			}
		}

		_s.hidePassWindow = function(){
			if(_s.evp && _s.evp.passWindow_do){
				_s.evp.passWindow_do.hide(true);
			}
		}

		
		/**
	 	 * Setup slideshow timer.
	 	 */
		_s.setupTimerManager = function(){
			FWDRLTimerManager.setProtptype();
			_s.tm = new FWDRLTimerManager(_s.slideShowDelay);
			_s.tm.addListener(FWDRLTimerManager.STOP, _s.tmStopHandler);
			_s.tm.addListener(FWDRLTimerManager.START, _s.tmStartHandler);
			_s.tm.addListener(FWDRLTimerManager.PAUSE, _s.tmPauseHandler);
			_s.tm.addListener(FWDRLTimerManager.RESUME, _s.tmResumeHandler);
			_s.tm.addListener(FWDRLTimerManager.TIME, _s.tmTimeHandler);
		};
		
		_s.tmStopHandler = function(){
			_s.slideShowBtn_do.setButtonState(1);
			if(_s.addSlideShowAnimation_bl){
				_s.removeSlideShowAnimation();
				_s.positionBtns(true);
				_s.slp_do.hide2();
				_s.slp_do.stopSlideshow();
			}
			_s.addSlideShowAnimation_bl = false;
		};
		
		_s.tmStartHandler = function(){
			_s.slideShowBtn_do.setButtonState(0);
			if(!_s.addSlideShowAnimation_bl){
				_s.addSlideShowAnimation();
				_s.positionBtns(true);
				if(_s.showSlideShowAnimation){
					_s.slp_do.show2();
				}
				if(!_s.videoStarted) _s.slp_do.startSlideshow(true);
			}
			_s.addSlideShowAnimation_bl = true;
		};
		
		_s.tmPauseHandler = function(){
			if(_s.addSlideShowAnimation_bl && !_s.videoStarted){
				_s.slp_do.stopSlideshow();
			}
		};
		
		_s.tmResumeHandler = function(){
			if(_s.addSlideShowAnimation_bl && _s.showSlideShowAnimation){
				_s.slp_do.show2();
				if(!_s.videoStarted) _s.slp_do.startSlideshow();
			} 
		};
		
		_s.tmTimeHandler = function(){
			if(_s.isDragging) _s.onDragEnd();
			
			if(_s.addSlideShowAnimation_bl && !_s.videoStarted){
				_s.gotoNextItem();
				_s.slp_do.stopSlideshow();
			}
		};
	
		/**
	 	 * Setup deep linking.
	 	 */
		_s.setupDL = function(){
			FWDRLDL.onChange = _s.dlChangeHandler;
			
			_s.dlChangeHandler();
		};

		_s.setDL = function(set){
			var inst = FWDRL.inst.length > 1 ? "?rlinst=" + _s.instName + "&" : "?";
			if(_s.propsObjName){
				inst += "rlguid=" + _s.playlistDomOrObj + "&rlmid=" + _s.mId + "&rlprops=" + _s.propsObjName;
			}else{
				inst += "rlguid=" + _s.playlistDomOrObj + "&rlmid=" + _s.mId;
			}
			if(set) FWDRLDL.setValue(inst);

			return inst;
		}
		
		_s.dlChangeHandler = function(){

			//if(_s.so) window.scrollTo(_s.so.x, _s.so.y);
			var instName = FWDRLDL.getParameter("rlinst");	
			var guId = FWDRLDL.getParameter("rlguid");
			var mId = FWDRLDL.getParameter("rlmid");
			var inst;

			if(FWDRL.inst.length > 1){
				
				FWDRL.inst.forEach(function(item){
					if(instName == item.instName){
						inst = item;
					}
				});

				var cont = true;
				FWDRL.inst.forEach(function(item){
					var inst2 = item;
					if((!guId || !mId) && inst2.useDeepLinking){
						item.hide();
						cont = false;
					}
				});
				if(!cont) return;
			}

			if(!inst) inst = _s;
			
			if(!inst.isReady || inst.isAnim || inst.isAnimMaxOrMin || !inst.useDeepLinking) return;
			
			if(inst.isMax){
				_s.maxOrMin();
				return;
			}
			
			var sObjVariableName_str = FWDRLDL.getParameter("rlprops");
		
			if(!inst.isShowed){
				if(guId && mId && FWDRL.inst.length > 1 && instName == inst.instName){
					inst.show(guId, mId, inst.propsObjName);
				}else if(guId && mId && FWDRL.inst.length == 1){
					inst.show(guId, mId, inst.propsObjName);
				}
				return;
			}else{
				if(!guId || !mId){
					inst.hide();
					return;
				}
			}
			
			inst.mId = parseInt(FWDRLDL.getParameter("rlmid"));

			if(inst.mId == inst.prevId) return;

			if(inst.mId < 0){
				inst.mId = 0;
				inst.setDL(true);
				return;
			}else if(inst.mId > inst.totalItems - 1){
				inst.mId = inst.totalItems - 1;
				inst.setDL(true);
				return;
			}
			
			inst.initItem();
			inst.prevId = inst.mId;
		};
		
		/**
	 	 * Setup preloader.
	 	 */
		_s.setupPreloader = function(){
			FWDRLPreloader.setPrototype();
			_s.preloader_do = new FWDRLPreloader(_s, 10, _s.preloaderBkColor, _s.preloaderFillColor, 3, 800);
			_s.main_do.addChild(_s.preloader_do);
		};
		
		_s.positionPreloader = function(){
			if(!_s.preloader_do) return;
			_s.preloader_do.setX(parseInt((_s.stageW - _s.preloader_do.w )/2));		
			var y;
			if(_s.showFirstTimeDone){
				 y = Math.round(_s.finalY + (_s.finalH - _s.preloader_do.h)/2);
			}else{
				 y = Math.round((_s.stageH - _s.preloader_do.h)/2);
			}
			_s.preloader_do.setY(y);
		};
		
		/**
	 	 * Setup thumbnails.
	 	 */
		_s.setupThumbnailManager = function(){
			if(_s.thumbs_do) return;
			FWDRLThumbs.setPrototype();
			_s.thumbs_do = new FWDRLThumbs(_s);
			_s.thumbs_do.addListener(FWDRLThumb.CLICK, _s.thumbClickHandler);
			_s.main_do.addChild(_s.thumbs_do);
		};
	
		_s.thumbClickHandler = function(e){
			_s.gotoToItem(e.id);
		};
		
		_s.setupThumbnails = function(delay){
			setTimeout(function(){
				if(_s.thumbs_do && _s.showThumbnails) _s.thumbs_do.setupThumbnails();
			}, delay);
		};


		/**
	 	 * Setup counter.
	 	 */
	 	_s.setupCounter = function(){
	 		_s.mcnt_do = new FWDRLDO('div');
	 		_s.mcnt_do.setOverflow('visible');
	 		_s.mcnt_do.screen.className = _s.cls + '-counter';

	 		_s.cnt_do = new FWDRLDO('div');
	 		_s.cnt_do.screen.className = 'text';
	 		_s.cnt_do.setInnerHTML('1/25');

	 		_s.mcnt_do.addChild(_s.cnt_do);
	 		_s.main_do.addChild(_s.mcnt_do);
	 		_s.mcnt_do.setX( -500)
	 	}

	 	_s.setCntText = function(){
	 		_s.cnt_do.setInnerHTML((parseInt(_s.mId) + 1) + '/' + _s.totalItems);
	 	}

		
		/**
	 	 * Setup buttons.
	 	 */
		_s.setupBtns = function(){
			
			_s.buttons_ar = [];
			_s.buttonsMaxW_ar = [];
			
			FWDRLSimpleButton.setPrototype();
			if(_s.useVectorIcons){
				_s.closeBtn_do = new FWDRLSimpleButton(0, 0, 0,
								'<span class="' + _s.fontIcon + ' ' + _s.fontIcon + '-close"></span>',
								 _s.cls + '-button',
								 'selected');
			}else{
				_s.closeBtn_do = new FWDRLSimpleButton(_s._d.closeN_img, _s._d.closeSPath);
			}
			_s.closeBtn_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.closeButtonOnMouseUpHandler);
			_s.buttonsMaxW_ar.push(_s.closeBtn_do);
			_s.main_do.addChild(_s.closeBtn_do); 

			FWDRLComplexButton.setPrototype();
			if(_s.useVectorIcons){
				_s.zoomBtn_do = new FWDRLComplexButton(0,0,0,0,
						'<span class="' + _s.fontIcon + ' ' + _s.fontIcon + '-zoomin"></span>',
						'<span class="' + _s.fontIcon + ' ' + _s.fontIcon + '-zoomout"></span>',
						_s.cls + '-button',
						'selected'
					);
			}else{
				_s.zoomBtn_do = new FWDRLComplexButton(
					_s._d.maximizeN_img, 
					_s._d.maximizeSPath, 
					_s._d.minimizeN_img, 
					_s._d.minimizeSPath);
			}
			_s.zoomBtn_do.addListener(FWDRLComplexButton.MOUSE_UP, _s.zoomButtonOnMouseUpHandler);
			_s.buttonsMaxW_ar.push(_s.zoomBtn_do);
			_s.main_do.addChild(_s.zoomBtn_do); 
			
			FWDRLComplexButton.setPrototype();
			if(_s.useVectorIcons){
				_s.fsBtn_do = new FWDRLComplexButton(0,0,0,0,
						'<span class="' + _s.fontIcon + ' ' + _s.fontIcon + '-fullscreen"></span>',
						'<span class="' + _s.fontIcon + ' ' + _s.fontIcon + '-normalscreen"></span>',
						_s.cls + '-button',
						'selected'
					);
			}else{
				_s.fsBtn_do = new FWDRLComplexButton(
					_s._d.fullScreenN_img, 
					_s._d.fullScreenS, 
					_s._d.normalScreenN_img, 
					_s._d.normalScreenS);
			}
			_s.fsBtn_do.addListener(FWDRLComplexButton.MOUSE_UP, _s.fullscreenButtonMUH);
			_s.buttonsMaxW_ar.push(_s.fsBtn_do);
			_s.main_do.addChild(_s.fsBtn_do); 
			
			FWDRLComplexButton.setPrototype();
			if(_s.useVectorIcons){
				_s.slideShowBtn_do = new FWDRLComplexButton(0,0,0,0,
						'<span class="' + _s.fontIcon + ' ' + _s.fontIcon + '-play"></span>',
						'<span class="' + _s.fontIcon + ' ' + _s.fontIcon + '-pause"></span>',
						_s.cls + '-button',
						'selected'
					);
			}else{
				_s.slideShowBtn_do = new FWDRLComplexButton(
					_s._d.playN_img, 
					_s._d.playS, 
					_s._d.pauseN_img, 
					_s._d.pauseS);
			}
			_s.slideShowBtn_do.addListener(FWDRLComplexButton.MOUSE_UP, _s.slideshowButtonOnMouseUpHandler);
			_s.buttonsMaxW_ar.push(_s.slideShowBtn_do);
			_s.main_do.addChild(_s.slideShowBtn_do); 
			
			FWDRLPreloader.setPrototype();
			_s.slp_do = new FWDRLPreloader(_s, 8, _s.slideShowBkColor, _s.slideShowFillColor, 2.5, _s.slideShowDelay);
			setTimeout(function(){
				_s.slp_do.setFinalSize(_s.closeBtn_do.w, _s.closeBtn_do.h);
			}, 400);

			_s.buttonsMaxW_ar.push(_s.slp_do);
			_s.main_do.addChild(_s.slp_do); 
			
			FWDRLSimpleButton.setPrototype();
			if(_s.useVectorIcons){
				_s.shareBtn_do = new FWDRLSimpleButton(0, 0, 0,
								'<span class="' + _s.fontIcon + ' ' + _s.fontIcon + '-share"></span>',
								 _s.cls + '-button',
								 'selected');
			}else{
				_s.shareBtn_do = new FWDRLSimpleButton(
					_s._d.showShareImage_img, 
					_s._d.showShareImageSPath);
			}
			
			_s.shareBtn_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.shareButnMUH);	
			_s.buttonsMaxW_ar.push(_s.shareBtn_do);
			_s.main_do.addChild(_s.shareBtn_do);
			
			FWDRLSimpleButton.setPrototype();
			if(_s.useVectorIcons){
				_s.nextBtn_do = new FWDRLSimpleButton(0, 0, 0,
								'<span class="' + _s.fontIcon + ' ' + _s.fontIcon + '-next"></span>',
								 _s.cls + '-button',
								 'selected');
			}else{
				_s.nextBtn_do = new FWDRLSimpleButton(_s._d.nextN_img, _s._d.nextSPath);
			}
			_s.nextBtn_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.nextBtnMUH);	
			_s.buttonsMaxW_ar.push(_s.nextBtn_do);
			_s.main_do.addChild(_s.nextBtn_do);
			
			FWDRLSimpleButton.setPrototype();
			if(_s.useVectorIcons){
				_s.prevBtn_do = new FWDRLSimpleButton(0, 0, 0,
								'<span class="' + _s.fontIcon + ' ' + _s.fontIcon + '-prev"></span>',
								 _s.cls + '-button',
								 'selected');
			}else{
				_s.prevBtn_do = new FWDRLSimpleButton(_s._d.prevN_img, _s._d.prevSPath);
			}
			_s.prevBtn_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.prevBtnMUH);
			_s.buttonsMaxW_ar.push(_s.prevBtn_do);
			_s.main_do.addChild(_s.prevBtn_do); 
			
			
			_s.buttonW = _s.buttonsMaxW_ar[0].w;
			_s.buttonH = _s.buttonsMaxW_ar[0].h;
			setTimeout(function(){
				_s.buttonW = _s.buttonsMaxW_ar[0].w;
				_s.buttonH = _s.buttonsMaxW_ar[0].h;
			}, 50)

		};
		
		_s.closeButtonOnMouseUpHandler = function(){
			_s.hide();
		};
		
		_s.zoomButtonOnMouseUpHandler = function(e){
			_s.maxOrMin();
		};
		
		_s.shareButnMUH = function(){
			if(_s.isAnim || _s.isAnimMaxOrMin) return;
			_s.main_do.addChild(_s.share_do);
			_s.share_do.show();
		};
		
		_s.nextBtnMUH = function(){
			_s.gotoNextItem();
		};
		
		_s.prevBtnMUH = function(){
			_s.gotoPrevItem();
		};
		
		_s.fullscreenButtonMUH = function(){
			if(_s.fsBtn_do.currentState == 1){
				_s.goFullScreen();
			}else{
				_s.goNormalScreen();
			}
		};
		
		_s.slideshowButtonOnMouseUpHandler = function(){
			if(_s.isAnim || _s.isAnimMaxOrMin || _s.isLoading) return;
			if(_s.tm.isStopped){
				if(!_s.videoStarted) _s.slp_do.resetSlideshow()
				_s.tm.start();
			}else{
				_s.tm.stop();
			}			
		};

		_s.positionSlp = function(anim){
			if(_s.addSlideShowAnimation_bl){	
				FWDAnimation.killTweensOf(_s.slp_do);
				if(_s.tempBtnsAlign == FWDRL.BUTTONS_IN){
					FWDAnimation.to(_s.slp_do, .8, {x:_s.finalX + _s.finalW + _s.tempBtnsOffsetIn, y:_s.finalY, alpha:1, ease:Expo.easeInOut});
				}else{
					FWDAnimation.to(_s.slp_do, .8, {x:_s.stageW - _s.buttonW - _s.tempBtnsOffsetOut, y:_s.tempBtnsOffsetIn, alpha:1, ease:Expo.easeInOut});
				}
			}
		}
		
		
		/**
	 	 * Setup share buttons.
	 	 */
		_s.setupShare = function(){
			FWDRLShare.setPrototype();
			_s.share_do = new FWDRLShare(_s);
			_s.share_do.addListener(FWDRLShare.SHOW, _s.shareShowH);
			_s.share_do.addListener(FWDRLShare.HIDE, _s.shareHideH);
			_s.main_do.addChild(_s.share_do);
		};

		_s.shareShowH = function(){
			_s.tm.pause();
			if(_s.evp && _s.item_do == _s.vidHld_do){
				_s.evp.setVideoPlayingStateOnWindowShow();
				_s.evp.pause();
			} 
		}

		_s.shareHideH = function(){
			_s.tm.resume();
			if(_s.evp && _s.item_do == _s.vidHld_do && _s.evp.isVideoPlayingWhenOpenWindows_bl) _s.evp.resume();
		}
		

		/**
	 	 * Add or remove buttons.
	 	 */
		_s.addCloseButton = function(){
			if(!_s.addCloseButton) return;
			if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.closeBtn_do) == -1){
				_s.buttons_ar.splice(0, 0, _s.closeBtn_do);
			}
		};
		
		_s.removeCloseButton = function(){
			if(!_s.addCloseButton) return;
			if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.closeBtn_do) != -1){
				FWDAnimation.killTweensOf(_s.closeBtn_do);
				_s.closeBtn_do.setX(-5000);
				_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.closeBtn_do), 1);
			}
		};
		
		_s.addFullscreenButton = function(){
			if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.fsBtn_do) == -1){
				FWDAnimation.killTweensOf(_s.fsBtn_do);
				if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.closeBtn_do) != -1){
					_s.fsBtn_do.setX(_s.closeBtn_do.x);
					_s.fsBtn_do.setY(_s.closeBtn_do.y + _s.closeBtn_do.h + _s.spaceBetweenBtns);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.closeBtn_do) + 1, 0, _s.fsBtn_do);
				}else{
					if(_s.isFirstItemShowed){
						_s.fsBtn_do.setX(_s.itemHld_do.x + _s.itemHld_do.w + _s.tempBtnsOffsetIn);
						_s.fsBtn_do.setY(_s.itemHld_do.y);
					}
					_s.buttons_ar.splice(0, 0, _s.fsBtn_do);
				}
			}
		};
		
		_s.removeFullscreenButton = function(){
			if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.fsBtn_do) != -1){
				FWDAnimation.killTweensOf(_s.fsBtn_do);
				_s.fsBtn_do.setX(-5000);
				_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.fsBtn_do), 1);
			}
		};

		_s.addZoomButton = function(){
			if(!_s.showZoomButton) return;

			if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.zoomBtn_do) == -1){
				var y;
				var x;
				FWDAnimation.killTweensOf(_s.zoomBtn_do);
				if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.fsBtn_do) != -1){					
					if(_s.tempBtnsAlign == FWDRL.BUTTONS_TOP){
						x = _s.fsBtn_do.x - _s.zoomBtn_do.w - _s.spaceBetweenBtns;
						y = _s.tempBtnsOffsetOut;
					}else{
						x = _s.fsBtn_do.x;
						y = _s.fsBtn_do.y + _s.fsBtn_do.h + _s.spaceBetweenBtns;
					}
					_s.zoomBtn_do.setX(x);
					_s.zoomBtn_do.setY(y);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.fsBtn_do) + 1, 0, _s.zoomBtn_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.closeBtn_do) != -1){
					if(_s.tempBtnsAlign == FWDRL.BUTTONS_TOP){
						x = _s.closeBtn_do.x - _s.zoomBtn_do.w - _s.spaceBetweenBtns;
						y = _s.tempBtnsOffsetOut;
					}else{
						x = _s.closeBtn_do.x;
						y = _s.closeBtn_do.y + _s.closeBtn_do.h + _s.spaceBetweenBtns;
					}
					_s.zoomBtn_do.setX(x);
					_s.zoomBtn_do.setY(y);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.closeBtn_do) + 1, 0, _s.zoomBtn_do);
				}else{
					if(_s.isFirstItemShowed){
						if(_s.tempBtnsAlign == FWDRL.BUTTONS_TOP){
							x = _s.stageW - _s.zoomBtn_do.w - _s.tempBtnsOffsetIn;
							y = _s.tempBtnsOffsetOut;
						}else{
							x = _s.itemHld_do.x + _s.itemHld_do.w + _s.tempBtnsOffsetIn;
							y = _s.itemHld_do.y;
						}
						_s.zoomBtn_do.setX(x);
						_s.zoomBtn_do.setY(y);
					}
					_s.buttons_ar.splice(0, 0, _s.zoomBtn_do);
				}
			}
		};

		_s.removeZoomButton = function(){
			if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.zoomBtn_do) != -1){
				FWDAnimation.killTweensOf(_s.zoomBtn_do);
				_s.zoomBtn_do.setX(-5000);
				_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.zoomBtn_do), 1);
			}
		};
		
		_s.addSlideshowButton = function(){
			if(!_s.showSlideShowButton) return;
			if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.slideShowBtn_do) == -1){
				FWDAnimation.killTweensOf(_s.slideShowBtn_do);
				
				if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.shareBtn_do) != -1){
					_s.slideShowBtn_do.setX(_s.shareBtn_do.x);
					_s.slideShowBtn_do.setY(_s.shareBtn_do.y + _s.shareBtn_do.h + _s.spaceBetweenBtns);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.shareBtn_do) + 1, 0, _s.slideShowBtn_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.zoomBtn_do) != -1){
					_s.slideShowBtn_do.setX(_s.zoomBtn_do.x);
					_s.slideShowBtn_do.setY(_s.zoomBtn_do.y + _s.zoomBtn_do.h + _s.spaceBetweenBtns);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.zoomBtn_do) + 1, 0, _s.slideShowBtn_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.fsBtn_do) != -1){
					_s.slideShowBtn_do.setX(_s.fsBtn_do.x);
					_s.slideShowBtn_do.setY(_s.fsBtn_do.y + _s.fsBtn_do.h + _s.spaceBetweenBtns);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.fsBtn_do) + 1, 0, _s.slideShowBtn_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.closeBtn_do) != -1){
					_s.slideShowBtn_do.setX(_s.closeBtn_do.x);
					_s.slideShowBtn_do.setY(_s.closeBtn_do.y + _s.closeBtn_do.h + _s.spaceBetweenBtns);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.closeBtn_do) + 1, 0, _s.slideShowBtn_do);
				}else{
					if(_s.isFirstItemShowed){
						_s.slideShowBtn_do.setX(_s.itemHld_do.x + _s.itemHld_do.w + _s.tempBtnsOffsetIn);
						_s.slideShowBtn_do.setY(_s.itemHld_do.y);
					}
					_s.buttons_ar.splice(0, 0, _s.slideShowBtn_do);
				}
			}
		};

		_s.removeSlideshowButton = function(){
			//if(!_s.showSlideShowButton) return;	
			if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.slideShowBtn_do) != -1){
				FWDAnimation.killTweensOf(_s.slideShowBtn_do);
				_s.slideShowBtn_do.setX(-5000);
				_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.slideShowBtn_do), 1);
			}
		};
		
		_s.addSlideShowAnimation = function(){
			if(!_s.showSlideShowAnimation) return;

			if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.slp_do) == -1){
				var x;
				var y;
				FWDAnimation.killTweensOf(_s.slp_do);
				if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.slideShowBtn_do) != -1){
					if(_s.tempBtnsAlign == FWDRL.BUTTONS_TOP){
						x = _s.slideShowBtn_do.x - _s.slideShowBtn_do.w - _s.spaceBetweenBtns;
						y = _s.tempBtnsOffsetOut;
					}else{
						x = _s.slideShowBtn_do.x;
						y = _s.slideShowBtn_do.y + _s.slideShowBtn_do.h + _s.spaceBetweenBtns;
					}
					_s.slp_do.setX(x);
					_s.slp_do.setY(y);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.slideShowBtn_do) + 1, 0, _s.slp_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.shareBtn_do) != -1){
					if(_s.tempBtnsAlign == FWDRL.BUTTONS_TOP){
						x = _s.shareBtn_do.x - _s.shareBtn_do.w - _s.spaceBetweenBtns;
						y = _s.tempBtnsOffsetOut;
					}else{
						x = _s.shareBtn_do.x;
						y = _s.shareBtn_do.y + _s.shareBtn_do.h + _s.spaceBetweenBtns;
					}
					_s.slp_do.setX(x);
					_s.slp_do.setY(y);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.shareBtn_do) + 1, 0, _s.slp_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.zoomBtn_do) != -1){
					if(_s.tempBtnsAlign == FWDRL.BUTTONS_TOP){
						x = _s.zoomBtn_do.x - _s.zoomBtn_do.w - _s.spaceBetweenBtns;
						y = _s.tempBtnsOffsetOut;
					}else{
						x = _s.zoomBtn_do.x;
						y = _s.zoomBtn_do.y + _s.zoomBtn_do.h + _s.spaceBetweenBtns;
					}
					_s.slp_do.setX(x);
					_s.slp_do.setY(y);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.zoomBtn_do) + 1, 0, _s.slp_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.fsBtn_do) != -1){
					if(_s.tempBtnsAlign == FWDRL.BUTTONS_TOP){
						x = _s.fsBtn_do.x - _s.fsBtn_do.w - _s.spaceBetweenBtns;
						y = _s.tempBtnsOffsetOut;
					}else{
						x = _s.fsBtn_do.x;
						y = _s.fsBtn_do.y + _s.fsBtn_do.h + _s.spaceBetweenBtns;
					}
					_s.slp_do.setX(x);
					_s.slp_do.setY(y);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.fsBtn_do) + 1, 0, _s.slp_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.closeBtn_do) != -1){
					if(_s.tempBtnsAlign == FWDRL.BUTTONS_TOP){
						x = _s.closeBtn_do.x - _s.closeBtn_do.w - _s.spaceBetweenBtns;
						y = _s.tempBtnsOffsetOut;
					}else{
						x = _s.closeBtn_do.x;
						y = _s.closeBtn_do.y + _s.closeBtn_do.h + _s.spaceBetweenBtns;
					}
					_s.slp_do.setX(x);
					_s.slp_do.setY(y);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.closeBtn_do) + 1, 0, _s.slp_do);
				}else{
					if(_s.isFirstItemShowed){
						if(_s.tempBtnsAlign == FWDRL.BUTTONS_TOP){
							x = _s.stageW - _s.slp_do.w - _s.tempBtnsOffsetIn;
							y = _s.tempBtnsOffsetOut;
						}else{
							x = _s.itemHld_do.x + _s.itemHld_do.w + _s.tempBtnsOffsetIn;
							y = _s.itemHld_do.y;
						}
						_s.slp_do.setX(x);
						_s.slp_do.setY(y);
					}
					_s.buttons_ar.splice(0, 0, _s.slp_do);
				}
				
				
			}
		};

		_s.removeSlideShowAnimation = function(){
			if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.slp_do) != -1){
				FWDAnimation.killTweensOf(_s.slp_do);
				_s.slp_do.setX(-5000);
				_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.slp_do), 1);
			}
		};
		
		_s.removeShareButton = function(){
			if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.shareBtn_do) != -1){
				FWDAnimation.killTweensOf(_s.shareBtn_do);
				_s.shareBtn_do.setX(-5000);
				_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.shareBtn_do), 1);
			}
		};
		
		_s._addShareButton = function(){
			if(!_s.showShareButton) return;
			if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.shareBtn_do) == -1){
				if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.zoomBtn_do) != -1){
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.zoomBtn_do) + 1, 0, _s.shareBtn_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.fsBtn_do) != -1){
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.fsBtn_do) + 1, 0, _s.shareBtn_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.closeBtn_do) != -1){
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.closeBtn_do) + 1, 0, _s.shareBtn_do);
				}else{
					_s.buttons_ar.splice(0, 0, _s.shareBtn_do);
				}
			}
		};
		
		_s.removeNextAndPrevBtns = function(){
			//if(!_s.defaultShowNextAndPrevBtns) return;
			if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.nextBtn_do) != -1){
				FWDAnimation.killTweensOf(_s.nextBtn_do);
				FWDAnimation.killTweensOf(_s.prevBtn_do);
				_s.prevBtn_do.setX(-5000);
				_s.nextBtn_do.setX(-5000);
				_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.nextBtn_do), 1);
			}
		};
		
		_s.addNextAndPrevBtns = function(){
			
			if(!_s.showNextAndPrevBtns) return;
			if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.nextBtn_do) == -1){
				if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.slideShowBtn_do) != -1){
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.slideShowBtn_do) + 1, 0, _s.nextBtn_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.slp_do) != -1){
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.slp_do) + 1, 0, _s.nextBtn_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.shareBtn_do) != -1){
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.shareBtn_do) + 1, 0, _s.nextBtn_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.zoomBtn_do) != -1){
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.zoomBtn_do) + 1, 0, _s.nextBtn_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.fsBtn_do) != -1){
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.fsBtn_do) + 1, 0, _s.nextBtn_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.closeBtn_do) != -1){
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.closeBtn_do) + 1, 0, _s.nextBtn_do);
				}else{
					_s.buttons_ar.splice(0, 0, _s.nextBtn_do);
				}
			}
		};
	
		
		/**
	 	 * Position buttons.
	 	 * @param {Boolean} anim
	 	 */
		_s.positionBtns = function(anim){
			
			if(!_s.isFirstItemShowed || !_s.isShowed || !_s.isReady) return;

			_s.btnsHidden = false;
			var offsetY = 0;
			var totalBtnsHeight = 0;
			var prevBtn2;
			
			if(_s.tempThumbsShowed){
				offsetY = Math.round((_s.thumbnailH + _s.spaceBetweenThumbnailsAndItem)/2 - _s.spaceBetweenThumbnailsAndItem/2) + _s.thumbnailsOffsetBottom + _s.spaceBetweenThumbnailsAndItem;
			}
		
			if(_s.showNextAndPrevBtns){
				if(_s.tempBtnsAlign == FWDRL.BUTTONS_IN){
					_s.prevBtn_do.finalX = _s.finalX - _s.prevBtn_do.w - _s.tempBtnsOffsetIn;
				}else{
					_s.prevBtn_do.finalX = _s.tempBtnsOffsetOut;
				}
			
				_s.prevBtn_do.finalY = Math.round(_s.finalY + (_s.finalH - _s.prevBtn_do.h)/2);
				if(_s.prevBtn_do.finalX == undefined) _s.prevBtn_do.finalX = -5000;
				if(_s.prevBtn_do.finalY == undefined) _s.prevBtn_do.finalY = -5000;
				if(_s.prevBtn_do.finalX  <= 0){
					_s.prevBtn_do.finalX = _s.tempBtnsOffsetOut;
				}
			}
			
			var btn;
			var prevButton;
			var totalBtns = _s.buttons_ar.length;
			
			for(var j=0; j<totalBtns; j++){
				btn = _s.buttons_ar[j];
				if(!btn) continue;
				totalBtnsHeight += btn.h + _s.spaceBetweenBtns;
			}
			totalBtnsHeight -= _s.spaceBetweenBtns;
		
			for(var i=0; i<totalBtns; i++){
			
				btn = _s.buttons_ar[i];
				if(!btn) continue;
				if(i != 0) prevButton = _s.buttons_ar[i-1];
				if(_s.tempBtnsAlign == FWDRL.BUTTONS_IN){
					btn.finalX  = _s.finalX + _s.finalW + _s.tempBtnsOffsetIn;
				}else{
					btn.finalX  = _s.stageW - btn.w - _s.tempBtnsOffsetIn;
				}
				
				if(_s.tempBtnsAlign == FWDRL.BUTTONS_TOP){
					var btnTop = _s.buttons_ar[i];
					if(btnTop != _s.nextBtn_do){
						btnTop.finalX = _s.stageW - btnTop.w - _s.tempBtnsOffsetOut;
						if(prevBtn2){
							btnTop.finalX = prevBtn2.finalX - btnTop.w - _s.spaceBetweenBtns;
						}
						prevBtn2 = btnTop;
					}
					
					btn.finalY = _s.tempBtnsOffsetOut;
					if(btn == _s.nextBtn_do){
						btn.finalY =  _s.prevBtn_do.finalY;
						btnTop.finalX = _s.stageW - btnTop.w - _s.tempBtnsOffsetOut;
					}
				}else{
					if(btn.finalX + btn.w  >= _s.stageW){
						btn.finalX = _s.stageW - btn.w - _s.tempBtnsOffsetOut;
					}

					if(totalBtnsHeight > _s.finalH && _s.tempBtnsAlign == FWDRL.BUTTONS_IN){
						if(i == 0){
							if(_s.tempBtnsAlign == FWDRL.BUTTONS_IN){
								if(_s.tempThumbsShowed){
									btn.finalY = Math.round((_s.stageH - totalBtnsHeight - _s.thumbnailH)/2);
								}else{
									btn.finalY = Math.round((_s.stageH - totalBtnsHeight)/2);
								}
							}else{
								btn.finalY = _s.tempBtnsOffsetIn;
							}
						}else{
							btn.finalY = prevButton.finalY + prevButton.h + _s.spaceBetweenBtns;
						}
					}else{
						
						if(_s.tempBtnsAlign == FWDRL.BUTTONS_IN){
							btn.finalY = _s.finalY;
						}else{
							btn.finalY = _s.tempBtnsOffsetIn;
						}
						
						if(prevButton){
							btn.finalY = prevButton.finalY + prevButton.h + _s.spaceBetweenBtns;
							if(btn == _s.nextBtn_do){
								if(btn.finalY < _s.prevBtn_do.finalY){
									btn.finalY = _s.prevBtn_do.finalY;
								}
							}
						}else{
							if(btn == _s.nextBtn_do){
								if(btn.finalY < _s.prevBtn_do.finalY){
									btn.finalY =  _s.prevBtn_do.finalY;
								}
							}
						}
					}
				}


				if(_s.hider.isHidden_bl && btn == _s.slp_do){
					if(_s.tempBtnsAlign == FWDRL.BUTTONS_IN){
						btn.finalY = _s.finalY;
					}else{
						btn.finalY = _s.tempBtnsOffsetIn;
					}	
				}
			}

			if(_s.showCounter){
				var cntX, cntY;

				if(_s.tempBtnsAlign == 'in'){
					cntX = _s.finalX - _s.buttonsOffsetIn;
					cntY = _s.finalY;
				}else{
					cntX = _s.tempBtnsOffsetOut;
					cntY = _s.tempBtnsOffsetIn;
				}

				_s.mcnt_do.finalX = cntX;
				_s.mcnt_do.finalY = cntY;

				FWDAnimation.killTweensOf(_s.mcnt_do);
				if(anim){
					FWDAnimation.to(_s.mcnt_do, .8, {x:cntX, y:cntY, alpha:1, ease:Expo.easeInOut});
				}else{
					_s.mcnt_do.setX(cntX);
					_s.mcnt_do.setY(cntY);
					_s.mcnt_do.setAlpha(1);
				}
			}

			if(_s.showNextAndPrevBtns){
				FWDAnimation.killTweensOf(_s.prevBtn_do);
				if(anim){
					FWDAnimation.to(_s.prevBtn_do, .8, {x:_s.prevBtn_do.finalX, y:_s.prevBtn_do.finalY, alpha:1, ease:Expo.easeInOut});
				}else{
					_s.prevBtn_do.setX(_s.prevBtn_do.finalX);
					_s.prevBtn_do.setY(_s.prevBtn_do.finalY);
					_s.prevBtn_do.setAlpha(1);
				}
			}
			
			for(var i=0; i<totalBtns; i++){		
				btn = _s.buttons_ar[i];

				//if(btn.x != btn.finalX || btn.y != btn.finalY){
					FWDAnimation.killTweensOf(btn);
					if(anim){ 
						FWDAnimation.to(btn, .8, {x:btn.finalX, y:btn.finalY, alpha:1, ease:Expo.easeInOut});
					}else{
						btn.setX(btn.finalX);
						btn.setY(btn.finalY);
						btn.setAlpha(1);
					}
				//}
			}

			if(_s.showZoomButton && _s.isMax){
				FWDAnimation.killTweensOf(_s.zoomBtn_do);
				_s.zoomBtn_do.setX(_s.stageW - btn.w - 10)
				_s.zoomBtn_do.setY(10);
			}

			if(_s.hiderHidden && anim){
				_s.hideBtns(true);
			}
		};
		
		_s.hideBtns = function(anim){
			if(!_s.isReady ) return;
			_s.btnsHidden = true;
			var btn;
			var totalBtns = _s.buttons_ar.length;

			if(_s.showNextAndPrevBtns){
				_s.prevBtn_do.finalX = _s.prevBtn_do.finalX -_s.prevBtn_do.w;
				if(_s.prevBtn_do.finalX == undefined) _s.prevBtn_do.finalX = -1;
				if(_s.prevBtn_do.finalY == undefined) _s.prevBtn_do.finalY = -1;
			}
			
			for(var i=0; i<totalBtns; i++){
				var opacity = 0;
				btn = _s.buttons_ar[i];	
				if(!btn) continue;
				
				if(!isNaN(btn.finalX)){
					if(_s.tempBtnsAlign == FWDRL.BUTTONS_TOP 
					   && btn != _s.nextBtn_do &&  btn != _s.prevBtn_do){
						btn.finalY = -btn.h;
					}else{
						if(btn.finalX > _s.stageW/2){
							btn.finalX = btn.finalX + btn.w;
						}else{
							btn.finalX = btn.finalX - btn.w;
						}
					}
				}
				
				if(btn.finalX === undefined) btn.finalX = -5000;
				if(btn.finalY === undefined) btn.finalY = -5000;
				if(_s.isMax && btn === _s.zoomBtn_do){
					_s.zoomBtn_do.finalX =_s.stageW - btn.w - 10;
					_s.zoomBtn_do.finalY = 10;
					opacity = 1;
				}
				
				if(anim){
					if(i == 0 && _s.showNextAndPrevBtns){
						FWDAnimation.killTweensOf(_s.prevBtn_do);
						FWDAnimation.to(_s.prevBtn_do, .8, {alpha:0, x:_s.prevBtn_do.finalX, y:_s.prevBtn_do.finalY, ease:Expo.easeInOut});
					}
					FWDAnimation.killTweensOf(btn);
					FWDAnimation.to(btn, .8, {alpha:opacity, x:btn.finalX, y:btn.finalY, ease:Expo.easeInOut});
				}else{
					if(i == 0 && _s.showNextAndPrevBtns){
						FWDAnimation.killTweensOf(_s.prevBtn_do);
						_s.prevBtn_do.setAlpha(0);
						_s.prevBtn_do.setX(_s.prevBtn_do.finalX);
						_s.prevBtn_do.setY(_s.prevBtn_do.finalY);
					}
					FWDAnimation.killTweensOf(btn);
					btn.setAlpha(opacity);
					btn.setX(btn.finalX);
					btn.setY(btn.finalY);
				}
			}

			if(_s.showCounter){
				var cntX, cntY;
				if(_s.tempBtnsAlign == 'in'){
					cntX = Math.round(_s.finalX - _s.buttonsOffsetIn - _s.cnt_do.getHeight());
					cntY = _s.finalY;
				}else{
					cntX = _s.mcnt_do.finalX;
					cntY = - _s.cnt_do.getHeight();
				}

				FWDAnimation.killTweensOf(_s.mcnt_do);
				if(anim){
					FWDAnimation.to(_s.mcnt_do, .8, {x:cntX, y:cntY, alpha:0, ease:Expo.easeInOut});
				}else{
					_s.mcnt_do.setX(cntX);
					_s.mcnt_do.setY(cntY);
					_s.mcnt_do.setAlpha(0);
				}
			}

			if(_s.hiderHidden){
				_s.positionSlp(anim);
			}
		};
		
		_s.hideStuffForGood = function(){
			if(_s.shareBtn_do) _s.shareBtn_do.setX(-5000);
			_s.prevBtn_do.setX(-5000);
			_s.nextBtn_do.setX(-5000);
			_s.closeBtn_do.setX(-5000);
			_s.zoomBtn_do.setX(-5000);
			_s.fsBtn_do.setX(-5000);
			_s.slideShowBtn_do.setX(-5000);
			_s.slp_do.setX(-5000);
			if(_s.evp){
				_s.evp.stop();
				_s.vidHld_do.setX(-5000);
			}
		};
		
		/**
	 	 * Create dynamic gallery object.
	 	 * @param {String} guId
	 	 * @param {Integer} mId
	 	 * @param {String} propsObjName
	 	 */
		_s.getDynamicGallery = function(guId, mId, propsObjName){
			
			// Generate playlists...
			var gallery_obj;
			_s.playlistDomOrObj = guId;
			_s.hadPlErr = false;
			_s.gallery_ar = [];
			var type = 'HTML';

			if(window[guId] && window[guId].tagName){
				var playlistElement = document.getElementById(guId);
				var ch_ar = FWDRLUtils.getChildren(playlistElement);
				_s.totalItems = ch_ar.length;
				
				if(_s.totalItems == 0){
					_s.hadPlErr = true;
					alert("Revolution Lightbox error! The playlist with the guId \"" + guId + "\" must contain at least one item.");
					return
				}
				
				for(var i=0; i<_s.totalItems; i++){
					var media = {};
					var ch = ch_ar[i];
					var test;
	
					media.loaded = false;
					media.src = String(FWDRLUtils.getAttributeValue(ch, "data-src"));
					media.posterSrc = FWDRLUtils.getAttributeValue(ch, "data-poster");
					media.subtitleSrc = FWDRLUtils.getAttributeValue(ch, "data-subtitle") || '';
					media.thumbnailsPreviewSrc = FWDRLUtils.getAttributeValue(ch, "data-thumbnails-preview") || '';
					media.width = FWDRLUtils.getAttributeValue(ch, "data-width");
					media.height = FWDRLUtils.getAttributeValue(ch, "data-height");
					media.vastSrc = FWDRLUtils.getAttributeValue(ch, "data-vast");
					media.is360 = FWDRLUtils.getAttributeValue(ch, "data-is-360");
					
					if(FWDRLUtils.hasAttribute(ch, "data-thumb")){
						media.thumbSrc = FWDRLUtils.getAttributeValue(ch, "data-thumb");
					}
					media.password = FWDRLUtils.getAttributeValue(ch, "data-password");
					
					if(FWDRLUtils.getChildren(ch).length != 0){
						media.caption = ch.innerHTML;
					}
					
					_s.setMediaType(media);
					_s.gallery_ar[i] = media;
				}
				return true;
			}else if(window[guId]){
				
				gallery_obj = window[guId];

				if(gallery_obj && !gallery_obj.playlistItems){
					return;
				}
				_s.totalItems = gallery_obj.playlistItems.length;
				if(_s.totalItems == 0){
					_s.hadPlErr = true;
					alert("Revolution Lightbox error! The playlist with the guId \"" + guId + "\" must contain at least one item.");
					return
				}

				var countPlaylistItems = 0;
				for(var i=0; i<_s.totalItems; i++){
					var media = {};
					var ch = gallery_obj.playlistItems[i];

					media.loaded = false;
					media.src = ch.src;
					media.thumbSrc = ch.thumbSrc
					media.posterSrc = ch.posterSrc;
					media.is360 = ch.is360
					media.subtitleSrc = ch.subtitleSrc || '';
					media.thumbnailsPreviewSrc = ch.thumbnailsPreviewSrc || '';
					media.width = ch.width;
					media.height = ch.height;
					media.vastSrc = ch.vastSrc;
					media.password = ch.password;
					media.caption = ch.caption;
					
					_s.setMediaType(media);
					_s.gallery_ar[i] = media;
				}
				return true;
			}else{
				var playlistElement = document.getElementById(guId);

				if(!playlistElement){
					_s.hadPlErr = true;
					alert("Revolution Lightbox error! Gallery element with the guId \"" + guId + "\" doesn't exist!");
					return;
				}
			}
		};

		_s.setMediaType = function(media){
			if(document.getElementById(media.src)){
				media.type = FWDRL.HTML;
			}else if(/\.jpg|\.webp|\.jpeg|\.png|\.bmp|\.gif|\.tif|\.tiff|\.jfi|\.jfif|\.exif|\.svg/i.test(media.src)){
				media.type = FWDRL.IMAGE;
			}else if(/\.mp4|\.m3u8|\.mpd/i.test(media.src)){
				media.type = FWDRL.VIDEO;
			}else if(/youtube\./i.test(media.src)){
				media.type = FWDRL.YOUTUBE;
			}else if(/vimeo\./i.test(media.src)){
				media.type = FWDRL.VIMEO;
			}else if(/\.mp3/i.test(media.src)){
				media.type = FWDRL.AUDIO;
			}else{
				media.type = FWDRL.IFRAME;	
			}
		};

		_s.checkIfHasThumbs = function(){
			var has = true;
			for(var i=0; i<_s.gallery_ar.length; i++){
				if(!_s.gallery_ar[i].thumbSrc) return false;
			}

			if(_s.totalItems <= 1){
				has = false;
			}else{
				has = true;
			}

			return has;
		}


		/**
	 	 * Create static galleries objects.
	 	 */
	 	 _s.updateGalleries = function(){
	 	 	_s.setStaticGalleries();
	 	 	_s.dispatchEvent(FWDRL.UPDATE_GALLERIES, {galleries:_s.galleries});
	 	 }
	 	 
	 	_s.setStaticGalleries = function(){

	 		// Prepare selectors.
			_s.galleries = {};
			var selectors = _s.mediaSelector,
				sources   = '';
			
			// Setup sources.
			try{
				sources = document.querySelectorAll(selectors);
			}catch(error) {
	 			_s.showError('Your current mediaSelector is not a valid selector: "' + selectors + '"');
			}
			
			for(var i=0; i<sources.length; i++){
				var source = sources[i],
				media = {};

				// Get src based on the tagName.
				media.src = source.tagName === 'A'   ? source.getAttribute('href') : null;
				media.src = source.tagName === 'IMG' ? source.currentSrc || source.src  : media.src;
				// Set data-src as the source if exists.
				media.src = source.getAttribute('data-src') || media.src;

				// Get other media attributes.
				media.loaded = false;
				media.thumbSrc = source.getAttribute('data-thumb');
				media.posterSrc = source.getAttribute('data-poster');
				media.subtitleSrc = source.getAttribute('data-subtitle');
				media.thumbnailsPreviewSrc = source.getAttribute('data-thumbnails-preview');
				media.width = source.getAttribute('data-width');
				media.height = source.getAttribute('data-height');
				media.vastSrc = source.getAttribute('data-vast');
				media.password = source.getAttribute('data-password');
				media.is360 = source.getAttribute('data-is-360');

				var title = source.getAttribute('data-title') || source.getAttribute('title') || '';
				if(title){
					title = '<p class=\'fwdrl-title\'>' + title + '</p>';
				}

				var desc = source.getAttribute('data-alt') || source.getAttribute('alt') || '';
				if(desc){
					desc = '<p class=\'fwdrl-desc\'>' + desc + '</p>';
				}

				media.caption = title + desc;

				// Set media type.
				_s.setMediaType(media);

				// Set galleries.
				var name = source.getAttribute('data-rel');
				name = !name ? Object.keys(_s.galleries).length + 1 : name;

				var gallery = _s.galleries[name];
				gallery = !gallery ? (_s.galleries[name] = []) : gallery;
				gallery.name = name;

				// Assign media index.
				media.index = gallery.length;

				// Add source click events.
				if(source.fwdrlListener) {
					source.removeEventListener('click', source.fwdrlListener);
				}

				source.fwdrlName = gallery.name;
				source.fwdrlId = media.index;
				source.style.cursor = 'pointer';
				source.fwdrlListener = function(e){
					if(e.preventDefault) e.preventDefault();
					window[_s.instName].show(this.fwdrlName, this.fwdrlId, null, true);
				}
				source.addEventListener('click', source.fwdrlListener);

				// Push media data in gallery.
				gallery.push(media);
			}		
	 	}
		
		_s.getStaticGallery = function(guId){
			if(_s.instName != 'rl0') return;
			_s.gallery_ar = _s.galleries[guId];
			if(!_s.gallery_ar) return;
			_s.totalItems = _s.gallery_ar.length;
			_s.playlistDomOrObj = guId;
		}


		/**
	 	 * Show lightbox.
	 	 * @param {String} guId
	 	 * @param {Integer} mId
	 	 * @param {String} propsObjName
	 	 */
		_s.show = function(guId, mId, propsObjName, isStatic){

			var instName = FWDRLDL.getParameter("rlinst")
			if(instName && instName != _s.instName) return;
			
			if(_s.isShowed || FWDRL.isShowed){
				_s.hadPlErr = false;
				return;
			}
			
			FWDRL.isShowed = true;
			_s.mId = mId;
			_s.guId = _s.playlistDomOrObj = guId;
			_s.propsObjName = propsObjName;
			_s.startToHide = _s.showVideoFirstTime = _s.hasError = false;

			if(!guId){
				var error_str = "Please sepecify a playlist or selector";
				alert(error_str);
				return;
			}
			
			//change props
			_s.setDefaultSettings();
			if(propsObjName && window[propsObjName]){
				var props = window[propsObjName];
				_s.setObjectPropsSettings(props);
			}

			// Get gallery.
			_s.getStaticGallery(guId);
			if(!_s.gallery_ar){
				var gal = _s.getDynamicGallery(guId);
			}
		
			_s.isShowed = _s.isAnim = true;
			_s.dispatchEvent(FWDRL.SHOW_START, {guId:_s.guId, mId:_s.mId});

			if(_s.mId < 0){
				_s.mId = 0;
			}else if(_s.mId > _s.totalItems -1){
				_s.mId = _s.totalItems - 1;
			}
			_s.prevId = _s.mId;

			if(_s.hadPlErr){
				setTimeout(function(){
					_s.hadPlErr = _s.isShowed = false;
				}, 100);
				return;
			}

			if(_s.fr){
				_s.showThumbnails = false;
				_s.shareButtons = [];
				_s.showSlideShowButton = false;
				_s.showSlideShowAnimation = false;
				_s.slideShowAutoPlay = false;
				_s.showZoomButton = false;
				_s.showFullscreenButton = false;
				_s.useDeepLinking = false;
			}
			
			if(_s.useDeepLinking) _s.setDL(true);
			
			// Update properties that might change via API.
			_s.hasOneItem = _s.gallery_ar.length == 1 ? true : false;
			if(_s.hasOneItem){
				_s.useDrag = false;
				_s.showThumbnails = false;
				_s.showCounter = false; 
				_s.showSlideShowButton = false;
				_s.showSlideShowAnimation = false;
				_s.slideShowAutoPlay = false;
				_s.showNextAndPrevBtns = false;
			}
			
			if(_s.tm){
				_s.tm.delay = _s.slideShowDelay;
				_s.slp_do.animDur = _s.slideShowDelay/1000;
				_s.hider.hideDelay = _s.buttonsHideDelay;
				_s.slp_do.updateColors(_s.slideShowBkColor, _s.slideShowFillColor);
			}

			_s.showShareButton = _s.shareButtons.length > 0;
			_s.caption_do.captionPosition = _s.captionPosition;
			_s.caption2_do.captionPosition = _s.captionPosition;
			_s.caption_do.captionAnimationType = _s.captionAnimationType;
			_s.caption2_do.captionAnimationType = _s.captionAnimationType;
			_s.caption_do.borderSize = _s.itemBorderSize;
			_s.caption2_do.borderSize = _s.itemBorderSize;
			_s.preloader_do.updateColors(_s.preloaderBkColor, _s.preloaderFillColor);
			
			_s.ctxMenu_do.update(_s.rightClickContextMenu);
			if(_s.thumbs_do) _s.thumbs_do.spaceBetweenThumbnails = _s.spaceBetweenThumbnails;
			_s.bk_do.style().backgroundColor = _s.backgroundColor;
			if(_s.itemBorderSize == 0) _s.itemBorderColor = "transparent";
			_s.itemBorder_do.style().backgroundColor = _s.DFitemBorderColor;
			_s.itemBk_do.style().backgroundColor = _s.itemBkColor;

			// Init thumbnails.
			if(!_s.checkIfHasThumbs()) _s.showThumbnails = false;
			if(_s.showThumbnails && _s.checkIfHasThumbs()){
				_s.setupThumbnailManager();	
				_s.thumbs_do.show(false);
			}else{
				if(_s.thumbs_do) _s.thumbs_do.hide(false);
			}

			// Show...
			_s.so = FWDRLUtils.getScrollOffsets();
			_s.addSlideShowAnimation_bl = _s.captionShowedOnce = false;

			_s.caption_do.hide(false, true, true);
			_s.caption2_do.hide(false, true, true);
			_s.startResizeHandler();
			_s.addPreventMouseWheel();
			FWDAnimation.to(_s.bk_do, .8, {alpha:1, ease:Quint.easeOut});
			
			if(_s.preloader_do){
				_s.positionPreloader();
				_s.preloader_do.show(true);
			}
			_s.main_do.setVisible(true);
			
			if(_s.isReady){	
				_s.hideBtns();
				_s.hideStuffForGood();
			}

			if(_s.itemBorderSize){
				_s.itemBorder_do.setVisible(true);
			}else{
				_s.itemBorder_do.setVisible(false);
			}

			if(_s.thumbs_do) _s.thumbs_do.destoryThumbnails();
			clearTimeout(_s.showOrHideCompleteId_to);
			_s.showOrHideCompleteId_to = setTimeout(_s.showComplete, 51);
		};
	
		_s.showComplete = function(){
	
			if(_s.hadPlErr) return;
			
			if(!_s.isReady || _s.mId == -1 || _s.item_do || !_s.gallery_ar) return;	

			if(!_s.gallery_ar.length) return;
			if(!_s.useAsModal){
				_s.addBkClose();
			}else{
				_s.removeBkClose();
			}

			_s.positionPreloader();
			
			if(_s.showCloseButton){
				_s.addCloseButton();
			}else{
				_s.removeCloseButton();
			}

			if(_s.showFullscreenButton){
				_s.addFullscreenButton();
			}else{
				_s.removeFullscreenButton();
			}
		
			if(_s.showZoomButton && _s.gallery_ar[_s.mId].type == FWDRL.IMAGE){
				_s.addZoomButton();
			}else{
				_s.removeZoomButton();
			}

			if(_s.showShareButton){
				_s._addShareButton();
			}else{
				_s.removeShareButton();
			}

			if(_s.showSlideShowButton){
				_s.addSlideshowButton();
			}else{
				_s.removeSlideshowButton();
			}	

			if(_s.showNextAndPrevBtns){
				_s.addNextAndPrevBtns();
			}else{
				_s.removeNextAndPrevBtns();
			}

			if(_s.showCounter){
				_s.mcnt_do.setVisible(true);
			}else{
				_s.mcnt_do.setVisible(false);
			}

			setTimeout(_s.share_do.update, 500);
			_s.hideBtns();
			_s.initItem();
			_s.startAnim(801);
			_s.dispatchEvent(FWDRL.READY);
		};
		
		_s.hide = function(){
			if(_s.isAnim 
			   || !_s.isShowed 
			   || _s.isAnimMaxOrMin 
			   || _s.isMax
			   || _s.isDragging
			   || _s.isLoading
			  ) return;

			var wasFS = _s.isFullScreen;
			var btnsHidden = _s.btnsHidden;
			_s.gallery_ar = null;

			_s.startToHide = true;

			_s.goNormalScreen();
			_s.resizeHandler(true);
			if(btnsHidden) _s.hideBtns(false);
			_s.removeKeyboard();

			if(wasFS){
				if(FWDRLUtils.isFirefox){
					setTimeout(_s.hideStart, 350);
				}else{
					setTimeout(_s.hideStart, 150);
				}
			}else{
				_s.hideStart();
			}
		};

		_s.hideStart = function(){
			_s.isShowed = false;
			
			FWDAnimation.to(_s.bk_do, .8, {alpha:0, delay:.4, ease:Quint.easeOut});
			
			if(_s.item_do && _s.item_do.screen){
				FWDAnimation.to(_s.item_do, .8, {alpha:0, delay:.1, ease:Quint.easeOut});
			
				FWDAnimation.to(_s.item_do, .8, {
						x:-_s.finalW/2, 
						y:-_s.finalH/2, 
						delay:.1,
						ease:Expo.easeInOut});

			}
			FWDAnimation.to(_s.itemHld_do, .8, {x:_s.stageW/2, y:_s.stageH/2, w:0, h:0, delay:.1, ease:Expo.easeInOut});
			FWDAnimation.to(_s.itemBorder_do, .8, {w:0, h:0, alpha:0, delay:.1, ease:Expo.easeInOut});
			FWDAnimation.to(_s.itemBk_do, .8, {x:0, y:0, w:0, h:0, delay:.1, ease:Expo.easeInOut});
			FWDAnimation.to(_s.caption_do, .8, {x:-_s.finalW/2, h:0, delay:.1, ease:Expo.easeInOut});
			
			if(_s.item_do) _s.hideBtns(true);
			
			_s.isFirstItemShowed = _s.isFirstItemAfterShowed = _s.hiderHidden = false;
			_s.mId == -1;

			if(_s.evp && _s.item_do == _s.vidHld_do){
				FWDAnimation.to(_s.evp, .79, {volume:0, onUpdate:function(){
					_s.evp.setVolume(_s.evp.volume);
				}});
			}

			_s.stopResizeHandler();
			_s.stopMediaLazyLoading();
			_s.tm.stop();
			_s.removeDrag();
			_s.updateDragAf();
			_s.removeDbl();
			if(_s.thumbs_do) _s.thumbs_do.hide(true);
			if(_s.main_do.contains(_s.info_do)) _s.main_do.removeChild(_s.info_do);
			_s.closeImage();
			if(!_s.useAsModal) _s.removeBkClose();
			_s.hider.stop();
			_s.preloader_do.hide(true);
		
			if(_s.hasCaption && _s.caption){
				_s.caption_do.hide(true);
				_s.caption2_do.hide(true);
			} 
			clearTimeout(_s.showOrHideCompleteId_to);
			_s.showOrHideCompleteId_to = setTimeout(_s.hideComplete, 1200);
			
			_s.startAnim(1202);
			_s.dispatchEvent(FWDRL.HIDE_START, {guId:_s.guId, mId:_s.mId});
		}
		
		_s.hideComplete = function(){
			FWDRL.isShowed = false;
    		window.history.pushState('', document.title, window.location.href.replace(window.location.hash, ''));
			_s.removePreventMouseWheel();

			if(_s.item_do == _s.vidHld_do && _s.evp){
				_s.evp.stop();
				_s.evp.setPosterSource("");
				_s.vidHld_do.setX(-10000);
			}
		
			_s.isFirstItemShowed = _s.firstVideoOrAudioAdded_bl = _s.showFirstTimeDone = _s.forceHideCaption = _s.prevCaption = _s.videoStarted = false;
			_s.item_do = _s.prevItem_do = null;
			_s.slp_do.resetSlideshow();
			_s.removeItems(0);
			if(_s.thumbs_do){
				_s.thumbs_do.destoryThumbnails();
				_s.thumbs_do.hideForGood();
			}
			_s.main_do.setX(-5000);
			_s.main_do.setVisible(false);
			//_s.main_do.setY(-5000);
			_s.dispatchEvent(FWDRL.HIDE_COMPLETE, {guId:_s.guId, mId:_s.mId});
		};
		
		_s.startAnim = function(delay){
			_s.stopAnim();
			_s.isAnim = true;
			_s.animId_to = setTimeout(_s.animationDone, delay);
			_s.animId2_to = setTimeout(_s.animationDone2, delay - 300);
			_s.showDisable(true, false, true);
		};
		
		_s.stopAnim = function(){
			_s.isAnim = false;
			if(_s.tm) _s.tm.pause();
			clearTimeout(_s.animId_to);
			clearTimeout(_s.animId2_to);
		};
		
		_s.animationDone = function(){
			_s.isAnim = false;
			if(_s.slideShowAutoStop && _s.mId == _s.totalItems -1){
				_s.tm.stop();
			}else{
				_s.tm.resume();
			}

			if(_s.item_do) _s.dlChangeHandler();

			if(_s.caption){
				if(_s.animateCaption && _s.captionShowedOnce || _s.forceHideCaption){
					_s.caption_do.hide(false, true);
					_s.caption2_do.hide(false, true);
				}

				if(_s.isShowed){
					_s.caption_do.show(true);
					if(_s.caption2_do){
						if(_s.type == FWDRL.IMAGE){
							if(!_s.isLoading) _s.caption2_do.show(true);
						}else{
							_s.caption2_do.show(true);
						}
					}
				}
				_s.captionShowedOnce = true;
			} 

			if(_s.type == FWDRL.IMAGE || _s.type == FWDRL.IFRAME || _s.type == FWDRL.HTML){
				if(_s.vidHld_do){
					setTimeout(function(){
						_s.vidHld_do.setX(-5000);
					}, 100);
				}
			}
			_s.animItemDone();
			_s.hideDisable();
		};

		_s.animationDone2 = function(){
			_s.animItemBeforeDone();
		}
		
		_s.addBkClose = function(){
			if(_s.isMbl){
				if(_s.hasPointerEvent_bl){
					_s.bk_do.screen.addEventListener("pointerup", _s.onBkMouseUp);
				}else{
					_s.bk_do.screen.addEventListener("touchend", _s.onBkMouseUp);
					_s.bk_do.screen.addEventListener("touchmove", _s.onBkTouchMove);
				}
			}else if(_s.bk_do.screen.addEventListener){	
				_s.bk_do.screen.addEventListener("click", _s.onBkMouseUp);
			}
		};
		
		_s.removeBkClose = function(){
			if(_s.isMbl){
				if(_s.hasPointerEvent_bl){
					_s.bk_do.screen.removeEventListener("pointerup", _s.onBkMouseUp);
				}else{
					_s.bk_do.screen.removeEventListener("touchend", _s.onBkMouseUp);
					_s.bk_do.screen.removeEventListener("touchmove", _s.onBkTouchMove);
				}
			}else if(_s.bk_do.screen.removeEventListener){	
				_s.bk_do.screen.removeEventListener("click", _s.onBkMouseUp);
			}

		};
		
		
		_s.onBkTouchMove = function(){
			clearTimeout(_s.doNotAllowToHideId_to);
			_s.doNotAllowToHideId_to = setTimeout(function(){_s.doNotAllowToHide_bl = false;}, 100);
			_s.doNotAllowToHide_bl = true;
		};
		
		_s.onBkMouseUp = function(){
			if(_s.doNotAllowToHide_bl) return;

			if(_s.hasError){
				_s.hide();
				return;
			}

			if(_s.btnsHidden){
				_s.positionBtns(true);
				return;
			}

			_s.hide();
		};
		
		//###################################//
		/* show item */
		//###################################//
		_s.initItem = function(){

			_s.dispatchEvent(FWDRL.START_TO_UPDATE_ITEM, {guId:_s.guId, curId:_s.mId});
			
			var item = _s.gallery_ar[_s.mId];
			var isHttpS_bl;

			if(_s.gallery_ar[_s.mId].caption && _s.caption){
				_s.hasCaption = true;
			}else{
				_s.hasCaption = false;
			}
			
			_s.videoStarted = false;
			_s.type = item.type;
			_s.src = item.src;
			_s.posterSrc = item.posterSrc;
			_s.subtitleSrc = item.subtitleSrc;
			_s.thumbnailsPreviewSrc = item.thumbnailsPreviewSrc;
			_s.vastSrc = item.vastSrc;
			_s.password = item.password;
			_s.is360 = item.is360;
			
			
			_s.hidePassWindow();
			_s.tm.pause();
			_s.share_do.hide();
			_s.closeImage();
			_s.preloader_do.hide(true);
			_s.captionDumy_do.setInnerHTML(_s.gallery_ar[_s.mId].caption);
			if(_s.main_do.contains(_s.info_do)) _s.main_do.removeChild(_s.info_do);
			if(_s.thumbs_do) _s.thumbs_do.disableOrEnableThumbnails();

			if(_s.type == FWDRL.IMAGE){
				if(_s.evp) _s.evp.goNormalScreen();
				_s.loadImage();
				_s.firstVideoOrAudioAdded_bl = true;
			}else if(_s.type == FWDRL.VIDEO
					 || _s.type == FWDRL.YOUTUBE
					 || _s.type == FWDRL.VIMEO
					 || _s.type == FWDRL.AUDIO){	
				
				_s.originalW = item.width || _s.defaultItemWidth;
				_s.originalH = item.height || _s.defaultItemHeight;
				
				_s.item_do = _s.vidHld_do;

				_s.animItem();

				_s.prevItem_do = _s.item_do;
				_s.isLoading = false;
				_s.preloader_do.hide(true);
				_s.removeZoomButton();	
				_s.positionBtns(true);
				_s.startAnim(801);
			}else if(_s.type == FWDRL.IFRAME){
				
				if(_s.evp) _s.evp.goNormalScreen();

				_s.originalW = item.width || _s.defaultItemWidth;
				_s.originalH = item.height || _s.defaultItemHeight;

				_s.item_do = new FWDRLDO('iframe');
				_s.item_do.screen.allowFullScreen  = 1;
				_s.item_do.screen.setAttribute('allowFullScreen', '');
				_s.item_do.screen.frameBorder = 0;
				_s.itemHolder_do.addChild(_s.item_do);
				
				_s.animItem();

				if(_s.fr){
		 			var error = "Iframe is not supported in the free version!";
		 			_s.showError(error);
		 		}else{
					if(/.pdf/i.test(_s.src)){
						setTimeout(function(){
							_s.item_do.screen.src = _s.src;
						},300);
					}else{
						_s.item_do.screen.src = _s.src;
					}
				}
			
				_s.prevItem_do = _s.item_do;
				_s.removeZoomButton();	
				_s.positionBtns(true);
				_s.startAnim(801);
			}else if(_s.type == FWDRL.HTML){
				
				if(_s.evp) _s.evp.goNormalScreen();

				_s.originalW = item.width || _s.defaultItemWidth;
				_s.originalH = item.height || _s.defaultItemHeight;

				_s.item_do = new FWDRLDO('div');

				if(_s.fr){
		 			var error = "HTML content is not supported in the free version!";
		 			_s.showError(error);
		 		}else{
					_s.item_do.setInnerHTML(document.getElementById(_s.src).innerHTML);
				}
				_s.itemHolder_do.addChild(_s.item_do);
				
				_s.animItem();
				_s.item_do.screen.src = _s.src;
				
				_s.prevItem_do = _s.item_do;
				_s.removeZoomButton();	
				_s.positionBtns(true);
				_s.startAnim(801);
			}

			_s.dispatchEvent(FWDRL.UPDATE_ITEM, {guId:_s.guId, curId:_s.mId});
		};

		_s.animItem = function(){

			_s.hasError = false;
			_s.setCaptionText();
			_s.setCntText();
			
			if(!_s.gallery_ar[_s.mId].caption && !_s.animateCaption){
				_s.caption2_do.hide(false, true, false);
			}

			if(!_s.isFirstItemShowed){
				_s.showItemFirstTime();
			}else{	
				_s.resizeItem(true, false, true);
				_s.resizeItem(false, true);
				FWDAnimation.to(_s.prevItem_do, .8, {alpha:0, ease:Quint.easeOut});
				
				var w = _s.prevItem_do.getWidth() || _s.prevFinalW;
				var h = _s.prevItem_do.getHeight() || _s.prevFinalH;
			
				FWDAnimation.to(_s.prevItem_do, .8, {
						x:Math.round((_s.finalW - w)/2), 
						y:Math.round((_s.finalH - h)/2), 
						ease:Expo.easeInOut});
				if(_s.animateCaption){
					_s.caption_do.hide(false, true, false);
					_s.caption2_do.hide(true, true, false);
				}else{
					if(!_s.prevCaption){
						_s.caption_do.hide(false, true, false);
						_s.caption2_do.hide(false, true, false);
						_s.forceHideCaption = true;
					}else{
						_s.forceHideCaption = false;
					}
				}

				_s.item_do.setAlpha(0);
				FWDAnimation.to(_s.item_do, .8, {alpha:1, delay:.8, ease:Quint.easeOut, onComplete:_s.animItemDone});

				if(_s.evp && (_s.prevItem_do == _s.vidHld_do || _s.item_do == _s.vidHld_do)){
					FWDAnimation.to(_s.evp, .79, {volume:0, onUpdate:function(){
						_s.evp.setVolume(_s.evp.volume);
					}});
				}
			}

			if(_s.prevItem_do == _s.vidHld_do){
				_s.prevItem_do.setAlpha(1);
				FWDAnimation.to(_s.prevItem_do, .8, {alpha:0, ease:Quint.easeOut});
				FWDAnimation.to(_s.prevItem_do, .8, {
					x:parseInt((_s.finalW - _s.prevItem_do.getWidth())/2), 
					y:parseInt((_s.finalH - _s.prevItem_do.getHeight())/2), 
					ease:Expo.easeInOut});
			}	
			_s.prevCaption = _s.gallery_ar[_s.mId].caption;
			_s.prevFinalW = _s.finalW;
			_s.prevFinalH = _s.finalH;
			_s.prevMId = _s.mId;
		}

		_s.animItemBeforeDone = function(){
			if(_s.vidHld_do && _s.item_do == _s.vidHld_do){
				if(_s.evp){
					if(_s.evp.largePlayButton_do){
						_s.evp.largePlayButton_do.hide();
					}

					if(_s.evp.videoScreen_do){
						_s.evp.videoScreen_do.setAlpha(0);
					}

					if(_s.evp.ytb_do){
						_s.evp.ytb_do.setAlpha(0);
					}

					if(_s.evp.vimeo_do){
						_s.evp.vimeo_do.setAlpha(0);
					}
				}
			}

			if(_s.evp){
				_s.evp.videoPoster_do.setAlpha(0);
			}
		}

		_s.animItemDone = function(){

			if(_s.evp){
				if(_s.item_do != _s.vidHld_do){
					_s.evp.stop();
				}
			} 

			if(_s.vidHld_do && _s.item_do == _s.vidHld_do){
				_s.removeItems(0);
				if(_s.evp) _s.evp.resizeHandler();
				if(_s.isFirstItemAfterShowed) _s.resizeItem();
				if(_s.useVideo){
					_s.updateEVP();
				}else{
					var error = "Please enable video player in the settings.";
					if(_s.fr) error = "Video is not supported in the free version!";
 					_s.showError(error);
					return;
				}
			}else{
				_s.removeItems(1);
			}

			_s.startMediaLazyLoading();
			_s.showVideoFirstTime = true;
		}

	
		//###########################################//
		/* load image */
		//###########################################//
		_s.closeImage = function(){
			if(_s.image_img){
				_s.image_img.onload = null;
				_s.image_img.onerror = null;
				_s.image_img = null;
			}
		};
		
		_s.loadImage = function(){
			_s.isLoading = true;
			_s.stopAnim();
			_s.positionPreloader();
			_s.preloader_do.show(true);

			_s.image_img = new Image();
			_s.image_img.onload = _s.imageLoadComplete;
			_s.image_img.onerror = _s.imageLoadError;
			_s.image_img.src = _s.src;
		};
		
		_s.imageLoadComplete = function(e){

			_s.originalW = _s.image_img.width;
			_s.originalH = _s.image_img.height;
			
			_s.resizeItem(true, false, true);
			//setTimeout(function(){
				_s.imageLoadComplete2();
			//}, 1000);
		};

		_s.imageLoadComplete2 = function(){
			_s.item_do = new FWDRLDO("img");
			_s.item_do.setScreen(_s.image_img);
			_s.item_do.screen.className = _s.cls + '-media';
		
			_s.animItem();
			
			_s.startAnim(801);
			
			_s.isLoading = false;
			_s.prevItem_do = _s.item_do;
			_s.preloader_do.hide(true);
			_s.addZoomButton();
			_s.positionBtns(true);	
			_s.itemHolder_do.addChild(_s.item_do);
		}
		
		_s.imageLoadError = function(e){
			var error = "Image with path <span style='color:#FF0000;'>" + decodeURIComponent(_s.src) + "</span> can't be loaded, probably the path is incorrect.";
			_s.showError(error);
		};

		
		/**
	  	 * Maximize/minimize item.
	     */
		_s.maxOrMin = function(){
			if(_s.isLoading || _s.isAnim) return;
			
			var scaleX;
			var scaleY;
			var finalX;
			var finalY;
			var finalW;
			var finalH;
			
			_s.isAnimMaxOrMin = true;
			
			clearTimeout(_s.maxComplete_to);
			clearTimeout(_s.minComplete_to);
			
			if(_s.isMax){
				_s.isMax = false;
				if(!_s.useDrag){
					_s.item_do.style().cursor = _s.defaultC;
				}else if(_s.useDrag){
					_s.item_do.style().cursor = _s.handC;
				}
				
				_s.isMaxComplete = false;
				_s.zoomBtn_do.setButtonState(1);
				_s.removeMaxItemScroll();
				if(_s.thumbs_do) _s.thumbs_do.positionThumbnails(false, true);

				FWDAnimation.to(_s.itemBk_do, .8, {alpha:1});
				FWDAnimation.to(_s.itemBorder_do, .8, {alpha:1});
				FWDAnimation.to(_s.item_do, .8, {
					x:_s.finalX + _s.itemBorderSize, 
					y:_s.finalY + _s.itemBorderSize, 
					w:_s.finalW - (_s.itemBorderSize * 2), 
					h:_s.finalH - (_s.itemBorderSize * 2), 
					ease:Expo.easeInOut});
				
				_s.setBtnsVisible(true);
				_s.positionBtns(true);

				if(_s.hasCaption && _s.caption){
					_s.caption2_do.show(true, true);
				} 
				if(_s.thumbs_do && _s.tempThumbsShowed) _s.thumbs_do.show(true);
				_s.minComplete_to = setTimeout(_s.minComplete, 801);
			}else{
				_s.isMax = true;
				_s.item_do.style().cursor = _s.handC;
				_s.hideBtns(true);
				_s.isMaxComplete = true;
				_s.zoomBtn_do.setButtonState(0);
				_s.tm.pause();
		
				finalW = Math.round(_s.originalW * _s.maxZoom);
				finalH = Math.round(_s.originalH * _s.maxZoom);
				finalX = Math.round((_s.stageW - finalW)/2);
				finalY = Math.round((_s.stageH - finalH)/2);
				
				if(_s.item_do.alpha != 1) _s.item_do.setAlpha(1);			
				_s.item_do.setX(_s.item_do.getGlobalX());
				_s.item_do.setY(_s.item_do.getGlobalY());
				
				if(_s.itemHolder_do.contains(_s.imteHolder_do)) _s.itemHolder_do.removeChild(_s.item_do);
				_s.main_do.addChild(_s.item_do);
				_s.main_do.addChild(_s.zoomBtn_do);

			
				FWDAnimation.to(_s.itemBk_do, .4, {alpha:0});
				FWDAnimation.to(_s.itemBorder_do, .4, {alpha:0});
				if(_s.showZoomButton){
					FWDAnimation.killTweensOf(_s.zoomBtn_do);
					FWDAnimation.to(_s.zoomBtn_do, .8, {x:_s.stageW - _s.zoomBtn_do.w - 10, y:10, alpha:1, ease:Expo.easeInOut});
				}
				FWDAnimation.to(_s.item_do, .8, { x:finalX, y:finalY, w:finalW, h:finalH, ease:Expo.easeInOut});

				if(_s.hasCaption && _s.caption){
					_s.caption_do.hide(true);
					_s.caption2_do.hide(true, true, false, true);
			    } 
				if(_s.thumbs_do) _s.thumbs_do.hide(true);
				_s.maxComplete_to = setTimeout(_s.maxComplete, 801);
			}
		};
		
		_s.minComplete = function(){
			_s.isAnimMaxOrMin = false;
			_s.isTweening_bl = false;
			_s.itemHolder_do.addChild(_s.item_do);
			_s.resizeItem();
			_s.tm.resume();

			if(_s.hasCaption && _s.caption){
				_s.caption_do.show(true);
			} 
			
			_s.main_do.addChild(_s.zoomBtn_do);
			if(_s.useDeepLinking) _s.dlChangeHandler();
		};
		
		_s.maxComplete = function(){
			_s.isAnimMaxOrMin = false;
			_s.setBtnsInvisible(true);
			_s.addMaxItemScroll();
			if(_s.hasCaption && _s.caption){
				 _s.caption_do.hide(false);
			}
		};

		_s.setBtnsInvisible = function(applyToMainHolder){
			if(_s.showCloseButton) _s.closeBtn_do.setVisible(false);
			if(_s.showNextAndPrevBtns){
				_s.nextBtn_do.setVisible(false);
				_s.prevBtn_do.setVisible(false);
			}
			if(_s.tempThumbsShowed) _s.thumbs_do.setVisible(false);
			if(_s.showFullscreenButton) _s.fsBtn_do.setVisible(false);
			if(_s.showSlideShowButton)  _s.slideShowBtn_do.setVisible(false);
			if(_s.showCounter) _s.mcnt_do.setVisible(false);
			if(_s.showShareButton) _s.shareBtn_do.setVisible(false);
			if(_s.addSlideShowAnimation_bl) _s.slp_do.setVisible(false);
			if(_s.caption){
				//_s.caption_do.setVisible(false);
				_s.caption2_do.setVisible(false);
			}
			
			if(applyToMainHolder) _s.itemHld_do.setVisible(false);
		};
		
		_s.setBtnsVisible = function(applyToMainHolder){
			if(_s.showCloseButton) _s.closeBtn_do.setVisible(true);
			if(_s.showNextAndPrevBtns){
				_s.nextBtn_do.setVisible(true);
				_s.prevBtn_do.setVisible(true);
			}
			if(_s.tempThumbsShowed) _s.thumbs_do.setVisible(true);
			if(_s.showFullscreenButton) _s.fsBtn_do.setVisible(true);
			if(_s.showCounter) _s.mcnt_do.setVisible(true);
			if(_s.showSlideShowButton)  _s.slideShowBtn_do.setVisible(true);
			if(_s.showShareButton) _s.shareBtn_do.setVisible(true);
			if(_s.addSlideShowAnimation_bl) _s.slp_do.setVisible(true);
			if(_s.caption){
				//_s.caption_do.setVisible(true);
				_s.caption2_do.setVisible(true);
			}
			if(applyToMainHolder) _s.itemHld_do.setVisible(true);
		};
	

		/**
	  	 * Pan image on touch based devices support.
	     */
		_s.addMaxItemScroll = function(){
			window.addEventListener("mousedown", _s.onMaxScrollStart);
			window.addEventListener("mouseup", _s.onMaxScrollEnd);
			window.addEventListener("touchstart", _s.onMaxScrollStart);
			window.addEventListener("touchend", _s.onMaxScrollEnd);
		};
		
		_s.removeMaxItemScroll = function(){
			window.removeEventListener("mousedown", _s.onMaxScrollStart);
			window.removeEventListener("mouseup", _s.onMaxScrollEnd);
			window.removeEventListener("mousemove", _s.onMaxScrollMove);
			window.removeEventListener("touchstart", _s.onMaxScrollStart);
			window.removeEventListener("touchend", _s.onMaxScrollEnd);	
			window.removeEventListener("touchmove", _s.onMaxScrollMove);
			if(_s.hasOneItem) _s.item_do.style().cursor = _s.defaultC;
			_s.isDragging = false;
			cancelAnimationFrame(_s.updateMax_af);
		};
		
		_s.onMaxScrollStart =  function(e){
			if(e.button && e.button == 2) return;
			var vc = FWDRLUtils.getViewportMouseCoordinates(e);	
			
			window.addEventListener("mousemove", _s.onMaxScrollMove);
			window.addEventListener("touchmove", _s.onMaxScrollMove, { passive:false});
			
			_s.isDragging = true;	
			_s.maxItemX = _s.lastFinalX = _s.item_do.x;
			_s.maxItemY = _s.lastFinalY = _s.item_do.y;
			_s.lastPresedX = vc.screenX;
			_s.lastPresedY = vc.screenY;
			_s.item_do.style().cursor = _s.grabC;
			
			_s.startToUpdateDrag();
		};
		
		_s.onMaxScrollEnd = function(e){
		
			window.removeEventListener("mousemove", _s.onMaxScrollMove);
			window.removeEventListener("touchmove", _s.onMaxScrollMove);
		
			_s.item_do.style().cursor = _s.handC;
			_s.isDragging = false;
		};
		
		_s.onMaxScrollMove = function(e){
			if(e.preventDefault) e.preventDefault();
			var vc = FWDRLUtils.getViewportMouseCoordinates(e);	
	
			var toAddX = vc.screenX - _s.lastPresedX;
			_s.maxItemX += toAddX;
			_s.maxItemX =  Math.round(_s.maxItemX);
			_s.lastPresedX = vc.screenX;
			_s.item_do.setX(_s.maxItemX);
			
			var toAddY = vc.screenY - _s.lastPresedY;
			_s.maxItemY += toAddY;
			_s.maxItemY =  Math.round(_s.maxItemY);
			_s.lastPresedY = vc.screenY;
			_s.item_do.setY(_s.maxItemY);
		};

		_s.stopToUpdateDrag = function(){
			cancelAnimationFrame(_s.updateMax_af);
		}

		_s.startToUpdateDrag = function(){
			_s.stopToUpdateDrag();
			_s.updateMax();
		}
		
		_s.updateMax = function(){
			
			_s.updateMax_af = requestAnimationFrame(_s.updateMax);

			if(_s.isDragging){
				_s.vx = _s.maxItemX - _s.lastFinalX;
				_s.lastFinalX = _s.maxItemX;

				_s.vy = _s.maxItemY - _s.lastFinalY;
				_s.lastFinalY = _s.maxItemY;	

				var h = Math.sqrt(_s.vx*_s.vx + _s.vy*_s.vy);
				if(h < 20){
					_s.vx = _s.vy = 0;
				}
			}else{
				_s.vx *= _s.friction;		
				_s.maxItemX += _s.vx;
				if(_s.stageW <= _s.item_do.w){
					if(_s.maxItemX >= 0){
						_s.vx2 = (0 - _s.maxItemX) * .3;
						_s.vx *= _s.friction;
						_s.maxItemX += _s.vx2;
					}else if(_s.maxItemX <= _s.stageW - _s.item_do.w){
						_s.vx2 = (_s.stageW - _s.item_do.w - _s.maxItemX) * .3;
						_s.vx *= _s.friction;
						_s.maxItemX += _s.vx2;
					}
				}else{
					_s.vx2 =((_s.stageW - _s.item_do.w)/2 - _s.maxItemX) * .3;
					_s.vx *= _s.friction;
					_s.maxItemX += _s.vx2;
				}

				_s.vy *= _s.friction;		
				_s.maxItemY += _s.vy;
				if(_s.stageH <= _s.item_do.h){
					if(_s.maxItemY >= 0){
						_s.vy2 = (0 - _s.maxItemY) * .3;
						_s.vy *= _s.friction;
						_s.maxItemY += _s.vy2;
					}else if(_s.maxItemY <= _s.stageH - _s.item_do.h){
						_s.vy2 = (_s.stageH - _s.item_do.h - _s.maxItemY) * .3;
						_s.vy *= _s.friction;
						_s.maxItemY += _s.vy2;
					}
				}else{
					_s.vy2 =((_s.stageH - _s.item_do.h)/2 - _s.maxItemY) * .3;
					_s.vy *= _s.friction;
					_s.maxItemY += _s.vy2;
				}

				_s.maxItemX = parseFloat(_s.maxItemX.toFixed(2));
				_s.maxItemY = parseFloat(_s.maxItemY.toFixed(2));
			
				if(_s.prevMaxItemX == _s.maxItemX && _s.prevMaxItemY == _s.maxItemY){
					_s.stopToUpdateDrag();
					_s.maxItemX = Math.round(_s.maxItemX);
					_s.maxItemY = Math.round(_s.maxItemY);
				}
				_s.item_do.setX(_s.maxItemX);
				_s.item_do.setY(_s.maxItemY);
				_s.prevMaxItemX = _s.maxItemX;
				_s.prevMaxItemY = _s.maxItemY;
			}
		};


		/**
	  	 * Add double click support max/min.
	     */
		_s.addDbl = function(){
			if(!_s.useDoubleClick) return
			if(_s.isMbl){
				window.addEventListener("touchstart", _s.firstDown);
			}else{
				window.addEventListener("mousedown", _s.firstDown);
			}
		};

		_s.removeDbl = function(){
			if(_s.isMbl){
				window.removeEventListener("touchstart", _s.firstDown);
				window.removeEventListener("touchstart", _s.onSecondDown);
			}else{
				window.removeEventListener("mousedown", _s.firstDown);
				window.removeEventListener("mousedown", _s.onSecondDown);
			}
			clearTimeout(_s.secondTap_to);
		};
		
		_s.firstDown = function(e){
			if(e.btn == 2 || _s.isAnim || _s.isLoading || !_s.isShowed || _s.type != FWDRL.IMAGE) return;

			var vc = FWDRLUtils.getViewportMouseCoordinates(e);
			_s.firstTapX = vc.screenX - _s.main_do.getGlobalX();
			_s.firstTapY = vc.screenY - _s.main_do.getGlobalY();

			if(FWDRLUtils.hitTest(_s.share_do.screen, _s.hider.globalX, _s.hider.globalY)) return;
			
			if(_s.isMbl){
				window.addEventListener("touchstart", _s.onSecondDown);
				window.removeEventListener("touchstart", _s.firstDown);
			}else{
				window.addEventListener("mousedown", _s.onSecondDown);
				window.removeEventListener("mousedown", _s.firstDown);
			}
		
			clearTimeout(_s.secondTap_to);
			_s.secondTap_to = setTimeout(_s.doubleTapExpired, 500);
		};
		
		_s.doubleTapExpired = function(){
			clearTimeout(_s.secondTap_to);
			if(_s.isMbl){
				window.removeEventListener("touchstart", _s.onSecondDown);
				window.addEventListener("touchstart", _s.firstDown);
			}else{
				window.removeEventListener("mousedown", _s.onSecondDown);
				window.addEventListener("mousedown", _s.firstDown);
			}
			
		};
		
		_s.onSecondDown = function(e){
			var vc = FWDRLUtils.getViewportMouseCoordinates(e);
			var dx;
			var dy;
			
			if(e.touches && e.touches.length != 1) return;
			dx = Math.abs((vc.screenX - _s.main_do.getGlobalX()) - _s.firstTapX);   
			dy = Math.abs((vc.screenY - _s.main_do.getGlobalY()) - _s.firstTapY); 
			if(dx > 10 || dy > 10) return;
			if(FWDRLUtils.hitTest(_s.item_do.screen, _s.hider.globalX, _s.hider.globalY)){
				_s.maxOrMin();
				return;
			}
		};


		/**
	  	 * Add drag support.
	     */
	     _s.addDrag = function(remove){
	     	if(!_s.useDrag) return;
	     	_s.itemHld_do.screen.addEventListener("mousedown", _s.onDragStart);
			_s.itemHld_do.screen.addEventListener("mouseup", _s.onDragEnd);
			_s.itemHld_do.screen.addEventListener("touchstart", _s.onDragStart, {passive:false});
			_s.itemHld_do.screen.addEventListener("touchend", _s.onDragEnd);
			_s.itemHld_do.style().cursor = _s.handC;
			_s.item_do.style().cursor = _s.handC;
	     }

	     _s.removeDrag = function(){
	     	_s.itemHld_do.screen.removeEventListener("mousedown", _s.onDragStart);
			_s.itemHld_do.screen.removeEventListener("mouseup", _s.onDragEnd);
			_s.itemHld_do.screen.removeEventListener("touchstart", _s.onDragStart);
			_s.itemHld_do.screen.removeEventListener("touchend", _s.onDragEnd);
			_s.itemHld_do.style().cursor = _s.defaultC;
			if(_s.item_do)_s.item_do.style().cursor = _s.defaultC;
	     }

	    _s.stopToDragAF = function(){
			cancelAnimationFrame(_s.updateDrag_af);
		}

		_s.startToDragAF = function(){
			_s.stopToDragAF();
			_s.updateDragAf();
		}

		_s.updateDragAf = function(){
		
			_s.updateDrag_af = requestAnimationFrame(_s.updateDragAf);
			_s.itemDragHld_do.setX(_s.itemDragHld_do.x);
		}

	     _s.onDragStart = function(e){
	  		if(_s.videoType == "360DegreeVideo" && _s.videoStarted) return;
	     	if((e.button && e.button == 2 ) || (_s.evp && _s.evp.isFullScreen_bl)) return;
	     	var vmc = FWDRLUtils.getViewportMouseCoordinates(e);	
	     
	     	if(event.target.nodeName.toLowerCase() == 'input'){
	     		return;
	     	}
	     
	     	if(_s.evp && _s.evp.controller_do
	     	&& (FWDRLUtils.hitTest(_s.evp.controller_do.mainHolder_do.screen, vmc.screenX, vmc.screenY)
	     	|| FWDRLUtils.hitTest(_s.evp.largePlayButton_do.screen, vmc.screenX, vmc.screenY)
	     	|| (_s.evp.apt && FWDRLUtils.hitTest(_s.evp.apt.screen, vmc.screenX, vmc.screenY)))
	     	|| _s.isEvpFSDL){
				_s.hider.reset();
				if(e.preventDefault) e.preventDefault();
				return;
			}

	     	_s.itemHld_do.style().cursor = _s.grabC;
	     	_s.item_do.style().cursor = _s.grabC;
	     	_s.updateEVPCursor(_s.grabC);

	     	if(_s.isLoading || _s.isAnim || !_s.isShowed) return;
	     	var vc = FWDRLUtils.getViewportMouseCoordinates(e);
	     	_s.lastPresedX = _s.lastPresedX2 = vc.screenX;
	     	_s.x1 = _s.itemDragHld_do.x;
	     	_s.y1 = _s.itemDragHld_do.y;
	     	_s.dir = '';
			
			_s.startToDragAF();
	     	window.addEventListener("mousemove", _s.onDragMove);
			window.addEventListener("touchmove", _s.onDragMove, {capture: false, passive:false});
			window.addEventListener("mouseup", _s.onDragEnd);
			window.addEventListener("touchend", _s.onDragEnd);
	     }

	     _s.onDragMove = function(e){
	     	if(e && e.preventDefault) e.preventDefault();
	     	
	     	_s.setGrabHand();
	     	FWDAnimation.killTweensOf(_s.itemDragHld_do);
	     	_s.vc = FWDRLUtils.getViewportMouseCoordinates(e);	
			_s.toAddX = _s.vc.screenX - _s.lastPresedX;
			_s.toAddX2 = _s.vc.screenX - _s.lastPresedX2;
			var l = 120;
			if(_s.isMbl) l = 50;
		
			_s.lastPresedX = _s.vc.screenX;
			_s.x2 = _s.itemDragHld_do.x;
	     	_s.y2 = _s.itemDragHld_do.y;
	     	var dist = parseInt(Math.sqrt(Math.pow((_s.x2 - _s.x1), 2) + Math.pow((_s.y2 - _s.y1), 2)), 10);
		    var x = _s.itemDragHld_do.x + (_s.toAddX/1.5 * (1 - (dist / l)));
		    _s.itemDragHld_do.x = x;
       		
			_s.isDragging = true;	

			if(dist > 5){
				_s.tm.pause();
				_s.hideBtnsOnDrag(true);
				_s.isSetBtnsHideOnDrag = true;
			}
		
			if(dist < 10) return;

			if(_s.toAddX2 < 0 && dist > l/2){
				_s.dir = 'right';
			}else if(_s.toAddX2 > 0 && dist > l/2){
				_s.dir = 'left';
			}
	     }

	     _s.onDragEnd =  function(e){

	     	_s.isDragging = false;	
	     	if(!FWDAnimation.isTweening(_s.itemDragHld_do)){
	     		FWDAnimation.to(_s.itemDragHld_do, .8, {x:0, ease:Expo.easeInOut});
	     	}
	     	if(!_s.isMax && _s.isSetBtnsHideOnDrag){
	     		_s.tm.resume();
	     		_s.slp_do.isSlideShowRun = true;
	     	} 

	     	_s.isSetBtnsHideOnDrag = false;
	     	_s.hideBtnsOnDrag(false);
	     
			_s.itemHld_do.style().cursor = _s.handC;
			_s.item_do.style().cursor = _s.handC;
			_s.updateEVPCursor(_s.handC);
	     	_s.removeGrabHand();
	     	_s.stopToDragAF();
	     	
	     	window.removeEventListener("mousemove", _s.onDragMove);
			window.removeEventListener("touchmove", _s.onDragMove);
			window.removeEventListener("mouseup", _s.onDragEnd);
			window.removeEventListener("touchend", _s.onDragEnd);
		

	     	if(!_s.isEvpFSDL){
		     	if(_s.dir == 'left'){
		     		_s.gotoPrevItem();
		     	}else if(_s.dir == 'right'){
		     		_s.gotoNextItem();
		     	}
	     	}	
	     	_s.dir = '';
	     }

	    _s.getDescOutH = function(w){
	    	_s.captionDumy_do.setWidth(_s.finalW);
			if(!w){
				_s.desc2H = _s.captionDumy_do.getHeight();
				var containerWidth = _s.stageW - (_s.buttonW * 2) - ((_s.tempBtnsOffsetIn + _s.tempBtnsOffsetOut) *  2) - (_s.itemBorderSize * 2);
				var containerHeight = _s.stageH - _s.desc2H - _s.itemOffsetHeight - (_s.itemBorderSize * 2)

				if(_s.tempThumbsShowed){
					containerHeight -= _s.thumbnailH + _s.spaceBetweenThumbnailsAndItem;
				}
				
				var scaleX = containerWidth/_s.originalW;
				var scaleY = containerHeight/_s.originalH;
				var totalScale = 0;
			
				if(scaleX <= scaleY){
					totalScale = scaleX;
				}else if(scaleX >= scaleY){
					totalScale = scaleY;
				}
				
				if(scaleX >= 1 && scaleY >=1) totalScale = 1;
				
				_s.finalW = Math.round((_s.originalW * totalScale)) + (_s.itemBorderSize * 2);
			}

			if(w){
				_s.captionDumy_do.setWidth(w);
			} 

			if(_s.caption_do){
				_s.caption_do.resizeAndPosition(_s.finalW - (_s.itemBorderSize * 2));	
				_s.caption2_do.resizeAndPosition(_s.finalW);	
			}

			_s.captionDumy_do.setWidth(_s.finalW);
			_s.desc2H = _s.captionDumy_do.getHeight();

			if(w){
				_s.resizeItem(true, false, false)
			}
	    }

	    _s.hideBtnsOnDrag = function(hide){
	    	if(_s.isSetBtnsHideOnDrag || !_s.hideButtonsOnDrag) return;
	    	var test = _s.tempBtnsAlign == 'in' || _s.tempBtnsAlign == 'out' || _s.hSmall;
	    	if(!test) return;
	    
	    	var cntO = 1;
	    	var dl = 0;
	    	if(hide){
	    		cntO = .3;
	    		dl = .4;
	    	} 
	    	for(var i=0; i<_s.buttons_ar.length; i++){
	    		var btn = _s.buttons_ar[i];
	    		if(hide){
	    			btn.setHideDrag(true);
	    		}else{
	    			btn.setHideDrag(false);
	    		}
	    	}


	    	if(_s.showCounter){	
	    		FWDAnimation.killTweensOf(_s.cnt_do);
	    		FWDAnimation.to(_s.cnt_do, .8, {alpha:cntO, delay:dl});
	    	}

	    	if(_s.showNextAndPrevBtns){
	    		_s.prevBtn_do.setHideDrag(hide);
	    	}
	    }
		
		/**
	  	 * Resize the lighbox item that holds the media.
	     */
		_s.resizeItem = function(onlySetData, anim, desc2){	
			_s.hSmall =_s.wSmall = false;
			
			var tempCaptionPosition = _s.captionPosition;
			var tempItemOffsetHeight = _s.itemOffsetHeight;

			var tempSpaceBetweenThumbnailsAndItem = _s.spaceBetweenThumbnailsAndItem;
			_s.tempThumbnailsOffsetBottom = _s.thumbnailsOffsetBottom;
			_s.tempThumbsShowed = _s.showThumbnails;

			_s.limitH = 650;
			_s.tempBtnsAlign = _s.buttonsAlignment;

			if(_s.limitH >= _s.stageH){
				_s.hSmall = true;
				if(_s.captionPosition == 'bottomout'){
					tempCaptionPosition = 'bottomin';
				}
				_s.tempBtnsAlign = 'top';
			}

			if(desc2 || tempCaptionPosition != 'bottomout' || !_s.hasCaption) _s.desc2H = 0;
		
			var offsetW = (_s.buttonW * 2) + ((_s.tempBtnsOffsetIn + _s.tempBtnsOffsetOut) * 2);
			var offsetTxtY = 0;
			if(_s.limitH >= _s.stageW){
				offsetW = 0;
				_s.wSmall = true;
				_s.tempBtnsAlign = 'top';	
			}

			_s.tempBtnsOffsetOut = _s.buttonsOffsetOut;
			_s.tempBtnsOffsetIn = _s.buttonsOffsetIn;
			if(_s.stageH <= _s.limitH || _s.stageW <= _s.limitH){
				if(_s.buttonsOffsetOut > 5){
					_s.tempBtnsOffsetIn = 5;
					_s.tempBtnsOffsetOut = 5;
					if(_s.buttonsAlignment == 'top') tempItemOffsetHeight -= 5;
				} 
			}
	
			if(_s.tempBtnsAlign == 'top'){
				tempItemOffsetHeight = _s.itemOffsetHeightButtonsTop + 5;
				//offsetTxtY = 10;
			}

			if(_s.wSmall){
				_s.tempThumbnailsOffsetBottom = 5;
				tempItemOffsetHeight -= 10;
			} 

			if(_s.stageH < 400){
				_s.tempThumbsShowed = false;
				if(_s.thumbs_do){
					_s.thumbs_do.setVisible(false);
					_s.thumbs_do.mainHld_do.setVisible(false);
				} 
			}else{
				if(_s.thumbs_do){
					_s.thumbs_do.setVisible(true);
					_s.thumbs_do.mainHld_do.setVisible(true);
				} 
			}

			if(_s.hSmall){
				tempItemOffsetHeight = offsetTxtY = 0;
			}else if(tempCaptionPosition == 'bottomout' && _s.tempThumbsShowed){
				offsetTxtY = 10;
			}

			if(_s.mcnt_do){
				if(_s.tempBtnsAlign == 'in'){
					_s.mcnt_do.screen.className = _s.cls + '-counter in';
				}else{
					_s.mcnt_do.screen.className = _s.cls + '-counter';
				}
			}

			if(_s.tempBtnsAlign == 'top'){
				offsetW = 0;
			}

			var containerWidth = _s.stageW - offsetW - (_s.itemBorderSize * 2);
			var containerHeight = _s.stageH - _s.desc2H - tempItemOffsetHeight * 2 - (_s.itemBorderSize * 2) + offsetTxtY;
			var offsetY = 0;
			
			if(_s.tempThumbsShowed){
				if(tempCaptionPosition != 'bottomout' && !_s.hSmall){
					tempSpaceBetweenThumbnailsAndItem = 0;
				}

				if(_s.hSmall){
					_s.tempThumbnailsOffsetBottom = 0;
				}
				_s.thumbs_do.show();
				
				_s.thumbs_do.thumbnailH = _s.thumbnailH;
				_s.thumbs_do.stageH = _s.thumbnailH + _s.tempThumbnailsOffsetBottom;
				containerHeight -= _s.thumbnailH + tempSpaceBetweenThumbnailsAndItem + _s.tempThumbnailsOffsetBottom;

				if(_s.hSmall){
					offsetY = Math.round((_s.thumbnailH + tempSpaceBetweenThumbnailsAndItem + _s.tempThumbnailsOffsetBottom)/2);
				}else{
					offsetY = Math.round((_s.thumbnailH + tempSpaceBetweenThumbnailsAndItem + _s.tempThumbnailsOffsetBottom)/2  - offsetTxtY/2);
				}
			}else{
				if(!_s.hSmall){
					containerHeight -= tempSpaceBetweenThumbnailsAndItem + offsetTxtY;
				}
			}

			var scaleX = containerWidth/_s.originalW;
			var scaleY = containerHeight/_s.originalH;
			var totalScale = 0;
			
			if(scaleX <= scaleY){
				totalScale = scaleX;
			}else if(scaleX >= scaleY){
				totalScale = scaleY;
			}
			
			if(scaleX >= 1 && scaleY >=1) totalScale = 1;
			
			_s.finalW = Math.round((_s.originalW * totalScale)) + (_s.itemBorderSize * 2);
			_s.finalH = Math.round((_s.originalH * totalScale)) + (_s.itemBorderSize * 2);
			
			if(_s.finalW < _s.itemBorderSize * 2) _s.finalW = _s.itemBorderSize * 2;
			if(_s.finalH < _s.itemBorderSize * 2) _s.finalH = _s.itemBorderSize * 2;
			
			_s.finalX = Math.round((_s.stageW  - _s.finalW)/2);
			_s.finalY = Math.round((_s.stageH - _s.finalH)/2 - _s.desc2H/2 - offsetY);

			if(desc2 && tempCaptionPosition == 'bottomout'){
				_s.getDescOutH();
			}

			_s.positionPreloader();
			
			if(onlySetData || !_s.item_do) return;

			if(_s.finalH < 300 && _s.stageH > 550){
				tempCaptionPosition = 'bottomout';
			}

			if(tempCaptionPosition == 'bottomout'){
				if(_s.finalW != _s.captionDumy_do.getWidth()){
					for(var i=0; i<4; i++){
						_s.getDescOutH(_s.finalW);
					}
				}
				_s.caption_do.style().display = 'none';
				_s.caption2_do.style().display = 'block';
			}else{
				_s.caption_do.style().display = 'block';
				_s.caption2_do.style().display = 'none';
				if(_s.finalH < 220 && !_s.showCaptionOnSmallScreens){
					_s.caption_do.style().display = 'none';
				}
			}

			if(!_s.hasCaption){
				_s.caption_do.style().display = 'none';
				_s.caption2_do.style().display = 'none';
			}

			if(_s.isEvpFS){
				_s.finalX = _s.finalY = 0;
				_s.finalW = _s.stageW;
				_s.finalH = _s.stageH;
			}


			FWDAnimation.killTweensOf(_s.itemHld_do);
			FWDAnimation.killTweensOf(_s.itemBk_do);
			FWDAnimation.killTweensOf(_s.itemBorder_do);
			
			if(anim){
				FWDAnimation.to(_s.itemHld_do, .8, {
					x:_s.finalX, 
					y:_s.finalY, 
					w:_s.finalW, 
					h:_s.finalH,
					ease:Expo.easeInOut});
				
				FWDAnimation.to(_s.itemBk_do, .8, {
					x:_s.itemBorderSize, 
					y:_s.itemBorderSize, 
					w:_s.finalW - (_s.itemBorderSize * 2) - 1, 
					h:_s.finalH - (_s.itemBorderSize * 2) - 1, 
					ease:Expo.easeInOut});
				
				FWDAnimation.to(_s.itemBorder_do, .8, {
					x:0, 
					y:0, 
					w:_s.finalW, 
					h:_s.finalH, 
					ease:Expo.easeInOut});
				
				if(_s.caption_do){
					FWDAnimation.to(_s.caption_do, .8, {
						finalW:_s.finalW - (_s.itemBorderSize * 2),
						onUpdate:function(){_s.caption_do.resizeAndPosition(), _s.caption2_do.resizeAndPosition()},
						ease:Expo.easeInOut});
					_s.caption2_do.setWH(_s.finalW, _s.finalH)
				}
				
			}else{

				if(_s.caption_do){
					_s.caption_do.resizeAndPosition(_s.finalW - (_s.itemBorderSize * 2));	
					_s.caption2_do.resizeAndPosition(_s.finalW);	
				}

				_s.itemHld_do.setX(_s.finalX);
				_s.itemHld_do.setY(_s.finalY);
				_s.itemHld_do.setWidth(_s.finalW);
				_s.itemHld_do.setHeight(_s.finalH);
				
				_s.itemBk_do.setX(_s.itemBorderSize);
				_s.itemBk_do.setY(_s.itemBorderSize);
				_s.itemBk_do.setWidth(_s.finalW - (_s.itemBorderSize * 2) - 1);
				_s.itemBk_do.setHeight(_s.finalH - (_s.itemBorderSize * 2) - 1);
				
				_s.itemBorder_do.setX(0);
				_s.itemBorder_do.setY(0);
				_s.itemBorder_do.setWidth(_s.finalW);
				_s.itemBorder_do.setHeight(_s.finalH);
				if(_s.itemBorder_do.alpha != 1) _s.itemBorder_do.setAlpha(1);
			}
			
			FWDAnimation.killTweensOf(_s.item_do);
			
			cancelAnimationFrame(_s.updateMax_af);
			if(_s.isMax){
				_s.item_do.setX(parseInt((_s.stageW - (_s.originalW * _s.maxZoom))/2));
				_s.item_do.setY(parseInt((_s.stageH - (_s.originalH * _s.maxZoom))/2));
				_s.item_do.setWidth(Math.max(0, Math.round(_s.originalW * _s.maxZoom)));
				_s.item_do.setHeight(Math.max(0, Math.round(_s.originalH * _s.maxZoom)));
			}else{
				if(anim){
					FWDAnimation.to(_s.item_do, .8,{
						x:_s.itemBorderSize, 
						y:_s.itemBorderSize,
						w:_s.finalW - (_s.itemBorderSize * 2),
						h:_s.finalH - (_s.itemBorderSize * 2), 
						ease:Expo.easeInOut});
					
				}else{
					_s.item_do.setAlpha(1);
					_s.item_do.setX(_s.itemBorderSize);
					_s.item_do.setY(_s.itemBorderSize);
					_s.item_do.setWidth(_s.finalW - (_s.itemBorderSize * 2));
					_s.item_do.setHeight(_s.finalH - (_s.itemBorderSize * 2));
				}
			}

			if(_s.evp && _s.item_do == _s.vidHld_do){	
				if(_s.isEvpFS){
					if(_s.thumbs_do) _s.thumbs_do.setVisible(false)
				}
				_s.vidHld_do.setX(_s.itemBorderSize);
				_s.vidHld_do.style().left = 0;
				_s.evp.resizeHandler();
			}	
		};
		
		
		/**
	  	 * Show / go to items.
	     */
		_s.showItemFirstTime = function(){
			_s.isFirstItemShowed = true;
			_s.showCationFirstTime = true;
			
			_s.resizeItem(true, false, true);
			_s.resizeItem(false, false, false);
		
			_s.itemHld_do.setX(_s.stageW/2);
			_s.itemHld_do.setY(_s.stageH/2);
			_s.itemHld_do.setWidth(0);
			_s.itemHld_do.setHeight(0);
			_s.itemBk_do.setX(0);
			_s.itemBk_do.setY(0);
			_s.itemBk_do.setWidth(0);
			_s.itemBk_do.setHeight(0);

			_s.item_do.setAlpha(0);
			_s.item_do.setX(-_s.finalW/2 + _s.itemBorderSize);
			_s.item_do.setY(-_s.finalH/2 + _s.itemBorderSize);
			FWDAnimation.to(_s.item_do, .8, {alpha:1, delay:.8, ease:Quint.easeOut});
			FWDAnimation.to(_s.item_do, .8, {x:_s.itemBorderSize, y:_s.itemBorderSize, ease:Expo.easeInOut});
			_s.startAnim(1601);
			
			FWDAnimation.to(_s.itemHld_do, .8, {x:_s.finalX, y:_s.finalY, w:_s.finalW, h:_s.finalH, ease:Expo.easeInOut});
			_s.itemBorder_do.setAlpha(0);
			FWDAnimation.to(_s.itemBorder_do, .8, {alpha:1, x:0, y:0, w:_s.finalW, h:_s.finalH, ease:Expo.easeInOut});
			
			FWDAnimation.to(_s.itemBk_do, .8, {
				x:_s.itemBorderSize, 
				y:_s.itemBorderSize,
				w:_s.finalW - (_s.itemBorderSize * 2), 
				h:_s.finalH - (_s.itemBorderSize * 2),
				ease:Expo.easeInOut
				});
			
			_s.hider.start();
			_s.positionBtns(false);
			_s.addKeyboard();
			_s.addDrag();
			_s.addDbl();
			_s.hideBtns();
			_s.setupThumbnails(0);

			_s.caption2_do.resizeAndPosition();
			_s.caption_do.hide(false, true, false);
			_s.caption2_do.hide(false, true, false);

			setTimeout(function(){
				if(_s.caption2_do) _s.caption2_do.show(true);
			}, 51);

			_s.isFirstItemAfterShowed = true;
			setTimeout(function(){
				_s.showCationFirstTime = false;
				if(_s.slideShowAutoPlay) _s.tm.start();
				_s.dispatchEvent(FWDRL.SHOW_COMPLETE, {guId:_s.guId, mId:_s.mId});
				_s.showFirstTimeDone = true;
			}, 800);
		};
		
		_s.gotoToItem = function(mId){
			if(!_s.isReady || !_s.isFirstItemShowed || _s.isAnim || _s.isLoading) return;
			_s.mId  = mId;
		
			if(_s.useDeepLinking){
				_s.setDL(true);
			}else{
				_s.initItem();
			}
		};
		
		_s.gotoNextItem = function(){
			if(!_s.isReady || !_s.isFirstItemShowed || _s.isAnim || _s.isLoading) return;
			_s.mId ++;
			if(_s.mId < 0){
				_s.mId = _s.totalItems - 1;
			}else if(_s.mId > _s.totalItems - 1){
				_s.mId = 0;
			}
			
			if(_s.useDeepLinking){
				_s.setDL(true);
			}else{
				_s.initItem(true);
			}
		};
		
		_s.gotoPrevItem = function(){
			if(!_s.isReady || !_s.isFirstItemShowed || _s.isAnim || _s.isLoading) return;
			_s.mId --;
			if(_s.mId < 0){
				_s.mId = _s.totalItems - 1;
			}else if(_s.mId > _s.totalItems - 1){
				_s.mId = 0;
			}
			
			if(_s.useDeepLinking){
				_s.setDL(true);
			}else{
				_s.initItem();
			}
		};

		_s.removeItems = function(index){
			var child;
			var inChild;
			while(_s.itemHolder_do.getNumChildren() > index){
				child = _s.itemHolder_do.getChildAt(0);
				FWDAnimation.killTweensOf(child);
				_s.itemHolder_do.removeChild(child);
				child.destroy();
			};
			child = null;
		};
		
	
		/**
	  	 * Add/remove keyboard support.
	     */
		_s.addKeyboard = function(){
			if(!_s.useKeyboard) return; 
			document.addEventListener("keydown",  _s.onKeyDownHandler);	
			document.addEventListener("keyup",  _s.onKeyUpHandler);	
		};
		
		_s.removeKeyboard = function(){
			document.removeEventListener("keydown",  _s.onKeyDownHandler);	
			document.removeEventListener("keyup",  _s.onKeyUpHandler);	
		};
		
		_s.onKeyDownHandler = function(e){
			if(_s.isDragging || _s.isLoading || _s.isAnim) return;
			document.removeEventListener("keydown",  _s.onKeyDownHandler);	
			if(e.keyCode == 27 && !_s.useAsModal){
				if(_s.isFullScreen){
					_s.goNormalScreen();
					return;
				}
				_s.hide();
				if(e.preventDefault) e.preventDefault();
			}

			if(_s.evp && _s.evp.isPlaying_bl) return;

			if(e.keyCode == 39){	
				_s.gotoNextItem();
				if(e.preventDefault) e.preventDefault();
				return false;
			}else if(e.keyCode == 37){
				_s.gotoPrevItem();
				if(e.preventDefault) e.preventDefault();
				return false;
			}
		};
		
		_s.onKeyUpHandler = function(e){
			document.addEventListener("keydown",  _s.onKeyDownHandler);	
		};


		/**
	  	 * Fullscreen functionality.
	     */
		_s.goFullScreen = function(){
			if(_s.isAnim || _s.isAnimMaxOrMin || _s.isLoading) return;
			if(document.addEventListener){
				document.addEventListener("fullscreenchange", _s.onFSChange);
				document.addEventListener("mozfullscreenchange", _s.onFSChange);
				document.addEventListener("webkitfullscreenchange", _s.onFSChange);
				document.addEventListener("MSFullscreenChange", _s.onFSChange);
			}
			
			if(_s._dc.requestFullScreen) {
				_s.main_do.screen.requestFullScreen();
			}else if(_s._dc.mozRequestFullScreen){ 
				_s.main_do.screen.mozRequestFullScreen();
			}else if(_s._dc.webkitRequestFullScreen){
				_s.main_do.screen.webkitRequestFullScreen();
			}else if(_s._dc.msRequestFullscreen){
				_s.main_do.screen.msRequestFullscreen();
			}
			
			_s.isFullScreen = true;	
			_s.dcelState = _s._dc.style.overflow;
			_s._dc.style.overflow = "hidden";
			_s.fsBtn_do.setButtonState(0);
			//FWDRLUtils.getScrollOffsets()
			_s.fsX = _s.so.x;
			_s.fsY = _s.so.y;
			
			if(_s.isMbl) window.addEventListener("touchmove", _s.disableFullScreenOnMobileHandler, {passive: false});
			_s.resizeHandler();
			_s.dispatchEvent(FWDRL.FULLSCREEN);
		};

		_s.onFSChange = function(e){
			if(!(document.fullScreen || document.msFullscreenElement  || document.mozFullScreen || document.webkitIsFullScreen || document.msieFullScreen)){
				_s.fsBtn_do.setButtonState(0);
				_s.addNS();
				_s.isFullScreen = false;
			}
		};

		_s.disableFullScreenOnMobileHandler = function(e){
			if(e.preventDefault) e.preventDefault();
		};

		_s.goNormalScreen = function(){	
			if(_s.isAnim || _s.isAnimMaxOrMin || _s.isLoading) return;
			if(_s.isFullScreen){
				if (document.cancelFullScreen) {  
					document.cancelFullScreen();  
				}else if (document.mozCancelFullScreen) {  
					document.mozCancelFullScreen();  
				}else if (document.webkitCancelFullScreen) {  
					document.webkitCancelFullScreen();  
				}else if (document.msExitFullscreen) {  
					document.msExitFullscreen();  
				}
			}
			
			_s.addNS();
			if(_s.evp) _s.evp.goNormalScreen();
			_s.isFullScreen = false;
		};


		_s.addNS = function(){
			if(!_s.isFullScreen) return;
			
			if(document.removeEventListener){
				document.removeEventListener("fullscreenchange", _s.onFSChange);
				document.removeEventListener("mozfullscreenchange", _s.onFSChange);
				document.removeEventListener("webkitfullscreenchange", _s.onFSChange);
				document.removeEventListener("MSFullscreenChange", _s.onFSChange);
			}
			
			_s.isFullScreen = false;
			_s._dc.style.overflow = _s.dcelState;
			_s.fsBtn_do.setButtonState(1);
			_s.resizeOnNS();
			
			if(_s.isMbl) window.removeEventListener("touchmove", _s.disableFullScreenOnMobileHandler);
			_s.dispatchEvent(FWDRL.NORMALSCREEN);
		};
		
		_s.resizeOnNS = function(){
			if(_s.item_do != _s.vidHld_do) return;
			_s.resizeHandler();
			setTimeout(function(){
				window.scrollTo(_s.fsX, _s.fsY);
				_s.resizeHandler();
			}, 50);

			setTimeout(function(){
				window.scrollTo(_s.fsX, _s.fsY);
				_s.resizeHandler();
			}, 150);
			setTimeout(function(){
				window.scrollTo(_s.fsX, _s.fsY);
				_s.resizeHandler();
			}, 300);
			
		}
		
		/**
	  	 * Set default options.
	     */
		_s.setDefaultSettings = function(){

			// General settings.
			_s.rightClickContextMenu = _s.DRightClickContextMenu;
			_s.useDeepLinking = _s.DUseDeepLinking;
			_s.buttonsAlignment = _s.DFBtnsAlignment;
			_s.useDrag = _s.DUseDrag;
			_s.mediaLazyLoading = _s.DMediaLazyLoading;
			_s.useAsModal = _s.DFUseAsModal;
			_s.showSlideShowButton = _s.DFShowSlideShowButton;
			_s.showSlideShowAnimation = _s.DShowSlideShowAnimation;
			_s.slideShowAutoPlay = _s.DFSlideShowAutoPlay;
			_s.slideShowAutoStop = _s.DSlideShowAutoStop;
			_s.slideShowDelay = _s.DFSlideShowDelay;
			_s.slideShowBkColor = _s.DSlideShowBkColor;
			_s.slideShowFillColor = _s.DSlideShowFillColor;
			_s.useKeyboard = _s.DUseKeyboard;
			_s.useDoubleClick = _s.DUseDoubleClick
			_s.showCloseButton = _s.DFShowCloseButton;
			_s.showFullscreenButton = _s.DShowFullscreenButton;
			_s.showZoomButton = _s.DShowZoomButton;
			_s.showCounter = _s.DShowCounter;
			_s.showNextAndPrevBtns = _s.DShowNextAndPrevBtns;
			_s.defaultShowNextAndPrevBtns = _s.DFSefaultShowNextAndPrevBtns;
			_s.hideButtonsOnDrag = _s.DHideButtonsOnDrag;
			_s.maxZoom = _s.DMaxZoom;
			_s.buttonsHideDelay = _s.DButtonsHideDelay;
			_s.defaultItemWidth = _s.DFDefaultItemW;
			_s.defaultItemHeight = _s.DFDefaultItemH;
			_s.itemOffsetHeight  = _s.DItemOffsetHeight;
			_s.itemOffsetHeightButtonsTop = _s.DItemOffsetHeightButtonsTop;
			_s.spaceBetweenBtns = _s.DFSpaceBetweenBtns;
			_s.buttonsOffsetIn = _s.DFBtnsOffsetIn;
			_s.buttonsOffsetOut = _s.DFBtnsOffsetOut;
			_s.itemBorderSize = _s.DFItemBorderSize;
			_s.itemBkColor  = _s.DItemBkColor;
			_s.itemBorderColor  = _s.DFitemBorderColor;
			_s.preloaderBkColor = _s.DPreloaderBkColor;
			_s.preloaderFillColor = _s.DPreloaderFillColor;
			_s.backgroundColor = _s.DFBackgroundColor;
			_s.show360DegreeVideoVrButton = _s.show360DegreeVideoVrButton;

			// Share window.
			_s.shareButtons = _s.DShareButtons
			_s.showShareButton = _s.DShowShareButton;
			_s.shareText = _s.DShareText;
			_s.sharedURL = _s.DSharedURL;
			_s.shareBackgroundColor = _s.DShareBackgroundColor;
			_s.shareMainBackgroundColor = _s.DShareMainBackgroundColor;

			// Thumbnails.
			_s.showThumbnails = _s.DFDefaultThumbnails;
			_s.showThumbnailsIcon = _s.DShowThumbnailsIcon;
			_s.thumbnailH = _s.DFThumbnailH;
			_s.thumbnailsBorderSize = _s.DFThumbnailsBorderSize;
			_s.spaceBetweenThumbnailsAndItem = _s.DFSpaceBetweenThumbnailsAndItem;
			_s.spaceBetweenThumbnails = _s.DFSpaceBetweenThumbnails;
			_s.thumbnailsOffsetBottom = _s.DFThumbnailsOffsetBottom;
			_s.rotationY360DegreeVideo = _s.DFRotationY360DegreeVideo
			_s.thumbnailsOverlayColor = _s.DFThumbnailsOverlayColor;
			_s.thumbnailsBorderColor = _s.DThumbnailsBorderColor;

			// Caption.
			_s.captionPosition = _s.DCaptionPosition;
			_s.caption = _s.DCaption;
			_s.showCaptionOnSmallScreens = _s.DShowCaptionOnSmallScreens;
			_s.animateCaption = _s.DAnimateCaption;
			_s.captionAnimationType = _s.DFDescriptionAnimationType;
			
			//Video/audio player.
			_s.volume = _s.DVolume;
			_s.videoAutoPlay = _s.DVideoAutoPlay;
			_s.nextVideoAutoPlay = _s.DNextVideoAutoPlay;
			_s.showControllerWhenVideoIsStopped = _s.DhowControllerWhenVideoIsStopped;

		};
		
		
		/**
	  	 * Set options based on an settings object.
	  	 * @param {Boolean} props
	     */
		_s.setObjectPropsSettings = function(props){
			var test;
			for(var prop in props){
				switch(prop){
					case "useDeepLinking":
						_s.useDeepLinking = props.useDeepLinking;
						break;
					case "rightClickContextMenu":
						_s.rightClickContextMenu = props.rightClickContextMenu;
						break;		
					case "defaultItemWidth":
						_s.defaultItemWidth = props.defaultItemWidth || 1527;
						break;
					case "defaultItemHeight":
						_s.defaultItemHeight = props.defaultItemHeight || 859;
						break;
					case "buttonsAlignment":
						_s.buttonsAlignment = props.buttonsAlignment || "in";
						break;
					case "hideButtonsOnDrag":
						_s.hideButtonsOnDrag = props.hideButtonsOnDrag;
						break;
					case "useDrag":
						_s.useDrag = props.useDrag;
						break;
					case "mediaLazyLoading":
						_s.mediaLazyLoading = props.mediaLazyLoading;
						break;
					case "captionPosition":
						_s.captionPosition = props.captionPosition;
						break;
					case "caption":
						_s.caption = props.caption;
						break;
					case 'volume':
						_s.volume = props.volume;
						break;
					case "showCaptionOnSmallScreens":
						_s.showCaptionOnSmallScreens = props.showCaptionOnSmallScreens;
						break;
					case "animateCaption":
						_s.animateCaption = props.animateCaption;
						break;
					case "captionAnimationType":
						_s.captionAnimationType = props.captionAnimationType || "motion";
						_s.caption_do.captionAnimationType = _s.captionAnimationType;
						_s.caption2_do.captionAnimationType = _s.captionAnimationType;
						break;
					case "backgroundColor":
						_s.backgroundColor = props.backgroundColor || "#000000";
						break;
					case "itemBorderColor":
						_s.itemBorderColor = props.itemBorderColor || "transparent";
						break;
					case "spaceBetweenBtns":
						_s.spaceBetweenBtns = props.spaceBetweenBtns || 0; 
						break;
					case "maxZoom":
						_s.maxZoom = props.maxZoom || 1;
						break;	
					case "buttonsHideDelay":
						_s.buttonsHideDelay = props.buttonsHideDelay || 3;
						_s.buttonsHideDelay *= 1000;
						if(_s.hider) _s.hider.hideDelay = _s.buttonsHideDelay;
						break;
					case "useAsModal":
						_s.useAsModal = props.useAsModal;
						break;
					case "slideShowAutoPlay":
						_s.slideShowAutoPlay = props.slideShowAutoPlay;
						break;
					case "slideShowAutoStop":
						_s.slideShowAutoStop = props.slideShowAutoStop;
						break;
					case "useKeyboard":
						_s.useKeyboard = props.useKeyboard;
						break;
					case "useDoubleClick":
						_s.useDoubleClick = props.useDoubleClick;
						break;
					case "preloaderBkColor":
						_s.preloaderBkColor = props.preloaderBkColor;
						break;
					case "slideShowBkColor":
						_s.slideShowBkColor = props.slideShowBkColor;
						break;
					case "slideShowFillColor":
						_s.slideShowFillColor = props.slideShowFillColor;
						break;
					case "preloaderFillColor":
						_s.preloaderFillColor = props.preloaderFillColor;
						break;
					case "show360DegreeVideoVrButton":
						_s.show360DegreeVideoVrButton = props.show360DegreeVideoVrButton; 
						break;
					case "showCloseButton":
						_s.showCloseButton = props.showCloseButton;
					case "showFullscreenButton":
						_s.showFullscreenButton = props.showFullscreenButton; 
						break;
					case "shareButtons":
						_s.showShareButton = props.shareButtons.length;
						_s.shareButtons = props.shareButtons;
						break;
					case "shareText":
						_s.shareText = props.shareText; 
						break;
					case "sharedURL":
						_s.sharedURL = props.sharedURL; 
						break;	
					case "shareBackgroundColor":
						_s.shareBackgroundColor = props.shareBackgroundColor; 
						break;	
					case "shareMainBackgroundColor":
						_s.shareMainBackgroundColor = props.shareMainBackgroundColor; 
						break;		
					case "showZoomButton":
						_s.showZoomButton = props.showZoomButton; 
						break;
					case "showSlideShowButton":
						_s.showSlideShowButton = props.showSlideShowButton;
						break;
					case "showCounter":
						_s.showCounter = props.showCounter;
						break;
					case "showSlideShowAnimation":
						_s.showSlideShowAnimation = props.showSlideShowAnimation;
						break;	
					case "showNextAndPrevBtns":
						_s.showNextAndPrevBtns = props.showNextAndPrevBtns; 
						break;	
					case "slideShowDelay":
						_s.slideShowDelay = Math.round(props.slideShowDelay) * 1000;
						break;	
					case "itemOffsetHeight":
						_s.itemOffsetHeight = props.itemOffsetHeight;
						break;
					case "itemOffsetHeightButtonsTop":
						_s.itemOffsetHeightButtonsTop = props.itemOffsetHeightButtonsTop;
						break;
					case "buttonsOffsetIn":
						if(_s.buttonsAlignment == FWDRL.BUTTONS_IN){
							_s.buttonsOffsetIn = props.buttonsOffsetIn;
						}else{
							_s.buttonsOffsetIn = props.buttonsOffsetOut;
						}
						break;	
					case "buttonsOffsetOut":
						if(_s.buttonsAlignment == FWDRL.BUTTONS_IN){
							_s.buttonsOffsetOut = props.buttonsOffsetOut;
						}else{
							_s.buttonsOffsetOut = props.buttonsOffsetIn;
						}
						break;	
					case "itemBorderSize":
						_s.itemBorderSize = props.itemBorderSize; 
						break;
					case "itemBackgroundColor":
						_s.itemBkColor = props.itemBackgroundColor;
						break;
					case "showThumbnails":
						_s.showThumbnails = props.showThumbnails;
						break;	
					case "showThumbnailsIcon":
						_s.showThumbnailsIcon = props.showThumbnailsIcon; 
						break;
					case "thumbnailsOffsetBottom":
						_s.thumbnailsOffsetBottom = props.thumbnailsOffsetBottom;
						break;
					case "thumbnailsHeight":
						_s.thumbnailH = props.thumbnailsHeight;
						break;
					case "thumbnailsBorderSize":
						_s.thumbnailsBorderSize = props.thumbnailsBorderSize;
						if(_s.thumbs_do) _s.thumbs_do.thumbnailsBorderSize = _s.thumbnailsBorderSize;
						break;
					case "spaceBetweenThumbnailsAndItem":
						_s.spaceBetweenThumbnailsAndItem = props.spaceBetweenThumbnailsAndItem;
						break;
					case "spaceBetweenThumbnails":
						_s.spaceBetweenThumbnails = props.spaceBetweenThumbnails;
						break;
					case "thumbnailsOverlayColor":
						_s.thumbnailsOverlayColor = props.thumbnailsOverlayColor || 'rgba(0,0,0,.6)';
						break;
					case "thumbnailsBorderColor":
						_s.thumbnailsBorderColor = props.thumbnailsBorderColor || "#FFFFFF";
						break;
					case "videoAutoPlay":
						_s.videoAutoPlay = props.videoAutoPlay;
						break;
					case "nextVideoAutoPlay":
						_s.nextVideoAutoPlay = props.nextVideoAutoPlay;
						break;
					case "showControllerWhenVideoIsStopped":
						_s.showControllerWhenVideoIsStopped = props.showControllerWhenVideoIsStopped;
						break;
					case "videoPosterBackgroundColor":
						_s._d.videoPosterBackgroundColor_str = props.videoPosterBackgroundColor || "transparent";
						if(_s.video_do) _s.video_do.videoPoster_do.style().backgroundColor = _s._d.videoPosterBackgroundColor_str;
						break;
					case "audioControllerBackgroundColor":
						_s._d.audioControllerBackgroundColor_str = props.audioControllerBackgroundColor || "transparent";
						if(_s.audio_do && _s.audio_do.controller_do) _s.audio_do.controller_do.style().backgroundColor = _s._d.audioControllerBackgroundColor_str;
						break;
				}					
			}
		};


		/**
	  	 * Lazy media loading.
	     */
		_s.startMediaLazyLoading = function(){
			if(!_s.isShowed || _s.startMLL || !_s.mediaLazyLoading) return;

			_s.lazyLoadedLeft = _s.lazyLoadedRight = false;
			if(!_s.lazy_ar){
				_s.lazy_ar = [];
				_s.lazy_ar.push({guId:_s.playlistDomOrObj, loaded:false});
			}

			var has = false;
			for(var i=0; i<_s.lazy_ar.length; i++){
				if(_s.lazy_ar[i]['guId'] == _s.playlistDomOrObj) has = true;
			}

			if(!has){
				_s.lazy_ar.push({guId:_s.playlistDomOrObj, loaded:false});
			}

			for(var i=0; i<_s.lazy_ar.length; i++){
				if(_s.lazy_ar[i]['guId'] == _s.playlistDomOrObj){
					_s.curLazy_ar = _s.lazy_ar[i];
					break;
				} 
			}
			if(_s.curLazy_ar['loaded']) return;
			if(!_s.rlzImg){
				_s.rlzImg = new Image();
				_s.llzImg = new Image();
			}

			_s.startMLL = true;
			var item = _s.gallery_ar[_s.mId];
			var tt = _s.gallery_ar.length;

			_s.rightId = _s.mId + 1;
			_s.leftId = _s.mId - 1;
			
			_s.startMediaLeftLL();
			_s.startMediaRightLL();
		}

		_s.startMediaRightLL = function(){
			if(!_s.rlzImg) return;
			var item = _s.gallery_ar[_s.rightId];
			if(!item){
				_s.lazyLoadedRight = true;
				if(_s.lazyLoadedRight && _s.lazyLoadedLeft){
					_s.curLazy_ar['loaded'] = true;
				}
				return;
			}

			_s.rightId ++;
			clearTimeout(_s.MLRight_to);
			if(item.type == FWDRL.IMAGE || item.posterSrc){
				
				if(item.posterSrc){
					_s.rlzImg.src = item.posterSrc;
				}else{
					_s.rlzImg.src = item.src;
				}
				
				_s.rlzImg.onload = function(){
					_s.MLRight_to = setTimeout(function(){
						_s.startMediaRightLL();
					}, 50)
				}
			}else{
				_s.startMediaRightLL();
			}
		}

		_s.startMediaLeftLL = function(){
			if(!_s.llzImg) return;
			var item = _s.gallery_ar[_s.leftId];
			if(!item){
				_s.lazyLoadedLeft = true;
				if(_s.lazyLoadedRight && _s.lazyLoadedLeft){
					_s.curLazy_ar['loaded'] = true;
				}
				return;
			}

			_s.leftId --;
			clearTimeout(_s.MLLeft_to);
			if(item.type == FWDRL.IMAGE || item.posterSrc){
				if(item.posterSrc){
					_s.llzImg.src = item.posterSrc;
				}else{
					_s.llzImg.src = item.src;
				}
				
				_s.llzImg.onload = function(){
					_s.MLLeft_to = setTimeout(function(){
						_s.startMediaLeftLL();
					}, 50);
				}
			}else{
				_s.startMediaLeftLL();
			}
		}

		_s.stopMediaLazyLoading = function(){
			_s.startMLL = false;
			clearTimeout(_s.MLLeft_to);
			clearTimeout(_s.MLRight_to);
			if(_s.rlzImg) _s.rlzImg = null;
			if(_s.llzImg) _s.llzImg = null;
		}


		/**
	  	 * Display error on screen.
	  	 * @param {String} e
	     */
		_s.showError = function(e){
			_s.isLoading = false;
			_s.hasError = true;
			if(_s.tm) _s.tm.stop();
			_s.stopAnim();
			_s.hideDisable();
			_s.preloader_do.hide(true);
			_s.main_do.addChild(_s.info_do);
			_s.info_do.showText(e);
			_s.dispatchEvent(FWDRL.ERROR, {error:e});
		}
	
		
		/**
	  	 * Event disaptcher.
	     */
		_s.addListener = function (type, listener){
	    	if(!_s.listeners) return;
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	if(typeof listener != "function") throw Error("listener must be of type Function.");
	    	
	        var event = {};
	        event.type = type;
	        event.listener = listener;
	        event.target = _s;
	        _s.listeners.events_ar.push(event);
	    };
	    
	    _s.dispatchEvent = function(type, props){
	    	if(_s.listeners == null) return;
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	
	        for (var i=0, len=_s.listeners.events_ar.length; i < len; i++){
	        	if(_s.listeners.events_ar[i].target === _s && _s.listeners.events_ar[i].type === type){		
	    	        if(props){
	    	        	for(var prop in props){
	    	        		_s.listeners.events_ar[i][prop] = props[prop];
	    	        	}
	    	        }
	        		_s.listeners.events_ar[i].listener.call(_s, _s.listeners.events_ar[i]);
	        	}
	        }
	    };
	    
	    _s.removeListener = function(type, listener){
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	if(typeof listener != "function") throw Error("listener must be of type Function." + type);
	    	
	        for (var i=0, len=_s.listeners.events_ar.length; i < len; i++){
	        	if(_s.listeners.events_ar[i].target === _s 
	        			&& _s.listeners.events_ar[i].type === type
	        			&& _s.listeners.events_ar[i].listener ===  listener
	        	){
	        		_s.listeners.events_ar.splice(i,1);
	        		break;
	        	}
	        }  
	    };		
		_s.init();
	};

	FWDRL.inst = [];
	
	/**
	 * Prototype and globals.
	 */
	FWDRL.setPrototype =  function(){
		FWDRL.prototype = new FWDRVPEventDispatcher();
	};

	FWDRL.EVP_STOP = 'evpStop';
	FWDRL.IFRAME = "iframe";
	FWDRL.IMAGE = "image";
	FWDRL.VIDEO = "video";
	FWDRL.YOUTUBE = 'youtube';
	FWDRL.VIMEO = 'vimeo';
	FWDRL.AUDIO = "audio";
	FWDRL.IFRAME = "iframe";
	FWDRL.HTML = "html";
	FWDRL.BUTTONS_IN = "in";
	FWDRL.BUTTONS_OUT = "out";
	FWDRL.BUTTONS_TOP = 'top';
	FWDRL.FULLSCREEN = 'fullscreen';
	FWDRL.NORMALSCREEN = 'normalscreen';
	FWDRL.READY = "ready";
	FWDRL.SHOW_START = "showStart";
	FWDRL.SHOW_COMPLETE = "showComplete";
	FWDRL.HIDE_START = "hideStart";
	FWDRL.HIDE_COMPLETE	= "hidecComplete";
	FWDRL.ERROR = "error";
	FWDRL.MAXIMIZE_COMPLETE = "maximizeComplete";
	FWDRL.START_TO_UPDATE_ITEM = "startToUpdateItem";

	FWDRL.UPDATE_ITEM = "updateItem";
	FWDRL.UPDATE_GALLERIES = 'updateGalleries';
	
	
	window.FWDRL = FWDRL;
	
}(window));/**
 * Revolution Lightbox PACKAGED v3.0
 * Caption.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function (window){
	
	var FWDRLCaption = function(
			prt,
			captionAnimationType,
			captionPosition,
			borderSize,
			type
			){

		'use strict';
		
		var _s = this;
		var prototype = FWDRLCaption.prototype;
		
		_s.captionAnimationType = captionAnimationType;
		_s.captionPosition = captionPosition;
		_s.borderSize = borderSize;
		_s.finalW = 0;
		_s.finalH = 0;
		_s.finalY = 0;
		_s.type = type;

		if(_s.type == 'out'){
			_s.captionPosition = 'bottom';
		}
		_s.isHiddenDone_bl = true;

		
		/**
		 * Initialize.
		 */
		_s.init = function(){
			_s.setupMainContainers();
		};

		
		/**
		 * Setup main containers.
		 */
		_s.setupMainContainers = function(){
			
			_s.main_do = new FWDRLDO("div");
			
			_s.main_do.style().width = "100%";
			_s.main_do.style().height = "100%";
			_s.main_do.setBackfaceVisibility();
			
			_s.text_do = new FWDRLDO("div");
			_s.text_do.style().width = "100%";
			_s.text_do.setBackfaceVisibility();
			
			_s.bk_do = new FWDRLDO("div");
			_s.bk_do.screen.className = 'background';
			_s.bk_do.setResizableSizeAfterParent();
			_s.bk_do.setBackfaceVisibility();

			if(_s.type == 'in'){
				_s.main_do.addChild(_s.bk_do);
			}
			
			_s.main_do.addChild(_s.text_do);
			_s.addChild(_s.main_do);
		};

		
		/**
		 * Set text.
		 * @param {String} pText
		 */
		_s.setText = function(pText){
			_s.text_do.setInnerHTML(pText);
			_s.resizeAndPosition();
		};


		/**
		 * Resize.
		 * @param {Integer} finalW
		 * @param {Boolean} anim
		 */
		_s.resizeAndPosition = function(finalW, anim){
			if(finalW) _s.finalW = finalW;
			_s.finalH = _s.text_do.getHeight();

			_s.setFinalSize();
			clearTimeout(_s.resizeWithDelayId_to);
			_s.resizeWithDelayId_to = setTimeout(function(){
				_s.setFinalSize(anim);
			}, 91);
			
		};
		
		_s.setFinalSize = function(){
			var cls = prt.cls + '-caption';
			
			if(_s.type == 'in'){
				cls += ' in';
				if(prt.stageH <= 550){
					cls += ' small-screen';
				}
			}else{
				cls += ' out'
			}
			
			_s.finalH = _s.text_do.getHeight();
			_s.finalW =  prt.itemHld_do.w;

			var itemHldX = prt.itemHld_do.x;
			var itemHldY = prt.itemHld_do.y;
			var itemHldH = prt.itemHld_do.h
			
			if(prt.showCationFirstTime){
				itemHldX = prt.finalX;
				itemHldY = prt.finalY;
				itemHldH = prt.finalH;
				_s.finalW = prt.finalW;
			}
			
			if(_s.type =='in'){
				_s.finalW -= _s.borderSize * 2;
				_s.finalX = _s.borderSize;
				if(_s.captionPosition == "topin"){
					cls += ' topin'
					_s.style().top = '0';
					_s.style().bottom = 'auto';
					_s.text_do.style().top = 0;
					_s.text_do.style().bottom = 'auto';
				}else{
					cls += ' bottomin'
					_s.style().top = 'auto';
					_s.style().bottom = '0';
					_s.text_do.style().top = 'auto';
					_s.text_do.style().bottom = 0;
				}
			}else{
				_s.finalX = itemHldX;
				_s.finalY = itemHldY + itemHldH;
				_s.setY(_s.finalY);
				_s.setWH();
			}

			_s.screen.className = cls;
			if(_s.type == 'in'){
				_s.setWidth(_s.finalW);
				_s.main_do.setHeight(_s.finalH);
				_s.setHeight(_s.finalH);
			}
		};

		_s.setWH = function(w,h){
			_s.setWidth(prt.finalW);
			_s.main_do.setHeight(_s.finalH);
			_s.setHeight(_s.finalH);
			_s.setX(prt.finalX);
		}

		
		/**
		 * Hide caption.
		 * @param {Boolean} animate
		 * @param {Boolean} overwrite
		 * @param {Boolean} isShowedFirstTime
		 */
		_s.hide = function(animate, overwrite, isShowedFirstTime, inverse){
			if(!_s.isShowed && !overwrite) return;
			_s.isShowed = false;
			_s.finalH = _s.text_do.getHeight();
			var opacity = 1;
			if(isShowedFirstTime) _s.isShowedFirstTime_bl = false;
			
			FWDAnimation.killTweensOf(_s.main_do);
			if(animate){
				if(_s.captionAnimationType == "motion"){
					var pos;
					if(_s.captionPosition == "topin"){
						pos = -_s.finalH
					}else{
						_s.setOverflow('hidden');
						if(_s.type == 'in'){
							pos = _s.finalH;
						}else{
							pos = - _s.finalH - 3;
							if(inverse){
								_s.setOverflow('visible');
								opacity = 0;
								pos *= -1;
							}
							
						}
					}
					FWDAnimation.to(_s.main_do, .8, {y:pos, alpha:opacity, ease:Expo.easeInOut, onComplete:function(){_s.hideComplete(inverse)}});
				}else{
					FWDAnimation.to(_s.main_do, .4, {alpha:0, ease:Quint.easeOut, onComplete:_s.hideComplete});
				}
			}else{
				_s.hideComplete();
			}
		};
		
		_s.hideComplete = function(inverse){
			_s.setVisible(false);
			if(_s.captionAnimationType == "motion"){
				var pos;
				if(_s.captionPosition == "topin"){
					pos = -_s.finalH;	
					_s.setX(_s.borderSize);
					_s.setY(_s.borderSize)
				}else{
					if(_s.type == 'in'){
						pos = _s.finalH;
						_s.setX(_s.borderSize);
						_s.setY(-_s.borderSize)
					}else{
						pos = - _s.finalH;
						if(inverse){
							_s.setOverflow('visible');
							pos *= -1;
						}
					}
				}
				_s.main_do.setY(pos);
			}else{
				_s.main_do.setAlpha(0);
			}
		};
		

		/**
		 * Show caption.
		 * @param {Boolean} animate
		 */
		_s.show = function(animate, inverse){
			if(_s.isShowed) return;
		
			_s.isShowed = true;
			setTimeout(function(){
				_s.setAlpha(1);
			}, 100);
			
			if(!_s.isShowedFirstTime_bl){
				_s.isShowedFirstTime_bl = true;
				_s.hideComplete();
				_s.resizeAndPosition();
			}
			_s.setVisible(true);
			
			FWDAnimation.killTweensOf(_s.main_do);
			if(_s.captionAnimationType == "motion"){
				if(!inverse && _s.main_do.alpha != 1) _s.main_do.setAlpha(1);
				if(animate){
					FWDAnimation.to(_s.main_do, .8, {y:0, alpha:1, ease:Expo.easeInOut});
				}else{
					_s.main_do.setY(0);
				}
			}else{
				_s.main_do.setY(0);
				var dl = .4;
				if(prt.showFirstTimeDone) dl = 0;
				if(animate){
					FWDAnimation.to(_s.main_do, .6, {alpha:1, delay:dl});
				}else{
					_s.main_do.setAlpha(1);
				}
			}
		};
		
		_s.init();
	};
	
	/**
	 * Prototype and globals.
	 */
	FWDRLCaption.setPrototype =  function(){
		FWDRLCaption.prototype = new FWDRLDO("div");
	};

	FWDRLCaption.HIDE_COMPLETE = "infoWindowHideComplete";
	FWDRLCaption.prototype = null;
	window.FWDRLCaption = FWDRLCaption;
	
}(window));/**
 * Revolution Lightbox PACKAGED v3.0
 * Complex button.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function (){
	var FWDRLComplexButton = function(
			n1Img, 
			s1Path, 
			n2Img, 
			s2Path, 
			html1,
			html2,
			nClass,
			sClass
		){

		'use strict';
		
		var _s = this;
		var prototype = FWDRLComplexButton.prototype;
		
		_s.n1Img = n1Img;
		_s.s1Path_str = s1Path;
		_s.n2Img = n2Img;
		_s.s2Path_str = s2Path;
		_s.html1 = html1;
		_s.html2 = html2;
		_s.nClass = nClass;
		_s.sClass = sClass;
		
		if(_s.n1Img){
			_s.buttonWidth = _s.n1Img.width;
			_s.buttonHeight = _s.n1Img.height;
		}
		
		_s.currentState = 1;
		_s.isMbl = FWDRLUtils.isMbl;
		_s.hasPointerEvent_bl = FWDRLUtils.hasPointerEvent;
		_s.allowToCreateSecondButton_bl = !_s.isMbl || _s.hasPointerEvent_bl;

		
		/**
	 	 * Initiolize.
	 	 */
		_s.init = function(){
			_s.setButtonMode(true);
			_s.setupMainContainers();
		};

		
		/**
	 	 * Setup main containers.
	 	 */
		_s.setupMainContainers = function(){
			
			_s.buttonsHolder_do = new FWDRLDO("div");
			_s.addChild(_s.buttonsHolder_do);
			
			if(html1){

				_s.firstButton_do = new FWDRLDO("div");
				_s.n1_do = new FWDEVPDO("div");	
				_s.n1_do.setInnerHTML(_s.html1);
				_s.firstButton_do.addChild(_s.n1_do);
				_s.secondButton_do = new FWDRLDO("div");
				_s.n2_do = new FWDEVPDO("div");	
				_s.n2_do.setInnerHTML(_s.html2);
				_s.secondButton_do.addChild(_s.n2_do);
				_s.buttonsHolder_do.addChild(_s.secondButton_do);
				_s.buttonsHolder_do.addChild(_s.firstButton_do);

				_s.setNormalState();

				setTimeout(function(){
					_s.buttonWidth = parseInt(getComputedStyle(_s.n1_do.screen).getPropertyValue("width"));
					_s.buttonHeight = parseInt(getComputedStyle(_s.n1_do.screen).getPropertyValue("height"));
					
					_s.setFinalSize();
				}, 5);

			}else{
				_s.firstButton_do = new FWDRLDO("div");
				_s.addChild(_s.firstButton_do);
				_s.n1_do = new FWDRLDO("img");	
				_s.n1_do.setScreen(_s.n1Img);
				_s.firstButton_do.addChild(_s.n1_do);
				
				_s.s1_do = new FWDRLDO("img");
				var img1 = new Image();
				img1.src = _s.s1Path_str;
				_s.s1_do.setScreen(img1);
				_s.s1_do.setWidth(_s.buttonWidth);
				_s.s1_do.setHeight(_s.buttonHeight);
				_s.s1_do.setAlpha(0);
				_s.firstButton_do.addChild(_s.s1_do);
				
				_s.firstButton_do.setWidth(_s.buttonWidth);
				_s.firstButton_do.setHeight(_s.buttonHeight);
				
				_s.secondButton_do = new FWDRLDO("div");
				_s.addChild(_s.secondButton_do);
				_s.n2_do = new FWDRLDO("img");	
				_s.n2_do.setScreen(_s.n2Img);
				_s.secondButton_do.addChild(_s.n2_do);
				
				_s.s2_do = new FWDRLDO("img");
				var img2 = new Image();
				img2.src = _s.s2Path_str;
				_s.s2_do.setScreen(img2);
				_s.s2_do.setWidth(_s.buttonWidth);
				_s.s2_do.setHeight(_s.buttonHeight);
				_s.s2_do.setAlpha(0);
				_s.secondButton_do.addChild(_s.s2_do);

				_s.buttonsHolder_do.addChild(_s.secondButton_do);
				_s.buttonsHolder_do.addChild(_s.firstButton_do);
				_s.setFinalSize();
			}


			if(_s.isMbl){
				if(_s.hasPointerEvent_bl){
					_s.screen.addEventListener("pointerdown", _s.onMouseUp);
					_s.screen.addEventListener("pointerover", _s.onMouseOver);
					_s.screen.addEventListener("pointerout", _s.onMouseOut);
				}else{
					_s.screen.addEventListener("toustart", _s.onDown);
					_s.screen.addEventListener("touchend", _s.onMouseUp);
				}
			}else if(_s.screen.addEventListener){	
				_s.screen.addEventListener("mouseover", _s.onMouseOver);
				_s.screen.addEventListener("mouseout", _s.onMouseOut);
				_s.screen.addEventListener("mouseup", _s.onMouseUp);
			}
		};

		_s.setFinalSize = function(){
			_s.secondButton_do.setX(-50);
			_s.setWidth(_s.buttonWidth);
			_s.setHeight(_s.buttonHeight);
			_s.buttonsHolder_do.setWidth(_s.buttonWidth);
			_s.buttonsHolder_do.setHeight(_s.buttonHeight);
			_s.secondButton_do.setWidth(_s.buttonWidth);
			_s.secondButton_do.setHeight(_s.buttonHeight);
			
		}
		
		_s.onMouseOver = function(e, animate){
			_s.dispatchEvent(FWDRLComplexButton.SHOW_TOOLTIP, {e:e});
			if(_s.isDisabled_bl || _s.isSelectedState_bl || _s.isHoverDisabled_bl) return;
			if(!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE || e.pointerType == "mouse"){
				_s.dispatchEvent(FWDRLComplexButton.MOUSE_OVER, {e:e});
				_s.setSelectedState(true);
			}
		};
			
		_s.onMouseOut = function(e){
			if(_s.isDisabled_bl || !_s.isSelectedState_bl || _s.isHoverDisabled_bl) return;
			if(!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE || e.pointerType == "mouse"){
				_s.setNormalState();
				_s.dispatchEvent(FWDRLComplexButton.MOUSE_OUT);
			}
		};
		
		_s.onDown = function(e){
			if(e.preventDefault) e.preventDefault();
		};
	
		_s.onMouseUp = function(e){
			if(_s.isDisabled_bl || e.button == 2) return;
			if(e.preventDefault) e.preventDefault();
			if(!_s.isMbl) _s.onMouseOver(e, false);
			_s.dispatchEvent(FWDRLComplexButton.MOUSE_UP, {e:e});
		};

		
		/**
	 	 * Toggle button.
	 	 */
		_s.toggleButton = function(){
			if(_s.currentState == 1){
				_s.firstButton_do.setX(-50);
				_s.secondButton_do.setX(0);
				_s.currentState = 0;
				_s.dispatchEvent(FWDRLComplexButton.FIRST_BUTTON_CLICK);
			}else{
				_s.firstButton_do.setX(-50);
				_s.secondButton_do.setX(0);
				_s.currentState = 1;
				_s.dispatchEvent(FWDRLComplexButton.SECOND_BUTTON_CLICK);
			}
		};

		
		/**
	 	 * Set button state.
	 	 * @param {Integer} state
	 	 */
		_s.setButtonState = function(state){
			if(state == 1){
				_s.firstButton_do.setX(0);
				_s.secondButton_do.setX(-50);
				_s.currentState = 1; 
			}else{
				_s.firstButton_do.setX(-50);
				_s.secondButton_do.setX(0);
				_s.currentState = 0; 
			}
		};
	
		_s.setNormalState = function(){
			_s.isSelectedState_bl = false;
			if(_s.html1){
				_s.n1_do.screen.className = _s.nClass;
				_s.n2_do.screen.className = _s.nClass;
			}else{
				FWDAnimation.killTweensOf(_s.s1_do);
				FWDAnimation.killTweensOf(_s.s2_do);
				FWDAnimation.to(_s.s1_do, .5, {alpha:0, ease:Expo.easeOut});	
				FWDAnimation.to(_s.s2_do, .5, {alpha:0, ease:Expo.easeOut});
			}
			
		};
		
		_s.setSelectedState = function(animate){
			_s.isSelectedState_bl = true;
			if(_s.html1){
				_s.n1_do.screen.className = _s.nClass + ' ' + _s.sClass;
				_s.n2_do.screen.className = _s.nClass + ' ' + _s.sClass;
			}else{
				FWDAnimation.killTweensOf(_s.s1_do);
				FWDAnimation.killTweensOf(_s.s2_do);
				FWDAnimation.to(_s.s1_do, .5, {alpha:1, delay:.1, ease:Expo.easeOut});
				FWDAnimation.to(_s.s2_do, .5, {alpha:1, delay:.1, ease:Expo.easeOut});
			}	
		};
		
		
		/**
	 	 * Enable/disable button.
	 	 */
		_s.disable = function(){
			_s.isDisabled_bl = true;
			_s.setButtonMode(false);
			FWDAnimation.to(_s.n1_do, .6, {alpha:.4});
		};
		
		_s.enable = function(){
			_s.isDisabled_bl = false;
			_s.setButtonMode(true);
			FWDAnimation.to(_s.n1_do, .6, {alpha:1});
		};


		 /**
	 	 * Set opacitiy when item is dragged.
	 	 * @param {String} inst
	 	 */
	 	 _s.setHideDrag = function(hide){
	 	 	FWDAnimation.killTweensOf(_s.n1_do);
	 	 	FWDAnimation.killTweensOf(_s.n2_do);
	 	 	if(!hide){
	 	 		FWDAnimation.to(_s.n1_do, .4, {alpha:1});
	 	 		FWDAnimation.to(_s.n2_do, .4, {alpha:1});
	 	 	}else{
	 	 		FWDAnimation.to(_s.n1_do, .4, {alpha:.3, delay:.4});
	 	 		FWDAnimation.to(_s.n2_do, .4, {alpha:.3, delay:.4});
	 	 	}
	 	 }
		
		_s.init();
	};

	
	/**
	 * Set prototype.
	 */
	FWDRLComplexButton.setPrototype = function(){
		FWDRLComplexButton.prototype = new FWDRLDO("div");
	};
	
	FWDRLComplexButton.FIRST_BUTTON_CLICK = "onFirstClick";
	FWDRLComplexButton.SECOND_BUTTON_CLICK = "secondButtonOnClick";
	FWDRLComplexButton.SHOW_TOOLTIP = "showToolTip";
	FWDRLComplexButton.MOUSE_OVER = "onMouseOver";
	FWDRLComplexButton.MOUSE_OUT = "onMouseOut";
	FWDRLComplexButton.MOUSE_UP = "onMouseUp";
	FWDRLComplexButton.CLICK = "onClick";
	
	FWDRLComplexButton.prototype = null;
	window.FWDRLComplexButton = FWDRLComplexButton;
}(window));/**
 * Revolution Lightbox PACKAGED v3.0
 * Right click context menu.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function (){
	var FWDRLContextMenu = function(e, type){

		'use strict';
		
		var _s = this;
		_s.prt = e;
		_s.type = type;
		_s.url = "http://www.webdesign-flash.ro";
		
		
		/**
	 	 * Initialize.
	 	 */		
		_s.init = function(){
			_s.updateParent(_s.prt);
		};

		
		/**
	 	 * Update parent and adding events.
	 	 * @param {FWDRlDisplayObject} prt
	 	 */
		_s.updateParent = function(prt){
			if(_s.prt){
				if(_s.prt.screen.addEventListener){
					_s.prt.screen.removeEventListener("contextmenu", _s.contextMenuHandler);
				}else{
					_s.prt.screen.detachEvent("oncontextmenu", _s.contextMenuHandler);
				}
				
			}
			_s.prt = prt;
			
			if(_s.prt.screen.addEventListener){
				_s.prt.screen.addEventListener("contextmenu", _s.contextMenuHandler);
			}else{
				_s.prt.screen.attachEvent("oncontextmenu", _s.contextMenuHandler);
			}
		};
		
		_s.contextMenuHandler = function(e){
			if(_s.isDisabled_bl) return;
			if(_s.type == "disabled"){
				if(e.preventDefault){
					e.preventDefault();
					return;
				}else{return false;
				}
			}else if(_s.type == "default"){
				return;
			}
			
			if(_s.url.indexOf("sh.r") == -1) return;
			_s.setupMenus();
			_s.prt.addChild(_s.menu_do);
			_s.menu_do.setVisible(true);
			_s.positionButtons(e);
			
			if(window.addEventListener){
				window.addEventListener("mousedown", _s.contextMenuWindowOnMouseDownHandler);
			}else{
				document.documentElement.attachEvent("onclick", _s.contextMenuWindowOnMouseDownHandler);
			}
			
			if(e.preventDefault){
				e.preventDefault();
			}else{
				return false;
			}
			
		};
		
		_s.contextMenuWindowOnMouseDownHandler = function(e){
			var viewportMouseCoordinates = FWDRLUtils.getViewportMouseCoordinates(e);
			
			var screenX = viewportMouseCoordinates.screenX;
			var screenY = viewportMouseCoordinates.screenY;
			
			if(!FWDRLUtils.hitTest(_s.menu_do.screen, screenX, screenY)){
				if(window.removeEventListener){
					window.removeEventListener("mousedown", _s.contextMenuWindowOnMouseDownHandler);
				}else{
					document.documentElement.detachEvent("onclick", _s.contextMenuWindowOnMouseDownHandler);
				}
				_s.menu_do.setX(-500);
			}
		};

		
		/**
	 	 * Setup menus.
	 	 */
		_s.setupMenus = function(){
			if(_s.menu_do) return;
			_s.menu_do = new FWDRLDO("div");
			_s.menu_do.setX(-500);
			_s.menu_do.style().width = "100%";
			
			_s.nTxt_do = new FWDRLDO("div");
			_s.nTxt_do.style().fontFamily = "Arial, Helvetica, sans-serif";
			_s.nTxt_do.style().padding = "4px";
			_s.nTxt_do.style().fontSize = "12px";
			_s.nTxt_do.style().color = "#000000";
			_s.nTxt_do.style().whiteSpace = "nowrap";
			_s.nTxt_do.setInnerHTML("&#0169; made by FWD");
			_s.nTxt_do.setBkColor("#FFFFFF");
			
			_s.sTxt_do = new FWDRLDO("div");
			_s.sTxt_do.style().fontFamily = "Arial, Helvetica, sans-serif";
			_s.sTxt_do.style().padding = "4px";
			_s.sTxt_do.style().fontSize = "12px";
			_s.sTxt_do.style().color = "#FFFFFF";
			_s.sTxt_do.style().whiteSpace = "nowrap";
			_s.sTxt_do.setInnerHTML("&#0169; made by FWD");
			_s.sTxt_do.setBkColor("#000000");
			_s.sTxt_do.setAlpha(0);
			
			_s.over_do = new FWDRLDO("div");
			_s.over_do.setBkColor("#FF0000");
			_s.over_do.setAlpha(0);
			
			_s.menu_do.addChild(_s.nTxt_do);
			_s.menu_do.addChild(_s.sTxt_do);
			_s.menu_do.addChild(_s.over_do);
			_s.prt.addChild(_s.menu_do);
			_s.over_do.setWidth(_s.sTxt_do.getWidth());
			_s.menu_do.setWidth(_s.sTxt_do.getWidth());
			_s.over_do.setHeight(_s.sTxt_do.getHeight());
			_s.menu_do.setHeight(_s.sTxt_do.getHeight());
			_s.menu_do.setVisible(false);
			
			_s.menu_do.setButtonMode(true);
			_s.menu_do.screen.onmouseover = _s.mouseOverHandler;
			_s.menu_do.screen.onmouseout = _s.mouseOutHandler;
			_s.menu_do.screen.onclick = _s.onClickHandler;
		};
		
		_s.mouseOverHandler = function(){
			if(_s.url.indexOf("w.we") == -1) _s.menu_do.visible = false;
			FWDAnimation.to(_s.nTxt_do, .8, {alpha:0, ease:Expo.easeOut});
			FWDAnimation.to(_s.sTxt_do, .8, {alpha:1, ease:Expo.easeOut});
		};
		
		_s.mouseOutHandler = function(){
			FWDAnimation.to(_s.nTxt_do, .8, {alpha:1, ease:Expo.easeOut});
			FWDAnimation.to(_s.sTxt_do, .8, {alpha:0, ease:Expo.easeOut});
		};
		
		_s.onClickHandler = function(){
			window.open(_s.url, "_blank");
		};
		

		/**
	 	 * Position menu buttons.
	 	 * @param {Event} e
	 	 */
		_s.positionButtons = function(e){
			var viewportMouseCoordinates = FWDRLUtils.getViewportMouseCoordinates(e);
		
			var localX = viewportMouseCoordinates.screenX - _s.prt.getGlobalX(); 
			var localY = viewportMouseCoordinates.screenY - _s.prt.getGlobalY();
			var finalX = localX + 2;
			var finalY = localY + 2;
			
			if(finalX > _s.prt.getWidth() - _s.menu_do.getWidth() - 2){
				finalX = localX - _s.menu_do.getWidth() - 2;
			}
			
			if(finalY > _s.prt.getHeight() - _s.menu_do.getHeight() - 2){
				finalY = localY - _s.menu_do.getHeight() - 2;
			}
			_s.menu_do.setX(finalX);
			_s.menu_do.setY(finalY);
		};

		
		/**
	 	 * Enable/disable.
	 	 */
		_s.disable = function(){
			_s.isDisabled_bl = true;
		};
		
		_s.enable = function(){
			_s.isDisabled_bl = false;
		}


		/**
	 	 * Enable/disable.
	 	 */
	 	_s.update = function(type){
	 		_s.type = type;
	 	}
		
		_s.init();
	};
	
	
	/**
 	 * Prototype.
 	 */
	window.FWDRLContextMenu = FWDRLContextMenu;
	
}(window));/* Data */
(function(window){
	
	var FWDRLData = function(props, playListElement, prt){

		'use strict';
		
		var _s = this;
		var prototype = FWDRLData.prototype;
		
		_s.props_obj = props;
		_s.skinPaths_ar = [];
		_s.images_ar = [];
		_s.cats_ar = [];
		_s.countLoadedSkinImages = 0;
	
		//###################################//
		/*init*/
		//###################################//
		_s.init = function(){
			_s.parseProperties();
		};
		
		//#############################################//
		// parse properties.
		//#############################################//
		_s.parseProperties = function(){
			
			_s.mainFolderPath = _s.props_obj.mainFolderPath;
			if(!_s.mainFolderPath){
				setTimeout(function(){
					if(_s == null) return;
					errorMessage_str = "The <font color='#FF0000'>mainFolderPath</font> property is not defined in the constructor function!";
					_s.dispatchEvent(FWDRLData.LOAD_ERROR, {text:errorMessage_str});
				}, 100);
				return;
			}
			
			if((_s.mainFolderPath.lastIndexOf("/") + 1) != _s.mainFolderPath.length){
				_s.mainFolderPath += "/";
			}
		
			_s.skin = _s.mainFolderPath + 'skin/';
			_s.wrningIconPath_str = _s.skin + "warning.png";
			_s.useVectorIcons = _s.props_obj.useVectorIcons;
			
			_s.skinPaths_ar = [
			     {img:_s.playN_img = new Image(), src:_s.skin + "play-button.png"},
			     {img:_s.nextN_img = new Image(), src:_s.skin + "next-button.png"},
			     {img:_s.prevN_img = new Image(), src:_s.skin + "prev-button.png"},
			     {img:_s.closeN_img = new Image(), src:_s.skin + "close-button.png"},
			     {img:_s.fullScreenN_img = new Image(), src:_s.skin + "fullscreen-button.png"},
			     {img:_s.normalScreenN_img = new Image(), src:_s.skin + "normalscreen-button.png"},
			     {img:_s.maximizeN_img = new Image(), src:_s.skin + "maximize-button.png"},
			     {img:_s.minimizeN_img = new Image(), src:_s.skin + "minimize-button.png"},
			     {img:_s.pauseN_img = new Image(), src:_s.skin + "pause-button.png"},
			     {img:_s.showShareImage_img = new Image(), src:_s.skin + "show-share-button.png"},
				 {img:_s.facebookN_img = new Image(), src:_s.skin + "facebook-button.png"},
			     {img:_s.twitterN_img = new Image(), src:_s.skin + "twitter-button.png"},
			     {img:_s.linkedinN_img = new Image(), src:_s.skin + "linkedin-button.png"},
			     {img:_s.tumblrN_img = new Image(), src:_s.skin + "tumblr-button.png"},
			     {img:_s.pinterestN_img = new Image(), src:_s.skin + "pinterest-button.png"},
			     {img:_s.redditN_img = new Image(), src:_s.skin + "reddit-button.png"},
			     {img:_s.bufferN_img = new Image(), src:_s.skin + "buffer-button.png"},
			     {img:_s.diggN_img = new Image(), src:_s.skin + "digg-button.png"},
			     {img:_s.bloggerN_img = new Image(), src:_s.skin + "blogger-button.png"},
    		];
			

			//setup skin paths
			_s.prevSPath = _s.skin + "prev-button-over.png"; 	
			_s.nextSPath = _s.skin + "next-button-over.png"; 
			_s.closeSPath = _s.skin + "close-button-over.png"; 
			_s.fullScreenS = _s.skin + "fullscreen-button-over.png"; 	
			_s.normalScreenS = _s.skin + "normalscreen-button-over.png"; 	
			_s.maximizeSPath = _s.skin + "maximize-button-over.png"; 	
			_s.minimizeSPath = _s.skin + "minimize-button-over.png"; 	
			_s.playS = _s.skin + "play-button-over.png"; 	
			_s.pauseS = _s.skin + "pause-button-over.png";
			_s.showShareImageSPath = _s.skin + "show-share-button-over.png";
			_s.facebookSPath = _s.skin + "facebook-button-over.png";
			_s.twitterSPath = _s.skin + "twitter-button-over.png";
			_s.linkedinSPath = _s.skin + "linkedin-button-over.png";
			_s.tumblrSPath = _s.skin + "tumblr-button-over.png";
			_s.pinterestSPath = _s.skin + "pinterest-button-over.png";
			_s.redditSPath = _s.skin + "reddit-button-over.png";
			_s.bufferSPath = _s.skin + "buffer-button-over.png";
			_s.diggSPath = _s.skin + "digg-button-over.png";
			_s.bloggerSPath = _s.skin + "blogger-button-over.png";
			_s.videoIconPath = _s.skin + "thumb-play-icon.png";
			
			_s.totalGraphics = _s.skinPaths_ar.length;
			if(_s.useVectorIcons){
				setTimeout(function(){
					_s.dispatchEvent(FWDRLData.SKIN_LOAD_COMPLETE);
				}, 50);
			}else{
				_s.loadSkin();
			}
		};
		

		//####################################//
		/* load buttons graphics */
		//###################################//n
		_s.loadSkin = function(){
			var img;
			var src;
			for(var i=0; i<_s.totalGraphics; i++){
				img = _s.skinPaths_ar[i].img;
				src = _s.skinPaths_ar[i].src;
				img.onload = _s.onSkinLoadHandler;
				img.onerror = _s.onSkinLoadErrorHandler;
				img.src = src;
			}
		};
		
		_s.onSkinLoadHandler = function(e){
			_s.countLoadedSkinImages++;
			if(_s.countLoadedSkinImages == _s.totalGraphics){
				_s.dispatchEvent(FWDRLData.SKIN_LOAD_COMPLETE);
			}
		};
		
		_s.onSkinLoadErrorHandler = function(e){
			if (FWDRLUtils.isIEAndLessThen9){
				var message = "Graphics image not found!";
			}else{
				var message = "The skin icon with label <font color='#FF0000'>" + e.target.src + "</font> can't be loaded.";
			}
			
			if(window.console) console.log(e);
			var err = {text:message};
			setTimeout(function(){
				_s.dispatchEvent(FWDRLData.LOAD_ERROR, err);
			}, 100);
		};
		
		_s.init();
	};
	
	/* set prototype */
	FWDRLData.setPrototype = function(){
		FWDRLData.prototype = new FWDRLEventDispatcher();
	};
	
	FWDRLData.prototype = null;
	
	FWDRLData.PRELOADER_LOAD_DONE = "onPreloaderLoadDone";
	FWDRLData.LOAD_DONE = "onLoadDone";
	FWDRLData.LOAD_ERROR = "onLoadError";
	FWDRLData.IMAGE_LOADED = "onImageLoaded";
	FWDRLData.SKIN_LOAD_COMPLETE = "onSkinLoadComplete";
	FWDRLData.SKIN_PROGRESS = "onSkinProgress";
	FWDRLData.IMAGES_PROGRESS = "onImagesPogress";
	FWDRLData.PLAYLIST_LOAD_COMPLETE = "onPlaylistLoadComplete";
	
	window.FWDRLData = FWDRLData;
}(window));if (typeof fwdal == "undefined") {
    var fwdal = {}
}
if (typeof fwdal.util == "undefined") {
    fwdal.util = {}
}
fwdal.util.Browser = new function () {
    var b = navigator.userAgent.toLowerCase(),
        a = /webkit/.test(b),
        e = /opera/.test(b),
        c = /msie/.test(b) && !/opera/.test(b),
        d = /mozilla/.test(b) && !/(compatible|webkit)/.test(b),
        f = parseFloat(c ? b.substr(b.indexOf("msie") + 4) : (b.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1]);
    this.toString = function () {
        return "[class Browser]"
    };
    this.getVersion = function () {
        return f
    };
    this.isMSIE = function () {
        return c
    };
    this.isSafari = function () {
        return a
    };
    this.isOpera = function () {
        return e
    };
    this.isMozilla = function () {
        return d
    }
};
fwdal.util.Events = new function () {
    var c = "DOMContentLoaded",
        j = "onstop",
        k = window,
        h = document,
        b = [],
        a = fwdal.util,
        e = a.Browser,
        d = e.isMSIE(),
        g = e.isSafari();
    this.toString = function () {
        return "[class Events]"
    };
    this.addListener = function (n, l, m) {
        b.push({
            o: n,
            t: l,
            l: m
        });
        if (!(l == c && (d || g))) {
            if (n.addEventListener) {
                n.addEventListener(l, m, false)
            } else {
                if (n.attachEvent) {
                    n.attachEvent("on" + l, m)
                }
            }
        }
    };
    this.removeListener = function (p, m, n) {
        for (var l = 0, o; o = b[l]; l++) {
            if (o.o == p && o.t == m && o.l == n) {
                b.splice(l, 1);
                break
            }
        }
        if (!(m == c && (d || g))) {
            if (p.removeEventListener) {
                p.removeEventListener(m, n, false)
            } else {
                if (p.detachEvent) {
                    p.detachEvent("on" + m, n)
                }
            }
        }
    };
    var i = function () {
        for (var m = 0, l; l = b[m]; m++) {
            if (l.t != c) {
                a.Events.removeListener(l.o, l.t, l.l)
            }
        }
    };
    var f = function () {
        if (h.readyState == "interactive") {
            function l() {
                h.detachEvent(j, l);
                i()
            }
            h.attachEvent(j, l);
            k.setTimeout(function () {
                h.detachEvent(j, l)
            }, 0)
        }
    };
    if (d || g) {
        (function () {
            try {
                if ((d && h.body) || !/loaded|complete/.test(h.readyState)) {
                    h.documentElement.doScroll("left")
                }
            } catch (m) {
                return setTimeout(arguments.callee, 0)
            }
            for (var l = 0, m; m = b[l]; l++) {
                if (m.t == c) {
                    m.l.call(null)
                }
            }
        })()
    }
    if (d) {
        if(k.attachEvent) k.attachEvent("onbeforeunload", f)
    }
    this.addListener(k, "unload", i)
};
fwdal.util.Functions = new function () {
    this.toString = function () {
        return "[class Functions]"
    };
    this.bind = function (f, b, e) {
        for (var c = 2, d, a = []; d = arguments[c]; c++) {
            a.push(d)
        }
        return function () {
            return f.apply(b, a)
        }
    }
};
var FWDRLEvent = function (d) {
    this.toString = function () {
        return "[object FWDRLEvent]"
    };
    this.type = d;
    this.target = [FWDRLDL][0];
    this.value = FWDRLDL.getValue();
    this.path = FWDRLDL.getPath();
    this.pathNames = FWDRLDL.getPathNames();
    this.parameters = {};
    var c = FWDRLDL.getParameterNames();
    for (var b = 0, a = c.length; b < a; b++) {
        this.parameters[c[b]] = FWDRLDL.getParameter(c[b])
    }
    this.parameterNames = c
};
FWDRLEvent.INIT = "init";
FWDRLEvent.CHANGE = "change";
FWDRLEvent.INTERNAL_CHANGE = "internalChange";
FWDRLEvent.EXTERNAL_CHANGE = "externalChange";
var FWDRLDL = new function () {

        'use strict';

        var _getHash = function () {
            var index = _l.href.indexOf("#");
            return index != -1 ? _ec(_dc(_l.href.substr(index + 1))) : ""
        };

        var _getWindow = function () {
            try {
                top.document;
                return top
            } catch (e) {
                return window
            }
        };

        var _strictCheck = function (value, force) {
            if (_opts.strict) {
                value = force ? (value.substr(0, 1) != "/" ? "/" + value : value) : (value == "" ? "/" : value)
            }
            return value
        };

        var _ieLocal = function (value, direction) {
            return (_msie && _l.protocol == "file:") ? (direction ? _value.replace(/\?/, "%3F") : _value.replace(/%253F/, "?")) : value
        };

        var _searchScript = function (el) {
            if (el.childNodes) {
                for (var i = 0, l = el.childNodes.length, s; i < l; i++) {
                    if (el.childNodes[i].src) {
                        _url = String(el.childNodes[i].src)
                    }
                    if (s = _searchScript(el.childNodes[i])) {
                        return s
                    }
                }
            }
        };

        var _titleCheck = function () {
            if (_d.title != _title && _d.title.indexOf("#") != -1) {
                _d.title = _title
            }
        };

        var _listen = function () {
            if (!_silent) {
                var hash = _getHash();
                var diff = !(_value == hash);
                if (_safari && _version < 523) {
                    if (_length != _h.length) {
                        _length = _h.length;
                        if (typeof _stack[_length - 1] != UNDEFINED) {
                            _value = _stack[_length - 1]
                        }
                        _update.call(this, false)
                    }
                } else {
                    if (_msie && diff) {
                        if (_version < 7) {
                            _l.reload()
                        } else {
                            this.setValue(hash)
                        }
                    } else {
                        if (diff) {
                            _value = hash;
                            _update.call(this, false)
                        }
                    }
                } if (_msie) {
                    _titleCheck.call(this)
                }
            }
        };

        var _bodyClick = function (e) {
            if (_popup.length > 0) {
                var popup = window.open(_popup[0], _popup[1], eval(_popup[2]));
                if (typeof _popup[3] != UNDEFINED) {
                    eval(_popup[3])
                }
            }
            _popup = []
        };

        var _swfChange = function () {
            for (var i = 0, id, obj, value = FWDRLDL.getValue(), setter = "setFWDRLAddressValue"; id = _ids[i]; i++) {
                obj = document.getElementById(id);
                if (obj) {
                    if (obj.parentNode && typeof obj.parentNode.so != UNDEFINED) {
                        obj.parentNode.so.call(setter, value)
                    } else {
                        if (!(obj && typeof obj[setter] != UNDEFINED)) {
                            var objects = obj.getElementsByTagName("object");
                            var embeds = obj.getElementsByTagName("embed");
                            obj = ((objects[0] && typeof objects[0][setter] != UNDEFINED) ? objects[0] : ((embeds[0] && typeof embeds[0][setter] != UNDEFINED) ? embeds[0] : null))
                        }
                        if (obj) {
                            obj[setter](value)
                        }
                    }
                } else {
                    if (obj = document[id]) {
                        if (typeof obj[setter] != UNDEFINED) {
                            obj[setter](value)
                        }
                    }
                }
            }
        };

        var _jsDispatch = function (type) {
            this.dispatchEvent(new FWDRLEvent(type));
            type = type.substr(0, 1).toUpperCase() + type.substr(1);
            if (typeof this["on" + type] == FUNCTION) {
                this["on" + type]()
            }
        };

        var _jsInit = function () {
            if (_util.Browser.isSafari()) {
                _d.body.addEventListener("click", _bodyClick)
            }
            _jsDispatch.call(this, "init")
        };

        var _jsChange = function () {
            _swfChange();
            _jsDispatch.call(this, "change")
        };

        var _update = function (internal) {
            _jsChange.call(this);
            if (internal) {
                _jsDispatch.call(this, "internalChange")
            } else {
                _jsDispatch.call(this, "externalChange")
            }
            _st(_functions.bind(_track, this), 10)
        };

        var _track = function () {
            var value = (_l.pathname + (/\/$/.test(_l.pathname) ? "" : "/") + this.getValue()).replace(/\/\//, "/").replace(/^\/$/, "");
            var fn = _t[_opts.tracker];
            if (typeof fn == FUNCTION) {
                fn(value)
            } else {
                if (typeof _t.pageTracker != UNDEFINED && typeof _t.pageTracker._trackPageview == FUNCTION) {
                    _t.pageTracker._trackPageview(value)
                } else {
                    if (typeof _t.urchinTracker == FUNCTION) {
                        _t.urchinTracker(value)
                    }
                }
            }
        };

        var _htmlWrite = function () {
            var doc = _frame.contentWindow.document;
            doc.open();
            doc.write("<html><head><title>" + _d.title + "</title><script>var " + ID + ' = "' + _getHash() + '";<\/script></head></html>');
            doc.close()
        };

        var _htmlLoad = function () {
            var win = _frame.contentWindow;
            var src = win.location.href;
            _value = (typeof win[ID] != UNDEFINED ? win[ID] : "");
            if (_value != _getHash()) {
                _update.call(FWDRLDL, false);
                _l.hash = _ieLocal(_value, TRUE)
            }
        };

        var _load = function () {
        
            if (!_loaded) {
                _loaded = TRUE;
                if (_msie && _version < 8) {
                    var frameset = _d.getElementsByTagName("frameset")[0];
                    _frame = _d.createElement((frameset ? "" : "i") + "frame");
                    if (frameset) {
                        frameset.insertAdjacentElement("beforeEnd", _frame);
                        frameset[frameset.cols ? "cols" : "rows"] += ",0";
                        _frame.src = "javascript:false";
                        _frame.noResize = true;
                        _frame.frameBorder = _frame.frameSpacing = 0
                    } else {
                        _frame.src = "javascript:false";
                        _frame.style.display = "none";
                        _d.body.insertAdjacentElement("afterBegin", _frame)
                    }
                    _st(function () {
                        _events.addListener(_frame, "load", _htmlLoad);
                        if (typeof _frame.contentWindow[ID] == UNDEFINED) {
                            _htmlWrite()
                        }
                    }, 50)
                } else {
                    if (_safari) {
                        if (_version < 418) {
                            _d.body.innerHTML += '<form id="' + ID + '" style="position:absolute;top:-9999px;" method="get"></form>';
                            _form = _d.getElementById(ID)
                        }
                        if (typeof _l[ID] == UNDEFINED) {
                            _l[ID] = {}
                        }
                        if (typeof _l[ID][_l.pathname] != UNDEFINED) {
                            _stack = _l[ID][_l.pathname].split(",")
                        }
                    }
                }
                _st(_functions.bind(function () {
                    _jsInit.call(_s);
                    _jsChange.call(_s);
                    _track.call(_s)
                }, _s), 1);
                if (_msie && _version >= 8) {
                    _d.body.onhashchange = _functions.bind(_listen, _s);
                    _si(_functions.bind(_titleCheck, _s), 50)
                } else {
                    _si(_functions.bind(_listen, _s), 50)
                }
            }
        };

        var ID = "swfaddress",
            FUNCTION = "function",
            UNDEFINED = "undefined",
            TRUE = true,
            FALSE = false,
            _util = fwdal.util,
            _browser = _util.Browser,
            _events = _util.Events,
            _functions = _util.Functions,
            _version = _browser.getVersion(),
            _msie = _browser.isMSIE(),
            _mozilla = _browser.isMozilla(),
            _opera = _browser.isOpera(),
            _safari = _browser.isSafari(),
            _supported = TRUE,
            _t = _getWindow(),
            _d = _t.document,
            _h = _t.history,
            _l = _t.location,
            _si = setInterval,
            _st = setTimeout,
            _dc = decodeURI,
            _ec = encodeURI,
            _frame, _form, _url, _title = _d.title,
            _length = _h.length,
            _silent = FALSE,
            _loaded = FALSE,
            _justset = TRUE,
            _juststart = TRUE,
            _ref = this,
            _stack = [],
            _ids = [],
            _popup = [],
            _listeners = {}, _value = _getHash(),
            _opts = {
                history: TRUE,
                strict: TRUE
            };
        if (_msie && _d.documentMode && _d.documentMode != _version) {
            _version = _d.documentMode != 8 ? 7 : 8
        }

        var _s = this;
        if (_supported) {
            if (_opera) {
                history.navigationMode = "compatible"
            }
            for (var i = 1; i < _length; i++) {
                _stack.push("")
            }
            _stack.push(_getHash());
            if (_msie && _l.hash != _getHash()) {
                _l.hash = "#" + _ieLocal(_getHash(), TRUE)
            }
            _searchScript(document);
            var _qi = _url ? _url.indexOf("?") : -1;
            if (_qi != -1) {
                var param, params = _url.substr(_qi + 1).split("&");
                for (var i = 0, p; p = params[i]; i++) {
                    param = p.split("=");
                    if (/^(history|strict)$/.test(param[0])) {
                        _opts[param[0]] = (isNaN(param[1]) ? /^(true|yes)$/i.test(param[1]) : (parseInt(param[1]) != 0))
                    }
                    if (/^tracker$/.test(param[0])) {
                        _opts[param[0]] = param[1]
                    }
                }
            }
            if (_msie) {
                _titleCheck.call(this)
            }

            if(window == _t) {
                _events.addListener(document, "DOMContentLoaded", _functions.bind(_load, this))
            }
            _events.addListener(_t, "load", _functions.bind(_load, this))

            if(document.readyState == 'complete'){
                _load();
            }
        } else {
            if ((!_supported && _l.href.indexOf("#") != -1) || (_safari && _version < 418 && _l.href.indexOf("#") != -1 && _l.search != "")) {
                _d.open();
                _d.write('<html><head><meta http-equiv="refresh" content="0;url=' + _l.href.substr(0, _l.href.indexOf("#")) + '" /></head></html>');
                _d.close()
            } else {
                _track()
            }
        }
        this.toString = function () {
            return "[class FWDRLDL]"
        };
        this.back = function () {
            _h.back()
        };
        this.forward = function () {
            _h.forward()
        };
        this.up = function () {
            var path = this.getPath();
            this.setValue(path.substr(0, path.lastIndexOf("/", path.length - 2) + (path.substr(path.length - 1) == "/" ? 1 : 0)))
        };
        this.go = function (delta) {
            _h.go(delta)
        };
        this.href = function (url, target) {
            target = typeof target != UNDEFINED ? target : "_self";
            if (target == "_self") {
                self.location.href = url
            } else {
                if (target == "_top") {
                    _l.href = url
                } else {
                    if (target == "_blank") {
                        window.open(url)
                    } else {
                        _t.frames[target].location.href = url
                    }
                }
            }
        };
        this.popup = function (url, name, options, handler) {
            try {
                var popup = window.open(url, name, eval(options));
                if (typeof handler != UNDEFINED) {
                    eval(handler)
                }
            } catch (ex) {}
            _popup = arguments
        };
        this.getIds = function () {
            return _ids
        };
        this.getId = function (index) {
            return _ids[0]
        };
        this.setId = function (id) {
            _ids[0] = id
        };
        this.addId = function (id) {
            this.removeId(id);
            _ids.push(id)
        };
        this.removeId = function (id) {
            for (var i = 0; i < _ids.length; i++) {
                if (id == _ids[i]) {
                    _ids.splice(i, 1);
                    break
                }
            }
        };
        this.addEventListener = function (type, listener) {
            if (typeof _listeners[type] == UNDEFINED) {
                _listeners[type] = []
            }
            _listeners[type].push(listener)
        };
        this.removeEventListener = function (type, listener) {
            if (typeof _listeners[type] != UNDEFINED) {
                for (var i = 0, l; l = _listeners[type][i]; i++) {
                    if (l == listener) {
                        break
                    }
                }
                _listeners[type].splice(i, 1)
            }
        };
        this.dispatchEvent = function (event) {
            if (this.hasEventListener(event.type)) {
                event.target = this;
                for (var i = 0, l; l = _listeners[event.type][i]; i++) {
                    l(event)
                }
                return TRUE
            }
            return FALSE
        };
        this.hasEventListener = function (type) {
            return (typeof _listeners[type] != UNDEFINED && _listeners[type].length > 0)
        };
        this.getBaseURL = function () {
            var url = _l.href;
            if (url.indexOf("#") != -1) {
                url = url.substr(0, url.indexOf("#"))
            }
            if (url.substr(url.length - 1) == "/") {
                url = url.substr(0, url.length - 1)
            }
            return url
        };
        this.getStrict = function () {
            return _opts.strict
        };
        this.setStrict = function (strict) {
            _opts.strict = strict
        };
        this.getHistory = function () {
            return _opts.history
        };
        this.setHistory = function (history) {
            _opts.history = history
        };
        this.getTracker = function () {
            return _opts.tracker
        };
        this.setTracker = function (tracker) {
            _opts.tracker = tracker
        };
        this.getTitle = function () {
            return _d.title
        };
        this.setTitle = function (title) {
            if (!_supported) {
                return null
            }
            if (typeof title == UNDEFINED) {
                return
            }
            if (title == "null") {
                title = ""
            }
            title = _dc(title);
            _st(function () {
                _title = _d.title = title;
                if (_juststart && _frame && _frame.contentWindow && _frame.contentWindow.document) {
                    _frame.contentWindow.document.title = title;
                    _juststart = FALSE
                }
                if (!_justset && _mozilla) {
                    _l.replace(_l.href.indexOf("#") != -1 ? _l.href : _l.href + "#")
                }
                _justset = FALSE
            }, 10)
        };
        this.getStatus = function () {
            return _t.status
        };
        this.setStatus = function (status) {
            if (!_supported) {
                return null
            }
            if (typeof status == UNDEFINED) {
                return
            }
            if (status == "null") {
                status = ""
            }
            status = _dc(status);
            if (!_safari) {
                status = _strictCheck((status != "null") ? status : "", TRUE);
                if (status == "/") {
                    status = ""
                }
                if (!(/http(s)?:\/\//.test(status))) {
                    var index = _l.href.indexOf("#");
                    status = (index == -1 ? _l.href : _l.href.substr(0, index)) + "#" + status
                }
                _t.status = status
            }
        };
        this.resetStatus = function () {
            _t.status = ""
        };
        this.getValue = function () {
            if (!_supported) {
                return null
            }
            return _dc(_strictCheck(_ieLocal(_value, FALSE), FALSE))
        };
        this.setValue = function (value) {
            if (!_supported) {
                return null
            }
            if (typeof value == UNDEFINED) {
                return
            }
            if (value == "null") {
                value = ""
            }
            value = _ec(_dc(_strictCheck(value, TRUE)));
            if (value == "/") {
                value = ""
            }
            if (_value == value) {
                return
            }
            _justset = TRUE;
            _value = value;
            _silent = TRUE;
            _update.call(FWDRLDL, true);
            _stack[_h.length] = _value;
            
           
                if (_value != _getHash()) {
                    if (_opts.history) {
                        _l.hash = "#" + _dc(_ieLocal(_value, TRUE))
                    } else {
                        _l.replace("#" + _dc(_value))
                    }
                }
            if ((_msie && _version < 8) && _opts.history) {
                _st(_htmlWrite, 50)
            }
            if (_safari) {
                _st(function () {
                    _silent = FALSE
                }, 1)
            } else {
                _silent = FALSE
            }
        
        };
        this.getPath = function () {
            var value = this.getValue();
            if (value.indexOf("?") != -1) {
                return value.split("?")[0]
            } else {
                if (value.indexOf("#") != -1) {
                    return value.split("#")[0]
                } else {
                    return value
                }
            }
        };
        this.getPathNames = function () {
            var path = this.getPath(),
                names = path.split("/");
            if (path.substr(0, 1) == "/" || path.length == 0) {
                names.splice(0, 1)
            }
            if (path.substr(path.length - 1, 1) == "/") {
                names.splice(names.length - 1, 1)
            }
            return names
        };
        this.getQueryString = function () {
            var value = this.getValue(),
                index = value.indexOf("?");
            if (index != -1 && index < value.length) {
                return value.substr(index + 1)
            }
        };
        this.getParameter = function (param) {
            var value = this.getValue();
            var index = value.indexOf("?");
            if (index != -1) {
                value = value.substr(index + 1);
                var p, params = value.split("&"),
                    i = params.length,
                    r = [];
                while (i--) {
                    p = params[i].split("=");
                    if (p[0] == param) {
                        r.push(p[1])
                    }
                }
                if (r.length != 0) {
                    return r.length != 1 ? r : r[0]
                }
            }
        };
        this.getParameterNames = function () {
            var value = this.getValue();
            var index = value.indexOf("?");
            var names = [];
            if (index != -1) {
                value = value.substr(index + 1);
                if (value != "" && value.indexOf("=") != -1) {
                    var params = value.split("&"),
                        i = 0;
                    while (i < params.length) {
                        names.push(params[i].split("=")[0]);
                        i++
                    }
                }
            }
            return names
        };
        this.onInit = null;
        this.onChange = null;
        this.onInternalChange = null;
        this.onExternalChange = null;
        (function () {
            var _args;
            if (typeof FlashObject != UNDEFINED) {
                SWFObject = FlashObject
            }
            if (typeof SWFObject != UNDEFINED && SWFObject.prototype && SWFObject.prototype.write) {
                var _s1 = SWFObject.prototype.write;
                SWFObject.prototype.write = function () {
                    _args = arguments;
                    if (this.getAttribute("version").major < 8) {
                        this.addVariable("$swfaddress", FWDRLDL.getValue());
                        ((typeof _args[0] == "string") ? document.getElementById(_args[0]) : _args[0]).so = this
                    }
                    var success;
                    if (success = _s1.apply(this, _args)) {
                        _ref.addId(this.getAttribute("id"))
                    }
                    return success
                }
            }
            if (typeof swfobject != UNDEFINED) {
                var _s2r = swfobject.registerObject;
                swfobject.registerObject = function () {
                    _args = arguments;
                    _s2r.apply(this, _args);
                    _ref.addId(_args[0])
                };
                var _s2c = swfobject.createSWF;
                swfobject.createSWF = function () {
                    _args = arguments;
                    var swf = _s2c.apply(this, _args);
                    if (swf) {
                        _ref.addId(_args[0].id)
                    }
                    return swf
                };
                var _s2e = swfobject.embedSWF;
                swfobject.embedSWF = function () {
                    _args = arguments;
                    if (typeof _args[8] == UNDEFINED) {
                        _args[8] = {}
                    }
                    if (typeof _args[8].id == UNDEFINED) {
                        _args[8].id = _args[1]
                    }
                    _s2e.apply(this, _args);
                    _ref.addId(_args[8].id)
                }
            }
            if (typeof UFO != UNDEFINED) {
                var _u = UFO.create;
                UFO.create = function () {
                    _args = arguments;
                    _u.apply(this, _args);
                    _ref.addId(_args[0].id)
                }
            }
            if (typeof AC_FL_RunContent != UNDEFINED) {
                var _a = AC_FL_RunContent;
                AC_FL_RunContent = function () {
                    _args = arguments;
                    _a.apply(this, _args);
                    for (var i = 0, l = _args.length; i < l; i++) {
                        if (_args[i] == "id") {
                            _ref.addId(_args[i + 1])
                        }
                    }
                }
            }
        })()
    };/**
 * Revolution Lightbox PACKAGED v3.0
 * Display Object.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function (window){

	/*
	 * @ type values: div, img.
	 * @ positon values: relative, absolute.
	 * @ positon values: hidden.
	 * @ display values: block, inline-block, _s applies only if the position is relative.
	 */
	var FWDRLDO = function(type, position, overflow, trldo){

		'use strict';
		
		var _s = this;
		_s.listeners = {events_ar:[]};

		if(type == "div" || type == "img" || type == "canvas" || type == "iframe"){
			_s.type = type;	
		}else{
			throw Error("Type is not valid! " + type);
		}
	
		_s.children_ar = [];
		_s.position = position || "absolute";
		_s.overflow = overflow || "hidden";
		_s.trldo = trldo;
		
		_s.visible = true;
		_s.x = _s.y = _s.w = _s.h = 0;
		_s.scale = _s.alpha = 1;
		_s.rotation = 0;
		_s.hasTransform3d_bl =  FWDRLUtils.hasTransform3d;
		_s.hasTransform2d_bl =  FWDRLUtils.hasTransform2d;
		

		/**
	 	 * Initialize.
	 	 */
		_s.init = function(){
			_s.setScreen();
		};	
		

		/**
	 	 * Check for transform type.
	 	 */
		_s.getTransform = function() {
		    var properties = ['transform', 'msTransform', 'WebkitTransform', 'MozTransform', 'OTransform'];
		    var p;
		    while (p = properties.shift()) {
		       if (typeof _s.screen.style[p] !== 'undefined') {
		            return p;
		       }
		    }
		    return false;
		};
		
		
		/**
	 	 * Set the screen.
	 	 */
		_s.setScreen = function(element){
			if(_s.type == "img" && element){
				_s.screen = element;
				_s.setMainProperties();
			}else{
				_s.screen = document.createElement(_s.type);
				_s.setMainProperties();
			}
		};
		
		
		/**
	 	 * Set main properties.
	 	 */
		_s.setMainProperties = function(){
			
			_s.transform = _s.getTransform();
			_s.setPosition(_s.position);
			_s.setOverflow(_s.overflow);
			if(_s.opacityType == "opacity") _s.isHtml5_bl = true;
			
			_s.screen.style.left = "0px";
			_s.screen.style.top = "0px";
			_s.screen.style.margin = "0px";
			_s.screen.style.padding = "0px";
			_s.screen.style.maxWidth = "none";
			_s.screen.style.maxHeight = "none";
			_s.screen.style.border = "none";
			_s.screen.style.lineHeight = "1";
			_s.screen.style.backgroundColor = "transparent";
			_s.screen.style.backfaceVisibility = "hidden";
			_s.screen.style.webkitBackfaceVisibility = "hidden";
			_s.screen.style.MozBackfaceVisibility = "hidden";	
			_s.screen.style.transition = "none";
			_s.screen.style.webkitTransition = "none";
			_s.screen.style.MozTransition = "none";
			_s.screen.style.OTransition = "none";
			
			if(type == "img"){
				_s.setWidth(_s.screen.width);
				_s.setHeight(_s.screen.height);
			}
		};
			
		_s.setBackfaceVisibility =  function(){
			_s.screen.style.backfaceVisibility = "visible";
			_s.screen.style.webkitBackfaceVisibility = "visible";
			_s.screen.style.MozBackfaceVisibility = "visible";		
		};
		

		/**
	 	 * Set / get various properties.
	 	 */
		_s.setSelectable = function(val){
			if(!val){
				_s.screen.style.userSelect = "none";
				_s.screen.style.MozUserSelect = "none";
				_s.screen.style.webkitUserSelect = "none";
				_s.screen.style.khtmlUserSelect = "none";
				_s.screen.style.oUserSelect = "none";
				_s.screen.style.msUserSelect = "none";
				_s.screen.msUserSelect = "none";
				_s.screen.ondragstart = function(e){return false;};
				_s.screen.onselectstart = function(){return false;};
				_s.screen.ontouchstart = function(){return false;};
				_s.screen.style.webkitTouchCallout='none';
				_s.hasBeenSetSelectable = true;
			}
		};
		
		_s.getScreen = function(){
			return _s.screen;
		};
		
		_s.setVisible = function(val){
			_s.visible = val;
			if(_s.visible == true){
				_s.screen.style.visibility = "visible";
			}else{
				_s.screen.style.visibility = "hidden";
			}
		};
		
		_s.getVisible = function(){
			return _s.visible;
		};
		
		_s.setResizableSizeAfterParent = function(){
			_s.screen.style.width = "100%";
			_s.screen.style.height = "100%";
		};
		
		_s.style = function(){
			return _s.screen.style;
		};
		
		_s.setOverflow = function(val){
			_s.overflow = val;
			_s.screen.style.overflow = _s.overflow;
		};
		
		_s.setPosition = function(val){
			_s.position = val;
			_s.screen.style.position = _s.position;
		};
		
		_s.setDisplay = function(val){
			_s.display = val;
			_s.screen.style.display = _s.display;
		};
		
		_s.setButtonMode = function(val){
			_s.buttonMode = val;
			if(_s.buttonMode ==  true){
				_s.screen.style.cursor = "pointer";
			}else{
				_s.screen.style.cursor = "default";
			}
		};
		
		_s.setBkColor = function(val){
			_s.screen.style.backgroundColor = val;
		};
		
		_s.setInnerHTML = function(val){
			_s.innerHTML = val;
			_s.screen.innerHTML = _s.innerHTML;
		};
		
		_s.getInnerHTML = function(){
			return _s.innerHTML;
		};
		
		_s.getRect = function(){
			return _s.screen.getBoundingClientRect();
		};
		
		_s.setAlpha = function(val){
			_s.alpha = val;
			_s.screen.style.opacity = _s.alpha;
		};
		
		_s.getAlpha = function(){
			return _s.alpha;
		};
		
		_s.getRect = function(){
			return _s.screen.getBoundingClientRect();
		};
		
		_s.getGlobalX = function(){
			return _s.getRect().left;
		};
		
		_s.getGlobalY = function(){
			return _s.getRect().top;
		};
		
		_s.setX = function(val){
			_s.x = val;
			if(_s.hasTransform3d_bl){
				if(_s.trldo){
					_s.screen.style[_s.transform] = 'translate3d(' + _s.x + 'px,' + _s.y + 'px,0) scale(' + _s.scale + ' , ' + _s.scale + ') rotate(' + _s.rotation + 'deg)';
				}else{
					_s.screen.style[_s.transform] = 'translate3d(' + _s.x + 'px,' + _s.y + 'px,0)';
				}
			}else if(_s.hasTransform2d_bl){
				if(_s.trldo){
					_s.screen.style[_s.transform] = "translate(" + _s.x + "px," + _s.y + "px) scale(" + _s.scale + " , " + _s.scale + ") rotate(" + _s.rotation + "deg)";
				}else{
					_s.screen.style[_s.transform] = 'translate(' + _s.x + 'px,' + _s.y + 'px)';
				}
			}else{
				_s.screen.style.left = _s.x + "px";
			}
		};
		
		_s.getX = function(){
			return  _s.x;
		};
		
		_s.setY = function(val){
			_s.y = val;
			if(_s.hasTransform3d_bl && !_s.trldo){
				if(_s.trldo){
					_s.screen.style[_s.transform] = 'translate3d(' + _s.x + 'px,' + _s.y + 'px,0) scale(' + _s.scale + ' , ' + _s.scale + ') rotate(' + _s.rotation + 'deg)';
				}else{
					_s.screen.style[_s.transform] = 'translate3d(' + _s.x + 'px,' + _s.y + 'px,0)';
				}
			}else if(_s.hasTransform2d_bl){
				if(_s.trldo){
					_s.screen.style[_s.transform] = "translate(" + _s.x + "px," + _s.y + "px) scale(" + _s.scale + " , " + _s.scale + ") rotate(" + _s.rotation + "deg)";
				}else{
					_s.screen.style[_s.transform] = 'translate(' + _s.x + 'px,' + _s.y + 'px)';
				}
			}else{
				_s.screen.style.top = _s.y + "px";
			}
		};
		
		_s.getY = function(){
			return  _s.y;
		};

		_s.setScale2 = function(val){
			_s.scale = val;
			if(_s.hasTransform2d_bl && _s.trldo){
				_s.screen.style[_s.transform] = "translate(" + _s.x + "px," + _s.y + "px) scale(" + _s.scale + " , " + _s.scale + ") rotate(" + _s.rotation + "deg)";
			}
		};
		
		_s.getScale = function(){
			return  _s.scale;
		};
		
		_s.setRotation = function(val){
			_s.rotation = val;
			if(_s.hasTransform2d_bl && _s.trldo){
				_s.screen.style[_s.transform] = "translate(" + _s.x + "px," + _s.y + "px) scale(" + _s.scale + " , " + _s.scale + ") rotate(" + _s.rotation + "deg)";
			}
		};
		
		_s.setWidth = function(val){
			_s.w = val;
			if(_s.type == "img"){
				_s.screen.width = _s.w;
			}else{
				_s.screen.style.width = _s.w + "px";
			}
		};
		
		_s.setWidth = function(val){
			_s.w = val;
			if(_s.type == "img"){
				_s.screen.width = _s.w;
				_s.screen.style.width = _s.w + "px";
			}else{
				_s.screen.style.width = _s.w + "px";
			}
		
		};
		
		_s.getWidth = function(){
			if(_s.type == "div"){
				if(_s.screen.offsetWidth != 0) return  _s.screen.offsetWidth;
				return _s.w;
			}else if(_s.type == "img"){
				if(_s.screen.offsetWidth != 0) return  _s.screen.offsetWidth;
				if(_s.screen.width != 0) return  _s.screen.width;
				return _s._w;
			}else if( _s.type == "canvas"){
				if(_s.screen.offsetWidth != 0) return  _s.screen.offsetWidth;
				return _s.w;
			}
		};
		
		_s.setHeight = function(val){
			_s.h = val;
			if(_s.type == "img"){
				_s.screen.height = _s.h;
				_s.screen.style.height = _s.h + "px";
			}else{
				_s.screen.style.height = _s.h + "px";
			}
		};
		
		_s.getHeight = function(){
			if(_s.type == "div"){
				if(_s.screen.offsetHeight != 0) return  _s.screen.offsetHeight;
				return _s.h;
			}else if(_s.type == "img"){
				if(_s.screen.offsetHeight != 0) return  _s.screen.offsetHeight;
				if(_s.screen.height != 0) return  _s.screen.height;
				return _s.h;
			}else if(_s.type == "canvas"){
				if(_s.screen.offsetHeight != 0) return  _s.screen.offsetHeight;
				return _s.h;
			}
		};

		
		/**
	 	 * DOM manipulation.
	 	 */
		_s.addChild = function(e){
			if(_s.contains(e)){	
				_s.children_ar.splice(FWDRLUtils.indexOfArray(_s.children_ar, e), 1);
				_s.children_ar.push(e);
				_s.screen.appendChild(e.screen);
			}else{
				_s.children_ar.push(e);
				_s.screen.appendChild(e.screen);
			}
		};
		
		_s.removeChild = function(e){
			if(_s.contains(e)){
				_s.children_ar.splice(FWDRLUtils.indexOfArray(_s.children_ar, e), 1);
				_s.screen.removeChild(e.screen);
			}else{
				throw Error("##removeChild()## Child dose't exist, it can't be removed!");
			};
		};
		
		_s.contains = function(e){
			if(FWDRLUtils.indexOfArray(_s.children_ar, e) == -1){
				return false;
			}else{
				return true;
			}
		};
		
		_s.addChildAt = function(e, index){
			if(_s.getNumChildren() == 0){
				_s.children_ar.push(e);
				_s.screen.appendChild(e.screen);
			}else if(index == 1){
				_s.screen.insertBefore(e.screen, _s.children_ar[0].screen);
				_s.screen.insertBefore(_s.children_ar[0].screen, e.screen);	
				if(_s.contains(e)){
					_s.children_ar.splice(FWDRLUtils.indexOfArray(_s.children_ar, e), 1, e);
				}else{
					_s.children_ar.splice(FWDRLUtils.indexOfArray(_s.children_ar, e), 0, e);
				}
			}else{
				if(index < 0  || index > _s.getNumChildren() -1) throw Error("##getChildAt()## Index out of bounds!");
				
				_s.screen.insertBefore(e.screen, _s.children_ar[index].screen);
				if(_s.contains(e)){
					_s.children_ar.splice(FWDRLUtils.indexOfArray(_s.children_ar, e), 1, e);
				}else{
					_s.children_ar.splice(FWDRLUtils.indexOfArray(_s.children_ar, e), 0, e);
				}
			}
		};
		
		_s.getChildAt = function(index){
			if(index < 0  || index > _s.getNumChildren() -1) throw Error("##getChildAt()## Index out of bounds!");
			if(_s.getNumChildren() == 0) throw Errror("##getChildAt## Child dose not exist!");
			return _s.children_ar[index];
		};
		
		_s.removeChildAtZero = function(){
			_s.screen.removeChild(_s.children_ar[0].screen);
			_s.children_ar.shift();
		};
		
		_s.getNumChildren = function(){
			return _s.children_ar.length;
		};
		
		
		/**
	 	 * Event disaptcher.
	 	 */
		_s.addListener = function (type, listener){
	    	
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	if(typeof listener != "function") throw Error("listener must be of type Function.");
	    	
	    	
	        var event = {};
	        event.type = type;
	        event.listener = listener;
	        event.target = _s;
	        _s.listeners.events_ar.push(event);
	    };
	    
	    _s.dispatchEvent = function(type, props){
	    	if(_s.listeners == null) return;
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	
	        for (var i=0, len=_s.listeners.events_ar.length; i < len; i++){
	        	if(_s.listeners.events_ar[i].target === _s && _s.listeners.events_ar[i].type === type){		
	    	        if(props){
	    	        	for(var prop in props){
	    	        		_s.listeners.events_ar[i][prop] = props[prop];
	    	        	}
	    	        }
	        		_s.listeners.events_ar[i].listener.call(_s, _s.listeners.events_ar[i]);
	        	}
	        }
	    };
	    
	    _s.removeListener = function(type, listener){
	    	
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	if(typeof listener != "function") throw Error("listener must be of type Function." + type);
	    	
	        for (var i=0, len=_s.listeners.events_ar.length; i < len; i++){
	        	if(_s.listeners.events_ar[i].target === _s 
	        			&& _s.listeners.events_ar[i].type === type
	        			&& _s.listeners.events_ar[i].listener ===  listener
	        	){
	        		_s.listeners.events_ar.splice(i,1);
	        		break;
	        	}
	        }  
	    };
	  
		
		/**
	 	 * Destroy.
	 	 */
		_s.destroy = function(){
			if(_s.hasBeenSetSelectable){
				_s.screen.ondragstart = null;
				_s.screen.onselectstart = null;
				_s.screen.ontouchstart = null;
			};
		
			_s.listeners = null;
			_s.listeners = null;
			_s.children_ar = null;
			_s = null;
		};
		
		_s.init();
	};
	
	window.FWDRLDO = FWDRLDO;
}(window));(function (){
	
	var FWDRLEventDispatcher = function (){

		'use strict';
		
	    this.listeners = {events_ar:[]};
	     
	    this.addListener = function (type, listener){
	    	
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	if(typeof listener != "function") throw Error("listener must be of type Function.");
	    	
	    	
	        var event = {};
	        event.type = type;
	        event.listener = listener;
	        event.target = this;
	        this.listeners.events_ar.push(event);
	    };
	    
	    this.dispatchEvent = function(type, props){
	    	if(this.listeners == null) return;
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	
	        for (var i=0, len=this.listeners.events_ar.length; i < len; i++){
	        	if(this.listeners.events_ar[i].target === this && this.listeners.events_ar[i].type === type){		
	    	        if(props){
	    	        	for(var prop in props){
	    	        		this.listeners.events_ar[i][prop] = props[prop];
	    	        	}
	    	        }
	        		this.listeners.events_ar[i].listener.call(this, this.listeners.events_ar[i]);
	        	}
	        }
	    };
	    
	   this.removeListener = function(type, listener){
	    	
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	if(typeof listener != "function") throw Error("listener must be of type Function." + type);
	    	
	        for (var i=0, len=this.listeners.events_ar.length; i < len; i++){
	        	if(this.listeners.events_ar[i].target === this 
	        			&& this.listeners.events_ar[i].type === type
	        			&& this.listeners.events_ar[i].listener ===  listener
	        	){
	        		this.listeners.events_ar.splice(i,1);
	        		break;
	        	}
	        }  
	    };
	    
	    /* destroy */
	    this.destroy = function(){
	    	this.listeners = null;
	    	
	    	this.addListener = null;
		    this.dispatchEvent = null;
		    this.removeListener = null;
	    };
	    
	};	
	
	window.FWDRLEventDispatcher = FWDRLEventDispatcher;
}(window));/**
 * Revolution Lightbox PACKAGED v3.0
 * Hider manager to test touch or mouse inactivity.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function (window){
	
    var FWDRLHider = function(screenToTest, hideDelay){

    	'use strict';
    	
    	var _s = this;
    	var prototype = FWDRLHider.prototype;
   
    	_s.screenToTest = screenToTest;
    	_s.hideDelay = hideDelay;
    	_s.globalX = 0;
    	_s.globalY = 0;
	
    	
    	_s.dspOnceShow = true;
    	_s.isStopped_bl = true;
    	_s.isHidden_bl = false;
    	_s.isMbl = FWDRLUtils.isMbl;
    	_s.hasPointerEvt = FWDRLUtils.hasPointerEvent;
    	
		_s.start = function(){
			_s.currentTime = new Date().getTime();
			clearInterval(_s.check_int);
			_s.check_int = setInterval(_s.update, 100);
			_s.addMouseOrTouchCheck();
			_s.isStopped_bl = false;
			window.addEventListener("click", _s.reset);	
		};
		
		_s.stop = function(){
			clearInterval(_s.check_int);
			_s.isStopped_bl = true;
			_s.removeMT();
			_s.removeMT2();
			window.removeEventListener("click", _s.reset);	
		};

		_s.clickMHU = function(){
			_s.dispatchEvent(FWDRLHider.SHOW);
		}
		
		_s.addMouseOrTouchCheck = function(){	
			if(_s.hasInitialTestEvents_bl) return;
			_s.hasInitialTestEvents_bl = true;
			if(_s.isMbl){
				if(_s.hasPointerEvt){
					_s.screenToTest.screen.addEventListener("pointerdown", _s.onMTUpdate);
					_s.screenToTest.screen.addEventListener("pointermove", _s.onMTUpdate);
				}else{
					_s.screenToTest.screen.addEventListener("touchstart", _s.onMTUpdate);
				}
			}else{
				window.addEventListener("mousemove", _s.onMTUpdate);
				window.addEventListener("click", _s.onMTUpdate);
			}
		};
		
		_s.removeMT = function(){	
			if(!_s.hasInitialTestEvents_bl) return;
			_s.hasInitialTestEvents_bl = false;
			if(_s.isMbl){
				if(_s.hasPointerEvt){
					_s.screenToTest.screen.removeEventListener("pointerdown", _s.onMTUpdate);
					_s.screenToTest.screen.removeEventListener("pointermove", _s.onMTUpdate);
				}else{
					_s.screenToTest.screen.removeEventListener("touchstart", _s.onMTUpdate);
				}
			}else{
				window.removeEventListener("mousemove", _s.onMTUpdate);
			}
		};
		
		_s.onMTUCheck2 = function(){	
			if(_s.addSecondTestEvents_bl) return;
			_s.addSecondTestEvents_bl = true;
			_s.screenToTest.screen.addEventListener("mousemove", _s.secondTestMoveDummy);
			_s.screenToTest.screen.addEventListener("click", _s.secondTestMoveDummy);
		};
		
		_s.removeMT2 = function(){	
			if(!_s.addSecondTestEvents_bl) return;
			_s.addSecondTestEvents_bl = false;
			_s.screenToTest.screen.removeEventListener("mousemove", _s.secondTestMoveDummy);
			_s.screenToTest.screen.removeEventListener("click", _s.secondTestMoveDummy);
		};
		
		_s.secondTestMoveDummy = function(){
			_s.removeMT2();
			_s.addMouseOrTouchCheck();
		};
		
		_s.onMTUpdate = function(e){
			var vmc = FWDRLUtils.getViewportMouseCoordinates(e);	
			
			if(_s.globalX != vmc.screenX
			   && _s.globalY != vmc.screenY){
				_s.currentTime = new Date().getTime();
			}
			
			_s.globalX = vmc.screenX;
			_s.globalY = vmc.screenY;
			
			if(!_s.isMbl){
				if(!FWDRLUtils.hitTest(_s.screenToTest.screen, _s.globalX, _s.globalY)){
					_s.removeMT();
					_s.onMTUCheck2();
				}
			}
		};
	
		_s.update = function(e){
			if(new Date().getTime() > _s.currentTime + _s.hideDelay){
				if(_s.dspOnceShow){	
					_s.dspOnceHide = true;
					_s.dspOnceShow = false;
					_s.isHidden_bl = true;
					_s.dispatchEvent(FWDRLHider.HIDE);
					clearTimeout(_s.hideCompleteId_to);
					_s.hideCompleteId_to = setTimeout(function(){
						_s.dispatchEvent(FWDRLHider.HIDE_COMPLETE);
					}, 1000);
				}
			}else{
				if(_s.dspOnceHide){
					clearTimeout(_s.hideCompleteId_to);
					_s.dspOnceHide = false;
					_s.dspOnceShow = true;
					_s.isHidden_bl = false;
					_s.dispatchEvent(FWDRLHider.SHOW);
				}
			}
		};

		_s.reset = function(){
			_s.isHidden_bl = false;
			clearTimeout(_s.hideCompleteId_to);
			_s.currentTime = new Date().getTime();
			_s.dispatchEvent(FWDRLHider.SHOW);
		};
		
     };
     
	 FWDRLHider.HIDE = "hide";
	 FWDRLHider.SHOW = "show";
	 FWDRLHider.HIDE_COMPLETE = "hideComplete";
	 
	 FWDRLHider.setPrototype = function(){
		 FWDRLHider.prototype = new FWDRLEventDispatcher();
	 };
	 

	 window.FWDRLHider = FWDRLHider;
}(window));/**
 * Revolution Lightbox PACKAGED v3.0
 * Info screen to show errors.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function (window){
	
	var FWDRLInfo = function(prt, warningIconPath){

		'use strict';
		
		var _s = this;
		_s.allowToRemove_bl = true;
		
		/**
		 * Initialize.
		 */
		_s.init = function(){
			_s.setResizableSizeAfterParent();
			_s.style().width = "80%";
		
			_s.textHolder_do = new FWDRLDO("div");
			if(!FWDRLUtils.isIEAndLessThen9) _s.textHolder_do.style().font = "Arial";
			_s.textHolder_do.style().wordWrap = "break-word";
			_s.textHolder_do.style().padding = "10px";
			_s.textHolder_do.style().paddingLeft = "42px";
			_s.textHolder_do.style().lineHeight = "18px";
			_s.textHolder_do.setBkColor("#EEEEEE");
			
			var img_img = new Image();
			img_img.src = warningIconPath;
			_s.img_do = new FWDRLDO("img");
			_s.img_do.setScreen(img_img);
			_s.img_do.setWidth(28);
			_s.img_do.setHeight(28);
			
			_s.addChild(_s.textHolder_do);
			_s.addChild(_s.img_do);
		};
		
		_s.showText = function(txt){
			if(!_s.isShowedOnce_bl){
				if(_s.screen.addEventListener){
					_s.screen.addEventListener("click", _s.closeWindow);
				}else if(_s.screen.attachEvent){
					_s.screen.attachEvent("onclick", _s.closeWindow);
				}
				_s.isShowedOnce_bl = true;
			}
			
			//_s.setX(-800);
			//if(_s.allowToRemove_bl){
			//	_s.textHolder_do.setInnerHTML(txt  + "<p style='margin:0px; padding-bottom:10px;'><font color='#FFFFFF'>Click or tap to close _s window.</font>");
		//	}else{
				
				_s.textHolder_do.setInnerHTML(txt);
			//}
			
			clearTimeout(_s.show_to);
			_s.show();
		};
		
		_s.show = function(){
			_s.isShowed = true;
			_s.setVisible(true);
			setTimeout(function(){
				_s.positionAndResize();
			}, 60);
		};
		
		_s.positionAndResize = function(){		
			_s.setHeight(_s.textHolder_do.getHeight());
			_s.img_do.setX(6);
			_s.img_do.setY(parseInt((_s.h - _s.img_do.h)/2));
	
		};
		
		_s.closeWindow = function(){
			if(!_s.allowToRemove_bl) return;
			_s.isShowed = false;
			clearTimeout(_s.show_to);
			try{prt.main_do.removeChild(_s);}catch(e){}
		};
		
		_s.init();
	};
	
		
	/**
	 * Set prototype.
	 */
	FWDRLInfo.setPrototype = function(){
		FWDRLInfo.prototype = new FWDRLDO("div", "relative");
	};
	
	FWDRLInfo.prototype = null;
	window.FWDRLInfo = FWDRLInfo;
}(window));/**
 * Revolution Lightbox PACKAGED v3.0
 * Preloader and slideshow preloader.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function (window){
	
	var FWDRLPreloader = function(prt, radius, bkClr, fillClr, strokeSize, animDur){

		'use strict';
		
		var _s  = this;
		var prototype = FWDRLPreloader.prototype;
		_s.bkClr = bkClr;
		_s.fillClr = fillClr;
		_s.radius = radius;
		_s.strokeSize = strokeSize;
		_s.animDur = animDur/1000 || 300;
		_s.strtAngle = 270;
		_s.cntAnim = 0;
		_s.isShowed = true;
		_s.angle = {n:0};

		
		/**
	 	 * Initialize.
	 	 */
		_s.init = function(){
			_s.style().pointerEvents = 'none';
			_s.mm_do =  new FWDRLDO("div");
			_s.mm_do.setOverflow('visible');
			
			_s.main_do = new FWDRLDO("div");
			_s.main_do.setOverflow("visible");
			_s.main_do.setWidth(_s.radius * 2 + _s.strokeSize);
			_s.main_do.setHeight(_s.radius * 2 + _s.strokeSize);
			
			_s.setOverflow('visible');
			_s.setWidth((_s.radius * 2) + _s.strokeSize);
			_s.setHeight((_s.radius * 2) + _s.strokeSize);
			_s.mm_do.setWidth(_s.w);
			_s.mm_do.setHeight(_s.h);
			_s.bkCanvas =  new FWDRLDO("canvas");
			_s.bkCtx = _s.bkCanvas.screen.getContext('2d');
			_s.fillCircleCanvas = new FWDRLDO("canvas");
			_s.fillCtx = _s.fillCircleCanvas.screen.getContext('2d');
			_s.main_do.screen.style.transformOrigin = "50% 50%";
			
			_s.main_do.addChild(_s.bkCanvas);
			_s.main_do.addChild(_s.fillCircleCanvas);
			_s.mm_do.addChild(_s.main_do);
			_s.addChild(_s.mm_do);
			_s.drawBackground();
			_s.drawFill();
			_s.hide();
		};


		/**
		 * Set final size.
		 * @param {int} w
		 * @param {int} h
		 */
		_s.setFinalSize = function(w, h){
			_s.main_do.setX(Math.round(w-_s.w)/2);
			_s.main_do.setY(Math.round(h-_s.h)/2);
			_s.setWidth(w);
			_s.setHeight(h);
		}


		/**
		 * Position preloader.
		 */
		_s.position = function(){
			_s.setX(Math.round(prt.sW - _s.w)/2);
			_s.setY(Math.round(Math.min(prt.sH, prt.viewportSize.h) - _s.h)/2);
		}	


		/**
		 * Draw canvas background and fill.
		 */
		_s.drawBackground = function(){
			_s.bkCanvas.screen.width = (_s.radius * 2) + _s.strokeSize * 2;
			_s.bkCanvas.screen.height = (_s.radius * 2) + _s.strokeSize * 2;
			_s.bkCtx.lineWidth = _s.thicknessSize;
			_s.bkCtx.translate(_s.strokeSize/2, _s.strokeSize/2);
			_s.bkCtx.shadowColor = '#333333';
		    _s.bkCtx.shadowBlur = 1;
		   
			_s.bkCtx.lineWidth=_s.strokeSize;
			_s.bkCtx.strokeStyle = _s.bkClr;
			_s.bkCtx.beginPath();
			_s.bkCtx.arc(_s.radius, _s.radius,  _s.radius, (Math.PI/180) * 0, (Math.PI/180) * 360, false);
			_s.bkCtx.stroke();
			_s.bkCtx.closePath();
		};
		
		_s.drawFill = function(p){	
			if(p) _s.angle.n = Math.round(p * 360);	
			_s.fillCircleCanvas.screen.width = (_s.radius * 2) + _s.strokeSize * 2;
			_s.fillCircleCanvas.screen.height = (_s.radius * 2) + _s.strokeSize * 2;
			_s.fillCtx.lineWidth = _s.thicknessSize;
			_s.fillCtx.translate(_s.strokeSize/2, _s.strokeSize/2);
			_s.fillCtx.lineWidth=_s.strokeSize;
			_s.fillCtx.strokeStyle = _s.fillClr;
			_s.fillCtx.beginPath();
			_s.fillCtx.arc(_s.radius, _s.radius,  _s.radius, (Math.PI/180) * _s.strtAngle, (Math.PI/180) * (_s.strtAngle +  _s.angle.n), false);
			_s.fillCtx.stroke();
			_s.fillCtx.closePath();
		};

		
		/**
		 * Animtion logic.
		 */
		_s.startSlideshow = function(o){
			if(_s == null || _s.isSlideShowRun && !o) return;
			_s.isSlideShowRun = true;
			FWDAnimation.killTweensOf(_s.angle);
			FWDAnimation.to(_s.angle, _s.animDur, {n:360, onUpdate:_s.drawFill, onComplete:_s.stopSlideshow});
		};
		
		_s.stopSlideshow = function(o){
			if(!_s.isSlideShowRun && !o) return;	
			_s.isSlideShowRun = false;
			FWDAnimation.killTweensOf(_s.angle);
			FWDAnimation.to(_s.angle, .8, {n:0, onUpdate:_s.drawFill, ease:Expo.easeInOut});
		};

		_s.resetSlideshow = function(){
			FWDAnimation.killTweensOf(_s.angle);
			_s.angle.n = 0;
			_s.drawFill();
		}
		
		_s.startPreloader = function(){
			_s.stopPreloader();
			_s.angle = {n:0};
			FWDAnimation.to(_s.angle, _s.animDur, {n:360, onUpdate:_s.drawFill, repeat:100, yoyo:true, ease:Expo.easeInOut});
			FWDAnimation.to(_s.main_do.screen, _s.animDur, {rotation:360,  repeat:100});
		}

		_s.stopPreloader = function(){
			FWDAnimation.killTweensOf(_s.angle);
			FWDAnimation.killTweensOf(_s.main_do.screen);
			FWDAnimation.to(_s.main_do.screen, 0.00001, {rotation:0});
		}
		
		
		/**
		 * Show/hide logic.
		 */
		_s.show = function(){
			if(_s.isShowed) return;
			_s.setVisible(true);
			FWDAnimation.killTweensOf(_s.mm_do);
			FWDAnimation.to(_s.mm_do, 1, {alpha:1, delay:.2});
			_s.stopPreloader();
			_s.startPreloader();
			_s.isShowed = true;
		};
		
		_s.hide = function(animate){
			if(!_s.isShowed) return;
			FWDAnimation.killTweensOf(_s.mm_do);
			if(animate){
				FWDAnimation.to(_s.mm_do, .2, {alpha:0, onComplete:_s.onHideComplete});
			}else{
				_s.setVisible(false);
				_s.mm_do.setAlpha(0);
			}
			_s.isShowed = false;
		};

		_s.show2 = function(){
			if(_s.isShowed) return;
			_s.isShowed = true;
			_s.setVisible(true);
			FWDAnimation.killTweensOf(_s.mm_do);
			FWDAnimation.to(_s.mm_do, 1, {alpha:1, ease:Expo.easeOut});
		}

		_s.hide2 = function(){
			if(!_s.isShowed) return;
			_s.isShowed = false;
			FWDAnimation.killTweensOf(_s.mm_do);
			FWDAnimation.to(_s.mm_do, 1, {alpha:0, onComplete:_s.onHideComplete, ease:Expo.easeOut});
		}
		
		_s.onHideComplete = function(){
			_s.setVisible(false);
			_s.stopPreloader();
			_s.dispatchEvent(FWDRLPreloader.HIDE_COMPLETE);
		};


		/**
	 	 * Set opacitiy when item is dragged.
	 	 * @param {String} inst
	 	 */
	 	 _s.setHideDrag = function(hide){
	 	 	FWDAnimation.killTweensOf(_s.main_do);
	 	 	if(!hide){
	 	 		FWDAnimation.to(_s.main_do, .4, {alpha:1});
	 	 	}else{
	 	 		FWDAnimation.to(_s.main_do, .4, {alpha:.3, delay:.4});
	 	 	}
	 	 }


		/**
		 * Update colors.
		 * @param {String} bkClr
		 * @param {String} fillClr
		 */
		_s.updateColors = function(bkClr, fillClr){
			_s.bkClr = bkClr;
			_s.fillClr = fillClr;
			_s.bkCtx.strokeStyle = _s.bkClr;
			_s.fillCtx.strokeStyle = _s.fillClr;
			_s.drawBackground();
		}
		
		_s.init();
	};
	
	/**
	 * Prototype.
	 */
    FWDRLPreloader.setPrototype = function(){
    	FWDRLPreloader.prototype = new FWDRLDO("div");
    };
    
    FWDRLPreloader.HIDE_COMPLETE = "hideComplete";
	window.FWDRLPreloader = FWDRLPreloader;
}(window));/**
 * Revolution Lightbox PACKAGED v3.0
 * Share.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function(window){

	'use strict';
	
	var FWDRLShare = function(prt){
		
		var _s = this;
		_s.prt = prt;
		_s._d = prt._d;
		_s.x2 = _s.y2 = 0;

		_s.socialMedia = {
			facebook    : 'https://www.facebook.com/sharer/sharer.php?u=[url]',
			twitter     : 'https://twitter.com/intent/tweet?text=[text]&url=[url]',
			pinterest   : 'https://www.pinterest.com/pin/create/button/?url=[url]&media=[image]&caption=[text]',
			linkedin    : 'https://www.linkedin.com/shareArticle?url=[url]&mini=true&title=[text]',
			reddit      : 'https://www.reddit.com/submit?url=[url]&title=[text]',
			tumblr      : 'https://www.tumblr.com/share?v=3&u=[url]&t=[text]',
			blogger     : 'https://www.blogger.com/blog_this.pyra?t&u=[url]&n=[text]',
			buffer      : 'https://bufferapp.com/add?url=[url]title=[text]',
			digg        : 'https://digg.com/submit?url=[url]&title=[text]'
		};

		
		/**
		 * Initialize.
		 */
		_s.init = function(){
			_s.setOverflow('visible');
			_s.style().width = '100%';
			_s.style().height = '100%';
			_s.setupCnt();
		};

		
		/**
		 * Setup containers.
		 */
		_s.setupCnt = function(){
			_s.bk_do = new FWDRLDO('div');
			_s.bk_do.style().width = '100%';
			_s.bk_do.style().height = '100%';
			_s.bk_do.setBkColor(prt.shareMainBackgroundColor);
			_s.bk_do.screen.addEventListener("click", _s.bkMHU);
			_s.addChild(_s.bk_do);

			_s.mainHld_do = new FWDRLDO('div');
			_s.mainHld_do.screen.className = prt.cls + '-share';
			_s.mainHld_do.setOverflow('visible');
			_s.addChild(_s.mainHld_do);

			_s.text_do = new FWDRLDO('div', 'relative');
			_s.text_do.screen.className = prt.cls + '-text';
			_s.mainHld_do.addChild(_s.text_do);

			_s.hld_do =  new FWDRLDO('div', 'relative');
			_s.hld_do.screen.className = prt.cls + '-buttons-holder';
			_s.mainHld_do.addChild(_s.hld_do);

			_s.setupButtons();
			_s.setupPointer();
			_s.hide(false, true);
		}

		_s.bkMHU = function(){
			_s.hide(true);
		}


		/**
		 * Setup pointers.
		 */
		_s.setupPointer = function(){
			_s.pointer_do = new FWDRLDO("div");
			_s.pointer_do.hasTransform3d_bl = _s.pointer_do.hasTransform2d_bl = false;
			_s.pointer_do.screen.className = prt.cls + '-pointer';
			_s.pointer_do.setBkColor(prt.shareBackgroundColor);
			_s.pointer_do.style().transform = 'rotate(45deg)';
			_s.pointer_do.setWidth(8);
			_s.pointer_do.setHeight(8);
			_s.mainHld_do.addChild(_s.pointer_do);
		}


		/**
		 * Setup buttons.
		 */
		_s.setupButtons = function(){
			_s.buttons = [];

			FWDRLSimpleButton.setPrototype();
			if(prt.useVectorIcons){
				_s.facebook_do = new FWDRLSimpleButton(0, 0, prt.cls,
								'<span class="' + prt.fontIcon + ' ' + prt.fontIcon + '-facebook"></span>',
								 prt.cls + '-button facebook',
								 'selected');
			}else{
				_s.facebook_do = new FWDRLSimpleButton(_s._d.facebookN_img, _s._d.facebookSPath, prt.cls);
			}
			_s.facebook_do.setShareButton('facebook');
			_s.facebook_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.shareMUH);
			_s.hld_do.addChild(_s.facebook_do);
			_s.buttons.push(_s.facebook_do);

			FWDRLSimpleButton.setPrototype();
			if(prt.useVectorIcons){
				_s.twitter_do = new FWDRLSimpleButton(0, 0, prt.cls,
								'<span class="' + prt.fontIcon + ' ' + prt.fontIcon + '-twitter"></span>',
								 prt.cls + '-button twitter',
								 'selected');
			}else{
				_s.twitter_do = new FWDRLSimpleButton(_s._d.twitterN_img, _s._d.twitterSPath, prt.cls);
			}
			_s.twitter_do.setShareButton('twitter');
			_s.twitter_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.shareMUH);
			_s.hld_do.addChild(_s.twitter_do);
			_s.buttons.push(_s.twitter_do);

			FWDRLSimpleButton.setPrototype();
			if(prt.useVectorIcons){
				_s.linkedin_do = new FWDRLSimpleButton(0, 0, prt.cls,
								'<span class="' + prt.fontIcon + ' ' + prt.fontIcon + '-linkedin"></span>',
								 prt.cls + '-button linkedin',
								 'selected');
			}else{
				_s.linkedin_do = new FWDRLSimpleButton(_s._d.linkedinN_img, _s._d.linkedinSPath, prt.cls);
			}
			_s.linkedin_do.setShareButton('linkedin');
			_s.linkedin_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.shareMUH);
			_s.hld_do.addChild(_s.linkedin_do);
			_s.buttons.push(_s.linkedin_do);


			FWDRLSimpleButton.setPrototype();
			if(prt.useVectorIcons){
				_s.tumblr_do = new FWDRLSimpleButton(0, 0, prt.cls,
								'<span class="' + prt.fontIcon + ' ' + prt.fontIcon + '-tumblr"></span>',
								 prt.cls + '-button tumblr',
								 'selected');
			}else{
				_s.tumblr_do = new FWDRLSimpleButton(_s._d.tumblrN_img, _s._d.tumblrSPath, prt.cls);
			}
			_s.tumblr_do.setShareButton('tumblr');
			_s.tumblr_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.shareMUH);
			_s.hld_do.addChild(_s.tumblr_do);
			_s.buttons.push(_s.tumblr_do);

			FWDRLSimpleButton.setPrototype();
			if(prt.useVectorIcons){
				_s.pinterest_do = new FWDRLSimpleButton(0, 0, prt.cls,
								'<span class="' + prt.fontIcon + ' ' + prt.fontIcon + '-pinterest"></span>',
								 prt.cls + '-button pinterest',
								 'selected');
			}else{
				_s.pinterest_do = new FWDRLSimpleButton(_s._d.pinterestN_img, _s._d.pinterestSPath, prt.cls);
			}
			_s.pinterest_do.setShareButton('pinterest');
			_s.pinterest_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.shareMUH);
			_s.hld_do.addChild(_s.pinterest_do);
			_s.buttons.push(_s.pinterest_do);

			FWDRLSimpleButton.setPrototype();
			if(prt.useVectorIcons){
				_s.reddit_do = new FWDRLSimpleButton(0, 0, prt.cls,
								'<span class="' + prt.fontIcon + ' ' + prt.fontIcon + '-reddit"></span>',
								 prt.cls + '-button reddit',
								 'selected');
			}else{
				_s.reddit_do = new FWDRLSimpleButton(_s._d.redditN_img, _s._d.redditSPath, prt.cls);
			}
			_s.reddit_do.setShareButton('reddit');
			_s.reddit_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.shareMUH);
			_s.hld_do.addChild(_s.reddit_do);
			_s.buttons.push(_s.reddit_do);

			FWDRLSimpleButton.setPrototype();
			if(prt.useVectorIcons){
				_s.buffer_do = new FWDRLSimpleButton(0, 0, prt.cls,
								'<span class="' + prt.fontIcon + ' ' + prt.fontIcon + '-buffer"></span>',
								 prt.cls + '-button buffer',
								 'selected');
			}else{
				_s.buffer_do = new FWDRLSimpleButton(_s._d.bufferN_img, _s._d.bufferSPath, prt.cls);
			}
			_s.buffer_do.setShareButton('buffer');
			_s.buffer_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.shareMUH);
			_s.hld_do.addChild(_s.buffer_do);
			_s.buttons.push(_s.buffer_do);

			FWDRLSimpleButton.setPrototype();
			if(prt.useVectorIcons){
				_s.digg_do = new FWDRLSimpleButton(0, 0, prt.cls,
								'<span class="' + prt.fontIcon + ' ' + prt.fontIcon + '-digg"></span>',
								 prt.cls + '-button digg',
								 'selected');
			}else{
				_s.digg_do = new FWDRLSimpleButton(_s._d.diggN_img, _s._d.diggSPath, prt.cls);
			}
			_s.digg_do.setShareButton('digg');
			_s.digg_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.shareMUH);
			_s.hld_do.addChild(_s.digg_do);
			_s.buttons.push(_s.digg_do);

			FWDRLSimpleButton.setPrototype();
			if(prt.useVectorIcons){
				_s.blogger_do = new FWDRLSimpleButton(0, 0, prt.cls,
								'<span class="' + prt.fontIcon + ' ' + prt.fontIcon + '-blogger"></span>',
								 prt.cls + '-button blogger',
								 'selected');
			}else{
				_s.blogger_do = new FWDRLSimpleButton(_s._d.bloggerN_img, _s._d.bloggerSPath, prt.cls);
			}
			_s.blogger_do.setShareButton('blogger');
			_s.blogger_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.shareMUH);
			_s.hld_do.addChild(_s.blogger_do);
			_s.buttons.push(_s.blogger_do);
			
		}

		_s.shareMUH = function(e){
			_s.shareOn(e.inst);
		}

		/**
		 * Share when button is clicked.
		 * @param {String} type
		 */
		_s.shareOn = function(type){
			var media = prt.gallery_ar[prt.mId],
				image = media.type == FWDRL.IMAGE ? media.src : media.posterSrc,
				url     = _s.socialMedia[type],
				uri
				
			if(prt.sharedURL == 'page') {
				uri = [location.protocol, '//', location.host, location.pathname].join( '' );
			}else if(prt.sharedURL == 'deeplink' || ['iframe', 'HTML'].indexOf(media.type) > -1){
				uri = [location.protocol, '//', location.host, location.pathname].join( '' );
				uri += '#/' + prt.setDL(false);
			}else{
				uri = media.src;
			}

			// convert to absolute path if necessary
			var link = document.createElement('a');
			link.href = image;
			image = link.href;
			link.href = uri;
			uri = link.href;

			var tmp = document.createElement( 'div' );
			tmp.innerHTML = media.caption;
			var text = (tmp.textContent || tmp.innerText).replace( /\s+/g, ' ' ).trim() || '';
			
			url = url.replace('[url]', encodeURIComponent(uri))
				 	.replace('[image]', encodeURIComponent(image))
					.replace('[text]', encodeURIComponent(text || document.title));

			var left = Math.round(window.screenX + (window.outerWidth - 626)/2),
			top  = Math.round(window.screenY + ( window.outerHeight - 436 )/2);
			

			window.open(url, 'fwdrl_share', 'status=0,resizable=1,location=1,toolbar=0,width=626,height=436,top=' + top + ',left=' + left );
		}


		/**
		 * Update text and buttons.
		 */
		_s.update = function(){
			if(!prt.showShareButton) return;
			_s.bk_do.setBkColor(prt.shareMainBackgroundColor);
			_s.mainHld_do.setBkColor(prt.shareBackgroundColor);
			_s.pointer_do.setBkColor(prt.shareBackgroundColor);
			_s.text_do.setInnerHTML(prt.shareText);
			
			var tempBtns = [];
			for(var i=0; i<prt.shareButtons.length; i++){
				var btnName = prt.shareButtons[i];
				for(var j=0; j<_s.buttons.length; j++){
					var btn = _s.buttons[j];
					if(btnName == btn.inst){
						tempBtns.push(btn);
					}
				}
			}

			for(var i=0; i<_s.buttons.length; i++){
				var btn = _s.buttons[i];
				try{
				_s.hld_do.removeChild(btn);
				}catch(e){}
			}

			for(var i=0; i<tempBtns.length; i++){
				var btn = tempBtns[i];
				_s.hld_do.addChild(btn);
			}
		}


		/**
		 * Show/hide.
		 */
		_s.show = function(pos, x, y){
			if(_s.isShowed || prt.isLoading) return;
			_s.isShowed = true;
			_s.setX(0);

			var btnX = prt.shareBtn_do.x;
			var btnY = prt.shareBtn_do.y;
			var btnW = prt.shareBtn_do.w;
			var btnH = prt.shareBtn_do.h;
			var sW = prt.stageW;
			var sH = prt.stageH;
			var wW = _s.mainHld_do.getWidth();
			var wH = _s.mainHld_do.getHeight();
			var x,y,x2,y2;
			var pointerOffset = 4;
		

			if(prt.tempBtnsAlign == FWDRL.BUTTONS_TOP){
				x = btnX - Math.round((wW - btnW)/2);
				y = btnY + btnW + 10; 
				pos = 'top';
				if(x + wW > sW){
					x = btnX - wW + btnW;
					pointerOffset = -(wW - btnW)/2 + 5;
				}
			}else{
				x = btnX + btnW + 10;
				y = btnY - Math.round((wH - btnH)/2);

				if(y < 0){
					pointerOffset = 78;
					y = prt.shareBtn_do.y - 5;
				}
				pos = 'right';
				if(x + wW > sW - 20){
					x = btnX - wW - 10;
					pos = 'left';
				}
			}

			x= Math.round(x);
			y = Math.round(y);


			_s.x2 = x;
			_s.y2 = y;
			if(pos == 'right'){
				_s.x2 = x + 20;
			}else if(pos == 'left'){
				_s.x2 = x - 20;
			}else if(pos == 'top'){
				_s.y2 = y + 20;
			}

			_s.mainHld_do.setX(_s.x2);
			_s.mainHld_do.setY(_s.y2);
			_s.mainHld_do.setAlpha(0);
			_s.bk_do.setAlpha(0)
		
			if(pos == 'top'){
				_s.pointer_do.style().top = ' -4px';
				_s.pointer_do.style().left = 'calc(50% - ' + pointerOffset + 'px)';
			}else if(pos == 'left'){
				_s.pointer_do.style().top = 'calc(50% - ' + pointerOffset + 'px)';
				_s.pointer_do.style().left = 'calc(100% - 4px)';
			}else if(pos == 'right'){
				_s.pointer_do.style().top = 'calc(50% - ' + pointerOffset + 'px)';
				_s.pointer_do.style().left = '-4px';
			}

			FWDAnimation.to(_s.bk_do, .6, {alpha:1, ease:Expo.easeInOut});
			FWDAnimation.to(_s.mainHld_do, .6, {x:x, y:y, alpha:1, ease:Expo.easeInOut});
			_s.setVisible(true);
			_s.dispatchEvent(FWDRLShare.SHOW);
		}

		_s.hide = function(anim, o){
			if(!_s.isShowed && !o || FWDAnimation.isTweening(_s.mainHld_do)) return;
			_s.isShowed = false;

			FWDAnimation.killTweensOf(_s.mainHld_do);
			if(anim){
				FWDAnimation.to(_s.bk_do, .6, {alpha:0, ease:Expo.easeInOut});
				FWDAnimation.to(_s.mainHld_do, .6, {x:_s.x2, y:_s.y2, alpha:0, ease:Expo.easeInOut, onComplete:_s.hideComplete});
			}else{
				_s.hideComplete();
			}
			_s.dispatchEvent(FWDRLShare.HIDE);
		}

		_s.hideComplete = function(){
			_s.setX(-8000);
			_s.setVisible(false);
		}
		
		_s.init();
	};
	
	/**
	 * Prototype.
	 */
	FWDRLShare.setPrototype = function(){
		FWDRLShare.prototype = new FWDRLDO('div');
	};

	FWDRLShare.SHOW = 'show';
	FWDRLShare.HIDE = 'hide';
	
	window.FWDRLShare = FWDRLShare;
}(window));/**
 * Revolution Lightbox PACKAGED v3.0
 * Simple button.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function (window){
	var FWDRLSimpleButton = function(nImg, sPath, cls, html, nClass, sClass){

		'use strict';
		
		var _s = this;
		var prototype = FWDRLSimpleButton.prototype;
		
		_s.nImg = nImg;
		_s.sPath = sPath;
		_s.inst;
		_s.html = html;
		_s.nClass = nClass;
		_s.sClass = sClass;
	
		if(_s.nImg){
			_s.totalWidth = _s.nImg.width;
			_s.totalHeight = _s.nImg.height;
		}
		
		_s.isShowed = true;
		_s.isMbl = FWDRLUtils.isMbl;
		_s.hasPointerEvent_bl = FWDRLUtils.hasPointerEvent;
		
	
		/**
	 	 * Initiolize.
	 	 */
		_s.init = function(){
			_s.setupMainContainers();
		};

		
		/**
	 	 * Setup main containers.
	 	 */
		_s.setupMainContainers = function(){

			if(_s.html){
				_s.n_do = new FWDEVPDO("div");	
				_s.n_do.setInnerHTML(_s.html);
				_s.setNormalState();
				_s.addChild(_s.n_do);

				setTimeout(function(){
					_s.setWidth(parseInt(getComputedStyle(_s.n_do.screen).getPropertyValue("width")));
					_s.setHeight(parseInt(getComputedStyle(_s.n_do.screen).getPropertyValue("height")));
				}, 5);
		
			}else{
				_s.buttonsHolder_do = new FWDRLDO("div");
				_s.buttonsHolder_do.setOverflow("visible");
			
				_s.n_do = new FWDRLDO("img");	
				_s.n_do.setScreen(_s.nImg);
				_s.buttonsHolder_do.addChild(_s.n_do);
				
				var img1 = new Image();
				img1.src = _s.sPath;
				_s.s_do = new FWDRLDO("img");
				_s.s_do.setScreen(img1);
				_s.s_do.setWidth(_s.totalWidth);
				_s.s_do.setHeight(_s.totalHeight);
				_s.s_do.setAlpha(0);
				_s.buttonsHolder_do.addChild(_s.s_do);
				_s.setWidth(_s.totalWidth);
				_s.setHeight(_s.totalHeight);
				
				_s.screen.style.yellowOverlayPointerEvents = "none";
				_s.addChild(_s.buttonsHolder_do);
			}
			
			_s.setButtonMode(true);

			if(_s.isMbl){
				if(_s.hasPointerEvent_bl){
					_s.screen.addEventListener("pointerup", _s.onMouseUp);
					_s.screen.addEventListener("pointerover", _s.onMouseOver);
					_s.screen.addEventListener("pointerout", _s.onMouseOut);
				}else{
					_s.screen.addEventListener("touchend", _s.onMouseUp);
				}
			}else{	
				_s.screen.addEventListener("mouseover", _s.onMouseOver);
				_s.screen.addEventListener("mouseout", _s.onMouseOut);
				_s.screen.addEventListener("mouseup", _s.onMouseUp);
			}
		};
		
		_s.onMouseOver = function(e){
			_s.dispatchEvent(FWDRLSimpleButton.SHOW_TOOLTIP, {e:e});
			if(_s.isDisabledForGood_bl) return;
			if(!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE || e.pointerType == "mouse"){
				if(_s.isDisabled_bl || _s.isSelectedFinal_bl) return;
				_s.dispatchEvent(FWDRLSimpleButton.MOUSE_OVER, {e:e});
				_s.setSelectedState(true);
			}
		};
			
		_s.onMouseOut = function(e){
			if(_s.isDisabledForGood_bl) return;
			if(!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE || e.pointerType == "mouse"){
				if(_s.isDisabled_bl || _s.isSelectedFinal_bl || _s.isDisabled2) return;
				_s.dispatchEvent(FWDRLSimpleButton.MOUSE_OUT, {e:e});
				_s.setNormalState(true);
			}
		};
		
		_s.onMouseUp = function(e){
			if(_s.isDisabledForGood_bl) return;
			if(e.preventDefault) e.preventDefault();
			if(_s.isDisabled_bl || e.button == 2) return;
			_s.dispatchEvent(FWDRLSimpleButton.MOUSE_UP, {e:e, inst:_s.inst});
		};
	

		/**
	 	 * Set normal/selected state.
	 	 */
		_s.setNormalState = function(anim){
			if(_s.html){
				_s.n_do.screen.className = _s.nClass;
			}else{
				FWDAnimation.killTweensOf(_s.s_do);
				FWDAnimation.to(_s.s_do, .5, {alpha:0, ease:Expo.easeOut});	
			}
		};
		
		_s.setSelectedState = function(anim){
			if(_s.html){
				_s.n_do.screen.className = _s.nClass + ' ' + _s.sClass;
			}else{
				FWDAnimation.killTweensOf(_s.s_do);
				FWDAnimation.to(_s.s_do, .5, {alpha:1, delay:.1, ease:Expo.easeOut});
			}
		};
		
		/**
	 	 * Disable/enable.
	 	 */
		_s.disable = function(setNormalState){
			if(_s.isDisabledForGood_bl  || _s.isDisabled_bl) return;
			_s.isDisabled_bl = true;
			_s.setButtonMode(false);
			FWDAnimation.to(_s, .6, {alpha:.4});
			if(!setNormalState) _s.setNormalState();
		};
		
		_s.enable = function(){
			if(_s.isDisabledForGood_bl || !_s.isDisabled_bl) return;
			_s.isDisabled_bl = false;
			_s.setButtonMode(true);
			FWDAnimation.to(_s, .6, {alpha:1});
		};
		
		_s.disableForGood = function(){
			_s.isDisabledForGood_bl = true;
			_s.setButtonMode(false);
		};
		
		_s.disable2 = function(setNormalState){
			if(_s.isDisabled2) return;
			_s.isDisabled2 = true;
			FWDAnimation.to(_s, .6, {alpha:.4});
			if(!setNormalState) _s.setNormalState();
		};
		
		_s.enable2 = function(){
			if(!_s.isDisabled2) return;
			_s.isDisabled2 = false;
			FWDAnimation.to(_s, .6, {alpha:1});
		};


		/**
	 	 * Set button style if the button is a share type.
	 	 * @param {String} inst
	 	 */
	 	 _s.setShareButton = function(inst){
	 	 	_s.inst = inst;
	 	 	_s.screen.className = cls + '-share-button';
	 	 	_s.style().position = 'relative';
			_s.style().display = 'inline-block';
	 	 }


	 	 /**
	 	 * Set opacitiy when item is dragged.
	 	 * @param {String} inst
	 	 */
	 	 _s.setHideDrag = function(hide){
	 	 	FWDAnimation.killTweensOf(_s.n_do);
	 	 	if(!hide){
	 	 		FWDAnimation.to(_s.n_do, .4, {alpha:1});
	 	 	}else{
	 	 		FWDAnimation.to(_s.n_do, .4, {alpha:.3, delay:.4});
	 	 	}
	 	 }

		_s.init();
	};
	
	/**
	 * Set prototype.
	 */
	FWDRLSimpleButton.setPrototype = function(hasTransform){
		FWDRLSimpleButton.prototype = new FWDRLDO("div");		
	};
	
	FWDRLSimpleButton.CLICK = "onClick";
	FWDRLSimpleButton.MOUSE_OVER = "onMouseOver";
	FWDRLSimpleButton.SHOW_TOOLTIP = "showTooltip";
	FWDRLSimpleButton.MOUSE_OUT = "onMouseOut";
	FWDRLSimpleButton.MOUSE_UP = "onMouseDown";
	
	FWDRLSimpleButton.prototype = null;
	window.FWDRLSimpleButton = FWDRLSimpleButton;
}(window));/**
 * Revolution Lightbox PACKAGED v3.0
 * Thumbnail.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function(window){

	'use strict';
	
	var FWDRLThumb = function(
			prt,
			id, 
			thumbnailH,
			thumbnailsOffsetBottom,
			borderSize,
			thumbnailBorderColor,
			thumbnailsOverlayColor,
			iconPath,
			showIcon
		){
		
		var _s = this;
		var prototype = FWDRLThumb.prototype;

		_s.thumbnailsOverlayColor = thumbnailsOverlayColor;

		_s.id = id;
		_s.borderSize = borderSize;
		_s.thumbnailH = thumbnailH;
		_s.isSelected = true;
		_s.isMbl = FWDRLUtils.isMbl;
	
		
		/**
	  	 * Initialize.
	     */
		_s.init = function(){
			_s.setNormalState(false);
			_s.screen.className = FWDRL.cls + '-thumbnail';
			_s.screen.id = FWDRL.cls + '_thumbnail_' + _s.id;
		};

		
		/**
	  	 * Setup border.
	     */
		_s.setupBorder = function(){
			_s.border_do = new FWDRLDO("div");
			_s.border_do.style().boxSizing = 'border-box';
			_s.border_do.style().border = _s.borderSize + 'px solid ' + thumbnailBorderColor;
			_s.border_do.setWidth(_s.finalW);
			_s.border_do.setHeight(_s.finalH);
			_s.border_do.setAlpha(0);
			_s.addChild(_s.border_do);
		};
		
		
		/**
	  	 * Add image.
	     */
		_s.setImage = function(image){
			var imgW = image.width;
			var imgH = image.height;
			var imageHeight =  - _s.borderSize * 2;
			var scale = _s.thumbnailH/imgH;	
			_s.image_do = new FWDRLDO("img");
			_s.image_do.setScreen(image);

			_s.finalW = Math.round((imgW * scale));		
			_s.finalH = _s.thumbnailH;
			
			_s.resizeImage();
			if(_s.isMbl){
				//_s.screen.addEventListener("touchend", _s.onMCH);
			}else{
				_s.screen.addEventListener("mouseover", _s.onMOVH);
				_s.screen.addEventListener("mouseout", _s.onMOTH);
				
			}

			_s.screen.addEventListener("click", _s.onMCH);
		
			_s.addChild(_s.image_do);
			
			_s.overlay_do = new FWDRLDO("div");
			_s.overlay_do.setWidth(_s.finalW);
			_s.overlay_do.setHeight(_s.finalH);
			_s.overlay_do.setBkColor(_s.thumbnailsOverlayColor);
			_s.addChild(_s.overlay_do);
		
			if(showIcon && iconPath){
				_s.icon_do = new FWDRLDO("img");
				_s.iconImg_img = new Image();
				_s.iconImg_img.onload = function(){
					_s.icon_do.setScreen(_s.iconImg_img);
					_s.icon_do.trldo = true;
					_s.icon_do.setX(parseInt((_s.finalW - _s.icon_do.w)/2));
					_s.icon_do.setY(parseInt((_s.finalH - _s.icon_do.h)/2));
					_s.addChild(_s.icon_do);
					setTimeout(function(){
						if(_s){
							 _s.icon_do.setAlpha(0);
							 FWDAnimation.to(_s.icon_do, .8, {alpha:1, ease:Quint.easeOut});
						}
					}, 50);
					
				};
				_s.iconImg_img.src = iconPath;
			}
			
			_s.setupBorder();
			_s.hide(false);
			_s.show(true);
			if(prt.id == _s.id) _s.disable();
			
		};

		_s.resizeImage = function(){
			_s.image_do.setWidth(_s.finalW);
			_s.image_do.setHeight(_s.finalH);
			_s.setWidth(_s.finalW);
			_s.setHeight(_s.finalH);
		}
		
		_s.onMouseOverHandler = function(e){
			_s.dispatchEvent(FWDRLThumb.HOVER);
			if(_s.isDisabled) return;
			if(!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE){
				_s.setSelectedState(true);
			}
		};

		_s.onMOVH = function(e){
			if(_s.isDisabled) return;
			if(!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE){
				_s.setSelectedState(true);
			}
		}

		_s.onMOTH = function(e){
			if(_s.isDisabled) return;
			if(!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE){
				_s.setNormalState(true);
			}
		};
	
		_s.onMCH = function(e){
			if(_s.isDisabled) return;
			
			_s.dispatchEvent(FWDRLThumb.CLICK, {id:_s.id});
		};

		
		/**
	  	 * Set normal/selected state
	  	 * @ param{Boolan} anim
	     */
		_s.setNormalState = function(){
			if(!_s.isSelected) return;
			_s.isSelected = false;

			if(_s.icon_do){
				FWDAnimation.killTweensOf(_s.icon_do);
				FWDAnimation.to(_s.icon_do, 1, {alpha:1, scale:1, ease:Elastic.easeOut});
			} 

			if(_s.border_do){
				FWDAnimation.killTweensOf(_s.border_do);
				FWDAnimation.to(_s.border_do, .6, {alpha:0, ease:Expo.easeOut});
			}

			if(_s.overlay_do){
				FWDAnimation.killTweensOf(_s.overlay_do);
				FWDAnimation.to(_s.overlay_do, .6, {alpha:1, ease:Expo.easeOut});
			} 
		};

		_s.setSelectedState = function(){
			if(_s.isSelected) return;
			_s.isSelected = true;

			if(_s.icon_do){
				FWDAnimation.killTweensOf(_s.icon_do);
				FWDAnimation.to(_s.icon_do, .6, {scale:0, ease:Expo.easeOut});
			} 

			if(_s.border_do){
				FWDAnimation.killTweensOf(_s.border_do);
				FWDAnimation.to(_s.border_do, .6, {alpha:1, ease:Expo.easeOut});
			}

			if(_s.overlay_do){
				FWDAnimation.killTweensOf(_s.overlay_do);
				FWDAnimation.to(_s.overlay_do, .6, {alpha:0, ease:Expo.easeOut});
			} 
		};


		/**
	  	 * Show/hide thumbnails.
	     */
		_s.show = function(animate){
			FWDAnimation.killTweensOf(_s);
			if(animate){
				FWDAnimation.to(_s, .8, {y:0, ease:Expo.easeInOut});
			}else{
				_s.setY(0);
			}
		};
		
		_s.hide = function(animate){	
			FWDAnimation.killTweensOf(_s);
			if(animate){
				FWDAnimation.to(_s, .8, {y:thumbnailsOffsetBottom + _s.thumbnailH + 2});
			}else{
				_s.setY(thumbnailsOffsetBottom + _s.thumbnailH + 2);
			}
		};

		
		/**
	  	 * Disable/enable.
	     */
		_s.enable = function(){
			if(!_s.isDisabled) return;
			_s.isDisabled = false;
			_s.setNormalState(true);
		};
		
		_s.disable = function(){
			_s.isDisabled = true;
			_s.setSelectedState(true);
		};
		
		
		/**
	  	 * Destroy.
	     */
		_s.destroy = function(){
			
			if(_s.iconImg_img){
				_s.iconImg_img.onload = null;
				_s.iconImg_img.onerror = null;
			}
			
			if(_s.border_do){
				FWDAnimation.killTweensOf(_s.border_do);
				_s.border_do.destroy();
			}
			
			if(_s.image_do){
				FWDAnimation.killTweensOf(_s.image_do);
				_s.image_do.destroy();
			}
			
			if(_s.overlay_do){
				FWDAnimation.killTweensOf(_s.overlay_do);
				_s.overlay_do.destroy();
			}
			
			if(_s.icon_do){
				FWDAnimation.killTweensOf(_s.icon_do);
				_s.icon_do.destroy();
			}
			
			_s.screen.removeEventListener("mouseover", _s.onMouseOverHandler);
			_s.screen.removeEventListener("click", _s.onMCH);
			
			_s.iconImg_img = null;
			_s.border_do = null;
			_s.image_do = null;
			_s.overlay_do = null;
			_s.icon_do = null;
			
			_s.setInnerHTML("");
			prototype.destroy();
			prototype = null;
			_s = null;
			FWDRLThumb.prototype = null;
		};

		_s.init();
	};

	/* set prototype */
	FWDRLThumb.setPrototype = function(){
		FWDRLThumb.prototype = new FWDRLDO("div");
	};
	
	FWDRLThumb.HOVER =  "onHover";
	FWDRLThumb.CLICK =  "onClick";
	
	FWDRLThumb.prototype = null;
	window.FWDRLThumb = FWDRLThumb;
}(window));/**
 * Revolution Lightbox PACKAGED v3.0
 * Thumbnails manager.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function (window){
	
	var FWDRLThumbs = function(prt){

		'use strict';
		
		var _s = this;
		var prototype = FWDRLThumbs.prototype;
		
		_s._d = prt._d;
		_s.spaceBetweenThumbnails = prt.spaceBetweenThumbnails;
		_s.totalW = 0;
		_s.vx = 0;
		_s.vx2 = 0;
		_s.lastPresedX = 0;
		_s.totalThumbs = 0;	
		_s.countLoadedThumbs = 0;
		_s.id = 0;
		_s.areCreated = false;
		_s.isMbl = FWDRLUtils.isMbl;
		

		/**
	  	 * Initialize.
	     */
		_s.init = function(){
			_s.setOverflow("visible");
			_s.mainHld_do = new FWDRLDO("div");
			_s.mainHld_do.setOverflow("visible");
			
			_s.thumbsHld_do = new FWDRLDO("div"); 
			_s.thumbsHld_do.setOverflow("visible");
			_s.mainHld_do.addChild(_s.thumbsHld_do);
			
			_s.addChild(_s.mainHld_do);
		};

		
		/**
	  	 * Position and resize.
	     */
		_s.positionAndResize = function(){
			_s.stageW = prt.stageW;
			_s.setY(prt.stageH);
			_s.mainHld_do.setWidth(_s.stageW);
			_s.mainHld_do.setHeight(_s.stageH);
			_s.show(false);
			if(_s.areCreated) _s.positionThumbnails(false);
		};

		
		/**
	  	 * Create thumbnails.
	     */
		_s.setupThumbnails = function(){
			_s.areCreated = true;
			_s.thumbs_ar = [];
			_s.gallery_ar = prt.gallery_ar;
			_s.totalThumbs = _s.gallery_ar.length;
			_s.countLoadedThumbs = 0;
			_s.loadThumbnails();
			_s.addScrollSupport();
		};
		
		_s.loadThumbnails = function(){
			if(_s.countLoadedThumbs > _s.totalThumbs-1){
				_s.allLoaded_to = setTimeout(function(){
					_s.allLoaded = true;
				}, 2000);
				return;
			}

			_s.image_img = new Image();
			_s.image_img.onload = _s.onThumbnailLoadComplete;
			_s.image_img.src = _s.gallery_ar[_s.countLoadedThumbs].thumbSrc;
		};
	
		_s.onThumbnailLoadComplete = function(e){
			if(!prt.gallery_ar) return;
			var iconType = prt.gallery_ar[_s.countLoadedThumbs].type;
			var iconPath;
			
			if(iconType == FWDRL.AUDIO
			|| iconType == FWDRL.VIDEO
			|| iconType == FWDRL.YOUTUBE
			|| iconType == FWDRL.VIMEO){
				iconPath = _s._d.videoIconPath;
			}
			
			FWDRLThumb.setPrototype();
			var thumb = new FWDRLThumb(
					_s,
					_s.countLoadedThumbs, 
					prt.thumbnailH,
					prt.tempThumbnailsOffsetBottom,
					prt.thumbnailsBorderSize,
					prt.thumbnailsBorderColor,
					prt.thumbnailsOverlayColor,
					iconPath,
					prt.showThumbnailsIcon);
			_s.thumbs_ar[_s.countLoadedThumbs] = thumb;

			thumb.addListener(FWDRLThumb.HOVER, _s.thumbMOH);
			thumb.addListener(FWDRLThumb.CLICK, _s.thumbMCH);
			thumb.setImage(_s.image_img);

			_s.totalW += thumb.w + _s.spaceBetweenThumbnails;
			if(_s.countLoadedThumbs == _s.totalThumbs - 1) _s.totalW -= _s.spaceBetweenThumbnails;
			
			if(_s.countLoadedThumbs !=0){
				thumb.setX(_s.thumbs_ar[_s.countLoadedThumbs - 1].x + _s.thumbs_ar[_s.countLoadedThumbs - 1].w + _s.spaceBetweenThumbnails);
			}

			if(_s.countLoadedThumbs == 0) _s.thumbsHld_do.setX(Math.round(_s.stageW - thumb.w)/2);
		
			_s.thumbsHld_do.addChild(thumb);
			_s.positionThumbnails(true);	
			_s.countLoadedThumbs++;
			_s.loadWithDelayId_to = setTimeout(_s.loadThumbnails, 50);	
		};
		
		_s.stopToLoadThumbanils = function(){
			if(_s.image_img){
				_s.image_img.onload = null;
				_s.image_img.onerror = null;
				_s.image_img.src = "";
				_s.image_img = null;
			}
			clearTimeout(_s.loadWithDelayId_to);
		};
		
		_s.thumbMCH = function(e){
			if(!prt.isShowed || _s.isMv) return;
			_s.dispatchEvent(FWDRLThumb.CLICK, {id:e.id});
		};
		
		_s.thumbMOH = function(){
			if(!prt.isShowed) return;
		};


		/**
	  	 * Position thumbnails.
	     */
		_s.positionThumbnails = function(anim, o){
			
			if((_s.isDragging || !_s.isShowed || prt.startToHide) && !o) return;

			if(!_s.areCreated) return;
			
			_s.finalX;
			_s.curThumb = _s.thumbs_ar[_s.id];
			_s.lastCreateThumb = _s.thumbs_ar[_s.thumbs_ar.length - 1];
			
			if(_s.totalW <= _s.stageW){
				_s.finalX = Math.round((_s.stageW - _s.totalW)/2);
			}else{
				if(_s.curThumb){
					_s.finalX = Math.round(-_s.curThumb.x + (_s.stageW - _s.curThumb.w)/2);
				}else{
					_s.finalX = Math.round(-_s.lastCreateThumb.x + (_s.stageW - _s.lastCreateThumb.w)/2);
				}
				
				if(_s.finalX > prt.tempThumbnailsOffsetBottom){
					_s.finalX = prt.tempThumbnailsOffsetBottom;
				}else if(_s.finalX < (_s.stageW - _s.totalW - prt.tempThumbnailsOffsetBottom)){
					_s.finalX = _s.stageW - _s.totalW - prt.tempThumbnailsOffsetBottom;
				}
			}
			
			_s.thumbsHld_do.setWidth(_s.totalW);
			_s.thumbsHld_do.setHeight(_s.stageH);

			_s.stopToUpdateDrag();
			
			if(!_s.isDragging){
				var ease = Expo.easeOut;
				if(_s.allLoaded) ease = Expo.easeInOut;
				FWDAnimation.killTweensOf(_s.thumbsHld_do);
				if(anim){
					FWDAnimation.to(_s.thumbsHld_do, .8, {x:_s.finalX, ease:ease});
				}else{
					_s.thumbsHld_do.setX(_s.finalX);
				}
			}
		};

		
		/**
	  	 * Add scroll support.
	     */
		_s.addScrollSupport = function(){
			_s.mainHld_do.screen.addEventListener("touchstart", _s.scrollMDH);
			_s.mainHld_do.screen.addEventListener("mousedown", _s.scrollMDH);
			_s.thumbsHld_do.style().cursor = prt.handC;
			_s.stopToUpdateDrag();
		};
		
		_s.removeScrollSupport = function(){
			_s.mainHld_do.screen.removeEventListener("touchstart", _s.scrollMDH);
			_s.mainHld_do.screen.removeEventListener("mousedown", _s.scrollMDH);
			window.removeEventListener("touchend", _s.scrollMEH);
			window.removeEventListener("touchmove", _s.scrollMVH, {passive:false});
		};
		
		_s.scrollMDH = function(e){
			if(prt.isAnim) return;
			var vmc = FWDRLUtils.getViewportMouseCoordinates(e);

			window.addEventListener("mouseup", _s.scrollMEH);
			window.addEventListener("mousemove", _s.scrollMVH);
			window.addEventListener("touchend", _s.scrollMEH);
			window.addEventListener("touchmove", _s.scrollMVH, {passive:false});
			_s.isDragging2 = true;
			clearTimeout(_s.isMv_to);
			_s.isMv = false;
					
			_s.finalX = _s.lastFinalX = _s.thumbsHld_do.x;
			_s.lastPresedX = _s.lastPresedX2 = vmc.screenX;

			_s.thumbsHld_do.style().cursor = prt.grabC;
			prt.showDisable(true);
			_s.startToUpdateDrag();
		};
		
		_s.scrollMVH = function(e){
			if(e.preventDefault) e.preventDefault();
			var vmc = FWDRLUtils.getViewportMouseCoordinates(e);
			
			var toAdd = vmc.screenX - _s.lastPresedX;
			_s.finalX += toAdd;
			_s.finalX = Math.round(_s.finalX);
			
			var dx = vmc.screenX - _s.lastPresedX2;
			_s.lastPresedX = vmc.screenX;
			if(Math.abs(dx) > 5){
				_s.isDragging = true;
				prt.showDisable(true, true);
				_s.isMv = true;
			}
			FWDAnimation.killTweensOf(_s.thumbsHld_do)
			_s.thumbsHld_do.setX(_s.finalX);
		};
		
		_s.scrollMEH = function(e){
			_s.isDragging = _s.isDragging2 = false;
			clearTimeout(_s.isMv_to);
			_s.isMv_to = setTimeout(function(){
				_s.isMv = true;
			}, 200);
			
			
			prt.hideDisable();
			_s.thumbsHld_do.style().cursor = prt.handC;
			window.removeEventListener("mouseup", _s.scrollMEH);
			window.removeEventListener("mousemove", _s.scrollMVH);
			window.removeEventListener("touchend", _s.scrollMEH);
			window.removeEventListener("touchmove", _s.scrollMVH);
		};
	
		_s.stopToUpdateDrag = function(){
			FWDAnimation.killTweensOf(_s.thumbsHld_do)
			cancelAnimationFrame(_s.updateMov_af);
		}

		_s.startToUpdateDrag = function(){
			_s.stopToUpdateDrag();
			_s.updateDrag();
		}
		
		_s.updateDrag = function(){
			_s.updateMov_af = requestAnimationFrame(_s.updateDrag);
			
			if(_s.isDragging2){
				_s.vx = _s.finalX - _s.lastFinalX;
				_s.lastFinalX = _s.finalX;	
				if(Math.abs(_s.vx) < 20){
					_s.vx = 0;
				}
			}else{
				_s.vx *= prt.friction;		
				_s.finalX += _s.vx;

				if(_s.stageW <= _s.totalW){
					if(_s.finalX > prt.tempThumbnailsOffsetBottom){
						_s.vx2 = (prt.tempThumbnailsOffsetBottom - _s.finalX) * .3;
						_s.vx *= prt.friction;
						_s.finalX += _s.vx2;
					}else if(_s.finalX <= _s.stageW - _s.totalW - prt.tempThumbnailsOffsetBottom){
						_s.vx2 = (_s.stageW - _s.totalW - _s.finalX - prt.tempThumbnailsOffsetBottom) * .3;
						_s.vx *= prt.friction;
						_s.finalX += _s.vx2;
					}
				}else{
					_s.vx2 = ((_s.stageW - _s.totalW)/2 - _s.finalX) * .3;
					_s.vx *= prt.friction;
					_s.finalX += _s.vx2;
					
				}

				_s.finalX = parseFloat(_s.finalX.toFixed(2));				
				if(_s.prevFinalX == _s.finalX){
					_s.stopToUpdateDrag();
					_s.finalX = Math.round(_s.finalX);
				}
				
				FWDAnimation.killTweensOf(_s.thumbsHld_do);
				_s.thumbsHld_do.setX(_s.finalX);
				_s.prevFinalX = _s.finalX;
			}
		};
	
		
		/**
	  	 * Disable/enable thumbanils.
	     */
		_s.disableOrEnableThumbnails = function(){
			_s.id = prt.mId;
			if(!_s.thumbs_ar) return;
			var thumb;
			var totalThumbs = _s.thumbs_ar.length;
			for(var i=0; i<totalThumbs; i++){
				thumb = _s.thumbs_ar[i];
				if(i == prt.mId){
					thumb.disable();
				}else{
					thumb.enable();
				}
			}
			_s.positionThumbnails(true);
		};

		
		/**
	  	 * Destroy thumbanils.
	     */
		_s.destoryThumbnails = function(){
			if(!_s.areCreated && !_s.thumbs_ar) return;
			_s.areCreated = _s.allLoaded = false;
			clearTimeout(_s.allLoaded_to);
			var thumb;
			var totalThumbs = _s.thumbs_ar.length;
			for(var i=0; i<totalThumbs; i++){
				thumb = _s.thumbs_ar[i];
				FWDAnimation.killTweensOf(thumb);
				_s.thumbsHld_do.removeChild(thumb);
				thumb.destroy();
			}
			_s.thumbs_ar = null;
			_s.totalW = 0;
			_s.stopToLoadThumbanils();
			 _s.removeScrollSupport();
		};

		
		/**
	  	 * Show/hide.
	     */
		_s.show = function(animate){
			if(prt.isMax) return;
			_s.isShowed = true;
			FWDAnimation.killTweensOf(_s.mainHld_do);
			if(animate){
				FWDAnimation.to(_s.mainHld_do, .8, {y:-_s.stageH, ease:Expo.easeInOut});
			}else{
				_s.mainHld_do.setY(-_s.stageH);
			}
		};
		
		_s.hide = function(animate){
			_s.isShowed = false;
			FWDAnimation.killTweensOf(_s.mainHld_do);
			if(animate){
				FWDAnimation.to(_s.mainHld_do, .8, {y:0, ease:Expo.easeInOut});
			}else{
				_s.mainHld_do.setY(0);
			}
			_s.stopToUpdateDrag();
		};
		
		_s.hideForGood = function(){
			_s.mainHld_do.setY(-5000);
		};
		
		_s.init();
	};
		
	/**
  	 * Set prototype.
     */
	FWDRLThumbs.setPrototype = function(){
		FWDRLThumbs.prototype = new FWDRLDO("div", "relative");
	};
	
	FWDRLThumbs.prototype = null;
	window.FWDRLThumbs = FWDRLThumbs;
}(window));/**
 * Revolution Lightbox PACKAGED v3.0
 * Timer manager for the slideshow.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function(window){
	
	var FWDRLTimerManager = function(delay){

		'use strict';
		
		var _s = this;
		var prototpype = FWDRLTimerManager.prototype;
		
		_s.delay = delay;
		_s.isStopped = true;
		
		_s.stop = function(){
			if(_s.isStopped) return;
			_s.pause();
			_s.isStopped = true;
			_s.dispatchEvent(FWDRLTimerManager.STOP);
		};
		
		_s.start = function(){
			if(!_s.isStopped) return;
			_s.isStopped = false;
			clearTimeout(_s.timeOutId);
			_s.timeOutId = setTimeout(_s.onTimeHandler, _s.delay);
			_s.dispatchEvent(FWDRLTimerManager.START);
		};
		
		_s.pause = function(){
			if(_s.isStopped) return;
			clearTimeout(_s.timeOutId);
			_s.dispatchEvent(FWDRLTimerManager.PAUSE);
		};
		
		_s.resume = function(dl){
			if(_s.isStopped) return;
			clearTimeout(_s.timeOutId);
			_s.timeOutId = setTimeout(_s.onTimeHandler, _s.delay);
			_s.dispatchEvent(FWDRLTimerManager.RESUME);
		};
		
		_s.onTimeHandler = function(){
			_s.dispatchEvent(FWDRLTimerManager.TIME);
		};
	};

	FWDRLTimerManager.setProtptype = function(){
		FWDRLTimerManager.prototype = new FWDRLEventDispatcher();
	};
	
	FWDRLTimerManager.START = "start";
	FWDRLTimerManager.STOP = "stop";
	FWDRLTimerManager.RESUME = "resume";
	FWDRLTimerManager.PAUSE = "pause";
	FWDRLTimerManager.TIME = "time";
	
	FWDRLTimerManager.prototype = null;
	window.FWDRLTimerManager = FWDRLTimerManager;
	
}(window));//FWDRLUtils
(function (window){
	
	var FWDRLUtils = function(){};
	
	FWDRLUtils.dumy = document.createElement("div");
	
	//###################################//
	/* String */
	//###################################//
	FWDRLUtils.trim = function(str){
		return str.replace(/\s/gi, "");
	};
	
	FWDRLUtils.splitAndTrim = function(str, trim_bl){
		var array = str.split(",");
		var length = array.length;
		for(var i=0; i<length; i++){
			if(trim_bl) array[i] = FWDRLUtils.trim(array[i]);
		};
		return array;
	};

	//#############################################//
	//Array //
	//#############################################//
	FWDRLUtils.indexOfArray = function(array, prop){
		var length = array.length;
		for(var i=0; i<length; i++){
			if(array[i] === prop) return i;
		};
		return -1;
	};
	
	FWDRLUtils.randomizeArray = function(aArray) {
		var randomizedArray = [];
		var copyArray = aArray.concat();
			
		var length = copyArray.length;
		for(var i=0; i< length; i++) {
				var index = Math.floor(Math.random() * copyArray.length);
				randomizedArray.push(copyArray[index]);
				copyArray.splice(index,1);
			}
		return randomizedArray;
	};
	

	//#############################################//
	/*DOM manipulation */
	//#############################################//
	FWDRLUtils.prt = function (e, n){
		if(n === undefined) n = 1;
		while(n-- && e) e = e.parentNode;
		if(!e || e.nodeType !== 1) return null;
		return e;
	};
	
	FWDRLUtils.sibling = function(e, n){
		while (e && n !== 0){
			if(n > 0){
				if(e.nextElementSibling){
					 e = e.nextElementSibling;	 
				}else{
					for(var e = e.nextSibling; e && e.nodeType !== 1; e = e.nextSibling);
				}
				n--;
			}else{
				if(e.previousElementSibling){
					 e = e.previousElementSibling;	 
				}else{
					for(var e = e.previousSibling; e && e.nodeType !== 1; e = e.previousSibling);
				}
				n++;
			}
		}
		return e;
	};
	
	FWDRLUtils.getChildAt = function (e, n){
		var kids = FWDRLUtils.getChildren(e);
		if(n < 0) n += kids.length;
		if(n < 0) return null;
		return kids[n];
	};
	
	FWDRLUtils.getChildById = function(id){
		return document.getElementById(id) || undefined;
	};
	
	FWDRLUtils.getChildren = function(e, allNodesTypes){
		var kids = [];
		for(var c = e.firstChild; c != null; c = c.nextSibling){
			if(allNodesTypes){
				kids.push(c);
			}else if(c.nodeType === 1){
				kids.push(c);
			}
		}
		return kids;
	};
	
	FWDRLUtils.getChildrenFromAttribute = function(e, attr, allNodesTypes){
		var kids = [];
		for(var c = e.firstChild; c != null; c = c.nextSibling){
			if(allNodesTypes && FWDRLUtils.hasAttribute(c, attr)){
				kids.push(c);
			}else if(c.nodeType === 1 && FWDRLUtils.hasAttribute(c, attr)){
				kids.push(c);
			}
		}
		return kids.length == 0 ? undefined : kids;
	};
	
	FWDRLUtils.getChildFromNodeListFromAttribute = function(e, attr, allNodesTypes){
		for(var c = e.firstChild; c != null; c = c.nextSibling){
			if(allNodesTypes && FWDRLUtils.hasAttribute(c, attr)){
				return c;
			}else if(c.nodeType === 1 && FWDRLUtils.hasAttribute(c, attr)){
				return c;
			}
		}
		return undefined;
	};
	
	FWDRLUtils.getAttributeValue = function(e, attr){
		if(!FWDRLUtils.hasAttribute(e, attr)) return undefined;
		return e.getAttribute(attr);	
	};
	
	FWDRLUtils.hasAttribute = function(e, attr){
		if(e.hasAttribute){
			return e.hasAttribute(attr); 
		}else {
			var test = e.getAttribute(attr);
			return  test ? true : false;
		}
	};
	
	FWDRLUtils.insertNodeAt = function(prt, child, n){
		var children = FWDRLUtils.children(prt);
		if(n < 0 || n > children.length){
			throw new Error("invalid index!");
		}else {
			prt.insertBefore(child, children[n]);
		};
	};
	
	FWDRLUtils.hasCanvas = function(){
		return Boolean(document.createElement("canvas"));
	};
	
	//###################################//
	/* DOM geometry */
	//##################################//
	FWDRLUtils.hitTest = function(target, x, y){
		var hit = false;
		if(!target) throw Error("Hit test target is null!");
		var rect = target.getBoundingClientRect();
		
		if(x >= rect.left && x <= rect.left +(rect.right - rect.left) && y >= rect.top && y <= rect.top + (rect.bottom - rect.top)) return true;
		return false;
	};
	
	FWDRLUtils.getScrollOffsets = function(){
		//all browsers
		if(window.pageXOffset != null) return{x:window.pageXOffset, y:window.pageYOffset};
		
		//ie7/ie8
		if(document.compatMode == "CSS1Compat"){
			return({x:document.documentElement.scrollLeft, y:document.documentElement.scrollTop});
		}
	};
	
	FWDRLUtils.getViewportSize = function(){
		if(FWDRLUtils.hasPointerEvent && navigator.msMaxTouchPoints > 1){
			return {w:document.documentElement.clientWidth || window.innerWidth, h:document.documentElement.clientHeight || window.innerHeight};
		}
		
		if(FWDRLUtils.isMbl) return {w:window.innerWidth, h:window.innerHeight};
		return {w:document.documentElement.clientWidth || window.innerWidth, h:document.documentElement.clientHeight || window.innerHeight};
	};
	
	FWDRLUtils.getViewportMouseCoordinates = function(e){
		var offsets = FWDRLUtils.getScrollOffsets();
		
		if(e.touches){
			return{
				screenX:e.touches[0] == undefined ? e.touches.pageX - offsets.x :e.touches[0].pageX - offsets.x,
				screenY:e.touches[0] == undefined ? e.touches.pageY - offsets.y :e.touches[0].pageY - offsets.y
			};
		}
		
		return{
			screenX: e.clientX == undefined ? e.pageX - offsets.x : e.clientX,
			screenY: e.clientY == undefined ? e.pageY - offsets.y : e.clientY
		};
	};
	
	
	//###################################//
	/* Browsers test */
	//##################################//
	FWDRLUtils.hasPointerEvent = (function(){
		return Boolean(window.navigator.msPointerEnabled) || Boolean(window.navigator.pointerEnabled);
	}());
	
	FWDRLUtils.isMbl = (function (){
		if((FWDRLUtils.hasPointerEvent && navigator.msMaxTouchPoints > 1) || (FWDRLUtils.hasPointerEvent && navigator.maxTouchPoints > 1)) return true;
		var agents = ['android', 'webos', 'iphone', 'ipad', 'blackberry', 'kfsowi'];
	    for(i in agents) {
	    	 if(String(navigator.userAgent).toLowerCase().indexOf(String(agents[i]).toLowerCase()) != -1) {
	            return true;
	        }
	    }
	    if(navigator.platform.toLowerCase() === 'macintel' && navigator.maxTouchPoints > 1 && !window.MSStream) return true;
	    return false;
	}());
	
	FWDRLUtils.isAndroid = (function(){
		 return (navigator.userAgent.toLowerCase().indexOf("android".toLowerCase()) != -1);
	}());
	
	FWDRLUtils.isChrome = (function(){
		return navigator.userAgent.toLowerCase().indexOf('chrome') != -1;
	}());
	
	FWDRLUtils.isSafari = (function(){
		return navigator.userAgent.toLowerCase().indexOf('safari') != -1 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1;
	}());
	
	FWDRLUtils.isOpera = (function(){
		return navigator.userAgent.toLowerCase().indexOf('opera') != -1 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1;
	}());
	
	FWDRLUtils.isFirefox = (function(){
		return navigator.userAgent.toLowerCase().indexOf('firefox') != -1;
	}());
	
	FWDRLUtils.isIE = (function(){
		var isIE = Boolean(navigator.userAgent.toLowerCase().indexOf('msie') != -1) || Boolean(navigator.userAgent.toLowerCase().indexOf('edge') != -1);
		return Boolean(isIE || document.documentElement.msRequestFullscreen);
	}());
	
	FWDRLUtils.isIE11 = (function(){
		return Boolean(!FWDRLUtils.isIE && document.documentElement.msRequestFullscreen);
	}());
	
	FWDRLUtils.isIEAndLessThen9 = (function(){
		return navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 || navigator.userAgent.toLowerCase().indexOf("msie 8") != -1;
	}());
	
	FWDRLUtils.isIEAndLessThen10 = (function(){
		return navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 
		|| navigator.userAgent.toLowerCase().indexOf("msie 8") != -1
		|| navigator.userAgent.toLowerCase().indexOf("msie 9") != -1;
	}());
	
	FWDRLUtils.isIE7 = (function(){
		return navigator.userAgent.toLowerCase().indexOf("msie 7") != -1;
	}());
	
	FWDRLUtils.isIOS = (function(){
		return navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
	}());
	
	FWDRLUtils.isIphone = (function(){
		return navigator.userAgent.match(/(iPhone|iPod)/g);
	}());
	
	FWDRLUtils.isMAC = (function(){
		return navigator.appVersion.toLowerCase().indexOf('macintosh') != -1;
	}());
	
	FWDRLUtils.isLocal = (function(){
		return location.href.indexOf('file:') != -1;
	}());
	
	FWDRLUtils.hasFullScreen = (function(){
		return FWDRLUtils.dumy.requestFullScreen || FWDRLUtils.dumy.mozRequestFullScreen || FWDRLUtils.dumy.webkitRequestFullScreen || FWDRLUtils.dumy.msieRequestFullScreen;
	}());
	
	function get3d(){
	    var properties = ['transform', 'msTransform', 'WebkitTransform', 'MozTransform', 'OTransform', 'KhtmlTransform'];
	    var p;
	    var position;
	    while (p = properties.shift()) {
	       if (typeof FWDRLUtils.dumy.style[p] !== 'undefined') {
	    	   FWDRLUtils.dumy.style.position = "absolute";
	    	   position = FWDRLUtils.dumy.getBoundingClientRect().left;
	    	   FWDRLUtils.dumy.style[p] = 'translate3d(500px, 0px, 0px)';
	    	   position = Math.abs(FWDRLUtils.dumy.getBoundingClientRect().left - position);
	    	   
	           if(position > 100 && position < 900){
	        	   try{document.documentElement.removeChild(FWDRLUtils.dumy);}catch(e){}
	        	   return true;
	           }
	       }
	    }
	    try{document.documentElement.removeChild(FWDRLUtils.dumy);}catch(e){}
	    return false;
	};
	
	function get2d(){
	    var properties = ['transform', 'msTransform', 'WebkitTransform', 'MozTransform', 'OTransform', 'KhtmlTransform'];
	    var p;
	    while (p = properties.shift()) {
	       if (typeof FWDRLUtils.dumy.style[p] !== 'undefined') {
	    	   return true;
	       }
	    }
	    try{document.documentElement.removeChild(FWDRLUtils.dumy);}catch(e){}
	    return false;
	};	
	
	//###############################################//
	/* various utils */
	//###############################################//
	FWDRLUtils.onReady =  function(callbalk){
		if (document.addEventListener) {

			if (document. readyState === 'complete'){

			}else{
				document.addEventListener( "DOMContentLoaded", function(){
					callbalk();
				});
			}
		}else{
			document.onreadystatechange = function () {
				if (document.readyState == "complete") callbalk();
			};
		 }
	};
	
	FWDRLUtils.checkIfHasTransforms = function(){
		if(FWDRLUtils.isReadyMethodCalled_bl) return;
		document.documentElement.appendChild(FWDRLUtils.dumy);
		FWDRLUtils.hasTransform3d = get3d();
		FWDRLUtils.hasTransform2d = get2d();
		FWDRLUtils.isReadyMethodCalled_bl = true;
	};
	
	FWDRLUtils.disableElementSelection = function(e){
		try{e.style.userSelect = "none";}catch(e){};
		try{e.style.MozUserSelect = "none";}catch(e){};
		try{e.style.webkitUserSelect = "none";}catch(e){};
		try{e.style.khtmlUserSelect = "none";}catch(e){};
		try{e.style.oUserSelect = "none";}catch(e){};
		try{e.style.msUserSelect = "none";}catch(e){};
		try{e.msUserSelect = "none";}catch(e){};
		e.onselectstart = function(){return false;};
	};
	
	FWDRLUtils.getSearchArgs = function(){
		var args = {};
		var query = location.href.substr(location.href.indexOf("?") + 1);
		
		var pairs = query.split("&");
		
		for(var i=0; i< pairs.length; i++){
			var pos = pairs[i].indexOf("=");
			var name = pairs[i].substring(0,pos);
			var value = pairs[i].substring(pos + 1);
			value = decodeURIComponent(value);
			args[name] = value;
		}
		return args;
	};
	
	FWDRLUtils.getHashArgs = function(string){
		var args = {};
		var query = string.substr(string.indexOf("#") + 1) || location.hash.substring(1);
		var pairs = query.split("&");
		for(var i=0; i< pairs.length; i++){
			var pos = pairs[i].indexOf("=");
			var name = pairs[i].substring(0,pos);
			var value = pairs[i].substring(pos + 1);
			value = decodeURIComponent(value);
			args[name] = value;
		}
		return args;
	};
	
	
	FWDRLUtils.isReadyMethodCalled_bl = false;
	
	window.FWDRLUtils = FWDRLUtils;
}(window));

// FWDAnimation classs for tweeningn not allowed to modify or use outside this plugin!
var _fwd_fwdScope;window.FWDAnimation||(((_fwd_fwdScope="undefined"!=typeof fwd_module&&fwd_module.exports&&"undefined"!=typeof fwd_global?fwd_global:this||window)._fwd_fwdQueue||(_fwd_fwdScope._fwd_fwdQueue=[])).push(function(){"use strict";function y(t,e,i,r){i===r&&(i=r-(r-e)/1e6),t===e&&(e=t+(i-t)/1e6),this.a=t,this.b=e,this.c=i,this.d=r,this.da=r-t,this.ca=i-t,this.ba=e-t}function w(t,e,i,r){var s={a:t},n={},a={},o={c:r},l=(t+e)/2,h=(e+i)/2,f=(i+r)/2,u=(l+h)/2,p=(h+f)/2,_=(p-u)/8;return s.b=l+(t-l)/4,n.b=u+_,s.c=n.a=(s.b+n.b)/2,n.c=a.a=(u+p)/2,a.b=p-_,o.b=f+(r-f)/4,a.c=o.a=(a.b+o.b)/2,[s,n,a,o]}function _(t,e,i,r,s,n){var a,o,l,h,f,u,p,_,c={},d=[],m=n||t[0];for(o in s="string"==typeof s?","+s+",":",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",null==e&&(e=1),t[0])d.push(o);if(1<t.length){for(_=t[t.length-1],p=!0,a=d.length;-1<--a;)if(o=d[a],.05<Math.abs(m[o]-_[o])){p=!1;break}p&&(t=t.concat(),n&&t.unshift(n),t.push(t[1]),n=t[t.length-3])}for(T.length=P.length=O.length=0,a=d.length;-1<--a;)o=d[a],g[o]=-1!==s.indexOf(","+o+","),c[o]=function(t,e,i,r){var s,n,a,o,l,h,f=[];if(r)for(n=(t=[r].concat(t)).length;-1<--n;)"string"==typeof(h=t[n][e])&&"="===h.charAt(1)&&(t[n][e]=r[e]+Number(h.charAt(0)+h.substr(2)));if((s=t.length-2)<0)return f[0]=new y(t[0][e],0,0,t[s<-1?0:1][e]),f;for(n=0;n<s;n++)a=t[n][e],o=t[n+1][e],f[n]=new y(a,0,0,o),i&&(l=t[n+2][e],T[n]=(T[n]||0)+(o-a)*(o-a),P[n]=(P[n]||0)+(l-o)*(l-o));return f[n]=new y(t[n][e],0,0,t[n+1][e]),f}(t,o,g[o],n);for(a=T.length;-1<--a;)T[a]=Math.sqrt(T[a]),P[a]=Math.sqrt(P[a]);if(!r){for(a=d.length;-1<--a;)if(g[o])for(u=(l=c[d[a]]).length-1,h=0;h<u;h++)f=l[h+1].da/P[h]+l[h].da/T[h]||0,O[h]=(O[h]||0)+f*f;for(a=O.length;-1<--a;)O[a]=Math.sqrt(O[a])}for(a=d.length,h=i?4:1;-1<--a;)(function(t,e,i,r,s){for(var n,a,o,l,h,f,u,p,_,c,d,m,g=t.length-1,y=0,v=t[0].a,x=0;x<g;x++)n=(l=t[y]).a,a=l.d,o=t[y+1].d,u=s?(c=T[x],m=((d=P[x])+c)*e*.25/(!r&&O[x]||.5),a-((h=a-(a-n)*(r?.5*e:0!==c?m/c:0))+(((f=a+(o-a)*(r?.5*e:0!==d?m/d:0))-h)*(3*c/(c+d)+.5)/4||0))):a-((h=a-(a-n)*e*.5)+(f=a+(o-a)*e*.5))/2,h+=u,f+=u,l.c=p=h,l.b=0!==x?v:v=l.a+.6*(l.c-l.a),l.da=a-n,l.ca=p-n,l.ba=v-n,i?(_=w(n,v,p,a),t.splice(y,1,_[0],_[1],_[2],_[3]),y+=4):y++,v=f;(l=t[y]).b=v,l.c=v+.4*(l.d-v),l.da=l.d-l.a,l.ca=l.c-l.a,l.ba=v-l.a,i&&(_=w(l.a,v,l.c,l.d),t.splice(y,1,_[0],_[1],_[2],_[3]))})(l=c[o=d[a]],e,i,r,g[o]),p&&(l.splice(0,h),l.splice(l.length-h,h));return c}var b,T,P,O,g,i,m,t;_fwd_fwdScope.FWDFWD_fwdDefine("FWDAnimation",["core.FWDAnimation","core.FWDSimpleTimeline","FWDTweenLite"],function(m,f,g){function y(t){for(var e=[],i=t.length,r=0;r!==i;e.push(t[r++]));return e}function v(t,e,i){var r,s,n=t.cycle;for(r in n)s=n[r],t[r]="function"==typeof s?s(i,e[i]):s[i%s.length];delete t.cycle}var m=function(t,e,i){g.call(this,t,e,i),this._cycle=0,this._yoyo=!0===this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=m.prototype.render},x=1e-10,w=g._internals,T=w.isSelector,b=w.isArray,t=m.prototype=g.to({},.1,{}),P=[];m.version="1.19.0",t.constructor=m,t.kill()._gc=!1,m.killTweensOf=m.killDelayedCallsTo=g.killTweensOf,m.getTweensOf=g.getTweensOf,m.lagSmoothing=g.lagSmoothing,m.ticker=g.ticker,m.render=g.render,t.invalidate=function(){return this._yoyo=!0===this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),g.prototype.invalidate.call(this)},t.updateTo=function(t,e){var i,r=this.ratio,s=this.vars.immediateRender||t.immediateRender;for(i in e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay)),t)this.vars[i]=t[i];if(this._initted||s)if(e)this._initted=!1,s&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&g._onPluginEvent("_onDisable",this),.998<this._time/this._duration){var n=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(n,!0,!1)}else if(this._initted=!1,this._init(),0<this._time||s)for(var a,o=1/(1-r),l=this._firstPT;l;)a=l.s+l.c,l.c*=o,l.s=a-l.c,l=l._next;return this},t.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var r,s,n,a,o,l,h,f,u,p=this._dirty?this.totalDuration():this._totalDuration,_=this._time,c=this._totalTime,d=this._cycle,m=this._duration,g=this._rawPrevTime;if(p-1e-7<=t?(this._totalTime=p,this._cycle=this._repeat,this._yoyo&&0!=(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=m,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(r=!0,s="onComplete",i=i||this._timeline.autoRemoveChildren),0===m&&(!this._initted&&this.vars.lazy&&!i||(this._startTime===this._timeline._duration&&(t=0),(g<0||t<=0&&-1e-7<=t||g===x&&"isPause"!==this.data)&&g!==t&&(i=!0,x<g&&(s="onReverseComplete")),this._rawPrevTime=f=!e||t||g===t?t:x))):t<1e-7?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==c||0===m&&0<g)&&(s="onReverseComplete",r=this._reversed),t<0&&(this._active=!1,0===m&&(!this._initted&&this.vars.lazy&&!i||(0<=g&&(i=!0),this._rawPrevTime=f=!e||t||g===t?t:x))),this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(a=m+this._repeatDelay,this._cycle=this._totalTime/a>>0,0!==this._cycle&&this._cycle===this._totalTime/a&&c<=t&&this._cycle--,this._time=this._totalTime-this._cycle*a,this._yoyo&&0!=(1&this._cycle)&&(this._time=m-this._time),this._time>m?this._time=m:this._time<0&&(this._time=0)),this._easeType?(o=this._time/m,(1===(l=this._easeType)||3===l&&.5<=o)&&(o=1-o),3===l&&(o*=2),1===(h=this._easePower)?o*=o:2===h?o*=o*o:3===h?o*=o*o*o:4===h&&(o*=o*o*o*o),1===l?this.ratio=1-o:2===l?this.ratio=o:this._time/m<.5?this.ratio=o/2:this.ratio=1-o/2):this.ratio=this._ease.getRatio(this._time/m)),_!==this._time||i||d!==this._cycle){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=_,this._totalTime=c,this._rawPrevTime=g,this._cycle=d,w.lazyTweens.push(this),void(this._lazy=[t,e]);this._time&&!r?this.ratio=this._ease.getRatio(this._time/m):r&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(!1!==this._lazy&&(this._lazy=!1),this._active||!this._paused&&this._time!==_&&0<=t&&(this._active=!0),0===c&&(2===this._initted&&0<t&&this._init(),this._startAt&&(0<=t?this._startAt.render(t,e,i):s=s||"_dummyGS"),this.vars.onStart&&(0===this._totalTime&&0!==m||e||this._callback("onStart"))),n=this._firstPT;n;){n.f?n.t[n.p](n.c*this.ratio+n.s):(u=n.c*this.ratio+n.s,"x"==n.p?n.t.setX(u):"y"==n.p?n.t.setY(u):"z"==n.p?n.t.setZ(u):"angleX"==n.p?n.t.setAngleX(u):"angleY"==n.p?n.t.setAngleY(u):"angleZ"==n.p?n.t.setAngleZ(u):"w"==n.p?n.t.setWidth(u):"h"==n.p?n.t.setHeight(u):"alpha"==n.p?n.t.setAlpha(u):"scale"==n.p?n.t.setScale2(u):n.t[n.p]=u),n=n._next}this._onUpdate&&(t<0&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||this._totalTime===c&&!s||this._callback("onUpdate")),this._cycle!==d&&(e||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),s&&(this._gc&&!i||(t<0&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),r&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[s]&&this._callback(s),0===m&&this._rawPrevTime===x&&f!==x&&(this._rawPrevTime=0)))}else c!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate"))},m.to=function(t,e,i){return new m(t,e,i)},m.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new m(t,e,i)},m.fromTo=function(t,e,i,r){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,new m(t,e,r)},m.staggerTo=m.allTo=function(t,e,i,r,s,n,a){r=r||0;function o(){i.onComplete&&i.onComplete.apply(i.onCompleteScope||this,arguments),s.apply(a||i.callbackScope||this,n||P)}var l,h,f,u,p=0,_=[],c=i.cycle,d=i.startAt&&i.startAt.cycle;for(b(t)||("string"==typeof t&&(t=g.selector(t)||t),T(t)&&(t=y(t))),t=t||[],r<0&&((t=y(t)).reverse(),r*=-1),l=t.length-1,f=0;f<=l;f++){for(u in h={},i)h[u]=i[u];if(c&&(v(h,t,f),null!=h.duration&&(e=h.duration,delete h.duration)),d){for(u in d=h.startAt={},i.startAt)d[u]=i.startAt[u];v(h.startAt,t,f)}h.delay=p+(h.delay||0),f===l&&s&&(h.onComplete=o),_[f]=new m(t[f],e,h),p+=r}return _},m.staggerFrom=m.allFrom=function(t,e,i,r,s,n,a){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,m.staggerTo(t,e,i,r,s,n,a)},m.staggerFromTo=m.allFromTo=function(t,e,i,r,s,n,a,o){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,m.staggerTo(t,e,r,s,n,a,o)},m.delayedCall=function(t,e,i,r,s){return new m(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:r,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,useFrames:s,overwrite:0})},m.set=function(t,e){return new m(t,0,e)},m.isTweening=function(t){return 0<g.getTweensOf(t,!0).length};var n=function(t,e){for(var i=[],r=0,s=t._first;s;)s instanceof g?i[r++]=s:(e&&(i[r++]=s),r=(i=i.concat(n(s,e))).length),s=s._next;return i},u=m.getAllTweens=function(t){return n(m._rootTimeline,t).concat(n(m._rootFramesTimeline,t))};m.killAll=function(t,e,i,r){null==e&&(e=!0),null==i&&(i=!0);for(var s,n,a=u(0!=r),o=a.length,l=e&&i&&r,h=0;h<o;h++)n=a[h],(l||n instanceof f||(s=n.target===n.vars.onComplete)&&i||e&&!s)&&(t?n.totalTime(n._reversed?0:n.totalDuration()):n._enabled(!1,!1))},m.killChildTweensOf=function(t,e){if(null!=t){var i,r,s,n,a,o=w.tweenLookup;if("string"==typeof t&&(t=g.selector(t)||t),T(t)&&(t=y(t)),b(t))for(n=t.length;-1<--n;)m.killChildTweensOf(t[n],e);else{for(s in i=[],o)for(r=o[s].target.parentNode;r;)r===t&&(i=i.concat(o[s].tweens)),r=r.parentNode;for(a=i.length,n=0;n<a;n++)e&&i[n].totalTime(i[n].totalDuration()),i[n]._enabled(!1,!1)}}};function r(t,e,i,r){e=!1!==e,i=!1!==i;for(var s,n,a=u(r=!1!==r),o=e&&i&&r,l=a.length;-1<--l;)n=a[l],(o||n instanceof f||(s=n.target===n.vars.onComplete)&&i||e&&!s)&&n.paused(t)}return m.pauseAll=function(t,e,i){r(!0,t,e,i)},m.resumeAll=function(t,e,i){r(!1,t,e,i)},m.globalTimeScale=function(t){var e=m._rootTimeline,i=g.ticker.time;return arguments.length?(t=t||x,e._startTime=i-(i-e._startTime)*e._timeScale/t,e=m._rootFramesTimeline,i=g.ticker.frame,e._startTime=i-(i-e._startTime)*e._timeScale/t,e._timeScale=m._rootTimeline._timeScale=t):e._timeScale},t.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!=(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},t.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},t.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!=(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},t.duration=function(t){return arguments.length?m.prototype.duration.call(this,t):this._duration},t.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},t.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},t.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},t.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},m},!0),b=180/Math.PI,T=[],P=[],O=[],g={},i=_fwd_fwdScope.FWDFWD_fwdDefine.globals,m=_fwd_fwdScope.FWDFWD_fwdDefine.plugin({propName:"bezier",priority:-1,version:"1.3.7",API:2,fwd_global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._mod={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var r,s,n,a,o,l,h=e.values||[],f={},u=h[0],p=e.autoRotate||i.vars.orientToBezier;for(r in this._autoRotate=p?p instanceof Array?p:[["x","y","rotation",!0!==p&&Number(p)||0]]:null,u)this._props.push(r);for(n=this._props.length;-1<--n;)r=this._props[n],this._overwriteProps.push(r),s=this._func[r]="function"==typeof t[r],f[r]=s?t[r.indexOf("set")||"function"!=typeof t["get"+r.substr(3)]?r:"get"+r.substr(3)]():parseFloat(t[r]),o||f[r]!==h[0][r]&&(o=f);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?_(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):function(t,e,i){var r,s,n,a,o,l,h,f,u,p,_,c={},d="cubic"===(e=e||"soft")?3:2,m="soft"===e,g=[];if(m&&i&&(t=[i].concat(t)),null==t||t.length<1+d)throw"invalid Bezier data";for(u in t[0])g.push(u);for(l=g.length;-1<--l;){for(c[u=g[l]]=o=[],p=0,f=t.length,h=0;h<f;h++)r=null==i?t[h][u]:"string"==typeof(_=t[h][u])&&"="===_.charAt(1)?i[u]+Number(_.charAt(0)+_.substr(2)):Number(_),m&&1<h&&h<f-1&&(o[p++]=(r+o[p-2])/2),o[p++]=r;for(f=p-d+1,h=p=0;h<f;h+=d)r=o[h],s=o[h+1],n=o[h+2],a=2==d?0:o[h+3],o[p++]=_=3==d?new y(r,s,n,a):new y(r,(2*s+r)/3,(2*s+n)/3,n);o.length=p}return c}(h,e.type,f),this._segCount=this._beziers[r].length,this._timeRes&&(l=function(t,e){var i,r,s,n,a=[],o=[],l=0,h=0,f=(e=e>>0||6)-1,u=[],p=[];for(i in t)!function(t,e,i){for(var r,s,n,a,o,l,h,f,u,p,_,c=1/i,d=t.length;-1<--d;)for(n=(p=t[d]).a,a=p.d-n,o=p.c-n,l=p.b-n,r=s=0,f=1;f<=i;f++)r=s-(s=((h=c*f)*h*a+3*(u=1-h)*(h*o+u*l))*h),e[_=d*i+f-1]=(e[_]||0)+r*r}(t[i],a,e);for(s=a.length,r=0;r<s;r++)l+=Math.sqrt(a[r]),p[n=r%e]=l,n===f&&(h+=l,u[n=r/e>>0]=p,o[n]=h,l=0,p=[]);return{length:h,lengths:o,segments:u}}(this._beziers,this._timeRes),this._length=l.length,this._lengths=l.lengths,this._segments=l.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length),p=this._autoRotate)for(this._initialRotations=[],p[0]instanceof Array||(this._autoRotate=p=[p]),n=p.length;-1<--n;){for(a=0;a<3;a++)r=p[n][a],this._func[r]="function"==typeof t[r]&&t[r.indexOf("set")||"function"!=typeof t["get"+r.substr(3)]?r:"get"+r.substr(3)];r=p[n][2],this._initialRotations[n]=(this._func[r]?this._func[r].call(this._target):this._target[r])||0,this._overwriteProps.push(r)}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(t){var e,i,r,s,n,a,o,l,h,f=this._segCount,u=this._func,p=this._target,_=t!==this._startRatio;if(this._timeRes){if(l=this._lengths,h=this._curSeg,t*=this._length,T=this._li,t>this._l2&&T<f-1){for(o=f-1;T<o&&(this._l2=l[++T])<=t;);this._l1=l[T-1],this._li=T,this._curSeg=h=this._segments[T],this._s2=h[this._s1=this._si=0]}else if(t<this._l1&&0<T){for(;0<T&&(this._l1=l[--T])>=t;);0===T&&t<this._l1?this._l1=0:T++,this._l2=l[T],this._li=T,this._curSeg=h=this._segments[T],this._s1=h[(this._si=h.length-1)-1]||0,this._s2=h[this._si]}if(e=T,t-=this._l1,T=this._si,t>this._s2&&T<h.length-1){for(o=h.length-1;T<o&&(this._s2=h[++T])<=t;);this._s1=h[T-1],this._si=T}else if(t<this._s1&&0<T){for(;0<T&&(this._s1=h[--T])>=t;);0===T&&t<this._s1?this._s1=0:T++,this._s2=h[T],this._si=T}n=(T+(t-this._s1)/(this._s2-this._s1))*this._prec||0}else n=(t-(e=t<0?0:1<=t?f-1:f*t>>0)*(1/f))*f;for(i=1-n,T=this._props.length;-1<--T;)r=this._props[T],a=(n*n*(s=this._beziers[r][e]).da+3*i*(n*s.ca+i*s.ba))*n+s.a,this._mod[r]&&(a=this._mod[r](a,p)),u[r]?p[r](a):"x"==r?p.setX(a):"y"==r?p.setY(a):"z"==r?p.setZ(a):"angleX"==r?p.setAngleX(a):"angleY"==r?p.setAngleY(a):"angleZ"==r?p.setAngleZ(a):"w"==r?p.setWidth(a):"h"==r?p.setHeight(a):"alpha"==r?p.setAlpha(a):"scale"==r?p.setScale2(a):p[r]=a;if(this._autoRotate)for(var c,d,m,g,y,v,x,w=this._autoRotate,T=w.length;-1<--T;)r=w[T][2],v=w[T][3]||0,x=!0===w[T][4]?1:b,s=this._beziers[w[T][0]],c=this._beziers[w[T][1]],s&&c&&(s=s[e],c=c[e],d=s.a+(s.b-s.a)*n,d+=((g=s.b+(s.c-s.b)*n)-d)*n,g+=(s.c+(s.d-s.c)*n-g)*n,m=c.a+(c.b-c.a)*n,m+=((y=c.b+(c.c-c.b)*n)-m)*n,y+=(c.c+(c.d-c.c)*n-y)*n,a=_?Math.atan2(y-m,g-d)*x+v:this._initialRotations[T],this._mod[r]&&(a=this._mod[r](a,p)),u[r]?p[r](a):p[r]=a)}}),t=m.prototype,m.bezierThrough=_,m.cubicToQuadratic=w,m._autoCSS=!0,m.quadraticToCubic=function(t,e,i){return new y(t,(2*e+t)/3,(2*e+i)/3,i)},m._cssRegister=function(){var t,_,c,d,e=i.CSSPlugin;e&&(t=e._internals,_=t._parseToProxy,c=t._setPluginRatio,d=t.CSSPropTween,t._registerComplexSpecialProp("bezier",{parser:function(t,e,i,r,s,n){e instanceof Array&&(e={values:e}),n=new m;var a,o,l,h=e.values,f=h.length-1,u=[],p={};if(f<0)return s;for(a=0;a<=f;a++)l=_(t,h[a],r,s,n,f!==a),u[a]=l.end;for(o in e)p[o]=e[o];return p.values=u,(s=new d(t,"bezier",0,0,l.pt,2)).data=l,s.plugin=n,s.setRatio=c,0===p.autoRotate&&(p.autoRotate=!0),!p.autoRotate||p.autoRotate instanceof Array||(a=!0===p.autoRotate?0:Number(p.autoRotate),p.autoRotate=null!=l.end.left?[["left","top","rotation",a,!1]]:null!=l.end.x&&[["x","y","rotation",a,!1]]),p.autoRotate&&(r._transform||r._enableTransforms(!1),l.autoRotate=r._target._fwdTransform,l.proxy.rotation=l.autoRotate.rotation||0,r._overwriteProps.push("rotation")),n._onInitTween(l.proxy,p,r._tween),s}}))},t._mod=function(t){for(var e,i=this._overwriteProps,r=i.length;-1<--r;)(e=t[i[r]])&&"function"==typeof e&&(this._mod[i[r]]=e)},t._kill=function(t){var e,i,r=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=r.length;-1<--i;)r[i]===e&&r.splice(i,1);if(r=this._autoRotate)for(i=r.length;-1<--i;)t[r[i][2]]&&r.splice(i,1);return this._super._kill.call(this,t)},_fwd_fwdScope.FWDFWD_fwdDefine("plugins.CSSPlugin",["plugins.TweenPlugin","FWDTweenLite"],function(n,B){var c,P,O,d,W=function(){n.call(this,"css"),this._overwriteProps.length=0,this.setRatio=W.prototype.setRatio},h=_fwd_fwdScope.FWDFWD_fwdDefine.globals,m={},t=W.prototype=new n("css");(t.constructor=W).version="1.19.0",W.API=2,W.defaultTransformPerspective=0,W.defaultSkewType="compensated",W.defaultSmoothOrigin=!0,t="px",W.suffixMap={top:t,right:t,bottom:t,left:t,width:t,height:t,fontSize:t,padding:t,margin:t,perspective:t,lineHeight:""};function a(t,e){return e.toUpperCase()}function e(t){return K.createElementNS?K.createElementNS("http://www.w3.org/1999/xhtml",t):K.createElement(t)}function o(t){return N.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1}function g(t){window.console&&console.log(t)}function k(t,e){var i,r,s=(e=e||J).style;if(void 0!==s[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],r=5;-1<--r&&void 0===s[i[r]+t];);return 0<=r?(st="-"+(nt=3===r?"ms":i[r]).toLowerCase()+"-",nt+t):null}function y(t,e){var i,r,s,n={};if(e=e||at(t,null))if(i=e.length)for(;-1<--i;)-1!==(s=e[i]).indexOf("-transform")&&It!==s||(n[s.replace(p,a)]=e.getPropertyValue(s));else for(i in e)-1!==i.indexOf("Transform")&&Xt!==i||(n[i]=e[i]);else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===n[i]&&(n[i.replace(p,a)]=e[i]);return rt||(n.opacity=o(t)),r=Zt(t,e,!1),n.rotation=r.rotation,n.skewX=r.skewX,n.scaleX=r.scaleX,n.scaleY=r.scaleY,n.x=r.x,n.y=r.y,Yt&&(n.z=r.z,n.rotationX=r.rotationX,n.rotationY=r.rotationY,n.scaleZ=r.scaleZ),n.filters&&delete n.filters,n}function v(t,e,i,r,s){var n,a,o,l={},h=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||s&&s[a])&&-1===a.indexOf("Origin")&&("number"!=typeof n&&"string"!=typeof n||(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(f,"")?n:0:ht(t,a),void 0!==h[a]&&(o=new vt(h,a,h[a],o))));if(r)for(a in r)"className"!==a&&(l[a]=r[a]);return{difs:l,firstMPT:o}}function R(t,e){return"function"==typeof t&&(t=t(D,F)),"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)||0}function S(t,e){return"function"==typeof t&&(t=t(D,F)),null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)||0}function A(t,e,i,r){var s,n,a,o,l;return"function"==typeof t&&(t=t(D,F)),(o=null==t?e:"number"==typeof t?t:(s=360,n=t.split("_"),a=((l="="===t.charAt(1))?parseInt(t.charAt(0)+"1",10)*parseFloat(n[0].substr(2)):parseFloat(n[0]))*(-1===t.indexOf("rad")?1:G)-(l?0:e),n.length&&(r&&(r[i]=e+a),-1!==t.indexOf("short")&&(a%=s)!==a%180&&(a=a<0?a+s:a-s),-1!==t.indexOf("_cw")&&a<0?a=(a+3599999999640)%s-(a/s|0)*s:-1!==t.indexOf("ccw")&&0<a&&(a=(a-3599999999640)%s-(a/s|0)*s)),e+a))<1e-6&&-1e-6<o&&(o=0),o}function _(t,e,i){return 255*(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(i-e)*t*6:t<.5?i:3*t<2?e+(i-e)*(2/3-t)*6:e)+.5|0}function r(t,e){for(var i,r,s=t.match(dt)||[],n=0,a=s.length?"":t,o=0;o<s.length;o++)i=s[o],n+=(r=t.substr(n,t.indexOf(i,n)-n)).length+i.length,3===(i=ct(i,e)).length&&i.push(1),a+=r+(e?"hsla("+i[0]+","+i[1]+"%,"+i[2]+"%,"+i[3]:"rgba("+i.join(","))+")";return a+t.substr(n)}var M,x,w,Y,T,C,F,D,i,s,z=/(?:\-|\.|\b)(\d|\.|e\-)+/g,X=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,b=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,f=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,I=/(?:\d|\-|\+|=|#|\.)*/g,N=/opacity *= *([^)]*)/i,E=/opacity:([^;]*)/i,l=/alpha\(opacity *=.+?\)/i,L=/^(rgb|hsl)/,u=/([A-Z])/g,p=/-([a-z])/gi,j=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,V=/(?:Left|Right|Width)/i,q=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,Z=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,U=/,(?=[^\)]*(?:\(|$))/gi,$=/[\s,\(]/i,Q=Math.PI/180,G=180/Math.PI,H={},K=document,J=e("div"),tt=e("img"),et=W._internals={_specialProps:m},it=navigator.userAgent,rt=(i=it.indexOf("Android"),s=e("a"),w=-1!==it.indexOf("Safari")&&-1===it.indexOf("Chrome")&&(-1===i||3<Number(it.substr(i+8,1))),T=w&&Number(it.substr(it.indexOf("Version/")+8,1))<6,Y=-1!==it.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(it)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(it))&&(C=parseFloat(RegExp.$1)),!!s&&(s.style.cssText="top:1px;opacity:.55;",/^0.55/.test(s.style.opacity))),st="",nt="",at=K.defaultView?K.defaultView.getComputedStyle:function(){},ot=W.style=function(t,e,i,r,s){var n;return rt||"opacity"!==e?(!r&&t.style[e]?n=t.style[e]:(i=i||at(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(u,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==s||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:s):o(t)},lt=et.convertToPixels=function(t,e,i,r,s){if("px"===r||!r)return i;if("auto"===r||!i)return 0;var n,a,o,l=V.test(e),h=t,f=J.style,u=i<0,p=1===i;if(u&&(i=-i),p&&(i*=100),"%"===r&&-1!==e.indexOf("border"))n=i/100*(l?t.clientWidth:t.clientHeight);else{if(f.cssText="border:0 solid red;position:"+ot(t,"position")+";line-height:0;","%"!==r&&h.appendChild&&"v"!==r.charAt(0)&&"rem"!==r)f[l?"borderLeftWidth":"borderTopWidth"]=i+r;else{if(a=(h=t.parentNode||K.body)._fwdCache,o=B.ticker.frame,a&&l&&a.time===o)return a.width*i/100;f[l?"width":"height"]=i+r}h.appendChild(J),n=parseFloat(J[l?"offsetWidth":"offsetHeight"]),h.removeChild(J),l&&"%"===r&&!1!==W.cacheWidths&&((a=h._fwdCache=h._fwdCache||{}).time=o,a.width=n/i*100),0!==n||s||(n=lt(t,e,i,r,!0))}return p&&(n/=100),u?-n:n},ht=et.calculateOffset=function(t,e,i){if("absolute"!==ot(t,"position",i))return 0;var r="left"===e?"Left":"Top",s=ot(t,"margin"+r,i);return t["offset"+r]-(lt(t,e,parseFloat(s),s.replace(I,""))||0)},ft={width:["Left","Right"],height:["Top","Bottom"]},ut=["marginLeft","marginRight","marginTop","marginBottom"],pt=function(t,e){if("contain"===t||"auto"===t||"auto auto"===t)return t+" ";null!=t&&""!==t||(t="0 0");var i,r=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":r[0],n=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":r[1];if(3<r.length&&!e){for(r=t.split(", ").join(",").split(","),t=[],i=0;i<r.length;i++)t.push(pt(r[i]));return t.join(",")}return null==n?n="center"===s?"50%":"0":"center"===n&&(n="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),t=s+" "+n+(2<r.length?" "+r[2]:""),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==n.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===n.charAt(1),e.ox=parseFloat(s.replace(f,"")),e.oy=parseFloat(n.replace(f,"")),e.v=t),e||t},_t={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ct=W.parseColor=function(t,e){var i,r,s,n,a,o,l,h,f,u,p;if(t)if("number"==typeof t)i=[t>>16,t>>8&255,255&t];else{if(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),_t[t])i=_t[t];else if("#"===t.charAt(0))4===t.length&&(t="#"+(r=t.charAt(1))+r+(s=t.charAt(2))+s+(n=t.charAt(3))+n),i=[(t=parseInt(t.substr(1),16))>>16,t>>8&255,255&t];else if("hsl"===t.substr(0,3))if(i=p=t.match(z),e){if(-1!==t.indexOf("="))return t.match(X)}else a=Number(i[0])%360/360,o=Number(i[1])/100,r=2*(l=Number(i[2])/100)-(s=l<=.5?l*(o+1):l+o-l*o),3<i.length&&(i[3]=Number(t[3])),i[0]=_(a+1/3,r,s),i[1]=_(a,r,s),i[2]=_(a-1/3,r,s);else i=t.match(z)||_t.transparent;i[0]=Number(i[0]),i[1]=Number(i[1]),i[2]=Number(i[2]),3<i.length&&(i[3]=Number(i[3]))}else i=_t.black;return e&&!p&&(r=i[0]/255,s=i[1]/255,n=i[2]/255,l=((h=Math.max(r,s,n))+(f=Math.min(r,s,n)))/2,h===f?a=o=0:(u=h-f,o=.5<l?u/(2-h-f):u/(h+f),a=h===r?(s-n)/u+(s<n?6:0):h===s?(n-r)/u+2:(r-s)/u+4,a*=60),i[0]=a+.5|0,i[1]=100*o+.5|0,i[2]=100*l+.5|0),i},dt="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(t in _t)dt+="|"+t+"\\b";dt=new RegExp(dt+")","gi"),W.colorStringFilter=function(t){var e,i=t[0]+t[1];dt.test(i)&&(e=-1!==i.indexOf("hsl(")||-1!==i.indexOf("hsla("),t[0]=r(t[0],e),t[1]=r(t[1],e)),dt.lastIndex=0},B.defaultStringFilter||(B.defaultStringFilter=W.colorStringFilter);function mt(t,e,n,a){if(null==t)return function(t){return t};var o,l=e?(t.match(dt)||[""])[0]:"",h=t.split(l).join("").match(b)||[],f=t.substr(0,t.indexOf(h[0])),u=")"===t.charAt(t.length-1)?")":"",p=-1!==t.indexOf(" ")?" ":",",_=h.length,c=0<_?h[0].replace(z,""):"";return _?o=e?function(t){var e,i,r,s;if("number"==typeof t)t+=c;else if(a&&U.test(t)){for(s=t.replace(U,"|").split("|"),r=0;r<s.length;r++)s[r]=o(s[r]);return s.join(",")}if(e=(t.match(dt)||[l])[0],r=(i=t.split(e).join("").match(b)||[]).length,_>r--)for(;++r<_;)i[r]=n?i[(r-1)/2|0]:h[r];return f+i.join(p)+p+e+u+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,i,r;if("number"==typeof t)t+=c;else if(a&&U.test(t)){for(i=t.replace(U,"|").split("|"),r=0;r<i.length;r++)i[r]=o(i[r]);return i.join(",")}if(r=(e=t.match(b)||[]).length,_>r--)for(;++r<_;)e[r]=n?e[(r-1)/2|0]:h[r];return f+e.join(p)+u}:function(t){return t}}function gt(h){return h=h.split(","),function(t,e,i,r,s,n,a){var o,l=(e+"").split(" ");for(a={},o=0;o<4;o++)a[h[o]]=l[o]=l[o]||l[(o-1)/2>>0];return r.parse(t,a,s,n)}}et._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,r,s,n,a=this.data,o=a.proxy,l=a.firstMPT;l;)e=o[l.v],l.r?e=Math.round(e):e<1e-6&&-1e-6<e&&(e=0),l.t[l.p]=e,l=l._next;if(a.autoRotate&&(a.autoRotate.rotation=a.mod?a.mod(o.rotation,this.t):o.rotation),1===t||0===t)for(l=a.firstMPT,n=1===t?"e":"b";l;){if((i=l.t).type){if(1===i.type){for(s=i.xs0+i.s+i.xs1,r=1;r<i.l;r++)s+=i["xn"+r]+i["xs"+(r+1)];i[n]=s}}else i[n]=i.s+i.xs0;l=l._next}};function yt(t,e,i,r,s,n){var a=new xt(t,e,i,r-i,s,-1,n);return a.b=i,a.e=a.xs0=r,a}var vt=function(t,e,i,r,s){this.t=t,this.p=e,this.v=i,this.r=s,r&&((r._prev=this)._next=r)},xt=(et._parseToProxy=function(t,e,i,r,s,n){var a,o,l,h,f,u=r,p={},_={},c=i._transform,d=H;for(i._transform=null,H=e,r=f=i.parse(t,e,r,s),H=d,n&&(i._transform=c,u&&(u._prev=null,u._prev&&(u._prev._next=null)));r&&r!==u;){if(r.type<=1&&(_[o=r.p]=r.s+r.c,p[o]=r.s,n||(h=new vt(r,"s",o,h,r.r),r.c=0),1===r.type))for(a=r.l;0<--a;)l="xn"+a,_[o=r.p+"_"+l]=r.data[l],p[o]=r[l],n||(h=new vt(r,l,o,h,r.rxp[l]));r=r._next}return{proxy:p,end:_,firstMPT:h,pt:f}},et.CSSPropTween=function(t,e,i,r,s,n,a,o,l,h,f){this.t=t,this.p=e,this.s=i,this.c=r,this.n=a||e,t instanceof xt||d.push(this.n),this.r=o,this.type=n||0,l&&(this.pr=l,c=!0),this.b=void 0===h?i:h,this.e=void 0===f?i+r:f,s&&((this._next=s)._prev=this)}),wt=W.parseComplex=function(t,e,i,r,s,n,a,o,l,h){i=i||n||"","function"==typeof r&&(r=r(D,F)),a=new xt(t,e,0,0,a,h?2:1,null,!1,o,i,r),r+="",s&&dt.test(r+i)&&(r=[i,r],W.colorStringFilter(r),i=r[0],r=r[1]);var f,u,p,_,c,d,m,g,y,v,x,w,T,b=i.split(", ").join(",").split(" "),P=r.split(", ").join(",").split(" "),O=b.length,k=!1!==M;for(-1===r.indexOf(",")&&-1===i.indexOf(",")||(b=b.join(" ").replace(U,", ").split(" "),P=P.join(" ").replace(U,", ").split(" "),O=b.length),O!==P.length&&(O=(b=(n||"").split(" ")).length),a.plugin=l,a.setRatio=h,f=dt.lastIndex=0;f<O;f++)if(_=b[f],c=P[f],(g=parseFloat(_))||0===g)a.appendXtra("",g,R(c,g),c.replace(X,""),k&&-1!==c.indexOf("px"),!0);else if(s&&dt.test(_))w=")"+((w=c.indexOf(")")+1)?c.substr(w):""),T=-1!==c.indexOf("hsl")&&rt,_=ct(_,T),c=ct(c,T),(y=6<_.length+c.length)&&!rt&&0===c[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(P[f]).join("transparent")):(rt||(y=!1),T?a.appendXtra(y?"hsla(":"hsl(",_[0],R(c[0],_[0]),",",!1,!0).appendXtra("",_[1],R(c[1],_[1]),"%,",!1).appendXtra("",_[2],R(c[2],_[2]),y?"%,":"%"+w,!1):a.appendXtra(y?"rgba(":"rgb(",_[0],c[0]-_[0],",",!0,!0).appendXtra("",_[1],c[1]-_[1],",",!0).appendXtra("",_[2],c[2]-_[2],y?",":w,!0),y&&(_=_.length<4?1:_[3],a.appendXtra("",_,(c.length<4?1:c[3])-_,w,!1))),dt.lastIndex=0;else if(d=_.match(z)){if(!(m=c.match(X))||m.length!==d.length)return a;for(u=p=0;u<d.length;u++)x=d[u],v=_.indexOf(x,p),a.appendXtra(_.substr(p,v-p),Number(x),R(m[u],x),"",k&&"px"===_.substr(v+x.length,2),0===u),p=v+x.length;a["xs"+a.l]+=_.substr(p)}else a["xs"+a.l]+=a.l||a["xs"+a.l]?" "+c:c;if(-1!==r.indexOf("=")&&a.data){for(w=a.xs0+a.data.s,f=1;f<a.l;f++)w+=a["xs"+f]+a.data["xn"+f];a.e=w+a["xs"+f]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},Tt=9;for((t=xt.prototype).l=t.pr=0;0<--Tt;)t["xn"+Tt]=0,t["xs"+Tt]="";t.xs0="",t._next=t._prev=t.xfirst=t.data=t.plugin=t.setRatio=t.rxp=null,t.appendXtra=function(t,e,i,r,s,n){var a=this,o=a.l;return a["xs"+o]+=n&&(o||a["xs"+o])?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=r||"",0<o?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=s,a["xn"+o]=e,a.plugin||(a.xfirst=new xt(a,"xn"+o,e,i,a.xfirst||a,0,a.n,s,a.pr),a.xfirst.xs0=0)):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=s),a):(a["xs"+o]+=e+(r||""),a)};function bt(t,e){e=e||{},this.p=e.prefix&&k(t)||t,(m[t]=m[this.p]=this).format=e.formatter||mt(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0}var Pt=et._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var r,s=t.split(","),n=e.defaultValue;for(i=i||[n],r=0;r<s.length;r++)e.prefix=0===r&&e.prefix,e.defaultValue=i[r]||n,new bt(s[r],e)},Ot=et._registerPluginProp=function(t){var l;m[t]||(l=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin",Pt(t,{parser:function(t,e,i,r,s,n,a){var o=h.com.fwd.plugins[l];return o?(o._cssRegister(),m[i].parse(t,e,i,r,s,n,a)):(g("Error: "+l+" js file not loaded."),s)}}))};(t=bt.prototype).parseComplex=function(t,e,i,r,s,n){var a,o,l,h,f,u,p=this.keyword;if(this.multi&&(U.test(i)||U.test(e)?(o=e.replace(U,"|").split("|"),l=i.replace(U,"|").split("|")):p&&(o=[e],l=[i])),l){for(h=l.length>o.length?l.length:o.length,a=0;a<h;a++)e=o[a]=o[a]||this.dflt,i=l[a]=l[a]||this.dflt,p&&(f=e.indexOf(p))!==(u=i.indexOf(p))&&(-1===u?o[a]=o[a].split(p).join(""):-1===f&&(o[a]+=" "+p));e=o.join(", "),i=l.join(", ")}return wt(t,this.p,e,i,this.clrs,this.dflt,r,this.pr,s,n)},t.parse=function(t,e,i,r,s,n,a){return this.parseComplex(t.style,this.format(ot(t,this.p,O,!1,this.dflt)),this.format(e),s,n)},W.registerSpecialProp=function(t,l,h){Pt(t,{parser:function(t,e,i,r,s,n,a){var o=new xt(t,i,0,0,s,2,i,!1,h);return o.plugin=n,o.setRatio=l(t,e,r._tween,i),o},priority:h})},W.useSVGTransformAttr=w||Y;function kt(t,e,i){var r,s=K.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(r in i)s.setAttributeNS(null,r.replace(n,"$1-$2").toLowerCase(),i[r]);return e.appendChild(s),s}function Rt(t,e,i,r,s,n){var a,o,l,h,f,u,p,_,c,d,m,g,y,v,x=t._fwdTransform,w=qt(t,!0);x&&(y=x.xOrigin,v=x.yOrigin),(!r||(a=r.split(" ")).length<2)&&(p=t.getBBox(),a=[(-1!==(e=pt(e).split(" "))[0].indexOf("%")?parseFloat(e[0])/100*p.width:parseFloat(e[0]))+p.x,(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*p.height:parseFloat(e[1]))+p.y]),i.xOrigin=h=parseFloat(a[0]),i.yOrigin=f=parseFloat(a[1]),r&&w!==Vt&&(u=w[0],p=w[1],_=w[2],c=w[3],d=w[4],o=h*(c/(g=u*c-p*_))+f*(-_/g)+(_*(m=w[5])-c*d)/g,l=h*(-p/g)+f*(u/g)-(u*m-p*d)/g,h=i.xOrigin=a[0]=o,f=i.yOrigin=a[1]=l),x&&(n&&(i.xOffset=x.xOffset,i.yOffset=x.yOffset,x=i),s||!1!==s&&!1!==W.defaultSmoothOrigin?(o=h-y,l=f-v,x.xOffset+=o*w[0]+l*w[2]-o,x.yOffset+=o*w[1]+l*w[3]-l):x.xOffset=x.yOffset=0),n||t.setAttribute("data-svg-origin",a.join(" "))}function St(t){var e,i,r=this.data,s=-r.rotation*Q,n=s+r.skewX*Q,a=1e5,o=(Math.cos(s)*r.scaleX*a|0)/a,l=(Math.sin(s)*r.scaleX*a|0)/a,h=(Math.sin(n)*-r.scaleY*a|0)/a,f=(Math.cos(n)*r.scaleY*a|0)/a,u=this.t.style,p=this.t.currentStyle;if(p){i=l,l=-h,h=-i,e=p.filter,u.filter="";var _=this.t.offsetWidth,c=this.t.offsetHeight,d="absolute"!==p.position,m="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+h+", M22="+f,g=r.x+_*r.xPercent/100,y=r.y+c*r.yPercent/100;if(null!=r.ox&&(g+=(b=(r.oxp?_*r.ox*.01:r.ox)-_/2)-(b*o+(P=(r.oyp?c*r.oy*.01:r.oy)-c/2)*l),y+=P-(b*h+P*f)),m+=d?", Dx="+((b=_/2)-(b*o+(P=c/2)*l)+g)+", Dy="+(P-(b*h+P*f)+y)+")":", sizingMethod='auto expand')",-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?u.filter=e.replace(Z,m):u.filter=m+" "+e,0!==t&&1!==t||1==o&&0===l&&0===h&&1==f&&(d&&-1===m.indexOf("Dx=0, Dy=0")||N.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf(e.indexOf("Alpha"))&&u.removeAttribute("filter")),!d){var v,x,w,T=C<8?1:-1,b=r.ieOffsetX||0,P=r.ieOffsetY||0;for(r.ieOffsetX=Math.round((_-((o<0?-o:o)*_+(l<0?-l:l)*c))/2+g),r.ieOffsetY=Math.round((c-((f<0?-f:f)*c+(h<0?-h:h)*_))/2+y),Tt=0;Tt<4;Tt++)w=(i=-1!==(v=p[x=ut[Tt]]).indexOf("px")?parseFloat(v):lt(this.t,x,parseFloat(v),v.replace(I,""))||0)!==r[x]?Tt<2?-r.ieOffsetX:-r.ieOffsetY:Tt<2?b-r.ieOffsetX:P-r.ieOffsetY,u[x]=(r[x]=Math.round(i-w*(0===Tt||2===Tt?1:T)))+"px"}}}var At,Mt,Ct,Ft,Dt,zt="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Xt=k("transform"),It=st+"transform",Nt=k("transformOrigin"),Yt=null!==k("perspective"),Et=et.Transform=function(){this.perspective=parseFloat(W.defaultTransformPerspective)||0,this.force3D=!(!1===W.defaultForce3D||!Yt)&&(W.defaultForce3D||"auto")},Bt=window.SVGElement,Wt=K.documentElement,Lt=(Dt=C||/Android/i.test(it)&&!window.chrome,K.createElementNS&&!Dt&&(Mt=kt("svg",Wt),Ft=(Ct=kt("rect",Mt,{width:100,height:50,x:100})).getBoundingClientRect().width,Ct.style[Nt]="50% 50%",Ct.style[Xt]="scaleX(0.5)",Dt=Ft===Ct.getBoundingClientRect().width&&!(Y&&Yt),Wt.removeChild(Mt)),Dt),jt=function(t){return!!(Bt&&t.getBBox&&t.getCTM&&function(t){try{return t.getBBox()}catch(t){}}(t)&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM))},Vt=[1,0,0,1,0,0],qt=function(t,e){var i,r,s,n,a,o,l=t._fwdTransform||new Et,h=t.style;if(Xt?r=ot(t,It,null,!0):t.currentStyle&&(r=(r=t.currentStyle.filter.match(q))&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),l.x||0,l.y||0].join(","):""),(i=!r||"none"===r||"matrix(1, 0, 0, 1, 0, 0)"===r)&&Xt&&((o="none"===at(t).display)||!t.parentNode)&&(o&&(n=h.display,h.display="block"),t.parentNode||(a=1,Wt.appendChild(t)),i=!(r=ot(t,It,null,!0))||"none"===r||"matrix(1, 0, 0, 1, 0, 0)"===r,n?h.display=n:o&&Gt(h,"display"),a&&Wt.removeChild(t)),(l.svg||t.getBBox&&jt(t))&&(i&&-1!==(h[Xt]+"").indexOf("matrix")&&(r=h[Xt],i=0),s=t.getAttribute("transform"),i&&s&&(-1!==s.indexOf("matrix")?(r=s,i=0):-1!==s.indexOf("translate")&&(r="matrix(1,0,0,1,"+s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",i=0))),i)return Vt;for(s=(r||"").match(z)||[],Tt=s.length;-1<--Tt;)n=Number(s[Tt]),s[Tt]=(a=n-(n|=0))?(1e5*a+(a<0?-.5:.5)|0)/1e5+n:n;return e&&6<s.length?[s[0],s[1],s[4],s[5],s[12],s[13]]:s},Zt=et.getTransform=function(t,e,i,r){if(t._fwdTransform&&i&&!r)return t._fwdTransform;var s,n,a,o,l,h,f,u,p,_,c,d,m,g,y,v,x,w,T,b,P,O,k,R,S,A,M,C,F,D,z,X,I=i&&t._fwdTransform||new Et,N=I.scaleX<0,Y=Yt&&(parseFloat(ot(t,Nt,e,!1,"0 0 0").split(" ")[2])||I.zOrigin)||0,E=parseFloat(W.defaultTransformPerspective)||0;if(I.svg=!(!t.getBBox||!jt(t)),I.svg&&(Rt(t,ot(t,Nt,e,!1,"50% 50%")+"",I,t.getAttribute("data-svg-origin")),At=W.useSVGTransformAttr||Lt),(s=qt(t))!==Vt)for(n in 16===s.length?(f=s[0],u=s[1],p=s[2],_=s[3],c=s[4],d=s[5],m=s[6],g=s[7],y=s[8],v=s[9],x=s[10],w=s[12],T=s[13],b=s[14],P=s[11],O=Math.atan2(m,x),I.zOrigin&&(w=y*(b=-I.zOrigin)-s[12],T=v*b-s[13],b=x*b+I.zOrigin-s[14]),I.rotationX=O*G,O&&(k=c*(A=Math.cos(-O))+y*(M=Math.sin(-O)),R=d*A+v*M,S=m*A+x*M,y=c*-M+y*A,v=d*-M+v*A,x=m*-M+x*A,P=g*-M+P*A,c=k,d=R,m=S),O=Math.atan2(-p,x),I.rotationY=O*G,O&&(R=u*(A=Math.cos(-O))-v*(M=Math.sin(-O)),S=p*A-x*M,v=u*M+v*A,x=p*M+x*A,P=_*M+P*A,f=k=f*A-y*M,u=R,p=S),O=Math.atan2(u,f),I.rotation=O*G,O&&(f=f*(A=Math.cos(-O))+c*(M=Math.sin(-O)),R=u*A+d*M,d=u*-M+d*A,m=p*-M+m*A,u=R),I.rotationX&&359.9<Math.abs(I.rotationX)+Math.abs(I.rotation)&&(I.rotationX=I.rotation=0,I.rotationY=180-I.rotationY),I.scaleX=(1e5*Math.sqrt(f*f+u*u)+.5|0)/1e5,I.scaleY=(1e5*Math.sqrt(d*d+v*v)+.5|0)/1e5,I.scaleZ=(1e5*Math.sqrt(m*m+x*x)+.5|0)/1e5,I.rotationX||I.rotationY?I.skewX=0:(I.skewX=c||d?Math.atan2(c,d)*G+I.rotation:I.skewX||0,90<Math.abs(I.skewX)&&Math.abs(I.skewX)<270&&(N?(I.scaleX*=-1,I.skewX+=I.rotation<=0?180:-180,I.rotation+=I.rotation<=0?180:-180):(I.scaleY*=-1,I.skewX+=I.skewX<=0?180:-180))),I.perspective=P?1/(P<0?-P:P):0,I.x=w,I.y=T,I.z=b,I.svg&&(I.x-=I.xOrigin-(I.xOrigin*f-I.yOrigin*c),I.y-=I.yOrigin-(I.yOrigin*u-I.xOrigin*d))):Yt&&!r&&s.length&&I.x===s[4]&&I.y===s[5]&&(I.rotationX||I.rotationY)||(F=(C=6<=s.length)?s[0]:1,D=s[1]||0,z=s[2]||0,X=C?s[3]:1,I.x=s[4]||0,I.y=s[5]||0,a=Math.sqrt(F*F+D*D),o=Math.sqrt(X*X+z*z),l=F||D?Math.atan2(D,F)*G:I.rotation||0,h=z||X?Math.atan2(z,X)*G+l:I.skewX||0,90<Math.abs(h)&&Math.abs(h)<270&&(N?(a*=-1,h+=l<=0?180:-180,l+=l<=0?180:-180):(o*=-1,h+=h<=0?180:-180)),I.scaleX=a,I.scaleY=o,I.rotation=l,I.skewX=h,Yt&&(I.rotationX=I.rotationY=I.z=0,I.perspective=E,I.scaleZ=1),I.svg&&(I.x-=I.xOrigin-(I.xOrigin*F+I.yOrigin*z),I.y-=I.yOrigin-(I.xOrigin*D+I.yOrigin*X))),I.zOrigin=Y,I)I[n]<2e-5&&-2e-5<I[n]&&(I[n]=0);return i&&(t._fwdTransform=I).svg&&(At&&t.style[Xt]?B.delayedCall(.001,function(){Gt(t.style,Xt)}):!At&&t.getAttribute("transform")&&B.delayedCall(.001,function(){t.removeAttribute("transform")})),I},Ut=et.set3DTransformRatio=et.setTransformRatio=function(t){var e,i,r,s,n,a,o,l,h,f,u,p,_,c,d,m,g,y,v,x,w,T,b,P=this.data,O=this.t.style,k=P.rotation,R=P.rotationX,S=P.rotationY,A=P.scaleX,M=P.scaleY,C=P.scaleZ,F=P.x,D=P.y,z=P.z,X=P.svg,I=P.perspective,N=P.force3D;if(!((1!==t&&0!==t||"auto"!==N||this.tween._totalTime!==this.tween._totalDuration&&this.tween._totalTime)&&N||z||I||S||R||1!==C)||At&&X||!Yt)k||P.skewX||X?(k*=Q,T=P.skewX*Q,b=1e5,e=Math.cos(k)*A,s=Math.sin(k)*A,i=Math.sin(k-T)*-M,n=Math.cos(k-T)*M,T&&"simple"===P.skewType&&(g=Math.tan(T-P.skewY*Q),i*=g=Math.sqrt(1+g*g),n*=g,P.skewY&&(g=Math.tan(P.skewY*Q),e*=g=Math.sqrt(1+g*g),s*=g)),X&&(F+=P.xOrigin-(P.xOrigin*e+P.yOrigin*i)+P.xOffset,D+=P.yOrigin-(P.xOrigin*s+P.yOrigin*n)+P.yOffset,At&&(P.xPercent||P.yPercent)&&(c=this.t.getBBox(),F+=.01*P.xPercent*c.width,D+=.01*P.yPercent*c.height),F<(c=1e-6)&&-c<F&&(F=0),D<c&&-c<D&&(D=0)),v=(e*b|0)/b+","+(s*b|0)/b+","+(i*b|0)/b+","+(n*b|0)/b+","+F+","+D+")",X&&At?this.t.setAttribute("transform","matrix("+v):O[Xt]=(P.xPercent||P.yPercent?"translate("+P.xPercent+"%,"+P.yPercent+"%) matrix(":"matrix(")+v):O[Xt]=(P.xPercent||P.yPercent?"translate("+P.xPercent+"%,"+P.yPercent+"%) matrix(":"matrix(")+A+",0,0,"+M+","+F+","+D+")";else{if(Y&&(A<(c=1e-4)&&-c<A&&(A=C=2e-5),M<c&&-c<M&&(M=C=2e-5),!I||P.z||P.rotationX||P.rotationY||(I=0)),k||P.skewX)k*=Q,d=e=Math.cos(k),m=s=Math.sin(k),P.skewX&&(k-=P.skewX*Q,d=Math.cos(k),m=Math.sin(k),"simple"===P.skewType&&(g=Math.tan((P.skewX-P.skewY)*Q),d*=g=Math.sqrt(1+g*g),m*=g,P.skewY&&(g=Math.tan(P.skewY*Q),e*=g=Math.sqrt(1+g*g),s*=g))),i=-m,n=d;else{if(!(S||R||1!==C||I||X))return void(O[Xt]=(P.xPercent||P.yPercent?"translate("+P.xPercent+"%,"+P.yPercent+"%) translate3d(":"translate3d(")+F+"px,"+D+"px,"+z+"px)"+(1!==A||1!==M?" scale("+A+","+M+")":""));e=n=1,i=s=0}h=1,r=a=o=l=f=u=0,p=I?-1/I:0,_=P.zOrigin,c=1e-6,x=",",w="0",(k=S*Q)&&(d=Math.cos(k),f=p*(o=-(m=Math.sin(k))),r=e*m,a=s*m,p*=h=d,e*=d,s*=d),(k=R*Q)&&(g=i*(d=Math.cos(k))+r*(m=Math.sin(k)),y=n*d+a*m,l=h*m,u=p*m,r=i*-m+r*d,a=n*-m+a*d,h*=d,p*=d,i=g,n=y),1!==C&&(r*=C,a*=C,h*=C,p*=C),1!==M&&(i*=M,n*=M,l*=M,u*=M),1!==A&&(e*=A,s*=A,o*=A,f*=A),(_||X)&&(_&&(F+=r*-_,D+=a*-_,z+=h*-_+_),X&&(F+=P.xOrigin-(P.xOrigin*e+P.yOrigin*i)+P.xOffset,D+=P.yOrigin-(P.xOrigin*s+P.yOrigin*n)+P.yOffset),F<c&&-c<F&&(F=w),D<c&&-c<D&&(D=w),z<c&&-c<z&&(z=0)),v=P.xPercent||P.yPercent?"translate("+P.xPercent+"%,"+P.yPercent+"%) matrix3d(":"matrix3d(",v+=(e<c&&-c<e?w:e)+x+(s<c&&-c<s?w:s)+x+(o<c&&-c<o?w:o),v+=x+(f<c&&-c<f?w:f)+x+(i<c&&-c<i?w:i)+x+(n<c&&-c<n?w:n),R||S||1!==C?(v+=x+(l<c&&-c<l?w:l)+x+(u<c&&-c<u?w:u)+x+(r<c&&-c<r?w:r),v+=x+(a<c&&-c<a?w:a)+x+(h<c&&-c<h?w:h)+x+(p<c&&-c<p?w:p)+x):v+=",0,0,0,0,1,0,",v+=F+x+D+x+z+x+(I?1+-z/I:1)+")",O[Xt]=v}};(t=Et.prototype).x=t.y=t.z=t.skewX=t.skewY=t.rotation=t.rotationX=t.rotationY=t.zOrigin=t.xPercent=t.yPercent=t.xOffset=t.yOffset=0,t.scaleX=t.scaleY=t.scaleZ=1,Pt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(t,e,i,r,s,n,a){if(r._lastParsedTransform===a)return s;var o;"function"==typeof(r._lastParsedTransform=a)[i]&&(o=a[i],a[i]=e);var l,h,f,u,p,_,c,d,m,g=t._fwdTransform,y=t.style,v=zt.length,x=a,w={},T="transformOrigin",b=Zt(t,O,!0,x.parseTransform),P=x.transform&&("function"==typeof x.transform?x.transform(D,F):x.transform);if(r._transform=b,P&&"string"==typeof P&&Xt)(h=J.style)[Xt]=P,h.display="block",h.position="absolute",K.body.appendChild(J),l=Zt(J,null,!1),b.svg&&(_=b.xOrigin,c=b.yOrigin,l.x-=b.xOffset,l.y-=b.yOffset,(x.transformOrigin||x.svgOrigin)&&(P={},Rt(t,pt(x.transformOrigin),P,x.svgOrigin,x.smoothOrigin,!0),_=P.xOrigin,c=P.yOrigin,l.x-=P.xOffset-b.xOffset,l.y-=P.yOffset-b.yOffset),(_||c)&&(d=qt(J,!0),l.x-=_-(_*d[0]+c*d[2]),l.y-=c-(_*d[1]+c*d[3]))),K.body.removeChild(J),l.perspective||(l.perspective=b.perspective),null!=x.xPercent&&(l.xPercent=S(x.xPercent,b.xPercent)),null!=x.yPercent&&(l.yPercent=S(x.yPercent,b.yPercent));else if("object"==typeof x){if(l={scaleX:S(null!=x.scaleX?x.scaleX:x.scale,b.scaleX),scaleY:S(null!=x.scaleY?x.scaleY:x.scale,b.scaleY),scaleZ:S(x.scaleZ,b.scaleZ),x:S(x.x,b.x),y:S(x.y,b.y),z:S(x.z,b.z),xPercent:S(x.xPercent,b.xPercent),yPercent:S(x.yPercent,b.yPercent),perspective:S(x.transformPerspective,b.perspective)},null!=(p=x.directionalRotation))if("object"==typeof p)for(h in p)x[h]=p[h];else x.rotation=p;"string"==typeof x.x&&-1!==x.x.indexOf("%")&&(l.x=0,l.xPercent=S(x.x,b.xPercent)),"string"==typeof x.y&&-1!==x.y.indexOf("%")&&(l.y=0,l.yPercent=S(x.y,b.yPercent)),l.rotation=A("rotation"in x?x.rotation:"shortRotation"in x?x.shortRotation+"_short":"rotationZ"in x?x.rotationZ:b.rotation-b.skewY,b.rotation-b.skewY,"rotation",w),Yt&&(l.rotationX=A("rotationX"in x?x.rotationX:"shortRotationX"in x?x.shortRotationX+"_short":b.rotationX||0,b.rotationX,"rotationX",w),l.rotationY=A("rotationY"in x?x.rotationY:"shortRotationY"in x?x.shortRotationY+"_short":b.rotationY||0,b.rotationY,"rotationY",w)),l.skewX=A(x.skewX,b.skewX-b.skewY),(l.skewY=A(x.skewY,b.skewY))&&(l.skewX+=l.skewY,l.rotation+=l.skewY)}for(Yt&&null!=x.force3D&&(b.force3D=x.force3D,u=!0),b.skewType=x.skewType||b.skewType||W.defaultSkewType,(f=b.force3D||b.z||b.rotationX||b.rotationY||l.z||l.rotationX||l.rotationY||l.perspective)||null==x.scale||(l.scaleZ=1);-1<--v;)(1e-6<(P=l[m=zt[v]]-b[m])||P<-1e-6||null!=x[m]||null!=H[m])&&(u=!0,s=new xt(b,m,b[m],P,s),m in w&&(s.e=w[m]),s.xs0=0,s.plugin=n,r._overwriteProps.push(s.n));return P=x.transformOrigin,b.svg&&(P||x.svgOrigin)&&(_=b.xOffset,c=b.yOffset,Rt(t,pt(P),l,x.svgOrigin,x.smoothOrigin),s=yt(b,"xOrigin",(g?b:l).xOrigin,l.xOrigin,s,T),s=yt(b,"yOrigin",(g?b:l).yOrigin,l.yOrigin,s,T),_===b.xOffset&&c===b.yOffset||(s=yt(b,"xOffset",g?_:b.xOffset,b.xOffset,s,T),s=yt(b,"yOffset",g?c:b.yOffset,b.yOffset,s,T)),P=At?null:"0px 0px"),(P||Yt&&f&&b.zOrigin)&&(Xt?(u=!0,m=Nt,P=(P||ot(t,m,O,!1,"50% 50%"))+"",(s=new xt(y,m,0,0,s,-1,T)).b=y[m],s.plugin=n,Yt?(h=b.zOrigin,P=P.split(" "),b.zOrigin=(2<P.length&&(0===h||"0px"!==P[2])?parseFloat(P[2]):h)||0,s.xs0=s.e=P[0]+" "+(P[1]||"50%")+" 0px",(s=new xt(b,"zOrigin",0,0,s,-1,s.n)).b=h,s.xs0=s.e=b.zOrigin):s.xs0=s.e=P):pt(P+"",b)),u&&(r._transformType=b.svg&&At||!f&&3!==this._transformType?2:3),o&&(a[i]=o),s},prefix:!0}),Pt("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),Pt("borderRadius",{defaultValue:"0px",parser:function(t,e,i,r,s,n){e=this.format(e);for(var a,o,l,h,f,u,p,_,c,d,m,g,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],v=t.style,x=parseFloat(t.offsetWidth),w=parseFloat(t.offsetHeight),T=e.split(" "),b=0;b<y.length;b++)this.p.indexOf("border")&&(y[b]=k(y[b])),-1!==(l=o=ot(t,y[b],O,!1,"0px")).indexOf(" ")&&(l=(o=l.split(" "))[0],o=o[1]),h=a=T[b],f=parseFloat(l),_=l.substr((f+"").length),""===(p=(c="="===h.charAt(1))?(u=parseInt(h.charAt(0)+"1",10),h=h.substr(2),u*=parseFloat(h),h.substr((u+"").length-(u<0?1:0))||""):(u=parseFloat(h),h.substr((u+"").length)))&&(p=P[i]||_),p!==_&&(d=lt(t,"borderLeft",f,_),m=lt(t,"borderTop",f,_),o="%"===p?(l=d/x*100+"%",m/w*100+"%"):"em"===p?(l=d/(g=lt(t,"borderLeft",1,"em"))+"em",m/g+"em"):(l=d+"px",m+"px"),c&&(h=parseFloat(l)+u+p,a=parseFloat(o)+u+p)),s=wt(v,y[b],l+" "+o,h+" "+a,!1,"0px",s);return s},prefix:!0,formatter:mt("0px 0px 0px 0px",!1,!0)}),Pt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(t,e,i,r,s,n){return wt(t.style,i,this.format(ot(t,i,O,!1,"0px 0px")),this.format(e),!1,"0px",s)},prefix:!0,formatter:mt("0px 0px",!1,!0)}),Pt("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,r,s,n){var a,o,l,h,f,u,p="background-position",_=O||at(t,null),c=this.format((_?C?_.getPropertyValue(p+"-x")+" "+_.getPropertyValue(p+"-y"):_.getPropertyValue(p):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),d=this.format(e);if(-1!==c.indexOf("%")!=(-1!==d.indexOf("%"))&&d.split(",").length<2&&(u=ot(t,"backgroundImage").replace(j,""))&&"none"!==u){for(a=c.split(" "),o=d.split(" "),tt.setAttribute("src",u),l=2;-1<--l;)(h=-1!==(c=a[l]).indexOf("%"))!=(-1!==o[l].indexOf("%"))&&(f=0===l?t.offsetWidth-tt.width:t.offsetHeight-tt.height,a[l]=h?parseFloat(c)/100*f+"px":parseFloat(c)/f*100+"%");c=a.join(" ")}return this.parseComplex(t.style,c,d,s,n)},formatter:pt}),Pt("backgroundSize",{defaultValue:"0 0",formatter:function(t){return pt(-1===(t+="").indexOf(" ")?t+" "+t:t)}}),Pt("perspective",{defaultValue:"0px",prefix:!0}),Pt("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),Pt("transformStyle",{prefix:!0}),Pt("backfaceVisibility",{prefix:!0}),Pt("userSelect",{prefix:!0}),Pt("margin",{parser:gt("marginTop,marginRight,marginBottom,marginLeft")}),Pt("padding",{parser:gt("paddingTop,paddingRight,paddingBottom,paddingLeft")}),Pt("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,r,s,n){var a,o,l;return e=C<9?(o=t.currentStyle,l=C<8?" ":",",a="rect("+o.clipTop+l+o.clipRight+l+o.clipBottom+l+o.clipLeft+")",this.format(e).split(",").join(l)):(a=this.format(ot(t,this.p,O,!1,this.dflt)),this.format(e)),this.parseComplex(t.style,a,e,s,n)}}),Pt("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),Pt("autoRound,strictUnits",{parser:function(t,e,i,r,s){return s}}),Pt("border",{defaultValue:"0px solid #000",parser:function(t,e,i,r,s,n){var a=ot(t,"borderTopWidth",O,!1,"0px"),o=this.format(e).split(" "),l=o[0].replace(I,"");return"px"!==l&&(a=parseFloat(a)/lt(t,"borderTopWidth",1,l)+l),this.parseComplex(t.style,this.format(a+" "+ot(t,"borderTopStyle",O,!1,"solid")+" "+ot(t,"borderTopColor",O,!1,"#000")),o.join(" "),s,n)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(dt)||["#000"])[0]}}),Pt("borderWidth",{parser:gt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),Pt("float,cssFloat,styleFloat",{parser:function(t,e,i,r,s,n){var a=t.style,o="cssFloat"in a?"cssFloat":"styleFloat";return new xt(a,o,0,0,s,-1,i,!1,0,a[o],e)}});function $t(t){var e,i=this.t,r=i.filter||ot(this.data,"filter")||"",s=this.s+this.c*t|0;100==s&&(e=-1===r.indexOf("atrix(")&&-1===r.indexOf("radient(")&&-1===r.indexOf("oader(")?(i.removeAttribute("filter"),!ot(this.data,"filter")):(i.filter=r.replace(l,""),!0)),e||(this.xn1&&(i.filter=r=r||"alpha(opacity="+s+")"),-1===r.indexOf("pacity")?0==s&&this.xn1||(i.filter=r+" alpha(opacity="+s+")"):i.filter=r.replace(N,"opacity="+s))}Pt("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,r,s,n){var a=parseFloat(ot(t,"opacity",O,!1,"1")),o=t.style,l="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+a),l&&1===a&&"hidden"===ot(t,"visibility",O)&&0!==e&&(a=0),rt?s=new xt(o,"opacity",a,e-a,s):((s=new xt(o,"opacity",100*a,100*(e-a),s)).xn1=l?1:0,o.zoom=1,s.type=2,s.b="alpha(opacity="+s.s+")",s.e="alpha(opacity="+(s.s+s.c)+")",s.data=t,s.plugin=n,s.setRatio=$t),l&&((s=new xt(o,"visibility",0,0,s,-1,null,!1,0,0!==a?"inherit":"hidden",0===e?"hidden":"inherit")).xs0="inherit",r._overwriteProps.push(s.n),r._overwriteProps.push(i)),s}});function Qt(t){if(this.t._fwdClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Gt(i,e.p),e=e._next;1===t&&this.t._fwdClassPT===this&&(this.t._fwdClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)}var Gt=function(t,e){e&&(t.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),t.removeProperty(e.replace(u,"-$1").toLowerCase())):t.removeAttribute(e))};Pt("className",{parser:function(t,e,i,r,s,n,a){var o,l,h,f,u,p=t.getAttribute("class")||"",_=t.style.cssText;if((s=r._classNamePT=new xt(t,i,0,0,s,2)).setRatio=Qt,s.pr=-11,c=!0,s.b=p,l=y(t,O),h=t._fwdClassPT){for(f={},u=h.data;u;)f[u.p]=1,u=u._next;h.setRatio(1)}return(t._fwdClassPT=s).e="="!==e.charAt(1)?e:p.replace(new RegExp("(?:\\s|^)"+e.substr(2)+"(?![\\w-])"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),t.setAttribute("class",s.e),o=v(t,l,y(t),a,f),t.setAttribute("class",p),s.data=o.firstMPT,t.style.cssText=_,s=s.xfirst=r.parse(t,o.difs,s,n)}});function Ht(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,r,s,n,a=this.t.style,o=m.transform.parse;if("all"===this.e)s=!(a.cssText="");else for(r=(e=this.e.split(" ").join("").split(",")).length;-1<--r;)i=e[r],m[i]&&(m[i].parse===o?s=!0:i="transformOrigin"===i?Nt:m[i].p),Gt(a,i);s&&(Gt(a,Xt),(n=this.t._fwdTransform)&&(n.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._fwdTransform))}}for(Pt("clearProps",{parser:function(t,e,i,r,s){return(s=new xt(t,i,0,0,s,2)).setRatio=Ht,s.e=e,s.pr=-10,s.data=r._tween,c=!0,s}}),t="bezier,throwProps,physicsProps,physics2D".split(","),Tt=t.length;Tt--;)Ot(t[Tt]);(t=W.prototype)._firstPT=t._lastParsedTransform=t._transform=null,t._onInitTween=function(t,e,i,r){if(!t.nodeType)return!1;this._target=F=t,this._tween=i,this._vars=e,D=r,M=e.autoRound,c=!1,P=e.suffixMap||W.suffixMap,O=at(t,""),d=this._overwriteProps;var s,n,a,o,l,h,f,u,p,_=t.style;if(x&&""===_.zIndex&&("auto"!==(s=ot(t,"zIndex",O))&&""!==s||this._addLazySet(_,"zIndex",0)),"string"==typeof e&&(o=_.cssText,s=y(t,O),_.cssText=o+";"+e,s=v(t,s,y(t)).difs,!rt&&E.test(e)&&(s.opacity=parseFloat(RegExp.$1)),e=s,_.cssText=o),e.className?this._firstPT=n=m.className.parse(t,e.className,"className",this,null,null,e):this._firstPT=n=this.parse(t,e,null),this._transformType){for(p=3===this._transformType,Xt?w&&(x=!0,""===_.zIndex&&("auto"!==(f=ot(t,"zIndex",O))&&""!==f||this._addLazySet(_,"zIndex",0)),T&&this._addLazySet(_,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(p?"visible":"hidden"))):_.zoom=1,a=n;a&&a._next;)a=a._next;u=new xt(t,"transform",0,0,null,2),this._linkCSSP(u,null,a),u.setRatio=Xt?Ut:St,u.data=this._transform||Zt(t,O,!0),u.tween=i,u.pr=-1,d.pop()}if(c){for(;n;){for(h=n._next,a=o;a&&a.pr>n.pr;)a=a._next;(n._prev=a?a._prev:l)?n._prev._next=n:o=n,(n._next=a)?a._prev=n:l=n,n=h}this._firstPT=o}return!0},t.parse=function(t,e,i,r){var s,n,a,o,l,h,f,u,p,_,c=t.style;for(s in e)"function"==typeof(h=e[s])&&(h=h(D,F)),(n=m[s])?i=n.parse(t,h,s,this,i,r,e):(l=ot(t,s,O)+"",p="string"==typeof h,"color"===s||"fill"===s||"stroke"===s||-1!==s.indexOf("Color")||p&&L.test(h)?(p||(h=(3<(h=ct(h)).length?"rgba(":"rgb(")+h.join(",")+")"),i=wt(c,s,l,h,!0,"transparent",i,0,r)):p&&$.test(h)?i=wt(c,s,l,h,!0,null,i,0,r):(f=(a=parseFloat(l))||0===a?l.substr((a+"").length):"",""!==l&&"auto"!==l||(f="width"===s||"height"===s?(a=function(t,e,i){if("svg"===(t.nodeName+"").toLowerCase())return(i||at(t))[e]||0;if(t.getBBox&&jt(t))return t.getBBox()[e]||0;var r=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),s=ft[e],n=s.length;for(i=i||at(t,null);-1<--n;)r-=parseFloat(ot(t,"padding"+s[n],i,!0))||0,r-=parseFloat(ot(t,"border"+s[n]+"Width",i,!0))||0;return r}(t,s,O),"px"):"left"===s||"top"===s?(a=ht(t,s,O),"px"):(a="opacity"!==s?0:1,"")),""===(u=(_=p&&"="===h.charAt(1))?(o=parseInt(h.charAt(0)+"1",10),h=h.substr(2),o*=parseFloat(h),h.replace(I,"")):(o=parseFloat(h),p?h.replace(I,""):""))&&(u=s in P?P[s]:f),h=o||0===o?(_?o+a:o)+u:e[s],f!==u&&""!==u&&(o||0===o)&&a&&(a=lt(t,s,a,f),"%"===u?(a/=lt(t,s,100,"%")/100,!0!==e.strictUnits&&(l=a+"%")):"em"===u||"rem"===u||"vw"===u||"vh"===u?a/=lt(t,s,1,u):"px"!==u&&(o=lt(t,s,o,u),u="px"),_&&(!o&&0!==o||(h=o+a+u))),_&&(o+=a),!a&&0!==a||!o&&0!==o?void 0!==c[s]&&(h||h+""!="NaN"&&null!=h)?(i=new xt(c,s,o||a||0,0,i,-1,s,!1,0,l,h)).xs0="none"!==h||"display"!==s&&-1===s.indexOf("Style")?h:l:g("invalid "+s+" tween value: "+e[s]):(i=new xt(c,s,a,o-a,i,0,s,!1!==M&&("px"===u||"zIndex"===s),0,l,h)).xs0=u)),r&&i&&!i.plugin&&(i.plugin=r);return i},t.setRatio=function(t){var e,i,r,s=this._firstPT;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||-1e-6===this._tween._rawPrevTime)for(;s;){if(e=s.c*t+s.s,s.r?e=Math.round(e):e<1e-6&&-1e-6<e&&(e=0),s.type)if(1===s.type)if(2===(r=s.l))s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2;else if(3===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3;else if(4===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4;else if(5===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4+s.xn4+s.xs5;else{for(i=s.xs0+e+s.xs1,r=1;r<s.l;r++)i+=s["xn"+r]+s["xs"+(r+1)];s.t[s.p]=i}else-1===s.type?s.t[s.p]=s.xs0:s.setRatio&&s.setRatio(t);else s.t[s.p]=e+s.xs0;s=s._next}else for(;s;)2!==s.type?s.t[s.p]=s.b:s.setRatio(t),s=s._next;else for(;s;){if(2!==s.type)if(s.r&&-1!==s.type)if(e=Math.round(s.s+s.c),s.type){if(1===s.type){for(r=s.l,i=s.xs0+e+s.xs1,r=1;r<s.l;r++)i+=s["xn"+r]+s["xs"+(r+1)];s.t[s.p]=i}}else s.t[s.p]=e+s.xs0;else s.t[s.p]=s.e;else s.setRatio(t);s=s._next}},t._enableTransforms=function(t){this._transform=this._transform||Zt(this._target,O,!0),this._transformType=this._transform.svg&&At||!t&&3!==this._transformType?2:3};function Kt(t){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)}t._addLazySet=function(t,e,i){var r=this._firstPT=new xt(t,e,0,0,this._firstPT,2);r.e=i,r.setRatio=Kt,r.data=this},t._linkCSSP=function(t,e,i,r){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,r=!0),i?i._next=t:r||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},t._mod=function(t){for(var e=this._firstPT;e;)"function"==typeof t[e.p]&&t[e.p]===Math.round&&(e.r=1),e=e._next},t._kill=function(t){var e,i,r,s=t;if(t.autoAlpha||t.alpha){for(i in s={},t)s[i]=t[i];s.opacity=1,s.autoAlpha&&(s.visibility=1)}for(t.className&&(e=this._classNamePT)&&((r=e.xfirst)&&r._prev?this._linkCSSP(r._prev,e._next,r._prev._prev):r===this._firstPT&&(this._firstPT=e._next),e._next&&this._linkCSSP(e._next,e._next._next,r._prev),this._classNamePT=null),e=this._firstPT;e;)e.plugin&&e.plugin!==i&&e.plugin._kill&&(e.plugin._kill(t),i=e.plugin),e=e._next;return n.prototype._kill.call(this,s)};var Jt=function(t,e,i){var r,s,n,a;if(t.slice)for(s=t.length;-1<--s;)Jt(t[s],e,i);else for(s=(r=t.childNodes).length;-1<--s;)a=(n=r[s]).type,n.style&&(e.push(y(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Jt(n,e,i)};return W.cascadeTo=function(t,e,i){var r,s,n,a,o=B.to(t,e,i),l=[o],h=[],f=[],u=[],p=B._internals.reservedProps;for(t=o._targets||o.target,Jt(t,h,u),o.render(e,!0,!0),Jt(t,f),o.render(0,!0,!0),o._enabled(!0),r=u.length;-1<--r;)if((s=v(u[r],h[r],f[r])).firstMPT){for(n in s=s.difs,i)p[n]&&(s[n]=i[n]);for(n in a={},s)a[n]=h[r][n];l.push(B.fromTo(u[r],e,a,s))}return l},n.activate([W]),W},!0),_fwd_fwdScope.FWDFWD_fwdDefine("easing.Back",["easing.Ease"],function(m){function t(t,e){var i=f("easing."+t,function(){},!0),r=i.prototype=new m;return r.constructor=i,r.getRatio=e,i}function e(t,e,i,r,s){var n=f("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new r},!0);return u(n,t),n}function g(t,e,i){this.t=t,this.v=e,i&&(((this.next=i).prev=this).c=i.v-e,this.gap=i.t-t)}function i(t,e){var i=f("easing."+t,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=i.prototype=new m;return r.constructor=i,r.getRatio=e,r.config=function(t){return new i(t)},i}var r,s,n,a=_fwd_fwdScope.FWDGlobals||_fwd_fwdScope,o=a.com.fwd,l=2*Math.PI,h=Math.PI/2,f=o._class,u=m.register||function(){},p=e("Back",i("BackOut",function(t){return--t*t*((this._p1+1)*t+this._p1)+1}),i("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),i("BackInOut",function(t){return(t*=2)<1?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),_=f("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:1<t&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=!0===i},!0),c=_.prototype=new m;return c.constructor=_,c.getRatio=function(t){var e=t+(.5-t)*this._p;return t<this._p1?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},_.ease=new _(.7,.7),c.config=_.config=function(t,e,i){return new _(t,e,i)},(c=(r=f("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0)).prototype=new m).constructor=r,c.getRatio=function(t){return t<0?t=0:1<=t&&(t=.999999999),(this._p2*t>>0)*this._p1},c.config=r.config=function(t){return new r(t)},(c=(s=f("easing.RoughEase",function(t){for(var e,i,r,s,n,a,o=(t=t||{}).taper||"none",l=[],h=0,f=0|(t.points||20),u=f,p=!1!==t.randomize,_=!0===t.clamp,c=t.template instanceof m?t.template:null,d="number"==typeof t.strength?.4*t.strength:.4;-1<--u;)e=p?Math.random():1/f*u,i=c?c.getRatio(e):e,r="none"===o?d:"out"===o?(s=1-e)*s*d:"in"===o?e*e*d:e<.5?(s=2*e)*s*.5*d:(s=2*(1-e))*s*.5*d,p?i+=Math.random()*r-.5*r:u%2?i+=.5*r:i-=.5*r,_&&(1<i?i=1:i<0&&(i=0)),l[h++]={x:e,y:i};for(l.sort(function(t,e){return t.x-e.x}),a=new g(1,1,null),u=f;-1<--u;)n=l[u],a=new g(n.x,n.y,a);this._prev=new g(0,0,0!==a.t?a:a.next)},!0)).prototype=new m).constructor=s,c.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&t<=e.t;)e=e.prev;return(this._prev=e).v+(t-e.t)/e.gap*e.c},c.config=function(t){return new s(t)},s.ease=new s,e("Bounce",t("BounceOut",function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),t("BounceIn",function(t){return(t=1-t)<1/2.75?1-7.5625*t*t:t<2/2.75?1-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),t("BounceInOut",function(t){var e=t<.5;return(t=e?1-2*t:2*t-1)<1/2.75?t*=7.5625*t:t=t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),e("Circ",t("CircOut",function(t){return Math.sqrt(1- --t*t)}),t("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),t("CircInOut",function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),e("Elastic",(n=function(t,e,i){var r=f("easing."+t,function(t,e){this._p1=1<=t?t:1,this._p2=(e||i)/(t<1?t:1),this._p3=this._p2/l*(Math.asin(1/this._p1)||0),this._p2=l/this._p2},!0),s=r.prototype=new m;return s.constructor=r,s.getRatio=e,s.config=function(t,e){return new r(t,e)},r})("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*this._p2)+1},.3),n("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*--t)*Math.sin((t-this._p3)*this._p2))},.3),n("ElasticInOut",function(t){return(t*=2)<1?this._p1*Math.pow(2,10*--t)*Math.sin((t-this._p3)*this._p2)*-.5:this._p1*Math.pow(2,-10*--t)*Math.sin((t-this._p3)*this._p2)*.5+1},.45)),e("Expo",t("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),t("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),t("ExpoInOut",function(t){return(t*=2)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),e("Sine",t("SineOut",function(t){return Math.sin(t*h)}),t("SineIn",function(t){return 1-Math.cos(t*h)}),t("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),f("easing.EaseLookup",{find:function(t){return m.map[t]}},!0),u(a.SlowMo,"SlowMo","ease,"),u(s,"RoughEase","ease,"),u(r,"SteppedEase","ease,"),p},!0)}),_fwd_fwdScope.FWDFWD_fwdDefine&&_fwd_fwdScope._fwd_fwdQueue.pop()(),function(_,c){"use strict";var d={},m=_.FWDGlobals=_.FWDGlobals||_;if(!m.FWDTweenLite){var g,e,i,y=function(t){for(var e=t.split("."),i=m,r=0;r<e.length;r++)i[e[r]]=i=i[e[r]]||{};return i},u=y("com.fwd"),v=1e-10,l=function(t){for(var e=[],i=t.length,r=0;r!==i;e.push(t[r++]));return e},r=function(){},x=(e=Object.prototype.toString,i=e.call([]),function(t){return null!=t&&(t instanceof Array||"object"==typeof t&&!!t.push&&e.call(t)===i)}),w={},T=function(l,h,f,u){this.sc=w[l]?w[l].sc:[],(w[l]=this).gsClass=null,this.func=f;var p=[];this.check=function(t){for(var e,i,r,s,n,a=h.length,o=a;-1<--a;)(e=w[h[a]]||new T(h[a],[])).gsClass?(p[a]=e.gsClass,o--):t&&e.sc.push(this);if(0===o&&f){if(r=(i=("com.fwd."+l).split(".")).pop(),s=y(i.join("."))[r]=this.gsClass=f.apply(f,p),u)if(m[r]=d[r]=s,!(n="undefined"!=typeof fwd_module&&fwd_module.exports)&&"function"==typeof define&&define.amd)define((_.FWDAMDPath?_.FWDAMDPath+"/":"")+l.split(".").pop(),[],function(){return s});else if(n)if(l===c)for(a in fwd_module.exports=d[c]=s,d)s[a]=d[a];else d[c]&&(d[c][r]=s);for(a=0;a<this.sc.length;a++)this.sc[a].check()}},this.check(!0)},s=_.FWDFWD_fwdDefine=function(t,e,i,r){return new T(t,e,i,r)},p=u._class=function(t,e,i){return e=e||function(){},s(t,[],function(){return e},i),e};s.globals=m;var t,n=[0,0,1,1],b=p("easing.Ease",function(t,e,i,r){this._func=t,this._type=i||0,this._power=r||0,this._params=e?n.concat(e):n},!0),P=b.map={},a=b.register=function(t,e,i,r){for(var s,n,a,o,l=e.split(","),h=l.length,f=(i||"easeIn,easeOut,easeInOut").split(",");-1<--h;)for(n=l[h],s=r?p("easing."+n,null,!0):u.easing[n]||{},a=f.length;-1<--a;)o=f[a],P[n+"."+o]=P[o+n]=s[o]=t.getRatio?t:t[o]||new t};for((t=b.prototype)._calcEnd=!1,t.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,r=1===e?1-t:2===e?t:t<.5?2*t:2*(1-t);return 1===i?r*=r:2===i?r*=r*r:3===i?r*=r*r*r:4===i&&(r*=r*r*r*r),1===e?1-r:2===e?r:t<.5?r/2:1-r/2},h=(o=["Linear","Quad","Cubic","Quart","Quint,Strong"]).length;-1<--h;)t=o[h]+",Power"+h,a(new b(null,null,1,h),t,"easeOut",!0),a(new b(null,null,2,h),t,"easeIn"+(0===h?",easeNone":"")),a(new b(null,null,3,h),t,"easeInOut");P.linear=u.easing.Linear.easeIn,P.swing=u.easing.Quad.easeInOut;var O=p("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});(t=O.prototype).addEventListener=function(t,e,i,r,s){s=s||0;var n,a,o=this._listeners[t],l=0;for(this!==M||g||M.wake(),null==o&&(this._listeners[t]=o=[]),a=o.length;-1<--a;)(n=o[a]).c===e&&n.s===i?o.splice(a,1):0===l&&n.pr<s&&(l=a+1);o.splice(l,0,{c:e,s:i,up:r,pr:s})},t.removeEventListener=function(t,e){var i,r=this._listeners[t];if(r)for(i=r.length;-1<--i;)if(r[i].c===e)return void r.splice(i,1)},t.dispatchEvent=function(t){var e,i,r,s=this._listeners[t];if(s)for(1<(e=s.length)&&(s=s.slice(0)),i=this._eventTarget;-1<--e;)(r=s[e])&&(r.up?r.c.call(r.s||i,{type:t,target:i}):r.c.call(r.s||i))};for(var o,k=_.requestAnimationFrame,R=_.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},A=S(),h=(o=["ms","moz","webkit","o"]).length;-1<--h&&!k;)k=_[o[h]+"RequestAnimationFrame"],R=_[o[h]+"CancelAnimationFrame"]||_[o[h]+"CancelRequestAnimationFrame"];p("Ticker",function(t,e){var s,n,a,o,l,h=this,f=S(),i=!(!1===e||!k)&&"auto",u=500,p=33,_=function(t){var e,i,r=S()-A;u<r&&(f+=r-p),A+=r,h.time=(A-f)/1e3,e=h.time-l,(!s||0<e||!0===t)&&(h.frame++,l+=e+(o<=e?.004:o-e),i=!0),!0!==t&&(a=n(_)),i&&h.dispatchEvent("tick")};O.call(h),h.time=h.frame=0,h.tick=function(){_(!0)},h.lagSmoothing=function(t,e){u=t||1e10,p=Math.min(e,u,0)},h.sleep=function(){null!=a&&((i&&R?R:clearTimeout)(a),n=r,a=null,h===M&&(g=!1))},h.wake=function(t){null!==a?h.sleep():t?f+=-A+(A=S()):10<h.frame&&(A=S()-u+5),n=0===s?r:i&&k?k:function(t){return setTimeout(t,1e3*(l-h.time)+1|0)},h===M&&(g=!0),_(2)},h.fps=function(t){if(!arguments.length)return s;o=1/((s=t)||60),l=this.time+o,h.wake()},h.useRAF=function(t){if(!arguments.length)return i;h.sleep(),i=t,h.fps(s)},h.fps(t),setTimeout(function(){"auto"===i&&h.frame<5&&"hidden"!==document.visibilityState&&h.useRAF(!1)},1500)}),(t=u.Ticker.prototype=new u.events.EventDispatcher).constructor=u.Ticker;var f=p("core.FWDAnimation",function(t,e){var i;this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=!0===e.immediateRender,this.data=e.data,this._reversed=!0===e.reversed,$&&(g||M.wake(),(i=this.vars.useFrames?U:$).add(this,i._time),this.vars.paused&&this.paused(!0))}),M=f.ticker=new u.Ticker;(t=f.prototype)._dirty=t._gc=t._initted=t._paused=!1,t._totalTime=t._time=0,t._rawPrevTime=-1,t._next=t._last=t._onUpdate=t._timeline=t.timeline=null,t._paused=!1;var C=function(){g&&2e3<S()-A&&M.wake(),setTimeout(C,2e3)};C(),t.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},t.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},t.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},t.seek=function(t,e){return this.totalTime(Number(t),!1!==e)},t.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,!1!==e,!0)},t.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},t.render=function(t,e,i){},t.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,!this._gc&&this.timeline||this._enabled(!0),this},t.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&t<i+this.totalDuration()/this._timeScale},t._enabled=function(t,e){return g||M.wake(),this._gc=!t,this._active=this.isActive(),!0!==e&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},t._kill=function(t,e){return this._enabled(!1,!1)},t.kill=function(t,e){return this._kill(t,e),this},t._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},t._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();-1<--e;)"{self}"===t[e]&&(i[e]=this);return i},t._callback=function(t){var e=this.vars,i=e[t],r=e[t+"Params"],s=e[t+"Scope"]||e.callbackScope||this;switch(r?r.length:0){case 0:i.call(s);break;case 1:i.call(s,r[0]);break;case 2:i.call(s,r[0],r[1]);break;default:i.apply(s,r)}},t.eventCallback=function(t,e,i,r){if("on"===(t||"").substr(0,2)){var s=this.vars;if(1===arguments.length)return s[t];null==e?delete s[t]:(s[t]=e,s[t+"Params"]=x(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,s[t+"Scope"]=r),"onUpdate"===t&&(this._onUpdate=e)}return this},t.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},t.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&0<this._time&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},t.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},t.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},t.totalTime=function(t,e,i){if(g||M.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(t<0&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var r=this._totalDuration,s=this._timeline;if(r<t&&!i&&(t=r),this._startTime=(this._paused?this._pauseTime:s._time)-(this._reversed?r-t:t)/this._timeScale,s._dirty||this._uncache(!1),s._timeline)for(;s._timeline;)s._timeline._time!==(s._startTime+s._totalTime)/s._timeScale&&s.totalTime(s._totalTime,!0),s=s._timeline}this._gc&&this._enabled(!0,!1),this._totalTime===t&&0!==this._duration||(X.length&&G(),this.render(t,e,!1),X.length&&G())}return this},t.progress=t.totalProgress=function(t,e){var i=this.duration();return arguments.length?this.totalTime(i*t,e):i?this._time/i:this.ratio},t.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},t.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},t.timeScale=function(t){return arguments.length?(t=t||v,this._timeline&&this._timeline.smoothChildTiming&&(i=(e=this._pauseTime)||0===e?e:this._timeline.totalTime(),this._startTime=i-(i-this._startTime)*this._timeScale/t),this._timeScale=t,this._uncache(!1)):this._timeScale;var e,i},t.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},t.paused=function(t){if(!arguments.length)return this._paused;var e,i,r=this._timeline;return t!=this._paused&&r&&(g||t||M.wake(),i=(e=r.rawTime())-this._pauseTime,!t&&r.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=this.isActive(),!t&&0!=i&&this._initted&&this.duration()&&(e=r.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,this.render(e,e===this._totalTime,!0))),this._gc&&!t&&this._enabled(!0,!1),this};var F=p("core.FWDSimpleTimeline",function(t){f.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});(t=F.prototype=new f).constructor=F,t.kill()._gc=!1,t._first=t._last=t._recent=null,t._sortChildren=!1,t.add=t.insert=function(t,e,i,r){var s,n;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),s=this._last,this._sortChildren)for(n=t._startTime;s&&s._startTime>n;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=s,this._recent=t,this._timeline&&this._uncache(!0),this},t._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},t.render=function(t,e,i){var r,s=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;s;)r=s._next,(s._active||t>=s._startTime&&!s._paused)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=r},t.rawTime=function(){return g||M.wake(),this._totalTime};var D=p("FWDTweenLite",function(t,e,i){if(f.call(this,e,i),this.render=D.prototype.render,null==t)throw"Cannot tween a null target.";this.target=t="string"==typeof t&&D.selector(t)||t;var r,s,n,a=t.jquery||t.length&&t!==_&&t[0]&&(t[0]===_||t[0].nodeType&&t[0].style&&!t.nodeType),o=this.vars.overwrite;if(this._overwrite=o=null==o?Z[D.defaultOverwrite]:"number"==typeof o?o>>0:Z[o],(a||t instanceof Array||t.push&&x(t))&&"number"!=typeof t[0])for(this._targets=n=l(t),this._propLookup=[],this._siblings=[],r=0;r<n.length;r++)(s=n[r])?"string"!=typeof s?s.length&&s!==_&&s[0]&&(s[0]===_||s[0].nodeType&&s[0].style&&!s.nodeType)?(n.splice(r--,1),this._targets=n=n.concat(l(s))):(this._siblings[r]=H(s,this,!1),1===o&&1<this._siblings[r].length&&J(s,this,null,1,this._siblings[r])):"string"==typeof(s=n[r--]=D.selector(s))&&n.splice(r+1,1):n.splice(r--,1);else this._propLookup={},this._siblings=H(t,this,!1),1===o&&1<this._siblings.length&&J(t,this,null,1,this._siblings);(this.vars.immediateRender||0===e&&0===this._delay&&!1!==this.vars.immediateRender)&&(this._time=-v,this.render(Math.min(0,-this._delay)))},!0),z=function(t){return t&&t.length&&t!==_&&t[0]&&(t[0]===_||t[0].nodeType&&t[0].style&&!t.nodeType)};(t=D.prototype=new f).constructor=D,t.kill()._gc=!1,t.ratio=0,t._firstPT=t._targets=t._overwrittenProps=t._startAt=null,t._notifyPluginsOfEnabled=t._lazy=!1,D.version="1.19.0",D.defaultEase=t._ease=new b(null,null,1,1),D.defaultOverwrite="auto",D.ticker=M,D.autoSleep=120,D.lagSmoothing=function(t,e){M.lagSmoothing(t,e)},D.selector=_.$||_.jQuery||function(t){var e=_.$||_.jQuery;return e?(D.selector=e)(t):"undefined"==typeof document?t:document.querySelectorAll?document.querySelectorAll(t):document.getElementById("#"===t.charAt(0)?t.substr(1):t)};var X=[],I={},N=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,Y=function(t){for(var e,i=this._firstPT;i;)e=i.blob?t?this.join(""):this.start:i.c*t+i.s,i.m?e=i.m(e,this._target||i.t):e<1e-6&&-1e-6<e&&(e=0),i.f?i.fp?i.t[i.p](i.fp,e):i.t[i.p](e):i.t[i.p]=e,i=i._next},E=function(t,e,i,r){var s,n,a,o,l,h,f,u=[t,e],p=0,_="",c=0;for(u.start=t,i&&(i(u),t=u[0],e=u[1]),u.length=0,s=t.match(N)||[],n=e.match(N)||[],r&&(r._next=null,r.blob=1,u._firstPT=u._applyPT=r),l=n.length,o=0;o<l;o++)f=n[o],_+=(h=e.substr(p,e.indexOf(f,p)-p))||!o?h:",",p+=h.length,c?c=(c+1)%5:"rgba("===h.substr(-5)&&(c=1),f===s[o]||s.length<=o?_+=f:(_&&(u.push(_),_=""),a=parseFloat(s[o]),u.push(a),u._firstPT={_next:u._firstPT,t:u,p:u.length-1,s:a,c:("="===f.charAt(1)?parseInt(f.charAt(0)+"1",10)*parseFloat(f.substr(2)):parseFloat(f)-a)||0,f:0,m:c&&c<4?Math.round:0}),p+=f.length;return(_+=e.substr(p))&&u.push(_),u.setRatio=Y,u},B=function(t,e,i,r,s,n,a,o,l){"function"==typeof r&&(r=r(l||0,t));var h,f="get"===i?t[e]:i,u=typeof t[e],p="string"==typeof r&&"="===r.charAt(1),_={t:t,p:e,s:f,f:"function"==u,pg:0,n:s||e,m:n?"function"==typeof n?n:Math.round:0,pr:0,c:p?parseInt(r.charAt(0)+"1",10)*parseFloat(r.substr(2)):parseFloat(r)-f||0};if("number"!=u&&("function"==u&&"get"===i&&(h=e.indexOf("set")||"function"!=typeof t["get"+e.substr(3)]?e:"get"+e.substr(3),_.s=f=a?t[h](a):t[h]()),"string"==typeof f&&(a||isNaN(f))?(_.fp=a,_={t:E(f,r,o||D.defaultStringFilter,_),p:"setRatio",s:0,c:1,f:2,pg:0,n:s||e,pr:0,m:0}):p||(_.s=parseFloat(f),_.c=parseFloat(r)-_.s||0)),_.c)return(_._next=this._firstPT)&&(_._next._prev=_),this._firstPT=_},W=D._internals={isArray:x,isSelector:z,lazyTweens:X,blobDif:E},L=D._plugins={},j=W.tweenLookup={},V=0,q=W.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1},Z={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,true:1,false:0},U=f._rootFramesTimeline=new F,$=f._rootTimeline=new F,Q=30,G=W.lazyRender=function(){var t,e=X.length;for(I={};-1<--e;)(t=X[e])&&!1!==t._lazy&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);X.length=0};$._startTime=M.time,U._startTime=M.frame,$._active=U._active=!0,setTimeout(G,1),f._updateRoot=D.render=function(){var t,e,i;if(X.length&&G(),$.render((M.time-$._startTime)*$._timeScale,!1,!1),U.render((M.frame-U._startTime)*U._timeScale,!1,!1),X.length&&G(),M.frame>=Q){for(i in Q=M.frame+(parseInt(D.autoSleep,10)||120),j){for(t=(e=j[i].tweens).length;-1<--t;)e[t]._gc&&e.splice(t,1);0===e.length&&delete j[i]}if((!(i=$._first)||i._paused)&&D.autoSleep&&!U._first&&1===M._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||M.sleep()}}},M.addEventListener("tick",f._updateRoot);var H=function(t,e,i){var r,s,n=t._fwdTweenID;if(j[n||(t._fwdTweenID=n="t"+V++)]||(j[n]={target:t,tweens:[]}),e&&((r=j[n].tweens)[s=r.length]=e,i))for(;-1<--s;)r[s]===e&&r.splice(s,1);return j[n].tweens},K=function(t,e,i,r){var s,n,a=t.vars.onOverwrite;return a&&(s=a(t,e,i,r)),(a=D.onOverwrite)&&(n=a(t,e,i,r)),!1!==s&&!1!==n},J=function(t,e,i,r,s){var n,a,o;if(1===r||4<=r){for(o=s.length,_=0;_<o;_++)if((a=s[_])!==e)a._gc||a._kill(null,t,e)&&(n=!0);else if(5===r)break;return n}for(var l,h=e._startTime+v,f=[],u=0,p=0===e._duration,_=s.length;-1<--_;)(a=s[_])===e||a._gc||a._paused||(a._timeline!==e._timeline?(l=l||tt(e,0,p),0===tt(a,l,p)&&(f[u++]=a)):a._startTime<=h&&a._startTime+a.totalDuration()/a._timeScale>h&&((p||!a._initted)&&h-a._startTime<=2e-10||(f[u++]=a)));for(_=u;-1<--_;)if(a=f[_],2===r&&a._kill(i,t,e)&&(n=!0),2!==r||!a._firstPT&&a._initted){if(2!==r&&!K(a,e))continue;a._enabled(!1,!1)&&(n=!0)}return n},tt=function(t,e,i){for(var r=t._timeline,s=r._timeScale,n=t._startTime;r._timeline;){if(n+=r._startTime,s*=r._timeScale,r._paused)return-100;r=r._timeline}return e<(n/=s)?n-e:i&&n===e||!t._initted&&n-e<2*v?v:(n+=t.totalDuration()/t._timeScale/s)>e+v?0:n-e-v};t._init=function(){var t,e,i,r,s,n,a=this.vars,o=this._overwrittenProps,l=this._duration,h=!!a.immediateRender,f=a.ease;if(a.startAt){for(r in this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),s={},a.startAt)s[r]=a.startAt[r];if(s.overwrite=!1,s.immediateRender=!0,s.lazy=h&&!1!==a.lazy,s.startAt=s.delay=null,this._startAt=D.to(this.target,0,s),h)if(0<this._time)this._startAt=null;else if(0!==l)return}else if(a.runBackwards&&0!==l)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{for(r in 0!==this._time&&(h=!1),i={},a)q[r]&&"autoCSS"!==r||(i[r]=a[r]);if(i.overwrite=0,i.data="isFromStart",i.lazy=h&&!1!==a.lazy,i.immediateRender=h,this._startAt=D.to(this.target,0,i),h){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=f=f?f instanceof b?f:"function"==typeof f?new b(f,a.easeParams):P[f]||D.defaultEase:D.defaultEase,a.easeParams instanceof Array&&f.config&&(this._ease=f.config.apply(f,a.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(n=this._targets.length,t=0;t<n;t++)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],o?o[t]:null,t)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,o,0);if(e&&D._onPluginEvent("_onInitAllProps",this),o&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),a.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=a.onUpdate,this._initted=!0},t._initProps=function(t,e,i,r,s){var n,a,o,l,h,f;if(null==t)return!1;for(n in I[t._fwdTweenID]&&G(),this.vars.css||t.style&&t!==_&&t.nodeType&&L.css&&!1!==this.vars.autoCSS&&function(t,e){var i,r={};for(i in t)q[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!L[i]||L[i]&&L[i]._autoCSS)||(r[i]=t[i],delete t[i]);t.css=r}(this.vars,t),this.vars)if(f=this.vars[n],q[n])f&&(f instanceof Array||f.push&&x(f))&&-1!==f.join("").indexOf("{self}")&&(this.vars[n]=f=this._swapSelfInParams(f,this));else if(L[n]&&(l=new L[n])._onInitTween(t,this.vars[n],this,s)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:1,n:n,pg:1,pr:l._priority,m:0},a=l._overwriteProps.length;-1<--a;)e[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0),h._next&&(h._next._prev=h)}else e[n]=B.call(this,t,n,"get",f,n,0,null,this.vars.stringFilter,s);return r&&this._kill(r,t)?this._initProps(t,e,i,r,s):1<this._overwrite&&this._firstPT&&1<i.length&&J(t,this,e,this._overwrite,i)?(this._kill(e,t),this._initProps(t,e,i,r,s)):(this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration)&&(I[t._fwdTweenID]=!0),o)},t.render=function(t,e,i){var r,s,n,a,o,l,h,f=this._time,u=this._duration,p=this._rawPrevTime;if(u-1e-7<=t?(this._totalTime=this._time=u,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(r=!0,s="onComplete",i=i||this._timeline.autoRemoveChildren),0===u&&(!this._initted&&this.vars.lazy&&!i||(this._startTime===this._timeline._duration&&(t=0),(p<0||t<=0&&-1e-7<=t||p===v&&"isPause"!==this.data)&&p!==t&&(i=!0,v<p&&(s="onReverseComplete")),this._rawPrevTime=a=!e||t||p===t?t:v))):t<1e-7?(this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==f||0===u&&0<p)&&(s="onReverseComplete",r=this._reversed),t<0&&(this._active=!1,0===u&&(!this._initted&&this.vars.lazy&&!i||(0<=p&&(p!==v||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||p===t?t:v))),this._initted||(i=!0)):(this._totalTime=this._time=t,this._easeType?(o=t/u,(1===(l=this._easeType)||3===l&&.5<=o)&&(o=1-o),3===l&&(o*=2),1===(h=this._easePower)?o*=o:2===h?o*=o*o:3===h?o*=o*o*o:4===h&&(o*=o*o*o*o),this.ratio=1===l?1-o:2===l?o:t/u<.5?o/2:1-o/2):this.ratio=this._ease.getRatio(t/u)),this._time!==f||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=f,this._rawPrevTime=p,X.push(this),void(this._lazy=[t,e]);this._time&&!r?this.ratio=this._ease.getRatio(this._time/u):r&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(!1!==this._lazy&&(this._lazy=!1),this._active||!this._paused&&this._time!==f&&0<=t&&(this._active=!0),0===f&&(this._startAt&&(0<=t?this._startAt.render(t,e,i):s=s||"_dummyGS"),this.vars.onStart&&(0===this._time&&0!==u||e||this._callback("onStart"))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(t<0&&this._startAt&&-1e-4!==t&&this._startAt.render(t,e,i),e||(this._time!==f||r||i)&&this._callback("onUpdate")),s&&(this._gc&&!i||(t<0&&this._startAt&&!this._onUpdate&&-1e-4!==t&&this._startAt.render(t,e,i),r&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[s]&&this._callback(s),0===u&&this._rawPrevTime===v&&a!==v&&(this._rawPrevTime=0)))}},t._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var r,s,n,a,o,l,h,f,u,p=i&&this._time&&i._startTime===this._startTime&&this._timeline===i._timeline;if((x(e)||z(e))&&"number"!=typeof e[0])for(r=e.length;-1<--r;)this._kill(t,e[r],i)&&(l=!0);else{if(this._targets){for(r=this._targets.length;-1<--r;)if(e===this._targets[r]){o=this._propLookup[r]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[r]=t?this._overwrittenProps[r]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(h=t||o,f=t!==s&&"all"!==s&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(D.onOverwrite||this.vars.onOverwrite)){for(n in h)o[n]&&(u=u||[]).push(n);if((u||!t)&&!K(this,i,e,u))return!1}for(n in h)(a=o[n])&&(p&&(a.f?a.t[a.p](a.s):a.t[a.p]=a.s,l=!0),a.pg&&a.t._kill(h)&&(l=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),f&&(s[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return l},t.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],f.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-v,this.render(Math.min(0,-this._delay))),this},t._enabled=function(t,e){if(g||M.wake(),t&&this._gc){var i,r=this._targets;if(r)for(i=r.length;-1<--i;)this._siblings[i]=H(r[i],this,!0);else this._siblings=H(this.target,this,!0)}return f.prototype._enabled.call(this,t,e),!(!this._notifyPluginsOfEnabled||!this._firstPT)&&D._onPluginEvent(t?"_onEnable":"_onDisable",this)},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,r){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,new D(t,e,r)},D.delayedCall=function(t,e,i,r,s){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:r,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:s,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];var i,r,s,n;if(t="string"==typeof t&&D.selector(t)||t,(x(t)||z(t))&&"number"!=typeof t[0]){for(i=t.length,r=[];-1<--i;)r=r.concat(D.getTweensOf(t[i],e));for(i=r.length;-1<--i;)for(n=r[i],s=i;-1<--s;)n===r[s]&&r.splice(i,1)}else for(i=(r=H(t).concat()).length;-1<--i;)(r[i]._gc||e&&!r[i].isActive())&&r.splice(i,1);return r},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var r=D.getTweensOf(t,e),s=r.length;-1<--s;)r[s]._kill(i,t)};var et=p("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=et.prototype},!0);if(t=et.prototype,et.version="1.19.0",et.API=2,t._firstPT=null,t._addTween=B,t.setRatio=Y,t._kill=function(t){var e,i=this._overwriteProps,r=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;-1<--e;)null!=t[i[e]]&&i.splice(e,1);for(;r;)null!=t[r.n]&&(r._next&&(r._next._prev=r._prev),r._prev?(r._prev._next=r._next,r._prev=null):this._firstPT===r&&(this._firstPT=r._next)),r=r._next;return!1},t._mod=t._roundProps=function(t){for(var e,i=this._firstPT;i;)(e=t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&"function"==typeof e&&(2===i.f?i.t._applyPT.m=e:i.m=e),i=i._next},D._onPluginEvent=function(t,e){var i,r,s,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,r=s;r&&r.pr>o.pr;)r=r._next;(o._prev=r?r._prev:n)?o._prev._next=o:s=o,(o._next=r)?r._prev=o:n=o,o=a}o=e._firstPT=s}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},et.activate=function(t){for(var e=t.length;-1<--e;)t[e].API===et.API&&(L[(new t[e])._propName]=t[e]);return!0},s.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,r=t.priority||0,s=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},a=p("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){et.call(this,i,r),this._overwriteProps=s||[]},!0===t.fwd_global),o=a.prototype=new et(i);for(e in(o.constructor=a).API=t.API,n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,et.activate([a]),a},o=_._fwd_fwdQueue){for(h=0;h<o.length;h++)o[h]();for(t in w)w[t].func||_.console.log("FWDAnimation encountered missing dependency: "+t)}g=!1}}("undefined"!=typeof fwd_module&&fwd_module.exports&&"undefined"!=typeof fwd_global?fwd_global:this||window,"FWDAnimation"));// FWDAnimation classs for tweeningn not allowed to modify or use outside this plugin!
var _fwd_fwdScope;window.FWDAnimation||(((_fwd_fwdScope="undefined"!=typeof fwd_module&&fwd_module.exports&&"undefined"!=typeof fwd_global?fwd_global:this||window)._fwd_fwdQueue||(_fwd_fwdScope._fwd_fwdQueue=[])).push(function(){"use strict";function y(t,e,i,r){i===r&&(i=r-(r-e)/1e6),t===e&&(e=t+(i-t)/1e6),this.a=t,this.b=e,this.c=i,this.d=r,this.da=r-t,this.ca=i-t,this.ba=e-t}function w(t,e,i,r){var s={a:t},n={},a={},o={c:r},l=(t+e)/2,h=(e+i)/2,f=(i+r)/2,u=(l+h)/2,p=(h+f)/2,_=(p-u)/8;return s.b=l+(t-l)/4,n.b=u+_,s.c=n.a=(s.b+n.b)/2,n.c=a.a=(u+p)/2,a.b=p-_,o.b=f+(r-f)/4,a.c=o.a=(a.b+o.b)/2,[s,n,a,o]}function _(t,e,i,r,s,n){var a,o,l,h,f,u,p,_,c={},d=[],m=n||t[0];for(o in s="string"==typeof s?","+s+",":",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",null==e&&(e=1),t[0])d.push(o);if(1<t.length){for(_=t[t.length-1],p=!0,a=d.length;-1<--a;)if(o=d[a],.05<Math.abs(m[o]-_[o])){p=!1;break}p&&(t=t.concat(),n&&t.unshift(n),t.push(t[1]),n=t[t.length-3])}for(T.length=P.length=O.length=0,a=d.length;-1<--a;)o=d[a],g[o]=-1!==s.indexOf(","+o+","),c[o]=function(t,e,i,r){var s,n,a,o,l,h,f=[];if(r)for(n=(t=[r].concat(t)).length;-1<--n;)"string"==typeof(h=t[n][e])&&"="===h.charAt(1)&&(t[n][e]=r[e]+Number(h.charAt(0)+h.substr(2)));if((s=t.length-2)<0)return f[0]=new y(t[0][e],0,0,t[s<-1?0:1][e]),f;for(n=0;n<s;n++)a=t[n][e],o=t[n+1][e],f[n]=new y(a,0,0,o),i&&(l=t[n+2][e],T[n]=(T[n]||0)+(o-a)*(o-a),P[n]=(P[n]||0)+(l-o)*(l-o));return f[n]=new y(t[n][e],0,0,t[n+1][e]),f}(t,o,g[o],n);for(a=T.length;-1<--a;)T[a]=Math.sqrt(T[a]),P[a]=Math.sqrt(P[a]);if(!r){for(a=d.length;-1<--a;)if(g[o])for(u=(l=c[d[a]]).length-1,h=0;h<u;h++)f=l[h+1].da/P[h]+l[h].da/T[h]||0,O[h]=(O[h]||0)+f*f;for(a=O.length;-1<--a;)O[a]=Math.sqrt(O[a])}for(a=d.length,h=i?4:1;-1<--a;)(function(t,e,i,r,s){for(var n,a,o,l,h,f,u,p,_,c,d,m,g=t.length-1,y=0,v=t[0].a,x=0;x<g;x++)n=(l=t[y]).a,a=l.d,o=t[y+1].d,u=s?(c=T[x],m=((d=P[x])+c)*e*.25/(!r&&O[x]||.5),a-((h=a-(a-n)*(r?.5*e:0!==c?m/c:0))+(((f=a+(o-a)*(r?.5*e:0!==d?m/d:0))-h)*(3*c/(c+d)+.5)/4||0))):a-((h=a-(a-n)*e*.5)+(f=a+(o-a)*e*.5))/2,h+=u,f+=u,l.c=p=h,l.b=0!==x?v:v=l.a+.6*(l.c-l.a),l.da=a-n,l.ca=p-n,l.ba=v-n,i?(_=w(n,v,p,a),t.splice(y,1,_[0],_[1],_[2],_[3]),y+=4):y++,v=f;(l=t[y]).b=v,l.c=v+.4*(l.d-v),l.da=l.d-l.a,l.ca=l.c-l.a,l.ba=v-l.a,i&&(_=w(l.a,v,l.c,l.d),t.splice(y,1,_[0],_[1],_[2],_[3]))})(l=c[o=d[a]],e,i,r,g[o]),p&&(l.splice(0,h),l.splice(l.length-h,h));return c}var b,T,P,O,g,i,m,t;_fwd_fwdScope.FWDFWD_fwdDefine("FWDAnimation",["core.FWDAnimation","core.FWDSimpleTimeline","FWDTweenLite"],function(m,f,g){function y(t){for(var e=[],i=t.length,r=0;r!==i;e.push(t[r++]));return e}function v(t,e,i){var r,s,n=t.cycle;for(r in n)s=n[r],t[r]="function"==typeof s?s(i,e[i]):s[i%s.length];delete t.cycle}var m=function(t,e,i){g.call(this,t,e,i),this._cycle=0,this._yoyo=!0===this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=m.prototype.render},x=1e-10,w=g._internals,T=w.isSelector,b=w.isArray,t=m.prototype=g.to({},.1,{}),P=[];m.version="1.19.0",t.constructor=m,t.kill()._gc=!1,m.killTweensOf=m.killDelayedCallsTo=g.killTweensOf,m.getTweensOf=g.getTweensOf,m.lagSmoothing=g.lagSmoothing,m.ticker=g.ticker,m.render=g.render,t.invalidate=function(){return this._yoyo=!0===this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),g.prototype.invalidate.call(this)},t.updateTo=function(t,e){var i,r=this.ratio,s=this.vars.immediateRender||t.immediateRender;for(i in e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay)),t)this.vars[i]=t[i];if(this._initted||s)if(e)this._initted=!1,s&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&g._onPluginEvent("_onDisable",this),.998<this._time/this._duration){var n=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(n,!0,!1)}else if(this._initted=!1,this._init(),0<this._time||s)for(var a,o=1/(1-r),l=this._firstPT;l;)a=l.s+l.c,l.c*=o,l.s=a-l.c,l=l._next;return this},t.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var r,s,n,a,o,l,h,f,u,p=this._dirty?this.totalDuration():this._totalDuration,_=this._time,c=this._totalTime,d=this._cycle,m=this._duration,g=this._rawPrevTime;if(p-1e-7<=t?(this._totalTime=p,this._cycle=this._repeat,this._yoyo&&0!=(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=m,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(r=!0,s="onComplete",i=i||this._timeline.autoRemoveChildren),0===m&&(!this._initted&&this.vars.lazy&&!i||(this._startTime===this._timeline._duration&&(t=0),(g<0||t<=0&&-1e-7<=t||g===x&&"isPause"!==this.data)&&g!==t&&(i=!0,x<g&&(s="onReverseComplete")),this._rawPrevTime=f=!e||t||g===t?t:x))):t<1e-7?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==c||0===m&&0<g)&&(s="onReverseComplete",r=this._reversed),t<0&&(this._active=!1,0===m&&(!this._initted&&this.vars.lazy&&!i||(0<=g&&(i=!0),this._rawPrevTime=f=!e||t||g===t?t:x))),this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(a=m+this._repeatDelay,this._cycle=this._totalTime/a>>0,0!==this._cycle&&this._cycle===this._totalTime/a&&c<=t&&this._cycle--,this._time=this._totalTime-this._cycle*a,this._yoyo&&0!=(1&this._cycle)&&(this._time=m-this._time),this._time>m?this._time=m:this._time<0&&(this._time=0)),this._easeType?(o=this._time/m,(1===(l=this._easeType)||3===l&&.5<=o)&&(o=1-o),3===l&&(o*=2),1===(h=this._easePower)?o*=o:2===h?o*=o*o:3===h?o*=o*o*o:4===h&&(o*=o*o*o*o),1===l?this.ratio=1-o:2===l?this.ratio=o:this._time/m<.5?this.ratio=o/2:this.ratio=1-o/2):this.ratio=this._ease.getRatio(this._time/m)),_!==this._time||i||d!==this._cycle){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=_,this._totalTime=c,this._rawPrevTime=g,this._cycle=d,w.lazyTweens.push(this),void(this._lazy=[t,e]);this._time&&!r?this.ratio=this._ease.getRatio(this._time/m):r&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(!1!==this._lazy&&(this._lazy=!1),this._active||!this._paused&&this._time!==_&&0<=t&&(this._active=!0),0===c&&(2===this._initted&&0<t&&this._init(),this._startAt&&(0<=t?this._startAt.render(t,e,i):s=s||"_dummyGS"),this.vars.onStart&&(0===this._totalTime&&0!==m||e||this._callback("onStart"))),n=this._firstPT;n;){n.f?n.t[n.p](n.c*this.ratio+n.s):(u=n.c*this.ratio+n.s,"x"==n.p?n.t.setX(u):"y"==n.p?n.t.setY(u):"z"==n.p?n.t.setZ(u):"angleX"==n.p?n.t.setAngleX(u):"angleY"==n.p?n.t.setAngleY(u):"angleZ"==n.p?n.t.setAngleZ(u):"w"==n.p?n.t.setWidth(u):"h"==n.p?n.t.setHeight(u):"alpha"==n.p?n.t.setAlpha(u):"scale"==n.p?n.t.setScale2(u):n.t[n.p]=u),n=n._next}this._onUpdate&&(t<0&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||this._totalTime===c&&!s||this._callback("onUpdate")),this._cycle!==d&&(e||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),s&&(this._gc&&!i||(t<0&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),r&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[s]&&this._callback(s),0===m&&this._rawPrevTime===x&&f!==x&&(this._rawPrevTime=0)))}else c!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate"))},m.to=function(t,e,i){return new m(t,e,i)},m.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new m(t,e,i)},m.fromTo=function(t,e,i,r){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,new m(t,e,r)},m.staggerTo=m.allTo=function(t,e,i,r,s,n,a){r=r||0;function o(){i.onComplete&&i.onComplete.apply(i.onCompleteScope||this,arguments),s.apply(a||i.callbackScope||this,n||P)}var l,h,f,u,p=0,_=[],c=i.cycle,d=i.startAt&&i.startAt.cycle;for(b(t)||("string"==typeof t&&(t=g.selector(t)||t),T(t)&&(t=y(t))),t=t||[],r<0&&((t=y(t)).reverse(),r*=-1),l=t.length-1,f=0;f<=l;f++){for(u in h={},i)h[u]=i[u];if(c&&(v(h,t,f),null!=h.duration&&(e=h.duration,delete h.duration)),d){for(u in d=h.startAt={},i.startAt)d[u]=i.startAt[u];v(h.startAt,t,f)}h.delay=p+(h.delay||0),f===l&&s&&(h.onComplete=o),_[f]=new m(t[f],e,h),p+=r}return _},m.staggerFrom=m.allFrom=function(t,e,i,r,s,n,a){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,m.staggerTo(t,e,i,r,s,n,a)},m.staggerFromTo=m.allFromTo=function(t,e,i,r,s,n,a,o){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,m.staggerTo(t,e,r,s,n,a,o)},m.delayedCall=function(t,e,i,r,s){return new m(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:r,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,useFrames:s,overwrite:0})},m.set=function(t,e){return new m(t,0,e)},m.isTweening=function(t){return 0<g.getTweensOf(t,!0).length};var n=function(t,e){for(var i=[],r=0,s=t._first;s;)s instanceof g?i[r++]=s:(e&&(i[r++]=s),r=(i=i.concat(n(s,e))).length),s=s._next;return i},u=m.getAllTweens=function(t){return n(m._rootTimeline,t).concat(n(m._rootFramesTimeline,t))};m.killAll=function(t,e,i,r){null==e&&(e=!0),null==i&&(i=!0);for(var s,n,a=u(0!=r),o=a.length,l=e&&i&&r,h=0;h<o;h++)n=a[h],(l||n instanceof f||(s=n.target===n.vars.onComplete)&&i||e&&!s)&&(t?n.totalTime(n._reversed?0:n.totalDuration()):n._enabled(!1,!1))},m.killChildTweensOf=function(t,e){if(null!=t){var i,r,s,n,a,o=w.tweenLookup;if("string"==typeof t&&(t=g.selector(t)||t),T(t)&&(t=y(t)),b(t))for(n=t.length;-1<--n;)m.killChildTweensOf(t[n],e);else{for(s in i=[],o)for(r=o[s].target.parentNode;r;)r===t&&(i=i.concat(o[s].tweens)),r=r.parentNode;for(a=i.length,n=0;n<a;n++)e&&i[n].totalTime(i[n].totalDuration()),i[n]._enabled(!1,!1)}}};function r(t,e,i,r){e=!1!==e,i=!1!==i;for(var s,n,a=u(r=!1!==r),o=e&&i&&r,l=a.length;-1<--l;)n=a[l],(o||n instanceof f||(s=n.target===n.vars.onComplete)&&i||e&&!s)&&n.paused(t)}return m.pauseAll=function(t,e,i){r(!0,t,e,i)},m.resumeAll=function(t,e,i){r(!1,t,e,i)},m.globalTimeScale=function(t){var e=m._rootTimeline,i=g.ticker.time;return arguments.length?(t=t||x,e._startTime=i-(i-e._startTime)*e._timeScale/t,e=m._rootFramesTimeline,i=g.ticker.frame,e._startTime=i-(i-e._startTime)*e._timeScale/t,e._timeScale=m._rootTimeline._timeScale=t):e._timeScale},t.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!=(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},t.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},t.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!=(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},t.duration=function(t){return arguments.length?m.prototype.duration.call(this,t):this._duration},t.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},t.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},t.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},t.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},m},!0),b=180/Math.PI,T=[],P=[],O=[],g={},i=_fwd_fwdScope.FWDFWD_fwdDefine.globals,m=_fwd_fwdScope.FWDFWD_fwdDefine.plugin({propName:"bezier",priority:-1,version:"1.3.7",API:2,fwd_global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._mod={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var r,s,n,a,o,l,h=e.values||[],f={},u=h[0],p=e.autoRotate||i.vars.orientToBezier;for(r in this._autoRotate=p?p instanceof Array?p:[["x","y","rotation",!0!==p&&Number(p)||0]]:null,u)this._props.push(r);for(n=this._props.length;-1<--n;)r=this._props[n],this._overwriteProps.push(r),s=this._func[r]="function"==typeof t[r],f[r]=s?t[r.indexOf("set")||"function"!=typeof t["get"+r.substr(3)]?r:"get"+r.substr(3)]():parseFloat(t[r]),o||f[r]!==h[0][r]&&(o=f);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?_(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):function(t,e,i){var r,s,n,a,o,l,h,f,u,p,_,c={},d="cubic"===(e=e||"soft")?3:2,m="soft"===e,g=[];if(m&&i&&(t=[i].concat(t)),null==t||t.length<1+d)throw"invalid Bezier data";for(u in t[0])g.push(u);for(l=g.length;-1<--l;){for(c[u=g[l]]=o=[],p=0,f=t.length,h=0;h<f;h++)r=null==i?t[h][u]:"string"==typeof(_=t[h][u])&&"="===_.charAt(1)?i[u]+Number(_.charAt(0)+_.substr(2)):Number(_),m&&1<h&&h<f-1&&(o[p++]=(r+o[p-2])/2),o[p++]=r;for(f=p-d+1,h=p=0;h<f;h+=d)r=o[h],s=o[h+1],n=o[h+2],a=2==d?0:o[h+3],o[p++]=_=3==d?new y(r,s,n,a):new y(r,(2*s+r)/3,(2*s+n)/3,n);o.length=p}return c}(h,e.type,f),this._segCount=this._beziers[r].length,this._timeRes&&(l=function(t,e){var i,r,s,n,a=[],o=[],l=0,h=0,f=(e=e>>0||6)-1,u=[],p=[];for(i in t)!function(t,e,i){for(var r,s,n,a,o,l,h,f,u,p,_,c=1/i,d=t.length;-1<--d;)for(n=(p=t[d]).a,a=p.d-n,o=p.c-n,l=p.b-n,r=s=0,f=1;f<=i;f++)r=s-(s=((h=c*f)*h*a+3*(u=1-h)*(h*o+u*l))*h),e[_=d*i+f-1]=(e[_]||0)+r*r}(t[i],a,e);for(s=a.length,r=0;r<s;r++)l+=Math.sqrt(a[r]),p[n=r%e]=l,n===f&&(h+=l,u[n=r/e>>0]=p,o[n]=h,l=0,p=[]);return{length:h,lengths:o,segments:u}}(this._beziers,this._timeRes),this._length=l.length,this._lengths=l.lengths,this._segments=l.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length),p=this._autoRotate)for(this._initialRotations=[],p[0]instanceof Array||(this._autoRotate=p=[p]),n=p.length;-1<--n;){for(a=0;a<3;a++)r=p[n][a],this._func[r]="function"==typeof t[r]&&t[r.indexOf("set")||"function"!=typeof t["get"+r.substr(3)]?r:"get"+r.substr(3)];r=p[n][2],this._initialRotations[n]=(this._func[r]?this._func[r].call(this._target):this._target[r])||0,this._overwriteProps.push(r)}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(t){var e,i,r,s,n,a,o,l,h,f=this._segCount,u=this._func,p=this._target,_=t!==this._startRatio;if(this._timeRes){if(l=this._lengths,h=this._curSeg,t*=this._length,T=this._li,t>this._l2&&T<f-1){for(o=f-1;T<o&&(this._l2=l[++T])<=t;);this._l1=l[T-1],this._li=T,this._curSeg=h=this._segments[T],this._s2=h[this._s1=this._si=0]}else if(t<this._l1&&0<T){for(;0<T&&(this._l1=l[--T])>=t;);0===T&&t<this._l1?this._l1=0:T++,this._l2=l[T],this._li=T,this._curSeg=h=this._segments[T],this._s1=h[(this._si=h.length-1)-1]||0,this._s2=h[this._si]}if(e=T,t-=this._l1,T=this._si,t>this._s2&&T<h.length-1){for(o=h.length-1;T<o&&(this._s2=h[++T])<=t;);this._s1=h[T-1],this._si=T}else if(t<this._s1&&0<T){for(;0<T&&(this._s1=h[--T])>=t;);0===T&&t<this._s1?this._s1=0:T++,this._s2=h[T],this._si=T}n=(T+(t-this._s1)/(this._s2-this._s1))*this._prec||0}else n=(t-(e=t<0?0:1<=t?f-1:f*t>>0)*(1/f))*f;for(i=1-n,T=this._props.length;-1<--T;)r=this._props[T],a=(n*n*(s=this._beziers[r][e]).da+3*i*(n*s.ca+i*s.ba))*n+s.a,this._mod[r]&&(a=this._mod[r](a,p)),u[r]?p[r](a):"x"==r?p.setX(a):"y"==r?p.setY(a):"z"==r?p.setZ(a):"angleX"==r?p.setAngleX(a):"angleY"==r?p.setAngleY(a):"angleZ"==r?p.setAngleZ(a):"w"==r?p.setWidth(a):"h"==r?p.setHeight(a):"alpha"==r?p.setAlpha(a):"scale"==r?p.setScale2(a):p[r]=a;if(this._autoRotate)for(var c,d,m,g,y,v,x,w=this._autoRotate,T=w.length;-1<--T;)r=w[T][2],v=w[T][3]||0,x=!0===w[T][4]?1:b,s=this._beziers[w[T][0]],c=this._beziers[w[T][1]],s&&c&&(s=s[e],c=c[e],d=s.a+(s.b-s.a)*n,d+=((g=s.b+(s.c-s.b)*n)-d)*n,g+=(s.c+(s.d-s.c)*n-g)*n,m=c.a+(c.b-c.a)*n,m+=((y=c.b+(c.c-c.b)*n)-m)*n,y+=(c.c+(c.d-c.c)*n-y)*n,a=_?Math.atan2(y-m,g-d)*x+v:this._initialRotations[T],this._mod[r]&&(a=this._mod[r](a,p)),u[r]?p[r](a):p[r]=a)}}),t=m.prototype,m.bezierThrough=_,m.cubicToQuadratic=w,m._autoCSS=!0,m.quadraticToCubic=function(t,e,i){return new y(t,(2*e+t)/3,(2*e+i)/3,i)},m._cssRegister=function(){var t,_,c,d,e=i.CSSPlugin;e&&(t=e._internals,_=t._parseToProxy,c=t._setPluginRatio,d=t.CSSPropTween,t._registerComplexSpecialProp("bezier",{parser:function(t,e,i,r,s,n){e instanceof Array&&(e={values:e}),n=new m;var a,o,l,h=e.values,f=h.length-1,u=[],p={};if(f<0)return s;for(a=0;a<=f;a++)l=_(t,h[a],r,s,n,f!==a),u[a]=l.end;for(o in e)p[o]=e[o];return p.values=u,(s=new d(t,"bezier",0,0,l.pt,2)).data=l,s.plugin=n,s.setRatio=c,0===p.autoRotate&&(p.autoRotate=!0),!p.autoRotate||p.autoRotate instanceof Array||(a=!0===p.autoRotate?0:Number(p.autoRotate),p.autoRotate=null!=l.end.left?[["left","top","rotation",a,!1]]:null!=l.end.x&&[["x","y","rotation",a,!1]]),p.autoRotate&&(r._transform||r._enableTransforms(!1),l.autoRotate=r._target._fwdTransform,l.proxy.rotation=l.autoRotate.rotation||0,r._overwriteProps.push("rotation")),n._onInitTween(l.proxy,p,r._tween),s}}))},t._mod=function(t){for(var e,i=this._overwriteProps,r=i.length;-1<--r;)(e=t[i[r]])&&"function"==typeof e&&(this._mod[i[r]]=e)},t._kill=function(t){var e,i,r=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=r.length;-1<--i;)r[i]===e&&r.splice(i,1);if(r=this._autoRotate)for(i=r.length;-1<--i;)t[r[i][2]]&&r.splice(i,1);return this._super._kill.call(this,t)},_fwd_fwdScope.FWDFWD_fwdDefine("plugins.CSSPlugin",["plugins.TweenPlugin","FWDTweenLite"],function(n,B){var c,P,O,d,W=function(){n.call(this,"css"),this._overwriteProps.length=0,this.setRatio=W.prototype.setRatio},h=_fwd_fwdScope.FWDFWD_fwdDefine.globals,m={},t=W.prototype=new n("css");(t.constructor=W).version="1.19.0",W.API=2,W.defaultTransformPerspective=0,W.defaultSkewType="compensated",W.defaultSmoothOrigin=!0,t="px",W.suffixMap={top:t,right:t,bottom:t,left:t,width:t,height:t,fontSize:t,padding:t,margin:t,perspective:t,lineHeight:""};function a(t,e){return e.toUpperCase()}function e(t){return K.createElementNS?K.createElementNS("http://www.w3.org/1999/xhtml",t):K.createElement(t)}function o(t){return N.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1}function g(t){window.console&&console.log(t)}function k(t,e){var i,r,s=(e=e||J).style;if(void 0!==s[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],r=5;-1<--r&&void 0===s[i[r]+t];);return 0<=r?(st="-"+(nt=3===r?"ms":i[r]).toLowerCase()+"-",nt+t):null}function y(t,e){var i,r,s,n={};if(e=e||at(t,null))if(i=e.length)for(;-1<--i;)-1!==(s=e[i]).indexOf("-transform")&&It!==s||(n[s.replace(p,a)]=e.getPropertyValue(s));else for(i in e)-1!==i.indexOf("Transform")&&Xt!==i||(n[i]=e[i]);else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===n[i]&&(n[i.replace(p,a)]=e[i]);return rt||(n.opacity=o(t)),r=Zt(t,e,!1),n.rotation=r.rotation,n.skewX=r.skewX,n.scaleX=r.scaleX,n.scaleY=r.scaleY,n.x=r.x,n.y=r.y,Yt&&(n.z=r.z,n.rotationX=r.rotationX,n.rotationY=r.rotationY,n.scaleZ=r.scaleZ),n.filters&&delete n.filters,n}function v(t,e,i,r,s){var n,a,o,l={},h=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||s&&s[a])&&-1===a.indexOf("Origin")&&("number"!=typeof n&&"string"!=typeof n||(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(f,"")?n:0:ht(t,a),void 0!==h[a]&&(o=new vt(h,a,h[a],o))));if(r)for(a in r)"className"!==a&&(l[a]=r[a]);return{difs:l,firstMPT:o}}function R(t,e){return"function"==typeof t&&(t=t(D,F)),"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)||0}function S(t,e){return"function"==typeof t&&(t=t(D,F)),null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)||0}function A(t,e,i,r){var s,n,a,o,l;return"function"==typeof t&&(t=t(D,F)),(o=null==t?e:"number"==typeof t?t:(s=360,n=t.split("_"),a=((l="="===t.charAt(1))?parseInt(t.charAt(0)+"1",10)*parseFloat(n[0].substr(2)):parseFloat(n[0]))*(-1===t.indexOf("rad")?1:G)-(l?0:e),n.length&&(r&&(r[i]=e+a),-1!==t.indexOf("short")&&(a%=s)!==a%180&&(a=a<0?a+s:a-s),-1!==t.indexOf("_cw")&&a<0?a=(a+3599999999640)%s-(a/s|0)*s:-1!==t.indexOf("ccw")&&0<a&&(a=(a-3599999999640)%s-(a/s|0)*s)),e+a))<1e-6&&-1e-6<o&&(o=0),o}function _(t,e,i){return 255*(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(i-e)*t*6:t<.5?i:3*t<2?e+(i-e)*(2/3-t)*6:e)+.5|0}function r(t,e){for(var i,r,s=t.match(dt)||[],n=0,a=s.length?"":t,o=0;o<s.length;o++)i=s[o],n+=(r=t.substr(n,t.indexOf(i,n)-n)).length+i.length,3===(i=ct(i,e)).length&&i.push(1),a+=r+(e?"hsla("+i[0]+","+i[1]+"%,"+i[2]+"%,"+i[3]:"rgba("+i.join(","))+")";return a+t.substr(n)}var M,x,w,Y,T,C,F,D,i,s,z=/(?:\-|\.|\b)(\d|\.|e\-)+/g,X=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,b=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,f=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,I=/(?:\d|\-|\+|=|#|\.)*/g,N=/opacity *= *([^)]*)/i,E=/opacity:([^;]*)/i,l=/alpha\(opacity *=.+?\)/i,L=/^(rgb|hsl)/,u=/([A-Z])/g,p=/-([a-z])/gi,j=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,V=/(?:Left|Right|Width)/i,q=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,Z=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,U=/,(?=[^\)]*(?:\(|$))/gi,$=/[\s,\(]/i,Q=Math.PI/180,G=180/Math.PI,H={},K=document,J=e("div"),tt=e("img"),et=W._internals={_specialProps:m},it=navigator.userAgent,rt=(i=it.indexOf("Android"),s=e("a"),w=-1!==it.indexOf("Safari")&&-1===it.indexOf("Chrome")&&(-1===i||3<Number(it.substr(i+8,1))),T=w&&Number(it.substr(it.indexOf("Version/")+8,1))<6,Y=-1!==it.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(it)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(it))&&(C=parseFloat(RegExp.$1)),!!s&&(s.style.cssText="top:1px;opacity:.55;",/^0.55/.test(s.style.opacity))),st="",nt="",at=K.defaultView?K.defaultView.getComputedStyle:function(){},ot=W.style=function(t,e,i,r,s){var n;return rt||"opacity"!==e?(!r&&t.style[e]?n=t.style[e]:(i=i||at(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(u,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==s||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:s):o(t)},lt=et.convertToPixels=function(t,e,i,r,s){if("px"===r||!r)return i;if("auto"===r||!i)return 0;var n,a,o,l=V.test(e),h=t,f=J.style,u=i<0,p=1===i;if(u&&(i=-i),p&&(i*=100),"%"===r&&-1!==e.indexOf("border"))n=i/100*(l?t.clientWidth:t.clientHeight);else{if(f.cssText="border:0 solid red;position:"+ot(t,"position")+";line-height:0;","%"!==r&&h.appendChild&&"v"!==r.charAt(0)&&"rem"!==r)f[l?"borderLeftWidth":"borderTopWidth"]=i+r;else{if(a=(h=t.parentNode||K.body)._fwdCache,o=B.ticker.frame,a&&l&&a.time===o)return a.width*i/100;f[l?"width":"height"]=i+r}h.appendChild(J),n=parseFloat(J[l?"offsetWidth":"offsetHeight"]),h.removeChild(J),l&&"%"===r&&!1!==W.cacheWidths&&((a=h._fwdCache=h._fwdCache||{}).time=o,a.width=n/i*100),0!==n||s||(n=lt(t,e,i,r,!0))}return p&&(n/=100),u?-n:n},ht=et.calculateOffset=function(t,e,i){if("absolute"!==ot(t,"position",i))return 0;var r="left"===e?"Left":"Top",s=ot(t,"margin"+r,i);return t["offset"+r]-(lt(t,e,parseFloat(s),s.replace(I,""))||0)},ft={width:["Left","Right"],height:["Top","Bottom"]},ut=["marginLeft","marginRight","marginTop","marginBottom"],pt=function(t,e){if("contain"===t||"auto"===t||"auto auto"===t)return t+" ";null!=t&&""!==t||(t="0 0");var i,r=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":r[0],n=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":r[1];if(3<r.length&&!e){for(r=t.split(", ").join(",").split(","),t=[],i=0;i<r.length;i++)t.push(pt(r[i]));return t.join(",")}return null==n?n="center"===s?"50%":"0":"center"===n&&(n="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),t=s+" "+n+(2<r.length?" "+r[2]:""),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==n.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===n.charAt(1),e.ox=parseFloat(s.replace(f,"")),e.oy=parseFloat(n.replace(f,"")),e.v=t),e||t},_t={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ct=W.parseColor=function(t,e){var i,r,s,n,a,o,l,h,f,u,p;if(t)if("number"==typeof t)i=[t>>16,t>>8&255,255&t];else{if(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),_t[t])i=_t[t];else if("#"===t.charAt(0))4===t.length&&(t="#"+(r=t.charAt(1))+r+(s=t.charAt(2))+s+(n=t.charAt(3))+n),i=[(t=parseInt(t.substr(1),16))>>16,t>>8&255,255&t];else if("hsl"===t.substr(0,3))if(i=p=t.match(z),e){if(-1!==t.indexOf("="))return t.match(X)}else a=Number(i[0])%360/360,o=Number(i[1])/100,r=2*(l=Number(i[2])/100)-(s=l<=.5?l*(o+1):l+o-l*o),3<i.length&&(i[3]=Number(t[3])),i[0]=_(a+1/3,r,s),i[1]=_(a,r,s),i[2]=_(a-1/3,r,s);else i=t.match(z)||_t.transparent;i[0]=Number(i[0]),i[1]=Number(i[1]),i[2]=Number(i[2]),3<i.length&&(i[3]=Number(i[3]))}else i=_t.black;return e&&!p&&(r=i[0]/255,s=i[1]/255,n=i[2]/255,l=((h=Math.max(r,s,n))+(f=Math.min(r,s,n)))/2,h===f?a=o=0:(u=h-f,o=.5<l?u/(2-h-f):u/(h+f),a=h===r?(s-n)/u+(s<n?6:0):h===s?(n-r)/u+2:(r-s)/u+4,a*=60),i[0]=a+.5|0,i[1]=100*o+.5|0,i[2]=100*l+.5|0),i},dt="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(t in _t)dt+="|"+t+"\\b";dt=new RegExp(dt+")","gi"),W.colorStringFilter=function(t){var e,i=t[0]+t[1];dt.test(i)&&(e=-1!==i.indexOf("hsl(")||-1!==i.indexOf("hsla("),t[0]=r(t[0],e),t[1]=r(t[1],e)),dt.lastIndex=0},B.defaultStringFilter||(B.defaultStringFilter=W.colorStringFilter);function mt(t,e,n,a){if(null==t)return function(t){return t};var o,l=e?(t.match(dt)||[""])[0]:"",h=t.split(l).join("").match(b)||[],f=t.substr(0,t.indexOf(h[0])),u=")"===t.charAt(t.length-1)?")":"",p=-1!==t.indexOf(" ")?" ":",",_=h.length,c=0<_?h[0].replace(z,""):"";return _?o=e?function(t){var e,i,r,s;if("number"==typeof t)t+=c;else if(a&&U.test(t)){for(s=t.replace(U,"|").split("|"),r=0;r<s.length;r++)s[r]=o(s[r]);return s.join(",")}if(e=(t.match(dt)||[l])[0],r=(i=t.split(e).join("").match(b)||[]).length,_>r--)for(;++r<_;)i[r]=n?i[(r-1)/2|0]:h[r];return f+i.join(p)+p+e+u+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,i,r;if("number"==typeof t)t+=c;else if(a&&U.test(t)){for(i=t.replace(U,"|").split("|"),r=0;r<i.length;r++)i[r]=o(i[r]);return i.join(",")}if(r=(e=t.match(b)||[]).length,_>r--)for(;++r<_;)e[r]=n?e[(r-1)/2|0]:h[r];return f+e.join(p)+u}:function(t){return t}}function gt(h){return h=h.split(","),function(t,e,i,r,s,n,a){var o,l=(e+"").split(" ");for(a={},o=0;o<4;o++)a[h[o]]=l[o]=l[o]||l[(o-1)/2>>0];return r.parse(t,a,s,n)}}et._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,r,s,n,a=this.data,o=a.proxy,l=a.firstMPT;l;)e=o[l.v],l.r?e=Math.round(e):e<1e-6&&-1e-6<e&&(e=0),l.t[l.p]=e,l=l._next;if(a.autoRotate&&(a.autoRotate.rotation=a.mod?a.mod(o.rotation,this.t):o.rotation),1===t||0===t)for(l=a.firstMPT,n=1===t?"e":"b";l;){if((i=l.t).type){if(1===i.type){for(s=i.xs0+i.s+i.xs1,r=1;r<i.l;r++)s+=i["xn"+r]+i["xs"+(r+1)];i[n]=s}}else i[n]=i.s+i.xs0;l=l._next}};function yt(t,e,i,r,s,n){var a=new xt(t,e,i,r-i,s,-1,n);return a.b=i,a.e=a.xs0=r,a}var vt=function(t,e,i,r,s){this.t=t,this.p=e,this.v=i,this.r=s,r&&((r._prev=this)._next=r)},xt=(et._parseToProxy=function(t,e,i,r,s,n){var a,o,l,h,f,u=r,p={},_={},c=i._transform,d=H;for(i._transform=null,H=e,r=f=i.parse(t,e,r,s),H=d,n&&(i._transform=c,u&&(u._prev=null,u._prev&&(u._prev._next=null)));r&&r!==u;){if(r.type<=1&&(_[o=r.p]=r.s+r.c,p[o]=r.s,n||(h=new vt(r,"s",o,h,r.r),r.c=0),1===r.type))for(a=r.l;0<--a;)l="xn"+a,_[o=r.p+"_"+l]=r.data[l],p[o]=r[l],n||(h=new vt(r,l,o,h,r.rxp[l]));r=r._next}return{proxy:p,end:_,firstMPT:h,pt:f}},et.CSSPropTween=function(t,e,i,r,s,n,a,o,l,h,f){this.t=t,this.p=e,this.s=i,this.c=r,this.n=a||e,t instanceof xt||d.push(this.n),this.r=o,this.type=n||0,l&&(this.pr=l,c=!0),this.b=void 0===h?i:h,this.e=void 0===f?i+r:f,s&&((this._next=s)._prev=this)}),wt=W.parseComplex=function(t,e,i,r,s,n,a,o,l,h){i=i||n||"","function"==typeof r&&(r=r(D,F)),a=new xt(t,e,0,0,a,h?2:1,null,!1,o,i,r),r+="",s&&dt.test(r+i)&&(r=[i,r],W.colorStringFilter(r),i=r[0],r=r[1]);var f,u,p,_,c,d,m,g,y,v,x,w,T,b=i.split(", ").join(",").split(" "),P=r.split(", ").join(",").split(" "),O=b.length,k=!1!==M;for(-1===r.indexOf(",")&&-1===i.indexOf(",")||(b=b.join(" ").replace(U,", ").split(" "),P=P.join(" ").replace(U,", ").split(" "),O=b.length),O!==P.length&&(O=(b=(n||"").split(" ")).length),a.plugin=l,a.setRatio=h,f=dt.lastIndex=0;f<O;f++)if(_=b[f],c=P[f],(g=parseFloat(_))||0===g)a.appendXtra("",g,R(c,g),c.replace(X,""),k&&-1!==c.indexOf("px"),!0);else if(s&&dt.test(_))w=")"+((w=c.indexOf(")")+1)?c.substr(w):""),T=-1!==c.indexOf("hsl")&&rt,_=ct(_,T),c=ct(c,T),(y=6<_.length+c.length)&&!rt&&0===c[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(P[f]).join("transparent")):(rt||(y=!1),T?a.appendXtra(y?"hsla(":"hsl(",_[0],R(c[0],_[0]),",",!1,!0).appendXtra("",_[1],R(c[1],_[1]),"%,",!1).appendXtra("",_[2],R(c[2],_[2]),y?"%,":"%"+w,!1):a.appendXtra(y?"rgba(":"rgb(",_[0],c[0]-_[0],",",!0,!0).appendXtra("",_[1],c[1]-_[1],",",!0).appendXtra("",_[2],c[2]-_[2],y?",":w,!0),y&&(_=_.length<4?1:_[3],a.appendXtra("",_,(c.length<4?1:c[3])-_,w,!1))),dt.lastIndex=0;else if(d=_.match(z)){if(!(m=c.match(X))||m.length!==d.length)return a;for(u=p=0;u<d.length;u++)x=d[u],v=_.indexOf(x,p),a.appendXtra(_.substr(p,v-p),Number(x),R(m[u],x),"",k&&"px"===_.substr(v+x.length,2),0===u),p=v+x.length;a["xs"+a.l]+=_.substr(p)}else a["xs"+a.l]+=a.l||a["xs"+a.l]?" "+c:c;if(-1!==r.indexOf("=")&&a.data){for(w=a.xs0+a.data.s,f=1;f<a.l;f++)w+=a["xs"+f]+a.data["xn"+f];a.e=w+a["xs"+f]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},Tt=9;for((t=xt.prototype).l=t.pr=0;0<--Tt;)t["xn"+Tt]=0,t["xs"+Tt]="";t.xs0="",t._next=t._prev=t.xfirst=t.data=t.plugin=t.setRatio=t.rxp=null,t.appendXtra=function(t,e,i,r,s,n){var a=this,o=a.l;return a["xs"+o]+=n&&(o||a["xs"+o])?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=r||"",0<o?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=s,a["xn"+o]=e,a.plugin||(a.xfirst=new xt(a,"xn"+o,e,i,a.xfirst||a,0,a.n,s,a.pr),a.xfirst.xs0=0)):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=s),a):(a["xs"+o]+=e+(r||""),a)};function bt(t,e){e=e||{},this.p=e.prefix&&k(t)||t,(m[t]=m[this.p]=this).format=e.formatter||mt(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0}var Pt=et._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var r,s=t.split(","),n=e.defaultValue;for(i=i||[n],r=0;r<s.length;r++)e.prefix=0===r&&e.prefix,e.defaultValue=i[r]||n,new bt(s[r],e)},Ot=et._registerPluginProp=function(t){var l;m[t]||(l=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin",Pt(t,{parser:function(t,e,i,r,s,n,a){var o=h.com.fwd.plugins[l];return o?(o._cssRegister(),m[i].parse(t,e,i,r,s,n,a)):(g("Error: "+l+" js file not loaded."),s)}}))};(t=bt.prototype).parseComplex=function(t,e,i,r,s,n){var a,o,l,h,f,u,p=this.keyword;if(this.multi&&(U.test(i)||U.test(e)?(o=e.replace(U,"|").split("|"),l=i.replace(U,"|").split("|")):p&&(o=[e],l=[i])),l){for(h=l.length>o.length?l.length:o.length,a=0;a<h;a++)e=o[a]=o[a]||this.dflt,i=l[a]=l[a]||this.dflt,p&&(f=e.indexOf(p))!==(u=i.indexOf(p))&&(-1===u?o[a]=o[a].split(p).join(""):-1===f&&(o[a]+=" "+p));e=o.join(", "),i=l.join(", ")}return wt(t,this.p,e,i,this.clrs,this.dflt,r,this.pr,s,n)},t.parse=function(t,e,i,r,s,n,a){return this.parseComplex(t.style,this.format(ot(t,this.p,O,!1,this.dflt)),this.format(e),s,n)},W.registerSpecialProp=function(t,l,h){Pt(t,{parser:function(t,e,i,r,s,n,a){var o=new xt(t,i,0,0,s,2,i,!1,h);return o.plugin=n,o.setRatio=l(t,e,r._tween,i),o},priority:h})},W.useSVGTransformAttr=w||Y;function kt(t,e,i){var r,s=K.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(r in i)s.setAttributeNS(null,r.replace(n,"$1-$2").toLowerCase(),i[r]);return e.appendChild(s),s}function Rt(t,e,i,r,s,n){var a,o,l,h,f,u,p,_,c,d,m,g,y,v,x=t._fwdTransform,w=qt(t,!0);x&&(y=x.xOrigin,v=x.yOrigin),(!r||(a=r.split(" ")).length<2)&&(p=t.getBBox(),a=[(-1!==(e=pt(e).split(" "))[0].indexOf("%")?parseFloat(e[0])/100*p.width:parseFloat(e[0]))+p.x,(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*p.height:parseFloat(e[1]))+p.y]),i.xOrigin=h=parseFloat(a[0]),i.yOrigin=f=parseFloat(a[1]),r&&w!==Vt&&(u=w[0],p=w[1],_=w[2],c=w[3],d=w[4],o=h*(c/(g=u*c-p*_))+f*(-_/g)+(_*(m=w[5])-c*d)/g,l=h*(-p/g)+f*(u/g)-(u*m-p*d)/g,h=i.xOrigin=a[0]=o,f=i.yOrigin=a[1]=l),x&&(n&&(i.xOffset=x.xOffset,i.yOffset=x.yOffset,x=i),s||!1!==s&&!1!==W.defaultSmoothOrigin?(o=h-y,l=f-v,x.xOffset+=o*w[0]+l*w[2]-o,x.yOffset+=o*w[1]+l*w[3]-l):x.xOffset=x.yOffset=0),n||t.setAttribute("data-svg-origin",a.join(" "))}function St(t){var e,i,r=this.data,s=-r.rotation*Q,n=s+r.skewX*Q,a=1e5,o=(Math.cos(s)*r.scaleX*a|0)/a,l=(Math.sin(s)*r.scaleX*a|0)/a,h=(Math.sin(n)*-r.scaleY*a|0)/a,f=(Math.cos(n)*r.scaleY*a|0)/a,u=this.t.style,p=this.t.currentStyle;if(p){i=l,l=-h,h=-i,e=p.filter,u.filter="";var _=this.t.offsetWidth,c=this.t.offsetHeight,d="absolute"!==p.position,m="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+h+", M22="+f,g=r.x+_*r.xPercent/100,y=r.y+c*r.yPercent/100;if(null!=r.ox&&(g+=(b=(r.oxp?_*r.ox*.01:r.ox)-_/2)-(b*o+(P=(r.oyp?c*r.oy*.01:r.oy)-c/2)*l),y+=P-(b*h+P*f)),m+=d?", Dx="+((b=_/2)-(b*o+(P=c/2)*l)+g)+", Dy="+(P-(b*h+P*f)+y)+")":", sizingMethod='auto expand')",-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?u.filter=e.replace(Z,m):u.filter=m+" "+e,0!==t&&1!==t||1==o&&0===l&&0===h&&1==f&&(d&&-1===m.indexOf("Dx=0, Dy=0")||N.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf(e.indexOf("Alpha"))&&u.removeAttribute("filter")),!d){var v,x,w,T=C<8?1:-1,b=r.ieOffsetX||0,P=r.ieOffsetY||0;for(r.ieOffsetX=Math.round((_-((o<0?-o:o)*_+(l<0?-l:l)*c))/2+g),r.ieOffsetY=Math.round((c-((f<0?-f:f)*c+(h<0?-h:h)*_))/2+y),Tt=0;Tt<4;Tt++)w=(i=-1!==(v=p[x=ut[Tt]]).indexOf("px")?parseFloat(v):lt(this.t,x,parseFloat(v),v.replace(I,""))||0)!==r[x]?Tt<2?-r.ieOffsetX:-r.ieOffsetY:Tt<2?b-r.ieOffsetX:P-r.ieOffsetY,u[x]=(r[x]=Math.round(i-w*(0===Tt||2===Tt?1:T)))+"px"}}}var At,Mt,Ct,Ft,Dt,zt="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Xt=k("transform"),It=st+"transform",Nt=k("transformOrigin"),Yt=null!==k("perspective"),Et=et.Transform=function(){this.perspective=parseFloat(W.defaultTransformPerspective)||0,this.force3D=!(!1===W.defaultForce3D||!Yt)&&(W.defaultForce3D||"auto")},Bt=window.SVGElement,Wt=K.documentElement,Lt=(Dt=C||/Android/i.test(it)&&!window.chrome,K.createElementNS&&!Dt&&(Mt=kt("svg",Wt),Ft=(Ct=kt("rect",Mt,{width:100,height:50,x:100})).getBoundingClientRect().width,Ct.style[Nt]="50% 50%",Ct.style[Xt]="scaleX(0.5)",Dt=Ft===Ct.getBoundingClientRect().width&&!(Y&&Yt),Wt.removeChild(Mt)),Dt),jt=function(t){return!!(Bt&&t.getBBox&&t.getCTM&&function(t){try{return t.getBBox()}catch(t){}}(t)&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM))},Vt=[1,0,0,1,0,0],qt=function(t,e){var i,r,s,n,a,o,l=t._fwdTransform||new Et,h=t.style;if(Xt?r=ot(t,It,null,!0):t.currentStyle&&(r=(r=t.currentStyle.filter.match(q))&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),l.x||0,l.y||0].join(","):""),(i=!r||"none"===r||"matrix(1, 0, 0, 1, 0, 0)"===r)&&Xt&&((o="none"===at(t).display)||!t.parentNode)&&(o&&(n=h.display,h.display="block"),t.parentNode||(a=1,Wt.appendChild(t)),i=!(r=ot(t,It,null,!0))||"none"===r||"matrix(1, 0, 0, 1, 0, 0)"===r,n?h.display=n:o&&Gt(h,"display"),a&&Wt.removeChild(t)),(l.svg||t.getBBox&&jt(t))&&(i&&-1!==(h[Xt]+"").indexOf("matrix")&&(r=h[Xt],i=0),s=t.getAttribute("transform"),i&&s&&(-1!==s.indexOf("matrix")?(r=s,i=0):-1!==s.indexOf("translate")&&(r="matrix(1,0,0,1,"+s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",i=0))),i)return Vt;for(s=(r||"").match(z)||[],Tt=s.length;-1<--Tt;)n=Number(s[Tt]),s[Tt]=(a=n-(n|=0))?(1e5*a+(a<0?-.5:.5)|0)/1e5+n:n;return e&&6<s.length?[s[0],s[1],s[4],s[5],s[12],s[13]]:s},Zt=et.getTransform=function(t,e,i,r){if(t._fwdTransform&&i&&!r)return t._fwdTransform;var s,n,a,o,l,h,f,u,p,_,c,d,m,g,y,v,x,w,T,b,P,O,k,R,S,A,M,C,F,D,z,X,I=i&&t._fwdTransform||new Et,N=I.scaleX<0,Y=Yt&&(parseFloat(ot(t,Nt,e,!1,"0 0 0").split(" ")[2])||I.zOrigin)||0,E=parseFloat(W.defaultTransformPerspective)||0;if(I.svg=!(!t.getBBox||!jt(t)),I.svg&&(Rt(t,ot(t,Nt,e,!1,"50% 50%")+"",I,t.getAttribute("data-svg-origin")),At=W.useSVGTransformAttr||Lt),(s=qt(t))!==Vt)for(n in 16===s.length?(f=s[0],u=s[1],p=s[2],_=s[3],c=s[4],d=s[5],m=s[6],g=s[7],y=s[8],v=s[9],x=s[10],w=s[12],T=s[13],b=s[14],P=s[11],O=Math.atan2(m,x),I.zOrigin&&(w=y*(b=-I.zOrigin)-s[12],T=v*b-s[13],b=x*b+I.zOrigin-s[14]),I.rotationX=O*G,O&&(k=c*(A=Math.cos(-O))+y*(M=Math.sin(-O)),R=d*A+v*M,S=m*A+x*M,y=c*-M+y*A,v=d*-M+v*A,x=m*-M+x*A,P=g*-M+P*A,c=k,d=R,m=S),O=Math.atan2(-p,x),I.rotationY=O*G,O&&(R=u*(A=Math.cos(-O))-v*(M=Math.sin(-O)),S=p*A-x*M,v=u*M+v*A,x=p*M+x*A,P=_*M+P*A,f=k=f*A-y*M,u=R,p=S),O=Math.atan2(u,f),I.rotation=O*G,O&&(f=f*(A=Math.cos(-O))+c*(M=Math.sin(-O)),R=u*A+d*M,d=u*-M+d*A,m=p*-M+m*A,u=R),I.rotationX&&359.9<Math.abs(I.rotationX)+Math.abs(I.rotation)&&(I.rotationX=I.rotation=0,I.rotationY=180-I.rotationY),I.scaleX=(1e5*Math.sqrt(f*f+u*u)+.5|0)/1e5,I.scaleY=(1e5*Math.sqrt(d*d+v*v)+.5|0)/1e5,I.scaleZ=(1e5*Math.sqrt(m*m+x*x)+.5|0)/1e5,I.rotationX||I.rotationY?I.skewX=0:(I.skewX=c||d?Math.atan2(c,d)*G+I.rotation:I.skewX||0,90<Math.abs(I.skewX)&&Math.abs(I.skewX)<270&&(N?(I.scaleX*=-1,I.skewX+=I.rotation<=0?180:-180,I.rotation+=I.rotation<=0?180:-180):(I.scaleY*=-1,I.skewX+=I.skewX<=0?180:-180))),I.perspective=P?1/(P<0?-P:P):0,I.x=w,I.y=T,I.z=b,I.svg&&(I.x-=I.xOrigin-(I.xOrigin*f-I.yOrigin*c),I.y-=I.yOrigin-(I.yOrigin*u-I.xOrigin*d))):Yt&&!r&&s.length&&I.x===s[4]&&I.y===s[5]&&(I.rotationX||I.rotationY)||(F=(C=6<=s.length)?s[0]:1,D=s[1]||0,z=s[2]||0,X=C?s[3]:1,I.x=s[4]||0,I.y=s[5]||0,a=Math.sqrt(F*F+D*D),o=Math.sqrt(X*X+z*z),l=F||D?Math.atan2(D,F)*G:I.rotation||0,h=z||X?Math.atan2(z,X)*G+l:I.skewX||0,90<Math.abs(h)&&Math.abs(h)<270&&(N?(a*=-1,h+=l<=0?180:-180,l+=l<=0?180:-180):(o*=-1,h+=h<=0?180:-180)),I.scaleX=a,I.scaleY=o,I.rotation=l,I.skewX=h,Yt&&(I.rotationX=I.rotationY=I.z=0,I.perspective=E,I.scaleZ=1),I.svg&&(I.x-=I.xOrigin-(I.xOrigin*F+I.yOrigin*z),I.y-=I.yOrigin-(I.xOrigin*D+I.yOrigin*X))),I.zOrigin=Y,I)I[n]<2e-5&&-2e-5<I[n]&&(I[n]=0);return i&&(t._fwdTransform=I).svg&&(At&&t.style[Xt]?B.delayedCall(.001,function(){Gt(t.style,Xt)}):!At&&t.getAttribute("transform")&&B.delayedCall(.001,function(){t.removeAttribute("transform")})),I},Ut=et.set3DTransformRatio=et.setTransformRatio=function(t){var e,i,r,s,n,a,o,l,h,f,u,p,_,c,d,m,g,y,v,x,w,T,b,P=this.data,O=this.t.style,k=P.rotation,R=P.rotationX,S=P.rotationY,A=P.scaleX,M=P.scaleY,C=P.scaleZ,F=P.x,D=P.y,z=P.z,X=P.svg,I=P.perspective,N=P.force3D;if(!((1!==t&&0!==t||"auto"!==N||this.tween._totalTime!==this.tween._totalDuration&&this.tween._totalTime)&&N||z||I||S||R||1!==C)||At&&X||!Yt)k||P.skewX||X?(k*=Q,T=P.skewX*Q,b=1e5,e=Math.cos(k)*A,s=Math.sin(k)*A,i=Math.sin(k-T)*-M,n=Math.cos(k-T)*M,T&&"simple"===P.skewType&&(g=Math.tan(T-P.skewY*Q),i*=g=Math.sqrt(1+g*g),n*=g,P.skewY&&(g=Math.tan(P.skewY*Q),e*=g=Math.sqrt(1+g*g),s*=g)),X&&(F+=P.xOrigin-(P.xOrigin*e+P.yOrigin*i)+P.xOffset,D+=P.yOrigin-(P.xOrigin*s+P.yOrigin*n)+P.yOffset,At&&(P.xPercent||P.yPercent)&&(c=this.t.getBBox(),F+=.01*P.xPercent*c.width,D+=.01*P.yPercent*c.height),F<(c=1e-6)&&-c<F&&(F=0),D<c&&-c<D&&(D=0)),v=(e*b|0)/b+","+(s*b|0)/b+","+(i*b|0)/b+","+(n*b|0)/b+","+F+","+D+")",X&&At?this.t.setAttribute("transform","matrix("+v):O[Xt]=(P.xPercent||P.yPercent?"translate("+P.xPercent+"%,"+P.yPercent+"%) matrix(":"matrix(")+v):O[Xt]=(P.xPercent||P.yPercent?"translate("+P.xPercent+"%,"+P.yPercent+"%) matrix(":"matrix(")+A+",0,0,"+M+","+F+","+D+")";else{if(Y&&(A<(c=1e-4)&&-c<A&&(A=C=2e-5),M<c&&-c<M&&(M=C=2e-5),!I||P.z||P.rotationX||P.rotationY||(I=0)),k||P.skewX)k*=Q,d=e=Math.cos(k),m=s=Math.sin(k),P.skewX&&(k-=P.skewX*Q,d=Math.cos(k),m=Math.sin(k),"simple"===P.skewType&&(g=Math.tan((P.skewX-P.skewY)*Q),d*=g=Math.sqrt(1+g*g),m*=g,P.skewY&&(g=Math.tan(P.skewY*Q),e*=g=Math.sqrt(1+g*g),s*=g))),i=-m,n=d;else{if(!(S||R||1!==C||I||X))return void(O[Xt]=(P.xPercent||P.yPercent?"translate("+P.xPercent+"%,"+P.yPercent+"%) translate3d(":"translate3d(")+F+"px,"+D+"px,"+z+"px)"+(1!==A||1!==M?" scale("+A+","+M+")":""));e=n=1,i=s=0}h=1,r=a=o=l=f=u=0,p=I?-1/I:0,_=P.zOrigin,c=1e-6,x=",",w="0",(k=S*Q)&&(d=Math.cos(k),f=p*(o=-(m=Math.sin(k))),r=e*m,a=s*m,p*=h=d,e*=d,s*=d),(k=R*Q)&&(g=i*(d=Math.cos(k))+r*(m=Math.sin(k)),y=n*d+a*m,l=h*m,u=p*m,r=i*-m+r*d,a=n*-m+a*d,h*=d,p*=d,i=g,n=y),1!==C&&(r*=C,a*=C,h*=C,p*=C),1!==M&&(i*=M,n*=M,l*=M,u*=M),1!==A&&(e*=A,s*=A,o*=A,f*=A),(_||X)&&(_&&(F+=r*-_,D+=a*-_,z+=h*-_+_),X&&(F+=P.xOrigin-(P.xOrigin*e+P.yOrigin*i)+P.xOffset,D+=P.yOrigin-(P.xOrigin*s+P.yOrigin*n)+P.yOffset),F<c&&-c<F&&(F=w),D<c&&-c<D&&(D=w),z<c&&-c<z&&(z=0)),v=P.xPercent||P.yPercent?"translate("+P.xPercent+"%,"+P.yPercent+"%) matrix3d(":"matrix3d(",v+=(e<c&&-c<e?w:e)+x+(s<c&&-c<s?w:s)+x+(o<c&&-c<o?w:o),v+=x+(f<c&&-c<f?w:f)+x+(i<c&&-c<i?w:i)+x+(n<c&&-c<n?w:n),R||S||1!==C?(v+=x+(l<c&&-c<l?w:l)+x+(u<c&&-c<u?w:u)+x+(r<c&&-c<r?w:r),v+=x+(a<c&&-c<a?w:a)+x+(h<c&&-c<h?w:h)+x+(p<c&&-c<p?w:p)+x):v+=",0,0,0,0,1,0,",v+=F+x+D+x+z+x+(I?1+-z/I:1)+")",O[Xt]=v}};(t=Et.prototype).x=t.y=t.z=t.skewX=t.skewY=t.rotation=t.rotationX=t.rotationY=t.zOrigin=t.xPercent=t.yPercent=t.xOffset=t.yOffset=0,t.scaleX=t.scaleY=t.scaleZ=1,Pt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(t,e,i,r,s,n,a){if(r._lastParsedTransform===a)return s;var o;"function"==typeof(r._lastParsedTransform=a)[i]&&(o=a[i],a[i]=e);var l,h,f,u,p,_,c,d,m,g=t._fwdTransform,y=t.style,v=zt.length,x=a,w={},T="transformOrigin",b=Zt(t,O,!0,x.parseTransform),P=x.transform&&("function"==typeof x.transform?x.transform(D,F):x.transform);if(r._transform=b,P&&"string"==typeof P&&Xt)(h=J.style)[Xt]=P,h.display="block",h.position="absolute",K.body.appendChild(J),l=Zt(J,null,!1),b.svg&&(_=b.xOrigin,c=b.yOrigin,l.x-=b.xOffset,l.y-=b.yOffset,(x.transformOrigin||x.svgOrigin)&&(P={},Rt(t,pt(x.transformOrigin),P,x.svgOrigin,x.smoothOrigin,!0),_=P.xOrigin,c=P.yOrigin,l.x-=P.xOffset-b.xOffset,l.y-=P.yOffset-b.yOffset),(_||c)&&(d=qt(J,!0),l.x-=_-(_*d[0]+c*d[2]),l.y-=c-(_*d[1]+c*d[3]))),K.body.removeChild(J),l.perspective||(l.perspective=b.perspective),null!=x.xPercent&&(l.xPercent=S(x.xPercent,b.xPercent)),null!=x.yPercent&&(l.yPercent=S(x.yPercent,b.yPercent));else if("object"==typeof x){if(l={scaleX:S(null!=x.scaleX?x.scaleX:x.scale,b.scaleX),scaleY:S(null!=x.scaleY?x.scaleY:x.scale,b.scaleY),scaleZ:S(x.scaleZ,b.scaleZ),x:S(x.x,b.x),y:S(x.y,b.y),z:S(x.z,b.z),xPercent:S(x.xPercent,b.xPercent),yPercent:S(x.yPercent,b.yPercent),perspective:S(x.transformPerspective,b.perspective)},null!=(p=x.directionalRotation))if("object"==typeof p)for(h in p)x[h]=p[h];else x.rotation=p;"string"==typeof x.x&&-1!==x.x.indexOf("%")&&(l.x=0,l.xPercent=S(x.x,b.xPercent)),"string"==typeof x.y&&-1!==x.y.indexOf("%")&&(l.y=0,l.yPercent=S(x.y,b.yPercent)),l.rotation=A("rotation"in x?x.rotation:"shortRotation"in x?x.shortRotation+"_short":"rotationZ"in x?x.rotationZ:b.rotation-b.skewY,b.rotation-b.skewY,"rotation",w),Yt&&(l.rotationX=A("rotationX"in x?x.rotationX:"shortRotationX"in x?x.shortRotationX+"_short":b.rotationX||0,b.rotationX,"rotationX",w),l.rotationY=A("rotationY"in x?x.rotationY:"shortRotationY"in x?x.shortRotationY+"_short":b.rotationY||0,b.rotationY,"rotationY",w)),l.skewX=A(x.skewX,b.skewX-b.skewY),(l.skewY=A(x.skewY,b.skewY))&&(l.skewX+=l.skewY,l.rotation+=l.skewY)}for(Yt&&null!=x.force3D&&(b.force3D=x.force3D,u=!0),b.skewType=x.skewType||b.skewType||W.defaultSkewType,(f=b.force3D||b.z||b.rotationX||b.rotationY||l.z||l.rotationX||l.rotationY||l.perspective)||null==x.scale||(l.scaleZ=1);-1<--v;)(1e-6<(P=l[m=zt[v]]-b[m])||P<-1e-6||null!=x[m]||null!=H[m])&&(u=!0,s=new xt(b,m,b[m],P,s),m in w&&(s.e=w[m]),s.xs0=0,s.plugin=n,r._overwriteProps.push(s.n));return P=x.transformOrigin,b.svg&&(P||x.svgOrigin)&&(_=b.xOffset,c=b.yOffset,Rt(t,pt(P),l,x.svgOrigin,x.smoothOrigin),s=yt(b,"xOrigin",(g?b:l).xOrigin,l.xOrigin,s,T),s=yt(b,"yOrigin",(g?b:l).yOrigin,l.yOrigin,s,T),_===b.xOffset&&c===b.yOffset||(s=yt(b,"xOffset",g?_:b.xOffset,b.xOffset,s,T),s=yt(b,"yOffset",g?c:b.yOffset,b.yOffset,s,T)),P=At?null:"0px 0px"),(P||Yt&&f&&b.zOrigin)&&(Xt?(u=!0,m=Nt,P=(P||ot(t,m,O,!1,"50% 50%"))+"",(s=new xt(y,m,0,0,s,-1,T)).b=y[m],s.plugin=n,Yt?(h=b.zOrigin,P=P.split(" "),b.zOrigin=(2<P.length&&(0===h||"0px"!==P[2])?parseFloat(P[2]):h)||0,s.xs0=s.e=P[0]+" "+(P[1]||"50%")+" 0px",(s=new xt(b,"zOrigin",0,0,s,-1,s.n)).b=h,s.xs0=s.e=b.zOrigin):s.xs0=s.e=P):pt(P+"",b)),u&&(r._transformType=b.svg&&At||!f&&3!==this._transformType?2:3),o&&(a[i]=o),s},prefix:!0}),Pt("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),Pt("borderRadius",{defaultValue:"0px",parser:function(t,e,i,r,s,n){e=this.format(e);for(var a,o,l,h,f,u,p,_,c,d,m,g,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],v=t.style,x=parseFloat(t.offsetWidth),w=parseFloat(t.offsetHeight),T=e.split(" "),b=0;b<y.length;b++)this.p.indexOf("border")&&(y[b]=k(y[b])),-1!==(l=o=ot(t,y[b],O,!1,"0px")).indexOf(" ")&&(l=(o=l.split(" "))[0],o=o[1]),h=a=T[b],f=parseFloat(l),_=l.substr((f+"").length),""===(p=(c="="===h.charAt(1))?(u=parseInt(h.charAt(0)+"1",10),h=h.substr(2),u*=parseFloat(h),h.substr((u+"").length-(u<0?1:0))||""):(u=parseFloat(h),h.substr((u+"").length)))&&(p=P[i]||_),p!==_&&(d=lt(t,"borderLeft",f,_),m=lt(t,"borderTop",f,_),o="%"===p?(l=d/x*100+"%",m/w*100+"%"):"em"===p?(l=d/(g=lt(t,"borderLeft",1,"em"))+"em",m/g+"em"):(l=d+"px",m+"px"),c&&(h=parseFloat(l)+u+p,a=parseFloat(o)+u+p)),s=wt(v,y[b],l+" "+o,h+" "+a,!1,"0px",s);return s},prefix:!0,formatter:mt("0px 0px 0px 0px",!1,!0)}),Pt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(t,e,i,r,s,n){return wt(t.style,i,this.format(ot(t,i,O,!1,"0px 0px")),this.format(e),!1,"0px",s)},prefix:!0,formatter:mt("0px 0px",!1,!0)}),Pt("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,r,s,n){var a,o,l,h,f,u,p="background-position",_=O||at(t,null),c=this.format((_?C?_.getPropertyValue(p+"-x")+" "+_.getPropertyValue(p+"-y"):_.getPropertyValue(p):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),d=this.format(e);if(-1!==c.indexOf("%")!=(-1!==d.indexOf("%"))&&d.split(",").length<2&&(u=ot(t,"backgroundImage").replace(j,""))&&"none"!==u){for(a=c.split(" "),o=d.split(" "),tt.setAttribute("src",u),l=2;-1<--l;)(h=-1!==(c=a[l]).indexOf("%"))!=(-1!==o[l].indexOf("%"))&&(f=0===l?t.offsetWidth-tt.width:t.offsetHeight-tt.height,a[l]=h?parseFloat(c)/100*f+"px":parseFloat(c)/f*100+"%");c=a.join(" ")}return this.parseComplex(t.style,c,d,s,n)},formatter:pt}),Pt("backgroundSize",{defaultValue:"0 0",formatter:function(t){return pt(-1===(t+="").indexOf(" ")?t+" "+t:t)}}),Pt("perspective",{defaultValue:"0px",prefix:!0}),Pt("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),Pt("transformStyle",{prefix:!0}),Pt("backfaceVisibility",{prefix:!0}),Pt("userSelect",{prefix:!0}),Pt("margin",{parser:gt("marginTop,marginRight,marginBottom,marginLeft")}),Pt("padding",{parser:gt("paddingTop,paddingRight,paddingBottom,paddingLeft")}),Pt("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,r,s,n){var a,o,l;return e=C<9?(o=t.currentStyle,l=C<8?" ":",",a="rect("+o.clipTop+l+o.clipRight+l+o.clipBottom+l+o.clipLeft+")",this.format(e).split(",").join(l)):(a=this.format(ot(t,this.p,O,!1,this.dflt)),this.format(e)),this.parseComplex(t.style,a,e,s,n)}}),Pt("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),Pt("autoRound,strictUnits",{parser:function(t,e,i,r,s){return s}}),Pt("border",{defaultValue:"0px solid #000",parser:function(t,e,i,r,s,n){var a=ot(t,"borderTopWidth",O,!1,"0px"),o=this.format(e).split(" "),l=o[0].replace(I,"");return"px"!==l&&(a=parseFloat(a)/lt(t,"borderTopWidth",1,l)+l),this.parseComplex(t.style,this.format(a+" "+ot(t,"borderTopStyle",O,!1,"solid")+" "+ot(t,"borderTopColor",O,!1,"#000")),o.join(" "),s,n)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(dt)||["#000"])[0]}}),Pt("borderWidth",{parser:gt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),Pt("float,cssFloat,styleFloat",{parser:function(t,e,i,r,s,n){var a=t.style,o="cssFloat"in a?"cssFloat":"styleFloat";return new xt(a,o,0,0,s,-1,i,!1,0,a[o],e)}});function $t(t){var e,i=this.t,r=i.filter||ot(this.data,"filter")||"",s=this.s+this.c*t|0;100==s&&(e=-1===r.indexOf("atrix(")&&-1===r.indexOf("radient(")&&-1===r.indexOf("oader(")?(i.removeAttribute("filter"),!ot(this.data,"filter")):(i.filter=r.replace(l,""),!0)),e||(this.xn1&&(i.filter=r=r||"alpha(opacity="+s+")"),-1===r.indexOf("pacity")?0==s&&this.xn1||(i.filter=r+" alpha(opacity="+s+")"):i.filter=r.replace(N,"opacity="+s))}Pt("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,r,s,n){var a=parseFloat(ot(t,"opacity",O,!1,"1")),o=t.style,l="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+a),l&&1===a&&"hidden"===ot(t,"visibility",O)&&0!==e&&(a=0),rt?s=new xt(o,"opacity",a,e-a,s):((s=new xt(o,"opacity",100*a,100*(e-a),s)).xn1=l?1:0,o.zoom=1,s.type=2,s.b="alpha(opacity="+s.s+")",s.e="alpha(opacity="+(s.s+s.c)+")",s.data=t,s.plugin=n,s.setRatio=$t),l&&((s=new xt(o,"visibility",0,0,s,-1,null,!1,0,0!==a?"inherit":"hidden",0===e?"hidden":"inherit")).xs0="inherit",r._overwriteProps.push(s.n),r._overwriteProps.push(i)),s}});function Qt(t){if(this.t._fwdClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Gt(i,e.p),e=e._next;1===t&&this.t._fwdClassPT===this&&(this.t._fwdClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)}var Gt=function(t,e){e&&(t.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),t.removeProperty(e.replace(u,"-$1").toLowerCase())):t.removeAttribute(e))};Pt("className",{parser:function(t,e,i,r,s,n,a){var o,l,h,f,u,p=t.getAttribute("class")||"",_=t.style.cssText;if((s=r._classNamePT=new xt(t,i,0,0,s,2)).setRatio=Qt,s.pr=-11,c=!0,s.b=p,l=y(t,O),h=t._fwdClassPT){for(f={},u=h.data;u;)f[u.p]=1,u=u._next;h.setRatio(1)}return(t._fwdClassPT=s).e="="!==e.charAt(1)?e:p.replace(new RegExp("(?:\\s|^)"+e.substr(2)+"(?![\\w-])"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),t.setAttribute("class",s.e),o=v(t,l,y(t),a,f),t.setAttribute("class",p),s.data=o.firstMPT,t.style.cssText=_,s=s.xfirst=r.parse(t,o.difs,s,n)}});function Ht(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,r,s,n,a=this.t.style,o=m.transform.parse;if("all"===this.e)s=!(a.cssText="");else for(r=(e=this.e.split(" ").join("").split(",")).length;-1<--r;)i=e[r],m[i]&&(m[i].parse===o?s=!0:i="transformOrigin"===i?Nt:m[i].p),Gt(a,i);s&&(Gt(a,Xt),(n=this.t._fwdTransform)&&(n.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._fwdTransform))}}for(Pt("clearProps",{parser:function(t,e,i,r,s){return(s=new xt(t,i,0,0,s,2)).setRatio=Ht,s.e=e,s.pr=-10,s.data=r._tween,c=!0,s}}),t="bezier,throwProps,physicsProps,physics2D".split(","),Tt=t.length;Tt--;)Ot(t[Tt]);(t=W.prototype)._firstPT=t._lastParsedTransform=t._transform=null,t._onInitTween=function(t,e,i,r){if(!t.nodeType)return!1;this._target=F=t,this._tween=i,this._vars=e,D=r,M=e.autoRound,c=!1,P=e.suffixMap||W.suffixMap,O=at(t,""),d=this._overwriteProps;var s,n,a,o,l,h,f,u,p,_=t.style;if(x&&""===_.zIndex&&("auto"!==(s=ot(t,"zIndex",O))&&""!==s||this._addLazySet(_,"zIndex",0)),"string"==typeof e&&(o=_.cssText,s=y(t,O),_.cssText=o+";"+e,s=v(t,s,y(t)).difs,!rt&&E.test(e)&&(s.opacity=parseFloat(RegExp.$1)),e=s,_.cssText=o),e.className?this._firstPT=n=m.className.parse(t,e.className,"className",this,null,null,e):this._firstPT=n=this.parse(t,e,null),this._transformType){for(p=3===this._transformType,Xt?w&&(x=!0,""===_.zIndex&&("auto"!==(f=ot(t,"zIndex",O))&&""!==f||this._addLazySet(_,"zIndex",0)),T&&this._addLazySet(_,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(p?"visible":"hidden"))):_.zoom=1,a=n;a&&a._next;)a=a._next;u=new xt(t,"transform",0,0,null,2),this._linkCSSP(u,null,a),u.setRatio=Xt?Ut:St,u.data=this._transform||Zt(t,O,!0),u.tween=i,u.pr=-1,d.pop()}if(c){for(;n;){for(h=n._next,a=o;a&&a.pr>n.pr;)a=a._next;(n._prev=a?a._prev:l)?n._prev._next=n:o=n,(n._next=a)?a._prev=n:l=n,n=h}this._firstPT=o}return!0},t.parse=function(t,e,i,r){var s,n,a,o,l,h,f,u,p,_,c=t.style;for(s in e)"function"==typeof(h=e[s])&&(h=h(D,F)),(n=m[s])?i=n.parse(t,h,s,this,i,r,e):(l=ot(t,s,O)+"",p="string"==typeof h,"color"===s||"fill"===s||"stroke"===s||-1!==s.indexOf("Color")||p&&L.test(h)?(p||(h=(3<(h=ct(h)).length?"rgba(":"rgb(")+h.join(",")+")"),i=wt(c,s,l,h,!0,"transparent",i,0,r)):p&&$.test(h)?i=wt(c,s,l,h,!0,null,i,0,r):(f=(a=parseFloat(l))||0===a?l.substr((a+"").length):"",""!==l&&"auto"!==l||(f="width"===s||"height"===s?(a=function(t,e,i){if("svg"===(t.nodeName+"").toLowerCase())return(i||at(t))[e]||0;if(t.getBBox&&jt(t))return t.getBBox()[e]||0;var r=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),s=ft[e],n=s.length;for(i=i||at(t,null);-1<--n;)r-=parseFloat(ot(t,"padding"+s[n],i,!0))||0,r-=parseFloat(ot(t,"border"+s[n]+"Width",i,!0))||0;return r}(t,s,O),"px"):"left"===s||"top"===s?(a=ht(t,s,O),"px"):(a="opacity"!==s?0:1,"")),""===(u=(_=p&&"="===h.charAt(1))?(o=parseInt(h.charAt(0)+"1",10),h=h.substr(2),o*=parseFloat(h),h.replace(I,"")):(o=parseFloat(h),p?h.replace(I,""):""))&&(u=s in P?P[s]:f),h=o||0===o?(_?o+a:o)+u:e[s],f!==u&&""!==u&&(o||0===o)&&a&&(a=lt(t,s,a,f),"%"===u?(a/=lt(t,s,100,"%")/100,!0!==e.strictUnits&&(l=a+"%")):"em"===u||"rem"===u||"vw"===u||"vh"===u?a/=lt(t,s,1,u):"px"!==u&&(o=lt(t,s,o,u),u="px"),_&&(!o&&0!==o||(h=o+a+u))),_&&(o+=a),!a&&0!==a||!o&&0!==o?void 0!==c[s]&&(h||h+""!="NaN"&&null!=h)?(i=new xt(c,s,o||a||0,0,i,-1,s,!1,0,l,h)).xs0="none"!==h||"display"!==s&&-1===s.indexOf("Style")?h:l:g("invalid "+s+" tween value: "+e[s]):(i=new xt(c,s,a,o-a,i,0,s,!1!==M&&("px"===u||"zIndex"===s),0,l,h)).xs0=u)),r&&i&&!i.plugin&&(i.plugin=r);return i},t.setRatio=function(t){var e,i,r,s=this._firstPT;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||-1e-6===this._tween._rawPrevTime)for(;s;){if(e=s.c*t+s.s,s.r?e=Math.round(e):e<1e-6&&-1e-6<e&&(e=0),s.type)if(1===s.type)if(2===(r=s.l))s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2;else if(3===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3;else if(4===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4;else if(5===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4+s.xn4+s.xs5;else{for(i=s.xs0+e+s.xs1,r=1;r<s.l;r++)i+=s["xn"+r]+s["xs"+(r+1)];s.t[s.p]=i}else-1===s.type?s.t[s.p]=s.xs0:s.setRatio&&s.setRatio(t);else s.t[s.p]=e+s.xs0;s=s._next}else for(;s;)2!==s.type?s.t[s.p]=s.b:s.setRatio(t),s=s._next;else for(;s;){if(2!==s.type)if(s.r&&-1!==s.type)if(e=Math.round(s.s+s.c),s.type){if(1===s.type){for(r=s.l,i=s.xs0+e+s.xs1,r=1;r<s.l;r++)i+=s["xn"+r]+s["xs"+(r+1)];s.t[s.p]=i}}else s.t[s.p]=e+s.xs0;else s.t[s.p]=s.e;else s.setRatio(t);s=s._next}},t._enableTransforms=function(t){this._transform=this._transform||Zt(this._target,O,!0),this._transformType=this._transform.svg&&At||!t&&3!==this._transformType?2:3};function Kt(t){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)}t._addLazySet=function(t,e,i){var r=this._firstPT=new xt(t,e,0,0,this._firstPT,2);r.e=i,r.setRatio=Kt,r.data=this},t._linkCSSP=function(t,e,i,r){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,r=!0),i?i._next=t:r||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},t._mod=function(t){for(var e=this._firstPT;e;)"function"==typeof t[e.p]&&t[e.p]===Math.round&&(e.r=1),e=e._next},t._kill=function(t){var e,i,r,s=t;if(t.autoAlpha||t.alpha){for(i in s={},t)s[i]=t[i];s.opacity=1,s.autoAlpha&&(s.visibility=1)}for(t.className&&(e=this._classNamePT)&&((r=e.xfirst)&&r._prev?this._linkCSSP(r._prev,e._next,r._prev._prev):r===this._firstPT&&(this._firstPT=e._next),e._next&&this._linkCSSP(e._next,e._next._next,r._prev),this._classNamePT=null),e=this._firstPT;e;)e.plugin&&e.plugin!==i&&e.plugin._kill&&(e.plugin._kill(t),i=e.plugin),e=e._next;return n.prototype._kill.call(this,s)};var Jt=function(t,e,i){var r,s,n,a;if(t.slice)for(s=t.length;-1<--s;)Jt(t[s],e,i);else for(s=(r=t.childNodes).length;-1<--s;)a=(n=r[s]).type,n.style&&(e.push(y(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Jt(n,e,i)};return W.cascadeTo=function(t,e,i){var r,s,n,a,o=B.to(t,e,i),l=[o],h=[],f=[],u=[],p=B._internals.reservedProps;for(t=o._targets||o.target,Jt(t,h,u),o.render(e,!0,!0),Jt(t,f),o.render(0,!0,!0),o._enabled(!0),r=u.length;-1<--r;)if((s=v(u[r],h[r],f[r])).firstMPT){for(n in s=s.difs,i)p[n]&&(s[n]=i[n]);for(n in a={},s)a[n]=h[r][n];l.push(B.fromTo(u[r],e,a,s))}return l},n.activate([W]),W},!0),_fwd_fwdScope.FWDFWD_fwdDefine("easing.Back",["easing.Ease"],function(m){function t(t,e){var i=f("easing."+t,function(){},!0),r=i.prototype=new m;return r.constructor=i,r.getRatio=e,i}function e(t,e,i,r,s){var n=f("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new r},!0);return u(n,t),n}function g(t,e,i){this.t=t,this.v=e,i&&(((this.next=i).prev=this).c=i.v-e,this.gap=i.t-t)}function i(t,e){var i=f("easing."+t,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=i.prototype=new m;return r.constructor=i,r.getRatio=e,r.config=function(t){return new i(t)},i}var r,s,n,a=_fwd_fwdScope.FWDGlobals||_fwd_fwdScope,o=a.com.fwd,l=2*Math.PI,h=Math.PI/2,f=o._class,u=m.register||function(){},p=e("Back",i("BackOut",function(t){return--t*t*((this._p1+1)*t+this._p1)+1}),i("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),i("BackInOut",function(t){return(t*=2)<1?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),_=f("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:1<t&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=!0===i},!0),c=_.prototype=new m;return c.constructor=_,c.getRatio=function(t){var e=t+(.5-t)*this._p;return t<this._p1?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},_.ease=new _(.7,.7),c.config=_.config=function(t,e,i){return new _(t,e,i)},(c=(r=f("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0)).prototype=new m).constructor=r,c.getRatio=function(t){return t<0?t=0:1<=t&&(t=.999999999),(this._p2*t>>0)*this._p1},c.config=r.config=function(t){return new r(t)},(c=(s=f("easing.RoughEase",function(t){for(var e,i,r,s,n,a,o=(t=t||{}).taper||"none",l=[],h=0,f=0|(t.points||20),u=f,p=!1!==t.randomize,_=!0===t.clamp,c=t.template instanceof m?t.template:null,d="number"==typeof t.strength?.4*t.strength:.4;-1<--u;)e=p?Math.random():1/f*u,i=c?c.getRatio(e):e,r="none"===o?d:"out"===o?(s=1-e)*s*d:"in"===o?e*e*d:e<.5?(s=2*e)*s*.5*d:(s=2*(1-e))*s*.5*d,p?i+=Math.random()*r-.5*r:u%2?i+=.5*r:i-=.5*r,_&&(1<i?i=1:i<0&&(i=0)),l[h++]={x:e,y:i};for(l.sort(function(t,e){return t.x-e.x}),a=new g(1,1,null),u=f;-1<--u;)n=l[u],a=new g(n.x,n.y,a);this._prev=new g(0,0,0!==a.t?a:a.next)},!0)).prototype=new m).constructor=s,c.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&t<=e.t;)e=e.prev;return(this._prev=e).v+(t-e.t)/e.gap*e.c},c.config=function(t){return new s(t)},s.ease=new s,e("Bounce",t("BounceOut",function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),t("BounceIn",function(t){return(t=1-t)<1/2.75?1-7.5625*t*t:t<2/2.75?1-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),t("BounceInOut",function(t){var e=t<.5;return(t=e?1-2*t:2*t-1)<1/2.75?t*=7.5625*t:t=t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),e("Circ",t("CircOut",function(t){return Math.sqrt(1- --t*t)}),t("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),t("CircInOut",function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),e("Elastic",(n=function(t,e,i){var r=f("easing."+t,function(t,e){this._p1=1<=t?t:1,this._p2=(e||i)/(t<1?t:1),this._p3=this._p2/l*(Math.asin(1/this._p1)||0),this._p2=l/this._p2},!0),s=r.prototype=new m;return s.constructor=r,s.getRatio=e,s.config=function(t,e){return new r(t,e)},r})("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*this._p2)+1},.3),n("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*--t)*Math.sin((t-this._p3)*this._p2))},.3),n("ElasticInOut",function(t){return(t*=2)<1?this._p1*Math.pow(2,10*--t)*Math.sin((t-this._p3)*this._p2)*-.5:this._p1*Math.pow(2,-10*--t)*Math.sin((t-this._p3)*this._p2)*.5+1},.45)),e("Expo",t("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),t("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),t("ExpoInOut",function(t){return(t*=2)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),e("Sine",t("SineOut",function(t){return Math.sin(t*h)}),t("SineIn",function(t){return 1-Math.cos(t*h)}),t("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),f("easing.EaseLookup",{find:function(t){return m.map[t]}},!0),u(a.SlowMo,"SlowMo","ease,"),u(s,"RoughEase","ease,"),u(r,"SteppedEase","ease,"),p},!0)}),_fwd_fwdScope.FWDFWD_fwdDefine&&_fwd_fwdScope._fwd_fwdQueue.pop()(),function(_,c){"use strict";var d={},m=_.FWDGlobals=_.FWDGlobals||_;if(!m.FWDTweenLite){var g,e,i,y=function(t){for(var e=t.split("."),i=m,r=0;r<e.length;r++)i[e[r]]=i=i[e[r]]||{};return i},u=y("com.fwd"),v=1e-10,l=function(t){for(var e=[],i=t.length,r=0;r!==i;e.push(t[r++]));return e},r=function(){},x=(e=Object.prototype.toString,i=e.call([]),function(t){return null!=t&&(t instanceof Array||"object"==typeof t&&!!t.push&&e.call(t)===i)}),w={},T=function(l,h,f,u){this.sc=w[l]?w[l].sc:[],(w[l]=this).gsClass=null,this.func=f;var p=[];this.check=function(t){for(var e,i,r,s,n,a=h.length,o=a;-1<--a;)(e=w[h[a]]||new T(h[a],[])).gsClass?(p[a]=e.gsClass,o--):t&&e.sc.push(this);if(0===o&&f){if(r=(i=("com.fwd."+l).split(".")).pop(),s=y(i.join("."))[r]=this.gsClass=f.apply(f,p),u)if(m[r]=d[r]=s,!(n="undefined"!=typeof fwd_module&&fwd_module.exports)&&"function"==typeof define&&define.amd)define((_.FWDAMDPath?_.FWDAMDPath+"/":"")+l.split(".").pop(),[],function(){return s});else if(n)if(l===c)for(a in fwd_module.exports=d[c]=s,d)s[a]=d[a];else d[c]&&(d[c][r]=s);for(a=0;a<this.sc.length;a++)this.sc[a].check()}},this.check(!0)},s=_.FWDFWD_fwdDefine=function(t,e,i,r){return new T(t,e,i,r)},p=u._class=function(t,e,i){return e=e||function(){},s(t,[],function(){return e},i),e};s.globals=m;var t,n=[0,0,1,1],b=p("easing.Ease",function(t,e,i,r){this._func=t,this._type=i||0,this._power=r||0,this._params=e?n.concat(e):n},!0),P=b.map={},a=b.register=function(t,e,i,r){for(var s,n,a,o,l=e.split(","),h=l.length,f=(i||"easeIn,easeOut,easeInOut").split(",");-1<--h;)for(n=l[h],s=r?p("easing."+n,null,!0):u.easing[n]||{},a=f.length;-1<--a;)o=f[a],P[n+"."+o]=P[o+n]=s[o]=t.getRatio?t:t[o]||new t};for((t=b.prototype)._calcEnd=!1,t.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,r=1===e?1-t:2===e?t:t<.5?2*t:2*(1-t);return 1===i?r*=r:2===i?r*=r*r:3===i?r*=r*r*r:4===i&&(r*=r*r*r*r),1===e?1-r:2===e?r:t<.5?r/2:1-r/2},h=(o=["Linear","Quad","Cubic","Quart","Quint,Strong"]).length;-1<--h;)t=o[h]+",Power"+h,a(new b(null,null,1,h),t,"easeOut",!0),a(new b(null,null,2,h),t,"easeIn"+(0===h?",easeNone":"")),a(new b(null,null,3,h),t,"easeInOut");P.linear=u.easing.Linear.easeIn,P.swing=u.easing.Quad.easeInOut;var O=p("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});(t=O.prototype).addEventListener=function(t,e,i,r,s){s=s||0;var n,a,o=this._listeners[t],l=0;for(this!==M||g||M.wake(),null==o&&(this._listeners[t]=o=[]),a=o.length;-1<--a;)(n=o[a]).c===e&&n.s===i?o.splice(a,1):0===l&&n.pr<s&&(l=a+1);o.splice(l,0,{c:e,s:i,up:r,pr:s})},t.removeEventListener=function(t,e){var i,r=this._listeners[t];if(r)for(i=r.length;-1<--i;)if(r[i].c===e)return void r.splice(i,1)},t.dispatchEvent=function(t){var e,i,r,s=this._listeners[t];if(s)for(1<(e=s.length)&&(s=s.slice(0)),i=this._eventTarget;-1<--e;)(r=s[e])&&(r.up?r.c.call(r.s||i,{type:t,target:i}):r.c.call(r.s||i))};for(var o,k=_.requestAnimationFrame,R=_.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},A=S(),h=(o=["ms","moz","webkit","o"]).length;-1<--h&&!k;)k=_[o[h]+"RequestAnimationFrame"],R=_[o[h]+"CancelAnimationFrame"]||_[o[h]+"CancelRequestAnimationFrame"];p("Ticker",function(t,e){var s,n,a,o,l,h=this,f=S(),i=!(!1===e||!k)&&"auto",u=500,p=33,_=function(t){var e,i,r=S()-A;u<r&&(f+=r-p),A+=r,h.time=(A-f)/1e3,e=h.time-l,(!s||0<e||!0===t)&&(h.frame++,l+=e+(o<=e?.004:o-e),i=!0),!0!==t&&(a=n(_)),i&&h.dispatchEvent("tick")};O.call(h),h.time=h.frame=0,h.tick=function(){_(!0)},h.lagSmoothing=function(t,e){u=t||1e10,p=Math.min(e,u,0)},h.sleep=function(){null!=a&&((i&&R?R:clearTimeout)(a),n=r,a=null,h===M&&(g=!1))},h.wake=function(t){null!==a?h.sleep():t?f+=-A+(A=S()):10<h.frame&&(A=S()-u+5),n=0===s?r:i&&k?k:function(t){return setTimeout(t,1e3*(l-h.time)+1|0)},h===M&&(g=!0),_(2)},h.fps=function(t){if(!arguments.length)return s;o=1/((s=t)||60),l=this.time+o,h.wake()},h.useRAF=function(t){if(!arguments.length)return i;h.sleep(),i=t,h.fps(s)},h.fps(t),setTimeout(function(){"auto"===i&&h.frame<5&&"hidden"!==document.visibilityState&&h.useRAF(!1)},1500)}),(t=u.Ticker.prototype=new u.events.EventDispatcher).constructor=u.Ticker;var f=p("core.FWDAnimation",function(t,e){var i;this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=!0===e.immediateRender,this.data=e.data,this._reversed=!0===e.reversed,$&&(g||M.wake(),(i=this.vars.useFrames?U:$).add(this,i._time),this.vars.paused&&this.paused(!0))}),M=f.ticker=new u.Ticker;(t=f.prototype)._dirty=t._gc=t._initted=t._paused=!1,t._totalTime=t._time=0,t._rawPrevTime=-1,t._next=t._last=t._onUpdate=t._timeline=t.timeline=null,t._paused=!1;var C=function(){g&&2e3<S()-A&&M.wake(),setTimeout(C,2e3)};C(),t.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},t.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},t.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},t.seek=function(t,e){return this.totalTime(Number(t),!1!==e)},t.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,!1!==e,!0)},t.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},t.render=function(t,e,i){},t.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,!this._gc&&this.timeline||this._enabled(!0),this},t.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&t<i+this.totalDuration()/this._timeScale},t._enabled=function(t,e){return g||M.wake(),this._gc=!t,this._active=this.isActive(),!0!==e&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},t._kill=function(t,e){return this._enabled(!1,!1)},t.kill=function(t,e){return this._kill(t,e),this},t._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},t._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();-1<--e;)"{self}"===t[e]&&(i[e]=this);return i},t._callback=function(t){var e=this.vars,i=e[t],r=e[t+"Params"],s=e[t+"Scope"]||e.callbackScope||this;switch(r?r.length:0){case 0:i.call(s);break;case 1:i.call(s,r[0]);break;case 2:i.call(s,r[0],r[1]);break;default:i.apply(s,r)}},t.eventCallback=function(t,e,i,r){if("on"===(t||"").substr(0,2)){var s=this.vars;if(1===arguments.length)return s[t];null==e?delete s[t]:(s[t]=e,s[t+"Params"]=x(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,s[t+"Scope"]=r),"onUpdate"===t&&(this._onUpdate=e)}return this},t.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},t.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&0<this._time&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},t.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},t.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},t.totalTime=function(t,e,i){if(g||M.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(t<0&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var r=this._totalDuration,s=this._timeline;if(r<t&&!i&&(t=r),this._startTime=(this._paused?this._pauseTime:s._time)-(this._reversed?r-t:t)/this._timeScale,s._dirty||this._uncache(!1),s._timeline)for(;s._timeline;)s._timeline._time!==(s._startTime+s._totalTime)/s._timeScale&&s.totalTime(s._totalTime,!0),s=s._timeline}this._gc&&this._enabled(!0,!1),this._totalTime===t&&0!==this._duration||(X.length&&G(),this.render(t,e,!1),X.length&&G())}return this},t.progress=t.totalProgress=function(t,e){var i=this.duration();return arguments.length?this.totalTime(i*t,e):i?this._time/i:this.ratio},t.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},t.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},t.timeScale=function(t){return arguments.length?(t=t||v,this._timeline&&this._timeline.smoothChildTiming&&(i=(e=this._pauseTime)||0===e?e:this._timeline.totalTime(),this._startTime=i-(i-this._startTime)*this._timeScale/t),this._timeScale=t,this._uncache(!1)):this._timeScale;var e,i},t.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},t.paused=function(t){if(!arguments.length)return this._paused;var e,i,r=this._timeline;return t!=this._paused&&r&&(g||t||M.wake(),i=(e=r.rawTime())-this._pauseTime,!t&&r.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=this.isActive(),!t&&0!=i&&this._initted&&this.duration()&&(e=r.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,this.render(e,e===this._totalTime,!0))),this._gc&&!t&&this._enabled(!0,!1),this};var F=p("core.FWDSimpleTimeline",function(t){f.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});(t=F.prototype=new f).constructor=F,t.kill()._gc=!1,t._first=t._last=t._recent=null,t._sortChildren=!1,t.add=t.insert=function(t,e,i,r){var s,n;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),s=this._last,this._sortChildren)for(n=t._startTime;s&&s._startTime>n;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=s,this._recent=t,this._timeline&&this._uncache(!0),this},t._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},t.render=function(t,e,i){var r,s=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;s;)r=s._next,(s._active||t>=s._startTime&&!s._paused)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=r},t.rawTime=function(){return g||M.wake(),this._totalTime};var D=p("FWDTweenLite",function(t,e,i){if(f.call(this,e,i),this.render=D.prototype.render,null==t)throw"Cannot tween a null target.";this.target=t="string"==typeof t&&D.selector(t)||t;var r,s,n,a=t.jquery||t.length&&t!==_&&t[0]&&(t[0]===_||t[0].nodeType&&t[0].style&&!t.nodeType),o=this.vars.overwrite;if(this._overwrite=o=null==o?Z[D.defaultOverwrite]:"number"==typeof o?o>>0:Z[o],(a||t instanceof Array||t.push&&x(t))&&"number"!=typeof t[0])for(this._targets=n=l(t),this._propLookup=[],this._siblings=[],r=0;r<n.length;r++)(s=n[r])?"string"!=typeof s?s.length&&s!==_&&s[0]&&(s[0]===_||s[0].nodeType&&s[0].style&&!s.nodeType)?(n.splice(r--,1),this._targets=n=n.concat(l(s))):(this._siblings[r]=H(s,this,!1),1===o&&1<this._siblings[r].length&&J(s,this,null,1,this._siblings[r])):"string"==typeof(s=n[r--]=D.selector(s))&&n.splice(r+1,1):n.splice(r--,1);else this._propLookup={},this._siblings=H(t,this,!1),1===o&&1<this._siblings.length&&J(t,this,null,1,this._siblings);(this.vars.immediateRender||0===e&&0===this._delay&&!1!==this.vars.immediateRender)&&(this._time=-v,this.render(Math.min(0,-this._delay)))},!0),z=function(t){return t&&t.length&&t!==_&&t[0]&&(t[0]===_||t[0].nodeType&&t[0].style&&!t.nodeType)};(t=D.prototype=new f).constructor=D,t.kill()._gc=!1,t.ratio=0,t._firstPT=t._targets=t._overwrittenProps=t._startAt=null,t._notifyPluginsOfEnabled=t._lazy=!1,D.version="1.19.0",D.defaultEase=t._ease=new b(null,null,1,1),D.defaultOverwrite="auto",D.ticker=M,D.autoSleep=120,D.lagSmoothing=function(t,e){M.lagSmoothing(t,e)},D.selector=_.$||_.jQuery||function(t){var e=_.$||_.jQuery;return e?(D.selector=e)(t):"undefined"==typeof document?t:document.querySelectorAll?document.querySelectorAll(t):document.getElementById("#"===t.charAt(0)?t.substr(1):t)};var X=[],I={},N=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,Y=function(t){for(var e,i=this._firstPT;i;)e=i.blob?t?this.join(""):this.start:i.c*t+i.s,i.m?e=i.m(e,this._target||i.t):e<1e-6&&-1e-6<e&&(e=0),i.f?i.fp?i.t[i.p](i.fp,e):i.t[i.p](e):i.t[i.p]=e,i=i._next},E=function(t,e,i,r){var s,n,a,o,l,h,f,u=[t,e],p=0,_="",c=0;for(u.start=t,i&&(i(u),t=u[0],e=u[1]),u.length=0,s=t.match(N)||[],n=e.match(N)||[],r&&(r._next=null,r.blob=1,u._firstPT=u._applyPT=r),l=n.length,o=0;o<l;o++)f=n[o],_+=(h=e.substr(p,e.indexOf(f,p)-p))||!o?h:",",p+=h.length,c?c=(c+1)%5:"rgba("===h.substr(-5)&&(c=1),f===s[o]||s.length<=o?_+=f:(_&&(u.push(_),_=""),a=parseFloat(s[o]),u.push(a),u._firstPT={_next:u._firstPT,t:u,p:u.length-1,s:a,c:("="===f.charAt(1)?parseInt(f.charAt(0)+"1",10)*parseFloat(f.substr(2)):parseFloat(f)-a)||0,f:0,m:c&&c<4?Math.round:0}),p+=f.length;return(_+=e.substr(p))&&u.push(_),u.setRatio=Y,u},B=function(t,e,i,r,s,n,a,o,l){"function"==typeof r&&(r=r(l||0,t));var h,f="get"===i?t[e]:i,u=typeof t[e],p="string"==typeof r&&"="===r.charAt(1),_={t:t,p:e,s:f,f:"function"==u,pg:0,n:s||e,m:n?"function"==typeof n?n:Math.round:0,pr:0,c:p?parseInt(r.charAt(0)+"1",10)*parseFloat(r.substr(2)):parseFloat(r)-f||0};if("number"!=u&&("function"==u&&"get"===i&&(h=e.indexOf("set")||"function"!=typeof t["get"+e.substr(3)]?e:"get"+e.substr(3),_.s=f=a?t[h](a):t[h]()),"string"==typeof f&&(a||isNaN(f))?(_.fp=a,_={t:E(f,r,o||D.defaultStringFilter,_),p:"setRatio",s:0,c:1,f:2,pg:0,n:s||e,pr:0,m:0}):p||(_.s=parseFloat(f),_.c=parseFloat(r)-_.s||0)),_.c)return(_._next=this._firstPT)&&(_._next._prev=_),this._firstPT=_},W=D._internals={isArray:x,isSelector:z,lazyTweens:X,blobDif:E},L=D._plugins={},j=W.tweenLookup={},V=0,q=W.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1},Z={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,true:1,false:0},U=f._rootFramesTimeline=new F,$=f._rootTimeline=new F,Q=30,G=W.lazyRender=function(){var t,e=X.length;for(I={};-1<--e;)(t=X[e])&&!1!==t._lazy&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);X.length=0};$._startTime=M.time,U._startTime=M.frame,$._active=U._active=!0,setTimeout(G,1),f._updateRoot=D.render=function(){var t,e,i;if(X.length&&G(),$.render((M.time-$._startTime)*$._timeScale,!1,!1),U.render((M.frame-U._startTime)*U._timeScale,!1,!1),X.length&&G(),M.frame>=Q){for(i in Q=M.frame+(parseInt(D.autoSleep,10)||120),j){for(t=(e=j[i].tweens).length;-1<--t;)e[t]._gc&&e.splice(t,1);0===e.length&&delete j[i]}if((!(i=$._first)||i._paused)&&D.autoSleep&&!U._first&&1===M._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||M.sleep()}}},M.addEventListener("tick",f._updateRoot);var H=function(t,e,i){var r,s,n=t._fwdTweenID;if(j[n||(t._fwdTweenID=n="t"+V++)]||(j[n]={target:t,tweens:[]}),e&&((r=j[n].tweens)[s=r.length]=e,i))for(;-1<--s;)r[s]===e&&r.splice(s,1);return j[n].tweens},K=function(t,e,i,r){var s,n,a=t.vars.onOverwrite;return a&&(s=a(t,e,i,r)),(a=D.onOverwrite)&&(n=a(t,e,i,r)),!1!==s&&!1!==n},J=function(t,e,i,r,s){var n,a,o;if(1===r||4<=r){for(o=s.length,_=0;_<o;_++)if((a=s[_])!==e)a._gc||a._kill(null,t,e)&&(n=!0);else if(5===r)break;return n}for(var l,h=e._startTime+v,f=[],u=0,p=0===e._duration,_=s.length;-1<--_;)(a=s[_])===e||a._gc||a._paused||(a._timeline!==e._timeline?(l=l||tt(e,0,p),0===tt(a,l,p)&&(f[u++]=a)):a._startTime<=h&&a._startTime+a.totalDuration()/a._timeScale>h&&((p||!a._initted)&&h-a._startTime<=2e-10||(f[u++]=a)));for(_=u;-1<--_;)if(a=f[_],2===r&&a._kill(i,t,e)&&(n=!0),2!==r||!a._firstPT&&a._initted){if(2!==r&&!K(a,e))continue;a._enabled(!1,!1)&&(n=!0)}return n},tt=function(t,e,i){for(var r=t._timeline,s=r._timeScale,n=t._startTime;r._timeline;){if(n+=r._startTime,s*=r._timeScale,r._paused)return-100;r=r._timeline}return e<(n/=s)?n-e:i&&n===e||!t._initted&&n-e<2*v?v:(n+=t.totalDuration()/t._timeScale/s)>e+v?0:n-e-v};t._init=function(){var t,e,i,r,s,n,a=this.vars,o=this._overwrittenProps,l=this._duration,h=!!a.immediateRender,f=a.ease;if(a.startAt){for(r in this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),s={},a.startAt)s[r]=a.startAt[r];if(s.overwrite=!1,s.immediateRender=!0,s.lazy=h&&!1!==a.lazy,s.startAt=s.delay=null,this._startAt=D.to(this.target,0,s),h)if(0<this._time)this._startAt=null;else if(0!==l)return}else if(a.runBackwards&&0!==l)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{for(r in 0!==this._time&&(h=!1),i={},a)q[r]&&"autoCSS"!==r||(i[r]=a[r]);if(i.overwrite=0,i.data="isFromStart",i.lazy=h&&!1!==a.lazy,i.immediateRender=h,this._startAt=D.to(this.target,0,i),h){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=f=f?f instanceof b?f:"function"==typeof f?new b(f,a.easeParams):P[f]||D.defaultEase:D.defaultEase,a.easeParams instanceof Array&&f.config&&(this._ease=f.config.apply(f,a.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(n=this._targets.length,t=0;t<n;t++)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],o?o[t]:null,t)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,o,0);if(e&&D._onPluginEvent("_onInitAllProps",this),o&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),a.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=a.onUpdate,this._initted=!0},t._initProps=function(t,e,i,r,s){var n,a,o,l,h,f;if(null==t)return!1;for(n in I[t._fwdTweenID]&&G(),this.vars.css||t.style&&t!==_&&t.nodeType&&L.css&&!1!==this.vars.autoCSS&&function(t,e){var i,r={};for(i in t)q[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!L[i]||L[i]&&L[i]._autoCSS)||(r[i]=t[i],delete t[i]);t.css=r}(this.vars,t),this.vars)if(f=this.vars[n],q[n])f&&(f instanceof Array||f.push&&x(f))&&-1!==f.join("").indexOf("{self}")&&(this.vars[n]=f=this._swapSelfInParams(f,this));else if(L[n]&&(l=new L[n])._onInitTween(t,this.vars[n],this,s)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:1,n:n,pg:1,pr:l._priority,m:0},a=l._overwriteProps.length;-1<--a;)e[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0),h._next&&(h._next._prev=h)}else e[n]=B.call(this,t,n,"get",f,n,0,null,this.vars.stringFilter,s);return r&&this._kill(r,t)?this._initProps(t,e,i,r,s):1<this._overwrite&&this._firstPT&&1<i.length&&J(t,this,e,this._overwrite,i)?(this._kill(e,t),this._initProps(t,e,i,r,s)):(this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration)&&(I[t._fwdTweenID]=!0),o)},t.render=function(t,e,i){var r,s,n,a,o,l,h,f=this._time,u=this._duration,p=this._rawPrevTime;if(u-1e-7<=t?(this._totalTime=this._time=u,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(r=!0,s="onComplete",i=i||this._timeline.autoRemoveChildren),0===u&&(!this._initted&&this.vars.lazy&&!i||(this._startTime===this._timeline._duration&&(t=0),(p<0||t<=0&&-1e-7<=t||p===v&&"isPause"!==this.data)&&p!==t&&(i=!0,v<p&&(s="onReverseComplete")),this._rawPrevTime=a=!e||t||p===t?t:v))):t<1e-7?(this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==f||0===u&&0<p)&&(s="onReverseComplete",r=this._reversed),t<0&&(this._active=!1,0===u&&(!this._initted&&this.vars.lazy&&!i||(0<=p&&(p!==v||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||p===t?t:v))),this._initted||(i=!0)):(this._totalTime=this._time=t,this._easeType?(o=t/u,(1===(l=this._easeType)||3===l&&.5<=o)&&(o=1-o),3===l&&(o*=2),1===(h=this._easePower)?o*=o:2===h?o*=o*o:3===h?o*=o*o*o:4===h&&(o*=o*o*o*o),this.ratio=1===l?1-o:2===l?o:t/u<.5?o/2:1-o/2):this.ratio=this._ease.getRatio(t/u)),this._time!==f||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=f,this._rawPrevTime=p,X.push(this),void(this._lazy=[t,e]);this._time&&!r?this.ratio=this._ease.getRatio(this._time/u):r&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(!1!==this._lazy&&(this._lazy=!1),this._active||!this._paused&&this._time!==f&&0<=t&&(this._active=!0),0===f&&(this._startAt&&(0<=t?this._startAt.render(t,e,i):s=s||"_dummyGS"),this.vars.onStart&&(0===this._time&&0!==u||e||this._callback("onStart"))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(t<0&&this._startAt&&-1e-4!==t&&this._startAt.render(t,e,i),e||(this._time!==f||r||i)&&this._callback("onUpdate")),s&&(this._gc&&!i||(t<0&&this._startAt&&!this._onUpdate&&-1e-4!==t&&this._startAt.render(t,e,i),r&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[s]&&this._callback(s),0===u&&this._rawPrevTime===v&&a!==v&&(this._rawPrevTime=0)))}},t._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var r,s,n,a,o,l,h,f,u,p=i&&this._time&&i._startTime===this._startTime&&this._timeline===i._timeline;if((x(e)||z(e))&&"number"!=typeof e[0])for(r=e.length;-1<--r;)this._kill(t,e[r],i)&&(l=!0);else{if(this._targets){for(r=this._targets.length;-1<--r;)if(e===this._targets[r]){o=this._propLookup[r]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[r]=t?this._overwrittenProps[r]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(h=t||o,f=t!==s&&"all"!==s&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(D.onOverwrite||this.vars.onOverwrite)){for(n in h)o[n]&&(u=u||[]).push(n);if((u||!t)&&!K(this,i,e,u))return!1}for(n in h)(a=o[n])&&(p&&(a.f?a.t[a.p](a.s):a.t[a.p]=a.s,l=!0),a.pg&&a.t._kill(h)&&(l=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),f&&(s[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return l},t.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],f.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-v,this.render(Math.min(0,-this._delay))),this},t._enabled=function(t,e){if(g||M.wake(),t&&this._gc){var i,r=this._targets;if(r)for(i=r.length;-1<--i;)this._siblings[i]=H(r[i],this,!0);else this._siblings=H(this.target,this,!0)}return f.prototype._enabled.call(this,t,e),!(!this._notifyPluginsOfEnabled||!this._firstPT)&&D._onPluginEvent(t?"_onEnable":"_onDisable",this)},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,r){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,new D(t,e,r)},D.delayedCall=function(t,e,i,r,s){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:r,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:s,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];var i,r,s,n;if(t="string"==typeof t&&D.selector(t)||t,(x(t)||z(t))&&"number"!=typeof t[0]){for(i=t.length,r=[];-1<--i;)r=r.concat(D.getTweensOf(t[i],e));for(i=r.length;-1<--i;)for(n=r[i],s=i;-1<--s;)n===r[s]&&r.splice(i,1)}else for(i=(r=H(t).concat()).length;-1<--i;)(r[i]._gc||e&&!r[i].isActive())&&r.splice(i,1);return r},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var r=D.getTweensOf(t,e),s=r.length;-1<--s;)r[s]._kill(i,t)};var et=p("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=et.prototype},!0);if(t=et.prototype,et.version="1.19.0",et.API=2,t._firstPT=null,t._addTween=B,t.setRatio=Y,t._kill=function(t){var e,i=this._overwriteProps,r=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;-1<--e;)null!=t[i[e]]&&i.splice(e,1);for(;r;)null!=t[r.n]&&(r._next&&(r._next._prev=r._prev),r._prev?(r._prev._next=r._next,r._prev=null):this._firstPT===r&&(this._firstPT=r._next)),r=r._next;return!1},t._mod=t._roundProps=function(t){for(var e,i=this._firstPT;i;)(e=t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&"function"==typeof e&&(2===i.f?i.t._applyPT.m=e:i.m=e),i=i._next},D._onPluginEvent=function(t,e){var i,r,s,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,r=s;r&&r.pr>o.pr;)r=r._next;(o._prev=r?r._prev:n)?o._prev._next=o:s=o,(o._next=r)?r._prev=o:n=o,o=a}o=e._firstPT=s}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},et.activate=function(t){for(var e=t.length;-1<--e;)t[e].API===et.API&&(L[(new t[e])._propName]=t[e]);return!0},s.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,r=t.priority||0,s=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},a=p("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){et.call(this,i,r),this._overwriteProps=s||[]},!0===t.fwd_global),o=a.prototype=new et(i);for(e in(o.constructor=a).API=t.API,n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,et.activate([a]),a},o=_._fwd_fwdQueue){for(h=0;h<o.length;h++)o[h]();for(t in w)w[t].func||_.console.log("FWDAnimation encountered missing dependency: "+t)}g=!1}}("undefined"!=typeof fwd_module&&fwd_module.exports&&"undefined"!=typeof fwd_global?fwd_global:this||window,"FWDAnimation"));(function (window){
	
	var FWDRL = function(props){

		'use strict';
		
		var _s = this;
		FWDRL.inst.push(_s);

		/**
	 	 * Initialize RL.
	 	 */
		_s.init = function(){
			
			FWDRLUtils.checkIfHasTransforms();
			FWDTweenLite.ticker.useRAF(true);
			_s.props = props;
			 
			if(!_s.props){
				alert("FWDRL settings properties object is not defined!");
				return;
			}
		
			_s.instName = _s.props.instanceName;
			if(!_s.instName){
				alert("FWDRL instance name is required in the settings parameters!");
				return;
			}
			window[_s.instName] = _s;
			_s.fr = true;
		
			_s.stageContainer = document.getElementsByTagName("body")[0];
			_s._dc = document.documentElement;

			if(!_s.stageContainer) _s.stageContainer = _s._dc;
			_s.listeners = {events_ar:[]};

			FWDRL.cls = _s.cls = _s.props.cls || 'fwdrl';
			_s.fontIcon = _s.props.fontIcon || 'fwdrl-icon';

			_s.mediaSelector = _s.props.mediaSelector || '.fwdrel';

			_s.rightClickContextMenu = _s.props.rightClickContextMenu || "developer";
			_s.DRightClickContextMenu = _s.rightClickContextMenu;
		
			_s.buttonsAlignment = _s.props.buttonsAlignment || "in";
			_s.DFBtnsAlignment = _s.buttonsAlignment;
			
			_s.useDrag = _s.props.useDrag;
			if(_s.useDrag === undefined) _s.useDrag = true;
			_s.DUseDrag = _s.useDrag;

			_s.mediaLazyLoading = _s.props.mediaLazyLoading;
			if(_s.mediaLazyLoading === undefined) _s.mediaLazyLoading = true;
			_s.DMediaLazyLoading = _s.mediaLazyLoading;

			_s.captionPosition = _s.props.captionPosition || "bottomout";
			_s.captionPosition = _s.captionPosition.toLowerCase();
			_s.DCaptionPosition = _s.captionPosition;
			
			_s.captionAnimationType = _s.props.captionAnimationType || "motion";
			_s.DFDescriptionAnimationType = _s.captionAnimationType;

			_s.backgroundColor = _s.props.backgroundColor || "rgba(0,0,0,.99)";
			_s.DFBackgroundColor = _s.backgroundColor;

			_s.thumbnailsBorderColor = _s.props.thumbnailsBorderColor || "#FFFFFF";
			_s.DThumbnailsBorderColor = _s.thumbnailsBorderColor;

			_s.thumbnailsOverlayColor = _s.props.thumbnailsOverlayColor || 'rgba(0,0,0,.6)';
			_s.DFThumbnailsOverlayColor = _s.thumbnailsOverlayColor;
			
			if(_s.buttonsAlignment == FWDRL.BUTTONS_IN){
				_s.buttonsOffsetIn = _s.props.buttonsOffsetIn || 10;
			}else{
				_s.buttonsOffsetIn = _s.props.buttonsOffsetOut || 10;
			}
			_s.DFBtnsOffsetIn = _s.buttonsOffsetIn;
			
			if(_s.buttonsAlignment == FWDRL.BUTTONS_IN){
				_s.buttonsOffsetOut = _s.props.buttonsOffsetOut || 10;
			}else{
				_s.buttonsOffsetOut = _s.props.buttonsOffsetIn || 10;
			}
			_s.DFBtnsOffsetOut = _s.buttonsOffsetOut;
			
			_s.buttonsHideDelay = _s.props.buttonsHideDelay || 5;
			_s.buttonsHideDelay *= 1000;
			_s.DButtonsHideDelay = _s.buttonsHideDelay;

			_s.maxZoom = _s.props.maxZoom || 1; 
			_s.DMaxZoom = _s.maxZoom;

			_s.spaceBetweenBtns = _s.props.spaceBetweenBtns || 8; 
			_s.DFSpaceBetweenBtns = _s.spaceBetweenBtns;

			_s.defaultItemWidth = _s.props.defaultItemWidth || 1527;
			_s.DFDefaultItemW = _s.defaultItemWidth;

			_s.defaultItemHeight = _s.props.defaultItemHeight || 859;
			_s.DFDefaultItemH = _s.defaultItemHeight;

			_s.itemBorderColor = _s.props.itemBorderColor || "#FFFFFF";
			_s.DFitemBorderColor = _s.itemBorderColor;

			_s.itemBorderSize = _s.props.itemBorderSize || 0; 
			_s.DFItemBorderSize = _s.itemBorderSize;

			_s.itemBkColor = _s.props.itemBackgroundColor || "#212121";
			_s.DItemBkColor = _s.itemBkColor;
			
			_s.thumbnailsOffsetBottom = _s.props.thumbnailsOffsetBottom;
			if(_s.thumbnailsOffsetBottom == undefined) _s.thumbnailsOffsetBottom = 10;
			_s.DFThumbnailsOffsetBottom = _s.thumbnailsOffsetBottom;

			_s.rotationY360DegreeVideo = _s.props.rotationY360DegreeVideo;
			if(_s.rotationY360DegreeVideo == undefined) _s.rotationY360DegreeVideo = -90;
			_s.DFRotationY360DegreeVideo = _s.rotationY360DegreeVideo;

			_s.thumbnailsBorderSize = _s.props.thumbnailsBorderSize;
			if(_s.thumbnailsBorderSize ==  undefined) _s.thumbnailsBorderSize = 2;
			_s.DFThumbnailsBorderSize = _s.thumbnailsBorderSize;

			_s.show360DegreeVideoVrButton = _s.props.show360DegreeVideoVrButton;
			if(_s.show360DegreeVideoVrButton ==  undefined) _s.show360DegreeVideoVrButton = false;
			_s.DFShow360DegreeVideoVrButton = _s.show360DegreeVideoVrButton;

			_s.thumbnailH = _s.props.thumbnailsHeight || 80;
			_s.DFThumbnailH = _s.thumbnailH;
		
			_s.spaceBetweenThumbnails = _s.props.spaceBetweenThumbnails;
			if(_s.spaceBetweenThumbnails == undefined) _s.spaceBetweenThumbnails = 5;
			_s.DFSpaceBetweenThumbnails = _s.spaceBetweenThumbnails;
			
			_s.itemOffsetHeight = _s.props.itemOffsetHeight || 37;
			_s.DItemOffsetHeight = _s.itemOffsetHeight;

			_s.itemOffsetHeightButtonsTop = _s.props.itemOffsetHeightButtonsTop || 47;
			_s.DItemOffsetHeightButtonsTop = _s.itemOffsetHeightButtonsTop;

			_s.spaceBetweenThumbnailsAndItem = _s.props.spaceBetweenThumbnailsAndItem;
			if(_s.spaceBetweenThumbnailsAndItem == undefined) _s.spaceBetweenThumbnailsAndItem = 10;
			_s.DFSpaceBetweenThumbnailsAndItem = _s.spaceBetweenThumbnailsAndItem;	

			_s.slideShowDelay = _s.props.slideShowDelay * 1000;
			if(_s.props.slideShowDelay === undefined) _s.slideShowDelay = 6000;
			_s.DFSlideShowDelay = _s.slideShowDelay;

			_s.mId = -1;
			_s.prevId = -2;
			_s.friction = .9;
			_s.mouseY = 0;
			_s.vx = _s.vy = _s.vx2 = _s.vy2 = _s.mouseX = _s.dif = _s.lastPresedX = _s.lastPresedY = _s.gmx = _s.gmy = _s.finalY = _s.finalX =  _s.desc2H = _s.finalW = _s.finalH = _s.stageW = _s.stageH = _s.totalItems =  _s.originalW = _s.originalH = _s.buttonW = _s.buttonH = 0;

			_s.isMbl = FWDRLUtils.isMbl;

			_s.useVideo = _s.props.useVideo;
			if(_s.fr) _s.useVideo = false;
			if(_s.useVideo === undefined) _s.useVideo = true;

			_s.fillEntireScreenWithPoster = _s.props.fillEntireScreenWithPoster;
			if(_s.fillEntireScreenWithPoster === undefined) _s.fillEntireScreenWithPoster = true;

			_s.videoAutoPlayText = _s.props.videoAutoPlayText || 'Click to unmute';

			_s.showLogo = _s.props.showLogo;
			if(_s.showLogo === undefined) _s.showLogo = true;

			_s.logoPath = _s.props.logoPath || 'content/evp/skin/logo.png';

			_s.logoLink = _s.props.logoLink || '';

			_s.showControllerWhenVideoIsStopped = _s.props.showControllerWhenVideoIsStopped;
			_s.DhowControllerWhenVideoIsStopped = _s.showControllerWhenVideoIsStopped;

			_s.showDefaultControllerForVimeo = _s.props.showDefaultControllerForVimeo;
			if(_s.showDefaultControllerForVimeo == undefined) _s.showDefaultControllerForVimeo = true;

			_s.showScrubberWhenControllerIsHidden = _s.props.showScrubberWhenControllerIsHidden;
			if(_s.showScrubberWhenControllerIsHidden == undefined) _s.showScrubberWhenControllerIsHidden = true;

			_s.showVolumeButton = _s.props.showVolumeButton;
			if(_s.showVolumeButton == undefined) _s.showVolumeButton = true;

			_s.showTime = _s.props.showTime;
			if(_s.showTime == undefined) _s.showTime = true;

			_s.showRewindButton = _s.props.showRewindButton;
			if(_s.showRewindButton == undefined) _s.showRewindButton = true;

			_s.showQualityButton = _s.props.showQualityButton;
			if(_s.showQualityButton == undefined) _s.showQualityButton = true;

			_s.showAudioTracksButton = _s.props.showAudioTracksButton;
			if(_s.showAudioTracksButton == undefined) _s.showAudioTracksButton = true;

			_s.showChromecastButton = _s.props.showChromecastButton;
			if(_s.showChromecastButton == undefined) _s.showChromecastButton = true;

			_s.showPlaybackRateButton = _s.props.showPlaybackRateButton;
			if(_s.showPlaybackRateButton == undefined) _s.showPlaybackRateButton = true;


			_s.showFullScreenButton = _s.props.showFullScreenButton;
			if(_s.showFullScreenButton == undefined) _s.showFullScreenButton = true;

			_s.showScrubberToolTipLabel = _s.props.showScrubberToolTipLabel;
			if(_s.showScrubberToolTipLabel == undefined) _s.showScrubberToolTipLabel = true;

			_s.timeColor = _s.props.timeColor || '#B9B9B9';

			_s.youtubeQualityButtonNormalColor = _s.props.youtubeQualityButtonNormalColor || '#B9B9B9';
			_s.youtubeQualityButtonSelectedColor = _s.props.youtubeQualityButtonSelectedColor || '#FFFFFF';
			_s.scrubbersToolTipLabelBackgroundColor = _s.props.scrubbersToolTipLabelBackgroundColor || '#FFFFFF';
			_s.scrubbersToolTipLabelFontColor = _s.props.scrubbersToolTipLabelFontColor || '#5a5a5a';

			_s.audioVisualizerLinesColor = _s.props.audioVisualizerLinesColor || '#570AB8';
			_s.audioVisualizerCircleColor = _s.props.audioVisualizerCircleColor || '#b9b9b9';

			_s.thumbnailsPreviewWidth = _s.props.thumbnailsPreviewWidth || 196;
			
			_s.thumbnailsPreviewBackgroundColor = _s.props.thumbnailsPreviewBackgroundColor || '#2e2e2e';
			_s.thumbnailsPreviewBorderColor = _s.props.thumbnailsPreviewBorderColor || '#414141';
			_s.thumbnailsPreviewLabelBackgroundColor = _s.props.thumbnailsPreviewLabelBackgroundColor || '#414141';
			_s.thumbnailsPreviewLabelFontColor = _s.props.thumbnailsPreviewLabelFontColor || '#CCCCCC';

			_s.skipToVideoText = _s.props.skipToVideoText || 'You can skip to video in: ';
			_s.skipToVideoButtonText = _s.props.skipToVideoButtonText || 'Skip Ad'
			
			_s.useDeepLinking = _s.props.useDeepLinking;
			if(_s.useDeepLinking === undefined) _s.useDeepLinking = true;
			_s.DUseDeepLinking = _s.useDeepLinking;

			_s.useVectorIcons = _s.props.useVectorIcons;

			_s.showCloseButton = _s.props.showCloseButton; 
			if(_s.showCloseButton === undefined) _s.showCloseButton = true;
			_s.DFShowCloseButton = _s.showCloseButton;

			_s.showFullscreenButton = _s.props.showFullscreenButton;
			if(_s.showFullscreenButton === undefined) _s.showFullscreenButton = true;
			_s.DShowFullscreenButton = _s.showFullscreenButton;
			
			_s.showZoomButton = _s.props.showZoomButton; 
			if(_s.showZoomButton === undefined) _s.showZoomButton = true;
			_s.DShowZoomButton = _s.showZoomButton;

			_s.showNextAndPrevBtns = _s.props.showNextAndPrevBtns; 
			if(_s.showNextAndPrevBtns === undefined) _s.showNextAndPrevBtns = true;
			_s.DShowNextAndPrevBtns = _s.showNextAndPrevBtns;
			_s.DFSefaultShowNextAndPrevBtns = _s.defaultShowNextAndPrevBtns;
			
			_s.hideButtonsOnDrag = _s.props.hideButtonsOnDrag; 
			if(_s.hideButtonsOnDrag === undefined) _s.hideButtonsOnDrag = true;
			_s.DHideButtonsOnDrag = _s.hideButtonsOnDrag;
		
			_s.caption = _s.props.caption;
			if(_s.caption ==  undefined) _s.caption = true;
			_s.DCaption = _s.caption;

			_s.showCaptionOnSmallScreens = _s.props.showCaptionOnSmallScreens;
			_s.DShowCaptionOnSmallScreens = _s.showCaptionOnSmallScreens;

			_s.animateCaption = _s.props.animateCaption;
			_s.DAnimateCaption = _s.animateCaption;

			_s.useKeyboard = _s.props.useKeyboard;
			if(_s.useKeyboard === undefined) _s.useKeyboard = true;
			_s.DUseKeyboard = _s.useKeyboard;

			_s.useDoubleClick = _s.props.useDoubleClick;
			if(_s.useDoubleClick === undefined) _s.useDoubleClick = true;
			_s.DUseDoubleClick = _s.useDoubleClick;

			_s.preloaderBkColor = _s.props.preloaderBkColor || '#2e2e2e'
			_s.DPreloaderBkColor = _s.preloaderBkColor;

			_s.preloaderFillColor = _s.props.preloaderFillColor ||  '#FFFFFF';
			_s.DPreloaderFillColor = _s.preloaderFillColor;

			_s.slideShowBkColor = _s.props.slideShowBkColor || '#2e2e2e'
			_s.DSlideShowBkColor = _s.slideShowBkColor;

			_s.slideShowFillColor = _s.props.slideShowFillColor || '#FFFFFF'
			_s.DSlideShowFillColor = _s.slideShowFillColor;

			_s.slideShowAutoPlay = _s.props.slideShowAutoPlay;
			_s.DFSlideShowAutoPlay = _s.slideShowAutoPlay;

			_s.slideShowAutoStop = _s.props.slideShowAutoStop;
			_s.DSlideShowAutoStop = _s.slideShowAutoStop;

			_s.DShowThumbnails = _s.props.showThumbnails;
			if(_s.DShowThumbnails === undefined) _s.DShowThumbnails = true;
			_s.DFDefaultThumbnails = _s.DShowThumbnails;

			_s.showSlideShowButton = _s.props.showSlideShowButton;
			if(_s.showSlideShowButton === undefined) _s.showSlideShowButton = true; 
			_s.DFShowSlideShowButton = _s.showSlideShowButton;

			_s.showCounter = _s.props.showCounter;
			if(_s.showCounter === undefined) _s.showCounter = true; 
			_s.DShowCounter = _s.showCounter;

			_s.showSlideShowAnimation = _s.props.showSlideShowAnimation;
			if(_s.showSlideShowAnimation === undefined) _s.showSlideShowAnimation = true; 
			_s.DShowSlideShowAnimation = _s.showSlideShowAnimation;

			_s.addSlideShowAnimation_bl = false;

			_s.useAsModal = _s.props.useAsModal;
			_s.DFUseAsModal = _s.useAsModal;

			_s.shareButtons = _s.props.shareButtons || ['facebook', 'twitter', 'linkedin', 'tumblr', 'pinterest', 'reddit', 'buffer', 'digg','blogger'];
			_s.DShareButtons = _s.shareButtons;

			_s.showShareButton = _s.shareButtons.length;
			_s.DShowShareButton = _s.showShareButton;

			_s.shareText = _s.props.shareText || 'Share on';
			_s.DShareText = _s.shareText;

			_s.sharedURL = _s.props.sharedURL || 'deeplink';
			_s.DSharedURL = _s.sharedURL;

			_s.shareBackgroundColor = _s.props.shareBackgroundColor || '#FFFFFF';
			_s.DShareBackgroundColor = _s.shareBackgroundColor

			_s.shareMainBackgroundColor = _s.props.shareMainBackgroundColor || 'rgba(0,0,0,.4)';
			_s.DShareMainBackgroundColor = _s.shareMainBackgroundColor
	
			_s.showThumbnailsIcon = _s.props.showThumbnailsIcon; 
			if(_s.showThumbnailsIcon === undefined) _s.showThumbnailsIcon = true;
			_s.DShowThumbnailsIcon = _s.showThumbnailsIcon;

			// Video/audio player.
			_s.volume = _s.props.volume;
			if(_s.volume === undefined) _s.volume = 1;
			_s.DVolume = _s.volume;

			_s.videoAutoPlay = _s.props.videoAutoPlay;
			_s.DVideoAutoPlay = _s.videoAutoPlay;

			_s.nextVideoAutoPlay = _s.props.nextVideoAutoPlay;
			_s.DNextVideoAutoPlay = _s.nextVideoAutoPlay;
	
			_s.hasPointerEvent_bl = FWDRLUtils.hasPointerEvent;
			
			_s.initiallize();
		};
		
		/**
	 	 * Initialize main elements.
	 	 */
		_s.initiallize = function(){

			_s._dc.addEventListener('touchstart', onClick, {passive: false});
			_s._dc.addEventListener('mousedown', onClick);

			function onClick(e){
				_s.clicked = true;
				_s._dc.removeEventListener('touchstart', onClick);
				_s._dc.removeEventListener('click', onClick);
			}
			
			_s.main_do = new FWDRLDO("div");
			_s.main_do.screen.setAttribute("mId", _s.instName);
			_s.main_do.screen.className = _s.cls + ' ' + _s.instName;
			
			_s.main_do.style().msTouchAction = "none";
			_s.main_do.style().webkitTapHighlightColor = "rgba(0, 0, 0, 0)";
			_s.main_do.setBackfaceVisibility();

			if(!_s.isMbl && FWDRLUtils.isChrome){
				_s.main_do.hasTransform3d_bl =  false;
				_s.main_do.hasTransform2d_bl =  false;
			}
			_s.main_do.style().width = "100%";
			_s.main_do.style().zIndex = "2147483647";
			
			_s.bk_do = new FWDRLDO("div");
			_s.bk_do.screen.className = _s.cls + '-main-background'
			_s.bk_do.style().width = "100%";
			_s.bk_do.style().height = "100%";
			_s.bk_do.setAlpha(0);

			_s.itemDragHld_do = new FWDRLDO("div");	
			_s.itemDragHld_do.setOverflow('visible');
		
			_s.itemHld_do = new FWDRLDO("div");	
			_s.itemHld_do.screen.className = _s.cls + '-item';
			
			FWDRLCaption.setPrototype();
			_s.caption_do = new FWDRLCaption(
					_s, 
					_s.captionAnimationType,
					_s.captionPosition,
					_s.itemBorderSize,
					'in');

			FWDRLCaption.setPrototype();
			_s.caption2_do = new FWDRLCaption(
					_s, 
					_s.captionAnimationType,
					_s.captionPosition,
					_s.itemBorderSize,
					'out');

		
			_s.itemBorder_do = new FWDRLDO("div");
			_s.itemBorder_do.screen.className = _s.cls + '-item-border';
			_s.itemBorder_do.style().backgroundColor = _s.itemBorderColor;
			if((!_s.isMbl && FWDRLUtils.isChrome)
				|| FWDRLUtils.isAndroid){
				_s.itemBorder_do.hasTransform3d_bl = false;
				_s.itemBorder_do.hasTransform2d_bl = false;
				_s.itemBorder_do.setBackfaceVisibility();
				
			}
			_s.itemHolder_do = new FWDRLDO("div");
			_s.itemHolder_do.setOverflow("visible");

			_s.itemBk_do = new FWDRLDO("div");
			_s.itemBk_do.screen.className = _s.cls + '-item-background';
			_s.itemBk_do.style().backgroundColor = _s.itemBkColor;

			_s.itemHld_do.addChild(_s.itemBorder_do);
			_s.itemHld_do.addChild(_s.itemBk_do);
			_s.itemHld_do.addChild(_s.itemHolder_do);
			_s.itemHld_do.addChild(_s.caption_do);
			_s.itemHld_do.addChild(_s.caption2_do);

			_s.captionDumy_do = new FWDRLDO('div');
			_s.captionDumy_do.screen.className = _s.cls + '-caption out';
			_s.captionDumy_do.setVisible(false);			
			_s.captionDumy_do.setBkColor('#FF0000')
			
			_s.main_do.addChild(_s.bk_do);
			_s.main_do.addChild(_s.itemDragHld_do);
			_s.itemDragHld_do.addChild(_s.itemHld_do);
			_s.stageContainer.appendChild(_s.main_do.screen);
			_s.main_do.addChild(_s.caption2_do);
			_s.main_do.addChild(_s.captionDumy_do);
			
			if(!FWDRLUtils.isMbl || (FWDRLUtils.isMbl && FWDRLUtils.hasPointerEvent)) _s.main_do.setSelectable(false);
			_s.setupContextMenu();
			_s.setupHider();
			_s.setupDisableClick();
			_s.setupData();
			_s.setupInfoWindow();

			_s.dumy_do = new FWDRLDO("div");
			_s.dumy_do.style().cursor = _s.grabC;
			_s.dumy_do.style().width = '100%';
			_s.dumy_do.style().height = '100%';
			_s.removeGrabHand();

			if(_s.instName == 'rl0'){
				_s.setStaticGalleries();
			}

			if(_s.useDeepLinking){
				_s.setupDL();
			}

			setTimeout(function(){
				var instName = 	FWDRLDL.getParameter("rlinst");	
				var guId = FWDRLDL.getParameter("rlguid");
				var mId = FWDRLDL.getParameter("rlmid");

				if(instName && instName != _s.instName) return;

				_s.propsObjName = FWDRLDL.getParameter("rlprops");
				if(guId && mId){
					_s.show(guId, mId, _s.propsObjName);
				}
			}, 100);
		};

		_s.setGrabHand = function(grab){
			_s.dumy_do.setVisible(true);
			if(!_s.main_do.contains(_s.dumy_do)){
				 _s.main_do.addChild(_s.dumy_do);
			}
		}

		_s.removeGrabHand = function(){
			_s.dumy_do.setVisible(false);
			if(_s.main_do.contains(_s.dumy_do)){
				_s.main_do.removeChild(_s.dumy_do);
			} 
		}

		_s.setCaptionText = function(){
			//if(!_s.hasCaption) return;
			var dl = 800;
			if(!_s.showFirstTimeDone || !_s.animateCaption) dl = 0;

			if(dl){
				setTimeout(function(){
					_s.caption_do.setText(_s.gallery_ar[_s.mId].caption || '');
					_s.caption2_do.setText(_s.gallery_ar[_s.mId].caption || '');
				}, dl);
			}else{
				_s.caption_do.setText(_s.gallery_ar[_s.mId].caption || '');
				_s.caption2_do.setText(_s.gallery_ar[_s.mId].caption || '');
			}
		}
		
		/**
	 	 * Setup info window, this window displayes the error messages.
	 	 */
		_s.setupInfoWindow = function(){
			FWDRLInfo.setPrototype();
			_s.info_do = new FWDRLInfo(_s, _s._d.wrningIconPath_str);
		};	
		
		/**
	 	 * Setup right click context menu.
	 	 */
		_s.setupContextMenu = function(){
			_s.ctxMenu_do = new FWDRLContextMenu(_s.main_do, _s.rightClickContextMenu);
		};
		
		/**
	 	 * Setup hider.
	 	 */
		_s.setupHider = function(){
			FWDRLHider.setPrototype();
			_s.hider = new FWDRLHider(_s.main_do, _s.buttonsHideDelay);
			_s.hider.addListener(FWDRLHider.SHOW, _s.hiderShowHandler);
			_s.hider.addListener(FWDRLHider.HIDE, _s.hiderHideHandler);
		};
		
		_s.hiderShowHandler = function(){
			if(_s.isMax || _s.isAnimMaxOrMin || _s.isAnim) return;
			_s.hiderHidden = false;
			_s.positionBtns(true);
			
		};
		
		_s.hiderHideHandler = function(){

			if(_s.isMax || _s.share_do.isShowed || _s.isDragging) return;
			if(!_s.isMbl){
				if(_s.shareBtnsHolder_do){
					if(FWDRLUtils.hitTest(_s.shareBtnsHolder_do.screen, _s.hider.globalX, _s.hider.globalY)){
						_s.hider.reset();
						return;
					}
				}

				if(_s.showCloseButton){
					if(FWDRLUtils.hitTest(_s.closeBtn_do.screen, _s.hider.globalX, _s.hider.globalY)){
						_s.hider.reset();
						return;
					}
				}
				
				if(_s.showNextAndPrevBtns){
					if(FWDRLUtils.hitTest(_s.nextBtn_do.screen, _s.hider.globalX, _s.hider.globalY)
					   || FWDRLUtils.hitTest(_s.prevBtn_do.screen, _s.hider.globalX, _s.hider.globalY)){
						_s.hider.reset();
						return;
					}
				}
				
				if(_s.showZoomButton){
					if(FWDRLUtils.hitTest(_s.zoomBtn_do.screen, _s.hider.globalX, _s.hider.globalY)){
						_s.hider.reset();
						return;
					}
				}
				
				if(_s.showFullscreenButton){
					if(FWDRLUtils.hitTest(_s.fsBtn_do.screen, _s.hider.globalX, _s.hider.globalY)){
						_s.hider.reset();
						return;
					}
				}
				
				if(_s.showSlideShowButton){
					if(FWDRLUtils.hitTest(_s.slideShowBtn_do.screen, _s.hider.globalX, _s.hider.globalY)){
						_s.hider.reset();
						return;
					}
				}
			
				if(_s.showShareButton){
					if(FWDRLUtils.hitTest(_s.shareBtn_do.screen, _s.hider.globalX, _s.hider.globalY)){
						_s.hider.reset();
						return;
					}
				}
			}
			_s.hiderHidden = true;
			_s.hideBtns(true);
		};
		
		/**
	 	 * Setup disable click.
	 	 */
		_s.setupDisableClick = function(){
			_s.dClick_do = new FWDRLDO("div");
			if(FWDRLUtils.isIE) _s.dClick_do.setBkColor("rgba(0,0,0,.000001");
			//_s.dClick_do.setBkColor("rgba(255,0,0,.1");
		};
		
		_s.showDisable = function(grab, grab2, grab3){
			if(_s.isClkDisabled && !grab2) return;
			_s.isClkDisabled = true;

			if(_s.isGrab2) return;
			if(grab2)_s.isGrab2 = true;

			_s.dClick_do.setWidth(_s.stageW);
			var h = _s.stageH;
			if(grab && !grab2 && _s.thumbs_do) h = _s.stageH - _s.thumbs_do.stageH;
			_s.dClick_do.setHeight(h);
			var c = _s.defaultC;
			if(grab && !grab3){
				c = _s.grabC;
			}else if(_s.useDrag){
				c = _s.handC;
			}

		    _s.dClick_do.style().cursor = c;
		    _s.main_do.addChild(_s.dClick_do);
		};
		
		_s.hideDisable = function(){
			if(!_s.isClkDisabled) return;
			_s.isClkDisabled = _s.isGrab2 = false;
			_s.dClick_do.setWidth(0);
			_s.dClick_do.setHeight(0);
		};
			
		/**
	 	 * Resize and scroll functionality.
	 	 */
		_s.startResizeHandler = function(){
			
			window.addEventListener("orientationchange", _s.orientationChange);
			window.addEventListener("resize", _s.onResizeHandler);
			window.addEventListener("scroll", _s.scrollHandler, {passive:false});
			window.addEventListener ("mousewheel", _s.mouseDummyHandler, {capture:false, passive:false});
			window.addEventListener('DOMMouseScroll', _s.mouseDummyHandler, {capture:false, passive:false});
			if(_s.isMbl) window.addEventListener("touchmove", _s.mouseDummyHandler, {capture:false, passive:false});
			
			_s.onResizeHandler();
			setTimeout(_s.scrollHandler, 200);
			setTimeout(_s.scrollHandler, 500);
		};
	
		_s.stopResizeHandler = function(){
			clearTimeout(_s.resizeHandlerId_to);		
			window.removeEventListener("orientationchange", _s.orientationChange);
			window.removeEventListener("resize", _s.onResizeHandler);
			window.removeEventListener("scroll", _s.scrollHandler);
			window.removeEventListener ("mousewheel", _s.mouseDummyHandler, {capture:false, passive:false});
			window.removeEventListener('DOMMouseScroll', _s.mouseDummyHandler, {capture:false, passive:false});
			if(_s.isMbl) window.removeEventListener("touchmove", _s.mouseDummyHandler);
		};

		_s.orientationChange = function(){
			_s.resizeHandler();
			setTimeout(function(){
				_s.resizeHandler();
			}, 300);
			setTimeout(function(){
				_s.resizeHandler();
			}, 600);
		};
		
		_s.onResizeHandler = function(e){
			_s.resizeHandler(); 
		};
		
		_s.scrollHandler = function(e){
			_s.so = FWDRLUtils.getScrollOffsets();
			if(!_s.isShowed) return;
			_s.main_do.setX(_s.so.x);
			_s.main_do.setY(_s.so.y);
			if(e && e.preventDefault) e.preventDefault();
		};
		
		_s.addPreventMouseWheel = function(){
			window.addEventListener ("mousewheel", _s.mouseDummyHandler);
			window.addEventListener('DOMMouseScroll', _s.mouseDummyHandler);
		};
		
		_s.removePreventMouseWheel = function(){
			window.removeEventListener ("mousewheel", _s.mouseDummyHandler);
			window.removeEventListener('DOMMouseScroll', _s.mouseDummyHandler);
		};
		
		_s.mouseDummyHandler = function(e){
			if(e.preventDefault){
				e.preventDefault();
			}else{
				return false;
			}
		};
		
		_s.resizeHandler = function(overwrite){
			if(!_s.isShowed && !overwrite) return;
			_s.ws = FWDRLUtils.getViewportSize();
			_s.stageW = _s.ws.w;
			_s.stageH = _s.ws.h;
			
			if(_s.isMbl){
				_s.main_do.setWidth(_s.stageW);
				_s.main_do.setHeight(_s.stageH);
			}
			
			if(_s.preloader_do) _s.positionPreloader();
			if(_s.info_do && _s.info_do.isShowed) _s.info_do.positionAndResize();
			
			_s.resizeItem(true, false, true);
			_s.resizeItem();
			_s.positionBtns();
			if(_s.isMax) _s.hideBtns(false);
		
			_s.main_do.setX(_s.so.x);
			_s.main_do.setY(_s.so.y);
			_s.main_do.setHeight(_s.stageH);
			if(_s.thumbs_do && _s.tempThumbsShowed) _s.thumbs_do.positionAndResize();
			if(_s.share_do) _s.share_do.hide();
			
			clearTimeout(_s.resizeHandlerId_to);
			_s.resizeHandlerId_to = setTimeout(_s.checkStageSizeAndResize, 50);
		};
		
		_s.checkStageSizeAndResize = function(){
			_s.ws = FWDRLUtils.getViewportSize();
			if(_s.stageW != _s.ws.w) _s.resizeHandler();
		};
	
		/**
	 	 * Setup data object.
	 	 */
		_s.setupData = function(){
			FWDRLData.setPrototype();
			_s._d = new FWDRLData(_s.props, _s.rootElement_el, _s);
			
			_s.DFVideoControllerBackgroundColor_str = _s._d.videoControllerBackgroundColor_str;
			_s.DFVideoPosterBackgroundColor_str = _s._d.videoPosterBackgroundColor_str;
			_s.DFAudioControllerBackgroundColor_str = _s._d.audioControllerBackgroundColor_str;

			_s.defaultC = 'default';
			_s.handC = 'url(' + _s._d.skin + 'hand.cur), default';
			_s.grabC = 'url(' + _s._d.skin + 'grab.cur), default';

			_s.setupPreloader();
			if(_s.isShowed){
				_s.positionPreloader();
				_s.preloader_do.show(true);
				_s.resizeHandler();
			}
	
			_s._d.addListener(FWDRLData.LOAD_ERROR, _s.dataLoadError);
			_s._d.addListener(FWDRLData.SKIN_LOAD_COMPLETE, _s.dataSkinLoadComplete);
		};
		
		_s.dataLoadError = function(e){
			if(_s.preloader_do) _s.preloader_do.hide(false);
			_s.showError(e.text);
			setTimeout(_s.resizeHandler, 200);
			_s.showError(e.text);
		};
		
		_s.dataSkinLoadComplete = function(){
			_s.dataReady();
		};

		_s.dataReady = function(){
			if(_s.useVideo && !window['FWDEVPlayer']){
				_s.loadVideoPlayer();
			}else{
				_s.setupMainStuff();
			}
		}
		
		/**
	 	 * Setup main instances like buttons, video and audio players...
	 	 */
		_s.setupMainStuff = function(){
			_s.setupCounter();
			_s.setupBtns();
			_s.setupShare();
			_s.setupTimerManager();
			_s.hideStuffForGood();
			_s.setupEVPContainer();
			clearTimeout(_s.showOrHideCompleteId_to);

			setTimeout(function(){
				_s.isReady = true;
				_s.showComplete();
			}, 50);

			// Update properties if it's showed before inst are created.
			_s.tm.delay = _s.slideShowDelay;
			_s.slp_do.animDur = _s.slideShowDelay/1000;
			_s.hider.hideDelay = _s.buttonsHideDelay;
			_s.slp_do.updateColors(_s.slideShowBkColor, _s.slideShowFillColor);
			_s.slp_do.updateColors(_s.slideShowBkColor, _s.slideShowFillColor);
		};


		/**
	 	 * Setup video player.
	 	 */
	 	_s.loadVideoPlayer = function(){
	 		if(_s.fr){
	 			var error = "Video is not supported in the free version!";
	 			_s.showError(error);
	 			return;
	 		}

	 		if(!FWDRL.hasLoadEVP && !window['FWDEVPlayer']){
		 		var script = document.createElement('script');
				script.src = _s._d.mainFolderPath + 'evp/java/FWDEVPlayer.js?t=' + Math.random() * 99999999;
				document.head.appendChild(script);
				script.onload = _s.videoLoadDone;
				script.onerror = _s.onVidLoadError;
			}

			_s.evp_it = setInterval(function(){
				if(FWDRL.hasEVP || window['FWDEVPlayer']){
					_s.setupMainStuff();
					clearInterval(_s.evp_it);
				}
			}, 5);

			FWDRL.hasLoadEVP = true;
	 	}

	 	_s.onVidLoadError = function(){
	 		_s.hideDisable();
			var error = "Error loading video player!";
	 		_s.showError(error);
	 	}

	 	_s.videoLoadDone = function(){
	 		FWDRL.hasEVP = true;	
	 	}

	 	_s.setupEVPContainer = function(){
			_s.vidHld_do = new FWDRLDO("div");
			_s.vidHld_do.screen.setAttribute('id', _s.instName + '_evp_div');
			_s.vidHld_do.screen.className = "fwdevp";
			_s.vidHld_do.setOverflow('visible');
			_s.itemHld_do.addChildAt(_s.vidHld_do, 3);
		}

		_s.updateEVP = function(){
			
			if(!_s.evpInst){
				_s.isLoading = true;
				_s.evpInst = true;
				FWDEVPUtils.hasTransform3d = FWDRLUtils.hasTransform3d;
				FWDEVPUtils.hasTransform2d = FWDRLUtils.hasTransform2d;
				
				var isPrivate = _s.password ? 'yes' : 'no';
				var spaceBetweenButtons = _s.useVectorIcons ? 6 : 12;
				var startSpaceBetweenButtons = _s.useVectorIcons ? 12 : 16;
				var pushBtns = _s.useVectorIcons ? -2 : 0;
				var timeOffsetLeftWidth = _s.useVectorIcons ? 9 : 3;
				var	timeOffsetRightWidth = _s.useVectorIcons ? 6 : 2;

				var isPrivate = _s.password ? 'yes' : 'no';
				var spaceBetweenButtons = _s.useVectorIcons ? 2 : 12;
				var startSpaceBetweenButtons = _s.useVectorIcons ? 12 : 16;
				var pushBtns = _s.useVectorIcons ? -2 : 0;
				var timeOffsetLeftWidth = _s.useVectorIcons ? 9 : 3;
				var	timeOffsetRightWidth = _s.useVectorIcons ? 6 : 2;

				var volumeScrubberOffsetRightWidth =  _s.useVectorIcons ? 4 : 0;
				
				if(window['is_ACORA']){
					startSpaceBetweenButtons = 16;
					spaceBetweenButtons = 16;
					volumeScrubberOffsetRightWidth = 2;
					pushBtns = 1;
				}

				_s.videoType = undefined;
				if(_s.is360 != undefined){
					_s.videoType = '360DegreeVideo';
				}
				
				new FWDEVPlayer({		
					// Main settings.
					isRL:true,
					instanceName:_s.instName + '_evp',
					parentId:_s.instName + '_evp_div',
					fontIcon:_s.fontIcon,
					mainFolderPath:_s._d.mainFolderPath + 'evp/',
					skinPath:'skin',
					displayType:'afterparent',
					delayPoster:true,
					playsinline:'yes',
					useVectorIcons: _s.useVectorIcons ? 'yes' : 'no',
					privateVideoPassword:_s.password,
					preloaderBackgroundColor: _s.preloaderBkColor,
					preloaderFillColor: _s.preloaderFillColor,
					startAtVideoSource:0,
					videoSource:[{source:_s.src, label:"", isPrivate:isPrivate, videoType:_s.videoType, rotationY360DegreeVideo:_s.rotationY360DegreeVideo}],
					posterPath:_s.posterSrc,
					showErrorInfo:'no',
					fillEntireScreenWithPoster: _s.fillEntireScreenWithPoster ? 'yes' : 'no',
					addKeyboardSupport:_s.useKeyboard ? 'yes' : 'no',
					autoPlay:_s.videoAutoPlay ? 'yes' : 'no',
					autoPlayText:_s.videoAutoPlayText,
					volume:_s.volume,
					posterBackgroundColor:"#000000",
					backgroundColor:'#000000',
					// Logo.
					showLogo:_s.showLogo ? 'yes' : 'no',
					logoPath:_s.logoPath,
					hideLogoWithController:'yes',
					logoPosition:'topRight',
					logoLink:_s.logoLink,
					logoMargins:5,
					// Controller.
					pushBtns:pushBtns,
					showControllerWhenVideoIsStopped:_s.showControllerWhenVideoIsStopped ? 'yes' : 'no',
					showDefaultControllerForVimeo:_s.showDefaultControllerForVimeo ? 'yes' : 'no',
					showScrubberWhenControllerIsHidden:_s.showScrubberWhenControllerIsHidden ? 'yes' : 'no',
					showVolumeButton:_s.showVolumeButton ? 'yes' : 'no',
					showVolumeScrubber:_s.showVolumeButton ? 'yes' : 'no',
					showTime:_s.showTime ? 'yes' : 'no',
					showRewindButton:_s.showRewindButton ? 'yes' : 'no',
					showShareButton:"no",
					showEmbedButton:"no",
					showAudioTracksButton:_s.showAudioTracksButton ? 'yes' : 'no',
					showQualityButton:_s.showQualityButton ? 'yes' : 'no',
					showChromecastButton:_s.showChromecastButton ? 'yes' : 'no',
					showFullScreenButton:_s.showFullScreenButton ? 'yes' : 'no',
					showMainScrubberToolTipLabel:_s.showScrubberToolTipLabel ? 'yes' : 'no',
					show360DegreeVideoVrButton:_s.show360DegreeVideoVrButton  ? 'yes' : 'no',
					controllerHeight:42,
					controllerHideDelay:_s.buttonsHideDelay/1000,
					startSpaceBetweenButtons:startSpaceBetweenButtons,
					spaceBetweenButtons:spaceBetweenButtons,
					mainScrubberOffestTop:13,
					scrubbersOffsetWidth:3,
					timeOffsetLeftWidth:timeOffsetLeftWidth,
					timeOffsetRightWidth:timeOffsetRightWidth,
					volumeScrubberWidth:80,
					volumeScrubberOffsetRightWidth:volumeScrubberOffsetRightWidth,
					timeColor:_s.timeColor,
					youtubeQualityButtonNormalColor:_s.youtubeQualityButtonNormalColor,
					youtubeQualityButtonSelectedColor:_s.youtubeQualityButtonSelectedColor,
					scrubbersToolTipLabelBackgroundColor:_s.scrubbersToolTipLabelBackgroundColor,
					scrubbersToolTipLabelFontColor:_s.scrubbersToolTipLabelFontColor,
					// Subtitles.
					showSubtitleButton:'no',
					startAtSubtitle:1,
					subtitlesSource:[{subtitlePath:_s.subtitleSrc, subtileLabel:"test"}],
					// Playback rate/speed.
					showPlaybackRateButton:_s.showPlaybackRateButton ? 'yes' : 'no',
					defaultPlaybackRate:'1', //0.25, 0.5, 1, 1.25, 1.5, 2
					// Audio visualizer
					audioVisualizerLinesColor:_s.audioVisualizerLinesColor,
					audioVisualizerCircleColor:_s.audioVisualizerCircleColor,
					// Thumbnails preview.
					thumbnailsPreview:'auto',
					thumbnailsPreviewWidth:_s.thumbnailsPreviewWidth,
					thumbnailsPreviewBackgroundColor:_s.thumbnailsPreviewBackgroundColor,
					thumbnailsPreviewBorderColor:_s.thumbnailsPreviewBorderColor,
					thumbnailsPreviewLabelBackgroundColor:_s.thumbnailsPreviewLabelBackgroundColor,
					thumbnailsPreviewLabelFontColor:_s.thumbnailsPreviewLabelFontColor,
					// Ads.
					vastSource:_s.vastSrc,
					openNewPageAtTheEndOfTheAds:'no',
					adsButtonsPosition:'right',
					skipToVideoText:_s.skipToVideoText,
					skipToVideoButtonText:_s.skipToVideoButtonText,
					adsTextNormalColor:'#B9B9B9',
					adsTextSelectedColor:'#FFFFFF',
					adsBorderNormalColor:'#2e2e2e',
					adsBorderSelectedColor:'#FFFFFF',
					// context menu
					contextMenuType:'disabled',
					// Password window.
					embedWindowCloseButtonMargins:15,
					borderColor:"#333333",
					mainLabelsColor:"#FFFFFF",
					secondaryLabelsColor:"#a1a1a1",
					shareAndEmbedTextColor:"#5a5a5a",
					inputBackgroundColor:"#000000",
					inputColor:"#FFFFFF"
				});
				
				setTimeout(function(){
					_s.evp._d.thumbnailsPreview = _s.thumbnailsPreviewSrc;
				}, 200);
				
				// Register API.
				var api_it;
				registerAPI();
				function registerAPI(){
					clearTimeout(api_it);
					_s.evp = window[_s.instName + '_evp'];
					if(_s.evp){
						_s.evp.main_do.screen.className = "fwdevp";
						_s.evp.addListener(FWDEVPlayer.VR_START, _s.evpVRStart);
						_s.evp.addListener(FWDEVPlayer.VR_STOP, _s.evpVRStop);
						_s.evp.addListener(FWDEVPlayer.READY, _s.evpReady);
						_s.evp.addListener(FWDEVPlayer.FRAMEWORK_LOAD, _s.evpFrLoad);
						_s.evp.addListener(FWDEVPlayer.FRAMEWORK_DONE, _s.evpFrDone);
						_s.evp.addListener(FWDEVPlayer.ERROR, _s.evpError);
						_s.evp.addListener(FWDEVPlayer.VOLUME_SET, _s.evpVolume);
						_s.evp.addListener(FWDEVPlayer.HIDER_SHOW, _s.evpShowCursor);
						_s.evp.addListener(FWDEVPlayer.SHOW_CURSOR, _s.evpShowCursor);
						_s.evp.addListener(FWDEVPlayer.STOP, _s.evpStop);
						_s.evp.addListener(FWDEVPlayer.PAUSE, _s.evpPause);
						_s.evp.addListener(FWDEVPlayer.PLAY, _s.evpPlay);
						_s.evp.addListener(FWDEVPlayer.PLAY_START, _s.evpPlayStart);
						_s.evp.addListener(FWDEVPlayer.PLAY_COMPLETE, _s.evpPlayComplete);
						_s.evp.addListener(FWDEVPlayer.UPDATE, _s.evpUpdate);
						_s.evp.addListener(FWDEVPlayer.GO_FULLSCREEN, _s.evpFS);
						_s.evp.addListener(FWDEVPlayer.GO_NORMALSCREEN, _s.evpNS);
					}else{
						api_it = clearTimeout(api_it, 50);
					}
				};

			}else if(_s.evp){

				_s.videoType = '';
				
				if(_s.is360 != undefined){
					_s.videoType = '360DegreeVideo';
				}
				
				_s.evp._d.show360DegreeVideoVrButton_bl = _s.show360DegreeVideoVrButton;

				_s.evp.controller_do.hide(false, true);
				_s.evp._d.showControllerWhenVideoIsStopped_bl = _s.showControllerWhenVideoIsStopped;
				_s.evp.controller_do.showControllerWhenVideoIsStopped_bl = _s.showControllerWhenVideoIsStopped;
				
				_s.evp.prevVideoSource_str = '';
				if(_s.useKeyboard){
					_s.evp.addKeyboardSupport();
				}else{
					_s.evp.removeKeyboardSupport();
				}
				
				_s.evp._d.autoPlay_bl = _s.videoAutoPlay || _s.nextVideoAutoPlay;
				if(_s.clicked && !_s.nextVideoAutoPlay){
					_s.evp._d.autoPlay_bl = false;
				}

				if(!_s.showVideoFirstTime && _s.videoAutoPlay){
					_s.evp._d.autoPlay_bl = true;
					_s.showVideoFirstTime = false;
				}
				
				_s.evp.preloader_do.updateColors(_s.preloaderBkColor, _s.preloaderFillColor);
				_s.evp._d.subtitles_ar[0]["source"] = _s.subtitleSrc;
				_s.evp._d.thumbnailsPreview = _s.thumbnailsPreviewSrc || undefined;
				_s.evp.setVolume(_s.volume);
			
				_s.evp.setPosterSource(_s.posterSrc, true);
			
				// Set source.
				_s.evp._d.privateVideoPassword_str = _s.password;
				_s.evp.setVideoSource(_s.src, '', _s.videoType, false, _s.vastSrc, Boolean(_s.password), _s.rotationY360DegreeVideo);
			
  				if(_s.nextVideoAutoPlay){
  					 _s.playAudio();
  					 if(_s.type != FWDRL.AUDIO){
  					 	_s.tm.pause();
  					 	_s.videoStarted = true;
  					 }
  				}

  				// Resize to make sure it is on board.
  				_s.evp.resizeHandler();
  				
			}

		};

		_s.evpVRStart = function(){
			_s.main_do.style().zIndex = "1";
		}

		_s.evpVRStop = function(){
			_s.main_do.style().zIndex = "2147483647";
		}

		_s.evpPlayStart = function(){
			_s.tm.pause();
			_s.videoStarted = true;
		}

		_s.playAudio = function(){
			if(_s.evp && _s.type == FWDRL.AUDIO && _s.clicked){
				if(FWDRLUtils.isIOS && !_s.audioPlayed) return;
				_s.tm.pause();
  				_s.evp.play();
  				_s.videoStarted = true;
  			}
		}

		_s.evpReady = function(){
			_s.isLoading = false;
			if(_s.videoAutoPlay){
				_s.playAudio();
			}
		}

		_s.evpFrLoad = function(){
			_s.isLoading = true;
		}

		_s.evpFrDone = function(){
			_s.isLoading = false;
		}

		_s.evpError = function(e){
			_s.isLoading = false;
			_s.showError(e.error);
		}
		
		_s.evpVolume = function(e){
			if(!_s.isAnim && !_s.evp._d.autoPlay_bl){
				_s.volume = e.volume;
				if(_s.type == FWDRL.VIMEO){
					//_s.vimeoPlayed = true;
				}else if(_s.type == FWDRL.YOUTUBE){
					_s.youtubePlayed = true;
				}else if(_s.type == FWDRL.VIDEO){
					_s.videoPlayed = true;
				}else if(_s.type == FWDRL.AUDIO){
					_s.audioPlayed = true;
				}
			}
		}
		
		_s.evpShowCursor = function(){
			_s.updateEVPCursor();
		}

		_s.evpPause = function(){
			_s.evpNS(0,1);
		}

		_s.evpPlay = function(){
			_s.caption_do.hide(true);
			_s.updateEVPCursor();
			
			if(_s.clicked){
				if((FWDRLUtils.isMAC && (_s.type == FWDRL.VIDEO && !_s.videoPlayed))){
				   // do not change volume, MAC dose not allow it unless the media has played once / THANK YOU APPLE!!!
				   _s.evp.setupAPT();
				}else if(FWDRLUtils.isIOS
				   && (_s.type == FWDRL.VIDEO && !_s.videoPlayed 
				   	|| _s.type == FWDRL.VIMEO && !_s.vimeoPlayed
				   	|| _s.type == FWDRL.YOUTUBE && !_s.youtubePlayed)
				   ){
				   	// do not change volume, IOS dose not allow it unless the media has played once / THANK YOU APPLE!!!
				   _s.evp.setupAPT();
				}else{
					setTimeout(function(){
						_s.evp.setVolume(_s.volume, true);
					}, 10);
				}
			}
			if(!FWDRLUtils.isIOS){
				_s.audioPlayed = true;
				_s.videoPlayed = true;
			}
		};

		_s.evpPlayComplete = function(){
			_s.videoStarted = false;
			_s.tm.resume();
			if(_s.nextVideoAutoPlay || !_s.tm.isStopped){
				var id = _s.mId + 1;
				if(id < 0){
					id = _s.totalItems - 1;
				}else if(id > _s.totalItems - 1){
					id = 0;
				}
				var type = _s.gallery_ar[id].type;

				if(type == FWDRL.VIDEO
				|| type == FWDRL.YOUTUBE
				|| type == FWDRL.VIMEO
				|| type == FWDRL.AUDIO){
					_s.gotoNextItem();
				}else if(!_s.tm.isStopped){
					_s.gotoNextItem();
				}
			}
		}

		_s.evpUpdate = function(e){
			if(_s.videoStarted){
				_s.slp_do.drawFill(e.percent);
			}
		}

		_s.evpStop = function(){
			_s.caption_do.show(true);
			_s.evpNS(0,1);
			_s.dispatchEvent(FWDRL.EVP_STOP, {guId:_s.guId, mId:_s.mId});
		}
		
		_s.evpFS = function(){
			_s.itemHld_do.style().zIndex = 999999999;
			_s.fsX = _s.so.x;
			_s.fsY = _s.so.y;
			_s.isEvpFS = _s.isEvpFSDL = _s.isFullScreen = _s.evp.isFullScreen_bl;
			_s.itemHld_do.style().overflow = 'visible';
			_s.setBtnsInvisible();
			_s.tm.pause();
			_s.updateEVPCursor(0, true);
			_s.resizeHandler();
			if(_s.thumbs_do) _s.thumbs_do.setVisible(false);
		};
		
		_s.evpNS = function(e, res){
			
			_s.isEvpFS = _s.evp.isFullScreen_bl;
			if(e){
				setTimeout(function(){
					_s.isEvpFSDL = _s.evp.isFullScreen_bl;
				}, 200);
			}
			_s.itemHld_do.style().overflow = "hidden";
			if(!_s.isEvpFS){
				_s.itemHld_do.style().zIndex = 'auto';
				_s.setBtnsVisible();
			} 
			_s.tm.resume();
			_s.updateEVPCursor();
			if(!res) _s.resizeOnNS();
			if(_s.thumbs_do) _s.thumbs_do.setVisible(true);
		};
		
		_s.updateEVPCursor = function(c){
			if(_s.evp){
				if((_s.useDrag && !_s.isEvpFS && !_s.evp.isFullScreen_bl)
				|| (_s.is360 != undefined && _s.videoStarted)){
					if(!c) c = _s.handC;
					if(_s.evp.dClk_do) _s.evp.dClk_do.style().cursor = c;
					if(_s.item_do) _s.item_do.style().cursor = _s.handC;
				}else{
					if(_s.evp.dClk_do) _s.evp.dClk_do.style().cursor = _s.defaultC;
					if(_s.item_do) _s.item_do.style().cursor = _s.defaultC;
				}
			}
		}

		_s.hidePassWindow = function(){
			if(_s.evp && _s.evp.passWindow_do){
				_s.evp.passWindow_do.hide(true);
			}
		}

		
		/**
	 	 * Setup slideshow timer.
	 	 */
		_s.setupTimerManager = function(){
			FWDRLTimerManager.setProtptype();
			_s.tm = new FWDRLTimerManager(_s.slideShowDelay);
			_s.tm.addListener(FWDRLTimerManager.STOP, _s.tmStopHandler);
			_s.tm.addListener(FWDRLTimerManager.START, _s.tmStartHandler);
			_s.tm.addListener(FWDRLTimerManager.PAUSE, _s.tmPauseHandler);
			_s.tm.addListener(FWDRLTimerManager.RESUME, _s.tmResumeHandler);
			_s.tm.addListener(FWDRLTimerManager.TIME, _s.tmTimeHandler);
		};
		
		_s.tmStopHandler = function(){
			_s.slideShowBtn_do.setButtonState(1);
			if(_s.addSlideShowAnimation_bl){
				_s.removeSlideShowAnimation();
				_s.positionBtns(true);
				_s.slp_do.hide2();
				_s.slp_do.stopSlideshow();
			}
			_s.addSlideShowAnimation_bl = false;
		};
		
		_s.tmStartHandler = function(){
			_s.slideShowBtn_do.setButtonState(0);
			if(!_s.addSlideShowAnimation_bl){
				_s.addSlideShowAnimation();
				_s.positionBtns(true);
				if(_s.showSlideShowAnimation){
					_s.slp_do.show2();
				}
				if(!_s.videoStarted) _s.slp_do.startSlideshow(true);
			}
			_s.addSlideShowAnimation_bl = true;
		};
		
		_s.tmPauseHandler = function(){
			if(_s.addSlideShowAnimation_bl && !_s.videoStarted){
				_s.slp_do.stopSlideshow();
			}
		};
		
		_s.tmResumeHandler = function(){
			if(_s.addSlideShowAnimation_bl && _s.showSlideShowAnimation){
				_s.slp_do.show2();
				if(!_s.videoStarted) _s.slp_do.startSlideshow();
			} 
		};
		
		_s.tmTimeHandler = function(){
			if(_s.isDragging) _s.onDragEnd();
			
			if(_s.addSlideShowAnimation_bl && !_s.videoStarted){
				_s.gotoNextItem();
				_s.slp_do.stopSlideshow();
			}
		};
	
		/**
	 	 * Setup deep linking.
	 	 */
		_s.setupDL = function(){
			FWDRLDL.onChange = _s.dlChangeHandler;
			
			_s.dlChangeHandler();
		};

		_s.setDL = function(set){
			var inst = FWDRL.inst.length > 1 ? "?rlinst=" + _s.instName + "&" : "?";
			if(_s.propsObjName){
				inst += "rlguid=" + _s.playlistDomOrObj + "&rlmid=" + _s.mId + "&rlprops=" + _s.propsObjName;
			}else{
				inst += "rlguid=" + _s.playlistDomOrObj + "&rlmid=" + _s.mId;
			}
			if(set) FWDRLDL.setValue(inst);

			return inst;
		}
		
		_s.dlChangeHandler = function(){

			//if(_s.so) window.scrollTo(_s.so.x, _s.so.y);
			var instName = FWDRLDL.getParameter("rlinst");	
			var guId = FWDRLDL.getParameter("rlguid");
			var mId = FWDRLDL.getParameter("rlmid");
			var inst;

			if(FWDRL.inst.length > 1){
				
				FWDRL.inst.forEach(function(item){
					if(instName == item.instName){
						inst = item;
					}
				});

				var cont = true;
				FWDRL.inst.forEach(function(item){
					var inst2 = item;
					if((!guId || !mId) && inst2.useDeepLinking){
						item.hide();
						cont = false;
					}
				});
				if(!cont) return;
			}

			if(!inst) inst = _s;
			
			if(!inst.isReady || inst.isAnim || inst.isAnimMaxOrMin || !inst.useDeepLinking) return;
			
			if(inst.isMax){
				_s.maxOrMin();
				return;
			}
			
			var sObjVariableName_str = FWDRLDL.getParameter("rlprops");
		
			if(!inst.isShowed){
				if(guId && mId && FWDRL.inst.length > 1 && instName == inst.instName){
					inst.show(guId, mId, inst.propsObjName);
				}else if(guId && mId && FWDRL.inst.length == 1){
					inst.show(guId, mId, inst.propsObjName);
				}
				return;
			}else{
				if(!guId || !mId){
					inst.hide();
					return;
				}
			}
			
			inst.mId = parseInt(FWDRLDL.getParameter("rlmid"));

			if(inst.mId == inst.prevId) return;

			if(inst.mId < 0){
				inst.mId = 0;
				inst.setDL(true);
				return;
			}else if(inst.mId > inst.totalItems - 1){
				inst.mId = inst.totalItems - 1;
				inst.setDL(true);
				return;
			}
			
			inst.initItem();
			inst.prevId = inst.mId;
		};
		
		/**
	 	 * Setup preloader.
	 	 */
		_s.setupPreloader = function(){
			FWDRLPreloader.setPrototype();
			_s.preloader_do = new FWDRLPreloader(_s, 10, _s.preloaderBkColor, _s.preloaderFillColor, 3, 800);
			_s.main_do.addChild(_s.preloader_do);
		};
		
		_s.positionPreloader = function(){
			if(!_s.preloader_do) return;
			_s.preloader_do.setX(parseInt((_s.stageW - _s.preloader_do.w )/2));		
			var y;
			if(_s.showFirstTimeDone){
				 y = Math.round(_s.finalY + (_s.finalH - _s.preloader_do.h)/2);
			}else{
				 y = Math.round((_s.stageH - _s.preloader_do.h)/2);
			}
			_s.preloader_do.setY(y);
		};
		
		/**
	 	 * Setup thumbnails.
	 	 */
		_s.setupThumbnailManager = function(){
			if(_s.thumbs_do) return;
			FWDRLThumbs.setPrototype();
			_s.thumbs_do = new FWDRLThumbs(_s);
			_s.thumbs_do.addListener(FWDRLThumb.CLICK, _s.thumbClickHandler);
			_s.main_do.addChild(_s.thumbs_do);
		};
	
		_s.thumbClickHandler = function(e){
			_s.gotoToItem(e.id);
		};
		
		_s.setupThumbnails = function(delay){
			setTimeout(function(){
				if(_s.thumbs_do && _s.showThumbnails) _s.thumbs_do.setupThumbnails();
			}, delay);
		};


		/**
	 	 * Setup counter.
	 	 */
	 	_s.setupCounter = function(){
	 		_s.mcnt_do = new FWDRLDO('div');
	 		_s.mcnt_do.setOverflow('visible');
	 		_s.mcnt_do.screen.className = _s.cls + '-counter';

	 		_s.cnt_do = new FWDRLDO('div');
	 		_s.cnt_do.screen.className = 'text';
	 		_s.cnt_do.setInnerHTML('1/25');

	 		_s.mcnt_do.addChild(_s.cnt_do);
	 		_s.main_do.addChild(_s.mcnt_do);
	 		_s.mcnt_do.setX( -500)
	 	}

	 	_s.setCntText = function(){
	 		_s.cnt_do.setInnerHTML((parseInt(_s.mId) + 1) + '/' + _s.totalItems);
	 	}

		
		/**
	 	 * Setup buttons.
	 	 */
		_s.setupBtns = function(){
			
			_s.buttons_ar = [];
			_s.buttonsMaxW_ar = [];
			
			FWDRLSimpleButton.setPrototype();
			if(_s.useVectorIcons){
				_s.closeBtn_do = new FWDRLSimpleButton(0, 0, 0,
								'<span class="' + _s.fontIcon + ' ' + _s.fontIcon + '-close"></span>',
								 _s.cls + '-button',
								 'selected');
			}else{
				_s.closeBtn_do = new FWDRLSimpleButton(_s._d.closeN_img, _s._d.closeSPath);
			}
			_s.closeBtn_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.closeButtonOnMouseUpHandler);
			_s.buttonsMaxW_ar.push(_s.closeBtn_do);
			_s.main_do.addChild(_s.closeBtn_do); 

			FWDRLComplexButton.setPrototype();
			if(_s.useVectorIcons){
				_s.zoomBtn_do = new FWDRLComplexButton(0,0,0,0,
						'<span class="' + _s.fontIcon + ' ' + _s.fontIcon + '-zoomin"></span>',
						'<span class="' + _s.fontIcon + ' ' + _s.fontIcon + '-zoomout"></span>',
						_s.cls + '-button',
						'selected'
					);
			}else{
				_s.zoomBtn_do = new FWDRLComplexButton(
					_s._d.maximizeN_img, 
					_s._d.maximizeSPath, 
					_s._d.minimizeN_img, 
					_s._d.minimizeSPath);
			}
			_s.zoomBtn_do.addListener(FWDRLComplexButton.MOUSE_UP, _s.zoomButtonOnMouseUpHandler);
			_s.buttonsMaxW_ar.push(_s.zoomBtn_do);
			_s.main_do.addChild(_s.zoomBtn_do); 
			
			FWDRLComplexButton.setPrototype();
			if(_s.useVectorIcons){
				_s.fsBtn_do = new FWDRLComplexButton(0,0,0,0,
						'<span class="' + _s.fontIcon + ' ' + _s.fontIcon + '-fullscreen"></span>',
						'<span class="' + _s.fontIcon + ' ' + _s.fontIcon + '-normalscreen"></span>',
						_s.cls + '-button',
						'selected'
					);
			}else{
				_s.fsBtn_do = new FWDRLComplexButton(
					_s._d.fullScreenN_img, 
					_s._d.fullScreenS, 
					_s._d.normalScreenN_img, 
					_s._d.normalScreenS);
			}
			_s.fsBtn_do.addListener(FWDRLComplexButton.MOUSE_UP, _s.fullscreenButtonMUH);
			_s.buttonsMaxW_ar.push(_s.fsBtn_do);
			_s.main_do.addChild(_s.fsBtn_do); 
			
			FWDRLComplexButton.setPrototype();
			if(_s.useVectorIcons){
				_s.slideShowBtn_do = new FWDRLComplexButton(0,0,0,0,
						'<span class="' + _s.fontIcon + ' ' + _s.fontIcon + '-play"></span>',
						'<span class="' + _s.fontIcon + ' ' + _s.fontIcon + '-pause"></span>',
						_s.cls + '-button',
						'selected'
					);
			}else{
				_s.slideShowBtn_do = new FWDRLComplexButton(
					_s._d.playN_img, 
					_s._d.playS, 
					_s._d.pauseN_img, 
					_s._d.pauseS);
			}
			_s.slideShowBtn_do.addListener(FWDRLComplexButton.MOUSE_UP, _s.slideshowButtonOnMouseUpHandler);
			_s.buttonsMaxW_ar.push(_s.slideShowBtn_do);
			_s.main_do.addChild(_s.slideShowBtn_do); 
			
			FWDRLPreloader.setPrototype();
			_s.slp_do = new FWDRLPreloader(_s, 8, _s.slideShowBkColor, _s.slideShowFillColor, 2.5, _s.slideShowDelay);
			setTimeout(function(){
				_s.slp_do.setFinalSize(_s.closeBtn_do.w, _s.closeBtn_do.h);
			}, 400);

			_s.buttonsMaxW_ar.push(_s.slp_do);
			_s.main_do.addChild(_s.slp_do); 
			
			FWDRLSimpleButton.setPrototype();
			if(_s.useVectorIcons){
				_s.shareBtn_do = new FWDRLSimpleButton(0, 0, 0,
								'<span class="' + _s.fontIcon + ' ' + _s.fontIcon + '-share"></span>',
								 _s.cls + '-button',
								 'selected');
			}else{
				_s.shareBtn_do = new FWDRLSimpleButton(
					_s._d.showShareImage_img, 
					_s._d.showShareImageSPath);
			}
			
			_s.shareBtn_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.shareButnMUH);	
			_s.buttonsMaxW_ar.push(_s.shareBtn_do);
			_s.main_do.addChild(_s.shareBtn_do);
			
			FWDRLSimpleButton.setPrototype();
			if(_s.useVectorIcons){
				_s.nextBtn_do = new FWDRLSimpleButton(0, 0, 0,
								'<span class="' + _s.fontIcon + ' ' + _s.fontIcon + '-next"></span>',
								 _s.cls + '-button',
								 'selected');
			}else{
				_s.nextBtn_do = new FWDRLSimpleButton(_s._d.nextN_img, _s._d.nextSPath);
			}
			_s.nextBtn_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.nextBtnMUH);	
			_s.buttonsMaxW_ar.push(_s.nextBtn_do);
			_s.main_do.addChild(_s.nextBtn_do);
			
			FWDRLSimpleButton.setPrototype();
			if(_s.useVectorIcons){
				_s.prevBtn_do = new FWDRLSimpleButton(0, 0, 0,
								'<span class="' + _s.fontIcon + ' ' + _s.fontIcon + '-prev"></span>',
								 _s.cls + '-button',
								 'selected');
			}else{
				_s.prevBtn_do = new FWDRLSimpleButton(_s._d.prevN_img, _s._d.prevSPath);
			}
			_s.prevBtn_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.prevBtnMUH);
			_s.buttonsMaxW_ar.push(_s.prevBtn_do);
			_s.main_do.addChild(_s.prevBtn_do); 
			
			
			_s.buttonW = _s.buttonsMaxW_ar[0].w;
			_s.buttonH = _s.buttonsMaxW_ar[0].h;
			setTimeout(function(){
				_s.buttonW = _s.buttonsMaxW_ar[0].w;
				_s.buttonH = _s.buttonsMaxW_ar[0].h;
			}, 50)

		};
		
		_s.closeButtonOnMouseUpHandler = function(){
			_s.hide();
		};
		
		_s.zoomButtonOnMouseUpHandler = function(e){
			_s.maxOrMin();
		};
		
		_s.shareButnMUH = function(){
			if(_s.isAnim || _s.isAnimMaxOrMin) return;
			_s.main_do.addChild(_s.share_do);
			_s.share_do.show();
		};
		
		_s.nextBtnMUH = function(){
			_s.gotoNextItem();
		};
		
		_s.prevBtnMUH = function(){
			_s.gotoPrevItem();
		};
		
		_s.fullscreenButtonMUH = function(){
			if(_s.fsBtn_do.currentState == 1){
				_s.goFullScreen();
			}else{
				_s.goNormalScreen();
			}
		};
		
		_s.slideshowButtonOnMouseUpHandler = function(){
			if(_s.isAnim || _s.isAnimMaxOrMin || _s.isLoading) return;
			if(_s.tm.isStopped){
				if(!_s.videoStarted) _s.slp_do.resetSlideshow()
				_s.tm.start();
			}else{
				_s.tm.stop();
			}			
		};

		_s.positionSlp = function(anim){
			if(_s.addSlideShowAnimation_bl){	
				FWDAnimation.killTweensOf(_s.slp_do);
				if(_s.tempBtnsAlign == FWDRL.BUTTONS_IN){
					FWDAnimation.to(_s.slp_do, .8, {x:_s.finalX + _s.finalW + _s.tempBtnsOffsetIn, y:_s.finalY, alpha:1, ease:Expo.easeInOut});
				}else{
					FWDAnimation.to(_s.slp_do, .8, {x:_s.stageW - _s.buttonW - _s.tempBtnsOffsetOut, y:_s.tempBtnsOffsetIn, alpha:1, ease:Expo.easeInOut});
				}
			}
		}
		
		
		/**
	 	 * Setup share buttons.
	 	 */
		_s.setupShare = function(){
			FWDRLShare.setPrototype();
			_s.share_do = new FWDRLShare(_s);
			_s.share_do.addListener(FWDRLShare.SHOW, _s.shareShowH);
			_s.share_do.addListener(FWDRLShare.HIDE, _s.shareHideH);
			_s.main_do.addChild(_s.share_do);
		};

		_s.shareShowH = function(){
			_s.tm.pause();
			if(_s.evp && _s.item_do == _s.vidHld_do){
				_s.evp.setVideoPlayingStateOnWindowShow();
				_s.evp.pause();
			} 
		}

		_s.shareHideH = function(){
			_s.tm.resume();
			if(_s.evp && _s.item_do == _s.vidHld_do && _s.evp.isVideoPlayingWhenOpenWindows_bl) _s.evp.resume();
		}
		

		/**
	 	 * Add or remove buttons.
	 	 */
		_s.addCloseButton = function(){
			if(!_s.addCloseButton) return;
			if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.closeBtn_do) == -1){
				_s.buttons_ar.splice(0, 0, _s.closeBtn_do);
			}
		};
		
		_s.removeCloseButton = function(){
			if(!_s.addCloseButton) return;
			if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.closeBtn_do) != -1){
				FWDAnimation.killTweensOf(_s.closeBtn_do);
				_s.closeBtn_do.setX(-5000);
				_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.closeBtn_do), 1);
			}
		};
		
		_s.addFullscreenButton = function(){
			if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.fsBtn_do) == -1){
				FWDAnimation.killTweensOf(_s.fsBtn_do);
				if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.closeBtn_do) != -1){
					_s.fsBtn_do.setX(_s.closeBtn_do.x);
					_s.fsBtn_do.setY(_s.closeBtn_do.y + _s.closeBtn_do.h + _s.spaceBetweenBtns);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.closeBtn_do) + 1, 0, _s.fsBtn_do);
				}else{
					if(_s.isFirstItemShowed){
						_s.fsBtn_do.setX(_s.itemHld_do.x + _s.itemHld_do.w + _s.tempBtnsOffsetIn);
						_s.fsBtn_do.setY(_s.itemHld_do.y);
					}
					_s.buttons_ar.splice(0, 0, _s.fsBtn_do);
				}
			}
		};
		
		_s.removeFullscreenButton = function(){
			if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.fsBtn_do) != -1){
				FWDAnimation.killTweensOf(_s.fsBtn_do);
				_s.fsBtn_do.setX(-5000);
				_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.fsBtn_do), 1);
			}
		};

		_s.addZoomButton = function(){
			if(!_s.showZoomButton) return;

			if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.zoomBtn_do) == -1){
				var y;
				var x;
				FWDAnimation.killTweensOf(_s.zoomBtn_do);
				if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.fsBtn_do) != -1){					
					if(_s.tempBtnsAlign == FWDRL.BUTTONS_TOP){
						x = _s.fsBtn_do.x - _s.zoomBtn_do.w - _s.spaceBetweenBtns;
						y = _s.tempBtnsOffsetOut;
					}else{
						x = _s.fsBtn_do.x;
						y = _s.fsBtn_do.y + _s.fsBtn_do.h + _s.spaceBetweenBtns;
					}
					_s.zoomBtn_do.setX(x);
					_s.zoomBtn_do.setY(y);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.fsBtn_do) + 1, 0, _s.zoomBtn_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.closeBtn_do) != -1){
					if(_s.tempBtnsAlign == FWDRL.BUTTONS_TOP){
						x = _s.closeBtn_do.x - _s.zoomBtn_do.w - _s.spaceBetweenBtns;
						y = _s.tempBtnsOffsetOut;
					}else{
						x = _s.closeBtn_do.x;
						y = _s.closeBtn_do.y + _s.closeBtn_do.h + _s.spaceBetweenBtns;
					}
					_s.zoomBtn_do.setX(x);
					_s.zoomBtn_do.setY(y);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.closeBtn_do) + 1, 0, _s.zoomBtn_do);
				}else{
					if(_s.isFirstItemShowed){
						if(_s.tempBtnsAlign == FWDRL.BUTTONS_TOP){
							x = _s.stageW - _s.zoomBtn_do.w - _s.tempBtnsOffsetIn;
							y = _s.tempBtnsOffsetOut;
						}else{
							x = _s.itemHld_do.x + _s.itemHld_do.w + _s.tempBtnsOffsetIn;
							y = _s.itemHld_do.y;
						}
						_s.zoomBtn_do.setX(x);
						_s.zoomBtn_do.setY(y);
					}
					_s.buttons_ar.splice(0, 0, _s.zoomBtn_do);
				}
			}
		};

		_s.removeZoomButton = function(){
			if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.zoomBtn_do) != -1){
				FWDAnimation.killTweensOf(_s.zoomBtn_do);
				_s.zoomBtn_do.setX(-5000);
				_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.zoomBtn_do), 1);
			}
		};
		
		_s.addSlideshowButton = function(){
			if(!_s.showSlideShowButton) return;
			if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.slideShowBtn_do) == -1){
				FWDAnimation.killTweensOf(_s.slideShowBtn_do);
				
				if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.shareBtn_do) != -1){
					_s.slideShowBtn_do.setX(_s.shareBtn_do.x);
					_s.slideShowBtn_do.setY(_s.shareBtn_do.y + _s.shareBtn_do.h + _s.spaceBetweenBtns);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.shareBtn_do) + 1, 0, _s.slideShowBtn_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.zoomBtn_do) != -1){
					_s.slideShowBtn_do.setX(_s.zoomBtn_do.x);
					_s.slideShowBtn_do.setY(_s.zoomBtn_do.y + _s.zoomBtn_do.h + _s.spaceBetweenBtns);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.zoomBtn_do) + 1, 0, _s.slideShowBtn_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.fsBtn_do) != -1){
					_s.slideShowBtn_do.setX(_s.fsBtn_do.x);
					_s.slideShowBtn_do.setY(_s.fsBtn_do.y + _s.fsBtn_do.h + _s.spaceBetweenBtns);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.fsBtn_do) + 1, 0, _s.slideShowBtn_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.closeBtn_do) != -1){
					_s.slideShowBtn_do.setX(_s.closeBtn_do.x);
					_s.slideShowBtn_do.setY(_s.closeBtn_do.y + _s.closeBtn_do.h + _s.spaceBetweenBtns);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.closeBtn_do) + 1, 0, _s.slideShowBtn_do);
				}else{
					if(_s.isFirstItemShowed){
						_s.slideShowBtn_do.setX(_s.itemHld_do.x + _s.itemHld_do.w + _s.tempBtnsOffsetIn);
						_s.slideShowBtn_do.setY(_s.itemHld_do.y);
					}
					_s.buttons_ar.splice(0, 0, _s.slideShowBtn_do);
				}
			}
		};

		_s.removeSlideshowButton = function(){
			//if(!_s.showSlideShowButton) return;	
			if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.slideShowBtn_do) != -1){
				FWDAnimation.killTweensOf(_s.slideShowBtn_do);
				_s.slideShowBtn_do.setX(-5000);
				_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.slideShowBtn_do), 1);
			}
		};
		
		_s.addSlideShowAnimation = function(){
			if(!_s.showSlideShowAnimation) return;

			if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.slp_do) == -1){
				var x;
				var y;
				FWDAnimation.killTweensOf(_s.slp_do);
				if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.slideShowBtn_do) != -1){
					if(_s.tempBtnsAlign == FWDRL.BUTTONS_TOP){
						x = _s.slideShowBtn_do.x - _s.slideShowBtn_do.w - _s.spaceBetweenBtns;
						y = _s.tempBtnsOffsetOut;
					}else{
						x = _s.slideShowBtn_do.x;
						y = _s.slideShowBtn_do.y + _s.slideShowBtn_do.h + _s.spaceBetweenBtns;
					}
					_s.slp_do.setX(x);
					_s.slp_do.setY(y);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.slideShowBtn_do) + 1, 0, _s.slp_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.shareBtn_do) != -1){
					if(_s.tempBtnsAlign == FWDRL.BUTTONS_TOP){
						x = _s.shareBtn_do.x - _s.shareBtn_do.w - _s.spaceBetweenBtns;
						y = _s.tempBtnsOffsetOut;
					}else{
						x = _s.shareBtn_do.x;
						y = _s.shareBtn_do.y + _s.shareBtn_do.h + _s.spaceBetweenBtns;
					}
					_s.slp_do.setX(x);
					_s.slp_do.setY(y);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.shareBtn_do) + 1, 0, _s.slp_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.zoomBtn_do) != -1){
					if(_s.tempBtnsAlign == FWDRL.BUTTONS_TOP){
						x = _s.zoomBtn_do.x - _s.zoomBtn_do.w - _s.spaceBetweenBtns;
						y = _s.tempBtnsOffsetOut;
					}else{
						x = _s.zoomBtn_do.x;
						y = _s.zoomBtn_do.y + _s.zoomBtn_do.h + _s.spaceBetweenBtns;
					}
					_s.slp_do.setX(x);
					_s.slp_do.setY(y);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.zoomBtn_do) + 1, 0, _s.slp_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.fsBtn_do) != -1){
					if(_s.tempBtnsAlign == FWDRL.BUTTONS_TOP){
						x = _s.fsBtn_do.x - _s.fsBtn_do.w - _s.spaceBetweenBtns;
						y = _s.tempBtnsOffsetOut;
					}else{
						x = _s.fsBtn_do.x;
						y = _s.fsBtn_do.y + _s.fsBtn_do.h + _s.spaceBetweenBtns;
					}
					_s.slp_do.setX(x);
					_s.slp_do.setY(y);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.fsBtn_do) + 1, 0, _s.slp_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.closeBtn_do) != -1){
					if(_s.tempBtnsAlign == FWDRL.BUTTONS_TOP){
						x = _s.closeBtn_do.x - _s.closeBtn_do.w - _s.spaceBetweenBtns;
						y = _s.tempBtnsOffsetOut;
					}else{
						x = _s.closeBtn_do.x;
						y = _s.closeBtn_do.y + _s.closeBtn_do.h + _s.spaceBetweenBtns;
					}
					_s.slp_do.setX(x);
					_s.slp_do.setY(y);
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.closeBtn_do) + 1, 0, _s.slp_do);
				}else{
					if(_s.isFirstItemShowed){
						if(_s.tempBtnsAlign == FWDRL.BUTTONS_TOP){
							x = _s.stageW - _s.slp_do.w - _s.tempBtnsOffsetIn;
							y = _s.tempBtnsOffsetOut;
						}else{
							x = _s.itemHld_do.x + _s.itemHld_do.w + _s.tempBtnsOffsetIn;
							y = _s.itemHld_do.y;
						}
						_s.slp_do.setX(x);
						_s.slp_do.setY(y);
					}
					_s.buttons_ar.splice(0, 0, _s.slp_do);
				}
				
				
			}
		};

		_s.removeSlideShowAnimation = function(){
			if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.slp_do) != -1){
				FWDAnimation.killTweensOf(_s.slp_do);
				_s.slp_do.setX(-5000);
				_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.slp_do), 1);
			}
		};
		
		_s.removeShareButton = function(){
			if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.shareBtn_do) != -1){
				FWDAnimation.killTweensOf(_s.shareBtn_do);
				_s.shareBtn_do.setX(-5000);
				_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.shareBtn_do), 1);
			}
		};
		
		_s._addShareButton = function(){
			if(!_s.showShareButton) return;
			if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.shareBtn_do) == -1){
				if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.zoomBtn_do) != -1){
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.zoomBtn_do) + 1, 0, _s.shareBtn_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.fsBtn_do) != -1){
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.fsBtn_do) + 1, 0, _s.shareBtn_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.closeBtn_do) != -1){
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.closeBtn_do) + 1, 0, _s.shareBtn_do);
				}else{
					_s.buttons_ar.splice(0, 0, _s.shareBtn_do);
				}
			}
		};
		
		_s.removeNextAndPrevBtns = function(){
			//if(!_s.defaultShowNextAndPrevBtns) return;
			if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.nextBtn_do) != -1){
				FWDAnimation.killTweensOf(_s.nextBtn_do);
				FWDAnimation.killTweensOf(_s.prevBtn_do);
				_s.prevBtn_do.setX(-5000);
				_s.nextBtn_do.setX(-5000);
				_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.nextBtn_do), 1);
			}
		};
		
		_s.addNextAndPrevBtns = function(){
			
			if(!_s.showNextAndPrevBtns) return;
			if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.nextBtn_do) == -1){
				if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.slideShowBtn_do) != -1){
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.slideShowBtn_do) + 1, 0, _s.nextBtn_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.slp_do) != -1){
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.slp_do) + 1, 0, _s.nextBtn_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.shareBtn_do) != -1){
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.shareBtn_do) + 1, 0, _s.nextBtn_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.zoomBtn_do) != -1){
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.zoomBtn_do) + 1, 0, _s.nextBtn_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.fsBtn_do) != -1){
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.fsBtn_do) + 1, 0, _s.nextBtn_do);
				}else if(FWDRLUtils.indexOfArray(_s.buttons_ar,  _s.closeBtn_do) != -1){
					_s.buttons_ar.splice(FWDRLUtils.indexOfArray(_s.buttons_ar, _s.closeBtn_do) + 1, 0, _s.nextBtn_do);
				}else{
					_s.buttons_ar.splice(0, 0, _s.nextBtn_do);
				}
			}
		};
	
		
		/**
	 	 * Position buttons.
	 	 * @param {Boolean} anim
	 	 */
		_s.positionBtns = function(anim){
			
			if(!_s.isFirstItemShowed || !_s.isShowed || !_s.isReady) return;

			_s.btnsHidden = false;
			var offsetY = 0;
			var totalBtnsHeight = 0;
			var prevBtn2;
			
			if(_s.tempThumbsShowed){
				offsetY = Math.round((_s.thumbnailH + _s.spaceBetweenThumbnailsAndItem)/2 - _s.spaceBetweenThumbnailsAndItem/2) + _s.thumbnailsOffsetBottom + _s.spaceBetweenThumbnailsAndItem;
			}
		
			if(_s.showNextAndPrevBtns){
				if(_s.tempBtnsAlign == FWDRL.BUTTONS_IN){
					_s.prevBtn_do.finalX = _s.finalX - _s.prevBtn_do.w - _s.tempBtnsOffsetIn;
				}else{
					_s.prevBtn_do.finalX = _s.tempBtnsOffsetOut;
				}
			
				_s.prevBtn_do.finalY = Math.round(_s.finalY + (_s.finalH - _s.prevBtn_do.h)/2);
				if(_s.prevBtn_do.finalX == undefined) _s.prevBtn_do.finalX = -5000;
				if(_s.prevBtn_do.finalY == undefined) _s.prevBtn_do.finalY = -5000;
				if(_s.prevBtn_do.finalX  <= 0){
					_s.prevBtn_do.finalX = _s.tempBtnsOffsetOut;
				}
			}
			
			var btn;
			var prevButton;
			var totalBtns = _s.buttons_ar.length;
			
			for(var j=0; j<totalBtns; j++){
				btn = _s.buttons_ar[j];
				if(!btn) continue;
				totalBtnsHeight += btn.h + _s.spaceBetweenBtns;
			}
			totalBtnsHeight -= _s.spaceBetweenBtns;
		
			for(var i=0; i<totalBtns; i++){
			
				btn = _s.buttons_ar[i];
				if(!btn) continue;
				if(i != 0) prevButton = _s.buttons_ar[i-1];
				if(_s.tempBtnsAlign == FWDRL.BUTTONS_IN){
					btn.finalX  = _s.finalX + _s.finalW + _s.tempBtnsOffsetIn;
				}else{
					btn.finalX  = _s.stageW - btn.w - _s.tempBtnsOffsetIn;
				}
				
				if(_s.tempBtnsAlign == FWDRL.BUTTONS_TOP){
					var btnTop = _s.buttons_ar[i];
					if(btnTop != _s.nextBtn_do){
						btnTop.finalX = _s.stageW - btnTop.w - _s.tempBtnsOffsetOut;
						if(prevBtn2){
							btnTop.finalX = prevBtn2.finalX - btnTop.w - _s.spaceBetweenBtns;
						}
						prevBtn2 = btnTop;
					}
					
					btn.finalY = _s.tempBtnsOffsetOut;
					if(btn == _s.nextBtn_do){
						btn.finalY =  _s.prevBtn_do.finalY;
						btnTop.finalX = _s.stageW - btnTop.w - _s.tempBtnsOffsetOut;
					}
				}else{
					if(btn.finalX + btn.w  >= _s.stageW){
						btn.finalX = _s.stageW - btn.w - _s.tempBtnsOffsetOut;
					}

					if(totalBtnsHeight > _s.finalH && _s.tempBtnsAlign == FWDRL.BUTTONS_IN){
						if(i == 0){
							if(_s.tempBtnsAlign == FWDRL.BUTTONS_IN){
								if(_s.tempThumbsShowed){
									btn.finalY = Math.round((_s.stageH - totalBtnsHeight - _s.thumbnailH)/2);
								}else{
									btn.finalY = Math.round((_s.stageH - totalBtnsHeight)/2);
								}
							}else{
								btn.finalY = _s.tempBtnsOffsetIn;
							}
						}else{
							btn.finalY = prevButton.finalY + prevButton.h + _s.spaceBetweenBtns;
						}
					}else{
						
						if(_s.tempBtnsAlign == FWDRL.BUTTONS_IN){
							btn.finalY = _s.finalY;
						}else{
							btn.finalY = _s.tempBtnsOffsetIn;
						}
						
						if(prevButton){
							btn.finalY = prevButton.finalY + prevButton.h + _s.spaceBetweenBtns;
							if(btn == _s.nextBtn_do){
								if(btn.finalY < _s.prevBtn_do.finalY){
									btn.finalY = _s.prevBtn_do.finalY;
								}
							}
						}else{
							if(btn == _s.nextBtn_do){
								if(btn.finalY < _s.prevBtn_do.finalY){
									btn.finalY =  _s.prevBtn_do.finalY;
								}
							}
						}
					}
				}


				if(_s.hider.isHidden_bl && btn == _s.slp_do){
					if(_s.tempBtnsAlign == FWDRL.BUTTONS_IN){
						btn.finalY = _s.finalY;
					}else{
						btn.finalY = _s.tempBtnsOffsetIn;
					}	
				}
			}

			if(_s.showCounter){
				var cntX, cntY;

				if(_s.tempBtnsAlign == 'in'){
					cntX = _s.finalX - _s.buttonsOffsetIn;
					cntY = _s.finalY;
				}else{
					cntX = _s.tempBtnsOffsetOut;
					cntY = _s.tempBtnsOffsetIn;
				}

				_s.mcnt_do.finalX = cntX;
				_s.mcnt_do.finalY = cntY;

				FWDAnimation.killTweensOf(_s.mcnt_do);
				if(anim){
					FWDAnimation.to(_s.mcnt_do, .8, {x:cntX, y:cntY, alpha:1, ease:Expo.easeInOut});
				}else{
					_s.mcnt_do.setX(cntX);
					_s.mcnt_do.setY(cntY);
					_s.mcnt_do.setAlpha(1);
				}
			}

			if(_s.showNextAndPrevBtns){
				FWDAnimation.killTweensOf(_s.prevBtn_do);
				if(anim){
					FWDAnimation.to(_s.prevBtn_do, .8, {x:_s.prevBtn_do.finalX, y:_s.prevBtn_do.finalY, alpha:1, ease:Expo.easeInOut});
				}else{
					_s.prevBtn_do.setX(_s.prevBtn_do.finalX);
					_s.prevBtn_do.setY(_s.prevBtn_do.finalY);
					_s.prevBtn_do.setAlpha(1);
				}
			}
			
			for(var i=0; i<totalBtns; i++){		
				btn = _s.buttons_ar[i];

				//if(btn.x != btn.finalX || btn.y != btn.finalY){
					FWDAnimation.killTweensOf(btn);
					if(anim){ 
						FWDAnimation.to(btn, .8, {x:btn.finalX, y:btn.finalY, alpha:1, ease:Expo.easeInOut});
					}else{
						btn.setX(btn.finalX);
						btn.setY(btn.finalY);
						btn.setAlpha(1);
					}
				//}
			}

			if(_s.showZoomButton && _s.isMax){
				FWDAnimation.killTweensOf(_s.zoomBtn_do);
				_s.zoomBtn_do.setX(_s.stageW - btn.w - 10)
				_s.zoomBtn_do.setY(10);
			}

			if(_s.hiderHidden && anim){
				_s.hideBtns(true);
			}
		};
		
		_s.hideBtns = function(anim){
			if(!_s.isReady ) return;
			_s.btnsHidden = true;
			var btn;
			var totalBtns = _s.buttons_ar.length;

			if(_s.showNextAndPrevBtns){
				_s.prevBtn_do.finalX = _s.prevBtn_do.finalX -_s.prevBtn_do.w;
				if(_s.prevBtn_do.finalX == undefined) _s.prevBtn_do.finalX = -1;
				if(_s.prevBtn_do.finalY == undefined) _s.prevBtn_do.finalY = -1;
			}
			
			for(var i=0; i<totalBtns; i++){
				var opacity = 0;
				btn = _s.buttons_ar[i];	
				if(!btn) continue;
				
				if(!isNaN(btn.finalX)){
					if(_s.tempBtnsAlign == FWDRL.BUTTONS_TOP 
					   && btn != _s.nextBtn_do &&  btn != _s.prevBtn_do){
						btn.finalY = -btn.h;
					}else{
						if(btn.finalX > _s.stageW/2){
							btn.finalX = btn.finalX + btn.w;
						}else{
							btn.finalX = btn.finalX - btn.w;
						}
					}
				}
				
				if(btn.finalX === undefined) btn.finalX = -5000;
				if(btn.finalY === undefined) btn.finalY = -5000;
				if(_s.isMax && btn === _s.zoomBtn_do){
					_s.zoomBtn_do.finalX =_s.stageW - btn.w - 10;
					_s.zoomBtn_do.finalY = 10;
					opacity = 1;
				}
				
				if(anim){
					if(i == 0 && _s.showNextAndPrevBtns){
						FWDAnimation.killTweensOf(_s.prevBtn_do);
						FWDAnimation.to(_s.prevBtn_do, .8, {alpha:0, x:_s.prevBtn_do.finalX, y:_s.prevBtn_do.finalY, ease:Expo.easeInOut});
					}
					FWDAnimation.killTweensOf(btn);
					FWDAnimation.to(btn, .8, {alpha:opacity, x:btn.finalX, y:btn.finalY, ease:Expo.easeInOut});
				}else{
					if(i == 0 && _s.showNextAndPrevBtns){
						FWDAnimation.killTweensOf(_s.prevBtn_do);
						_s.prevBtn_do.setAlpha(0);
						_s.prevBtn_do.setX(_s.prevBtn_do.finalX);
						_s.prevBtn_do.setY(_s.prevBtn_do.finalY);
					}
					FWDAnimation.killTweensOf(btn);
					btn.setAlpha(opacity);
					btn.setX(btn.finalX);
					btn.setY(btn.finalY);
				}
			}

			if(_s.showCounter){
				var cntX, cntY;
				if(_s.tempBtnsAlign == 'in'){
					cntX = Math.round(_s.finalX - _s.buttonsOffsetIn - _s.cnt_do.getHeight());
					cntY = _s.finalY;
				}else{
					cntX = _s.mcnt_do.finalX;
					cntY = - _s.cnt_do.getHeight();
				}

				FWDAnimation.killTweensOf(_s.mcnt_do);
				if(anim){
					FWDAnimation.to(_s.mcnt_do, .8, {x:cntX, y:cntY, alpha:0, ease:Expo.easeInOut});
				}else{
					_s.mcnt_do.setX(cntX);
					_s.mcnt_do.setY(cntY);
					_s.mcnt_do.setAlpha(0);
				}
			}

			if(_s.hiderHidden){
				_s.positionSlp(anim);
			}
		};
		
		_s.hideStuffForGood = function(){
			if(_s.shareBtn_do) _s.shareBtn_do.setX(-5000);
			_s.prevBtn_do.setX(-5000);
			_s.nextBtn_do.setX(-5000);
			_s.closeBtn_do.setX(-5000);
			_s.zoomBtn_do.setX(-5000);
			_s.fsBtn_do.setX(-5000);
			_s.slideShowBtn_do.setX(-5000);
			_s.slp_do.setX(-5000);
			if(_s.evp){
				_s.evp.stop();
				_s.vidHld_do.setX(-5000);
			}
		};
		
		/**
	 	 * Create dynamic gallery object.
	 	 * @param {String} guId
	 	 * @param {Integer} mId
	 	 * @param {String} propsObjName
	 	 */
		_s.getDynamicGallery = function(guId, mId, propsObjName){
			
			// Generate playlists...
			var gallery_obj;
			_s.playlistDomOrObj = guId;
			_s.hadPlErr = false;
			_s.gallery_ar = [];
			var type = 'HTML';

			if(window[guId] && window[guId].tagName){
				var playlistElement = document.getElementById(guId);
				var ch_ar = FWDRLUtils.getChildren(playlistElement);
				_s.totalItems = ch_ar.length;
				
				if(_s.totalItems == 0){
					_s.hadPlErr = true;
					alert("Revolution Lightbox error! The playlist with the guId \"" + guId + "\" must contain at least one item.");
					return
				}
				
				for(var i=0; i<_s.totalItems; i++){
					var media = {};
					var ch = ch_ar[i];
					var test;
	
					media.loaded = false;
					media.src = String(FWDRLUtils.getAttributeValue(ch, "data-src"));
					media.posterSrc = FWDRLUtils.getAttributeValue(ch, "data-poster");
					media.subtitleSrc = FWDRLUtils.getAttributeValue(ch, "data-subtitle") || '';
					media.thumbnailsPreviewSrc = FWDRLUtils.getAttributeValue(ch, "data-thumbnails-preview") || '';
					media.width = FWDRLUtils.getAttributeValue(ch, "data-width");
					media.height = FWDRLUtils.getAttributeValue(ch, "data-height");
					media.vastSrc = FWDRLUtils.getAttributeValue(ch, "data-vast");
					media.is360 = FWDRLUtils.getAttributeValue(ch, "data-is-360");
					
					if(FWDRLUtils.hasAttribute(ch, "data-thumb")){
						media.thumbSrc = FWDRLUtils.getAttributeValue(ch, "data-thumb");
					}
					media.password = FWDRLUtils.getAttributeValue(ch, "data-password");
					
					if(FWDRLUtils.getChildren(ch).length != 0){
						media.caption = ch.innerHTML;
					}
					
					_s.setMediaType(media);
					_s.gallery_ar[i] = media;
				}
				return true;
			}else if(window[guId]){
				
				gallery_obj = window[guId];

				if(gallery_obj && !gallery_obj.playlistItems){
					return;
				}
				_s.totalItems = gallery_obj.playlistItems.length;
				if(_s.totalItems == 0){
					_s.hadPlErr = true;
					alert("Revolution Lightbox error! The playlist with the guId \"" + guId + "\" must contain at least one item.");
					return
				}

				var countPlaylistItems = 0;
				for(var i=0; i<_s.totalItems; i++){
					var media = {};
					var ch = gallery_obj.playlistItems[i];

					media.loaded = false;
					media.src = ch.src;
					media.thumbSrc = ch.thumbSrc
					media.posterSrc = ch.posterSrc;
					media.is360 = ch.is360
					media.subtitleSrc = ch.subtitleSrc || '';
					media.thumbnailsPreviewSrc = ch.thumbnailsPreviewSrc || '';
					media.width = ch.width;
					media.height = ch.height;
					media.vastSrc = ch.vastSrc;
					media.password = ch.password;
					media.caption = ch.caption;
					
					_s.setMediaType(media);
					_s.gallery_ar[i] = media;
				}
				return true;
			}else{
				var playlistElement = document.getElementById(guId);

				if(!playlistElement){
					_s.hadPlErr = true;
					alert("Revolution Lightbox error! Gallery element with the guId \"" + guId + "\" doesn't exist!");
					return;
				}
			}
		};

		_s.setMediaType = function(media){
			if(document.getElementById(media.src)){
				media.type = FWDRL.HTML;
			}else if(/\.jpg|\.webp|\.jpeg|\.png|\.bmp|\.gif|\.tif|\.tiff|\.jfi|\.jfif|\.exif|\.svg/i.test(media.src)){
				media.type = FWDRL.IMAGE;
			}else if(/\.mp4|\.m3u8|\.mpd/i.test(media.src)){
				media.type = FWDRL.VIDEO;
			}else if(/youtube\./i.test(media.src)){
				media.type = FWDRL.YOUTUBE;
			}else if(/vimeo\./i.test(media.src)){
				media.type = FWDRL.VIMEO;
			}else if(/\.mp3/i.test(media.src)){
				media.type = FWDRL.AUDIO;
			}else{
				media.type = FWDRL.IFRAME;	
			}
		};

		_s.checkIfHasThumbs = function(){
			var has = true;
			for(var i=0; i<_s.gallery_ar.length; i++){
				if(!_s.gallery_ar[i].thumbSrc) return false;
			}

			if(_s.totalItems <= 1){
				has = false;
			}else{
				has = true;
			}

			return has;
		}


		/**
	 	 * Create static galleries objects.
	 	 */
	 	 _s.updateGalleries = function(){
	 	 	_s.setStaticGalleries();
	 	 	_s.dispatchEvent(FWDRL.UPDATE_GALLERIES, {galleries:_s.galleries});
	 	 }
	 	 
	 	_s.setStaticGalleries = function(){

	 		// Prepare selectors.
			_s.galleries = {};
			var selectors = _s.mediaSelector,
				sources   = '';
			
			// Setup sources.
			try{
				sources = document.querySelectorAll(selectors);
			}catch(error) {
	 			_s.showError('Your current mediaSelector is not a valid selector: "' + selectors + '"');
			}
			
			for(var i=0; i<sources.length; i++){
				var source = sources[i],
				media = {};

				// Get src based on the tagName.
				media.src = source.tagName === 'A'   ? source.getAttribute('href') : null;
				media.src = source.tagName === 'IMG' ? source.currentSrc || source.src  : media.src;
				// Set data-src as the source if exists.
				media.src = source.getAttribute('data-src') || media.src;

				// Get other media attributes.
				media.loaded = false;
				media.thumbSrc = source.getAttribute('data-thumb');
				media.posterSrc = source.getAttribute('data-poster');
				media.subtitleSrc = source.getAttribute('data-subtitle');
				media.thumbnailsPreviewSrc = source.getAttribute('data-thumbnails-preview');
				media.width = source.getAttribute('data-width');
				media.height = source.getAttribute('data-height');
				media.vastSrc = source.getAttribute('data-vast');
				media.password = source.getAttribute('data-password');
				media.is360 = source.getAttribute('data-is-360');

				var title = source.getAttribute('data-title') || source.getAttribute('title') || '';
				if(title){
					title = '<p class=\'fwdrl-title\'>' + title + '</p>';
				}

				var desc = source.getAttribute('data-alt') || source.getAttribute('alt') || '';
				if(desc){
					desc = '<p class=\'fwdrl-desc\'>' + desc + '</p>';
				}

				media.caption = title + desc;

				// Set media type.
				_s.setMediaType(media);

				// Set galleries.
				var name = source.getAttribute('data-rel');
				name = !name ? Object.keys(_s.galleries).length + 1 : name;

				var gallery = _s.galleries[name];
				gallery = !gallery ? (_s.galleries[name] = []) : gallery;
				gallery.name = name;

				// Assign media index.
				media.index = gallery.length;

				// Add source click events.
				if(source.fwdrlListener) {
					source.removeEventListener('click', source.fwdrlListener);
				}

				source.fwdrlName = gallery.name;
				source.fwdrlId = media.index;
				source.style.cursor = 'pointer';
				source.fwdrlListener = function(e){
					if(e.preventDefault) e.preventDefault();
					window[_s.instName].show(this.fwdrlName, this.fwdrlId, null, true);
				}
				source.addEventListener('click', source.fwdrlListener);

				// Push media data in gallery.
				gallery.push(media);
			}		
	 	}
		
		_s.getStaticGallery = function(guId){
			if(_s.instName != 'rl0') return;
			_s.gallery_ar = _s.galleries[guId];
			if(!_s.gallery_ar) return;
			_s.totalItems = _s.gallery_ar.length;
			_s.playlistDomOrObj = guId;
		}


		/**
	 	 * Show lightbox.
	 	 * @param {String} guId
	 	 * @param {Integer} mId
	 	 * @param {String} propsObjName
	 	 */
		_s.show = function(guId, mId, propsObjName, isStatic){

			var instName = FWDRLDL.getParameter("rlinst")
			if(instName && instName != _s.instName) return;
			
			if(_s.isShowed || FWDRL.isShowed){
				_s.hadPlErr = false;
				return;
			}
			
			FWDRL.isShowed = true;
			_s.mId = mId;
			_s.guId = _s.playlistDomOrObj = guId;
			_s.propsObjName = propsObjName;
			_s.startToHide = _s.showVideoFirstTime = _s.hasError = false;

			if(!guId){
				var error_str = "Please sepecify a playlist or selector";
				alert(error_str);
				return;
			}
			
			//change props
			_s.setDefaultSettings();
			if(propsObjName && window[propsObjName]){
				var props = window[propsObjName];
				_s.setObjectPropsSettings(props);
			}

			// Get gallery.
			_s.getStaticGallery(guId);
			if(!_s.gallery_ar){
				var gal = _s.getDynamicGallery(guId);
			}
		
			_s.isShowed = _s.isAnim = true;
			_s.dispatchEvent(FWDRL.SHOW_START, {guId:_s.guId, mId:_s.mId});

			if(_s.mId < 0){
				_s.mId = 0;
			}else if(_s.mId > _s.totalItems -1){
				_s.mId = _s.totalItems - 1;
			}
			_s.prevId = _s.mId;

			if(_s.hadPlErr){
				setTimeout(function(){
					_s.hadPlErr = _s.isShowed = false;
				}, 100);
				return;
			}

			if(_s.fr){
				_s.showThumbnails = false;
				_s.shareButtons = [];
				_s.showSlideShowButton = false;
				_s.showSlideShowAnimation = false;
				_s.slideShowAutoPlay = false;
				_s.showZoomButton = false;
				_s.showFullscreenButton = false;
				_s.useDeepLinking = false;
			}
			
			if(_s.useDeepLinking) _s.setDL(true);
			
			// Update properties that might change via API.
			_s.hasOneItem = _s.gallery_ar.length == 1 ? true : false;
			if(_s.hasOneItem){
				_s.useDrag = false;
				_s.showThumbnails = false;
				_s.showCounter = false; 
				_s.showSlideShowButton = false;
				_s.showSlideShowAnimation = false;
				_s.slideShowAutoPlay = false;
				_s.showNextAndPrevBtns = false;
			}
			
			if(_s.tm){
				_s.tm.delay = _s.slideShowDelay;
				_s.slp_do.animDur = _s.slideShowDelay/1000;
				_s.hider.hideDelay = _s.buttonsHideDelay;
				_s.slp_do.updateColors(_s.slideShowBkColor, _s.slideShowFillColor);
			}

			_s.showShareButton = _s.shareButtons.length > 0;
			_s.caption_do.captionPosition = _s.captionPosition;
			_s.caption2_do.captionPosition = _s.captionPosition;
			_s.caption_do.captionAnimationType = _s.captionAnimationType;
			_s.caption2_do.captionAnimationType = _s.captionAnimationType;
			_s.caption_do.borderSize = _s.itemBorderSize;
			_s.caption2_do.borderSize = _s.itemBorderSize;
			_s.preloader_do.updateColors(_s.preloaderBkColor, _s.preloaderFillColor);
			
			_s.ctxMenu_do.update(_s.rightClickContextMenu);
			if(_s.thumbs_do) _s.thumbs_do.spaceBetweenThumbnails = _s.spaceBetweenThumbnails;
			_s.bk_do.style().backgroundColor = _s.backgroundColor;
			if(_s.itemBorderSize == 0) _s.itemBorderColor = "transparent";
			_s.itemBorder_do.style().backgroundColor = _s.DFitemBorderColor;
			_s.itemBk_do.style().backgroundColor = _s.itemBkColor;

			// Init thumbnails.
			if(!_s.checkIfHasThumbs()) _s.showThumbnails = false;
			if(_s.showThumbnails && _s.checkIfHasThumbs()){
				_s.setupThumbnailManager();	
				_s.thumbs_do.show(false);
			}else{
				if(_s.thumbs_do) _s.thumbs_do.hide(false);
			}

			// Show...
			_s.so = FWDRLUtils.getScrollOffsets();
			_s.addSlideShowAnimation_bl = _s.captionShowedOnce = false;

			_s.caption_do.hide(false, true, true);
			_s.caption2_do.hide(false, true, true);
			_s.startResizeHandler();
			_s.addPreventMouseWheel();
			FWDAnimation.to(_s.bk_do, .8, {alpha:1, ease:Quint.easeOut});
			
			if(_s.preloader_do){
				_s.positionPreloader();
				_s.preloader_do.show(true);
			}
			_s.main_do.setVisible(true);
			
			if(_s.isReady){	
				_s.hideBtns();
				_s.hideStuffForGood();
			}

			if(_s.itemBorderSize){
				_s.itemBorder_do.setVisible(true);
			}else{
				_s.itemBorder_do.setVisible(false);
			}

			if(_s.thumbs_do) _s.thumbs_do.destoryThumbnails();
			clearTimeout(_s.showOrHideCompleteId_to);
			_s.showOrHideCompleteId_to = setTimeout(_s.showComplete, 51);
		};
	
		_s.showComplete = function(){
	
			if(_s.hadPlErr) return;
			
			if(!_s.isReady || _s.mId == -1 || _s.item_do || !_s.gallery_ar) return;	

			if(!_s.gallery_ar.length) return;
			if(!_s.useAsModal){
				_s.addBkClose();
			}else{
				_s.removeBkClose();
			}

			_s.positionPreloader();
			
			if(_s.showCloseButton){
				_s.addCloseButton();
			}else{
				_s.removeCloseButton();
			}

			if(_s.showFullscreenButton){
				_s.addFullscreenButton();
			}else{
				_s.removeFullscreenButton();
			}
		
			if(_s.showZoomButton && _s.gallery_ar[_s.mId].type == FWDRL.IMAGE){
				_s.addZoomButton();
			}else{
				_s.removeZoomButton();
			}

			if(_s.showShareButton){
				_s._addShareButton();
			}else{
				_s.removeShareButton();
			}

			if(_s.showSlideShowButton){
				_s.addSlideshowButton();
			}else{
				_s.removeSlideshowButton();
			}	

			if(_s.showNextAndPrevBtns){
				_s.addNextAndPrevBtns();
			}else{
				_s.removeNextAndPrevBtns();
			}

			if(_s.showCounter){
				_s.mcnt_do.setVisible(true);
			}else{
				_s.mcnt_do.setVisible(false);
			}

			setTimeout(_s.share_do.update, 500);
			_s.hideBtns();
			_s.initItem();
			_s.startAnim(801);
			_s.dispatchEvent(FWDRL.READY);
		};
		
		_s.hide = function(){
			if(_s.isAnim 
			   || !_s.isShowed 
			   || _s.isAnimMaxOrMin 
			   || _s.isMax
			   || _s.isDragging
			   || _s.isLoading
			  ) return;

			var wasFS = _s.isFullScreen;
			var btnsHidden = _s.btnsHidden;
			_s.gallery_ar = null;

			_s.startToHide = true;

			_s.goNormalScreen();
			_s.resizeHandler(true);
			if(btnsHidden) _s.hideBtns(false);
			_s.removeKeyboard();

			if(wasFS){
				if(FWDRLUtils.isFirefox){
					setTimeout(_s.hideStart, 350);
				}else{
					setTimeout(_s.hideStart, 150);
				}
			}else{
				_s.hideStart();
			}
		};

		_s.hideStart = function(){
			_s.isShowed = false;
			
			FWDAnimation.to(_s.bk_do, .8, {alpha:0, delay:.4, ease:Quint.easeOut});
			
			if(_s.item_do && _s.item_do.screen){
				FWDAnimation.to(_s.item_do, .8, {alpha:0, delay:.1, ease:Quint.easeOut});
			
				FWDAnimation.to(_s.item_do, .8, {
						x:-_s.finalW/2, 
						y:-_s.finalH/2, 
						delay:.1,
						ease:Expo.easeInOut});

			}
			FWDAnimation.to(_s.itemHld_do, .8, {x:_s.stageW/2, y:_s.stageH/2, w:0, h:0, delay:.1, ease:Expo.easeInOut});
			FWDAnimation.to(_s.itemBorder_do, .8, {w:0, h:0, alpha:0, delay:.1, ease:Expo.easeInOut});
			FWDAnimation.to(_s.itemBk_do, .8, {x:0, y:0, w:0, h:0, delay:.1, ease:Expo.easeInOut});
			FWDAnimation.to(_s.caption_do, .8, {x:-_s.finalW/2, h:0, delay:.1, ease:Expo.easeInOut});
			
			if(_s.item_do) _s.hideBtns(true);
			
			_s.isFirstItemShowed = _s.isFirstItemAfterShowed = _s.hiderHidden = false;
			_s.mId == -1;

			if(_s.evp && _s.item_do == _s.vidHld_do){
				FWDAnimation.to(_s.evp, .79, {volume:0, onUpdate:function(){
					_s.evp.setVolume(_s.evp.volume);
				}});
			}

			_s.stopResizeHandler();
			_s.stopMediaLazyLoading();
			_s.tm.stop();
			_s.removeDrag();
			_s.updateDragAf();
			_s.removeDbl();
			if(_s.thumbs_do) _s.thumbs_do.hide(true);
			if(_s.main_do.contains(_s.info_do)) _s.main_do.removeChild(_s.info_do);
			_s.closeImage();
			if(!_s.useAsModal) _s.removeBkClose();
			_s.hider.stop();
			_s.preloader_do.hide(true);
		
			if(_s.hasCaption && _s.caption){
				_s.caption_do.hide(true);
				_s.caption2_do.hide(true);
			} 
			clearTimeout(_s.showOrHideCompleteId_to);
			_s.showOrHideCompleteId_to = setTimeout(_s.hideComplete, 1200);
			
			_s.startAnim(1202);
			_s.dispatchEvent(FWDRL.HIDE_START, {guId:_s.guId, mId:_s.mId});
		}
		
		_s.hideComplete = function(){
			FWDRL.isShowed = false;
    		window.history.pushState('', document.title, window.location.href.replace(window.location.hash, ''));
			_s.removePreventMouseWheel();

			if(_s.item_do == _s.vidHld_do && _s.evp){
				_s.evp.stop();
				_s.evp.setPosterSource("");
				_s.vidHld_do.setX(-10000);
			}
		
			_s.isFirstItemShowed = _s.firstVideoOrAudioAdded_bl = _s.showFirstTimeDone = _s.forceHideCaption = _s.prevCaption = _s.videoStarted = false;
			_s.item_do = _s.prevItem_do = null;
			_s.slp_do.resetSlideshow();
			_s.removeItems(0);
			if(_s.thumbs_do){
				_s.thumbs_do.destoryThumbnails();
				_s.thumbs_do.hideForGood();
			}
			_s.main_do.setX(-5000);
			_s.main_do.setVisible(false);
			//_s.main_do.setY(-5000);
			_s.dispatchEvent(FWDRL.HIDE_COMPLETE, {guId:_s.guId, mId:_s.mId});
		};
		
		_s.startAnim = function(delay){
			_s.stopAnim();
			_s.isAnim = true;
			_s.animId_to = setTimeout(_s.animationDone, delay);
			_s.animId2_to = setTimeout(_s.animationDone2, delay - 300);
			_s.showDisable(true, false, true);
		};
		
		_s.stopAnim = function(){
			_s.isAnim = false;
			if(_s.tm) _s.tm.pause();
			clearTimeout(_s.animId_to);
			clearTimeout(_s.animId2_to);
		};
		
		_s.animationDone = function(){
			_s.isAnim = false;
			if(_s.slideShowAutoStop && _s.mId == _s.totalItems -1){
				_s.tm.stop();
			}else{
				_s.tm.resume();
			}

			if(_s.item_do) _s.dlChangeHandler();

			if(_s.caption){
				if(_s.animateCaption && _s.captionShowedOnce || _s.forceHideCaption){
					_s.caption_do.hide(false, true);
					_s.caption2_do.hide(false, true);
				}

				if(_s.isShowed){
					_s.caption_do.show(true);
					if(_s.caption2_do){
						if(_s.type == FWDRL.IMAGE){
							if(!_s.isLoading) _s.caption2_do.show(true);
						}else{
							_s.caption2_do.show(true);
						}
					}
				}
				_s.captionShowedOnce = true;
			} 

			if(_s.type == FWDRL.IMAGE || _s.type == FWDRL.IFRAME || _s.type == FWDRL.HTML){
				if(_s.vidHld_do){
					setTimeout(function(){
						_s.vidHld_do.setX(-5000);
					}, 100);
				}
			}
			_s.animItemDone();
			_s.hideDisable();
		};

		_s.animationDone2 = function(){
			_s.animItemBeforeDone();
		}
		
		_s.addBkClose = function(){
			if(_s.isMbl){
				if(_s.hasPointerEvent_bl){
					_s.bk_do.screen.addEventListener("pointerup", _s.onBkMouseUp);
				}else{
					_s.bk_do.screen.addEventListener("touchend", _s.onBkMouseUp);
					_s.bk_do.screen.addEventListener("touchmove", _s.onBkTouchMove);
				}
			}else if(_s.bk_do.screen.addEventListener){	
				_s.bk_do.screen.addEventListener("click", _s.onBkMouseUp);
			}
		};
		
		_s.removeBkClose = function(){
			if(_s.isMbl){
				if(_s.hasPointerEvent_bl){
					_s.bk_do.screen.removeEventListener("pointerup", _s.onBkMouseUp);
				}else{
					_s.bk_do.screen.removeEventListener("touchend", _s.onBkMouseUp);
					_s.bk_do.screen.removeEventListener("touchmove", _s.onBkTouchMove);
				}
			}else if(_s.bk_do.screen.removeEventListener){	
				_s.bk_do.screen.removeEventListener("click", _s.onBkMouseUp);
			}

		};
		
		
		_s.onBkTouchMove = function(){
			clearTimeout(_s.doNotAllowToHideId_to);
			_s.doNotAllowToHideId_to = setTimeout(function(){_s.doNotAllowToHide_bl = false;}, 100);
			_s.doNotAllowToHide_bl = true;
		};
		
		_s.onBkMouseUp = function(){
			if(_s.doNotAllowToHide_bl) return;

			if(_s.hasError){
				_s.hide();
				return;
			}

			if(_s.btnsHidden){
				_s.positionBtns(true);
				return;
			}

			_s.hide();
		};
		
		//###################################//
		/* show item */
		//###################################//
		_s.initItem = function(){

			_s.dispatchEvent(FWDRL.START_TO_UPDATE_ITEM, {guId:_s.guId, curId:_s.mId});
			
			var item = _s.gallery_ar[_s.mId];
			var isHttpS_bl;

			if(_s.gallery_ar[_s.mId].caption && _s.caption){
				_s.hasCaption = true;
			}else{
				_s.hasCaption = false;
			}
			
			_s.videoStarted = false;
			_s.type = item.type;
			_s.src = item.src;
			_s.posterSrc = item.posterSrc;
			_s.subtitleSrc = item.subtitleSrc;
			_s.thumbnailsPreviewSrc = item.thumbnailsPreviewSrc;
			_s.vastSrc = item.vastSrc;
			_s.password = item.password;
			_s.is360 = item.is360;
			
			
			_s.hidePassWindow();
			_s.tm.pause();
			_s.share_do.hide();
			_s.closeImage();
			_s.preloader_do.hide(true);
			_s.captionDumy_do.setInnerHTML(_s.gallery_ar[_s.mId].caption);
			if(_s.main_do.contains(_s.info_do)) _s.main_do.removeChild(_s.info_do);
			if(_s.thumbs_do) _s.thumbs_do.disableOrEnableThumbnails();

			if(_s.type == FWDRL.IMAGE){
				if(_s.evp) _s.evp.goNormalScreen();
				_s.loadImage();
				_s.firstVideoOrAudioAdded_bl = true;
			}else if(_s.type == FWDRL.VIDEO
					 || _s.type == FWDRL.YOUTUBE
					 || _s.type == FWDRL.VIMEO
					 || _s.type == FWDRL.AUDIO){	
				
				_s.originalW = item.width || _s.defaultItemWidth;
				_s.originalH = item.height || _s.defaultItemHeight;
				
				_s.item_do = _s.vidHld_do;

				_s.animItem();

				_s.prevItem_do = _s.item_do;
				_s.isLoading = false;
				_s.preloader_do.hide(true);
				_s.removeZoomButton();	
				_s.positionBtns(true);
				_s.startAnim(801);
			}else if(_s.type == FWDRL.IFRAME){
				
				if(_s.evp) _s.evp.goNormalScreen();

				_s.originalW = item.width || _s.defaultItemWidth;
				_s.originalH = item.height || _s.defaultItemHeight;

				_s.item_do = new FWDRLDO('iframe');
				_s.item_do.screen.allowFullScreen  = 1;
				_s.item_do.screen.setAttribute('allowFullScreen', '');
				_s.item_do.screen.frameBorder = 0;
				_s.itemHolder_do.addChild(_s.item_do);
				
				_s.animItem();

				if(_s.fr){
		 			var error = "Iframe is not supported in the free version!";
		 			_s.showError(error);
		 		}else{
					if(/.pdf/i.test(_s.src)){
						setTimeout(function(){
							_s.item_do.screen.src = _s.src;
						},300);
					}else{
						_s.item_do.screen.src = _s.src;
					}
				}
			
				_s.prevItem_do = _s.item_do;
				_s.removeZoomButton();	
				_s.positionBtns(true);
				_s.startAnim(801);
			}else if(_s.type == FWDRL.HTML){
				
				if(_s.evp) _s.evp.goNormalScreen();

				_s.originalW = item.width || _s.defaultItemWidth;
				_s.originalH = item.height || _s.defaultItemHeight;

				_s.item_do = new FWDRLDO('div');

				if(_s.fr){
		 			var error = "HTML content is not supported in the free version!";
		 			_s.showError(error);
		 		}else{
					_s.item_do.setInnerHTML(document.getElementById(_s.src).innerHTML);
				}
				_s.itemHolder_do.addChild(_s.item_do);
				
				_s.animItem();
				_s.item_do.screen.src = _s.src;
				
				_s.prevItem_do = _s.item_do;
				_s.removeZoomButton();	
				_s.positionBtns(true);
				_s.startAnim(801);
			}

			_s.dispatchEvent(FWDRL.UPDATE_ITEM, {guId:_s.guId, curId:_s.mId});
		};

		_s.animItem = function(){

			_s.hasError = false;
			_s.setCaptionText();
			_s.setCntText();
			
			if(!_s.gallery_ar[_s.mId].caption && !_s.animateCaption){
				_s.caption2_do.hide(false, true, false);
			}

			if(!_s.isFirstItemShowed){
				_s.showItemFirstTime();
			}else{	
				_s.resizeItem(true, false, true);
				_s.resizeItem(false, true);
				FWDAnimation.to(_s.prevItem_do, .8, {alpha:0, ease:Quint.easeOut});
				
				var w = _s.prevItem_do.getWidth() || _s.prevFinalW;
				var h = _s.prevItem_do.getHeight() || _s.prevFinalH;
			
				FWDAnimation.to(_s.prevItem_do, .8, {
						x:Math.round((_s.finalW - w)/2), 
						y:Math.round((_s.finalH - h)/2), 
						ease:Expo.easeInOut});
				if(_s.animateCaption){
					_s.caption_do.hide(false, true, false);
					_s.caption2_do.hide(true, true, false);
				}else{
					if(!_s.prevCaption){
						_s.caption_do.hide(false, true, false);
						_s.caption2_do.hide(false, true, false);
						_s.forceHideCaption = true;
					}else{
						_s.forceHideCaption = false;
					}
				}

				_s.item_do.setAlpha(0);
				FWDAnimation.to(_s.item_do, .8, {alpha:1, delay:.8, ease:Quint.easeOut, onComplete:_s.animItemDone});

				if(_s.evp && (_s.prevItem_do == _s.vidHld_do || _s.item_do == _s.vidHld_do)){
					FWDAnimation.to(_s.evp, .79, {volume:0, onUpdate:function(){
						_s.evp.setVolume(_s.evp.volume);
					}});
				}
			}

			if(_s.prevItem_do == _s.vidHld_do){
				_s.prevItem_do.setAlpha(1);
				FWDAnimation.to(_s.prevItem_do, .8, {alpha:0, ease:Quint.easeOut});
				FWDAnimation.to(_s.prevItem_do, .8, {
					x:parseInt((_s.finalW - _s.prevItem_do.getWidth())/2), 
					y:parseInt((_s.finalH - _s.prevItem_do.getHeight())/2), 
					ease:Expo.easeInOut});
			}	
			_s.prevCaption = _s.gallery_ar[_s.mId].caption;
			_s.prevFinalW = _s.finalW;
			_s.prevFinalH = _s.finalH;
			_s.prevMId = _s.mId;
		}

		_s.animItemBeforeDone = function(){
			if(_s.vidHld_do && _s.item_do == _s.vidHld_do){
				if(_s.evp){
					if(_s.evp.largePlayButton_do){
						_s.evp.largePlayButton_do.hide();
					}

					if(_s.evp.videoScreen_do){
						_s.evp.videoScreen_do.setAlpha(0);
					}

					if(_s.evp.ytb_do){
						_s.evp.ytb_do.setAlpha(0);
					}

					if(_s.evp.vimeo_do){
						_s.evp.vimeo_do.setAlpha(0);
					}
				}
			}

			if(_s.evp){
				_s.evp.videoPoster_do.setAlpha(0);
			}
		}

		_s.animItemDone = function(){

			if(_s.evp){
				if(_s.item_do != _s.vidHld_do){
					_s.evp.stop();
				}
			} 

			if(_s.vidHld_do && _s.item_do == _s.vidHld_do){
				_s.removeItems(0);
				if(_s.evp) _s.evp.resizeHandler();
				if(_s.isFirstItemAfterShowed) _s.resizeItem();
				if(_s.useVideo){
					_s.updateEVP();
				}else{
					var error = "Please enable video player in the settings.";
					if(_s.fr) error = "Video is not supported in the free version!";
 					_s.showError(error);
					return;
				}
			}else{
				_s.removeItems(1);
			}

			_s.startMediaLazyLoading();
			_s.showVideoFirstTime = true;
		}

	
		//###########################################//
		/* load image */
		//###########################################//
		_s.closeImage = function(){
			if(_s.image_img){
				_s.image_img.onload = null;
				_s.image_img.onerror = null;
				_s.image_img = null;
			}
		};
		
		_s.loadImage = function(){
			_s.isLoading = true;
			_s.stopAnim();
			_s.positionPreloader();
			_s.preloader_do.show(true);

			_s.image_img = new Image();
			_s.image_img.onload = _s.imageLoadComplete;
			_s.image_img.onerror = _s.imageLoadError;
			_s.image_img.src = _s.src;
		};
		
		_s.imageLoadComplete = function(e){

			_s.originalW = _s.image_img.width;
			_s.originalH = _s.image_img.height;
			
			_s.resizeItem(true, false, true);
			//setTimeout(function(){
				_s.imageLoadComplete2();
			//}, 1000);
		};

		_s.imageLoadComplete2 = function(){
			_s.item_do = new FWDRLDO("img");
			_s.item_do.setScreen(_s.image_img);
			_s.item_do.screen.className = _s.cls + '-media';
		
			_s.animItem();
			
			_s.startAnim(801);
			
			_s.isLoading = false;
			_s.prevItem_do = _s.item_do;
			_s.preloader_do.hide(true);
			_s.addZoomButton();
			_s.positionBtns(true);	
			_s.itemHolder_do.addChild(_s.item_do);
		}
		
		_s.imageLoadError = function(e){
			var error = "Image with path <span style='color:#FF0000;'>" + decodeURIComponent(_s.src) + "</span> can't be loaded, probably the path is incorrect.";
			_s.showError(error);
		};

		
		/**
	  	 * Maximize/minimize item.
	     */
		_s.maxOrMin = function(){
			if(_s.isLoading || _s.isAnim) return;
			
			var scaleX;
			var scaleY;
			var finalX;
			var finalY;
			var finalW;
			var finalH;
			
			_s.isAnimMaxOrMin = true;
			
			clearTimeout(_s.maxComplete_to);
			clearTimeout(_s.minComplete_to);
			
			if(_s.isMax){
				_s.isMax = false;
				if(!_s.useDrag){
					_s.item_do.style().cursor = _s.defaultC;
				}else if(_s.useDrag){
					_s.item_do.style().cursor = _s.handC;
				}
				
				_s.isMaxComplete = false;
				_s.zoomBtn_do.setButtonState(1);
				_s.removeMaxItemScroll();
				if(_s.thumbs_do) _s.thumbs_do.positionThumbnails(false, true);

				FWDAnimation.to(_s.itemBk_do, .8, {alpha:1});
				FWDAnimation.to(_s.itemBorder_do, .8, {alpha:1});
				FWDAnimation.to(_s.item_do, .8, {
					x:_s.finalX + _s.itemBorderSize, 
					y:_s.finalY + _s.itemBorderSize, 
					w:_s.finalW - (_s.itemBorderSize * 2), 
					h:_s.finalH - (_s.itemBorderSize * 2), 
					ease:Expo.easeInOut});
				
				_s.setBtnsVisible(true);
				_s.positionBtns(true);

				if(_s.hasCaption && _s.caption){
					_s.caption2_do.show(true, true);
				} 
				if(_s.thumbs_do && _s.tempThumbsShowed) _s.thumbs_do.show(true);
				_s.minComplete_to = setTimeout(_s.minComplete, 801);
			}else{
				_s.isMax = true;
				_s.item_do.style().cursor = _s.handC;
				_s.hideBtns(true);
				_s.isMaxComplete = true;
				_s.zoomBtn_do.setButtonState(0);
				_s.tm.pause();
		
				finalW = Math.round(_s.originalW * _s.maxZoom);
				finalH = Math.round(_s.originalH * _s.maxZoom);
				finalX = Math.round((_s.stageW - finalW)/2);
				finalY = Math.round((_s.stageH - finalH)/2);
				
				if(_s.item_do.alpha != 1) _s.item_do.setAlpha(1);			
				_s.item_do.setX(_s.item_do.getGlobalX());
				_s.item_do.setY(_s.item_do.getGlobalY());
				
				if(_s.itemHolder_do.contains(_s.imteHolder_do)) _s.itemHolder_do.removeChild(_s.item_do);
				_s.main_do.addChild(_s.item_do);
				_s.main_do.addChild(_s.zoomBtn_do);

			
				FWDAnimation.to(_s.itemBk_do, .4, {alpha:0});
				FWDAnimation.to(_s.itemBorder_do, .4, {alpha:0});
				if(_s.showZoomButton){
					FWDAnimation.killTweensOf(_s.zoomBtn_do);
					FWDAnimation.to(_s.zoomBtn_do, .8, {x:_s.stageW - _s.zoomBtn_do.w - 10, y:10, alpha:1, ease:Expo.easeInOut});
				}
				FWDAnimation.to(_s.item_do, .8, { x:finalX, y:finalY, w:finalW, h:finalH, ease:Expo.easeInOut});

				if(_s.hasCaption && _s.caption){
					_s.caption_do.hide(true);
					_s.caption2_do.hide(true, true, false, true);
			    } 
				if(_s.thumbs_do) _s.thumbs_do.hide(true);
				_s.maxComplete_to = setTimeout(_s.maxComplete, 801);
			}
		};
		
		_s.minComplete = function(){
			_s.isAnimMaxOrMin = false;
			_s.isTweening_bl = false;
			_s.itemHolder_do.addChild(_s.item_do);
			_s.resizeItem();
			_s.tm.resume();

			if(_s.hasCaption && _s.caption){
				_s.caption_do.show(true);
			} 
			
			_s.main_do.addChild(_s.zoomBtn_do);
			if(_s.useDeepLinking) _s.dlChangeHandler();
		};
		
		_s.maxComplete = function(){
			_s.isAnimMaxOrMin = false;
			_s.setBtnsInvisible(true);
			_s.addMaxItemScroll();
			if(_s.hasCaption && _s.caption){
				 _s.caption_do.hide(false);
			}
		};

		_s.setBtnsInvisible = function(applyToMainHolder){
			if(_s.showCloseButton) _s.closeBtn_do.setVisible(false);
			if(_s.showNextAndPrevBtns){
				_s.nextBtn_do.setVisible(false);
				_s.prevBtn_do.setVisible(false);
			}
			if(_s.tempThumbsShowed) _s.thumbs_do.setVisible(false);
			if(_s.showFullscreenButton) _s.fsBtn_do.setVisible(false);
			if(_s.showSlideShowButton)  _s.slideShowBtn_do.setVisible(false);
			if(_s.showCounter) _s.mcnt_do.setVisible(false);
			if(_s.showShareButton) _s.shareBtn_do.setVisible(false);
			if(_s.addSlideShowAnimation_bl) _s.slp_do.setVisible(false);
			if(_s.caption){
				//_s.caption_do.setVisible(false);
				_s.caption2_do.setVisible(false);
			}
			
			if(applyToMainHolder) _s.itemHld_do.setVisible(false);
		};
		
		_s.setBtnsVisible = function(applyToMainHolder){
			if(_s.showCloseButton) _s.closeBtn_do.setVisible(true);
			if(_s.showNextAndPrevBtns){
				_s.nextBtn_do.setVisible(true);
				_s.prevBtn_do.setVisible(true);
			}
			if(_s.tempThumbsShowed) _s.thumbs_do.setVisible(true);
			if(_s.showFullscreenButton) _s.fsBtn_do.setVisible(true);
			if(_s.showCounter) _s.mcnt_do.setVisible(true);
			if(_s.showSlideShowButton)  _s.slideShowBtn_do.setVisible(true);
			if(_s.showShareButton) _s.shareBtn_do.setVisible(true);
			if(_s.addSlideShowAnimation_bl) _s.slp_do.setVisible(true);
			if(_s.caption){
				//_s.caption_do.setVisible(true);
				_s.caption2_do.setVisible(true);
			}
			if(applyToMainHolder) _s.itemHld_do.setVisible(true);
		};
	

		/**
	  	 * Pan image on touch based devices support.
	     */
		_s.addMaxItemScroll = function(){
			window.addEventListener("mousedown", _s.onMaxScrollStart);
			window.addEventListener("mouseup", _s.onMaxScrollEnd);
			window.addEventListener("touchstart", _s.onMaxScrollStart);
			window.addEventListener("touchend", _s.onMaxScrollEnd);
		};
		
		_s.removeMaxItemScroll = function(){
			window.removeEventListener("mousedown", _s.onMaxScrollStart);
			window.removeEventListener("mouseup", _s.onMaxScrollEnd);
			window.removeEventListener("mousemove", _s.onMaxScrollMove);
			window.removeEventListener("touchstart", _s.onMaxScrollStart);
			window.removeEventListener("touchend", _s.onMaxScrollEnd);	
			window.removeEventListener("touchmove", _s.onMaxScrollMove);
			if(_s.hasOneItem) _s.item_do.style().cursor = _s.defaultC;
			_s.isDragging = false;
			cancelAnimationFrame(_s.updateMax_af);
		};
		
		_s.onMaxScrollStart =  function(e){
			if(e.button && e.button == 2) return;
			var vc = FWDRLUtils.getViewportMouseCoordinates(e);	
			
			window.addEventListener("mousemove", _s.onMaxScrollMove);
			window.addEventListener("touchmove", _s.onMaxScrollMove, { passive:false});
			
			_s.isDragging = true;	
			_s.maxItemX = _s.lastFinalX = _s.item_do.x;
			_s.maxItemY = _s.lastFinalY = _s.item_do.y;
			_s.lastPresedX = vc.screenX;
			_s.lastPresedY = vc.screenY;
			_s.item_do.style().cursor = _s.grabC;
			
			_s.startToUpdateDrag();
		};
		
		_s.onMaxScrollEnd = function(e){
		
			window.removeEventListener("mousemove", _s.onMaxScrollMove);
			window.removeEventListener("touchmove", _s.onMaxScrollMove);
		
			_s.item_do.style().cursor = _s.handC;
			_s.isDragging = false;
		};
		
		_s.onMaxScrollMove = function(e){
			if(e.preventDefault) e.preventDefault();
			var vc = FWDRLUtils.getViewportMouseCoordinates(e);	
	
			var toAddX = vc.screenX - _s.lastPresedX;
			_s.maxItemX += toAddX;
			_s.maxItemX =  Math.round(_s.maxItemX);
			_s.lastPresedX = vc.screenX;
			_s.item_do.setX(_s.maxItemX);
			
			var toAddY = vc.screenY - _s.lastPresedY;
			_s.maxItemY += toAddY;
			_s.maxItemY =  Math.round(_s.maxItemY);
			_s.lastPresedY = vc.screenY;
			_s.item_do.setY(_s.maxItemY);
		};

		_s.stopToUpdateDrag = function(){
			cancelAnimationFrame(_s.updateMax_af);
		}

		_s.startToUpdateDrag = function(){
			_s.stopToUpdateDrag();
			_s.updateMax();
		}
		
		_s.updateMax = function(){
			
			_s.updateMax_af = requestAnimationFrame(_s.updateMax);

			if(_s.isDragging){
				_s.vx = _s.maxItemX - _s.lastFinalX;
				_s.lastFinalX = _s.maxItemX;

				_s.vy = _s.maxItemY - _s.lastFinalY;
				_s.lastFinalY = _s.maxItemY;	

				var h = Math.sqrt(_s.vx*_s.vx + _s.vy*_s.vy);
				if(h < 20){
					_s.vx = _s.vy = 0;
				}
			}else{
				_s.vx *= _s.friction;		
				_s.maxItemX += _s.vx;
				if(_s.stageW <= _s.item_do.w){
					if(_s.maxItemX >= 0){
						_s.vx2 = (0 - _s.maxItemX) * .3;
						_s.vx *= _s.friction;
						_s.maxItemX += _s.vx2;
					}else if(_s.maxItemX <= _s.stageW - _s.item_do.w){
						_s.vx2 = (_s.stageW - _s.item_do.w - _s.maxItemX) * .3;
						_s.vx *= _s.friction;
						_s.maxItemX += _s.vx2;
					}
				}else{
					_s.vx2 =((_s.stageW - _s.item_do.w)/2 - _s.maxItemX) * .3;
					_s.vx *= _s.friction;
					_s.maxItemX += _s.vx2;
				}

				_s.vy *= _s.friction;		
				_s.maxItemY += _s.vy;
				if(_s.stageH <= _s.item_do.h){
					if(_s.maxItemY >= 0){
						_s.vy2 = (0 - _s.maxItemY) * .3;
						_s.vy *= _s.friction;
						_s.maxItemY += _s.vy2;
					}else if(_s.maxItemY <= _s.stageH - _s.item_do.h){
						_s.vy2 = (_s.stageH - _s.item_do.h - _s.maxItemY) * .3;
						_s.vy *= _s.friction;
						_s.maxItemY += _s.vy2;
					}
				}else{
					_s.vy2 =((_s.stageH - _s.item_do.h)/2 - _s.maxItemY) * .3;
					_s.vy *= _s.friction;
					_s.maxItemY += _s.vy2;
				}

				_s.maxItemX = parseFloat(_s.maxItemX.toFixed(2));
				_s.maxItemY = parseFloat(_s.maxItemY.toFixed(2));
			
				if(_s.prevMaxItemX == _s.maxItemX && _s.prevMaxItemY == _s.maxItemY){
					_s.stopToUpdateDrag();
					_s.maxItemX = Math.round(_s.maxItemX);
					_s.maxItemY = Math.round(_s.maxItemY);
				}
				_s.item_do.setX(_s.maxItemX);
				_s.item_do.setY(_s.maxItemY);
				_s.prevMaxItemX = _s.maxItemX;
				_s.prevMaxItemY = _s.maxItemY;
			}
		};


		/**
	  	 * Add double click support max/min.
	     */
		_s.addDbl = function(){
			if(!_s.useDoubleClick) return
			if(_s.isMbl){
				window.addEventListener("touchstart", _s.firstDown);
			}else{
				window.addEventListener("mousedown", _s.firstDown);
			}
		};

		_s.removeDbl = function(){
			if(_s.isMbl){
				window.removeEventListener("touchstart", _s.firstDown);
				window.removeEventListener("touchstart", _s.onSecondDown);
			}else{
				window.removeEventListener("mousedown", _s.firstDown);
				window.removeEventListener("mousedown", _s.onSecondDown);
			}
			clearTimeout(_s.secondTap_to);
		};
		
		_s.firstDown = function(e){
			if(e.btn == 2 || _s.isAnim || _s.isLoading || !_s.isShowed || _s.type != FWDRL.IMAGE) return;

			var vc = FWDRLUtils.getViewportMouseCoordinates(e);
			_s.firstTapX = vc.screenX - _s.main_do.getGlobalX();
			_s.firstTapY = vc.screenY - _s.main_do.getGlobalY();

			if(FWDRLUtils.hitTest(_s.share_do.screen, _s.hider.globalX, _s.hider.globalY)) return;
			
			if(_s.isMbl){
				window.addEventListener("touchstart", _s.onSecondDown);
				window.removeEventListener("touchstart", _s.firstDown);
			}else{
				window.addEventListener("mousedown", _s.onSecondDown);
				window.removeEventListener("mousedown", _s.firstDown);
			}
		
			clearTimeout(_s.secondTap_to);
			_s.secondTap_to = setTimeout(_s.doubleTapExpired, 500);
		};
		
		_s.doubleTapExpired = function(){
			clearTimeout(_s.secondTap_to);
			if(_s.isMbl){
				window.removeEventListener("touchstart", _s.onSecondDown);
				window.addEventListener("touchstart", _s.firstDown);
			}else{
				window.removeEventListener("mousedown", _s.onSecondDown);
				window.addEventListener("mousedown", _s.firstDown);
			}
			
		};
		
		_s.onSecondDown = function(e){
			var vc = FWDRLUtils.getViewportMouseCoordinates(e);
			var dx;
			var dy;
			
			if(e.touches && e.touches.length != 1) return;
			dx = Math.abs((vc.screenX - _s.main_do.getGlobalX()) - _s.firstTapX);   
			dy = Math.abs((vc.screenY - _s.main_do.getGlobalY()) - _s.firstTapY); 
			if(dx > 10 || dy > 10) return;
			if(FWDRLUtils.hitTest(_s.item_do.screen, _s.hider.globalX, _s.hider.globalY)){
				_s.maxOrMin();
				return;
			}
		};


		/**
	  	 * Add drag support.
	     */
	     _s.addDrag = function(remove){
	     	if(!_s.useDrag) return;
	     	_s.itemHld_do.screen.addEventListener("mousedown", _s.onDragStart);
			_s.itemHld_do.screen.addEventListener("mouseup", _s.onDragEnd);
			_s.itemHld_do.screen.addEventListener("touchstart", _s.onDragStart, {passive:false});
			_s.itemHld_do.screen.addEventListener("touchend", _s.onDragEnd);
			_s.itemHld_do.style().cursor = _s.handC;
			_s.item_do.style().cursor = _s.handC;
	     }

	     _s.removeDrag = function(){
	     	_s.itemHld_do.screen.removeEventListener("mousedown", _s.onDragStart);
			_s.itemHld_do.screen.removeEventListener("mouseup", _s.onDragEnd);
			_s.itemHld_do.screen.removeEventListener("touchstart", _s.onDragStart);
			_s.itemHld_do.screen.removeEventListener("touchend", _s.onDragEnd);
			_s.itemHld_do.style().cursor = _s.defaultC;
			if(_s.item_do)_s.item_do.style().cursor = _s.defaultC;
	     }

	    _s.stopToDragAF = function(){
			cancelAnimationFrame(_s.updateDrag_af);
		}

		_s.startToDragAF = function(){
			_s.stopToDragAF();
			_s.updateDragAf();
		}

		_s.updateDragAf = function(){
		
			_s.updateDrag_af = requestAnimationFrame(_s.updateDragAf);
			_s.itemDragHld_do.setX(_s.itemDragHld_do.x);
		}

	     _s.onDragStart = function(e){
	  		if(_s.videoType == "360DegreeVideo" && _s.videoStarted) return;
	     	if((e.button && e.button == 2 ) || (_s.evp && _s.evp.isFullScreen_bl)) return;
	     	var vmc = FWDRLUtils.getViewportMouseCoordinates(e);	
	     
	     	if(event.target.nodeName.toLowerCase() == 'input'){
	     		return;
	     	}
	     
	     	if(_s.evp && _s.evp.controller_do
	     	&& (FWDRLUtils.hitTest(_s.evp.controller_do.mainHolder_do.screen, vmc.screenX, vmc.screenY)
	     	|| FWDRLUtils.hitTest(_s.evp.largePlayButton_do.screen, vmc.screenX, vmc.screenY)
	     	|| (_s.evp.apt && FWDRLUtils.hitTest(_s.evp.apt.screen, vmc.screenX, vmc.screenY)))
	     	|| _s.isEvpFSDL){
				_s.hider.reset();
				if(e.preventDefault) e.preventDefault();
				return;
			}

	     	_s.itemHld_do.style().cursor = _s.grabC;
	     	_s.item_do.style().cursor = _s.grabC;
	     	_s.updateEVPCursor(_s.grabC);

	     	if(_s.isLoading || _s.isAnim || !_s.isShowed) return;
	     	var vc = FWDRLUtils.getViewportMouseCoordinates(e);
	     	_s.lastPresedX = _s.lastPresedX2 = vc.screenX;
	     	_s.x1 = _s.itemDragHld_do.x;
	     	_s.y1 = _s.itemDragHld_do.y;
	     	_s.dir = '';
			
			_s.startToDragAF();
	     	window.addEventListener("mousemove", _s.onDragMove);
			window.addEventListener("touchmove", _s.onDragMove, {capture: false, passive:false});
			window.addEventListener("mouseup", _s.onDragEnd);
			window.addEventListener("touchend", _s.onDragEnd);
	     }

	     _s.onDragMove = function(e){
	     	if(e && e.preventDefault) e.preventDefault();
	     	
	     	_s.setGrabHand();
	     	FWDAnimation.killTweensOf(_s.itemDragHld_do);
	     	_s.vc = FWDRLUtils.getViewportMouseCoordinates(e);	
			_s.toAddX = _s.vc.screenX - _s.lastPresedX;
			_s.toAddX2 = _s.vc.screenX - _s.lastPresedX2;
			var l = 120;
			if(_s.isMbl) l = 50;
		
			_s.lastPresedX = _s.vc.screenX;
			_s.x2 = _s.itemDragHld_do.x;
	     	_s.y2 = _s.itemDragHld_do.y;
	     	var dist = parseInt(Math.sqrt(Math.pow((_s.x2 - _s.x1), 2) + Math.pow((_s.y2 - _s.y1), 2)), 10);
		    var x = _s.itemDragHld_do.x + (_s.toAddX/1.5 * (1 - (dist / l)));
		    _s.itemDragHld_do.x = x;
       		
			_s.isDragging = true;	

			if(dist > 5){
				_s.tm.pause();
				_s.hideBtnsOnDrag(true);
				_s.isSetBtnsHideOnDrag = true;
			}
		
			if(dist < 10) return;

			if(_s.toAddX2 < 0 && dist > l/2){
				_s.dir = 'right';
			}else if(_s.toAddX2 > 0 && dist > l/2){
				_s.dir = 'left';
			}
	     }

	     _s.onDragEnd =  function(e){

	     	_s.isDragging = false;	
	     	if(!FWDAnimation.isTweening(_s.itemDragHld_do)){
	     		FWDAnimation.to(_s.itemDragHld_do, .8, {x:0, ease:Expo.easeInOut});
	     	}
	     	if(!_s.isMax && _s.isSetBtnsHideOnDrag){
	     		_s.tm.resume();
	     		_s.slp_do.isSlideShowRun = true;
	     	} 

	     	_s.isSetBtnsHideOnDrag = false;
	     	_s.hideBtnsOnDrag(false);
	     
			_s.itemHld_do.style().cursor = _s.handC;
			_s.item_do.style().cursor = _s.handC;
			_s.updateEVPCursor(_s.handC);
	     	_s.removeGrabHand();
	     	_s.stopToDragAF();
	     	
	     	window.removeEventListener("mousemove", _s.onDragMove);
			window.removeEventListener("touchmove", _s.onDragMove);
			window.removeEventListener("mouseup", _s.onDragEnd);
			window.removeEventListener("touchend", _s.onDragEnd);
		

	     	if(!_s.isEvpFSDL){
		     	if(_s.dir == 'left'){
		     		_s.gotoPrevItem();
		     	}else if(_s.dir == 'right'){
		     		_s.gotoNextItem();
		     	}
	     	}	
	     	_s.dir = '';
	     }

	    _s.getDescOutH = function(w){
	    	_s.captionDumy_do.setWidth(_s.finalW);
			if(!w){
				_s.desc2H = _s.captionDumy_do.getHeight();
				var containerWidth = _s.stageW - (_s.buttonW * 2) - ((_s.tempBtnsOffsetIn + _s.tempBtnsOffsetOut) *  2) - (_s.itemBorderSize * 2);
				var containerHeight = _s.stageH - _s.desc2H - _s.itemOffsetHeight - (_s.itemBorderSize * 2)

				if(_s.tempThumbsShowed){
					containerHeight -= _s.thumbnailH + _s.spaceBetweenThumbnailsAndItem;
				}
				
				var scaleX = containerWidth/_s.originalW;
				var scaleY = containerHeight/_s.originalH;
				var totalScale = 0;
			
				if(scaleX <= scaleY){
					totalScale = scaleX;
				}else if(scaleX >= scaleY){
					totalScale = scaleY;
				}
				
				if(scaleX >= 1 && scaleY >=1) totalScale = 1;
				
				_s.finalW = Math.round((_s.originalW * totalScale)) + (_s.itemBorderSize * 2);
			}

			if(w){
				_s.captionDumy_do.setWidth(w);
			} 

			if(_s.caption_do){
				_s.caption_do.resizeAndPosition(_s.finalW - (_s.itemBorderSize * 2));	
				_s.caption2_do.resizeAndPosition(_s.finalW);	
			}

			_s.captionDumy_do.setWidth(_s.finalW);
			_s.desc2H = _s.captionDumy_do.getHeight();

			if(w){
				_s.resizeItem(true, false, false)
			}
	    }

	    _s.hideBtnsOnDrag = function(hide){
	    	if(_s.isSetBtnsHideOnDrag || !_s.hideButtonsOnDrag) return;
	    	var test = _s.tempBtnsAlign == 'in' || _s.tempBtnsAlign == 'out' || _s.hSmall;
	    	if(!test) return;
	    
	    	var cntO = 1;
	    	var dl = 0;
	    	if(hide){
	    		cntO = .3;
	    		dl = .4;
	    	} 
	    	for(var i=0; i<_s.buttons_ar.length; i++){
	    		var btn = _s.buttons_ar[i];
	    		if(hide){
	    			btn.setHideDrag(true);
	    		}else{
	    			btn.setHideDrag(false);
	    		}
	    	}


	    	if(_s.showCounter){	
	    		FWDAnimation.killTweensOf(_s.cnt_do);
	    		FWDAnimation.to(_s.cnt_do, .8, {alpha:cntO, delay:dl});
	    	}

	    	if(_s.showNextAndPrevBtns){
	    		_s.prevBtn_do.setHideDrag(hide);
	    	}
	    }
		
		/**
	  	 * Resize the lighbox item that holds the media.
	     */
		_s.resizeItem = function(onlySetData, anim, desc2){	
			_s.hSmall =_s.wSmall = false;
			
			var tempCaptionPosition = _s.captionPosition;
			var tempItemOffsetHeight = _s.itemOffsetHeight;

			var tempSpaceBetweenThumbnailsAndItem = _s.spaceBetweenThumbnailsAndItem;
			_s.tempThumbnailsOffsetBottom = _s.thumbnailsOffsetBottom;
			_s.tempThumbsShowed = _s.showThumbnails;

			_s.limitH = 650;
			_s.tempBtnsAlign = _s.buttonsAlignment;

			if(_s.limitH >= _s.stageH){
				_s.hSmall = true;
				if(_s.captionPosition == 'bottomout'){
					tempCaptionPosition = 'bottomin';
				}
				_s.tempBtnsAlign = 'top';
			}

			if(desc2 || tempCaptionPosition != 'bottomout' || !_s.hasCaption) _s.desc2H = 0;
		
			var offsetW = (_s.buttonW * 2) + ((_s.tempBtnsOffsetIn + _s.tempBtnsOffsetOut) * 2);
			var offsetTxtY = 0;
			if(_s.limitH >= _s.stageW){
				offsetW = 0;
				_s.wSmall = true;
				_s.tempBtnsAlign = 'top';	
			}

			_s.tempBtnsOffsetOut = _s.buttonsOffsetOut;
			_s.tempBtnsOffsetIn = _s.buttonsOffsetIn;
			if(_s.stageH <= _s.limitH || _s.stageW <= _s.limitH){
				if(_s.buttonsOffsetOut > 5){
					_s.tempBtnsOffsetIn = 5;
					_s.tempBtnsOffsetOut = 5;
					if(_s.buttonsAlignment == 'top') tempItemOffsetHeight -= 5;
				} 
			}
	
			if(_s.tempBtnsAlign == 'top'){
				tempItemOffsetHeight = _s.itemOffsetHeightButtonsTop + 5;
				//offsetTxtY = 10;
			}

			if(_s.wSmall){
				_s.tempThumbnailsOffsetBottom = 5;
				tempItemOffsetHeight -= 10;
			} 

			if(_s.stageH < 400){
				_s.tempThumbsShowed = false;
				if(_s.thumbs_do){
					_s.thumbs_do.setVisible(false);
					_s.thumbs_do.mainHld_do.setVisible(false);
				} 
			}else{
				if(_s.thumbs_do){
					_s.thumbs_do.setVisible(true);
					_s.thumbs_do.mainHld_do.setVisible(true);
				} 
			}

			if(_s.hSmall){
				tempItemOffsetHeight = offsetTxtY = 0;
			}else if(tempCaptionPosition == 'bottomout' && _s.tempThumbsShowed){
				offsetTxtY = 10;
			}

			if(_s.mcnt_do){
				if(_s.tempBtnsAlign == 'in'){
					_s.mcnt_do.screen.className = _s.cls + '-counter in';
				}else{
					_s.mcnt_do.screen.className = _s.cls + '-counter';
				}
			}

			if(_s.tempBtnsAlign == 'top'){
				offsetW = 0;
			}

			var containerWidth = _s.stageW - offsetW - (_s.itemBorderSize * 2);
			var containerHeight = _s.stageH - _s.desc2H - tempItemOffsetHeight * 2 - (_s.itemBorderSize * 2) + offsetTxtY;
			var offsetY = 0;
			
			if(_s.tempThumbsShowed){
				if(tempCaptionPosition != 'bottomout' && !_s.hSmall){
					tempSpaceBetweenThumbnailsAndItem = 0;
				}

				if(_s.hSmall){
					_s.tempThumbnailsOffsetBottom = 0;
				}
				_s.thumbs_do.show();
				
				_s.thumbs_do.thumbnailH = _s.thumbnailH;
				_s.thumbs_do.stageH = _s.thumbnailH + _s.tempThumbnailsOffsetBottom;
				containerHeight -= _s.thumbnailH + tempSpaceBetweenThumbnailsAndItem + _s.tempThumbnailsOffsetBottom;

				if(_s.hSmall){
					offsetY = Math.round((_s.thumbnailH + tempSpaceBetweenThumbnailsAndItem + _s.tempThumbnailsOffsetBottom)/2);
				}else{
					offsetY = Math.round((_s.thumbnailH + tempSpaceBetweenThumbnailsAndItem + _s.tempThumbnailsOffsetBottom)/2  - offsetTxtY/2);
				}
			}else{
				if(!_s.hSmall){
					containerHeight -= tempSpaceBetweenThumbnailsAndItem + offsetTxtY;
				}
			}

			var scaleX = containerWidth/_s.originalW;
			var scaleY = containerHeight/_s.originalH;
			var totalScale = 0;
			
			if(scaleX <= scaleY){
				totalScale = scaleX;
			}else if(scaleX >= scaleY){
				totalScale = scaleY;
			}
			
			if(scaleX >= 1 && scaleY >=1) totalScale = 1;
			
			_s.finalW = Math.round((_s.originalW * totalScale)) + (_s.itemBorderSize * 2);
			_s.finalH = Math.round((_s.originalH * totalScale)) + (_s.itemBorderSize * 2);
			
			if(_s.finalW < _s.itemBorderSize * 2) _s.finalW = _s.itemBorderSize * 2;
			if(_s.finalH < _s.itemBorderSize * 2) _s.finalH = _s.itemBorderSize * 2;
			
			_s.finalX = Math.round((_s.stageW  - _s.finalW)/2);
			_s.finalY = Math.round((_s.stageH - _s.finalH)/2 - _s.desc2H/2 - offsetY);

			if(desc2 && tempCaptionPosition == 'bottomout'){
				_s.getDescOutH();
			}

			_s.positionPreloader();
			
			if(onlySetData || !_s.item_do) return;

			if(_s.finalH < 300 && _s.stageH > 550){
				tempCaptionPosition = 'bottomout';
			}

			if(tempCaptionPosition == 'bottomout'){
				if(_s.finalW != _s.captionDumy_do.getWidth()){
					for(var i=0; i<4; i++){
						_s.getDescOutH(_s.finalW);
					}
				}
				_s.caption_do.style().display = 'none';
				_s.caption2_do.style().display = 'block';
			}else{
				_s.caption_do.style().display = 'block';
				_s.caption2_do.style().display = 'none';
				if(_s.finalH < 220 && !_s.showCaptionOnSmallScreens){
					_s.caption_do.style().display = 'none';
				}
			}

			if(!_s.hasCaption){
				_s.caption_do.style().display = 'none';
				_s.caption2_do.style().display = 'none';
			}

			if(_s.isEvpFS){
				_s.finalX = _s.finalY = 0;
				_s.finalW = _s.stageW;
				_s.finalH = _s.stageH;
			}


			FWDAnimation.killTweensOf(_s.itemHld_do);
			FWDAnimation.killTweensOf(_s.itemBk_do);
			FWDAnimation.killTweensOf(_s.itemBorder_do);
			
			if(anim){
				FWDAnimation.to(_s.itemHld_do, .8, {
					x:_s.finalX, 
					y:_s.finalY, 
					w:_s.finalW, 
					h:_s.finalH,
					ease:Expo.easeInOut});
				
				FWDAnimation.to(_s.itemBk_do, .8, {
					x:_s.itemBorderSize, 
					y:_s.itemBorderSize, 
					w:_s.finalW - (_s.itemBorderSize * 2) - 1, 
					h:_s.finalH - (_s.itemBorderSize * 2) - 1, 
					ease:Expo.easeInOut});
				
				FWDAnimation.to(_s.itemBorder_do, .8, {
					x:0, 
					y:0, 
					w:_s.finalW, 
					h:_s.finalH, 
					ease:Expo.easeInOut});
				
				if(_s.caption_do){
					FWDAnimation.to(_s.caption_do, .8, {
						finalW:_s.finalW - (_s.itemBorderSize * 2),
						onUpdate:function(){_s.caption_do.resizeAndPosition(), _s.caption2_do.resizeAndPosition()},
						ease:Expo.easeInOut});
					_s.caption2_do.setWH(_s.finalW, _s.finalH)
				}
				
			}else{

				if(_s.caption_do){
					_s.caption_do.resizeAndPosition(_s.finalW - (_s.itemBorderSize * 2));	
					_s.caption2_do.resizeAndPosition(_s.finalW);	
				}

				_s.itemHld_do.setX(_s.finalX);
				_s.itemHld_do.setY(_s.finalY);
				_s.itemHld_do.setWidth(_s.finalW);
				_s.itemHld_do.setHeight(_s.finalH);
				
				_s.itemBk_do.setX(_s.itemBorderSize);
				_s.itemBk_do.setY(_s.itemBorderSize);
				_s.itemBk_do.setWidth(_s.finalW - (_s.itemBorderSize * 2) - 1);
				_s.itemBk_do.setHeight(_s.finalH - (_s.itemBorderSize * 2) - 1);
				
				_s.itemBorder_do.setX(0);
				_s.itemBorder_do.setY(0);
				_s.itemBorder_do.setWidth(_s.finalW);
				_s.itemBorder_do.setHeight(_s.finalH);
				if(_s.itemBorder_do.alpha != 1) _s.itemBorder_do.setAlpha(1);
			}
			
			FWDAnimation.killTweensOf(_s.item_do);
			
			cancelAnimationFrame(_s.updateMax_af);
			if(_s.isMax){
				_s.item_do.setX(parseInt((_s.stageW - (_s.originalW * _s.maxZoom))/2));
				_s.item_do.setY(parseInt((_s.stageH - (_s.originalH * _s.maxZoom))/2));
				_s.item_do.setWidth(Math.max(0, Math.round(_s.originalW * _s.maxZoom)));
				_s.item_do.setHeight(Math.max(0, Math.round(_s.originalH * _s.maxZoom)));
			}else{
				if(anim){
					FWDAnimation.to(_s.item_do, .8,{
						x:_s.itemBorderSize, 
						y:_s.itemBorderSize,
						w:_s.finalW - (_s.itemBorderSize * 2),
						h:_s.finalH - (_s.itemBorderSize * 2), 
						ease:Expo.easeInOut});
					
				}else{
					_s.item_do.setAlpha(1);
					_s.item_do.setX(_s.itemBorderSize);
					_s.item_do.setY(_s.itemBorderSize);
					_s.item_do.setWidth(_s.finalW - (_s.itemBorderSize * 2));
					_s.item_do.setHeight(_s.finalH - (_s.itemBorderSize * 2));
				}
			}

			if(_s.evp && _s.item_do == _s.vidHld_do){	
				if(_s.isEvpFS){
					if(_s.thumbs_do) _s.thumbs_do.setVisible(false)
				}
				_s.vidHld_do.setX(_s.itemBorderSize);
				_s.vidHld_do.style().left = 0;
				_s.evp.resizeHandler();
			}	
		};
		
		
		/**
	  	 * Show / go to items.
	     */
		_s.showItemFirstTime = function(){
			_s.isFirstItemShowed = true;
			_s.showCationFirstTime = true;
			
			_s.resizeItem(true, false, true);
			_s.resizeItem(false, false, false);
		
			_s.itemHld_do.setX(_s.stageW/2);
			_s.itemHld_do.setY(_s.stageH/2);
			_s.itemHld_do.setWidth(0);
			_s.itemHld_do.setHeight(0);
			_s.itemBk_do.setX(0);
			_s.itemBk_do.setY(0);
			_s.itemBk_do.setWidth(0);
			_s.itemBk_do.setHeight(0);

			_s.item_do.setAlpha(0);
			_s.item_do.setX(-_s.finalW/2 + _s.itemBorderSize);
			_s.item_do.setY(-_s.finalH/2 + _s.itemBorderSize);
			FWDAnimation.to(_s.item_do, .8, {alpha:1, delay:.8, ease:Quint.easeOut});
			FWDAnimation.to(_s.item_do, .8, {x:_s.itemBorderSize, y:_s.itemBorderSize, ease:Expo.easeInOut});
			_s.startAnim(1601);
			
			FWDAnimation.to(_s.itemHld_do, .8, {x:_s.finalX, y:_s.finalY, w:_s.finalW, h:_s.finalH, ease:Expo.easeInOut});
			_s.itemBorder_do.setAlpha(0);
			FWDAnimation.to(_s.itemBorder_do, .8, {alpha:1, x:0, y:0, w:_s.finalW, h:_s.finalH, ease:Expo.easeInOut});
			
			FWDAnimation.to(_s.itemBk_do, .8, {
				x:_s.itemBorderSize, 
				y:_s.itemBorderSize,
				w:_s.finalW - (_s.itemBorderSize * 2), 
				h:_s.finalH - (_s.itemBorderSize * 2),
				ease:Expo.easeInOut
				});
			
			_s.hider.start();
			_s.positionBtns(false);
			_s.addKeyboard();
			_s.addDrag();
			_s.addDbl();
			_s.hideBtns();
			_s.setupThumbnails(0);

			_s.caption2_do.resizeAndPosition();
			_s.caption_do.hide(false, true, false);
			_s.caption2_do.hide(false, true, false);

			setTimeout(function(){
				if(_s.caption2_do) _s.caption2_do.show(true);
			}, 51);

			_s.isFirstItemAfterShowed = true;
			setTimeout(function(){
				_s.showCationFirstTime = false;
				if(_s.slideShowAutoPlay) _s.tm.start();
				_s.dispatchEvent(FWDRL.SHOW_COMPLETE, {guId:_s.guId, mId:_s.mId});
				_s.showFirstTimeDone = true;
			}, 800);
		};
		
		_s.gotoToItem = function(mId){
			if(!_s.isReady || !_s.isFirstItemShowed || _s.isAnim || _s.isLoading) return;
			_s.mId  = mId;
		
			if(_s.useDeepLinking){
				_s.setDL(true);
			}else{
				_s.initItem();
			}
		};
		
		_s.gotoNextItem = function(){
			if(!_s.isReady || !_s.isFirstItemShowed || _s.isAnim || _s.isLoading) return;
			_s.mId ++;
			if(_s.mId < 0){
				_s.mId = _s.totalItems - 1;
			}else if(_s.mId > _s.totalItems - 1){
				_s.mId = 0;
			}
			
			if(_s.useDeepLinking){
				_s.setDL(true);
			}else{
				_s.initItem(true);
			}
		};
		
		_s.gotoPrevItem = function(){
			if(!_s.isReady || !_s.isFirstItemShowed || _s.isAnim || _s.isLoading) return;
			_s.mId --;
			if(_s.mId < 0){
				_s.mId = _s.totalItems - 1;
			}else if(_s.mId > _s.totalItems - 1){
				_s.mId = 0;
			}
			
			if(_s.useDeepLinking){
				_s.setDL(true);
			}else{
				_s.initItem();
			}
		};

		_s.removeItems = function(index){
			var child;
			var inChild;
			while(_s.itemHolder_do.getNumChildren() > index){
				child = _s.itemHolder_do.getChildAt(0);
				FWDAnimation.killTweensOf(child);
				_s.itemHolder_do.removeChild(child);
				child.destroy();
			};
			child = null;
		};
		
	
		/**
	  	 * Add/remove keyboard support.
	     */
		_s.addKeyboard = function(){
			if(!_s.useKeyboard) return; 
			document.addEventListener("keydown",  _s.onKeyDownHandler);	
			document.addEventListener("keyup",  _s.onKeyUpHandler);	
		};
		
		_s.removeKeyboard = function(){
			document.removeEventListener("keydown",  _s.onKeyDownHandler);	
			document.removeEventListener("keyup",  _s.onKeyUpHandler);	
		};
		
		_s.onKeyDownHandler = function(e){
			if(_s.isDragging || _s.isLoading || _s.isAnim) return;
			document.removeEventListener("keydown",  _s.onKeyDownHandler);	
			if(e.keyCode == 27 && !_s.useAsModal){
				if(_s.isFullScreen){
					_s.goNormalScreen();
					return;
				}
				_s.hide();
				if(e.preventDefault) e.preventDefault();
			}

			if(_s.evp && _s.evp.isPlaying_bl) return;

			if(e.keyCode == 39){	
				_s.gotoNextItem();
				if(e.preventDefault) e.preventDefault();
				return false;
			}else if(e.keyCode == 37){
				_s.gotoPrevItem();
				if(e.preventDefault) e.preventDefault();
				return false;
			}
		};
		
		_s.onKeyUpHandler = function(e){
			document.addEventListener("keydown",  _s.onKeyDownHandler);	
		};


		/**
	  	 * Fullscreen functionality.
	     */
		_s.goFullScreen = function(){
			if(_s.isAnim || _s.isAnimMaxOrMin || _s.isLoading) return;
			if(document.addEventListener){
				document.addEventListener("fullscreenchange", _s.onFSChange);
				document.addEventListener("mozfullscreenchange", _s.onFSChange);
				document.addEventListener("webkitfullscreenchange", _s.onFSChange);
				document.addEventListener("MSFullscreenChange", _s.onFSChange);
			}
			
			if(_s._dc.requestFullScreen) {
				_s.main_do.screen.requestFullScreen();
			}else if(_s._dc.mozRequestFullScreen){ 
				_s.main_do.screen.mozRequestFullScreen();
			}else if(_s._dc.webkitRequestFullScreen){
				_s.main_do.screen.webkitRequestFullScreen();
			}else if(_s._dc.msRequestFullscreen){
				_s.main_do.screen.msRequestFullscreen();
			}
			
			_s.isFullScreen = true;	
			_s.dcelState = _s._dc.style.overflow;
			_s._dc.style.overflow = "hidden";
			_s.fsBtn_do.setButtonState(0);
			//FWDRLUtils.getScrollOffsets()
			_s.fsX = _s.so.x;
			_s.fsY = _s.so.y;
			
			if(_s.isMbl) window.addEventListener("touchmove", _s.disableFullScreenOnMobileHandler, {passive: false});
			_s.resizeHandler();
			_s.dispatchEvent(FWDRL.FULLSCREEN);
		};

		_s.onFSChange = function(e){
			if(!(document.fullScreen || document.msFullscreenElement  || document.mozFullScreen || document.webkitIsFullScreen || document.msieFullScreen)){
				_s.fsBtn_do.setButtonState(0);
				_s.addNS();
				_s.isFullScreen = false;
			}
		};

		_s.disableFullScreenOnMobileHandler = function(e){
			if(e.preventDefault) e.preventDefault();
		};

		_s.goNormalScreen = function(){	
			if(_s.isAnim || _s.isAnimMaxOrMin || _s.isLoading) return;
			if(_s.isFullScreen){
				if (document.cancelFullScreen) {  
					document.cancelFullScreen();  
				}else if (document.mozCancelFullScreen) {  
					document.mozCancelFullScreen();  
				}else if (document.webkitCancelFullScreen) {  
					document.webkitCancelFullScreen();  
				}else if (document.msExitFullscreen) {  
					document.msExitFullscreen();  
				}
			}
			
			_s.addNS();
			if(_s.evp) _s.evp.goNormalScreen();
			_s.isFullScreen = false;
		};


		_s.addNS = function(){
			if(!_s.isFullScreen) return;
			
			if(document.removeEventListener){
				document.removeEventListener("fullscreenchange", _s.onFSChange);
				document.removeEventListener("mozfullscreenchange", _s.onFSChange);
				document.removeEventListener("webkitfullscreenchange", _s.onFSChange);
				document.removeEventListener("MSFullscreenChange", _s.onFSChange);
			}
			
			_s.isFullScreen = false;
			_s._dc.style.overflow = _s.dcelState;
			_s.fsBtn_do.setButtonState(1);
			_s.resizeOnNS();
			
			if(_s.isMbl) window.removeEventListener("touchmove", _s.disableFullScreenOnMobileHandler);
			_s.dispatchEvent(FWDRL.NORMALSCREEN);
		};
		
		_s.resizeOnNS = function(){
			if(_s.item_do != _s.vidHld_do) return;
			_s.resizeHandler();
			setTimeout(function(){
				window.scrollTo(_s.fsX, _s.fsY);
				_s.resizeHandler();
			}, 50);

			setTimeout(function(){
				window.scrollTo(_s.fsX, _s.fsY);
				_s.resizeHandler();
			}, 150);
			setTimeout(function(){
				window.scrollTo(_s.fsX, _s.fsY);
				_s.resizeHandler();
			}, 300);
			
		}
		
		/**
	  	 * Set default options.
	     */
		_s.setDefaultSettings = function(){

			// General settings.
			_s.rightClickContextMenu = _s.DRightClickContextMenu;
			_s.useDeepLinking = _s.DUseDeepLinking;
			_s.buttonsAlignment = _s.DFBtnsAlignment;
			_s.useDrag = _s.DUseDrag;
			_s.mediaLazyLoading = _s.DMediaLazyLoading;
			_s.useAsModal = _s.DFUseAsModal;
			_s.showSlideShowButton = _s.DFShowSlideShowButton;
			_s.showSlideShowAnimation = _s.DShowSlideShowAnimation;
			_s.slideShowAutoPlay = _s.DFSlideShowAutoPlay;
			_s.slideShowAutoStop = _s.DSlideShowAutoStop;
			_s.slideShowDelay = _s.DFSlideShowDelay;
			_s.slideShowBkColor = _s.DSlideShowBkColor;
			_s.slideShowFillColor = _s.DSlideShowFillColor;
			_s.useKeyboard = _s.DUseKeyboard;
			_s.useDoubleClick = _s.DUseDoubleClick
			_s.showCloseButton = _s.DFShowCloseButton;
			_s.showFullscreenButton = _s.DShowFullscreenButton;
			_s.showZoomButton = _s.DShowZoomButton;
			_s.showCounter = _s.DShowCounter;
			_s.showNextAndPrevBtns = _s.DShowNextAndPrevBtns;
			_s.defaultShowNextAndPrevBtns = _s.DFSefaultShowNextAndPrevBtns;
			_s.hideButtonsOnDrag = _s.DHideButtonsOnDrag;
			_s.maxZoom = _s.DMaxZoom;
			_s.buttonsHideDelay = _s.DButtonsHideDelay;
			_s.defaultItemWidth = _s.DFDefaultItemW;
			_s.defaultItemHeight = _s.DFDefaultItemH;
			_s.itemOffsetHeight  = _s.DItemOffsetHeight;
			_s.itemOffsetHeightButtonsTop = _s.DItemOffsetHeightButtonsTop;
			_s.spaceBetweenBtns = _s.DFSpaceBetweenBtns;
			_s.buttonsOffsetIn = _s.DFBtnsOffsetIn;
			_s.buttonsOffsetOut = _s.DFBtnsOffsetOut;
			_s.itemBorderSize = _s.DFItemBorderSize;
			_s.itemBkColor  = _s.DItemBkColor;
			_s.itemBorderColor  = _s.DFitemBorderColor;
			_s.preloaderBkColor = _s.DPreloaderBkColor;
			_s.preloaderFillColor = _s.DPreloaderFillColor;
			_s.backgroundColor = _s.DFBackgroundColor;
			_s.show360DegreeVideoVrButton = _s.show360DegreeVideoVrButton;

			// Share window.
			_s.shareButtons = _s.DShareButtons
			_s.showShareButton = _s.DShowShareButton;
			_s.shareText = _s.DShareText;
			_s.sharedURL = _s.DSharedURL;
			_s.shareBackgroundColor = _s.DShareBackgroundColor;
			_s.shareMainBackgroundColor = _s.DShareMainBackgroundColor;

			// Thumbnails.
			_s.showThumbnails = _s.DFDefaultThumbnails;
			_s.showThumbnailsIcon = _s.DShowThumbnailsIcon;
			_s.thumbnailH = _s.DFThumbnailH;
			_s.thumbnailsBorderSize = _s.DFThumbnailsBorderSize;
			_s.spaceBetweenThumbnailsAndItem = _s.DFSpaceBetweenThumbnailsAndItem;
			_s.spaceBetweenThumbnails = _s.DFSpaceBetweenThumbnails;
			_s.thumbnailsOffsetBottom = _s.DFThumbnailsOffsetBottom;
			_s.rotationY360DegreeVideo = _s.DFRotationY360DegreeVideo
			_s.thumbnailsOverlayColor = _s.DFThumbnailsOverlayColor;
			_s.thumbnailsBorderColor = _s.DThumbnailsBorderColor;

			// Caption.
			_s.captionPosition = _s.DCaptionPosition;
			_s.caption = _s.DCaption;
			_s.showCaptionOnSmallScreens = _s.DShowCaptionOnSmallScreens;
			_s.animateCaption = _s.DAnimateCaption;
			_s.captionAnimationType = _s.DFDescriptionAnimationType;
			
			//Video/audio player.
			_s.volume = _s.DVolume;
			_s.videoAutoPlay = _s.DVideoAutoPlay;
			_s.nextVideoAutoPlay = _s.DNextVideoAutoPlay;
			_s.showControllerWhenVideoIsStopped = _s.DhowControllerWhenVideoIsStopped;

		};
		
		
		/**
	  	 * Set options based on an settings object.
	  	 * @param {Boolean} props
	     */
		_s.setObjectPropsSettings = function(props){
			var test;
			for(var prop in props){
				switch(prop){
					case "useDeepLinking":
						_s.useDeepLinking = props.useDeepLinking;
						break;
					case "rightClickContextMenu":
						_s.rightClickContextMenu = props.rightClickContextMenu;
						break;		
					case "defaultItemWidth":
						_s.defaultItemWidth = props.defaultItemWidth || 1527;
						break;
					case "defaultItemHeight":
						_s.defaultItemHeight = props.defaultItemHeight || 859;
						break;
					case "buttonsAlignment":
						_s.buttonsAlignment = props.buttonsAlignment || "in";
						break;
					case "hideButtonsOnDrag":
						_s.hideButtonsOnDrag = props.hideButtonsOnDrag;
						break;
					case "useDrag":
						_s.useDrag = props.useDrag;
						break;
					case "mediaLazyLoading":
						_s.mediaLazyLoading = props.mediaLazyLoading;
						break;
					case "captionPosition":
						_s.captionPosition = props.captionPosition;
						break;
					case "caption":
						_s.caption = props.caption;
						break;
					case 'volume':
						_s.volume = props.volume;
						break;
					case "showCaptionOnSmallScreens":
						_s.showCaptionOnSmallScreens = props.showCaptionOnSmallScreens;
						break;
					case "animateCaption":
						_s.animateCaption = props.animateCaption;
						break;
					case "captionAnimationType":
						_s.captionAnimationType = props.captionAnimationType || "motion";
						_s.caption_do.captionAnimationType = _s.captionAnimationType;
						_s.caption2_do.captionAnimationType = _s.captionAnimationType;
						break;
					case "backgroundColor":
						_s.backgroundColor = props.backgroundColor || "#000000";
						break;
					case "itemBorderColor":
						_s.itemBorderColor = props.itemBorderColor || "transparent";
						break;
					case "spaceBetweenBtns":
						_s.spaceBetweenBtns = props.spaceBetweenBtns || 0; 
						break;
					case "maxZoom":
						_s.maxZoom = props.maxZoom || 1;
						break;	
					case "buttonsHideDelay":
						_s.buttonsHideDelay = props.buttonsHideDelay || 3;
						_s.buttonsHideDelay *= 1000;
						if(_s.hider) _s.hider.hideDelay = _s.buttonsHideDelay;
						break;
					case "useAsModal":
						_s.useAsModal = props.useAsModal;
						break;
					case "slideShowAutoPlay":
						_s.slideShowAutoPlay = props.slideShowAutoPlay;
						break;
					case "slideShowAutoStop":
						_s.slideShowAutoStop = props.slideShowAutoStop;
						break;
					case "useKeyboard":
						_s.useKeyboard = props.useKeyboard;
						break;
					case "useDoubleClick":
						_s.useDoubleClick = props.useDoubleClick;
						break;
					case "preloaderBkColor":
						_s.preloaderBkColor = props.preloaderBkColor;
						break;
					case "slideShowBkColor":
						_s.slideShowBkColor = props.slideShowBkColor;
						break;
					case "slideShowFillColor":
						_s.slideShowFillColor = props.slideShowFillColor;
						break;
					case "preloaderFillColor":
						_s.preloaderFillColor = props.preloaderFillColor;
						break;
					case "show360DegreeVideoVrButton":
						_s.show360DegreeVideoVrButton = props.show360DegreeVideoVrButton; 
						break;
					case "showCloseButton":
						_s.showCloseButton = props.showCloseButton;
					case "showFullscreenButton":
						_s.showFullscreenButton = props.showFullscreenButton; 
						break;
					case "shareButtons":
						_s.showShareButton = props.shareButtons.length;
						_s.shareButtons = props.shareButtons;
						break;
					case "shareText":
						_s.shareText = props.shareText; 
						break;
					case "sharedURL":
						_s.sharedURL = props.sharedURL; 
						break;	
					case "shareBackgroundColor":
						_s.shareBackgroundColor = props.shareBackgroundColor; 
						break;	
					case "shareMainBackgroundColor":
						_s.shareMainBackgroundColor = props.shareMainBackgroundColor; 
						break;		
					case "showZoomButton":
						_s.showZoomButton = props.showZoomButton; 
						break;
					case "showSlideShowButton":
						_s.showSlideShowButton = props.showSlideShowButton;
						break;
					case "showCounter":
						_s.showCounter = props.showCounter;
						break;
					case "showSlideShowAnimation":
						_s.showSlideShowAnimation = props.showSlideShowAnimation;
						break;	
					case "showNextAndPrevBtns":
						_s.showNextAndPrevBtns = props.showNextAndPrevBtns; 
						break;	
					case "slideShowDelay":
						_s.slideShowDelay = Math.round(props.slideShowDelay) * 1000;
						break;	
					case "itemOffsetHeight":
						_s.itemOffsetHeight = props.itemOffsetHeight;
						break;
					case "itemOffsetHeightButtonsTop":
						_s.itemOffsetHeightButtonsTop = props.itemOffsetHeightButtonsTop;
						break;
					case "buttonsOffsetIn":
						if(_s.buttonsAlignment == FWDRL.BUTTONS_IN){
							_s.buttonsOffsetIn = props.buttonsOffsetIn;
						}else{
							_s.buttonsOffsetIn = props.buttonsOffsetOut;
						}
						break;	
					case "buttonsOffsetOut":
						if(_s.buttonsAlignment == FWDRL.BUTTONS_IN){
							_s.buttonsOffsetOut = props.buttonsOffsetOut;
						}else{
							_s.buttonsOffsetOut = props.buttonsOffsetIn;
						}
						break;	
					case "itemBorderSize":
						_s.itemBorderSize = props.itemBorderSize; 
						break;
					case "itemBackgroundColor":
						_s.itemBkColor = props.itemBackgroundColor;
						break;
					case "showThumbnails":
						_s.showThumbnails = props.showThumbnails;
						break;	
					case "showThumbnailsIcon":
						_s.showThumbnailsIcon = props.showThumbnailsIcon; 
						break;
					case "thumbnailsOffsetBottom":
						_s.thumbnailsOffsetBottom = props.thumbnailsOffsetBottom;
						break;
					case "thumbnailsHeight":
						_s.thumbnailH = props.thumbnailsHeight;
						break;
					case "thumbnailsBorderSize":
						_s.thumbnailsBorderSize = props.thumbnailsBorderSize;
						if(_s.thumbs_do) _s.thumbs_do.thumbnailsBorderSize = _s.thumbnailsBorderSize;
						break;
					case "spaceBetweenThumbnailsAndItem":
						_s.spaceBetweenThumbnailsAndItem = props.spaceBetweenThumbnailsAndItem;
						break;
					case "spaceBetweenThumbnails":
						_s.spaceBetweenThumbnails = props.spaceBetweenThumbnails;
						break;
					case "thumbnailsOverlayColor":
						_s.thumbnailsOverlayColor = props.thumbnailsOverlayColor || 'rgba(0,0,0,.6)';
						break;
					case "thumbnailsBorderColor":
						_s.thumbnailsBorderColor = props.thumbnailsBorderColor || "#FFFFFF";
						break;
					case "videoAutoPlay":
						_s.videoAutoPlay = props.videoAutoPlay;
						break;
					case "nextVideoAutoPlay":
						_s.nextVideoAutoPlay = props.nextVideoAutoPlay;
						break;
					case "showControllerWhenVideoIsStopped":
						_s.showControllerWhenVideoIsStopped = props.showControllerWhenVideoIsStopped;
						break;
					case "videoPosterBackgroundColor":
						_s._d.videoPosterBackgroundColor_str = props.videoPosterBackgroundColor || "transparent";
						if(_s.video_do) _s.video_do.videoPoster_do.style().backgroundColor = _s._d.videoPosterBackgroundColor_str;
						break;
					case "audioControllerBackgroundColor":
						_s._d.audioControllerBackgroundColor_str = props.audioControllerBackgroundColor || "transparent";
						if(_s.audio_do && _s.audio_do.controller_do) _s.audio_do.controller_do.style().backgroundColor = _s._d.audioControllerBackgroundColor_str;
						break;
				}					
			}
		};


		/**
	  	 * Lazy media loading.
	     */
		_s.startMediaLazyLoading = function(){
			if(!_s.isShowed || _s.startMLL || !_s.mediaLazyLoading) return;

			_s.lazyLoadedLeft = _s.lazyLoadedRight = false;
			if(!_s.lazy_ar){
				_s.lazy_ar = [];
				_s.lazy_ar.push({guId:_s.playlistDomOrObj, loaded:false});
			}

			var has = false;
			for(var i=0; i<_s.lazy_ar.length; i++){
				if(_s.lazy_ar[i]['guId'] == _s.playlistDomOrObj) has = true;
			}

			if(!has){
				_s.lazy_ar.push({guId:_s.playlistDomOrObj, loaded:false});
			}

			for(var i=0; i<_s.lazy_ar.length; i++){
				if(_s.lazy_ar[i]['guId'] == _s.playlistDomOrObj){
					_s.curLazy_ar = _s.lazy_ar[i];
					break;
				} 
			}
			if(_s.curLazy_ar['loaded']) return;
			if(!_s.rlzImg){
				_s.rlzImg = new Image();
				_s.llzImg = new Image();
			}

			_s.startMLL = true;
			var item = _s.gallery_ar[_s.mId];
			var tt = _s.gallery_ar.length;

			_s.rightId = _s.mId + 1;
			_s.leftId = _s.mId - 1;
			
			_s.startMediaLeftLL();
			_s.startMediaRightLL();
		}

		_s.startMediaRightLL = function(){
			if(!_s.rlzImg) return;
			var item = _s.gallery_ar[_s.rightId];
			if(!item){
				_s.lazyLoadedRight = true;
				if(_s.lazyLoadedRight && _s.lazyLoadedLeft){
					_s.curLazy_ar['loaded'] = true;
				}
				return;
			}

			_s.rightId ++;
			clearTimeout(_s.MLRight_to);
			if(item.type == FWDRL.IMAGE || item.posterSrc){
				
				if(item.posterSrc){
					_s.rlzImg.src = item.posterSrc;
				}else{
					_s.rlzImg.src = item.src;
				}
				
				_s.rlzImg.onload = function(){
					_s.MLRight_to = setTimeout(function(){
						_s.startMediaRightLL();
					}, 50)
				}
			}else{
				_s.startMediaRightLL();
			}
		}

		_s.startMediaLeftLL = function(){
			if(!_s.llzImg) return;
			var item = _s.gallery_ar[_s.leftId];
			if(!item){
				_s.lazyLoadedLeft = true;
				if(_s.lazyLoadedRight && _s.lazyLoadedLeft){
					_s.curLazy_ar['loaded'] = true;
				}
				return;
			}

			_s.leftId --;
			clearTimeout(_s.MLLeft_to);
			if(item.type == FWDRL.IMAGE || item.posterSrc){
				if(item.posterSrc){
					_s.llzImg.src = item.posterSrc;
				}else{
					_s.llzImg.src = item.src;
				}
				
				_s.llzImg.onload = function(){
					_s.MLLeft_to = setTimeout(function(){
						_s.startMediaLeftLL();
					}, 50);
				}
			}else{
				_s.startMediaLeftLL();
			}
		}

		_s.stopMediaLazyLoading = function(){
			_s.startMLL = false;
			clearTimeout(_s.MLLeft_to);
			clearTimeout(_s.MLRight_to);
			if(_s.rlzImg) _s.rlzImg = null;
			if(_s.llzImg) _s.llzImg = null;
		}


		/**
	  	 * Display error on screen.
	  	 * @param {String} e
	     */
		_s.showError = function(e){
			_s.isLoading = false;
			_s.hasError = true;
			if(_s.tm) _s.tm.stop();
			_s.stopAnim();
			_s.hideDisable();
			_s.preloader_do.hide(true);
			_s.main_do.addChild(_s.info_do);
			_s.info_do.showText(e);
			_s.dispatchEvent(FWDRL.ERROR, {error:e});
		}
	
		
		/**
	  	 * Event disaptcher.
	     */
		_s.addListener = function (type, listener){
	    	if(!_s.listeners) return;
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	if(typeof listener != "function") throw Error("listener must be of type Function.");
	    	
	        var event = {};
	        event.type = type;
	        event.listener = listener;
	        event.target = _s;
	        _s.listeners.events_ar.push(event);
	    };
	    
	    _s.dispatchEvent = function(type, props){
	    	if(_s.listeners == null) return;
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	
	        for (var i=0, len=_s.listeners.events_ar.length; i < len; i++){
	        	if(_s.listeners.events_ar[i].target === _s && _s.listeners.events_ar[i].type === type){		
	    	        if(props){
	    	        	for(var prop in props){
	    	        		_s.listeners.events_ar[i][prop] = props[prop];
	    	        	}
	    	        }
	        		_s.listeners.events_ar[i].listener.call(_s, _s.listeners.events_ar[i]);
	        	}
	        }
	    };
	    
	    _s.removeListener = function(type, listener){
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	if(typeof listener != "function") throw Error("listener must be of type Function." + type);
	    	
	        for (var i=0, len=_s.listeners.events_ar.length; i < len; i++){
	        	if(_s.listeners.events_ar[i].target === _s 
	        			&& _s.listeners.events_ar[i].type === type
	        			&& _s.listeners.events_ar[i].listener ===  listener
	        	){
	        		_s.listeners.events_ar.splice(i,1);
	        		break;
	        	}
	        }  
	    };		
		_s.init();
	};

	FWDRL.inst = [];
	
	/**
	 * Prototype and globals.
	 */
	FWDRL.setPrototype =  function(){
		FWDRL.prototype = new FWDRVPEventDispatcher();
	};

	FWDRL.EVP_STOP = 'evpStop';
	FWDRL.IFRAME = "iframe";
	FWDRL.IMAGE = "image";
	FWDRL.VIDEO = "video";
	FWDRL.YOUTUBE = 'youtube';
	FWDRL.VIMEO = 'vimeo';
	FWDRL.AUDIO = "audio";
	FWDRL.IFRAME = "iframe";
	FWDRL.HTML = "html";
	FWDRL.BUTTONS_IN = "in";
	FWDRL.BUTTONS_OUT = "out";
	FWDRL.BUTTONS_TOP = 'top';
	FWDRL.FULLSCREEN = 'fullscreen';
	FWDRL.NORMALSCREEN = 'normalscreen';
	FWDRL.READY = "ready";
	FWDRL.SHOW_START = "showStart";
	FWDRL.SHOW_COMPLETE = "showComplete";
	FWDRL.HIDE_START = "hideStart";
	FWDRL.HIDE_COMPLETE	= "hidecComplete";
	FWDRL.ERROR = "error";
	FWDRL.MAXIMIZE_COMPLETE = "maximizeComplete";
	FWDRL.START_TO_UPDATE_ITEM = "startToUpdateItem";

	FWDRL.UPDATE_ITEM = "updateItem";
	FWDRL.UPDATE_GALLERIES = 'updateGalleries';
	
	
	window.FWDRL = FWDRL;
	
}(window));/**
 * Revolution Lightbox PACKAGED v3.0
 * Caption.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function (window){
	
	var FWDRLCaption = function(
			prt,
			captionAnimationType,
			captionPosition,
			borderSize,
			type
			){

		'use strict';
		
		var _s = this;
		var prototype = FWDRLCaption.prototype;
		
		_s.captionAnimationType = captionAnimationType;
		_s.captionPosition = captionPosition;
		_s.borderSize = borderSize;
		_s.finalW = 0;
		_s.finalH = 0;
		_s.finalY = 0;
		_s.type = type;

		if(_s.type == 'out'){
			_s.captionPosition = 'bottom';
		}
		_s.isHiddenDone_bl = true;

		
		/**
		 * Initialize.
		 */
		_s.init = function(){
			_s.setupMainContainers();
		};

		
		/**
		 * Setup main containers.
		 */
		_s.setupMainContainers = function(){
			
			_s.main_do = new FWDRLDO("div");
			
			_s.main_do.style().width = "100%";
			_s.main_do.style().height = "100%";
			_s.main_do.setBackfaceVisibility();
			
			_s.text_do = new FWDRLDO("div");
			_s.text_do.style().width = "100%";
			_s.text_do.setBackfaceVisibility();
			
			_s.bk_do = new FWDRLDO("div");
			_s.bk_do.screen.className = 'background';
			_s.bk_do.setResizableSizeAfterParent();
			_s.bk_do.setBackfaceVisibility();

			if(_s.type == 'in'){
				_s.main_do.addChild(_s.bk_do);
			}
			
			_s.main_do.addChild(_s.text_do);
			_s.addChild(_s.main_do);
		};

		
		/**
		 * Set text.
		 * @param {String} pText
		 */
		_s.setText = function(pText){
			_s.text_do.setInnerHTML(pText);
			_s.resizeAndPosition();
		};


		/**
		 * Resize.
		 * @param {Integer} finalW
		 * @param {Boolean} anim
		 */
		_s.resizeAndPosition = function(finalW, anim){
			if(finalW) _s.finalW = finalW;
			_s.finalH = _s.text_do.getHeight();

			_s.setFinalSize();
			clearTimeout(_s.resizeWithDelayId_to);
			_s.resizeWithDelayId_to = setTimeout(function(){
				_s.setFinalSize(anim);
			}, 91);
			
		};
		
		_s.setFinalSize = function(){
			var cls = prt.cls + '-caption';
			
			if(_s.type == 'in'){
				cls += ' in';
				if(prt.stageH <= 550){
					cls += ' small-screen';
				}
			}else{
				cls += ' out'
			}
			
			_s.finalH = _s.text_do.getHeight();
			_s.finalW =  prt.itemHld_do.w;

			var itemHldX = prt.itemHld_do.x;
			var itemHldY = prt.itemHld_do.y;
			var itemHldH = prt.itemHld_do.h
			
			if(prt.showCationFirstTime){
				itemHldX = prt.finalX;
				itemHldY = prt.finalY;
				itemHldH = prt.finalH;
				_s.finalW = prt.finalW;
			}
			
			if(_s.type =='in'){
				_s.finalW -= _s.borderSize * 2;
				_s.finalX = _s.borderSize;
				if(_s.captionPosition == "topin"){
					cls += ' topin'
					_s.style().top = '0';
					_s.style().bottom = 'auto';
					_s.text_do.style().top = 0;
					_s.text_do.style().bottom = 'auto';
				}else{
					cls += ' bottomin'
					_s.style().top = 'auto';
					_s.style().bottom = '0';
					_s.text_do.style().top = 'auto';
					_s.text_do.style().bottom = 0;
				}
			}else{
				_s.finalX = itemHldX;
				_s.finalY = itemHldY + itemHldH;
				_s.setY(_s.finalY);
				_s.setWH();
			}

			_s.screen.className = cls;
			if(_s.type == 'in'){
				_s.setWidth(_s.finalW);
				_s.main_do.setHeight(_s.finalH);
				_s.setHeight(_s.finalH);
			}
		};

		_s.setWH = function(w,h){
			_s.setWidth(prt.finalW);
			_s.main_do.setHeight(_s.finalH);
			_s.setHeight(_s.finalH);
			_s.setX(prt.finalX);
		}

		
		/**
		 * Hide caption.
		 * @param {Boolean} animate
		 * @param {Boolean} overwrite
		 * @param {Boolean} isShowedFirstTime
		 */
		_s.hide = function(animate, overwrite, isShowedFirstTime, inverse){
			if(!_s.isShowed && !overwrite) return;
			_s.isShowed = false;
			_s.finalH = _s.text_do.getHeight();
			var opacity = 1;
			if(isShowedFirstTime) _s.isShowedFirstTime_bl = false;
			
			FWDAnimation.killTweensOf(_s.main_do);
			if(animate){
				if(_s.captionAnimationType == "motion"){
					var pos;
					if(_s.captionPosition == "topin"){
						pos = -_s.finalH
					}else{
						_s.setOverflow('hidden');
						if(_s.type == 'in'){
							pos = _s.finalH;
						}else{
							pos = - _s.finalH - 3;
							if(inverse){
								_s.setOverflow('visible');
								opacity = 0;
								pos *= -1;
							}
							
						}
					}
					FWDAnimation.to(_s.main_do, .8, {y:pos, alpha:opacity, ease:Expo.easeInOut, onComplete:function(){_s.hideComplete(inverse)}});
				}else{
					FWDAnimation.to(_s.main_do, .4, {alpha:0, ease:Quint.easeOut, onComplete:_s.hideComplete});
				}
			}else{
				_s.hideComplete();
			}
		};
		
		_s.hideComplete = function(inverse){
			_s.setVisible(false);
			if(_s.captionAnimationType == "motion"){
				var pos;
				if(_s.captionPosition == "topin"){
					pos = -_s.finalH;	
					_s.setX(_s.borderSize);
					_s.setY(_s.borderSize)
				}else{
					if(_s.type == 'in'){
						pos = _s.finalH;
						_s.setX(_s.borderSize);
						_s.setY(-_s.borderSize)
					}else{
						pos = - _s.finalH;
						if(inverse){
							_s.setOverflow('visible');
							pos *= -1;
						}
					}
				}
				_s.main_do.setY(pos);
			}else{
				_s.main_do.setAlpha(0);
			}
		};
		

		/**
		 * Show caption.
		 * @param {Boolean} animate
		 */
		_s.show = function(animate, inverse){
			if(_s.isShowed) return;
		
			_s.isShowed = true;
			setTimeout(function(){
				_s.setAlpha(1);
			}, 100);
			
			if(!_s.isShowedFirstTime_bl){
				_s.isShowedFirstTime_bl = true;
				_s.hideComplete();
				_s.resizeAndPosition();
			}
			_s.setVisible(true);
			
			FWDAnimation.killTweensOf(_s.main_do);
			if(_s.captionAnimationType == "motion"){
				if(!inverse && _s.main_do.alpha != 1) _s.main_do.setAlpha(1);
				if(animate){
					FWDAnimation.to(_s.main_do, .8, {y:0, alpha:1, ease:Expo.easeInOut});
				}else{
					_s.main_do.setY(0);
				}
			}else{
				_s.main_do.setY(0);
				var dl = .4;
				if(prt.showFirstTimeDone) dl = 0;
				if(animate){
					FWDAnimation.to(_s.main_do, .6, {alpha:1, delay:dl});
				}else{
					_s.main_do.setAlpha(1);
				}
			}
		};
		
		_s.init();
	};
	
	/**
	 * Prototype and globals.
	 */
	FWDRLCaption.setPrototype =  function(){
		FWDRLCaption.prototype = new FWDRLDO("div");
	};

	FWDRLCaption.HIDE_COMPLETE = "infoWindowHideComplete";
	FWDRLCaption.prototype = null;
	window.FWDRLCaption = FWDRLCaption;
	
}(window));/**
 * Revolution Lightbox PACKAGED v3.0
 * Complex button.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function (){
	var FWDRLComplexButton = function(
			n1Img, 
			s1Path, 
			n2Img, 
			s2Path, 
			html1,
			html2,
			nClass,
			sClass
		){

		'use strict';
		
		var _s = this;
		var prototype = FWDRLComplexButton.prototype;
		
		_s.n1Img = n1Img;
		_s.s1Path_str = s1Path;
		_s.n2Img = n2Img;
		_s.s2Path_str = s2Path;
		_s.html1 = html1;
		_s.html2 = html2;
		_s.nClass = nClass;
		_s.sClass = sClass;
		
		if(_s.n1Img){
			_s.buttonWidth = _s.n1Img.width;
			_s.buttonHeight = _s.n1Img.height;
		}
		
		_s.currentState = 1;
		_s.isMbl = FWDRLUtils.isMbl;
		_s.hasPointerEvent_bl = FWDRLUtils.hasPointerEvent;
		_s.allowToCreateSecondButton_bl = !_s.isMbl || _s.hasPointerEvent_bl;

		
		/**
	 	 * Initiolize.
	 	 */
		_s.init = function(){
			_s.setButtonMode(true);
			_s.setupMainContainers();
		};

		
		/**
	 	 * Setup main containers.
	 	 */
		_s.setupMainContainers = function(){
			
			_s.buttonsHolder_do = new FWDRLDO("div");
			_s.addChild(_s.buttonsHolder_do);
			
			if(html1){

				_s.firstButton_do = new FWDRLDO("div");
				_s.n1_do = new FWDEVPDO("div");	
				_s.n1_do.setInnerHTML(_s.html1);
				_s.firstButton_do.addChild(_s.n1_do);
				_s.secondButton_do = new FWDRLDO("div");
				_s.n2_do = new FWDEVPDO("div");	
				_s.n2_do.setInnerHTML(_s.html2);
				_s.secondButton_do.addChild(_s.n2_do);
				_s.buttonsHolder_do.addChild(_s.secondButton_do);
				_s.buttonsHolder_do.addChild(_s.firstButton_do);

				_s.setNormalState();

				setTimeout(function(){
					_s.buttonWidth = parseInt(getComputedStyle(_s.n1_do.screen).getPropertyValue("width"));
					_s.buttonHeight = parseInt(getComputedStyle(_s.n1_do.screen).getPropertyValue("height"));
					
					_s.setFinalSize();
				}, 5);

			}else{
				_s.firstButton_do = new FWDRLDO("div");
				_s.addChild(_s.firstButton_do);
				_s.n1_do = new FWDRLDO("img");	
				_s.n1_do.setScreen(_s.n1Img);
				_s.firstButton_do.addChild(_s.n1_do);
				
				_s.s1_do = new FWDRLDO("img");
				var img1 = new Image();
				img1.src = _s.s1Path_str;
				_s.s1_do.setScreen(img1);
				_s.s1_do.setWidth(_s.buttonWidth);
				_s.s1_do.setHeight(_s.buttonHeight);
				_s.s1_do.setAlpha(0);
				_s.firstButton_do.addChild(_s.s1_do);
				
				_s.firstButton_do.setWidth(_s.buttonWidth);
				_s.firstButton_do.setHeight(_s.buttonHeight);
				
				_s.secondButton_do = new FWDRLDO("div");
				_s.addChild(_s.secondButton_do);
				_s.n2_do = new FWDRLDO("img");	
				_s.n2_do.setScreen(_s.n2Img);
				_s.secondButton_do.addChild(_s.n2_do);
				
				_s.s2_do = new FWDRLDO("img");
				var img2 = new Image();
				img2.src = _s.s2Path_str;
				_s.s2_do.setScreen(img2);
				_s.s2_do.setWidth(_s.buttonWidth);
				_s.s2_do.setHeight(_s.buttonHeight);
				_s.s2_do.setAlpha(0);
				_s.secondButton_do.addChild(_s.s2_do);

				_s.buttonsHolder_do.addChild(_s.secondButton_do);
				_s.buttonsHolder_do.addChild(_s.firstButton_do);
				_s.setFinalSize();
			}


			if(_s.isMbl){
				if(_s.hasPointerEvent_bl){
					_s.screen.addEventListener("pointerdown", _s.onMouseUp);
					_s.screen.addEventListener("pointerover", _s.onMouseOver);
					_s.screen.addEventListener("pointerout", _s.onMouseOut);
				}else{
					_s.screen.addEventListener("toustart", _s.onDown);
					_s.screen.addEventListener("touchend", _s.onMouseUp);
				}
			}else if(_s.screen.addEventListener){	
				_s.screen.addEventListener("mouseover", _s.onMouseOver);
				_s.screen.addEventListener("mouseout", _s.onMouseOut);
				_s.screen.addEventListener("mouseup", _s.onMouseUp);
			}
		};

		_s.setFinalSize = function(){
			_s.secondButton_do.setX(-50);
			_s.setWidth(_s.buttonWidth);
			_s.setHeight(_s.buttonHeight);
			_s.buttonsHolder_do.setWidth(_s.buttonWidth);
			_s.buttonsHolder_do.setHeight(_s.buttonHeight);
			_s.secondButton_do.setWidth(_s.buttonWidth);
			_s.secondButton_do.setHeight(_s.buttonHeight);
			
		}
		
		_s.onMouseOver = function(e, animate){
			_s.dispatchEvent(FWDRLComplexButton.SHOW_TOOLTIP, {e:e});
			if(_s.isDisabled_bl || _s.isSelectedState_bl || _s.isHoverDisabled_bl) return;
			if(!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE || e.pointerType == "mouse"){
				_s.dispatchEvent(FWDRLComplexButton.MOUSE_OVER, {e:e});
				_s.setSelectedState(true);
			}
		};
			
		_s.onMouseOut = function(e){
			if(_s.isDisabled_bl || !_s.isSelectedState_bl || _s.isHoverDisabled_bl) return;
			if(!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE || e.pointerType == "mouse"){
				_s.setNormalState();
				_s.dispatchEvent(FWDRLComplexButton.MOUSE_OUT);
			}
		};
		
		_s.onDown = function(e){
			if(e.preventDefault) e.preventDefault();
		};
	
		_s.onMouseUp = function(e){
			if(_s.isDisabled_bl || e.button == 2) return;
			if(e.preventDefault) e.preventDefault();
			if(!_s.isMbl) _s.onMouseOver(e, false);
			_s.dispatchEvent(FWDRLComplexButton.MOUSE_UP, {e:e});
		};

		
		/**
	 	 * Toggle button.
	 	 */
		_s.toggleButton = function(){
			if(_s.currentState == 1){
				_s.firstButton_do.setX(-50);
				_s.secondButton_do.setX(0);
				_s.currentState = 0;
				_s.dispatchEvent(FWDRLComplexButton.FIRST_BUTTON_CLICK);
			}else{
				_s.firstButton_do.setX(-50);
				_s.secondButton_do.setX(0);
				_s.currentState = 1;
				_s.dispatchEvent(FWDRLComplexButton.SECOND_BUTTON_CLICK);
			}
		};

		
		/**
	 	 * Set button state.
	 	 * @param {Integer} state
	 	 */
		_s.setButtonState = function(state){
			if(state == 1){
				_s.firstButton_do.setX(0);
				_s.secondButton_do.setX(-50);
				_s.currentState = 1; 
			}else{
				_s.firstButton_do.setX(-50);
				_s.secondButton_do.setX(0);
				_s.currentState = 0; 
			}
		};
	
		_s.setNormalState = function(){
			_s.isSelectedState_bl = false;
			if(_s.html1){
				_s.n1_do.screen.className = _s.nClass;
				_s.n2_do.screen.className = _s.nClass;
			}else{
				FWDAnimation.killTweensOf(_s.s1_do);
				FWDAnimation.killTweensOf(_s.s2_do);
				FWDAnimation.to(_s.s1_do, .5, {alpha:0, ease:Expo.easeOut});	
				FWDAnimation.to(_s.s2_do, .5, {alpha:0, ease:Expo.easeOut});
			}
			
		};
		
		_s.setSelectedState = function(animate){
			_s.isSelectedState_bl = true;
			if(_s.html1){
				_s.n1_do.screen.className = _s.nClass + ' ' + _s.sClass;
				_s.n2_do.screen.className = _s.nClass + ' ' + _s.sClass;
			}else{
				FWDAnimation.killTweensOf(_s.s1_do);
				FWDAnimation.killTweensOf(_s.s2_do);
				FWDAnimation.to(_s.s1_do, .5, {alpha:1, delay:.1, ease:Expo.easeOut});
				FWDAnimation.to(_s.s2_do, .5, {alpha:1, delay:.1, ease:Expo.easeOut});
			}	
		};
		
		
		/**
	 	 * Enable/disable button.
	 	 */
		_s.disable = function(){
			_s.isDisabled_bl = true;
			_s.setButtonMode(false);
			FWDAnimation.to(_s.n1_do, .6, {alpha:.4});
		};
		
		_s.enable = function(){
			_s.isDisabled_bl = false;
			_s.setButtonMode(true);
			FWDAnimation.to(_s.n1_do, .6, {alpha:1});
		};


		 /**
	 	 * Set opacitiy when item is dragged.
	 	 * @param {String} inst
	 	 */
	 	 _s.setHideDrag = function(hide){
	 	 	FWDAnimation.killTweensOf(_s.n1_do);
	 	 	FWDAnimation.killTweensOf(_s.n2_do);
	 	 	if(!hide){
	 	 		FWDAnimation.to(_s.n1_do, .4, {alpha:1});
	 	 		FWDAnimation.to(_s.n2_do, .4, {alpha:1});
	 	 	}else{
	 	 		FWDAnimation.to(_s.n1_do, .4, {alpha:.3, delay:.4});
	 	 		FWDAnimation.to(_s.n2_do, .4, {alpha:.3, delay:.4});
	 	 	}
	 	 }
		
		_s.init();
	};

	
	/**
	 * Set prototype.
	 */
	FWDRLComplexButton.setPrototype = function(){
		FWDRLComplexButton.prototype = new FWDRLDO("div");
	};
	
	FWDRLComplexButton.FIRST_BUTTON_CLICK = "onFirstClick";
	FWDRLComplexButton.SECOND_BUTTON_CLICK = "secondButtonOnClick";
	FWDRLComplexButton.SHOW_TOOLTIP = "showToolTip";
	FWDRLComplexButton.MOUSE_OVER = "onMouseOver";
	FWDRLComplexButton.MOUSE_OUT = "onMouseOut";
	FWDRLComplexButton.MOUSE_UP = "onMouseUp";
	FWDRLComplexButton.CLICK = "onClick";
	
	FWDRLComplexButton.prototype = null;
	window.FWDRLComplexButton = FWDRLComplexButton;
}(window));/**
 * Revolution Lightbox PACKAGED v3.0
 * Right click context menu.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function (){
	var FWDRLContextMenu = function(e, type){

		'use strict';
		
		var _s = this;
		_s.prt = e;
		_s.type = type;
		_s.url = "http://www.webdesign-flash.ro";
		
		
		/**
	 	 * Initialize.
	 	 */		
		_s.init = function(){
			_s.updateParent(_s.prt);
		};

		
		/**
	 	 * Update parent and adding events.
	 	 * @param {FWDRlDisplayObject} prt
	 	 */
		_s.updateParent = function(prt){
			if(_s.prt){
				if(_s.prt.screen.addEventListener){
					_s.prt.screen.removeEventListener("contextmenu", _s.contextMenuHandler);
				}else{
					_s.prt.screen.detachEvent("oncontextmenu", _s.contextMenuHandler);
				}
				
			}
			_s.prt = prt;
			
			if(_s.prt.screen.addEventListener){
				_s.prt.screen.addEventListener("contextmenu", _s.contextMenuHandler);
			}else{
				_s.prt.screen.attachEvent("oncontextmenu", _s.contextMenuHandler);
			}
		};
		
		_s.contextMenuHandler = function(e){
			if(_s.isDisabled_bl) return;
			if(_s.type == "disabled"){
				if(e.preventDefault){
					e.preventDefault();
					return;
				}else{return false;
				}
			}else if(_s.type == "default"){
				return;
			}
			
			if(_s.url.indexOf("sh.r") == -1) return;
			_s.setupMenus();
			_s.prt.addChild(_s.menu_do);
			_s.menu_do.setVisible(true);
			_s.positionButtons(e);
			
			if(window.addEventListener){
				window.addEventListener("mousedown", _s.contextMenuWindowOnMouseDownHandler);
			}else{
				document.documentElement.attachEvent("onclick", _s.contextMenuWindowOnMouseDownHandler);
			}
			
			if(e.preventDefault){
				e.preventDefault();
			}else{
				return false;
			}
			
		};
		
		_s.contextMenuWindowOnMouseDownHandler = function(e){
			var viewportMouseCoordinates = FWDRLUtils.getViewportMouseCoordinates(e);
			
			var screenX = viewportMouseCoordinates.screenX;
			var screenY = viewportMouseCoordinates.screenY;
			
			if(!FWDRLUtils.hitTest(_s.menu_do.screen, screenX, screenY)){
				if(window.removeEventListener){
					window.removeEventListener("mousedown", _s.contextMenuWindowOnMouseDownHandler);
				}else{
					document.documentElement.detachEvent("onclick", _s.contextMenuWindowOnMouseDownHandler);
				}
				_s.menu_do.setX(-500);
			}
		};

		
		/**
	 	 * Setup menus.
	 	 */
		_s.setupMenus = function(){
			if(_s.menu_do) return;
			_s.menu_do = new FWDRLDO("div");
			_s.menu_do.setX(-500);
			_s.menu_do.style().width = "100%";
			
			_s.nTxt_do = new FWDRLDO("div");
			_s.nTxt_do.style().fontFamily = "Arial, Helvetica, sans-serif";
			_s.nTxt_do.style().padding = "4px";
			_s.nTxt_do.style().fontSize = "12px";
			_s.nTxt_do.style().color = "#000000";
			_s.nTxt_do.style().whiteSpace = "nowrap";
			_s.nTxt_do.setInnerHTML("&#0169; made by FWD");
			_s.nTxt_do.setBkColor("#FFFFFF");
			
			_s.sTxt_do = new FWDRLDO("div");
			_s.sTxt_do.style().fontFamily = "Arial, Helvetica, sans-serif";
			_s.sTxt_do.style().padding = "4px";
			_s.sTxt_do.style().fontSize = "12px";
			_s.sTxt_do.style().color = "#FFFFFF";
			_s.sTxt_do.style().whiteSpace = "nowrap";
			_s.sTxt_do.setInnerHTML("&#0169; made by FWD");
			_s.sTxt_do.setBkColor("#000000");
			_s.sTxt_do.setAlpha(0);
			
			_s.over_do = new FWDRLDO("div");
			_s.over_do.setBkColor("#FF0000");
			_s.over_do.setAlpha(0);
			
			_s.menu_do.addChild(_s.nTxt_do);
			_s.menu_do.addChild(_s.sTxt_do);
			_s.menu_do.addChild(_s.over_do);
			_s.prt.addChild(_s.menu_do);
			_s.over_do.setWidth(_s.sTxt_do.getWidth());
			_s.menu_do.setWidth(_s.sTxt_do.getWidth());
			_s.over_do.setHeight(_s.sTxt_do.getHeight());
			_s.menu_do.setHeight(_s.sTxt_do.getHeight());
			_s.menu_do.setVisible(false);
			
			_s.menu_do.setButtonMode(true);
			_s.menu_do.screen.onmouseover = _s.mouseOverHandler;
			_s.menu_do.screen.onmouseout = _s.mouseOutHandler;
			_s.menu_do.screen.onclick = _s.onClickHandler;
		};
		
		_s.mouseOverHandler = function(){
			if(_s.url.indexOf("w.we") == -1) _s.menu_do.visible = false;
			FWDAnimation.to(_s.nTxt_do, .8, {alpha:0, ease:Expo.easeOut});
			FWDAnimation.to(_s.sTxt_do, .8, {alpha:1, ease:Expo.easeOut});
		};
		
		_s.mouseOutHandler = function(){
			FWDAnimation.to(_s.nTxt_do, .8, {alpha:1, ease:Expo.easeOut});
			FWDAnimation.to(_s.sTxt_do, .8, {alpha:0, ease:Expo.easeOut});
		};
		
		_s.onClickHandler = function(){
			window.open(_s.url, "_blank");
		};
		

		/**
	 	 * Position menu buttons.
	 	 * @param {Event} e
	 	 */
		_s.positionButtons = function(e){
			var viewportMouseCoordinates = FWDRLUtils.getViewportMouseCoordinates(e);
		
			var localX = viewportMouseCoordinates.screenX - _s.prt.getGlobalX(); 
			var localY = viewportMouseCoordinates.screenY - _s.prt.getGlobalY();
			var finalX = localX + 2;
			var finalY = localY + 2;
			
			if(finalX > _s.prt.getWidth() - _s.menu_do.getWidth() - 2){
				finalX = localX - _s.menu_do.getWidth() - 2;
			}
			
			if(finalY > _s.prt.getHeight() - _s.menu_do.getHeight() - 2){
				finalY = localY - _s.menu_do.getHeight() - 2;
			}
			_s.menu_do.setX(finalX);
			_s.menu_do.setY(finalY);
		};

		
		/**
	 	 * Enable/disable.
	 	 */
		_s.disable = function(){
			_s.isDisabled_bl = true;
		};
		
		_s.enable = function(){
			_s.isDisabled_bl = false;
		}


		/**
	 	 * Enable/disable.
	 	 */
	 	_s.update = function(type){
	 		_s.type = type;
	 	}
		
		_s.init();
	};
	
	
	/**
 	 * Prototype.
 	 */
	window.FWDRLContextMenu = FWDRLContextMenu;
	
}(window));/* Data */
(function(window){
	
	var FWDRLData = function(props, playListElement, prt){

		'use strict';
		
		var _s = this;
		var prototype = FWDRLData.prototype;
		
		_s.props_obj = props;
		_s.skinPaths_ar = [];
		_s.images_ar = [];
		_s.cats_ar = [];
		_s.countLoadedSkinImages = 0;
	
		//###################################//
		/*init*/
		//###################################//
		_s.init = function(){
			_s.parseProperties();
		};
		
		//#############################################//
		// parse properties.
		//#############################################//
		_s.parseProperties = function(){
			
			_s.mainFolderPath = _s.props_obj.mainFolderPath;
			if(!_s.mainFolderPath){
				setTimeout(function(){
					if(_s == null) return;
					errorMessage_str = "The <font color='#FF0000'>mainFolderPath</font> property is not defined in the constructor function!";
					_s.dispatchEvent(FWDRLData.LOAD_ERROR, {text:errorMessage_str});
				}, 100);
				return;
			}
			
			if((_s.mainFolderPath.lastIndexOf("/") + 1) != _s.mainFolderPath.length){
				_s.mainFolderPath += "/";
			}
		
			_s.skin = _s.mainFolderPath + 'skin/';
			_s.wrningIconPath_str = _s.skin + "warning.png";
			_s.useVectorIcons = _s.props_obj.useVectorIcons;
			
			_s.skinPaths_ar = [
			     {img:_s.playN_img = new Image(), src:_s.skin + "play-button.png"},
			     {img:_s.nextN_img = new Image(), src:_s.skin + "next-button.png"},
			     {img:_s.prevN_img = new Image(), src:_s.skin + "prev-button.png"},
			     {img:_s.closeN_img = new Image(), src:_s.skin + "close-button.png"},
			     {img:_s.fullScreenN_img = new Image(), src:_s.skin + "fullscreen-button.png"},
			     {img:_s.normalScreenN_img = new Image(), src:_s.skin + "normalscreen-button.png"},
			     {img:_s.maximizeN_img = new Image(), src:_s.skin + "maximize-button.png"},
			     {img:_s.minimizeN_img = new Image(), src:_s.skin + "minimize-button.png"},
			     {img:_s.pauseN_img = new Image(), src:_s.skin + "pause-button.png"},
			     {img:_s.showShareImage_img = new Image(), src:_s.skin + "show-share-button.png"},
				 {img:_s.facebookN_img = new Image(), src:_s.skin + "facebook-button.png"},
			     {img:_s.twitterN_img = new Image(), src:_s.skin + "twitter-button.png"},
			     {img:_s.linkedinN_img = new Image(), src:_s.skin + "linkedin-button.png"},
			     {img:_s.tumblrN_img = new Image(), src:_s.skin + "tumblr-button.png"},
			     {img:_s.pinterestN_img = new Image(), src:_s.skin + "pinterest-button.png"},
			     {img:_s.redditN_img = new Image(), src:_s.skin + "reddit-button.png"},
			     {img:_s.bufferN_img = new Image(), src:_s.skin + "buffer-button.png"},
			     {img:_s.diggN_img = new Image(), src:_s.skin + "digg-button.png"},
			     {img:_s.bloggerN_img = new Image(), src:_s.skin + "blogger-button.png"},
    		];
			

			//setup skin paths
			_s.prevSPath = _s.skin + "prev-button-over.png"; 	
			_s.nextSPath = _s.skin + "next-button-over.png"; 
			_s.closeSPath = _s.skin + "close-button-over.png"; 
			_s.fullScreenS = _s.skin + "fullscreen-button-over.png"; 	
			_s.normalScreenS = _s.skin + "normalscreen-button-over.png"; 	
			_s.maximizeSPath = _s.skin + "maximize-button-over.png"; 	
			_s.minimizeSPath = _s.skin + "minimize-button-over.png"; 	
			_s.playS = _s.skin + "play-button-over.png"; 	
			_s.pauseS = _s.skin + "pause-button-over.png";
			_s.showShareImageSPath = _s.skin + "show-share-button-over.png";
			_s.facebookSPath = _s.skin + "facebook-button-over.png";
			_s.twitterSPath = _s.skin + "twitter-button-over.png";
			_s.linkedinSPath = _s.skin + "linkedin-button-over.png";
			_s.tumblrSPath = _s.skin + "tumblr-button-over.png";
			_s.pinterestSPath = _s.skin + "pinterest-button-over.png";
			_s.redditSPath = _s.skin + "reddit-button-over.png";
			_s.bufferSPath = _s.skin + "buffer-button-over.png";
			_s.diggSPath = _s.skin + "digg-button-over.png";
			_s.bloggerSPath = _s.skin + "blogger-button-over.png";
			_s.videoIconPath = _s.skin + "thumb-play-icon.png";
			
			_s.totalGraphics = _s.skinPaths_ar.length;
			if(_s.useVectorIcons){
				setTimeout(function(){
					_s.dispatchEvent(FWDRLData.SKIN_LOAD_COMPLETE);
				}, 50);
			}else{
				_s.loadSkin();
			}
		};
		

		//####################################//
		/* load buttons graphics */
		//###################################//n
		_s.loadSkin = function(){
			var img;
			var src;
			for(var i=0; i<_s.totalGraphics; i++){
				img = _s.skinPaths_ar[i].img;
				src = _s.skinPaths_ar[i].src;
				img.onload = _s.onSkinLoadHandler;
				img.onerror = _s.onSkinLoadErrorHandler;
				img.src = src;
			}
		};
		
		_s.onSkinLoadHandler = function(e){
			_s.countLoadedSkinImages++;
			if(_s.countLoadedSkinImages == _s.totalGraphics){
				_s.dispatchEvent(FWDRLData.SKIN_LOAD_COMPLETE);
			}
		};
		
		_s.onSkinLoadErrorHandler = function(e){
			if (FWDRLUtils.isIEAndLessThen9){
				var message = "Graphics image not found!";
			}else{
				var message = "The skin icon with label <font color='#FF0000'>" + e.target.src + "</font> can't be loaded.";
			}
			
			if(window.console) console.log(e);
			var err = {text:message};
			setTimeout(function(){
				_s.dispatchEvent(FWDRLData.LOAD_ERROR, err);
			}, 100);
		};
		
		_s.init();
	};
	
	/* set prototype */
	FWDRLData.setPrototype = function(){
		FWDRLData.prototype = new FWDRLEventDispatcher();
	};
	
	FWDRLData.prototype = null;
	
	FWDRLData.PRELOADER_LOAD_DONE = "onPreloaderLoadDone";
	FWDRLData.LOAD_DONE = "onLoadDone";
	FWDRLData.LOAD_ERROR = "onLoadError";
	FWDRLData.IMAGE_LOADED = "onImageLoaded";
	FWDRLData.SKIN_LOAD_COMPLETE = "onSkinLoadComplete";
	FWDRLData.SKIN_PROGRESS = "onSkinProgress";
	FWDRLData.IMAGES_PROGRESS = "onImagesPogress";
	FWDRLData.PLAYLIST_LOAD_COMPLETE = "onPlaylistLoadComplete";
	
	window.FWDRLData = FWDRLData;
}(window));if (typeof fwdal == "undefined") {
    var fwdal = {}
}
if (typeof fwdal.util == "undefined") {
    fwdal.util = {}
}
fwdal.util.Browser = new function () {
    var b = navigator.userAgent.toLowerCase(),
        a = /webkit/.test(b),
        e = /opera/.test(b),
        c = /msie/.test(b) && !/opera/.test(b),
        d = /mozilla/.test(b) && !/(compatible|webkit)/.test(b),
        f = parseFloat(c ? b.substr(b.indexOf("msie") + 4) : (b.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1]);
    this.toString = function () {
        return "[class Browser]"
    };
    this.getVersion = function () {
        return f
    };
    this.isMSIE = function () {
        return c
    };
    this.isSafari = function () {
        return a
    };
    this.isOpera = function () {
        return e
    };
    this.isMozilla = function () {
        return d
    }
};
fwdal.util.Events = new function () {
    var c = "DOMContentLoaded",
        j = "onstop",
        k = window,
        h = document,
        b = [],
        a = fwdal.util,
        e = a.Browser,
        d = e.isMSIE(),
        g = e.isSafari();
    this.toString = function () {
        return "[class Events]"
    };
    this.addListener = function (n, l, m) {
        b.push({
            o: n,
            t: l,
            l: m
        });
        if (!(l == c && (d || g))) {
            if (n.addEventListener) {
                n.addEventListener(l, m, false)
            } else {
                if (n.attachEvent) {
                    n.attachEvent("on" + l, m)
                }
            }
        }
    };
    this.removeListener = function (p, m, n) {
        for (var l = 0, o; o = b[l]; l++) {
            if (o.o == p && o.t == m && o.l == n) {
                b.splice(l, 1);
                break
            }
        }
        if (!(m == c && (d || g))) {
            if (p.removeEventListener) {
                p.removeEventListener(m, n, false)
            } else {
                if (p.detachEvent) {
                    p.detachEvent("on" + m, n)
                }
            }
        }
    };
    var i = function () {
        for (var m = 0, l; l = b[m]; m++) {
            if (l.t != c) {
                a.Events.removeListener(l.o, l.t, l.l)
            }
        }
    };
    var f = function () {
        if (h.readyState == "interactive") {
            function l() {
                h.detachEvent(j, l);
                i()
            }
            h.attachEvent(j, l);
            k.setTimeout(function () {
                h.detachEvent(j, l)
            }, 0)
        }
    };
    if (d || g) {
        (function () {
            try {
                if ((d && h.body) || !/loaded|complete/.test(h.readyState)) {
                    h.documentElement.doScroll("left")
                }
            } catch (m) {
                return setTimeout(arguments.callee, 0)
            }
            for (var l = 0, m; m = b[l]; l++) {
                if (m.t == c) {
                    m.l.call(null)
                }
            }
        })()
    }
    if (d) {
        if(k.attachEvent) k.attachEvent("onbeforeunload", f)
    }
    this.addListener(k, "unload", i)
};
fwdal.util.Functions = new function () {
    this.toString = function () {
        return "[class Functions]"
    };
    this.bind = function (f, b, e) {
        for (var c = 2, d, a = []; d = arguments[c]; c++) {
            a.push(d)
        }
        return function () {
            return f.apply(b, a)
        }
    }
};
var FWDRLEvent = function (d) {
    this.toString = function () {
        return "[object FWDRLEvent]"
    };
    this.type = d;
    this.target = [FWDRLDL][0];
    this.value = FWDRLDL.getValue();
    this.path = FWDRLDL.getPath();
    this.pathNames = FWDRLDL.getPathNames();
    this.parameters = {};
    var c = FWDRLDL.getParameterNames();
    for (var b = 0, a = c.length; b < a; b++) {
        this.parameters[c[b]] = FWDRLDL.getParameter(c[b])
    }
    this.parameterNames = c
};
FWDRLEvent.INIT = "init";
FWDRLEvent.CHANGE = "change";
FWDRLEvent.INTERNAL_CHANGE = "internalChange";
FWDRLEvent.EXTERNAL_CHANGE = "externalChange";
var FWDRLDL = new function () {

        'use strict';

        var _getHash = function () {
            var index = _l.href.indexOf("#");
            return index != -1 ? _ec(_dc(_l.href.substr(index + 1))) : ""
        };

        var _getWindow = function () {
            try {
                top.document;
                return top
            } catch (e) {
                return window
            }
        };

        var _strictCheck = function (value, force) {
            if (_opts.strict) {
                value = force ? (value.substr(0, 1) != "/" ? "/" + value : value) : (value == "" ? "/" : value)
            }
            return value
        };

        var _ieLocal = function (value, direction) {
            return (_msie && _l.protocol == "file:") ? (direction ? _value.replace(/\?/, "%3F") : _value.replace(/%253F/, "?")) : value
        };

        var _searchScript = function (el) {
            if (el.childNodes) {
                for (var i = 0, l = el.childNodes.length, s; i < l; i++) {
                    if (el.childNodes[i].src) {
                        _url = String(el.childNodes[i].src)
                    }
                    if (s = _searchScript(el.childNodes[i])) {
                        return s
                    }
                }
            }
        };

        var _titleCheck = function () {
            if (_d.title != _title && _d.title.indexOf("#") != -1) {
                _d.title = _title
            }
        };

        var _listen = function () {
            if (!_silent) {
                var hash = _getHash();
                var diff = !(_value == hash);
                if (_safari && _version < 523) {
                    if (_length != _h.length) {
                        _length = _h.length;
                        if (typeof _stack[_length - 1] != UNDEFINED) {
                            _value = _stack[_length - 1]
                        }
                        _update.call(this, false)
                    }
                } else {
                    if (_msie && diff) {
                        if (_version < 7) {
                            _l.reload()
                        } else {
                            this.setValue(hash)
                        }
                    } else {
                        if (diff) {
                            _value = hash;
                            _update.call(this, false)
                        }
                    }
                } if (_msie) {
                    _titleCheck.call(this)
                }
            }
        };

        var _bodyClick = function (e) {
            if (_popup.length > 0) {
                var popup = window.open(_popup[0], _popup[1], eval(_popup[2]));
                if (typeof _popup[3] != UNDEFINED) {
                    eval(_popup[3])
                }
            }
            _popup = []
        };

        var _swfChange = function () {
            for (var i = 0, id, obj, value = FWDRLDL.getValue(), setter = "setFWDRLAddressValue"; id = _ids[i]; i++) {
                obj = document.getElementById(id);
                if (obj) {
                    if (obj.parentNode && typeof obj.parentNode.so != UNDEFINED) {
                        obj.parentNode.so.call(setter, value)
                    } else {
                        if (!(obj && typeof obj[setter] != UNDEFINED)) {
                            var objects = obj.getElementsByTagName("object");
                            var embeds = obj.getElementsByTagName("embed");
                            obj = ((objects[0] && typeof objects[0][setter] != UNDEFINED) ? objects[0] : ((embeds[0] && typeof embeds[0][setter] != UNDEFINED) ? embeds[0] : null))
                        }
                        if (obj) {
                            obj[setter](value)
                        }
                    }
                } else {
                    if (obj = document[id]) {
                        if (typeof obj[setter] != UNDEFINED) {
                            obj[setter](value)
                        }
                    }
                }
            }
        };

        var _jsDispatch = function (type) {
            this.dispatchEvent(new FWDRLEvent(type));
            type = type.substr(0, 1).toUpperCase() + type.substr(1);
            if (typeof this["on" + type] == FUNCTION) {
                this["on" + type]()
            }
        };

        var _jsInit = function () {
            if (_util.Browser.isSafari()) {
                _d.body.addEventListener("click", _bodyClick)
            }
            _jsDispatch.call(this, "init")
        };

        var _jsChange = function () {
            _swfChange();
            _jsDispatch.call(this, "change")
        };

        var _update = function (internal) {
            _jsChange.call(this);
            if (internal) {
                _jsDispatch.call(this, "internalChange")
            } else {
                _jsDispatch.call(this, "externalChange")
            }
            _st(_functions.bind(_track, this), 10)
        };

        var _track = function () {
            var value = (_l.pathname + (/\/$/.test(_l.pathname) ? "" : "/") + this.getValue()).replace(/\/\//, "/").replace(/^\/$/, "");
            var fn = _t[_opts.tracker];
            if (typeof fn == FUNCTION) {
                fn(value)
            } else {
                if (typeof _t.pageTracker != UNDEFINED && typeof _t.pageTracker._trackPageview == FUNCTION) {
                    _t.pageTracker._trackPageview(value)
                } else {
                    if (typeof _t.urchinTracker == FUNCTION) {
                        _t.urchinTracker(value)
                    }
                }
            }
        };

        var _htmlWrite = function () {
            var doc = _frame.contentWindow.document;
            doc.open();
            doc.write("<html><head><title>" + _d.title + "</title><script>var " + ID + ' = "' + _getHash() + '";<\/script></head></html>');
            doc.close()
        };

        var _htmlLoad = function () {
            var win = _frame.contentWindow;
            var src = win.location.href;
            _value = (typeof win[ID] != UNDEFINED ? win[ID] : "");
            if (_value != _getHash()) {
                _update.call(FWDRLDL, false);
                _l.hash = _ieLocal(_value, TRUE)
            }
        };

        var _load = function () {
        
            if (!_loaded) {
                _loaded = TRUE;
                if (_msie && _version < 8) {
                    var frameset = _d.getElementsByTagName("frameset")[0];
                    _frame = _d.createElement((frameset ? "" : "i") + "frame");
                    if (frameset) {
                        frameset.insertAdjacentElement("beforeEnd", _frame);
                        frameset[frameset.cols ? "cols" : "rows"] += ",0";
                        _frame.src = "javascript:false";
                        _frame.noResize = true;
                        _frame.frameBorder = _frame.frameSpacing = 0
                    } else {
                        _frame.src = "javascript:false";
                        _frame.style.display = "none";
                        _d.body.insertAdjacentElement("afterBegin", _frame)
                    }
                    _st(function () {
                        _events.addListener(_frame, "load", _htmlLoad);
                        if (typeof _frame.contentWindow[ID] == UNDEFINED) {
                            _htmlWrite()
                        }
                    }, 50)
                } else {
                    if (_safari) {
                        if (_version < 418) {
                            _d.body.innerHTML += '<form id="' + ID + '" style="position:absolute;top:-9999px;" method="get"></form>';
                            _form = _d.getElementById(ID)
                        }
                        if (typeof _l[ID] == UNDEFINED) {
                            _l[ID] = {}
                        }
                        if (typeof _l[ID][_l.pathname] != UNDEFINED) {
                            _stack = _l[ID][_l.pathname].split(",")
                        }
                    }
                }
                _st(_functions.bind(function () {
                    _jsInit.call(_s);
                    _jsChange.call(_s);
                    _track.call(_s)
                }, _s), 1);
                if (_msie && _version >= 8) {
                    _d.body.onhashchange = _functions.bind(_listen, _s);
                    _si(_functions.bind(_titleCheck, _s), 50)
                } else {
                    _si(_functions.bind(_listen, _s), 50)
                }
            }
        };

        var ID = "swfaddress",
            FUNCTION = "function",
            UNDEFINED = "undefined",
            TRUE = true,
            FALSE = false,
            _util = fwdal.util,
            _browser = _util.Browser,
            _events = _util.Events,
            _functions = _util.Functions,
            _version = _browser.getVersion(),
            _msie = _browser.isMSIE(),
            _mozilla = _browser.isMozilla(),
            _opera = _browser.isOpera(),
            _safari = _browser.isSafari(),
            _supported = TRUE,
            _t = _getWindow(),
            _d = _t.document,
            _h = _t.history,
            _l = _t.location,
            _si = setInterval,
            _st = setTimeout,
            _dc = decodeURI,
            _ec = encodeURI,
            _frame, _form, _url, _title = _d.title,
            _length = _h.length,
            _silent = FALSE,
            _loaded = FALSE,
            _justset = TRUE,
            _juststart = TRUE,
            _ref = this,
            _stack = [],
            _ids = [],
            _popup = [],
            _listeners = {}, _value = _getHash(),
            _opts = {
                history: TRUE,
                strict: TRUE
            };
        if (_msie && _d.documentMode && _d.documentMode != _version) {
            _version = _d.documentMode != 8 ? 7 : 8
        }

        var _s = this;
        if (_supported) {
            if (_opera) {
                history.navigationMode = "compatible"
            }
            for (var i = 1; i < _length; i++) {
                _stack.push("")
            }
            _stack.push(_getHash());
            if (_msie && _l.hash != _getHash()) {
                _l.hash = "#" + _ieLocal(_getHash(), TRUE)
            }
            _searchScript(document);
            var _qi = _url ? _url.indexOf("?") : -1;
            if (_qi != -1) {
                var param, params = _url.substr(_qi + 1).split("&");
                for (var i = 0, p; p = params[i]; i++) {
                    param = p.split("=");
                    if (/^(history|strict)$/.test(param[0])) {
                        _opts[param[0]] = (isNaN(param[1]) ? /^(true|yes)$/i.test(param[1]) : (parseInt(param[1]) != 0))
                    }
                    if (/^tracker$/.test(param[0])) {
                        _opts[param[0]] = param[1]
                    }
                }
            }
            if (_msie) {
                _titleCheck.call(this)
            }

            if(window == _t) {
                _events.addListener(document, "DOMContentLoaded", _functions.bind(_load, this))
            }
            _events.addListener(_t, "load", _functions.bind(_load, this))

            if(document.readyState == 'complete'){
                _load();
            }
        } else {
            if ((!_supported && _l.href.indexOf("#") != -1) || (_safari && _version < 418 && _l.href.indexOf("#") != -1 && _l.search != "")) {
                _d.open();
                _d.write('<html><head><meta http-equiv="refresh" content="0;url=' + _l.href.substr(0, _l.href.indexOf("#")) + '" /></head></html>');
                _d.close()
            } else {
                _track()
            }
        }
        this.toString = function () {
            return "[class FWDRLDL]"
        };
        this.back = function () {
            _h.back()
        };
        this.forward = function () {
            _h.forward()
        };
        this.up = function () {
            var path = this.getPath();
            this.setValue(path.substr(0, path.lastIndexOf("/", path.length - 2) + (path.substr(path.length - 1) == "/" ? 1 : 0)))
        };
        this.go = function (delta) {
            _h.go(delta)
        };
        this.href = function (url, target) {
            target = typeof target != UNDEFINED ? target : "_self";
            if (target == "_self") {
                self.location.href = url
            } else {
                if (target == "_top") {
                    _l.href = url
                } else {
                    if (target == "_blank") {
                        window.open(url)
                    } else {
                        _t.frames[target].location.href = url
                    }
                }
            }
        };
        this.popup = function (url, name, options, handler) {
            try {
                var popup = window.open(url, name, eval(options));
                if (typeof handler != UNDEFINED) {
                    eval(handler)
                }
            } catch (ex) {}
            _popup = arguments
        };
        this.getIds = function () {
            return _ids
        };
        this.getId = function (index) {
            return _ids[0]
        };
        this.setId = function (id) {
            _ids[0] = id
        };
        this.addId = function (id) {
            this.removeId(id);
            _ids.push(id)
        };
        this.removeId = function (id) {
            for (var i = 0; i < _ids.length; i++) {
                if (id == _ids[i]) {
                    _ids.splice(i, 1);
                    break
                }
            }
        };
        this.addEventListener = function (type, listener) {
            if (typeof _listeners[type] == UNDEFINED) {
                _listeners[type] = []
            }
            _listeners[type].push(listener)
        };
        this.removeEventListener = function (type, listener) {
            if (typeof _listeners[type] != UNDEFINED) {
                for (var i = 0, l; l = _listeners[type][i]; i++) {
                    if (l == listener) {
                        break
                    }
                }
                _listeners[type].splice(i, 1)
            }
        };
        this.dispatchEvent = function (event) {
            if (this.hasEventListener(event.type)) {
                event.target = this;
                for (var i = 0, l; l = _listeners[event.type][i]; i++) {
                    l(event)
                }
                return TRUE
            }
            return FALSE
        };
        this.hasEventListener = function (type) {
            return (typeof _listeners[type] != UNDEFINED && _listeners[type].length > 0)
        };
        this.getBaseURL = function () {
            var url = _l.href;
            if (url.indexOf("#") != -1) {
                url = url.substr(0, url.indexOf("#"))
            }
            if (url.substr(url.length - 1) == "/") {
                url = url.substr(0, url.length - 1)
            }
            return url
        };
        this.getStrict = function () {
            return _opts.strict
        };
        this.setStrict = function (strict) {
            _opts.strict = strict
        };
        this.getHistory = function () {
            return _opts.history
        };
        this.setHistory = function (history) {
            _opts.history = history
        };
        this.getTracker = function () {
            return _opts.tracker
        };
        this.setTracker = function (tracker) {
            _opts.tracker = tracker
        };
        this.getTitle = function () {
            return _d.title
        };
        this.setTitle = function (title) {
            if (!_supported) {
                return null
            }
            if (typeof title == UNDEFINED) {
                return
            }
            if (title == "null") {
                title = ""
            }
            title = _dc(title);
            _st(function () {
                _title = _d.title = title;
                if (_juststart && _frame && _frame.contentWindow && _frame.contentWindow.document) {
                    _frame.contentWindow.document.title = title;
                    _juststart = FALSE
                }
                if (!_justset && _mozilla) {
                    _l.replace(_l.href.indexOf("#") != -1 ? _l.href : _l.href + "#")
                }
                _justset = FALSE
            }, 10)
        };
        this.getStatus = function () {
            return _t.status
        };
        this.setStatus = function (status) {
            if (!_supported) {
                return null
            }
            if (typeof status == UNDEFINED) {
                return
            }
            if (status == "null") {
                status = ""
            }
            status = _dc(status);
            if (!_safari) {
                status = _strictCheck((status != "null") ? status : "", TRUE);
                if (status == "/") {
                    status = ""
                }
                if (!(/http(s)?:\/\//.test(status))) {
                    var index = _l.href.indexOf("#");
                    status = (index == -1 ? _l.href : _l.href.substr(0, index)) + "#" + status
                }
                _t.status = status
            }
        };
        this.resetStatus = function () {
            _t.status = ""
        };
        this.getValue = function () {
            if (!_supported) {
                return null
            }
            return _dc(_strictCheck(_ieLocal(_value, FALSE), FALSE))
        };
        this.setValue = function (value) {
            if (!_supported) {
                return null
            }
            if (typeof value == UNDEFINED) {
                return
            }
            if (value == "null") {
                value = ""
            }
            value = _ec(_dc(_strictCheck(value, TRUE)));
            if (value == "/") {
                value = ""
            }
            if (_value == value) {
                return
            }
            _justset = TRUE;
            _value = value;
            _silent = TRUE;
            _update.call(FWDRLDL, true);
            _stack[_h.length] = _value;
            
           
                if (_value != _getHash()) {
                    if (_opts.history) {
                        _l.hash = "#" + _dc(_ieLocal(_value, TRUE))
                    } else {
                        _l.replace("#" + _dc(_value))
                    }
                }
            if ((_msie && _version < 8) && _opts.history) {
                _st(_htmlWrite, 50)
            }
            if (_safari) {
                _st(function () {
                    _silent = FALSE
                }, 1)
            } else {
                _silent = FALSE
            }
        
        };
        this.getPath = function () {
            var value = this.getValue();
            if (value.indexOf("?") != -1) {
                return value.split("?")[0]
            } else {
                if (value.indexOf("#") != -1) {
                    return value.split("#")[0]
                } else {
                    return value
                }
            }
        };
        this.getPathNames = function () {
            var path = this.getPath(),
                names = path.split("/");
            if (path.substr(0, 1) == "/" || path.length == 0) {
                names.splice(0, 1)
            }
            if (path.substr(path.length - 1, 1) == "/") {
                names.splice(names.length - 1, 1)
            }
            return names
        };
        this.getQueryString = function () {
            var value = this.getValue(),
                index = value.indexOf("?");
            if (index != -1 && index < value.length) {
                return value.substr(index + 1)
            }
        };
        this.getParameter = function (param) {
            var value = this.getValue();
            var index = value.indexOf("?");
            if (index != -1) {
                value = value.substr(index + 1);
                var p, params = value.split("&"),
                    i = params.length,
                    r = [];
                while (i--) {
                    p = params[i].split("=");
                    if (p[0] == param) {
                        r.push(p[1])
                    }
                }
                if (r.length != 0) {
                    return r.length != 1 ? r : r[0]
                }
            }
        };
        this.getParameterNames = function () {
            var value = this.getValue();
            var index = value.indexOf("?");
            var names = [];
            if (index != -1) {
                value = value.substr(index + 1);
                if (value != "" && value.indexOf("=") != -1) {
                    var params = value.split("&"),
                        i = 0;
                    while (i < params.length) {
                        names.push(params[i].split("=")[0]);
                        i++
                    }
                }
            }
            return names
        };
        this.onInit = null;
        this.onChange = null;
        this.onInternalChange = null;
        this.onExternalChange = null;
        (function () {
            var _args;
            if (typeof FlashObject != UNDEFINED) {
                SWFObject = FlashObject
            }
            if (typeof SWFObject != UNDEFINED && SWFObject.prototype && SWFObject.prototype.write) {
                var _s1 = SWFObject.prototype.write;
                SWFObject.prototype.write = function () {
                    _args = arguments;
                    if (this.getAttribute("version").major < 8) {
                        this.addVariable("$swfaddress", FWDRLDL.getValue());
                        ((typeof _args[0] == "string") ? document.getElementById(_args[0]) : _args[0]).so = this
                    }
                    var success;
                    if (success = _s1.apply(this, _args)) {
                        _ref.addId(this.getAttribute("id"))
                    }
                    return success
                }
            }
            if (typeof swfobject != UNDEFINED) {
                var _s2r = swfobject.registerObject;
                swfobject.registerObject = function () {
                    _args = arguments;
                    _s2r.apply(this, _args);
                    _ref.addId(_args[0])
                };
                var _s2c = swfobject.createSWF;
                swfobject.createSWF = function () {
                    _args = arguments;
                    var swf = _s2c.apply(this, _args);
                    if (swf) {
                        _ref.addId(_args[0].id)
                    }
                    return swf
                };
                var _s2e = swfobject.embedSWF;
                swfobject.embedSWF = function () {
                    _args = arguments;
                    if (typeof _args[8] == UNDEFINED) {
                        _args[8] = {}
                    }
                    if (typeof _args[8].id == UNDEFINED) {
                        _args[8].id = _args[1]
                    }
                    _s2e.apply(this, _args);
                    _ref.addId(_args[8].id)
                }
            }
            if (typeof UFO != UNDEFINED) {
                var _u = UFO.create;
                UFO.create = function () {
                    _args = arguments;
                    _u.apply(this, _args);
                    _ref.addId(_args[0].id)
                }
            }
            if (typeof AC_FL_RunContent != UNDEFINED) {
                var _a = AC_FL_RunContent;
                AC_FL_RunContent = function () {
                    _args = arguments;
                    _a.apply(this, _args);
                    for (var i = 0, l = _args.length; i < l; i++) {
                        if (_args[i] == "id") {
                            _ref.addId(_args[i + 1])
                        }
                    }
                }
            }
        })()
    };/**
 * Revolution Lightbox PACKAGED v3.0
 * Display Object.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function (window){

	/*
	 * @ type values: div, img.
	 * @ positon values: relative, absolute.
	 * @ positon values: hidden.
	 * @ display values: block, inline-block, _s applies only if the position is relative.
	 */
	var FWDRLDO = function(type, position, overflow, trldo){

		'use strict';
		
		var _s = this;
		_s.listeners = {events_ar:[]};

		if(type == "div" || type == "img" || type == "canvas" || type == "iframe"){
			_s.type = type;	
		}else{
			throw Error("Type is not valid! " + type);
		}
	
		_s.children_ar = [];
		_s.position = position || "absolute";
		_s.overflow = overflow || "hidden";
		_s.trldo = trldo;
		
		_s.visible = true;
		_s.x = _s.y = _s.w = _s.h = 0;
		_s.scale = _s.alpha = 1;
		_s.rotation = 0;
		_s.hasTransform3d_bl =  FWDRLUtils.hasTransform3d;
		_s.hasTransform2d_bl =  FWDRLUtils.hasTransform2d;
		

		/**
	 	 * Initialize.
	 	 */
		_s.init = function(){
			_s.setScreen();
		};	
		

		/**
	 	 * Check for transform type.
	 	 */
		_s.getTransform = function() {
		    var properties = ['transform', 'msTransform', 'WebkitTransform', 'MozTransform', 'OTransform'];
		    var p;
		    while (p = properties.shift()) {
		       if (typeof _s.screen.style[p] !== 'undefined') {
		            return p;
		       }
		    }
		    return false;
		};
		
		
		/**
	 	 * Set the screen.
	 	 */
		_s.setScreen = function(element){
			if(_s.type == "img" && element){
				_s.screen = element;
				_s.setMainProperties();
			}else{
				_s.screen = document.createElement(_s.type);
				_s.setMainProperties();
			}
		};
		
		
		/**
	 	 * Set main properties.
	 	 */
		_s.setMainProperties = function(){
			
			_s.transform = _s.getTransform();
			_s.setPosition(_s.position);
			_s.setOverflow(_s.overflow);
			if(_s.opacityType == "opacity") _s.isHtml5_bl = true;
			
			_s.screen.style.left = "0px";
			_s.screen.style.top = "0px";
			_s.screen.style.margin = "0px";
			_s.screen.style.padding = "0px";
			_s.screen.style.maxWidth = "none";
			_s.screen.style.maxHeight = "none";
			_s.screen.style.border = "none";
			_s.screen.style.lineHeight = "1";
			_s.screen.style.backgroundColor = "transparent";
			_s.screen.style.backfaceVisibility = "hidden";
			_s.screen.style.webkitBackfaceVisibility = "hidden";
			_s.screen.style.MozBackfaceVisibility = "hidden";	
			_s.screen.style.transition = "none";
			_s.screen.style.webkitTransition = "none";
			_s.screen.style.MozTransition = "none";
			_s.screen.style.OTransition = "none";
			
			if(type == "img"){
				_s.setWidth(_s.screen.width);
				_s.setHeight(_s.screen.height);
			}
		};
			
		_s.setBackfaceVisibility =  function(){
			_s.screen.style.backfaceVisibility = "visible";
			_s.screen.style.webkitBackfaceVisibility = "visible";
			_s.screen.style.MozBackfaceVisibility = "visible";		
		};
		

		/**
	 	 * Set / get various properties.
	 	 */
		_s.setSelectable = function(val){
			if(!val){
				_s.screen.style.userSelect = "none";
				_s.screen.style.MozUserSelect = "none";
				_s.screen.style.webkitUserSelect = "none";
				_s.screen.style.khtmlUserSelect = "none";
				_s.screen.style.oUserSelect = "none";
				_s.screen.style.msUserSelect = "none";
				_s.screen.msUserSelect = "none";
				_s.screen.ondragstart = function(e){return false;};
				_s.screen.onselectstart = function(){return false;};
				_s.screen.ontouchstart = function(){return false;};
				_s.screen.style.webkitTouchCallout='none';
				_s.hasBeenSetSelectable = true;
			}
		};
		
		_s.getScreen = function(){
			return _s.screen;
		};
		
		_s.setVisible = function(val){
			_s.visible = val;
			if(_s.visible == true){
				_s.screen.style.visibility = "visible";
			}else{
				_s.screen.style.visibility = "hidden";
			}
		};
		
		_s.getVisible = function(){
			return _s.visible;
		};
		
		_s.setResizableSizeAfterParent = function(){
			_s.screen.style.width = "100%";
			_s.screen.style.height = "100%";
		};
		
		_s.style = function(){
			return _s.screen.style;
		};
		
		_s.setOverflow = function(val){
			_s.overflow = val;
			_s.screen.style.overflow = _s.overflow;
		};
		
		_s.setPosition = function(val){
			_s.position = val;
			_s.screen.style.position = _s.position;
		};
		
		_s.setDisplay = function(val){
			_s.display = val;
			_s.screen.style.display = _s.display;
		};
		
		_s.setButtonMode = function(val){
			_s.buttonMode = val;
			if(_s.buttonMode ==  true){
				_s.screen.style.cursor = "pointer";
			}else{
				_s.screen.style.cursor = "default";
			}
		};
		
		_s.setBkColor = function(val){
			_s.screen.style.backgroundColor = val;
		};
		
		_s.setInnerHTML = function(val){
			_s.innerHTML = val;
			_s.screen.innerHTML = _s.innerHTML;
		};
		
		_s.getInnerHTML = function(){
			return _s.innerHTML;
		};
		
		_s.getRect = function(){
			return _s.screen.getBoundingClientRect();
		};
		
		_s.setAlpha = function(val){
			_s.alpha = val;
			_s.screen.style.opacity = _s.alpha;
		};
		
		_s.getAlpha = function(){
			return _s.alpha;
		};
		
		_s.getRect = function(){
			return _s.screen.getBoundingClientRect();
		};
		
		_s.getGlobalX = function(){
			return _s.getRect().left;
		};
		
		_s.getGlobalY = function(){
			return _s.getRect().top;
		};
		
		_s.setX = function(val){
			_s.x = val;
			if(_s.hasTransform3d_bl){
				if(_s.trldo){
					_s.screen.style[_s.transform] = 'translate3d(' + _s.x + 'px,' + _s.y + 'px,0) scale(' + _s.scale + ' , ' + _s.scale + ') rotate(' + _s.rotation + 'deg)';
				}else{
					_s.screen.style[_s.transform] = 'translate3d(' + _s.x + 'px,' + _s.y + 'px,0)';
				}
			}else if(_s.hasTransform2d_bl){
				if(_s.trldo){
					_s.screen.style[_s.transform] = "translate(" + _s.x + "px," + _s.y + "px) scale(" + _s.scale + " , " + _s.scale + ") rotate(" + _s.rotation + "deg)";
				}else{
					_s.screen.style[_s.transform] = 'translate(' + _s.x + 'px,' + _s.y + 'px)';
				}
			}else{
				_s.screen.style.left = _s.x + "px";
			}
		};
		
		_s.getX = function(){
			return  _s.x;
		};
		
		_s.setY = function(val){
			_s.y = val;
			if(_s.hasTransform3d_bl && !_s.trldo){
				if(_s.trldo){
					_s.screen.style[_s.transform] = 'translate3d(' + _s.x + 'px,' + _s.y + 'px,0) scale(' + _s.scale + ' , ' + _s.scale + ') rotate(' + _s.rotation + 'deg)';
				}else{
					_s.screen.style[_s.transform] = 'translate3d(' + _s.x + 'px,' + _s.y + 'px,0)';
				}
			}else if(_s.hasTransform2d_bl){
				if(_s.trldo){
					_s.screen.style[_s.transform] = "translate(" + _s.x + "px," + _s.y + "px) scale(" + _s.scale + " , " + _s.scale + ") rotate(" + _s.rotation + "deg)";
				}else{
					_s.screen.style[_s.transform] = 'translate(' + _s.x + 'px,' + _s.y + 'px)';
				}
			}else{
				_s.screen.style.top = _s.y + "px";
			}
		};
		
		_s.getY = function(){
			return  _s.y;
		};

		_s.setScale2 = function(val){
			_s.scale = val;
			if(_s.hasTransform2d_bl && _s.trldo){
				_s.screen.style[_s.transform] = "translate(" + _s.x + "px," + _s.y + "px) scale(" + _s.scale + " , " + _s.scale + ") rotate(" + _s.rotation + "deg)";
			}
		};
		
		_s.getScale = function(){
			return  _s.scale;
		};
		
		_s.setRotation = function(val){
			_s.rotation = val;
			if(_s.hasTransform2d_bl && _s.trldo){
				_s.screen.style[_s.transform] = "translate(" + _s.x + "px," + _s.y + "px) scale(" + _s.scale + " , " + _s.scale + ") rotate(" + _s.rotation + "deg)";
			}
		};
		
		_s.setWidth = function(val){
			_s.w = val;
			if(_s.type == "img"){
				_s.screen.width = _s.w;
			}else{
				_s.screen.style.width = _s.w + "px";
			}
		};
		
		_s.setWidth = function(val){
			_s.w = val;
			if(_s.type == "img"){
				_s.screen.width = _s.w;
				_s.screen.style.width = _s.w + "px";
			}else{
				_s.screen.style.width = _s.w + "px";
			}
		
		};
		
		_s.getWidth = function(){
			if(_s.type == "div"){
				if(_s.screen.offsetWidth != 0) return  _s.screen.offsetWidth;
				return _s.w;
			}else if(_s.type == "img"){
				if(_s.screen.offsetWidth != 0) return  _s.screen.offsetWidth;
				if(_s.screen.width != 0) return  _s.screen.width;
				return _s._w;
			}else if( _s.type == "canvas"){
				if(_s.screen.offsetWidth != 0) return  _s.screen.offsetWidth;
				return _s.w;
			}
		};
		
		_s.setHeight = function(val){
			_s.h = val;
			if(_s.type == "img"){
				_s.screen.height = _s.h;
				_s.screen.style.height = _s.h + "px";
			}else{
				_s.screen.style.height = _s.h + "px";
			}
		};
		
		_s.getHeight = function(){
			if(_s.type == "div"){
				if(_s.screen.offsetHeight != 0) return  _s.screen.offsetHeight;
				return _s.h;
			}else if(_s.type == "img"){
				if(_s.screen.offsetHeight != 0) return  _s.screen.offsetHeight;
				if(_s.screen.height != 0) return  _s.screen.height;
				return _s.h;
			}else if(_s.type == "canvas"){
				if(_s.screen.offsetHeight != 0) return  _s.screen.offsetHeight;
				return _s.h;
			}
		};

		
		/**
	 	 * DOM manipulation.
	 	 */
		_s.addChild = function(e){
			if(_s.contains(e)){	
				_s.children_ar.splice(FWDRLUtils.indexOfArray(_s.children_ar, e), 1);
				_s.children_ar.push(e);
				_s.screen.appendChild(e.screen);
			}else{
				_s.children_ar.push(e);
				_s.screen.appendChild(e.screen);
			}
		};
		
		_s.removeChild = function(e){
			if(_s.contains(e)){
				_s.children_ar.splice(FWDRLUtils.indexOfArray(_s.children_ar, e), 1);
				_s.screen.removeChild(e.screen);
			}else{
				throw Error("##removeChild()## Child dose't exist, it can't be removed!");
			};
		};
		
		_s.contains = function(e){
			if(FWDRLUtils.indexOfArray(_s.children_ar, e) == -1){
				return false;
			}else{
				return true;
			}
		};
		
		_s.addChildAt = function(e, index){
			if(_s.getNumChildren() == 0){
				_s.children_ar.push(e);
				_s.screen.appendChild(e.screen);
			}else if(index == 1){
				_s.screen.insertBefore(e.screen, _s.children_ar[0].screen);
				_s.screen.insertBefore(_s.children_ar[0].screen, e.screen);	
				if(_s.contains(e)){
					_s.children_ar.splice(FWDRLUtils.indexOfArray(_s.children_ar, e), 1, e);
				}else{
					_s.children_ar.splice(FWDRLUtils.indexOfArray(_s.children_ar, e), 0, e);
				}
			}else{
				if(index < 0  || index > _s.getNumChildren() -1) throw Error("##getChildAt()## Index out of bounds!");
				
				_s.screen.insertBefore(e.screen, _s.children_ar[index].screen);
				if(_s.contains(e)){
					_s.children_ar.splice(FWDRLUtils.indexOfArray(_s.children_ar, e), 1, e);
				}else{
					_s.children_ar.splice(FWDRLUtils.indexOfArray(_s.children_ar, e), 0, e);
				}
			}
		};
		
		_s.getChildAt = function(index){
			if(index < 0  || index > _s.getNumChildren() -1) throw Error("##getChildAt()## Index out of bounds!");
			if(_s.getNumChildren() == 0) throw Errror("##getChildAt## Child dose not exist!");
			return _s.children_ar[index];
		};
		
		_s.removeChildAtZero = function(){
			_s.screen.removeChild(_s.children_ar[0].screen);
			_s.children_ar.shift();
		};
		
		_s.getNumChildren = function(){
			return _s.children_ar.length;
		};
		
		
		/**
	 	 * Event disaptcher.
	 	 */
		_s.addListener = function (type, listener){
	    	
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	if(typeof listener != "function") throw Error("listener must be of type Function.");
	    	
	    	
	        var event = {};
	        event.type = type;
	        event.listener = listener;
	        event.target = _s;
	        _s.listeners.events_ar.push(event);
	    };
	    
	    _s.dispatchEvent = function(type, props){
	    	if(_s.listeners == null) return;
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	
	        for (var i=0, len=_s.listeners.events_ar.length; i < len; i++){
	        	if(_s.listeners.events_ar[i].target === _s && _s.listeners.events_ar[i].type === type){		
	    	        if(props){
	    	        	for(var prop in props){
	    	        		_s.listeners.events_ar[i][prop] = props[prop];
	    	        	}
	    	        }
	        		_s.listeners.events_ar[i].listener.call(_s, _s.listeners.events_ar[i]);
	        	}
	        }
	    };
	    
	    _s.removeListener = function(type, listener){
	    	
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	if(typeof listener != "function") throw Error("listener must be of type Function." + type);
	    	
	        for (var i=0, len=_s.listeners.events_ar.length; i < len; i++){
	        	if(_s.listeners.events_ar[i].target === _s 
	        			&& _s.listeners.events_ar[i].type === type
	        			&& _s.listeners.events_ar[i].listener ===  listener
	        	){
	        		_s.listeners.events_ar.splice(i,1);
	        		break;
	        	}
	        }  
	    };
	  
		
		/**
	 	 * Destroy.
	 	 */
		_s.destroy = function(){
			if(_s.hasBeenSetSelectable){
				_s.screen.ondragstart = null;
				_s.screen.onselectstart = null;
				_s.screen.ontouchstart = null;
			};
		
			_s.listeners = null;
			_s.listeners = null;
			_s.children_ar = null;
			_s = null;
		};
		
		_s.init();
	};
	
	window.FWDRLDO = FWDRLDO;
}(window));(function (){
	
	var FWDRLEventDispatcher = function (){

		'use strict';
		
	    this.listeners = {events_ar:[]};
	     
	    this.addListener = function (type, listener){
	    	
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	if(typeof listener != "function") throw Error("listener must be of type Function.");
	    	
	    	
	        var event = {};
	        event.type = type;
	        event.listener = listener;
	        event.target = this;
	        this.listeners.events_ar.push(event);
	    };
	    
	    this.dispatchEvent = function(type, props){
	    	if(this.listeners == null) return;
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	
	        for (var i=0, len=this.listeners.events_ar.length; i < len; i++){
	        	if(this.listeners.events_ar[i].target === this && this.listeners.events_ar[i].type === type){		
	    	        if(props){
	    	        	for(var prop in props){
	    	        		this.listeners.events_ar[i][prop] = props[prop];
	    	        	}
	    	        }
	        		this.listeners.events_ar[i].listener.call(this, this.listeners.events_ar[i]);
	        	}
	        }
	    };
	    
	   this.removeListener = function(type, listener){
	    	
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	if(typeof listener != "function") throw Error("listener must be of type Function." + type);
	    	
	        for (var i=0, len=this.listeners.events_ar.length; i < len; i++){
	        	if(this.listeners.events_ar[i].target === this 
	        			&& this.listeners.events_ar[i].type === type
	        			&& this.listeners.events_ar[i].listener ===  listener
	        	){
	        		this.listeners.events_ar.splice(i,1);
	        		break;
	        	}
	        }  
	    };
	    
	    /* destroy */
	    this.destroy = function(){
	    	this.listeners = null;
	    	
	    	this.addListener = null;
		    this.dispatchEvent = null;
		    this.removeListener = null;
	    };
	    
	};	
	
	window.FWDRLEventDispatcher = FWDRLEventDispatcher;
}(window));/**
 * Revolution Lightbox PACKAGED v3.0
 * Hider manager to test touch or mouse inactivity.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function (window){
	
    var FWDRLHider = function(screenToTest, hideDelay){

    	'use strict';
    	
    	var _s = this;
    	var prototype = FWDRLHider.prototype;
   
    	_s.screenToTest = screenToTest;
    	_s.hideDelay = hideDelay;
    	_s.globalX = 0;
    	_s.globalY = 0;
	
    	
    	_s.dspOnceShow = true;
    	_s.isStopped_bl = true;
    	_s.isHidden_bl = false;
    	_s.isMbl = FWDRLUtils.isMbl;
    	_s.hasPointerEvt = FWDRLUtils.hasPointerEvent;
    	
		_s.start = function(){
			_s.currentTime = new Date().getTime();
			clearInterval(_s.check_int);
			_s.check_int = setInterval(_s.update, 100);
			_s.addMouseOrTouchCheck();
			_s.isStopped_bl = false;
			window.addEventListener("click", _s.reset);	
		};
		
		_s.stop = function(){
			clearInterval(_s.check_int);
			_s.isStopped_bl = true;
			_s.removeMT();
			_s.removeMT2();
			window.removeEventListener("click", _s.reset);	
		};

		_s.clickMHU = function(){
			_s.dispatchEvent(FWDRLHider.SHOW);
		}
		
		_s.addMouseOrTouchCheck = function(){	
			if(_s.hasInitialTestEvents_bl) return;
			_s.hasInitialTestEvents_bl = true;
			if(_s.isMbl){
				if(_s.hasPointerEvt){
					_s.screenToTest.screen.addEventListener("pointerdown", _s.onMTUpdate);
					_s.screenToTest.screen.addEventListener("pointermove", _s.onMTUpdate);
				}else{
					_s.screenToTest.screen.addEventListener("touchstart", _s.onMTUpdate);
				}
			}else{
				window.addEventListener("mousemove", _s.onMTUpdate);
				window.addEventListener("click", _s.onMTUpdate);
			}
		};
		
		_s.removeMT = function(){	
			if(!_s.hasInitialTestEvents_bl) return;
			_s.hasInitialTestEvents_bl = false;
			if(_s.isMbl){
				if(_s.hasPointerEvt){
					_s.screenToTest.screen.removeEventListener("pointerdown", _s.onMTUpdate);
					_s.screenToTest.screen.removeEventListener("pointermove", _s.onMTUpdate);
				}else{
					_s.screenToTest.screen.removeEventListener("touchstart", _s.onMTUpdate);
				}
			}else{
				window.removeEventListener("mousemove", _s.onMTUpdate);
			}
		};
		
		_s.onMTUCheck2 = function(){	
			if(_s.addSecondTestEvents_bl) return;
			_s.addSecondTestEvents_bl = true;
			_s.screenToTest.screen.addEventListener("mousemove", _s.secondTestMoveDummy);
			_s.screenToTest.screen.addEventListener("click", _s.secondTestMoveDummy);
		};
		
		_s.removeMT2 = function(){	
			if(!_s.addSecondTestEvents_bl) return;
			_s.addSecondTestEvents_bl = false;
			_s.screenToTest.screen.removeEventListener("mousemove", _s.secondTestMoveDummy);
			_s.screenToTest.screen.removeEventListener("click", _s.secondTestMoveDummy);
		};
		
		_s.secondTestMoveDummy = function(){
			_s.removeMT2();
			_s.addMouseOrTouchCheck();
		};
		
		_s.onMTUpdate = function(e){
			var vmc = FWDRLUtils.getViewportMouseCoordinates(e);	
			
			if(_s.globalX != vmc.screenX
			   && _s.globalY != vmc.screenY){
				_s.currentTime = new Date().getTime();
			}
			
			_s.globalX = vmc.screenX;
			_s.globalY = vmc.screenY;
			
			if(!_s.isMbl){
				if(!FWDRLUtils.hitTest(_s.screenToTest.screen, _s.globalX, _s.globalY)){
					_s.removeMT();
					_s.onMTUCheck2();
				}
			}
		};
	
		_s.update = function(e){
			if(new Date().getTime() > _s.currentTime + _s.hideDelay){
				if(_s.dspOnceShow){	
					_s.dspOnceHide = true;
					_s.dspOnceShow = false;
					_s.isHidden_bl = true;
					_s.dispatchEvent(FWDRLHider.HIDE);
					clearTimeout(_s.hideCompleteId_to);
					_s.hideCompleteId_to = setTimeout(function(){
						_s.dispatchEvent(FWDRLHider.HIDE_COMPLETE);
					}, 1000);
				}
			}else{
				if(_s.dspOnceHide){
					clearTimeout(_s.hideCompleteId_to);
					_s.dspOnceHide = false;
					_s.dspOnceShow = true;
					_s.isHidden_bl = false;
					_s.dispatchEvent(FWDRLHider.SHOW);
				}
			}
		};

		_s.reset = function(){
			_s.isHidden_bl = false;
			clearTimeout(_s.hideCompleteId_to);
			_s.currentTime = new Date().getTime();
			_s.dispatchEvent(FWDRLHider.SHOW);
		};
		
     };
     
	 FWDRLHider.HIDE = "hide";
	 FWDRLHider.SHOW = "show";
	 FWDRLHider.HIDE_COMPLETE = "hideComplete";
	 
	 FWDRLHider.setPrototype = function(){
		 FWDRLHider.prototype = new FWDRLEventDispatcher();
	 };
	 

	 window.FWDRLHider = FWDRLHider;
}(window));/**
 * Revolution Lightbox PACKAGED v3.0
 * Info screen to show errors.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function (window){
	
	var FWDRLInfo = function(prt, warningIconPath){

		'use strict';
		
		var _s = this;
		_s.allowToRemove_bl = true;
		
		/**
		 * Initialize.
		 */
		_s.init = function(){
			_s.setResizableSizeAfterParent();
			_s.style().width = "80%";
		
			_s.textHolder_do = new FWDRLDO("div");
			if(!FWDRLUtils.isIEAndLessThen9) _s.textHolder_do.style().font = "Arial";
			_s.textHolder_do.style().wordWrap = "break-word";
			_s.textHolder_do.style().padding = "10px";
			_s.textHolder_do.style().paddingLeft = "42px";
			_s.textHolder_do.style().lineHeight = "18px";
			_s.textHolder_do.setBkColor("#EEEEEE");
			
			var img_img = new Image();
			img_img.src = warningIconPath;
			_s.img_do = new FWDRLDO("img");
			_s.img_do.setScreen(img_img);
			_s.img_do.setWidth(28);
			_s.img_do.setHeight(28);
			
			_s.addChild(_s.textHolder_do);
			_s.addChild(_s.img_do);
		};
		
		_s.showText = function(txt){
			if(!_s.isShowedOnce_bl){
				if(_s.screen.addEventListener){
					_s.screen.addEventListener("click", _s.closeWindow);
				}else if(_s.screen.attachEvent){
					_s.screen.attachEvent("onclick", _s.closeWindow);
				}
				_s.isShowedOnce_bl = true;
			}
			
			//_s.setX(-800);
			//if(_s.allowToRemove_bl){
			//	_s.textHolder_do.setInnerHTML(txt  + "<p style='margin:0px; padding-bottom:10px;'><font color='#FFFFFF'>Click or tap to close _s window.</font>");
		//	}else{
				
				_s.textHolder_do.setInnerHTML(txt);
			//}
			
			clearTimeout(_s.show_to);
			_s.show();
		};
		
		_s.show = function(){
			_s.isShowed = true;
			_s.setVisible(true);
			setTimeout(function(){
				_s.positionAndResize();
			}, 60);
		};
		
		_s.positionAndResize = function(){		
			_s.setHeight(_s.textHolder_do.getHeight());
			_s.img_do.setX(6);
			_s.img_do.setY(parseInt((_s.h - _s.img_do.h)/2));
	
		};
		
		_s.closeWindow = function(){
			if(!_s.allowToRemove_bl) return;
			_s.isShowed = false;
			clearTimeout(_s.show_to);
			try{prt.main_do.removeChild(_s);}catch(e){}
		};
		
		_s.init();
	};
	
		
	/**
	 * Set prototype.
	 */
	FWDRLInfo.setPrototype = function(){
		FWDRLInfo.prototype = new FWDRLDO("div", "relative");
	};
	
	FWDRLInfo.prototype = null;
	window.FWDRLInfo = FWDRLInfo;
}(window));/**
 * Revolution Lightbox PACKAGED v3.0
 * Preloader and slideshow preloader.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function (window){
	
	var FWDRLPreloader = function(prt, radius, bkClr, fillClr, strokeSize, animDur){

		'use strict';
		
		var _s  = this;
		var prototype = FWDRLPreloader.prototype;
		_s.bkClr = bkClr;
		_s.fillClr = fillClr;
		_s.radius = radius;
		_s.strokeSize = strokeSize;
		_s.animDur = animDur/1000 || 300;
		_s.strtAngle = 270;
		_s.cntAnim = 0;
		_s.isShowed = true;
		_s.angle = {n:0};

		
		/**
	 	 * Initialize.
	 	 */
		_s.init = function(){
			_s.style().pointerEvents = 'none';
			_s.mm_do =  new FWDRLDO("div");
			_s.mm_do.setOverflow('visible');
			
			_s.main_do = new FWDRLDO("div");
			_s.main_do.setOverflow("visible");
			_s.main_do.setWidth(_s.radius * 2 + _s.strokeSize);
			_s.main_do.setHeight(_s.radius * 2 + _s.strokeSize);
			
			_s.setOverflow('visible');
			_s.setWidth((_s.radius * 2) + _s.strokeSize);
			_s.setHeight((_s.radius * 2) + _s.strokeSize);
			_s.mm_do.setWidth(_s.w);
			_s.mm_do.setHeight(_s.h);
			_s.bkCanvas =  new FWDRLDO("canvas");
			_s.bkCtx = _s.bkCanvas.screen.getContext('2d');
			_s.fillCircleCanvas = new FWDRLDO("canvas");
			_s.fillCtx = _s.fillCircleCanvas.screen.getContext('2d');
			_s.main_do.screen.style.transformOrigin = "50% 50%";
			
			_s.main_do.addChild(_s.bkCanvas);
			_s.main_do.addChild(_s.fillCircleCanvas);
			_s.mm_do.addChild(_s.main_do);
			_s.addChild(_s.mm_do);
			_s.drawBackground();
			_s.drawFill();
			_s.hide();
		};


		/**
		 * Set final size.
		 * @param {int} w
		 * @param {int} h
		 */
		_s.setFinalSize = function(w, h){
			_s.main_do.setX(Math.round(w-_s.w)/2);
			_s.main_do.setY(Math.round(h-_s.h)/2);
			_s.setWidth(w);
			_s.setHeight(h);
		}


		/**
		 * Position preloader.
		 */
		_s.position = function(){
			_s.setX(Math.round(prt.sW - _s.w)/2);
			_s.setY(Math.round(Math.min(prt.sH, prt.viewportSize.h) - _s.h)/2);
		}	


		/**
		 * Draw canvas background and fill.
		 */
		_s.drawBackground = function(){
			_s.bkCanvas.screen.width = (_s.radius * 2) + _s.strokeSize * 2;
			_s.bkCanvas.screen.height = (_s.radius * 2) + _s.strokeSize * 2;
			_s.bkCtx.lineWidth = _s.thicknessSize;
			_s.bkCtx.translate(_s.strokeSize/2, _s.strokeSize/2);
			_s.bkCtx.shadowColor = '#333333';
		    _s.bkCtx.shadowBlur = 1;
		   
			_s.bkCtx.lineWidth=_s.strokeSize;
			_s.bkCtx.strokeStyle = _s.bkClr;
			_s.bkCtx.beginPath();
			_s.bkCtx.arc(_s.radius, _s.radius,  _s.radius, (Math.PI/180) * 0, (Math.PI/180) * 360, false);
			_s.bkCtx.stroke();
			_s.bkCtx.closePath();
		};
		
		_s.drawFill = function(p){	
			if(p) _s.angle.n = Math.round(p * 360);	
			_s.fillCircleCanvas.screen.width = (_s.radius * 2) + _s.strokeSize * 2;
			_s.fillCircleCanvas.screen.height = (_s.radius * 2) + _s.strokeSize * 2;
			_s.fillCtx.lineWidth = _s.thicknessSize;
			_s.fillCtx.translate(_s.strokeSize/2, _s.strokeSize/2);
			_s.fillCtx.lineWidth=_s.strokeSize;
			_s.fillCtx.strokeStyle = _s.fillClr;
			_s.fillCtx.beginPath();
			_s.fillCtx.arc(_s.radius, _s.radius,  _s.radius, (Math.PI/180) * _s.strtAngle, (Math.PI/180) * (_s.strtAngle +  _s.angle.n), false);
			_s.fillCtx.stroke();
			_s.fillCtx.closePath();
		};

		
		/**
		 * Animtion logic.
		 */
		_s.startSlideshow = function(o){
			if(_s == null || _s.isSlideShowRun && !o) return;
			_s.isSlideShowRun = true;
			FWDAnimation.killTweensOf(_s.angle);
			FWDAnimation.to(_s.angle, _s.animDur, {n:360, onUpdate:_s.drawFill, onComplete:_s.stopSlideshow});
		};
		
		_s.stopSlideshow = function(o){
			if(!_s.isSlideShowRun && !o) return;	
			_s.isSlideShowRun = false;
			FWDAnimation.killTweensOf(_s.angle);
			FWDAnimation.to(_s.angle, .8, {n:0, onUpdate:_s.drawFill, ease:Expo.easeInOut});
		};

		_s.resetSlideshow = function(){
			FWDAnimation.killTweensOf(_s.angle);
			_s.angle.n = 0;
			_s.drawFill();
		}
		
		_s.startPreloader = function(){
			_s.stopPreloader();
			_s.angle = {n:0};
			FWDAnimation.to(_s.angle, _s.animDur, {n:360, onUpdate:_s.drawFill, repeat:100, yoyo:true, ease:Expo.easeInOut});
			FWDAnimation.to(_s.main_do.screen, _s.animDur, {rotation:360,  repeat:100});
		}

		_s.stopPreloader = function(){
			FWDAnimation.killTweensOf(_s.angle);
			FWDAnimation.killTweensOf(_s.main_do.screen);
			FWDAnimation.to(_s.main_do.screen, 0.00001, {rotation:0});
		}
		
		
		/**
		 * Show/hide logic.
		 */
		_s.show = function(){
			if(_s.isShowed) return;
			_s.setVisible(true);
			FWDAnimation.killTweensOf(_s.mm_do);
			FWDAnimation.to(_s.mm_do, 1, {alpha:1, delay:.2});
			_s.stopPreloader();
			_s.startPreloader();
			_s.isShowed = true;
		};
		
		_s.hide = function(animate){
			if(!_s.isShowed) return;
			FWDAnimation.killTweensOf(_s.mm_do);
			if(animate){
				FWDAnimation.to(_s.mm_do, .2, {alpha:0, onComplete:_s.onHideComplete});
			}else{
				_s.setVisible(false);
				_s.mm_do.setAlpha(0);
			}
			_s.isShowed = false;
		};

		_s.show2 = function(){
			if(_s.isShowed) return;
			_s.isShowed = true;
			_s.setVisible(true);
			FWDAnimation.killTweensOf(_s.mm_do);
			FWDAnimation.to(_s.mm_do, 1, {alpha:1, ease:Expo.easeOut});
		}

		_s.hide2 = function(){
			if(!_s.isShowed) return;
			_s.isShowed = false;
			FWDAnimation.killTweensOf(_s.mm_do);
			FWDAnimation.to(_s.mm_do, 1, {alpha:0, onComplete:_s.onHideComplete, ease:Expo.easeOut});
		}
		
		_s.onHideComplete = function(){
			_s.setVisible(false);
			_s.stopPreloader();
			_s.dispatchEvent(FWDRLPreloader.HIDE_COMPLETE);
		};


		/**
	 	 * Set opacitiy when item is dragged.
	 	 * @param {String} inst
	 	 */
	 	 _s.setHideDrag = function(hide){
	 	 	FWDAnimation.killTweensOf(_s.main_do);
	 	 	if(!hide){
	 	 		FWDAnimation.to(_s.main_do, .4, {alpha:1});
	 	 	}else{
	 	 		FWDAnimation.to(_s.main_do, .4, {alpha:.3, delay:.4});
	 	 	}
	 	 }


		/**
		 * Update colors.
		 * @param {String} bkClr
		 * @param {String} fillClr
		 */
		_s.updateColors = function(bkClr, fillClr){
			_s.bkClr = bkClr;
			_s.fillClr = fillClr;
			_s.bkCtx.strokeStyle = _s.bkClr;
			_s.fillCtx.strokeStyle = _s.fillClr;
			_s.drawBackground();
		}
		
		_s.init();
	};
	
	/**
	 * Prototype.
	 */
    FWDRLPreloader.setPrototype = function(){
    	FWDRLPreloader.prototype = new FWDRLDO("div");
    };
    
    FWDRLPreloader.HIDE_COMPLETE = "hideComplete";
	window.FWDRLPreloader = FWDRLPreloader;
}(window));/**
 * Revolution Lightbox PACKAGED v3.0
 * Share.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function(window){

	'use strict';
	
	var FWDRLShare = function(prt){
		
		var _s = this;
		_s.prt = prt;
		_s._d = prt._d;
		_s.x2 = _s.y2 = 0;

		_s.socialMedia = {
			facebook    : 'https://www.facebook.com/sharer/sharer.php?u=[url]',
			twitter     : 'https://twitter.com/intent/tweet?text=[text]&url=[url]',
			pinterest   : 'https://www.pinterest.com/pin/create/button/?url=[url]&media=[image]&caption=[text]',
			linkedin    : 'https://www.linkedin.com/shareArticle?url=[url]&mini=true&title=[text]',
			reddit      : 'https://www.reddit.com/submit?url=[url]&title=[text]',
			tumblr      : 'https://www.tumblr.com/share?v=3&u=[url]&t=[text]',
			blogger     : 'https://www.blogger.com/blog_this.pyra?t&u=[url]&n=[text]',
			buffer      : 'https://bufferapp.com/add?url=[url]title=[text]',
			digg        : 'https://digg.com/submit?url=[url]&title=[text]'
		};

		
		/**
		 * Initialize.
		 */
		_s.init = function(){
			_s.setOverflow('visible');
			_s.style().width = '100%';
			_s.style().height = '100%';
			_s.setupCnt();
		};

		
		/**
		 * Setup containers.
		 */
		_s.setupCnt = function(){
			_s.bk_do = new FWDRLDO('div');
			_s.bk_do.style().width = '100%';
			_s.bk_do.style().height = '100%';
			_s.bk_do.setBkColor(prt.shareMainBackgroundColor);
			_s.bk_do.screen.addEventListener("click", _s.bkMHU);
			_s.addChild(_s.bk_do);

			_s.mainHld_do = new FWDRLDO('div');
			_s.mainHld_do.screen.className = prt.cls + '-share';
			_s.mainHld_do.setOverflow('visible');
			_s.addChild(_s.mainHld_do);

			_s.text_do = new FWDRLDO('div', 'relative');
			_s.text_do.screen.className = prt.cls + '-text';
			_s.mainHld_do.addChild(_s.text_do);

			_s.hld_do =  new FWDRLDO('div', 'relative');
			_s.hld_do.screen.className = prt.cls + '-buttons-holder';
			_s.mainHld_do.addChild(_s.hld_do);

			_s.setupButtons();
			_s.setupPointer();
			_s.hide(false, true);
		}

		_s.bkMHU = function(){
			_s.hide(true);
		}


		/**
		 * Setup pointers.
		 */
		_s.setupPointer = function(){
			_s.pointer_do = new FWDRLDO("div");
			_s.pointer_do.hasTransform3d_bl = _s.pointer_do.hasTransform2d_bl = false;
			_s.pointer_do.screen.className = prt.cls + '-pointer';
			_s.pointer_do.setBkColor(prt.shareBackgroundColor);
			_s.pointer_do.style().transform = 'rotate(45deg)';
			_s.pointer_do.setWidth(8);
			_s.pointer_do.setHeight(8);
			_s.mainHld_do.addChild(_s.pointer_do);
		}


		/**
		 * Setup buttons.
		 */
		_s.setupButtons = function(){
			_s.buttons = [];

			FWDRLSimpleButton.setPrototype();
			if(prt.useVectorIcons){
				_s.facebook_do = new FWDRLSimpleButton(0, 0, prt.cls,
								'<span class="' + prt.fontIcon + ' ' + prt.fontIcon + '-facebook"></span>',
								 prt.cls + '-button facebook',
								 'selected');
			}else{
				_s.facebook_do = new FWDRLSimpleButton(_s._d.facebookN_img, _s._d.facebookSPath, prt.cls);
			}
			_s.facebook_do.setShareButton('facebook');
			_s.facebook_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.shareMUH);
			_s.hld_do.addChild(_s.facebook_do);
			_s.buttons.push(_s.facebook_do);

			FWDRLSimpleButton.setPrototype();
			if(prt.useVectorIcons){
				_s.twitter_do = new FWDRLSimpleButton(0, 0, prt.cls,
								'<span class="' + prt.fontIcon + ' ' + prt.fontIcon + '-twitter"></span>',
								 prt.cls + '-button twitter',
								 'selected');
			}else{
				_s.twitter_do = new FWDRLSimpleButton(_s._d.twitterN_img, _s._d.twitterSPath, prt.cls);
			}
			_s.twitter_do.setShareButton('twitter');
			_s.twitter_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.shareMUH);
			_s.hld_do.addChild(_s.twitter_do);
			_s.buttons.push(_s.twitter_do);

			FWDRLSimpleButton.setPrototype();
			if(prt.useVectorIcons){
				_s.linkedin_do = new FWDRLSimpleButton(0, 0, prt.cls,
								'<span class="' + prt.fontIcon + ' ' + prt.fontIcon + '-linkedin"></span>',
								 prt.cls + '-button linkedin',
								 'selected');
			}else{
				_s.linkedin_do = new FWDRLSimpleButton(_s._d.linkedinN_img, _s._d.linkedinSPath, prt.cls);
			}
			_s.linkedin_do.setShareButton('linkedin');
			_s.linkedin_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.shareMUH);
			_s.hld_do.addChild(_s.linkedin_do);
			_s.buttons.push(_s.linkedin_do);


			FWDRLSimpleButton.setPrototype();
			if(prt.useVectorIcons){
				_s.tumblr_do = new FWDRLSimpleButton(0, 0, prt.cls,
								'<span class="' + prt.fontIcon + ' ' + prt.fontIcon + '-tumblr"></span>',
								 prt.cls + '-button tumblr',
								 'selected');
			}else{
				_s.tumblr_do = new FWDRLSimpleButton(_s._d.tumblrN_img, _s._d.tumblrSPath, prt.cls);
			}
			_s.tumblr_do.setShareButton('tumblr');
			_s.tumblr_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.shareMUH);
			_s.hld_do.addChild(_s.tumblr_do);
			_s.buttons.push(_s.tumblr_do);

			FWDRLSimpleButton.setPrototype();
			if(prt.useVectorIcons){
				_s.pinterest_do = new FWDRLSimpleButton(0, 0, prt.cls,
								'<span class="' + prt.fontIcon + ' ' + prt.fontIcon + '-pinterest"></span>',
								 prt.cls + '-button pinterest',
								 'selected');
			}else{
				_s.pinterest_do = new FWDRLSimpleButton(_s._d.pinterestN_img, _s._d.pinterestSPath, prt.cls);
			}
			_s.pinterest_do.setShareButton('pinterest');
			_s.pinterest_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.shareMUH);
			_s.hld_do.addChild(_s.pinterest_do);
			_s.buttons.push(_s.pinterest_do);

			FWDRLSimpleButton.setPrototype();
			if(prt.useVectorIcons){
				_s.reddit_do = new FWDRLSimpleButton(0, 0, prt.cls,
								'<span class="' + prt.fontIcon + ' ' + prt.fontIcon + '-reddit"></span>',
								 prt.cls + '-button reddit',
								 'selected');
			}else{
				_s.reddit_do = new FWDRLSimpleButton(_s._d.redditN_img, _s._d.redditSPath, prt.cls);
			}
			_s.reddit_do.setShareButton('reddit');
			_s.reddit_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.shareMUH);
			_s.hld_do.addChild(_s.reddit_do);
			_s.buttons.push(_s.reddit_do);

			FWDRLSimpleButton.setPrototype();
			if(prt.useVectorIcons){
				_s.buffer_do = new FWDRLSimpleButton(0, 0, prt.cls,
								'<span class="' + prt.fontIcon + ' ' + prt.fontIcon + '-buffer"></span>',
								 prt.cls + '-button buffer',
								 'selected');
			}else{
				_s.buffer_do = new FWDRLSimpleButton(_s._d.bufferN_img, _s._d.bufferSPath, prt.cls);
			}
			_s.buffer_do.setShareButton('buffer');
			_s.buffer_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.shareMUH);
			_s.hld_do.addChild(_s.buffer_do);
			_s.buttons.push(_s.buffer_do);

			FWDRLSimpleButton.setPrototype();
			if(prt.useVectorIcons){
				_s.digg_do = new FWDRLSimpleButton(0, 0, prt.cls,
								'<span class="' + prt.fontIcon + ' ' + prt.fontIcon + '-digg"></span>',
								 prt.cls + '-button digg',
								 'selected');
			}else{
				_s.digg_do = new FWDRLSimpleButton(_s._d.diggN_img, _s._d.diggSPath, prt.cls);
			}
			_s.digg_do.setShareButton('digg');
			_s.digg_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.shareMUH);
			_s.hld_do.addChild(_s.digg_do);
			_s.buttons.push(_s.digg_do);

			FWDRLSimpleButton.setPrototype();
			if(prt.useVectorIcons){
				_s.blogger_do = new FWDRLSimpleButton(0, 0, prt.cls,
								'<span class="' + prt.fontIcon + ' ' + prt.fontIcon + '-blogger"></span>',
								 prt.cls + '-button blogger',
								 'selected');
			}else{
				_s.blogger_do = new FWDRLSimpleButton(_s._d.bloggerN_img, _s._d.bloggerSPath, prt.cls);
			}
			_s.blogger_do.setShareButton('blogger');
			_s.blogger_do.addListener(FWDRLSimpleButton.MOUSE_UP, _s.shareMUH);
			_s.hld_do.addChild(_s.blogger_do);
			_s.buttons.push(_s.blogger_do);
			
		}

		_s.shareMUH = function(e){
			_s.shareOn(e.inst);
		}

		/**
		 * Share when button is clicked.
		 * @param {String} type
		 */
		_s.shareOn = function(type){
			var media = prt.gallery_ar[prt.mId],
				image = media.type == FWDRL.IMAGE ? media.src : media.posterSrc,
				url     = _s.socialMedia[type],
				uri
				
			if(prt.sharedURL == 'page') {
				uri = [location.protocol, '//', location.host, location.pathname].join( '' );
			}else if(prt.sharedURL == 'deeplink' || ['iframe', 'HTML'].indexOf(media.type) > -1){
				uri = [location.protocol, '//', location.host, location.pathname].join( '' );
				uri += '#/' + prt.setDL(false);
			}else{
				uri = media.src;
			}

			// convert to absolute path if necessary
			var link = document.createElement('a');
			link.href = image;
			image = link.href;
			link.href = uri;
			uri = link.href;

			var tmp = document.createElement( 'div' );
			tmp.innerHTML = media.caption;
			var text = (tmp.textContent || tmp.innerText).replace( /\s+/g, ' ' ).trim() || '';
			
			url = url.replace('[url]', encodeURIComponent(uri))
				 	.replace('[image]', encodeURIComponent(image))
					.replace('[text]', encodeURIComponent(text || document.title));

			var left = Math.round(window.screenX + (window.outerWidth - 626)/2),
			top  = Math.round(window.screenY + ( window.outerHeight - 436 )/2);
			

			window.open(url, 'fwdrl_share', 'status=0,resizable=1,location=1,toolbar=0,width=626,height=436,top=' + top + ',left=' + left );
		}


		/**
		 * Update text and buttons.
		 */
		_s.update = function(){
			if(!prt.showShareButton) return;
			_s.bk_do.setBkColor(prt.shareMainBackgroundColor);
			_s.mainHld_do.setBkColor(prt.shareBackgroundColor);
			_s.pointer_do.setBkColor(prt.shareBackgroundColor);
			_s.text_do.setInnerHTML(prt.shareText);
			
			var tempBtns = [];
			for(var i=0; i<prt.shareButtons.length; i++){
				var btnName = prt.shareButtons[i];
				for(var j=0; j<_s.buttons.length; j++){
					var btn = _s.buttons[j];
					if(btnName == btn.inst){
						tempBtns.push(btn);
					}
				}
			}

			for(var i=0; i<_s.buttons.length; i++){
				var btn = _s.buttons[i];
				try{
				_s.hld_do.removeChild(btn);
				}catch(e){}
			}

			for(var i=0; i<tempBtns.length; i++){
				var btn = tempBtns[i];
				_s.hld_do.addChild(btn);
			}
		}


		/**
		 * Show/hide.
		 */
		_s.show = function(pos, x, y){
			if(_s.isShowed || prt.isLoading) return;
			_s.isShowed = true;
			_s.setX(0);

			var btnX = prt.shareBtn_do.x;
			var btnY = prt.shareBtn_do.y;
			var btnW = prt.shareBtn_do.w;
			var btnH = prt.shareBtn_do.h;
			var sW = prt.stageW;
			var sH = prt.stageH;
			var wW = _s.mainHld_do.getWidth();
			var wH = _s.mainHld_do.getHeight();
			var x,y,x2,y2;
			var pointerOffset = 4;
		

			if(prt.tempBtnsAlign == FWDRL.BUTTONS_TOP){
				x = btnX - Math.round((wW - btnW)/2);
				y = btnY + btnW + 10; 
				pos = 'top';
				if(x + wW > sW){
					x = btnX - wW + btnW;
					pointerOffset = -(wW - btnW)/2 + 5;
				}
			}else{
				x = btnX + btnW + 10;
				y = btnY - Math.round((wH - btnH)/2);

				if(y < 0){
					pointerOffset = 78;
					y = prt.shareBtn_do.y - 5;
				}
				pos = 'right';
				if(x + wW > sW - 20){
					x = btnX - wW - 10;
					pos = 'left';
				}
			}

			x= Math.round(x);
			y = Math.round(y);


			_s.x2 = x;
			_s.y2 = y;
			if(pos == 'right'){
				_s.x2 = x + 20;
			}else if(pos == 'left'){
				_s.x2 = x - 20;
			}else if(pos == 'top'){
				_s.y2 = y + 20;
			}

			_s.mainHld_do.setX(_s.x2);
			_s.mainHld_do.setY(_s.y2);
			_s.mainHld_do.setAlpha(0);
			_s.bk_do.setAlpha(0)
		
			if(pos == 'top'){
				_s.pointer_do.style().top = ' -4px';
				_s.pointer_do.style().left = 'calc(50% - ' + pointerOffset + 'px)';
			}else if(pos == 'left'){
				_s.pointer_do.style().top = 'calc(50% - ' + pointerOffset + 'px)';
				_s.pointer_do.style().left = 'calc(100% - 4px)';
			}else if(pos == 'right'){
				_s.pointer_do.style().top = 'calc(50% - ' + pointerOffset + 'px)';
				_s.pointer_do.style().left = '-4px';
			}

			FWDAnimation.to(_s.bk_do, .6, {alpha:1, ease:Expo.easeInOut});
			FWDAnimation.to(_s.mainHld_do, .6, {x:x, y:y, alpha:1, ease:Expo.easeInOut});
			_s.setVisible(true);
			_s.dispatchEvent(FWDRLShare.SHOW);
		}

		_s.hide = function(anim, o){
			if(!_s.isShowed && !o || FWDAnimation.isTweening(_s.mainHld_do)) return;
			_s.isShowed = false;

			FWDAnimation.killTweensOf(_s.mainHld_do);
			if(anim){
				FWDAnimation.to(_s.bk_do, .6, {alpha:0, ease:Expo.easeInOut});
				FWDAnimation.to(_s.mainHld_do, .6, {x:_s.x2, y:_s.y2, alpha:0, ease:Expo.easeInOut, onComplete:_s.hideComplete});
			}else{
				_s.hideComplete();
			}
			_s.dispatchEvent(FWDRLShare.HIDE);
		}

		_s.hideComplete = function(){
			_s.setX(-8000);
			_s.setVisible(false);
		}
		
		_s.init();
	};
	
	/**
	 * Prototype.
	 */
	FWDRLShare.setPrototype = function(){
		FWDRLShare.prototype = new FWDRLDO('div');
	};

	FWDRLShare.SHOW = 'show';
	FWDRLShare.HIDE = 'hide';
	
	window.FWDRLShare = FWDRLShare;
}(window));/**
 * Revolution Lightbox PACKAGED v3.0
 * Simple button.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function (window){
	var FWDRLSimpleButton = function(nImg, sPath, cls, html, nClass, sClass){

		'use strict';
		
		var _s = this;
		var prototype = FWDRLSimpleButton.prototype;
		
		_s.nImg = nImg;
		_s.sPath = sPath;
		_s.inst;
		_s.html = html;
		_s.nClass = nClass;
		_s.sClass = sClass;
	
		if(_s.nImg){
			_s.totalWidth = _s.nImg.width;
			_s.totalHeight = _s.nImg.height;
		}
		
		_s.isShowed = true;
		_s.isMbl = FWDRLUtils.isMbl;
		_s.hasPointerEvent_bl = FWDRLUtils.hasPointerEvent;
		
	
		/**
	 	 * Initiolize.
	 	 */
		_s.init = function(){
			_s.setupMainContainers();
		};

		
		/**
	 	 * Setup main containers.
	 	 */
		_s.setupMainContainers = function(){

			if(_s.html){
				_s.n_do = new FWDEVPDO("div");	
				_s.n_do.setInnerHTML(_s.html);
				_s.setNormalState();
				_s.addChild(_s.n_do);

				setTimeout(function(){
					_s.setWidth(parseInt(getComputedStyle(_s.n_do.screen).getPropertyValue("width")));
					_s.setHeight(parseInt(getComputedStyle(_s.n_do.screen).getPropertyValue("height")));
				}, 5);
		
			}else{
				_s.buttonsHolder_do = new FWDRLDO("div");
				_s.buttonsHolder_do.setOverflow("visible");
			
				_s.n_do = new FWDRLDO("img");	
				_s.n_do.setScreen(_s.nImg);
				_s.buttonsHolder_do.addChild(_s.n_do);
				
				var img1 = new Image();
				img1.src = _s.sPath;
				_s.s_do = new FWDRLDO("img");
				_s.s_do.setScreen(img1);
				_s.s_do.setWidth(_s.totalWidth);
				_s.s_do.setHeight(_s.totalHeight);
				_s.s_do.setAlpha(0);
				_s.buttonsHolder_do.addChild(_s.s_do);
				_s.setWidth(_s.totalWidth);
				_s.setHeight(_s.totalHeight);
				
				_s.screen.style.yellowOverlayPointerEvents = "none";
				_s.addChild(_s.buttonsHolder_do);
			}
			
			_s.setButtonMode(true);

			if(_s.isMbl){
				if(_s.hasPointerEvent_bl){
					_s.screen.addEventListener("pointerup", _s.onMouseUp);
					_s.screen.addEventListener("pointerover", _s.onMouseOver);
					_s.screen.addEventListener("pointerout", _s.onMouseOut);
				}else{
					_s.screen.addEventListener("touchend", _s.onMouseUp);
				}
			}else{	
				_s.screen.addEventListener("mouseover", _s.onMouseOver);
				_s.screen.addEventListener("mouseout", _s.onMouseOut);
				_s.screen.addEventListener("mouseup", _s.onMouseUp);
			}
		};
		
		_s.onMouseOver = function(e){
			_s.dispatchEvent(FWDRLSimpleButton.SHOW_TOOLTIP, {e:e});
			if(_s.isDisabledForGood_bl) return;
			if(!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE || e.pointerType == "mouse"){
				if(_s.isDisabled_bl || _s.isSelectedFinal_bl) return;
				_s.dispatchEvent(FWDRLSimpleButton.MOUSE_OVER, {e:e});
				_s.setSelectedState(true);
			}
		};
			
		_s.onMouseOut = function(e){
			if(_s.isDisabledForGood_bl) return;
			if(!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE || e.pointerType == "mouse"){
				if(_s.isDisabled_bl || _s.isSelectedFinal_bl || _s.isDisabled2) return;
				_s.dispatchEvent(FWDRLSimpleButton.MOUSE_OUT, {e:e});
				_s.setNormalState(true);
			}
		};
		
		_s.onMouseUp = function(e){
			if(_s.isDisabledForGood_bl) return;
			if(e.preventDefault) e.preventDefault();
			if(_s.isDisabled_bl || e.button == 2) return;
			_s.dispatchEvent(FWDRLSimpleButton.MOUSE_UP, {e:e, inst:_s.inst});
		};
	

		/**
	 	 * Set normal/selected state.
	 	 */
		_s.setNormalState = function(anim){
			if(_s.html){
				_s.n_do.screen.className = _s.nClass;
			}else{
				FWDAnimation.killTweensOf(_s.s_do);
				FWDAnimation.to(_s.s_do, .5, {alpha:0, ease:Expo.easeOut});	
			}
		};
		
		_s.setSelectedState = function(anim){
			if(_s.html){
				_s.n_do.screen.className = _s.nClass + ' ' + _s.sClass;
			}else{
				FWDAnimation.killTweensOf(_s.s_do);
				FWDAnimation.to(_s.s_do, .5, {alpha:1, delay:.1, ease:Expo.easeOut});
			}
		};
		
		/**
	 	 * Disable/enable.
	 	 */
		_s.disable = function(setNormalState){
			if(_s.isDisabledForGood_bl  || _s.isDisabled_bl) return;
			_s.isDisabled_bl = true;
			_s.setButtonMode(false);
			FWDAnimation.to(_s, .6, {alpha:.4});
			if(!setNormalState) _s.setNormalState();
		};
		
		_s.enable = function(){
			if(_s.isDisabledForGood_bl || !_s.isDisabled_bl) return;
			_s.isDisabled_bl = false;
			_s.setButtonMode(true);
			FWDAnimation.to(_s, .6, {alpha:1});
		};
		
		_s.disableForGood = function(){
			_s.isDisabledForGood_bl = true;
			_s.setButtonMode(false);
		};
		
		_s.disable2 = function(setNormalState){
			if(_s.isDisabled2) return;
			_s.isDisabled2 = true;
			FWDAnimation.to(_s, .6, {alpha:.4});
			if(!setNormalState) _s.setNormalState();
		};
		
		_s.enable2 = function(){
			if(!_s.isDisabled2) return;
			_s.isDisabled2 = false;
			FWDAnimation.to(_s, .6, {alpha:1});
		};


		/**
	 	 * Set button style if the button is a share type.
	 	 * @param {String} inst
	 	 */
	 	 _s.setShareButton = function(inst){
	 	 	_s.inst = inst;
	 	 	_s.screen.className = cls + '-share-button';
	 	 	_s.style().position = 'relative';
			_s.style().display = 'inline-block';
	 	 }


	 	 /**
	 	 * Set opacitiy when item is dragged.
	 	 * @param {String} inst
	 	 */
	 	 _s.setHideDrag = function(hide){
	 	 	FWDAnimation.killTweensOf(_s.n_do);
	 	 	if(!hide){
	 	 		FWDAnimation.to(_s.n_do, .4, {alpha:1});
	 	 	}else{
	 	 		FWDAnimation.to(_s.n_do, .4, {alpha:.3, delay:.4});
	 	 	}
	 	 }

		_s.init();
	};
	
	/**
	 * Set prototype.
	 */
	FWDRLSimpleButton.setPrototype = function(hasTransform){
		FWDRLSimpleButton.prototype = new FWDRLDO("div");		
	};
	
	FWDRLSimpleButton.CLICK = "onClick";
	FWDRLSimpleButton.MOUSE_OVER = "onMouseOver";
	FWDRLSimpleButton.SHOW_TOOLTIP = "showTooltip";
	FWDRLSimpleButton.MOUSE_OUT = "onMouseOut";
	FWDRLSimpleButton.MOUSE_UP = "onMouseDown";
	
	FWDRLSimpleButton.prototype = null;
	window.FWDRLSimpleButton = FWDRLSimpleButton;
}(window));/**
 * Revolution Lightbox PACKAGED v3.0
 * Thumbnail.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function(window){

	'use strict';
	
	var FWDRLThumb = function(
			prt,
			id, 
			thumbnailH,
			thumbnailsOffsetBottom,
			borderSize,
			thumbnailBorderColor,
			thumbnailsOverlayColor,
			iconPath,
			showIcon
		){
		
		var _s = this;
		var prototype = FWDRLThumb.prototype;

		_s.thumbnailsOverlayColor = thumbnailsOverlayColor;

		_s.id = id;
		_s.borderSize = borderSize;
		_s.thumbnailH = thumbnailH;
		_s.isSelected = true;
		_s.isMbl = FWDRLUtils.isMbl;
	
		
		/**
	  	 * Initialize.
	     */
		_s.init = function(){
			_s.setNormalState(false);
			_s.screen.className = FWDRL.cls + '-thumbnail';
			_s.screen.id = FWDRL.cls + '_thumbnail_' + _s.id;
		};

		
		/**
	  	 * Setup border.
	     */
		_s.setupBorder = function(){
			_s.border_do = new FWDRLDO("div");
			_s.border_do.style().boxSizing = 'border-box';
			_s.border_do.style().border = _s.borderSize + 'px solid ' + thumbnailBorderColor;
			_s.border_do.setWidth(_s.finalW);
			_s.border_do.setHeight(_s.finalH);
			_s.border_do.setAlpha(0);
			_s.addChild(_s.border_do);
		};
		
		
		/**
	  	 * Add image.
	     */
		_s.setImage = function(image){
			var imgW = image.width;
			var imgH = image.height;
			var imageHeight =  - _s.borderSize * 2;
			var scale = _s.thumbnailH/imgH;	
			_s.image_do = new FWDRLDO("img");
			_s.image_do.setScreen(image);

			_s.finalW = Math.round((imgW * scale));		
			_s.finalH = _s.thumbnailH;
			
			_s.resizeImage();
			if(_s.isMbl){
				//_s.screen.addEventListener("touchend", _s.onMCH);
			}else{
				_s.screen.addEventListener("mouseover", _s.onMOVH);
				_s.screen.addEventListener("mouseout", _s.onMOTH);
				
			}

			_s.screen.addEventListener("click", _s.onMCH);
		
			_s.addChild(_s.image_do);
			
			_s.overlay_do = new FWDRLDO("div");
			_s.overlay_do.setWidth(_s.finalW);
			_s.overlay_do.setHeight(_s.finalH);
			_s.overlay_do.setBkColor(_s.thumbnailsOverlayColor);
			_s.addChild(_s.overlay_do);
		
			if(showIcon && iconPath){
				_s.icon_do = new FWDRLDO("img");
				_s.iconImg_img = new Image();
				_s.iconImg_img.onload = function(){
					_s.icon_do.setScreen(_s.iconImg_img);
					_s.icon_do.trldo = true;
					_s.icon_do.setX(parseInt((_s.finalW - _s.icon_do.w)/2));
					_s.icon_do.setY(parseInt((_s.finalH - _s.icon_do.h)/2));
					_s.addChild(_s.icon_do);
					setTimeout(function(){
						if(_s){
							 _s.icon_do.setAlpha(0);
							 FWDAnimation.to(_s.icon_do, .8, {alpha:1, ease:Quint.easeOut});
						}
					}, 50);
					
				};
				_s.iconImg_img.src = iconPath;
			}
			
			_s.setupBorder();
			_s.hide(false);
			_s.show(true);
			if(prt.id == _s.id) _s.disable();
			
		};

		_s.resizeImage = function(){
			_s.image_do.setWidth(_s.finalW);
			_s.image_do.setHeight(_s.finalH);
			_s.setWidth(_s.finalW);
			_s.setHeight(_s.finalH);
		}
		
		_s.onMouseOverHandler = function(e){
			_s.dispatchEvent(FWDRLThumb.HOVER);
			if(_s.isDisabled) return;
			if(!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE){
				_s.setSelectedState(true);
			}
		};

		_s.onMOVH = function(e){
			if(_s.isDisabled) return;
			if(!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE){
				_s.setSelectedState(true);
			}
		}

		_s.onMOTH = function(e){
			if(_s.isDisabled) return;
			if(!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE){
				_s.setNormalState(true);
			}
		};
	
		_s.onMCH = function(e){
			if(_s.isDisabled) return;
			
			_s.dispatchEvent(FWDRLThumb.CLICK, {id:_s.id});
		};

		
		/**
	  	 * Set normal/selected state
	  	 * @ param{Boolan} anim
	     */
		_s.setNormalState = function(){
			if(!_s.isSelected) return;
			_s.isSelected = false;

			if(_s.icon_do){
				FWDAnimation.killTweensOf(_s.icon_do);
				FWDAnimation.to(_s.icon_do, 1, {alpha:1, scale:1, ease:Elastic.easeOut});
			} 

			if(_s.border_do){
				FWDAnimation.killTweensOf(_s.border_do);
				FWDAnimation.to(_s.border_do, .6, {alpha:0, ease:Expo.easeOut});
			}

			if(_s.overlay_do){
				FWDAnimation.killTweensOf(_s.overlay_do);
				FWDAnimation.to(_s.overlay_do, .6, {alpha:1, ease:Expo.easeOut});
			} 
		};

		_s.setSelectedState = function(){
			if(_s.isSelected) return;
			_s.isSelected = true;

			if(_s.icon_do){
				FWDAnimation.killTweensOf(_s.icon_do);
				FWDAnimation.to(_s.icon_do, .6, {scale:0, ease:Expo.easeOut});
			} 

			if(_s.border_do){
				FWDAnimation.killTweensOf(_s.border_do);
				FWDAnimation.to(_s.border_do, .6, {alpha:1, ease:Expo.easeOut});
			}

			if(_s.overlay_do){
				FWDAnimation.killTweensOf(_s.overlay_do);
				FWDAnimation.to(_s.overlay_do, .6, {alpha:0, ease:Expo.easeOut});
			} 
		};


		/**
	  	 * Show/hide thumbnails.
	     */
		_s.show = function(animate){
			FWDAnimation.killTweensOf(_s);
			if(animate){
				FWDAnimation.to(_s, .8, {y:0, ease:Expo.easeInOut});
			}else{
				_s.setY(0);
			}
		};
		
		_s.hide = function(animate){	
			FWDAnimation.killTweensOf(_s);
			if(animate){
				FWDAnimation.to(_s, .8, {y:thumbnailsOffsetBottom + _s.thumbnailH + 2});
			}else{
				_s.setY(thumbnailsOffsetBottom + _s.thumbnailH + 2);
			}
		};

		
		/**
	  	 * Disable/enable.
	     */
		_s.enable = function(){
			if(!_s.isDisabled) return;
			_s.isDisabled = false;
			_s.setNormalState(true);
		};
		
		_s.disable = function(){
			_s.isDisabled = true;
			_s.setSelectedState(true);
		};
		
		
		/**
	  	 * Destroy.
	     */
		_s.destroy = function(){
			
			if(_s.iconImg_img){
				_s.iconImg_img.onload = null;
				_s.iconImg_img.onerror = null;
			}
			
			if(_s.border_do){
				FWDAnimation.killTweensOf(_s.border_do);
				_s.border_do.destroy();
			}
			
			if(_s.image_do){
				FWDAnimation.killTweensOf(_s.image_do);
				_s.image_do.destroy();
			}
			
			if(_s.overlay_do){
				FWDAnimation.killTweensOf(_s.overlay_do);
				_s.overlay_do.destroy();
			}
			
			if(_s.icon_do){
				FWDAnimation.killTweensOf(_s.icon_do);
				_s.icon_do.destroy();
			}
			
			_s.screen.removeEventListener("mouseover", _s.onMouseOverHandler);
			_s.screen.removeEventListener("click", _s.onMCH);
			
			_s.iconImg_img = null;
			_s.border_do = null;
			_s.image_do = null;
			_s.overlay_do = null;
			_s.icon_do = null;
			
			_s.setInnerHTML("");
			prototype.destroy();
			prototype = null;
			_s = null;
			FWDRLThumb.prototype = null;
		};

		_s.init();
	};

	/* set prototype */
	FWDRLThumb.setPrototype = function(){
		FWDRLThumb.prototype = new FWDRLDO("div");
	};
	
	FWDRLThumb.HOVER =  "onHover";
	FWDRLThumb.CLICK =  "onClick";
	
	FWDRLThumb.prototype = null;
	window.FWDRLThumb = FWDRLThumb;
}(window));/**
 * Revolution Lightbox PACKAGED v3.0
 * Thumbnails manager.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function (window){
	
	var FWDRLThumbs = function(prt){

		'use strict';
		
		var _s = this;
		var prototype = FWDRLThumbs.prototype;
		
		_s._d = prt._d;
		_s.spaceBetweenThumbnails = prt.spaceBetweenThumbnails;
		_s.totalW = 0;
		_s.vx = 0;
		_s.vx2 = 0;
		_s.lastPresedX = 0;
		_s.totalThumbs = 0;	
		_s.countLoadedThumbs = 0;
		_s.id = 0;
		_s.areCreated = false;
		_s.isMbl = FWDRLUtils.isMbl;
		

		/**
	  	 * Initialize.
	     */
		_s.init = function(){
			_s.setOverflow("visible");
			_s.mainHld_do = new FWDRLDO("div");
			_s.mainHld_do.setOverflow("visible");
			
			_s.thumbsHld_do = new FWDRLDO("div"); 
			_s.thumbsHld_do.setOverflow("visible");
			_s.mainHld_do.addChild(_s.thumbsHld_do);
			
			_s.addChild(_s.mainHld_do);
		};

		
		/**
	  	 * Position and resize.
	     */
		_s.positionAndResize = function(){
			_s.stageW = prt.stageW;
			_s.setY(prt.stageH);
			_s.mainHld_do.setWidth(_s.stageW);
			_s.mainHld_do.setHeight(_s.stageH);
			_s.show(false);
			if(_s.areCreated) _s.positionThumbnails(false);
		};

		
		/**
	  	 * Create thumbnails.
	     */
		_s.setupThumbnails = function(){
			_s.areCreated = true;
			_s.thumbs_ar = [];
			_s.gallery_ar = prt.gallery_ar;
			_s.totalThumbs = _s.gallery_ar.length;
			_s.countLoadedThumbs = 0;
			_s.loadThumbnails();
			_s.addScrollSupport();
		};
		
		_s.loadThumbnails = function(){
			if(_s.countLoadedThumbs > _s.totalThumbs-1){
				_s.allLoaded_to = setTimeout(function(){
					_s.allLoaded = true;
				}, 2000);
				return;
			}

			_s.image_img = new Image();
			_s.image_img.onload = _s.onThumbnailLoadComplete;
			_s.image_img.src = _s.gallery_ar[_s.countLoadedThumbs].thumbSrc;
		};
	
		_s.onThumbnailLoadComplete = function(e){
			if(!prt.gallery_ar) return;
			var iconType = prt.gallery_ar[_s.countLoadedThumbs].type;
			var iconPath;
			
			if(iconType == FWDRL.AUDIO
			|| iconType == FWDRL.VIDEO
			|| iconType == FWDRL.YOUTUBE
			|| iconType == FWDRL.VIMEO){
				iconPath = _s._d.videoIconPath;
			}
			
			FWDRLThumb.setPrototype();
			var thumb = new FWDRLThumb(
					_s,
					_s.countLoadedThumbs, 
					prt.thumbnailH,
					prt.tempThumbnailsOffsetBottom,
					prt.thumbnailsBorderSize,
					prt.thumbnailsBorderColor,
					prt.thumbnailsOverlayColor,
					iconPath,
					prt.showThumbnailsIcon);
			_s.thumbs_ar[_s.countLoadedThumbs] = thumb;

			thumb.addListener(FWDRLThumb.HOVER, _s.thumbMOH);
			thumb.addListener(FWDRLThumb.CLICK, _s.thumbMCH);
			thumb.setImage(_s.image_img);

			_s.totalW += thumb.w + _s.spaceBetweenThumbnails;
			if(_s.countLoadedThumbs == _s.totalThumbs - 1) _s.totalW -= _s.spaceBetweenThumbnails;
			
			if(_s.countLoadedThumbs !=0){
				thumb.setX(_s.thumbs_ar[_s.countLoadedThumbs - 1].x + _s.thumbs_ar[_s.countLoadedThumbs - 1].w + _s.spaceBetweenThumbnails);
			}

			if(_s.countLoadedThumbs == 0) _s.thumbsHld_do.setX(Math.round(_s.stageW - thumb.w)/2);
		
			_s.thumbsHld_do.addChild(thumb);
			_s.positionThumbnails(true);	
			_s.countLoadedThumbs++;
			_s.loadWithDelayId_to = setTimeout(_s.loadThumbnails, 50);	
		};
		
		_s.stopToLoadThumbanils = function(){
			if(_s.image_img){
				_s.image_img.onload = null;
				_s.image_img.onerror = null;
				_s.image_img.src = "";
				_s.image_img = null;
			}
			clearTimeout(_s.loadWithDelayId_to);
		};
		
		_s.thumbMCH = function(e){
			if(!prt.isShowed || _s.isMv) return;
			_s.dispatchEvent(FWDRLThumb.CLICK, {id:e.id});
		};
		
		_s.thumbMOH = function(){
			if(!prt.isShowed) return;
		};


		/**
	  	 * Position thumbnails.
	     */
		_s.positionThumbnails = function(anim, o){
			
			if((_s.isDragging || !_s.isShowed || prt.startToHide) && !o) return;

			if(!_s.areCreated) return;
			
			_s.finalX;
			_s.curThumb = _s.thumbs_ar[_s.id];
			_s.lastCreateThumb = _s.thumbs_ar[_s.thumbs_ar.length - 1];
			
			if(_s.totalW <= _s.stageW){
				_s.finalX = Math.round((_s.stageW - _s.totalW)/2);
			}else{
				if(_s.curThumb){
					_s.finalX = Math.round(-_s.curThumb.x + (_s.stageW - _s.curThumb.w)/2);
				}else{
					_s.finalX = Math.round(-_s.lastCreateThumb.x + (_s.stageW - _s.lastCreateThumb.w)/2);
				}
				
				if(_s.finalX > prt.tempThumbnailsOffsetBottom){
					_s.finalX = prt.tempThumbnailsOffsetBottom;
				}else if(_s.finalX < (_s.stageW - _s.totalW - prt.tempThumbnailsOffsetBottom)){
					_s.finalX = _s.stageW - _s.totalW - prt.tempThumbnailsOffsetBottom;
				}
			}
			
			_s.thumbsHld_do.setWidth(_s.totalW);
			_s.thumbsHld_do.setHeight(_s.stageH);

			_s.stopToUpdateDrag();
			
			if(!_s.isDragging){
				var ease = Expo.easeOut;
				if(_s.allLoaded) ease = Expo.easeInOut;
				FWDAnimation.killTweensOf(_s.thumbsHld_do);
				if(anim){
					FWDAnimation.to(_s.thumbsHld_do, .8, {x:_s.finalX, ease:ease});
				}else{
					_s.thumbsHld_do.setX(_s.finalX);
				}
			}
		};

		
		/**
	  	 * Add scroll support.
	     */
		_s.addScrollSupport = function(){
			_s.mainHld_do.screen.addEventListener("touchstart", _s.scrollMDH);
			_s.mainHld_do.screen.addEventListener("mousedown", _s.scrollMDH);
			_s.thumbsHld_do.style().cursor = prt.handC;
			_s.stopToUpdateDrag();
		};
		
		_s.removeScrollSupport = function(){
			_s.mainHld_do.screen.removeEventListener("touchstart", _s.scrollMDH);
			_s.mainHld_do.screen.removeEventListener("mousedown", _s.scrollMDH);
			window.removeEventListener("touchend", _s.scrollMEH);
			window.removeEventListener("touchmove", _s.scrollMVH, {passive:false});
		};
		
		_s.scrollMDH = function(e){
			if(prt.isAnim) return;
			var vmc = FWDRLUtils.getViewportMouseCoordinates(e);

			window.addEventListener("mouseup", _s.scrollMEH);
			window.addEventListener("mousemove", _s.scrollMVH);
			window.addEventListener("touchend", _s.scrollMEH);
			window.addEventListener("touchmove", _s.scrollMVH, {passive:false});
			_s.isDragging2 = true;
			clearTimeout(_s.isMv_to);
			_s.isMv = false;
					
			_s.finalX = _s.lastFinalX = _s.thumbsHld_do.x;
			_s.lastPresedX = _s.lastPresedX2 = vmc.screenX;

			_s.thumbsHld_do.style().cursor = prt.grabC;
			prt.showDisable(true);
			_s.startToUpdateDrag();
		};
		
		_s.scrollMVH = function(e){
			if(e.preventDefault) e.preventDefault();
			var vmc = FWDRLUtils.getViewportMouseCoordinates(e);
			
			var toAdd = vmc.screenX - _s.lastPresedX;
			_s.finalX += toAdd;
			_s.finalX = Math.round(_s.finalX);
			
			var dx = vmc.screenX - _s.lastPresedX2;
			_s.lastPresedX = vmc.screenX;
			if(Math.abs(dx) > 5){
				_s.isDragging = true;
				prt.showDisable(true, true);
				_s.isMv = true;
			}
			FWDAnimation.killTweensOf(_s.thumbsHld_do)
			_s.thumbsHld_do.setX(_s.finalX);
		};
		
		_s.scrollMEH = function(e){
			_s.isDragging = _s.isDragging2 = false;
			clearTimeout(_s.isMv_to);
			_s.isMv_to = setTimeout(function(){
				_s.isMv = true;
			}, 200);
			
			
			prt.hideDisable();
			_s.thumbsHld_do.style().cursor = prt.handC;
			window.removeEventListener("mouseup", _s.scrollMEH);
			window.removeEventListener("mousemove", _s.scrollMVH);
			window.removeEventListener("touchend", _s.scrollMEH);
			window.removeEventListener("touchmove", _s.scrollMVH);
		};
	
		_s.stopToUpdateDrag = function(){
			FWDAnimation.killTweensOf(_s.thumbsHld_do)
			cancelAnimationFrame(_s.updateMov_af);
		}

		_s.startToUpdateDrag = function(){
			_s.stopToUpdateDrag();
			_s.updateDrag();
		}
		
		_s.updateDrag = function(){
			_s.updateMov_af = requestAnimationFrame(_s.updateDrag);
			
			if(_s.isDragging2){
				_s.vx = _s.finalX - _s.lastFinalX;
				_s.lastFinalX = _s.finalX;	
				if(Math.abs(_s.vx) < 20){
					_s.vx = 0;
				}
			}else{
				_s.vx *= prt.friction;		
				_s.finalX += _s.vx;

				if(_s.stageW <= _s.totalW){
					if(_s.finalX > prt.tempThumbnailsOffsetBottom){
						_s.vx2 = (prt.tempThumbnailsOffsetBottom - _s.finalX) * .3;
						_s.vx *= prt.friction;
						_s.finalX += _s.vx2;
					}else if(_s.finalX <= _s.stageW - _s.totalW - prt.tempThumbnailsOffsetBottom){
						_s.vx2 = (_s.stageW - _s.totalW - _s.finalX - prt.tempThumbnailsOffsetBottom) * .3;
						_s.vx *= prt.friction;
						_s.finalX += _s.vx2;
					}
				}else{
					_s.vx2 = ((_s.stageW - _s.totalW)/2 - _s.finalX) * .3;
					_s.vx *= prt.friction;
					_s.finalX += _s.vx2;
					
				}

				_s.finalX = parseFloat(_s.finalX.toFixed(2));				
				if(_s.prevFinalX == _s.finalX){
					_s.stopToUpdateDrag();
					_s.finalX = Math.round(_s.finalX);
				}
				
				FWDAnimation.killTweensOf(_s.thumbsHld_do);
				_s.thumbsHld_do.setX(_s.finalX);
				_s.prevFinalX = _s.finalX;
			}
		};
	
		
		/**
	  	 * Disable/enable thumbanils.
	     */
		_s.disableOrEnableThumbnails = function(){
			_s.id = prt.mId;
			if(!_s.thumbs_ar) return;
			var thumb;
			var totalThumbs = _s.thumbs_ar.length;
			for(var i=0; i<totalThumbs; i++){
				thumb = _s.thumbs_ar[i];
				if(i == prt.mId){
					thumb.disable();
				}else{
					thumb.enable();
				}
			}
			_s.positionThumbnails(true);
		};

		
		/**
	  	 * Destroy thumbanils.
	     */
		_s.destoryThumbnails = function(){
			if(!_s.areCreated && !_s.thumbs_ar) return;
			_s.areCreated = _s.allLoaded = false;
			clearTimeout(_s.allLoaded_to);
			var thumb;
			var totalThumbs = _s.thumbs_ar.length;
			for(var i=0; i<totalThumbs; i++){
				thumb = _s.thumbs_ar[i];
				FWDAnimation.killTweensOf(thumb);
				_s.thumbsHld_do.removeChild(thumb);
				thumb.destroy();
			}
			_s.thumbs_ar = null;
			_s.totalW = 0;
			_s.stopToLoadThumbanils();
			 _s.removeScrollSupport();
		};

		
		/**
	  	 * Show/hide.
	     */
		_s.show = function(animate){
			if(prt.isMax) return;
			_s.isShowed = true;
			FWDAnimation.killTweensOf(_s.mainHld_do);
			if(animate){
				FWDAnimation.to(_s.mainHld_do, .8, {y:-_s.stageH, ease:Expo.easeInOut});
			}else{
				_s.mainHld_do.setY(-_s.stageH);
			}
		};
		
		_s.hide = function(animate){
			_s.isShowed = false;
			FWDAnimation.killTweensOf(_s.mainHld_do);
			if(animate){
				FWDAnimation.to(_s.mainHld_do, .8, {y:0, ease:Expo.easeInOut});
			}else{
				_s.mainHld_do.setY(0);
			}
			_s.stopToUpdateDrag();
		};
		
		_s.hideForGood = function(){
			_s.mainHld_do.setY(-5000);
		};
		
		_s.init();
	};
		
	/**
  	 * Set prototype.
     */
	FWDRLThumbs.setPrototype = function(){
		FWDRLThumbs.prototype = new FWDRLDO("div", "relative");
	};
	
	FWDRLThumbs.prototype = null;
	window.FWDRLThumbs = FWDRLThumbs;
}(window));/**
 * Revolution Lightbox PACKAGED v3.0
 * Timer manager for the slideshow.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */
(function(window){
	
	var FWDRLTimerManager = function(delay){

		'use strict';
		
		var _s = this;
		var prototpype = FWDRLTimerManager.prototype;
		
		_s.delay = delay;
		_s.isStopped = true;
		
		_s.stop = function(){
			if(_s.isStopped) return;
			_s.pause();
			_s.isStopped = true;
			_s.dispatchEvent(FWDRLTimerManager.STOP);
		};
		
		_s.start = function(){
			if(!_s.isStopped) return;
			_s.isStopped = false;
			clearTimeout(_s.timeOutId);
			_s.timeOutId = setTimeout(_s.onTimeHandler, _s.delay);
			_s.dispatchEvent(FWDRLTimerManager.START);
		};
		
		_s.pause = function(){
			if(_s.isStopped) return;
			clearTimeout(_s.timeOutId);
			_s.dispatchEvent(FWDRLTimerManager.PAUSE);
		};
		
		_s.resume = function(dl){
			if(_s.isStopped) return;
			clearTimeout(_s.timeOutId);
			_s.timeOutId = setTimeout(_s.onTimeHandler, _s.delay);
			_s.dispatchEvent(FWDRLTimerManager.RESUME);
		};
		
		_s.onTimeHandler = function(){
			_s.dispatchEvent(FWDRLTimerManager.TIME);
		};
	};

	FWDRLTimerManager.setProtptype = function(){
		FWDRLTimerManager.prototype = new FWDRLEventDispatcher();
	};
	
	FWDRLTimerManager.START = "start";
	FWDRLTimerManager.STOP = "stop";
	FWDRLTimerManager.RESUME = "resume";
	FWDRLTimerManager.PAUSE = "pause";
	FWDRLTimerManager.TIME = "time";
	
	FWDRLTimerManager.prototype = null;
	window.FWDRLTimerManager = FWDRLTimerManager;
	
}(window));//FWDRLUtils
(function (window){
	
	var FWDRLUtils = function(){};
	
	FWDRLUtils.dumy = document.createElement("div");
	
	//###################################//
	/* String */
	//###################################//
	FWDRLUtils.trim = function(str){
		return str.replace(/\s/gi, "");
	};
	
	FWDRLUtils.splitAndTrim = function(str, trim_bl){
		var array = str.split(",");
		var length = array.length;
		for(var i=0; i<length; i++){
			if(trim_bl) array[i] = FWDRLUtils.trim(array[i]);
		};
		return array;
	};

	//#############################################//
	//Array //
	//#############################################//
	FWDRLUtils.indexOfArray = function(array, prop){
		var length = array.length;
		for(var i=0; i<length; i++){
			if(array[i] === prop) return i;
		};
		return -1;
	};
	
	FWDRLUtils.randomizeArray = function(aArray) {
		var randomizedArray = [];
		var copyArray = aArray.concat();
			
		var length = copyArray.length;
		for(var i=0; i< length; i++) {
				var index = Math.floor(Math.random() * copyArray.length);
				randomizedArray.push(copyArray[index]);
				copyArray.splice(index,1);
			}
		return randomizedArray;
	};
	

	//#############################################//
	/*DOM manipulation */
	//#############################################//
	FWDRLUtils.prt = function (e, n){
		if(n === undefined) n = 1;
		while(n-- && e) e = e.parentNode;
		if(!e || e.nodeType !== 1) return null;
		return e;
	};
	
	FWDRLUtils.sibling = function(e, n){
		while (e && n !== 0){
			if(n > 0){
				if(e.nextElementSibling){
					 e = e.nextElementSibling;	 
				}else{
					for(var e = e.nextSibling; e && e.nodeType !== 1; e = e.nextSibling);
				}
				n--;
			}else{
				if(e.previousElementSibling){
					 e = e.previousElementSibling;	 
				}else{
					for(var e = e.previousSibling; e && e.nodeType !== 1; e = e.previousSibling);
				}
				n++;
			}
		}
		return e;
	};
	
	FWDRLUtils.getChildAt = function (e, n){
		var kids = FWDRLUtils.getChildren(e);
		if(n < 0) n += kids.length;
		if(n < 0) return null;
		return kids[n];
	};
	
	FWDRLUtils.getChildById = function(id){
		return document.getElementById(id) || undefined;
	};
	
	FWDRLUtils.getChildren = function(e, allNodesTypes){
		var kids = [];
		for(var c = e.firstChild; c != null; c = c.nextSibling){
			if(allNodesTypes){
				kids.push(c);
			}else if(c.nodeType === 1){
				kids.push(c);
			}
		}
		return kids;
	};
	
	FWDRLUtils.getChildrenFromAttribute = function(e, attr, allNodesTypes){
		var kids = [];
		for(var c = e.firstChild; c != null; c = c.nextSibling){
			if(allNodesTypes && FWDRLUtils.hasAttribute(c, attr)){
				kids.push(c);
			}else if(c.nodeType === 1 && FWDRLUtils.hasAttribute(c, attr)){
				kids.push(c);
			}
		}
		return kids.length == 0 ? undefined : kids;
	};
	
	FWDRLUtils.getChildFromNodeListFromAttribute = function(e, attr, allNodesTypes){
		for(var c = e.firstChild; c != null; c = c.nextSibling){
			if(allNodesTypes && FWDRLUtils.hasAttribute(c, attr)){
				return c;
			}else if(c.nodeType === 1 && FWDRLUtils.hasAttribute(c, attr)){
				return c;
			}
		}
		return undefined;
	};
	
	FWDRLUtils.getAttributeValue = function(e, attr){
		if(!FWDRLUtils.hasAttribute(e, attr)) return undefined;
		return e.getAttribute(attr);	
	};
	
	FWDRLUtils.hasAttribute = function(e, attr){
		if(e.hasAttribute){
			return e.hasAttribute(attr); 
		}else {
			var test = e.getAttribute(attr);
			return  test ? true : false;
		}
	};
	
	FWDRLUtils.insertNodeAt = function(prt, child, n){
		var children = FWDRLUtils.children(prt);
		if(n < 0 || n > children.length){
			throw new Error("invalid index!");
		}else {
			prt.insertBefore(child, children[n]);
		};
	};
	
	FWDRLUtils.hasCanvas = function(){
		return Boolean(document.createElement("canvas"));
	};
	
	//###################################//
	/* DOM geometry */
	//##################################//
	FWDRLUtils.hitTest = function(target, x, y){
		var hit = false;
		if(!target) throw Error("Hit test target is null!");
		var rect = target.getBoundingClientRect();
		
		if(x >= rect.left && x <= rect.left +(rect.right - rect.left) && y >= rect.top && y <= rect.top + (rect.bottom - rect.top)) return true;
		return false;
	};
	
	FWDRLUtils.getScrollOffsets = function(){
		//all browsers
		if(window.pageXOffset != null) return{x:window.pageXOffset, y:window.pageYOffset};
		
		//ie7/ie8
		if(document.compatMode == "CSS1Compat"){
			return({x:document.documentElement.scrollLeft, y:document.documentElement.scrollTop});
		}
	};
	
	FWDRLUtils.getViewportSize = function(){
		if(FWDRLUtils.hasPointerEvent && navigator.msMaxTouchPoints > 1){
			return {w:document.documentElement.clientWidth || window.innerWidth, h:document.documentElement.clientHeight || window.innerHeight};
		}
		
		if(FWDRLUtils.isMbl) return {w:window.innerWidth, h:window.innerHeight};
		return {w:document.documentElement.clientWidth || window.innerWidth, h:document.documentElement.clientHeight || window.innerHeight};
	};
	
	FWDRLUtils.getViewportMouseCoordinates = function(e){
		var offsets = FWDRLUtils.getScrollOffsets();
		
		if(e.touches){
			return{
				screenX:e.touches[0] == undefined ? e.touches.pageX - offsets.x :e.touches[0].pageX - offsets.x,
				screenY:e.touches[0] == undefined ? e.touches.pageY - offsets.y :e.touches[0].pageY - offsets.y
			};
		}
		
		return{
			screenX: e.clientX == undefined ? e.pageX - offsets.x : e.clientX,
			screenY: e.clientY == undefined ? e.pageY - offsets.y : e.clientY
		};
	};
	
	
	//###################################//
	/* Browsers test */
	//##################################//
	FWDRLUtils.hasPointerEvent = (function(){
		return Boolean(window.navigator.msPointerEnabled) || Boolean(window.navigator.pointerEnabled);
	}());
	
	FWDRLUtils.isMbl = (function (){
		if((FWDRLUtils.hasPointerEvent && navigator.msMaxTouchPoints > 1) || (FWDRLUtils.hasPointerEvent && navigator.maxTouchPoints > 1)) return true;
		var agents = ['android', 'webos', 'iphone', 'ipad', 'blackberry', 'kfsowi'];
	    for(i in agents) {
	    	 if(String(navigator.userAgent).toLowerCase().indexOf(String(agents[i]).toLowerCase()) != -1) {
	            return true;
	        }
	    }
	    if(navigator.platform.toLowerCase() === 'macintel' && navigator.maxTouchPoints > 1 && !window.MSStream) return true;
	    return false;
	}());
	
	FWDRLUtils.isAndroid = (function(){
		 return (navigator.userAgent.toLowerCase().indexOf("android".toLowerCase()) != -1);
	}());
	
	FWDRLUtils.isChrome = (function(){
		return navigator.userAgent.toLowerCase().indexOf('chrome') != -1;
	}());
	
	FWDRLUtils.isSafari = (function(){
		return navigator.userAgent.toLowerCase().indexOf('safari') != -1 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1;
	}());
	
	FWDRLUtils.isOpera = (function(){
		return navigator.userAgent.toLowerCase().indexOf('opera') != -1 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1;
	}());
	
	FWDRLUtils.isFirefox = (function(){
		return navigator.userAgent.toLowerCase().indexOf('firefox') != -1;
	}());
	
	FWDRLUtils.isIE = (function(){
		var isIE = Boolean(navigator.userAgent.toLowerCase().indexOf('msie') != -1) || Boolean(navigator.userAgent.toLowerCase().indexOf('edge') != -1);
		return Boolean(isIE || document.documentElement.msRequestFullscreen);
	}());
	
	FWDRLUtils.isIE11 = (function(){
		return Boolean(!FWDRLUtils.isIE && document.documentElement.msRequestFullscreen);
	}());
	
	FWDRLUtils.isIEAndLessThen9 = (function(){
		return navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 || navigator.userAgent.toLowerCase().indexOf("msie 8") != -1;
	}());
	
	FWDRLUtils.isIEAndLessThen10 = (function(){
		return navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 
		|| navigator.userAgent.toLowerCase().indexOf("msie 8") != -1
		|| navigator.userAgent.toLowerCase().indexOf("msie 9") != -1;
	}());
	
	FWDRLUtils.isIE7 = (function(){
		return navigator.userAgent.toLowerCase().indexOf("msie 7") != -1;
	}());
	
	FWDRLUtils.isIOS = (function(){
		return navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
	}());
	
	FWDRLUtils.isIphone = (function(){
		return navigator.userAgent.match(/(iPhone|iPod)/g);
	}());
	
	FWDRLUtils.isMAC = (function(){
		return navigator.appVersion.toLowerCase().indexOf('macintosh') != -1;
	}());
	
	FWDRLUtils.isLocal = (function(){
		return location.href.indexOf('file:') != -1;
	}());
	
	FWDRLUtils.hasFullScreen = (function(){
		return FWDRLUtils.dumy.requestFullScreen || FWDRLUtils.dumy.mozRequestFullScreen || FWDRLUtils.dumy.webkitRequestFullScreen || FWDRLUtils.dumy.msieRequestFullScreen;
	}());
	
	function get3d(){
	    var properties = ['transform', 'msTransform', 'WebkitTransform', 'MozTransform', 'OTransform', 'KhtmlTransform'];
	    var p;
	    var position;
	    while (p = properties.shift()) {
	       if (typeof FWDRLUtils.dumy.style[p] !== 'undefined') {
	    	   FWDRLUtils.dumy.style.position = "absolute";
	    	   position = FWDRLUtils.dumy.getBoundingClientRect().left;
	    	   FWDRLUtils.dumy.style[p] = 'translate3d(500px, 0px, 0px)';
	    	   position = Math.abs(FWDRLUtils.dumy.getBoundingClientRect().left - position);
	    	   
	           if(position > 100 && position < 900){
	        	   try{document.documentElement.removeChild(FWDRLUtils.dumy);}catch(e){}
	        	   return true;
	           }
	       }
	    }
	    try{document.documentElement.removeChild(FWDRLUtils.dumy);}catch(e){}
	    return false;
	};
	
	function get2d(){
	    var properties = ['transform', 'msTransform', 'WebkitTransform', 'MozTransform', 'OTransform', 'KhtmlTransform'];
	    var p;
	    while (p = properties.shift()) {
	       if (typeof FWDRLUtils.dumy.style[p] !== 'undefined') {
	    	   return true;
	       }
	    }
	    try{document.documentElement.removeChild(FWDRLUtils.dumy);}catch(e){}
	    return false;
	};	
	
	//###############################################//
	/* various utils */
	//###############################################//
	FWDRLUtils.onReady =  function(callbalk){
		if (document.addEventListener) {

			if (document. readyState === 'complete'){

			}else{
				document.addEventListener( "DOMContentLoaded", function(){
					callbalk();
				});
			}
		}else{
			document.onreadystatechange = function () {
				if (document.readyState == "complete") callbalk();
			};
		 }
	};
	
	FWDRLUtils.checkIfHasTransforms = function(){
		if(FWDRLUtils.isReadyMethodCalled_bl) return;
		document.documentElement.appendChild(FWDRLUtils.dumy);
		FWDRLUtils.hasTransform3d = get3d();
		FWDRLUtils.hasTransform2d = get2d();
		FWDRLUtils.isReadyMethodCalled_bl = true;
	};
	
	FWDRLUtils.disableElementSelection = function(e){
		try{e.style.userSelect = "none";}catch(e){};
		try{e.style.MozUserSelect = "none";}catch(e){};
		try{e.style.webkitUserSelect = "none";}catch(e){};
		try{e.style.khtmlUserSelect = "none";}catch(e){};
		try{e.style.oUserSelect = "none";}catch(e){};
		try{e.style.msUserSelect = "none";}catch(e){};
		try{e.msUserSelect = "none";}catch(e){};
		e.onselectstart = function(){return false;};
	};
	
	FWDRLUtils.getSearchArgs = function(){
		var args = {};
		var query = location.href.substr(location.href.indexOf("?") + 1);
		
		var pairs = query.split("&");
		
		for(var i=0; i< pairs.length; i++){
			var pos = pairs[i].indexOf("=");
			var name = pairs[i].substring(0,pos);
			var value = pairs[i].substring(pos + 1);
			value = decodeURIComponent(value);
			args[name] = value;
		}
		return args;
	};
	
	FWDRLUtils.getHashArgs = function(string){
		var args = {};
		var query = string.substr(string.indexOf("#") + 1) || location.hash.substring(1);
		var pairs = query.split("&");
		for(var i=0; i< pairs.length; i++){
			var pos = pairs[i].indexOf("=");
			var name = pairs[i].substring(0,pos);
			var value = pairs[i].substring(pos + 1);
			value = decodeURIComponent(value);
			args[name] = value;
		}
		return args;
	};
	
	
	FWDRLUtils.isReadyMethodCalled_bl = false;
	
	window.FWDRLUtils = FWDRLUtils;
}(window));

// FWDAnimation classs for tweeningn not allowed to modify or use outside this plugin!
var _fwd_fwdScope;window.FWDAnimation||(((_fwd_fwdScope="undefined"!=typeof fwd_module&&fwd_module.exports&&"undefined"!=typeof fwd_global?fwd_global:this||window)._fwd_fwdQueue||(_fwd_fwdScope._fwd_fwdQueue=[])).push(function(){"use strict";function y(t,e,i,r){i===r&&(i=r-(r-e)/1e6),t===e&&(e=t+(i-t)/1e6),this.a=t,this.b=e,this.c=i,this.d=r,this.da=r-t,this.ca=i-t,this.ba=e-t}function w(t,e,i,r){var s={a:t},n={},a={},o={c:r},l=(t+e)/2,h=(e+i)/2,f=(i+r)/2,u=(l+h)/2,p=(h+f)/2,_=(p-u)/8;return s.b=l+(t-l)/4,n.b=u+_,s.c=n.a=(s.b+n.b)/2,n.c=a.a=(u+p)/2,a.b=p-_,o.b=f+(r-f)/4,a.c=o.a=(a.b+o.b)/2,[s,n,a,o]}function _(t,e,i,r,s,n){var a,o,l,h,f,u,p,_,c={},d=[],m=n||t[0];for(o in s="string"==typeof s?","+s+",":",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",null==e&&(e=1),t[0])d.push(o);if(1<t.length){for(_=t[t.length-1],p=!0,a=d.length;-1<--a;)if(o=d[a],.05<Math.abs(m[o]-_[o])){p=!1;break}p&&(t=t.concat(),n&&t.unshift(n),t.push(t[1]),n=t[t.length-3])}for(T.length=P.length=O.length=0,a=d.length;-1<--a;)o=d[a],g[o]=-1!==s.indexOf(","+o+","),c[o]=function(t,e,i,r){var s,n,a,o,l,h,f=[];if(r)for(n=(t=[r].concat(t)).length;-1<--n;)"string"==typeof(h=t[n][e])&&"="===h.charAt(1)&&(t[n][e]=r[e]+Number(h.charAt(0)+h.substr(2)));if((s=t.length-2)<0)return f[0]=new y(t[0][e],0,0,t[s<-1?0:1][e]),f;for(n=0;n<s;n++)a=t[n][e],o=t[n+1][e],f[n]=new y(a,0,0,o),i&&(l=t[n+2][e],T[n]=(T[n]||0)+(o-a)*(o-a),P[n]=(P[n]||0)+(l-o)*(l-o));return f[n]=new y(t[n][e],0,0,t[n+1][e]),f}(t,o,g[o],n);for(a=T.length;-1<--a;)T[a]=Math.sqrt(T[a]),P[a]=Math.sqrt(P[a]);if(!r){for(a=d.length;-1<--a;)if(g[o])for(u=(l=c[d[a]]).length-1,h=0;h<u;h++)f=l[h+1].da/P[h]+l[h].da/T[h]||0,O[h]=(O[h]||0)+f*f;for(a=O.length;-1<--a;)O[a]=Math.sqrt(O[a])}for(a=d.length,h=i?4:1;-1<--a;)(function(t,e,i,r,s){for(var n,a,o,l,h,f,u,p,_,c,d,m,g=t.length-1,y=0,v=t[0].a,x=0;x<g;x++)n=(l=t[y]).a,a=l.d,o=t[y+1].d,u=s?(c=T[x],m=((d=P[x])+c)*e*.25/(!r&&O[x]||.5),a-((h=a-(a-n)*(r?.5*e:0!==c?m/c:0))+(((f=a+(o-a)*(r?.5*e:0!==d?m/d:0))-h)*(3*c/(c+d)+.5)/4||0))):a-((h=a-(a-n)*e*.5)+(f=a+(o-a)*e*.5))/2,h+=u,f+=u,l.c=p=h,l.b=0!==x?v:v=l.a+.6*(l.c-l.a),l.da=a-n,l.ca=p-n,l.ba=v-n,i?(_=w(n,v,p,a),t.splice(y,1,_[0],_[1],_[2],_[3]),y+=4):y++,v=f;(l=t[y]).b=v,l.c=v+.4*(l.d-v),l.da=l.d-l.a,l.ca=l.c-l.a,l.ba=v-l.a,i&&(_=w(l.a,v,l.c,l.d),t.splice(y,1,_[0],_[1],_[2],_[3]))})(l=c[o=d[a]],e,i,r,g[o]),p&&(l.splice(0,h),l.splice(l.length-h,h));return c}var b,T,P,O,g,i,m,t;_fwd_fwdScope.FWDFWD_fwdDefine("FWDAnimation",["core.FWDAnimation","core.FWDSimpleTimeline","FWDTweenLite"],function(m,f,g){function y(t){for(var e=[],i=t.length,r=0;r!==i;e.push(t[r++]));return e}function v(t,e,i){var r,s,n=t.cycle;for(r in n)s=n[r],t[r]="function"==typeof s?s(i,e[i]):s[i%s.length];delete t.cycle}var m=function(t,e,i){g.call(this,t,e,i),this._cycle=0,this._yoyo=!0===this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=m.prototype.render},x=1e-10,w=g._internals,T=w.isSelector,b=w.isArray,t=m.prototype=g.to({},.1,{}),P=[];m.version="1.19.0",t.constructor=m,t.kill()._gc=!1,m.killTweensOf=m.killDelayedCallsTo=g.killTweensOf,m.getTweensOf=g.getTweensOf,m.lagSmoothing=g.lagSmoothing,m.ticker=g.ticker,m.render=g.render,t.invalidate=function(){return this._yoyo=!0===this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),g.prototype.invalidate.call(this)},t.updateTo=function(t,e){var i,r=this.ratio,s=this.vars.immediateRender||t.immediateRender;for(i in e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay)),t)this.vars[i]=t[i];if(this._initted||s)if(e)this._initted=!1,s&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&g._onPluginEvent("_onDisable",this),.998<this._time/this._duration){var n=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(n,!0,!1)}else if(this._initted=!1,this._init(),0<this._time||s)for(var a,o=1/(1-r),l=this._firstPT;l;)a=l.s+l.c,l.c*=o,l.s=a-l.c,l=l._next;return this},t.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var r,s,n,a,o,l,h,f,u,p=this._dirty?this.totalDuration():this._totalDuration,_=this._time,c=this._totalTime,d=this._cycle,m=this._duration,g=this._rawPrevTime;if(p-1e-7<=t?(this._totalTime=p,this._cycle=this._repeat,this._yoyo&&0!=(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=m,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(r=!0,s="onComplete",i=i||this._timeline.autoRemoveChildren),0===m&&(!this._initted&&this.vars.lazy&&!i||(this._startTime===this._timeline._duration&&(t=0),(g<0||t<=0&&-1e-7<=t||g===x&&"isPause"!==this.data)&&g!==t&&(i=!0,x<g&&(s="onReverseComplete")),this._rawPrevTime=f=!e||t||g===t?t:x))):t<1e-7?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==c||0===m&&0<g)&&(s="onReverseComplete",r=this._reversed),t<0&&(this._active=!1,0===m&&(!this._initted&&this.vars.lazy&&!i||(0<=g&&(i=!0),this._rawPrevTime=f=!e||t||g===t?t:x))),this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(a=m+this._repeatDelay,this._cycle=this._totalTime/a>>0,0!==this._cycle&&this._cycle===this._totalTime/a&&c<=t&&this._cycle--,this._time=this._totalTime-this._cycle*a,this._yoyo&&0!=(1&this._cycle)&&(this._time=m-this._time),this._time>m?this._time=m:this._time<0&&(this._time=0)),this._easeType?(o=this._time/m,(1===(l=this._easeType)||3===l&&.5<=o)&&(o=1-o),3===l&&(o*=2),1===(h=this._easePower)?o*=o:2===h?o*=o*o:3===h?o*=o*o*o:4===h&&(o*=o*o*o*o),1===l?this.ratio=1-o:2===l?this.ratio=o:this._time/m<.5?this.ratio=o/2:this.ratio=1-o/2):this.ratio=this._ease.getRatio(this._time/m)),_!==this._time||i||d!==this._cycle){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=_,this._totalTime=c,this._rawPrevTime=g,this._cycle=d,w.lazyTweens.push(this),void(this._lazy=[t,e]);this._time&&!r?this.ratio=this._ease.getRatio(this._time/m):r&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(!1!==this._lazy&&(this._lazy=!1),this._active||!this._paused&&this._time!==_&&0<=t&&(this._active=!0),0===c&&(2===this._initted&&0<t&&this._init(),this._startAt&&(0<=t?this._startAt.render(t,e,i):s=s||"_dummyGS"),this.vars.onStart&&(0===this._totalTime&&0!==m||e||this._callback("onStart"))),n=this._firstPT;n;){n.f?n.t[n.p](n.c*this.ratio+n.s):(u=n.c*this.ratio+n.s,"x"==n.p?n.t.setX(u):"y"==n.p?n.t.setY(u):"z"==n.p?n.t.setZ(u):"angleX"==n.p?n.t.setAngleX(u):"angleY"==n.p?n.t.setAngleY(u):"angleZ"==n.p?n.t.setAngleZ(u):"w"==n.p?n.t.setWidth(u):"h"==n.p?n.t.setHeight(u):"alpha"==n.p?n.t.setAlpha(u):"scale"==n.p?n.t.setScale2(u):n.t[n.p]=u),n=n._next}this._onUpdate&&(t<0&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||this._totalTime===c&&!s||this._callback("onUpdate")),this._cycle!==d&&(e||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),s&&(this._gc&&!i||(t<0&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),r&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[s]&&this._callback(s),0===m&&this._rawPrevTime===x&&f!==x&&(this._rawPrevTime=0)))}else c!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate"))},m.to=function(t,e,i){return new m(t,e,i)},m.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new m(t,e,i)},m.fromTo=function(t,e,i,r){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,new m(t,e,r)},m.staggerTo=m.allTo=function(t,e,i,r,s,n,a){r=r||0;function o(){i.onComplete&&i.onComplete.apply(i.onCompleteScope||this,arguments),s.apply(a||i.callbackScope||this,n||P)}var l,h,f,u,p=0,_=[],c=i.cycle,d=i.startAt&&i.startAt.cycle;for(b(t)||("string"==typeof t&&(t=g.selector(t)||t),T(t)&&(t=y(t))),t=t||[],r<0&&((t=y(t)).reverse(),r*=-1),l=t.length-1,f=0;f<=l;f++){for(u in h={},i)h[u]=i[u];if(c&&(v(h,t,f),null!=h.duration&&(e=h.duration,delete h.duration)),d){for(u in d=h.startAt={},i.startAt)d[u]=i.startAt[u];v(h.startAt,t,f)}h.delay=p+(h.delay||0),f===l&&s&&(h.onComplete=o),_[f]=new m(t[f],e,h),p+=r}return _},m.staggerFrom=m.allFrom=function(t,e,i,r,s,n,a){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,m.staggerTo(t,e,i,r,s,n,a)},m.staggerFromTo=m.allFromTo=function(t,e,i,r,s,n,a,o){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,m.staggerTo(t,e,r,s,n,a,o)},m.delayedCall=function(t,e,i,r,s){return new m(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:r,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,useFrames:s,overwrite:0})},m.set=function(t,e){return new m(t,0,e)},m.isTweening=function(t){return 0<g.getTweensOf(t,!0).length};var n=function(t,e){for(var i=[],r=0,s=t._first;s;)s instanceof g?i[r++]=s:(e&&(i[r++]=s),r=(i=i.concat(n(s,e))).length),s=s._next;return i},u=m.getAllTweens=function(t){return n(m._rootTimeline,t).concat(n(m._rootFramesTimeline,t))};m.killAll=function(t,e,i,r){null==e&&(e=!0),null==i&&(i=!0);for(var s,n,a=u(0!=r),o=a.length,l=e&&i&&r,h=0;h<o;h++)n=a[h],(l||n instanceof f||(s=n.target===n.vars.onComplete)&&i||e&&!s)&&(t?n.totalTime(n._reversed?0:n.totalDuration()):n._enabled(!1,!1))},m.killChildTweensOf=function(t,e){if(null!=t){var i,r,s,n,a,o=w.tweenLookup;if("string"==typeof t&&(t=g.selector(t)||t),T(t)&&(t=y(t)),b(t))for(n=t.length;-1<--n;)m.killChildTweensOf(t[n],e);else{for(s in i=[],o)for(r=o[s].target.parentNode;r;)r===t&&(i=i.concat(o[s].tweens)),r=r.parentNode;for(a=i.length,n=0;n<a;n++)e&&i[n].totalTime(i[n].totalDuration()),i[n]._enabled(!1,!1)}}};function r(t,e,i,r){e=!1!==e,i=!1!==i;for(var s,n,a=u(r=!1!==r),o=e&&i&&r,l=a.length;-1<--l;)n=a[l],(o||n instanceof f||(s=n.target===n.vars.onComplete)&&i||e&&!s)&&n.paused(t)}return m.pauseAll=function(t,e,i){r(!0,t,e,i)},m.resumeAll=function(t,e,i){r(!1,t,e,i)},m.globalTimeScale=function(t){var e=m._rootTimeline,i=g.ticker.time;return arguments.length?(t=t||x,e._startTime=i-(i-e._startTime)*e._timeScale/t,e=m._rootFramesTimeline,i=g.ticker.frame,e._startTime=i-(i-e._startTime)*e._timeScale/t,e._timeScale=m._rootTimeline._timeScale=t):e._timeScale},t.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!=(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},t.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},t.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!=(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},t.duration=function(t){return arguments.length?m.prototype.duration.call(this,t):this._duration},t.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},t.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},t.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},t.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},m},!0),b=180/Math.PI,T=[],P=[],O=[],g={},i=_fwd_fwdScope.FWDFWD_fwdDefine.globals,m=_fwd_fwdScope.FWDFWD_fwdDefine.plugin({propName:"bezier",priority:-1,version:"1.3.7",API:2,fwd_global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._mod={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var r,s,n,a,o,l,h=e.values||[],f={},u=h[0],p=e.autoRotate||i.vars.orientToBezier;for(r in this._autoRotate=p?p instanceof Array?p:[["x","y","rotation",!0!==p&&Number(p)||0]]:null,u)this._props.push(r);for(n=this._props.length;-1<--n;)r=this._props[n],this._overwriteProps.push(r),s=this._func[r]="function"==typeof t[r],f[r]=s?t[r.indexOf("set")||"function"!=typeof t["get"+r.substr(3)]?r:"get"+r.substr(3)]():parseFloat(t[r]),o||f[r]!==h[0][r]&&(o=f);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?_(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):function(t,e,i){var r,s,n,a,o,l,h,f,u,p,_,c={},d="cubic"===(e=e||"soft")?3:2,m="soft"===e,g=[];if(m&&i&&(t=[i].concat(t)),null==t||t.length<1+d)throw"invalid Bezier data";for(u in t[0])g.push(u);for(l=g.length;-1<--l;){for(c[u=g[l]]=o=[],p=0,f=t.length,h=0;h<f;h++)r=null==i?t[h][u]:"string"==typeof(_=t[h][u])&&"="===_.charAt(1)?i[u]+Number(_.charAt(0)+_.substr(2)):Number(_),m&&1<h&&h<f-1&&(o[p++]=(r+o[p-2])/2),o[p++]=r;for(f=p-d+1,h=p=0;h<f;h+=d)r=o[h],s=o[h+1],n=o[h+2],a=2==d?0:o[h+3],o[p++]=_=3==d?new y(r,s,n,a):new y(r,(2*s+r)/3,(2*s+n)/3,n);o.length=p}return c}(h,e.type,f),this._segCount=this._beziers[r].length,this._timeRes&&(l=function(t,e){var i,r,s,n,a=[],o=[],l=0,h=0,f=(e=e>>0||6)-1,u=[],p=[];for(i in t)!function(t,e,i){for(var r,s,n,a,o,l,h,f,u,p,_,c=1/i,d=t.length;-1<--d;)for(n=(p=t[d]).a,a=p.d-n,o=p.c-n,l=p.b-n,r=s=0,f=1;f<=i;f++)r=s-(s=((h=c*f)*h*a+3*(u=1-h)*(h*o+u*l))*h),e[_=d*i+f-1]=(e[_]||0)+r*r}(t[i],a,e);for(s=a.length,r=0;r<s;r++)l+=Math.sqrt(a[r]),p[n=r%e]=l,n===f&&(h+=l,u[n=r/e>>0]=p,o[n]=h,l=0,p=[]);return{length:h,lengths:o,segments:u}}(this._beziers,this._timeRes),this._length=l.length,this._lengths=l.lengths,this._segments=l.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length),p=this._autoRotate)for(this._initialRotations=[],p[0]instanceof Array||(this._autoRotate=p=[p]),n=p.length;-1<--n;){for(a=0;a<3;a++)r=p[n][a],this._func[r]="function"==typeof t[r]&&t[r.indexOf("set")||"function"!=typeof t["get"+r.substr(3)]?r:"get"+r.substr(3)];r=p[n][2],this._initialRotations[n]=(this._func[r]?this._func[r].call(this._target):this._target[r])||0,this._overwriteProps.push(r)}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(t){var e,i,r,s,n,a,o,l,h,f=this._segCount,u=this._func,p=this._target,_=t!==this._startRatio;if(this._timeRes){if(l=this._lengths,h=this._curSeg,t*=this._length,T=this._li,t>this._l2&&T<f-1){for(o=f-1;T<o&&(this._l2=l[++T])<=t;);this._l1=l[T-1],this._li=T,this._curSeg=h=this._segments[T],this._s2=h[this._s1=this._si=0]}else if(t<this._l1&&0<T){for(;0<T&&(this._l1=l[--T])>=t;);0===T&&t<this._l1?this._l1=0:T++,this._l2=l[T],this._li=T,this._curSeg=h=this._segments[T],this._s1=h[(this._si=h.length-1)-1]||0,this._s2=h[this._si]}if(e=T,t-=this._l1,T=this._si,t>this._s2&&T<h.length-1){for(o=h.length-1;T<o&&(this._s2=h[++T])<=t;);this._s1=h[T-1],this._si=T}else if(t<this._s1&&0<T){for(;0<T&&(this._s1=h[--T])>=t;);0===T&&t<this._s1?this._s1=0:T++,this._s2=h[T],this._si=T}n=(T+(t-this._s1)/(this._s2-this._s1))*this._prec||0}else n=(t-(e=t<0?0:1<=t?f-1:f*t>>0)*(1/f))*f;for(i=1-n,T=this._props.length;-1<--T;)r=this._props[T],a=(n*n*(s=this._beziers[r][e]).da+3*i*(n*s.ca+i*s.ba))*n+s.a,this._mod[r]&&(a=this._mod[r](a,p)),u[r]?p[r](a):"x"==r?p.setX(a):"y"==r?p.setY(a):"z"==r?p.setZ(a):"angleX"==r?p.setAngleX(a):"angleY"==r?p.setAngleY(a):"angleZ"==r?p.setAngleZ(a):"w"==r?p.setWidth(a):"h"==r?p.setHeight(a):"alpha"==r?p.setAlpha(a):"scale"==r?p.setScale2(a):p[r]=a;if(this._autoRotate)for(var c,d,m,g,y,v,x,w=this._autoRotate,T=w.length;-1<--T;)r=w[T][2],v=w[T][3]||0,x=!0===w[T][4]?1:b,s=this._beziers[w[T][0]],c=this._beziers[w[T][1]],s&&c&&(s=s[e],c=c[e],d=s.a+(s.b-s.a)*n,d+=((g=s.b+(s.c-s.b)*n)-d)*n,g+=(s.c+(s.d-s.c)*n-g)*n,m=c.a+(c.b-c.a)*n,m+=((y=c.b+(c.c-c.b)*n)-m)*n,y+=(c.c+(c.d-c.c)*n-y)*n,a=_?Math.atan2(y-m,g-d)*x+v:this._initialRotations[T],this._mod[r]&&(a=this._mod[r](a,p)),u[r]?p[r](a):p[r]=a)}}),t=m.prototype,m.bezierThrough=_,m.cubicToQuadratic=w,m._autoCSS=!0,m.quadraticToCubic=function(t,e,i){return new y(t,(2*e+t)/3,(2*e+i)/3,i)},m._cssRegister=function(){var t,_,c,d,e=i.CSSPlugin;e&&(t=e._internals,_=t._parseToProxy,c=t._setPluginRatio,d=t.CSSPropTween,t._registerComplexSpecialProp("bezier",{parser:function(t,e,i,r,s,n){e instanceof Array&&(e={values:e}),n=new m;var a,o,l,h=e.values,f=h.length-1,u=[],p={};if(f<0)return s;for(a=0;a<=f;a++)l=_(t,h[a],r,s,n,f!==a),u[a]=l.end;for(o in e)p[o]=e[o];return p.values=u,(s=new d(t,"bezier",0,0,l.pt,2)).data=l,s.plugin=n,s.setRatio=c,0===p.autoRotate&&(p.autoRotate=!0),!p.autoRotate||p.autoRotate instanceof Array||(a=!0===p.autoRotate?0:Number(p.autoRotate),p.autoRotate=null!=l.end.left?[["left","top","rotation",a,!1]]:null!=l.end.x&&[["x","y","rotation",a,!1]]),p.autoRotate&&(r._transform||r._enableTransforms(!1),l.autoRotate=r._target._fwdTransform,l.proxy.rotation=l.autoRotate.rotation||0,r._overwriteProps.push("rotation")),n._onInitTween(l.proxy,p,r._tween),s}}))},t._mod=function(t){for(var e,i=this._overwriteProps,r=i.length;-1<--r;)(e=t[i[r]])&&"function"==typeof e&&(this._mod[i[r]]=e)},t._kill=function(t){var e,i,r=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=r.length;-1<--i;)r[i]===e&&r.splice(i,1);if(r=this._autoRotate)for(i=r.length;-1<--i;)t[r[i][2]]&&r.splice(i,1);return this._super._kill.call(this,t)},_fwd_fwdScope.FWDFWD_fwdDefine("plugins.CSSPlugin",["plugins.TweenPlugin","FWDTweenLite"],function(n,B){var c,P,O,d,W=function(){n.call(this,"css"),this._overwriteProps.length=0,this.setRatio=W.prototype.setRatio},h=_fwd_fwdScope.FWDFWD_fwdDefine.globals,m={},t=W.prototype=new n("css");(t.constructor=W).version="1.19.0",W.API=2,W.defaultTransformPerspective=0,W.defaultSkewType="compensated",W.defaultSmoothOrigin=!0,t="px",W.suffixMap={top:t,right:t,bottom:t,left:t,width:t,height:t,fontSize:t,padding:t,margin:t,perspective:t,lineHeight:""};function a(t,e){return e.toUpperCase()}function e(t){return K.createElementNS?K.createElementNS("http://www.w3.org/1999/xhtml",t):K.createElement(t)}function o(t){return N.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1}function g(t){window.console&&console.log(t)}function k(t,e){var i,r,s=(e=e||J).style;if(void 0!==s[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],r=5;-1<--r&&void 0===s[i[r]+t];);return 0<=r?(st="-"+(nt=3===r?"ms":i[r]).toLowerCase()+"-",nt+t):null}function y(t,e){var i,r,s,n={};if(e=e||at(t,null))if(i=e.length)for(;-1<--i;)-1!==(s=e[i]).indexOf("-transform")&&It!==s||(n[s.replace(p,a)]=e.getPropertyValue(s));else for(i in e)-1!==i.indexOf("Transform")&&Xt!==i||(n[i]=e[i]);else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===n[i]&&(n[i.replace(p,a)]=e[i]);return rt||(n.opacity=o(t)),r=Zt(t,e,!1),n.rotation=r.rotation,n.skewX=r.skewX,n.scaleX=r.scaleX,n.scaleY=r.scaleY,n.x=r.x,n.y=r.y,Yt&&(n.z=r.z,n.rotationX=r.rotationX,n.rotationY=r.rotationY,n.scaleZ=r.scaleZ),n.filters&&delete n.filters,n}function v(t,e,i,r,s){var n,a,o,l={},h=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||s&&s[a])&&-1===a.indexOf("Origin")&&("number"!=typeof n&&"string"!=typeof n||(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(f,"")?n:0:ht(t,a),void 0!==h[a]&&(o=new vt(h,a,h[a],o))));if(r)for(a in r)"className"!==a&&(l[a]=r[a]);return{difs:l,firstMPT:o}}function R(t,e){return"function"==typeof t&&(t=t(D,F)),"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)||0}function S(t,e){return"function"==typeof t&&(t=t(D,F)),null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)||0}function A(t,e,i,r){var s,n,a,o,l;return"function"==typeof t&&(t=t(D,F)),(o=null==t?e:"number"==typeof t?t:(s=360,n=t.split("_"),a=((l="="===t.charAt(1))?parseInt(t.charAt(0)+"1",10)*parseFloat(n[0].substr(2)):parseFloat(n[0]))*(-1===t.indexOf("rad")?1:G)-(l?0:e),n.length&&(r&&(r[i]=e+a),-1!==t.indexOf("short")&&(a%=s)!==a%180&&(a=a<0?a+s:a-s),-1!==t.indexOf("_cw")&&a<0?a=(a+3599999999640)%s-(a/s|0)*s:-1!==t.indexOf("ccw")&&0<a&&(a=(a-3599999999640)%s-(a/s|0)*s)),e+a))<1e-6&&-1e-6<o&&(o=0),o}function _(t,e,i){return 255*(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(i-e)*t*6:t<.5?i:3*t<2?e+(i-e)*(2/3-t)*6:e)+.5|0}function r(t,e){for(var i,r,s=t.match(dt)||[],n=0,a=s.length?"":t,o=0;o<s.length;o++)i=s[o],n+=(r=t.substr(n,t.indexOf(i,n)-n)).length+i.length,3===(i=ct(i,e)).length&&i.push(1),a+=r+(e?"hsla("+i[0]+","+i[1]+"%,"+i[2]+"%,"+i[3]:"rgba("+i.join(","))+")";return a+t.substr(n)}var M,x,w,Y,T,C,F,D,i,s,z=/(?:\-|\.|\b)(\d|\.|e\-)+/g,X=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,b=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,f=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,I=/(?:\d|\-|\+|=|#|\.)*/g,N=/opacity *= *([^)]*)/i,E=/opacity:([^;]*)/i,l=/alpha\(opacity *=.+?\)/i,L=/^(rgb|hsl)/,u=/([A-Z])/g,p=/-([a-z])/gi,j=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,V=/(?:Left|Right|Width)/i,q=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,Z=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,U=/,(?=[^\)]*(?:\(|$))/gi,$=/[\s,\(]/i,Q=Math.PI/180,G=180/Math.PI,H={},K=document,J=e("div"),tt=e("img"),et=W._internals={_specialProps:m},it=navigator.userAgent,rt=(i=it.indexOf("Android"),s=e("a"),w=-1!==it.indexOf("Safari")&&-1===it.indexOf("Chrome")&&(-1===i||3<Number(it.substr(i+8,1))),T=w&&Number(it.substr(it.indexOf("Version/")+8,1))<6,Y=-1!==it.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(it)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(it))&&(C=parseFloat(RegExp.$1)),!!s&&(s.style.cssText="top:1px;opacity:.55;",/^0.55/.test(s.style.opacity))),st="",nt="",at=K.defaultView?K.defaultView.getComputedStyle:function(){},ot=W.style=function(t,e,i,r,s){var n;return rt||"opacity"!==e?(!r&&t.style[e]?n=t.style[e]:(i=i||at(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(u,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==s||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:s):o(t)},lt=et.convertToPixels=function(t,e,i,r,s){if("px"===r||!r)return i;if("auto"===r||!i)return 0;var n,a,o,l=V.test(e),h=t,f=J.style,u=i<0,p=1===i;if(u&&(i=-i),p&&(i*=100),"%"===r&&-1!==e.indexOf("border"))n=i/100*(l?t.clientWidth:t.clientHeight);else{if(f.cssText="border:0 solid red;position:"+ot(t,"position")+";line-height:0;","%"!==r&&h.appendChild&&"v"!==r.charAt(0)&&"rem"!==r)f[l?"borderLeftWidth":"borderTopWidth"]=i+r;else{if(a=(h=t.parentNode||K.body)._fwdCache,o=B.ticker.frame,a&&l&&a.time===o)return a.width*i/100;f[l?"width":"height"]=i+r}h.appendChild(J),n=parseFloat(J[l?"offsetWidth":"offsetHeight"]),h.removeChild(J),l&&"%"===r&&!1!==W.cacheWidths&&((a=h._fwdCache=h._fwdCache||{}).time=o,a.width=n/i*100),0!==n||s||(n=lt(t,e,i,r,!0))}return p&&(n/=100),u?-n:n},ht=et.calculateOffset=function(t,e,i){if("absolute"!==ot(t,"position",i))return 0;var r="left"===e?"Left":"Top",s=ot(t,"margin"+r,i);return t["offset"+r]-(lt(t,e,parseFloat(s),s.replace(I,""))||0)},ft={width:["Left","Right"],height:["Top","Bottom"]},ut=["marginLeft","marginRight","marginTop","marginBottom"],pt=function(t,e){if("contain"===t||"auto"===t||"auto auto"===t)return t+" ";null!=t&&""!==t||(t="0 0");var i,r=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":r[0],n=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":r[1];if(3<r.length&&!e){for(r=t.split(", ").join(",").split(","),t=[],i=0;i<r.length;i++)t.push(pt(r[i]));return t.join(",")}return null==n?n="center"===s?"50%":"0":"center"===n&&(n="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),t=s+" "+n+(2<r.length?" "+r[2]:""),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==n.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===n.charAt(1),e.ox=parseFloat(s.replace(f,"")),e.oy=parseFloat(n.replace(f,"")),e.v=t),e||t},_t={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ct=W.parseColor=function(t,e){var i,r,s,n,a,o,l,h,f,u,p;if(t)if("number"==typeof t)i=[t>>16,t>>8&255,255&t];else{if(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),_t[t])i=_t[t];else if("#"===t.charAt(0))4===t.length&&(t="#"+(r=t.charAt(1))+r+(s=t.charAt(2))+s+(n=t.charAt(3))+n),i=[(t=parseInt(t.substr(1),16))>>16,t>>8&255,255&t];else if("hsl"===t.substr(0,3))if(i=p=t.match(z),e){if(-1!==t.indexOf("="))return t.match(X)}else a=Number(i[0])%360/360,o=Number(i[1])/100,r=2*(l=Number(i[2])/100)-(s=l<=.5?l*(o+1):l+o-l*o),3<i.length&&(i[3]=Number(t[3])),i[0]=_(a+1/3,r,s),i[1]=_(a,r,s),i[2]=_(a-1/3,r,s);else i=t.match(z)||_t.transparent;i[0]=Number(i[0]),i[1]=Number(i[1]),i[2]=Number(i[2]),3<i.length&&(i[3]=Number(i[3]))}else i=_t.black;return e&&!p&&(r=i[0]/255,s=i[1]/255,n=i[2]/255,l=((h=Math.max(r,s,n))+(f=Math.min(r,s,n)))/2,h===f?a=o=0:(u=h-f,o=.5<l?u/(2-h-f):u/(h+f),a=h===r?(s-n)/u+(s<n?6:0):h===s?(n-r)/u+2:(r-s)/u+4,a*=60),i[0]=a+.5|0,i[1]=100*o+.5|0,i[2]=100*l+.5|0),i},dt="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(t in _t)dt+="|"+t+"\\b";dt=new RegExp(dt+")","gi"),W.colorStringFilter=function(t){var e,i=t[0]+t[1];dt.test(i)&&(e=-1!==i.indexOf("hsl(")||-1!==i.indexOf("hsla("),t[0]=r(t[0],e),t[1]=r(t[1],e)),dt.lastIndex=0},B.defaultStringFilter||(B.defaultStringFilter=W.colorStringFilter);function mt(t,e,n,a){if(null==t)return function(t){return t};var o,l=e?(t.match(dt)||[""])[0]:"",h=t.split(l).join("").match(b)||[],f=t.substr(0,t.indexOf(h[0])),u=")"===t.charAt(t.length-1)?")":"",p=-1!==t.indexOf(" ")?" ":",",_=h.length,c=0<_?h[0].replace(z,""):"";return _?o=e?function(t){var e,i,r,s;if("number"==typeof t)t+=c;else if(a&&U.test(t)){for(s=t.replace(U,"|").split("|"),r=0;r<s.length;r++)s[r]=o(s[r]);return s.join(",")}if(e=(t.match(dt)||[l])[0],r=(i=t.split(e).join("").match(b)||[]).length,_>r--)for(;++r<_;)i[r]=n?i[(r-1)/2|0]:h[r];return f+i.join(p)+p+e+u+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,i,r;if("number"==typeof t)t+=c;else if(a&&U.test(t)){for(i=t.replace(U,"|").split("|"),r=0;r<i.length;r++)i[r]=o(i[r]);return i.join(",")}if(r=(e=t.match(b)||[]).length,_>r--)for(;++r<_;)e[r]=n?e[(r-1)/2|0]:h[r];return f+e.join(p)+u}:function(t){return t}}function gt(h){return h=h.split(","),function(t,e,i,r,s,n,a){var o,l=(e+"").split(" ");for(a={},o=0;o<4;o++)a[h[o]]=l[o]=l[o]||l[(o-1)/2>>0];return r.parse(t,a,s,n)}}et._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,r,s,n,a=this.data,o=a.proxy,l=a.firstMPT;l;)e=o[l.v],l.r?e=Math.round(e):e<1e-6&&-1e-6<e&&(e=0),l.t[l.p]=e,l=l._next;if(a.autoRotate&&(a.autoRotate.rotation=a.mod?a.mod(o.rotation,this.t):o.rotation),1===t||0===t)for(l=a.firstMPT,n=1===t?"e":"b";l;){if((i=l.t).type){if(1===i.type){for(s=i.xs0+i.s+i.xs1,r=1;r<i.l;r++)s+=i["xn"+r]+i["xs"+(r+1)];i[n]=s}}else i[n]=i.s+i.xs0;l=l._next}};function yt(t,e,i,r,s,n){var a=new xt(t,e,i,r-i,s,-1,n);return a.b=i,a.e=a.xs0=r,a}var vt=function(t,e,i,r,s){this.t=t,this.p=e,this.v=i,this.r=s,r&&((r._prev=this)._next=r)},xt=(et._parseToProxy=function(t,e,i,r,s,n){var a,o,l,h,f,u=r,p={},_={},c=i._transform,d=H;for(i._transform=null,H=e,r=f=i.parse(t,e,r,s),H=d,n&&(i._transform=c,u&&(u._prev=null,u._prev&&(u._prev._next=null)));r&&r!==u;){if(r.type<=1&&(_[o=r.p]=r.s+r.c,p[o]=r.s,n||(h=new vt(r,"s",o,h,r.r),r.c=0),1===r.type))for(a=r.l;0<--a;)l="xn"+a,_[o=r.p+"_"+l]=r.data[l],p[o]=r[l],n||(h=new vt(r,l,o,h,r.rxp[l]));r=r._next}return{proxy:p,end:_,firstMPT:h,pt:f}},et.CSSPropTween=function(t,e,i,r,s,n,a,o,l,h,f){this.t=t,this.p=e,this.s=i,this.c=r,this.n=a||e,t instanceof xt||d.push(this.n),this.r=o,this.type=n||0,l&&(this.pr=l,c=!0),this.b=void 0===h?i:h,this.e=void 0===f?i+r:f,s&&((this._next=s)._prev=this)}),wt=W.parseComplex=function(t,e,i,r,s,n,a,o,l,h){i=i||n||"","function"==typeof r&&(r=r(D,F)),a=new xt(t,e,0,0,a,h?2:1,null,!1,o,i,r),r+="",s&&dt.test(r+i)&&(r=[i,r],W.colorStringFilter(r),i=r[0],r=r[1]);var f,u,p,_,c,d,m,g,y,v,x,w,T,b=i.split(", ").join(",").split(" "),P=r.split(", ").join(",").split(" "),O=b.length,k=!1!==M;for(-1===r.indexOf(",")&&-1===i.indexOf(",")||(b=b.join(" ").replace(U,", ").split(" "),P=P.join(" ").replace(U,", ").split(" "),O=b.length),O!==P.length&&(O=(b=(n||"").split(" ")).length),a.plugin=l,a.setRatio=h,f=dt.lastIndex=0;f<O;f++)if(_=b[f],c=P[f],(g=parseFloat(_))||0===g)a.appendXtra("",g,R(c,g),c.replace(X,""),k&&-1!==c.indexOf("px"),!0);else if(s&&dt.test(_))w=")"+((w=c.indexOf(")")+1)?c.substr(w):""),T=-1!==c.indexOf("hsl")&&rt,_=ct(_,T),c=ct(c,T),(y=6<_.length+c.length)&&!rt&&0===c[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(P[f]).join("transparent")):(rt||(y=!1),T?a.appendXtra(y?"hsla(":"hsl(",_[0],R(c[0],_[0]),",",!1,!0).appendXtra("",_[1],R(c[1],_[1]),"%,",!1).appendXtra("",_[2],R(c[2],_[2]),y?"%,":"%"+w,!1):a.appendXtra(y?"rgba(":"rgb(",_[0],c[0]-_[0],",",!0,!0).appendXtra("",_[1],c[1]-_[1],",",!0).appendXtra("",_[2],c[2]-_[2],y?",":w,!0),y&&(_=_.length<4?1:_[3],a.appendXtra("",_,(c.length<4?1:c[3])-_,w,!1))),dt.lastIndex=0;else if(d=_.match(z)){if(!(m=c.match(X))||m.length!==d.length)return a;for(u=p=0;u<d.length;u++)x=d[u],v=_.indexOf(x,p),a.appendXtra(_.substr(p,v-p),Number(x),R(m[u],x),"",k&&"px"===_.substr(v+x.length,2),0===u),p=v+x.length;a["xs"+a.l]+=_.substr(p)}else a["xs"+a.l]+=a.l||a["xs"+a.l]?" "+c:c;if(-1!==r.indexOf("=")&&a.data){for(w=a.xs0+a.data.s,f=1;f<a.l;f++)w+=a["xs"+f]+a.data["xn"+f];a.e=w+a["xs"+f]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},Tt=9;for((t=xt.prototype).l=t.pr=0;0<--Tt;)t["xn"+Tt]=0,t["xs"+Tt]="";t.xs0="",t._next=t._prev=t.xfirst=t.data=t.plugin=t.setRatio=t.rxp=null,t.appendXtra=function(t,e,i,r,s,n){var a=this,o=a.l;return a["xs"+o]+=n&&(o||a["xs"+o])?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=r||"",0<o?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=s,a["xn"+o]=e,a.plugin||(a.xfirst=new xt(a,"xn"+o,e,i,a.xfirst||a,0,a.n,s,a.pr),a.xfirst.xs0=0)):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=s),a):(a["xs"+o]+=e+(r||""),a)};function bt(t,e){e=e||{},this.p=e.prefix&&k(t)||t,(m[t]=m[this.p]=this).format=e.formatter||mt(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0}var Pt=et._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var r,s=t.split(","),n=e.defaultValue;for(i=i||[n],r=0;r<s.length;r++)e.prefix=0===r&&e.prefix,e.defaultValue=i[r]||n,new bt(s[r],e)},Ot=et._registerPluginProp=function(t){var l;m[t]||(l=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin",Pt(t,{parser:function(t,e,i,r,s,n,a){var o=h.com.fwd.plugins[l];return o?(o._cssRegister(),m[i].parse(t,e,i,r,s,n,a)):(g("Error: "+l+" js file not loaded."),s)}}))};(t=bt.prototype).parseComplex=function(t,e,i,r,s,n){var a,o,l,h,f,u,p=this.keyword;if(this.multi&&(U.test(i)||U.test(e)?(o=e.replace(U,"|").split("|"),l=i.replace(U,"|").split("|")):p&&(o=[e],l=[i])),l){for(h=l.length>o.length?l.length:o.length,a=0;a<h;a++)e=o[a]=o[a]||this.dflt,i=l[a]=l[a]||this.dflt,p&&(f=e.indexOf(p))!==(u=i.indexOf(p))&&(-1===u?o[a]=o[a].split(p).join(""):-1===f&&(o[a]+=" "+p));e=o.join(", "),i=l.join(", ")}return wt(t,this.p,e,i,this.clrs,this.dflt,r,this.pr,s,n)},t.parse=function(t,e,i,r,s,n,a){return this.parseComplex(t.style,this.format(ot(t,this.p,O,!1,this.dflt)),this.format(e),s,n)},W.registerSpecialProp=function(t,l,h){Pt(t,{parser:function(t,e,i,r,s,n,a){var o=new xt(t,i,0,0,s,2,i,!1,h);return o.plugin=n,o.setRatio=l(t,e,r._tween,i),o},priority:h})},W.useSVGTransformAttr=w||Y;function kt(t,e,i){var r,s=K.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(r in i)s.setAttributeNS(null,r.replace(n,"$1-$2").toLowerCase(),i[r]);return e.appendChild(s),s}function Rt(t,e,i,r,s,n){var a,o,l,h,f,u,p,_,c,d,m,g,y,v,x=t._fwdTransform,w=qt(t,!0);x&&(y=x.xOrigin,v=x.yOrigin),(!r||(a=r.split(" ")).length<2)&&(p=t.getBBox(),a=[(-1!==(e=pt(e).split(" "))[0].indexOf("%")?parseFloat(e[0])/100*p.width:parseFloat(e[0]))+p.x,(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*p.height:parseFloat(e[1]))+p.y]),i.xOrigin=h=parseFloat(a[0]),i.yOrigin=f=parseFloat(a[1]),r&&w!==Vt&&(u=w[0],p=w[1],_=w[2],c=w[3],d=w[4],o=h*(c/(g=u*c-p*_))+f*(-_/g)+(_*(m=w[5])-c*d)/g,l=h*(-p/g)+f*(u/g)-(u*m-p*d)/g,h=i.xOrigin=a[0]=o,f=i.yOrigin=a[1]=l),x&&(n&&(i.xOffset=x.xOffset,i.yOffset=x.yOffset,x=i),s||!1!==s&&!1!==W.defaultSmoothOrigin?(o=h-y,l=f-v,x.xOffset+=o*w[0]+l*w[2]-o,x.yOffset+=o*w[1]+l*w[3]-l):x.xOffset=x.yOffset=0),n||t.setAttribute("data-svg-origin",a.join(" "))}function St(t){var e,i,r=this.data,s=-r.rotation*Q,n=s+r.skewX*Q,a=1e5,o=(Math.cos(s)*r.scaleX*a|0)/a,l=(Math.sin(s)*r.scaleX*a|0)/a,h=(Math.sin(n)*-r.scaleY*a|0)/a,f=(Math.cos(n)*r.scaleY*a|0)/a,u=this.t.style,p=this.t.currentStyle;if(p){i=l,l=-h,h=-i,e=p.filter,u.filter="";var _=this.t.offsetWidth,c=this.t.offsetHeight,d="absolute"!==p.position,m="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+h+", M22="+f,g=r.x+_*r.xPercent/100,y=r.y+c*r.yPercent/100;if(null!=r.ox&&(g+=(b=(r.oxp?_*r.ox*.01:r.ox)-_/2)-(b*o+(P=(r.oyp?c*r.oy*.01:r.oy)-c/2)*l),y+=P-(b*h+P*f)),m+=d?", Dx="+((b=_/2)-(b*o+(P=c/2)*l)+g)+", Dy="+(P-(b*h+P*f)+y)+")":", sizingMethod='auto expand')",-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?u.filter=e.replace(Z,m):u.filter=m+" "+e,0!==t&&1!==t||1==o&&0===l&&0===h&&1==f&&(d&&-1===m.indexOf("Dx=0, Dy=0")||N.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf(e.indexOf("Alpha"))&&u.removeAttribute("filter")),!d){var v,x,w,T=C<8?1:-1,b=r.ieOffsetX||0,P=r.ieOffsetY||0;for(r.ieOffsetX=Math.round((_-((o<0?-o:o)*_+(l<0?-l:l)*c))/2+g),r.ieOffsetY=Math.round((c-((f<0?-f:f)*c+(h<0?-h:h)*_))/2+y),Tt=0;Tt<4;Tt++)w=(i=-1!==(v=p[x=ut[Tt]]).indexOf("px")?parseFloat(v):lt(this.t,x,parseFloat(v),v.replace(I,""))||0)!==r[x]?Tt<2?-r.ieOffsetX:-r.ieOffsetY:Tt<2?b-r.ieOffsetX:P-r.ieOffsetY,u[x]=(r[x]=Math.round(i-w*(0===Tt||2===Tt?1:T)))+"px"}}}var At,Mt,Ct,Ft,Dt,zt="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Xt=k("transform"),It=st+"transform",Nt=k("transformOrigin"),Yt=null!==k("perspective"),Et=et.Transform=function(){this.perspective=parseFloat(W.defaultTransformPerspective)||0,this.force3D=!(!1===W.defaultForce3D||!Yt)&&(W.defaultForce3D||"auto")},Bt=window.SVGElement,Wt=K.documentElement,Lt=(Dt=C||/Android/i.test(it)&&!window.chrome,K.createElementNS&&!Dt&&(Mt=kt("svg",Wt),Ft=(Ct=kt("rect",Mt,{width:100,height:50,x:100})).getBoundingClientRect().width,Ct.style[Nt]="50% 50%",Ct.style[Xt]="scaleX(0.5)",Dt=Ft===Ct.getBoundingClientRect().width&&!(Y&&Yt),Wt.removeChild(Mt)),Dt),jt=function(t){return!!(Bt&&t.getBBox&&t.getCTM&&function(t){try{return t.getBBox()}catch(t){}}(t)&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM))},Vt=[1,0,0,1,0,0],qt=function(t,e){var i,r,s,n,a,o,l=t._fwdTransform||new Et,h=t.style;if(Xt?r=ot(t,It,null,!0):t.currentStyle&&(r=(r=t.currentStyle.filter.match(q))&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),l.x||0,l.y||0].join(","):""),(i=!r||"none"===r||"matrix(1, 0, 0, 1, 0, 0)"===r)&&Xt&&((o="none"===at(t).display)||!t.parentNode)&&(o&&(n=h.display,h.display="block"),t.parentNode||(a=1,Wt.appendChild(t)),i=!(r=ot(t,It,null,!0))||"none"===r||"matrix(1, 0, 0, 1, 0, 0)"===r,n?h.display=n:o&&Gt(h,"display"),a&&Wt.removeChild(t)),(l.svg||t.getBBox&&jt(t))&&(i&&-1!==(h[Xt]+"").indexOf("matrix")&&(r=h[Xt],i=0),s=t.getAttribute("transform"),i&&s&&(-1!==s.indexOf("matrix")?(r=s,i=0):-1!==s.indexOf("translate")&&(r="matrix(1,0,0,1,"+s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",i=0))),i)return Vt;for(s=(r||"").match(z)||[],Tt=s.length;-1<--Tt;)n=Number(s[Tt]),s[Tt]=(a=n-(n|=0))?(1e5*a+(a<0?-.5:.5)|0)/1e5+n:n;return e&&6<s.length?[s[0],s[1],s[4],s[5],s[12],s[13]]:s},Zt=et.getTransform=function(t,e,i,r){if(t._fwdTransform&&i&&!r)return t._fwdTransform;var s,n,a,o,l,h,f,u,p,_,c,d,m,g,y,v,x,w,T,b,P,O,k,R,S,A,M,C,F,D,z,X,I=i&&t._fwdTransform||new Et,N=I.scaleX<0,Y=Yt&&(parseFloat(ot(t,Nt,e,!1,"0 0 0").split(" ")[2])||I.zOrigin)||0,E=parseFloat(W.defaultTransformPerspective)||0;if(I.svg=!(!t.getBBox||!jt(t)),I.svg&&(Rt(t,ot(t,Nt,e,!1,"50% 50%")+"",I,t.getAttribute("data-svg-origin")),At=W.useSVGTransformAttr||Lt),(s=qt(t))!==Vt)for(n in 16===s.length?(f=s[0],u=s[1],p=s[2],_=s[3],c=s[4],d=s[5],m=s[6],g=s[7],y=s[8],v=s[9],x=s[10],w=s[12],T=s[13],b=s[14],P=s[11],O=Math.atan2(m,x),I.zOrigin&&(w=y*(b=-I.zOrigin)-s[12],T=v*b-s[13],b=x*b+I.zOrigin-s[14]),I.rotationX=O*G,O&&(k=c*(A=Math.cos(-O))+y*(M=Math.sin(-O)),R=d*A+v*M,S=m*A+x*M,y=c*-M+y*A,v=d*-M+v*A,x=m*-M+x*A,P=g*-M+P*A,c=k,d=R,m=S),O=Math.atan2(-p,x),I.rotationY=O*G,O&&(R=u*(A=Math.cos(-O))-v*(M=Math.sin(-O)),S=p*A-x*M,v=u*M+v*A,x=p*M+x*A,P=_*M+P*A,f=k=f*A-y*M,u=R,p=S),O=Math.atan2(u,f),I.rotation=O*G,O&&(f=f*(A=Math.cos(-O))+c*(M=Math.sin(-O)),R=u*A+d*M,d=u*-M+d*A,m=p*-M+m*A,u=R),I.rotationX&&359.9<Math.abs(I.rotationX)+Math.abs(I.rotation)&&(I.rotationX=I.rotation=0,I.rotationY=180-I.rotationY),I.scaleX=(1e5*Math.sqrt(f*f+u*u)+.5|0)/1e5,I.scaleY=(1e5*Math.sqrt(d*d+v*v)+.5|0)/1e5,I.scaleZ=(1e5*Math.sqrt(m*m+x*x)+.5|0)/1e5,I.rotationX||I.rotationY?I.skewX=0:(I.skewX=c||d?Math.atan2(c,d)*G+I.rotation:I.skewX||0,90<Math.abs(I.skewX)&&Math.abs(I.skewX)<270&&(N?(I.scaleX*=-1,I.skewX+=I.rotation<=0?180:-180,I.rotation+=I.rotation<=0?180:-180):(I.scaleY*=-1,I.skewX+=I.skewX<=0?180:-180))),I.perspective=P?1/(P<0?-P:P):0,I.x=w,I.y=T,I.z=b,I.svg&&(I.x-=I.xOrigin-(I.xOrigin*f-I.yOrigin*c),I.y-=I.yOrigin-(I.yOrigin*u-I.xOrigin*d))):Yt&&!r&&s.length&&I.x===s[4]&&I.y===s[5]&&(I.rotationX||I.rotationY)||(F=(C=6<=s.length)?s[0]:1,D=s[1]||0,z=s[2]||0,X=C?s[3]:1,I.x=s[4]||0,I.y=s[5]||0,a=Math.sqrt(F*F+D*D),o=Math.sqrt(X*X+z*z),l=F||D?Math.atan2(D,F)*G:I.rotation||0,h=z||X?Math.atan2(z,X)*G+l:I.skewX||0,90<Math.abs(h)&&Math.abs(h)<270&&(N?(a*=-1,h+=l<=0?180:-180,l+=l<=0?180:-180):(o*=-1,h+=h<=0?180:-180)),I.scaleX=a,I.scaleY=o,I.rotation=l,I.skewX=h,Yt&&(I.rotationX=I.rotationY=I.z=0,I.perspective=E,I.scaleZ=1),I.svg&&(I.x-=I.xOrigin-(I.xOrigin*F+I.yOrigin*z),I.y-=I.yOrigin-(I.xOrigin*D+I.yOrigin*X))),I.zOrigin=Y,I)I[n]<2e-5&&-2e-5<I[n]&&(I[n]=0);return i&&(t._fwdTransform=I).svg&&(At&&t.style[Xt]?B.delayedCall(.001,function(){Gt(t.style,Xt)}):!At&&t.getAttribute("transform")&&B.delayedCall(.001,function(){t.removeAttribute("transform")})),I},Ut=et.set3DTransformRatio=et.setTransformRatio=function(t){var e,i,r,s,n,a,o,l,h,f,u,p,_,c,d,m,g,y,v,x,w,T,b,P=this.data,O=this.t.style,k=P.rotation,R=P.rotationX,S=P.rotationY,A=P.scaleX,M=P.scaleY,C=P.scaleZ,F=P.x,D=P.y,z=P.z,X=P.svg,I=P.perspective,N=P.force3D;if(!((1!==t&&0!==t||"auto"!==N||this.tween._totalTime!==this.tween._totalDuration&&this.tween._totalTime)&&N||z||I||S||R||1!==C)||At&&X||!Yt)k||P.skewX||X?(k*=Q,T=P.skewX*Q,b=1e5,e=Math.cos(k)*A,s=Math.sin(k)*A,i=Math.sin(k-T)*-M,n=Math.cos(k-T)*M,T&&"simple"===P.skewType&&(g=Math.tan(T-P.skewY*Q),i*=g=Math.sqrt(1+g*g),n*=g,P.skewY&&(g=Math.tan(P.skewY*Q),e*=g=Math.sqrt(1+g*g),s*=g)),X&&(F+=P.xOrigin-(P.xOrigin*e+P.yOrigin*i)+P.xOffset,D+=P.yOrigin-(P.xOrigin*s+P.yOrigin*n)+P.yOffset,At&&(P.xPercent||P.yPercent)&&(c=this.t.getBBox(),F+=.01*P.xPercent*c.width,D+=.01*P.yPercent*c.height),F<(c=1e-6)&&-c<F&&(F=0),D<c&&-c<D&&(D=0)),v=(e*b|0)/b+","+(s*b|0)/b+","+(i*b|0)/b+","+(n*b|0)/b+","+F+","+D+")",X&&At?this.t.setAttribute("transform","matrix("+v):O[Xt]=(P.xPercent||P.yPercent?"translate("+P.xPercent+"%,"+P.yPercent+"%) matrix(":"matrix(")+v):O[Xt]=(P.xPercent||P.yPercent?"translate("+P.xPercent+"%,"+P.yPercent+"%) matrix(":"matrix(")+A+",0,0,"+M+","+F+","+D+")";else{if(Y&&(A<(c=1e-4)&&-c<A&&(A=C=2e-5),M<c&&-c<M&&(M=C=2e-5),!I||P.z||P.rotationX||P.rotationY||(I=0)),k||P.skewX)k*=Q,d=e=Math.cos(k),m=s=Math.sin(k),P.skewX&&(k-=P.skewX*Q,d=Math.cos(k),m=Math.sin(k),"simple"===P.skewType&&(g=Math.tan((P.skewX-P.skewY)*Q),d*=g=Math.sqrt(1+g*g),m*=g,P.skewY&&(g=Math.tan(P.skewY*Q),e*=g=Math.sqrt(1+g*g),s*=g))),i=-m,n=d;else{if(!(S||R||1!==C||I||X))return void(O[Xt]=(P.xPercent||P.yPercent?"translate("+P.xPercent+"%,"+P.yPercent+"%) translate3d(":"translate3d(")+F+"px,"+D+"px,"+z+"px)"+(1!==A||1!==M?" scale("+A+","+M+")":""));e=n=1,i=s=0}h=1,r=a=o=l=f=u=0,p=I?-1/I:0,_=P.zOrigin,c=1e-6,x=",",w="0",(k=S*Q)&&(d=Math.cos(k),f=p*(o=-(m=Math.sin(k))),r=e*m,a=s*m,p*=h=d,e*=d,s*=d),(k=R*Q)&&(g=i*(d=Math.cos(k))+r*(m=Math.sin(k)),y=n*d+a*m,l=h*m,u=p*m,r=i*-m+r*d,a=n*-m+a*d,h*=d,p*=d,i=g,n=y),1!==C&&(r*=C,a*=C,h*=C,p*=C),1!==M&&(i*=M,n*=M,l*=M,u*=M),1!==A&&(e*=A,s*=A,o*=A,f*=A),(_||X)&&(_&&(F+=r*-_,D+=a*-_,z+=h*-_+_),X&&(F+=P.xOrigin-(P.xOrigin*e+P.yOrigin*i)+P.xOffset,D+=P.yOrigin-(P.xOrigin*s+P.yOrigin*n)+P.yOffset),F<c&&-c<F&&(F=w),D<c&&-c<D&&(D=w),z<c&&-c<z&&(z=0)),v=P.xPercent||P.yPercent?"translate("+P.xPercent+"%,"+P.yPercent+"%) matrix3d(":"matrix3d(",v+=(e<c&&-c<e?w:e)+x+(s<c&&-c<s?w:s)+x+(o<c&&-c<o?w:o),v+=x+(f<c&&-c<f?w:f)+x+(i<c&&-c<i?w:i)+x+(n<c&&-c<n?w:n),R||S||1!==C?(v+=x+(l<c&&-c<l?w:l)+x+(u<c&&-c<u?w:u)+x+(r<c&&-c<r?w:r),v+=x+(a<c&&-c<a?w:a)+x+(h<c&&-c<h?w:h)+x+(p<c&&-c<p?w:p)+x):v+=",0,0,0,0,1,0,",v+=F+x+D+x+z+x+(I?1+-z/I:1)+")",O[Xt]=v}};(t=Et.prototype).x=t.y=t.z=t.skewX=t.skewY=t.rotation=t.rotationX=t.rotationY=t.zOrigin=t.xPercent=t.yPercent=t.xOffset=t.yOffset=0,t.scaleX=t.scaleY=t.scaleZ=1,Pt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(t,e,i,r,s,n,a){if(r._lastParsedTransform===a)return s;var o;"function"==typeof(r._lastParsedTransform=a)[i]&&(o=a[i],a[i]=e);var l,h,f,u,p,_,c,d,m,g=t._fwdTransform,y=t.style,v=zt.length,x=a,w={},T="transformOrigin",b=Zt(t,O,!0,x.parseTransform),P=x.transform&&("function"==typeof x.transform?x.transform(D,F):x.transform);if(r._transform=b,P&&"string"==typeof P&&Xt)(h=J.style)[Xt]=P,h.display="block",h.position="absolute",K.body.appendChild(J),l=Zt(J,null,!1),b.svg&&(_=b.xOrigin,c=b.yOrigin,l.x-=b.xOffset,l.y-=b.yOffset,(x.transformOrigin||x.svgOrigin)&&(P={},Rt(t,pt(x.transformOrigin),P,x.svgOrigin,x.smoothOrigin,!0),_=P.xOrigin,c=P.yOrigin,l.x-=P.xOffset-b.xOffset,l.y-=P.yOffset-b.yOffset),(_||c)&&(d=qt(J,!0),l.x-=_-(_*d[0]+c*d[2]),l.y-=c-(_*d[1]+c*d[3]))),K.body.removeChild(J),l.perspective||(l.perspective=b.perspective),null!=x.xPercent&&(l.xPercent=S(x.xPercent,b.xPercent)),null!=x.yPercent&&(l.yPercent=S(x.yPercent,b.yPercent));else if("object"==typeof x){if(l={scaleX:S(null!=x.scaleX?x.scaleX:x.scale,b.scaleX),scaleY:S(null!=x.scaleY?x.scaleY:x.scale,b.scaleY),scaleZ:S(x.scaleZ,b.scaleZ),x:S(x.x,b.x),y:S(x.y,b.y),z:S(x.z,b.z),xPercent:S(x.xPercent,b.xPercent),yPercent:S(x.yPercent,b.yPercent),perspective:S(x.transformPerspective,b.perspective)},null!=(p=x.directionalRotation))if("object"==typeof p)for(h in p)x[h]=p[h];else x.rotation=p;"string"==typeof x.x&&-1!==x.x.indexOf("%")&&(l.x=0,l.xPercent=S(x.x,b.xPercent)),"string"==typeof x.y&&-1!==x.y.indexOf("%")&&(l.y=0,l.yPercent=S(x.y,b.yPercent)),l.rotation=A("rotation"in x?x.rotation:"shortRotation"in x?x.shortRotation+"_short":"rotationZ"in x?x.rotationZ:b.rotation-b.skewY,b.rotation-b.skewY,"rotation",w),Yt&&(l.rotationX=A("rotationX"in x?x.rotationX:"shortRotationX"in x?x.shortRotationX+"_short":b.rotationX||0,b.rotationX,"rotationX",w),l.rotationY=A("rotationY"in x?x.rotationY:"shortRotationY"in x?x.shortRotationY+"_short":b.rotationY||0,b.rotationY,"rotationY",w)),l.skewX=A(x.skewX,b.skewX-b.skewY),(l.skewY=A(x.skewY,b.skewY))&&(l.skewX+=l.skewY,l.rotation+=l.skewY)}for(Yt&&null!=x.force3D&&(b.force3D=x.force3D,u=!0),b.skewType=x.skewType||b.skewType||W.defaultSkewType,(f=b.force3D||b.z||b.rotationX||b.rotationY||l.z||l.rotationX||l.rotationY||l.perspective)||null==x.scale||(l.scaleZ=1);-1<--v;)(1e-6<(P=l[m=zt[v]]-b[m])||P<-1e-6||null!=x[m]||null!=H[m])&&(u=!0,s=new xt(b,m,b[m],P,s),m in w&&(s.e=w[m]),s.xs0=0,s.plugin=n,r._overwriteProps.push(s.n));return P=x.transformOrigin,b.svg&&(P||x.svgOrigin)&&(_=b.xOffset,c=b.yOffset,Rt(t,pt(P),l,x.svgOrigin,x.smoothOrigin),s=yt(b,"xOrigin",(g?b:l).xOrigin,l.xOrigin,s,T),s=yt(b,"yOrigin",(g?b:l).yOrigin,l.yOrigin,s,T),_===b.xOffset&&c===b.yOffset||(s=yt(b,"xOffset",g?_:b.xOffset,b.xOffset,s,T),s=yt(b,"yOffset",g?c:b.yOffset,b.yOffset,s,T)),P=At?null:"0px 0px"),(P||Yt&&f&&b.zOrigin)&&(Xt?(u=!0,m=Nt,P=(P||ot(t,m,O,!1,"50% 50%"))+"",(s=new xt(y,m,0,0,s,-1,T)).b=y[m],s.plugin=n,Yt?(h=b.zOrigin,P=P.split(" "),b.zOrigin=(2<P.length&&(0===h||"0px"!==P[2])?parseFloat(P[2]):h)||0,s.xs0=s.e=P[0]+" "+(P[1]||"50%")+" 0px",(s=new xt(b,"zOrigin",0,0,s,-1,s.n)).b=h,s.xs0=s.e=b.zOrigin):s.xs0=s.e=P):pt(P+"",b)),u&&(r._transformType=b.svg&&At||!f&&3!==this._transformType?2:3),o&&(a[i]=o),s},prefix:!0}),Pt("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),Pt("borderRadius",{defaultValue:"0px",parser:function(t,e,i,r,s,n){e=this.format(e);for(var a,o,l,h,f,u,p,_,c,d,m,g,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],v=t.style,x=parseFloat(t.offsetWidth),w=parseFloat(t.offsetHeight),T=e.split(" "),b=0;b<y.length;b++)this.p.indexOf("border")&&(y[b]=k(y[b])),-1!==(l=o=ot(t,y[b],O,!1,"0px")).indexOf(" ")&&(l=(o=l.split(" "))[0],o=o[1]),h=a=T[b],f=parseFloat(l),_=l.substr((f+"").length),""===(p=(c="="===h.charAt(1))?(u=parseInt(h.charAt(0)+"1",10),h=h.substr(2),u*=parseFloat(h),h.substr((u+"").length-(u<0?1:0))||""):(u=parseFloat(h),h.substr((u+"").length)))&&(p=P[i]||_),p!==_&&(d=lt(t,"borderLeft",f,_),m=lt(t,"borderTop",f,_),o="%"===p?(l=d/x*100+"%",m/w*100+"%"):"em"===p?(l=d/(g=lt(t,"borderLeft",1,"em"))+"em",m/g+"em"):(l=d+"px",m+"px"),c&&(h=parseFloat(l)+u+p,a=parseFloat(o)+u+p)),s=wt(v,y[b],l+" "+o,h+" "+a,!1,"0px",s);return s},prefix:!0,formatter:mt("0px 0px 0px 0px",!1,!0)}),Pt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(t,e,i,r,s,n){return wt(t.style,i,this.format(ot(t,i,O,!1,"0px 0px")),this.format(e),!1,"0px",s)},prefix:!0,formatter:mt("0px 0px",!1,!0)}),Pt("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,r,s,n){var a,o,l,h,f,u,p="background-position",_=O||at(t,null),c=this.format((_?C?_.getPropertyValue(p+"-x")+" "+_.getPropertyValue(p+"-y"):_.getPropertyValue(p):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),d=this.format(e);if(-1!==c.indexOf("%")!=(-1!==d.indexOf("%"))&&d.split(",").length<2&&(u=ot(t,"backgroundImage").replace(j,""))&&"none"!==u){for(a=c.split(" "),o=d.split(" "),tt.setAttribute("src",u),l=2;-1<--l;)(h=-1!==(c=a[l]).indexOf("%"))!=(-1!==o[l].indexOf("%"))&&(f=0===l?t.offsetWidth-tt.width:t.offsetHeight-tt.height,a[l]=h?parseFloat(c)/100*f+"px":parseFloat(c)/f*100+"%");c=a.join(" ")}return this.parseComplex(t.style,c,d,s,n)},formatter:pt}),Pt("backgroundSize",{defaultValue:"0 0",formatter:function(t){return pt(-1===(t+="").indexOf(" ")?t+" "+t:t)}}),Pt("perspective",{defaultValue:"0px",prefix:!0}),Pt("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),Pt("transformStyle",{prefix:!0}),Pt("backfaceVisibility",{prefix:!0}),Pt("userSelect",{prefix:!0}),Pt("margin",{parser:gt("marginTop,marginRight,marginBottom,marginLeft")}),Pt("padding",{parser:gt("paddingTop,paddingRight,paddingBottom,paddingLeft")}),Pt("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,r,s,n){var a,o,l;return e=C<9?(o=t.currentStyle,l=C<8?" ":",",a="rect("+o.clipTop+l+o.clipRight+l+o.clipBottom+l+o.clipLeft+")",this.format(e).split(",").join(l)):(a=this.format(ot(t,this.p,O,!1,this.dflt)),this.format(e)),this.parseComplex(t.style,a,e,s,n)}}),Pt("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),Pt("autoRound,strictUnits",{parser:function(t,e,i,r,s){return s}}),Pt("border",{defaultValue:"0px solid #000",parser:function(t,e,i,r,s,n){var a=ot(t,"borderTopWidth",O,!1,"0px"),o=this.format(e).split(" "),l=o[0].replace(I,"");return"px"!==l&&(a=parseFloat(a)/lt(t,"borderTopWidth",1,l)+l),this.parseComplex(t.style,this.format(a+" "+ot(t,"borderTopStyle",O,!1,"solid")+" "+ot(t,"borderTopColor",O,!1,"#000")),o.join(" "),s,n)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(dt)||["#000"])[0]}}),Pt("borderWidth",{parser:gt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),Pt("float,cssFloat,styleFloat",{parser:function(t,e,i,r,s,n){var a=t.style,o="cssFloat"in a?"cssFloat":"styleFloat";return new xt(a,o,0,0,s,-1,i,!1,0,a[o],e)}});function $t(t){var e,i=this.t,r=i.filter||ot(this.data,"filter")||"",s=this.s+this.c*t|0;100==s&&(e=-1===r.indexOf("atrix(")&&-1===r.indexOf("radient(")&&-1===r.indexOf("oader(")?(i.removeAttribute("filter"),!ot(this.data,"filter")):(i.filter=r.replace(l,""),!0)),e||(this.xn1&&(i.filter=r=r||"alpha(opacity="+s+")"),-1===r.indexOf("pacity")?0==s&&this.xn1||(i.filter=r+" alpha(opacity="+s+")"):i.filter=r.replace(N,"opacity="+s))}Pt("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,r,s,n){var a=parseFloat(ot(t,"opacity",O,!1,"1")),o=t.style,l="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+a),l&&1===a&&"hidden"===ot(t,"visibility",O)&&0!==e&&(a=0),rt?s=new xt(o,"opacity",a,e-a,s):((s=new xt(o,"opacity",100*a,100*(e-a),s)).xn1=l?1:0,o.zoom=1,s.type=2,s.b="alpha(opacity="+s.s+")",s.e="alpha(opacity="+(s.s+s.c)+")",s.data=t,s.plugin=n,s.setRatio=$t),l&&((s=new xt(o,"visibility",0,0,s,-1,null,!1,0,0!==a?"inherit":"hidden",0===e?"hidden":"inherit")).xs0="inherit",r._overwriteProps.push(s.n),r._overwriteProps.push(i)),s}});function Qt(t){if(this.t._fwdClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Gt(i,e.p),e=e._next;1===t&&this.t._fwdClassPT===this&&(this.t._fwdClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)}var Gt=function(t,e){e&&(t.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),t.removeProperty(e.replace(u,"-$1").toLowerCase())):t.removeAttribute(e))};Pt("className",{parser:function(t,e,i,r,s,n,a){var o,l,h,f,u,p=t.getAttribute("class")||"",_=t.style.cssText;if((s=r._classNamePT=new xt(t,i,0,0,s,2)).setRatio=Qt,s.pr=-11,c=!0,s.b=p,l=y(t,O),h=t._fwdClassPT){for(f={},u=h.data;u;)f[u.p]=1,u=u._next;h.setRatio(1)}return(t._fwdClassPT=s).e="="!==e.charAt(1)?e:p.replace(new RegExp("(?:\\s|^)"+e.substr(2)+"(?![\\w-])"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),t.setAttribute("class",s.e),o=v(t,l,y(t),a,f),t.setAttribute("class",p),s.data=o.firstMPT,t.style.cssText=_,s=s.xfirst=r.parse(t,o.difs,s,n)}});function Ht(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,r,s,n,a=this.t.style,o=m.transform.parse;if("all"===this.e)s=!(a.cssText="");else for(r=(e=this.e.split(" ").join("").split(",")).length;-1<--r;)i=e[r],m[i]&&(m[i].parse===o?s=!0:i="transformOrigin"===i?Nt:m[i].p),Gt(a,i);s&&(Gt(a,Xt),(n=this.t._fwdTransform)&&(n.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._fwdTransform))}}for(Pt("clearProps",{parser:function(t,e,i,r,s){return(s=new xt(t,i,0,0,s,2)).setRatio=Ht,s.e=e,s.pr=-10,s.data=r._tween,c=!0,s}}),t="bezier,throwProps,physicsProps,physics2D".split(","),Tt=t.length;Tt--;)Ot(t[Tt]);(t=W.prototype)._firstPT=t._lastParsedTransform=t._transform=null,t._onInitTween=function(t,e,i,r){if(!t.nodeType)return!1;this._target=F=t,this._tween=i,this._vars=e,D=r,M=e.autoRound,c=!1,P=e.suffixMap||W.suffixMap,O=at(t,""),d=this._overwriteProps;var s,n,a,o,l,h,f,u,p,_=t.style;if(x&&""===_.zIndex&&("auto"!==(s=ot(t,"zIndex",O))&&""!==s||this._addLazySet(_,"zIndex",0)),"string"==typeof e&&(o=_.cssText,s=y(t,O),_.cssText=o+";"+e,s=v(t,s,y(t)).difs,!rt&&E.test(e)&&(s.opacity=parseFloat(RegExp.$1)),e=s,_.cssText=o),e.className?this._firstPT=n=m.className.parse(t,e.className,"className",this,null,null,e):this._firstPT=n=this.parse(t,e,null),this._transformType){for(p=3===this._transformType,Xt?w&&(x=!0,""===_.zIndex&&("auto"!==(f=ot(t,"zIndex",O))&&""!==f||this._addLazySet(_,"zIndex",0)),T&&this._addLazySet(_,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(p?"visible":"hidden"))):_.zoom=1,a=n;a&&a._next;)a=a._next;u=new xt(t,"transform",0,0,null,2),this._linkCSSP(u,null,a),u.setRatio=Xt?Ut:St,u.data=this._transform||Zt(t,O,!0),u.tween=i,u.pr=-1,d.pop()}if(c){for(;n;){for(h=n._next,a=o;a&&a.pr>n.pr;)a=a._next;(n._prev=a?a._prev:l)?n._prev._next=n:o=n,(n._next=a)?a._prev=n:l=n,n=h}this._firstPT=o}return!0},t.parse=function(t,e,i,r){var s,n,a,o,l,h,f,u,p,_,c=t.style;for(s in e)"function"==typeof(h=e[s])&&(h=h(D,F)),(n=m[s])?i=n.parse(t,h,s,this,i,r,e):(l=ot(t,s,O)+"",p="string"==typeof h,"color"===s||"fill"===s||"stroke"===s||-1!==s.indexOf("Color")||p&&L.test(h)?(p||(h=(3<(h=ct(h)).length?"rgba(":"rgb(")+h.join(",")+")"),i=wt(c,s,l,h,!0,"transparent",i,0,r)):p&&$.test(h)?i=wt(c,s,l,h,!0,null,i,0,r):(f=(a=parseFloat(l))||0===a?l.substr((a+"").length):"",""!==l&&"auto"!==l||(f="width"===s||"height"===s?(a=function(t,e,i){if("svg"===(t.nodeName+"").toLowerCase())return(i||at(t))[e]||0;if(t.getBBox&&jt(t))return t.getBBox()[e]||0;var r=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),s=ft[e],n=s.length;for(i=i||at(t,null);-1<--n;)r-=parseFloat(ot(t,"padding"+s[n],i,!0))||0,r-=parseFloat(ot(t,"border"+s[n]+"Width",i,!0))||0;return r}(t,s,O),"px"):"left"===s||"top"===s?(a=ht(t,s,O),"px"):(a="opacity"!==s?0:1,"")),""===(u=(_=p&&"="===h.charAt(1))?(o=parseInt(h.charAt(0)+"1",10),h=h.substr(2),o*=parseFloat(h),h.replace(I,"")):(o=parseFloat(h),p?h.replace(I,""):""))&&(u=s in P?P[s]:f),h=o||0===o?(_?o+a:o)+u:e[s],f!==u&&""!==u&&(o||0===o)&&a&&(a=lt(t,s,a,f),"%"===u?(a/=lt(t,s,100,"%")/100,!0!==e.strictUnits&&(l=a+"%")):"em"===u||"rem"===u||"vw"===u||"vh"===u?a/=lt(t,s,1,u):"px"!==u&&(o=lt(t,s,o,u),u="px"),_&&(!o&&0!==o||(h=o+a+u))),_&&(o+=a),!a&&0!==a||!o&&0!==o?void 0!==c[s]&&(h||h+""!="NaN"&&null!=h)?(i=new xt(c,s,o||a||0,0,i,-1,s,!1,0,l,h)).xs0="none"!==h||"display"!==s&&-1===s.indexOf("Style")?h:l:g("invalid "+s+" tween value: "+e[s]):(i=new xt(c,s,a,o-a,i,0,s,!1!==M&&("px"===u||"zIndex"===s),0,l,h)).xs0=u)),r&&i&&!i.plugin&&(i.plugin=r);return i},t.setRatio=function(t){var e,i,r,s=this._firstPT;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||-1e-6===this._tween._rawPrevTime)for(;s;){if(e=s.c*t+s.s,s.r?e=Math.round(e):e<1e-6&&-1e-6<e&&(e=0),s.type)if(1===s.type)if(2===(r=s.l))s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2;else if(3===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3;else if(4===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4;else if(5===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4+s.xn4+s.xs5;else{for(i=s.xs0+e+s.xs1,r=1;r<s.l;r++)i+=s["xn"+r]+s["xs"+(r+1)];s.t[s.p]=i}else-1===s.type?s.t[s.p]=s.xs0:s.setRatio&&s.setRatio(t);else s.t[s.p]=e+s.xs0;s=s._next}else for(;s;)2!==s.type?s.t[s.p]=s.b:s.setRatio(t),s=s._next;else for(;s;){if(2!==s.type)if(s.r&&-1!==s.type)if(e=Math.round(s.s+s.c),s.type){if(1===s.type){for(r=s.l,i=s.xs0+e+s.xs1,r=1;r<s.l;r++)i+=s["xn"+r]+s["xs"+(r+1)];s.t[s.p]=i}}else s.t[s.p]=e+s.xs0;else s.t[s.p]=s.e;else s.setRatio(t);s=s._next}},t._enableTransforms=function(t){this._transform=this._transform||Zt(this._target,O,!0),this._transformType=this._transform.svg&&At||!t&&3!==this._transformType?2:3};function Kt(t){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)}t._addLazySet=function(t,e,i){var r=this._firstPT=new xt(t,e,0,0,this._firstPT,2);r.e=i,r.setRatio=Kt,r.data=this},t._linkCSSP=function(t,e,i,r){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,r=!0),i?i._next=t:r||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},t._mod=function(t){for(var e=this._firstPT;e;)"function"==typeof t[e.p]&&t[e.p]===Math.round&&(e.r=1),e=e._next},t._kill=function(t){var e,i,r,s=t;if(t.autoAlpha||t.alpha){for(i in s={},t)s[i]=t[i];s.opacity=1,s.autoAlpha&&(s.visibility=1)}for(t.className&&(e=this._classNamePT)&&((r=e.xfirst)&&r._prev?this._linkCSSP(r._prev,e._next,r._prev._prev):r===this._firstPT&&(this._firstPT=e._next),e._next&&this._linkCSSP(e._next,e._next._next,r._prev),this._classNamePT=null),e=this._firstPT;e;)e.plugin&&e.plugin!==i&&e.plugin._kill&&(e.plugin._kill(t),i=e.plugin),e=e._next;return n.prototype._kill.call(this,s)};var Jt=function(t,e,i){var r,s,n,a;if(t.slice)for(s=t.length;-1<--s;)Jt(t[s],e,i);else for(s=(r=t.childNodes).length;-1<--s;)a=(n=r[s]).type,n.style&&(e.push(y(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Jt(n,e,i)};return W.cascadeTo=function(t,e,i){var r,s,n,a,o=B.to(t,e,i),l=[o],h=[],f=[],u=[],p=B._internals.reservedProps;for(t=o._targets||o.target,Jt(t,h,u),o.render(e,!0,!0),Jt(t,f),o.render(0,!0,!0),o._enabled(!0),r=u.length;-1<--r;)if((s=v(u[r],h[r],f[r])).firstMPT){for(n in s=s.difs,i)p[n]&&(s[n]=i[n]);for(n in a={},s)a[n]=h[r][n];l.push(B.fromTo(u[r],e,a,s))}return l},n.activate([W]),W},!0),_fwd_fwdScope.FWDFWD_fwdDefine("easing.Back",["easing.Ease"],function(m){function t(t,e){var i=f("easing."+t,function(){},!0),r=i.prototype=new m;return r.constructor=i,r.getRatio=e,i}function e(t,e,i,r,s){var n=f("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new r},!0);return u(n,t),n}function g(t,e,i){this.t=t,this.v=e,i&&(((this.next=i).prev=this).c=i.v-e,this.gap=i.t-t)}function i(t,e){var i=f("easing."+t,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=i.prototype=new m;return r.constructor=i,r.getRatio=e,r.config=function(t){return new i(t)},i}var r,s,n,a=_fwd_fwdScope.FWDGlobals||_fwd_fwdScope,o=a.com.fwd,l=2*Math.PI,h=Math.PI/2,f=o._class,u=m.register||function(){},p=e("Back",i("BackOut",function(t){return--t*t*((this._p1+1)*t+this._p1)+1}),i("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),i("BackInOut",function(t){return(t*=2)<1?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),_=f("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:1<t&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=!0===i},!0),c=_.prototype=new m;return c.constructor=_,c.getRatio=function(t){var e=t+(.5-t)*this._p;return t<this._p1?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},_.ease=new _(.7,.7),c.config=_.config=function(t,e,i){return new _(t,e,i)},(c=(r=f("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0)).prototype=new m).constructor=r,c.getRatio=function(t){return t<0?t=0:1<=t&&(t=.999999999),(this._p2*t>>0)*this._p1},c.config=r.config=function(t){return new r(t)},(c=(s=f("easing.RoughEase",function(t){for(var e,i,r,s,n,a,o=(t=t||{}).taper||"none",l=[],h=0,f=0|(t.points||20),u=f,p=!1!==t.randomize,_=!0===t.clamp,c=t.template instanceof m?t.template:null,d="number"==typeof t.strength?.4*t.strength:.4;-1<--u;)e=p?Math.random():1/f*u,i=c?c.getRatio(e):e,r="none"===o?d:"out"===o?(s=1-e)*s*d:"in"===o?e*e*d:e<.5?(s=2*e)*s*.5*d:(s=2*(1-e))*s*.5*d,p?i+=Math.random()*r-.5*r:u%2?i+=.5*r:i-=.5*r,_&&(1<i?i=1:i<0&&(i=0)),l[h++]={x:e,y:i};for(l.sort(function(t,e){return t.x-e.x}),a=new g(1,1,null),u=f;-1<--u;)n=l[u],a=new g(n.x,n.y,a);this._prev=new g(0,0,0!==a.t?a:a.next)},!0)).prototype=new m).constructor=s,c.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&t<=e.t;)e=e.prev;return(this._prev=e).v+(t-e.t)/e.gap*e.c},c.config=function(t){return new s(t)},s.ease=new s,e("Bounce",t("BounceOut",function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),t("BounceIn",function(t){return(t=1-t)<1/2.75?1-7.5625*t*t:t<2/2.75?1-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),t("BounceInOut",function(t){var e=t<.5;return(t=e?1-2*t:2*t-1)<1/2.75?t*=7.5625*t:t=t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),e("Circ",t("CircOut",function(t){return Math.sqrt(1- --t*t)}),t("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),t("CircInOut",function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),e("Elastic",(n=function(t,e,i){var r=f("easing."+t,function(t,e){this._p1=1<=t?t:1,this._p2=(e||i)/(t<1?t:1),this._p3=this._p2/l*(Math.asin(1/this._p1)||0),this._p2=l/this._p2},!0),s=r.prototype=new m;return s.constructor=r,s.getRatio=e,s.config=function(t,e){return new r(t,e)},r})("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*this._p2)+1},.3),n("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*--t)*Math.sin((t-this._p3)*this._p2))},.3),n("ElasticInOut",function(t){return(t*=2)<1?this._p1*Math.pow(2,10*--t)*Math.sin((t-this._p3)*this._p2)*-.5:this._p1*Math.pow(2,-10*--t)*Math.sin((t-this._p3)*this._p2)*.5+1},.45)),e("Expo",t("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),t("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),t("ExpoInOut",function(t){return(t*=2)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),e("Sine",t("SineOut",function(t){return Math.sin(t*h)}),t("SineIn",function(t){return 1-Math.cos(t*h)}),t("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),f("easing.EaseLookup",{find:function(t){return m.map[t]}},!0),u(a.SlowMo,"SlowMo","ease,"),u(s,"RoughEase","ease,"),u(r,"SteppedEase","ease,"),p},!0)}),_fwd_fwdScope.FWDFWD_fwdDefine&&_fwd_fwdScope._fwd_fwdQueue.pop()(),function(_,c){"use strict";var d={},m=_.FWDGlobals=_.FWDGlobals||_;if(!m.FWDTweenLite){var g,e,i,y=function(t){for(var e=t.split("."),i=m,r=0;r<e.length;r++)i[e[r]]=i=i[e[r]]||{};return i},u=y("com.fwd"),v=1e-10,l=function(t){for(var e=[],i=t.length,r=0;r!==i;e.push(t[r++]));return e},r=function(){},x=(e=Object.prototype.toString,i=e.call([]),function(t){return null!=t&&(t instanceof Array||"object"==typeof t&&!!t.push&&e.call(t)===i)}),w={},T=function(l,h,f,u){this.sc=w[l]?w[l].sc:[],(w[l]=this).gsClass=null,this.func=f;var p=[];this.check=function(t){for(var e,i,r,s,n,a=h.length,o=a;-1<--a;)(e=w[h[a]]||new T(h[a],[])).gsClass?(p[a]=e.gsClass,o--):t&&e.sc.push(this);if(0===o&&f){if(r=(i=("com.fwd."+l).split(".")).pop(),s=y(i.join("."))[r]=this.gsClass=f.apply(f,p),u)if(m[r]=d[r]=s,!(n="undefined"!=typeof fwd_module&&fwd_module.exports)&&"function"==typeof define&&define.amd)define((_.FWDAMDPath?_.FWDAMDPath+"/":"")+l.split(".").pop(),[],function(){return s});else if(n)if(l===c)for(a in fwd_module.exports=d[c]=s,d)s[a]=d[a];else d[c]&&(d[c][r]=s);for(a=0;a<this.sc.length;a++)this.sc[a].check()}},this.check(!0)},s=_.FWDFWD_fwdDefine=function(t,e,i,r){return new T(t,e,i,r)},p=u._class=function(t,e,i){return e=e||function(){},s(t,[],function(){return e},i),e};s.globals=m;var t,n=[0,0,1,1],b=p("easing.Ease",function(t,e,i,r){this._func=t,this._type=i||0,this._power=r||0,this._params=e?n.concat(e):n},!0),P=b.map={},a=b.register=function(t,e,i,r){for(var s,n,a,o,l=e.split(","),h=l.length,f=(i||"easeIn,easeOut,easeInOut").split(",");-1<--h;)for(n=l[h],s=r?p("easing."+n,null,!0):u.easing[n]||{},a=f.length;-1<--a;)o=f[a],P[n+"."+o]=P[o+n]=s[o]=t.getRatio?t:t[o]||new t};for((t=b.prototype)._calcEnd=!1,t.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,r=1===e?1-t:2===e?t:t<.5?2*t:2*(1-t);return 1===i?r*=r:2===i?r*=r*r:3===i?r*=r*r*r:4===i&&(r*=r*r*r*r),1===e?1-r:2===e?r:t<.5?r/2:1-r/2},h=(o=["Linear","Quad","Cubic","Quart","Quint,Strong"]).length;-1<--h;)t=o[h]+",Power"+h,a(new b(null,null,1,h),t,"easeOut",!0),a(new b(null,null,2,h),t,"easeIn"+(0===h?",easeNone":"")),a(new b(null,null,3,h),t,"easeInOut");P.linear=u.easing.Linear.easeIn,P.swing=u.easing.Quad.easeInOut;var O=p("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});(t=O.prototype).addEventListener=function(t,e,i,r,s){s=s||0;var n,a,o=this._listeners[t],l=0;for(this!==M||g||M.wake(),null==o&&(this._listeners[t]=o=[]),a=o.length;-1<--a;)(n=o[a]).c===e&&n.s===i?o.splice(a,1):0===l&&n.pr<s&&(l=a+1);o.splice(l,0,{c:e,s:i,up:r,pr:s})},t.removeEventListener=function(t,e){var i,r=this._listeners[t];if(r)for(i=r.length;-1<--i;)if(r[i].c===e)return void r.splice(i,1)},t.dispatchEvent=function(t){var e,i,r,s=this._listeners[t];if(s)for(1<(e=s.length)&&(s=s.slice(0)),i=this._eventTarget;-1<--e;)(r=s[e])&&(r.up?r.c.call(r.s||i,{type:t,target:i}):r.c.call(r.s||i))};for(var o,k=_.requestAnimationFrame,R=_.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},A=S(),h=(o=["ms","moz","webkit","o"]).length;-1<--h&&!k;)k=_[o[h]+"RequestAnimationFrame"],R=_[o[h]+"CancelAnimationFrame"]||_[o[h]+"CancelRequestAnimationFrame"];p("Ticker",function(t,e){var s,n,a,o,l,h=this,f=S(),i=!(!1===e||!k)&&"auto",u=500,p=33,_=function(t){var e,i,r=S()-A;u<r&&(f+=r-p),A+=r,h.time=(A-f)/1e3,e=h.time-l,(!s||0<e||!0===t)&&(h.frame++,l+=e+(o<=e?.004:o-e),i=!0),!0!==t&&(a=n(_)),i&&h.dispatchEvent("tick")};O.call(h),h.time=h.frame=0,h.tick=function(){_(!0)},h.lagSmoothing=function(t,e){u=t||1e10,p=Math.min(e,u,0)},h.sleep=function(){null!=a&&((i&&R?R:clearTimeout)(a),n=r,a=null,h===M&&(g=!1))},h.wake=function(t){null!==a?h.sleep():t?f+=-A+(A=S()):10<h.frame&&(A=S()-u+5),n=0===s?r:i&&k?k:function(t){return setTimeout(t,1e3*(l-h.time)+1|0)},h===M&&(g=!0),_(2)},h.fps=function(t){if(!arguments.length)return s;o=1/((s=t)||60),l=this.time+o,h.wake()},h.useRAF=function(t){if(!arguments.length)return i;h.sleep(),i=t,h.fps(s)},h.fps(t),setTimeout(function(){"auto"===i&&h.frame<5&&"hidden"!==document.visibilityState&&h.useRAF(!1)},1500)}),(t=u.Ticker.prototype=new u.events.EventDispatcher).constructor=u.Ticker;var f=p("core.FWDAnimation",function(t,e){var i;this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=!0===e.immediateRender,this.data=e.data,this._reversed=!0===e.reversed,$&&(g||M.wake(),(i=this.vars.useFrames?U:$).add(this,i._time),this.vars.paused&&this.paused(!0))}),M=f.ticker=new u.Ticker;(t=f.prototype)._dirty=t._gc=t._initted=t._paused=!1,t._totalTime=t._time=0,t._rawPrevTime=-1,t._next=t._last=t._onUpdate=t._timeline=t.timeline=null,t._paused=!1;var C=function(){g&&2e3<S()-A&&M.wake(),setTimeout(C,2e3)};C(),t.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},t.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},t.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},t.seek=function(t,e){return this.totalTime(Number(t),!1!==e)},t.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,!1!==e,!0)},t.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},t.render=function(t,e,i){},t.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,!this._gc&&this.timeline||this._enabled(!0),this},t.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&t<i+this.totalDuration()/this._timeScale},t._enabled=function(t,e){return g||M.wake(),this._gc=!t,this._active=this.isActive(),!0!==e&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},t._kill=function(t,e){return this._enabled(!1,!1)},t.kill=function(t,e){return this._kill(t,e),this},t._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},t._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();-1<--e;)"{self}"===t[e]&&(i[e]=this);return i},t._callback=function(t){var e=this.vars,i=e[t],r=e[t+"Params"],s=e[t+"Scope"]||e.callbackScope||this;switch(r?r.length:0){case 0:i.call(s);break;case 1:i.call(s,r[0]);break;case 2:i.call(s,r[0],r[1]);break;default:i.apply(s,r)}},t.eventCallback=function(t,e,i,r){if("on"===(t||"").substr(0,2)){var s=this.vars;if(1===arguments.length)return s[t];null==e?delete s[t]:(s[t]=e,s[t+"Params"]=x(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,s[t+"Scope"]=r),"onUpdate"===t&&(this._onUpdate=e)}return this},t.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},t.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&0<this._time&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},t.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},t.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},t.totalTime=function(t,e,i){if(g||M.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(t<0&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var r=this._totalDuration,s=this._timeline;if(r<t&&!i&&(t=r),this._startTime=(this._paused?this._pauseTime:s._time)-(this._reversed?r-t:t)/this._timeScale,s._dirty||this._uncache(!1),s._timeline)for(;s._timeline;)s._timeline._time!==(s._startTime+s._totalTime)/s._timeScale&&s.totalTime(s._totalTime,!0),s=s._timeline}this._gc&&this._enabled(!0,!1),this._totalTime===t&&0!==this._duration||(X.length&&G(),this.render(t,e,!1),X.length&&G())}return this},t.progress=t.totalProgress=function(t,e){var i=this.duration();return arguments.length?this.totalTime(i*t,e):i?this._time/i:this.ratio},t.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},t.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},t.timeScale=function(t){return arguments.length?(t=t||v,this._timeline&&this._timeline.smoothChildTiming&&(i=(e=this._pauseTime)||0===e?e:this._timeline.totalTime(),this._startTime=i-(i-this._startTime)*this._timeScale/t),this._timeScale=t,this._uncache(!1)):this._timeScale;var e,i},t.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},t.paused=function(t){if(!arguments.length)return this._paused;var e,i,r=this._timeline;return t!=this._paused&&r&&(g||t||M.wake(),i=(e=r.rawTime())-this._pauseTime,!t&&r.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=this.isActive(),!t&&0!=i&&this._initted&&this.duration()&&(e=r.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,this.render(e,e===this._totalTime,!0))),this._gc&&!t&&this._enabled(!0,!1),this};var F=p("core.FWDSimpleTimeline",function(t){f.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});(t=F.prototype=new f).constructor=F,t.kill()._gc=!1,t._first=t._last=t._recent=null,t._sortChildren=!1,t.add=t.insert=function(t,e,i,r){var s,n;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),s=this._last,this._sortChildren)for(n=t._startTime;s&&s._startTime>n;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=s,this._recent=t,this._timeline&&this._uncache(!0),this},t._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},t.render=function(t,e,i){var r,s=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;s;)r=s._next,(s._active||t>=s._startTime&&!s._paused)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=r},t.rawTime=function(){return g||M.wake(),this._totalTime};var D=p("FWDTweenLite",function(t,e,i){if(f.call(this,e,i),this.render=D.prototype.render,null==t)throw"Cannot tween a null target.";this.target=t="string"==typeof t&&D.selector(t)||t;var r,s,n,a=t.jquery||t.length&&t!==_&&t[0]&&(t[0]===_||t[0].nodeType&&t[0].style&&!t.nodeType),o=this.vars.overwrite;if(this._overwrite=o=null==o?Z[D.defaultOverwrite]:"number"==typeof o?o>>0:Z[o],(a||t instanceof Array||t.push&&x(t))&&"number"!=typeof t[0])for(this._targets=n=l(t),this._propLookup=[],this._siblings=[],r=0;r<n.length;r++)(s=n[r])?"string"!=typeof s?s.length&&s!==_&&s[0]&&(s[0]===_||s[0].nodeType&&s[0].style&&!s.nodeType)?(n.splice(r--,1),this._targets=n=n.concat(l(s))):(this._siblings[r]=H(s,this,!1),1===o&&1<this._siblings[r].length&&J(s,this,null,1,this._siblings[r])):"string"==typeof(s=n[r--]=D.selector(s))&&n.splice(r+1,1):n.splice(r--,1);else this._propLookup={},this._siblings=H(t,this,!1),1===o&&1<this._siblings.length&&J(t,this,null,1,this._siblings);(this.vars.immediateRender||0===e&&0===this._delay&&!1!==this.vars.immediateRender)&&(this._time=-v,this.render(Math.min(0,-this._delay)))},!0),z=function(t){return t&&t.length&&t!==_&&t[0]&&(t[0]===_||t[0].nodeType&&t[0].style&&!t.nodeType)};(t=D.prototype=new f).constructor=D,t.kill()._gc=!1,t.ratio=0,t._firstPT=t._targets=t._overwrittenProps=t._startAt=null,t._notifyPluginsOfEnabled=t._lazy=!1,D.version="1.19.0",D.defaultEase=t._ease=new b(null,null,1,1),D.defaultOverwrite="auto",D.ticker=M,D.autoSleep=120,D.lagSmoothing=function(t,e){M.lagSmoothing(t,e)},D.selector=_.$||_.jQuery||function(t){var e=_.$||_.jQuery;return e?(D.selector=e)(t):"undefined"==typeof document?t:document.querySelectorAll?document.querySelectorAll(t):document.getElementById("#"===t.charAt(0)?t.substr(1):t)};var X=[],I={},N=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,Y=function(t){for(var e,i=this._firstPT;i;)e=i.blob?t?this.join(""):this.start:i.c*t+i.s,i.m?e=i.m(e,this._target||i.t):e<1e-6&&-1e-6<e&&(e=0),i.f?i.fp?i.t[i.p](i.fp,e):i.t[i.p](e):i.t[i.p]=e,i=i._next},E=function(t,e,i,r){var s,n,a,o,l,h,f,u=[t,e],p=0,_="",c=0;for(u.start=t,i&&(i(u),t=u[0],e=u[1]),u.length=0,s=t.match(N)||[],n=e.match(N)||[],r&&(r._next=null,r.blob=1,u._firstPT=u._applyPT=r),l=n.length,o=0;o<l;o++)f=n[o],_+=(h=e.substr(p,e.indexOf(f,p)-p))||!o?h:",",p+=h.length,c?c=(c+1)%5:"rgba("===h.substr(-5)&&(c=1),f===s[o]||s.length<=o?_+=f:(_&&(u.push(_),_=""),a=parseFloat(s[o]),u.push(a),u._firstPT={_next:u._firstPT,t:u,p:u.length-1,s:a,c:("="===f.charAt(1)?parseInt(f.charAt(0)+"1",10)*parseFloat(f.substr(2)):parseFloat(f)-a)||0,f:0,m:c&&c<4?Math.round:0}),p+=f.length;return(_+=e.substr(p))&&u.push(_),u.setRatio=Y,u},B=function(t,e,i,r,s,n,a,o,l){"function"==typeof r&&(r=r(l||0,t));var h,f="get"===i?t[e]:i,u=typeof t[e],p="string"==typeof r&&"="===r.charAt(1),_={t:t,p:e,s:f,f:"function"==u,pg:0,n:s||e,m:n?"function"==typeof n?n:Math.round:0,pr:0,c:p?parseInt(r.charAt(0)+"1",10)*parseFloat(r.substr(2)):parseFloat(r)-f||0};if("number"!=u&&("function"==u&&"get"===i&&(h=e.indexOf("set")||"function"!=typeof t["get"+e.substr(3)]?e:"get"+e.substr(3),_.s=f=a?t[h](a):t[h]()),"string"==typeof f&&(a||isNaN(f))?(_.fp=a,_={t:E(f,r,o||D.defaultStringFilter,_),p:"setRatio",s:0,c:1,f:2,pg:0,n:s||e,pr:0,m:0}):p||(_.s=parseFloat(f),_.c=parseFloat(r)-_.s||0)),_.c)return(_._next=this._firstPT)&&(_._next._prev=_),this._firstPT=_},W=D._internals={isArray:x,isSelector:z,lazyTweens:X,blobDif:E},L=D._plugins={},j=W.tweenLookup={},V=0,q=W.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1},Z={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,true:1,false:0},U=f._rootFramesTimeline=new F,$=f._rootTimeline=new F,Q=30,G=W.lazyRender=function(){var t,e=X.length;for(I={};-1<--e;)(t=X[e])&&!1!==t._lazy&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);X.length=0};$._startTime=M.time,U._startTime=M.frame,$._active=U._active=!0,setTimeout(G,1),f._updateRoot=D.render=function(){var t,e,i;if(X.length&&G(),$.render((M.time-$._startTime)*$._timeScale,!1,!1),U.render((M.frame-U._startTime)*U._timeScale,!1,!1),X.length&&G(),M.frame>=Q){for(i in Q=M.frame+(parseInt(D.autoSleep,10)||120),j){for(t=(e=j[i].tweens).length;-1<--t;)e[t]._gc&&e.splice(t,1);0===e.length&&delete j[i]}if((!(i=$._first)||i._paused)&&D.autoSleep&&!U._first&&1===M._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||M.sleep()}}},M.addEventListener("tick",f._updateRoot);var H=function(t,e,i){var r,s,n=t._fwdTweenID;if(j[n||(t._fwdTweenID=n="t"+V++)]||(j[n]={target:t,tweens:[]}),e&&((r=j[n].tweens)[s=r.length]=e,i))for(;-1<--s;)r[s]===e&&r.splice(s,1);return j[n].tweens},K=function(t,e,i,r){var s,n,a=t.vars.onOverwrite;return a&&(s=a(t,e,i,r)),(a=D.onOverwrite)&&(n=a(t,e,i,r)),!1!==s&&!1!==n},J=function(t,e,i,r,s){var n,a,o;if(1===r||4<=r){for(o=s.length,_=0;_<o;_++)if((a=s[_])!==e)a._gc||a._kill(null,t,e)&&(n=!0);else if(5===r)break;return n}for(var l,h=e._startTime+v,f=[],u=0,p=0===e._duration,_=s.length;-1<--_;)(a=s[_])===e||a._gc||a._paused||(a._timeline!==e._timeline?(l=l||tt(e,0,p),0===tt(a,l,p)&&(f[u++]=a)):a._startTime<=h&&a._startTime+a.totalDuration()/a._timeScale>h&&((p||!a._initted)&&h-a._startTime<=2e-10||(f[u++]=a)));for(_=u;-1<--_;)if(a=f[_],2===r&&a._kill(i,t,e)&&(n=!0),2!==r||!a._firstPT&&a._initted){if(2!==r&&!K(a,e))continue;a._enabled(!1,!1)&&(n=!0)}return n},tt=function(t,e,i){for(var r=t._timeline,s=r._timeScale,n=t._startTime;r._timeline;){if(n+=r._startTime,s*=r._timeScale,r._paused)return-100;r=r._timeline}return e<(n/=s)?n-e:i&&n===e||!t._initted&&n-e<2*v?v:(n+=t.totalDuration()/t._timeScale/s)>e+v?0:n-e-v};t._init=function(){var t,e,i,r,s,n,a=this.vars,o=this._overwrittenProps,l=this._duration,h=!!a.immediateRender,f=a.ease;if(a.startAt){for(r in this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),s={},a.startAt)s[r]=a.startAt[r];if(s.overwrite=!1,s.immediateRender=!0,s.lazy=h&&!1!==a.lazy,s.startAt=s.delay=null,this._startAt=D.to(this.target,0,s),h)if(0<this._time)this._startAt=null;else if(0!==l)return}else if(a.runBackwards&&0!==l)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{for(r in 0!==this._time&&(h=!1),i={},a)q[r]&&"autoCSS"!==r||(i[r]=a[r]);if(i.overwrite=0,i.data="isFromStart",i.lazy=h&&!1!==a.lazy,i.immediateRender=h,this._startAt=D.to(this.target,0,i),h){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=f=f?f instanceof b?f:"function"==typeof f?new b(f,a.easeParams):P[f]||D.defaultEase:D.defaultEase,a.easeParams instanceof Array&&f.config&&(this._ease=f.config.apply(f,a.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(n=this._targets.length,t=0;t<n;t++)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],o?o[t]:null,t)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,o,0);if(e&&D._onPluginEvent("_onInitAllProps",this),o&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),a.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=a.onUpdate,this._initted=!0},t._initProps=function(t,e,i,r,s){var n,a,o,l,h,f;if(null==t)return!1;for(n in I[t._fwdTweenID]&&G(),this.vars.css||t.style&&t!==_&&t.nodeType&&L.css&&!1!==this.vars.autoCSS&&function(t,e){var i,r={};for(i in t)q[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!L[i]||L[i]&&L[i]._autoCSS)||(r[i]=t[i],delete t[i]);t.css=r}(this.vars,t),this.vars)if(f=this.vars[n],q[n])f&&(f instanceof Array||f.push&&x(f))&&-1!==f.join("").indexOf("{self}")&&(this.vars[n]=f=this._swapSelfInParams(f,this));else if(L[n]&&(l=new L[n])._onInitTween(t,this.vars[n],this,s)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:1,n:n,pg:1,pr:l._priority,m:0},a=l._overwriteProps.length;-1<--a;)e[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0),h._next&&(h._next._prev=h)}else e[n]=B.call(this,t,n,"get",f,n,0,null,this.vars.stringFilter,s);return r&&this._kill(r,t)?this._initProps(t,e,i,r,s):1<this._overwrite&&this._firstPT&&1<i.length&&J(t,this,e,this._overwrite,i)?(this._kill(e,t),this._initProps(t,e,i,r,s)):(this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration)&&(I[t._fwdTweenID]=!0),o)},t.render=function(t,e,i){var r,s,n,a,o,l,h,f=this._time,u=this._duration,p=this._rawPrevTime;if(u-1e-7<=t?(this._totalTime=this._time=u,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(r=!0,s="onComplete",i=i||this._timeline.autoRemoveChildren),0===u&&(!this._initted&&this.vars.lazy&&!i||(this._startTime===this._timeline._duration&&(t=0),(p<0||t<=0&&-1e-7<=t||p===v&&"isPause"!==this.data)&&p!==t&&(i=!0,v<p&&(s="onReverseComplete")),this._rawPrevTime=a=!e||t||p===t?t:v))):t<1e-7?(this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==f||0===u&&0<p)&&(s="onReverseComplete",r=this._reversed),t<0&&(this._active=!1,0===u&&(!this._initted&&this.vars.lazy&&!i||(0<=p&&(p!==v||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||p===t?t:v))),this._initted||(i=!0)):(this._totalTime=this._time=t,this._easeType?(o=t/u,(1===(l=this._easeType)||3===l&&.5<=o)&&(o=1-o),3===l&&(o*=2),1===(h=this._easePower)?o*=o:2===h?o*=o*o:3===h?o*=o*o*o:4===h&&(o*=o*o*o*o),this.ratio=1===l?1-o:2===l?o:t/u<.5?o/2:1-o/2):this.ratio=this._ease.getRatio(t/u)),this._time!==f||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=f,this._rawPrevTime=p,X.push(this),void(this._lazy=[t,e]);this._time&&!r?this.ratio=this._ease.getRatio(this._time/u):r&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(!1!==this._lazy&&(this._lazy=!1),this._active||!this._paused&&this._time!==f&&0<=t&&(this._active=!0),0===f&&(this._startAt&&(0<=t?this._startAt.render(t,e,i):s=s||"_dummyGS"),this.vars.onStart&&(0===this._time&&0!==u||e||this._callback("onStart"))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(t<0&&this._startAt&&-1e-4!==t&&this._startAt.render(t,e,i),e||(this._time!==f||r||i)&&this._callback("onUpdate")),s&&(this._gc&&!i||(t<0&&this._startAt&&!this._onUpdate&&-1e-4!==t&&this._startAt.render(t,e,i),r&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[s]&&this._callback(s),0===u&&this._rawPrevTime===v&&a!==v&&(this._rawPrevTime=0)))}},t._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var r,s,n,a,o,l,h,f,u,p=i&&this._time&&i._startTime===this._startTime&&this._timeline===i._timeline;if((x(e)||z(e))&&"number"!=typeof e[0])for(r=e.length;-1<--r;)this._kill(t,e[r],i)&&(l=!0);else{if(this._targets){for(r=this._targets.length;-1<--r;)if(e===this._targets[r]){o=this._propLookup[r]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[r]=t?this._overwrittenProps[r]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(h=t||o,f=t!==s&&"all"!==s&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(D.onOverwrite||this.vars.onOverwrite)){for(n in h)o[n]&&(u=u||[]).push(n);if((u||!t)&&!K(this,i,e,u))return!1}for(n in h)(a=o[n])&&(p&&(a.f?a.t[a.p](a.s):a.t[a.p]=a.s,l=!0),a.pg&&a.t._kill(h)&&(l=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),f&&(s[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return l},t.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],f.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-v,this.render(Math.min(0,-this._delay))),this},t._enabled=function(t,e){if(g||M.wake(),t&&this._gc){var i,r=this._targets;if(r)for(i=r.length;-1<--i;)this._siblings[i]=H(r[i],this,!0);else this._siblings=H(this.target,this,!0)}return f.prototype._enabled.call(this,t,e),!(!this._notifyPluginsOfEnabled||!this._firstPT)&&D._onPluginEvent(t?"_onEnable":"_onDisable",this)},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,r){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,new D(t,e,r)},D.delayedCall=function(t,e,i,r,s){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:r,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:s,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];var i,r,s,n;if(t="string"==typeof t&&D.selector(t)||t,(x(t)||z(t))&&"number"!=typeof t[0]){for(i=t.length,r=[];-1<--i;)r=r.concat(D.getTweensOf(t[i],e));for(i=r.length;-1<--i;)for(n=r[i],s=i;-1<--s;)n===r[s]&&r.splice(i,1)}else for(i=(r=H(t).concat()).length;-1<--i;)(r[i]._gc||e&&!r[i].isActive())&&r.splice(i,1);return r},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var r=D.getTweensOf(t,e),s=r.length;-1<--s;)r[s]._kill(i,t)};var et=p("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=et.prototype},!0);if(t=et.prototype,et.version="1.19.0",et.API=2,t._firstPT=null,t._addTween=B,t.setRatio=Y,t._kill=function(t){var e,i=this._overwriteProps,r=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;-1<--e;)null!=t[i[e]]&&i.splice(e,1);for(;r;)null!=t[r.n]&&(r._next&&(r._next._prev=r._prev),r._prev?(r._prev._next=r._next,r._prev=null):this._firstPT===r&&(this._firstPT=r._next)),r=r._next;return!1},t._mod=t._roundProps=function(t){for(var e,i=this._firstPT;i;)(e=t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&"function"==typeof e&&(2===i.f?i.t._applyPT.m=e:i.m=e),i=i._next},D._onPluginEvent=function(t,e){var i,r,s,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,r=s;r&&r.pr>o.pr;)r=r._next;(o._prev=r?r._prev:n)?o._prev._next=o:s=o,(o._next=r)?r._prev=o:n=o,o=a}o=e._firstPT=s}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},et.activate=function(t){for(var e=t.length;-1<--e;)t[e].API===et.API&&(L[(new t[e])._propName]=t[e]);return!0},s.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,r=t.priority||0,s=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},a=p("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){et.call(this,i,r),this._overwriteProps=s||[]},!0===t.fwd_global),o=a.prototype=new et(i);for(e in(o.constructor=a).API=t.API,n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,et.activate([a]),a},o=_._fwd_fwdQueue){for(h=0;h<o.length;h++)o[h]();for(t in w)w[t].func||_.console.log("FWDAnimation encountered missing dependency: "+t)}g=!1}}("undefined"!=typeof fwd_module&&fwd_module.exports&&"undefined"!=typeof fwd_global?fwd_global:this||window,"FWDAnimation"));