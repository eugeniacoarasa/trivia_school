// ================= BANCO DE PREGUNTAS: 5to GRADO  =================
// Puedes añadir nuevas preguntas respetando la estructura.
// ================= RONDAS DE CIENCIAS NATURALES =================
// =================================================================

const bancoNaturales_5_Ronda1 = [
    {
        pregunta: "¿Qué porcentaje aproximado del agua de nuestro planeta es agua dulce apta para consumo?",
        opciones: ["97,5%", "50%", "2,5%"],
        respuestaCorrecta: 2,
        explicacion: "El 97,5% del agua del planeta es salada (océanos). Del 2,5% restante que es dulce, la gran mayoría está congelada en glaciares y polos.",
        tema: "Distribución del Agua"
    },
    {
        pregunta: "¿Cómo se llama la capa que abarca toda el agua del planeta en estado líquido, sólido y gaseoso?",
        opciones: ["La hidrosfera", "La geosfera", "La atmósfera"],
        respuestaCorrecta: 0,
        explicacion: "La hidrosfera comprende toda el agua del planeta, encontrándose en océanos, ríos, lagos, atmósfera y subsuelo.",
        tema: "La Hidrosfera"
    },
    {
        pregunta: "En el ciclo del agua, ¿qué proceso ocurre cuando el calor del Sol convierte el agua líquida en vapor?",
        opciones: ["La condensación", "La evaporación", "La precipitación"],
        respuestaCorrecta: 1,
        explicacion: "La evaporación se produce cuando el calor del Sol hace que el agua de los ríos y océanos pase a estado gaseoso e ingrese a la atmósfera.",
        tema: "El Ciclo del Agua"
    },
    {
        pregunta: "¿Qué nombre recibe una formación subterránea que almacena agua dulce en sedimentos o rocas permeables?",
        opciones: ["Un río subterráneo", "Un acuífero", "Un glaciar"],
        respuestaCorrecta: 1,
        explicacion: "Un acuífero es una formación geológica subterránea capaz de almacenar y filtrar agua dulce a través de sus poros o rocas permeables.",
        tema: "Aguas Subterráneas"
    },
    {
        pregunta: "Según el libro, ¿cuál de los siguientes ejemplos es considerado un grave problema de contaminación del agua en Argentina?",
        opciones: ["El río Matanza-Riachuelo", "Los esteros del Iberá", "El acuífero Guaraní"],
        respuestaCorrecta: 0,
        explicacion: "El río Matanza-Riachuelo es señalado en el libro como uno de los cuerpos de agua más contaminados debido a la actividad industrial y urbana.",
        tema: "Contaminación del Agua"
    }
];

const bancoNaturales_5_Ronda2 = [
    {
        pregunta: "¿Por qué brilla la Luna y qué características tienen sus zonas oscuras?",
        opciones: [
            "Brilla porque tiene luz propia y sus zonas oscuras son océanos de agua líquida.",
            "Brilla porque refleja la luz del Sol y sus zonas oscuras se denominan 'mares', que son llanuras o depresiones de lava solidificada.",
            "Brilla por combustión interna y sus zonas oscuras son grandes cráteres activos."
        ],
        respuestaCorrecta: 1,
        explicacion: "La Luna brilla al reflejar la luz del Sol y las zonas oscuras de su superficie son llamadas mares, formadas por llanuras o depresiones cubiertas de lava solidificada.",
        tema: "La Luna y sus Características"
    },
    {
        pregunta: "¿Cómo se describe el movimiento aparente diario de la Luna en el cielo?",
        opciones: [
            "Sale por el horizonte occidental y se pone por el oriental verticalmente.",
            "Sale por el horizonte oriental y se pone por el occidental, describiendo un arco inclinado hacia el norte.",
            "Permanece estática sobre el cenit del observador durante todo el día."
        ],
        respuestaCorrecta: 1,
        explicacion: "Al igual que otros astros, la Luna sale por el horizonte oriental y se pone por el occidental, describiendo un arco inclinado hacia el norte.",
        tema: "Movimiento de la Luna"
    },
    {
        pregunta: "¿Qué representa la 'esfera celeste' y qué es el 'cenit'?",
        opciones: [
            "Es un modelo físico de la Tierra y el cenit es el punto más profundo de un cráter lunar.",
            "Es un instrumento de medición de mareas y el cenit es la fase de luna llena.",
            "Es un modelo visual que representa el cielo como una cúpula que nos rodea, siendo el cenit el punto ubicado justo encima del observador."
        ],
        respuestaCorrecta: 2,
        explicacion: "La esfera celeste es un modelo visual que representa el cielo como una cúpula que nos rodea, y el cenit es el punto ubicado justo encima del observador.",
        tema: "La Esfera Celeste"
    },
    {
        pregunta: "¿Cómo se desplaza la Luna en días sucesivos al observarla a la misma hora?",
        opciones: [
            "Se desplaza de oeste a este aproximadamente 12° por día, retrasándose cerca de una hora cada día.",
            "Se desplaza de este a oeste exactamente 30° por día, adelantándose dos horas.",
            "No se desplaza, ya que siempre se mantiene en la misma posición fija."
        ],
        respuestaCorrecta: 0,
        explicacion: "En días sucesivos a la misma hora, la Luna se desplaza de oeste a este unos 12° diarios, lo que hace que se retrase cerca de una hora cada día.",
        tema: "Movimiento de la Luna"
    },
    {
        pregunta: "¿A qué corresponden las zonas más brillantes de la superficie lunar?",
        opciones: [
            "A llanuras formadas por sedimentos marinos y agua congelada.",
            "A zonas con cráteres, montañas y volcanes extintos.",
            "A grandes extensiones de lava brillante y líquida."
        ],
        respuestaCorrecta: 1,
        explicacion: "Las zonas más brillantes de la superficie de la Luna corresponden a zonas con cráteres, montañas y volcanes extintos.",
        tema: "Superficie Lunar"
    }
];

const bancoNaturales_5_Ronda3 = [
    {
        pregunta: "¿Cuánto dura aproximadamente el ciclo lunar completo?",
        opciones: [
            "Exactamente 28 días.",
            "29 días y medio.",
            "365 días."
        ],
        respuestaCorrecta: 1,
        explicacion: "El ciclo lunar completo dura aproximadamente 29 días y medio.",
        tema: "Las Fases de la Luna"
    },
    {
        pregunta: "¿En qué posición se encuentra la Luna durante la fase de 'Luna nueva'?",
        opciones: [
            "Entre la Tierra y el Sol, haciendo que el Sol ilumine la cara opuesta y no se vea desde la Tierra.",
            "Detrás de la Tierra, recibiendo toda la luz solar de manera directa.",
            "En un ángulo de 90 grados respecto al plano de la Tierra."
        ],
        respuestaCorrecta: 0,
        explicacion: "En la luna nueva, la Luna se encuentra entre la Tierra y el Sol, por lo que no se ve desde la Tierra porque el Sol ilumina la cara opuesta.",
        tema: "Las Fases de la Luna"
    },
    {
        pregunta: "¿Qué sucede durante un eclipse de Sol?",
        opciones: [
            "La Tierra se interpone entre el Sol y la Luna proyectando su sombra.",
            "La Luna se interpone entre el Sol y la Tierra, proyectando su sombra sobre una región terrestre.",
            "Un planeta errante bloquea la luz del Sol temporalmente."
        ],
        respuestaCorrecta: 1,
        explicacion: "El eclipse de Sol ocurre cuando la Luna se interpone entre el Sol y la Tierra, proyectando su sombra sobre una región terrestre.",
        tema: "Eclipses"
    },
    {
        pregunta: "¿Cómo se le llama a veces al eclipse total de Luna debido al tono rojizo que adquiere?",
        opciones: [
            "\"Luna de sangre\"",
            "\"Luna anular\"",
            "\"Luna penumbral\""
        ],
        respuestaCorrecta: 0,
        explicacion: "El eclipse total de Luna a veces es llamado \"luna de sangre\" por su tono rojizo.",
        tema: "Eclipses"
    },
    {
        pregunta: "¿En qué fase lunar ocurre el eclipse de Luna y cómo se produce?",
        opciones: [
            "Durante la luna nueva, cuando la Luna bloquea los rayos solares.",
            "Durante la fase de luna llena, cuando la Tierra se interpone entre el Sol y la Luna proyectando su sombra sobre esta última.",
            "Durante el cuarto creciente, cuando la Tierra y el Sol se alinean."
        ],
        respuestaCorrecta: 1,
        explicacion: "El eclipse de Luna ocurre cuando la Tierra se interpone entre el Sol y la Luna, proyectando su sombra sobre esta última durante la fase de luna llena.",
        tema: "Eclipses"
    }
];

const bancoNaturales_5_Ronda4 = [
    {
        pregunta: "¿Cuál es la diferencia clave entre las estrellas y los planetas según el texto?",
        opciones: [
            "Las estrellas titilan y forman constelaciones manteniendo sus distancias relativas, mientras que los planetas cambian de posición con un movimiento propio.",
            "Los planetas titilan intensamente y las estrellas tienen órbitas fijas sin movimiento.",
            "Las estrellas son cuerpos cercanos y los planetas se ubican fuera de la esfera celeste."
        ],
        respuestaCorrecta: 0,
        explicacion: "Las estrellas titilan y parecen moverse lentamente juntas formando constelaciones manteniendo sus distancias, mientras que los planetas cambian de posición respecto de las estrellas con un movimiento propio.",
        tema: "Los Cuerpos Celestes"
    },
    {
        pregunta: "¿Qué significa etimológicamente la palabra \"planeta\"?",
        opciones: [
            "\"Cuerpo luminoso\"",
            "\"Errante\"",
            "\"Cúpula celeste\""
        ],
        respuestaCorrecta: 1,
        explicacion: "La palabra \"planeta\" significa \"errante\" debido a su movimiento propio.",
        tema: "Los Planetas"
    },
    {
        pregunta: "¿Qué factor principal dificulta la observación estelar en ciudades como Buenos Aires?",
        opciones: [
            "La contaminación lumínica",
            "La constante presencia de eclipses lunares",
            "La baja altitud de la atmósfera terrestre"
        ],
        respuestaCorrecta: 0,
        explicacion: "En ciudades como Buenos Aires, la contaminación lumínica dificulta la observación estelar.",
        tema: "Observación Astronómica"
    },
    {
        pregunta: "¿Qué instituciones fomentan el estudio y la divulgación científica de la astronomía en Buenos Aires?",
        opciones: [
            "El Museo de Ciencias Naturales y la Universidad de Buenos Aires",
            "El Planetario Galileo Galilei y la Asociación Argentina Amigos de la Astronomía",
            "El Observatorio Astronómico de Córdoba y el CONICET"
        ],
        respuestaCorrecta: 1,
        explicacion: "Lugares como el Planetario Galileo Galilei y la Asociación Argentina Amigos de la Astronomía fomentan el estudio y divulgación científica.",
        tema: "Estudio de la Astronomía"
    },
    {
        pregunta: "¿Cuál de los siguientes cuerpos celestes es mencionado en el texto como un planeta que se puede ver a simple vista o con telescopio?",
        opciones: [
            "La Luna",
            "Saturno",
            "El Sol"
        ],
        respuestaCorrecta: 1,
        explicacion: "El texto menciona a Mercurio, Venus, Marte, Júpiter y Saturno como ejemplos de planetas visibles a simple vista o con telescopio.",
        tema: "Los Planetas"
    }
];

// -----------------------------------------------------------------
// CIENCIAS SOCIALES
// -----------------------------------------------------------------

const bancoSociales_5_Ronda1 = [
    {
        pregunta: "¿Qué dos posturas se enfrentaron en el seno de la Primera Junta respecto al ritmo de los cambios y la relación con España?",
        opciones: [
            "Cornelio Saavedra prefería avanzar de manera lenta y moderada, mientras que Mariano Moreno pretendía cambios profundos y terminar con el dominio español.",
            "Mariano Saavedra quería la monarquía y Cornelio Moreno quería una república federal.",
            "Todos los miembros acordaban unánimemente proclamar la independencia inmediata sin titubeos."
        ],
        respuestaCorrecta: 0,
        explicacion: "Las diferencias clave se reflejaron en la postura moderada de Saavedra frente a los deseos de cambios profundos de Moreno.",
        tema: "La Primera Junta"
    },
    {
        pregunta: "¿Cómo se originó la Junta Grande a fines de 1810?",
        opciones: [
            "Por la renuncia de todos los secretarios de la junta original.",
            "A partir de la incorporación de representantes de los cabildos provinciales enviada por comunicado de la Primera Junta.",
            "Mediante un golpe militar organizado por los criollos radicales de Buenos Aires."
        ],
        respuestaCorrecta: 1,
        explicacion: "La mayoría votó a favor de incorporar a los diputados enviados por los cabildos provinciales, formando así la Junta Grande.",
        tema: "Gobiernos Patrios"
    },
    {
        pregunta: "¿Qué instituciones gubernamentales reemplazaron a la Junta Grande entre 1811 y 1812?",
        opciones: [
            "El Primer Triunvirato en 1811 y el Segundo Triunvirato en 1812.",
            "El Directorio Supremo y el Congreso de Oriente.",
            "Una dictadura militar encabezada por Cornelio Saavedra."
        ],
        respuestaCorrecta: 0,
        explicacion: "Para concentrar las decisiones se creó el Primer Triunvirato en 1811 y, tras presiones políticas, el Segundo Triunvirato en 1812.",
        tema: "Gobiernos Patrios"
    },
    {
        pregunta: "¿Qué medidas importantes estableció la Asamblea del Año XIII a pesar de no declarar la independencia ni sancionar una constitución?",
        opciones: [
            "La abolición de la esclavitud total inmediata y el sufragio universal femenino.",
            "La libertad de prensa, la libertad de vientres, la eliminación del trabajo forzado para los pueblos originarios y el reconocimiento de los símbolos patrios.",
            "La instauración de la religión católica como única permitida y la prohibición de cultos extranjeros."
        ],
        respuestaCorrecta: 1,
        explicacion: "La Asamblea estableció derechos civiles fundamentales y oficializó los símbolos patrios.",
        tema: "La Asamblea del Año XIII"
    },
    {
        pregunta: "¿Qué consecuencia trajo el regreso de Fernando VII al trono de España en 1814?",
        opciones: [
            "Se propuso recobrar el dominio de sus colonias en América, lo que atemorizó a los revolucionarios.",
            "Firmó un tratado de paz definitivo con las Provincias Unidas.",
            "Decidió otorgar la autonomía total e independencia pacífica a todas las regiones americanas."
        ],
        respuestaCorrecta: 0,
        explicacion: "El rey español buscó recuperar sus colonias americanas, generando temor y urgencia en los independentistas.",
        tema: "La Restauración Española"
    }
];

const bancoSociales_5_Ronda2 = [
    {
        pregunta: "¿Por qué el Director Supremo convocó el congreso en la ciudad de Tucumán en 1816?",
        opciones: [
            "Para estar cerca de la protección del Ejército del Norte y alejarse de la influencia de la Liga de los Pueblos Libres.",
            "Porque Buenos Aires era una zona controlada por los realistas.",
            "Debido a que era la ciudad más poblada y desarrollada comercialmente del litoral."
        ],
        respuestaCorrecta: 0,
        explicacion: "Tucumán fue elegida por su ubicación estratégica para recibir protección militar y distanciarse de Artigas.",
        tema: "El Congreso de Tucumán"
    },
    {
        pregunta: "¿En qué fecha exacta se firmó la Declaración de Independencia de las Provincias Unidas de América del Sur?",
        opciones: [
            "El 25 de mayo de 1810.",
            "El 9 de julio de 1816.",
            "El 31 de enero de 1813."
        ],
        respuestaCorrecta: 1,
        explicacion: "El Congreso firmó el Acta de Independencia el 9 de julio de 1816 en Tucumán.",
        tema: "La Declaración de la Independencia"
    },
    {
        pregunta: "¿A qué idiomas fue traducida el Acta de Independencia además del español?",
        opciones: [
            "Al inglés y al portugués.",
            "Al quechua y al aimara.",
            "Al guaraní y al francés."
        ],
        respuestaCorrecta: 1,
        explicacion: "Para incorporar a los pueblos originarios, el acta oficial fue traducida al quechua y al aimara.",
        tema: "La Declaración de la Independencia"
    },
    {
        pregunta: "¿Qué formas de gobierno se debatieron durante el congreso de 1816?",
        opciones: [
            "La república basada en la división de poderes y la monarquía con un rey como máxima autoridad.",
            "El federalismo absoluto y el centralismo unitario exclusivamente.",
            "El parlamentarismo europeo y la democracia directa comunal."
        ],
        respuestaCorrecta: 0,
        explicacion: "Los congresales discutieron modelos republicanos y monárquicos, destacando la propuesta de Belgrano de un rey inca.",
        tema: "Formas de Gobierno"
    },
    {
        pregunta: "¿Quién propuso que la monarquía tuviera como máxima autoridad a un descendiente inca?",
        opciones: [
            "Manuel Belgrano.",
            "José de San Martín.",
            "Juan José Castelli."
        ],
        respuestaCorrecta: 0,
        explicacion: "Manuel Belgrano propuso ante el congreso una monarquía templada con un descendiente de los incas como soberano.",
        tema: "Propuesta Monárquica Incaica"
    }
];

const bancoSociales_5_Ronda3 = [
    {
        pregunta: "¿Qué medida tomó Manuel Belgrano al asumir el mando del Ejército del Norte frente al avance realista?",
        opciones: [
            "Ordenó el éxodo jujeño, haciendo que la población abandonara sus casas y dejara el territorio vacío.",
            "Firmó una rendición pacífica en la ciudad de Salta.",
            "Retrocedió directamente hasta la ciudad de Córdoba sin presentar combate."
        ],
        respuestaCorrecta: 0,
        explicacion: "Belgrano organizó el éxodo jujeño para no dejar recursos al enemigo antes de vencer en Tucumán y Salta.",
        tema: "Las Guerras de Independencia"
    },
    {
        pregunta: "¿En qué consistió fundamentalmente el plan libertador ideado por José de San Martín?",
        opciones: [
            "Liberar a Chile cruzando la cordillera de los Andes y luego atacar a Perú por mar.",
            "Avanzar directamente por el Alto Perú con el apoyo masivo de la flota portuguesa.",
            "Atacar simultáneamente Asunción y Montevideo mediante barcos blindados."
        ],
        respuestaCorrecta: 0,
        explicacion: "El plan sanmartiniano requirió cruzar los Andes para independizar Chile y abordar por mar el virreinato peruano.",
        tema: "El Plan Sanmartiniano"
    },
    {
        pregunta: "¿Cómo se llamó la táctica de resistencia liderada por Martín Miguel de Güemes en Salta?",
        opciones: [
            "Guerra de guerrillas urbanas.",
            "Guerra gaucha, caracterizada por ataques rápidos y sorpresivos realizados por gauchos y mujeres.",
            "Guerra de trincheras con artillería pesada europea."
        ],
        respuestaCorrecta: 1,
        explicacion: "La guerra gaucha de Güemes frenó el avance realista mediante ataques sorpresivos constantes.",
        tema: "La Guerra Gaucha"
    },
    {
        pregunta: "¿Qué rol cumplieron las mujeres durante las guerras de independencia?",
        opciones: [
            "Tuvieron participación activa manteniendo estancias, integrando milicias, realizando tareas de espionaje y combate, y donando dinero.",
            "Solo se dedicaron a la confección exclusiva de ropa civil para la élite de Buenos Aires.",
            "Permanecieron neutrales y recluidas en sus hogares por órdenes del cabildo."
        ],
        respuestaCorrecta: 0,
        explicacion: "Las mujeres fueron fundamentales en tareas de espionaje, milicias, administración de estancias y donaciones.",
        tema: "Las Mujeres en la Independencia"
    },
    {
        pregunta: "¿Quién fue María Remedios del Valle según los documentos históricos del texto?",
        opciones: [
            "Una afrodescendiente que luchó en las guerras y el éxodo jujeño, ascendida a Sargenta Mayor de Caballería y recordada como \"la madre de la patria\".",
            "Una dama patricia fundadora de la Logia Lautaro en Buenos Aires.",
            "La primera mujer en ocupar el cargo de Directora Suprema de las Provincias Unidas."
        ],
        respuestaCorrecta: 0,
        explicacion: "María Remedios del Valle destacó en combate y en el éxodo jujeño, siendo honrada como la madre de la patria.",
        tema: "Heroínas de la Patria"
    }
];

const bancoSociales_5_Ronda4 = [
    {
        pregunta: "¿Qué acontecimiento político y militar provocó la caída definitiva del Directorio con sede en Buenos Aires en febrero de 1820?",
        opciones: [
            "La Batalla de Cepeda, donde el ejército del Litoral derrotó a las fuerzas del Directorio.",
            "La firma del Tratado del Pilar y la invasión de Brasil a la Banda Oriental.",
            "La proclamación de la independencia de Córdoba y Cuyo."
        ],
        respuestaCorrecta: 0,
        explicacion: "La Batalla de Cepeda de 1820 selló la caída del poder central del Directorio ante las fuerzas litorales.",
        tema: "La Caída del Directorio"
    },
    {
        pregunta: "¿Qué implicó el surgimiento de las autonomías provinciales a partir de 1820?",
        opciones: [
            "Que las provincias comenzaron a gobernarse de manera totalmente autónoma, dictando sus propias leyes y organizando sus propios ejércitos.",
            "Que todas las provincias se unificaron bajo un poder central fuerte sin legislaturas locales.",
            "La pérdida total de soberanía territorial frente a potencias extranjeras."
        ],
        respuestaCorrecta: 0,
        explicacion: "Tras la caída del poder central, cada provincia asumió su propio gobierno, leyes y fuerzas militares.",
        tema: "Las Autonomías Provinciales"
    },
    {
        pregunta: "¿Qué objetivos cumplieron pactos interprovinciales como el Tratado del Pilar (1820) y el Tratado del Cuadrilátero (1822)?",
        opciones: [
            "Garantizar la defensa mutua y proyectar futuros congresos constituyentes.",
            "Establecer una monarquía centralizada con capital en Santa Fe.",
            "Unificar todas las aduanas provinciales bajo el control exclusivo de Entre Ríos."
        ],
        respuestaCorrecta: 0,
        explicacion: "Estos tratados sirvieron para articular la defensa conjunta y planificar la organización institucional futura.",
        tema: "Pactos Interprovinciales"
    },
    {
        pregunta: "¿Cuál era la principal diferencia política entre unitarios y federales en la década de 1820?",
        opciones: [
            "Los unitarios buscaban una organización centralista con amplias atribuciones sobre las provincias, mientras que los federales defendían las autonomías provinciales.",
            "Los unitarios defendían a los caudillos del interior y los federales apoyaban a Bernardino Rivadavia.",
            "Los unitarios querían abolir el libre comercio y los federales fomentar el monopolio español."
        ],
        respuestaCorrecta: 0,
        explicacion: "El centralismo unitario contrastaba con la defensa federal de las autonomías locales.",
        tema: "Unitarios y Federales"
    },
    {
        pregunta: "¿Qué colores identificaban visualmente a unitarios y federales respectivamente?",
        opciones: [
            "El color rojo para los unitarios y el color azul para los federales.",
            "El color azul para los unitarios y el color rojo (divisa punzó) para los federales.",
            "El color blanco para los unitarios y el color verde para los federales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Los unitarios se identificaban con el azul, mientras que los federales usaban el color rojo o divisa punzó.",
        tema: "Simbolología Política"
    }
];

const bancoSociales_5_Ronda5 = [
    {
        pregunta: "¿Qué medidas clave adoptó el congreso constituyente convocado en 1824 durante la presidencia de Bernardino Rivadavia?",
        opciones: [
            "La Ley Fundamental y la Ley de Capitalización, que designó a Buenos Aires como capital del país separándola de su provincia de origen.",
            "La disolución de los ejércitos provinciales y la sanción definitiva de una constitución federal.",
            "La entrega de la Patagonia a inversores británicos a cambio de empréstitos."
        ],
        respuestaCorrecta: 0,
        explicacion: "Rivadavia impulsó la Ley Fundamental y de Capitalización, separando políticamente a Buenos Aires.",
        tema: "La Presidencia de Rivadavia"
    },
    {
        pregunta: "¿Cuál fue la causa principal del inicio de la Guerra con Brasil (1825-1828)?",
        opciones: [
            "La necesidad de recuperar la Banda Oriental, que se encontraba ocupada por los portugueses y brasileños.",
            "Un conflicto aduanero por el libre comercio en el río Paraná.",
            "La disputa limítrofe por las salinas grandes en la provincia de Córdoba."
        ],
        respuestaCorrecta: 0,
        explicacion: "El conflicto bélico se originó por la meta de recuperar la Banda Oriental bajo dominio extranjero.",
        tema: "La Guerra con Brasil"
    },
    {
        pregunta: "¿Cómo concluyó el conflicto de la Guerra con Brasil tras la mediación de Gran Bretaña?",
        opciones: [
            "Con la anexión completa de la Banda Oriental al territorio de Buenos Aires.",
            "Con la constitución de la Banda Oriental como la República Oriental del Uruguay.",
            "Con la división del territorio oriental entre Brasil y la Confederación Argentina."
        ],
        respuestaCorrecta: 1,
        explicacion: "La mediación británica derivó en la independencia de la Banda Oriental como Uruguay.",
        tema: "La Guerra con Brasil"
    },
    {
        pregunta: "¿Qué provocó la renuncia de Bernardino Rivadavia en 1826?",
        opciones: [
            "El descontento generalizado generado por la sanción de la Constitución unitaria y la profundización del enfrentamiento interno.",
            "La victoria rotunda de las fuerzas federales en la Batalla de Caseros.",
            "Su nombramiento como embajador plenipotenciario en Londres."
        ],
        respuestaCorrecta: 0,
        explicacion: "La impopular Constitución unitaria de 1826 desató una crisis que precipitó la renuncia de Rivadavia.",
        tema: "La Crisis de 1826"
    },
    {
        pregunta: "¿Qué sectores sociales y políticos apoyaban principalmente al partido federal?",
        opciones: [
            "Estancieros, sectores populares y caudillos del interior.",
            "Sectores urbanos de Buenos Aires e intelectuales centralistas.",
            "Comerciantes monopolistas vinculados directamente a la Corona española."
        ],
        respuestaCorrecta: 0,
        explicacion: "El federalismo aglutinaba a estancieros, caudillos provinciales y clases populares.",
        tema: "El Partido Federal"
    }
];

const bancoSociales_5_Ronda6 = [
    {
        pregunta: "¿Qué importancia histórica tuvo la firma del Pacto Federal en 1831?",
        opciones: [
            "Consolidó una alianza defensiva y ofensiva entre Buenos Aires, Entre Ríos, Santa Fe y Corrientes, dando origen a la Confederación Argentina.",
            "Estableció de inmediato una constitución nacional centralizada y unificadora.",
            "Decretó la abolición de las autonomías provinciales de forma permanente."
        ],
        respuestaCorrecta: 0,
        explicacion: "El Pacto Federal sentó las bases de la Confederación Argentina mediante una sólida alianza provincial.",
        tema: "El Pacto Federal"
    },
    {
        pregunta: "¿Con qué atribuciones especiales asumió Juan Manuel de Rosas su primer gobierno (1829-1832)?",
        opciones: [
            "Con facultades extraordinarias para pacificar la provincia, debiendo enfrentar a la Liga del Interior liderada por Facundo Quiroga.",
            "Con la suma del poder público absoluto sobre todas las provincias del Litoral.",
            "Sin ningún tipo de poder especial, gobernando bajo una estricta constitución liberal."
        ],
        respuestaCorrecta: 0,
        explicacion: "Rosas asumió con facultades extraordinarias para pacificar el territorio y combatir a la Liga del Interior.",
        tema: "El Primer Gobierno de Rosas"
    },
    {
        pregunta: "¿Qué características tuvo el segundo gobierno de Rosas (1835-1852)?",
        opciones: [
            "Recibió la suma del poder público, ejerció un férreo control político, censuró la prensa y persiguió opositores a través de la Mazorca.",
            "Promovió la libre navegación de los ríos y redactó una constitución liberal inspirada en Juan Bautista Alberdi.",
            "Estableció un sistema democrático con sufragio universal secreto y obligatorio."
        ],
        respuestaCorrecta: 0,
        explicacion: "En su segundo mandato concentró la suma del poder público, controlando la prensa y persiguiendo opositores.",
        tema: "El Segundo Gobierno de Rosas"
    },
    {
        pregunta: "¿Qué significó el enfrentamiento en la Batalla de la Vuelta de Obligado (1845)?",
        opciones: [
            "Una heroica resistencia frente a las flotas anglofrancesas, recordada hoy como el Día de la Soberanía Nacional.",
            "La firma del Acuerdo de San Nicolás y la caída definitiva del régimen rosista.",
            "La declaración formal de independencia económica frente a Gran Bretaña."
        ],
        respuestaCorrecta: 0,
        explicacion: "La resistencia ante las potencias anglofrancesas se recuerda hoy como el Día de la Soberanía Nacional.",
        tema: "La Vuelta de Obligado"
    },
    {
        pregunta: "¿Qué consecuencias trajo la Batalla de Caseros en febrero de 1852 para la historia argentina?",
        opciones: [
            "Justo José de Urquiza derrotó a Juan Manuel de Rosas (quien partió al exilio), abriendo el camino para el Acuerdo de San Nicolás y la Constitución de 1853.",
            "Consolidó de manera definitiva el régimen centralista unitario en todo el territorio nacional.",
            "Provocó la división permanente de la provincia de Buenos Aires en dos repúblicas independientes."
        ],
        respuestaCorrecta: 0,
        explicacion: "La victoria de Urquiza en Caseros permitió derrocar a Rosas y habilitó la sanción de la Constitución de 1853.",
        tema: "La Batalla de Caseros"
    }
];

// -----------------------------------------------------------------
// VINCULACIÓN GLOBAL
// -----------------------------------------------------------------

window.bancoGrado = window.bancoGrado || {};
window.bancoGrado5 = {
    naturales: [
        bancoNaturales_5_Ronda1,
        bancoNaturales_5_Ronda2,
        bancoNaturales_5_Ronda3,
        bancoNaturales_5_Ronda4
    ],
    sociales: [
        bancoSociales_5_Ronda1,
        bancoSociales_5_Ronda2,
        bancoSociales_5_Ronda3,
        bancoSociales_5_Ronda4,
        bancoSociales_5_Ronda5,
        bancoSociales_5_Ronda6
    ]
};