(function(e){function o(o){for(var t,r,n=o[0],d=o[1],c=o[2],l=0,m=[];l<n.length;l++)r=n[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]);u&&u(o);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,o=0;o<s.length;o++){for(var a=s[o],t=!0,n=1;n<a.length;n++){var d=a[n];0!==i[d]&&(t=!1)}t&&(s.splice(o--,1),e=r(r.s=a[0]))}return e}var t={},i={app:0},s=[];function r(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,o,a){r.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,o){if(1&o&&(e=r(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)r.d(a,t,function(o){return e[o]}.bind(null,t));return a},r.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(o,"a",o),o},r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=o,n=n.slice();for(var c=0;c<n.length;c++)o(n[c]);var u=d;s.push([0,"chunk-vendors"]),a()})({0:function(e,o,a){e.exports=a("56d7")},"0e21":function(e,o,a){},"56d7":function(e,o,a){"use strict";a.r(o);a("e260"),a("e6cf"),a("cca6"),a("a79d");var t=a("2b0e"),i=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("q-layout",{class:"/relatorio"!==e.$route.path?"fundo":"",attrs:{view:"lHh Lpr lFf"}},[a("q-page-container",[a("router-view")],1)],1)},s=[],r={name:"app-vue"},n=r,d=a("2877"),c=a("fe09"),u=Object(d["a"])(n,i,s,!1,null,null,null),l=u.exports;u.options.components=Object.assign({QLayout:c["h"],QPageContainer:c["j"]},u.options.components||{});var m=a("8c4f"),p=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{attrs:{id:"exercicio"}},[t("q-page",[t("div",{staticClass:"q-pa-md"},[t("div",{staticClass:"q-col-gutter-md row"},[t("div",{staticClass:"col-12 col-md-6 offset-md-3"},[t("q-card",[t("q-card-section",[t("div",{staticClass:"q-pa-md"},[t("div",{staticClass:"q-col-gutter-md row"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"text-center"},[t("img",{attrs:{src:a("722b"),alt:"Logo da DouraSoft Azul",width:"190"}}),t("h6",{staticClass:"text-h6"},[e._v(" Teste de Personalidade DouraSoft ")]),t("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate dolor quam, molestie molestie elit porttitor sed. Nunc pellentesque imperdiet metus at egestas. Donec eget tincidunt nibh. Praesent sodales dolor sit amet luctus gravida. Aliquam erat volutpat. Vivamus sodales nulla quis urna fermentum tempor. Vivamus fermentum est lorem, eget ornare urna pharetra in. Fusce lacinia cursus molestie. Ut ornare massa massa, ut vestibulum dolor laoreet ut. Sed interdum metus non felis ullamcorper auctor. ")])])])])])]),e.loading?e._e():t("q-card-section",[t("div",{staticClass:"q-pa-md"},[t("div",{staticClass:"q-col-gutter-md row"},[t("div",{staticClass:"col-12"},[t("q-btn-group",{attrs:{spread:""}},e._l(e.buttons,(function(o,a){return t("q-btn",{key:o.id,attrs:{label:o.rodada,clickable:"",color:"primary"},on:{click:function(a){return e.captura(o)}},scopedSlots:e._u([{key:"default",fn:function(){return[t("q-tooltip",[e._v(e._s(e.imprimeResposta(o,a)))])]},proxy:!0}],null,!0)})})),1)],1)])])]),e.loading?t("q-card-section",{staticClass:"text-center"},[t("q-circular-progress",{staticClass:"q-ma-md",attrs:{indeterminate:"",size:"50px",color:"primary"}})],1):e._e()],1)],1)])])])],1)},f=[],v=(a("a4d3"),a("4de4"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),g=a("2f62");function h(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function x(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?h(Object(a),!0).forEach((function(o){Object(v["a"])(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}var b={name:"exercicio",data:function(){return{buttons:[],tipos:["sanguineo","colerico","melancolico","fleugmatico"],melancolico:["Animado","Brincalhão","Sociável","Convincente","Refrescante","Espirituoso","Estimulador","Espontâneo","Otimista","Engraçado","Encantador","Alegre","Inspirado","Demonstrativo","Desembaraçado","Conversador","Vivo","Atraente","Popular","Vivaz","Metido","Indisciplinado","Repetitivo","Esquecido","Inoportuno","Imprevisível","Casual","Permissivo","Esquentado","Ingênuo","Egoísta","Tagarela","Desorganizado","Inconstante","Desordenado","Convencido","Barulhento","Distraído","Agitado","Instável"],fleugmatico:["Aventureiro","Persuasivo","Enérgico","Competitivo","Habilidoso","Auto-suficiente","Positivo","Seguro","Franco","Vigoroso","Audacioso","Confiante","Independente","Decidido","Ativo","Tenaz","Líder","Chefe","Produtivo","Valente","Mandão","Insensível","Inflexível","Franco","Impaciente","Frio","Cabeçudo","Orgulhoso","Combativo","Corajoso","Workaholic","Indelicado","Imperioso","Intolerante","Manipulador","Obstinado","Tirânico","Irritável","Imprudente","Astuto"],sanguineo:["Analítico","Persistente","Abnegado","Atencioso","Respeitoso","Sensível","Planejador","Organizado","Ordeiro","Fiel","Minucioso","Culto","Idealista","Profundo","Musical","Pensativo","Leal","Detalhista","Perfeccionista","Comportado","Acanhado","Rancoroso","Ressentido","Complicado","Inseguro","Impopular","Insatisfeito","Pessimista","Alienado","Negativo","Retraído","Tímido","Deprimido","Introvertido","Triste","Cético","Solitário","Desconfiado","Vingativo","Crítico"],colerico:["Adaptável","Sereno","Submisso","Controlado","Reservado","Satisfeito","Paciente","Tímido","Serviçal","Amigável","Diplomático","Consistente","Inofensivo","Irônico","Mediador","Tolerante","Ouvinte","Contente","Agradável","Equilibrado","Vazio","Desinteressado","Relutante","Medroso","Indeciso","Desligado","Hesitante","Simples","Incerto","Indiferente","Preocupado","Sensível demais","Confuso","Apático","Resmungão","Lento","Preguiçoso","Vagaroso","Relutante","Acomodado"],i:0,resultado:[0,0,0,0],loading:!1}},methods:{returnTipo:function(e){return this.definicoesPalavras[this.i-1]},imprimeResposta:function(e,o){for(var a=this.returnTipo(o),t=0;t<a.length;t++)if(e.rodada===a[t].tipo)return a[t].texto},captura:function(e){var o=this;switch(40===this.i&&(this.loading=!0,setTimeout((function(){o.$store.commit("resultado",o.resultado),o.$router.push("/relatorio")}),2e3)),e.tipo){case"melancolico":this.resultado[2]+=1;break;case"fleugmatico":this.resultado[3]+=1;break;case"sanguineo":this.resultado[0]+=1;break;case"colerico":this.resultado[1]+=1;break}this.displayItems()},displayItems:function(){var e=1;this.buttons=[];for(var o=0;o<this.rodada.length;o++){var a={id:e,rodada:this.rodada[o],tipo:this.tipos[o]};this.buttons.push(a),e++}this.shuffle(this.buttons)},shuffle:function(e){var o,a,i=e.length;while(0!==i)a=Math.floor(Math.random()*i),i-=1,o=e[i],e[i]=e[a],e[a]=o;this.i+=1,t["a"].set(this.buttons,i,this.buttons[a]),t["a"].set(this.buttons,a,o)}},computed:x({rodada:function(){return[this.melancolico[this.i],this.fleugmatico[this.i],this.sanguineo[this.i],this.colerico[this.i]]}},Object(g["b"])(["definicoesPalavras"])),created:function(){this.displayItems(),this.$store.commit("formulario",JSON.parse(localStorage["formulario"]))}},q=b,C=Object(d["a"])(q,p,f,!1,null,null,null),P=C.exports;C.options.components=Object.assign({QPage:c["i"],QCard:c["c"],QCardSection:c["d"],QBtnGroup:c["b"],QBtn:c["a"],QTooltip:c["k"],QCircularProgress:c["e"]},C.options.components||{});var O=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("q-page",[t("div",{staticClass:"q-pa-md"},[t("div",{staticClass:"q-col-gutter-md row"},[t("div",{staticClass:"col-12 col-md-6 offset-md-3"},[t("q-card",[t("q-card-section",[t("div",{staticClass:"q-pa-md"},[t("div",{staticClass:"q-col-gutter-md row"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"text-center"},[t("img",{attrs:{src:a("722b"),alt:"Logo da DouraSoft Azul",width:"190"}}),t("h6",{staticClass:"text-h6"},[e._v(" Teste de Personalidade DouraSoft ")])])])])])]),t("q-card-section",[t("div",{staticClass:"q-pa-md"},[t("div",{staticClass:"q-col-gutter-md row"},[t("div",{staticClass:"col-12"},[t("q-input",{attrs:{filled:"",label:"Nome Completo","bottom-slots":"",error:e.errorNome},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"person"}})]},proxy:!0},{key:"error",fn:function(){return[t("span",[e._v("É necessário que você digite seu Nome Completo")])]},proxy:!0}]),model:{value:e.formulario.nome,callback:function(o){e.$set(e.formulario,"nome",o)},expression:"formulario.nome"}})],1),t("div",{staticClass:"col-12"},[t("q-input",{attrs:{filled:"",label:"Telefone","bottom-slots":"",error:e.errorTelefone,mask:"(##) #####-####"},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"phone"}})]},proxy:!0},{key:"error",fn:function(){return[t("span",[e._v("É necessário que você digite seu Telefone")])]},proxy:!0}]),model:{value:e.formulario.telefone,callback:function(o){e.$set(e.formulario,"telefone",o)},expression:"formulario.telefone"}})],1),t("div",{staticClass:"col-12"},[t("q-input",{attrs:{filled:"",type:"email",label:"E-mail","bottom-slots":"",error:e.errorEmail},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"mail"}})]},proxy:!0},{key:"error",fn:function(){return[t("span",[e._v("É necessário que você digite seu E-mail")])]},proxy:!0}]),model:{value:e.formulario.email,callback:function(o){e.$set(e.formulario,"email",o)},expression:"formulario.email"}})],1),t("div",{staticClass:"col-12"},[t("p",[e._v('* Ao clicar em "Iniciar o Exercício", Autorizo o envio do resultado para a DouraSoft do Brasil utilizar para fins de recrutamento e serviço.')])])])])]),t("q-card-section",{staticClass:"text-right"},[t("div",{staticClass:"q-pa-md"},[t("div",{staticClass:"q-col-gutter-md row"},[t("div",{staticClass:"col-12"},[t("q-btn",{attrs:{label:"Iniciar o Exercício",color:"primary",clickable:""},on:{click:function(o){return e.proxEtapa()}}})],1)])])])],1)],1)])])])},A=[],S={name:"form-inicio",data:function(){return{formulario:{nome:"",telefone:"",email:"",autorizo:!0},errorNome:!1,errorTelefone:!1,errorEmail:!1}},methods:{proxEtapa:function(){this.errorNome=!1,this.errorTelefone=!1,this.errorEmail=!1;var e=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;""===this.formulario.nome?this.errorNome=!0:""===this.formulario.telefone?this.errorTelefone=!0:""!==this.formulario.email&&e.test(this.formulario.email)?(localStorage.setItem("inicio",!0),this.$store.commit("formulario",this.formulario),localStorage.setItem("formulario",JSON.stringify(this.formulario)),this.$router.push("/exercicio")):this.errorEmail=!0}},beforeRouteEnter:function(e,o,a){localStorage.setItem("inicio",!1),a()}},j=S,I=Object(d["a"])(j,O,A,!1,null,null,null),z=I.exports;I.options.components=Object.assign({QPage:c["i"],QCard:c["c"],QCardSection:c["d"],QInput:c["g"],QIcon:c["f"],QBtn:c["a"]},I.options.components||{});var E=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{attrs:{id:"relatorio"}},[t("q-page",[t("div",{staticClass:"q-pa-md"},[t("div",{staticClass:"q-col-gutter-md row"},[t("div",{staticClass:"col-12"},[t("q-card",{attrs:{flat:""}},[t("q-card-section",[t("div",{staticClass:"q-pa-md"},[t("div",{staticClass:"q-col-gutter-md row"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"text-center"},[t("img",{attrs:{src:a("722b"),alt:"Logo da DouraSoft Azul",width:"190"}}),t("p",{staticClass:"text-body2"},[e._v("(67) 2108-7007")]),t("div",{staticStyle:{border:"1px solid black","border-radius":"20px"}},[t("p",{staticClass:"text-h6"},[e._v(" Teste de Personalidade DouraSoft ")]),t("p",{staticClass:"text-subtitle2 text-weight-light"},[e._v(" Nome "),t("strong",[e._v(e._s(e.formulario.nome)+" ")]),e._v(" Telefone "),t("strong",[e._v(e._s(e.formulario.telefone)+" ")]),e._v(" E-mail "),t("strong",[e._v(e._s(e.formulario.email))])])]),t("br"),t("p",{staticClass:"text-subtitle1 text-weight-bold"},[e._v(" "+e._s(e.returnTipo)+" ")])])])])])]),t("q-card-section",[t("GChart",{attrs:{type:"ColumnChart",data:e.chartData,options:e.chartOptions}})],1),t("q-card-section",[t("div",{staticClass:"q-pa-md"},[t("div",{staticClass:"q-col-gutter-md row"},e._l(e.personalidades[e.returnTipo],(function(o,a){return t("div",{key:a,staticClass:"col-12 col-md-3 text-justify"},[t("strong",[e._v(e._s(a))]),t("br"),e._l(o,(function(a,i){return t("span",{key:a},[e._v(" "+e._s(a)+e._s(o.length===i+1?".":",")+" ")])}))],2)})),0)])])],1)],1)])])])],1)},y=[],w=a("cb43");function D(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function T(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?D(Object(a),!0).forEach((function(o){Object(v["a"])(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}var _={name:"relatorio",components:{GChart:w["GChart"]},data:function(){return{chartOptions:{width:"100%",legend:{position:"top"},axes:{x:{0:{side:"top",label:"Tipos"}}},bar:{groupWidth:"40%"},colors:["#EA4335","#34A853","#4285f4","#ADB3BA"]}}},computed:T({},Object(g["b"])(["resultado","definicoesPalavras","personalidades","formulario"]),{chartData:function(){return[["Resultados","Sanguíneo","Colérico","Melancólico","Fleumático"],["",this.resultado[0],this.resultado[1],this.resultado[2],this.resultado[3]]]},returnTipo:function(){var e=Math.max(this.resultado[0],this.resultado[1],this.resultado[2],this.resultado[3]);return e===this.resultado[0]?"A Personalidade do Popular Sanguíneo. O Extrovertido, o Falador, o Otimista":e===this.resultado[1]?"A Personalidade do Forte Colérico. O Extrovertido, o Fazedor, o Otimista":e===this.resultado[2]?"A Personalidade do Perfeito Melancólico. O Introvertido, o Pensador, o Pessimista":e===this.resultado[3]?"A Personalidade do Sereno Fleugmático. O Introvertïdo, o Observador, o Pessimista":""}}),mounted:function(){setTimeout((function(){localStorage.setItem("inicio",!1),localStorage.removeItem("formulario")}),1e4)},created:function(){this.$store.commit("formulario",JSON.parse(localStorage["formulario"]))}},F=_,k=Object(d["a"])(F,E,y,!1,null,null,null),M=k.exports;k.options.components=Object.assign({QPage:c["i"],QCard:c["c"],QCardSection:c["d"]},k.options.components||{}),t["a"].use(m["a"]);var N=[{path:"/",name:"formInicio",component:z},{path:"/exercicio",name:"exercicio",component:P,beforeEnter:function(e,o,a){!0===JSON.parse(localStorage["inicio"])?a():a("/")}},{path:"/relatorio",name:"relatorio",component:M,beforeEnter:function(e,o,a){!0===JSON.parse(localStorage["inicio"])?a():a("/")}},{path:"*",redirect:"/"}],R=new m["a"]({mode:"history",base:"/",routes:N}),Q=R;t["a"].use(g["a"]);var U=new g["a"].Store({state:{formulario:{nome:"",telefone:"",email:"",autorizo:!0},resultado:[0,0,0,0],definicoesPalavras:[[{tipo:"Aventureiro",texto:"É a pessoa que participará de novos e audaciosos empreendimentos com a determinação de controlá-los."},{tipo:"Adaptável",texto:"Facilmente se adapta e se sente confortável em qualquer situação."},{tipo:"Animado",texto:"Cheio de vida, movimenta vigorosamente as mãos e os braços."},{tipo:"Analítico",texto:"Gosta de animar as partes para ter relacionamentos lógicos e apropriados."}],[{tipo:"Persistente",texto:"Visualiza um projeto realizado antes de começar outro."},{tipo:"Brincalhão",texto:"Cheio de alegria e bom humor."},{tipo:"Persuasivo",texto:"Convence mais através da lógica e fatos do que através de charme ou poder."},{tipo:"Sereno",texto:"Parece calmo, tranqüilo e se afasta de qualquer forma de discussão."}],[{tipo:"Submisso",texto:"Aceita facilmente o ponto de vista ou os desejos dos outros e tem pouca necessidade de afirmar a sua própria opinião."},{tipo:"Abnegado",texto:"Quer desistir da própria vida, pelo bem dos outros ou para encontrar as necessidades dos outros."},{tipo:"Sociável",texto:"Alguém que acha que estar com outras pessoas, é muito mais uma oportunidade de ser atraente e animado do que um desafio ou oportunidade de negócios."},{tipo:"Enérgico",texto:"Alguém que está determinado a fazer da sua própria maneira."}],[{tipo:"Atencioso",texto:"Importa-se com as necessidades e sentimentos dos outros."},{tipo:"Controlado",texto:"Tem sentimentos, mas raramente os demonstra."},{tipo:"Competitivo",texto:"Transforma toda situação, acontecimento ou jogo numa competição e sempre joga para vencer!"},{tipo:"Convincente",texto:"Pode vencer de qualquer coisa através do absoluto charme de sua personalidade."}],[{tipo:"Refrescante",texto:"Renova e estimula. ou faz com que os outros se sintam bem."},{tipo:"Respeitoso",texto:"Trata os outros com respeito, honra e estima."},{tipo:"Reservado",texto:"Impede a si mesmo de expressar emoções e entusiasmo."},{tipo:"Habilidoso",texto:"Capaz de agir rápida e eficazmente em qualquer situação."}],[{tipo:"Satisfeito",texto:"A pessoa que facilmente aceita qualquer situação e circunstancia."},{tipo:"Sensível",texto:"Preocupa-se intensamente com os outros e com o que acontece."},{tipo:"Auto-suficiente",texto:"Uma pessoa independente que pode contar plenamente com suas próprias capacidades, julgamento e recursos."},{tipo:"Espirituoso",texto:"Cheio de vida e entusiasmo."}],[{tipo:"Planejador",texto:"Prefere trabalhar um plano detalhado com antecedéncia, para realização de um projeto ou objetivo, e prefere envolver-se com os estágios de planejamento e com o produto final mais do que na execução da tarefa."},{tipo:"Paciente",texto:"Inabalável por alguma demora; permanece calmo e tolerante."},{tipo:"Positivo",texto:"Sabe que tudo dará certo, se ele estiver no comando."},{tipo:"Estimulador",texto:"Impulsiona ou obriga os outros a se unirem, investirem e participarem utìlizando-se do charme de sua própria personalidade."}],[{tipo:"Seguro",texto:"Confiante, raramente hesita ou fica indeciso."},{tipo:"Espontâneo",texto:"Prefere que tudo na vida seja impulsivo, atividade não-premeditada, não restrito por planos."},{tipo:"Organizado",texto:"Age e vive de acordo com um plano diário e não gosta que seu plano seja interrompido."},{tipo:"Tímido",texto:"Ctuieto. Não instiga facilmente uma conversa."}],[{tipo:"Ordeiro",texto:"Uma pessoa que tem um plano metódico e sistemático para as coisas."},{tipo:"Serviçal",texto:"Acomodado. Alguém que rapidamente faz como a outra pessoa quer."},{tipo:"Franco",texto:"Fala francamente sem restrição."},{tipo:"Otimista",texto:"Radiante disposição para convencer a ele mesmo e aos outros de que tudo dará certo."}],[{tipo:"Amigável",texto:"Gosta mais de responder do que perguntar, raramente inicia uma conversa."},{tipo:"Fiel",texto:"Sempre confiável, imutável, leal e muitas vezes devotado além da razão."},{tipo:"Engraçado",texto:"Brilhante senso de humor que pode transformar virtualmente qualquer história em um evento brilhante."},{tipo:"Vigoroso",texto:"Uma personalidade de comando que os outros hesitam em contrariar."}],[{tipo:"Audacioso",texto:"Gosta de arriscar; sem medo, audaz."},{tipo:"Encantador",texto:"Uma pessoa feliz. E. bom estar em sua companhia."},{tipo:"Diplomático",texto:"Lida com as pessoas com tato, de forma sensível e paciente."},{tipo:"Minucioso",texto:"Faz tudo na ordem correta, tem boa memória para tudo que acontece."}],[{tipo:"Alegre",texto:"Constantemente de bom humor e promove alegria nos outros."},{tipo:"Consistente",texto:"Emocionalmente constante, reage da maneira que esperamos."},{tipo:"Culto",texto:"Uma pessoa que se interessa tanto por atividades intelectuais quanto artisticas, tais como teatro, sinfonias, balé."},{tipo:"Confiante",texto:"Seguro por natureza; tem certeza de sua própria habilidade e sucesso."}],[{tipo:"Idealista",texto:"Visualiza coisas como se fossem perfeitas: tem uma necessidade de estar à altura de seu próprio padrão."},{tipo:"Independente",texto:"Auto-suficiente; apóia a si mesmo, autoconfiante e parece ter pouca necessidade de ajuda."},{tipo:"Inofensivo",texto:"A pessoa que nunca diz ou causa algo desagradável ou censurável."},{tipo:"Inspirado",texto:"A pessoa que sempre traz algum processo de criação."}],[{tipo:"Demonstrativo",texto:"Expressa emoções abertamente, especialmente sua afeição. Não hesita em tocar os outros quando falam com eles."},{tipo:"Decidido",texto:"Uma pessoa com uma habilidade para fazer avaliações de forma rápida e conclusiva."},{tipo:"Irônico",texto:"Demonstra ironia: pode ser sarcástico por natureza."},{tipo:"Profundo",texto:"Intenso e freqüentemente introspectivo com aversão a conversas e atividades superficiais."}],[{tipo:"Mediador",texto:"Consistentemente se vê na situação de reconciliar diferenças a fim de evitar conflitos."},{tipo:"Musical",texto:"Participa de ou tem profunda apreciação por música; mais comprometido com a música como forma de arte do que com a alegria da performance."},{tipo:"Ativo",texto:"Dirigido pela necessidade de ser produtivo, é um lider que os outros seguem, acha dificil ficar quieto."},{tipo:"Desembaraçado",texto:"Adora uma festa e mal pode esperar para encontrar alguém no salao. Sempre encontra alguém conhecido."}],[{tipo:"Pensativo",texto:"Uma pessoa ponderada que se lembra de ocasiões especiais e está pronta a fazer uni gesto amável."},{tipo:"Tenaz",texto:"Agarra-se firmemente, obstinadamente, e não desistirá até que o objetivo seja alcançado."},{tipo:"Conversador",texto:"Fala constantemente, geralmente contando histórias engraçadas e divertindo a todos a sua volta; sente necessidade de preencher o silencio a fim de fazer os outros ficarem confortáveis."},{tipo:"Tolerante",texto:"Aceita facilmente os pensamentos e idéias dos outros sem a necessidade de discordar deles ou mudá-los."}],[{tipo:"Ouvinte",texto:"Parece estar sempre querendo ouvir o que você tem a dizer."},{tipo:"Leal",texto:"Fiel a uma pessoa, um ideal, ou um trabalho, muitas vezes além da razão."},{tipo:"Líder",texto:"Um dirigente nato, levado a comandar, freqüentemente acha dificil acreditar que outra pessoa possa fazer isso tão bem."},{tipo:"Vivo",texto:"Cheio de vida, vigoroso, energético."}],[{tipo:"Contente",texto:"Fica satisfeito facilmente com o que tem, raramente sente inveja."},{tipo:"Chefe",texto:"Comanda e espera que todos os sigam."},{tipo:"Detalhista",texto:"Organiza a vida, as atividades e soluções de problemas através de listas, formulários e gráficos."},{tipo:"Atraente",texto:"Estimado, adorável, centro de atenções."}],[{tipo:"Perfeccionista",texto:"Estipula altos padrões para ele mesmo e freqüentemente para os outros também; deseja que tudo esteja em perfeita ordem a todo tempo."},{tipo:"Agradável",texto:"Desembaraçado, companhia agradável, fácil de conversar."},{tipo:"Produtivo",texto:"Necessita estar constantemente trabalhando ou realizando algo, freqüentemente acha difícil descansar."},{tipo:"Popular",texto:"Alma de festa e conseqüentemente um convidado muito requisitado."}],[{tipo:"Vivaz",texto:"Uma personalidade cheia de vida, efervescente, cheia de alegria."},{tipo:"Valente",texto:"Sem me!!c, audadaso, avança sem medo de arriscar."},{tipo:"Comportado",texto:"Deseja constantemente comportar-se dentro dos padrões que acha serem apropriados."},{tipo:"Equilibrado",texto:"Estável, personalidade meio-termo, não sujeito a altos e baixos"}],[{tipo:"Vazio",texto:"Uma pessoa que demonstra pouca expressão ou emoção facial."},{tipo:"Acanhado",texto:"Evita chamar atenção, resultado de sua autopercepção."},{tipo:"Metido",texto:"Pomposo, espalhafatoso, barulhento."},{tipo:"Mandão",texto:"Que comanda, dominador, às vezes oprime os outros em relacionamentos adultos."}],[{tipo:"Indisciplinado",texto:"Uma pessoa cuja falta de ordem permeia a maior parte das áreas de sua vida."},{tipo:"Insensível",texto:"Acha difícil relacionar-se com os problemas ou mágoas dos outros."},{tipo:"Desinteressado",texto:"Tende a não se animar, freqüentemente acha que não funcionaria de maneira nenhuma."},{tipo:"Rancoroso",texto:"Alguém que acha difícil perdoar ou esquecer uma mágoa ou uma injustiça feita a ele, se agarra ao rancor."}],[{tipo:"Relutante",texto:"Evita ou luta para não ser envolvido, especialmente quando é algo complexo."},{tipo:"Ressentido",texto:"Freqüentemente carrega sentimentos doentios como resultado de ofensas reais ou ilusórias."},{tipo:"Inflexível",texto:"Empenha-se e trabalha contra, hesita em aceitar uma idéia que não seja a sua."},{tipo:"Repetitivo",texto:"Conta novamente histórias e acontecimentos para entreter você, sem perceber que já contou essa história várias vezes, constantemente precisa estar falando."}],[{tipo:"Complicado",texto:"Insiste em assuntos e detalhes insignìficantes, dando muita atenção a detalhes triviais."},{tipo:"Medroso",texto:"Freqüentemente vivenáa sentimentos de profunda preocupação, apreensão ou ansiedade."},{tipo:"Esquecido",texto:"Falta de memória que geralmente está ligada a uma falta de disciplina e não preocupação em gravar coisas que não são engraçadas."},{tipo:"Franco",texto:"Honesto, comunicativo, e não se importa em contar exatamente o que pensa."}],[{tipo:"Impaciente",texto:"Uma pessoa que acha difícil tolerar irritação ou esperar pelos outros."},{tipo:"Inseguro",texto:"Alguém apreensivo ou que tem falta de confiança."},{tipo:"Indeciso",texto:"Uma pessoa que acha difícil tomar qualquer decisão. (Não uma personalidade que trabalha duro até chegar a decisão perfeita)."},{tipo:"Inoportuno",texto:"Uma pessoa que fala mais do que ouve, que começa a falar sem mesmo perceber que alguém já está falando."}],[{tipo:"Impopular",texto:"Uma pessoa cuja intensidade e busca pela perfeição afasta os outros."},{tipo:"Desligado",texto:"Alguém que não gosta de ouvir ou se interessar por nenhuma atividade de convívio social ou até mesmo a vida de outras pessoas."},{tipo:"Imprevisível",texto:"Deseja ajudar, mas em seguida desaparece: promete vir, mas esquece de aparecer."},{tipo:"Frio",texto:"Acha difícil demonstrar verbal ou fisicamente carinho sincero."}],[{tipo:"Cabeçudo",texto:"Insiste me sua forma de pensar."},{tipo:"Casual",texto:"Tem uma forma inconsciente de fazer as coisps."},{tipo:"Insatisfeito",texto:"Uma pessoa cujos padrões são tão altos que é praticamente impossível agradá-la."},{tipo:"Hesitante",texto:"Lento para entrar em ação e difícil de se envolver."}],[{tipo:"Simples",texto:"Uma personalidade meio-termo sem altos e baixos e que demonstra pouca, se alguma, emoção."},{tipo:"Pessimista",texto:"Apesar de esperar o melhor, essa pessoa geralmente vê o lado pior da situação."},{tipo:"Orgulhoso",texto:"Alguém com grande auto-estiam que se vê como a pessoa que está sempre certa e a melhor pessoa para o emprego."},{tipo:"Permissivo",texto:"Permite aos outros (incluindo as crianças) fazerem o que desejam para que não deixem de gostar deles."}],[{tipo:"Esquentado",texto:"Alguém que tem um temperamento facilmente irritável, que se expressa de forma furiosa e quando tudo acaba esquece quase instantaneamente."},{tipo:"Incerto",texto:"Uma pessoa que não estabelece objetivos e não se importa com isso."},{tipo:"Combativo",texto:"Incita discussões geralmente porque está certo, não importa qual seja a situação."},{tipo:"Alienado",texto:"Geralmente fica afastado dos outros, freqüentemente por causa da insegurança ou medo de que os outros não gostem de sua companhia."}],[{tipo:"Ingênuo",texto:"Visão simples e infantil, falta de compreensão sobre quais sejam os profundos níveis da vida"},{tipo:"Negativo",texto:"Alguém cuja atitude é raramente positiva e freqüentemente vê o lado triste ou negativo de cada situação."},{tipo:"Corajoso",texto:"Cheio de confiança, coragem, freqüentemente em sentido negativo."},{tipo:"Indiferente",texto:"Alienado, despreocupado, desinteressado."}],[{tipo:"Preocupado",texto:"Sente-se freqüentemente indeàso, preocupado ou ansioso."},{tipo:"Retraído",texto:"Uma pessoa voltada para si mesma que necessita de muito tempo sozinha ou isolada."},{tipo:"Workaholic",texto:"Um enérgico trabalhador que precisa estar constantemente produzindo e se sente culpado quando descansa; não é guiado por uma necessidade de perfeição ou conclusão, mas por um.- necessidade de realização e recompensa."},{tipo:"Egoísta",texto:"Luta pelo crédito ou aprovação dos outros. Quando artista, essa pessoa se alimenta do aplauso, riso elou aceitação do público."}],[{tipo:"Sensível demais",texto:"Muito introspectivo e se ofende facilmente quando mal compreendido."},{tipo:"Indelicado",texto:"As vezes. expressa-se de maneira ofensiva e imprudente."},{tipo:"Tímido",texto:"Recua diante de situações difíceis."},{tipo:"Tagarela",texto:"Um falante alegre, compulsivo que acha difiàl ouvir."}],[{tipo:"Confuso",texto:"Suas características são a incerteza a falta de confiança de que as coisas vão funcionar."},{tipo:"Desorganizado",texto:"Falta de habilidade de colocar sua vida em ordem."},{tipo:"Imperioso",texto:"Compulsivamente toma o controle das situações das pessoas, geralmente dizendo aos outros o que fazer."},{tipo:"Deprimido",texto:"Uma pessoa que se sente desanimada a maior parte do tempo,"}],[{tipo:"Inconstante",texto:"Irregular, contraditório, com ações e emoções não baseadas na lógica."},{tipo:"Introvertido",texto:"Uma pessoa cujos pensamentos e interesses são direcionados para seu intimo, vive voltada para si."},{tipo:"Intolerante",texto:"Parece incapaz de aceitar as atitudes, pontos de vista, ou maneiras de fazer as coisas provenientes dos outros."},{tipo:"Apático",texto:"Que expressa apatia, insensibilidade, indiferença."}],[{tipo:"Desordenado",texto:"Vive na desordem e é incapaz de encontrar as coisas."},{tipo:"Triste",texto:"No fica e-nocionado, mas facilmente entra errb depressão quando sente que não é apreciado."},{tipo:"Resmungão",texto:"Fala baixo e entre os dentes quando pressionado, não faz questão de falar claramente."},{tipo:"Manipulador",texto:"Influencia e dirige de forma astuta ou tortuosa a fim de tirar vantagem para si mesmo; fará isso a qualquer custo."}],[{tipo:"Lento",texto:"Geralmente não pensa nem age rapidamente, seria muito incômodo."},{tipo:"Obstinado",texto:"Determinado a exercer a sua própria vontade, difícil de persuadir."},{tipo:"Convencido",texto:"Precisa ser o centro das atenções, gosta de ser observado."},{tipo:"Cético",texto:"Descrente. Questiona o porquê das palavras."}],[{tipo:"Solitário",texto:"Precisa de muito tempo sozinho e tende a evitar as pessoas."},{tipo:"Tirânico",texto:"Não hesita em informar que está certo ou que está no comando."},{tipo:"Preguiçoso",texto:"Avalia trabalhos ou atividades em termos de quanta energia irá necessitar."},{tipo:"Barulhento",texto:"Uma pessoa cuja risada ou voz pode ser ouvido por todos na sala."}],[{tipo:"Vagaroso",texto:"Lento para agir, precisa ser motivado."},{tipo:"Desconfiado",texto:"Tende a suspeitar dos outros ou de suas idéias."},{tipo:"Irritável",texto:"Tem uma raiva causada pela impaciência e exigência, além de possuir 'pavio curto'. A raiva é expressada quando os outros não estão se movendo rápido o suficiente ou não completaram o que foi solicitado por ele."},{tipo:"Distraído",texto:"Falta de poder de concentração ou atenção, aleatório."}],[{tipo:"Vingativo",texto:"Carrega ódio e pune as pessoas que o ofendem: muitas vezes sonegando sutilmente sua amizade ou seu afeto."},{tipo:"Agitado",texto:"Gosta de constantes atividades novas porque não é divertido fazer as mesmas coisas o tempo todo."},{tipo:"Relutante",texto:"Não deseja ou luta para não ser envolvido."},{tipo:"Imprudente",texto:"Pode agir precipitadamente sem pensar direito nas coisas, geralmente por causa da impaciénàa."}],[{tipo:"Acomodado",texto:"Freqüentemente não sustentará sua opiníão, mesmo quando estiver certo, a fim de evitar conflitos,"},{tipo:"Crítico",texto:"Constantemente está avaliando e fazei do julgamentos: freqüentemente está pensando ou tendo reações negativas."},{tipo:"Astuto",texto:"Inteligente, alguém que sempre pode encontrar uma maneira de alcançar o que deseja."},{tipo:"Instável",texto:"Infantil, que precisa de muita mudança e variedade para não ficar aborrecido."}]],personalidades:{"A Personalidade do Popular Sanguíneo. O Extrovertido, o Falador, o Otimista":{"As emoções do Popular Sanguíneo":["Personalidade cativante Falador, contador de histórias","Alma da festa","Bom humor","Boa memória para cores","Segura fisicamente um ouvinte","Emotivo e demonstrativo","Entusiasta e expressivo","Alegre e efervescente","Curioso","Tem boa presença no palco","Inocente","Vive no presente","Disposição variável","Sincero de coração","Sempre uma criança"],"O Popular Sanguíneo como Pai":["Torna divertido o lar","É apreciado pelos amigos dos filhos","Vê o lado engraçado das crises"],"O Popular Sanguíneo no Trabalho":["Oferece-se para tarefas","Cria novas atividades","Boa pessoa, aparentemente","Criativo e colorido","Energético e entusiasmado","Começa com brilhantismo","Estimula os outros ao trabalho","Inspira os outros a participar"],"O Popular Sanguíneo como Amigo":["Faz amizades com facilidade","Ama as pessoas","Floresce com elogios","Parece excitante","Invejado pelos outros","Não guarda ressentimentos","Desculpa - se facilmente","Evita momentos de tédio","Gosta de atividades espontâneas"]},"A Personalidade do Perfeito Melancólico. O Introvertido, o Pensador, o Pessimista":{"As Emoções do Perfeito Melancólico":["Profundo e pensativo","Analítico","Sério e cheio de propósitos","Pode ser um gênio","Talentoso e criativo","Artístico e músico","Filosófico e poético","Apreciador da beleza","Sensível aos outros","Abnegado","Cuidadoso","Idealista"],"O Perfeito Melancólico como Pai":["Tem padrões altos","Quer tudo feito corretamente","Mantém a casa em ordem","Arruma a desordem dos filhos","Sacrifica-se pelos outros","Incentiva estudos e talento"],"O Perfeito Melancólico no Trabalho":["Orientado por horário","Perfeccionista, altos padrões","Detalhista","Persistente e minucioso","Ordeiro e organizado","Arrumado","Econômico","Vê os problemas","Encontra soluções criativas","Precisa terminar o que começou","Gosta de gráficos, tabelas, listas"],"O Perfeito Melancólico como Amigo":["Faz amizades com cuidado","Fica contente em ficar no anonimato","Evita chamar a atenção","Fiel e devotado","Ouve reclamações","Resolve os problemas dos outros","Cuidado profundo com os outros","Chora de compaixão","Procura o parceiro ideal"]},"A Personalidade do Forte Colérico. O Extrovertido, o Fazedor, o Otimista":{"As Emoções do Forte Colérico":["Líder nato","Dinâmico e ativo","Necessidade compulsiva de mudanças","Precisa corrigir erros","Vontade própria forte e decisiva","Sem emoção","Não se abate facilmente","Independente e auto - suficiente","Esbanja confiança","Pode fazer funcionar qualquer coisa"],"O Forte Colérico no Trabalho":["Orientado por metas","Tem uma visão global","Organiza bem o trabalho","Procura soluções práticas","Agiliza-se rapidamente","Delega tarefas","Insiste na produção","Estimula atividades","Prospera debaixo de oposição","Realiza as metas"],"O Forte Colérico como Pai":["Exerce liderança sólida","Estabelece metas","Motiva a família à ação","Sempre tem a resposta certa","Organiza o lar"],"O Forte Colérico como Amigo":["Quase não precisa de amigos","Trabalha para uma atividade de grupo","Lidera e organiza","Geralmente está certo","Sobressai-se nas emergências"]},"A Personalidade do Sereno Fleugmático. O Introvertido, o Observador, o Pessimista":{"As Emoções do Sereno Fleugmático":["Personalidade apagada","Acomodado e relaxado","Calmo","Paciente, equilibrado","Vida coerente","Quieto mas engraçado","Compassivo e bom","Mantém as emoções sob controle","De bem com a vida","Pessoa de todas as horas"],"O Sereno Fleugmático no Trabalho":["Competente e estável","Pacífico e estável","Habilidade administratáva","Medcia problemas","Evita conflitosÍ","Bom sob pressão","Encontra a mancira fácil"],"O Sereno Fleugmático Como Pai":["É um bom pai","Reserva tempo para os filhos","Não tem pressa","Aceita tanto o ruim como o bom","Não se agita facilmente "],"O Sereno Fleugmático Como Amigo":["De fácil convivência","Agradável","Inofensivo","Bom ouvinte","Senso de humor irônico","Gosta de observar as pessoas","Tem muitos amigos","Tem compaixão e cuidado"]}}},mutations:{formulario:function(e,o){e.formulario=o},resultado:function(e,o){e.resultado=o}},actions:{},getters:{formulario:function(e){return e.formulario},resultado:function(e){return e.resultado},definicoesPalavras:function(e){return e.definicoesPalavras},personalidades:function(e){return e.personalidades}},modules:{}}),V=a("9483");Object(V["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("0e21"),a("5c7d");var L=a("f476"),B=(a("7d6e"),a("e54f"),a("a4b7"),a("05bc"),a("0d0e"),a("573e"),a("b05d"));t["a"].use(B["a"],{config:{},components:{},directives:{},plugins:{},lang:L["a"]}),t["a"].config.productionTip=!1,new t["a"]({router:Q,store:U,render:function(e){return e(l)}}).$mount("#app")},"722b":function(e,o,a){e.exports=a.p+"img/douranovo.2569e31c.png"}});
//# sourceMappingURL=app.f81a1b9d.js.map