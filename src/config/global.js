export default {
  global: {
    componenteFormativo:
      'Evaluación de usabilidad del prototipo <i>software</i>',
    descripcionCurso:
      'En este componente se aborda el paso a paso del uso de técnicas para la evaluación de la usabilidad de los prototipos <i>software</i>. Se inicia con una ruta lógica para el uso de estas herramientas, desde pruebas de inspección, hasta pruebas ligadas a la participación directa del usuario. Se espera que el aprendiz tenga las herramientas necesarias para realizar una evaluación de calidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Técnicas y métodos de evaluación de usabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Métodos de Inspección',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Métodos de indagación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Métodos de tipo test',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Introducción a la evaluación de accesibilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conceptos básicos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Herramientas de validación ',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Técnicas y métodos de evaluación de usabilidad',
      referencia:
        'SIlva, F. (2015). <i>Cómo mejorar la usabilidad de tu diseño web</i>. Blog IDA Chile | Estrategia para el éxito de tu negocio.',
      tipo: 'Blog',
      link: 'https://blog.ida.cl/diseno/como-mejorar-usabilidad-diseno-web/',
    },
    {
      tema: 'Técnicas y métodos de evaluación de usabilidad',
      referencia:
        'Usability.gov. (2021). <i>Report Template: Usability Test | Usability.gov. Report Template: Usability Test</i>.',
      tipo: 'Plantilla',
      link:
        'https://www.usability.gov/how-to-and-tools/resources/templates/report-template-usability-test.html',
    },
    {
      tema: 'Técnicas y métodos de evaluación de usabilidad',
      referencia:
        'Montoto, O. C. (2012, 15 marzo). <i>Estándares formales de usabilidad y su aplicación práctica en una evaluación heurística. Usable accesible</i>. ',
      tipo: 'Blog',
      link:
        'https://olgacarreras.blogspot.com/2012/03/estandares-formales-de-usabilidad-y-su.html',
    },
    {
      tema: 'Técnicas y métodos de evaluación de usabilidad',
      referencia:
        'Waka, A. (2020). <i>Cuestionarios para valorar la usabilidad de tu sitio web</i>. Blog de TemplateMonster. ',
      tipo: 'Herramienta',
      link:
        'https://monsterspost.com/es/cuestionarios-valorar-la-usabilidad-sitio-web/',
    },
    {
      tema: 'Evaluación Heurística',
      referencia: 'Evaluación heurística experta. (2021). <i>Software</i>.',
      tipo: 'Plantilla',
      link:
        'https://drive.google.com/file/d/1atoKREP3RiJ5yYsh8uqoxxD46HfR1E5e/view',
    },
    {
      tema: 'Grabación del uso',
      referencia:
        'Bestxsoftware. (2018). <i>Descarga gratuita Best Free Keylogger - 2021. Best Free Keylogger</i>.',
      tipo: 'Herramienta',
      link: 'https://bestxsoftware.com/es/',
    },
    {
      tema: 'Card Sorting',
      referencia:
        'Optimal Workshop. (2017). <i>Card Sorting con Optimal Workshop</i>. YouTube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=jVJM2ClAgAs',
    },
    {
      tema: 'Herramientas de validación',
      referencia:
        'W3C. (2008). <i>Web Content Accessibility Guidelines (WCAG) 2.0. Web Content Accessibility Guidelines (WCAG) 2.0</i>.',
      tipo: 'Herramienta',
      link: 'https://www.w3.org/TR/WCAG20/',
    },
  ],
  glosario: [
    {
      termino: '<i>Card Sorting</i>',
      significado:
        'método utilizado para ayudar a diseñar o evaluar la arquitectura de información de un sitio. En una sesión de con este método, los participantes organizan los temas en categorías que tienen sentido para ellos y también pueden ayudarlo a etiquetar estos grupos.',
    },
    {
      termino: '<i>Mapping</i>',
      significado: 'herramienta para realizar mapas conceptuales.',
    },
    {
      termino: 'Laboratorio de usabilidad',
      significado:
        'espacios especialmente adaptados para la realización de pruebas de evaluación de la usabilidad. En el cual se pueden realizar pruebas con usuario o sin usuario, todo depende del tipo de técnica.',
    },
    {
      termino: '<i>Logging</i>',
      significado:
        'proceso de capturar todo lo que usuario hace con un sistema interactivo, pueden ser clic, teclado y gestos.',
    },
    {
      termino: 'Página web',
      significado:
        'documento que se puede mostrar en un navegador web como Firefox, Google Chrome, Microsoft Internet Explorer o Edge, o Safari de Apple.',
    },
    {
      termino: 'UX',
      significado:
        'referencia a cómo un usuario experimenta e interactúa con un producto o servicio, un concepto más que un proceso.',
    },
  ],
  referencias: [
    {
      referencia:
        'Brajnik, G. (2006). <i>Web Accessibility Testing: When the Method Is the Culprit</i>. SpringerLink. ',
      link:
        'https://link.springer.com/chapter/10.1007/11788713_24?error=cookies_not_supported&code=5d553c03-889f-44a4-afa6-136178c2d63c',
    },
    {
      referencia: 'Brajnik, G. (2009). <i>Barrier Walkthrough</i>. ',
      link: 'https://users.dimi.uniud.it/~giorgio.brajnik/projects/bw/bw.html',
    },
    {
      referencia:
        'Fang, C. (2021). <i>La evaluación heurística - Prototypr</i>. Medium. ',
      link: '',
    },
    {
      referencia:
        'Giovanny García Garrido (2017, 2 mayo). <i>Prueba usabilidad - recorrido cognitivo</i>. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=3Wjo73W4W2U',
    },
    {
      referencia:
        'Granollers, T. (2014). <i>Grabación del uso (Logging). Curso de interacción persona-ordenador</i>. ',
      link: 'https://mpiua.invid.udl.cat/grabacion-del-uso-logging/',
    },
    {
      referencia:
        'Granollers, T. (2015). <i>Cuestionarios (Surveys). Curso de interacción persona-ordenador</i>. ',
      link: 'https://mpiua.invid.udl.cat/cuestionarios-surveys/',
    },
    {
      referencia:
        'Granollers, T. (2019). <i>Recorrido cognitivo. Curso de interacción persona-ordenador</i>. ',
      link: 'https://mpiua.invid.udl.cat/recorrido-cognitivo/',
    },
    {
      referencia:
        'Hom, J. (1996). <i>Inspección de estándares</i>. sidar.org. ',
      link:
        'http://www.sidar.org/recur/desdi/traduc/es/visitable/inspeccion/Stand.htm',
    },
    {
      referencia:
        'Initiative, W. W. A. (2021). <i>Easy Checks - A First Review of Web Accessibility. Web Accessibility Initiative (WAI)</i>. ',
      link: 'https://www.w3.org/WAI/test-evaluate/preliminary/',
    },
    {
      referencia:
        'Nielsen, J. (1994). <i>Usability Inspection Method Summary</i>. Nielsen Norman Group. ',
      link:
        'https://www.nngroup.com/articles/summary-of-usability-inspection-methods/',
    },
    {
      referencia:
        'Nielsen, J. (2020). <i>10 Usability Heuristics for User Interface Design</i>. Nielsen Norman Group. ',
      link: 'https://www.nngroup.com/articles/ten-usability-heuristics/',
    },
    {
      referencia:
        'Optimal Workshop. (2020). <i>Aprende a crear un card sorting remoto fácilmente y gratis</i>. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=kuWQCxB5r_k',
    },
    {
      referencia:
        'Sherwin, K. (2018). <i>Card Sorting: Uncover Users&apos; Mental Models for Better Information Architecture</i>. Nielsen Norman Group. ',
      link: 'https://www.nngroup.com/articles/card-sorting-definition/',
    },
    {
      referencia:
        'United Nations. (2021). <i>Convention on the Rights of Persons with Disabilities (CRPD) - Article 9 - Accessibility</i>. UN.org. ',
      link:
        'https://www.un.org/development/desa/disabilities/convention-on-the-rights-of-persons-with-disabilities/article-9-accessibility.html',
    },
    {
      referencia:
        'Villasante, N. (2020). <i>Evaluación heurística</i>. Medium. ',
      link:
        'https://medium.com/@nmartivi/evaluaci%C3%B3n-heur%C3%ADstica-4fe5c61580f4',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Santiago Muñoz de la Rosa',
          cargo: 'Experto temático',
          centro:
            'Regional Cauca - Centro de Teleinformática y Producción Industrial',
        },
        {
          nombre: 'Zvi Daniel Grosman',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro Agropecuario “La Granja”',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora metodológica y pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Daniel Polanco',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Intérprete lenguaje de señas',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Storyboard e ilustración',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
