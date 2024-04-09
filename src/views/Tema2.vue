<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Introducción a la evaluación de accesibilidad
    p.mb-5(data-aos="fade-right") La accesibilidad dentro del contexto de la experiencia de usuario significa que se da la flexibilidad para adaptarse a las necesidades, preferencias y limitaciones de cada uno de los usuarios en cuestión.
    .row
      .col-12.bg-c2(data-aos="fade-left")
        .p-4
          .row.align-items-center
            .col-lg-auto.pe-0.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img1.png', style="width:350px", alt='').m-auto
            .col.bg-c3
              .p-4
                p.mb-0  En un escenario ideal, las interfaces o sistemas deberían adaptarse a cada una de las particularidades de los usuarios, sin que nadie se vea limitado en el uso de algo por causa de esas diferencias. Además, es necesario evitar diseñar solamente atendiendo a características de grupos de población específicos, pues eso generaría más barreras.
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Conceptos básicos
    p(data-aos="fade-right") La accesibilidad es tratada en la Convención de las Naciones Unidas sobre los Derechos para las Personas con Discapacidades (2021), en especial el artículo 9° que indica:
    .row.mb-3
      .col-12.bg-c32(data-aos="fade-down")
        .p-4
          .row
            .col-lg-auto.mb-4.mb-lg-0
              figure.fig-p3
                img(src='@/assets/curso/tema2/img1.svg', style="width:250px", alt='').m-auto
            .col.bg-c24
              .ps-5.py-4
                p Para que las personas con discapacidad puedan vivir de forma independiente y participar plenamente en todos los aspectos de la vida, los Estados Parte adoptarán las medidas adecuadas para garantizar a las personas con discapacidad el acceso, en igualdad de condiciones con las demás, al entorno físico, al transporte y a la información. Y comunicaciones, incluidos los sistemas y tecnologías de la información y las comunicaciones, ya otras instalaciones y servicios abiertos o prestados al público, tanto en zonas urbanas como rurales. 
                p Estas medidas, que incluirán la identificación y eliminación de obstáculos y barreras a la accesibilidad, se aplicarán, entre otros:
                ol.lista-ol--cuadro
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span a
                    | Edificios, carreteras, transporte y otras instalaciones interiores y exteriores, incluidas escuelas, viviendas, instalaciones médicas y lugares de trabajo.
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span b
                    | Servicios de información, comunicaciones y otros, incluidos los servicios electrónicos y los servicios de emergencia (United Nations, 2021).
    p.mb-0(data-aos="fade-right") De esta forma, se puede dimensionar el impacto tan alto que tiene todas las aristas de la disciplina de la accesibilidad, en la cual en esta sección solo se apunta al área tecnológica.
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Herramientas de validación
    p(data-aos="fade-right") A continuación, se abordarán dos metodologías que ayudan a evaluar la accesibilidad:
    .row.bg-c33
      .col-12
        .px-5.pt-4
          .row.mb-4(data-aos="fade-right")
            .col-auto
              p.txt-c1 #[b Metodología de Evaluación de Conformidad con la Accesibilidad en Sitios Web (WCAG-EM)]
          .row.mb-5
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img2.png', style="width:380px", alt='').m-auto
            .col-lg-8(data-aos="fade-left")
              p En el año 2013, con el objetivo de unificar los procesos de evaluación de contenido web, el consorcio de la WWW, W3C, desarrolló una Metodología de Evaluación de Conformidad de la Accesibilidad en Sitios Web: la #[i Website Accessibility Conformance Evaluation Methodology] (WCAG-EM), dando lugar a la WCAG-EM 1.0. Esta se presenta como una metodología que evalúa la conformidad con los criterios de accesibilidad y la WCAG 2.0, permitiendo indicar el nivel de accesibilidad de un sitio web.
              p.mb-0 En este contexto, la WCAG-EM se emplea habitualmente para realizar una evaluación exhaustiva de un sitio web de acuerdo con las pautas WCAG 2.0, integrando la validación automática, semiautomática y manual.
          .row.justify-content-center.mb-5
            .col-lg-10.bg-c11(data-aos="fade-down")
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema2/img2.svg', style="width:100px" alt='').m-auto
                  .col
                    p.mb-0 Dispone de una prueba preliminar llamada, #[b #[i “Easy Checks - A First Review of Web Accessibility”]], el cual se anexa como material de apoyo bajo el tema Herramientas de validación que permite evaluar cuestiones precisas del sitio web relacionados con la navegación, el texto, elementos visuales, multimedia y la interacción.
          .tarjeta.color-secundario.p-3.mb-5(data-aos="fade-left")
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/tema2/img3.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Herramientas de validación
                    p Ingrese a la prueba preliminar llamada, #[i “Easy Checks - A First Review of Web Accessibility”], permite evaluar cuestiones precisas del sitio web relacionados con la navegación, el texto, elementos visuales, multimedia y la interacción.
                  .col-sm-auto
                    a.boton.color-acento-botones.texto-blanco(href="https://www.w3.org/WAI/test-evaluate/preliminary/" target="_blank")
                      span(style="color:#000 !important") Visitar enlace
                      i.fas.fa-link(style="color:#000 !important")
          .row.mb-4(data-aos="fade-right")
            .col-auto
              p.txt-c1 #[b Recorrido por barreras de accesibilidad (#[i Barrier Walkthrough])]
          .row.mb-5
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              p Este método de evaluación de la accesibilidad se presenta en el artículo #[i Web Accessibility Testing: When the Method Is the Culprit], de Brajnik (2006), que consiste en una adaptación del método de evaluación heurística donde, en este caso, los principios heurísticos son reemplazados por barreras de accesibilidad (Brajnik, 2006).
              p.mb-0 Según Brajnik, se introduce un término denominado "barrera", el cual debe entenderse como una condición que dificulta a una persona, con alguna característica particular, alcanzar el objetivo de una tarea. Por lo tanto, la barrera se clasifica en una serie de categorías y se describe por:
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img3.png', style="width:380px", alt='').m-auto
          .row.justify-content-center(data-aos="fade-right")
            .col-md-6.col-lg.bg-c22.m-2
              .p-4
                figure.mb-3
                  img(src='@/assets/curso/tema2/img5.svg', style="width:70px", alt='')
                p El tipo de discapacidad.
            .col-md-6.col-lg.bg-c22.m-2
              .p-4
                figure.mb-3
                  img(src='@/assets/curso/tema2/img6.svg', style="width:70px", alt='')
                p El tipo de tecnología asistencial.
            .col-md-6.col-lg.bg-c22.m-2
              .p-4
                figure.mb-3
                  img(src='@/assets/curso/tema2/img7.svg', style="width:70px", alt='')
                p El tipo de error (la actividad o tarea a realizar y la razón por la que no puede completarse).
            .col-md-6.col-lg.bg-c22.m-2
              .p-4
                figure.mb-3
                  img(src='@/assets/curso/tema2/img8.svg', style="width:70px", alt='')
                p Las características de la página que presenta la barrera.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
