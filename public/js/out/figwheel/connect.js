// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__31970__delegate = function (x__31954__auto__){
if(cljs.core.truth_(canastcljs.core.mount_root)){
return cljs.core.apply.call(null,canastcljs.core.mount_root,x__31954__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("canastcljs.core/mount-root"),"' is missing"].join(''));
}
};
var G__31970 = function (var_args){
var x__31954__auto__ = null;
if (arguments.length > 0) {
var G__31971__i = 0, G__31971__a = new Array(arguments.length -  0);
while (G__31971__i < G__31971__a.length) {G__31971__a[G__31971__i] = arguments[G__31971__i + 0]; ++G__31971__i;}
  x__31954__auto__ = new cljs.core.IndexedSeq(G__31971__a,0,null);
} 
return G__31970__delegate.call(this,x__31954__auto__);};
G__31970.cljs$lang$maxFixedArity = 0;
G__31970.cljs$lang$applyTo = (function (arglist__31972){
var x__31954__auto__ = cljs.core.seq(arglist__31972);
return G__31970__delegate(x__31954__auto__);
});
G__31970.cljs$core$IFn$_invoke$arity$variadic = G__31970__delegate;
return G__31970;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1530696307296
