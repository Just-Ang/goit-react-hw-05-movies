"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[418],{418:function(e,i,s){s.r(i),s.d(i,{default:function(){return u}});var t=s(439),n=s(689),r=s(87),c=s(791),a="Film_cardFilm__Dp4go",l="Film_img__SWUsk",o="Film_genres__8UXri",h="Film_button__fEK3w",d="Film_infoAdd__Va+38",j=s(184),u=function(){var e=(0,c.useState)(""),i=(0,t.Z)(e,2),s=i[0],u=i[1],m=(0,c.useState)([]),f=(0,t.Z)(m,2),x=f[0],_=f[1],v=(0,c.useState)(""),p=(0,t.Z)(v,2),N=p[0],g=p[1],w=(0,c.useState)(""),I=(0,t.Z)(w,2),k=I[0],Z=I[1],J=(0,n.UO)().id,S=(0,n.TH)();(0,c.useEffect)((function(){S.state&&Z(S.state.from)}),[]);var U=null!==k&&void 0!==k?k:"/movies";return(0,c.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(J,"?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODhiZjEzNWFhNGUwYjc5YjdjNjg4MzViZDc3NTk5YyIsInN1YiI6IjY0MzY3Y2IwOTQ1ZDM2MDEyNThhOGViNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l0uX6X8nk7JVIoTKrSS00KxXQjcoXQ2Z1FOCZWkxi6A"}}).then((function(e){return e.json()})).then((function(e){_(e.genres),g(e.release_date.slice(0,4)),u(e)})).catch((function(e){return console.error(e)}))}),[J]),(0,j.jsxs)("main",{children:[(0,j.jsxs)(r.rU,{className:h,to:U,children:[" ","\u2190 Go back"]}),(0,j.jsxs)("div",{className:a,children:[(0,j.jsx)("img",{className:l,src:"https://image.tmdb.org/t/p/w200".concat(s.poster_path),alt:s.title}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("h2",{children:[s.title," (",N,")"]}),(0,j.jsxs)("p",{children:["User Score ",s.vote_average]}),(0,j.jsx)("h3",{children:"Overview"}),(0,j.jsx)("p",{children:s.overview}),(0,j.jsx)("h3",{children:"Genres"}),(0,j.jsx)("div",{className:o,children:x.map((function(e){var i=e.name,s=e.id;return(0,j.jsx)("p",{children:i},s)}))})]})]}),(0,j.jsxs)("div",{className:d,children:[(0,j.jsx)("h3",{children:"Additional information"}),(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)(r.rU,{to:"cast",children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(r.rU,{to:"reviews",children:"Reviews"})})]}),(0,j.jsx)(n.j3,{})]})]})}}}]);
//# sourceMappingURL=418.73695248.chunk.js.map