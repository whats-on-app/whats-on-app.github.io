(this.webpackJsonpwhatson=this.webpackJsonpwhatson||[]).push([[22],{135:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n(0),o=n.n(a),i=n(1),l=n(8),c=n(9),s=n(37),m=n(56),d=n(47),u=n(74);var g,v=e=>{let{kindURL:t,id:n}=e;const{error:r,loading:a,data:i}=Object(m.a)(["https://api.themoviedb.org/3/".concat(Object(d.a)(t),"/").concat(n),"?api_key=".concat("70c91e191b36e50e02e885a0fe8ccfaa")].join(""));return a?o.a.createElement(u.a,{loading:!0}):r?o.a.createElement(u.a,{error:!0}):o.a.createElement(u.a,Object.assign({id:n,kindURL:t},i))},b=n(48),p=n(31),h=n(39);const f=i.d.div(g||(g=Object(r.a)(["\n\tflex: 1\n\tdisplay: flex;\n\tflex-direction: column;\n\ttransition: 0.2s all;\n"]))),E=e=>"".concat(e?"".concat(e," ").concat(e>1?"favorites":"favorite"):"no favorites");t.default=()=>{const[e]=Object(c.c)(),t=[...e]||!1;return Object(a.useEffect)(()=>{document.title="Movies - "+E(t.length)},[t.length]),o.a.createElement(f,null,o.a.createElement(s.a,null,t.length?o.a.createElement(a.Fragment,null,o.a.createElement(p.a,{weight:600,xs:2,sm:3,md:4,xg:5},E(t.length)),o.a.createElement(l.c,{"vertical-gutter":!0,style:{marginTop:"2rem",marginBottom:"2rem"}},t.map(e=>o.a.createElement(l.a,{key:e,xs:6,sm:4,md:3,xg:2},o.a.createElement(v,{kindURL:null===e||void 0===e?void 0:e.split("/")[0],id:null===e||void 0===e?void 0:e.split("/")[1]}))))):o.a.createElement(b.a,{emoji:o.a.createElement(h.d,{size:96,style:{margin:"1rem"}}),title:"You don't have any favorites yet",description:"you can add movies, tvshows or people to your favorites by clicking on the \u2665 icon"})))}},31:function(e,t,n){"use strict";var r,a=n(7),o=n(1),i=n(40);var l;const c=o.d.div(l||(l=Object(a.a)(["\n  color: ",";\n  font-weight: ",";\n  ","\n"])),e=>e.color||"currentColor",e=>e.weight,e=>{return t=e.theme.breakpoints,n=t=>e.theme.typography[t],e=>Object.keys(e).filter(e=>Object.keys(t).includes(e)).map(o=>Object(i.b)(t)[o](r||(r=Object(a.a)(["",""])),n(e[o],e)));var t,n});c.defaultProps={xs:0};t.a=c},40:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(7),a=n(1);const o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const t=typeof e;return"number"===t?e:"string"!==t?0:/^\d+px/.test(e)?parseFloat(e,10):/^\d+rem/.test(e)?16*parseFloat(e):e},i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return o(e)?"".concat(o(e),"px"):e};var l,c;const s=e=>Object.keys(e).reduce((t,n)=>(t[n]=function(){return Object(a.c)(l||(l=Object(r.a)(["\n      @media (min-width: ",") {\n        ","\n      }\n    "])),i(o(e[n].width)),Object(a.c)(...arguments))},t),{});t.a=e=>function(){for(var t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return t=>{let{theme:l}=t;return Object(a.c)(c||(c=Object(r.a)(["\n    @media (min-width: ",") {\n      ","\n    }\n  "])),i(o(l.breakpoints[e].width)),Object(a.c)(...n))}}},47:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));const r=e=>"movies"===e?"Movies":"multi"===e?"What's on?":"people"===e?"People":"search"===e?"Search":"tvshows"===e?"TV Shows":"Error",a=(e,t)=>"movies"===e?"movie":"people"===e?"person":"tvshows"===e?"render"===t?"tvshow":"tv":"multi"},48:function(e,t,n){"use strict";var r,a,o=n(7),i=n(0),l=n.n(i),c=n(1),s=n(37),m=n(31);const d=Object(c.d)(s.a)(r||(r=Object(o.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 4rem auto;\n  text-align: center;\n  svg {\n    color: ",";\n  }\n"])),e=>e.theme.colors.grey),u=c.d.div(a||(a=Object(o.a)(["\n  font-size: 3rem;\n  margin: 0.5em;\n"])));t.a=e=>{let{emoji:t,title:n,description:r,...a}=e;return l.a.createElement(d,a,t&&l.a.createElement(u,null,t),n&&l.a.createElement(m.a,{xs:1,md:2,weight:600,style:{margin:"1rem 0 0.5rem"}},n),r&&l.a.createElement(m.a,{color:e=>e.theme.colors.lightGrey},r))}},50:function(e,t,n){"use strict";var r,a,o=n(7),i=n(0),l=n.n(i),c=n(1);const s=c.d.div(r||(r=Object(o.a)(["\n  height: 0;\n  overflow: hidden;\n  padding-top: ",";\n  position: relative;\n"])),e=>"".concat(1/e.ratio*100,"%")),m=c.d.div(a||(a=Object(o.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"])));t.a=e=>{let{ratio:t=1,children:n,...r}=e;return l.a.createElement(s,Object.assign({ratio:t},r),l.a.createElement(m,null,n))}},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r),o=n(42);const i=(e,t,n,r,i,l,c,s,m,d,u,g,v,b,p,h,f,E,j,y,_,x,k,w,O)=>{const T={allocine_users:{image:"allocine-logo.png",name:"AlloCin\xe9 users"},allocine_critics:{image:"allocine-logo.png",name:"AlloCin\xe9 critics"},betaseries:{image:"betaseries-logo.png",name:"BetaSeries users"},imdb:{image:"imdb-logo.png",name:"IMDb users"},metacritic_users:{image:"metacritic-logo.png",name:"Metacritic users"},metacritic_critics:{image:"metacritic-logo.png",name:"Metacritic critics"},rottenTomatoes_users:{image:"rotten-tomatoes-logo.png",name:"Rotten Tomatoes users"},rottenTomatoes_critics:{image:"rotten-tomatoes-logo.png",name:"Rotten Tomatoes critics"},senscritique:{image:"senscritique-logo.png",name:"SensCritique users"},tmdb:{image:"tmdb-logo.png",name:"TMDB users"},trakt:{image:"trakt-logo.png",name:"Trakt users"},mojo_box_office:{image:"mojo-logo.png",name:"Mojo worldwide"}},M=[{image:T.allocine_users.image,name:T.allocine_users.name,rating:n},{image:T.allocine_critics.image,name:T.allocine_critics.name,rating:e},{image:T.betaseries.image,name:T.betaseries.name,rating:i},{image:T.imdb.image,name:T.imdb.name,rating:c},{image:T.metacritic_users.image,name:T.metacritic_users.name,rating:g},{image:T.metacritic_critics.image,name:T.metacritic_critics.name,rating:d},{image:T.rottenTomatoes_users.image,name:T.rottenTomatoes_users.name,rating:p},{image:T.rottenTomatoes_critics.image,name:T.rottenTomatoes_critics.name,rating:v},{image:T.senscritique.image,name:T.senscritique.name,rating:f},{image:T.tmdb.image,name:T.tmdb.name,rating:j},{image:T.trakt.image,name:T.trakt.name,rating:_}];"movie"!==w&&"movies"!==O||(T.letterboxd={image:"letterboxd-logo.png",name:"Letterboxd users"},M.splice(4,0,{image:T.letterboxd.image,name:T.letterboxd.name,rating:m}));const R=[{image:T.mojo_box_office.image,name:T.mojo_box_office.name,rank:x}],B=e=>e.replace(/(_gen_cfilm=|_gen_cserie=)/,"-").replace(/\.html$/,"");return{detailsData:M,mojoDetailsData:R,logoBody:e=>{const t=e.image,n=e.name;return a.a.createElement("div",{className:"flex align-items-center p-overlaypanel-logo"},a.a.createElement("img",{alt:n,src:"".concat(o.a.base_render,"/").concat(t)}))},nameBody:e=>{const n=e.name,o=e.rating,i=e.rank;let c;return c="AlloCin\xe9 users"===n&&o>0?a.a.createElement("a",{href:"".concat(B(t),"/critiques/"),target:"_blank",rel:"noopener noreferrer"},n):"AlloCin\xe9 critics"===n&&o>0?a.a.createElement("a",{href:"".concat(B(t),"/critiques/presse/"),target:"_blank",rel:"noopener noreferrer"},n):"BetaSeries users"===n&&o>0?a.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},n):"IMDb users"===n&&o>0?a.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},n):"Letterboxd users"===n&&o>0?a.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},n):"Metacritic users"===n&&o>0?a.a.createElement("a",{href:"".concat(u,"/user-reviews"),target:"_blank",rel:"noopener noreferrer"},n):"Metacritic critics"===n&&o>0?a.a.createElement("a",{href:"".concat(u,"/critic-reviews"),target:"_blank",rel:"noopener noreferrer"},n):"Rotten Tomatoes users"===n&&o>0||"Rotten Tomatoes critics"===n&&o>0?a.a.createElement("a",{href:"".concat(b),target:"_blank",rel:"noopener noreferrer"},n):"SensCritique users"===n&&o>0?a.a.createElement("a",{href:h,target:"_blank",rel:"noopener noreferrer"},n):"TMDB users"===n&&o>0?a.a.createElement("a",{href:E,target:"_blank",rel:"noopener noreferrer"},n):"Trakt users"===n&&o>0?a.a.createElement("a",{href:y,target:"_blank",rel:"noopener noreferrer"},n):"Mojo worldwide"===n&&i>0?a.a.createElement("a",{href:"".concat(k),target:"_blank",rel:"noopener noreferrer"},n):n,a.a.createElement("div",{className:"flex align-items-center"},c)},ratingBody:e=>{const t=e.rating;let n=5;return"IMDb users"===e.name||"Metacritic users"===e.name||"SensCritique users"===e.name||"TMDB users"===e.name?n=10:"Metacritic critics"!==e.name&&"Rotten Tomatoes users"!==e.name&&"Rotten Tomatoes critics"!==e.name&&"Trakt users"!==e.name||(n=100),t>0?a.a.createElement("span",{className:"rating_value"},a.a.createElement("span",null,"\u2605")," ",t,a.a.createElement("span",null,"/",n)):"/"},rankBody:e=>{const t=e.rank;return t>0?a.a.createElement("span",{className:"rank_value"},a.a.createElement("span",{role:"img","aria-label":"trophy"},"\ud83c\udfc6")," ",t):"/"}}}},74:function(e,t,n){"use strict";var r,a,o,i,l,c,s,m,d,u,g,v,b,p=n(7),h=n(0),f=n.n(h),E=n(1),j=n(75),y=n.n(j),_=n(9),x=n(41),k=n(50),w=n(31),O=n(39),T=n(76),M=n(77),R=n(79),B=n(51);const C=E.d.div(r||(r=Object(p.a)(["\n  background: none;\n  border: none;\n  margin: 0;\n  flex: 1;\n  display: flex;\n  position: relative;\n  background: ",";\n  border-radius: 0.1875rem;\n  cursor: pointer;\n"])),e=>e.error?e.theme.colors.red:e.theme.colors.grey),D="position: absolute; top: 0; bottom: 0; left: 0; right: 0;",S=Object(E.d)(x.a)(a||(a=Object(p.a)(["\n  appearance: none;\n  width: 100%;\n  color: currentColor;\n  display: block;\n  border-radius: 0.1875rem;\n  z-index: 1;\n  ","\n  &:focus {\n    ","\n  }\n"])),D,e=>e.theme.focusShadow),q=E.d.div(o||(o=Object(p.a)(["\n  ","\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: space-between;\n"])),D),L=Object(E.d)(q)(i||(i=Object(p.a)(["\n  overflow: hidden;\n  border-radius: 0.1875rem;\n"]))),I=E.d.img(l||(l=Object(p.a)(["\n  display: block;\n  min-height: 100%;\n  object-fit: cover;\n  transition: 0.2s all;\n"]))),z=E.d.div(c||(c=Object(p.a)(["\n  width: 100%;\n  margin-top: auto;\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: space-between;\n  background: ",";\n  box-shadow: 0 0.25rem 2rem 0 rgba(5, 10, 13, 0.3);\n  border-radius: 0 0 0.1875rem 0.1875rem;\n"])),e=>e.theme.colors.overlay),A=E.d.div(s||(s=Object(p.a)(["\n  width: 100%;\n  margin-top: auto;\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: space-between;\n  background: none;\n  box-shadow: 0 0.25rem 2rem 0 rgba(5, 10, 13, 0.3);\n  border-radius: 0 0 0.1875rem 0.1875rem;\n  @media (hover: hover) {\n    border-radius: 0.1875rem;\n    height: 100%;\n    background: none;\n    box-shadow: none;\n  }\n  ",":hover &, ",":focus-within & {\n    background: none;\n    box-shadow: 0 0.25rem 2rem 0 rgba(5, 10, 13, 0.3);\n  }\n"])),C,C),F=E.d.button(m||(m=Object(p.a)(["\n  background: none;\n  border: none;\n  margin: 0;\n  color: currentColor;\n  top: 0;\n  right: 0;\n  left: auto;\n  padding: 0.75rem;\n  cursor: pointer;\n  z-index: 1;\n  position: absolute;\n  @media (hover: hover) {\n    margin-left: auto;\n    opacity: ",";\n  }\n  ",":hover &, ",":focus-within & {\n    opacity: 1;\n  }\n"])),e=>e.isFavorite?1:0,C,C),N=Object(E.d)(O.c)(d||(d=Object(p.a)(["\n  transition: 0.2s all;\n  ",":focus &, ",":hover & {\n    color: ",";\n  }\n"])),F,F,e=>e.theme.colors.red),U=E.d.div(u||(u=Object(p.a)(["\n  color: currentColor;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  position: relative;\n  padding: 0.75rem;\n  cursor: pointer;\n  overflow: hidden;\n  opacity: 1;\n"]))),W=E.d.div(g||(g=Object(p.a)(["\n  color: currentColor;\n  position: absolute;\n  top: 0;\n  padding: 0.75rem;\n  background: #181818;\n  border-radius: 24px;\n  margin: 0.6rem;\n  padding: 5px;\n  width: 60px;\n  text-align: center;\n  font-weight: bold;\n"]))),G=E.d.div(v||(v=Object(p.a)(["\n  ","\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: ",";\n"])),D,e=>e.theme.colors.midGrey),J=e=>{let{kindURL:t,id:n,title:r}=e;const[a,{toggle:o}]=Object(_.b)(t+"/"+n);return f.a.createElement(F,{isFavorite:a,onClick:o,"aria-label":"favorite: ".concat(r)},f.a.createElement(N,{filled:a}))},P=Object(E.d)(w.a)(b||(b=Object(p.a)(["\n  text-align: center;\n  height: 100%;\n  margin: auto;\n  ",":hover & {\n    color: ",";\n  }\n"])),C,e=>e.theme.colors.lightGrey);t.a=e=>{var t,n,r,a,o,i,l,c,s,m,d,u,g,v,b,p,E,j,_,x,D,F,N;let{id:H,loading:V,error:Y,loadMore:$,...K}=e;const Q=null===K||void 0===K?void 0:K.media_type,X=("movie"===(Z=null===K||void 0===K?void 0:K.media_type)?"movies":"tv"===Z?"tvshows":"person"===Z?"people":Z)||K.kindURL;var Z;const ee=(null===K||void 0===K?void 0:K.title)||(null===K||void 0===K?void 0:K.name);let te=(null===K||void 0===K?void 0:K.poster_path)||(null===K||void 0===K?void 0:K.profile_path)||(null===K||void 0===K?void 0:K.image);te&&te.startsWith("/")&&(te="https://image.tmdb.org/t/p/w300".concat(te));const ne=(e,t,n)=>{let r="".concat(e.split("net")[0],"net/c_").concat(parseInt(2*t),"_").concat(parseInt(2*n)).concat(e.split("net")[1]);return e&&e.startsWith("https://image.tmdb.org")&&(r="https://image.tmdb.org/t/p/w300".concat(e)),r},re=null===K||void 0===K||null===(t=K.allocine)||void 0===t?void 0:t.url,ae=null===K||void 0===K||null===(n=K.allocine)||void 0===n?void 0:n.users_rating,oe=null===K||void 0===K||null===(r=K.allocine)||void 0===r?void 0:r.critics_rating,ie=null===K||void 0===K||null===(a=K.betaseries)||void 0===a?void 0:a.url,le=null===K||void 0===K||null===(o=K.betaseries)||void 0===o?void 0:o.users_rating,ce=null===K||void 0===K||null===(i=K.imdb)||void 0===i?void 0:i.url,se=null===K||void 0===K||null===(l=K.imdb)||void 0===l?void 0:l.users_rating,me=null===K||void 0===K||null===(c=K.letterboxd)||void 0===c?void 0:c.url,de=null===K||void 0===K||null===(s=K.letterboxd)||void 0===s?void 0:s.users_rating,ue=null===K||void 0===K||null===(m=K.mojo)||void 0===m?void 0:m.rank,ge=null===K||void 0===K||null===(d=K.mojo)||void 0===d?void 0:d.url,ve=null===K||void 0===K||null===(u=K.metacritic)||void 0===u?void 0:u.url,be=null===K||void 0===K||null===(g=K.metacritic)||void 0===g?void 0:g.users_rating,pe=null===K||void 0===K||null===(v=K.metacritic)||void 0===v?void 0:v.critics_rating,he=null===K||void 0===K||null===(b=K.rotten_tomatoes)||void 0===b?void 0:b.url,fe=null===K||void 0===K||null===(p=K.rotten_tomatoes)||void 0===p?void 0:p.users_rating,Ee=null===K||void 0===K||null===(E=K.rotten_tomatoes)||void 0===E?void 0:E.critics_rating,je=null===K||void 0===K||null===(j=K.senscritique)||void 0===j?void 0:j.url,ye=null===K||void 0===K||null===(_=K.senscritique)||void 0===_?void 0:_.users_rating,_e=null===K||void 0===K||null===(x=K.tmdb)||void 0===x?void 0:x.url,xe=null===K||void 0===K||null===(D=K.tmdb)||void 0===D?void 0:D.users_rating,ke=null===K||void 0===K||null===(F=K.trakt)||void 0===F?void 0:F.url,we=null===K||void 0===K||null===(N=K.trakt)||void 0===N?void 0:N.users_rating,Oe=null===K||void 0===K?void 0:K.ratings_average,Te=localStorage.getItem("item_type")?localStorage.getItem("item_type"):"movie",{detailsData:Me,mojoDetailsData:Re,logoBody:Be,nameBody:Ce,ratingBody:De,rankBody:Se}=Object(B.a)(oe,re,ae,ie,le,ce,se,me,de,pe,ve,be,Ee,he,fe,je,ye,_e,xe,ke,we,ue,ge,Te,X),qe=Object(h.useRef)(null),Le=Object(h.useRef)(!1),[Ie,ze]=Object(h.useState)(750),[Ae,Fe]=Object(h.useState)(500),Ne=Object(h.useRef)(null);return Object(h.useEffect)(()=>{Ne.current&&(ze(Ne.current.clientHeight),Fe(Ne.current.clientWidth))},[Ne]),f.a.createElement(C,Object.assign({error:Y},K),f.a.createElement(k.a,{ratio:.75}),!(V||Y||$)&&f.a.createElement(S,{to:"/".concat(X,"/").concat(H),tabIndex:0,ariaLabel:"poster for: ".concat(ee)}),f.a.createElement(L,null,te&&f.a.createElement(y.a,{placeholder:ne(te,Ae,Ie),src:ne(te,Ae,Ie)},(e,t)=>f.a.createElement(I,{ref:Ne,src:e,alt:"poster for: ".concat(ee),height:Ie,width:Ae,loading:+t}))),$&&f.a.createElement(P,{xs:1,weight:500,color:e=>e.theme.colors.midGrey},"Load",f.a.createElement("br",null),"More"),f.a.createElement(q,null,!te&&!V&&!$&&f.a.createElement(G,null,"movie"===Q&&f.a.createElement(O.e,null),"tvshow"===Q&&f.a.createElement(O.i,null),"person"===Q&&f.a.createElement(O.f,null)),!$&&f.a.createElement(z,null,ee&&f.a.createElement(U,null,f.a.createElement(w.a,{xs:0,sm:1,weight:500,style:{marginBottom:"0.25em"}},ee)),f.a.createElement("div",{style:{display:"flex",alignItems:"center"}},H&&f.a.createElement(J,{kindURL:X,id:H,title:ee}))),!$&&f.a.createElement(A,null,Oe>0&&f.a.createElement(W,{className:"rating_details",onClick:e=>{Le.current&&Me?(qe.current.hide(e),Le.current=!1):(qe.current.show(e),Le.current=!0)}},f.a.createElement("span",{style:{color:"#28A745"}},"\u2605")," ",Oe.toFixed(1),f.a.createElement(T.a,{ref:qe},f.a.createElement(R.a,{value:Me,size:"small"},f.a.createElement(M.a,{body:Be}),f.a.createElement(M.a,{header:"Name",body:Ce,style:{minWidth:"11rem"}}),f.a.createElement(M.a,{field:"rating",header:"Rating",body:De})),"movie"===Te&&f.a.createElement(R.a,{value:Re,size:"small"},f.a.createElement(M.a,{body:Be}),f.a.createElement(M.a,{header:"-",body:Ce,style:{minWidth:"11rem"}}),f.a.createElement(M.a,{field:"rank",header:"Rank",body:Se})))))))}}}]);
//# sourceMappingURL=22.b138ba3d.chunk.js.map