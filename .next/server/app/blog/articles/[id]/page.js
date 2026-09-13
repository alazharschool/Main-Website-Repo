(()=>{var a={};a.id=207,a.ids=[207],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},16235:(a,b,c)=>{"use strict";c.r(b),c.d(b,{GlobalError:()=>B.default,__next_app__:()=>H,handler:()=>J,pages:()=>G,routeModule:()=>I,tree:()=>F});var d=c(65239),e=c(48088),f=c(47220),g=c(81289),h=c(26191),i=c(14823),j=c(71998),k=c(92603),l=c(54649),m=c(32781),n=c(82602),o=c(61268),p=c(4853),q=c(261),r=c(5052),s=c(9977),t=c(26713),u=c(43365),v=c(71454),w=c(67778),x=c(46143),y=c(39105),z=c(38171),A=c(86439),B=c(46076),C=c(30893),D=c(52836),E={};for(let a in C)0>["default","tree","pages","GlobalError","__next_app__","routeModule","handler"].indexOf(a)&&(E[a]=()=>C[a]);c.d(b,E);let F={children:["",{children:["blog",{children:["articles",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,83072)),"C:\\Users\\11\\CascadeProjects\\Main-Website-Repo\\app\\blog\\articles\\[id]\\page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(c.bind(c,58014)),"C:\\Users\\11\\CascadeProjects\\Main-Website-Repo\\app\\layout.tsx"],error:[()=>Promise.resolve().then(c.bind(c,52608)),"C:\\Users\\11\\CascadeProjects\\Main-Website-Repo\\app\\error.tsx"],"global-error":[()=>Promise.resolve().then(c.bind(c,46076)),"C:\\Users\\11\\CascadeProjects\\Main-Website-Repo\\app\\global-error.tsx"],"not-found":[()=>Promise.resolve().then(c.bind(c,82366)),"C:\\Users\\11\\CascadeProjects\\Main-Website-Repo\\app\\not-found.tsx"],"global-error":[()=>Promise.resolve().then(c.bind(c,46076)),"C:\\Users\\11\\CascadeProjects\\Main-Website-Repo\\app\\global-error.tsx"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,29868,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,79615,23)),"next/dist/client/components/builtin/unauthorized.js"]}]}.children,G=["C:\\Users\\11\\CascadeProjects\\Main-Website-Repo\\app\\blog\\articles\\[id]\\page.tsx"],H={require:c,loadChunk:()=>Promise.resolve()},I=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/blog/articles/[id]/page",pathname:"/blog/articles/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:F},distDir:".next",projectDir:""});async function J(a,b,c){var d;let E="/blog/articles/[id]/page";"/index"===E&&(E="/");let K="false",L=(0,h.getRequestMeta)(a,"postponed"),M=(0,h.getRequestMeta)(a,"minimalMode"),N=await I.prepare(a,b,{srcPage:E,multiZoneDraftMode:K});if(!N)return b.statusCode=400,b.end("Bad Request"),null==c.waitUntil||c.waitUntil.call(c,Promise.resolve()),null;let{buildId:O,query:P,params:Q,parsedUrl:R,pageIsDynamic:S,buildManifest:T,nextFontManifest:U,reactLoadableManifest:V,serverActionsManifest:W,clientReferenceManifest:X,subresourceIntegrityManifest:Y,prerenderManifest:Z,isDraftMode:$,resolvedPathname:_,revalidateOnlyGenerated:aa,routerServerContext:ab,nextConfig:ac}=N,ad=R.pathname||"/",ae=(0,q.normalizeAppPath)(E),{isOnDemandRevalidate:af}=N,ag=Z.dynamicRoutes[ae],ah=Z.routes[_],ai=!!(ag||ah||Z.routes[ae]),aj=a.headers["user-agent"]||"",ak=(0,t.getBotType)(aj),al=(0,o.isHtmlBotRequest)(a),am=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??!!a.headers[s.NEXT_ROUTER_PREFETCH_HEADER],an=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[s.RSC_HEADER],ao=(0,r.getIsPossibleServerAction)(a),ap=(0,l.checkIsAppPPREnabled)(ac.experimental.ppr)&&(null==(d=Z.routes[ae]??Z.dynamicRoutes[ae])?void 0:d.renderingMode)==="PARTIALLY_STATIC",aq=!1,ar=!1,as=ap?L:void 0,at=ap&&an&&!am,au=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),av=!aj||(0,o.shouldServeStreamingMetadata)(aj,ac.htmlLimitedBots);al&&ap&&(ai=!1,av=!1);let aw=!0===I.isDev||!ai||"string"==typeof L||at,ax=al&&ap,ay=null;$||!ai||aw||ao||as||at||(ay=_);let az=ay;!az&&I.isDev&&(az=_);let aA={...C,tree:F,pages:G,GlobalError:B.default,handler:J,routeModule:I,__next_app__:H};W&&X&&(0,n.setReferenceManifestsSingleton)({page:E,clientReferenceManifest:X,serverActionsManifest:W,serverModuleMap:(0,p.createServerModuleMap)({serverActionsManifest:W})});let aB=a.method||"GET",aC=(0,g.getTracer)(),aD=aC.getActiveScopeSpan();try{let d=async(c,d)=>{let e=new k.NodeNextRequest(a),f=new k.NodeNextResponse(b);return I.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=aC.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${aB} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${aB} ${a.url}`)})},f=async({span:e,postponed:f,fallbackRouteParams:g})=>{let i={query:P,params:Q,page:ae,sharedContext:{buildId:O},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aA,Component:(0,j.T)(aA),params:Q,routeModule:I,page:E,postponed:f,shouldWaitOnAllReady:ax,serveStreamingMetadata:av,supportsDynamicResponse:"string"==typeof f||aw,buildManifest:T,nextFontManifest:U,reactLoadableManifest:V,subresourceIntegrityManifest:Y,serverActionsManifest:W,clientReferenceManifest:X,setIsrStatus:null==ab?void 0:ab.setIsrStatus,dir:I.projectDir,isDraftMode:$,isRevalidate:ai&&!f&&!at,botType:ak,isOnDemandRevalidate:af,isPossibleServerAction:ao,assetPrefix:ac.assetPrefix,nextConfigOutput:ac.output,crossOrigin:ac.crossOrigin,trailingSlash:ac.trailingSlash,previewProps:Z.preview,deploymentId:ac.deploymentId,enableTainting:ac.experimental.taint,htmlLimitedBots:ac.htmlLimitedBots,devtoolSegmentExplorer:ac.experimental.devtoolSegmentExplorer,reactMaxHeadersLength:ac.reactMaxHeadersLength,multiZoneDraftMode:K,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:ac.experimental.cacheLife,basePath:ac.basePath,serverActions:ac.experimental.serverActions,...aq?{nextExport:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isRevalidate:!0,isDebugDynamicAccesses:aq}:{},experimental:{isRoutePPREnabled:ap,expireTime:ac.expireTime,staleTimes:ac.experimental.staleTimes,dynamicIO:!!ac.experimental.dynamicIO,clientSegmentCache:!!ac.experimental.clientSegmentCache,dynamicOnHover:!!ac.experimental.dynamicOnHover,inlineCss:!!ac.experimental.inlineCss,authInterrupts:!!ac.experimental.authInterrupts,clientTraceMetadata:ac.experimental.clientTraceMetadata||[]},waitUntil:c.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d)=>I.onRequestError(a,b,d,ab),err:(0,h.getRequestMeta)(a,"invokeError"),dev:I.isDev}},k=await d(e,i),{metadata:l}=k,{cacheControl:m,headers:n={},fetchTags:o}=l;if(o&&(n[x.NEXT_CACHE_TAGS_HEADER]=o),a.fetchMetrics=l.fetchMetrics,ai&&(null==m?void 0:m.revalidate)===0&&!I.isDev&&!ap){let a=l.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${_}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:u.CachedRouteKind.APP_PAGE,html:k,headers:n,rscData:l.flightData,postponed:l.postponed,status:l.statusCode,segmentData:l.segmentData},cacheControl:m}},l=async({hasResolved:d,previousCacheEntry:g,isRevalidating:i,span:j})=>{let k,l=!1===I.isDev,n=d||b.writableEnded;if(af&&aa&&!g&&!M)return(null==ab?void 0:ab.render404)?await ab.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ag&&(k=(0,v.parseFallbackField)(ag.fallback)),k===v.FallbackMode.PRERENDER&&(0,t.isBot)(aj)&&(k=v.FallbackMode.BLOCKING_STATIC_RENDER),(null==g?void 0:g.isStale)===-1&&(af=!0),af&&(k!==v.FallbackMode.NOT_FOUND||g)&&(k=v.FallbackMode.BLOCKING_STATIC_RENDER),!M&&k!==v.FallbackMode.BLOCKING_STATIC_RENDER&&az&&!n&&!$&&S&&(l||!ah)){let b;if((l||ag)&&k===v.FallbackMode.NOT_FOUND)throw new A.NoFallbackError;if(ap&&!an){if(b=await I.handleResponse({cacheKey:l?ae:null,req:a,nextConfig:ac,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:Z,isRoutePPREnabled:ap,responseGenerator:async()=>f({span:j,postponed:void 0,fallbackRouteParams:l||ar?(0,m.u)(ae):null}),waitUntil:c.waitUntil}),null===b)return null;if(b)return delete b.cacheControl,b}}let o=af||i||!as?void 0:as;if(aq&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:u.CachedRouteKind.PAGES,html:w.default.fromStatic(""),pageData:{},headers:void 0,status:void 0}};let p=S&&ap&&((0,h.getRequestMeta)(a,"renderFallbackShell")||ar)?(0,m.u)(ad):null;return f({span:j,postponed:o,fallbackRouteParams:p})},n=async d=>{var g,i,j,k,m;let n,o=await I.handleResponse({cacheKey:ay,responseGenerator:a=>l({span:d,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:af,isRoutePPREnabled:ap,req:a,nextConfig:ac,prerenderManifest:Z,waitUntil:c.waitUntil});if($&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),I.isDev&&b.setHeader("Cache-Control","no-store, must-revalidate"),!o){if(ay)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(g=o.value)?void 0:g.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(j=o.value)?void 0:j.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let p="string"==typeof o.value.postponed;ai&&!at&&(!p||am)&&(M||b.setHeader("x-nextjs-cache",af?"REVALIDATED":o.isMiss?"MISS":o.isStale?"STALE":"HIT"),b.setHeader(s.NEXT_IS_PRERENDER_HEADER,"1"));let{value:q}=o;if(as)n={revalidate:0,expire:void 0};else if(M&&an&&!am&&ap)n={revalidate:0,expire:void 0};else if(!I.isDev)if($)n={revalidate:0,expire:void 0};else if(ai){if(o.cacheControl)if("number"==typeof o.cacheControl.revalidate){if(o.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${o.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});n={revalidate:o.cacheControl.revalidate,expire:(null==(k=o.cacheControl)?void 0:k.expire)??ac.expireTime}}else n={revalidate:x.CACHE_ONE_YEAR,expire:void 0}}else b.getHeader("Cache-Control")||(n={revalidate:0,expire:void 0});if(o.cacheControl=n,"string"==typeof au&&(null==q?void 0:q.kind)===u.CachedRouteKind.APP_PAGE&&q.segmentData){b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(m=q.headers)?void 0:m[x.NEXT_CACHE_TAGS_HEADER];M&&ai&&c&&"string"==typeof c&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,c);let d=q.segmentData.get(au);return void 0!==d?(0,z.sendRenderResult)({req:a,res:b,type:"rsc",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:w.default.fromStatic(d),cacheControl:o.cacheControl}):(b.statusCode=204,(0,z.sendRenderResult)({req:a,res:b,type:"rsc",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:w.default.fromStatic(""),cacheControl:o.cacheControl}))}let r=(0,h.getRequestMeta)(a,"onCacheEntry");if(r&&await r({...o,value:{...o.value,kind:"PAGE"}},{url:(0,h.getRequestMeta)(a,"initURL")}))return null;if(p&&as)throw Object.defineProperty(Error("Invariant: postponed state should not be present on a resume request"),"__NEXT_ERROR_CODE",{value:"E396",enumerable:!1,configurable:!0});if(q.headers){let a={...q.headers};for(let[c,d]of(M&&ai||delete a[x.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let t=null==(i=q.headers)?void 0:i[x.NEXT_CACHE_TAGS_HEADER];if(M&&ai&&t&&"string"==typeof t&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,t),!q.status||an&&ap||(b.statusCode=q.status),!M&&q.status&&D.RedirectStatusCode[q.status]&&an&&(b.statusCode=200),p&&b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"1"),an&&!$){if(void 0===q.rscData){if(q.postponed)throw Object.defineProperty(Error("Invariant: Expected postponed to be undefined"),"__NEXT_ERROR_CODE",{value:"E372",enumerable:!1,configurable:!0});return(0,z.sendRenderResult)({req:a,res:b,type:"rsc",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:q.html,cacheControl:at?{revalidate:0,expire:void 0}:o.cacheControl})}return(0,z.sendRenderResult)({req:a,res:b,type:"rsc",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:w.default.fromStatic(q.rscData),cacheControl:o.cacheControl})}let v=q.html;if(!p||M)return(0,z.sendRenderResult)({req:a,res:b,type:"html",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:v,cacheControl:o.cacheControl});if(aq)return v.chain(new ReadableStream({start(a){a.enqueue(y.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,z.sendRenderResult)({req:a,res:b,type:"html",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}});let A=new TransformStream;return v.chain(A.readable),f({span:d,postponed:q.postponed,fallbackRouteParams:null}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(A.writable)}).catch(a=>{A.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,z.sendRenderResult)({req:a,res:b,type:"html",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}})};if(!aD)return await aC.withPropagatedContext(a.headers,()=>aC.trace(i.BaseServerSpan.handleRequest,{spanName:`${aB} ${a.url}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aB,"http.target":a.url}},n));await n(aD)}catch(b){throw aD||await I.onRequestError(a,b,{routerKind:"App Router",routePath:E,routeType:"render",revalidateReason:(0,f.c)({isRevalidate:ai,isOnDemandRevalidate:af})},ab),b}}},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},28354:a=>{"use strict";a.exports=require("util")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:a=>{"use strict";a.exports=require("path")},40228:(a,b,c)=>{"use strict";c.d(b,{A:()=>d});let d=(0,c(62688).A)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]])},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},44635:(a,b,c)=>{Promise.resolve().then(c.bind(c,83072))},48730:(a,b,c)=>{"use strict";c.d(b,{A:()=>d});let d=(0,c(62688).A)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]])},58869:(a,b,c)=>{"use strict";c.d(b,{A:()=>d});let d=(0,c(62688).A)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]])},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},77664:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>q});var d=c(60687),e=c(76180),f=c.n(e);let g=(0,c(62688).A)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);var h=c(40228),i=c(48730),j=c(58869),k=c(30474),l=c(81403),m=c(14895),n=c(85814),o=c.n(n);let p={"learn-quran-online":{id:"learn-quran-online",title:"The Importance of Learning and Memorizing the Holy Quran Online",excerpt:"In today's fast-paced, connected world, learning the Holy Quran online has become an essential choice for Muslims everywhere. Thanks to modern technology and trusted platforms like Al-Azhar School, anyone can easily learn to recite and memorize the Quran with high quality, guided by certified teachers from Al-Azhar University.",coverImage:"/blog 2.jpg",author:"Al-Azhar Scholars",publishDate:"2024-01-15",readTime:"8 min read",category:"Quran Studies",tags:["learn Quran online","memorize Quran","Al-Azhar teachers","Tajweed"],featured:!0,content:`
      <p class="mb-6 text-lg leading-relaxed">
        In today's fast-paced, connected world, learning the Holy Quran online has become an essential choice for Muslims everywhere. 
        Thanks to modern technology and trusted platforms like Al-Azhar School, anyone can easily learn to recite and memorize the Quran 
        with high quality, guided by certified teachers from Al-Azhar University.
      </p>

      <h2 class="text-2xl font-bold text-[#5a2600] mb-4 mt-8">Benefits of Learning Quran Online</h2>
      <p class="mb-4 text-base leading-relaxed">
        Online Quran learning offers numerous advantages that make it an ideal choice for Muslims of all ages:
      </p>
      <ul class="list-disc list-inside mb-6 space-y-2 text-base">
        <li>Learn Quran online with flexibility in time and place</li>
        <li>Choose specialized male or female teachers in Tajweed and Tafsir</li>
        <li>Direct connection with certified Al-Azhar teachers with deep knowledge and experience</li>
        <li>Access to high-quality learning materials and resources</li>
        <li>Recorded sessions for review and practice</li>
      </ul>

      <h2 class="text-2xl font-bold text-[#5a2600] mb-4 mt-8">Why Choose Al-Azhar School?</h2>
      <div class="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-2xl mb-6">
        <ul class="space-y-3 text-base">
          <li class="flex items-center">
            <span class="text-green-600 mr-3">✅</span>
            Certified teachers and graduates from Al-Azhar University
          </li>
          <li class="flex items-center">
            <span class="text-green-600 mr-3">✅</span>
            Free trial lessons to explore before you subscribe
          </li>
          <li class="flex items-center">
            <span class="text-green-600 mr-3">✅</span>
            Official completion certificates
          </li>
          <li class="flex items-center">
            <span class="text-green-600 mr-3">✅</span>
            Affordable prices and flexible payment plans
          </li>
        </ul>
      </div>

      <p class="text-lg font-semibold text-[#5a2600] mb-8 text-center">
        Learning the Quran online with Al-Azhar School combines quality, convenience, and the rich heritage of Al-Azhar teachers 
        — all tailored to your schedule and lifestyle.
      </p>
    `},"islamic-education-benefits":{id:"islamic-education-benefits",title:"Benefits of Islamic Education for Children in the Digital Age",excerpt:"Discover how modern Islamic education combines traditional values with contemporary learning methods to provide children with a balanced and meaningful educational experience.",coverImage:"/plog girl.png",author:"Islamic Education Team",publishDate:"2025-08-15",readTime:"6 min read",category:"Education",tags:["Islamic education","children","digital learning","character building","online Quran classes","Al-Azhar teachers"],featured:!1,content:`
      <p class="mb-6 text-lg leading-relaxed">
        In today's rapidly evolving digital landscape, providing children with a strong Islamic education has never been more essential. 
        Combining the timeless teachings of the Qur'an and Sunnah with modern online learning methods, children gain a balanced and 
        meaningful educational experience that supports them in every stage of life.
      </p>

      <h1 style="font-size:30px !important;margin-top:1cm !important;margin-bottom:1cm !important;">Benefits of Islamic Education for Children in the Digital Age</h1>
      <p class="mb-6 text-base leading-relaxed">
        Islamic education isn't limited to memorizing texts; it focuses on developing character traits such as honesty, compassion, 
        patience, responsibility, and respect for others. These values help shape a child's moral compass, guiding them in today's 
        world and beyond.
      </p>

      <h2 class="font-bold mb-4 mt-8" style="font-family: 'Noto Serif'; font-weight: 900; font-size: 26px !important; color: white; text-shadow: 3px 3px 0px #8B4513, 4px 4px 12px rgba(0,0,0,0.9), 6px 6px 16px rgba(0,0,0,0.7); line-height: 1.4;">
      📱 Islamic Education in the Digital Age
      </h2>
      <p class="mb-6 text-base leading-relaxed">
        Modern online Islamic education platforms like Al-Azhar School make learning accessible and engaging for children everywhere. 
        Using interactive tools, live classes, and visual resources, kids can learn Tajweed, Quran memorization, and Islamic studies 
        from certified teachers — all from the comfort of home.
      </p>

      <h2 class="font-bold mb-4 mt-8" style="font-family: 'Noto Serif'; font-weight: 900; font-size: 26px !important; color: white; text-shadow: 3px 3px 0px #8B4513, 4px 4px 12px rgba(0,0,0,0.9), 6px 6px 16px rgba(0,0,0,0.7); line-height: 1.4;">
      🌟 Character Building Beyond Academics
      </h2>
      <p class="mb-6 text-base leading-relaxed">
        By integrating Islamic teachings with digital tools, children not only learn to recite and memorize the Quran but also 
        understand its meaning, reflect on it, and practice it in daily life. This balanced education nurtures spiritual growth 
        and intellectual development at the same time.
      </p>

      <div class="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl p-8 text-center mb-8" style="border: 3px solid #8B4513; background-image: url('/islamic.svg'), linear-gradient(to right, #f59e42, #ff9800); background-size: cover, cover; background-position: center, center; background-repeat: no-repeat, no-repeat;">
        <h3 class="font-bold mb-4" style={{ 
          fontFamily: "Noto Serif", 
          fontWeight: 900, 
          fontSize: "32px !important",
          color: "white",
          textShadow: "3px 3px 0px #8B4513, 4px 4px 12px rgba(0,0,0,0.9), 6px 6px 16px rgba(0,0,0,0.7)",
          lineHeight: "1.4"
        }}>
          🤲 Ready to Begin Your Child's Islamic Learning Journey?
        </h3>
        <p class="text-lg mb-6 opacity-90" style={{ fontFamily: "Noto Serif", fontWeight: 600 }}>
          Join thousands of families choosing trusted Al-Azhar certified teachers to guide their children on a meaningful path of faith and knowledge.
        </p>
        <div class="rounded-xl p-4 mb-6" style="background-color: #8B4513; border: 3px solid #000;">
          <ul class="space-y-2 text-left">
            <li class="flex items-center">
              <span class="text-green-400 mr-3">✅</span>
              Start with a free trial lesson
            </li>
            <li class="flex items-center">
              <span class="text-green-400 mr-3">✅</span>
              Learn anywhere, anytime
            </li>
            <li class="flex items-center">
              <span class="text-green-400 mr-3">✅</span>
              Flexible plans tailored for children
            </li>
          </ul>
        </div>
      </div>

      <p class="text-lg font-semibold text-[#5a2600] mb-8 text-center">
        Islamic education in the digital age provides children with the tools they need to succeed in both this world 
        and the hereafter, creating well-rounded individuals who are prepared for life's challenges.
      </p>
    `},"tajweed-mastery":{id:"tajweed-mastery",title:"Mastering Tajweed: The Art of Beautiful Quran Recitation",excerpt:"Learn the essential rules of Tajweed and how proper pronunciation enhances your connection with the Holy Quran. Our comprehensive guide covers everything from basic rules to advanced techniques.",coverImage:"/tajweed.jpg",author:"Quran Teachers",publishDate:"2024-01-08",readTime:"10 min read",category:"Quran Studies",tags:["Tajweed","Quran recitation","pronunciation","Islamic studies"],featured:!1,content:`
      <p class="mb-6 text-lg leading-relaxed">
        Tajweed is the science of reciting the Quran with proper pronunciation, articulation, and rhythm. It is an essential 
        aspect of Islamic education that ensures the Quran is recited as it was revealed to Prophet Muhammad (peace be upon him).
      </p>

      <h2 class="text-2xl font-bold text-[#5a2600] mb-4 mt-8">Understanding the Importance of Tajweed</h2>
      <p class="mb-6 text-base leading-relaxed">
        Tajweed is not merely about beautiful recitation; it is about preserving the authenticity of Allah's words. 
        Proper pronunciation ensures that the meaning of the Quran remains intact.
      </p>

      <h2 class="text-2xl font-bold text-[#5a2600] mb-4 mt-8">Basic Rules of Tajweed</h2>
      <div class="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-2xl mb-6">
        <h3 class="text-xl font-bold text-[#5a2600] mb-4">Essential Tajweed Rules:</h3>
        <ul class="space-y-3 text-base">
          <li><strong>Noon and Meem Mushaddad:</strong> These letters must be pronounced with complete nasalization</li>
          <li><strong>Qalqalah:</strong> A bouncing sound produced when certain letters are pronounced</li>
          <li><strong>Idgham:</strong> Merging certain letters when they meet</li>
          <li><strong>Ikhfa:</strong> Hiding certain letters when they meet</li>
        </ul>
      </div>

      <p class="text-lg font-semibold text-[#5a2600] mb-8 text-center">
        Mastering Tajweed is a journey that requires patience, practice, and dedication.
      </p>
    `},"ramadan-preparation":{id:"ramadan-preparation",title:"Preparing for Ramadan: A Complete Guide for Families",excerpt:"Get ready for the blessed month of Ramadan with practical tips for families.",coverImage:"/ramadan.jpg",author:"Islamic Scholars",publishDate:"2024-01-05",readTime:"12 min read",category:"Islamic Life",tags:["Ramadan","family","spiritual preparation","Islamic traditions"],content:`
      <img src="/ramadan.jpg" alt="Preparing for Ramadan" style="width:100%;max-width:600px;display:block;margin:0 auto 2rem auto;border-radius:1.5rem;box-shadow:0 8px 32px #000a;" />
      <p class="mb-6 text-lg leading-relaxed">
        Ramadan is a blessed month that brings families together in worship, reflection, and spiritual growth. 
        Proper preparation ensures that families can make the most of this sacred time.
      </p>

      <h2 class="text-2xl font-bold text-[#5a2600] mb-4 mt-8">Spiritual Preparation</h2>
      <p class="mb-6 text-base leading-relaxed">
        Begin preparing spiritually by increasing your daily prayers, reading more Quran, and making sincere 
        dua for guidance. This helps create the right mindset for entering Ramadan with full devotion.
      </p>

      <h2 class="text-2xl font-bold text-[#5a2600] mb-4 mt-8">Family Activities for Ramadan</h2>
      <div class="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-2xl mb-6">
        <h3 class="text-xl font-bold text-[#5a2600] mb-4">Engaging Activities:</h3>
        <ul class="space-y-3 text-base">
          <li>Family Quran reading sessions</li>
          <li>Daily Islamic stories for children</li>
          <li>Charity and community service projects</li>
          <li>Ramadan crafts and decorations</li>
          <li>Family iftar gatherings</li>
        </ul>
      </div>

      <p class="text-lg font-semibold text-[#5a2600] mb-8 text-center">
        Ramadan is a time for families to grow together in faith, create lasting memories, and strengthen 
        their connection to Allah and each other.
      </p>
    `},"online-learning-tips":{id:"online-learning-tips",title:"Maximizing Your Online Islamic Learning Experience",excerpt:"Discover proven strategies to make the most of your online Islamic education journey.",coverImage:"/plog5.jpg",author:"Education Experts",publishDate:"2024-01-03",readTime:"7 min read",category:"Education",tags:["online learning","study tips","motivation","Islamic education"],content:`
      <p class="mb-6 text-lg leading-relaxed">
        Online Islamic education offers unprecedented opportunities for learning, but success requires the right 
        approach and mindset. Here are proven strategies to maximize your learning experience.
      </p>

      <h2 class="text-2xl font-bold text-[#5a2600] mb-4 mt-8">Creating the Perfect Study Environment</h2>
      <p class="mb-6 text-base leading-relaxed">
        Designate a quiet, comfortable space for your online learning sessions. Ensure good lighting, 
        minimal distractions, and all necessary materials within reach.
      </p>

      <h2 class="text-2xl font-bold text-[#5a2600] mb-4 mt-8">Active Participation Strategies</h2>
      <div class="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-2xl mb-6">
        <h3 class="text-xl font-bold text-[#5a2600] mb-4">Engagement Techniques:</h3>
        <ul class="space-y-3 text-base">
          <li>Ask questions during live sessions</li>
          <li>Participate in discussion forums</li>
          <li>Take detailed notes during lessons</li>
          <li>Review and revise regularly</li>
          <li>Practice with fellow students</li>
        </ul>
      </div>

      <p class="text-lg font-semibold text-[#5a2600] mb-8 text-center">
        Success in online Islamic education comes from dedication, proper planning, and active engagement.
      </p>
    `},"islamic-values-children":{id:"islamic-values-children",title:"Instilling Islamic Values in Children: A Parent's Guide",excerpt:"Learn effective methods for teaching Islamic values to children in an engaging and meaningful way.",coverImage:"/blog 44.jpg",author:"Parenting Experts",publishDate:"2024-01-01",readTime:"9 min read",category:"Parenting",tags:["Islamic values","parenting","children","spiritual development"],content:`
      <img src="/blog 44.jpg" alt="Instilling Islamic Values in Children" style="width:100%;max-width:600px;display:block;margin:0 auto 2rem auto;border-radius:1.5rem;box-shadow:0 8px 32px #000a;" />
      <p class="mb-6 text-lg leading-relaxed">
        Teaching Islamic values to children is one of the most important responsibilities of Muslim parents. 
        It requires patience, creativity, and a deep understanding of both Islamic principles and child development.
      </p>

      <h2 class="text-2xl font-bold text-[#5a2600] mb-4 mt-8">Leading by Example</h2>
      <p class="mb-6 text-base leading-relaxed">
        Children learn more from what they see than what they hear. Parents who embody Islamic values in their 
        daily lives provide the most powerful teaching tool.
      </p>

      <h2 class="text-2xl font-bold text-[#5a2600] mb-4 mt-8">Age-Appropriate Teaching Methods</h2>
      <div class="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-2xl mb-6">
        <h3 class="text-xl font-bold text-[#5a2600] mb-4">Teaching Strategies by Age:</h3>
        <ul class="space-y-3 text-base">
          <li><strong>Ages 2-5:</strong> Use stories, songs, and simple prayers</li>
          <li><strong>Ages 6-10:</strong> Introduce basic Islamic concepts and daily prayers</li>
          <li><strong>Ages 11-15:</strong> Discuss deeper meanings and encourage questions</li>
          <li><strong>Ages 16+:</strong> Engage in mature discussions about faith and life</li>
        </ul>
      </div>

      <p class="text-lg font-semibold text-[#5a2600] mb-8 text-center">
        Teaching Islamic values to children is a journey that requires patience, consistency, and love.
      </p>
    `},"best-quran-platforms-kids":{id:"best-quran-platforms-kids",title:"Best Online Quran Learning Platforms for Kids",excerpt:"Discover the top trusted and engaging online Quran classes for children, with certified teachers and interactive tools.",coverImage:"/platform.jpg",author:"Al-Azhar School Team",publishDate:"2024-06-01",readTime:"7 min read",category:"Education",tags:["learn Quran online for kids","Quran classes for children","Quran for beginners kids","Al-Azhar teachers","online Quran"],content:`
      <img src="/platform.jpg" alt="Best Online Quran Learning Platforms for Kids" style="width:100%;max-width:600px;display:block;margin:0 auto 2rem auto;border-radius:1.5rem;box-shadow:0 8px 32px #000a;" />
      <h1 style="font-size:34px !important; margin-top:1cm !important; margin-bottom:1cm !important;">Best Online Quran Learning Platforms for Kids</h1>
      <p style="margin-bottom:1cm;">In today’s digital age, many Muslim parents are searching for the best ways to <strong>learn Quran online for kids</strong>. Finding trustworthy and engaging <strong>Quran classes for children</strong> can make a huge difference in building a child’s love for the Holy Quran.</p>
      <h2 style="font-size:34px !important; margin-bottom:1cm !important; margin-top:1cm !important;">Why Choose Online Quran Classes for Kids?</h2>
      <p style="margin-bottom:1cm;">Learning the Quran online offers flexibility, safety, and access to highly qualified teachers. Whether your child is a beginner or already memorizing, there are options tailored for every level.</p>
      <h3 style="font-size:30px; margin-top:1cm !important;">✅ Flexibility and Convenience</h3>
      <ul>
        <li>Study from home at any time.</li>
        <li>Fit classes around school and activities.</li>
        <li>Especially helpful for families living abroad.</li>
      </ul>
      <h3 style="font-size:30px; margin-top:1cm !important;">✅ Certified Quran Teachers</h3>
      <p>Top platforms offer teachers certified from respected institutions like <strong>Al-Azhar University</strong>, ensuring authentic and proper teaching.</p>
      <h3 style="font-size:30px; margin-top:1cm !important;">✅ Interactive Tools</h3>
      <ul>
        <li>Virtual whiteboards.</li>
        <li>Gamified lessons to keep children engaged.</li>
        <li>Progress tracking for parents.</li>
      </ul>
      <hr/>
      <h2 style="font-size:34px !important; margin-bottom:1cm !important; margin-top:1cm !important;">Top Recommended Online Quran Learning Platforms</h2>
      <p style="margin-bottom:1cm;">Here are some of the best <strong>Quran classes for children</strong> that have excellent reviews and trusted credentials:</p>
      <h3 style="font-size:30px; margin-top:1cm !important;">1. Alazhar School</h3>
      <ul>
        <li>Certified Arabic native teachers from Al-Azhar.</li>
        <li>Specialized <strong>Quran for beginners kids</strong> programs.</li>
        <li>Flexible scheduling and affordable pricing.</li>
      </ul>
      <h3 style="font-size:30px; margin-top:1cm !important;">2. Quran Explorer Kids</h3>
      <ul>
        <li>Fun and interactive platform.</li>
        <li>Lessons tailored for young learners.</li>
        <li>Games and quizzes included.</li>
      </ul>
      <h3 style="font-size:30px; margin-top:1cm !important;">3. Studio Arabiya Kids</h3>
      <ul>
        <li>Focus on Quran memorization and Tajweed.</li>
        <li>Female teachers available for girls.</li>
        <li>Parent dashboard to track progress.</li>
      </ul>
      <blockquote><strong>Tip:</strong> Always ask for a <strong>free trial class</strong> before choosing a platform.</blockquote>
      <hr/>
      <h2 style="font-size:34px !important; margin-bottom:1cm !important; margin-top:1cm !important;">How to Help Your Child Learn Quran Online Effectively</h2>
      <p style="margin-bottom:1cm;">Here are some simple tips to support your child:</p>
      <ul>
        <li>Create a quiet study space at home.</li>
        <li>Join the trial class to see if the teacher suits your child.</li>
        <li>Encourage daily practice, even 10 minutes a day.</li>
        <li>Set goals (e.g., memorize a short surah each month).</li>
      </ul>
      <hr/>
      <h2 style="font-size:34px !important; margin-bottom:1cm !important; margin-top:1cm !important;">Conclusion</h2>
      <p style="margin-bottom:1cm;">Choosing the right platform to <strong>learn Quran online for kids</strong> helps build a lifelong connection with the Quran. Look for trusted institutions, qualified teachers, and interactive methods that make learning fun.</p>
      <blockquote>Start your child’s Quran journey today with our <strong>certified Al-Azhar teachers</strong>.</blockquote>
      <hr/>
      <h2 style="font-size:34px !important; margin-top:1cm !important; margin-bottom:1cm !important;">📌 Keywords used naturally:</h2>
      <ul style="margin-bottom:1cm;">
        <li>learn Quran online for kids</li>
        <li>Quran classes for children</li>
        <li>Quran for beginners kids</li>
      </ul>
    `},"learn-quran-tajweed-online":{id:"learn-quran-tajweed-online",title:"Learn Quran Tajweed Online With Qualified Native Arabic Teachers",excerpt:"Master the Art of Quran Recitation with Tajweed. Learn from certified native Arabic-speaking teachers—anytime, anywhere. Perfect your pronunciation, get live correction, and enjoy flexible scheduling with modern online tools.",coverImage:"/tajweed.png",author:"Al-Azhar School",publishDate:"2025-08-10",readTime:"8 min read",category:"Quran Studies",tags:["Learn Quran online","Tajweed for non-Arabic speakers","Arabic Quran teacher","Quran teacher online","Online Islamic education","Virtual Quran classes","Certified Tajweed tutor","Read Quran for beginners","Quran recitation course","Zoom Quran classes","Native Arabic tutor","Online Tajweed lessons"],featured:!1,content:`
      <h1 style="font-size:30px !important;margin-top:1cm !important;margin-bottom:1cm !important;">Learn Quran Tajweed Online With Qualified Native Arabic Teachers</h1>
      <p class="mb-6 text-lg leading-relaxed">
        <strong>📖 Master the Art of Quran Recitation with Tajweed</strong><br/>
        Do you want to recite the Quran the way it was revealed?<br/>
        Now you can learn Tajweed online from native Arabic-speaking teachers—anytime, anywhere.
      </p>
      <ul class="mb-6 text-base leading-relaxed">
        <li><strong>🗣️ Perfect Pronunciation:</strong> Learn the correct sounds and articulation (makhārij) directly from native speakers.</li>
        <li><strong>🎧 Live Correction:</strong> Get immediate feedback on your recitation to improve quickly.</li>
        <li><strong>🎓 Qualified & Experienced Tutors:</strong> Certified teachers with deep knowledge of Tajweed and teaching non-Arabic speakers.</li>
        <li><strong>🕒 Flexible Scheduling:</strong> Choose times that suit your lifestyle with personalized 1-on-1 or group sessions.</li>
        <li><strong>💻 Modern Learning Tools:</strong> Lessons via Zoom, Google Meet, or WhatsApp—plus recorded sessions for revision.</li>
        <li><strong>🌍 Ideal for Non-Arabic Speakers & All Levels:</strong> Whether you're a beginner or want to improve your recitation, our structured Tajweed programs make it easy to learn and progress step by step.</li>
      </ul>
      <p class="mb-6 text-base leading-relaxed">
        <strong style="font-size:1.3em !important; font-weight:bold;">🔍 Keywords (SEO Tags):</strong><br/>
        Learn Quran online, Tajweed for non-Arabic speakers, Arabic Quran teacher, Quran teacher online, Online Islamic education, Virtual Quran classes, Certified Tajweed tutor, Read Quran for beginners, Quran recitation course, Zoom Quran classes, Native Arabic tutor, Online Tajweed lessons.
      </p>
      <p class="text-lg font-semibold text-[#5a2600] mb-8 text-center">
        📲 Ready to Start Your Journey?<br/>
        Join students from around the world learning the beauty of the Qur’an.<br/>
        <strong>Book your free trial now</strong>
      </p>
    `}};function q({params:a}){let{id:b}=a,c=p[b];return c?(0,d.jsxs)("div",{className:"jsx-9376142dec1d267c min-h-screen",children:[(0,d.jsx)("div",{className:"jsx-9376142dec1d267c max-w-4xl mx-auto px-4 py-6",children:(0,d.jsx)(o(),{href:"/blog/articles",children:(0,d.jsxs)(m.AnimatedButton,{variant:"ghost",className:"flex items-center gap-2 text-[#8b4513] hover:text-[#5a2600]",children:[(0,d.jsx)(g,{className:"w-4 h-4"}),"Back to Articles"]})})}),(0,d.jsxs)("div",{className:"jsx-9376142dec1d267c max-w-4xl mx-auto px-4 pb-16",children:[(0,d.jsx)(l.FadeInSection,{children:(0,d.jsxs)("div",{className:"jsx-9376142dec1d267c mb-8",children:[(0,d.jsxs)("div",{style:{minHeight:"140px",maxHeight:"260px",background:"#f8f3eb"},className:"jsx-9376142dec1d267c relative w-full aspect-[3/2] rounded-t-2xl overflow-hidden mb-6",children:[(0,d.jsx)(k.default,{src:c.coverImage,alt:c.title,fill:!0,className:"object-cover w-full h-full rounded-t-2xl",style:{objectFit:"cover",width:"100%",height:"100%",borderTopLeftRadius:"1.5rem",borderTopRightRadius:"1.5rem",background:"#f8f3eb"}}),(0,d.jsx)("div",{className:"jsx-9376142dec1d267c absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"})]}),(0,d.jsxs)("div",{className:"jsx-9376142dec1d267c flex flex-wrap items-center gap-4 text-sm text-[#8b4513] mb-4",children:[(0,d.jsxs)("div",{className:"jsx-9376142dec1d267c flex items-center gap-2 group",children:[(0,d.jsx)("div",{style:{filter:"drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",transform:"perspective(1000px) rotateX(5deg)"},className:"jsx-9376142dec1d267c icon-3d w-5 h-5 group-hover:scale-110 transition-transform duration-300",children:(0,d.jsx)(h.A,{className:"w-4 h-4"})}),(0,d.jsx)("span",{className:"jsx-9376142dec1d267c",children:new Date(c.publishDate).toLocaleDateString("en-GB")})]}),(0,d.jsxs)("div",{className:"jsx-9376142dec1d267c flex items-center gap-2 group",children:[(0,d.jsx)("div",{style:{filter:"drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",transform:"perspective(1000px) rotateX(5deg)"},className:"jsx-9376142dec1d267c icon-3d w-5 h-5 group-hover:scale-110 transition-transform duration-300",children:(0,d.jsx)(i.A,{className:"w-4 h-4"})}),(0,d.jsx)("span",{className:"jsx-9376142dec1d267c",children:c.readTime})]}),(0,d.jsxs)("div",{className:"jsx-9376142dec1d267c flex items-center gap-2 group",children:[(0,d.jsx)("div",{style:{filter:"drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",transform:"perspective(1000px) rotateX(5deg)"},className:"jsx-9376142dec1d267c icon-3d w-5 h-5 group-hover:scale-110 transition-transform duration-300",children:(0,d.jsx)(j.A,{className:"w-4 h-4"})}),(0,d.jsx)("span",{className:"jsx-9376142dec1d267c",children:c.author})]})]}),(0,d.jsx)("h1",{style:{fontFamily:"Noto Serif",fontWeight:900,fontSize:"36px !important",color:"white",textShadow:"3px 3px 0px rgba(0,0,0,0.7), 4px 4px 12px rgba(0,0,0,0.6), 6px 6px 16px rgba(0,0,0,0.5)",lineHeight:"1.4"},className:"jsx-9376142dec1d267c font-bold mb-4",children:c.title}),(0,d.jsx)("p",{style:{fontFamily:"Noto Serif",fontWeight:600},className:"jsx-9376142dec1d267c text-lg text-[#8b4513] mb-6 leading-relaxed",children:c.excerpt}),(0,d.jsx)("div",{className:"jsx-9376142dec1d267c flex flex-wrap gap-2 mb-8",children:c.tags.map((a,b)=>(0,d.jsx)("span",{style:{boxShadow:"0 2px 4px rgba(139, 69, 19, 0.3)"},className:"jsx-9376142dec1d267c bg-amber-50 text-[#8b4513] px-3 py-1 rounded-full text-sm font-bold border border-[#8b4513]",children:a},b))})]})}),(0,d.jsx)(l.FadeInSection,{children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("style",{children:`
              .article-content-small, .article-content-small h1, .article-content-small h2, .article-content-small h3, .article-content-small h4, .article-content-small h5, .article-content-small h6, .article-content-small p, .article-content-small li, .article-content-small ul, .article-content-small ol, .article-content-small blockquote {
                font-size: 110% !important;
              }
            `}),(0,d.jsx)("div",{style:{fontFamily:"Noto Serif"},dangerouslySetInnerHTML:{__html:c.content},className:"jsx-9376142dec1d267c prose prose-lg max-w-none mb-12 article-content-small"})]})}),(0,d.jsx)(l.FadeInSection,{children:(0,d.jsxs)("div",{style:{backgroundImage:"url('/islamic.svg'), linear-gradient(to right, #f59e42, #ff9800)",backgroundSize:"cover, cover",backgroundPosition:"center, center",backgroundRepeat:"no-repeat, no-repeat",border:"3px solid #8B4513"},className:"jsx-9376142dec1d267c bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl p-8 text-center",children:[(0,d.jsx)("h2",{style:{fontFamily:"Noto Serif",fontWeight:900,fontSize:"30px !important",color:"white",textShadow:"3px 3px 0px #8B4513, 4px 4px 12px rgba(0,0,0,0.9), 6px 6px 16px rgba(0,0,0,0.7)",lineHeight:"1.4"},className:"jsx-9376142dec1d267c font-bold mb-4",children:"Ready to Start Your Islamic Learning Journey?"}),(0,d.jsx)("p",{style:{fontFamily:"Noto Serif",fontWeight:600},className:"jsx-9376142dec1d267c text-lg mb-6 opacity-90",children:"Join our community of learners and discover the beauty of Islamic education with certified Al-Azhar scholars."}),(0,d.jsxs)("div",{className:"jsx-9376142dec1d267c flex flex-col sm:flex-row gap-4 justify-center",children:[(0,d.jsx)(m.AnimatedButton,{asChild:!0,size:"lg",className:"bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-full",children:(0,d.jsx)(o(),{href:"/register",children:"Get Started Today"})}),(0,d.jsx)(m.AnimatedButton,{asChild:!0,size:"lg",variant:"outline",className:"border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-full",children:(0,d.jsx)(o(),{href:"/contact",children:"Contact Us"})})]})]})})]}),(0,d.jsx)(f(),{id:"9376142dec1d267c",children:"@media(max-width:768px){.relative.w-full.aspect-\\[3\\/2\\].jsx-9376142dec1d267c{min-height:120px!important;max-height:180px!important;height:38vw!important}.object-cover.w-full.h-full.rounded-t-2xl.jsx-9376142dec1d267c{min-height:120px!important;max-height:180px!important;height:38vw!important;border-top-left-radius:1.2rem!important;border-top-right-radius:1.2rem!important}}"})]}):(0,d.jsx)("div",{className:"min-h-screen flex items-center justify-center",children:(0,d.jsxs)("div",{className:"text-center",children:[(0,d.jsx)("h1",{className:"text-2xl font-bold text-[#5a2600] mb-4",children:"Article Not Found"}),(0,d.jsx)("p",{className:"text-[#8b4513] mb-6",children:"The article you're looking for doesn't exist."}),(0,d.jsx)(o(),{href:"/blog/articles",children:(0,d.jsx)(m.AnimatedButton,{className:"bg-amber-600 hover:bg-amber-700 text-white",children:"Back to Articles"})})]})})}},81427:(a,b,c)=>{Promise.resolve().then(c.bind(c,77664))},83072:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>d});let d=(0,c(61369).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\11\\\\CascadeProjects\\\\Main-Website-Repo\\\\app\\\\blog\\\\articles\\\\[id]\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\11\\CascadeProjects\\Main-Website-Repo\\app\\blog\\articles\\[id]\\page.tsx","default")},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")}};var b=require("../../../../webpack-runtime.js");b.C(a);var c=b.X(0,[985,228,886],()=>b(b.s=16235));module.exports=c})();