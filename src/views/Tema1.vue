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
    .row.bg-c7
      .col-12
        .px-5.pt-5
          p.mb-4 #[b.txt-c1 Paso 8. Diseño estético y minimalista.] Los accesos directos, ocultos para los usuarios novatos, pueden acelerar la interacción para el usuario experto, de modo que el diseño pueda satisfacer tanto a los usuarios sin experiencia como a los experimentados. Permitir a los usuarios personalizar las acciones frecuentes (Nielsen, 2020).
          .row.justify-content-center.mb-4
            .col-10.bg-c8
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img7.svg', style="width:100px" alt='').m-auto
                  .col
                    p #[b Recomendación]
                    p.mb-0 Esta regla no significa tener que usar un diseño plano, se trata de asegurarse de mantener el contenido y el diseño visual enfocados en lo esencial. Asegurarse de tener la atención total del usuario y no despistarlo de su objetivo, es decir, permitir que los elementos visuales de la interfaz sean compatibles con los objetivos primordiales del usuario.
          p.mb-4 Algunos consejos son:
          .row.align-items-center.mb-4
            .col-lg-9.order-2.order-lg-1
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
            .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/tema1/img17.png', style="width:230px" alt='').m-auto
          .row.justify-content-center.mb-5
            .col-10.col-md-8.col-lg.bg-c10.m-2
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
            .col-10.col-md-8.col-lg.bg-c10.m-2
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
          p.mb-4 #[b.txt-c1 Paso 9. Ayudar a los usuarios a reconocer, diagnosticar y recuperarse de errores.] Los mensajes de error deben expresarse en un lenguaje sencillo (sin códigos de error), indicar con precisión el problema y sugerir una solución de manera constructiva (Nielsen, 2020).
          .row.justify-content-center.mb-4
            .col-10.bg-c8
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img7.svg', style="width:100px" alt='').m-auto
                  .col
                    p #[b Recomendación]
                    p.mb-0 Los mensajes, notificaciones o alertas de error también deben presentarse con tratamientos visuales que acompañe y de soporte a los usuarios a notarlos y reconocerlos.
          p.mb-4 Algunos consejos son:
          .row.justify-content-center.mb-4
            .col-md-8.col-lg.bg-c17.m-2
              .p-4
                p.mb-0 Utilizar elementos visuales de mensajes de error tradicionales, como texto rojo en negrita.
            .col-md-8.col-lg.bg-c17.m-2
              .p-4
                p.mb-0 Ofrecer a los usuarios una solución, como un atajo que pueda resolver el error de imediato.
            .col-md-8.col-lg.bg-c17.m-2
              .p-4
                p.mb-0 Indicar a los usuarios lo que salió mal en un lenguaje que entenderán; evitar la jerga técnica.
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
                p Las señales de sentido incorrecto en la carretera le hacen recordar a los conductores que se dirigen en la dirección incorrecta y les solicita que se detengan.
                .row.justify-content-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/img20.png', style="width:300px" alt='')
                    figcaption Nota. Tomada de Nielsen Norman Group (2020).
            .col-10.col-md-8.col-lg.bg-c10.m-2
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
          p.mb-4 #[b.txt-c1 Paso 10. Ayuda y documentación.] Es mejor si el sistema no necesita ninguna explicación adicional. Sin embargo, puede ser necesario proporcionar documentación para ayudar a los usuarios a comprender cómo completar sus tareas (Nielsen, 2020).
          .row.justify-content-center.mb-4
            .col-10.bg-c8
              .p-4
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/img7.svg', style="width:100px" alt='').m-auto
                  .col
                    p #[b Recomendación]
                    p.mb-0 Los mensajes, notificaciones o alertas de error también deben presentarse con tratamientos visuales que acompañe y de soporte a los usuarios a notarlos y reconocerlos.
          p.mb-4 A continuación, se comparten algunas consejos:
          .row.mb-4
            .col-lg-8.order-2.order-lg-1
              .row.justify-content-end 
                .col-11.bg-c18
                  .py-2
                    .row.align-items-center 
                      .col-auto.pe-0.fig-p2
                        figure
                          img(src='@/assets/curso/tema1/img27.svg', style="width:50px" alt='').m-auto
                      .col.fig-p2
                        p.mb-0 Asegúrate de que la documentación de ayuda sea fácil de buscar.
              .row.justify-content-end
                .col-11.bg-c19
                  .py-2
                    .row.align-items-center 
                      .col-auto.pe-0.fig-p2
                        figure
                          img(src='@/assets/curso/tema1/img28.svg', style="width:50px" alt='').m-auto
                      .col.fig-p2
                        p.mb-0 Siempre que sea posible, presenta la documentación en contexto justo en el momento que el usuario lo requiera.
              .row.justify-content-end
                .col-11.bg-c20
                  .py-2
                    .row.align-items-center 
                      .col-auto.pe-0.fig-p2
                        figure
                          img(src='@/assets/curso/tema1/img29.svg', style="width:50px" alt='').m-auto
                      .col.fig-p2
                        p.mb-0 Enumera los pasos concretos a realizar.
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/tema1/img22.png', style="width:300px" alt='').m-auto
          .row.mb-5
            .col-lg-6.mb-4.mb-lg-0
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
            .col-lg-6
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
    p También conocido como #[b #[i Cognitive Walkthrough]], es un método de inspección de usabilidad enfocado en evaluar la facilidad de aprendizaje de la interfaz gráfica de una aplicación, principalmente a través de la exploración. Este método se basa en la observación de varios usuarios que buscan aprender a utilizar el software explorando sus posibilidades.
    p.mb-5 Los pasos para la aplicación de este método son:
    .row.bg-c21.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--gris1
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
      .col-lg-8.order-2.order-lg-1
        p Primero, se comienza por entender qué es un #[b estándar], el cual se define #[b como un requisito, regla o recomendación basada en principios comprobados y, especialmente, en la práctica]. De esta manera, representa un consenso entre un grupo de profesionales oficialmente autorizados a nivel nacional e internacional. 
        p Es importante considerar la definición de Norman, quien afirma que #[b “los estándares son eternos, ya que una vez establecidos, simplifican y dominan las vidas de millones, incluso miles de millones de personas”].
        .row
          .col-12.bg-c4
            .p-4
              p.mb-0 Esta técnica asegura, hasta cierto punto, la conformidad con los estándares industriales. En dichas inspecciones, un profesional de la usabilidad, con amplio conocimiento del estándar, analiza los elementos del producto o aplicación en cuestión para asegurar su uso y adaptación al estándar industrial.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema1/img30.svg', style="width:400px" alt='').m-auto
    .row.justify-content-center.mb-5
      .col-lg-10.bg-c23
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
    p Por ejemplo, los productos de software diseñados para un contexto social determinado deberían disponer de elementos comunes, como las mismas opciones en el menú de la aplicación, un menú de “Ayuda”, etc. (Hom, 1996).
    p.mb-5 En la mayoría de los casos la inspección debe llevarse a cabo por un experto en el estándar. En un determinado entorno, se podría exigir que la inspección la llevará a cabo alguien representativo de la compañía productora. A continuación, se presenta cuándo aplicar la técnica de inspección de estándares para optimizar la usabilidad y eficiencia en el desarrollo de productos:
    .row
      .col-12.bg-c25
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
    p.mb-5 El proceso de indagación facilita el conocimiento de un tema mediante el uso de conjeturas y señales. Este tipo de métodos de evaluación se basa en una premisa fundamental: interactuar con los usuarios y observarlos cuidadosamente mientras utilizan el sistema en su entorno real. De esta manera, se consiguen respuestas a las preguntas formuladas, ya sea verbalmente o por escrito.
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
      .col-lg-8.order-2.order-lg-1
        p El término cuestionario se presenta como una lista de cuestiones o preguntas planteadas sobre un tema en específico con la finalidad de que alguien las responda.
        p En el contexto de la evaluación de usabilidad de sistemas interactivos software se hace referencia a cuestionarios como listas de preguntas que el evaluador distribuye entre usuarios y/o implicados para que estos devuelvan las respuestas y, de este modo, obtener conclusiones.
        .row
          .col-12.bg-c4
            .p-4
              p.mb-0 El cuestionario normalmente se distribuye en formato escrito y las preguntas plantean aspectos asociados con el sistema o aplicación concreta. #[b En ese sentido, el objetivo del cuestionario es la recolección de información a partir de respuestas contestadas por los usuarios y/o los implicados].
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema1/img29.png', style="width:400px" alt='').m-auto
    p.mb-5 Los tipos de preguntas a incluir en un cuestionario, según Granollers son:
    .row.bg-c21.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--azul1
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
