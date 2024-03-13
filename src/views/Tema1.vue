<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Técnicas y métodos de evaluación de usabilidad
    p(data-aos="fade-right") Las técnicas de evaluación dentro del contexto de la usabilidad son una parte crítica del proceso de desarrollo de software, debido a su naturaleza iterativa. Una evaluación de usabilidad representa la mejor manera de poner un producto en manos de usuarios reales para observar si lo usan y cómo lo usan antes del lanzamiento del producto.
    .row.mb-3
      .col-12.bg-c2(data-aos="fade-down")
        .p-4
          .row.align-items-center
            .col-lg-auto.pe-0.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img1.svg', style="width:350px", alt='').m-auto
            .col.bg-c3
              .p-4
                p.mb-0 La aplicación de diversas técnicas de evaluación permitirá medir cuantitativa y cualitativamente el comportamiento, el rendimiento y la satisfacción del usuario. Algunos proyectos de software abordan las pruebas de usabilidad, pero solo al final del ciclo de desarrollo.
    p.mb-0(data-aos="fade-right") Desafortunadamente, esto es demasiado tarde en el ciclo de desarrollo para incorporar cambios basados en los resultados de las pruebas de usabilidad. Incluso si se realizan cambios en el diseño del producto, la interfaz debe evaluarse nuevamente para garantizar que el producto cumpla con los puntos de referencia y los objetivos del producto final, afectando la calidad del software. De esta forma, con los siguientes métodos se espera presentar las mejores prácticas en torno a la evaluación de usabilidad para sistemas interactivos de software.
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1 Métodos de inspección
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .row
          .col-12.bg-c4
            .p-4
              p.mb-0 Es un conjunto de métodos basados en la inspección de una interfaz de usuario por parte de un grupo de evaluadores. Normalmente, esta inspección de usabilidad tiene como objetivo identificar problemas de usabilidad en el diseño, aunque algunos métodos también se enfocan en aspectos como la interacción y funcionalidad de un sistema completo.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img1.png', style="width:380px", alt='').m-auto
    .row.mb-5
      .col-12.px-4.pb-4.px-lg-5.pb-lg-5.bg-c5(data-aos="fade-down")
        .row.justify-content-center
          .col-lg-10
            .tarjeta-avatar
              img(src='@/assets/curso/tema1/img2.svg' alt='AvatarTop')
              .tarjeta.color-primario1
                .p-4
                  .bloque-texto-d.p-4
                    .bloque-texto-d__texto.mb-2
                      i.fas.fa-quote-left
                      p.text-center #[b Estos métodos también se orientan a la inspección de especificaciones de la interfaz de usuario que aún no se han implementado necesariamente, lo que significa que este ejercicio se puede realizar al principio del ciclo de vida de la ingeniería de usabilidad.]
                      i.fas.fa-quote-right
                    .bloque-texto-d__autor 
                      p.mb-0.text-center - (Nielsen, 1994).
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Evaluación heurística
    p(data-aos="fade-right") En la literatura se encuentra un sinnúmero de definiciones y ejemplos acerca de los pasos de la evaluación heurística, por lo que en este componente se agrupan las mejores descripciones y buenas prácticas para su aplicación.
    p(data-aos="fade-right") A los 10 principios generales de Jakob Nielsen para el diseño de interacciones se les llama “heurísticas”, porque son reglas generales y no pautas de usabilidad específicas, como se verá a continuación:
    .row.bg-c7
      .col-12
        .px-5.pt-5
          p.mb-4(data-aos="fade-right") #[b.txt-c1 Paso 1. Visibilidad del estado del sistema.] El diseño siempre debe mantener informados a los usuarios sobre lo que está sucediendo, mediante la retroalimentación adecuada dentro de un período de tiempo razonable. (Nielsen, 2020).
          .row.justify-content-center.mb-4
            .col-10.bg-c8(data-aos="fade-left")
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img7.svg', style="width:100px" alt='').m-auto
                  .col
                    p #[b Recomendación]
                    p Cuando los usuarios conocen el estado actual del sistema, conocen de por sí el resultado de sus interacciones anteriores y determinan los próximos pasos.
                    p Las interacciones predecibles generan confianza tanto en el producto como en la marca.
                    p.mb-0 Se recomienda leer en el material de apoyo el concepto de aprendibilidad.
          p.mb-4(data-aos="fade-right") Algunos consejos para la visibilidad del estado del sistema son:
          .row.align-items-center.mb-4
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              .row
                .col-12.bg-c11
                  .p-4
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | Comunicar claramente a los usuarios cuál es el estado del sistema, no se debe tomar ninguna acción con consecuencias para los usuarios sin informarles.
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | Presentar comentarios al usuario lo más rápido posible (idealmente, de inmediato).
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | Generar confianza a través de una comunicación abierta y continua.
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img9.png', style="width:350px" alt='').m-auto
          p.mb-4(data-aos="fade-right") A continuación, se comparten algunas prácticas:
          .row.justify-content-center.mb-5
            .col-10.col-md-8.col-lg.bg-c10.m-2(data-aos="fade-right")
              .p-4
                .row.align-items-center.mb-4
                  .col-auto.pe-0
                    figure
                      img(src='@/assets/curso/tema1/img12.svg', style="width:30px" alt='')
                  .col
                    p.mb-0 #[b Ejemplo: buena práctica]
                p Los indicadores de #[b "Usted está aquí"] en los mapas de centros comerciales tienen que mostrar a las personas dónde se encuentran actualmente, para ayudarles a comprender a dónde ir a continuación.
                .row.justify-content-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img2.png', style="width:450px" alt='')
                    figcaption Nota. Tomada de Nielsen Norman Group (2020).
            .col-10.col-md-8.col-lg.bg-c10.m-2(data-aos="fade-left")
              .p-4
                .row.align-items-center.mb-4
                  .col-auto.pe-0
                    figure
                      img(src='@/assets/curso/tema1/img13.svg', style="width:30px" alt='')
                  .col
                    p.mb-0 #[b Ejemplo: mala práctica]
                p Es una página #[i web] de compras, y genera confusión porque no se selecciona la opción del menú cuando se navega por él. Hay que recordar que todo de la UI (#[i User Interface]) debe indicar en donde se encuentra el usuario.
                .row.justify-content-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.png', style="width:420px" alt='')
                    figcaption Nota. Tomada de Modroño (2021).
    .row.bg-c7
      .col-12
        .px-5.pt-5
          p.mb-4(data-aos="fade-right") #[b.txt-c1 Paso 2. Coincidencia entre el sistema y el mundo real.] El diseño debe hablar el idioma de los usuarios. Utilice palabras, frases y conceptos familiares para el usuario, en lugar de jerga interna. Siga las convenciones del mundo real, haciendo que la información aparezca en un orden lógico y natural (Nielsen, 2020).
          .row.justify-content-center.mb-4
            .col-10.bg-c8(data-aos="fade-down")
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img7.svg', style="width:100px" alt='').m-auto
                  .col
                    p #[b Recomendación]
                    p La forma en que debe diseñar depende en gran medida de sus usuarios específicos. Los términos, conceptos, íconos e imágenes que le parezcan perfectamente claros a usted y a su equipo de trabajo pueden resultarles desconocidos o confusos a sus usuarios.
                    p.mb-0 Cuando los controles u objetos de interacción de un diseño siguen las convenciones del mundo real y corresponden a los resultados deseados (llamado mapeo natural), es más fácil para los usuarios aprender y recordar cómo funciona la interfaz. Esto ayuda a crear una experiencia intuitiva.
          p.mb-4(data-aos="fade-right") Consejos para la coincidencia entre el sistema y el mundo real:
          .row.mb-4
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              .row.justify-content-end 
                .col-11.bg-c18
                  .py-2
                    .row.align-items-center 
                      .col-auto.pe-0.fig-p2
                        figure
                          img(src='@/assets/curso/tema1/img15.svg', style="width:50px" alt='').m-auto
                      .col.fig-p2
                        p.mb-0 Asegúrate de que los usuarios puedan entender el significado sin tener que buscar la definición de una palabra.
              .row.justify-content-end
                .col-11.bg-c19
                  .py-2
                    .row.align-items-center 
                      .col-auto.pe-0.fig-p2
                        figure
                          img(src='@/assets/curso/tema1/img16.svg', style="width:50px" alt='').m-auto
                      .col.fig-p2
                        p.mb-0 Nunca asumas que su comprensión o entendimiento de palabras o conceptos coincidirá con la de sus usuarios.
              .row.justify-content-end
                .col-11.bg-c20
                  .py-2
                    .row.align-items-center 
                      .col-auto.pe-0.fig-p2
                        figure
                          img(src='@/assets/curso/tema1/img17.svg', style="width:50px" alt='').m-auto
                      .col.fig-p2
                        p.mb-0 La investigación de usuarios te ayudará a descubrir la terminología familiar de sus usuarios, así como su manera de ver las cosas en torno a conceptos importantes.
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img4.png', style="width:310px" alt='').m-auto
          p.mb-4(data-aos="fade-right") A continuación, se comparten algunas prácticas:
          .row.justify-content-center.mb-5
            .col-10.col-md-8.col-lg.bg-c10.m-2(data-aos="fade-right")
              .p-4
                .row.align-items-center.mb-4
                  .col-auto.pe-0
                    figure
                      img(src='@/assets/curso/tema1/img12.svg', style="width:30px" alt='')
                  .col
                    p.mb-0 #[b Ejemplo: buena práctica]
                p Cuando los controles de la estufa coinciden con la disposición de los elementos calefactores, los usuarios pueden comprender rápidamente qué los controles están asociados con la distribución de cada calefactor.
                .row.justify-content-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img5.png', style="width:450px" alt='')
                    figcaption Nota. Tomada de Nielsen Norman Group (2020).
            .col-10.col-md-8.col-lg.bg-c10.m-2(data-aos="fade-left")
              .p-4
                .row.align-items-center.mb-4
                  .col-auto.pe-0
                    figure
                      img(src='@/assets/curso/tema1/img13.svg', style="width:30px" alt='')
                  .col
                    p.mb-0 #[b Ejemplo: mala práctica]
                p En una de las páginas más visitadas de comprar en línea, se refleja un error que puede causar confusión, y es en este caso, el botón #[b “Cómpralo ya!”] porque resalta más al ser más grande que el botón de “Añadir a la cesta”, por lo que fácilmente puede conducir a error por parte del usuario.
                .row.justify-content-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img6.png', style="width:420px" alt='')
                    figcaption Nota. Tomada del blog prototypr.io.
    .row.bg-c14
      .col-12
        .px-5.pt-5
          p.mb-4(data-aos="fade-right") #[b.txt-c1 Paso 3. Control y libertad del usuario.] Los usuarios suelen realizar acciones por error. Necesitan una "salida de emergencia" claramente marcada para abandonar la acción no deseada sin tener que pasar por un proceso prolongado (Nielsen, 2020).
          .row.justify-content-center.mb-5
            .col-10.bg-c13(data-aos="fade-down")
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img7.svg', style="width:100px" alt='').m-auto
                  .col
                    p #[b Recomendación]
                    p Cuando es fácil para las personas retroceder en un proceso o deshacer una acción, se fomenta una sensación de libertad y confianza, es más de credibilidad del sistema software. Las salidas permiten a los usuarios mantener el control del sistema y, de esta forma, evitar quedarse atascados o, lo que es peor, sentir frustración.
          .row.align-items-center.mb-5
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              .row
                .col-12.bg-c11
                  .p-4
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | Comunicar claramente a los usuarios cuál es el estado del sistema, no se debe tomar ninguna acción con consecuencias para los usuarios sin informarles.
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | Presentar comentarios al usuario lo más rápido posible (idealmente, de inmediato).
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | Generar confianza a través de una comunicación abierta y continua.
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img49.png', style="width:350px" alt='').m-auto
    .row.bg-c7
      .col-12
        .px-5.pt-5
          p.mb-4(data-aos="fade-right") #[b.txt-c1 Paso 4. Coherencia y estándares.] Los usuarios no deberían tener que preguntarse si diferentes palabras, situaciones o acciones significan lo mismo. Siga las convenciones de la plataforma y la industria (Nielsen, 2020).
          .row.justify-content-center.mb-4
            .col-10.bg-c8(data-aos="fade-down")
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img7.svg', style="width:100px" alt='').m-auto
                  .col
                    p #[b Recomendación]
                    p Esta regla establece que las personas pasan la mayor parte de su tiempo utilizando productos digitales distintos a los suyos. Las experiencias de los usuarios con esos otros productos establecen sus expectativas. Perder o no mantener la coherencia puede aumentar la carga cognitiva de los usuarios al obligarlos a aprender algo nuevo.
          p.mb-4(data-aos="fade-right") A continuación, se presentan algunos consejos:
          .row.align-items-center.mb-4
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              .row
                .col-12.bg-c11
                  .p-4
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | Mejorar la capacidad de aprendizaje manteniendo ambos tipos de coherencia: interna y externa.
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | Mantener la consistencia dentro de un solo producto o una familia de productos (consistencia interna).
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | Seguir las convenciones establecidas de la industria (consistencia externa).
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img50.png', style="width:350px" alt='').m-auto
          p.mb-4(data-aos="fade-right") Algunas prácticas son:
          .row.justify-content-center.mb-5
            .col-10.col-md-8.col-lg.bg-c10.m-2(data-aos="fade-right")
              .p-4
                .row.align-items-center.mb-4
                  .col-auto.pe-0
                    figure
                      img(src='@/assets/curso/tema1/img12.svg', style="width:30px" alt='')
                  .col
                    p.mb-0 #[b Ejemplo: buena práctica]
                p Los mostradores de facturación suelen estar ubicados en la parte delantera de los hoteles. Esta consistencia cumple con las expectativas de los clientes.
                .row.justify-content-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img7.png', style="width:350px" alt='')
                    figcaption Nota. Tomada de Nielsen Norman Group (2020).
            .col-10.col-md-8.col-lg.bg-c10.m-2(data-aos="fade-left")
              .p-4
                .row.align-items-center.mb-4
                  .col-auto.pe-0
                    figure
                      img(src='@/assets/curso/tema1/img13.svg', style="width:30px" alt='')
                  .col
                    p.mb-0 #[b Ejemplo: mala práctica]
                p Sucedió en una página de comercio, en la cual sitúan el formulario de búsqueda en un área nada común para esta finalidad que es en la parte izquierda, justo antes del logotipo de la marca. En ese sentido, la recomendación es ubicar los elementos dónde los usuarios esperan encontrarlos.
                .row.justify-content-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img8.png', style="width:420px" alt='')
                    figcaption Nota. Tomada de Modroño (2021).
    .row.bg-c7
      .col-12
        .px-5.pt-5
          p.mb-4(data-aos="fade-right") #[b.txt-c1 Paso 5. Prevención de errores.] Los buenos mensajes de error son importantes, pero los mejores diseños evitan cuidadosamente que ocurran problemas en primer lugar. Elimine las condiciones propensas a errores o verifíquelas y presente a los usuarios una opción de confirmación antes de que se comprometa con la acción (Nielsen, 2020).
          .row.justify-content-center.mb-4
            .col-10.bg-c8(data-aos="fade-down")
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img7.svg', style="width:100px" alt='').m-auto
                  .col
                    p #[b Recomendación]
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | Hay dos tipos de errores: involuntario y errores conscientes.
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | Los involuntarios son errores inconscientes causados por la falta de atención.
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | Los errores conscientes están basados en un desajuste entre el modelo mental del usuario (punto de vista de ver las cosas) y el diseño.
          p.mb-4(data-aos="fade-right") Algunos consejos son:
          .row.align-items-center.mb-4
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              .row
                .col-12.bg-c11
                  .p-4
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | Priorizar tu esfuerzo: primero evitar errores de alto costo y luego pequeñas frustraciones.
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | Evitar deslizamientos proporcionando restricciones útiles y buenos incumplimientos.
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | Evitar errores eliminando cargas de memoria, ayudando a deshacer y advirtiendo a sus usuarios.
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img9.png', style="width:350px" alt='').m-auto
          p.mb-4(data-aos="fade-right") A continuación, se comparten algunas prácticas:
          .row.justify-content-center.mb-5
            .col-10.col-md-8.col-lg.bg-c10.m-2(data-aos="fade-right")
              .p-4
                .row.align-items-center.mb-4
                  .col-auto.pe-0
                    figure
                      img(src='@/assets/curso/tema1/img12.svg', style="width:30px" alt='')
                  .col
                    p.mb-0 #[b Ejemplo: buena práctica]
                p Barandilla en carreteras, para este ejemplo se muestra una vía con curvas con el objeto de evitar que los conductores se caigan de acantilados.
                .row.justify-content-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img10.png', style="width:350px" alt='')
                    figcaption Nota. Tomada de Nielsen Norman Group (2020).
            .col-10.col-md-8.col-lg.bg-c10.m-2(data-aos="fade-left")
              .p-4
                .row.align-items-center.mb-4
                  .col-auto.pe-0
                    figure
                      img(src='@/assets/curso/tema1/img13.svg', style="width:30px" alt='')
                  .col
                    p.mb-0 #[b Ejemplo: mala práctica]
                p Sucede en un formulario web, en el que no se informa de las características que debe tener cada campo (aquí es donde cobran mucho valor el uso de los placeholder). Cosa que hace solo cuando el usuario no valida el formulario, y es ahí donde se desconocía, por ejemplo, que el campo ‘Contraseña’ debe tener un mínimo 8 caracteres.
                .row.justify-content-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img11.png', style="width:420px" alt='')
                    figcaption Nota. Tomada del blog interactius, (Modroño, 2019).
    .row.bg-c7
      .col-12
        .px-5.pt-5
          p.mb-4(data-aos="fade-right") #[b.txt-c1 Paso 6. Reconocimiento en lugar de recordar.] Minimice la carga de memoria del usuario haciendo visibles los elementos, acciones y opciones. El usuario no debería tener que recordar información de una parte de la interfaz a otra. La información requerida para utilizar el diseño (por ejemplo, etiquetas de campo o elementos de menú) debe ser visible o fácilmente recuperable cuando sea necesario (Nielsen, 2020).
          .row.justify-content-center.mb-4
            .col-10.bg-c8(data-aos="fade-up")
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img7.svg', style="width:100px" alt='').m-auto
                  .col
                    p #[b Recomendación]
                    p.mb-0 En la literatura se menciona que los seres humanos tienen una memoria limitada a corto plazo. De esta forma, para reducir la cantidad de esfuerzo cognitivo requerido por parte de los usuarios se desarrollan interfaces que promueven el reconocimiento.
          p.mb-4(data-aos="fade-right") Algunos consejos son:
          .row.mb-4
            .col-lg.m-2(data-aos="fade-right")
              .row.h-100
                .col-auto.bg-c15.d-flex.align-items-center
                  .p-2
                    figure
                      img(src='@/assets/curso/tema1/img23.svg', style="width:70px" alt='').m-auto
                .col.bg-c16.d-flex.align-items-center
                  .p-4
                    p.mb-0 Permitir que la gente reconozca la información en la interfaz, en lugar de tener que recordarla.
            .col-lg.m-2(data-aos="fade-down")
              .row.h-100
                .col-auto.bg-c15.d-flex.align-items-center
                  .p-2
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:70px" alt='').m-auto
                .col.bg-c16.d-flex.align-items-center
                  .p-4
                    p.mb-0 Ofrecer ayuda en contexto, en lugar de dar a los usuarioss un tutorial largo para memorizar.
            .col-lg.m-2(data-aos="fade-left")
              .row.h-100
                .col-auto.bg-c15.d-flex.align-items-center
                  .p-2
                    figure
                      img(src='@/assets/curso/tema1/img25.svg', style="width:70px" alt='').m-auto
                .col.bg-c16.d-flex.align-items-center
                  .p-4
                    p.mb-0 Reducir la información que los usuarios deben recordar.
          p.mb-4(data-aos="fade-right") Algunos consejos son:
          .row.justify-content-center.mb-5
            .col-10.col-md-8.col-lg.bg-c10.m-2(data-aos="fade-right")
              .p-4
                .row.align-items-center.mb-4
                  .col-auto.pe-0
                    figure
                      img(src='@/assets/curso/tema1/img12.svg', style="width:30px" alt='')
                  .col
                    p.mb-0 #[b Ejemplo: buena práctica]
                p Para la mayoría de las personas es más fácil reconocer las capitales de los países, en lugar de tener que recordarlas. Es más probable que la gente responda correctamente a la pregunta: ¿Lisboa es la capital de Portugal?, en lugar de ¿Cuál es la capital de Portugal?
                .row.justify-content-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img12.png', style="width:350px" alt='')
                    figcaption Nota. Tomada de Nielsen Norman Group (2020).
            .col-10.col-md-8.col-lg.bg-c10.m-2(data-aos="fade-left")
              .p-4
                .row.align-items-center.mb-4
                  .col-auto.pe-0
                    figure
                      img(src='@/assets/curso/tema1/img13.svg', style="width:30px" alt='')
                  .col
                    p.mb-0 #[b Ejemplo: mala práctica]
                p Se presenta en un sitio Web de comercio en el cual no se especifican claramente los conceptos ni los filtros a modo de resumen para la búsqueda o indexación de algún producto. Obligando al usuario a revisar distintas áreas de la pantalla con el fin de recordar qué había buscado previamente.
                .row.justify-content-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img13.png', style="width:420px" alt='')
                    figcaption Nota. Tomada del blog interactius, (Modroño, 2019).
    .row.bg-c7
      .col-12
        .px-5.pt-5
          p.mb-4(data-aos="fade-right") #[b.txt-c1 Paso 7. Flexibilidad y eficiencia de uso.] Los accesos directos, ocultos para los usuarios novatos, pueden acelerar la interacción para el usuario experto, de modo que el diseño pueda satisfacer tanto a los usuarios sin experiencia como a los experimentados. Permitir a los usuarios personalizar las acciones frecuentes (Nielsen, 2020)
          .row.justify-content-center.mb-4
            .col-10.bg-c8(data-aos="fade-down")
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img7.svg', style="width:100px" alt='').m-auto
                  .col
                    p #[b Recomendación]
                    p.mb-0 Los procesos deben ser  flexibles para que se puedan llevar a cabo de diferentes formas, de modo que las personas puedan elegir el método que les funcione.
          p.mb-4(data-aos="fade-right") Algunos consejos son:
          .row.align-items-center.mb-4
            .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
              .row
                .col-12.bg-c11
                  .p-4
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | Proporcionar aceleradores como atajos de teclado y gestos táctiles.
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | Proporcionar personalización adaptando el contenido y la funcionalidad para usuarios individuales.
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | Permitir la personalización, para que los usuarios puedan hacer selecciones sobre cómo quieren que funcione el producto.
            .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img14.png', style="width:260px" alt='').m-auto
          p.mb-4(data-aos="fade-right") A continuación, se comparten algunas prácticas:
          .row.justify-content-center.mb-5
            .col-10.col-md-8.col-lg.bg-c10.m-2(data-aos="fade-right")
              .p-4
                .row.align-items-center.mb-4
                  .col-auto.pe-0
                    figure
                      img(src='@/assets/curso/tema1/img12.svg', style="width:30px" alt='')
                  .col
                    p.mb-0 #[b Ejemplo: buena práctica]
                p Las rutas regulares se enumeran en los mapas, pero los lugareños con más conocimiento del área pueden tomar atajos.
                .row.justify-content-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img15.png', style="width:350px" alt='')
                    figcaption Nota. Tomada de Nielsen Norman Group (2020).
            .col-10.col-md-8.col-lg.bg-c10.m-2(data-aos="fade-left")
              .p-4
                .row.align-items-center.mb-4
                  .col-auto.pe-0
                    figure
                      img(src='@/assets/curso/tema1/img13.svg', style="width:30px" alt='')
                  .col
                    p.mb-0 #[b Ejemplo: mala práctica]
                p Se encuentra una oportunidad de mejora en uno de los sitios web más visitados para el conocimiento y uso de la lengua española, en el cual no se muestran sugerencias cuando se introduce una palabra, de esta forma obliga a introducir la palabra entera cada vez que se hace una búsqueda.
                .row.justify-content-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img16.png', style="width:420px" alt='')
                    figcaption Nota. Tomada del blog interactius, (Modroño, 2019).
    .row.bg-c7
      .col-12
        .px-5.pt-5
          p.mb-4(data-aos="fade-right") #[b.txt-c1 Paso 8. Diseño estético y minimalista.] Los accesos directos, ocultos para los usuarios novatos, pueden acelerar la interacción para el usuario experto, de modo que el diseño pueda satisfacer tanto a los usuarios sin experiencia como a los experimentados. Permitir a los usuarios personalizar las acciones frecuentes (Nielsen, 2020).
          .row.justify-content-center.mb-4
            .col-10.bg-c8(data-aos="fade-down")
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img7.svg', style="width:100px" alt='').m-auto
                  .col
                    p #[b Recomendación]
                    p.mb-0 Esta regla no significa tener que usar un diseño plano, se trata de asegurarse de mantener el contenido y el diseño visual enfocados en lo esencial. Asegurarse de tener la atención total del usuario y no despistarlo de su objetivo, es decir, permitir que los elementos visuales de la interfaz sean compatibles con los objetivos primordiales del usuario.
          p.mb-4(data-aos="fade-right") Algunos consejos son:
          .row.align-items-center.mb-4
            .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
              .row
                .col-12.bg-c11
                  .p-4
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | Mantener el contenido y el diseño visual de la interfaz de usuario enfocados en lo esencial.
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | No permitir que los elementos innecesarios distraigan a los usuarios de la información que realmente necesitan.
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        | Priorizar el contenido y las funciones para respaldar los objetivos principales.
            .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img17.png', style="width:230px" alt='').m-auto
          .row.justify-content-center.mb-5
            .col-10.col-md-8.col-lg.bg-c10.m-2(data-aos="fade-right")
              .p-4
                .row.align-items-center.mb-4
                  .col-auto.pe-0
                    figure
                      img(src='@/assets/curso/tema1/img12.svg', style="width:30px" alt='')
                  .col
                    p.mb-0 #[b Ejemplo: buena práctica]
                p Una tetera con muchos adornos puede tener elementos decorativos excesivos que de cierta forma interfieren con la facilidad de uso, como un mango incómodo o difícil de lavar la boquilla.
                .row.justify-content-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img18.png', style="width:300px" alt='')
                    figcaption Nota. Tomada de Nielsen Norman Group (2020).
            .col-10.col-md-8.col-lg.bg-c10.m-2(data-aos="fade-left")
              .p-4
                .row.align-items-center.mb-4
                  .col-auto.pe-0
                    figure
                      img(src='@/assets/curso/tema1/img13.svg', style="width:30px" alt='')
                  .col
                    p.mb-0 #[b Ejemplo: mala práctica]
                p En este caso, el sitio web tiene secciones muy grandes para anuncios que opacan el sentido de la página y que sin lugar a dudas compiten visualmente con el contenido relevante de la página.
                .row.justify-content-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img19.png', style="width:420px" alt='')
                    figcaption Nota. Tomada de Medium (2020).
    .row.bg-c7
      .col-12
        .px-5.pt-5
          p.mb-4(data-aos="fade-right") #[b.txt-c1 Paso 9. Ayudar a los usuarios a reconocer, diagnosticar y recuperarse de errores.] Los mensajes de error deben expresarse en un lenguaje sencillo (sin códigos de error), indicar con precisión el problema y sugerir una solución de manera constructiva (Nielsen, 2020).
          .row.justify-content-center.mb-4
            .col-10.bg-c8(data-aos="fade-down")
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img7.svg', style="width:100px" alt='').m-auto
                  .col
                    p #[b Recomendación]
                    p.mb-0 Los mensajes, notificaciones o alertas de error también deben presentarse con tratamientos visuales que acompañe y de soporte a los usuarios a notarlos y reconocerlos.
          p.mb-4(data-aos="fade-right") Algunos consejos son:
          .row.justify-content-center.mb-4
            .col-md-8.col-lg.bg-c17.m-2(data-aos="fade-right")
              .p-4
                p.mb-0 Utilizar elementos visuales de mensajes de error tradicionales, como texto rojo en negrita.
            .col-md-8.col-lg.bg-c17.m-2(data-aos="fade-up")
              .p-4
                p.mb-0 Ofrecer a los usuarios una solución, como un atajo que pueda resolver el error de imediato.
            .col-md-8.col-lg.bg-c17.m-2(data-aos="fade-left")
              .p-4
                p.mb-0 Indicar a los usuarios lo que salió mal en un lenguaje que entenderán; evitar la jerga técnica.
          p.mb-4(data-aos="fade-right") A continuación, se comparten algunas prácticas:
          .row.justify-content-center.mb-5
            .col-10.col-md-8.col-lg.bg-c10.m-2(data-aos="fade-right")
              .p-4
                .row.align-items-center.mb-4
                  .col-auto.pe-0
                    figure
                      img(src='@/assets/curso/tema1/img12.svg', style="width:30px" alt='')
                  .col
                    p.mb-0 #[b Ejemplo: buena práctica]
                p Las señales de sentido incorrecto en la carretera le hacen recordar a los conductores que se dirigen en la dirección incorrecta y les solicita que se detengan.
                .row.justify-content-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img20.png', style="width:300px" alt='')
                    figcaption Nota. Tomada de Nielsen Norman Group (2020).
            .col-10.col-md-8.col-lg.bg-c10.m-2(data-aos="fade-left")
              .p-4
                .row.align-items-center.mb-4
                  .col-auto.pe-0
                    figure
                      img(src='@/assets/curso/tema1/img13.svg', style="width:30px" alt='')
                  .col
                    p.mb-0 #[b Ejemplo: mala práctica]
                p Como ejemplo se presenta un sitio web dónde en el proceso de compra de un tiquete de transporte de trenes en Europa, aparecen múltiples mensajes de error con una nomenclatura que el usuario difícilmente entenderá.
                .row.justify-content-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img21.png', style="width:500px" alt='')
                    figcaption Nota. Tomada de Medium (2020).
    .row.bg-c7
      .col-12
        .px-5.pt-5
          p.mb-4(data-aos="fade-right") #[b.txt-c1 Paso 10. Ayuda y documentación.] Es mejor si el sistema no necesita ninguna explicación adicional. Sin embargo, puede ser necesario proporcionar documentación para ayudar a los usuarios a comprender cómo completar sus tareas (Nielsen, 2020).
          .row.justify-content-center.mb-4
            .col-10.bg-c8(data-aos="fade-down")
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img7.svg', style="width:100px" alt='').m-auto
                  .col
                    p #[b Recomendación]
                    p.mb-0 Los mensajes, notificaciones o alertas de error también deben presentarse con tratamientos visuales que acompañe y de soporte a los usuarios a notarlos y reconocerlos.
          p.mb-4(data-aos="fade-right") A continuación, se comparten algunas consejos:
          .row.mb-4
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              .row.justify-content-end 
                .col-11.bg-c18(data-aos="fade-right")
                  .py-2
                    .row.align-items-center 
                      .col-auto.pe-0.fig-p2
                        figure
                          img(src='@/assets/curso/tema1/img27.svg', style="width:50px" alt='').m-auto
                      .col.fig-p2
                        p.mb-0 Asegúrate de que la documentación de ayuda sea fácil de buscar.
              .row.justify-content-end
                .col-11.bg-c19(data-aos="fade-up")
                  .py-2
                    .row.align-items-center 
                      .col-auto.pe-0.fig-p2
                        figure
                          img(src='@/assets/curso/tema1/img28.svg', style="width:50px" alt='').m-auto
                      .col.fig-p2
                        p.mb-0 Siempre que sea posible, presenta la documentación en contexto justo en el momento que el usuario lo requiera.
              .row.justify-content-end
                .col-11.bg-c20(data-aos="fade-left")
                  .py-2
                    .row.align-items-center 
                      .col-auto.pe-0.fig-p2
                        figure
                          img(src='@/assets/curso/tema1/img29.svg', style="width:50px" alt='').m-auto
                      .col.fig-p2
                        p.mb-0 Enumera los pasos concretos a realizar.
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img22.png', style="width:300px" alt='').m-auto
          .row.mb-5
            .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
              .bg-c10
                .p-4
                  .row.align-items-center.mb-4
                    .col-auto.pe-0
                      figure
                        img(src='@/assets/curso/tema1/img12.svg', style="width:30px" alt='')
                    .col
                      p.mb-0 #[b Ejemplo: buena práctica]
                  p Los quioscos  o puntos de referencia  de información en los aeropuertos son fácilmente reconocibles y por lo regular resuelven los problemas de los clientes en contexto y de manera inmediata.
                  .row.justify-content-center
                    .col-auto
                      figure
                        img(src='@/assets/curso/tema1/img23.png', style="width:400px" alt='')
                      figcaption Nota. Tomada de Nielsen Norman Group (2020).
            .col-lg-6(data-aos="fade-left")
              p En este punto no traemos una mala práctica, pero sí indicamos, que cualquier sitio web o aplicación software que no presente ninguna sección de ayuda, documentación de la compañía o incluso de contacto, posiblemente va a generar un desamparo e incertidumbre al usuario.
              p Finalmente, puedes buscar consultar en el material complementario la plantilla “Evaluación Heurística” para que puedas realizar sin ningún problema una evaluación de este tipo a un sistema software.
              figure.d-flex.justify-content-end 
                img(src='@/assets/curso/tema1/img24.png', style="width:400px" alt='')
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Recorrido cognitivo
    p(data-aos="fade-right") También conocido como #[b #[i Cognitive Walkthrough]], es un método de inspección de usabilidad enfocado en evaluar la facilidad de aprendizaje de la interfaz gráfica de una aplicación, principalmente a través de la exploración. Este método se basa en la observación de varios usuarios que buscan aprender a utilizar el software explorando sus posibilidades.
    p.mb-5(data-aos="fade-right") Los pasos para la aplicación de este método son:
    .row.bg-c21.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--gris1(data-aos="fade-up")
            .p-4
              PasosB.color-acento-botones
                .row.align-items-center.m-1(titulo="Paso 1")
                  .col-lg-8.mb-4.mb-lg-0
                    p #[b Definición de los datos necesarios para el recorrido]
                    p A continuación, se presenta cómo identificar y caracterizar a los usuarios, diseñar prototipos y definir tareas para mejorar la interacción usuario-sistema.
                    .row 
                      .col-12
                        .p-4.bg-c22
                          ul.lista-ul
                            li.d-flex
                              i.fas.fa-circle(style="color:#1682FB !important")
                              | Identificación y caracterización de usuarios, enfatizando la importancia de documentar y entender al público objetivo.
                            li.d-flex
                              i.fas.fa-circle(style="color:#1682FB !important")
                              | Descripción de prototipos, que pueden variar desde esquemas en papel hasta desarrollos más elaborados, sin necesidad de completitud o detalle extremo.
                            li.d-flex
                              i.fas.fa-circle(style="color:#1682FB !important")
                              | Enumeración de tareas específicas a realizar de forma secuencial u ordenada por el usuario.
                            li.d-flex
                              i.fas.fa-circle(style="color:#1682FB !important")
                              | Implementación escrita de cada tarea, detallando las acciones del usuario y sus interacciones con el sistema para completar las tareas utilizando el prototipo.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema1/img25.png', style="width:350px" alt='').m-auto
                .row.align-items-center.m-1(titulo="Paso 2")
                  .col-lg-8.mb-4.mb-lg-0
                    p #[b Recorrer las acciones]
                    p El evaluador analiza la idoneidad de la interfaz para el usuario, basándose en su experiencia y conocimiento, siguiendo criterios de usabilidad establecidos por Toni Granollers (2019) mediante preguntas críticas sobre la experiencia de usuario.
                    .row 
                      .col-12
                        .p-4.bg-c22
                          ul.lista-ul
                            li.d-flex
                              i.fas.fa-circle(style="color:#1682FB !important")
                              | ¿Son adecuadas las acciones disponibles de acuerdo con la experiencia y al conocimiento del usuario?
                            li.d-flex
                              i.fas.fa-circle(style="color:#1682FB !important")
                              | ¿Percibirán los usuarios que está disponible la acción correcta? Esto se relaciona con la visibilidad y la comprensibilidad de las acciones en la interfaz. La discusión no es como es el funcionamiento del sitio, sino que si la acción existe o no.
                            li.d-flex
                              i.fas.fa-circle(style="color:#1682FB !important")
                              | Una vez encontrada la acción en la interfaz, ¿asociarán estos usuarios la acción correcta al efecto que se alcanzará?
                            li.d-flex
                              i.fas.fa-circle(style="color:#1682FB !important")
                              | Una vez realizada la acción, ¿entenderán los usuarios la realimentación del sistema?, tanto si la acción se ha realizado con éxito como en el caso contrario.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema1/img26.png', style="width:350px" alt='').m-auto
                .row.align-items-center.m-1(titulo="Paso 2")
                  .col-lg-8.mb-4.mb-lg-0
                    p #[b Documentar los resultados]
                    p Cada evaluador anotará para cada acción las respuestas del sistema y sus observaciones.
                    .row 
                      .col-12
                        .p-4.bg-c22
                          ul.lista-ul
                            li.d-flex
                              i.fas.fa-circle(style="color:#1682FB !important")
                              | El documento debe incluir un anexo que es conocido como Usability Problem Report Sheet, en el material complementario lo podrás encontrar como plantilla reporte de usabilidad. En esta plantilla se detallan los aspectos negativos de la evaluación relacionándolos con un grado de severidad logrando distinguir aquellos errores más dañinos de los que no lo son tanto.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema1/img27.png', style="width:350px" alt='').m-auto
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Inspección de estándares
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Primero, se comienza por entender qué es un #[b estándar], el cual se define #[b como un requisito, regla o recomendación basada en principios comprobados y, especialmente, en la práctica]. De esta manera, representa un consenso entre un grupo de profesionales oficialmente autorizados a nivel nacional e internacional. 
        p Es importante considerar la definición de Norman, quien afirma que #[b “los estándares son eternos, ya que una vez establecidos, simplifican y dominan las vidas de millones, incluso miles de millones de personas”].
        .row
          .col-12.bg-c4
            .p-4
              p.mb-0 Esta técnica asegura, hasta cierto punto, la conformidad con los estándares industriales. En dichas inspecciones, un profesional de la usabilidad, con amplio conocimiento del estándar, analiza los elementos del producto o aplicación en cuestión para asegurar su uso y adaptación al estándar industrial.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img30.svg', style="width:400px" alt='').m-auto
    .row.justify-content-center.mb-5
      .col-lg-10.bg-c23(data-aos="fade-down")
        .p-4
          .row
            .col-12
              .p-4.bg-c24
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img31.svg', style="width:70px" alt='').m-auto
                  .col 
                    p.mb-0 Los productos de software diseñados para un contexto social determinado deberían disponer de elementos comunes, como las mismas opciones en el menú de la aplicación, un menú de “Ayuda”, etc. (Hom, 1996).
    p(data-aos="fade-right") Por ejemplo, los productos de software diseñados para un contexto social determinado deberían disponer de elementos comunes, como las mismas opciones en el menú de la aplicación, un menú de “Ayuda”, etc. (Hom, 1996).
    p.mb-5(data-aos="fade-right") En la mayoría de los casos la inspección debe llevarse a cabo por un experto en el estándar. En un determinado entorno, se podría exigir que la inspección la llevará a cabo alguien representativo de la compañía productora. A continuación, se presenta cuándo aplicar la técnica de inspección de estándares para optimizar la usabilidad y eficiencia en el desarrollo de productos:
    .row
      .col-12.bg-c25(data-aos="fade-down")
        .p-4
          .row.justify-content-center
            .col-lg-4.bg-c22
              .p-4
                p.text-center.mb-0 #[b ¿Cuándo usar la técnica de inspección de estándares?]
          .row.justify-content-center
            .col-md-8.col-xl.m-2
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema1/img32.svg', style="width:250px" alt='').m-auto
                .row
                  .col-12.bg-c26
                    .p-4
                      p.mb-0 #[b Ideal para etapas intermedias:] se recomienda su uso en momentos centrales del desarrollo, cuando el diseño está en proceso y se ajusta a los estándares relevantes.
            .col-md-8.col-xl.m-2
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema1/img33.svg', style="width:250px" alt='').m-auto
                .row 
                  .col-12.bg-c26
                    .p-4
                      p.mb-0 #[b A partir de prototipos:] inicia con prototipos de baja fidelidad. Sin embargo, es más efectivo cuando se aplica a prototipos software avanzados o, incluso mejor, a una versión inicial del sistema final.
            .col-md-8.col-xl.m-2
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema1/img34.svg', style="width:250px" alt='').m-auto
                .row 
                  .col-12.bg-c26
                    .p-4
                      p.mb-0 #[b Mejora continua:] facilita la identificación temprana de áreas de mejora, asegurando que el diseño final cumpla con los más altos estándares de usabilidad y experiencia de usuario.
            .col-md-8.col-xl.m-2
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema1/img35.svg', style="width:250px" alt='').m-auto
                .row 
                  .col-12.bg-c26
                    .p-4
                      p.mb-0 #[b Eficiencia en el desarrollo:] al aplicar esta técnica desde fases tempranas, se reduce el tiempo y esfuerzo necesarios para realizar ajustes significativos en etapas posteriores, optimizando así el proceso de desarrollo.
    Separador 
    #t_1_2 
    .titulo-segundo.color-acento-contenido
      h2 1.2 Métodos de indagación
    p.mb-5(data-aos="fade-right") El proceso de indagación facilita el conocimiento de un tema mediante el uso de conjeturas y señales. Este tipo de métodos de evaluación se basa en una premisa fundamental: interactuar con los usuarios y observarlos cuidadosamente mientras utilizan el sistema en su entorno real. De esta manera, se consiguen respuestas a las preguntas formuladas, ya sea verbalmente o por escrito.
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Cuestionarios
    .row.mb-4
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p El término cuestionario se presenta como una lista de cuestiones o preguntas planteadas sobre un tema en específico con la finalidad de que alguien las responda.
        p En el contexto de la evaluación de usabilidad de sistemas interactivos software se hace referencia a cuestionarios como listas de preguntas que el evaluador distribuye entre usuarios y/o implicados para que estos devuelvan las respuestas y, de este modo, obtener conclusiones.
        .row
          .col-12.bg-c4
            .p-4
              p.mb-0 El cuestionario normalmente se distribuye en formato escrito y las preguntas plantean aspectos asociados con el sistema o aplicación concreta. #[b En ese sentido, el objetivo del cuestionario es la recolección de información a partir de respuestas contestadas por los usuarios y/o los implicados].
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img29.png', style="width:400px" alt='').m-auto
    p.mb-5(data-aos="fade-right") Los tipos de preguntas a incluir en un cuestionario, según Granollers son:
    .row.bg-c21.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--azul1(data-aos="fade-down")
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-5.order-2.order-lg-1
                    p.txt-c2 #[b Pregunta de carácter general]
                    p.text-white Preguntas que aportan la caracterización del usuario como el perfil de usuario y su rol dentro de la población en estudio. 
                    p.text-white.mb-0 Por ejemplo puede incluir aspectos como edad, sexo, ocupación, lugar de residencia, aficiones, estudios, aficiones, etc.
                  .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img31.png',style="width:450px", alt='').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.order-2.order-lg-1
                    p.txt-c2 #[b Pregunta abierta]
                    p.text-white.mb-0 Tipo de pregunta para recoger información general subjetiva. Por lo general, da sugerencias interesantes y viabiliza encontrar errores no previstos.
                  .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img32.png',style="width:450px", alt='').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.order-2.order-lg-1
                    p.txt-c2 #[b Pregunta de tipo escalar]
                    p.text-white.mb-0 Posibilita preguntas al usuario sobre un aspecto específico en una escala numérica.
                  .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img33.png',style="width:450px", alt='').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.order-2.order-lg-1
                    p.txt-c2 #[b Opción múltiple]
                    p.text-white.mb-0 En este caso se ofrece una serie de opciones y se solicita responder a una o varias. Especialmente útiles para recoger información de la experiencia previa del usuario.
                  .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img34.png',style="width:450px", alt='').m-auto
                .row.justify-content-center.align-items-center
                  .col-lg-5.order-2.order-lg-1
                    p.txt-c2 #[b Preguntas ordenadas]
                    p.text-white.mb-0 Se presentan como una serie de opciones que se debe ordenar.
                  .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img35.png',style="width:450px", alt='').m-auto
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Partes de un cuestionario
    p(data-aos="fade-right") La actividad de la realización de cuestionarios está relacionada a la consecución de ciertas tareas que el evaluador considera conveniente realizar (actividad combinada de varios métodos de evaluación) con el objeto de medir aspectos interactivos del sistema. 
    p.mb-5(data-aos="fade-right") En estos casos se sugiere dividir el cuestionario en tres partes:
    .row.justify-content-center.mb-5
      .col-md-10.col-lg.bg-c27.m-2(data-aos="fade-right")
        .p-4
          figure.mb-3
            img(src='@/assets/curso/tema1/img36.svg', style="width:80px" alt='')
          .row 
            .col-auto
              p.txt-c1 #[b Pretarea]
          p.mb-0 Las preguntas de esta parte por lo regular suelen ser generales acerca de las habilidades del usuario (se aprovecha para recoger información útil acerca del perfil del usuario).
      .col-md-10.col-lg.bg-c27.m-2(data-aos="fade-down")
        .p-4
          figure.mb-3
            img(src='@/assets/curso/tema1/img37.svg', style="width:80px" alt='')
          .row 
            .col-auto
              p.txt-c1 #[b Postarea]
          p.mb-0 Esta sección es iterativa y se harán tantas veces como tareas tenga que resolver el usuario.
      .col-md-10.col-lg.bg-c27.m-2(data-aos="fade-left")
        .p-4
          figure.mb-3
            img(src='@/assets/curso/tema1/img38.svg', style="width:80px" alt='')
          .row 
            .col-auto
              p.txt-c1 #[b #[i Postest]]
          p.mb-0 Se recogen aspectos generales acerca de la percepción global u holística del usuario tras la consecución de las diferentes tareas propuestas.
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Grabación del uso
    p(data-aos="fade-right") Esta técnica, también conocida como análisis de logs o simplemente #[i logging], se fundamenta en "grabar" o "recoger" todas las actividades realizadas por el usuario durante su interacción con el sistema de #[i software] para su análisis posterior. Por lo tanto, es necesaria una aplicación secundaria que realice automáticamente esta tarea de capturar absolutamente todo lo que el usuario hace. Cabe destacar que esta aplicación es transparente para el usuario.
    .row.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img36.png', style="width:350px" alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p En ese sentido, esta aplicación que corre en el #[i background] recogerá automáticamente estadísticas sobre el uso detallado del sistema #[i software] a evaluar. Por lo tanto, esta técnica es muy útil porque muestra cómo los usuarios realizan su trabajo real y, a su vez, por la facilidad de capturar automáticamente datos de una gran cantidad de usuarios.
        .row
          .col-12.bg-c4
            .p-4
              p.mb-0 El log o registro contendrá estadísticas sobre la frecuencia con la que cada usuario ha utilizado cada característica del programa y la frecuencia con la que han ocurrido diversos eventos de interés, como mensajes de error. Así, se generará información valiosa para comprender aspectos de la aplicación que podrían haber pasado desapercibidos para el equipo de desarrollo.
    .row.justify-content-center.mb-5
      .col-lg-10.bg-c22(data-aos="fade-up")
        .p-4
          p Según Granollers (2014), la estadística:
          .row
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img39.svg', style="width:180px" alt='').m-auto
            .col
              p.mb-0 La frecuencia de uso de comandos y otras características del sistema puede utilizarse para optimizar aquellas características que se usan frecuentemente y para identificar aquellas que no se utilizan o se utilizan raramente. Las estadísticas que muestran la frecuencia de diversas situaciones de error y el uso de la ayuda pueden emplearse para mejorar la usabilidad del sistema, ajustando las características que causan la mayoría de los errores y los accesos más frecuentes a la ayuda en línea.
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Procedimiento
    p.mb-5(data-aos="fade-right") El registro se realiza generalmente instalando el #[i software] que va a capturar todas las acciones del usuario. Es importante la configuración de este tipo de #[i software] para que se centre en la aplicación que se está probando.  Este último método suele ser el preferido, ya que hace más fácil registrar acontecimientos de interés.
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Características
    p.mb-5(data-aos="fade-right") Las principales características que definen este método son:
    .row
      .col-12.bg-c29(data-aos="fade-down")
        .p-4.p-lg-5
          .row.justify-content-center
            .col-md-8.col-lg.bg-c28.m-2
              .p-4
                p.text-center.mb-0 Es un método muy económico, dado que se puede realizar con un número alto de usuarios al mismo costo.
            .col-md-8.col-lg.bg-c28.m-2
              .p-4
                p.text-center.mb-0 No es necesaria la presencia física de los usuarios en un lugar predeterminado.
            .col-md-8.col-lg.bg-c28.m-2
              .p-4
                p.text-center.mb-0 Puede realizarse remotamente, lo que permite evaluar un gran número de datos.
            .col-md-8.col-lg.bg-c28.m-2
              .p-4
                p.text-center.mb-0 Los datos suelen tener un formato estándar, lo que facilia a la comparación de datos según diferentes criterios.
    Separador 
    #t_1_3
    .titulo-segundo.color-acento-contenido
      h2 1.3 Métodos de tipo #[i test]
    p.mb-5(data-aos="fade-right") Los métodos de usabilidad tipo test implican que los usuarios realicen tareas utilizando el sistema o el prototipo (ya sea un wireframe o mockup), mientras los evaluadores analizan los resultados para determinar cómo la interfaz de usuario de la aplicación apoya a los usuarios en la realización de sus tareas.
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Medida de las prestaciones
    .row.mb-5
      .col-12.bg-c2(data-aos="fade-left")
        .p-4
          .row.align-items-center
            .col-lg-auto.pe-0.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img37.png', style="width:350px", alt='').m-auto
            .col.bg-c3
              .p-4
                p.mb-0 Este método de evaluación está basado en medir de forma cualitativa y cuantitativa el rendimiento y las características subjetivas que afecte a la usabilidad del sistema, por lo que es imperativo que se tenga del sistema ya terminado o de un prototipo con un grado amplio de desarrollo que permita evaluar estos aspectos.
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Características
    p.mb-4(data-aos="fade-right") Las principales características que definen este método son:
    .row.justify-content-center.mb-4
      .col-lg-10
        .row.mb-3
          .col-12.bg-c30(data-aos="fade-right")
            .p-3
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema1/img41.svg', style="width:120px" alt='').m-auto
                .col
                  p.mb-0 El objetido de toda técnica es procurar la mejora de la usabilidad del producto; no debe confundirse con un test de funcionalidad, pues sus intenciones u finalidades son diferentes porque se centra en garantizar que el producto funcione de acuerdo con las especificaciones.
        .row.mb-3
          .col-12.bg-c31(data-aos="fade-down")
            .p-3
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema1/img42.svg', style="width:120px" alt='').m-auto
                .col
                  p.mb-0 Los participantes (presenciales) en el test deben analizar cómo utiliza el producto y el tiempo que demoran realizando tareas.
        .row.mb-3
          .col-12.bg-c30(data-aos="fade-left")
            .p-3
              .row.align-items-center
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema1/img43.svg', style="width:120px" alt='').m-auto
                .col
                  p.mb-0 Como recomendación es hacer esta técnica en un laboratorio de usabilidad. Para la realización del test hay que definir las tareas que los usuarios deben realizar.
    p.mb-4(data-aos="fade-right") Aspectos para tener en cuenta a la hora de escoger las tareas:
    .row.align-items-center.mb-4
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .row
          .col-12
            .bg-c10
              .p-4
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-circle(style="color:#1682FB !important")
                    | Tareas que demuestren problemas de usabilidad.
                  li.d-flex
                    i.fas.fa-circle(style="color:#1682FB !important")
                    | Tareas recomendadas por la experiencia.
                  li.d-flex
                    i.fas.fa-circle(style="color:#1682FB !important")
                    | Tareas derivadas de otros criterios como pueden ser las tareas que son difíciles de recuperar después de un error.
                  li.d-flex
                    i.fas.fa-circle(style="color:#1682FB !important")
                    | Tareas que los usuarios realizarán con el producto.
                  li.d-flex
                    i.fas.fa-circle(style="color:#1682FB !important")
                    | Funcionamiento del método.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img38.png', style="width:450px" alt='').m-auto
    p.mb-4(data-aos="fade-right") Es necesario comprender qué se puede medir. Se requiere recoger:
    .row.justify-content-center.mb-5
      .col-md-8.col-lg-5.bg-c9.m-2(data-aos="fade-right")
        .p-4
          figure.mb-3
            img(src='@/assets/curso/tema1/img44.svg', style="width:100px" alt='')
          .row 
            .col-auto
              p.txt-c3 Medidas de rendimiento
          p.text-white.mb-0 Importante contar las acciones y comportamientos. Las medidas son de tipo cuantitativas, por lo que se puede contar con personas, número de errores cometidos, número de veces que repiten el mismo error.
      .col-md-8.col-lg-5.bg-c9.m-2(data-aos="fade-left")
        .p-4
          figure.mb-3
            img(src='@/assets/curso/tema1/img45.svg', style="width:100px" alt='')
          .row 
            .col-auto
              p.txt-c3 Medidas subjetivas
          p.text-white.mb-0 Son las percepciones de los usuarios, juicios y comentarios. Pueden ser de tipo cualitativo o cuantitativo
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Pensando en voz alta (#[i Thinking Aloud])
    p.mb-4(data-aos="fade-right") Es uno de los métodos más longevos dentro del contexto de la usabilidad. Se encarga de pedir a los participantes de la prueba que usen el sistema mientras piensan en voz alta continuamente, es decir, #[b “simplemente”] verbalizan sus pensamientos mientras se mueven por la interfaz de usuario.
    .row.justify-content-center.mb-4
      .col-10.bg-c8(data-aos="fade-down")
        .p-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1/img46.svg', style="width:100px" alt='').m-auto
            .col
              p.mb-0 La palabra simplemente está entrecomillada, porque no es tan simple para la mayoría de las personas mantener un monólogo activo. El facilitador o evaluador de la prueba generalmente tiene que exhortar a los usuarios a que sigan hablando.
    p.mb-4(data-aos="fade-right") Para ejecutar un estudio de usabilidad de pensamiento básico en voz alta, solo se necesitan hacer tres cosas:
    .row.align-items-center.mb-4
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .row
          .col-12.bg-c11
            .p-4
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  | Reclutar usuarios representativos (público objetivo).
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  | Darles tareas representativas para realizar.
                li.d-flex
                  i.fas.fa-circle(style="color:#1682FB !important")
                  | Hacer silencio y dejar que los usuarios hablen.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img39.png', style="width:350px" alt='').m-auto
    p.mb-4(data-aos="fade-right") Ahora, se verán los beneficios de este método:
    TabsB.color-acento-contenido.mb-5(data-aos="fade-left")
      .py-4.py-md-5(titulo="Perspectiva de diseño" :icono="require('@/assets/curso/tema1/img47.svg')")
        .row.align-items-center.justify-content-center
          .col-lg-6.order-2.order-lg-1
            p Permite descubrir lo que los usuarios realmente piensan sobre el diseño. En particular, escuchar sus conceptos erróneos que, generalmente, se convierten en recomendaciones de rediseño.
          .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/tema1/img52.svg', style="width:250px", alt='').m-auto
      .py-4.py-md-5(titulo="Adaptación de interfaz" :icono="require('@/assets/curso/tema1/img48.svg')")
        .row.align-items-center.justify-content-center
          .col-lg-6.order-2.order-lg-1
            p Cuando los usuarios malinterpretan elementos de diseño, se deberá hacer el cambio. Aún mejor, generalmente se aprenderá por qué los usuarios adivinan mal sobre algunas partes de la interfaz de usuario y por qué encuentran otras fáciles de usar.
          .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/tema1/img53.svg', style="width:250px", alt='').m-auto
      .py-4.py-md-5(titulo="Barato" :icono="require('@/assets/curso/tema1/img49.svg')")
        .row.align-items-center.justify-content-center
          .col-lg-6.order-2.order-lg-1
            p No se necesita equipo especial; simplemente es sentarse junto a un usuario y tomar notas mientras habla. Se tarda aproximadamente un día en recopilar datos de un puñado de usuarios, que es todo lo que se necesita para obtener los conocimientos más importantes.
          .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/tema1/img54.svg', style="width:250px", alt='').m-auto
      .py-4.py-md-5(titulo="Flexible" :icono="require('@/assets/curso/tema1/img50.svg')")
        .row.align-items-center.justify-content-center
          .col-lg-6.order-2.order-lg-1
            p Puede utilizar el método en cualquier etapa del ciclo de vida del desarrollo, desde los primeros prototipos en papel  hasta los sistemas en ejecución completamente implementados.
          .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/tema1/img55.svg', style="width:250px", alt='').m-auto
      .py-4.py-md-5(titulo="Convincente" :icono="require('@/assets/curso/tema1/img51.svg')")
        .row.align-items-center.justify-content-center
          .col-lg-6.order-2.order-lg-1
            p Lograr que el resto de su equipo (y la gerencia) se siente en algunas sesiones de pensamiento en voz alta, no les toma mucho tiempo y es la mejor manera de motivarlos para que presten atención a la usabilidad.
          .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/tema1/img56.svg', style="width:250px", alt='').m-auto
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 Método del conductor
    p(data-aos="fade-right") Este método difiere con los anteriormente vistos, donde el evaluador o facilitador no interfiere en las acciones del usuario. Por lo tanto, este método tiene una dinámica muy parecida al anterior, pero con la salvedad que se conduce al usuario en la dirección correcta mientras se usa el sistema.
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img40.png', style="width:390px" alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p.mb-0 Durante la prueba, el usuario puede preguntar al evaluador/facilitador del test cualquier cuestión relacionada con el sistema y a su vez este deberá responder. En ese sentido el método se enfoca en el usuario inexperto y/o con poca afinidad tecnológica y el propósito de este, es descubrir las necesidades de información de los usuarios de tal forma que se genere un mejor entrenamiento y documentación al mismo tiempo que un posible rediseño de la interfaz.
    .row.mb-4
      .col-auto.bg-c6(data-aos="fade-down")
        .px-3.pb-0
          .row.align-items-end
            .col-auto.pe-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img5.svg', style="width:50px" alt='').m-auto
            .col
              h3 #[i Card Sorting]
    .row.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Parte de hacer que un sitio sea fácil de usar es organizar la información para que las personas encuentren lo que buscan. En ese sentido, Card Sorting o clasificación de tarjetas es un método de investigación asociado a la disciplina de la Experiencia de Usuario (UX), en la que los participantes del estudio agrupan etiquetas individuales escritas en tarjetas de notas de acuerdo con los criterios que tienen sentido para ellos.
        .row
          .col-12.bg-c4
            .p-4
              p.mb-0 Este método permite descubrir cómo está estructurado el conocimiento del dominio de la audiencia objetivo y se utiliza para crear una arquitectura de información que se alinea con las expectativas de los usuarios. A continuación, se presenta un ejemplo:
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img41.png', style="width:390px" alt='').m-auto
    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-4(data-aos="fade-right") Generalmente, el proceso funciona de la siguiente manera:
    .row.bg-c21(data-aos="fade-left")
      .col-12
        .p-5
          .tarjeta.tarjeta--azul1
            .py-2.px-4
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.m-1
                  .col-lg-7.order-2.order-lg-1
                    .row
                      .col-auto
                        p.txt-c4 #[b Paso 1]
                    .row
                      .col-auto
                        p.txt-c3 #[b Elegir un conjunto de temas]
                    p.text-white El conjunto debe incluir entre 40 y 80 elementos que representen el contenido principal del sitio. Escribir cada tema en una ficha individual.
                    p.text-white.mb-0 #[b Consejo]
                    o.text-white Evitar los temas que contengan las mismas palabras; los participantes tenderán a agrupar esas tarjetas.
                  .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img42.png',style="width:450px", alt='').m-auto
                .row.justify-content-center.align-items-center.m-1
                  .col-lg-9.order-2.order-lg-1
                    .row
                      .col-auto
                        p.txt-c4 #[b Paso 2]
                    .row
                      .col-auto
                        p.txt-c3 #[b El usuario organiza los temas en grupos]
                    p.text-white Baraje las cartas y entréguelas al participante. Pídales que examinen las tarjetas una por una y las agrupen según vayan juntas en pilas. Algunas pilas pueden ser grandes, otras pequeñas. Si el participante no está seguro acerca de una tarjeta o no sabe lo que significa, está bien dejarla a un lado. Es preferible tener un conjunto de tarjetas "desconocidas" o "inseguras" que agruparlas al azar.
                    p.text-white.mb-0 #[b Notas]
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        |
                        p.text-white.mb-0 No hay un número preestablecido de pilas; puede ocurrir que haya montones pequeños o grandes.
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        |
                        p.text-white.mb-0 Todo depende de los modelos mentales individuales.
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        |
                        p.text-white.mb-0 Los participantes deben saber que está bien cambiar de opinión mientras trabajan: pueden mover una carta de una pila a otra, fusionar dos pilas, dividir una pila en varias pilas nuevas, etc.
                      li.d-flex
                        i.fas.fa-circle(style="color:#1682FB !important")
                        |
                        p.text-white.mb-0 La clasificación de tarjetas es un proceso de abajo hacia arriba y es de esperar que se cometan errores iniciales.
                  .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img43.png',style="width:450px", alt='').m-auto
                .row.justify-content-center.align-items-center.m-1
                  .col-lg-7.order-2.order-lg-1
                    .row
                      .col-auto
                        p.txt-c4 #[b Paso 3]
                    .row
                      .col-auto
                        p.txt-c3 #[b Nombres de usuario de los grupos]
                    p.text-white Una vez que el usuario haya agrupado todas las tarjetas a su satisfacción, ahora se deben proporcionar tarjetas en blanco y solicitar que escriban un nombre para cada grupo que crearon. Este paso revelará el modelo mental del usuario sobre el espacio temático. Se pueden obtener algunas ideas para las categorías de navegación, pero no se debe esperar que los participantes creen etiquetas efectivas.
                  .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img44.png',style="width:450px", alt='').m-auto
                .row.justify-content-center.align-items-center.m-1
                  .col-lg-7.order-2.order-lg-1
                    .row
                      .col-auto
                        p.txt-c4 #[b Paso 4]
                    .row
                      .col-auto
                        p.txt-c3 #[b Informar al usuario]
                    p.text-white (Este paso es opcional, pero muy recomendable). Pida a los usuarios que expliquen el fundamento de los grupos que crearon. Como buena práctica, se les puede pedir a los usuarios que piensen en voz alta mientras realizan la clasificación, ya que esto puede proporcionar información detallada.
                  .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img45.png',style="width:450px", alt='').m-auto
                .row.justify-content-center.align-items-center.m-1
                  .col-lg-7.order-2.order-lg-1
                    .row
                      .col-auto
                        p.txt-c4 #[b Paso 5]
                    .row
                      .col-auto
                        p.txt-c3 #[b Si es necesario]
                    p.text-white Solicite al usuario tamaños de grupo más prácticos. No se deben imponer los propios deseos o prejuicios al participante durante la clasificación original (pasos 1 a 3), pero una vez que se haya definido la agrupación preferida del usuario y después del informe inicial, definitivamente se puede solicitar al usuario o participante que divida grupos grandes en subgrupos más pequeños. O al contrario: agrupar pequeños grupos en categorías más grandes.
                  .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img46.png',style="width:450px", alt='').m-auto
                .row.justify-content-center.align-items-center.m-1
                  .col-lg-7.order-2.order-lg-1
                    .row
                      .col-auto
                        p.txt-c4 #[b Paso 6]
                    .row
                      .col-auto
                        p.txt-c3 #[b Repetir con 15 a 20 usuarios]
                    p.text-white Se necesitarán suficientes usuarios para detectar patrones en los modelos mentales de los usuarios. Se recomienda contar con 15 participantes para la clasificación de tarjetas.
                  .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img47.png',style="width:450px", alt='').m-auto
                .row.justify-content-center.align-items-center.m-1
                  .col-lg-7.order-2.order-lg-1
                    .row
                      .col-auto
                        p.txt-c4 #[b Paso 7]
                    .row
                      .col-auto
                        p.txt-c3 #[b Analizar los datos]
                    p.text-white Una vez que tenga todos los datos, busque grupos comunes, nombres de categorías o temas, y elementos que se emparejan con frecuencia. En el caso de que algunos elementos se hayan dejado a un lado con frecuencia, hay que determinar si es porque las etiquetas de las tarjetas no eran claras o si el contenido no parecía estar relacionado con el resto de los temas. Combinar los patrones que están relacionados con los conocimientos cualitativos del informe lo colocará en una mejor posición para comprender qué sistema de organización será más exitoso para los usuarios.
                  .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img48.png',style="width:450px", alt='').m-auto
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
