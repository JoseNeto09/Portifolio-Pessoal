(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(46),l=t.n(s),r=(t(77),t(79),t(81),t(5)),i=t(121),m=t(117),o=t(122),u=t(32),d=t.n(u),A=function(){var e=Object(n.useState)("home"),a=Object(r.a)(e,2),t=a[0],s=a[1],l=Object(n.useState)(!1),u=Object(r.a)(l,2),A=u[0],p=u[1];Object(n.useEffect)(function(){var e=function(){window.scrollY>50?p(!0):p(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}},[]);var v=function(e){s(e)};return c.a.createElement(i.a,{expand:"md",className:A?"scrolled":""},c.a.createElement(m.a,null,c.a.createElement(i.a.Brand,{href:"#home"},c.a.createElement("img",{src:d.a,alt:"Logo"})),c.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement(i.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(o.a,{className:"ms-auto"},c.a.createElement(o.a.Link,{href:"#home",className:"home"===t?"active navbar-link":"navbar-link",onClick:function(){return v("home")}},"In\xedcio"),c.a.createElement(o.a.Link,{href:"#skills",className:"skills"===t?"active navbar-link":"navbar-link",onClick:function(){return v("skills")}},"Habilidades"),c.a.createElement(o.a.Link,{href:"#project",className:"project"===t?"active navbar-link":"navbar-link",onClick:function(){return v("project")}},"Projetos"),c.a.createElement(o.a.Link,{href:"#sobre",className:"sobre"===t?"active navbar-link":"navbar-link",onClick:function(){return v("sobre")}},"Sobre"),c.a.createElement(o.a.Link,{href:"#connect",className:"contact"===t?"active navbar-link":"navbar-link",onClick:function(){return v("connect")}},"Contato")))))},p=t(118),v=t(119),E=t(48),f=t.n(E),g=(t(29),function(){var e=Object(n.useState)(0),a=Object(r.a)(e,2),t=a[0],s=a[1],l=Object(n.useState)(!1),i=Object(r.a)(l,2),o=i[0],u=i[1],d=["Jos\xe9 Lopes Sobrinho Neto","Software Developer Jr"],A=Object(n.useState)(""),E=Object(r.a)(A,2),g=E[0],b=E[1],k=Object(n.useState)(100-10*Math.random()),j=Object(r.a)(k,2),N=j[0],S=j[1];Object(n.useEffect)(function(){var e=setInterval(function(){x()},N);return function(){clearInterval(e)}},[g]);var x=function(){var e=d[t%d.length],a=o?e.substring(0,g.length-1):e.substring(0,g.length+1);b(a),o&&S(function(e){return e/2}),o||a!==e?o&&""===a&&(u(!1),s(t+1),S(500)):(u(!0),S(100))};return c.a.createElement("section",{className:"banner",id:"home"},c.a.createElement(m.a,null,c.a.createElement(p.a,{className:"align-items-center"},c.a.createElement(v.a,{xs:12,md:6,xl:7},c.a.createElement("h1",null,"",c.a.createElement("span",{className:"wrap"},g))),c.a.createElement(v.a,{xs:12,md:6,xl:5},c.a.createElement("img",{src:f.a,alt:"Header IMG"})))))}),b=t(49),k=t.n(b),j=t(50),N=t.n(j),S=t(51),x=t.n(S),C=t(52),O=t.n(C),M=t(53),L=t.n(M),h=t(54),y=t.n(h),I=t(55),J=t.n(I),w=t(56),z=t.n(w),W=(t(101),t(57)),X=t.n(W),B=function(){return c.a.createElement("section",{className:"skill",id:"skills"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"skill-bx wow zoomIn"},c.a.createElement("h2",null,"Habilidades"),c.a.createElement("p",null,"linguagem de marca\xe7\xe3o e FrameWorks utilizados, em projetos pessoais em formato de portf\xf3lio."),c.a.createElement(z.a,{responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},infinite:!0,className:"owl-carousel owl-theme skill-slider"},c.a.createElement("div",{className:"item"},c.a.createElement("img",{src:k.a,alt:"Image"}),c.a.createElement("h5",null,"HTML")),c.a.createElement("div",{className:"item"},c.a.createElement("img",{src:N.a,alt:"Image"}),c.a.createElement("h5",null,"CSS")),c.a.createElement("div",{className:"item"},c.a.createElement("img",{src:L.a,alt:"Image"}),c.a.createElement("h5",null,"AngularJS")),c.a.createElement("div",{className:"item"},c.a.createElement("img",{src:J.a,alt:"Image"}),c.a.createElement("h5",null,"ReactJS")),c.a.createElement("div",{className:"item"},c.a.createElement("img",{src:x.a,alt:"Image"}),c.a.createElement("h5",null,"JAVASCRIPT")),c.a.createElement("div",{className:"item"},c.a.createElement("img",{src:y.a,alt:"Image"}),c.a.createElement("h5",null,"JAVA")),c.a.createElement("div",{className:"item"},c.a.createElement("img",{src:O.a,alt:"Image"}),c.a.createElement("h5",null,"NodeJS"))))))),c.a.createElement("img",{className:"background-image-left",src:X.a,alt:"Image"}))},T=t(123),F=function(e){var a=e.title,t=e.description,n=e.imgUrl,s=e.link;return c.a.createElement(v.a,{size:12,sm:6,md:4},c.a.createElement("div",{className:"proj-imgbx"},c.a.createElement("img",{src:n,alt:"some value"}),c.a.createElement("div",{className:"proj-txtx"},c.a.createElement("h4",null,a),c.a.createElement("span",null,t),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("a",{target:"blank",className:"buttonLInk",href:s},"Saiba Mais."))))},R=t(58),D=t.n(R),U=t(59),Y=t.n(U),G=t(60),q=t.n(G),Q=t(61),Z=t.n(Q),H=t(27),P=t.n(H),K=function(){var e=[{title:"MyStore",description:"Loja de artigos feminios",imgUrl:Y.a,link:"https://JoseNeto09.github.io/myStore"},{title:"MyKaban",description:"Crie seu Kaban com o MyKaban",imgUrl:q.a,link:"https://joseneto09.github.io/myKanban/"},{title:"MyBlog",description:"Aplica\xe7\xe3o de postagens com autentica\xe7\xe3o por usuario.",imgUrl:Z.a,link:"https://github.com/JoseNeto09/Mern-blog"},{title:"<Astronaut dev/>",description:"CRUD de Cursos Online",imgUrl:D.a,link:"https://github.com/JoseNeto09/Courses-Angular"}];return c.a.createElement("section",{className:"project",id:"project"},c.a.createElement(m.a,null,c.a.createElement(p.a,null,c.a.createElement(v.a,{size:12},c.a.createElement(P.a,null,function(a){var t=a.isVisible;return c.a.createElement("div",{className:t?"animate__animated animate__fadeIn":""},c.a.createElement("h2",null,"Meus Projetos"),c.a.createElement("p",null,"Projetos desenvolvidos com objetivo de adquirir t\xe9cnicas em desenvolvimento web, seguindo regras de neg\xf3cio, an\xe1lise de requisitos de cada projeto."),c.a.createElement(T.a.Container,{id:"projects-tabs",defaultActiveKey:"first"},c.a.createElement(T.a.Content,{id:"slideInUp",className:t?"animate__animated animate__slideInUp":""},c.a.createElement(T.a.Pane,{eventKey:"first"},c.a.createElement(p.a,null,e.map(function(e,a){return c.a.createElement(F,Object.assign({key:a},e))}))))))})))))},V=t(67),_=t(62),$=t.n(_),ee=t(63),ae=t.n(ee),te=function(){var e=Object(n.useRef)(),a=Object(n.useState)(!1),t=Object(r.a)(a,2),s=t[0],l=t[1];function i(){l(!0)}function o(){l(!1)}var u=function(a){a.preventDefault(),V.a.sendForm("service_rouz947","template_lz6mvig",e.current,"6FZqYi1hT2uFxpOIz").then(function(e){console.log(e.text),console.log("mensage sent")},function(e){console.log(e.text)})};return c.a.createElement("section",{className:"contact",id:"connect"},c.a.createElement(m.a,null,c.a.createElement(p.a,{className:"align-items-center"},c.a.createElement(v.a,{size:12,md:6},c.a.createElement(P.a,null,function(e){var a=e.isVisible;return c.a.createElement("img",{className:a?"animate__animated animate__zoomIn":"",src:$.a,alt:"Contact Us"})})),c.a.createElement(v.a,{size:12,md:6},c.a.createElement(P.a,null,function(a){var t=a.isVisible;return c.a.createElement("div",{className:t?"animate__animated animate__fadeIn":""},c.a.createElement("h2",null," Me Envie uma mensagem!"),c.a.createElement("form",{ref:e,onSubmit:u},c.a.createElement(p.a,null,c.a.createElement(v.a,{size:12,sm:6,className:"px-1"},c.a.createElement("input",{type:"text",placeholder:"Nome Completo",name:"user_name"})),c.a.createElement(v.a,{size:12,sm:6,className:"px-1"},c.a.createElement("input",{type:"email",placeholder:"E-mail",name:"user_email"})),c.a.createElement("textarea",{placeholder:"Envie sua Mensagem",name:"message"}),c.a.createElement("button",{onClick:i},"Enviar"),c.a.createElement(ae.a,{isOpen:s,onRequestClose:o,contentlabel:"example Modal",overlayClassName:"modal-overlay",className:"modal-content"},c.a.createElement("button",{onClick:o},"X"),c.a.createElement("h2",null,"Mensagem enviada com sucesso"),c.a.createElement("hr",null),c.a.createElement("p",null,"Obrigado pelo seu feedback no meu portifolio, irie entrar em contato de imediato.")))))})))))},ne=t(64),ce=t.n(ne),se=t(65),le=t.n(se),re=t(66),ie=t.n(re),me=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement(m.a,null,c.a.createElement(p.a,{className:"align-items-center"},c.a.createElement(v.a,{size:12,sm:6},c.a.createElement("img",{src:d.a,alt:"Logo"}),c.a.createElement("p",null,"Copyright 2022. All Rights Reserved Jos\xe9 Lopes")),c.a.createElement(v.a,{size:12,sm:6,className:"text-center text-sm-end"},c.a.createElement("div",{className:"social-icon"},c.a.createElement("a",{href:"https://github.com/JoseNeto09"},c.a.createElement("img",{src:ce.a,alt:"gitHUb"})),c.a.createElement("a",{href:"https://www.linkedin.com/in/jos%C3%A9-lopes-sobrinho-neto/"},c.a.createElement("img",{src:le.a,alt:"Likedin Icon"})),c.a.createElement("a",{href:"https://www.instagram.com/joselopes.sn/"},c.a.createElement("img",{src:ie.a,alt:"Instagram Icon"})))))))},oe=function(){return c.a.createElement("section",{className:"sobre",id:"sobre"},c.a.createElement(m.a,null,c.a.createElement(p.a,null,c.a.createElement(v.a,null,c.a.createElement("h1",null,"Jos\xe9 Lopes Sobrinho Neto",c.a.createElement("span",{className:"wrap"})),c.a.createElement("p",null,"Graduado em Ci\xeancias da Computa\xe7\xe3o. Durante o curso me descobri como desenvolvedor web, desenvolvendo desde pequenos sites do tipo landing pages, at\xe9 Sistemas de contabilidade com Spring no backend Estou sempre em busca de novas tecnologias, visando alta performance e otimiza\xe7\xe3o, independente do tamanho do projeto, inclusive projetos pequenos at\xe9 sistemas mais complexos com regras de neg\xf3cio a serem implementadas. ")),c.a.createElement("a",{target:"blank",href:"https://docs.google.com/document/d/1f2mxPxCobAks2mUQhg_FAVvPgBq-iGgSpkiEdlGYa-U/edit?usp=sharing"},c.a.createElement("button",{id:"bt"},"Meu Cv")," "))))};var ue=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(A,null),c.a.createElement(g,null),c.a.createElement(B,null),c.a.createElement(K,null),c.a.createElement(oe,null),c.a.createElement(te,null),c.a.createElement(me,null))},de=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,120)).then(function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,s=a.getLCP,l=a.getTTFB;t(e),n(e),c(e),s(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(ue,null))),de()},32:function(e,a,t){e.exports=t.p+"static/media/logo.e2b8674c.png"},48:function(e,a,t){e.exports=t.p+"static/media/header-img.535f03d0.jpg"},49:function(e,a,t){e.exports=t.p+"static/media/meter1.d0a2487a.svg"},50:function(e,a,t){e.exports=t.p+"static/media/meter2.14d02196.svg"},51:function(e,a,t){e.exports=t.p+"static/media/meter3.6bf210a7.svg"},52:function(e,a,t){e.exports=t.p+"static/media/meter4.33bb96e3.svg"},53:function(e,a,t){e.exports=t.p+"static/media/meter5.697e39da.svg"},54:function(e,a){e.exports="data:image/png;base64,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"},55:function(e,a,t){e.exports=t.p+"static/media/meter7.0294759d.svg"},57:function(e,a,t){e.exports=t.p+"static/media/color-sharp.d6409477.png"},58:function(e,a,t){e.exports=t.p+"static/media/project-img1.d5dfc839.png"},59:function(e,a,t){e.exports=t.p+"static/media/project-img2.aac0df77.png"},60:function(e,a,t){e.exports=t.p+"static/media/project-img3.b8c727c5.png"},61:function(e,a,t){e.exports=t.p+"static/media/project-img4.bc93aebd.png"},62:function(e,a,t){e.exports=t.p+"static/media/contact-img.a8822e20.svg"},64:function(e,a,t){e.exports=t.p+"static/media/icons8-github.cb5eff73.svg"},65:function(e,a,t){e.exports=t.p+"static/media/nav-icon1.dff2b624.svg"},66:function(e,a,t){e.exports=t.p+"static/media/nav-icon3.81ff4e97.svg"},69:function(e,a,t){e.exports=t(114)},77:function(e,a,t){},79:function(e,a,t){}},[[69,3,2]]]);
//# sourceMappingURL=main.b90be59b.chunk.js.map