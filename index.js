//
const _0x4940b2=_0x5b14;function _0x23e3(){const _0x2d7a99=['rank','list','177782OIMqlZ','161402jybVdh','file','51030AKwRVJ','path','status','nodes','vername','avg','name','path_alt','Unknown','Download\x20error:','length','N/A','3967992hhFIRV','signature','filesize','https://ws75.aptoide.com/api/7/apps/search?query=','422320nwTRCY','error','3LfEhzZ','2765qtNCfV','474pWWleo','downloads','updated','email','stats','data','sha1','No\x20alternate\x20download\x20link','icon','info','694648AUQZbA','get','meta','No\x20rating','datalist','website','developer','package','size'];_0x23e3=function(){return _0x2d7a99;};return _0x23e3();}(function(_0x432a95,_0x186331){const _0x132d54=_0x5b14,_0x264572=_0x432a95();while(!![]){try{const _0x19fd1e=-parseInt(_0x132d54(0x93))/0x1+parseInt(_0x132d54(0x92))/0x2*(parseInt(_0x132d54(0x7b))/0x3)+-parseInt(_0x132d54(0x87))/0x4+-parseInt(_0x132d54(0x95))/0x5+-parseInt(_0x132d54(0x7d))/0x6*(parseInt(_0x132d54(0x7c))/0x7)+-parseInt(_0x132d54(0x79))/0x8+parseInt(_0x132d54(0x75))/0x9;if(_0x19fd1e===_0x186331)break;else _0x264572['push'](_0x264572['shift']());}catch(_0x556380){_0x264572['push'](_0x264572['shift']());}}}(_0x23e3,0x188a2));const axios=require('axios'),searchAPI=_0x4940b2(0x78),downloadAPI='https://ws75.aptoide.com/api/7/app/get?package_name=';async function search(_0x1e6766){const _0xcb43e1=_0x4940b2;try{const _0x193e85=await axios[_0xcb43e1(0x88)](''+searchAPI+_0x1e6766+'&limit=1'),_0x5cbe91=_0x193e85[_0xcb43e1(0x82)];if(_0x5cbe91[_0xcb43e1(0x8b)]?.[_0xcb43e1(0x91)]?.[_0xcb43e1(0x73)]){const _0x331768=_0x5cbe91[_0xcb43e1(0x8b)][_0xcb43e1(0x91)][0x0];return{'name':_0x331768[_0xcb43e1(0x6f)],'package':_0x331768[_0xcb43e1(0x8e)],'icon':_0x331768[_0xcb43e1(0x85)],'size':_0x331768[_0xcb43e1(0x8f)],'developer':_0x331768['developer']?.['name']||'Unknown','store':_0x331768['store']?.[_0xcb43e1(0x6f)]||_0xcb43e1(0x71),'lastUpdated':_0x331768['updated'],'downloads':_0x331768[_0xcb43e1(0x81)]?.[_0xcb43e1(0x7e)]||0x0,'rating':_0x331768['stats']?.['rating']?.[_0xcb43e1(0x6e)]||_0xcb43e1(0x8a)};}return null;}catch(_0x35ce86){console[_0xcb43e1(0x7a)]('Search\x20error:',_0x35ce86);throw _0x35ce86;}}async function download(_0x3079c8){const _0x58ffc8=_0x4940b2;try{const _0xb31367=await axios[_0x58ffc8(0x88)](''+downloadAPI+_0x3079c8),_0x480726=_0xb31367[_0x58ffc8(0x82)];if(_0x480726?.[_0x58ffc8(0x98)]?.['meta']?.[_0x58ffc8(0x86)]?.[_0x58ffc8(0x97)]==='OK'&&_0x480726?.[_0x58ffc8(0x98)]?.[_0x58ffc8(0x89)]?.[_0x58ffc8(0x82)]){const _0x22cc68=_0x480726['nodes'][_0x58ffc8(0x89)][_0x58ffc8(0x82)];return{'name':_0x22cc68[_0x58ffc8(0x6f)],'package':_0x22cc68[_0x58ffc8(0x8e)],'icon':_0x22cc68[_0x58ffc8(0x85)],'size':_0x22cc68['file']?.[_0x58ffc8(0x77)]||_0x58ffc8(0x71),'lastUpdated':_0x22cc68[_0x58ffc8(0x7f)],'developer':{'name':_0x22cc68[_0x58ffc8(0x8d)]?.[_0x58ffc8(0x6f)]||_0x58ffc8(0x71),'website':_0x22cc68[_0x58ffc8(0x8d)]?.[_0x58ffc8(0x8c)]||_0x58ffc8(0x74),'email':_0x22cc68[_0x58ffc8(0x8d)]?.[_0x58ffc8(0x80)]||_0x58ffc8(0x74),'privacyPolicy':_0x22cc68[_0x58ffc8(0x8d)]?.['privacy']||_0x58ffc8(0x74)},'downloadLink':_0x22cc68[_0x58ffc8(0x94)]?.[_0x58ffc8(0x96)]||'No\x20download\x20link\x20available','altDownloadLink':_0x22cc68[_0x58ffc8(0x94)]?.[_0x58ffc8(0x70)]||_0x58ffc8(0x84),'malwareStatus':_0x22cc68[_0x58ffc8(0x94)]?.['malware']?.[_0x58ffc8(0x90)]||_0x58ffc8(0x71),'version':_0x22cc68[_0x58ffc8(0x94)]?.[_0x58ffc8(0x6d)]||'Unknown','signature':_0x22cc68[_0x58ffc8(0x94)]?.[_0x58ffc8(0x76)]?.[_0x58ffc8(0x83)]||'Unknown'};}return null;}catch(_0x323873){console['error'](_0x58ffc8(0x72),_0x323873);throw _0x323873;}}function _0x5b14(_0x53e9ce,_0x5af245){const _0x23e359=_0x23e3();return _0x5b14=function(_0x5b14ed,_0x357eeb){_0x5b14ed=_0x5b14ed-0x6d;let _0x112f5d=_0x23e359[_0x5b14ed];return _0x112f5d;},_0x5b14(_0x53e9ce,_0x5af245);}module['exports']={'search':search,'download':download};
