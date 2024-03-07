<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p Bienvenidos al componente Evaluación de usabilidad del prototipo #[i software].
    .row
      .col-lg-8.order-2.order-lg-1
        .row
          .col-12.bg-c1
            .p-4
              p Para la realización de una evaluación de usabilidad se debe revisar muy bien las aplicaciones a evaluar, así como las condiciones de cada una de ellas, por lo que se debe centrar en el: ¿Cómo?, ¿cuándo? y ¿dónde? van a ser utilizadas, dichas aplicaciones.
              p.mb-0 Al tener esta información clara, se debe proceder a la revisión de algunas técnicas relevantes para la realización de la evaluación de accesibilidad de sistemas interactivos #[i software]. Luego de explorar estos aspectos, se espera que se tengan las competencias necesarias para realización idónea de una evaluación de usabilidad, considerando los requerimientos y naturaleza del #[i software] a testear.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/intro/img1.png', style="width:350px", alt='').m-auto
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
