(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/El4":function(t,o,n){"use strict";n.d(o,"a",function(){return r});var e=n("4c35"),r=function(){function t(t,o,n,e){this.componentFactoryResolver=t,this.injector=o,this.appRef=n,this.document=e}return t.prototype.ngAfterViewInit=function(){this.portalHost=new e.b(this.document.querySelector("#toolbar-title"),this.componentFactoryResolver,this.appRef,this.injector),this.portalHost.attach(this.portal)},t.prototype.ngOnDestroy=function(){this.portalHost.detach()},t}()},"4c35":function(t,o,n){"use strict";n.d(o,"b",function(){return l}),n.d(o,"a",function(){return s}),n.d(o,"c",function(){return u});var e=n("mrSG");function r(){throw Error("Host already has a portal attached")}n("CcnG");var i=function(){function t(){}return t.prototype.attach=function(t){return null==t&&function(){throw Error("Attempting to attach a portal to a null PortalOutlet")}(),t.hasAttached()&&r(),this._attachedHost=t,t.attach(this)},t.prototype.detach=function(){var t=this._attachedHost;null==t?function(){throw Error("Attempting to detach a portal that is not attached to a host")}():(this._attachedHost=null,t.detach())},Object.defineProperty(t.prototype,"isAttached",{get:function(){return null!=this._attachedHost},enumerable:!0,configurable:!0}),t.prototype.setAttachedHost=function(t){this._attachedHost=t},t}(),a=function(t){function o(o,n,e,r){var i=t.call(this)||this;return i.component=o,i.viewContainerRef=n,i.injector=e,i.componentFactoryResolver=r,i}return Object(e.c)(o,t),o}(i),c=function(t){function o(o,n,e){var r=t.call(this)||this;return r.templateRef=o,r.viewContainerRef=n,r.context=e,r}return Object(e.c)(o,t),Object.defineProperty(o.prototype,"origin",{get:function(){return this.templateRef.elementRef},enumerable:!0,configurable:!0}),o.prototype.attach=function(o,n){return void 0===n&&(n=this.context),this.context=n,t.prototype.attach.call(this,o)},o.prototype.detach=function(){return this.context=void 0,t.prototype.detach.call(this)},o}(i),l=function(t){function o(o,n,e,r){var i=t.call(this)||this;return i.outletElement=o,i._componentFactoryResolver=n,i._appRef=e,i._defaultInjector=r,i}return Object(e.c)(o,t),o.prototype.attachComponentPortal=function(t){var o,n=this,e=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component);return t.viewContainerRef?(o=t.viewContainerRef.createComponent(e,t.viewContainerRef.length,t.injector||t.viewContainerRef.injector),this.setDisposeFn(function(){return o.destroy()})):(o=e.create(t.injector||this._defaultInjector),this._appRef.attachView(o.hostView),this.setDisposeFn(function(){n._appRef.detachView(o.hostView),o.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(o)),o},o.prototype.attachTemplatePortal=function(t){var o=this,n=t.viewContainerRef,e=n.createEmbeddedView(t.templateRef,t.context);return e.detectChanges(),e.rootNodes.forEach(function(t){return o.outletElement.appendChild(t)}),this.setDisposeFn(function(){var t=n.indexOf(e);-1!==t&&n.remove(t)}),e},o.prototype.dispose=function(){t.prototype.dispose.call(this),null!=this.outletElement.parentNode&&this.outletElement.parentNode.removeChild(this.outletElement)},o.prototype._getComponentRootNode=function(t){return t.hostView.rootNodes[0]},o}(function(){function t(){this._isDisposed=!1}return t.prototype.hasAttached=function(){return!!this._attachedPortal},t.prototype.attach=function(t){return t||function(){throw Error("Must provide a portal to attach")}(),this.hasAttached()&&r(),this._isDisposed&&function(){throw Error("This PortalOutlet has already been disposed")}(),t instanceof a?(this._attachedPortal=t,this.attachComponentPortal(t)):t instanceof c?(this._attachedPortal=t,this.attachTemplatePortal(t)):void function(){throw Error("Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal.")}()},t.prototype.detach=function(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()},t.prototype.dispose=function(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0},t.prototype.setDisposeFn=function(t){this._disposeFn=t},t.prototype._invokeDisposeFn=function(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)},t}()),s=function(t){function o(o,n){return t.call(this,o,n)||this}return Object(e.c)(o,t),o}(c),u=function(){return function(){}}()},PCNd:function(t,o,n){"use strict";n.d(o,"a",function(){return e});var e=function(){return function(){}}()},PXs7:function(t,o,n){"use strict";n.d(o,"a",function(){return i}),n.d(o,"b",function(){return c});var e=n("CcnG"),r=n("4c35"),i=(n("/El4"),n("Ip0R"),e.ob({encapsulation:2,styles:[],data:{}}));function a(t){return e.Hb(0,[e.zb(null,0),(t()(),e.hb(0,null,null,0))],null,null)}function c(t){return e.Hb(2,[e.Db(402653184,1,{portal:0}),(t()(),e.hb(16777216,null,null,1,null,a)),e.pb(2,16384,[[1,4]],0,r.a,[e.M,e.P],null,null)],null,null)}},Wucu:function(t,o,n){"use strict";n.d(o,"a",function(){return r}),n.d(o,"b",function(){return i});var e=n("CcnG"),r=(n("qAlS"),n("Fzqc"),n("dWZg"),e.ob({encapsulation:2,styles:["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:0}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:0}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}"],data:{}}));function i(t){return e.Hb(2,[e.Db(402653184,1,{_contentWrapper:0}),(t()(),e.qb(1,0,[[1,0],["contentWrapper",1]],null,1,"div",[["class","cdk-virtual-scroll-content-wrapper"]],null,null,null,null,null)),e.zb(null,0),(t()(),e.qb(3,0,null,null,0,"div",[["class","cdk-virtual-scroll-spacer"]],[[4,"transform",null]],null,null,null,null))],null,function(t,o){t(o,3,0,o.component._totalContentSizeTransform)})}},jCgv:function(t,o,n){"use strict";n("zOnA")},zOnA:function(t,o,n){"use strict";n.d(o,"a",function(){return l});var e=n("F/XL"),r=n("9Z1F"),i=n("CcnG"),a=n("t/Na"),c="https://jsonplaceholder.typicode.com/photos",l=function(){function t(t){this.http=t}return t.prototype.getBatch$=function(t,o){return void 0===t&&(t=1),void 0===o&&(o=10),this.http.get(c+"?_page="+t+"&_limit="+o).pipe(Object(r.a)(function(t){return console.error(t),Object(e.a)([])}))},t.prototype.getAll$=function(){return this.http.get(c).pipe(Object(r.a)(function(t){return console.error(t),Object(e.a)([])}))},t.ngInjectableDef=i.T({factory:function(){return new t(i.X(a.c))},token:t,providedIn:"root"}),t}()}}]);