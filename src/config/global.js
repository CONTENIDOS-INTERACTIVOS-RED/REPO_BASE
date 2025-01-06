export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Bioética y sostenibilidad en el desarrollo económico global',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Bioética aplicada al desarrollo económico sostenible',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición del desarrollo económico sostenible',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Principios bioéticos en el uso de los recursos naturales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Casos de éxito en desarrollo económico sostenible',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'El rol de las políticas globales en la protección de los derechos humanos y los recursos naturales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Marco ético y legal de las políticas globales de sostenibilidad',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Legislación internacional y local, sobre derechos humanos y recursos naturales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Responsabilidad social de las empresas en la protección de recursos naturales',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ética en la innovación y desarrollo tecnológico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Innovación sostenible',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tecnologías sostenibles y nuevas tendencias',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Privacidad y seguridad de datos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ardaraz, M. (2002). Teoría de las tres dimensiones de desarrollo sostenible: . Ecosistemas, 11(2), https://www.revistaecosistemas.net/index.php/ecosistemas/article/view/614',
      link:
        'https://www.revistaecosistemas.net/index.php/ecosistemas/article/view/614',
    },
    {
      referencia:
        'Beltrán, D. J. (2002). La estrategia de desarrollo sostenible de la Unión Europea en el contexto global: de Río a Johannesburgo. ICE. Revista de Economía, (800).',
      link: '',
    },
    {
      referencia:
        'Beyer, M. (2022, agosto 10). Las mayores centrales solares del mundo.10: Noor Abu Dhabi (Emiratos Árabes Unidos). pv magazine Latin America.',
      link:
        'https://www.pv-magazine-latam.com/2022/08/10/las-mayores-centrales-solares-del-mundo-10-noor-abu-dhabi-emiratos-arabes-unidos/',
    },
    {
      referencia:
        'Binns, R. (2018). Ethics in artificial intelligence: A comprehensive guide to understanding the ethical implications of AI. Springer.',
      link: '',
    },
    {
      referencia:
        'Carroll, A. B. (2013). La dimensión económica del desarrollo sostenible. San Vicente (Alicante), España: ECU.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/62332?page=172',
    },
    {
      referencia:
        'De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Rio de Janeiro (República Federativa del Brasil., aprobada en Estocolmo.',
      link: '',
    },
    {
      referencia:
        'El promedio mundial, G. a. su P. G. el P. C. C. I. S. Q. S., & De, C. C. un G. P. en E. F. E. I. E. Q. el P. en el P. es. (s/f). Energía solar en Colombia. Gov.co. Recuperado el 9 de noviembre de 2024, de',
      link:
        'https://repositorio.etechsolutions.com/bitstream/handle/123456789/56/22%20-%20Energ%C3%ADa%20solar%20colombia.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'García Peregrin, E. (2018). Bioética: temas para el debate. Vol. 2: (ed.). Bubok Publishing S.L.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/51423',
    },
    {
      referencia:
        'Garza Grimaldo, J. G. & Valqui Cachi, C. (2017). Los valores en la dialéctica de la humanidad y la naturaleza en el siglo XXI: ( ed.). Ediciones y Gráficos Eón.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/41138',
    },
    {
      referencia:
        'Naciones Unidas. (2015). Agenda 2030 para el Desarrollo Sostenible.',
      link: 'https://www.un.org/sustainabledevelopment/es/agenda2030/',
    },
    {
      referencia:
        'Naciones Unidas. (2022). Derecho a un medio ambiente limpio, saludable y sostenible.',
      link: 'https://www.un.org/es/climatechange',
    },
    {
      referencia:
        'Núñez de Castro, I. (2017). La bioética: un camino para el presente: ( ed.). ITESO - Instituto Tecnológico y de Estudios Superiores de Occidente.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/40950',
    },
    {
      referencia:
        'Organización Internacional del Trabajo [OIT]. (1989). Convenio sobre los pueblos indígenas y tribales, 1989 (No. 169).',
      link:
        'https://www.ilo.org/dyn/normlex/en/f?p=1000:12100:0::NO:12100:P12100_INSTRUMENT_ID:312314',
    },
    {
      referencia:
        'Pinilla Forero, J. (2022). Ética y bioética en la práctica profesional. Revista Colombiana de Ciencias Administrativas, 4 (1), 78-93: ( ed.). Fundación Universitaria San Mateo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/219184',
    },
    {
      referencia:
        'Política de Turismo Sostenible: "Unidos por la Naturaleza". (s/f). Gov.co. Recuperado el 9 de noviembre de 2024, de',
      link:
        'https://www.mincit.gov.co/minturismo/calidad-y-desarrollo-sostenible/politicas-del-sector-turismo/politica-de-turismo-sostenible',
    },
  ],
  glosario: [
    {
      termino: 'Bioética',
      significado:
        'disciplina que estudia las implicaciones éticas, sociales y legales de los avances biológicos y médicos, buscando garantizar que las decisiones en estos campos respeten la dignidad humana, los derechos fundamentales y la justicia social.',
    },
    {
      termino: 'Cambio Climático',
      significado:
        'alteraciones a largo plazo en las condiciones climáticas globales, en gran parte debido a la actividad humana (como la quema de combustibles fósiles), que afectan a los ecosistemas, la biodiversidad y las sociedades humanas, especialmente en términos de seguridad alimentaria y recursos hídricos.',
    },
    {
      termino: 'Derechos Humanos',
      significado:
        'conjunto de derechos inherentes a todos los seres humanos, sin distinción alguna, que protegen la dignidad, la libertad, la igualdad, la seguridad y el bienestar de las personas, independientemente de su nacionalidad, género, etnia, religión, etc.',
    },
    {
      termino: 'Ética en la Innovación',
      significado:
        'disciplina que analiza las implicaciones éticas de los avances y las nuevas tecnologías, evaluando su impacto en la humanidad, el medio ambiente, y la equidad social, asegurando que las innovaciones se alineen con principios morales y de justicia.',
    },
    {
      termino: 'Innovación Sostenible',
      significado:
        'desarrollo y aplicación de nuevas ideas, productos, procesos o servicios que no solo son económicamente viables, sino que también promueven la sostenibilidad ambiental, social y económica a largo plazo.',
    },
    {
      termino: 'Políticas Globales',
      significado:
        'estrategias y medidas adoptadas a nivel internacional por gobiernos, organizaciones intergubernamentales y actores globales para abordar problemas mundiales como el cambio climático, la pobreza, la salud pública y la protección de los derechos humanos.',
    },
    {
      termino: 'Responsabilidad Social Corporativa (RSC)',
      significado:
        'compromiso voluntario de las empresas para contribuir al bienestar social y ambiental, más allá de su obligación legal, integrando principios éticos en sus prácticas de negocio.',
    },
    {
      termino: 'Sostenibilidad Ambiental',
      significado:
        'principio que aboga por la conservación y el uso responsable de los recursos naturales para preservar la biodiversidad y los ecosistemas a largo plazo, asegurando un entorno saludable para las generaciones futuras.',
    },
    {
      termino: 'Tecnologías Emergentes',
      significado:
        'tecnologías de última generación con el potencial de transformar industrias y sociedades, como la inteligencia artificial, la biotecnología, la nanotecnología y las energías renovables, que plantean nuevos retos éticos y sociales',
    },
  ],
}
