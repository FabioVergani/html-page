(function($w){'use strict';
 function nope(){}
 function cut(x,a,b){return Array.prototype.slice.call(x,a,b);};
 function swapClass(x,a,b){const e=x.classList;e.remove(a);e.add(b);return e;}
 function at(x,a,b,c){function i(o){f(o);e.removeEventListener(s,i,k);}const e=x,s=a,f=b,k=c;e.addEventListener(s,i,k);}
 //
 function isReady(evt){
	var e=evt,k=true;
	const d=e.target||(k=false,e),Html=d.documentElement,$id=getById,
	w=(info.support[e.type]=k,k=getByTag,d.defaultView),
	Head=d[e='head']||(d[e]=k(e)[0]),
	Body=d[e='body']||(d[e]=k(e)[0]),
	id$=e=foundById,
	$Main=e[0]=$id('main');
	e=k=null;
	//§

	log('isReady:',log.ts1=perfnow());

	//§
	swapClass(Html,'loading','ready');
 }
 function isLoad(evt){
	var e=evt,k=true;
	const d=e.target||(k=false,e),Html=d.documentElement,

	id$=foundById,
	$Main=id$[0],
	$id=getById;
	e=k=null;
	//§

	e=log;
	e('isLoad:',e.ts2=perfnow());
	e('time:',e.ts2-e.ts1);
	e=e.ts1=e.ts2=null;

	//§
	swapClass(Html,'ready','loaded');
	d.title=dto;
 }
 var i,l;
 const w=$w,
 F=w.Function,
 d=w.document,
 dto=d.title+'',
 info={
	file:{
	 name:(i=(l=w.location).pathname.split('/').pop()).split('.').shift()//,...
	},
	support:{
	 NativeBinding:(i=F.prototype).bind?true:(i.bind=function(x){function o(){const t=this;return e.apply(t instanceof f?t:x,m.concat(s(arguments)));}const s=cut,m=s(arguments,1),f=F(),e=this,i='prototype',p=e[i];if(p){f[i]=p;};o[i]=new f();return o;},false)//,...
	}
 },
 BindCall=l=i.bind.bind(i.call),
 getByTag=l(d.getElementsByTagName,d),
 getById=l(d.getElementById,d),
 foundById=[],
 performance=(i=w.performance)?i:(i=nope,i={now:i}),
 perfnow=l(i.now,i),
 console=(i=w.console)?(l=l(i.log,i),i):(l=nope,{log:l,dir:l,info:l,warn:l}),
 log=l;
 d.title='Loading..';
 d[i='defaultView']||(d[i]=w);
 swapClass(d[i='documentElement']||(d[i]=getByTag('html')[0]),'js-no','js').add('loading');
 i=isReady,l=isLoad;
 if(d.readyState!=='complete'){at(w,'DOMContentLoaded',i);at(w,'load',l);}else{i(d);l(d);};
})(window);
//END.