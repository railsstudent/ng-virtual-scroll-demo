(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0kgU":function(t,e,n){"use strict";n.r(e);var l=n("CcnG"),o=function(){return function(){}}(),r=n("pMnS"),i=n("mrSG"),u=n("n6gG"),a=n("YlbQ"),s=n("K9Ia"),c=n("26FU"),h=n("6blF"),f=n("F/XL"),d=n("ny24");function p(t){return function(t){function e(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var l=t.apply(this,e)||this;return l._sticky=!1,l._hasStickyChanged=!1,l}return Object(i.c)(e,t),Object.defineProperty(e.prototype,"sticky",{get:function(){return this._sticky},set:function(t){var e=this._sticky;this._sticky=Object(u.c)(t),this._hasStickyChanged=e!==this._sticky},enumerable:!0,configurable:!0}),e.prototype.hasStickyChanged=function(){var t=this._hasStickyChanged;return this._hasStickyChanged=!1,t},e.prototype.resetStickyChanged=function(){this._hasStickyChanged=!1},e}(t)}var m=function(){return function(t){this.template=t}}(),b=function(){return function(t){this.template=t}}(),y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._stickyEnd=!1,e}return Object(i.c)(e,t),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},set:function(t){t&&(this._name=t,this.cssClassFriendlyName=t.replace(/[^a-z0-9_-]/gi,"-"))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"stickyEnd",{get:function(){return this._stickyEnd},set:function(t){var e=this._stickyEnd;this._stickyEnd=Object(u.c)(t),this._hasStickyChanged=e!==this._stickyEnd},enumerable:!0,configurable:!0}),e}(p(function(){return function(){}}())),_=function(){return function(t,e){e.nativeElement.classList.add("cdk-column-"+t.cssClassFriendlyName)}}(),w=function(t){function e(e,n){return t.call(this,e,n)||this}return Object(i.c)(e,t),e}(_),g=function(t){function e(e,n){return t.call(this,e,n)||this}return Object(i.c)(e,t),e}(_),C=function(){function t(t,e){this.template=t,this._differs=e}return t.prototype.ngOnChanges=function(t){if(!this._columnsDiffer){var e=t.columns&&t.columns.currentValue||[];this._columnsDiffer=this._differs.find(e).create(),this._columnsDiffer.diff(e)}},t.prototype.getColumnsDiff=function(){return this._columnsDiffer.diff(this.columns)},t.prototype.extractCellTemplate=function(t){return this instanceof R?t.headerCell.template:this instanceof v?t.footerCell.template:t.cell.template},t}(),R=function(t){function e(e,n){return t.call(this,e,n)||this}return Object(i.c)(e,t),e.prototype.ngOnChanges=function(e){t.prototype.ngOnChanges.call(this,e)},e}(p(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i.c)(e,t),e}(C))),v=function(t){function e(e,n){return t.call(this,e,n)||this}return Object(i.c)(e,t),e.prototype.ngOnChanges=function(e){t.prototype.ngOnChanges.call(this,e)},e}(p(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i.c)(e,t),e}(C))),D=function(t){function e(e,n){return t.call(this,e,n)||this}return Object(i.c)(e,t),e}(C),S=function(){function t(e){this._viewContainer=e,t.mostRecentCellOutlet=this}return t.prototype.ngOnDestroy=function(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)},t.mostRecentCellOutlet=null,t}(),O=function(){return function(){}}(),k=function(){return function(){}}();function x(t){return Error('Could not find column with id "'+t+'".')}var E=["top","bottom","left","right"],H=function(){function t(t,e,n,l){void 0===l&&(l=!0),this.isNativeHtmlTable=t,this.stickCellCss=e,this.direction=n,this._isBrowser=l}return t.prototype.clearStickyPositioning=function(t,e){for(var n=0,l=t;n<l.length;n++){var o=l[n];if(o.nodeType===o.ELEMENT_NODE){this._removeStickyStyle(o,e);for(var r=0;r<o.children.length;r++)this._removeStickyStyle(o.children[r],e)}}},t.prototype.updateStickyColumns=function(t,e,n){var l=e.some(function(t){return t})||n.some(function(t){return t});if(t.length&&l&&this._isBrowser)for(var o=t[0],r=o.children.length,i=this._getCellWidths(o),u=this._getStickyStartColumnPositions(i,e),a=this._getStickyEndColumnPositions(i,n),s="rtl"===this.direction,c=0,h=t;c<h.length;c++)for(var f=h[c],d=0;d<r;d++){var p=f.children[d];e[d]&&this._addStickyStyle(p,s?"right":"left",u[d]),n[d]&&this._addStickyStyle(p,s?"left":"right",a[d])}},t.prototype.stickRows=function(t,e,n){if(this._isBrowser)for(var l="bottom"===n?t.reverse():t,o=0,r=0;r<l.length;r++)if(e[r]){var i=l[r];if(this.isNativeHtmlTable)for(var u=0;u<i.children.length;u++)this._addStickyStyle(i.children[u],n,o);else this._addStickyStyle(i,n,o);if(r===l.length-1)return;o+=i.getBoundingClientRect().height}},t.prototype.updateStickyFooterContainer=function(t,e){if(this.isNativeHtmlTable){var n=t.querySelector("tfoot");e.some(function(t){return!t})?this._removeStickyStyle(n,["bottom"]):this._addStickyStyle(n,"bottom",0)}},t.prototype._removeStickyStyle=function(t,e){for(var n=0,l=e;n<l.length;n++)t.style[l[n]]="";t.style.zIndex=this._getCalculatedZIndex(t),E.some(function(e){return!!t.style[e]})||(t.style.position="",t.classList.remove(this.stickCellCss))},t.prototype._addStickyStyle=function(t,e,n){t.classList.add(this.stickCellCss),t.style[e]=n+"px",t.style.cssText+="position: -webkit-sticky; position: sticky; ",t.style.zIndex=this._getCalculatedZIndex(t)},t.prototype._getCalculatedZIndex=function(t){for(var e={top:100,bottom:10,left:1,right:1},n=0,l=0,o=E;l<o.length;l++){var r=o[l];t.style[r]&&(n+=e[r])}return n?""+n:""},t.prototype._getCellWidths=function(t){for(var e=[],n=t.children,l=0;l<n.length;l++)e.push(n[l].getBoundingClientRect().width);return e},t.prototype._getStickyStartColumnPositions=function(t,e){for(var n=[],l=0,o=0;o<t.length;o++)e[o]&&(n[o]=l,l+=t[o]);return n},t.prototype._getStickyEndColumnPositions=function(t,e){for(var n=[],l=0,o=t.length;o>0;o--)e[o]&&(n[o]=l,l+=t[o]);return n},t}(),j=function(){return function(t,e){this.viewContainer=t,this.elementRef=e}}(),M=function(){return function(t,e){this.viewContainer=t,this.elementRef=e}}(),F=function(){return function(t,e){this.viewContainer=t,this.elementRef=e}}(),P=function(){function t(t,e,n,l,o,r,i){this._differs=t,this._changeDetectorRef=e,this._elementRef=n,this._dir=o,this._platform=i,this._onDestroy=new s.a,this._columnDefsByName=new Map,this._customColumnDefs=new Set,this._customRowDefs=new Set,this._customHeaderRowDefs=new Set,this._customFooterRowDefs=new Set,this._headerRowDefChanged=!0,this._footerRowDefChanged=!0,this._cachedRenderRowsMap=new Map,this.stickyCssClass="cdk-table-sticky",this._multiTemplateDataRows=!1,this.viewChange=new c.a({start:0,end:Number.MAX_VALUE}),l||this._elementRef.nativeElement.setAttribute("role","grid"),this._document=r,this._isNativeHtmlTable="TABLE"===this._elementRef.nativeElement.nodeName}return Object.defineProperty(t.prototype,"trackBy",{get:function(){return this._trackByFn},set:function(t){Object(l.Y)()&&null!=t&&"function"!=typeof t&&console&&console.warn&&console.warn("trackBy must be a function, but received "+JSON.stringify(t)+"."),this._trackByFn=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dataSource",{get:function(){return this._dataSource},set:function(t){this._dataSource!==t&&this._switchDataSource(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"multiTemplateDataRows",{get:function(){return this._multiTemplateDataRows},set:function(t){this._multiTemplateDataRows=Object(u.c)(t),this._rowOutlet.viewContainer.length&&this._forceRenderDataRows()},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){var t=this;this._setupStickyStyler(),this._isNativeHtmlTable&&this._applyNativeTableSections(),this._dataDiffer=this._differs.find([]).create(function(e,n){return t.trackBy?t.trackBy(n.dataIndex,n.data):n})},t.prototype.ngAfterContentChecked=function(){if(this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&!this._rowDefs.length)throw Error("Missing definitions for header, footer, and row; cannot determine which columns should be rendered.");this._renderUpdatedColumns(),this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription&&this._observeRenderChanges(),this._checkStickyStates()},t.prototype.ngOnDestroy=function(){this._rowOutlet.viewContainer.clear(),this._headerRowOutlet.viewContainer.clear(),this._footerRowOutlet.viewContainer.clear(),this._cachedRenderRowsMap.clear(),this._onDestroy.next(),this._onDestroy.complete(),Object(a.d)(this.dataSource)&&this.dataSource.disconnect(this)},t.prototype.renderRows=function(){var t=this;this._renderRows=this._getAllRenderRows();var e=this._dataDiffer.diff(this._renderRows);if(e){var n=this._rowOutlet.viewContainer;e.forEachOperation(function(e,l,o){if(null==e.previousIndex)t._insertRow(e.item,o);else if(null==o)n.remove(l);else{var r=n.get(l);n.move(r,o)}}),this._updateRowIndexContext(),e.forEachIdentityChange(function(t){n.get(t.currentIndex).context.$implicit=t.item.data}),this.updateStickyColumnStyles()}},t.prototype.setHeaderRowDef=function(t){this._customHeaderRowDefs=new Set([t]),this._headerRowDefChanged=!0},t.prototype.setFooterRowDef=function(t){this._customFooterRowDefs=new Set([t]),this._footerRowDefChanged=!0},t.prototype.addColumnDef=function(t){this._customColumnDefs.add(t)},t.prototype.removeColumnDef=function(t){this._customColumnDefs.delete(t)},t.prototype.addRowDef=function(t){this._customRowDefs.add(t)},t.prototype.removeRowDef=function(t){this._customRowDefs.delete(t)},t.prototype.addHeaderRowDef=function(t){this._customHeaderRowDefs.add(t),this._headerRowDefChanged=!0},t.prototype.removeHeaderRowDef=function(t){this._customHeaderRowDefs.delete(t),this._headerRowDefChanged=!0},t.prototype.addFooterRowDef=function(t){this._customFooterRowDefs.add(t),this._footerRowDefChanged=!0},t.prototype.removeFooterRowDef=function(t){this._customFooterRowDefs.delete(t),this._footerRowDefChanged=!0},t.prototype.updateStickyHeaderRowStyles=function(){var t=this._getRenderedRows(this._headerRowOutlet),e=this._elementRef.nativeElement.querySelector("thead");e&&(e.style.display=t.length?"":"none");var n=this._headerRowDefs.map(function(t){return t.sticky});this._stickyStyler.clearStickyPositioning(t,["top"]),this._stickyStyler.stickRows(t,n,"top"),this._headerRowDefs.forEach(function(t){return t.resetStickyChanged()})},t.prototype.updateStickyFooterRowStyles=function(){var t=this._getRenderedRows(this._footerRowOutlet),e=this._elementRef.nativeElement.querySelector("tfoot");e&&(e.style.display=t.length?"":"none");var n=this._footerRowDefs.map(function(t){return t.sticky});this._stickyStyler.clearStickyPositioning(t,["bottom"]),this._stickyStyler.stickRows(t,n,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,n),this._footerRowDefs.forEach(function(t){return t.resetStickyChanged()})},t.prototype.updateStickyColumnStyles=function(){var t=this,e=this._getRenderedRows(this._headerRowOutlet),n=this._getRenderedRows(this._rowOutlet),l=this._getRenderedRows(this._footerRowOutlet);this._stickyStyler.clearStickyPositioning(e.concat(n,l),["left","right"]),e.forEach(function(e,n){t._addStickyColumnStyles([e],t._headerRowDefs[n])}),this._rowDefs.forEach(function(e){for(var l=[],o=0;o<n.length;o++)t._renderRows[o].rowDef===e&&l.push(n[o]);t._addStickyColumnStyles(l,e)}),l.forEach(function(e,n){t._addStickyColumnStyles([e],t._footerRowDefs[n])}),Array.from(this._columnDefsByName.values()).forEach(function(t){return t.resetStickyChanged()})},t.prototype._getAllRenderRows=function(){var t=[],e=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(var n=0;n<this._data.length;n++){var l=this._data[n],o=this._getRenderRowsForData(l,n,e.get(l));this._cachedRenderRowsMap.has(l)||this._cachedRenderRowsMap.set(l,new WeakMap);for(var r=0;r<o.length;r++){var i=o[r],u=this._cachedRenderRowsMap.get(i.data);u.has(i.rowDef)?u.get(i.rowDef).push(i):u.set(i.rowDef,[i]),t.push(i)}}return t},t.prototype._getRenderRowsForData=function(t,e,n){return this._getRowDefs(t,e).map(function(l){var o=n&&n.has(l)?n.get(l):[];if(o.length){var r=o.shift();return r.dataIndex=e,r}return{data:t,rowDef:l,dataIndex:e}})},t.prototype._cacheColumnDefs=function(){var t=this;this._columnDefsByName.clear(),T(this._contentColumnDefs,this._customColumnDefs).forEach(function(e){if(t._columnDefsByName.has(e.name))throw Error('Duplicate column definition name provided: "'+e.name+'".');t._columnDefsByName.set(e.name,e)})},t.prototype._cacheRowDefs=function(){this._headerRowDefs=T(this._contentHeaderRowDefs,this._customHeaderRowDefs),this._footerRowDefs=T(this._contentFooterRowDefs,this._customFooterRowDefs),this._rowDefs=T(this._contentRowDefs,this._customRowDefs);var t=this._rowDefs.filter(function(t){return!t.when});if(!this.multiTemplateDataRows&&t.length>1)throw Error("There can only be one default row without a when predicate function.");this._defaultRowDef=t[0]},t.prototype._renderUpdatedColumns=function(){var t=function(t,e){return t||!!e.getColumnsDiff()};this._rowDefs.reduce(t,!1)&&this._forceRenderDataRows(),this._headerRowDefs.reduce(t,!1)&&this._forceRenderHeaderRows(),this._footerRowDefs.reduce(t,!1)&&this._forceRenderFooterRows()},t.prototype._switchDataSource=function(t){this._data=[],Object(a.d)(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),t||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear()),this._dataSource=t},t.prototype._observeRenderChanges=function(){var t=this;if(this.dataSource){var e;if(Object(a.d)(this.dataSource)?e=this.dataSource.connect(this):this.dataSource instanceof h.a?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Object(f.a)(this.dataSource)),void 0===e)throw Error("Provided data source did not match an array, Observable, or DataSource");this._renderChangeSubscription=e.pipe(Object(d.a)(this._onDestroy)).subscribe(function(e){t._data=e||[],t.renderRows()})}},t.prototype._forceRenderHeaderRows=function(){var t=this;this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach(function(e,n){return t._renderRow(t._headerRowOutlet,e,n)}),this.updateStickyHeaderRowStyles(),this.updateStickyColumnStyles()},t.prototype._forceRenderFooterRows=function(){var t=this;this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach(function(e,n){return t._renderRow(t._footerRowOutlet,e,n)}),this.updateStickyFooterRowStyles(),this.updateStickyColumnStyles()},t.prototype._addStickyColumnStyles=function(t,e){var n=this,l=Array.from(e.columns||[]).map(function(t){var e=n._columnDefsByName.get(t);if(!e)throw x(t);return e}),o=l.map(function(t){return t.sticky}),r=l.map(function(t){return t.stickyEnd});this._stickyStyler.updateStickyColumns(t,o,r)},t.prototype._getRenderedRows=function(t){for(var e=[],n=0;n<t.viewContainer.length;n++){var l=t.viewContainer.get(n);e.push(l.rootNodes[0])}return e},t.prototype._getRowDefs=function(t,e){if(1==this._rowDefs.length)return[this._rowDefs[0]];var n=[];if(this.multiTemplateDataRows)n=this._rowDefs.filter(function(n){return!n.when||n.when(e,t)});else{var l=this._rowDefs.find(function(n){return n.when&&n.when(e,t)})||this._defaultRowDef;l&&n.push(l)}if(!n.length)throw function(t){return Error("Could not find a matching row definition for theprovided row data: "+JSON.stringify(t))}(t);return n},t.prototype._insertRow=function(t,e){this._renderRow(this._rowOutlet,t.rowDef,e,{$implicit:t.data})},t.prototype._renderRow=function(t,e,n,l){void 0===l&&(l={}),t.viewContainer.createEmbeddedView(e.template,l,n);for(var o=0,r=this._getCellTemplates(e);o<r.length;o++)S.mostRecentCellOutlet&&S.mostRecentCellOutlet._viewContainer.createEmbeddedView(r[o],l);this._changeDetectorRef.markForCheck()},t.prototype._updateRowIndexContext=function(){for(var t=this._rowOutlet.viewContainer,e=0,n=t.length;e<n;e++){var l=t.get(e).context;l.count=n,l.first=0===e,l.last=e===n-1,l.even=e%2==0,l.odd=!l.even,this.multiTemplateDataRows?(l.dataIndex=this._renderRows[e].dataIndex,l.renderIndex=e):l.index=this._renderRows[e].dataIndex}},t.prototype._getCellTemplates=function(t){var e=this;return t&&t.columns?Array.from(t.columns,function(n){var l=e._columnDefsByName.get(n);if(!l)throw x(n);return t.extractCellTemplate(l)}):[]},t.prototype._applyNativeTableSections=function(){for(var t=this._document||document,e=t.createDocumentFragment(),n=0,l=[{tag:"thead",outlet:this._headerRowOutlet},{tag:"tbody",outlet:this._rowOutlet},{tag:"tfoot",outlet:this._footerRowOutlet}];n<l.length;n++){var o=l[n],r=t.createElement(o.tag);r.setAttribute("role","rowgroup"),r.appendChild(o.outlet.elementRef.nativeElement),e.appendChild(r)}this._elementRef.nativeElement.appendChild(e)},t.prototype._forceRenderDataRows=function(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows(),this.updateStickyColumnStyles()},t.prototype._checkStickyStates=function(){var t=function(t,e){return t||e.hasStickyChanged()};this._headerRowDefs.reduce(t,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(t,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(t,!1)&&this.updateStickyColumnStyles()},t.prototype._setupStickyStyler=function(){var t=this;this._stickyStyler=new H(this._isNativeHtmlTable,this.stickyCssClass,this._dir?this._dir.value:"ltr",!this._platform||this._platform.isBrowser),(this._dir?this._dir.change:Object(f.a)()).pipe(Object(d.a)(this._onDestroy)).subscribe(function(e){t._stickyStyler.direction=e,t.updateStickyColumnStyles()})},t}();function T(t,e){return t.toArray().concat(Array.from(e))}var N=function(){return function(){}}(),q=(n("pugT"),n("p0ib"),n("dzgT")),A=n("67Y/"),I=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.stickyCssClass="mat-table-sticky",e}return Object(i.c)(e,t),e}(P),B=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i.c)(e,t),e}(m),L=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i.c)(e,t),e}(b),$=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i.c)(e,t),e}(y),U=function(t){function e(e,n){var l=t.call(this,e,n)||this;return n.nativeElement.classList.add("mat-column-"+e.cssClassFriendlyName),l}return Object(i.c)(e,t),e}(w),z=function(t){function e(e,n){var l=t.call(this,e,n)||this;return n.nativeElement.classList.add("mat-column-"+e.cssClassFriendlyName),l}return Object(i.c)(e,t),e}(g),Z=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i.c)(e,t),e}(R),V=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i.c)(e,t),e}(D),W=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i.c)(e,t),e}(O),Y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i.c)(e,t),e}(k),G=function(){return function(){}}(),J=n("Ip0R"),X=n("Fzqc"),K=n("Wf4p"),Q=n("ZYjt"),tt=n("dWZg"),et=l.ob({encapsulation:2,styles:["mat-table{display:block}mat-header-row{min-height:56px}mat-footer-row,mat-row{min-height:48px}mat-footer-row,mat-header-row,mat-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-footer-row::after,mat-header-row::after,mat-row::after{display:inline-block;min-height:inherit;content:''}mat-cell:first-of-type,mat-footer-cell:first-of-type,mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-footer-cell:last-of-type,mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-footer-cell,mat-header-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-footer-row,tr.mat-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}td.mat-cell,td.mat-footer-cell,th.mat-header-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type,th.mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type,[dir=rtl] th.mat-header-cell:first-of-type{padding-left:0;padding-right:24px}td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type,th.mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type,[dir=rtl] th.mat-header-cell:last-of-type{padding-right:0;padding-left:24px}"],data:{}});function nt(t){return l.Hb(2,[l.Db(402653184,1,{_rowOutlet:0}),l.Db(402653184,2,{_headerRowOutlet:0}),l.Db(402653184,3,{_footerRowOutlet:0}),l.zb(null,0),(t()(),l.qb(4,16777216,null,null,1,null,null,null,null,null,null,null)),l.pb(5,16384,[[2,4]],0,M,[l.P,l.k],null,null),(t()(),l.qb(6,16777216,null,null,1,null,null,null,null,null,null,null)),l.pb(7,16384,[[1,4]],0,j,[l.P,l.k],null,null),(t()(),l.qb(8,16777216,null,null,1,null,null,null,null,null,null,null)),l.pb(9,16384,[[3,4]],0,F,[l.P,l.k],null,null)],null,null)}var lt=l.ob({encapsulation:2,styles:[],data:{}});function ot(t){return l.Hb(2,[(t()(),l.qb(0,16777216,null,null,1,null,null,null,null,null,null,null)),l.pb(1,147456,null,0,S,[l.P],null,null)],null,null)}var rt=l.ob({encapsulation:2,styles:[],data:{}});function it(t){return l.Hb(2,[(t()(),l.qb(0,16777216,null,null,1,null,null,null,null,null,null,null)),l.pb(1,147456,null,0,S,[l.P],null,null)],null,null)}var ut=n("PXs7"),at=n("/El4"),st=n("Wucu"),ct=n("qAlS"),ht=n("ad02"),ft=function(){function t(){this.indexChange=new s.a,this.scrolledIndexChange=this.indexChange.asObservable().pipe(Object(ht.a)())}return t.prototype.attach=function(t){this.viewport=t,this.onDataLengthChanged(),this.updateContent(t)},t.prototype.detach=function(){},t.prototype.onContentScrolled=function(){this.updateContent(this.viewport)},t.prototype.onDataLengthChanged=function(){this.viewport&&this.viewport.setTotalContentSize(this.viewport.getDataLength()*this.scrollHeight)},t.prototype.onContentRendered=function(){},t.prototype.onRenderedOffsetChanged=function(){},t.prototype.scrollToIndex=function(t,e){},t.prototype.setScrollHeight=function(t,e){this.scrollHeight=t,this.scrollHeader=e,this.updateContent(this.viewport)},t.prototype.updateContent=function(t){if(this.viewport){var e=Math.max(0,Math.round((t.measureScrollOffset()-this.scrollHeader)/this.scrollHeight)-2);t.setRenderedContentOffset(this.scrollHeight*e);var n=Math.round((t.measureScrollOffset()-this.scrollHeader)/this.scrollHeight)+1;this.indexChange.next(n)}},t}(),dt=n("Phjn"),pt=n("dC0D"),mt=n("xMyE"),bt=n("S1nX"),yt=(n("jCgv"),function(){function t(t,e){this.scrollStrategy=t,this.service=e,this.displayedColumns=["id","albumId","title","url","thumbnailUrl"],this.rowHeight=60,this.headerHeight=60,this.gridHeight=0,this.pageOffset=1,this.lastLoadedPageOffset=0,this.theEnd=!1,this.nextData$=new c.a(!0),this.destroy$=new s.a}return t.prototype.ngOnInit=function(){var e=this;this.gridHeight=this.tableViewPort.elementRef.nativeElement.clientHeight;var n=Math.ceil(this.gridHeight/this.rowHeight)+t.BUFFER_SIZE;this.scrollStrategy.setScrollHeight(this.rowHeight,this.headerHeight),this.photos$=this.nextData$.asObservable().pipe(Object(dt.a)(function(){return e.getBatch$()}),Object(pt.a)(function(t,e){return i.a({},t,e)},{}),Object(mt.a)(function(){return e.lastLoadedPageOffset=e.pageOffset}),Object(A.a)(function(t){return Object.keys(t).reduce(function(e,n){return e.concat(t[n])},[])}),Object(d.a)(this.destroy$)),this.dataSource$=Object(q.a)(this.photos$,this.scrollStrategy.scrolledIndexChange).pipe(Object(A.a)(function(e){var l=e[0],o=e[1],r=Math.max(0,o-t.BUFFER_SIZE),i=Math.min(l.length,o+n);return[i===l.length,l.slice(r,i)]}),Object(mt.a)(function(t){t[0]&&(console.log("old pageOffset",e.pageOffset,"lastLoadedPageOffset",e.lastLoadedPageOffset),e.theEnd||e.pageOffset!==e.lastLoadedPageOffset?console.log("waiting for "+e.lastLoadedPageOffset+" to finish loading..."):(e.pageOffset=e.pageOffset+1,console.log("Update pageOffset to",e.pageOffset),e.nextData$.next(!0)))}),Object(A.a)(function(t){return t[1]}),Object(bt.a)(),Object(d.a)(this.destroy$)),this.photoLength$=this.photos$.pipe(Object(A.a)(function(t){return t.length}))},t.prototype.getBatch$=function(){var t=this;return this.service.getBatch$(this.pageOffset,10).pipe(Object(mt.a)(function(e){e.length||(t.theEnd=!0)}),Object(A.a)(function(t){return t.reduce(function(t,e){return t[e.id]=e,t},{})}))},t.prototype.ngOnDestroy=function(){this.destroy$.next(),this.destroy$.complete()},t.BUFFER_SIZE=3,t}()),_t=n("zOnA"),wt=l.ob({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-cell[_ngcontent-%COMP%]{border-right:1px solid rgba(255,255,255,.12)}.mat-column-id[_ngcontent-%COMP%]{width:10%}.mat-column-albumId[_ngcontent-%COMP%]{width:10%;text-align:center}.mat-column-title[_ngcontent-%COMP%]{width:40%}.mat-column-url[_ngcontent-%COMP%]{width:30%;overflow-wrap:break-word;word-wrap:break-word;word-break:break-all}.mat-column-thumbnailUrl[_ngcontent-%COMP%]{width:10%}.mat-column-thumbnailUrl[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px;height:60px}cdk-virtual-scroll-viewport[_ngcontent-%COMP%]{height:calc(100vh - 70px)}"]],data:{}});function gt(t){return l.Hb(0,[(t()(),l.qb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),l.pb(1,16384,null,0,U,[y,l.k],null,null),(t()(),l.Fb(-1,null,["Album Id"]))],null,null)}function Ct(t){return l.Hb(0,[(t()(),l.qb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),l.pb(1,16384,null,0,z,[y,l.k],null,null),(t()(),l.Fb(2,null,["",""]))],null,function(t,e){t(e,2,0,e.context.$implicit.albumId)})}function Rt(t){return l.Hb(0,[(t()(),l.qb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),l.pb(1,16384,null,0,U,[y,l.k],null,null),(t()(),l.Fb(-1,null,["Id"]))],null,null)}function vt(t){return l.Hb(0,[(t()(),l.qb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),l.pb(1,16384,null,0,z,[y,l.k],null,null),(t()(),l.Fb(2,null,["",""]))],null,function(t,e){t(e,2,0,e.context.$implicit.id)})}function Dt(t){return l.Hb(0,[(t()(),l.qb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),l.pb(1,16384,null,0,U,[y,l.k],null,null),(t()(),l.Fb(-1,null,["Title"]))],null,null)}function St(t){return l.Hb(0,[(t()(),l.qb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),l.pb(1,16384,null,0,z,[y,l.k],null,null),(t()(),l.Fb(2,null,["",""]))],null,function(t,e){t(e,2,0,e.context.$implicit.title)})}function Ot(t){return l.Hb(0,[(t()(),l.qb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),l.pb(1,16384,null,0,U,[y,l.k],null,null),(t()(),l.Fb(-1,null,["Url"]))],null,null)}function kt(t){return l.Hb(0,[(t()(),l.qb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),l.pb(1,16384,null,0,z,[y,l.k],null,null),(t()(),l.Fb(2,null,["",""]))],null,function(t,e){t(e,2,0,e.context.$implicit.url)})}function xt(t){return l.Hb(0,[(t()(),l.qb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),l.pb(1,16384,null,0,U,[y,l.k],null,null),(t()(),l.Fb(-1,null,["Thumbnail Url"]))],null,null)}function Et(t){return l.Hb(0,[(t()(),l.qb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),l.pb(1,16384,null,0,z,[y,l.k],null,null),(t()(),l.qb(2,0,null,null,0,"img",[["alt","element.title"]],[[8,"src",4]],null,null,null,null))],null,function(t,e){t(e,2,0,l.sb(1,"",e.context.$implicit.thumbnailUrl,""))})}function Ht(t){return l.Hb(0,[(t()(),l.qb(0,0,null,null,2,"tr",[["class","mat-header-row"],["mat-header-row",""],["role","row"]],null,null,null,ot,lt)),l.Cb(6144,null,O,null,[W]),l.pb(2,49152,null,0,W,[],null,null)],null,null)}function jt(t){return l.Hb(0,[(t()(),l.qb(0,0,null,null,2,"tr",[["class","mat-row"],["mat-row",""],["role","row"]],null,null,null,it,rt)),l.Cb(6144,null,k,null,[Y]),l.pb(2,49152,null,0,Y,[],null,null)],null,null)}function Mt(t){return l.Hb(0,[l.Db(402653184,1,{tableViewPort:0}),(t()(),l.qb(1,0,null,null,3,"app-title",[],null,null,null,ut.b,ut.a)),l.pb(2,4374528,null,0,at.a,[l.j,l.r,l.g],null,null),(t()(),l.Fb(3,0,["Virtual Scroll Table (Number of records: ",")"])),l.Bb(131072,J.b,[l.h]),(t()(),l.qb(5,0,null,null,80,"cdk-virtual-scroll-viewport",[["class","cdk-virtual-scroll-viewport"]],[[2,"cdk-virtual-scroll-orientation-horizontal",null],[2,"cdk-virtual-scroll-orientation-vertical",null]],null,null,st.b,st.a)),l.Cb(6144,null,ct.b,null,[ct.d]),l.pb(7,245760,[[1,4]],0,ct.d,[l.k,l.h,l.A,[2,ct.h],[2,X.b],ct.f],null,null),(t()(),l.qb(8,0,null,0,77,"table",[["class","mat-elevation-z8 mat-table"],["mat-table",""]],null,null,null,nt,et)),l.pb(9,2342912,null,4,I,[l.t,l.h,l.k,[8,null],[2,X.b],J.d,tt.a],{dataSource:[0,"dataSource"]},null),l.Db(603979776,2,{_contentColumnDefs:1}),l.Db(603979776,3,{_contentRowDefs:1}),l.Db(603979776,4,{_contentHeaderRowDefs:1}),l.Db(603979776,5,{_contentFooterRowDefs:1}),(t()(),l.qb(14,0,null,null,12,null,null,null,null,null,null,null)),l.Cb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[$]),l.pb(16,16384,null,3,$,[],{name:[0,"name"]},null),l.Db(335544320,6,{cell:0}),l.Db(335544320,7,{headerCell:0}),l.Db(335544320,8,{footerCell:0}),l.Cb(2048,[[2,4]],y,null,[$]),(t()(),l.hb(0,null,null,2,null,gt)),l.pb(22,16384,null,0,L,[l.M],null,null),l.Cb(2048,[[7,4]],b,null,[L]),(t()(),l.hb(0,null,null,2,null,Ct)),l.pb(25,16384,null,0,B,[l.M],null,null),l.Cb(2048,[[6,4]],m,null,[B]),(t()(),l.qb(27,0,null,null,12,null,null,null,null,null,null,null)),l.Cb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[$]),l.pb(29,16384,null,3,$,[],{name:[0,"name"]},null),l.Db(335544320,9,{cell:0}),l.Db(335544320,10,{headerCell:0}),l.Db(335544320,11,{footerCell:0}),l.Cb(2048,[[2,4]],y,null,[$]),(t()(),l.hb(0,null,null,2,null,Rt)),l.pb(35,16384,null,0,L,[l.M],null,null),l.Cb(2048,[[10,4]],b,null,[L]),(t()(),l.hb(0,null,null,2,null,vt)),l.pb(38,16384,null,0,B,[l.M],null,null),l.Cb(2048,[[9,4]],m,null,[B]),(t()(),l.qb(40,0,null,null,12,null,null,null,null,null,null,null)),l.Cb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[$]),l.pb(42,16384,null,3,$,[],{name:[0,"name"]},null),l.Db(335544320,12,{cell:0}),l.Db(335544320,13,{headerCell:0}),l.Db(335544320,14,{footerCell:0}),l.Cb(2048,[[2,4]],y,null,[$]),(t()(),l.hb(0,null,null,2,null,Dt)),l.pb(48,16384,null,0,L,[l.M],null,null),l.Cb(2048,[[13,4]],b,null,[L]),(t()(),l.hb(0,null,null,2,null,St)),l.pb(51,16384,null,0,B,[l.M],null,null),l.Cb(2048,[[12,4]],m,null,[B]),(t()(),l.qb(53,0,null,null,12,null,null,null,null,null,null,null)),l.Cb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[$]),l.pb(55,16384,null,3,$,[],{name:[0,"name"]},null),l.Db(335544320,15,{cell:0}),l.Db(335544320,16,{headerCell:0}),l.Db(335544320,17,{footerCell:0}),l.Cb(2048,[[2,4]],y,null,[$]),(t()(),l.hb(0,null,null,2,null,Ot)),l.pb(61,16384,null,0,L,[l.M],null,null),l.Cb(2048,[[16,4]],b,null,[L]),(t()(),l.hb(0,null,null,2,null,kt)),l.pb(64,16384,null,0,B,[l.M],null,null),l.Cb(2048,[[15,4]],m,null,[B]),(t()(),l.qb(66,0,null,null,12,null,null,null,null,null,null,null)),l.Cb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[$]),l.pb(68,16384,null,3,$,[],{name:[0,"name"]},null),l.Db(335544320,18,{cell:0}),l.Db(335544320,19,{headerCell:0}),l.Db(335544320,20,{footerCell:0}),l.Cb(2048,[[2,4]],y,null,[$]),(t()(),l.hb(0,null,null,2,null,xt)),l.pb(74,16384,null,0,L,[l.M],null,null),l.Cb(2048,[[19,4]],b,null,[L]),(t()(),l.hb(0,null,null,2,null,Et)),l.pb(77,16384,null,0,B,[l.M],null,null),l.Cb(2048,[[18,4]],m,null,[B]),(t()(),l.qb(79,0,null,null,6,"tbody",[],null,null,null,null,null)),(t()(),l.hb(0,null,null,2,null,Ht)),l.pb(81,540672,null,0,Z,[l.M,l.t],{columns:[0,"columns"]},null),l.Cb(2048,[[4,4]],R,null,[Z]),(t()(),l.hb(0,null,null,2,null,jt)),l.pb(84,540672,null,0,V,[l.M,l.t],{columns:[0,"columns"]},null),l.Cb(2048,[[3,4]],D,null,[V])],function(t,e){var n=e.component;t(e,7,0),t(e,9,0,n.dataSource$),t(e,16,0,"albumId"),t(e,29,0,"id"),t(e,42,0,"title"),t(e,55,0,"url"),t(e,68,0,"thumbnailUrl"),t(e,81,0,n.displayedColumns),t(e,84,0,n.displayedColumns)},function(t,e){var n=e.component;t(e,3,0,l.Gb(e,3,0,l.Ab(e,4).transform(n.photoLength$))),t(e,5,0,"horizontal"===l.Ab(e,7).orientation,"horizontal"!==l.Ab(e,7).orientation)})}function Ft(t){return l.Hb(0,[(t()(),l.qb(0,0,null,null,2,"app-photo-table",[],null,null,null,Mt,wt)),l.Cb(512,null,ct.h,ft,[]),l.pb(2,245760,null,0,yt,[ct.h,_t.a],null,null)],function(t,e){t(e,2,0)},null)}var Pt=l.mb("app-photo-table",yt,Ft,{},{},[]),Tt=n("ZYCi"),Nt=function(){return function(){}}(),qt=n("4c35"),At=n("PCNd");n.d(e,"TableModuleNgFactory",function(){return It});var It=l.nb(o,[],function(t){return l.xb([l.yb(512,l.j,l.cb,[[8,[r.a,Pt]],[3,l.j],l.y]),l.yb(4608,J.k,J.j,[l.v,[2,J.r]]),l.yb(1073742336,J.c,J.c,[]),l.yb(1073742336,Tt.m,Tt.m,[[2,Tt.s],[2,Tt.k]]),l.yb(1073742336,Nt,Nt,[]),l.yb(1073742336,qt.c,qt.c,[]),l.yb(1073742336,At.a,At.a,[]),l.yb(1073742336,N,N,[]),l.yb(1073742336,X.a,X.a,[]),l.yb(1073742336,K.h,K.h,[[2,K.b],[2,Q.g]]),l.yb(1073742336,G,G,[]),l.yb(1073742336,tt.b,tt.b,[]),l.yb(1073742336,ct.g,ct.g,[]),l.yb(1073742336,o,o,[]),l.yb(1024,Tt.i,function(){return[[{path:"",component:yt}]]},[])])})}}]);