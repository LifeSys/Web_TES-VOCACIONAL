(function(){

  var CLUSTERS = {
    ING:{ name:"Ingeniería y Tecnología", icon:"ing",
      blurb:"Construir, programar y optimizar el mundo físico y digital.",
      careers:["Ingeniería Civil","Ingeniería Industrial","Ingeniería Mecánica","Ingeniería Eléctrica","Ingeniería Electrónica","Ingeniería en Sistemas / Informática","Ingeniería de Software","Ingeniería Mecatrónica","Ingeniería en Robótica","Ingeniería en Telecomunicaciones","Ingeniería Química","Ingeniería Ambiental","Ingeniería Aeronáutica / Aeroespacial","Ingeniería Naval","Ingeniería de Minas","Ingeniería del Petróleo","Ingeniería Biomédica","Ingeniería Nuclear","Ingeniería Textil","Ingeniería Geológica"],
      short:["Técnico en Electrónica","Técnico en Electromecánica","Técnico Mecánico","Técnico en Mecánica Automotriz","Técnico en Instalaciones Eléctricas","Técnico en Refrigeración y Climatización","Técnico en Soldadura Industrial","Técnico en Programación / Desarrollo de Software","Analista de Sistemas","Técnico en Redes y Telecomunicaciones","Técnico en Mantenimiento Industrial","Técnico en Higiene y Seguridad en el Trabajo","Técnico en Energías Renovables","Técnico en Automatización y Control (PLC)","Técnico Superior en Construcciones","Operador en Mecanizado CNC"]},
    CEN:{ name:"Ciencias Exactas y Naturales", icon:"cen",
      blurb:"Investigar, medir y explicar cómo funciona el universo.",
      careers:["Matemática","Física","Química","Biología","Bioquímica","Astronomía / Astrofísica","Estadística","Geología","Ciencias Ambientales","Biotecnología / Genética","Ciencias de la Computación"],
      short:["Técnico en Laboratorio de Análisis Químico y Biológico","Técnico en Análisis Ambiental","Técnico en Meteorología","Técnico en Estadística Aplicada","Técnico en Geociencias","Técnico en Biotecnología","Analista de Datos","Técnico Químico"]},
    SAL:{ name:"Ciencias de la Salud", icon:"sal",
      blurb:"Cuidar el cuerpo y el bienestar de las personas.",
      careers:["Medicina","Enfermería","Odontología","Psicología","Farmacia","Nutrición y Dietética","Kinesiología / Fisioterapia","Medicina Veterinaria","Fonoaudiología","Obstetricia","Tecnología Médica","Terapia Ocupacional","Optometría","Radiología / Imagenología","Salud Pública"],
      short:["Técnico en Enfermería","Técnico en Emergencias Médicas (Paramédico)","Técnico en Radiología","Técnico en Laboratorio Clínico","Técnico en Farmacia","Técnico en Óptica y Contactología","Técnico en Estética y Cosmetología","Técnico en Prótesis Dental","Auxiliar en Odontología","Masoterapeuta","Técnico en Cuidado de Adultos Mayores","Técnico en Instrumentación Quirúrgica"]},
    SOC:{ name:"Ciencias Sociales, Humanidades y Derecho", icon:"soc",
      blurb:"Entender, argumentar y ordenar la vida en sociedad.",
      careers:["Derecho","Sociología","Antropología","Filosofía","Historia","Ciencias Políticas","Relaciones Internacionales","Trabajo Social","Educación / Pedagogía","Teología","Lingüística","Criminología","Arqueología","Bibliotecología"],
      short:["Técnico en Gestión Judicial","Técnico en Mediación y Resolución de Conflictos","Técnico en Acompañamiento Terapéutico","Técnico en Gestión Cultural","Técnico en Gestión Pública","Técnico en Archivología","Intérprete de Lengua de Señas","Técnico en Ceremonial y Protocolo"]},
    ECO:{ name:"Economía, Administración y Negocios", icon:"eco",
      blurb:"Organizar recursos, liderar equipos y hacer crecer proyectos.",
      careers:["Administración de Empresas","Economía","Contaduría / Auditoría","Finanzas","Marketing","Negocios Internacionales / Comercio Exterior","Recursos Humanos","Logística y Cadena de Suministro","Banca y Seguros","Actuaría","Emprendimiento y Negocios Digitales"],
      short:["Técnico en Administración de Empresas","Técnico en Gestión de Recursos Humanos","Técnico en Comercio Exterior","Martillero y Corredor Público","Técnico en Marketing y Ventas","Técnico en Contabilidad","Técnico en Logística","Técnico en Gestión de Pymes","Corredor Inmobiliario","Técnico en Seguros","Técnico en Comercio Electrónico"]},
    ART:{ name:"Artes, Diseño y Arquitectura", icon:"art",
      blurb:"Darle forma visual y espacial a una idea.",
      careers:["Arquitectura","Diseño Gráfico","Diseño Industrial","Diseño de Interiores","Diseño de Modas","Bellas Artes","Música","Cine y Artes Audiovisuales","Teatro y Artes Escénicas","Danza","Fotografía","Animación Digital"],
      short:["Técnico en Diseño Gráfico","Técnico en Diseño de Interiores","Técnico en Diseño de Indumentaria","Técnico en Ilustración","Técnico en Animación 2D/3D","Técnico en Producción Musical","Técnico en Maquillaje Artístico","Técnico en Escenografía","Técnico en Fotografía","Técnico en Postproducción Audiovisual","Técnico en Diseño Web / UX-UI","Técnico en Cerámica y Artesanías"]},
    COM:{ name:"Comunicación y Letras", icon:"com",
      blurb:"Contar, escribir y traducir ideas para que lleguen a otros.",
      careers:["Comunicación Social","Periodismo","Publicidad","Letras / Literatura","Traducción e Interpretación","Relaciones Públicas","Producción Multimedia","Marketing Digital / Community Management"],
      short:["Técnico en Producción Periodística","Locutor Nacional","Técnico en Community Management","Técnico en Producción Radial y Televisiva","Corrector de Estilo","Técnico en Guion para Cine y TV","Técnico en Contenidos Digitales","Técnico en Doblaje"]},
    AGR:{ name:"Ciencias Agropecuarias y Ambientales", icon:"agr",
      blurb:"Trabajar la tierra, los animales y los ecosistemas.",
      careers:["Ingeniería Agronómica","Zootecnia","Ingeniería Forestal","Ingeniería Ambiental Agropecuaria","Acuicultura y Pesquería","Medicina Veterinaria y Zootecnia","Agroindustria","Ingeniería en Alimentos"],
      short:["Técnico Agropecuario","Técnico en Producción Agropecuaria","Técnico en Jardinería y Paisajismo","Técnico en Viveros","Técnico en Apicultura","Técnico Forestal","Técnico en Piscicultura","Técnico en Manejo de Fauna Silvestre","Técnico en Gestión Ambiental","Técnico en Riego y Manejo de Agua"]},
    DEP:{ name:"Deporte y Actividad Física", icon:"dep",
      blurb:"Entrenar, competir y mejorar el rendimiento del cuerpo.",
      careers:["Educación Física","Ciencias del Deporte","Entrenamiento Deportivo","Kinesiología Deportiva","Gestión y Administración Deportiva"],
      short:["Técnico en Actividades Físicas y Deportivas","Instructor de Educación Física","Entrenador Personal","Instructor de Yoga y Pilates","Guardavidas","Instructor de Natación","Técnico en Gestión de Instalaciones Deportivas","Preparador Físico"]},
    SEG:{ name:"Seguridad, Defensa y Servicio Público", icon:"seg",
      blurb:"Proteger personas y sostener el orden bajo presión.",
      careers:["Carrera Militar (Ejército, Marina, Fuerza Aérea)","Carrera Policial","Seguridad y Defensa","Ciencias Náuticas","Piloto de Aviación Comercial","Bomberos / Gestión de Emergencias","Gestión de Riesgos y Desastres"],
      short:["Técnico Superior en Seguridad Pública","Suboficial de las Fuerzas Armadas","Suboficial de Policía","Técnico en Bomberos","Técnico en Emergencias y Catástrofes","Guardia de Seguridad Privada","Técnico en Defensa Civil","Técnico en Manejo de Materiales Peligrosos","Marinero Mercante"]},
    GAS:{ name:"Gastronomía, Turismo y Hotelería", icon:"gas",
      blurb:"Crear experiencias de sabor, viaje y hospitalidad.",
      careers:["Gastronomía y Artes Culinarias","Panadería y Pastelería","Administración Hotelera","Turismo","Enología","Guía de Turismo"],
      short:["Técnico en Gastronomía","Cocinero Profesional","Técnico en Panadería y Pastelería","Bartender Profesional","Sommelier","Técnico en Administración Hotelera","Técnico en Organización de Eventos","Auxiliar de Cabina (Aeronavegante)","Técnico en Agencias de Viajes"]}
  };

  var CLUSTER_ORDER = ["ING","CEN","SAL","SOC","ECO","ART","COM","AGR","DEP","SEG","GAS"];

  var QUESTIONS = [
  {t:"Es sábado y no tenés nada planeado. ¿Cuál de estas tareas elegirías para pasar la tarde?", o:[
    ["ING","Desarmar un aparato roto para entender por qué falló."],
    ["CEN","Investigar la causa exacta detrás de un fenómeno que te llamó la atención."],
    ["SAL","Quedarte a cuidar a alguien de tu familia hasta que se sienta mejor."],
    ["SOC","Armar el argumento más sólido para defender una postura en la que creés."],
    ["ECO","Armar un plan y un presupuesto para un proyecto propio."]]},
  {t:"Te ofrecen sumarte a un proyecto grupal del colegio. ¿Qué rol pedirías?", o:[
    ["ART","Bocetar cómo se vería el proyecto antes de que exista."],
    ["COM","Encargarte de contar la idea de forma que todos quieran sumarse."],
    ["AGR","Encargarte de la parte que se hace al aire libre, con plantas o animales."],
    ["DEP","Encargarte de la parte física o del entrenamiento del equipo."],
    ["SEG","Encargarte de que todo salga según el protocolo, sin improvisar."]]},
  {t:"Ganaste una tarde libre para hacer lo que quieras en tu ciudad. ¿Qué elegirías?", o:[
    ["GAS","Ir a probar algo nuevo para comer y anotar mentalmente la receta."],
    ["ING","Visitar una obra o un taller para ver cómo se construye algo."],
    ["CEN","Anotar datos de algo curioso hasta encontrarle un patrón."],
    ["SAL","Acompañar a alguien que necesita ayuda en ese momento."],
    ["SOC","Ir a un debate, juicio abierto o charla sobre un tema social."]]},
  {t:"Un amigo te pide ayuda con algo urgente. ¿Qué tipo de ayuda te sale más natural dar?", o:[
    ["ECO","Negociar en su nombre hasta conseguirle el mejor trato."],
    ["ART","Convertir su idea confusa en algo visual que se entienda."],
    ["COM","Escribirle el mensaje exacto que necesita mandar."],
    ["AGR","Resolver un problema práctico relacionado con plantas, animales o el aire libre."],
    ["DEP","Armarle una rutina para que llegue mejor a lo que se viene."]]},
  {t:"Si tuvieras que armar un stand para la feria de talentos del colegio, ¿de qué trataría?", o:[
    ["SEG","De simulacros de emergencia y primeros pasos ante un riesgo."],
    ["GAS","De algo que la gente pueda probar y llevarse hecho por vos."],
    ["ING","De un mecanismo o programa que armaste vos mismo."],
    ["CEN","De un experimento que la gente pueda ver funcionando."],
    ["SAL","De cómo cuidar el cuerpo o reconocer una emergencia médica."]]},
  {t:"En un campamento con desconocidos, ¿qué tarea del grupo terminarías haciendo vos?", o:[
    ["SOC","Mediar cuando dos personas no se ponen de acuerdo."],
    ["ECO","Organizar al grupo y repartir tareas para que todo funcione."],
    ["ART","Elegir cómo se ve y se siente el campamento armado."],
    ["COM","Contar después cómo fue el día de forma que dé ganas de escuchar."],
    ["AGR","Encargarte del fuego, la comida cruda o el entorno natural."]]},
  {t:"Te dan una beca de verano para probar un oficio real por un mes. ¿Cuál elegirías?", o:[
    ["DEP","Ayudante de un entrenador o preparador físico."],
    ["SEG","Pasante en un cuerpo de bomberos, defensa civil o similar."],
    ["GAS","Ayudante de cocina en un restaurante."],
    ["ING","Pasante en un taller de mecánica, obra o estudio de software."],
    ["CEN","Ayudante en un laboratorio de investigación."]]},
  {t:"Si tuvieras tu propio canal o cuenta para compartir contenido, ¿sobre qué sería?", o:[
    ["SAL","Bienestar, salud o cómo cuidar el cuerpo y la mente."],
    ["SOC","Análisis de noticias, historia o temas de actualidad."],
    ["ECO","Finanzas personales, negocios o emprendimientos."],
    ["ART","Diseño, arte o arquitectura que te inspira."],
    ["COM","Historias, entrevistas o guiones que escribís vos."]]},
  {t:"Frente a un imprevisto (no grave), ¿qué es lo primero que harías?", o:[
    ["AGR","Revisar si el ambiente o el clima tuvo algo que ver."],
    ["DEP","Reaccionar rápido con el cuerpo antes de pensarlo demasiado."],
    ["SEG","Tomar el control de la situación hasta que todo esté bajo control."],
    ["GAS","Improvisar una solución con lo que tenés a mano."],
    ["ING","Analizar qué falló en el sistema para que no vuelva a pasar."]]},
  {t:"Si pudieras resolver un solo problema de tu barrio este año, ¿cuál sería tu enfoque?", o:[
    ["CEN","Medir el problema con datos antes de proponer nada."],
    ["SAL","Enfocarte en cómo afecta la salud de la gente."],
    ["SOC","Enfocarte en la injusticia o la norma que lo permite."],
    ["ECO","Enfocarte en el costo y en cómo financiar la solución."],
    ["ART","Enfocarte en cómo rediseñar el espacio para que mejore."]]},
  {t:"De todas estas tareas, ¿cuál te haría perder la noción del tiempo?", o:[
    ["COM","Editar un texto hasta que cada palabra sirva."],
    ["AGR","Cuidar un cultivo o un animal hasta verlo crecer sano."],
    ["DEP","Entrenar hasta superar tu propio récord."],
    ["SEG","Entrenar un protocolo hasta poder hacerlo sin pensar."],
    ["GAS","Ajustar una receta hasta que quede exactamente como querías."]]},
  {t:"Un familiar te pide consejo sobre un problema real. ¿Qué tipo de consejo te sale mejor dar?", o:[
    ["ING","Un consejo técnico, paso a paso, sobre cómo arreglarlo."],
    ["CEN","Un consejo basado en revisar los datos con calma."],
    ["SAL","Un consejo pensando primero en su bienestar físico o emocional."],
    ["SOC","Un consejo pensando en lo que es justo, más allá de lo fácil."],
    ["ECO","Un consejo pensando en el costo y el beneficio real."]]},
  {t:"Si te dieran un taller extracurricular gratis, ¿a cuál te anotarías?", o:[
    ["ART","Dibujo, diseño o un taller de artes visuales."],
    ["COM","Escritura creativa, radio o producción audiovisual."],
    ["AGR","Huerta urbana o cuidado de animales."],
    ["DEP","Preparación física o un deporte que no conocés."],
    ["SEG","Defensa personal, primeros auxilios o rescate."]]},
  {t:"En un viaje largo en auto con amigos, ¿de qué te encargarías sin que nadie te lo pida?", o:[
    ["SAL","De que todos lleven lo necesario por si alguien se enferma."],
    ["SOC","De resolver la discusión cuando dos no se ponen de acuerdo con el plan."],
    ["ECO","De calcular gastos y repartir bien la plata del viaje."],
    ["ART","De que las fotos y el recuerdo del viaje queden bien armados."],
    ["COM","De contar después la aventura de forma que todos se rían."]]},
  {t:"Si pudieras inventar algo este año, ¿en qué dirección iría tu invento?", o:[
    ["AGR","Algo que ayude a producir alimento de forma más sostenible."],
    ["DEP","Algo que ayude a entrenar o medir el rendimiento físico."],
    ["SEG","Algo que ayude a reaccionar más rápido ante una emergencia."],
    ["GAS","Algo relacionado con la comida o la forma de servirla."],
    ["ING","Una máquina o un programa que resuelva algo que te molesta."]]},
  {t:"¿Qué actividad de voluntariado elegirías si tuvieras que elegir una?", o:[
    ["CEN","Divulgar ciencia a chicos más chicos que vos."],
    ["SAL","Acompañar pacientes o adultos mayores."],
    ["SOC","Dar apoyo legal o social a quien lo necesita."],
    ["ECO","Ayudar a un emprendimiento comunitario a organizarse."],
    ["ART","Pintar un mural o embellecer un espacio público."]]},
  {t:"Si organizaras un evento para juntar fondos, ¿qué parte armarías vos?", o:[
    ["COM","La campaña: el mensaje que convence a la gente de sumarse."],
    ["AGR","El puesto de comida hecha con ingredientes propios o donados."],
    ["DEP","La parte deportiva: una carrera, torneo o desafío físico."],
    ["SEG","La logística de seguridad y evacuación del evento."],
    ["GAS","El menú completo, pensado para sorprender a los invitados."]]},
  {t:"¿Qué te daría más satisfacción lograr, aunque nadie más lo note?", o:[
    ["ING","Que el mecanismo que armaste funcione a la primera."],
    ["CEN","Haber entendido algo que antes te parecía imposible."],
    ["SAL","Que alguien se sienta mejor gracias a lo que hiciste."],
    ["SOC","Haber cambiado la opinión de alguien con un buen argumento."],
    ["ECO","Que las cuentas de un proyecto cierren perfecto."]]},
  {t:"Si tu colegio te pidiera representar a un área en una feria vocacional, ¿cuál elegirías mostrar?", o:[
    ["ART","Un proyecto de diseño, arte o arquitectura hecho por vos."],
    ["COM","Una nota, un guion o un video que hayas producido."],
    ["AGR","Un cultivo o proyecto ambiental que hayas seguido de cerca."],
    ["DEP","Un logro deportivo o un plan de entrenamiento propio."],
    ["SEG","Una simulación de rescate o de protocolo de emergencia."]]},
  {t:"Frente a un problema difícil de resolver, ¿cuál es tu primer instinto?", o:[
    ["CEN","Descomponerlo en partes y calcular cada una."],
    ["SAL","Preguntarte primero cómo afecta a las personas involucradas."],
    ["SOC","Preguntarte quién tiene razón y por qué."],
    ["ECO","Preguntarte cuánto cuesta resolverlo y quién lo paga."],
    ["ART","Imaginar cómo se vería la solución antes de buscarla."]]},
  {t:"Si pudieras elegir tu primer trabajo de verano ideal, ¿de qué sería?", o:[
    ["COM","Redactor o community manager de una marca chica."],
    ["AGR","Ayudante en un vivero, campo o refugio de animales."],
    ["DEP","Ayudante en un club o gimnasio."],
    ["SEG","Guardavidas o asistente en seguridad de un evento."],
    ["ING","Pasante técnico en una empresa de tecnología o construcción."]]},
  {t:"¿Qué tipo de reto te daría más orgullo superar antes de los 20 años?", o:[
    ["CEN","Entender a fondo un tema científico complejo."],
    ["SAL","Ayudar de verdad a alguien que lo necesitaba."],
    ["SOC","Defender una causa hasta lograr un cambio real."],
    ["ECO","Sacar adelante un proyecto o negocio propio."],
    ["GAS","Crear una receta o experiencia que la gente recuerde."]]}
  ];

  // sanity: build per-cluster counters (not required at runtime, just data)

  var state = { idx:0, answers:new Array(QUESTIONS.length).fill(null) };
  var lastResults = null;

  var $ = function(id){ return document.getElementById(id); };

  $("startBtn").addEventListener("click", function(){
    $("screen-cover").hidden = true;
    $("screen-quiz").hidden = false;
    $("qTotal").textContent = QUESTIONS.length;
    renderQuestion();
  });

  function renderQuestion(){
    var i = state.idx;
    var q = QUESTIONS[i];
    $("qIndex").textContent = String(i+1).padStart(2,"0");
    $("qLabel").textContent = "SITUACIÓN " + String(i+1).padStart(2,"0");
    $("qText").textContent = q.t;

    var pct = (i/(QUESTIONS.length-1))*100;
    $("trackFill").style.width = (i/(QUESTIONS.length))*100 + "%";
    $("trackMark").style.left = (i/(QUESTIONS.length-1))*100 + "%";
    var bearing = Math.round((i/(QUESTIONS.length-1))*359);
    $("qBearing").textContent = "RUMBO " + String(bearing).padStart(3,"0") + "°";
    $("topBearing").textContent = "RUMBO " + String(bearing).padStart(3,"0") + "°";

    var list = $("qOptions");
    list.innerHTML = "";
    q.o.forEach(function(opt, oi){
      var li = document.createElement("li");
      li.className = "opt";
      var checked = state.answers[i] === oi ? "checked" : "";
      li.innerHTML =
        '<label>' +
          '<input type="radio" name="q'+i+'" value="'+oi+'" '+checked+'>' +
          '<span class="bullet"></span>' +
          '<span>'+opt[1]+'</span>' +
        '</label>';
      list.appendChild(li);
      li.querySelector("input").addEventListener("change", function(){
        state.answers[i] = oi;
        $("nextBtn").disabled = false;
        $("nextBtn").textContent = (i === QUESTIONS.length-1) ? "Ver mis resultados →" : "Siguiente →";
      });
    });

    $("nextBtn").disabled = state.answers[i] === null;
    $("nextBtn").textContent = (i === QUESTIONS.length-1) ? "Ver mis resultados →" : "Siguiente →";
    $("prevBtn").disabled = i === 0;
  }

  $("nextBtn").addEventListener("click", function(){
    if(state.answers[state.idx] === null) return;
    if(state.idx === QUESTIONS.length-1){
      finish();
    } else {
      state.idx++;
      renderQuestion();
    }
  });
  $("prevBtn").addEventListener("click", function(){
    if(state.idx === 0) return;
    state.idx--;
    renderQuestion();
  });

  function computeScores(){
    var scores = {};
    CLUSTER_ORDER.forEach(function(k){ scores[k] = 0; });
    state.answers.forEach(function(ans, i){
      if(ans === null) return;
      var k = QUESTIONS[i].o[ans][0];
      scores[k] += 1;
    });
    return scores;
  }

  function finish(){
    var scores = computeScores();
    var maxPossible = 10; // each cluster appears in exactly 10 questions
    var ranked = CLUSTER_ORDER.map(function(k){
      return { key:k, score:scores[k], pct: Math.round((scores[k]/maxPossible)*100) };
    }).sort(function(a,b){ return b.score - a.score; });

    var name = $("nameInput").value.trim();
    $("resTitle").textContent = name ? "El rumbo de " + name : "Tu rumbo probable";
    lastResults = { name:name, ranked:ranked, top:ranked.slice(0,5) };
    saveResultToCloud(name, ranked);

    // top 5 (or fewer if there's a clear drop-off — keep 5 for choice as requested)
    var top = ranked.slice(0,5);
    var rankList = $("rankList");
    rankList.innerHTML = "";
    top.forEach(function(r, idx){
      var c = CLUSTERS[r.key];
      var li = document.createElement("li");
      li.className = "rank-card" + (idx===0 ? " top" : "");
      li.innerHTML =
        '<div class="rank-top-row">' +
          '<span class="rank-num mono">'+(idx+1)+'</span>' +
          '<span class="rank-icon"><svg viewBox="0 0 48 48"><use href="#ic-'+c.icon+'"/></svg></span>' +
          '<span class="rank-title"><h3>'+c.name+'</h3><div class="blurb">'+c.blurb+'</div></span>' +
          '<span class="rank-pct mono">'+r.pct+'%</span>' +
        '</div>' +
        '<div class="rank-bar"><div class="rank-bar-fill" style="width:'+r.pct+'%"></div></div>' +
        '<div class="careers-block">' +
          '<div class="careers-group"><span class="careers-label">Carreras universitarias</span><div class="careers">' + c.careers.map(function(car){ return '<span class="career-chip">'+car+'</span>'; }).join("") + '</div></div>' +
          '<div class="careers-group"><span class="careers-label">Carreras cortas / técnicas</span><div class="careers">' + c.short.map(function(car){ return '<span class="career-chip short">'+car+'</span>'; }).join("") + '</div></div>' +
        '</div>';
      rankList.appendChild(li);
    });

    // full atlas (all 11, compact bars)
    var atlasRows = $("atlasRows");
    atlasRows.innerHTML = "";
    ranked.forEach(function(r){
      var c = CLUSTERS[r.key];
      var row = document.createElement("div");
      row.className = "atlas-row";
      row.innerHTML =
        '<span class="atlas-name">'+c.name+'</span>' +
        '<span class="atlas-track"><span class="atlas-fill" style="width:'+r.pct+'%"></span></span>' +
        '<span class="atlas-val mono">'+r.pct+'%</span>';
      atlasRows.appendChild(row);
    });

    // full career catalog, grouped, regardless of score
    var atlasFull = $("atlasFull");
    atlasFull.innerHTML = "";
    CLUSTER_ORDER.forEach(function(k){
      var c = CLUSTERS[k];
      var g = document.createElement("div");
      g.className = "group";
      g.innerHTML = '<b><svg viewBox="0 0 48 48"><use href="#ic-'+c.icon+'"/></svg>'+c.name+'</b>' +
        '<span><em>Universitarias:</em> '+c.careers.join(" · ")+'</span>' +
        '<span><em>Cortas / técnicas:</em> '+c.short.join(" · ")+'</span>';
      atlasFull.appendChild(g);
    });

    $("screen-quiz").hidden = true;
    $("screen-results").hidden = false;
    $("topBearing").textContent = "RESULTADO";
    window.scrollTo({top:0, behavior:"smooth"});
  }

  // Guarda solo el resultado final (nombre, fecha y áreas afines) en Firestore.
  // Si Firebase no está configurado (o el dispositivo está offline), falla en
  // silencio: nunca debe interrumpir el test para quien lo está haciendo.
  var firebaseAppReady = false;
  function ensureFirebaseApp(){
    if (firebaseAppReady) return true;
    if (typeof firebase === "undefined" || !window.FIREBASE_CONFIG) return false;
    if (window.FIREBASE_CONFIG.apiKey === "TU_API_KEY") return false; // config sin completar
    try {
      if (!firebase.apps.length) firebase.initializeApp(window.FIREBASE_CONFIG);
      firebaseAppReady = true;
      return true;
    } catch (e){
      console.warn("No se pudo inicializar Firebase:", e);
      return false;
    }
  }

  function saveResultToCloud(name, ranked){
    if (!ensureFirebaseApp()) return;
    try {
      var db = firebase.firestore();
      var toEntry = function(r){
        var c = CLUSTERS[r.key];
        return { key:r.key, area:c.name, pct:r.pct };
      };
      db.collection("resultados").add({
        nombre: name || null,
        fecha: firebase.firestore.FieldValue.serverTimestamp(),
        top: ranked.slice(0,5).map(toEntry),
        ranking: ranked.map(toEntry)
      }).catch(function(err){
        console.warn("No se pudo guardar el resultado en la nube:", err);
      });
    } catch (e){
      console.warn("No se pudo guardar el resultado en la nube:", e);
    }
  }

  var ACCENT_MAP = {"á":"a","é":"e","í":"i","ó":"o","ú":"u","ñ":"n","ü":"u","Á":"a","É":"e","Í":"i","Ó":"o","Ú":"u","Ñ":"n","Ü":"u"};
  function slugify(s){
    var out = "";
    for (var i=0; i<s.length; i++){
      var ch = s.charAt(i);
      out += ACCENT_MAP[ch] || ch;
    }
    return out.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");
  }

  function generatePDF(){
    if (!lastResults || !window.jspdf){ window.print(); return Promise.resolve(); }

    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF({ unit:"pt", format:"a4" });
    var pageW = doc.internal.pageSize.getWidth();
    var pageH = doc.internal.pageSize.getHeight();
    var margin = 48;
    var contentW = pageW - margin*2;
    var y = margin;

    var INK=[27,42,65], MUTED=[91,100,114], ACCENT=[138,87,22], ACCENT2=[30,76,73], LINE=[207,199,172];

    function header(){
      doc.setFont("courier","bold"); doc.setFontSize(9); doc.setTextColor(ACCENT2[0],ACCENT2[1],ACCENT2[2]);
      doc.text("BITÁCORA VOCACIONAL", margin, y);
      doc.setTextColor(MUTED[0],MUTED[1],MUTED[2]);
      doc.text(new Date().toLocaleDateString("es-AR"), pageW-margin, y, {align:"right"});
      y += 8;
      doc.setDrawColor(LINE[0],LINE[1],LINE[2]); doc.setLineWidth(0.75);
      doc.line(margin, y, pageW-margin, y);
      y += 26;
    }
    function newPage(){ doc.addPage(); y = margin; header(); }
    function ensure(h){ if (y + h > pageH - margin){ newPage(); } }

    header();

    doc.setFont("times","bold"); doc.setFontSize(22); doc.setTextColor(INK[0],INK[1],INK[2]);
    doc.text(lastResults.name ? ("El rumbo de " + lastResults.name) : "Tu rumbo probable", margin, y);
    y += 20;
    doc.setFont("helvetica","normal"); doc.setFontSize(10.5); doc.setTextColor(MUTED[0],MUTED[1],MUTED[2]);
    var intro = doc.splitTextToSize("Áreas de estudio con más afinidad según tus respuestas. Dentro de cada una, las carreras concretas para empezar a investigar.", contentW);
    doc.text(intro, margin, y);
    y += intro.length*13 + 18;

    lastResults.top.forEach(function(r, idx){
      var c = CLUSTERS[r.key];
      var rankColor = idx===0 ? ACCENT : MUTED;
      var pctColor = idx===0 ? ACCENT : ACCENT2;
      ensure(70);
      doc.setFont("courier","bold"); doc.setFontSize(11); doc.setTextColor(rankColor[0],rankColor[1],rankColor[2]);
      doc.text(String(idx+1), margin, y);
      doc.setFont("times","bold"); doc.setFontSize(14); doc.setTextColor(INK[0],INK[1],INK[2]);
      doc.text(c.name, margin+22, y);
      doc.setFont("courier","bold"); doc.setFontSize(13); doc.setTextColor(pctColor[0],pctColor[1],pctColor[2]);
      doc.text(r.pct + "%", pageW-margin, y, {align:"right"});
      y += 16;
      doc.setFont("helvetica","italic"); doc.setFontSize(9.5); doc.setTextColor(MUTED[0],MUTED[1],MUTED[2]);
      doc.text(c.blurb, margin+22, y);
      y += 14;
      doc.setFont("helvetica","bold"); doc.setFontSize(8); doc.setTextColor(ACCENT2[0],ACCENT2[1],ACCENT2[2]);
      ensure(12);
      doc.text("CARRERAS UNIVERSITARIAS", margin+22, y);
      y += 11;
      doc.setFont("helvetica","normal"); doc.setFontSize(9); doc.setTextColor(INK[0],INK[1],INK[2]);
      var lines = doc.splitTextToSize(c.careers.join("  ·  "), contentW-22);
      ensure(lines.length*11 + 10);
      doc.text(lines, margin+22, y);
      y += lines.length*11 + 12;
      doc.setFont("helvetica","bold"); doc.setFontSize(8); doc.setTextColor(ACCENT2[0],ACCENT2[1],ACCENT2[2]);
      ensure(12);
      doc.text("CARRERAS CORTAS / TÉCNICAS", margin+22, y);
      y += 11;
      doc.setFont("helvetica","normal"); doc.setFontSize(9); doc.setTextColor(MUTED[0],MUTED[1],MUTED[2]);
      var shortLines = doc.splitTextToSize(c.short.join("  ·  "), contentW-22);
      ensure(shortLines.length*11 + 10);
      doc.text(shortLines, margin+22, y);
      y += shortLines.length*11 + 14;
      doc.setDrawColor(LINE[0],LINE[1],LINE[2]); doc.setLineWidth(0.5);
      doc.line(margin, y, pageW-margin, y);
      y += 18;
    });

    newPage();
    doc.setFont("times","bold"); doc.setFontSize(16); doc.setTextColor(INK[0],INK[1],INK[2]);
    doc.text("Carta completa · las 11 áreas", margin, y);
    y += 22;
    lastResults.ranked.forEach(function(r){
      var c = CLUSTERS[r.key];
      ensure(16);
      doc.setFont("helvetica","normal"); doc.setFontSize(10); doc.setTextColor(INK[0],INK[1],INK[2]);
      doc.text(c.name, margin, y);
      doc.setFont("courier","bold"); doc.setFontSize(10); doc.setTextColor(ACCENT2[0],ACCENT2[1],ACCENT2[2]);
      doc.text(r.pct + "%", pageW-margin, y, {align:"right"});
      y += 13;
    });
    y += 10;
    ensure(20);
    doc.setDrawColor(LINE[0],LINE[1],LINE[2]); doc.line(margin, y, pageW-margin, y);
    y += 22;

    ensure(20);
    doc.setFont("times","bold"); doc.setFontSize(13); doc.setTextColor(INK[0],INK[1],INK[2]);
    doc.text("Atlas completo de carreras", margin, y);
    y += 18;

    CLUSTER_ORDER.forEach(function(k){
      var c = CLUSTERS[k];
      ensure(30);
      doc.setFont("helvetica","bold"); doc.setFontSize(9.5); doc.setTextColor(ACCENT2[0],ACCENT2[1],ACCENT2[2]);
      doc.text(c.name, margin, y);
      y += 12;
      doc.setFont("helvetica","normal"); doc.setFontSize(8.3); doc.setTextColor(INK[0],INK[1],INK[2]);
      var lines = doc.splitTextToSize("Universitarias: " + c.careers.join(" · "), contentW);
      ensure(lines.length*10 + 6);
      doc.text(lines, margin, y);
      y += lines.length*10 + 6;
      doc.setTextColor(MUTED[0],MUTED[1],MUTED[2]);
      var shortLines2 = doc.splitTextToSize("Cortas / técnicas: " + c.short.join(" · "), contentW);
      ensure(shortLines2.length*10 + 8);
      doc.text(shortLines2, margin, y);
      y += shortLines2.length*10 + 12;
    });

    ensure(40);
    doc.setDrawColor(LINE[0],LINE[1],LINE[2]); doc.line(margin, y, pageW-margin, y);
    y += 16;
    doc.setFont("helvetica","italic"); doc.setFontSize(8.5); doc.setTextColor(MUTED[0],MUTED[1],MUTED[2]);
    var foot = doc.splitTextToSize("Este resultado nace de tus respuestas y sirve como punto de partida para investigar, hablar con profesionales de esas áreas y, si es posible, hacer una orientación vocacional profesional más profunda.", contentW);
    doc.text(foot, margin, y);

    var blob = doc.output("blob");
    var filename = "bitacora-vocacional" + (lastResults.name ? ("-" + slugify(lastResults.name)) : "") + ".pdf";
    return offerFile(blob, filename);
  }

  function generateBlankPDF(){
    if (!window.jspdf){ window.print(); return Promise.resolve(); }

    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF({ unit:"pt", format:"a4" });
    var pageW = doc.internal.pageSize.getWidth();
    var pageH = doc.internal.pageSize.getHeight();
    var margin = 48;
    var contentW = pageW - margin*2;
    var y = margin;

    var INK=[27,42,65], MUTED=[91,100,114], ACCENT2=[30,76,73], LINE=[207,199,172];

    function header(){
      doc.setFont("courier","bold"); doc.setFontSize(9); doc.setTextColor(ACCENT2[0],ACCENT2[1],ACCENT2[2]);
      doc.text("BITÁCORA VOCACIONAL · CUESTIONARIO IMPRESO", margin, y);
      y += 8;
      doc.setDrawColor(LINE[0],LINE[1],LINE[2]); doc.setLineWidth(0.75);
      doc.line(margin, y, pageW-margin, y);
      y += 24;
    }
    function newPage(){ doc.addPage(); y = margin; header(); }
    function ensure(h){ if (y + h > pageH - margin){ newPage(); } }

    header();

    doc.setFont("times","bold"); doc.setFontSize(20); doc.setTextColor(INK[0],INK[1],INK[2]);
    doc.text("Test de orientación vocacional", margin, y);
    y += 24;

    doc.setFont("helvetica","normal"); doc.setFontSize(10); doc.setTextColor(MUTED[0],MUTED[1],MUTED[2]);
    var instr = doc.splitTextToSize("Marcá con una cruz el casillero de la opción que más se parezca a lo que realmente harías en cada situación. No hay respuestas correctas ni incorrectas: elegí por instinto, no lo que \"queda bien\".", contentW);
    doc.text(instr, margin, y);
    y += instr.length*13 + 20;

    doc.setFont("helvetica","normal"); doc.setFontSize(10.5); doc.setTextColor(INK[0],INK[1],INK[2]);
    doc.text("Nombre:", margin, y);
    doc.setDrawColor(LINE[0],LINE[1],LINE[2]); doc.setLineWidth(0.75);
    doc.line(margin+50, y+2, margin+300, y+2);
    doc.text("Fecha:", margin+330, y);
    doc.line(margin+368, y+2, pageW-margin, y+2);
    y += 30;
    doc.line(margin, y, pageW-margin, y);
    y += 26;

    QUESTIONS.forEach(function(q, qi){
      ensure(30);
      doc.setFont("times","bold"); doc.setFontSize(11.5); doc.setTextColor(INK[0],INK[1],INK[2]);
      var qLines = doc.splitTextToSize((qi+1) + ". " + q.t, contentW);
      ensure(qLines.length*14 + 10);
      doc.text(qLines, margin, y);
      y += qLines.length*14 + 9;

      q.o.forEach(function(opt){
        doc.setFont("helvetica","normal"); doc.setFontSize(9.6); doc.setTextColor(INK[0],INK[1],INK[2]);
        var optLines = doc.splitTextToSize(opt[1], contentW-24);
        ensure(optLines.length*12 + 6);
        doc.setDrawColor(INK[0],INK[1],INK[2]); doc.setLineWidth(0.8);
        doc.rect(margin+3, y-7.5, 8.5, 8.5);
        doc.text(optLines, margin+22, y);
        y += optLines.length*12 + 6;
      });

      y += 8;
      ensure(4);
      doc.setDrawColor(LINE[0],LINE[1],LINE[2]); doc.setLineWidth(0.5);
      doc.line(margin, y, pageW-margin, y);
      y += 16;
    });

    ensure(28);
    doc.setFont("helvetica","italic"); doc.setFontSize(8.5); doc.setTextColor(MUTED[0],MUTED[1],MUTED[2]);
    var linkNote = doc.splitTextToSize("Para ver el resultado de estas respuestas, cargalas en la versión digital: " + window.location.href, contentW);
    doc.text(linkNote, margin, y);

    var blob = doc.output("blob");
    return offerFile(blob, "bitacora-vocacional-cuestionario-en-blanco.pdf");
  }

  function offerFile(blob, filename){
    return Promise.resolve()
      .then(function(){ return (window.claude && window.claude.use) ? window.claude.use("downloads") : null; })
      .catch(function(){ return null; })
      .then(function(downloads){
        if (downloads){
          return downloads.save({ filename:filename, data:blob }).catch(function(err){
            if (!err || err.code !== "declined") fallbackSave(blob, filename);
          });
        }
        fallbackSave(blob, filename);
      });
  }

  function fallbackSave(blob, filename){
    try {
      var topLevel = (window.top === window.self);
      if (topLevel){
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url; a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(function(){ URL.revokeObjectURL(url); }, 4000);
      } else {
        window.print();
      }
    } catch(e){
      window.print();
    }
  }

  $("blankPdfBtn").addEventListener("click", function(){
    var btn = $("blankPdfBtn");
    var original = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Generando…";
    generateBlankPDF().catch(function(e){ console.error(e); }).then(function(){
      btn.disabled = false;
      btn.textContent = original;
    });
  });

  $("pdfBtn").addEventListener("click", function(){
    var btn = $("pdfBtn");
    var original = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Generando…";
    generatePDF().catch(function(e){ console.error(e); }).then(function(){
      btn.disabled = false;
      btn.textContent = original;
    });
  });

  $("restartBtn").addEventListener("click", function(){
    state = { idx:0, answers:new Array(QUESTIONS.length).fill(null) };
    $("screen-results").hidden = true;
    $("screen-cover").hidden = false;
    $("topBearing").textContent = "";
    window.scrollTo({top:0, behavior:"smooth"});
  });

})();
