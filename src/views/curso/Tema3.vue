<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Ética en la innovación y desarrollo tecnológico '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left").mb-4 La ética en la innovación y el desarrollo tecnológico, es un área que aborda los dilemas y las responsabilidades asociadas con el impacto de las tecnologías en la sociedad, el medio ambiente y las personas. A medida que las empresas y las sociedades avanzan hacia un futuro más digital y tecnológico, la necesidad de una innovación ética se hace cada vez más necesaria. Las tecnologías tienen el potencial de generar beneficios significativos, pero también pueden conllevar riesgos si no se desarrollan o implementan, de manera responsable. 

        p(data-aos="fade-left") En este contexto, surgen varias cuestiones éticas que deben ser consideradas, como la sostenibilidad de las innovaciones, la privacidad y la seguridad de los datos, y los desafíos futuros que se derivan del desarrollo tecnológico.


    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Innovación sostenible

    .row.mb-5
      .col-lg-7
        p(data-aos="fade-left").mb-4 La innovación sostenible implica el desarrollo de nuevas tecnologías, productos o procesos que no solo sean rentables y eficientes, sino que también respeten el medio ambiente y contribuyan al bienestar social. 

        .bg-color-1.p-4(data-aos="fade-left").mb-4
          p(data-aos="fade-left").mb-0 Esta forma de innovación busca resolver problemas globales como el cambio climático, la escasez de recursos y la desigualdad social, promoviendo soluciones que sean viables tanto a corto como a largo plazo.

        p(data-aos="fade-left") Para que la innovación sea sostenible, debe basarse en los siguientes principios:

      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")


    .bg-full-width.bg-color-6.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema3/slider-1.png")
            .col-lg-7
              h5 Responsabilidad ambiental
              p Las innovaciones deben ser diseñadas para minimizar su impacto ambiental. Esto incluye la reducción de la huella de carbono, el uso de materiales reciclables, la eficiencia energética y la minimización de residuos. Un ejemplo claro es la transición hacia energías renovables, como la solar y la eólica, o la implementación de economías circulares que busquen maximizar el uso de recursos y evitar el desperdicio.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema3/slider-2.png")
            .col-lg-7
              h5 Equidad social
              p La innovación debe considerar sus implicaciones sociales. Las nuevas tecnologías deben ser accesibles y beneficiar a todas las capas de la sociedad, especialmente a las comunidades vulnerables que pueden verse desproporcionadamente afectadas, por el cambio tecnológico. Esto implica pensar en la inclusión digital y en cómo las innovaciones pueden mejorar la calidad de vida de las personas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema3/slider-3.png")
            .col-lg-7
              h5 Viabilidad económica a largo plazo
              p La innovación no puede basarse únicamente en la rentabilidad inmediata. Debe ser viable a largo plazo, asegurando que las soluciones propuestas sean sostenibles económicamente y no generen un agotamiento de recursos o un daño económico posterior.

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Innovación sostenible

    p(data-aos="fade-left").mb-4 Las tecnologías sostenibles se encuentran en auge en la innovación, con avances en áreas como:

    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema3/3.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Tecnologías limpias y energías renovables
          p.mb-0.text-center Innovaciones en energía solar, eólica, biocombustibles y almacenamiento de energía que permiten una transición hacia fuentes de energía más limpias y menos dependientes de los combustibles fósiles.
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema3/4.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Tecnologías verdes en la industria
          p.mb-0.text-center Desde la fabricación 3D que permite la creación de productos más eficientes con menos desperdicio de material, hasta los procesos de producción sostenible que reducen el uso de recursos no renovables.
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema3/5.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Movilidad sostenible
          p.mb-0.text-center La innovación en vehículos eléctricos, sistemas de transporte público más ecológicos, y el fomento de infraestructuras de transporte compartido son claves para reducir las emisiones de carbono en las ciudades.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          p(data-aos="fade-left").mb-0 Estas innovaciones requieren un enfoque ético, que considere no solo la viabilidad técnica, sino también sus impactos a largo plazo en la sociedad y el planeta.


    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Privacidad y seguridad de datos

    p(data-aos="fade-left").mb-4 El desarrollo de la tecnología ha traído consigo una creciente preocupación por la privacidad y la seguridad de los datos. A medida que las empresas y gobiernos recogen, almacenan y procesan grandes cantidades de información personal, la ética de la gestión de datos se convierte en una cuestión  evidente.   

    p(data-aos="fade-left").mb-4 Ahora, los desafíos éticos en la privacidad de los datos, son:

    .row.align-items-center.mb-5
      .col-lg-7
        AcordionA(tipo="b")
          .div(titulo="Recopilación y uso de datos personales")
            p El uso masivo de datos personales, plantea cuestiones sobre el consentimiento, la transparencia y la protección de la privacidad. Muchas veces, las personas no son conscientes de la cantidad de información que están compartiendo con empresas o plataformas digitales, ni de los riesgos asociados al uso de esos datos.

          .div(titulo="Vulnerabilidad a fugas de información")
            p A medida que la digitalización avanza, los riesgos de brechas de seguridad aumentan, poniendo en peligro la información sensible de individuos y organizaciones. Los recientes escándalos de filtraciones de datos han subrayado la necesidad urgente de normativas estrictas sobre la protección de datos.

          .div(titulo="Derechos de los usuarios")
            p Los usuarios deben tener el derecho de controlar sus propios datos, incluyendo la capacidad de acceso, modificación, eliminación y portabilidad de sus datos. La ética en el manejo de datos debe garantizar que las empresas no abusen del poder que tienen sobre la información personal.
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/6.png", alt="").mt-4.mt-lg-0


    .row.align-items-center.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/7.png", alt="").mt-4.mt-lg-0
      .col-lg-7
        p(data-aos="fade-left").mb-4 Las empresas deben adoptar prácticas responsables para garantizar la seguridad de los datos. Entre las principales acciones éticas que las empresas deben tomar se incluyen:

        AcordionA(tipo="b")
          .div(titulo="Transparencia en la recopilación y uso de datos")
            p Las empresas deben ser claras y transparentes sobre cómo recogen, almacenan y usan los datos personales de los usuarios. Esto incluye informar a los usuarios sobre los riesgos asociados y obtener su consentimiento explícito, para el uso de su información.

          .div(titulo="Fortalecimiento de la ciberseguridad")
            p A medida que las amenazas digitales crecen, las empresas deben implementar medidas de seguridad avanzadas, para proteger la información de los usuarios, incluidas técnicas como el cifrado de datos, entre otras.

          .div(titulo="Cumplimiento con regulaciones internacionales")
            p El Reglamento General de Protección de Datos (GDPR) en Europa y otras normativas internacionales, como la Ley de Privacidad del Consumidor de California (CCPA), exigen que las empresas cumplan con estrictos estándares de privacidad y protección de datos. Cumplir con estas normativas no solo es legalmente necesario, sino también una práctica ética.


    p(data-aos="fade-left").mb-5 A medida que la tecnología avanza a un ritmo acelerado, surgen nuevos desafíos éticos que las sociedades deben abordar. Estos desafíos no solo involucran las tecnologías emergentes, sino también el impacto de las innovaciones tecnológicas en la estructura social, la economía global y la vida cotidiana. Es por esto que  los desarrolladores, las empresas y los gobiernos deben  trabajar de manera conjunta para anticipar y mitigar los riesgos asociados con el desarrollo y la implementación de nuevas tecnologías. 

    .row.mb-5
      .col-lg-5.order-lg-2
        figure
          img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-7.order-lg-1
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Entre los principales retos éticos emergentes, destacan la inteligencia artificial (IA), la automatización, las tecnologías biológicas y la privacidad digital. 

        p(data-aos="fade-left") Uno de los desafíos más significativos en la ética tecnológica, es la implementación de la inteligencia artificial (IA) y la automatización. A medida que estas tecnologías se vuelven más sofisticadas, se generan preocupaciones sobre su impacto en el empleo y las relaciones laborales. La IA tiene el potencial de reemplazar una amplia gama de trabajos, lo que podría conducir a la exclusión económica de ciertos grupos y a un aumento de la desigualdad social. Además, los algoritmos de IA pueden estar sesgados, reproduciendo o incluso, amplificando prejuicios sociales ya existentes, lo que plantea un dilema ético sobre la justicia y la equidad en su aplicación (Binns, 2018). 


    .row.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in").mt-4.mt-lg-0
      .col-lg-7
        p(data-aos="fade-right").mb-3 La automatización plantea otro conjunto de preocupaciones éticas, especialmente en términos de responsabilidad:
        ol.lista-ol--cuadro(data-aos="fade-up").mb-3
          li 
            .lista-ol--cuadro__vineta
              span 1
            | ¿Quién es responsable cuando una máquina comete un error que tiene consecuencias graves?
          li 
            .lista-ol--cuadro__vineta
              span 2
            | ¿Cómo se distribuyen los beneficios de la automatización entre las empresas, los trabajadores y la sociedad en general?
        
        p(data-aos="fade-left").mb-0 Estos problemas requieren una reflexión ética profunda y un marco regulatorio claro, para evitar la explotación y garantizar una transición laboral justa.


    p(data-aos="fade-left").mb-4 Para abordar estos desafíos éticos, es esencial una colaboración interdisciplinaria entre científicos, ingenieros, filósofos, sociólogos, economistas y otros expertos. La ética en la tecnología no puede ser una preocupación solo de los tecnólogos; debe involucrar a todos los sectores de la sociedad, incluidas las comunidades afectadas por la innovación tecnológica.


    .row.mb-5
      .col-lg-7

        .bg-color-1.p-4(data-aos="fade-left").mb-4
          p(data-aos="fade-left").mb-0 Para finalizar, es importante reconocer que el futuro de la ética en la tecnología depende de cómo se aborden los desafíos emergentes y cómo se establece un compromiso global hacia un desarrollo tecnológico responsable.

        p(data-aos="fade-left") La innovación debe estar alineada con principios éticos que garanticen la equidad, la sostenibilidad y el respeto por los derechos humanos, mientras que la colaboración interdisciplinaria será clave para crear soluciones que beneficien a la sociedad en su conjunto.

      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/11.png", data-aos="zoom-in")

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.revistasice.com/index.php/CICE/article/download/6031/6031" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://natura.org.co/que-es-agricultura-sostenible-y-como-se-relaciona-con-el-monitoreo-climatico/" target="_blank" rel="noopener noreferrer") Natura, F. (2024, junio 6). ¿Qué es agricultura sostenible y cómo se relaciona con el monitoreo climático? Fundación Natura Colombia. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.revistaecosistemas.net/index.php/ecosistemas/article/view/614" target="_blank" rel="noopener noreferrer") Artaraz, M. (2002). Teoría de las tres dimensiones de desarrollo sostenible: . Ecosistemas, 11(2). 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/62332?page=170" target="_blank" rel="noopener noreferrer") Fernández García, R. (2013). La dimensión económica del desarrollo sostenible: ( ed.). ECU.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            //- Referencia sin enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span Cerdos criollos colombianos y agricultura sostenible. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/hlpTZbikazw?si=XGBJEV3L-9pTa-Gc" target="_blank" rel="noopener noreferrer") Empresas innovadoras.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/Kh5lpqxTw5M?si=NN1qB14TbGN9TxiU" target="_blank" rel="noopener noreferrer") Google, Microsoft y tesla, el verdadero rey de la inteligencia artificial.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.
              
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>
