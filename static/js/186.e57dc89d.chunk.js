"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,n,t){t.r(n);var i=t(439),r=t(791),c=t(689),h=t(184);n.default=function(){var e=(0,r.useState)([]),n=(0,i.Z)(e,2),t=n[0],o=n[1],a=(0,c.UO)().id;return(0,r.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(a,"/reviews?language=en-US&page=1"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODhiZjEzNWFhNGUwYjc5YjdjNjg4MzViZDc3NTk5YyIsInN1YiI6IjY0MzY3Y2IwOTQ1ZDM2MDEyNThhOGViNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l0uX6X8nk7JVIoTKrSS00KxXQjcoXQ2Z1FOCZWkxi6A"}}).then((function(e){return e.json()})).then((function(e){o(e.results)})).catch((function(e){return console.error(e)}))}),[a]),(0,h.jsxs)(h.Fragment,{children:[0===t.length&&(0,h.jsx)("div",{children:"We don't have any reviews for this movie"}),(0,h.jsx)("ul",{children:t.map((function(e){var n=e.author,t=e.id,i=e.content;return(0,h.jsxs)("li",{children:[(0,h.jsxs)("h3",{children:["Author: ",n]}),(0,h.jsxs)("p",{children:[i," "]})]},t)}))})]})}}}]);
//# sourceMappingURL=186.e57dc89d.chunk.js.map