(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const G={1:{thematic:"Valentía",options:["Josué 1:9","Salmos 27:1","Isaías 41:10","2 Timoteo 1:7","Salmos 118:6"]},2:{thematic:"Provisión",options:["Salmos 23:1","Filipenses 4:19","San Mateo 6:33","Salmos 34:10","San Mateo 7:11"]},3:{thematic:"Fortaleza",options:["Filipenses 4:13","Isaías 40:31","Salmos 18:2","Efesios 6:10","Habacuc 3:19"]},4:{thematic:"Paz",options:["San Juan 14:27","Filipenses 4:7","Isaías 26:3","Salmos 4:8","Colosenses 3:15"]},5:{thematic:"Confianza",options:["Proverbios 3:5","Jeremías 17:7","Salmos 37:5","Salmos 62:8","Isaías 12:2"]},6:{thematic:"Amor de Dios",options:["San Juan 3:16","Romanos 5:8","1 Juan 4:19","Sofonías 3:17","Jeremías 31:3"]},7:{thematic:"Descanso",options:["San Mateo 11:28","Salmos 62:1","Salmos 91:1","Éxodo 33:14","Hebreos 4:9"]},8:{thematic:"Sabiduría",options:["Santiago 1:5","Proverbios 2:6","Salmos 111:10","Proverbios 4:7","Colosenses 2:3"]},9:{thematic:"Propósito",options:["Jeremías 29:11","Romanos 8:28","Efesios 2:10","Proverbios 16:3","Salmos 138:8"]},10:{thematic:"Refugio",options:["Salmos 46:1","Salmos 9:9","Proverbios 18:10","Salmos 144:2","Nahúm 1:7"]},11:{thematic:"Fe",options:["Hebreos 11:1","San Marcos 9:23","San Mateo 21:22","Romanos 10:17","2 Corintios 5:7"]},12:{thematic:"Guía",options:["Salmos 119:105","Isaías 30:21","Salmos 32:8","Proverbios 3:6","Salmos 48:14"]},13:{thematic:"Ansiedad",options:["1 Pedro 5:7","Filipenses 4:6","Salmos 55:22","San Mateo 6:34","Salmos 94:19"]},14:{thematic:"Perdonar",options:["Efesios 4:32","Colosenses 3:13","San Mateo 6:14","San Lucas 6:37","Proverbios 17:9"]},15:{thematic:"Gozar",options:["Nehemías 8:10","Salmos 16:11","Filipenses 4:4","1 Tesalonicenses 5:16","Habacuc 3:18"]},16:{thematic:"Gracia",options:["Efesios 2:8","Hebreos 4:16","2 Corintios 12:9","Romanos 3:24","Tito 2:11"]},17:{thematic:"Socorro",options:["Salmos 121:2","Isaías 41:13","Salmos 145:18","Hebreos 13:6","Salmos 40:17"]},18:{thematic:"Fidelidad",options:["Lamentaciones 3:23","2 Tesalonicenses 3:3","1 Corintios 1:9","Deuteronomio 7:9","Salmos 36:5"]},19:{thematic:"Victoria",options:["Romanos 8:37","1 Corintios 15:57","1 Juan 5:4","Salmos 60:12","Proverbios 21:31"]},20:{thematic:"Corazón",options:["Proverbios 4:23","Salmos 51:10","San Mateo 5:8","Ezequiel 36:26","Salmos 119:11"]},21:{thematic:"Palabra",options:["Hebreos 4:12","San Mateo 4:4","Isaías 40:8","Salmos 19:7","Josué 1:8"]},22:{thematic:"Luz",options:["San Mateo 5:14","San Juan 8:12","Salmos 27:1","Efesios 5:8","1 Juan 1:7"]},23:{thematic:"Oración",options:["Jeremías 33:3","San Mateo 7:7","1 Juan 5:14","Salmos 145:18","San Lucas 11:9"]},24:{thematic:"Identidad",options:["San Juan 1:12","1 Pedro 2:9","2 Corintios 5:17","Gálatas 2:20","Efesios 1:4"]},25:{thematic:"Fruto",options:["Gálatas 5:22","San Juan 15:5","Filipenses 1:11","Salmos 1:3","Santiago 3:17"]},26:{thematic:"Humildad",options:["Santiago 4:10","1 Pedro 5:6","Proverbios 22:4","Miqueas 6:8","Filipenses 2:3"]},27:{thematic:"Esperanza",options:["Romanos 15:13","Salmos 130:5","Hebreos 10:23","Isaías 40:31","Job 14:7"]},28:{thematic:"Verdad",options:["San Juan 14:6","San Juan 8:32","Salmos 25:5","Efesios 4:25","3 Juan 1:4"]},29:{thematic:"Servicio",options:["Gálatas 5:13","San Mateo 20:28","Colosenses 3:23","Hebreos 6:10","1 Pedro 4:10"]},30:{thematic:"Justicia",options:["San Mateo 5:6","Salmos 37:6","Proverbios 21:21","Isaías 32:17","Romanos 1:17"]},31:{thematic:"Bendición",options:["Números 6:24","Salmos 67:1","Deuteronomio 28:2","Salmos 1:1","Proverbios 10:22"]}};class W{constructor(){this.bibleData=null,this.dictionaryData=null,this.pericopesData=null,this.favorites=JSON.parse(localStorage.getItem("bible_favorites")||"[]"),this.notes=JSON.parse(localStorage.getItem("bible_notes")||"[]"),this.highlights=JSON.parse(localStorage.getItem("bible_highlights")||"[]");const e={last_book:"Génesis",last_chapter:"1",theme:"classic",tts_voice:0,tts_voice_name:"",skip_verse_numbers:!1},t=JSON.parse(localStorage.getItem("bible_settings")||"{}");this.settings={...e,...t};let i=!1;this.notes.forEach(s=>{s.title===void 0&&(s.title="Nota sin nombre",i=!0)}),i&&localStorage.setItem("bible_notes",JSON.stringify(this.notes))}async init(){try{const e=await fetch("./bibles_rv1960.json");this.bibleData=await e.json();const t=await fetch("./dictionary.json");this.dictionaryData=await t.json();try{const i=await fetch("./pericopes.json");i.ok&&(this.pericopesData=await i.json())}catch{console.warn("Pericopes not found, ignoring.")}return!0}catch(e){return console.error("Error loading bible data:",e),!1}}getBooks(e=null){if(!this.bibleData)return[];const t=["Génesis","Éxodo","Levítico","Números","Deuteronomio","Josué","Jueces","Rut","1 Samuel","2 Samuel","1 Reyes","2 Reyes","1 Crónicas","2 Crónicas","Esdras","Nehemías","Ester","Job","Salmos","Proverbios","Eclesiastés","Cantares","Isaías","Jeremías","Lamentaciones","Ezequiel","Daniel","Oseas","Joel","Amós","Abdías","Jonás","Miqueas","Nahúm","Habacuc","Sofonías","Hageo","Zacarías","Malaquías","San Mateo","San Marcos","San Lucas","San Juan","Hechos","Romanos","1 Corintios","2 Corintios","Gálatas","Efesios","Filipenses","Colosenses","1 Tesalonicenses","2 Tesalonicenses","1 Timoteo","2 Timoteo","Tito","Filemón","Hebreos","Santiago","1 Pedro","2 Pedro","1 Juan","2 Juan","3 Juan","Judas","Apocalipsis"],i=Object.keys(this.bibleData),s=t.filter(o=>i.includes(o));return e==="old"?s.slice(0,39):e==="new"?s.slice(39):s}getChapters(e){return!this.bibleData||!this.bibleData[e]?[]:Object.keys(this.bibleData[e]).sort((t,i)=>parseInt(t)-parseInt(i))}getVerses(e,t){if(!this.bibleData||!this.bibleData[e]||!this.bibleData[e][t])return[];const i=this.bibleData[e][t];return Object.entries(i).sort((s,o)=>parseInt(s[0])-parseInt(o[0])).map(([s,o])=>[s,this.sanitizeVerseText(o)])}getPericope(e,t,i){if(!this.pericopesData)return null;if(this.pericopesData[e]&&this.pericopesData[e][t])return this.pericopesData[e][t][i]||null;let s=[e.replace("San ","S. "),e.replace("San ",""),e.replace("S. ",""),e.replace("1 ","1"),e.replace("2 ","2"),e.replace("3 ","3")];for(let c of s)if(this.pericopesData[c]&&this.pericopesData[c][t])return this.pericopesData[c][t][i]||null;const o=Object.keys(this.pericopesData),r=e.toLowerCase().replace(/[^a-z0-9]/g,""),a=o.find(c=>c.toLowerCase().replace(/[^a-z0-9]/g,"")===r);return a&&this.pericopesData[a][t]&&this.pericopesData[a][t][i]||null}search(e){if(!this.bibleData)return[];const t=e.toLowerCase(),i=[];for(const[s,o]of Object.entries(this.bibleData))for(const[r,a]of Object.entries(o))for(const[c,p]of Object.entries(a))p.toLowerCase().includes(t)&&i.push({book:s,chapter:r,vNum:c,text:this.sanitizeVerseText(p)});return i}isFavorite(e,t,i){const s=`${e} ${t}:${i}`;return this.favorites.some(o=>o.id===s)}toggleFavorite(e,t,i,s){const o=`${e} ${t}:${i}`,r=this.favorites.findIndex(a=>a.id===o);return r>-1?this.favorites.splice(r,1):this.favorites.push({id:o,book:e,chapter:t,verse:i,text:s,date:new Date().toISOString()}),localStorage.setItem("bible_favorites",JSON.stringify(this.favorites)),r===-1}deleteFavorite(e){this.favorites.splice(e,1),localStorage.setItem("bible_favorites",JSON.stringify(this.favorites))}addNote(e,t,i,s,o,r){this.notes.push({book:e,chapter:t,verse:i,text:s,note:o,title:r||"Nota sin nombre",date:new Date().toISOString()}),localStorage.setItem("bible_notes",JSON.stringify(this.notes))}deleteNote(e){this.notes.splice(e,1),localStorage.setItem("bible_notes",JSON.stringify(this.notes))}updateNote(e,t,i){this.notes[e]&&(this.notes[e].note=t,i!==void 0&&(this.notes[e].title=i),this.notes[e].date=new Date().toISOString(),localStorage.setItem("bible_notes",JSON.stringify(this.notes)))}isHighlighted(e,t,i){const s=`${e} ${t}:${i}`;return this.highlights.find(o=>o.id===s)}addHighlight(e,t,i,s,o){const r=`${e} ${t}:${i}`,a=this.highlights.findIndex(c=>c.id===r);a>-1&&this.highlights.splice(a,1),this.highlights.push({id:r,book:e,chapter:t,verse:i,text:s,color:o,date:new Date().toISOString()}),localStorage.setItem("bible_highlights",JSON.stringify(this.highlights))}removeHighlight(e,t,i){const s=`${e} ${t}:${i}`,o=this.highlights.findIndex(r=>r.id===s);o>-1&&(this.highlights.splice(o,1),localStorage.setItem("bible_highlights",JSON.stringify(this.highlights)))}deleteHighlight(e){this.highlights.splice(e,1),localStorage.setItem("bible_highlights",JSON.stringify(this.highlights))}setLastRead(e,t){this.settings.last_book=e,this.settings.last_chapter=t,this.saveSettings()}setTheme(e){this.settings.theme=e,this.saveSettings()}saveSettings(){localStorage.setItem("bible_settings",JSON.stringify(this.settings))}searchDictionary(e){if(!this.dictionaryData)return[];const t=e.toLowerCase();return Object.entries(this.dictionaryData).filter(([i,s])=>i.toLowerCase().includes(t)||s.toLowerCase().includes(t)).map(([i,s])=>({term:i,definition:s}))}getRandomVerse(){if(!this.bibleData)return null;const e=Object.keys(this.bibleData),t=e[Math.floor(Math.random()*e.length)],i=Object.keys(this.bibleData[t]),s=i[Math.floor(Math.random()*i.length)],o=Object.keys(this.bibleData[t][s]),r=o[Math.floor(Math.random()*o.length)],a=this.sanitizeVerseText(this.bibleData[t][s][r]);return{book:t,chapter:s,verse:r,text:a}}sanitizeVerseText(e){return e?e.replace(/,([^\s])/g,", $1").replace(/\.([^\s])/g,". $1").replace(/;([^\s])/g,"; $1").replace(/:([^\s])/g,": $1").replace(/\s+/g," ").trim():""}getVerseOfDay(){if(!this.bibleData)return null;const e=G;if(!e)return this.getRandomVerse();const t=new Date,i=t.getDate(),s=t.getFullYear(),o=e[i];if(!o)return this.getRandomVerse();const r=s%5,c=o.options[r].split(" ");let p,m;c.length===3?(p=`${c[0]} ${c[1]}`,m=c[2]):(p=c[0],m=c[1]);const[h,d]=m.split(":"),u=this.normalizeBookName(p);if(this.bibleData[u]&&this.bibleData[u][h]){const g=this.bibleData[u][h][d];if(g){const b=this.sanitizeVerseText(g);return{book:u,chapter:h,verse:d,text:b,thematic:o.thematic,ref:`${u} ${h}:${d}`}}}return this.getRandomVerse()}normalizeBookName(e){const t={Josué:"Josué",Salmo:"Salmos",Salmos:"Salmos","Is.":"Isaías",Isaías:"Isaías","2 Tim.":"2 Timoteo","2 Timoteo":"2 Timoteo","Fil.":"Filipenses",Filipenses:"Filipenses",Mateo:"San Mateo","San Mateo":"San Mateo","San Marcos":"San Marcos","San Lucas":"San Lucas","San Juan":"San Juan","Hab.":"Habacuc",Habacuc:"Habacuc","Jer.":"Jeremías",Jeremías:"Jeremías","Sof.":"Sofonías",Sofonías:"Sofonías","Luc.":"San Lucas",Lucas:"San Lucas",Marcos:"San Marcos","Heb.":"Hebreos",Hebreos:"Hebreos",Santiago:"Santiago","Sant.":"Santiago","1 Pedro":"1 Pedro","2 Pedro":"2 Pedro","Prov.":"Proverbios",Proverbios:"Proverbios","2 Cor.":"2 Corintios","2 Corintios":"2 Corintios","1 Cor.":"1 Corintios","1 Corintios":"1 Corintios","Lam.":"Lamentaciones",Lamentaciones:"Lamentaciones","2 Tes.":"2 Tesalonicenses","2 Tesalonicenses":"2 Tesalonicenses","1 Tes.":"1 Tesalonicenses","1 Tesalonicenses":"1 Tesalonicenses","Deut.":"Deuteronomio",Deuteronomio:"Deuteronomio","1 Juan":"1 Juan","2 Juan":"2 Juan","3 Juan":"3 Juan","Ezeq.":"Ezequiel",Ezequiel:"Ezequiel","Gál.":"Gálatas",Gálatas:"Gálatas","Gal.":"Gálatas","Miq.":"Miqueas",Miqueas:"Miqueas",Job:"Job","Núm.":"Números",Números:"Números",Éxodo:"Éxodo","Col.":"Colosenses",Colosenses:"Colosenses"};if(t[e])return t[e];const i=e.replace(".","").replace("San ","").replace("S. ","").trim();return t[i]?t[i]:this.getBooks().find(o=>o.toLowerCase().startsWith(i.toLowerCase()))||e}exportUserData(){return{version:"1.0",export_date:new Date().toISOString(),app_version:"1.2.3",data:{favorites:this.favorites,notes:this.notes,highlights:this.highlights,settings:this.settings}}}importUserData(e){if(!e.version||!e.data)throw new Error("Formato de backup inválido");this.favorites=e.data.favorites||[],this.notes=e.data.notes||[],this.highlights=e.data.highlights||[],this.settings={...this.settings,...e.data.settings},localStorage.setItem("bible_favorites",JSON.stringify(this.favorites)),localStorage.setItem("bible_notes",JSON.stringify(this.notes)),localStorage.setItem("bible_highlights",JSON.stringify(this.highlights)),localStorage.setItem("bible_settings",JSON.stringify(this.settings))}}const X="modulepreload",K=function(n,e){return new URL(n,e).href},H={},j=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let p=function(m){return Promise.all(m.map(h=>Promise.resolve(h).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const r=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=p(t.map(m=>{if(m=K(m,i),m in H)return;H[m]=!0;const h=m.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(i)for(let g=r.length-1;g>=0;g--){const b=r[g];if(b.href===m&&(!h||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${d}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":X,h||(u.as="script"),u.crossOrigin="",u.href=m,c&&u.setAttribute("nonce",c),document.head.appendChild(u),h)return new Promise((g,b)=>{u.addEventListener("load",g),u.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${m}`)))})}))}function o(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return s.then(r=>{for(const a of r||[])a.status==="rejected"&&o(a.reason);return e().catch(o)})};var $;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})($||($={}));class P extends Error{constructor(e,t,i){super(e),this.message=e,this.code=t,this.data=i}}const Y=n=>{var e,t;return n?.androidBridge?"android":!((t=(e=n?.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},Z=n=>{const e=n.CapacitorCustomPlatform||null,t=n.Capacitor||{},i=t.Plugins=t.Plugins||{},s=()=>e!==null?e.name:Y(n),o=()=>s()!=="web",r=h=>{const d=p.get(h);return!!(d?.platforms.has(s())||a(h))},a=h=>{var d;return(d=t.PluginHeaders)===null||d===void 0?void 0:d.find(u=>u.name===h)},c=h=>n.console.error(h),p=new Map,m=(h,d={})=>{const u=p.get(h);if(u)return console.warn(`Capacitor plugin "${h}" already registered. Cannot register plugins twice.`),u.proxy;const g=s(),b=a(h);let x;const q=async()=>(!x&&g in d?x=typeof d[g]=="function"?x=await d[g]():x=d[g]:e!==null&&!x&&"web"in d&&(x=typeof d.web=="function"?x=await d.web():x=d.web),x),U=(f,v)=>{var w,S;if(b){const k=b?.methods.find(y=>v===y.name);if(k)return k.rtype==="promise"?y=>t.nativePromise(h,v.toString(),y):(y,C)=>t.nativeCallback(h,v.toString(),y,C);if(f)return(w=f[v])===null||w===void 0?void 0:w.bind(f)}else{if(f)return(S=f[v])===null||S===void 0?void 0:S.bind(f);throw new P(`"${h}" plugin is not implemented on ${g}`,$.Unimplemented)}},D=f=>{let v;const w=(...S)=>{const k=q().then(y=>{const C=U(y,f);if(C){const E=C(...S);return v=E?.remove,E}else throw new P(`"${h}.${f}()" is not implemented on ${g}`,$.Unimplemented)});return f==="addListener"&&(k.remove=async()=>v()),k};return w.toString=()=>`${f.toString()}() { [capacitor code] }`,Object.defineProperty(w,"name",{value:f,writable:!1,configurable:!1}),w},z=D("addListener"),_=D("removeListener"),J=(f,v)=>{const w=z({eventName:f},v),S=async()=>{const y=await w;_({eventName:f,callbackId:y},v)},k=new Promise(y=>w.then(()=>y({remove:S})));return k.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await S()},k},I=new Proxy({},{get(f,v){switch(v){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return b?J:z;case"removeListener":return _;default:return D(v)}}});return i[h]=I,p.set(h,{name:h,proxy:I,platforms:new Set([...Object.keys(d),...b?[g]:[]])}),I};return t.convertFileSrc||(t.convertFileSrc=h=>h),t.getPlatform=s,t.handleError=c,t.isNativePlatform=o,t.isPluginAvailable=r,t.registerPlugin=m,t.Exception=P,t.DEBUG=!!t.DEBUG,t.isLoggingEnabled=!!t.isLoggingEnabled,t},Q=n=>n.Capacitor=Z(n),F=Q(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),T=F.registerPlugin;class L{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let i=!1;this.listeners[e]||(this.listeners[e]=[],i=!0),this.listeners[e].push(t);const o=this.windowListeners[e];o&&!o.registered&&this.addWindowListener(o),i&&this.sendRetainedArgumentsForEvent(e);const r=async()=>this.removeListener(e,t);return Promise.resolve({remove:r})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,i){const s=this.listeners[e];if(!s){if(i){let o=this.retainedEventArguments[e];o||(o=[]),o.push(t),this.retainedEventArguments[e]=o}return}s.forEach(o=>o(t))}hasListeners(e){var t;return!!(!((t=this.listeners[e])===null||t===void 0)&&t.length)}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:i=>{this.notifyListeners(t,i)}}}unimplemented(e="not implemented"){return new F.Exception(e,$.Unimplemented)}unavailable(e="not available"){return new F.Exception(e,$.Unavailable)}async removeListener(e,t){const i=this.listeners[e];if(!i)return;const s=i.indexOf(t);this.listeners[e].splice(s,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(i=>{this.notifyListeners(e,i)}))}}const M=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),R=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class ee extends L{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(i=>{if(i.length<=0)return;let[s,o]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=R(s).trim(),o=R(o).trim(),t[s]=o}),t}async setCookie(e){try{const t=M(e.key),i=M(e.value),s=`; expires=${(e.expires||"").replace("expires=","")}`,o=(e.path||"/").replace("path=",""),r=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${i||""}${s}; path=${o}; ${r};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}T("CapacitorCookies",{web:()=>new ee});const te=async n=>new Promise((e,t)=>{const i=new FileReader;i.onload=()=>{const s=i.result;e(s.indexOf(",")>=0?s.split(",")[1]:s)},i.onerror=s=>t(s),i.readAsDataURL(n)}),ie=(n={})=>{const e=Object.keys(n);return Object.keys(n).map(s=>s.toLocaleLowerCase()).reduce((s,o,r)=>(s[o]=n[e[r]],s),{})},se=(n,e=!0)=>n?Object.entries(n).reduce((i,s)=>{const[o,r]=s;let a,c;return Array.isArray(r)?(c="",r.forEach(p=>{a=e?encodeURIComponent(p):p,c+=`${o}=${a}&`}),c.slice(0,-1)):(a=e?encodeURIComponent(r):r,c=`${o}=${a}`),`${i}&${c}`},"").substr(1):null,oe=(n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),s=ie(n.headers)["content-type"]||"";if(typeof n.data=="string")t.body=n.data;else if(s.includes("application/x-www-form-urlencoded")){const o=new URLSearchParams;for(const[r,a]of Object.entries(n.data||{}))o.set(r,a);t.body=o.toString()}else if(s.includes("multipart/form-data")||n.data instanceof FormData){const o=new FormData;if(n.data instanceof FormData)n.data.forEach((a,c)=>{o.append(c,a)});else for(const a of Object.keys(n.data))o.append(a,n.data[a]);t.body=o;const r=new Headers(t.headers);r.delete("content-type"),t.headers=r}else(s.includes("application/json")||typeof n.data=="object")&&(t.body=JSON.stringify(n.data));return t};class re extends L{async request(e){const t=oe(e,e.webFetchExtra),i=se(e.params,e.shouldEncodeUrlParams),s=i?`${e.url}?${i}`:e.url,o=await fetch(s,t),r=o.headers.get("content-type")||"";let{responseType:a="text"}=o.ok?e:{};r.includes("application/json")&&(a="json");let c,p;switch(a){case"arraybuffer":case"blob":p=await o.blob(),c=await te(p);break;case"json":c=await o.json();break;default:c=await o.text()}const m={};return o.headers.forEach((h,d)=>{m[d]=h}),{data:c,headers:m,status:o.status,url:o.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}T("CapacitorHttp",{web:()=>new re});var O;(function(n){n.Dark="DARK",n.Light="LIGHT",n.Default="DEFAULT"})(O||(O={}));var B;(function(n){n.StatusBar="StatusBar",n.NavigationBar="NavigationBar"})(B||(B={}));class ae extends L{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}T("SystemBars",{web:()=>new ae});function ne(n){n.CapacitorUtils.Synapse=new Proxy({},{get(e,t){return new Proxy({},{get(i,s){return(o,r,a)=>{const c=n.Capacitor.Plugins[t];if(c===void 0){a(new Error(`Capacitor plugin ${t} not found`));return}if(typeof c[s]!="function"){a(new Error(`Method ${s} not found in Capacitor plugin ${t}`));return}(async()=>{try{const p=await c[s](o);r(p)}catch(p){a(p)}})()}}})}})}function le(n){n.CapacitorUtils.Synapse=new Proxy({},{get(e,t){return n.cordova.plugins[t]}})}function ce(n=!1){typeof window>"u"||(window.CapacitorUtils=window.CapacitorUtils||{},window.Capacitor!==void 0&&!n?ne(window):window.cordova!==void 0&&le(window))}var N;(function(n){n.Documents="DOCUMENTS",n.Data="DATA",n.Library="LIBRARY",n.Cache="CACHE",n.External="EXTERNAL",n.ExternalStorage="EXTERNAL_STORAGE",n.ExternalCache="EXTERNAL_CACHE",n.LibraryNoCloud="LIBRARY_NO_CLOUD",n.Temporary="TEMPORARY"})(N||(N={}));var V;(function(n){n.UTF8="utf8",n.ASCII="ascii",n.UTF16="utf16"})(V||(V={}));const A=T("Filesystem",{web:()=>j(()=>import("./web-DBoQiFVH.js"),[],import.meta.url).then(n=>new n.FilesystemWeb)});ce();T("Zip",{web:()=>j(()=>import("./web-Cau8ObRD.js"),[],import.meta.url).then(n=>new n.ZipWeb)});class de extends L{constructor(){super(...arguments),this.ERROR_PICK_FILE_CANCELED="pickFiles canceled."}async checkPermissions(){throw this.unimplemented("Not implemented on web.")}async convertHeicToJpeg(e){throw this.unimplemented("Not implemented on web.")}async copyFile(e){throw this.unimplemented("Not implemented on web.")}async pickFiles(e){const t=await this.openFilePicker(e);if(!t)throw new Error(this.ERROR_PICK_FILE_CANCELED);const i={files:[]};for(const s of t){const o={blob:s,modifiedAt:s.lastModified,mimeType:this.getMimeTypeFromUrl(s),name:this.getNameFromUrl(s),path:void 0,size:this.getSizeFromUrl(s)};e?.readData&&(o.data=await this.getDataFromFile(s)),i.files.push(o)}return i}async pickDirectory(){throw this.unimplemented("Not implemented on web.")}async pickImages(e){return this.pickFiles(Object.assign({types:["image/*"]},e))}async pickMedia(e){return this.pickFiles(Object.assign({types:["image/*","video/*"]},e))}async pickVideos(e){return this.pickFiles(Object.assign({types:["video/*"]},e))}async requestPermissions(e){throw this.unimplemented("Not implemented on web.")}async openFilePicker(e){var t;const i=((t=e?.types)===null||t===void 0?void 0:t.join(","))||"",s=e?.limit===void 0?0:e.limit;return new Promise(o=>{let r=!1;const a=document.createElement("input");a.type="file",a.accept=i,a.multiple=s===0;const c="oncancel"in a,p=()=>{r=!0,d();const u=Array.from(a.files||[]);o(u)},m=()=>{d(),o(void 0)},h=async()=>{await this.wait(500),!r&&(d(),o(void 0))},d=()=>{a.removeEventListener("change",p),c?a.removeEventListener("cancel",m):window.removeEventListener("focus",h)};a.addEventListener("change",p,{once:!0}),c?a.addEventListener("cancel",m,{once:!0}):window.addEventListener("focus",h,{once:!0}),a.click()})}async getDataFromFile(e){return new Promise((t,i)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=()=>{const a=(typeof s.result=="string"?s.result:"").split("base64,")[1]||"";t(a)},s.onerror=o=>{i(o)}})}getNameFromUrl(e){return e.name}getMimeTypeFromUrl(e){return e.type}getSizeFromUrl(e){return e.size}async wait(e){return new Promise(t=>setTimeout(t,e))}}const he=T("FilePicker",{web:()=>new de}),l=n=>`<i data-lucide="${n}"></i>`;class pe{constructor(){this.db=new W,this.appEl=document.querySelector("#app"),this.currentView="home",this.selectedVerse=null,this.selectedFavoriteIndex=null,this.selectedNoteIndex=null,this.editingNoteIndex=void 0,this.currentVod=null,this.currentVodBg="/img/bg-verse-1.png",this.dictionary=[],this.isSpeaking=!1,this.isPaused=!1,this.currentVerseIndex=0,this.currentChapterVerses=[],this.aboutClickCount=0,this.appVersion="1.2.4",this.repo="krafairus/biblia-cristiana-rv1960-app",this.currentHighlightFilter="all",this.searchFilter="all",this.searchBook=null,this.notesSortOrder="desc",this.init()}async canShareData(e){if(!navigator.share||!navigator.canShare)return!1;const t={};let i=!1;for(const[s,o]of Object.entries(e))navigator.canShare({[s]:o})&&(t[s]=o,i=!0);return i?t:!1}async init(){await this.db.init()?(this.migrateThemes(),this.applyTheme(),this.watchSystemTheme(),this.renderHome(),this.checkForUpdates(!0)):this.appEl.innerHTML='<div class="error" style="height: 100vh; display: flex; align-items: center; justify-content: center; color: white;">Error al cargar la Biblia. Por favor recarga.</div>'}migrateThemes(){const e=this.db.settings;if(!e.theme_style){const t=e.theme||"classic";t==="dark"?(e.theme_style="classic",e.theme_mode="dark"):t==="light"?(e.theme_style="classic",e.theme_mode="light"):t==="floral"?(e.theme_style="floral",e.theme_mode="light"):t==="pastel-blue"?(e.theme_style="pastel-blue",e.theme_mode="light"):t==="ink"?(e.theme_style="ink",e.theme_mode="light"):(e.theme_style="classic",e.theme_mode="light"),e.system_theme===void 0&&(e.system_theme=!1),this.db.saveSettings()}}applyTheme(e,t){const i=this.db.settings;e&&(i.theme_style=e),t&&(i.theme_mode=t);let s=i.theme_mode||"light";i.system_theme&&(s=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),document.documentElement.setAttribute("data-style",i.theme_style),document.documentElement.setAttribute("data-mode",s),this.db.saveSettings(),this.currentView==="settings"&&this.renderSettings()}toggleMode(){const e=this.db.settings;if(e.system_theme){this.showToast("La sincronización con el sistema está activa");return}const t=e.theme_mode==="light"?"dark":"light";this.applyTheme(null,t)}watchSystemTheme(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{this.db.settings.system_theme&&this.applyTheme()})}refreshIcons(){if(window.lucide)window.lucide.createIcons();else{const e=document.createElement("script");e.src="/libs/lucide.min.js",e.onload=()=>{window.lucide&&window.lucide.createIcons()},document.head.appendChild(e)}}render(e){this.isSpeaking&&this.stopTTS(),document.getElementById("app").innerHTML=e,this.refreshIcons(),window.scrollTo({top:0,behavior:"instant"}),this.appEl.scrollTo(0,0)}showToast(e,t=3e3){const i=document.querySelector("#toast-container");if(!i)return;const s=document.createElement("div");s.className="toast",s.innerText=e,i.appendChild(s),setTimeout(()=>{s.classList.add("removing"),setTimeout(()=>s.remove(),300)},t)}renderHome(){this.currentView="home";const e=[{text:"Antiguo T.",icon:"book",target:"old"},{text:"Nuevo T.",icon:"book-open",target:"new"},{text:"Buscar",icon:"search",target:"search"},{text:"Última lectura",icon:"history",target:"last"},{text:"Vr del dia",icon:"sun",target:"vod"},{text:"Devocional",icon:"coffee",target:"devotional"},{text:"Favoritos",icon:"heart",target:"favorites"},{text:"Notas",icon:"sticky-note",target:"notes"},{text:"Marcadores",icon:"highlighter",target:"highlights"},{text:"Diccionario",icon:"book-a",target:"dict"},{text:"Ajustes",icon:"settings",target:"settings"}],t=this.db.getVerseOfDay(),s=(new Date().getFullYear()*1e4+(new Date().getMonth()+1)*100+new Date().getDate())%11+1,o=`
      <header>
        <h1 style="font-family: 'Playfair Display', serif;">Biblia Cristiana</h1>
        <div style="font-size: 0.8rem; opacity: 0.5; color: var(--accent); margin-right: auto; padding-left: 0.5rem;">RV 1960</div>
        ${this.db.settings.theme_style!=="ink"?`
        <button class="btn-icon" onclick="window.app.toggleMode()" id="theme-toggle-btn">
          ${l(this.db.settings.theme_mode==="dark"?"sun":"moon")}
        </button>
        `:""}
      </header>
      <div class="view-container animate-entrance">
        ${t?`
          <div class="home-vod-card" onclick="window.pendingVerseScroll = '${t.verse}'; window.app.renderReader('${t.book}', '${t.chapter}')"
               style="background-image: url('/img/bg-verse-${s}.png')">
            <div class="vod-thematic">${t.thematic}</div>
            <div class="vod-text">"${t.text}"</div>
            <div class="vod-ref">${t.book} ${t.chapter}:${t.verse}</div>
            <div style="position: absolute; bottom: 1rem; right: 1rem; opacity: 0.5; font-size: 0.7rem; font-weight: 700;">VERSÍCULO DEL DÍA</div>
          </div>
        `:""}
        <div class="home-grid">
          ${e.map(r=>`
            <div class="premium-card" onclick="window.app.navigate('${r.target}')">
              <div class="icon-wrapper">${l(r.icon)}</div>
              <span>${r.text}</span>
            </div>
          `).join("")}
          <div class="premium-card" style="grid-column: span 2; flex-direction: row; justify-content: center; padding: 1rem;" onclick="window.app.navigate('about')">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <div style="color: var(--accent);">${l("info")}</div>
                <span>Acerca de la Aplicación</span>
              </div>
          </div>
        </div>
      </div>
    `;this.render(o)}navigate(e){if(this.clearSelection(),this.clearFavoriteSelection(),this.clearHighlightSelection(),this.closeShareModal(),e!=="search"&&(this.searchFilter="all",this.searchBook=null),e==="home")this.renderHome();else if(e==="old")this.renderBookList("old");else if(e==="new")this.renderBookList("new");else if(e==="favorites")this.renderFavorites();else if(e==="notes")this.renderNotes();else if(e==="highlights")this.renderHighlights();else if(e==="search")this.renderSearch();else if(e==="dict")this.renderDictionary();else if(e==="about")this.renderAbout();else if(e==="settings")this.renderSettings();else if(e==="vod")this.renderVerseOfDay();else if(e==="devotional")this.renderDevotional();else if(e==="last"){const{last_book:t,last_chapter:i}=this.db.settings;this.renderReader(t,i)}}renderBookList(e){const t=this.db.getBooks(e),i=`
      <header>
        <button class="btn-icon" onclick="window.app.navigate('home')">${l("chevron-left")}</button>
        <h1>${e==="old"?"Antiguo Testamento":"Nuevo Testamento"}</h1>
      </header>
      <div class="view-container animate-entrance">
        <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
          ${t.map(s=>`
            <div class="premium-card" onclick="window.app.renderChapterList('${s}')" 
                 style="flex-direction: row; justify-content: space-between; padding: 1.25rem;">
              <span style="font-size: 1.1rem;">${s}</span>
              <div style="color: var(--accent); opacity: 0.5;">${l("chevron-right")}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `;this.render(i)}renderChapterList(e){this.currentView="chapters";const t=this.db.getChapters(e),o=`
      <header>
        <button class="btn-icon" onclick="window.app.renderBookList('${this.db.getBooks("old").includes(e)?"old":"new"}')">${l("chevron-left")}</button>
        <h1>${e}</h1>
      </header>
      <div class="view-container animate-entrance">
        <p style="opacity: 0.6; font-size: 0.9rem; margin-bottom: 1.5rem; font-weight: 600; text-transform: uppercase; text-align: center;">Seleccionar Capítulo</p>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.75rem;">
          ${t.map(r=>`
            <div class="premium-card" onclick="window.app.renderVerseList('${e.replace(/'/g,"\\'")}', '${r}')" 
                 style="aspect-ratio: 1/1; justify-content: center; align-items: center; padding: 0; font-size: 1.1rem; font-weight: 700; border-radius: 12px;">
              ${r}
            </div>
          `).join("")}
        </div>
      </div>
    `;this.render(o)}renderVerseList(e,t){this.currentView="verses";const i=this.db.getVerses(e,t),s=`
      <header>
        <button class="btn-icon" onclick="window.app.renderChapterList('${e.replace(/'/g,"\\'")}')">${l("chevron-left")}</button>
        <h1 style="font-size: 1.2rem;">${e} ${t}</h1>
      </header>
      <div class="view-container animate-entrance">
        <p style="opacity: 0.6; font-size: 0.9rem; margin-bottom: 1.5rem; font-weight: 600; text-transform: uppercase; text-align: center;">Seleccionar Versículo</p>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.75rem;">
          ${i.map(([o])=>`
            <div class="premium-card" onclick="window.pendingVerseScroll='${o}'; window.app.renderReader('${e.replace(/'/g,"\\'")}', '${t}')" 
                 style="aspect-ratio: 1/1; justify-content: center; align-items: center; padding: 0; font-size: 1.1rem; font-weight: 700; border-radius: 12px;">
              ${o}
            </div>
          `).join("")}
        </div>
      </div>
    `;this.render(s)}renderReader(e,t){this.currentView="reader",this.db.setLastRead(e,t);const i=this.db.getChapters(e),s=this.db.getVerses(e,t),o=`
      <header style="flex-direction: column; align-items: flex-start; gap: 0.5rem; padding-bottom: 0;">
        <div style="display: flex; align-items: center; gap: 1rem; width: 100%;">
          <button class="btn-icon" onclick="window.app.renderChapterList('${e}')">${l("chevron-left")}</button>
          <h1 style="flex-grow: 1; font-size: 1.4rem;">${e}</h1>
          <button class="btn-icon ${this.isSpeaking?"active":""}" id="tts-btn" 
                  style="${this.isSpeaking?"background: var(--accent); color: white;":""}"
                  onclick="window.app.toggleTTS('${e.replace(/'/g,"\\'")}', '${t}')" title="Leer capítulo">
            ${l(this.isSpeaking?this.isPaused?"play":"pause":"volume-2")}
          </button>
          <button class="btn-icon" id="tts-controls-btn" 
                  style="display: ${this.isSpeaking?"flex":"none"}; background: var(--card-bg); border: 1px solid var(--glass-border); width: 40px; height: 40px; margin-left: -0.5rem;"
                  onclick="window.app.openTTSDialog()" title="Controles de Audio">
             ${l("sliders-horizontal")}
          </button>
        </div>
        <div id="chapter-tabs" style="display: flex; overflow-x: auto; gap: 0.5rem; width: 100%; padding: 0.5rem 0 1rem 0; scrollbar-width: none;">
          ${i.map(a=>`
            <button class="${a===t?"premium-card":""}" 
                    style="padding: 0.4rem 1rem; border: ${a===t?"none":"1px solid var(--glass-border)"}; 
                           background: ${a===t?"var(--accent)":"var(--card-bg)"}; 
                           color: ${a===t?"white":"var(--text-main)"};
                           border-radius: 20px; white-space: nowrap; font-size: 0.9rem; font-weight: 600;"
                    onclick="window.app.renderReader('${e}', '${a}')">
              ${a}
            </button>
          `).join("")}
        </div>
      </header>
      <div class="view-container animate-entrance">
        ${s.map(([a,c])=>{const p=this.db.isFavorite(e,t,a),m=this.db.isHighlighted(e,t,a),h=this.db.getPericope(e,t,a),d=m?`background-color: ${m.color}; color: #333; border-radius: 4px; padding: 2px 4px; box-decoration-break: clone; -webkit-box-decoration-break: clone;`:"";return`
              ${h?`<div class="pericope">${h}</div>`:""}
              <div class="verse-item ${p?"favorite":""}" 
                   id="v-${a}" onclick="window.app.toggleVerseSelection('${e}', '${t}', '${a}', '${c.replace(/'/g,"\\'")}')">
                <span class="verse-num">${a}</span>
                <span class="verse-text" style="${d}">${c}</span>
              </div>
            `}).join("")}
      </div>
      <div id="selection-bar" class="floating-toolbar animate-entrance" style="display: none;">
        <button class="tool-btn" onclick="window.app.handleFavorite()" title="Favorito">${l("heart")}</button>
        <button class="tool-btn" onclick="window.app.handleNote()" title="Nota">${l("edit-3")}</button>
        <button class="tool-btn" onclick="window.app.handleHighlight()" title="Marcador">${l("highlighter")}</button>
        <button class="tool-btn" onclick="window.app.handleVerseMenu()" title="Menú">${l("menu")}</button>
        <button class="tool-btn" onclick="window.app.clearSelection()" title="Cerrar">${l("x")}</button>
      </div>

      <div id="highlight-bar" class="floating-toolbar animate-entrance" style="display: none; top: auto; bottom: 80px; justify-content: center; gap: 10px; flex-wrap: wrap; padding: 10px;">
        ${["#fef3c7","#dcfce7","#dbeafe","#fae8ff","#fee2e2","#ffedd5","#f3f4f6","transparent"].map(a=>`
            <div data-color="${a}" onclick="window.app.applyHighlight('${a}')" style="width: 30px; height: 30px; border-radius: 50%; background: ${a==="transparent"?"white":a}; border: 1px solid #ccc; cursor: pointer; display: flex; align-items: center; justify-content: center;">
                ${a==="transparent"?l("ban"):""}
            </div>
        `).join("")}
      </div>

      <!-- TTS Controls Dialog -->
      <div id="tts-dialog" class="floating-toolbar animate-entrance" 
           style="display: none; flex-direction: column; align-items: center; padding: 1rem; width: 85%; max-width: 350px; bottom: 100px; border-radius: 24px; gap: 1rem; background: var(--bg-color); border: 1px solid var(--glass-border);">
          <div style="width: 100%; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 700; font-size: 0.9rem; color: var(--accent);">Control de Lectura</span>
            <button class="btn-icon" onclick="window.app.closeTTSDialog()" style="width: 30px; height: 30px; background: transparent; color: var(--text-main);">${l("x")}</button>
          </div>
          
          <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; gap: 1rem; background: var(--card-bg); padding: 0.5rem; border-radius: 16px;">
             <button class="btn-icon" onclick="window.app.prevVerseTTS()" style="width: 40px; height: 40px;">${l("chevron-left")}</button>
             <div style="text-align: center; flex: 1;">
                <span id="tts-current-verse" style="font-weight: 700; font-size: 1.1rem; display: block;">Verso -</span>
             </div>
             <button class="btn-icon" onclick="window.app.nextVerseTTS()" style="width: 40px; height: 40px;">${l("chevron-right")}</button>
          </div>
          
          <button onclick="window.app.stopTTS()" style="width: 100%; padding: 0.8rem; border-radius: 12px; background: #ef4444; color: white; border: none; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
            ${l("square")} Detener Reproducción
          </button>
      </div>
    `;this.render(o);const r=document.querySelector("#chapter-tabs .premium-card");r&&r.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),window.pendingVerseScroll&&setTimeout(()=>{const a=document.getElementById(`v-${window.pendingVerseScroll}`);a&&a.scrollIntoView({behavior:"smooth",block:"center"}),window.pendingVerseScroll=null},500),this.setupSwipeNavigation(e,t)}setupSwipeNavigation(e,t){let i=0,s=0;const o=document.querySelector(".view-container");o&&(o.ontouchstart=r=>{i=r.touches[0].clientX,s=r.touches[0].clientY},o.ontouchend=r=>{const a=r.changedTouches[0].clientX,c=r.changedTouches[0].clientY,p=i-a,m=s-c;if(Math.abs(p)>80&&Math.abs(p)>Math.abs(m)*1.8)if(p>0){const d=parseInt(t)+1;d<=this.db.getChapters(e).length&&(o.classList.add("swipe-left"),setTimeout(()=>this.renderReader(e,d.toString()),200))}else{const d=parseInt(t)-1;d>=1&&(o.classList.add("swipe-right"),setTimeout(()=>this.renderReader(e,d.toString()),200))}})}toggleVerseSelection(e,t,i,s){const o=document.getElementById(`v-${i}`);if(this.selectedVerse&&this.selectedVerse.vNum===i)this.clearSelection();else{this.clearSelection(),this.selectedVerse={book:e,chapter:t,vNum:i,text:s},o.classList.add("selected"),document.querySelector("#selection-bar").style.display="flex";const r=this.db.isFavorite(e,t,i),a=document.querySelector("#selection-bar .tool-btn:first-child");a.style.color=r?"var(--accent)":"var(--text-main)",r?a.innerHTML=l("heart-off"):a.innerHTML=l("heart"),this.refreshIcons()}}clearSelection(){if(this.selectedVerse){const i=document.getElementById(`v-${this.selectedVerse.vNum}`);i&&i.classList.remove("selected")}this.selectedVerse=null;const e=document.querySelector("#selection-bar");e&&(e.style.display="none");const t=document.querySelector("#highlight-bar");t&&(t.style.display="none")}handleFavorite(){if(!this.selectedVerse)return;const{book:e,chapter:t,vNum:i,text:s}=this.selectedVerse,o=this.db.toggleFavorite(e,t,i,s),r=document.getElementById(`v-${i}`);o?r.classList.add("favorite"):r.classList.remove("favorite"),this.clearSelection()}handleNote(){if(!this.selectedVerse)return;const{book:e,chapter:t,vNum:i}=this.selectedVerse,s=document.querySelector("#note-modal"),o=document.querySelector("#note-verse-ref"),r=document.querySelector("#note-title"),a=document.querySelector("#note-text");o.innerText=`${e} ${t}:${i}`,r&&(r.value=""),a.value="",s.classList.add("active"),r?r.focus():a.focus()}closeNoteModal(){document.querySelector("#note-modal").classList.remove("active"),this.clearSelection()}saveNoteFromModal(){if(!this.selectedVerse&&this.editingNoteIndex===void 0)return;const e=document.querySelector("#note-title"),t=document.querySelector("#note-text"),i=e?e.value.trim():"",s=t.value.trim();if(s){if(this.editingNoteIndex!==void 0)this.db.updateNote(this.editingNoteIndex,s,i),this.editingNoteIndex=void 0;else{const{book:o,chapter:r,vNum:a,text:c}=this.selectedVerse;this.db.addNote(o,r,a,c,s,i)}this.showToast("Nota guardada con éxito"),this.currentView==="notes"&&this.renderNotes(),this.currentView==="note-detail"&&this.renderNoteDetail(this.selectedNoteIndex)}this.closeNoteModal()}confirmDeleteNote(e){this.openConfirmModal("Eliminar Nota","¿Estás seguro de que quieres eliminar esta nota? Esta acción no se puede deshacer.",()=>{this.db.deleteNote(e),this.renderNotes()})}confirmDeleteFavorite(e){this.openConfirmModal("Eliminar Favorito","¿Estás seguro de que quieres eliminar este versículo de tus favoritos?",()=>{this.db.deleteFavorite(e),this.renderFavorites()})}openConfirmModal(e,t,i,s="Eliminar",o="#ef4444"){const r=document.querySelector("#confirm-modal"),a=document.querySelector("#confirm-title"),c=document.querySelector("#confirm-msg"),p=document.querySelector("#confirm-btn-ok");a.innerText=e,c.innerText=t,p.innerText=s,p.style.background=o,r.classList.add("active"),p.onclick=()=>{i(),this.closeConfirmModal()}}closeConfirmModal(){const e=document.querySelector("#confirm-modal");e&&e.classList.remove("active")}openEditNote(e){const t=this.db.notes[e];if(!t)return;this.editingNoteIndex=e;const i=document.querySelector("#note-modal"),s=document.querySelector("#note-verse-ref"),o=document.querySelector("#note-title"),r=document.querySelector("#note-text");s.innerText=`${t.book} ${t.chapter}:${t.verse}`,o&&(o.value=t.title||""),r.value=t.note,i.classList.add("active"),r.focus()}handleCopy(){if(!this.selectedVerse)return;const{book:e,chapter:t,vNum:i,text:s}=this.selectedVerse,o=`${e} ${t}:${i}
${s}`;navigator.clipboard.writeText(o).then(()=>{this.showToast("Texto copiado al portapapeles.")}),this.clearSelection()}handleVerseMenu(){this.selectedVerse&&this.showShareOptions()}async renderSettings(){this.currentView="settings";const e=`
      <header>
        <button class="btn-icon" onclick="window.app.navigate('home')">${l("chevron-left")}</button>
        <h1>Configuración</h1>
      </header>
      <div class="view-container animate-entrance">
        <div style="margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1.25rem; opacity: 0.6; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700;">Paleta de Colores (Estilo)</h3>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
            ${[{id:"classic",name:"Estilo Clásico",color:"#f4ece1"},{id:"floral",name:"Estilo Floral",color:"#fff5f7"},{id:"pastel-blue",name:"Estilo Pastel",color:"#ebf5ff"},{id:"forest",name:"Estilo Bosque",color:"#388e3c"},{id:"gold",name:"Estilo Oro",color:"#d4af37"},{id:"ink",name:"Modo Tinta",color:"#ffffff"}].map(t=>`
              <div class="premium-card" onclick="window.app.applyTheme('${t.id}')" 
                   style="padding: 1rem; flex-direction: row; gap: 0.75rem; border: ${this.db.settings.theme_style===t.id?"2px solid var(--accent)":"1px solid var(--glass-border)"}">
                <div class="color-preview" style="background: ${t.color}; border: 1px solid rgba(0,0,0,0.1)"></div>
                <span style="font-size: 0.85rem; font-weight: 600;">${t.name}</span>
              </div>
            `).join("")}
          </div>
          
          ${this.db.settings.theme_style!=="ink"?`
          <!-- Sincronización con el sistema -->
          <label class="premium-card" style="padding: 1.25rem; flex-direction: row; justify-content: space-between; align-items: center; cursor: pointer; display: flex !important;">
            <div style="display: flex; align-items: center; gap: 1rem;">
              <div style="color: var(--accent);">${l("refresh-cw")}</div>
              <div style="display: flex; flex-direction: column; text-align: left;">
                <span style="font-size: 0.9rem; font-weight: 700;">Sincronizar con el sistema</span>
                <span style="font-size: 0.8rem; opacity: 0.6;">Sigue el modo claro/oscuro de Android</span>
              </div>
            </div>
            <div class="switch">
              <input type="checkbox" ${this.db.settings.system_theme?"checked":""} onchange="window.app.toggleSystemTheme(this.checked)">
              <span class="slider round"></span>
            </div>
          </label>
          `:""}
        </div>

        <div style="margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1.25rem; opacity: 0.6; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700;">Lectura en Voz (Audio)</h3>
          
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <!-- Selector de Voz -->
            <div class="premium-card" onclick="window.app.openVoiceModal()" style="padding: 1.25rem; flex-direction: row; justify-content: space-between; align-items: center;">
              <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="color: var(--accent);">${l("user")}</div>
                <div style="display: flex; flex-direction: column;">
                  <span style="font-size: 0.9rem; font-weight: 700;">Voz Seleccionada</span>
                  <span style="font-size: 0.8rem; opacity: 0.6;">${this.db.settings.tts_voice_name||"Predeterminada"}</span>
                </div>
              </div>
              <div style="opacity: 0.4;">${l("chevron-right")}</div>
            </div>

            <!-- Toggle Números de Verso -->
            <label class="premium-card" style="padding: 1.25rem; flex-direction: row; justify-content: space-between; align-items: center; cursor: pointer; display: flex !important;">
              <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="color: var(--accent);">${l("hash")}</div>
                <div style="display: flex; flex-direction: column;">
                  <span style="font-size: 0.9rem; font-weight: 700;">Leer números de verso</span>
                  <span style="font-size: 0.8rem; opacity: 0.6;">Menciona "Verso X" antes del texto</span>
                </div>
              </div>
              <div class="switch">
                <input type="checkbox" ${this.db.settings.skip_verse_numbers?"":"checked"} onchange="window.app.toggleVerseNumbers(this.checked)">
                <span class="slider round"></span>
              </div>
            </label>
          </div>
        </div>

        <div style="margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1.25rem; opacity: 0.6; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700;">Actualizaciones</h3>
          <div class="premium-card" onclick="window.app.checkForUpdates()" style="padding: 1.25rem; flex-direction: row; justify-content: space-between; align-items: center;">
              <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="color: var(--accent);">${l("download-cloud")}</div>
                <div style="display: flex; flex-direction: column;">
                  <span style="font-size: 0.9rem; font-weight: 700;">Buscar Actualizaciones</span>
                  <span style="font-size: 0.8rem; opacity: 0.6;">Versión actual: v${this.appVersion}</span>
                </div>
              </div>
              <div style="opacity: 0.4;">${l("chevron-right")}</div>
          </div>
        </div>

        <div style="margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1.25rem; opacity: 0.6; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700;">Respaldo de Datos</h3>
          
          <div class="premium-card" onclick="window.app.exportUserData()" style="padding: 1.25rem; flex-direction: row; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <div style="display: flex; align-items: center; gap: 1rem;">
              <div style="color: var(--accent);">${l("download")}</div>
              <div style="display: flex; flex-direction: column;">
                <span style="font-size: 0.9rem; font-weight: 700;">Exportar Datos</span>
                <span style="font-size: 0.8rem; opacity: 0.6;">Guardar copia de seguridad (JSON)</span>
              </div>
            </div>
            <div style="opacity: 0.4;">${l("chevron-right")}</div>
          </div>
          
          <div class="premium-card" onclick="window.app.importUserData()" style="padding: 1.25rem; flex-direction: row; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 1rem;">
              <div style="color: var(--accent);">${l("upload")}</div>
              <div style="display: flex; flex-direction: column;">
                <span style="font-size: 0.9rem; font-weight: 700;">Importar Datos</span>
                <span style="font-size: 0.8rem; opacity: 0.6;">Restaurar desde archivo (JSON)</span>
              </div>
            </div>
            <div style="opacity: 0.4;">${l("chevron-right")}</div>
          </div>
        </div>
      </div>
    `;this.render(e)}toggleSystemTheme(e){this.db.settings.system_theme=e,this.db.saveSettings(),this.applyTheme()}toggleVerseNumbers(e){this.db.settings.skip_verse_numbers=!e,this.db.saveSettings(),this.renderSettings()}async checkForUpdates(e=!1){e||this.showToast("Buscando actualizaciones...");try{const t=await fetch(`https://api.github.com/repos/${this.repo}/releases/latest`);if(!t.ok)throw new Error("Error buscando versión");const i=await t.json(),s=i.tag_name.replace("v",""),o=this.appVersion;if(this.compareVersions(s,o)>0){const r=i.assets.find(a=>a.name.endsWith(".apk"));r?this.confirmUpdate(s,r.browser_download_url):e||this.showToast("Nueva versión detectada pero sin APK disponible.")}else e||this.showToast("Ya tienes la última versión.")}catch(t){console.error(t),e||this.showToast("Error al buscar actualizaciones.")}}compareVersions(e,t){const i=e.split(".").map(Number),s=t.split(".").map(Number);for(let o=0;o<Math.max(i.length,s.length);o++){const r=i[o]||0,a=s[o]||0;if(r>a)return 1;if(r<a)return-1}return 0}confirmUpdate(e,t){this.openConfirmModal("Actualización Disponible",`La versión v${e} está disponible. ¿Deseas descargarla e instalarla?`,()=>this.downloadAndInstall(t),"Descargar","var(--accent)")}async downloadAndInstall(e){this.showToast("Iniciando descarga en segundo plano..."),window.ApkUpdater?window.ApkUpdater.download(e,{onDownloadProgress:t=>{console.log(`Progreso: ${t.progress}%`)}},()=>{this.showToast("Descarga lista. Instalando..."),window.ApkUpdater.install()},t=>{console.error(t),this.showToast("Error: "+(t.message||"Fallo en descarga"))}):(alert("Plugin de actualización no activo. Abriendo navegador..."),window.open(e,"_blank"))}applyVoice(e,t){this.db.settings.tts_voice=e,this.db.settings.tts_voice_name=t,this.db.saveSettings(),this.closeVoiceModal(),this.renderSettings()}toggleFavoriteSelection(e){const i=document.querySelectorAll(".fav-card")[e];if(this.selectedFavoriteIndex===e)this.clearFavoriteSelection();else{this.clearFavoriteSelection(),this.selectedFavoriteIndex=e,i&&i.classList.add("selected");const s=document.querySelector("#fav-selection-bar");s&&(s.style.display="flex")}}clearFavoriteSelection(){if(this.selectedFavoriteIndex!==null){const i=document.querySelectorAll(".fav-card")[this.selectedFavoriteIndex];i&&i.classList.remove("selected")}this.selectedFavoriteIndex=null;const e=document.querySelector("#fav-selection-bar");e&&(e.style.display="none")}navigateToSelectedFavorite(){if(this.selectedFavoriteIndex===null)return;const e=this.db.favorites[this.selectedFavoriteIndex];e&&(this.clearFavoriteSelection(),window.pendingVerseScroll=e.verse,this.renderReader(e.book,e.chapter))}confirmDeleteFavoriteFromBar(){if(this.selectedFavoriteIndex===null)return;const e=this.selectedFavoriteIndex;this.openConfirmModal("Eliminar Favorito","¿Estás seguro de que quieres eliminar este versículo de tus favoritos?",()=>{this.db.deleteFavorite(e),this.clearFavoriteSelection(),this.renderFavorites()})}setupFavoriteSwipeEvents(){document.querySelectorAll(".fav-card").forEach((t,i)=>{let s=0,o=0,r=!1;const a=t.closest(".fav-swipe-container"),c=a?a.querySelector(".swipe-action-bg"):null;t.ontouchstart=p=>{s=p.touches[0].clientX,t.style.transition="none",r=!1},t.ontouchmove=p=>{const m=p.touches[0].clientX-s;if(!r&&m<-5&&(r=!0,a&&a.classList.add("is-swiping")),!!r&&(o=m,o>0&&(o=0),o<-200&&(o=-200+(o+200)*.2),t.style.transform=`translateX(${o}px)`,c)){const h=Math.min(Math.abs(o)/100,1);c.style.opacity=h,c.style.transform=`scale(${.8+h*.2})`}},t.ontouchend=p=>{r&&(r=!1,t.style.transition="transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)",c&&(c.style.transition="opacity 0.3s, transform 0.3s",c.style.opacity="0",c.style.transform="scale(0.8)"),o<-150?(this.selectedFavoriteIndex=i,this.confirmDeleteFavoriteFromBar(),t.style.transform="translateX(0)",setTimeout(()=>{a&&a.classList.remove("is-swiping")},300)):(t.style.transform="translateX(0)",setTimeout(()=>{a&&a.classList.remove("is-swiping")},300)),o=0)}})}renderFavorites(){this.currentView="favorites",this.selectedFavoriteIndex=null;const e=this.db.favorites,t=`
      <header>
        <button class="btn-icon" onclick="window.app.navigate('home')">${l("chevron-left")}</button>
        <h1>Favoritos</h1>
      </header>
      <div class="view-container animate-entrance">
        ${e.length===0?'<p style="text-align: center; opacity: 0.5;">No tienes favoritos aún.</p>':e.map((i,s)=>`
            <div class="premium-card fav-card fav-card-item" 
                 style="margin-bottom: 1.25rem; border-left: 4px solid var(--accent); align-items: flex-start; text-align: left;"
                 onclick="window.app.toggleFavoriteSelection(${s})"
                 ondblclick="window.pendingVerseScroll='${i.verse}'; window.app.renderReader('${i.book}', '${i.chapter}')">
              <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <div style="color: var(--accent); font-size: 0.95rem; font-weight: 700; cursor: pointer; padding: 0.5rem 0;"
                     onclick="event.stopPropagation(); window.pendingVerseScroll='${i.verse}'; window.app.renderReader('${i.book}', '${i.chapter}')">
                  ${i.book} ${i.chapter}:${i.verse}
                </div>
              </div>
              <div style="font-size: 1.05rem; line-height: 1.6; opacity: 0.9; text-align: left; width: 100%;">
                ${i.text}
              </div>
            </div>
          `).join("")}
      </div>
    `;this.render(t)}handleHighlight(){const e=document.querySelector("#highlight-bar");if(e&&(e.style.display=e.style.display==="flex"?"none":"flex",e.style.display==="flex"&&this.selectedVerse)){const{book:t,chapter:i,vNum:s}=this.selectedVerse,o=this.db.isHighlighted(t,i,s),r=e;if(Array.from(r.children).forEach(a=>a.style.border="1px solid #ccc"),o){const a=o.color;Array.from(r.children).forEach(c=>{c.dataset.color===a&&(c.style.border="3px solid var(--accent)")})}}}applyHighlight(e){if(!this.selectedVerse)return;const{book:t,chapter:i,vNum:s,text:o}=this.selectedVerse;e==="transparent"?this.db.removeHighlight(t,i,s):this.db.addHighlight(t,i,s,o,e);const r=document.getElementById(`v-${s}`);if(r){const a=r.querySelector(".verse-text");a&&(e==="transparent"?(a.style.backgroundColor="transparent",a.style.color="inherit",a.style.padding="0",a.style.borderRadius="0"):(a.style.backgroundColor=e,a.style.color="#333",a.style.padding="2px 4px",a.style.borderRadius="4px",a.style.boxDecorationBreak="clone",a.style.webkitBoxDecorationBreak="clone"))}this.clearSelection()}renderHighlights(){this.currentView="highlights";let e=this.db.highlights;this.currentHighlightFilter!=="all"&&(e=e.filter(s=>s.color===this.currentHighlightFilter));const t=["#fef3c7","#dcfce7","#dbeafe","#fae8ff","#fee2e2","#ffedd5","#f3f4f6"],i=`
      <header>
        <button class="btn-icon" onclick="window.app.navigate('home')">${l("chevron-left")}</button>
        <h1>Marcadores</h1>
      </header>
      <div class="view-container animate-entrance">
        <!-- Barra de filtros -->
        <div style="display: flex; gap: 0.5rem; overflow-x: auto; padding: 0 0 1.5rem 0; margin-bottom: 0.5rem; scrollbar-width: none;">
          <button onclick="window.app.applyHighlightFilter('all')" 
                  style="flex-shrink: 0; padding: 0.5rem 1rem; border-radius: 20px; border: 1px solid ${this.currentHighlightFilter==="all"?"var(--accent)":"var(--glass-border)"}; 
                         background: ${this.currentHighlightFilter==="all"?"var(--accent)":"var(--card-bg)"}; 
                         color: ${this.currentHighlightFilter==="all"?"white":"var(--text-main)"}; font-size: 0.85rem; font-weight: 600;">
            Todos
          </button>
          ${t.map(s=>`
            <button onclick="window.app.applyHighlightFilter('${s}')" 
                    style="flex-shrink: 0; width: 34px; height: 34px; border-radius: 50%; background: ${s}; 
                           border: ${this.currentHighlightFilter===s?"3px solid var(--accent)":"1px solid #ccc"}; padding: 0;">
            </button>
          `).join("")}
        </div>

        ${e.length===0?`
          <div style="text-align: center; padding: 3rem 1rem; opacity: 0.5;">
            ${l("highlighter")}
            <p style="margin-top: 1rem;">No hay marcadores ${this.currentHighlightFilter==="all"?"":"de este color"}.</p>
          </div>
        `:e.map((s,o)=>{const r=this.db.highlights.findIndex(a=>a===s);return`
            <div class="premium-card highlight-card" data-index="${r}" style="margin-bottom: 1rem; border-left: 8px solid ${s.color};" onclick="window.app.toggleHighlightSelection(${r})">
                <div style="flex: 1;">
                     <div style="color: var(--accent); font-size: 0.9rem; font-weight: 700; margin-bottom: 0.25rem;">
                        ${s.book} ${s.chapter}:${s.verse}
                     </div>
                     <div style="font-size: 1rem; opacity: 0.9;">${s.text}</div>
                </div>
            </div>
          `}).join("")}
      </div>
      <!-- Barra flotante para marcadores -->
      <div id="highlight-selection-bar" class="floating-toolbar animate-entrance" style="display: none;">
          <button class="tool-btn" onclick="window.app.confirmDeleteHighlightFromBar()" title="Eliminar Marcador"
              style="color: #ef4444;">
              ${l("trash-2")}
          </button>
          <button class="tool-btn" onclick="window.app.navigateToSelectedHighlight()" title="Ir al Versículo"
              style="color: var(--accent);">
              ${l("external-link")}
          </button>
          <button class="tool-btn" onclick="window.app.clearHighlightSelection()" title="Cerrar">
              ${l("x")}
          </button>
      </div>
    `;this.render(i)}applyHighlightFilter(e){this.currentHighlightFilter=e,this.clearHighlightSelection(),this.renderHighlights()}toggleHighlightSelection(e){const t=document.querySelector(`.highlight-card[data-index="${e}"]`);if(this.selectedHighlightIndex===e)this.clearHighlightSelection();else{this.clearHighlightSelection(),this.selectedHighlightIndex=e,t&&t.classList.add("selected");const i=document.querySelector("#highlight-selection-bar");i&&(i.style.display="flex")}}clearHighlightSelection(){if(this.selectedHighlightIndex!==null){const t=document.querySelector(`.highlight-card[data-index="${this.selectedHighlightIndex}"]`);t&&t.classList.remove("selected")}this.selectedHighlightIndex=null;const e=document.querySelector("#highlight-selection-bar");e&&(e.style.display="none")}navigateToSelectedHighlight(){if(this.selectedHighlightIndex===null)return;const e=this.db.highlights[this.selectedHighlightIndex];e&&(this.clearHighlightSelection(),window.pendingVerseScroll=e.verse,this.renderReader(e.book,e.chapter))}confirmDeleteHighlightFromBar(){if(this.selectedHighlightIndex===null)return;const e=this.selectedHighlightIndex;this.openConfirmModal("Eliminar Marcador","¿Quieres eliminar este marcador?",()=>{this.db.deleteHighlight(e),this.clearHighlightSelection(),this.renderHighlights()})}confirmDeleteHighlight(e){this.openConfirmModal("Eliminar Marcador","¿Quieres eliminar este marcador?",()=>{this.db.deleteHighlight(e),this.renderHighlights()})}toggleNotesSort(){this.notesSortOrder=this.notesSortOrder==="desc"?"asc":"desc",this.renderNotes()}renderNotes(){this.currentView="notes",this.selectedNoteIndex=null;const e=this.db.notes.map((i,s)=>({...i,originalIndex:s})).sort((i,s)=>{const o=new Date(i.date),r=new Date(s.date);return this.notesSortOrder==="desc"?r-o:o-r}),t=`
      <header>
        <button class="btn-icon" onclick="window.app.navigate('home')">${l("chevron-left")}</button>
        <h1 style="flex-grow: 1;">Mis Notas</h1>
        <button class="btn-icon" onclick="window.app.toggleNotesSort()" title="Ordenar por fecha">
          ${l(this.notesSortOrder==="desc"?"sort-desc":"sort-asc")}
        </button>
      </header>
      <div class="view-container animate-entrance">
        ${e.length===0?'<p style="text-align: center; opacity: 0.5; margin-top: 2rem;">No tienes notas aún.</p>':e.map(i=>`
            <div class="premium-card note-card" style="margin-bottom: 1rem; flex-direction: row; justify-content: space-between; align-items: center; padding: 1.25rem;"
                 onclick="window.app.renderNoteDetail(${i.originalIndex})">
              <div style="display: flex; flex-direction: column; gap: 0.25rem; text-align: left;">
                <span style="font-weight: 700; font-size: 1.05rem;">${i.title||"Nota sin nombre"}</span>
                <span style="font-size: 0.8rem; opacity: 0.5;">${new Date(i.date).toLocaleDateString()}</span>
              </div>
              <div style="color: var(--accent); opacity: 0.4;">${l("chevron-right")}</div>
            </div>
          `).join("")}
      </div>
    `;this.render(t)}renderNoteDetail(e){this.currentView="note-detail",this.selectedNoteIndex=e;const t=this.db.notes[e];if(!t)return this.renderNotes();const i=`
      <header>
        <button class="btn-icon" onclick="window.app.renderNotes()">${l("chevron-left")}</button>
        <h1 style="flex-grow: 1;">Editar Nota</h1>
        <div style="display: flex; gap: 0.25rem;">
          <button class="btn-icon" onclick="window.app.saveNoteFromDetail(${e})" title="Guardar" style="color: var(--accent);">
            ${l("check")}
          </button>
          <button class="btn-icon" onclick="window.app.confirmDeleteNote(${e})" title="Eliminar" style="color: #ef4444;">
            ${l("trash-2")}
          </button>
        </div>
      </header>
      <div class="view-container animate-entrance" style="padding-bottom: 2rem;">
        <div class="premium-card" style="margin-bottom: 1.5rem; align-items: flex-start; text-align: left; background: var(--card-bg); border-left: 4px solid var(--accent);">
            <div style="color: var(--accent); font-size: 0.9rem; font-weight: 700; margin-bottom: 0.5rem;">
                ${t.book} ${t.chapter}:${t.verse}
            </div>
            <div style="font-size: 1rem; opacity: 0.7; font-style: italic; line-height: 1.5;">"${t.text}"</div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div>
                <p style="font-size: 0.8rem; opacity: 0.6; margin-bottom: 0.5rem; font-weight: 600; text-transform: uppercase;">Título</p>
                <input type="text" id="detail-note-title" class="search-box" style="width: 100%; border-radius: 12px; margin-bottom: 0;" placeholder="Título de la nota..." value="${t.title||""}">
            </div>
            <div>
                <p style="font-size: 0.8rem; opacity: 0.6; margin-bottom: 0.5rem; font-weight: 600; text-transform: uppercase;">Contenido de la nota</p>
                <textarea id="detail-note-text" class="modal-textarea" style="min-height: 250px; border-radius: 16px; padding: 1.25rem;" placeholder="Escribe aquí tu nota...">${t.note}</textarea>
            </div>
        </div>
        
        <div style="margin-top: 1.5rem; text-align: right; opacity: 0.4; font-size: 0.8rem;">
            Creado el ${new Date(t.date).toLocaleString()}
        </div>
      </div>
    `;this.render(i)}saveNoteFromDetail(e){const t=document.querySelector("#detail-note-title"),i=document.querySelector("#detail-note-text"),s=t.value.trim(),o=i.value.trim();o?(this.db.updateNote(e,o,s),this.showToast("Nota guardada con éxito"),this.renderNotes()):this.showToast("La nota no puede estar vacía")}renderSearch(e=""){this.currentView="search";const t=`
      <header>
        <button class="btn-icon" onclick="window.app.navigate('home')">${l("chevron-left")}</button>
        <h1>Buscador</h1>
      </header>
      <div class="view-container animate-entrance">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
          <input type="text" id="search-input" placeholder="¿Qué estás buscando?..." class="search-box" style="flex: 1; margin-bottom: 0;" value="${e}">
          <button class="btn-icon" onclick="window.app.openSearchBookModal()" 
                  style="background: var(--card-bg); border: 1px solid var(--glass-border); border-radius: 14px; width: 50px; height: 50px; flex-shrink: 0; position: relative; display: flex; align-items: center; justify-content: center; color: var(--text-main);">
            ${l("filter")}
            ${this.searchBook?'<div style="position: absolute; top: 8px; right: 8px; background: var(--accent); width: 10px; height: 10px; border-radius: 50%; border: 2px solid var(--bg-color);"></div>':""}
          </button>
        </div>
        ${this.searchBook?`
          <div style="margin-top: -1rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; opacity: 0.8;">
            <span style="color: var(--accent); font-weight: 700;">Filtrado por:</span> ${this.searchBook}
            <button onclick="window.app.setSearchFilter('all')" style="background: none; border: none; color: #ef4444; font-size: 0.75rem; text-decoration: underline; padding: 0; cursor: pointer;">Limpiar</button>
          </div>
        `:""}
        <div id="search-results">
        </div>
      </div>

      <!-- Modal de Selección de Libro para Búsqueda -->
      <div id="search-book-modal" class="modal-overlay">
        <div class="modal-box" style="padding: 1.5rem; display: flex; flex-direction: column; max-height: 85vh;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <h3 class="modal-title" style="font-size: 1.2rem; margin-bottom: 0;">Filtrar por Libro</h3>
            <button class="btn-icon" onclick="window.app.closeSearchBookModal()" style="color: var(--text-main); opacity: 0.6;">${l("x")}</button>
          </div>
          <p class="modal-subtitle" style="margin-bottom: 1rem;">Selecciona el libro para filtrar la búsqueda</p>
          
          <div style="display: flex; flex-direction: column; gap: 0.5rem; overflow-y: auto; flex: 1; padding-right: 0.5rem;">
            <!-- Opción para buscar en todo -->
            <div class="premium-card" onclick="window.app.setSearchFilter('all')" 
                 style="padding: 1rem; flex-direction: row; justify-content: center; background: var(--accent-soft); border: 1px dashed var(--accent); min-height: auto; flex-shrink: 0;">
              <span style="font-weight: 700; color: var(--accent);">Buscar en Todo</span>
            </div>

            ${this.db.getBooks().map(s=>`
              <div class="premium-card" onclick="window.app.selectSearchBook('${s.replace(/'/g,"\\'")}')" 
                   style="padding: 1rem; flex-direction: row; justify-content: space-between; min-height: auto; flex-shrink: 0;">
                <span style="font-weight: 600; text-align: left;">${s}</span>
                <div style="color: var(--accent); opacity: 0.5;">${l("chevron-right")}</div>
              </div>
            `).join("")}
          </div>
          <button class="modal-btn secondary" style="width: 100%; margin-top: 1.25rem;" onclick="window.app.closeSearchBookModal()">Cancelar</button>
        </div>
      </div>
    `;this.render(t);const i=document.querySelector("#search-input");i.addEventListener("input",s=>{const o=s.target.value;o.length>2?this.performSearch(o):o.length===0&&(document.querySelector("#search-results").innerHTML="")}),e&&(this.performSearch(e),i.setSelectionRange(e.length,e.length)),i.focus()}setSearchFilter(e){const t=document.querySelector("#search-input")?.value||"";this.searchFilter=e,e==="book"?this.openSearchBookModal():(this.searchBook=null,this.renderSearch(t))}openSearchBookModal(){const e=document.querySelector("#search-book-modal");e&&e.classList.add("active")}closeSearchBookModal(){const e=document.querySelector("#search-book-modal");e&&e.classList.remove("active")}selectSearchBook(e){const t=document.querySelector("#search-input")?.value||"";this.searchBook=e,this.searchFilter="book",this.closeSearchBookModal(),this.renderSearch(t)}performSearch(e){let t=this.db.search(e);this.searchFilter==="book"&&this.searchBook&&(t=t.filter(s=>s.book===this.searchBook));const i=document.querySelector("#search-results");i.innerHTML=`
      <p style="margin-bottom: 1.25rem; opacity: 0.5; font-size: 0.9rem;">${t.length} coincidencias encontradas</p>
      ${t.map(s=>`
        <div class="premium-card" style="margin-bottom: 1rem; align-items: flex-start; text-align: left;" 
             onclick="window.pendingVerseScroll = '${s.vNum}'; window.app.renderReader('${s.book}', '${s.chapter}')">
          <div style="color: var(--accent); font-size: 0.85rem; margin-bottom: 0.4rem; font-weight: 700;">${s.book} ${s.chapter}:${s.vNum}</div>
          <div style="font-size: 1rem; line-height: 1.5;">${s.text}</div>
        </div>
      `).join("")}
    `}renderDictionary(){this.currentView="dict";const e=`
      <header>
        <button class="btn-icon" onclick="window.app.navigate('home')">${l("chevron-left")}</button>
        <h1>Diccionario</h1>
      </header>
      <div class="view-container animate-entrance">
        <div style="position: relative; margin-bottom: 1.5rem;">
          <input type="text" id="dict-input" placeholder="¿Qué término buscas?..." class="search-box" style="margin-bottom: 0;">
          <button id="clear-dict" style="position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); background: none; border: none; color: var(--accent); cursor: pointer; display: none;">
            ${l("x-circle")}
          </button>
        </div>
        <div id="dict-results">
            <div style="text-align: center; opacity: 0.5; margin-top: 3rem;">
                ${l("book-a")}
                <p style="margin-top: 1rem;">Busca palabras bíblicas y significados</p>
            </div>
        </div>
      </div>
    `;this.render(e);const t=document.querySelector("#dict-input"),i=document.querySelector("#clear-dict");t.addEventListener("input",s=>{this.performDictSearch(s.target.value),i.style.display=s.target.value?"block":"none"}),i.addEventListener("click",()=>{t.value="",i.style.display="none",this.performDictSearch("")})}performDictSearch(e){const t=document.querySelector("#dict-results");if(!e){t.innerHTML=`
            <div style="text-align: center; opacity: 0.5; margin-top: 3rem;">
                ${l("book-a")}
                <p style="margin-top: 1rem;">Busca palabras bíblicas y significados</p>
            </div>
        `;return}const i=this.db.searchDictionary(e);t.innerHTML=`
      <p style="margin-bottom: 1rem; opacity: 0.5; font-size: 0.85rem;">${i.length} definiciones encontradas</p>
      ${i.map(s=>`
        <div class="premium-card animate-entrance" style="margin-bottom: 1.25rem; align-items: flex-start; text-align: left; padding: 1.5rem; background: var(--bg-color); border-color: var(--accent-soft);">
          <h3 style="color: var(--accent); margin-bottom: 0.75rem; font-size: 1.2rem; font-family: 'Playfair Display', serif;">${s.term}</h3>
          <p style="font-size: 1rem; line-height: 1.7; color: var(--text-main); font-weight: 400;">${s.definition}</p>
        </div>
      `).join("")}
    `}renderAbout(){this.currentView="about";const e=`
      <header>
        <button class="btn-icon" onclick="window.app.navigate('home')">${l("chevron-left")}</button>
        <h1>Acerca de</h1>
      </header>
      <div class="view-container animate-entrance" style="text-align: center; display: flex; flex-direction: column; gap: 1.5rem; padding-top: 2rem;">
        <div style="margin: 0 auto; width: 100px; height: 100px; position: relative;">
          <img src="/icon.png" alt="Logo" style="width: 100%; height: 100%; object-fit: contain; border-radius: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.15); border: 3px solid var(--accent-soft);">
        </div>
        
        <div>
          <h2 style="font-size: 1.8rem; margin-bottom: 0.25rem; color: var(--text-main);">Biblia Cristiana</h2>
          <p style="opacity: 0.5; font-weight: 600; letter-spacing: 1px; font-size: 0.8rem;">REINA VALERA 1960</p>
        </div>

        <div class="premium-card" style="background: var(--accent-soft); border-color: var(--accent); padding: 1.25rem;">
          <p style="font-style: italic; font-size: 1.1rem; line-height: 1.6; font-family: 'Playfair Display', serif;">
            "Lámpara es a mis pies tu palabra, y lumbrera a mi camino."
          </p>
          <p style="margin-top: 0.75rem; color: var(--accent); font-weight: 800; font-size: 0.85rem;">SALMOS 119:105</p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1.25rem;">
          <div style="display: flex; flex-direction: column; gap: 0.75rem; align-items: center;">
            <p style="font-size: 0.95rem; opacity: 0.8;">Desarrollado por <b style="color: var(--text-main);">Life Code Studios</b></p>
            <p style="font-size: 0.85rem; opacity: 0.6; margin-top: -0.5rem;">Developer: <span onclick="window.app.handleAboutClick()" style="cursor: pointer; color: var(--accent); font-weight: 700;">krafairus</span></p>
            
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center; margin-top: 0.5rem;">
              <a href="https://www.facebook.com/profile.php?id=61587882503975" target="_blank" class="about-action-btn" style="background: #1877F2; color: white; border: none;">
                ${l("facebook")} Facebook
              </a>
              <a href="https://github.com/krafairus/biblia-cristiana-rv1960-app" target="_blank" class="about-action-btn">
                ${l("github")} GitHub
              </a>
            </div>
          </div>

          <div style="height: 1px; background: var(--glass-border); width: 40%; margin: 0.5rem auto;"></div>

          <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">
            <p style="opacity: 0.6; font-size: 0.85rem;">Dedicada a la congregación:</p>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.75rem;">
                <img src="/img/logo-congregacion.png" alt="" onerror="this.style.display='none'" style="max-height: 80px; width: auto; border-radius: 12px;">
                <h3 style="color: var(--accent); font-size: 1.2rem;">Sembradores de luz y esperanza</h3>
            </div>
            <a href="https://www.facebook.com/p/Sembradores-de-luz-y-esperanza-100079821227480/" target="_blank" class="about-action-btn" style="background: #1877F2; color: white;">
              ${l("facebook")} Ir a Facebook
            </a>
          </div>
          
          <p style="font-size: 0.95rem; opacity: 0.8; padding: 0.5rem 1.5rem; line-height: 1.6; font-style: italic;">
            Y para todo aquel que busque en las Escrituras el camino hacia la verdad y la vida eterna.
          </p>

          <!-- Donaciones -->
          <div style="margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, rgba(41, 171, 224, 0.1), rgba(255, 94, 94, 0.1)); border-radius: 16px; border: 1px solid var(--glass-border); text-align: center;">
              <h4 style="color: var(--accent); margin-bottom: 0.5rem;">Apoya este proyecto</h4>
              <p style="font-size: 0.9rem; opacity: 0.8; margin-bottom: 1rem;">Tu donación nos ayuda a seguir mejorando y creando más herramientas gratuitas.</p>
              <a href="https://ko-fi.com/lifecodestudios/goal?g=0" target="_blank" class="btn-primary" style="background: #29abe0; color: white; display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none; justify-content: center; width: auto; padding: 0.75rem 1.5rem; border-radius: 12px;">
                  ${l("coffee")} Donar en Ko-fi
              </a>
          </div>

          <div style="margin-top: 2rem; padding: 1.5rem; background: var(--card-bg); border-radius: 16px; font-size: 0.85rem; text-align: left; border: 1px solid var(--glass-border);">
            <h4 style="color: var(--accent); margin-bottom: 0.5rem;">Licencia y Garantía</h4>
            <p style="opacity: 0.7; margin-bottom: 0.75rem;">Esta aplicación se distribuye bajo la <b>Licencia Pública General de GNU v3.0 (GPLv3)</b>.</p>
            <p style="opacity: 0.7; margin-bottom: 0.75rem;">Esto garantiza que el software sea siempre libre y de código abierto, incluso en sus versiones derivadas.</p>
            <p style="opacity: 0.6; font-size: 0.8rem; line-height: 1.4;">
                EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO. 
                Creado sin fines de lucro para apoyar a la comunidad cristiana y facilitar el acceso a la Palabra de Dios. 
            </p>
          </div>
        </div>

        <p style="font-size: 0.8rem; opacity: 0.3; margin-top: 1rem;">VERSIÓN ${this.appVersion}</p>
      </div>
    `;this.render(e)}async renderVerseOfDay(){this.currentView="vod";const e=`
      <header>
        <button class="btn-icon" onclick="window.app.navigate('home')">${l("chevron-left")}</button>
        <h1 style="flex-grow: 1;">Versículo del Día</h1>
        <button class="btn-icon" onclick="window.app.navigateToCurrentVod()" title="Ir a la ubicación del versículo" style="color: var(--accent);">
          ${l("map-pin")}
        </button>
      </header>
      <div class="view-container animate-entrance" style="display: flex; flex-direction: column; gap: 1.5rem; align-items: center;">
        <div id="vod-card" class="premium-card" style="width: 100%; min-height: 300px; justify-content: center; background-size: cover; background-position: center; color: white; text-shadow: 0 2px 10px rgba(0,0,0,0.5); padding: 2.5rem; position: relative; border: none;">
            <div style="position: absolute; top:0; left:0; right:0; bottom:0; background: rgba(0,0,0,0.3); z-index: 1; border-radius: var(--radius);"></div>
            <div id="vod-content" style="z-index: 2; position: relative;">
                <p style="font-size: 1.25rem; font-style: italic; line-height: 1.6; margin-bottom: 1.5rem; font-family: 'Playfair Display', serif;">Cargando versículo...</p>
                <div style="font-weight: 700; color: var(--accent); font-size: 0.9rem;">REINA VALERA 1960</div>
            </div>
        </div>

        <div style="width: 100%;">
          <p style="font-size: 0.8rem; opacity: 0.6; margin-bottom: 0.75rem; font-weight: 600; text-transform: uppercase;">Seleccionar Fondo</p>
          <div id="bg-selector" style="display: flex; overflow-x: auto; gap: 0.75rem; padding-bottom: 0.5rem; scrollbar-width: none;">
            ${[1,2,3,4,5,6,7,8,9,10,11].map(t=>`
              <div class="bg-thumb" onclick="window.app.changeVodBg(${t})" 
                   style="min-width: 60px; height: 60px; border-radius: 12px; background-image: url('/img/bg-verse-${t}.png'); background-size: cover; border: 2px solid var(--glass-border); flex-shrink: 0;">
              </div>
            `).join("")}
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; width: 100%;">
            <button class="premium-card" onclick="window.app.handleCopyVod()" style="flex-direction: row; gap: 0.5rem; padding: 1rem; border: 1px solid var(--accent); color: var(--text-main);">
                ${l("copy")} Copiar
            </button>
            <button class="premium-card" onclick="window.app.showShareOptions()" style="flex-direction: row; gap: 0.5rem; padding: 1rem; background: var(--accent); color: white; border: none;">
                ${l("share-2")} Compartir
            </button>
        </div>
      </div>
    `;this.render(e),this.loadDailyVerse()}renderShareVerse(e){this.currentView="share-verse",this.currentVod=e;const t=`
      <header>
        <button class="btn-icon" onclick="window.pendingVerseScroll='${e.vNum}'; window.app.renderReader('${e.book}', '${e.chapter}')">${l("chevron-left")}</button>
        <h1>Compartir</h1>
      </header>
      <div class="view-container animate-entrance" style="display: flex; flex-direction: column; gap: 1.5rem; align-items: center;">
        <div id="vod-card" class="premium-card" style="width: 100%; min-height: 300px; justify-content: center; background-size: cover; background-position: center; color: white; text-shadow: 0 2px 10px rgba(0,0,0,0.5); padding: 2.5rem; position: relative; border: none;">
            <div style="position: absolute; top:0; left:0; right:0; bottom:0; background: rgba(0,0,0,0.3); z-index: 1; border-radius: var(--radius);"></div>
            <div id="vod-content" style="z-index: 2; position: relative;">
                 <p style="font-size: 1.4rem; font-style: italic; line-height: 1.6; margin-bottom: 1.5rem; font-family: 'Playfair Display', serif;">
                    "${e.text}"
                </p>
                <div style="font-weight: 700; color: #fff; font-size: 1.1rem; margin-bottom: 0.25rem;">${e.ref}</div>
                <div style="font-weight: 700; color: var(--accent); font-size: 0.8rem; letter-spacing: 1px;">REINA VALERA 1960</div>
            </div>
        </div>

        <div style="width: 100%;">
          <p style="font-size: 0.8rem; opacity: 0.6; margin-bottom: 0.75rem; font-weight: 600; text-transform: uppercase;">Seleccionar Fondo</p>
          <div id="bg-selector" style="display: flex; overflow-x: auto; gap: 0.75rem; padding-bottom: 0.5rem; scrollbar-width: none;">
            ${[1,2,3,4,5,6,7,8,9,10,11].map(i=>`
              <div class="bg-thumb" onclick="window.app.changeVodBg(${i})" 
                   style="min-width: 60px; height: 60px; border-radius: 12px; background-image: url('/img/bg-verse-${i}.png'); background-size: cover; border: 2px solid var(--glass-border); flex-shrink: 0;">
              </div>
            `).join("")}
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr; gap: 1rem; width: 100%;">
            <button class="premium-card" onclick="window.app.showShareOptions()" style="flex-direction: row; gap: 0.5rem; padding: 1.25rem; background: var(--accent); color: white; border: none;">
                ${l("share-2")} Compartir Imagen
            </button>
        </div>
      </div>
    `;this.render(t),this.changeVodBg(1)}changeVodBg(e){this.currentVodBg=`/img/bg-verse-${e}.png`;const t=document.querySelector("#vod-card");t&&(t.style.backgroundImage=`url('${this.currentVodBg}')`),document.querySelectorAll(".bg-thumb").forEach((i,s)=>{i.style.borderColor=s+1===e?"var(--accent)":"var(--glass-border)"})}handleCopyVod(){if(!this.currentVod)return;const e=`"${this.currentVod.text}" - ${this.currentVod.ref}

Enviado desde Biblia Cristiana RV 1960`;navigator.clipboard.writeText(e).then(()=>this.showToast("Copiado al portapapeles"))}showShareOptions(){const e=document.querySelector("#share-modal");if(!e)return;const t=document.querySelector("#share-modal-img-text"),i=document.querySelector("#share-modal-txt-text"),s=document.querySelector("#share-modal-txt-icon");this.currentView==="reader"?(t&&(t.innerText="Compartir Imagen"),i&&(i.innerText="Copiar Texto"),s&&s.setAttribute("data-lucide","copy")):(t&&(t.innerText="Compartir Imagen"),i&&(i.innerText="Compartir como Texto"),s&&s.setAttribute("data-lucide","share-2")),this.refreshIcons(),e.classList.add("active")}closeShareModal(){const e=document.querySelector("#share-modal");e&&e.classList.remove("active")}async loadDailyVerse(){try{const e=this.db.getVerseOfDay();if(!e)throw new Error("No Bible data");this.currentVod={text:e.text,ref:`${e.book} ${e.chapter}:${e.verse}`,thematic:e.thematic,book:e.book,chapter:e.chapter,verse:e.verse},this.updateVodUI()}catch(e){console.error("Error loading VOD:",e);const t=document.querySelector("#vod-content p");t&&(t.innerText="No se pudo cargar el versículo.")}}navigateToCurrentVod(){if(!this.currentVod||!this.currentVod.book)return;const{book:e,chapter:t,verse:i}=this.currentVod;this.openConfirmModal("Ir al Versículo",`¿Deseas ir a la ubicación de este versículo en ${e} ${t}:${i}?`,()=>{window.pendingVerseScroll=i,this.renderReader(e,t)},"Ir","var(--accent)")}updateVodUI(){const e=document.querySelector("#vod-card"),t=document.querySelector("#vod-content");!e||!t||(e.style.backgroundImage=`url('${this.currentVodBg}')`,t.innerHTML=`
      <div style="font-weight: 800; letter-spacing: 2px; text-transform: uppercase; font-size: 0.8rem; margin-bottom: 0.5rem; opacity: 0.9;">${this.currentVod.thematic||""}</div>
      <p style="font-size: 1.4rem; font-style: italic; line-height: 1.6; margin-bottom: 1.5rem; font-family: 'Playfair Display', serif;">
        "${this.currentVod.text}"
      </p>
      <div style="font-weight: 700; color: #fff; font-size: 1.1rem; margin-bottom: 0.25rem;">${this.currentVod.ref}</div>
      <div style="font-weight: 700; color: var(--accent); font-size: 0.8rem; letter-spacing: 1px;">REINA VALERA 1960</div>
    `)}async generateVerseCanvas(){return new Promise((e,t)=>{const i=document.createElement("canvas");i.width=1080,i.height=1080;const s=i.getContext("2d"),o=new Image;o.src=window.location.origin+this.currentVodBg,o.crossOrigin="anonymous",o.onload=()=>{try{s.drawImage(o,0,0,1080,1080),s.fillStyle="rgba(0,0,0,0.45)",s.fillRect(0,0,1080,1080),s.fillStyle="white",s.textAlign="center",s.textBaseline="middle";const r=54;s.font=`italic ${r}px serif`,document.fonts.check(`italic ${r}px "Playfair Display"`)&&(s.font=`italic ${r}px "Playfair Display", serif`);const a=`"${this.currentVod.text}"`.split(" ");let c="",p=[];const m=860;for(let d=0;d<a.length;d++){let u=c+a[d]+" ";s.measureText(u).width>m&&d>0?(p.push(c),c=a[d]+" "):c=u}p.push(c);let h=540-p.length*r*1.3/2;p.forEach((d,u)=>{s.fillText(d.trim(),540,h+u*r*1.3)}),s.fillStyle="#c29958",s.font="bold 48px sans-serif",s.fillText(this.currentVod.ref.toUpperCase(),540,h+p.length*r*1.3+80),s.fillStyle="rgba(255,255,255,0.6)",s.font="30px sans-serif",s.fillText("BIBLIA CRISTIANA RV1960",540,1020),e(i)}catch(r){t(r)}},o.onerror=()=>t(new Error("Error al cargar el fondo"))})}async shareVerse(e){if(this.closeShareModal(),this.currentView==="reader"&&this.selectedVerse){if(e==="image"){const i=this.selectedVerse;this.renderShareVerse({text:i.text,ref:`${i.book} ${i.chapter}:${i.vNum}`,book:i.book,chapter:i.chapter,vNum:i.vNum});return}else if(e==="text"){this.handleCopy();return}}if(!this.currentVod)return;const t=`"${this.currentVod.text}" 

- ${this.currentVod.ref}
Enviado desde Biblia Cristiana RV 1960`;if(e==="text"){const i={title:"Compartir Versículo",text:t},s=window.Capacitor;if(s&&s.Plugins&&s.Plugins.Share)try{await s.Plugins.Share.share({title:"Compartir Versículo",text:t});return}catch(r){console.error("Capacitor share error:",r)}const o=await this.canShareData(i);if(o)try{await navigator.share(o)}catch(r){r.name!=="AbortError"&&this.handleCopyVod()}else this.handleCopyVod()}else if(e==="image"){this.showToast("Preparando imagen...");try{const i=await this.generateVerseCanvas(),s=i.toDataURL("image/jpeg",.9).split(",")[1],o=window.Capacitor;if(o&&o.Plugins&&o.Plugins.Filesystem&&o.Plugins.Share){const r=o.Plugins.Filesystem,a=o.Plugins.Share,c=await r.writeFile({path:"temp_share.jpg",data:s,directory:"CACHE"});await a.share({title:"Compartir Versículo",text:t,url:c.uri,dialogTitle:"Compartir Imagen"})}else this.fallbackDownload(i)}catch(i){console.error("Share error:",i),this.showToast("Error al compartir imagen.")}}}async saveImageDirectly(){if(this.closeShareModal(),!!this.currentVod){this.showToast("Preparando guardado...");try{const e=await this.generateVerseCanvas(),t=e.toDataURL("image/jpeg",.9).split(",")[1],i=window.Capacitor;if(i&&i.Plugins&&i.Plugins.Filesystem){const s=i.Plugins.Filesystem;(await s.checkPermissions()).publicStorage!=="granted"&&await s.requestPermissions();const r=await s.writeFile({path:"temp_save.jpg",data:t,directory:"CACHE"});i.Plugins.Share?(await i.Plugins.Share.share({title:"Guardar Versículo",url:r.uri,dialogTitle:"Guardar Versículo como..."}),this.showToast("Cargando opciones de guardado...")):this.fallbackDownload(e)}else this.fallbackDownload(e)}catch(e){console.error("Save error:",e),this.showToast("Error al procesar la imagen.")}}}fallbackDownload(e){e.toBlob(t=>{const i=URL.createObjectURL(t),s=document.createElement("a"),o=new Date().getTime();s.download=`bendicion_${o}.jpg`,s.href=i,document.body.appendChild(s),s.click(),document.body.removeChild(s),this.showToast("Intento de descarga iniciado..."),setTimeout(()=>URL.revokeObjectURL(i),5e3)},"image/jpeg",.9)}handleAboutClick(){this.aboutClickCount++,this.aboutClickCount>=5&&(this.aboutClickCount=0,this.openLoveModal()),clearTimeout(this.aboutClickTimeout),this.aboutClickTimeout=setTimeout(()=>{this.aboutClickCount=0},2e3)}openLoveModal(){const e=document.querySelector("#love-modal");e&&e.classList.add("active")}closeLoveModal(){const e=document.querySelector("#love-modal");e&&e.classList.remove("active")}async toggleTTS(e,t){if(this.isSpeaking){this.isPaused?this.resumeTTS():this.pauseTTS();return}this.stopTTS();const i=this.db.getVerses(e,t);!i||i.length===0||(this.currentChapterVerses=[],this.currentChapterVerses.push({text:`${e}, capítulo ${t}.`,vNum:null,type:"title"}),i.forEach(([s,o])=>{const r=this.db.getPericope(e,t,s);r&&this.currentChapterVerses.push({text:r+".",vNum:null,type:"pericope"});let a=o;this.db.settings.skip_verse_numbers||(a=`Verso ${s}. ${o}`),this.currentChapterVerses.push({text:a,vNum:s,type:"verse"})}),this.currentVerseIndex=0,this.isSpeaking=!0,this.isPaused=!1,this.updateTTSButton(),this.playNextChunk())}async playNextChunk(){if(!this.isSpeaking||this.isPaused)return;if(this.currentVerseIndex>=this.currentChapterVerses.length){this.stopTTS();return}const e=this.currentChapterVerses[this.currentVerseIndex];this.updateTTSDialogUI(),e.type==="verse"&&e.vNum?this.highlightReadingVerse(e.vNum):this.clearReadingHighlight();const t=window.Capacitor;if(t&&t.Plugins&&t.Plugins.TextToSpeech)try{let i="es-ES",s=this.db.settings.tts_voice;await t.Plugins.TextToSpeech.speak({text:e.text,lang:i,rate:1,pitch:1,volume:1,voice:s,category:"playback"}),this.currentVerseIndex++,this.playNextChunk()}catch(i){console.error("TTS Error in chunk:",i),this.stopTTS(),this.showToast("Error al reproducir audio")}else console.warn("TTS Plugin not available"),this.stopTTS()}highlightReadingVerse(e){this.clearReadingHighlight();const t=document.getElementById(`v-${e}`);t&&t.classList.add("reading-active")}clearReadingHighlight(){const e=document.querySelector(".verse-item.reading-active");e&&e.classList.remove("reading-active")}async nextVerseTTS(){this.currentVerseIndex+1<this.currentChapterVerses.length?(await this.stopTTSUtils(),this.currentVerseIndex++,this.isPaused=!1,this.updateTTSButton(),this.playNextChunk()):this.showToast("Último versículo")}async prevVerseTTS(){this.currentVerseIndex>0?(await this.stopTTSUtils(),this.currentVerseIndex--,this.currentVerseIndex<0&&(this.currentVerseIndex=0),this.isPaused=!1,this.updateTTSButton(),this.playNextChunk()):this.showToast("Inicio del capítulo")}async stopTTSUtils(){const e=window.Capacitor;e&&e.Plugins&&e.Plugins.TextToSpeech&&await e.Plugins.TextToSpeech.stop()}openTTSDialog(){const e=document.getElementById("tts-dialog");e&&(e.style.display="flex"),this.updateTTSDialogUI()}closeTTSDialog(){const e=document.getElementById("tts-dialog");e&&(e.style.display="none")}updateTTSDialogUI(){const e=document.getElementById("tts-current-verse");if(!e)return;const t=this.currentChapterVerses[this.currentVerseIndex];t&&(t.type==="title"?e.innerText="Título":t.type==="pericope"?e.innerText="Lectura":t.type==="verse"?e.innerText=`Verso ${t.vNum}`:e.innerText="Lectura")}async pauseTTS(){this.isPaused=!0;const e=window.Capacitor;e&&e.Plugins&&e.Plugins.TextToSpeech&&await e.Plugins.TextToSpeech.stop(),this.updateTTSButton()}async resumeTTS(){this.isPaused=!1,this.updateTTSButton(),this.playNextChunk()}async stopTTS(){this.isSpeaking=!1,this.isPaused=!1,this.currentVerseIndex=0,this.currentChapterVerses=[],this.clearReadingHighlight();const e=window.Capacitor;e&&e.Plugins&&e.Plugins.TextToSpeech&&await e.Plugins.TextToSpeech.stop(),this.updateTTSButton(),this.closeTTSDialog()}updateTTSButton(){const e=document.getElementById("tts-btn"),t=document.getElementById("tts-controls-btn");if(e){let i="volume-2";this.isSpeaking&&(this.isPaused?i="play":i="pause"),e.innerHTML=l(i),this.isSpeaking?(e.classList.add("active"),e.style.background="var(--accent)",e.style.color="white",this.isPaused?e.style.opacity="0.7":e.style.opacity="1",t&&(t.style.display="flex")):(e.classList.remove("active"),e.style.background="",e.style.color="",e.style.opacity="1",t&&(t.style.display="none")),this.refreshIcons()}}toggleVerseNumbers(e){this.db.settings.skip_verse_numbers=!e,this.db.saveSettings(),this.showToast(this.db.settings.skip_verse_numbers?"Lectura fluida activada":"Los versos se leerán con números")}async openVoiceModal(){const e=window.Capacitor;if(e&&e.Plugins&&e.Plugins.TextToSpeech)try{const i=(await e.Plugins.TextToSpeech.getSupportedVoices()).voices.map((o,r)=>({...o,originalIndex:r}));let s=i.filter(o=>o.lang.toLowerCase().startsWith("es"));if(s.length===0&&(s=i),(this.db.settings.tts_voice===0&&!this.db.settings.tts_voice_name||!s.find(o=>o.originalIndex===this.db.settings.tts_voice))&&s.length>0){const o=s[0];this.db.settings.tts_voice=o.originalIndex,this.db.settings.tts_voice_name=o.name,this.db.saveSettings()}this.renderVoiceModal(s)}catch(t){console.error("Error fetching voices:",t),this.showToast("No se pudieron cargar las voces")}else this.showToast("TTS no disponible")}renderVoiceModal(e){const t=document.createElement("div");t.id="voice-modal",t.className="modal-overlay animate-entrance",t.style.zIndex="2000",t.innerHTML=`
      <div class="modal-content" style="max-width: 95%; width: 440px; border-radius: 24px; padding: 1.5rem; background: var(--bg-color); box-shadow: var(--shadow); border: 1px solid var(--glass-border);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
          <h2 style="font-family: 'Playfair Display', serif; font-size: 1.4rem; color: var(--text-main); margin: 0;">Elegir Voz</h2>
          <button class="btn-icon" onclick="window.app.closeVoiceModal()" style="background: var(--verse-hover); width: 32px; height: 32px;">${l("x")}</button>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 0.75rem; max-height: 55vh; overflow-y: auto; padding-right: 0.5rem;">
          ${e.map(i=>{const s=this.db.settings.tts_voice===i.originalIndex;let o=i.name.replace(/español/gi,"").replace(/\(.*\)/g,"").trim();return o||(o=i.name),`
              <div class="premium-card" onclick="window.app.applyVoice(${i.originalIndex}, '${i.name.replace(/'/g,"\\'")}')" 
                   style="padding: 1.15rem 1.25rem; flex-direction: row; justify-content: space-between; align-items: center; text-align: left; border: ${s?"2px solid var(--accent)":"1px solid var(--glass-border)"}; background: ${s?"var(--accent-soft)":"var(--card-bg)"}; cursor: pointer; display: flex !important;">
                <div style="display: flex; flex-direction: column; gap: 0.25rem; flex-grow: 1; align-items: flex-start; min-width: 0;">
                    <span style="font-size: 1rem; font-weight: 700; color: var(--text-main); width: 100%;">${o}</span>
                    <span style="font-size: 0.75rem; opacity: 0.6; color: var(--text-muted); font-weight: 600;">${i.lang.toUpperCase()}</span>
                </div>
                ${s?`<div style="color: var(--accent); flex-shrink: 0; margin-left: 1rem;">${l("check-circle")}</div>`:""}
              </div>
            `}).join("")}
        </div>
      </div>
    `,document.body.appendChild(t),setTimeout(()=>t.classList.add("active"),10),this.refreshIcons()}closeVoiceModal(){const e=document.getElementById("voice-modal");e&&e.remove()}cleanText(e){return e.replace(/<[^>]*>?/gm,"")}async renderDevotional(){this.currentView="devotional";const e=`
      <header>
        <button class="btn-icon" onclick="window.app.renderHome()">${l("arrow-left")}</button>
        <h1>Devocional Semanal</h1>
        <button class="btn-icon" onclick="window.app.renderDevotionalHistory()">${l("history")}</button>
      </header>
      <div class="view-container animate-entrance" style="padding-bottom: 2rem;">
        <div id="devotional-content" style="display: flex; flex-direction: column; gap: 1.5rem; width: 100%; max-width: 800px; margin: 0 auto;">
          <div style="text-align: center; padding: 2rem; color: var(--text-main); opacity: 0.7;">
            <div class="spinner"></div>
            <p style="margin-top: 1rem;">Cargando devocional...</p>
          </div>
        </div>
      </div>
    `;this.render(e),this.loadDevotionalData()}async loadDevotionalData(){const e=document.getElementById("devotional-content");if(!navigator.onLine){e.innerHTML=`
            <div class="error-state" style="text-align: center; padding: 3rem 1rem;">
                <div style="font-size: 3rem; color: var(--accent); margin-bottom: 1rem;">${l("wifi-off")}</div>
                <h3 style="margin-bottom: 0.5rem;">Sin Conexión</h3>
                <p style="opacity: 0.7; margin-bottom: 1.5rem;">Revise su conexión a internet y pruebe nuevamente.</p>
                <button class="btn-primary" onclick="window.app.loadDevotionalData()">Reintentar</button>
            </div>
        `,this.refreshIcons();return}try{const t=await fetch("https://dataconnect-kohl.vercel.app/biblia-cristiana-rv1960-app/devocional-last.json?"+new Date().getTime());if(!t.ok)throw new Error("No se pudo cargar el devocional");const i=await t.json();this.renderDevotionalView(i,!1)}catch(t){console.error(t),e.innerHTML=`
            <div class="error-state" style="text-align: center; padding: 3rem 1rem;">
                <div style="font-size: 3rem; color: #ef4444; margin-bottom: 1rem;">${l("alert-circle")}</div>
                <h3 style="margin-bottom: 0.5rem;">Error al Cargar</h3>
                <p style="opacity: 0.7; margin-bottom: 1.5rem;">Revise su conexión a internet y pruebe nuevamente.<br>Si el error persiste, puede reportarlo en GitHub.</p>
                <div style="display: flex; flex-direction: column; gap: 0.75rem; align-items: center;">
                  <button class="btn-primary" onclick="window.app.loadDevotionalData()">Reintentar</button>
                  <button class="btn-secondary" onclick="window.open('https://github.com/${this.repo}/issues', '_blank')" style="background: var(--card-bg); color: var(--text-main); border: 1px solid var(--glass-border); padding: 0.8rem 1.5rem; border-radius: 12px; font-weight: 700; cursor: pointer;">
                    ${l("github")} Reportar en GitHub
                  </button>
                </div>
            </div>
        `,this.refreshIcons()}}async renderDevotionalHistory(){this.currentView="devotional-history";const e=`
      <header>
        <button class="btn-icon" onclick="window.app.renderDevotional()">${l("arrow-left")}</button>
        <h1>Historial</h1>
      </header>
      <div class="view-container animate-entrance">
         <div id="history-content" style="padding: 1rem; display: flex; flex-direction: column; gap: 1rem;">
            <div style="text-align: center; padding: 2rem; color: var(--text-main); opacity: 0.7;">
              <div class="spinner"></div>
              <p style="margin-top: 1rem;">Cargando historial...</p>
            </div>
         </div>
      </div>
      `;this.render(e);const t=document.getElementById("history-content");try{const i=await fetch("https://dataconnect-kohl.vercel.app/biblia-cristiana-rv1960-app/devocional-index.json?"+new Date().getTime());let s=[];if(i.ok)s=await i.json();else throw new Error("No se pudo cargar el historial.");if(s.length===0){t.innerHTML='<div style="text-align: center; padding: 2rem; opacity: 0.6;">No hay devocionales anteriores.</div>';return}t.innerHTML=s.reverse().map(o=>`
            <div class="premium-card" onclick="window.app.loadDevotionalFromHistory('${o.file}')" style="padding: 1rem; flex-direction: row; align-items: center; justify-content: space-between;">
                <div>
                    <h3 style="font-size: 1rem; margin-bottom: 0.25rem;">${o.titulo}</h3>
                    <span style="font-size: 0.8rem; opacity: 0.6;">${o.fecha||""}</span>
                </div>
                <div style="opacity: 0.4;">${l("chevron-right")}</div>
            </div>
          `).join(""),this.refreshIcons()}catch(i){console.error(i),t.innerHTML=`
        <div class="error-state" style="text-align: center; padding: 3rem 1rem;">
          <div style="font-size: 3rem; color: #ef4444; margin-bottom: 1rem;">${l("alert-circle")}</div>
          <h3 style="margin-bottom: 0.5rem;">No se pudo cargar el historial</h3>
          <p style="opacity: 0.7; margin-bottom: 1.5rem;">Revise su conexión a internet y pruebe nuevamente.</p>
          <button class="btn-primary" onclick="window.app.renderDevotionalHistory()">Reintentar</button>
        </div>
      `,this.refreshIcons()}}async loadDevotionalFromHistory(e){this.showToast("Cargando devocional...");try{const t=await fetch(`https://dataconnect-kohl.vercel.app/${e}`);if(!t.ok)throw new Error("No encontrado");const i=await t.json();this.renderDevotionalView(i,!0)}catch{this.showToast("No se pudo abrir este devocional.")}}renderDevotionalView(e,t=!1){t&&(this.currentView="devotional-detail");const i=`
      <header>
        <button class="btn-icon" onclick="${t?"window.app.renderDevotionalHistory()":"window.app.renderHome()"}">${l("arrow-left")}</button>
        <h1>${t?"Devocional":"Devocional Semanal"}</h1>
        ${t?"":`<button class="btn-icon" onclick="window.app.renderDevotionalHistory()">${l("history")}</button>`}
      </header>
      <div class="view-container animate-entrance" style="padding-bottom: 2rem;">
        <div style="width: 100%; max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.5rem;">
            <div class="premium-card" style="padding: 0; overflow: hidden; border: none;">
                <div style="background: var(--accent); padding: 1.5rem; color: white; text-align: center;">
                    <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; opacity: 0.9;">${e.fecha_hora||"Devocional"}</span>
                    <h2 style="font-family: 'Playfair Display', serif; font-size: 1.8rem; margin: 0.5rem 0;">${e.titulo}</h2>
                    <span style="font-size: 0.9rem; font-style: italic;">Por ${e.autor}</span>
                </div>
                <div style="padding: 2rem;">
                    <div style="background: rgba(var(--accent-rgb), 0.1); border-left: 4px solid var(--accent); padding: 1rem; margin-bottom: 2rem; font-style: italic; color: var(--text-main);">
                        "${e.versiculo}"
                    </div>
                    <div style="font-size: 1.1rem; line-height: 1.8; color: var(--text-main); margin-bottom: 2rem; white-space: pre-wrap;">${e.devocional}</div>
                    <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: 12px; border: 1px dashed var(--glass-border);">
                        <h4 style="color: var(--accent); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">${l("heart-handshake")} Oración</h4>
                        <p style="font-style: italic; opacity: 0.9;">${e.oracion}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    `;this.render(i)}async exportUserData(){this.showToast("Preparando exportación...");try{const e=this.db.exportUserData(),t=JSON.stringify(e,null,2),s=`biblia_backup_${new Date().toISOString().replace(/[:.]/g,"-").slice(0,-5).replace("T","_")}.json`;await A.writeFile({path:s,data:t,directory:N.Documents,encoding:V.UTF8}),this.showToast(`Respaldo guardado en Documentos: ${s}`)}catch(e){console.error("Error exportando datos:",e);let t="Error al exportar datos";e.message&&(e.message.includes("permission")?t="Permisos insuficientes para guardar el archivo":t=e.message),this.showToast(t)}}async importUserData(){this.openConfirmModal("Importar Datos","Seleccione un archivo JSON de respaldo. Sus datos actuales (favoritos, notas, marcadores) serán reemplazados. ¿Desea continuar?",()=>{this.selectBackupFile()},"Importar","var(--accent)")}async selectBackupFile(){try{const e=await he.pickFiles({types:["application/json"],readData:!1});if(e.files.length>0){const t=e.files[0];if(!t.name.toLowerCase().endsWith(".json")){this.showToast("Por favor seleccione un archivo .json");return}const i=t.path||t.uri;i?await this.performImport(i):this.showToast("No se pudo acceder al archivo seleccionado")}}catch(e){e&&e.message!=="User cancelled"&&(console.error("Error seleccionando archivo:",e),this.showToast("Error al seleccionar archivo"))}}async performImport(e){this.showToast("Restaurando datos...");try{const t=await A.readFile({path:e,encoding:V.UTF8});if(!t||!t.data)throw new Error("El archivo está vacío o no se pudo leer");const i=JSON.parse(t.data);this.db.importUserData(i),this.showToast("Restauración exitosa. Reiniciando aplicación..."),setTimeout(()=>window.location.reload(),1500)}catch(t){console.error("Error en importación:",t),this.showToast("Error al importar: "+(t.message||t))}}}window.app=new pe;export{V as E,L as W,oe as b};
