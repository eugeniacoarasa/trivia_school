// ================= BANCO DE PREGUNTAS: CIENCIAS NATURALES =================
// Puedes añadir nuevas preguntas al final de esta lista respetando la estructura.
const bancoPreguntasNaturales = [
    {
        pregunta: "¿Qué porcentaje aproximado del agua de nuestro planeta es agua dulce apta para consumo?",
        opciones: ["97,5%", "50%", "2,5%"],
        respuestaCorrecta: 2,
        explicacion: "El 97,5% del agua del planeta es salada (océanos). Del 2,5% restante que es dulce, la gran mayoría está congelada en glaciares y polos."
    },
    {
        pregunta: "¿Cómo se llama la capa que abarca toda el agua del planeta en estado líquido, sólido y gaseoso?",
        opciones: ["La hidrosfera", "La geosfera", "La atmósfera"],
        respuestaCorrecta: 0,
        explicacion: "La hidrosfera comprende toda el agua del planeta, encontrándose en océanos, ríos, lagos, atmósfera y subsuelo."
    },
    {
        pregunta: "En el ciclo del agua, ¿qué proceso ocurre cuando el calor del Sol convierte el agua líquida en vapor?",
        opciones: ["La condensación", "La evaporación", "La precipitación"],
        respuestaCorrecta: 1,
        explicacion: "La evaporación se produce cuando el calor del Sol hace que el agua de los ríos y océanos pase a estado gaseoso e ingrese a la atmósfera."
    },
    {
        pregunta: "¿Qué nombre recibe una formación subterránea que almacena agua dulce en sedimentos o rocas permeables?",
        opciones: ["Un río subterráneo", "Un acuífero", "Un glaciar"],
        respuestaCorrecta: 1,
        explicacion: "Un acuífero es una formación geológica subterránea capaz de almacenar y filtrar agua dulce a través de sus poros o rocas permeables."
    },
    {
        pregunta: "Según el libro, ¿cuál de los siguientes ejemplos es considerado un grave problema de contaminación del agua en Argentina?",
        opciones: ["El río Matanza-Riachuelo", "Los esteros del Iberá", "El acuífero Guaraní"],
        respuestaCorrecta: 0,
        explicacion: "El río Matanza-Riachuelo es señalado en el libro como uno de los cuerpos de agua más contaminados debido a la actividad industrial y urbana."
    }
    // Para agregar una nueva pregunta de Naturales, añade una coma (,) arriba y pega aquí tu objeto:
    // {
    //     pregunta: "...",
    //     opciones: ["...", "...", "..."],
    //     respuestaCorrecta: 0,
    //     explicacion: "..."
    // }
];

// ================= BANCO DE PREGUNTAS: CIENCIAS SOCIALES (RONDAS) =================
const bancoPreguntasRonda1 = [
    {
        pregunta: "¿Qué dos posturas se enfrentaron en el seno de la Primera Junta respecto al ritmo de los cambios y la relación con España?",
        opciones: [
            "Cornelio Saavedra prefería avanzar de manera lenta y moderada, mientras que Mariano Moreno pretendía cambios profundos y terminar con el dominio español.",
            "Mariano Saavedra quería la monarquía y Cornelio Moreno quería una república federal.",
            "Todos los miembros acordaban unánimemente proclamar la independencia inmediata sin titubeos."
        ],
        respuestaCorrecta: 0,
        explicacion: "Las diferencias clave se reflejaron en la postura moderada de Saavedra frente a los deseos de cambios profundos de Moreno."
    },
    {
        pregunta: "¿Cómo se originó la Junta Grande a fines de 1810?",
        opciones: [
            "Por la renuncia de todos los secretarios de la junta original.",
            "A partir de la incorporación de representantes de los cabildos provinciales enviada por comunicado de la Primera Junta.",
            "Mediante un golpe militar organizado por los criollos radicales de Buenos Aires."
        ],
        respuestaCorrecta: 1,
        explicacion: "La mayoría votó a favor de incorporar a los diputados enviados por los cabildos provinciales, formando así la Junta Grande."
    },
    {
        pregunta: "¿Qué instituciones gubernamentales reemplazaron a la Junta Grande entre 1811 y 1812?",
        opciones: [
            "El Primer Triunvirato en 1811 y el Segundo Triunvirato en 1812.",
            "El Directorio Supremo y el Congreso de Oriente.",
            "Una dictadura militar encabezada por Cornelio Saavedra."
        ],
        respuestaCorrecta: 0,
        explicacion: "Para concentrar las decisiones se creó el Primer Triunvirato en 1811 y, tras presiones políticas, el Segundo Triunvirato en 1812."
    },
    {
        pregunta: "¿Qué medidas importantes estableció la Asamblea del Año XIII a pesar de no declarar la independencia ni sancionar una constitución?",
        opciones: [
            "La abolición de la esclavitud total inmediata y el sufragio universal femenino.",
            "La libertad de prensa, la libertad de vientres, la eliminación del trabajo forzado para los pueblos originarios y el reconocimiento de los símbolos patrios.",
            "La instauración de la religión católica como única permitida y la prohibición de cultos extranjeros."
        ],
        respuestaCorrecta: 1,
        explicacion: "La Asamblea estableció derechos civiles fundamentales y oficializó los símbolos patrios."
    },
    {
        pregunta: "¿Qué consecuencia trajo el regreso de Fernando VII al trono de España en 1814?",
        opciones: [
            "Se propuso recobrar el dominio de sus colonias en América, lo que atemorizó a los revolucionarios.",
            "Firmó un tratado de paz definitivo con las Provincias Unidas.",
            "Decidió otorgar la autonomía total e independencia pacífica a todas las regiones americanas."
        ],
        respuestaCorrecta: 0,
        explicacion: "El rey español buscó recuperar sus colonias americanas, generando temor y urgencia en los independentistas."
    }
];

const bancoPreguntasRonda2 = [
    {
        pregunta: "¿Por qué el Director Supremo convocó el congreso en la ciudad de Tucumán en 1816?",
        opciones: [
            "Para estar cerca de la protección del Ejército del Norte y alejarse de la influencia de la Liga de los Pueblos Libres.",
            "Porque Buenos Aires era una zona controlada por los realistas.",
            "Debido a que era la ciudad más poblada y desarrollada comercialmente del litoral."
        ],
        respuestaCorrecta: 0,
        explicacion: "Tucumán fue elegida por su ubicación estratégica para recibir protección militar y distanciarse de Artigas."
    },
    {
        pregunta: "¿En qué fecha exacta se firmó la Declaración de Independencia de las Provincias Unidas de América del Sur?",
        opciones: [
            "El 25 de mayo de 1810.",
            "El 9 de julio de 1816.",
            "El 31 de enero de 1813."
        ],
        respuestaCorrecta: 1,
        explicacion: "El Congreso firmó el Acta de Independencia el 9 de julio de 1816 en Tucumán."
    },
    {
        pregunta: "¿A qué idiomas fue traducida el Acta de Independencia además del español?",
        opciones: [
            "Al inglés y al portugués.",
            "Al quechua y al aimara.",
            "Al guaraní y al francés."
        ],
        respuestaCorrecta: 1,
        explicacion: "Para incorporar a los pueblos originarios, el acta oficial fue traducida al quechua y al aimara."
    },
    {
        pregunta: "¿Qué formas de gobierno se debatieron durante el congreso de 1816?",
        opciones: [
            "La república basada en la división de poderes y la monarquía con un rey como máxima autoridad.",
            "El federalismo absoluto y el centralismo unitario exclusivamente.",
            "El parlamentarismo europeo y la democracia directa comunal."
        ],
        respuestaCorrecta: 0,
        explicacion: "Los congresales discutieron modelos republicanos y monárquicos, destacando la propuesta de Belgrano de un rey inca."
    },
    {
        pregunta: "¿Quién propuso que la monarquía tuviera como máxima autoridad a un descendiente inca?",
        opciones: [
            "Manuel Belgrano.",
            "José de San Martín.",
            "Juan José Castelli."
        ],
        respuestaCorrecta: 0,
        explicacion: "Manuel Belgrano propuso ante el congreso una monarquía templada con un descendiente de los incas como soberano."
    }
];

const bancoPreguntasRonda3 = [
    {
        pregunta: "¿Qué medida tomó Manuel Belgrano al asumir el mando del Ejército del Norte frente al avance realista?",
        opciones: [
            "Ordenó el éxodo jujeño, haciendo que la población abandonara sus casas y dejara el territorio vacío.",
            "Firmó una rendición pacífica en la ciudad de Salta.",
            "Retrocedió directamente hasta la ciudad de Córdoba sin presentar combate."
        ],
        respuestaCorrecta: 0,
        explicacion: "Belgrano organizó el éxodo jujeño para no dejar recursos al enemigo antes de vencer en Tucumán y Salta."
    },
    {
        pregunta: "¿En qué consistió fundamentalmente el plan libertador ideado por José de San Martín?",
        opciones: [
            "Liberar a Chile cruzando la cordillera de los Andes y luego atacar a Perú por mar.",
            "Avanzar directamente por el Alto Perú con el apoyo masivo de la flota portuguesa.",
            "Atacar simultáneamente Asunción y Montevideo mediante barcos blindados."
        ],
        respuestaCorrecta: 0,
        explicacion: "El plan sanmartiniano requirió cruzar los Andes para independizar Chile y abordar por mar el virreinato peruano."
    },
    {
        pregunta: "¿Cómo se llamó la táctica de resistencia liderada por Martín Miguel de Güemes en Salta?",
        opciones: [
            "Guerra de guerrillas urbanas.",
            "Guerra gaucha, caracterizada por ataques rápidos y sorpresivos realizados por gauchos y mujeres.",
            "Guerra de trincheras con artillería pesada europea."
        ],
        respuestaCorrecta: 1,
        explicacion: "La guerra gaucha de Güemes frenó el avance realista mediante ataques sorpresivos constantes."
    },
    {
        pregunta: "¿Qué rol cumplieron las mujeres durante las guerras de independencia?",
        opciones: [
            "Tuvieron participación activa manteniendo estancias, integrando milicias, realizando tareas de espionaje y combate, y donando dinero.",
            "Solo se dedicaron a la confección exclusiva de ropa civil para la élite de Buenos Aires.",
            "Permanecieron neutrales y recluidas en sus hogares por órdenes del cabildo."
        ],
        respuestaCorrecta: 0,
        explicacion: "Las mujeres fueron fundamentales en tareas de espionaje, milicias, administración de estancias y donaciones."
    },
    {
        pregunta: "¿Quién fue María Remedios del Valle según los documentos históricos del texto?",
        opciones: [
            "Una afrodescendiente que luchó en las guerras y el éxodo jujeño, ascendida a Sargenta Mayor de Caballería y recordada como \"la madre de la patria\".",
            "Una dama patricia fundadora de la Logia Lautaro en Buenos Aires.",
            "La primera mujer en ocupar el cargo de Directora Suprema de las Provincias Unidas."
        ],
        respuestaCorrecta: 0,
        explicacion: "María Remedios del Valle destacó en combate y en el éxodo jujeño, siendo honrada como la madre de la patria."
    }
];

const bancoPreguntasRonda4 = [
    {
        pregunta: "¿Qué acontecimiento político y militar provocó la caída definitiva del Directorio con sede en Buenos Aires en febrero de 1820?",
        opciones: [
            "La Batalla de Cepeda, donde el ejército del Litoral derrotó a las fuerzas del Directorio.",
            "La firma del Tratado del Pilar y la invasión de Brasil a la Banda Oriental.",
            "La proclamación de la independencia de Córdoba y Cuyo."
        ],
        respuestaCorrecta: 0,
        explicacion: "La Batalla de Cepeda de 1820 selló la caída del poder central del Directorio ante las fuerzas litorales."
    },
    {
        pregunta: "¿Qué implicó el surgimiento de las autonomías provinciales a partir de 1820?",
        opciones: [
            "Que las provincias comenzaron a gobernarse de manera totalmente autónoma, dictando sus propias leyes y organizando sus propios ejércitos.",
            "Que todas las provincias se unificaron bajo un poder central fuerte sin legislaturas locales.",
            "La pérdida total de soberanía territorial frente a potencias extranjeras."
        ],
        respuestaCorrecta: 0,
        explicacion: "Tras la caída del poder central, cada provincia asumió su propio gobierno, leyes y fuerzas militares."
    },
    {
        pregunta: "¿Qué objetivos cumplieron pactos interprovinciales como el Tratado del Pilar (1820) y el Tratado del Cuadrilátero (1822)?",
        opciones: [
            "Garantizar la defensa mutua y proyectar futuros congresos constituyentes.",
            "Establecer una monarquía centralizada con capital en Santa Fe.",
            "Unificar todas las aduanas provinciales bajo el control exclusivo de Entre Ríos."
        ],
        respuestaCorrecta: 0,
        explicacion: "Estos tratados sirvieron para articular la defensa conjunta y planificar la organización institucional futura."
    },
    {
        pregunta: "¿Cuál era la principal diferencia política entre unitarios y federales en la década de 1820?",
        opciones: [
            "Los unitarios buscaban una organización centralista con amplias atribuciones sobre las provincias, mientras que los federales defendían las autonomías provinciales.",
            "Los unitarios defendían a los caudillos del interior y los federales apoyaban a Bernardino Rivadavia.",
            "Los unitarios querían abolir el libre comercio y los federales fomentar el monopolio español."
        ],
        respuestaCorrecta: 0,
        explicacion: "El centralismo unitario contrastaba con la defensa federal de las autonomías locales."
    },
    {
        pregunta: "¿Qué colores identificaban visualmente a unitarios y federales respectivamente?",
        opciones: [
            "El color rojo para los unitarios y el color azul para los federales.",
            "El color azul para los unitarios y el color rojo (divisa punzó) para los federales.",
            "El color blanco para los unitarios y el color verde para los federales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Los unitarios se identificaban con el azul, mientras que los federales usaban el color rojo o divisa punzó."
    }
];

const bancoPreguntasRonda5 = [
    {
        pregunta: "¿Qué medidas clave adoptó el congreso constituyente convocado en 1824 durante la presidencia de Bernardino Rivadavia?",
        opciones: [
            "La Ley Fundamental y la Ley de Capitalización, que designó a Buenos Aires como capital del país separándola de su provincia de origen.",
            "La disolución de los ejércitos provinciales y la sanción definitiva de una constitución federal.",
            "La entrega de la Patagonia a inversores británicos a cambio de empréstitos."
        ],
        respuestaCorrecta: 0,
        explicacion: "Rivadavia impulsó la Ley Fundamental y de Capitalización, separando políticamente a Buenos Aires."
    },
    {
        pregunta: "¿Cuál fue la causa principal del inicio de la Guerra con Brasil (1825-1828)?",
        opciones: [
            "La necesidad de recuperar la Banda Oriental, que se encontraba ocupada por los portugueses y brasileños.",
            "Un conflicto aduanero por el libre comercio en el río Paraná.",
            "La disputa limítrofe por las salinas grandes en la provincia de Córdoba."
        ],
        respuestaCorrecta: 0,
        explicacion: "El conflicto bélico se originó por la meta de recuperar la Banda Oriental bajo dominio extranjero."
    },
    {
        pregunta: "¿Cómo concluyó el conflicto de la Guerra con Brasil tras la mediación de Gran Bretaña?",
        opciones: [
            "Con la anexión completa de la Banda Oriental al territorio de Buenos Aires.",
            "Con la constitución de la Banda Oriental como la República Oriental del Uruguay.",
            "Con la división del territorio oriental entre Brasil y la Confederación Argentina."
        ],
        respuestaCorrecta: 1,
        explicacion: "La mediación británica derivó en la independencia de la Banda Oriental como Uruguay."
    },
    {
        pregunta: "¿Qué provocó la renuncia de Bernardino Rivadavia en 1826?",
        opciones: [
            "El descontento generalizado generado por la sanción de la Constitución unitaria y la profundización del enfrentamiento interno.",
            "La victoria rotunda de las fuerzas federales en la Batalla de Caseros.",
            "Su nombramiento como embajador plenipotenciario en Londres."
        ],
        respuestaCorrecta: 0,
        explicacion: "La impopular Constitución unitaria de 1826 desató una crisis que precipitó la renuncia de Rivadavia."
    },
    {
        pregunta: "¿Qué sectores sociales y políticos apoyaban principalmente al partido federal?",
        opciones: [
            "Estancieros, sectores populares y caudillos del interior.",
            "Sectores urbanos de Buenos Aires e intelectuales centralistas.",
            "Comerciantes monopolistas vinculados directamente a la Corona española."
        ],
        respuestaCorrecta: 0,
        explicacion: "El federalismo aglutinaba a estancieros, caudillos provinciales y clases populares."
    }
];

const bancoPreguntasRonda6 = [
    {
        pregunta: "¿Qué importancia histórica tuvo la firma del Pacto Federal en 1831?",
        opciones: [
            "Consolidó una alianza defensiva y ofensiva entre Buenos Aires, Entre Ríos, Santa Fe y Corrientes, dando origen a la Confederación Argentina.",
            "Estableció de inmediato una constitución nacional centralizada y unificadora.",
            "Decretó la abolición de las autonomías provinciales de forma permanente."
        ],
        respuestaCorrecta: 0,
        explicacion: "El Pacto Federal sentó las bases de la Confederación Argentina mediante una sólida alianza provincial."
    },
    {
        pregunta: "¿Con qué atribuciones especiales asumió Juan Manuel de Rosas su primer gobierno (1829-1832)?",
        opciones: [
            "Con facultades extraordinarias para pacificar la provincia, debiendo enfrentar a la Liga del Interior liderada por Facundo Quiroga.",
            "Con la suma del poder público absoluto sobre todas las provincias del Litoral.",
            "Sin ningún tipo de poder especial, gobernando bajo una estricta constitución liberal."
        ],
        respuestaCorrecta: 0,
        explicacion: "Rosas asumió con facultades extraordinarias para pacificar el territorio y combatir a la Liga del Interior."
    },
    {
        pregunta: "¿Qué características tuvo el segundo gobierno de Rosas (1835-1852)?",
        opciones: [
            "Recibió la suma del poder público, ejerció un férreo control político, censuró la prensa y persiguió opositores a través de la Mazorca.",
            "Promovió la libre navegación de los ríos y redactó una constitución liberal inspirada en Juan Bautista Alberdi.",
            "Estableció un sistema democrático con sufragio universal secreto y obligatorio."
        ],
        respuestaCorrecta: 0,
        explicacion: "En su segundo mandato concentró la suma del poder público, controlando la prensa y persiguiendo opositores."
    },
    {
        pregunta: "¿Qué significó el enfrentamiento en la Batalla de la Vuelta de Obligado (1845)?",
        opciones: [
            "Una heroica resistencia frente a las flotas anglofrancesas, recordada hoy como el Día de la Soberanía Nacional.",
            "La firma del Acuerdo de San Nicolás y la caída definitiva del régimen rosista.",
            "La declaración formal de independencia económica frente a Gran Bretaña."
        ],
        respuestaCorrecta: 0,
        explicacion: "La resistencia ante las potencias anglofrancesas se recuerda hoy como el Día de la Soberanía Nacional."
    },
    {
        pregunta: "¿Qué consecuencias trajo la Batalla de Caseros en febrero de 1852 para la historia argentina?",
        opciones: [
            "Justo José de Urquiza derrotó a Juan Manuel de Rosas (quien partió al exilio), abriendo el camino para el Acuerdo de San Nicolás y la Constitución de 1853.",
            "Consolidó de manera definitiva el régimen centralista unitario en todo el territorio nacional.",
            "Provocó la división permanente de la provincia de Buenos Aires en dos repúblicas independientes."
        ],
        respuestaCorrecta: 0,
        explicacion: "La victoria de Urquiza en Caseros permitió derrocar a Rosas y habilitó la sanción de la Constitución de 1853."
    }
];

// ⚠️ ESTA LÍNEA ES LA QUE FALTABA: Unifica todas las rondas de sociales para que el script las lea.
const bancoPreguntasSociales = [
    ...bancoPreguntasRonda1,
    ...bancoPreguntasRonda2,
    ...bancoPreguntasRonda3,
    ...bancoPreguntasRonda4,
    ...bancoPreguntasRonda5,
    ...bancoPreguntasRonda6
];