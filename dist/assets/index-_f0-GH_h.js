(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const v={1:{thematic:"Valentía",options:["Josué 1:9","Salmos 27:1","Isaías 41:10","2 Timoteo 1:7","Salmos 118:6"]},2:{thematic:"Provisión",options:["Salmos 23:1","Filipenses 4:19","San Mateo 6:33","Salmos 34:10","San Mateo 7:11"]},3:{thematic:"Fortaleza",options:["Filipenses 4:13","Isaías 40:31","Salmos 18:2","Efesios 6:10","Habacuc 3:19"]},4:{thematic:"Paz",options:["San Juan 14:27","Filipenses 4:7","Isaías 26:3","Salmos 4:8","Colosenses 3:15"]},5:{thematic:"Confianza",options:["Proverbios 3:5","Jeremías 17:7","Salmos 37:5","Salmos 62:8","Isaías 12:2"]},6:{thematic:"Amor de Dios",options:["San Juan 3:16","Romanos 5:8","1 Juan 4:19","Sofonías 3:17","Jeremías 31:3"]},7:{thematic:"Descanso",options:["San Mateo 11:28","Salmos 62:1","Salmos 91:1","Éxodo 33:14","Hebreos 4:9"]},8:{thematic:"Sabiduría",options:["Santiago 1:5","Proverbios 2:6","Salmos 111:10","Proverbios 4:7","Colosenses 2:3"]},9:{thematic:"Propósito",options:["Jeremías 29:11","Romanos 8:28","Efesios 2:10","Proverbios 16:3","Salmos 138:8"]},10:{thematic:"Refugio",options:["Salmos 46:1","Salmos 9:9","Proverbios 18:10","Salmos 144:2","Nahúm 1:7"]},11:{thematic:"Fe",options:["Hebreos 11:1","San Marcos 9:23","San Mateo 21:22","Romanos 10:17","2 Corintios 5:7"]},12:{thematic:"Guía",options:["Salmos 119:105","Isaías 30:21","Salmos 32:8","Proverbios 3:6","Salmos 48:14"]},13:{thematic:"Ansiedad",options:["1 Pedro 5:7","Filipenses 4:6","Salmos 55:22","San Mateo 6:34","Salmos 94:19"]},14:{thematic:"Perdonar",options:["Efesios 4:32","Colosenses 3:13","San Mateo 6:14","San Lucas 6:37","Proverbios 17:9"]},15:{thematic:"Gozar",options:["Nehemías 8:10","Salmos 16:11","Filipenses 4:4","1 Tesalonicenses 5:16","Habacuc 3:18"]},16:{thematic:"Gracia",options:["Efesios 2:8","Hebreos 4:16","2 Corintios 12:9","Romanos 3:24","Tito 2:11"]},17:{thematic:"Socorro",options:["Salmos 121:2","Isaías 41:13","Salmos 145:18","Hebreos 13:6","Salmos 40:17"]},18:{thematic:"Fidelidad",options:["Lamentaciones 3:23","2 Tesalonicenses 3:3","1 Corintios 1:9","Deuteronomio 7:9","Salmos 36:5"]},19:{thematic:"Victoria",options:["Romanos 8:37","1 Corintios 15:57","1 Juan 5:4","Salmos 60:12","Proverbios 21:31"]},20:{thematic:"Corazón",options:["Proverbios 4:23","Salmos 51:10","San Mateo 5:8","Ezequiel 36:26","Salmos 119:11"]},21:{thematic:"Palabra",options:["Hebreos 4:12","San Mateo 4:4","Isaías 40:8","Salmos 19:7","Josué 1:8"]},22:{thematic:"Luz",options:["San Mateo 5:14","San Juan 8:12","Salmos 27:1","Efesios 5:8","1 Juan 1:7"]},23:{thematic:"Oración",options:["Jeremías 33:3","San Mateo 7:7","1 Juan 5:14","Salmos 145:18","San Lucas 11:9"]},24:{thematic:"Identidad",options:["San Juan 1:12","1 Pedro 2:9","2 Corintios 5:17","Gálatas 2:20","Efesios 1:4"]},25:{thematic:"Fruto",options:["Gálatas 5:22","San Juan 15:5","Filipenses 1:11","Salmos 1:3","Santiago 3:17"]},26:{thematic:"Humildad",options:["Santiago 4:10","1 Pedro 5:6","Proverbios 22:4","Miqueas 6:8","Filipenses 2:3"]},27:{thematic:"Esperanza",options:["Romanos 15:13","Salmos 130:5","Hebreos 10:23","Isaías 40:31","Job 14:7"]},28:{thematic:"Verdad",options:["San Juan 14:6","San Juan 8:32","Salmos 25:5","Efesios 4:25","3 Juan 1:4"]},29:{thematic:"Servicio",options:["Gálatas 5:13","San Mateo 20:28","Colosenses 3:23","Hebreos 6:10","1 Pedro 4:10"]},30:{thematic:"Justicia",options:["San Mateo 5:6","Salmos 37:6","Proverbios 21:21","Isaías 32:17","Romanos 1:17"]},31:{thematic:"Bendición",options:["Números 6:24","Salmos 67:1","Deuteronomio 28:2","Salmos 1:1","Proverbios 10:22"]}};class b{constructor(){this.bibleData=null,this.dictionaryData=null,this.pericopesData=null,this.favorites=JSON.parse(localStorage.getItem("bible_favorites")||"[]"),this.notes=JSON.parse(localStorage.getItem("bible_notes")||"[]"),this.highlights=JSON.parse(localStorage.getItem("bible_highlights")||"[]");const e={last_book:"Génesis",last_chapter:"1",theme_style:"classic",theme_mode:"light",tts_voice:0,tts_voice_name:"",system_theme:!1},t=JSON.parse(localStorage.getItem("bible_settings")||"{}");t.theme&&!t.theme_style&&(t.theme_style=t.theme,delete t.theme),this.settings={...e,...t};let i=!1;this.notes.forEach(o=>{o.title===void 0&&(o.title="Nota sin nombre",i=!0)}),i&&localStorage.setItem("bible_notes",JSON.stringify(this.notes))}async init(){try{const e=await fetch("./bibles_rv1960.json");this.bibleData=await e.json();const t=await fetch("./dictionary.json");this.dictionaryData=await t.json();try{const i=await fetch("./pericopes.json");i.ok&&(this.pericopesData=await i.json())}catch{console.warn("Pericopes not found, ignoring.")}return!0}catch(e){return console.error("Error loading bible data:",e),!1}}getBooks(e=null){if(!this.bibleData)return[];const t=["Génesis","Éxodo","Levítico","Números","Deuteronomio","Josué","Jueces","Rut","1 Samuel","2 Samuel","1 Reyes","2 Reyes","1 Crónicas","2 Crónicas","Esdras","Nehemías","Ester","Job","Salmos","Proverbios","Eclesiastés","Cantares","Isaías","Jeremías","Lamentaciones","Ezequiel","Daniel","Oseas","Joel","Amós","Abdías","Jonás","Miqueas","Nahúm","Habacuc","Sofonías","Hageo","Zacarías","Malaquías","San Mateo","San Marcos","San Lucas","San Juan","Hechos","Romanos","1 Corintios","2 Corintios","Gálatas","Efesios","Filipenses","Colosenses","1 Tesalonicenses","2 Tesalonicenses","1 Timoteo","2 Timoteo","Tito","Filemón","Hebreos","Santiago","1 Pedro","2 Pedro","1 Juan","2 Juan","3 Juan","Judas","Apocalipsis"],i=Object.keys(this.bibleData),o=t.filter(a=>i.includes(a));return e==="old"?o.slice(0,39):e==="new"?o.slice(39):o}getChapters(e){return!this.bibleData||!this.bibleData[e]?[]:Object.keys(this.bibleData[e]).sort((t,i)=>parseInt(t)-parseInt(i))}getVerses(e,t){if(!this.bibleData||!this.bibleData[e]||!this.bibleData[e][t])return[];const i=this.bibleData[e][t];return Object.entries(i).sort((o,a)=>parseInt(o[0])-parseInt(a[0])).map(([o,a])=>[o,this.sanitizeVerseText(a)])}getPericope(e,t,i){if(!this.pericopesData)return null;if(this.pericopesData[e]&&this.pericopesData[e][t])return this.pericopesData[e][t][i]||null;let o=[e.replace("San ","S. "),e.replace("San ",""),e.replace("S. ",""),e.replace("1 ","1"),e.replace("2 ","2"),e.replace("3 ","3")];for(let l of o)if(this.pericopesData[l]&&this.pericopesData[l][t])return this.pericopesData[l][t][i]||null;const a=Object.keys(this.pericopesData),r=e.toLowerCase().replace(/[^a-z0-9]/g,""),n=a.find(l=>l.toLowerCase().replace(/[^a-z0-9]/g,"")===r);return n&&this.pericopesData[n][t]&&this.pericopesData[n][t][i]||null}search(e,t=""){if(!this.bibleData)return[];const i=e.toLowerCase(),o=[],a=t?{[t]:this.bibleData[t]}:this.bibleData;for(const[r,n]of Object.entries(a))if(n)for(const[l,c]of Object.entries(n))for(const[p,d]of Object.entries(c))d.toLowerCase().includes(i)&&o.push({book:r,chapter:l,vNum:p,text:this.sanitizeVerseText(d)});return o}isFavorite(e,t,i){const o=`${e} ${t}:${i}`;return this.favorites.some(a=>a.id===o)}toggleFavorite(e,t,i,o){const a=`${e} ${t}:${i}`,r=this.favorites.findIndex(n=>n.id===a);return r>-1?this.favorites.splice(r,1):this.favorites.push({id:a,book:e,chapter:t,verse:i,text:o,date:new Date().toISOString()}),localStorage.setItem("bible_favorites",JSON.stringify(this.favorites)),r===-1}deleteFavorite(e){this.favorites.splice(e,1),localStorage.setItem("bible_favorites",JSON.stringify(this.favorites))}toggleFavoritePin(e){this.favorites[e]&&(this.favorites[e].pinned=!this.favorites[e].pinned,localStorage.setItem("bible_favorites",JSON.stringify(this.favorites)))}addNote(e,t,i,o,a,r){this.notes.push({book:e,chapter:t,verse:i,text:o,note:a,title:r||"Nota sin nombre",date:new Date().toISOString()}),localStorage.setItem("bible_notes",JSON.stringify(this.notes))}deleteNote(e){this.notes.splice(e,1),localStorage.setItem("bible_notes",JSON.stringify(this.notes))}toggleNotePin(e){this.notes[e]&&(this.notes[e].pinned=!this.notes[e].pinned,localStorage.setItem("bible_notes",JSON.stringify(this.notes)))}updateNote(e,t,i){this.notes[e]&&(this.notes[e].note=t,i!==void 0&&(this.notes[e].title=i),this.notes[e].date=new Date().toISOString(),localStorage.setItem("bible_notes",JSON.stringify(this.notes)))}isHighlighted(e,t,i){const o=`${e} ${t}:${i}`;return this.highlights.find(a=>a.id===o)}addHighlight(e,t,i,o,a){const r=`${e} ${t}:${i}`,n=this.highlights.findIndex(l=>l.id===r);n>-1&&this.highlights.splice(n,1),this.highlights.push({id:r,book:e,chapter:t,verse:i,text:o,color:a,date:new Date().toISOString()}),localStorage.setItem("bible_highlights",JSON.stringify(this.highlights))}removeHighlight(e,t,i){const o=`${e} ${t}:${i}`,a=this.highlights.findIndex(r=>r.id===o);a>-1&&(this.highlights.splice(a,1),localStorage.setItem("bible_highlights",JSON.stringify(this.highlights)))}deleteHighlight(e){this.highlights.splice(e,1),localStorage.setItem("bible_highlights",JSON.stringify(this.highlights))}toggleHighlightPin(e){this.highlights[e]&&(this.highlights[e].pinned=!this.highlights[e].pinned,localStorage.setItem("bible_highlights",JSON.stringify(this.highlights)))}setLastRead(e,t){this.settings.last_book=e,this.settings.last_chapter=t,this.saveSettings()}setTheme(e){this.settings.theme_style=e,this.saveSettings()}saveSettings(){localStorage.setItem("bible_settings",JSON.stringify(this.settings))}searchDictionary(e){if(!this.dictionaryData)return[];const t=e.toLowerCase();return Object.entries(this.dictionaryData).filter(([i,o])=>i.toLowerCase().includes(t)||o.toLowerCase().includes(t)).map(([i,o])=>({term:i,definition:o}))}getRandomVerse(){if(!this.bibleData)return null;const e=Object.keys(this.bibleData),t=e[Math.floor(Math.random()*e.length)],i=Object.keys(this.bibleData[t]),o=i[Math.floor(Math.random()*i.length)],a=Object.keys(this.bibleData[t][o]),r=a[Math.floor(Math.random()*a.length)],n=this.sanitizeVerseText(this.bibleData[t][o][r]);return{book:t,chapter:o,verse:r,text:n}}sanitizeVerseText(e){return e?e.replace(/,([^\s])/g,", $1").replace(/\.([^\s])/g,". $1").replace(/;([^\s])/g,"; $1").replace(/:([^\s])/g,": $1").replace(/\s+/g," ").trim():""}getVerseOfDay(){if(!this.bibleData)return null;const e=v;if(!e)return this.getRandomVerse();const t=new Date,i=t.getDate(),o=t.getFullYear(),a=e[i];if(!a)return this.getRandomVerse();const r=o%5,l=a.options[r].split(" ");let c,p;l.length===3?(c=`${l[0]} ${l[1]}`,p=l[2]):(c=l[0],p=l[1]);const[d,h]=p.split(":"),m=this.normalizeBookName(c);if(this.bibleData[m]&&this.bibleData[m][d]){const u=this.bibleData[m][d][h];if(u){const f=this.sanitizeVerseText(u);return{book:m,chapter:d,verse:h,text:f,thematic:a.thematic,ref:`${m} ${d}:${h}`}}}return this.getRandomVerse()}normalizeBookName(e){const t={Josué:"Josué",Salmo:"Salmos",Salmos:"Salmos","Is.":"Isaías",Isaías:"Isaías","2 Tim.":"2 Timoteo","2 Timoteo":"2 Timoteo","Fil.":"Filipenses",Filipenses:"Filipenses",Mateo:"San Mateo","San Mateo":"San Mateo","San Marcos":"San Marcos","San Lucas":"San Lucas","San Juan":"San Juan","Hab.":"Habacuc",Habacuc:"Habacuc","Jer.":"Jeremías",Jeremías:"Jeremías","Sof.":"Sofonías",Sofonías:"Sofonías","Luc.":"San Lucas",Lucas:"San Lucas",Marcos:"San Marcos","Heb.":"Hebreos",Hebreos:"Hebreos",Santiago:"Santiago","Sant.":"Santiago","1 Pedro":"1 Pedro","2 Pedro":"2 Pedro","Prov.":"Proverbios",Proverbios:"Proverbios","2 Cor.":"2 Corintios","2 Corintios":"2 Corintios","1 Cor.":"1 Corintios","1 Corintios":"1 Corintios","Lam.":"Lamentaciones",Lamentaciones:"Lamentaciones","2 Tes.":"2 Tesalonicenses","2 Tesalonicenses":"2 Tesalonicenses","1 Tes.":"1 Tesalonicenses","1 Tesalonicenses":"1 Tesalonicenses","Deut.":"Deuteronomio",Deuteronomio:"Deuteronomio","1 Juan":"1 Juan","2 Juan":"2 Juan","3 Juan":"3 Juan","Ezeq.":"Ezequiel",Ezequiel:"Ezequiel","Gál.":"Gálatas",Gálatas:"Gálatas","Gal.":"Gálatas","Miq.":"Miqueas",Miqueas:"Miqueas",Job:"Job","Núm.":"Números",Números:"Números",Éxodo:"Éxodo","Col.":"Colosenses",Colosenses:"Colosenses"};if(t[e])return t[e];const i=e.replace(".","").replace("San ","").replace("S. ","").trim();return t[i]?t[i]:this.getBooks().find(a=>a.toLowerCase().startsWith(i.toLowerCase()))||e}exportUserData(){return{version:"1.0",export_date:new Date().toISOString(),app_version:"1.2.4",data:{favorites:this.favorites,notes:this.notes,highlights:this.highlights,settings:this.settings}}}importUserData(e){if(!e.version||!e.data)throw new Error("Formato de backup inválido");this.favorites=e.data.favorites||[],this.notes=e.data.notes||[],this.highlights=e.data.highlights||[];const t=e.data.settings||{};t.theme&&!t.theme_style&&(t.theme_style=t.theme,delete t.theme),this.settings={...this.settings,...t},localStorage.setItem("bible_favorites",JSON.stringify(this.favorites)),localStorage.setItem("bible_notes",JSON.stringify(this.notes)),localStorage.setItem("bible_highlights",JSON.stringify(this.highlights)),localStorage.setItem("bible_settings",JSON.stringify(this.settings))}}const s=g=>`<i data-lucide="${g}"></i>`;class y{constructor(){this.db=new b,this.appEl=document.querySelector("#app"),this.currentView="home",this.selectedVerse=null,this.selectedFavoriteIndex=null,this.selectedNoteIndex=null,this.editingNoteIndex=void 0,this.currentVod=null,this.currentVodBg="./img/bg-verse-1.png",this.dictionary=[],this.isSpeaking=!1,this.aboutClickCount=0,this.appVersion="1.2.4",this.repo="krafairus/biblia-cristiana-rv1960-app",this.isElectron=!!window.electronAPI,this.isElectron&&(document.body.classList.add("electron"),this.setupElectronListeners()),this.init()}async canShareData(e){if(!navigator.share||!navigator.canShare)return!1;const t={};let i=!1;for(const[o,a]of Object.entries(e))navigator.canShare({[o]:a})&&(t[o]=a,i=!0);return i?t:!1}async init(){await this.db.init()?(this.applyTheme(),this.renderSidebar(),this.renderHome()):this.appEl.innerHTML='<div class="error" style="height: 100vh; display: flex; align-items: center; justify-content: center; color: white;">Error al cargar la Biblia. Por favor recarga.</div>',this.isElectron&&this.setupTitleBarEvents()}setupEditorToolbar(e="#note-text",t="#note-toolbar"){const i=document.querySelector(t);if(!i)return;const o=document.querySelector(e);o&&(i.querySelectorAll(".toolbar-btn").forEach(a=>{a.onclick=r=>{r.preventDefault();const n=a.getAttribute("data-command"),l=a.getAttribute("data-value")||null;if(n==="createLink"){const c=window.getSelection();if(c.rangeCount>0)this._savedSelection=c.getRangeAt(0).cloneRange();else{o.focus();const p=window.getSelection();if(p.rangeCount>0)this._savedSelection=p.getRangeAt(0).cloneRange();else{const d=document.createRange();d.selectNodeContents(o),d.collapse(!1),this._savedSelection=d}}this.openLinkModal()}else if(n==="formatBlock"&&l){const c=document.queryCommandValue("formatBlock");c===l||l==="pre"&&c==="plain"?document.execCommand("formatBlock",!1,"p"):document.execCommand("formatBlock",!1,l)}else document.execCommand(n,!1,l);o.focus(),this.updateToolbarState(i)}}),o.onkeyup=o.onmouseup=()=>this.updateToolbarState(i),o.onfocus=()=>this.updateToolbarState(i))}updateToolbarState(e){e&&e.querySelectorAll(".toolbar-btn").forEach(t=>{const i=t.getAttribute("data-command"),o=t.getAttribute("data-value");if(!(!i||["undo","redo","createLink","removeFormat","insertHorizontalRule"].includes(i)))try{let a=!1;if(i==="formatBlock"&&o){const r=document.queryCommandValue("formatBlock");a=r===o||o==="pre"&&r==="plain"}else a=document.queryCommandState(i);a?t.classList.add("active"):t.classList.remove("active")}catch{}})}setupElectronListeners(){}setupTitleBarEvents(){const e=document.querySelector(".title-drag");e&&(e.ondblclick=()=>this.maximizeWindow())}minimizeWindow(){this.isElectron&&window.electronAPI.minimize()}maximizeWindow(){this.isElectron&&window.electronAPI.toggleMaximize()}closeWindow(){this.isElectron&&window.electronAPI.close()}applyTheme(e,t){const i=this.db.settings;e&&(i.theme_style=e),t&&(i.theme_mode=t);let o=i.theme_mode||"light";i.system_theme&&(o=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),document.documentElement.setAttribute("data-style",i.theme_style),document.documentElement.setAttribute("data-mode",o),this.db.saveSettings(),this.currentView==="settings"&&this.renderSettings()}toggleSystemTheme(e){this.db.settings.system_theme=e,this.applyTheme()}refreshIcons(){if(window.lucide)window.lucide.createIcons();else{const e=document.createElement("script");e.src="./libs/lucide.min.js",e.onload=()=>{window.lucide&&window.lucide.createIcons()},document.head.appendChild(e)}}render(e){this.isSpeaking&&this.stopTTS(),this.appEl.innerHTML=e,this.appEl.setAttribute("data-view",this.currentView),this.renderSidebar(),this.refreshIcons(),window.scrollTo({top:0,behavior:"instant"}),this.appEl.scrollTo(0,0)}renderSidebar(){const e=document.getElementById("sidebar");if(!e)return;if(this.currentView==="reader"&&this._readerBook&&this._readerChapter){const i=this._readerBook,o=this._readerChapter,a=this.db.getChapters(i);e.innerHTML=`
        <div style="padding: 0 1rem 1rem 1rem;">
          <button onclick="window.app.renderSidebarMenu()" style="display: flex; align-items: center; gap: 0.5rem; background: none; border: none; color: var(--accent); font-weight: 700; cursor: pointer; padding: 0.5rem 0; font-size: 0.9rem; font-family: inherit;">
            ${s("chevron-left")} Menú
          </button>
          <h2 style="font-size: 1.1rem; margin: 0.5rem 0 1rem 0; font-weight: 800;">${i}</h2>
        </div>
        <nav style="overflow-y: auto; flex: 1; padding: 0 1rem 2rem 1rem;">
          <p style="font-size: 0.7rem; font-weight: 800; letter-spacing: 1.5px; opacity: 0.5; text-transform: uppercase; margin-bottom: 0.75rem;">Capítulos</p>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.4rem;">
            ${a.map(r=>`
              <button class="${r===o?"premium-card active":"premium-card"}"
                      onclick="window.app.renderReader('${i.replace(/'/g,"\\'")}', '${r}')"
                      style="padding: 0.5rem; font-size: 0.85rem; font-weight: 700; justify-content: center; border-radius: 10px; ${r===o?"background: var(--accent); color: white; border: none;":""}">
                ${r}
              </button>
            `).join("")}
          </div>
        </nav>
        <div style="padding: 1rem; opacity: 0.4; font-size: 0.8rem; text-align: center;">
          v${this.appVersion}
        </div>
      `,this.refreshIcons();return}const t=[{text:"Inicio",icon:"home",target:"home"},{text:"Antiguo T.",icon:"book",target:"old"},{text:"Nuevo T.",icon:"book-open",target:"new"},{text:"Última L.",icon:"history",target:"last"},{text:"Vr del Día",icon:"sun",target:"vod"},{text:"Devocional",icon:"coffee",target:"devotional"},{text:"Favoritos",icon:"heart",target:"favorites"},{text:"Notas",icon:"sticky-note",target:"notes"},{text:"Marcadores",icon:"highlighter",target:"highlights"},{text:"Buscador",icon:"search",target:"search"},{text:"Diccionario",icon:"book-a",target:"dict"},{text:"Ajustes",icon:"settings",target:"settings"}];e.innerHTML=`
      <div style="padding: 0 1rem 2rem 1rem; text-align: center;">
        <img src="./icon.png" style="width: 60px; height: 60px; margin-bottom: 1rem;">
        <h2 style="font-size: 1.2rem; margin: 0;">Biblia RV1960</h2>
      </div>
      <nav>
        ${t.map(i=>`
          <div class="sidebar-link ${this.currentView===i.target||i.target==="home"&&(this.currentView==="home"||this.currentView==="book-list")?"active":""}" 
               onclick="window.app.navigate('${i.target}')">
            ${s(i.icon)}
            <span>${i.text}</span>
          </div>
        `).join("")}
      </nav>
      <div style="margin-top: auto; padding: 1rem; opacity: 0.4; font-size: 0.8rem; text-align: center;">
        v${this.appVersion}
      </div>
    `,this.refreshIcons()}renderSidebarMenu(){this._readerBook=null,this._readerChapter=null,this.renderSidebar()}showToast(e,t=3e3){const i=document.querySelector("#toast-container");if(!i)return;const o=document.createElement("div");o.className="toast",o.innerText=e,i.appendChild(o),setTimeout(()=>{o.classList.add("removing"),setTimeout(()=>o.remove(),300)},t)}renderHome(){this.currentView="home";const e=this.db.getVerseOfDay(),t=[{text:"Antiguo T.",icon:"book",target:"old"},{text:"Nuevo T.",icon:"book-open",target:"new"},{text:"Última L.",icon:"history",target:"last"},{text:"Vr. de hoy",icon:"sun",target:"vod"},{text:"Devocional",icon:"coffee",target:"devotional"},{text:"Favoritos",icon:"heart",target:"favorites"},{text:"Notas",icon:"sticky-note",target:"notes"},{text:"Marcadores",icon:"highlighter",target:"highlights"},{text:"Buscador",icon:"search",target:"search"},{text:"Diccionario",icon:"book-a",target:"dict"},{text:"Ajustes",icon:"settings",target:"settings"}],i=`
      <header>
        <h1 style="font-family: 'Playfair Display', serif;">Biblia Cristiana</h1>
        <div style="font-size: 0.8rem; opacity: 0.5; color: var(--accent); margin-right: auto; padding-left: 0.5rem; margin-bottom: 1rem;">RV 1960</div>
        <button class="btn-icon" onclick="window.app.navigate('settings')" style="margin-top: auto; margin-left: auto;">${s("settings")}</button>
      </header>
      <div class="view-container animate-entrance">
        
        <div class="vod-home-card" 
             onclick="window.app.navigate('vod')"
             style="background-image: url('./img/bg-verse-4.png');">
            <div class="vod-home-card-content">
                <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1rem; opacity: 0.9; font-weight: 700;">Versículo del Día</div>
                <div class="vod-home-text">
                    "${e?e.text.replace(/([.,;:])(?=[A-Za-z])/g,"$1 "):"Cargando..."}"
                </div>
                <div class="vod-home-ref">
                    ${e?`${e.book} ${e.chapter}:${e.verse}`:""}
                </div>
            </div>
        </div>

        <div style="opacity: 0.6; font-size: 0.9rem; margin-bottom: 1rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Explorar</div>

        <div class="home-grid">
          ${t.map(o=>`
            <div class="premium-card" onclick="window.app.navigate('${o.target}')">
              <div class="icon-wrapper">${s(o.icon)}</div>
              <span>${o.text}</span>
            </div>
          `).join("")}
          <div class="premium-card" style="grid-column: 1 / -1; flex-direction: row; justify-content: center; padding: 1.5rem;" onclick="window.app.navigate('about')">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <div style="color: var(--accent);">${s("info")}</div>
                <span>Acerca de la Aplicación</span>
              </div>
          </div>
        </div>
      </div>
    `;this.render(i),this.refreshIcons()}navigate(e){if(this.clearSelection(),this.clearFavoriteSelection(),this.clearNoteSelection(),this.clearHighlightSelection(),this.closeShareModal(),e==="home")this.renderHome();else if(e==="reader"){const{last_book:t,last_chapter:i}=this.db.settings;this.renderReader(t,i)}else if(e==="old")this.renderBookList("old");else if(e==="new")this.renderBookList("new");else if(e==="favorites")this.renderFavorites();else if(e==="notes")this.renderNotes();else if(e==="highlights")this.renderHighlights();else if(e==="search")this.renderSearch();else if(e==="dict")this.renderDictionary();else if(e==="about")this.renderAbout();else if(e==="settings")this.renderSettings();else if(e==="vod")this.renderVerseOfDay();else if(e==="devotional")this.renderDevotional();else if(e==="last"){const{last_book:t,last_chapter:i}=this.db.settings;this.renderReader(t,i)}}renderBookList(e){const t=this.db.getBooks(e),i=`
      <header>
        <button class="btn-icon" onclick="window.app.navigate('home')">${s("chevron-left")}</button>
        <h1>${e==="old"?"Antiguo Testamento":"Nuevo Testamento"}</h1>
      </header>
      <div class="view-container animate-entrance">
        <div class="book-list-grid">
          ${t.map(o=>`
            <div class="premium-card book-item" onclick="window.app.renderChapterList('${o}')">
              <span style="font-size: 1.1rem;">${o}</span>
              <div style="color: var(--accent); opacity: 0.5;">${s("chevron-right")}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `;this.render(i)}renderChapterList(e){this.currentView="chapters";const t=this.db.getChapters(e),a=`
      <header>
        <button class="btn-icon" onclick="window.app.renderBookList('${this.db.getBooks("old").includes(e)?"old":"new"}')">${s("chevron-left")}</button>
        <h1>${e}</h1>
      </header>
      <div class="view-container animate-entrance">
        <p class="section-label">Seleccionar Capítulo</p>
        <div class="chapter-list-grid">
          ${t.map(r=>`
            <div class="premium-card chapter-box" onclick="window.app.renderVerseList('${e.replace(/'/g,"\\'")}', '${r}')">
              ${r}
            </div>
          `).join("")}
        </div>
      </div>
    `;this.render(a)}renderVerseList(e,t){this.currentView="verses";const i=this.db.getVerses(e,t),o=`
      <header>
        <button class="btn-icon" onclick="window.app.renderChapterList('${e.replace(/'/g,"\\'")}')">${s("chevron-left")}</button>
        <h1 style="font-size: 1.2rem;">${e} ${t}</h1>
      </header>
      <div class="view-container animate-entrance">
        <p class="section-label">Seleccionar Versículo</p>
        <div class="chapter-list-grid">
          ${i.map(([a])=>`
            <div class="premium-card chapter-box" onclick="window.pendingVerseScroll='${a}'; window.app.renderReader('${e.replace(/'/g,"\\'")}', '${t}')">
              ${a}
            </div>
          `).join("")}
        </div>
      </div>
    `;this.render(o)}renderReader(e,t){this.currentView="reader",this._readerBook=e,this._readerChapter=t,this.db.setLastRead(e,t);const i=this.db.getChapters(e),o=this.db.getVerses(e,t),a=`
      <header class="reader-header">
        <div class="reader-header-top">
          <button class="btn-icon" onclick="window.app.renderChapterList('${e}')">${s("chevron-left")}</button>
          <h1 style="flex-grow: 1; font-size: 1.4rem;">${e}</h1>
        </div>
        <div id="chapter-tabs" class="chapter-tabs">
          ${i.map(n=>`
            <button class="${n===t?"premium-card active":"premium-card"}" 
                    onclick="window.app.renderReader('${e}', '${n}')">
              ${n}
            </button>
          `).join("")}
        </div>
      </header>
      <div class="view-container animate-entrance">
        ${o.map(([n,l])=>{const c=this.db.isFavorite(e,t,n),p=this.db.isHighlighted(e,t,n),d=this.db.getPericope(e,t,n),h=p?`background-color: ${p.color}; color: #333; border-radius: 4px; padding: 2px 4px; box-decoration-break: clone; -webkit-box-decoration-break: clone;`:"";return`
              ${d?`<div class="pericope">${d}</div>`:""}
              <div class="verse-item ${c?"favorite":""}" 
                   id="v-${n}" onclick="window.app.toggleVerseSelection('${e}', '${t}', '${n}', '${l.replace(/'/g,"\\'")}')">
                <span class="verse-num">${n}</span>
                <span class="verse-text" style="${h}">${l}</span>
              </div>
            `}).join("")}
      </div>
      <div id="selection-bar" class="floating-toolbar animate-entrance" style="display: none;">
        <button class="tool-btn" onclick="window.app.handleFavorite()" title="Favorito">${s("heart")}</button>
        <button class="tool-btn" onclick="window.app.handleNote()" title="Nota">${s("edit-3")}</button>
        <button class="tool-btn" onclick="window.app.handleHighlight()" title="Marcador">${s("highlighter")}</button>
        <button class="tool-btn" onclick="window.app.handleVerseMenu()" title="Menú">${s("menu")}</button>
        <button class="tool-btn" onclick="window.app.clearSelection()" title="Cerrar">${s("x")}</button>
      </div>

      <div id="highlight-bar" class="floating-toolbar animate-entrance" style="display: none; top: auto; bottom: 80px; justify-content: center; gap: 10px; flex-wrap: wrap; padding: 10px;">
        ${["#fef3c7","#dcfce7","#dbeafe","#fae8ff","#fee2e2","#ffedd5","#f3f4f6","transparent"].map(n=>`
            <div data-color="${n}" onclick="window.app.applyHighlight('${n}')" style="width: 30px; height: 30px; border-radius: 50%; background: ${n==="transparent"?"var(--card-bg)":n}; border: 1px solid var(--glass-border); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--text-main);">
                ${n==="transparent"?s("ban"):""}
            </div>
        `).join("")}
      </div>
    `;this.render(a);const r=document.querySelector("#chapter-tabs .premium-card.active");r&&r.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),window.pendingVerseScroll&&setTimeout(()=>{const n=document.getElementById(`v-${window.pendingVerseScroll}`);n&&n.scrollIntoView({behavior:"smooth",block:"center"}),window.pendingVerseScroll=null},500),this.setupSwipeNavigation(e,t)}setupSwipeNavigation(e,t){let i=0,o=0;const a=document.querySelector(".view-container");a&&(a.ontouchstart=r=>{i=r.touches[0].clientX,o=r.touches[0].clientY},a.ontouchend=r=>{const n=r.changedTouches[0].clientX,l=r.changedTouches[0].clientY,c=i-n,p=o-l;if(Math.abs(c)>80&&Math.abs(c)>Math.abs(p)*1.8)if(c>0){const h=parseInt(t)+1;h<=this.db.getChapters(e).length&&(a.classList.add("swipe-left"),setTimeout(()=>this.renderReader(e,h.toString()),200))}else{const h=parseInt(t)-1;h>=1&&(a.classList.add("swipe-right"),setTimeout(()=>this.renderReader(e,h.toString()),200))}})}toggleVerseSelection(e,t,i,o){const a=document.getElementById(`v-${i}`);if(this.selectedVerse&&this.selectedVerse.vNum===i)this.clearSelection();else{this.clearSelection(),this.selectedVerse={book:e,chapter:t,vNum:i,text:o},a.classList.add("selected"),document.querySelector("#selection-bar").style.display="flex";const r=this.db.isFavorite(e,t,i),n=document.querySelector("#selection-bar .tool-btn:first-child");n.style.color=r?"var(--accent)":"var(--text-main)",r?n.innerHTML=s("heart-off"):n.innerHTML=s("heart"),this.refreshIcons()}}clearSelection(){if(this.selectedVerse){const i=document.getElementById(`v-${this.selectedVerse.vNum}`);i&&i.classList.remove("selected")}this.selectedVerse=null;const e=document.querySelector("#selection-bar");e&&(e.style.display="none");const t=document.querySelector("#highlight-bar");t&&(t.style.display="none")}handleFavorite(){if(!this.selectedVerse)return;const{book:e,chapter:t,vNum:i,text:o}=this.selectedVerse,a=this.db.toggleFavorite(e,t,i,o),r=document.getElementById(`v-${i}`);a?r.classList.add("favorite"):r.classList.remove("favorite"),this.clearSelection()}handleNote(){this.selectedVerse&&this.renderNoteEditor(this.selectedVerse)}confirmDeleteNote(e){this.openConfirmModal("Eliminar Nota","¿Estás seguro de que quieres eliminar esta nota? Esta acción no se puede deshacer.",()=>{this.db.deleteNote(e),this.renderNotes()})}confirmDeleteFavorite(e){this.openConfirmModal("Eliminar Favorito","¿Estás seguro de que quieres eliminar este versículo de tus favoritos?",()=>{this.db.deleteFavorite(e),this.renderFavorites()})}openConfirmModal(e,t,i){const o=document.querySelector("#confirm-modal"),a=document.querySelector("#confirm-title"),r=document.querySelector("#confirm-msg"),n=document.querySelector("#confirm-btn-ok");a.innerText=e,r.innerText=t,o.classList.add("active"),n.onclick=()=>{i(),this.closeConfirmModal()}}closeConfirmModal(){const e=document.querySelector("#confirm-modal");e&&e.classList.remove("active")}openLinkModal(){const e=document.querySelector("#link-modal"),t=document.querySelector("#link-url-input");e&&(t&&(t.value=""),e.classList.add("active"),t&&t.focus())}closeLinkModal(){const e=document.querySelector("#link-modal");e&&e.classList.remove("active")}applyLinkFromModal(){const e=document.querySelector("#link-url-input"),t=e?e.value.trim():"";if(t&&this._savedSelection){const i=window.getSelection();if(i.removeAllRanges(),i.addRange(this._savedSelection),this._savedSelection.collapsed){const o=document.createElement("a");o.href=t.startsWith("http")?t:`https://${t}`,o.textContent=t,o.target="_blank",this._savedSelection.insertNode(o),this._savedSelection.collapse(!1)}else document.execCommand("createLink",!1,t)}this.closeLinkModal(),this._savedSelection=null}openEditNote(e){this.renderNoteEditor(this.db.notes[e],e)}handleCopy(){if(!this.selectedVerse)return;const{book:e,chapter:t,vNum:i,text:o}=this.selectedVerse,a=`${e} ${t}:${i}
${o}`;navigator.clipboard.writeText(a).then(()=>{this.showToast("Texto copiado al portapapeles.")}),this.clearSelection()}handleVerseMenu(){this.selectedVerse&&this.showShareOptions()}exportUserData(){try{const e=this.db.exportUserData(),t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),i=URL.createObjectURL(t),o=document.createElement("a");o.href=i,o.download=`biblia_rv1960_backup_${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(i),this.showToast("Copia de seguridad descargada.")}catch(e){console.error(e),this.showToast("Error al exportar los datos.")}}importUserData(){const e=document.createElement("input");e.type="file",e.accept=".json",e.onchange=t=>{const i=t.target.files[0];if(!i)return;const o=new FileReader;o.onload=a=>{try{const r=JSON.parse(a.target.result);this.db.importUserData(r),this.showToast("Datos importados con éxito. Recargando..."),setTimeout(()=>window.location.reload(),1500)}catch(r){console.error(r),this.showToast("Error: Archivo de respaldo inválido.")}},o.readAsText(i)},e.click()}async renderSettings(){this.currentView="settings";const e=`
      <header>
        <button class="btn-icon" onclick="window.app.navigate('home')">${s("chevron-left")}</button>
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
          
          <h3 style="margin-bottom: 1.25rem; opacity: 0.6; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; display: ${this.db.settings.system_theme?"none":"block"};">Modo de Visualización</h3>
        <div style="display: ${this.db.settings.system_theme?"none":"grid"}; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
           <div class="premium-card" onclick="window.app.applyTheme(null, 'light')" 
                 style="padding: 1rem; flex-direction: row; gap: 0.75rem; border: ${this.db.settings.theme_mode==="light"?"2px solid var(--accent)":"1px solid var(--glass-border)"}">
              <div class="color-preview" style="background: #ffffff; border: 1px solid rgba(0,0,0,0.1)"></div>
              <span style="font-size: 0.85rem; font-weight: 600;">Modo Claro</span>
            </div>
            <div class="premium-card" onclick="window.app.applyTheme(null, 'dark')" 
                 style="padding: 1rem; flex-direction: row; gap: 0.75rem; border: ${this.db.settings.theme_mode==="dark"?"2px solid var(--accent)":"1px solid var(--glass-border)"}">
              <div class="color-preview" style="background: #0f172a; border: 1px solid rgba(0,0,0,0.1)"></div>
              <span style="font-size: 0.85rem; font-weight: 600;">Modo Oscuro</span>
            </div>
        </div>

          <label class="premium-card" style="padding: 1.25rem; flex-direction: row; justify-content: space-between; align-items: center; cursor: pointer; display: flex !important;">
            <div style="display: flex; align-items: center; gap: 1rem;">
              <div style="color: var(--accent);">${s("refresh-cw")}</div>
              <div style="display: flex; flex-direction: column; text-align: left;">
                <span style="font-size: 0.9rem; font-weight: 700;">Sincronizar con el sistema</span>
                <span style="font-size: 0.8rem; opacity: 0.6;">Sigue el modo claro/oscuro de tu PC</span>
              </div>
            </div>
            <div class="switch">
              <input type="checkbox" ${this.db.settings.system_theme?"checked":""} onchange="window.app.toggleSystemTheme(this.checked)">
              <span class="slider round"></span>
            </div>
          </label>
        </div>

        <div style="margin-bottom: 2rem; border-top: 1px solid var(--glass-border); padding-top: 2rem;">
          <h3 style="margin-bottom: 1.25rem; opacity: 0.6; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700;">Respaldo de Datos</h3>
          
          <div class="premium-card" onclick="window.app.exportUserData()" style="padding: 1.25rem; flex-direction: row; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <div style="display: flex; align-items: center; gap: 1rem;">
              <div style="color: var(--accent);">${s("download")}</div>
              <div style="display: flex; flex-direction: column; text-align: left;">
                <span style="font-size: 0.9rem; font-weight: 700;">Exportar Datos</span>
                <span style="font-size: 0.8rem; opacity: 0.6;">Guardar copia de seguridad (JSON)</span>
              </div>
            </div>
            <div style="opacity: 0.4;">${s("chevron-right")}</div>
          </div>
          
          <div class="premium-card" onclick="window.app.importUserData()" style="padding: 1.25rem; flex-direction: row; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 1rem;">
              <div style="color: var(--accent);">${s("upload")}</div>
              <div style="display: flex; flex-direction: column; text-align: left;">
                <span style="font-size: 0.9rem; font-weight: 700;">Importar Datos</span>
                <span style="font-size: 0.8rem; opacity: 0.6;">Restaurar desde archivo (JSON)</span>
              </div>
            </div>
            <div style="opacity: 0.4;">${s("chevron-right")}</div>
          </div>
        </div>
      </div>
    `;this.render(e)}toggleNotePinFromEditor(e){this.db.toggleNotePin(e),this.renderNoteEditor(this.db.notes[e],e)}toggleFavoritePinFromBar(){if(this.selectedFavoriteIndex===null)return;const e=this.selectedFavoriteIndex;this.db.toggleFavoritePin(e),this.renderFavorites()}toggleHighlightPinFromBar(){if(this.selectedHighlightIndex===null)return;const e=this.selectedHighlightIndex;this.db.toggleHighlightPin(e),this.renderHighlights()}toggleFavoritesSort(){this._favSortDesc=!this._favSortDesc,this.renderFavorites()}toggleHighlightsSort(){this._highlightSortDesc=!this._highlightSortDesc,this.renderHighlights()}toggleFavoriteSelection(e){const t=document.querySelector(`.fav-card[data-index="${e}"]`);if(this.selectedFavoriteIndex===e)this.clearFavoriteSelection();else{this.clearFavoriteSelection(),this.selectedFavoriteIndex=e,t&&t.classList.add("selected");const i=document.querySelector("#fav-selection-bar");i&&(i.style.display="flex")}}clearFavoriteSelection(){if(this.selectedFavoriteIndex!==null){const t=document.querySelector(`.fav-card[data-index="${this.selectedFavoriteIndex}"]`);t&&t.classList.remove("selected")}this.selectedFavoriteIndex=null;const e=document.querySelector("#fav-selection-bar");e&&(e.style.display="none")}navigateToSelectedFavorite(){if(this.selectedFavoriteIndex===null)return;const e=this.db.favorites[this.selectedFavoriteIndex];e&&(this.clearFavoriteSelection(),window.pendingVerseScroll=e.verse,this.renderReader(e.book,e.chapter))}confirmDeleteFavoriteFromBar(){if(this.selectedFavoriteIndex===null)return;const e=this.selectedFavoriteIndex;this.openConfirmModal("Eliminar Favorito","¿Estás seguro de que quieres eliminar este versículo de tus favoritos?",()=>{this.db.deleteFavorite(e),this.clearFavoriteSelection(),this.renderFavorites()})}setupFavoriteSwipeEvents(){document.querySelectorAll(".fav-card").forEach((t,i)=>{let o=0,a=0,r=!1;const n=t.closest(".fav-swipe-container"),l=n?n.querySelector(".swipe-action-bg"):null;t.ontouchstart=c=>{o=c.touches[0].clientX,t.style.transition="none",r=!1},t.ontouchmove=c=>{const p=c.touches[0].clientX-o;if(!r&&p<-5&&(r=!0,n&&n.classList.add("is-swiping")),!!r&&(a=p,a>0&&(a=0),a<-200&&(a=-200+(a+200)*.2),t.style.transform=`translateX(${a}px)`,l)){const d=Math.min(Math.abs(a)/100,1);l.style.opacity=d,l.style.transform=`scale(${.8+d*.2})`}},t.ontouchend=c=>{r&&(r=!1,t.style.transition="transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)",l&&(l.style.transition="opacity 0.3s, transform 0.3s",l.style.opacity="0",l.style.transform="scale(0.8)"),a<-150?(this.selectedFavoriteIndex=i,this.confirmDeleteFavoriteFromBar(),t.style.transform="translateX(0)",setTimeout(()=>{n&&n.classList.remove("is-swiping")},300)):(t.style.transform="translateX(0)",setTimeout(()=>{n&&n.classList.remove("is-swiping")},300)),a=0)}})}renderFavorites(){this.currentView="favorites",this.selectedFavoriteIndex=null,this._favSortDesc===void 0&&(this._favSortDesc=!0);const e=[...this.db.favorites].sort((i,o)=>{if(i.pinned&&!o.pinned)return-1;if(!i.pinned&&o.pinned)return 1;const a=new Date(i.date),r=new Date(o.date);return this._favSortDesc?r-a:a-r}),t=`
      <header>
        <button class="btn-icon" onclick="window.app.navigate('home')">${s("chevron-left")}</button>
        <h1>Favoritos</h1>
        <button class="btn-icon" onclick="window.app.toggleFavoritesSort()" title="Ordenar" style="margin-left: auto;">
          ${s("arrow-down-up")}
        </button>
      </header>
      <div class="view-container animate-entrance">
        ${e.length===0?'<p style="text-align: center; opacity: 0.5;">No tienes favoritos aún.</p>':e.map(i=>{const o=this.db.favorites.indexOf(i);return`
            <div class="premium-card fav-card fav-card-item" data-index="${o}"
                 style="margin-bottom: 1.25rem; border-left: ${i.pinned?"4px solid var(--accent)":"4px solid transparent"}; align-items: flex-start; text-align: left;"
                 onclick="window.app.toggleFavoriteSelection(${o})"
                 ondblclick="window.pendingVerseScroll='${i.verse}'; window.app.renderReader('${i.book}', '${i.chapter}')">
              <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <div style="color: var(--accent); font-size: 0.95rem; font-weight: 700; cursor: pointer; padding: 0.5rem 0; display: flex; align-items: center; gap: 0.5rem;"
                     onclick="event.stopPropagation(); window.pendingVerseScroll='${i.verse}'; window.app.renderReader('${i.book}', '${i.chapter}')">
                  ${i.pinned?`<span style="display: flex;">${s("pin")}</span>`:""}
                  ${i.book} ${i.chapter}:${i.verse}
                </div>
              </div>
              <div style="font-size: 1.05rem; line-height: 1.6; opacity: 0.9; text-align: left; width: 100%;">
                ${i.text}
              </div>
            </div>
          `}).join("")}
      </div>
      <!-- Barra flotante para favoritos -->
      <div id="fav-selection-bar" class="floating-toolbar animate-entrance" style="display: none;">
          <button class="tool-btn" onclick="window.app.toggleFavoritePinFromBar()" title="Fijar">
              ${s("pin")}
          </button>
          <button class="tool-btn" onclick="window.app.confirmDeleteFavoriteFromBar()" title="Eliminar Favorito"
              style="color: #ef4444;">
              ${s("trash-2")}
          </button>
          <button class="tool-btn" onclick="window.app.navigateToSelectedFavorite()" title="Ir al Versículo"
              style="color: var(--accent);">
              ${s("external-link")}
          </button>
          <button class="tool-btn" onclick="window.app.clearFavoriteSelection()" title="Cerrar">
              ${s("x")}
          </button>
      </div>
    `;this.render(t),this.refreshIcons()}toggleNoteSelection(e){const i=document.querySelectorAll(".note-card")[e];if(this.selectedNoteIndex===e)this.clearNoteSelection();else{this.clearNoteSelection(),this.selectedNoteIndex=e,i&&i.classList.add("selected");const o=document.querySelector("#note-selection-bar");o&&(o.style.display="flex")}}clearNoteSelection(){if(this.selectedNoteIndex!==null){const i=document.querySelectorAll(".note-card")[this.selectedNoteIndex];i&&i.classList.remove("selected")}this.selectedNoteIndex=null;const e=document.querySelector("#note-selection-bar");e&&(e.style.display="none")}handleEditNoteFromBar(){if(this.selectedNoteIndex===null)return;const e=this.selectedNoteIndex;this.openEditNote(e),this.clearNoteSelection()}handleHighlight(){const e=document.querySelector("#highlight-bar");if(e&&(e.style.display=e.style.display==="flex"?"none":"flex",e.style.display==="flex"&&this.selectedVerse)){const{book:t,chapter:i,vNum:o}=this.selectedVerse,a=this.db.isHighlighted(t,i,o),r=e;if(Array.from(r.children).forEach(n=>n.style.border="1px solid #ccc"),a){const n=a.color;Array.from(r.children).forEach(l=>{l.dataset.color===n&&(l.style.border="3px solid var(--accent)")})}}}applyHighlight(e){if(!this.selectedVerse)return;const{book:t,chapter:i,vNum:o,text:a}=this.selectedVerse;e==="transparent"?this.db.removeHighlight(t,i,o):this.db.addHighlight(t,i,o,a,e);const r=document.getElementById(`v-${o}`);if(r){const n=r.querySelector(".verse-text");n&&(e==="transparent"?(n.style.backgroundColor="transparent",n.style.color="inherit",n.style.padding="0",n.style.borderRadius="0"):(n.style.backgroundColor=e,n.style.color="#333",n.style.padding="2px 4px",n.style.borderRadius="4px",n.style.boxDecorationBreak="clone",n.style.webkitBoxDecorationBreak="clone"))}this.clearSelection()}renderHighlights(){this.currentView="highlights",this.highlightFilter||(this.highlightFilter="all"),this._highlightSortDesc===void 0&&(this._highlightSortDesc=!0);const e={};this.db&&this.db.highlights&&this.db.highlights.forEach(a=>{e[a.color]=(e[a.color]||0)+1});const t=[{id:"all",name:"Todos",color:"var(--text-main)",count:this.db.highlights.length},{id:"#fef3c7",name:"Amarillo",color:"#fef3c7",count:e["#fef3c7"]||0},{id:"#dcfce7",name:"Verde",color:"#dcfce7",count:e["#dcfce7"]||0},{id:"#dbeafe",name:"Azul",color:"#dbeafe",count:e["#dbeafe"]||0},{id:"#fae8ff",name:"Lila",color:"#fae8ff",count:e["#fae8ff"]||0},{id:"#fee2e2",name:"Rojo",color:"#fee2e2",count:e["#fee2e2"]||0},{id:"#ffedd5",name:"Naranja",color:"#ffedd5",count:e["#ffedd5"]||0}];let i=this.highlightFilter==="all"?this.db.highlights:this.db.highlights.filter(a=>a.color===this.highlightFilter);i=[...i].sort((a,r)=>{if(a.pinned&&!r.pinned)return-1;if(!a.pinned&&r.pinned)return 1;const n=new Date(a.date),l=new Date(r.date);return this._highlightSortDesc?l-n:n-l});const o=`
      <header style="flex-direction: column; height: auto; padding-bottom: 1rem;">
        <div style="display: flex; align-items: center; gap: 1rem; width: 100%; margin-bottom: 1.25rem;">
          <button class="btn-icon" onclick="window.app.navigate('home')">${s("chevron-left")}</button>
          <h1>Marcadores</h1>
          <button class="btn-icon" onclick="window.app.toggleHighlightsSort()" title="Ordenar" style="margin-left: auto;">
            ${s("arrow-down-up")}
          </button>
        </div>
        <div style="display: flex; overflow-x: auto; gap: 0.75rem; width: 100%; padding: 0.25rem; scrollbar-width: none;">
          ${t.map(a=>{const r=this.highlightFilter===a.id;return`
            <button onclick="window.app.applyHighlightFilter('${a.id}')" 
                    style="padding: 0.6rem 1.2rem; border-radius: 20px; border: ${r?"2px solid var(--accent)":"1px solid var(--glass-border)"}; 
                           background: ${r?"var(--accent)":a.id==="all"?"var(--card-bg)":a.color}; 
                           color: ${r?"white":a.id==="all"?"var(--text-main)":"#333"};
                           transition: all 0.2s ease;
                           font-size: 0.85rem; font-weight: 700; white-space: nowrap; cursor: pointer; display: flex; align-items: center; gap: 0.6rem;">
              ${a.id==="all"?s("filter"):`<div style="width: 12px; height: 12px; border-radius: 50%; background: ${a.color}; border: 1px solid rgba(0,0,0,0.1)"></div>`}
              <span style="display: flex; align-items: center; gap: 0.4rem;">
                ${a.name}
                <span style="opacity: 0.6; font-size: 0.7rem; background: ${r?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.05)"}; padding: 0.1rem 0.4rem; border-radius: 8px;">${a.count}</span>
              </span>
            </button>
          `}).join("")}
        </div>
      </header>
      <div class="view-container animate-entrance">
        ${i.length===0?`
          <div style="text-align: center; padding: 4rem 2rem; opacity: 0.5;">
            <div style="font-size: 3rem; margin-bottom: 1rem; color: var(--accent);">${s("highlighter")}</div>
            <p>No hay marcadores con este filtro.</p>
          </div>
        `:i.map(a=>{const r=this.db.highlights.indexOf(a);return`
            <div class="premium-card highlight-card" data-index="${r}" style="margin-bottom: 1.25rem; border-left: 8px solid ${a.color}; padding: 1.25rem; align-items: flex-start; text-align: left;" onclick="window.app.toggleHighlightSelection(${r})">
                <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                   <div style="color: var(--accent); font-size: 0.9rem; font-weight: 800; display: flex; align-items: center; gap: 0.5rem;">
                      ${a.pinned?`<span style="display: flex;">${s("pin")}</span>`:""}
                      ${a.book} ${a.chapter}:${a.verse}
                   </div>
                   <div style="width: 14px; height: 14px; border-radius: 50%; background: ${a.color}; border: 1px solid rgba(0,0,0,0.1);"></div>
                </div>
                <div style="font-size: 1.05rem; line-height: 1.6; color: var(--text-main); font-family: 'Inter', sans-serif;">${a.text}</div>
            </div>
          `}).join("")}
      </div>
      <!-- Barra flotante para marcadores -->
      <div id="highlight-selection-bar" class="floating-toolbar animate-entrance" style="display: none;">
          <button class="tool-btn" onclick="window.app.toggleHighlightPinFromBar()" title="Fijar">
              ${s("pin")}
          </button>
          <button class="tool-btn" onclick="window.app.confirmDeleteHighlightFromBar()" title="Eliminar Marcador"
              style="color: #ef4444;">
              ${s("trash-2")}
          </button>
          <button class="tool-btn" onclick="window.app.navigateToSelectedHighlight()" title="Ir al Versículo"
              style="color: var(--accent);">
              ${s("external-link")}
          </button>
          <button class="tool-btn" onclick="window.app.clearHighlightSelection()" title="Cerrar">
              ${s("x")}
          </button>
      </div>
    `;this.render(o)}applyHighlightFilter(e){this.highlightFilter=e,this.renderHighlights()}toggleHighlightSelection(e){const t=document.querySelector(`.highlight-card[data-index="${e}"]`);if(this.selectedHighlightIndex===e)this.clearHighlightSelection();else{this.clearHighlightSelection(),this.selectedHighlightIndex=e,t&&t.classList.add("selected");const i=document.querySelector("#highlight-selection-bar");i&&(i.style.display="flex")}}clearHighlightSelection(){if(this.selectedHighlightIndex!==null){const t=document.querySelector(`.highlight-card[data-index="${this.selectedHighlightIndex}"]`);t&&t.classList.remove("selected")}this.selectedHighlightIndex=null;const e=document.querySelector("#highlight-selection-bar");e&&(e.style.display="none")}navigateToSelectedHighlight(){if(this.selectedHighlightIndex===null)return;const e=this.db.highlights[this.selectedHighlightIndex];e&&(this.clearHighlightSelection(),window.pendingVerseScroll=e.verse,this.renderReader(e.book,e.chapter))}confirmDeleteHighlightFromBar(){if(this.selectedHighlightIndex===null)return;const e=this.selectedHighlightIndex;this.openConfirmModal("Eliminar Marcador","¿Quieres eliminar este marcador?",()=>{this.db.deleteHighlight(e),this.clearHighlightSelection(),this.renderHighlights()})}confirmDeleteHighlight(e){this.openConfirmModal("Eliminar Marcador","¿Quieres eliminar este marcador?",()=>{this.db.deleteHighlight(e),this.renderHighlights()})}confirmDeleteNoteFromBar(){if(this.selectedNoteIndex===null)return;const e=this.selectedNoteIndex;this.openConfirmModal("Eliminar Nota","¿Estás seguro de que quieres eliminar esta nota? Esta acción no se puede deshacer.",()=>{this.db.deleteNote(e),this.clearNoteSelection(),this.renderNotes()})}renderNotes(){this.currentView="notes",this.selectedNoteIndex=null,this._notesSortDesc===void 0&&(this._notesSortDesc=!0);const e=[...this.db.notes].sort((i,o)=>{if(i.pinned&&!o.pinned)return-1;if(!i.pinned&&o.pinned)return 1;const a=new Date(i.date),r=new Date(o.date);return this._notesSortDesc?r-a:a-r}),t=`
      <header>
      <button class="btn-icon" onclick="window.app.navigate('home')">${s("chevron-left")}</button>
      <h1>Mis Notas</h1>
      <div style="display: flex; gap: 0.5rem; margin-left: auto;">
        <button class="btn-icon" onclick="window.app.createNewNoteFromList()" title="Nueva Nota">
          ${s("plus")}
        </button>
        <button class="btn-icon" onclick="window.app.toggleNotesSort()" title="Ordenar">
          ${s("arrow-down-up")}
        </button>
      </div>
    </header>
      <div class="view-container animate-entrance">
        ${e.length===0?'<p style="text-align: center; opacity: 0.5; margin-top: 3rem;">No tienes notas aún.</p>':e.map(i=>{const o=this.db.notes.indexOf(i),a=(i.note||"").replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim(),r=a.length>80?a.substring(0,80)+"...":a;return`
            <div class="note-item-compact" onclick="window.app.openEditNote(${o})" style="display: flex; align-items: center; width: 100%; box-sizing: border-box; overflow: hidden; border-left: ${i.pinned?"4px solid var(--accent)":"1px solid var(--glass-border)"}">
            <div class="note-info-compact" style="flex: 1; min-width: 0; overflow: hidden;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem; gap: 0.5rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem; flex: 1; min-width: 0;">
                  ${i.pinned?`<span style="color: var(--accent); flex-shrink: 0; display: flex;">${s("pin")}</span>`:""}
                  <span class="note-title-compact" style="font-weight: 800; color: var(--accent); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${i.title||"Sin título"}</span>
                </div>
                <span class="note-date-compact" style="font-size: 0.75rem; opacity: 0.5; flex-shrink: 0;">${new Date(i.date).toLocaleDateString()}</span>
              </div>
              <div class="note-preview" style="font-size: 0.85rem; opacity: 0.7; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%;">
                ${r||'<span style="font-style: italic; opacity: 0.5;">Sin contenido</span>'}
              </div>
            </div>
            <div class="note-chevron" style="margin-left: 1rem; flex-shrink: 0;">${s("chevron-right")}</div>
          </div>
          `}).join("")}
      </div>
    `;this.render(t),this.refreshIcons()}toggleNotesSort(){this._notesSortDesc=!this._notesSortDesc,this.renderNotes()}createNewNoteFromList(){const e={book:"Proverbios",chapter:2,vNum:6,text:"Porque Jehová da la sabiduría, y de su boca viene el conocimiento y la inteligencia."};this.renderNoteEditor(e)}renderNoteEditor(e,t=null){const i=this.currentView==="notes"||this.currentView==="edit-note"?"notes":"reader";this.currentView=t!==null?"edit-note":"new-note";const o=t===null;o&&(this._tempNewNoteVerse={book:e.book,chapter:e.chapter,verse:e.vNum||e.verse,text:e.text});const a=e.title||"",r=e.note||"",n=`${e.book} ${e.chapter}:${e.vNum||e.verse}`,l=o?"":new Date(e.date).toLocaleString(),c=`
      <header>
        <button class="btn-icon" onclick="window.app.navigate('${i}')">${s("chevron-left")}</button>
        <h1>${o?"Nueva Nota":"Editar Nota"}</h1>
        <div style="display: flex; gap: 0.5rem; margin-left: auto;">
          ${o?"":`
          <button class="btn-icon" onclick="window.app.toggleNotePinFromEditor(${t})" title="Fijar" style="color: ${e.pinned?"var(--accent)":"var(--text-muted)"};">
            ${s(e.pinned?"pin-off":"pin")}
          </button>`}
          <button class="btn-icon" onclick="window.app.saveNoteEditor(${t})" title="Guardar" style="color: var(--accent);">
            ${s("check")}
          </button>
          ${o?"":`
          <button class="btn-icon" onclick="window.app.confirmDeleteEditNote(${t})" title="Eliminar" style="color: #ef4444;">
            ${s("trash-2")}
          </button>`}
        </div>
      </header>
      <div class="view-container animate-entrance">
        <div class="verse-preview-card" style="margin-bottom: 1.5rem;">
          <div class="verse-preview-ref" style="font-weight: 800; color: var(--accent); margin-bottom: 0.5rem;">${n}</div>
          <div class="verse-preview-text" style="font-style: italic; opacity: 0.8;">"${e.text}"</div>
        </div>

        <label class="form-label-premium">Título</label>
        <input id="edit-note-title" class="edit-input-premium" type="text" value="${a.replace(/"/g,"&quot;")}" placeholder="Título de la nota" style="width: 100%; padding: 1rem; margin-bottom: 1.5rem; border-radius: 12px; border: 1px solid var(--glass-border); background: var(--card-bg); color: var(--text-main); font-weight: 700;">

        <label class="form-label-premium">Contenido de la nota</label>
        <div class="editor-container" style="min-height: 400px; margin-top: 0.5rem;">
          <div id="full-note-toolbar" class="editor-toolbar">
              <div class="toolbar-group">
                  <button type="button" class="toolbar-btn" data-command="bold" title="Negrita">${s("bold")}</button>
                  <button type="button" class="toolbar-btn" data-command="italic" title="Cursiva">${s("italic")}</button>
                  <button type="button" class="toolbar-btn" data-command="underline" title="Subrayado">${s("underline")}</button>
                  <button type="button" class="toolbar-btn" data-command="strikeThrough" title="Tachado">${s("strikethrough")}</button>
              </div>
              <div class="toolbar-divider"></div>
              <div class="toolbar-group">
                  <button type="button" class="toolbar-btn" data-command="insertUnorderedList" title="Lista Viñetas">${s("list")}</button>
                  <button type="button" class="toolbar-btn" data-command="insertOrderedList" title="Lista Numerada">${s("list-ordered")}</button>
              </div>
              <div class="toolbar-divider"></div>
              <div class="toolbar-group">
                  <button type="button" class="toolbar-btn" data-command="justifyLeft" title="Alinear Izquierda">${s("align-left")}</button>
                  <button type="button" class="toolbar-btn" data-command="justifyCenter" title="Centrar">${s("align-center")}</button>
                  <button type="button" class="toolbar-btn" data-command="justifyRight" title="Alinear Derecha">${s("align-right")}</button>
              </div>
              <div class="toolbar-divider"></div>
              <div class="toolbar-group">
                  <button type="button" class="toolbar-btn" data-command="formatBlock" data-value="h1" title="Título 1">${s("heading-1")}</button>
                  <button type="button" class="toolbar-btn" data-command="formatBlock" data-value="h2" title="Título 2">${s("heading-2")}</button>
                  <button type="button" class="toolbar-btn" data-command="formatBlock" data-value="h3" title="Título 3">${s("heading-3")}</button>
                  <button type="button" class="toolbar-btn" data-command="formatBlock" data-value="blockquote" title="Cita">${s("quote")}</button>
                  <button type="button" class="toolbar-btn" data-command="formatBlock" data-value="pre" title="Código">${s("code")}</button>
              </div>
              <div class="toolbar-divider"></div>
              <div class="toolbar-group">
                  <button type="button" class="toolbar-btn" data-command="insertHorizontalRule" title="Línea Horizontal">${s("minus")}</button>
                  <button type="button" class="toolbar-btn" data-command="undo" title="Deshacer">${s("undo-2")}</button>
                  <button type="button" class="toolbar-btn" data-command="redo" title="Rehacer">${s("redo-2")}</button>
              </div>
              <div class="toolbar-divider"></div>
              <div class="toolbar-group">
                  <button type="button" class="toolbar-btn" data-command="createLink" title="Insertar Enlace">${s("link")}</button>
                  <button type="button" class="toolbar-btn" data-command="removeFormat" title="Limpiar Formato">${s("eraser")}</button>
              </div>
          </div>
          <div id="edit-note-content" class="editor-content" contenteditable="true" data-placeholder="¿Qué te inspira Dios para escribir hoy?..." style="min-height: 350px;">${r}</div>
        </div>

        <div class="edit-note-footer" style="margin-top: 1rem; opacity: 0.5; font-size: 0.8rem;">${o?"Nueva nota":`Creado el ${l}`}</div>
      </div>
    `;this.render(c),this.setupEditorToolbar("#edit-note-content","#full-note-toolbar"),this.refreshIcons()}saveNoteEditor(e=null){const t=document.getElementById("edit-note-title")?.value?.trim()||"Sin título",i=document.getElementById("edit-note-content")?.innerHTML?.trim()||"";if(e!==null)this.db.updateNote(e,i,t),this.showToast("Nota actualizada.");else{const{book:o,chapter:a,verse:r,text:n}=this._tempNewNoteVerse;this.db.addNote(o,a,r,n,i,t),this.showToast("Nota guardada.")}this.renderNotes()}confirmDeleteEditNote(e){this.openConfirmModal("Eliminar Nota","¿Estás seguro de que quieres eliminar esta nota?",()=>{this.db.deleteNote(e),this.renderNotes()})}confirmDeleteNoteFromBar(){this.selectedNoteIndex!==null&&(this.confirmDeleteNote(this.selectedNoteIndex),this.clearNoteSelection())}renderSearch(){this.currentView="search";const e=this.db.getBooks();this.searchFilterValue||(this.searchFilterValue="");const t=`
      <header>
        <button class="btn-icon" onclick="window.app.navigate('home')">${s("chevron-left")}</button>
        <h1>Buscador</h1>
      </header>
      <div class="view-container animate-entrance">
        
        <div style="display: flex; gap: 0.75rem; margin-bottom: 1.5rem; align-items: center;">
          <input type="text" id="search-input" placeholder="¿Qué estás buscando?..." class="search-box" style="margin-bottom: 0; flex-grow: 1;">
          <button class="btn-icon" onclick="window.app.openSearchFilterModal()" style="border: 1px solid var(--glass-border); border-radius: 12px; width: 50px; height: 50px; background: var(--card-bg); color: var(--accent);">
            ${s("filter")}
          </button>
        </div>

        <div id="active-filter-indicator" style="margin-bottom: 1rem; display: ${this.searchFilterValue?"block":"none"};">
            <span style="background: var(--accent-soft); color: var(--accent); padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.5rem;">
                Filtrando por: <b id="filter-name">${this.searchFilterValue}</b>
                <span onclick="window.app.applySearchFilter('')" style="cursor: pointer; opacity: 0.6;">${s("x")}</span>
            </span>
        </div>

        <div id="search-results">
            <div style="text-align: center; opacity: 0.5; margin-top: 3rem;">
                ${s("search")}
                <p style="margin-top: 1rem;">Escribe para buscar versículos</p>
            </div>
        </div>
      </div>

      <!-- Modal de Filtro de Búsqueda -->
      <div id="search-filter-modal" class="modal-overlay">
        <div class="modal-box" style="max-height: 85vh; display: flex; flex-direction: column;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <h2 class="modal-title" style="margin: 0;">Filtrar por Libro</h2>
                <button class="btn-icon" onclick="window.app.closeSearchFilterModal()">${s("x")}</button>
            </div>
            
            <div style="overflow-y: auto; flex-grow: 1; padding: 0.5rem;" class="search-modal-grid">
                <button class="premium-card ${this.searchFilterValue===""?"selected":""}" 
                        onclick="window.app.applySearchFilter('')">
                    Toda la Biblia
                </button>
                ${e.map(o=>`
                    <button class="premium-card ${this.searchFilterValue===o?"selected":""}" 
                            onclick="window.app.applySearchFilter('${o}')">
                        ${o}
                    </button>
                `).join("")}
            </div>
        </div>
      </div>
    `;this.render(t),this.refreshIcons();const i=document.querySelector("#search-input");this.lastSearchQuery&&(i.value=this.lastSearchQuery,this.performSearch(this.lastSearchQuery,this.searchFilterValue)),i.addEventListener("input",o=>{const a=o.target.value;this.lastSearchQuery=a,a.length>2&&this.performSearch(a,this.searchFilterValue)})}openSearchFilterModal(){const e=document.querySelector("#search-filter-modal");e&&e.classList.add("active")}closeSearchFilterModal(){const e=document.querySelector("#search-filter-modal");e&&e.classList.remove("active")}applySearchFilter(e){this.searchFilterValue=e,this.closeSearchFilterModal();const t=document.querySelector("#active-filter-indicator"),i=document.querySelector("#filter-name");e?(t&&(t.style.display="block"),i&&(i.innerText=e)):t&&(t.style.display="none");const o=document.querySelector("#search-input");o&&o.value.length>2?this.performSearch(o.value,e):this.renderSearch()}performSearch(e,t=""){const i=this.db.search(e,t),o=document.querySelector("#search-results");if(i.length===0){o.innerHTML='<p style="text-align: center; opacity: 0.5; margin-top: 2rem;">No se encontraron resultados.</p>';return}o.innerHTML=`
      <p style="margin-bottom: 1.25rem; opacity: 0.5; font-size: 0.9rem;">${i.length} coincidencias encontradas ${t?`en ${t}`:""}</p>
      ${i.map(a=>`
        <div class="premium-card" style="margin-bottom: 1rem; align-items: flex-start; text-align: left; cursor: pointer;" onclick="window.app.renderReader('${a.book}', '${a.chapter}')">
          <div style="color: var(--accent); font-size: 0.85rem; margin-bottom: 0.4rem; font-weight: 700;">${a.book} ${a.chapter}:${a.vNum}</div>
          <div style="font-size: 1rem; line-height: 1.5;">${a.text}</div>
        </div>
      `).join("")}
    `}renderDictionary(){this.currentView="dict";const e=`
      <header>
        <button class="btn-icon" onclick="window.app.navigate('home')">${s("chevron-left")}</button>
        <h1>Diccionario</h1>
      </header>
      <div class="view-container animate-entrance">
        <div style="position: relative; margin-bottom: 1.5rem;">
          <input type="text" id="dict-input" placeholder="¿Qué término buscas?..." class="search-box" style="margin-bottom: 0;">
          <button id="clear-dict" style="position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); background: none; border: none; color: var(--accent); cursor: pointer; display: none;">
            ${s("x-circle")}
          </button>
        </div>
        <div id="dict-results">
            <div style="text-align: center; opacity: 0.5; margin-top: 3rem;">
                ${s("book-a")}
                <p style="margin-top: 1rem;">Busca palabras bíblicas y significados</p>
            </div>
        </div>
      </div>
    `;this.render(e);const t=document.querySelector("#dict-input"),i=document.querySelector("#clear-dict");t.addEventListener("input",o=>{this.performDictSearch(o.target.value),i.style.display=o.target.value?"block":"none"}),i.addEventListener("click",()=>{t.value="",i.style.display="none",this.performDictSearch("")})}performDictSearch(e){const t=document.querySelector("#dict-results");if(!e){t.innerHTML=`
            <div style="text-align: center; opacity: 0.5; margin-top: 3rem;">
                ${s("book-a")}
                <p style="margin-top: 1rem;">Busca palabras bíblicas y significados</p>
            </div>
        `;return}const i=this.db.searchDictionary(e);t.innerHTML=`
      <p style="margin-bottom: 1rem; opacity: 0.5; font-size: 0.85rem;">${i.length} definiciones encontradas</p>
      ${i.map(o=>`
        <div class="premium-card animate-entrance" style="margin-bottom: 1.25rem; align-items: flex-start; text-align: left; padding: 1.5rem; background: var(--bg-color); border-color: var(--accent-soft);">
          <h3 style="color: var(--accent); margin-bottom: 0.75rem; font-size: 1.2rem; font-family: 'Playfair Display', serif;">${o.term}</h3>
          <p style="font-size: 1rem; line-height: 1.7; color: var(--text-main); font-weight: 400;">${o.definition}</p>
        </div>
      `).join("")}
    `}renderAbout(){this.currentView="about";const e=`
      <header>
        <button class="btn-icon" onclick="window.app.navigate('home')">${s("chevron-left")}</button>
        <h1>Acerca de</h1>
      </header>
      <div class="view-container animate-entrance" style="text-align: center; display: flex; flex-direction: column; gap: 1.5rem; padding-top: 2rem;">
        <div style="margin: 0 auto; width: 100px; height: 100px; position: relative;">
          <img src="./icon.png" alt="Logo" style="width: 100%; height: 100%; object-fit: contain; border-radius: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.15); border: 3px solid var(--accent-soft);">
        </div>
        
        <div>
          <h2 style="font-size: 1.8rem; margin-bottom: 0.25rem; color: var(--text-main);">Biblia Cristiana</h2>
          <p style="opacity: 0.5; font-weight: 600; letter-spacing: 1px; font-size: 0.8rem;">REINA VALERA 1960</p>
        </div>

      <div class="premium-card" style="background: var(--accent-soft); border-color: var(--accent); padding: 3.5rem 2rem; max-width: 600px; margin: 0 auto; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 180px; overflow: visible;">
        <div style="position: absolute; top: 10px; right: 20px; font-size: 7rem; opacity: 0.1; font-family: 'Playfair Display', serif; pointer-events: none; line-height: 1;">"</div>
        <p style="font-style: italic; font-size: 1.25rem; line-height: 1.8; font-family: 'Playfair Display', serif; margin: 0; position: relative; z-index: 1; text-align: center; color: var(--text-main);">
          "Lámpara es a mis pies tu palabra, y lumbrera a mi camino."
        </p>
        <p style="margin-top: 1.5rem; color: var(--accent); font-weight: 800; font-size: 1rem; text-transform: uppercase; letter-spacing: 2px; position: relative; z-index: 1;">Salmos 119:105</p>
      </div>

        <div style="display: flex; flex-direction: column; gap: 1.25rem;">
          <div style="display: flex; flex-direction: column; gap: 0.75rem; align-items: center;">
            <p style="font-size: 0.95rem; opacity: 0.8;">Desarrollado por <b style="color: var(--text-main);">Life Code Studios</b></p>
            <p style="font-size: 0.85rem; opacity: 0.6; margin-top: -0.5rem;">Developer: <span onclick="window.app.handleAboutClick()" style="cursor: pointer; color: var(--accent); font-weight: 700;">krafairus</span></p>
            
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center; margin-top: 0.5rem;">
              <a href="https://www.facebook.com/profile.php?id=61587882503975" target="_blank" class="about-action-btn" style="background: #1877F2; color: white; border: none;">
                ${s("facebook")} Facebook
              </a>
              <a href="https://github.com/krafairus/biblia-cristiana-rv1960-app" target="_blank" class="about-action-btn">
                ${s("github")} GitHub
              </a>
            </div>
          </div>

          <div style="height: 1px; background: var(--glass-border); width: 40%; margin: 0.5rem auto;"></div>

          <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">
            <p style="opacity: 0.6; font-size: 0.85rem;">Dedicada a la congregación:</p>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.75rem;">
                <img src="./img/logo-congregacion.png" alt="" onerror="this.style.display='none'" style="max-height: 80px; width: auto; border-radius: 12px;">
                <h3 style="color: var(--accent); font-size: 1.2rem;">"Sembradores de luz y esperanza"</h3>
            </div>
            <a href="https://www.facebook.com/p/Sembradores-de-luz-y-esperanza-100079821227480/" target="_blank" class="about-action-btn" style="background: #1877F2; color: white;">
              ${s("facebook")} Ir a Facebook
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
                  ${s("coffee")} Donar en Ko-fi
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
        <button class="btn-icon" onclick="window.app.navigate('home')">${s("chevron-left")}</button>
        <h1>Versículo del Día</h1>
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
                   style="min-width: 60px; height: 60px; border-radius: 12px; background-image: url('./img/bg-verse-${t}.png'); background-size: cover; border: 2px solid var(--glass-border); flex-shrink: 0;">
              </div>
            `).join("")}
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; width: 100%;">
            <button class="premium-card" onclick="window.app.handleCopyVod()" style="flex-direction: row; gap: 0.5rem; padding: 1rem; border: 1px solid var(--accent); color: var(--text-main);">
                ${s("copy")} Copiar
            </button>
            <button class="premium-card" onclick="window.app.showShareOptions()" style="flex-direction: row; gap: 0.5rem; padding: 1rem; background: var(--accent); color: white; border: none;">
                ${s("share-2")} Compartir
            </button>
        </div>
      </div>
    `;this.render(e),this.loadDailyVerse()}renderShareVerse(e){this.currentView="share-verse",this.currentVod=e;const t=`
      <header>
        <button class="btn-icon" onclick="window.pendingVerseScroll='${e.vNum}'; window.app.renderReader('${e.book}', '${e.chapter}')">${s("chevron-left")}</button>
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
                   style="min-width: 60px; height: 60px; border-radius: 12px; background-image: url('./img/bg-verse-${i}.png'); background-size: cover; border: 2px solid var(--glass-border); flex-shrink: 0;">
              </div>
            `).join("")}
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr; gap: 1rem; width: 100%;">
            <button class="premium-card" onclick="window.app.showShareOptions()" style="flex-direction: row; gap: 0.5rem; padding: 1.25rem; background: var(--accent); color: white; border: none;">
                ${s("share-2")} Compartir Imagen
            </button>
        </div>
      </div>
    `;this.render(t),this.changeVodBg(1)}changeVodBg(e){this.currentVodBg=`./img/bg-verse-${e}.png`;const t=document.querySelector("#vod-card");t&&(t.style.backgroundImage=`url('${this.currentVodBg}')`),document.querySelectorAll(".bg-thumb").forEach((i,o)=>{i.style.borderColor=o+1===e?"var(--accent)":"var(--glass-border)"})}handleCopyVod(){if(!this.currentVod)return;const e=`"${this.currentVod.text}" - ${this.currentVod.ref}

Enviado desde Biblia Cristiana RV 1960`;navigator.clipboard.writeText(e).then(()=>this.showToast("Copiado al portapapeles"))}showShareOptions(){const e=document.querySelector("#share-modal");if(!e)return;const t=document.querySelector("#share-modal-img-text"),i=document.querySelector("#share-modal-txt-text"),o=document.querySelector("#share-modal-txt-icon");this.currentView==="reader"?(t&&(t.innerText="Compartir Imagen"),i&&(i.innerText="Copiar Texto"),o&&o.setAttribute("data-lucide","copy")):(t&&(t.innerText="Compartir Imagen"),i&&(i.innerText="Compartir como Texto"),o&&o.setAttribute("data-lucide","share-2")),this.refreshIcons(),e.classList.add("active")}closeShareModal(){const e=document.querySelector("#share-modal");e&&e.classList.remove("active")}async loadDailyVerse(){try{const e=this.db.getVerseOfDay();if(!e)throw new Error("No Bible data");this.currentVod={text:e.text,ref:`${e.book} ${e.chapter}:${e.verse}`},this.updateVodUI()}catch(e){console.error("Error loading VOD:",e);const t=document.querySelector("#vod-content p");t&&(t.innerText="No se pudo cargar el versículo.")}}updateVodUI(){const e=document.querySelector("#vod-card"),t=document.querySelector("#vod-content");!e||!t||(e.style.backgroundImage=`url('${this.currentVodBg}')`,t.innerHTML=`
      <p style="font-size: 1.4rem; font-style: italic; line-height: 1.6; margin-bottom: 1.5rem; font-family: 'Playfair Display', serif;">
        "${this.currentVod.text}"
      </p>
      <div style="font-weight: 700; color: #fff; font-size: 1.1rem; margin-bottom: 0.25rem;">${this.currentVod.ref}</div>
      <div style="font-weight: 700; color: var(--accent); font-size: 0.8rem; letter-spacing: 1px;">REINA VALERA 1960</div>
    `)}async generateVerseCanvas(){return new Promise((e,t)=>{const i=document.createElement("canvas");i.width=1080,i.height=1080;const o=i.getContext("2d"),a=new Image;a.src=this.currentVodBg,a.onload=()=>{try{o.drawImage(a,0,0,1080,1080),o.fillStyle="rgba(0,0,0,0.45)",o.fillRect(0,0,1080,1080),o.fillStyle="white",o.textAlign="center",o.textBaseline="middle";const r=54;o.font=`italic ${r}px serif`,document.fonts.check(`italic ${r}px "Playfair Display"`)&&(o.font=`italic ${r}px "Playfair Display", serif`);const n=`"${this.currentVod.text}"`.split(" ");let l="",c=[];const p=860;for(let h=0;h<n.length;h++){let m=l+n[h]+" ";o.measureText(m).width>p&&h>0?(c.push(l),l=n[h]+" "):l=m}c.push(l);let d=540-c.length*r*1.3/2;c.forEach((h,m)=>{o.fillText(h.trim(),540,d+m*r*1.3)}),o.fillStyle="#c29958",o.font="bold 48px sans-serif",o.fillText(this.currentVod.ref.toUpperCase(),540,d+c.length*r*1.3+80),o.fillStyle="rgba(255,255,255,0.6)",o.font="30px sans-serif",o.fillText("BIBLIA CRISTIANA RV1960",540,1020),e(i)}catch(r){t(r)}},a.onerror=r=>{console.error("Error cargando fondo:",r),t(new Error("Error al cargar el fondo"))}})}async shareVerse(e){this.closeShareModal();let t=this.currentVod;if(this.currentView==="reader"&&this.selectedVerse){const o=this.selectedVerse;t={text:o.text,ref:`${o.book} ${o.chapter}:${o.vNum}`},e==="image"&&(this.currentVod=t)}if(!t)return;const i=`"${t.text}" 

- ${t.ref}
Leído en Biblia Cristiana RV 1960`;if(e==="text"){const o={title:"Versículo Bíblico",text:i};if(navigator.share&&navigator.canShare&&navigator.canShare(o))try{await navigator.share(o)}catch(a){a.name!=="AbortError"&&this.handleCopyText(i)}else this.handleCopyText(i)}else if(e==="image"){this.showToast("Creando imagen...");try{const o=await this.generateVerseCanvas();o.toBlob(async a=>{if(!a){this.showToast("Error generando imagen");return}const r=new File([a],"versiculo.jpg",{type:"image/jpeg"}),n={title:"Versículo Bíblico",text:i,files:[r]};if(navigator.share&&navigator.canShare&&navigator.canShare(n))try{await navigator.share(n)}catch(l){console.warn("Share failed, downloading instead",l),l.name!=="AbortError"&&this.fallbackDownload(o)}else this.fallbackDownload(o)},"image/jpeg",.9)}catch(o){console.error("Share error:",o),this.showToast("Error al procesar imagen")}}}handleCopyText(e){navigator.clipboard.writeText(e).then(()=>this.showToast("Copiado al portapapeles")).catch(()=>this.showToast("No se pudo copiar"))}async saveImageDirectly(){await this.shareVerse("image")}fallbackDownload(e){e.toBlob(t=>{const i=URL.createObjectURL(t),o=document.createElement("a"),a=new Date().getTime();o.download=`bendicion_${a}.jpg`,o.href=i,document.body.appendChild(o),o.click(),document.body.removeChild(o),this.showToast("Intento de descarga iniciado..."),setTimeout(()=>URL.revokeObjectURL(i),5e3)},"image/jpeg",.9)}handleAboutClick(){this.aboutClickCount++,this.aboutClickCount>=5&&(this.aboutClickCount=0,this.openLoveModal()),clearTimeout(this.aboutClickTimeout),this.aboutClickTimeout=setTimeout(()=>{this.aboutClickCount=0},2e3)}openLoveModal(){const e=document.querySelector("#love-modal");e&&e.classList.add("active")}closeLoveModal(){const e=document.querySelector("#love-modal");e&&e.classList.remove("active")}async renderDevotional(){this.currentView="devotional";const e=`
      <header>
        <button class="btn-icon" onclick="window.app.renderHome()">${s("arrow-left")}</button>
        <h1>Devocional Semanal</h1>
        <button class="btn-icon history-btn" onclick="window.app.renderDevotionalHistory()">${s("history")}</button>
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
                <div style="font-size: 3rem; color: var(--accent); margin-bottom: 1rem;">${s("wifi-off")}</div>
                <h3 style="margin-bottom: 0.5rem;">Sin Conexión</h3>
                <p style="opacity: 0.7; margin-bottom: 1.5rem;">Revise su conexión a internet y pruebe nuevamente.</p>
                <button class="btn-primary" onclick="window.app.loadDevotionalData()">Reintentar</button>
            </div>
        `,this.refreshIcons();return}try{const t=await fetch("https://dataconnect-kohl.vercel.app/biblia-cristiana-rv1960-app/devocional-last.json?"+new Date().getTime());if(!t.ok)throw new Error("No se pudo cargar el devocional");const i=await t.json();this.renderDevotionalView(i,!1)}catch(t){console.error(t),e.innerHTML=`
            <div class="error-state" style="text-align: center; padding: 3rem 1rem;">
                <div style="font-size: 3rem; color: #ef4444; margin-bottom: 1rem;">${s("alert-circle")}</div>
                <h3 style="margin-bottom: 0.5rem;">Error al Cargar</h3>
                <p style="opacity: 0.7; margin-bottom: 1.5rem;">Revise su conexión a internet y pruebe nuevamente.<br>Si el error persiste, puede reportarlo en GitHub.</p>
                <div style="display: flex; flex-direction: column; gap: 0.75rem; align-items: center;">
                  <button class="btn-primary" onclick="window.app.loadDevotionalData()">Reintentar</button>
                  <button class="btn-secondary" onclick="window.open('https://github.com/${this.repo}/issues', '_blank')" style="background: var(--card-bg); color: var(--text-main); border: 1px solid var(--glass-border); padding: 0.8rem 1.5rem; border-radius: 12px; font-weight: 700; cursor: pointer;">
                    ${s("github")} Reportar en GitHub
                  </button>
                </div>
            </div>
        `,this.refreshIcons()}}async renderDevotionalHistory(){this.currentView="devotional-history";const e=`
      <header>
        <button class="btn-icon" onclick="window.app.renderDevotional()">${s("arrow-left")}</button>
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
      `;this.render(e);const t=document.getElementById("history-content");try{const i=await fetch("https://dataconnect-kohl.vercel.app/biblia-cristiana-rv1960-app/devocional-index.json?"+new Date().getTime());let o=[];if(i.ok)o=await i.json();else throw new Error("No se pudo cargar el historial.");if(o.length===0){t.innerHTML='<div style="text-align: center; padding: 2rem; opacity: 0.6;">No hay devocionales anteriores.</div>';return}t.innerHTML=o.reverse().map(a=>`
            <div class="premium-card" onclick="window.app.loadDevotionalFromHistory('${a.file}')" style="padding: 1rem; flex-direction: row; align-items: center; justify-content: space-between;">
                <div>
                    <h3 style="font-size: 1rem; margin-bottom: 0.25rem;">${a.titulo}</h3>
                    <span style="font-size: 0.8rem; opacity: 0.6;">${a.fecha||""}</span>
                </div>
                <div style="opacity: 0.4;">${s("chevron-right")}</div>
            </div>
          `).join(""),this.refreshIcons()}catch(i){console.error(i),t.innerHTML=`
        <div class="error-state" style="text-align: center; padding: 3rem 1rem;">
          <div style="font-size: 3rem; color: #ef4444; margin-bottom: 1rem;">${s("alert-circle")}</div>
          <h3 style="margin-bottom: 0.5rem;">No se pudo cargar el historial</h3>
          <p style="opacity: 0.7; margin-bottom: 1.5rem;">Revise su conexión a internet y pruebe nuevamente.</p>
          <button class="btn-primary" onclick="window.app.renderDevotionalHistory()">Reintentar</button>
        </div>
      `,this.refreshIcons()}}async loadDevotionalFromHistory(e){this.showToast("Cargando devocional...");try{const t=await fetch(`https://dataconnect-kohl.vercel.app/${e}`);if(!t.ok)throw new Error("No encontrado");const i=await t.json();this.renderDevotionalView(i,!0)}catch{this.showToast("No se pudo abrir este devocional.")}}renderDevotionalView(e,t=!1){t&&(this.currentView="devotional-detail");const i=`
      <header>
        <button class="btn-icon" onclick="${t?"window.app.renderDevotionalHistory()":"window.app.renderHome()"}">${s("arrow-left")}</button>
        <h1>${t?"Devocional":"Devocional Semanal"}</h1>
        ${t?"":`<button class="btn-icon history-btn" onclick="window.app.renderDevotionalHistory()">${s("history")}</button>`}
      </header>
      <div class="view-container animate-entrance" style="padding-bottom: 2rem;">
        <div style="width: 100%; max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.5rem;">
            <div class="premium-card" style="padding: 0; overflow: hidden; border-radius: var(--radius); border: 1px solid var(--glass-border);">
              <div style="background: var(--accent); padding: 1.5rem; color: white; text-align: center; border-radius: var(--radius) var(--radius) 0 0;">
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
                        <h4 style="color: var(--accent); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">${s("heart-handshake")} Oración</h4>
                        <p style="font-style: italic; opacity: 0.9;">${e.oracion}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    `;this.render(i)}}window.app=new y;
