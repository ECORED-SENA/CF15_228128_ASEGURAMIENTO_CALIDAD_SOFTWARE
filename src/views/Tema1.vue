<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Técnicas y métodos de evaluación de usabilidad
    p Las técnicas de evaluación dentro del contexto de la usabilidad son una parte crítica del proceso de desarrollo de software, debido a su naturaleza iterativa. Una evaluación de usabilidad representa la mejor manera de poner un producto en manos de usuarios reales para observar si lo usan y cómo lo usan antes del lanzamiento del producto.
    .row.mb-3
      .col-12.bg-c2
        .p-4
          .row.align-items-center
            .col-lg-auto.pe-0.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img1.svg', style="width:350px", alt='').m-auto
            .col.bg-c3
              .p-4
                p.mb-0 La aplicación de diversas técnicas de evaluación permitirá medir cuantitativa y cualitativamente el comportamiento, el rendimiento y la satisfacción del usuario. Algunos proyectos de software abordan las pruebas de usabilidad, pero solo al final del ciclo de desarrollo.
    p.mb-0 Desafortunadamente, esto es demasiado tarde en el ciclo de desarrollo para incorporar cambios basados en los resultados de las pruebas de usabilidad. Incluso si se realizan cambios en el diseño del producto, la interfaz debe evaluarse nuevamente para garantizar que el producto cumpla con los puntos de referencia y los objetivos del producto final, afectando la calidad del software. De esta forma, con los siguientes métodos se espera presentar las mejores prácticas en torno a la evaluación de usabilidad para sistemas interactivos de software.
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1 Métodos de inspección
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1
        .row
          .col-12.bg-c4
            .p-4
              p.mb-0 Es un conjunto de métodos basados en la inspección de una interfaz de usuario por parte de un grupo de evaluadores. Normalmente, esta inspección de usabilidad tiene como objetivo identificar problemas de usabilidad en el diseño, aunque algunos métodos también se enfocan en aspectos como la interacción y funcionalidad de un sistema completo.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema1/img1.png', style="width:380px", alt='').m-auto
    .row.mb-5
      .col-12.px-4.pb-4.px-lg-5.pb-lg-5.bg-c5
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
    p En la literatura se encuentra un sinnúmero de definiciones y ejemplos acerca de los pasos de la evaluación heurística, por lo que en este componente se agrupan las mejores descripciones y buenas prácticas para su aplicación.
    p A los 10 principios generales de Jakob Nielsen para el diseño de interacciones se les llama “heurísticas”, porque son reglas generales y no pautas de usabilidad específicas, como se verá a continuación:
    .row.bg-c7
      .col-12
        .px-5.pt-5
          p.mb-4 #[b.txt-c1 Paso 1. Visibilidad del estado del sistema.] El diseño siempre debe mantener informados a los usuarios sobre lo que está sucediendo, mediante la retroalimentación adecuada dentro de un período de tiempo razonable. (Nielsen, 2020).
          .row.justify-content-center.mb-4
            .col-10.bg-c8
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
          p.mb-4 Algunos consejos para la visibilidad del estado del sistema son:
          .row.justify-content-center.mb-4
            .col-10.col-md-8.col-lg.bg-c9.m-2
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema1/img8.svg', style="width:80px" alt='')
                p.text-white.mb-0 Comunicar claramente a los usuarios cuál es el estado del sistema, no se debe tomar ninguna acción con consecuencias para los usuarios sin informarles.
            .col-10.col-md-8.col-lg.bg-c9.m-2
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema1/img9.svg', style="width:80px" alt='')
                p.text-white.mb-0 Presentar comentarios al usuario lo más rápido posible (idealmente, de inmediato).
            .col-10.col-md-8.col-lg.bg-c9.m-2
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema1/img10.svg', style="width:80px" alt='')
                p.text-white.mb-0 Generar confianza a través de una comunicación abierta y continua.
          p.mb-4 A continuación, se comparten algunas prácticas:
          .row.justify-content-center.mb-5
            .col-10.col-md-8.col-lg.bg-c10.m-2
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
            .col-10.col-md-8.col-lg.bg-c10.m-2
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
          p.mb-4 #[b.txt-c1 Paso 2. Coincidencia entre el sistema y el mundo real.] El diseño debe hablar el idioma de los usuarios. Utilice palabras, frases y conceptos familiares para el usuario, en lugar de jerga interna. Siga las convenciones del mundo real, haciendo que la información aparezca en un orden lógico y natural (Nielsen, 2020).
          .row.justify-content-center.mb-4
            .col-10.bg-c8
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img7.svg', style="width:100px" alt='').m-auto
                  .col
                    p #[b Recomendación]
                    p La forma en que debe diseñar depende en gran medida de sus usuarios específicos. Los términos, conceptos, íconos e imágenes que le parezcan perfectamente claros a usted y a su equipo de trabajo pueden resultarles desconocidos o confusos a sus usuarios.
                    p.mb-0 Cuando los controles u objetos de interacción de un diseño siguen las convenciones del mundo real y corresponden a los resultados deseados (llamado mapeo natural), es más fácil para los usuarios aprender y recordar cómo funciona la interfaz. Esto ayuda a crear una experiencia intuitiva.
          p.mb-4 Consejos para la coincidencia entre el sistema y el mundo real:
          .row.align-items-center.mb-4
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img4.png', style="width:420px" alt='').m-auto
            .col-lg-8
              .row
                .col-12.bg-c11
                  .p-4
                    .row.align-items-center.mb-4
                      .col-auto.pe-0
                        figure
                          img(src='@/assets/curso/tema1/img15.svg', style="width:60px" alt='').m-auto
                      .col
                        p.mb-0 Asegúrate de que los usuarios puedan entender el significado sin tener que buscar la definición de una palabra.
                    .row.align-items-center.mb-4
                      .col-auto.pe-0
                        figure
                          img(src='@/assets/curso/tema1/img16.svg', style="width:60px" alt='').m-auto
                      .col
                        p.mb-0 Nunca asumas que su comprensión o entendimiento de palabras o conceptos coincidirá con la de sus usuarios.
                    .row.align-items-center
                      .col-auto.pe-0
                        figure
                          img(src='@/assets/curso/tema1/img17.svg', style="width:60px" alt='').m-auto
                      .col
                        p.mb-0 La investigación de usuarios te ayudará a descubrir la terminología familiar de sus usuarios, así como su manera de ver las cosas en torno a conceptos importantes.
          p.mb-4 A continuación, se comparten algunas prácticas:
          .row.justify-content-center.mb-5
            .col-10.col-md-8.col-lg.bg-c10.m-2
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
            .col-10.col-md-8.col-lg.bg-c10.m-2
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
          p.mb-4 #[b.txt-c1 Paso 3. Control y libertad del usuario.] Los usuarios suelen realizar acciones por error. Necesitan una "salida de emergencia" claramente marcada para abandonar la acción no deseada sin tener que pasar por un proceso prolongado (Nielsen, 2020).
          .row.justify-content-center.mb-5
            .col-10.bg-c13
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img7.svg', style="width:100px" alt='').m-auto
                  .col
                    p #[b Recomendación]
                    p Cuando es fácil para las personas retroceder en un proceso o deshacer una acción, se fomenta una sensación de libertad y confianza, es más de credibilidad del sistema software. Las salidas permiten a los usuarios mantener el control del sistema y, de esta forma, evitar quedarse atascados o, lo que es peor, sentir frustración.
            .col-10.bg-c12
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img18.svg', style="width:100px" alt='').m-auto
                  .col
                    .text-white
                      p #[b Concejos]
                      ul.lista-ul
                        li.d-flex
                          i.fas.fa-circle(style="color:#1682FB !important")
                          | Soportar Deshacer y rehacer.
                        li.d-flex
                          i.fas.fa-circle(style="color:#1682FB !important")
                          | Mostrar una forma clara de salir de la interacción actual, como un botón Cancelar.
                        li.d-flex
                          i.fas.fa-circle(style="color:#1682FB !important")
                          | Asegurarse de que la salida esté claramente etiquetada y sea visible.
    .row.bg-c7
      .col-12
        .px-5.pt-5
          p.mb-4 #[b.txt-c1 Paso 4. Coherencia y estándares.] Los usuarios no deberían tener que preguntarse si diferentes palabras, situaciones o acciones significan lo mismo. Siga las convenciones de la plataforma y la industria (Nielsen, 2020).
          .row.justify-content-center.mb-4
            .col-10.bg-c8
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img7.svg', style="width:100px" alt='').m-auto
                  .col
                    p #[b Recomendación]
                    p Esta regla establece que las personas pasan la mayor parte de su tiempo utilizando productos digitales distintos a los suyos. Las experiencias de los usuarios con esos otros productos establecen sus expectativas. Perder o no mantener la coherencia puede aumentar la carga cognitiva de los usuarios al obligarlos a aprender algo nuevo.
          p.mb-4 A continuación, se presentan algunos consejos:
          .row.justify-content-center.mb-4
            .col-10.col-md-8.col-lg.bg-c9.m-2
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema1/img20.svg', style="width:80px" alt='')
                p.text-white.mb-0 Mejorar la capacidad de aprendizaje manteniendo ambos tipos de coherencia: interna y externa.
            .col-10.col-md-8.col-lg.bg-c9.m-2
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema1/img21.svg', style="width:80px" alt='')
                p.text-white.mb-0 Mantener la consistencia dentro de un solo producto o una familia de productos (consistencia interna).
            .col-10.col-md-8.col-lg.bg-c9.m-2
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema1/img22.svg', style="width:80px" alt='')
                p.text-white.mb-0 Seguir las convenciones establecidas de la industria (consistencia externa).
          p.mb-4 Algunas prácticas son:
          .row.justify-content-center.mb-5
            .col-10.col-md-8.col-lg.bg-c10.m-2
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
            .col-10.col-md-8.col-lg.bg-c10.m-2
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
          p.mb-4 #[b.txt-c1 Paso 5. Prevención de errores.] Los buenos mensajes de error son importantes, pero los mejores diseños evitan cuidadosamente que ocurran problemas en primer lugar. Elimine las condiciones propensas a errores o verifíquelas y presente a los usuarios una opción de confirmación antes de que se comprometa con la acción (Nielsen, 2020).
          .row.justify-content-center.mb-4
            .col-10.bg-c8
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
          p.mb-4 Algunos consejos son:
          .row.align-items-center.mb-4
            .col-lg-8.order-2.order-lg-1
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
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/tema1/img9.png', style="width:350px" alt='').m-auto
          p.mb-4 A continuación, se comparten algunas prácticas:
          .row.justify-content-center.mb-5
            .col-10.col-md-8.col-lg.bg-c10.m-2
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
            .col-10.col-md-8.col-lg.bg-c10.m-2
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
          p.mb-4 #[b.txt-c1 Paso 6. Reconocimiento en lugar de recordar.] Minimice la carga de memoria del usuario haciendo visibles los elementos, acciones y opciones. El usuario no debería tener que recordar información de una parte de la interfaz a otra. La información requerida para utilizar el diseño (por ejemplo, etiquetas de campo o elementos de menú) debe ser visible o fácilmente recuperable cuando sea necesario (Nielsen, 2020).
          .row.justify-content-center.mb-4
            .col-10.bg-c8
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img7.svg', style="width:100px" alt='').m-auto
                  .col
                    p #[b Recomendación]
                    p.mb-0 En la literatura se menciona que los seres humanos tienen una memoria limitada a corto plazo. De esta forma, para reducir la cantidad de esfuerzo cognitivo requerido por parte de los usuarios se desarrollan interfaces que promueven el reconocimiento.
          p.mb-4 Algunos consejos son:
          .row.mb-4
            .col-lg.m-2
              .row.h-100
                .col-auto.bg-c15.d-flex.align-items-center
                  .p-2
                    figure
                      img(src='@/assets/curso/tema1/img23.svg', style="width:70px" alt='').m-auto
                .col.bg-c16.d-flex.align-items-center
                  .p-4
                    p.mb-0 Permitir que la gente reconozca la información en la interfaz, en lugar de tener que recordarla.
            .col-lg.m-2
              .row.h-100
                .col-auto.bg-c15.d-flex.align-items-center
                  .p-2
                    figure
                      img(src='@/assets/curso/tema1/img24.svg', style="width:70px" alt='').m-auto
                .col.bg-c16.d-flex.align-items-center
                  .p-4
                    p.mb-0 Ofrecer ayuda en contexto, en lugar de dar a los usuarioss un tutorial largo para memorizar.
            .col-lg.m-2
              .row.h-100
                .col-auto.bg-c15.d-flex.align-items-center
                  .p-2
                    figure
                      img(src='@/assets/curso/tema1/img25.svg', style="width:70px" alt='').m-auto
                .col.bg-c16.d-flex.align-items-center
                  .p-4
                    p.mb-0 Reducir la información que los usuarios deben recordar.
          p.mb-4 Algunos consejos son:
          .row.justify-content-center.mb-5
            .col-10.col-md-8.col-lg.bg-c10.m-2
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
            .col-10.col-md-8.col-lg.bg-c10.m-2
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
          p.mb-4 #[b.txt-c1 Paso 7. Flexibilidad y eficiencia de uso.] Los accesos directos, ocultos para los usuarios novatos, pueden acelerar la interacción para el usuario experto, de modo que el diseño pueda satisfacer tanto a los usuarios sin experiencia como a los experimentados. Permitir a los usuarios personalizar las acciones frecuentes (Nielsen, 2020)
          .row.justify-content-center.mb-4
            .col-10.bg-c8
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img7.svg', style="width:100px" alt='').m-auto
                  .col
                    p #[b Recomendación]
                    p.mb-0 Los procesos deben ser  flexibles para que se puedan llevar a cabo de diferentes formas, de modo que las personas puedan elegir el método que les funcione.
          p.mb-4 Algunos consejos son:
          .row.align-items-center.mb-4
            .col-lg-9.order-2.order-lg-1
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
            .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/tema1/img14.png', style="width:260px" alt='').m-auto
          p.mb-4 A continuación, se comparten algunas prácticas:
          .row.justify-content-center.mb-5
            .col-10.col-md-8.col-lg.bg-c10.m-2
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
            .col-10.col-md-8.col-lg.bg-c10.m-2
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
