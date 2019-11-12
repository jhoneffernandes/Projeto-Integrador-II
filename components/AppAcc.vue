<template>
  <div>
    <section class="mt-5">
      <v-toolbar elevation="2">
        <v-toolbar-title class="ml-3">
          <v-btn text="" to="#principal">Conteúdo Principal [Alt + 1]</v-btn>
        </v-toolbar-title>
        <v-toolbar-title class="ml-3">
          <v-btn text="">Menu [Alt + 2]</v-btn>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn icon>
            <v-icon>mdi-format-annotation-minus</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-format-annotation-plus</v-icon>
          </v-btn>
          <v-btn
            text
            href="#altocontraste"
            id="altocontraste"
            accesskey="3"
            onclick="window.toggleContrast()"
            onkeydown="window.toggleContrast()"
          >
            
            Alto contraste [Alt + 3]
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </section>
  </div>
</template>
<script>
export default {};
</script>


<style>
.meio {
  color: rgb(250, 4, 4);
}

footer {
  position: absolute;
  bottom: 0;
  width: 99%;
  text-align: center;
  background-color: rgba(75, 72, 72, 0.616);
  color: white;
}

.container {
  margin-right: auto;
  margin-left: auto;
}

.barra-acessibilidade {
  height: 30px;
  line-height: 22px;
  background-color: rgb(221, 221, 221);
  z-index: 4;
  margin-top: -10px;
  box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.2);
  vertical-align: middle;
}

.barra-acessibilidade ul {
  padding: 0;
  margin: 2px 0 0 0;
  text-align: center;
}

.zoom_mais,
.zoom_normal,
.zoom_menos {
  margin-top: 2px;
  color: #000;
  font-size: 16px;
  font-weight: bold;
}
.barra-acessibilidade ul li {
  display: inline-block;
  border-left: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0 10px;
  font-size: 80%;
  cursor: pointer;
}

.barra-acessibilidade-esq {
  float: left;
  text-align: left;
}

.barra-acessibilidade-dir {
  float: right;
  text-align: right;
}

.ico-acessibilidade {
  font-size: 0px;
  background: url("~assets/icones/sprite.png") no-repeat;
}

.ico-acessibilidade.ico-contraste {
  padding: 16px 8px 9px 8px;
  background-position: -465px -3px;
}

.ico-acessibilidade.ico-human {
  padding: 16px 8px 9px 8px;
  background-position: -495px -3px;
}

/*Contraste*/

.acContraste .meio {
  color: rgb(90, 90, 90);
}

.acContraste body,
.acContraste div,
.acContraste footer {
  -webkit-transition: 0.5s ease-in;
  -moz-transition: 0.5s ease-in;
  -o-transition: 0.5s ease-in;
  transition: 0.5s ease-in;
}

.acContraste body img,
.acContraste a,
.acContraste a:hover,
.acContraste a:focus,
.acContraste .rowServicosOnline,
.acContraste .span9 #content p,
.acContraste .span9 #content ul {
  color: #000;
}

.acContraste .barra-acessibilidade a,
.acContraste .slide a,
.acContraste .iconesTop a,
.acContraste #content p,
.acContraste p.mais a,
.acContraste .noticias span.categ,
.acContraste .noticias li a.texto,
.acContraste footer .links a {
  color: #fff;
}

.acContraste .ico-acessibilidade.ico-contraste {
  padding: 16px 8px 9px 8px;
  background-position: -465px -3px;
}

.acContraste .ico-acessibilidade.ico-human {
  padding: 16px 8px 9px 8px;
  background-position: -495px -3px;
}

.acContraste body.gray,
.acContraste footer,
.acContraste div#nav_main ul li a:hover,
.acContraste div#nav_main ul li a.active,
.acContraste .box,
.acContraste .barra-acessibilidade:hover {
  background-color: #000 !important;
}

.acContraste #nav_main,
.acContraste .barra-acessibilidade {
  background: #333;
}

.acContraste #servicosOnline_rotativos_menu_horizontal,
.acContraste #servicosOnline_rotativos,
.acContraste #servicosOnline_slick,
.acContraste #circulos_rotativos {
  background: #ffffff;
}

.acContraste .introjs-tooltip a.introjs-nextbutton,
.acContraste .btn-link {
  background: #000;
}

.acContraste .servico_titulo,
.acContraste #circulos_rotativos .servico_titulo,
.acContraste .box_servico p span {
  color: #000;
}

.acContraste h1.tit {
  color: #fff;
  border-bottom: 1px solid #fff;
}

.acContraste .box_vejamais {
  background: grey;
}

.acContraste .introjs-tooltip h3,
.acContraste .well {
  color: #000;
}

.acContraste .introjs-tooltip a.introjs-skipbutton,
.acContraste .icone_alerta {
  background: #ccc;
}

.acContraste .btn,
.acContraste .btn-primary {
  background: #808080;
  color: #ffffff;
  border-color: #777777;
}

.acContraste .btn:hover,
.acContraste .btn-primary:hover {
  background: #ccc;
  color: #fff;
}

.acContraste .box-faq,
.acContraste .box_obs {
  color: #000;
  background: #ccc6;
}

.acContraste .opDestaque a,
.acContraste .data_hora {
  background: #9e9e9e;
}

.acContraste .opDestaque a:hover {
  background: #75757596;
}

.acContraste .tit-ficha {
  color: #616161;
}

.acContraste .text-info {
  color: #ccc !important;
}
</style>