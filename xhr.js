(function(open){XMLHttpRequest.prototype.open=function(method,url,async,user,pass){if(url.indexOf('mlb-ws')!=-1){rewrittenUrl=url.replace("https://mlb-ws-mf.media.mlb.com","http://key.rjh.fun/");}else if(url.indexOf('svc.nhl')!=-1){rewrittenUrl=url.replace("https://mf.svc.nhl.com","http://key.rjh.fun/");}else if(url.indexOf('url=')!=-1){rewrittenUrl=url.replace("http://key.rjh.fun/ha.m3u8?url=","");}else{rewrittenUrl=url;}
open.call(this,method,rewrittenUrl,async,user,pass);};})(XMLHttpRequest.prototype.open);
