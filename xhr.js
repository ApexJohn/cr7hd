(function(open){XMLHttpRequest.prototype.open=function(method,url,async,user,pass){
  if(url.indexOf('mlb-ws')!=-1){rewrittenUrl=url.replace("https://mlb-ws-mf.media.mlb.com","https://eplsitea.herokuapp.com/http://key.rjh.fun");}
  else if(url.indexOf('svc.nhl')!=-1){rewrittenUrl=url.replace("https://mf.svc.nhl.com","https://eplsitea.herokuapp.com/http://key.rjh.fun");}
  else if(url.indexOf('url=')!=-1){rewrittenUrl=url.replace("http://rjh217.stream/m3u8.m3u8?url=","");}
  else{rewrittenUrl=url;}
open.call(this,method,rewrittenUrl,async,user,pass);};})(XMLHttpRequest.prototype.open);


var replacekey = ["hls/securekey","op-generatekey/v-2.3","2.3/key/silk/","/key-service/mlbnkid"];
            (function (open) {
                XMLHttpRequest.prototype.open = function (method, url, async, user, pass) {
                    isKeyUrl = false;
                    $.each(replacekey, function (key, value) {
                        if (url.toLowerCase().indexOf(value) >= 0) {
                            isKeyUrl = true;
                        }
                    });
                    if (isKeyUrl) {
                        rewrittenUrl = "https://eplsitea.herokuapp.com/http://cros.mybacklink.website/k2.php?url="+ btoa(url);
                    } else {
                        rewrittenUrl = url;
                    }
                    open.call(this, method, rewrittenUrl, async, user, pass);
                };
            })(XMLHttpRequest.prototype.open);
