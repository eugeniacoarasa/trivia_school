// ================= LÓGICA DEL JUEGO =================
const gameContainer = document.getElementById('game-container');
const cardContent = document.getElementById('card-content');
const startBtn = document.getElementById('start-btn');

let gradoSeleccionado = 6; // Valor por defecto
let preguntaActual = 0;
let puntaje = 0;
let preguntasSesion = [];
let materiaActual = ''; // 'naturales' o 'sociales'
let temasARepasar = []; // Guarda los temas en los que falló el jugador

if (startBtn) {
    startBtn.addEventListener('click', () => {
        showGradeSelection();
    });
}

function mezclar(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

// ================= PANTALLAS DE NAVEGACIÓN =================

function showGradeSelection() {
    gameContainer.className = "game-container";
    cardContent.innerHTML = `
        <h2>Selecciona tu Grado</h2>
        <p class="mb-25">Elije tu Grado para comenzar:</p>
        <button class="neon-button my-10" onclick="seleccionarGrado(3)">3° Grado</button>
        <button class="neon-button my-10" onclick="seleccionarGrado(4)">4° Grado</button>
        <button class="neon-button my-10" onclick="seleccionarGrado(5)">5° Grado</button>
        <button class="neon-button my-10" onclick="seleccionarGrado(6)">6° Grado</button>
        <button class="neon-button secondary-btn my-10" onclick="volverALaPortada()">← Menú Principal</button>
    `;
}

function seleccionarGrado(grado) {
    gradoSeleccionado = grado;
    showCategorySelection();
}

function showCategorySelection() {
    gameContainer.className = "game-container";
    cardContent.innerHTML = `
        <h2>Materias ${gradoSeleccionado}° Grado</h2>
        <p class="mb-25">¿Qué sección de Biciencias ${gradoSeleccionado} vamos a repasar hoy?</p>
        <button class="neon-button btn-naturales my-10" onclick="startQuiz('naturales')">🌿 Cs. Naturales</button>
        <button class="neon-button btn-sociales my-10" onclick="startQuiz('sociales')">🏛️ Cs. Sociales</button>
        <button class="neon-button secondary-btn my-10" onclick="showGradeSelection()">← Cambiar de Grado</button>
        <button class="neon-button secondary-btn my-10" onclick="volverALaPortada()">🏠 Menú Principal</button>
    `;
}

// ================= INICIO DE PARTIDA GENÉRICO =================

function startQuiz(materia) {
    puntaje = 0;
    preguntaActual = 0;
    materiaActual = materia;
    temasARepasar = []; // Reiniciar la lista de temas a repasar
    gameContainer.className = `game-container theme-${materia}`;

    const bancoDelGrado = window[`bancoGrado${gradoSeleccionado}`];

    if (!bancoDelGrado || !bancoDelGrado[materia] || bancoDelGrado[materia].length === 0) {
        alert(`Aún no hay preguntas cargadas para ${materia.toUpperCase()} en ${gradoSeleccionado}° Grado.`);
        showCategorySelection();
        return;
    }

    const rondasDisponibles = bancoDelGrado[materia];
    const rondaAleatoria = rondasDisponibles[Math.floor(Math.random() * rondasDisponibles.length)];
    preguntasSesion = mezclar(rondaAleatoria).slice(0, 5);

    mostrarPregunta();
}

// ================= FLUJO GENERAL DE PREGUNTAS =================

function mostrarPregunta() {
    if (preguntaActual >= preguntasSesion.length) {
        mostrarPantallaFinal();
        return;
    }

    const q = preguntasSesion[preguntaActual];
    const btnMateriaClase = materiaActual === 'naturales' ? 'btn-naturales' : 'btn-sociales';

    cardContent.innerHTML = `
        <div class="quiz-header" style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-bottom: 20px;">
            <button class="quit-btn" onclick="mostrarModalAbandono()" style="background: rgba(255, 255, 255, 0.12); border: 1px solid rgba(255, 255, 255, 0.3); color: #ffffff; padding: 6px 14px; border-radius: 20px; cursor: pointer; font-size: 0.85rem; font-weight: 600; transition: all 0.2s ease;">
                ✖ Abandonar
            </button>
            <span class="question-count" style="color: #ffffff; font-size: 0.95rem; font-weight: bold; opacity: 0.9;">
                Pregunta ${preguntaActual + 1} de ${preguntasSesion.length}
            </span>
        </div>
        <h3 class="question-text">${q.pregunta}</h3>
        <div class="options-container">
            ${q.opciones.map((opcion, index) => `
                <button class="neon-button option-btn ${btnMateriaClase}" onclick="verificarRespuesta(${index}, ${q.respuestaCorrecta})">
                    ${opcion}
                </button>
            `).join('')}
        </div>
    `;
}

function verificarRespuesta(elegida, correcta) {
    const q = preguntasSesion[preguntaActual];
    const esAcertado = (elegida === correcta);
    
    if (esAcertado) { 
        puntaje++; 
    } else {
        // Guardar el tema si falló (evitando duplicados)
        if (q.tema && !temasARepasar.includes(q.tema)) {
            temasARepasar.push(q.tema);
        }
    }

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    
    const tipoClase = esAcertado ? 'success' : 'error';
    const tituloModal = esAcertado ? '¡Correcto! 🌟' : '¡Ops! Fallaste 📚';
    const colorBoton = esAcertado ? (materiaActual === 'naturales' ? 'btn-naturales' : 'btn-sociales') : 'secondary-btn';

    // Mensaje de consejo de repaso específico si falla
    const consejoRepaso = (!esAcertado && q.tema) 
        ? `<p style="margin-top: 10px; font-weight: bold; color: #ffb703;">📖 Tip de repaso: Te sugerimos revisar la lección sobre "${q.tema}".</p>` 
        : '';

    modal.innerHTML = `
        <div class="modal-content ${tipoClase}">
            <h2>${tituloModal}</h2>
            <p>${q.explicacion}</p>
            ${consejoRepaso}
            <button class="neon-button ${colorBoton}" id="next-modal-btn">Continuar</button>
        </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('next-modal-btn').addEventListener('click', () => {
        modal.remove();
        preguntaActual++;
        mostrarPregunta();
    });
}

function mostrarPantallaFinal() {
    const btnMateriaClase = materiaActual === 'naturales' ? 'btn-naturales' : 'btn-sociales';
    const nombreMateria = materiaActual === 'naturales' ? 'Ciencias Naturales' : 'Ciencias Sociales';

    // Construir bloque de resumen de temas a repasar si tuvo errores
    let resumenTemasHTML = '';
    if (temasARepasar.length > 0) {
        const listaItems = temasARepasar.map(tema => `<li>📌 ${tema}</li>`).join('');
        resumenTemasHTML = `
            <div style="background: rgba(255, 255, 255, 0.1); border-radius: 10px; padding: 15px; margin: 15px 0; text-align: left;">
                <h4 style="margin-top: 0; color: #ffb703;">📚 Temas recomendados para repasar en el libro:</h4>
                <ul style="margin: 5px 0 0 20px; padding: 0; font-size: 0.95rem;">
                    ${listaItems}
                </ul>
            </div>
        `;
    }

    cardContent.style.position = "relative";
    cardContent.innerHTML = `
        <div class="confetti-wrapper" id="confetti-box"></div>
        <div class="final-container">
            <h2>¡Reto Completado!</h2>
            <p class="final-message">Has terminado el repaso de ${nombreMateria} (${gradoSeleccionado}° Grado).</p>
            <p class="final-score">Puntaje final: ${puntaje} / ${preguntasSesion.length}</p>
            
            ${resumenTemasHTML}
            
            <button class="neon-button ${btnMateriaClase} my-10" onclick="startQuiz('${materiaActual}')">Jugar de Nuevo</button>
            <button class="neon-button secondary-btn my-10" onclick="showCategorySelection()">Elegir Otra Materia</button>
            <button class="neon-button ${btnMateriaClase} my-10" onclick="volverALaPortada()">Volver al Menú Inicial</button>
        </div>
    `;
    generarConfettiFiesta();
}

function generarConfettiFiesta() {
    const box = document.getElementById('confetti-box');
    if (!box) return;

    const colores = ['#ff2a85', '#00f5d4', '#ffb703', '#ffffff', '#45f0df', '#ff5964'];
    const cantidad = 65;

    for (let i = 0; i < cantidad; i++) {
        const particle = document.createElement('div');
        particle.className = 'confetti-particle';
        
        const angulo = Math.random() * Math.PI * 2;
        const distancia = 140 + Math.random() * 260;
        const tx = Math.cos(angulo) * distancia;
        const ty = Math.sin(angulo) * distancia;
        const rotacion = (Math.random() - 0.5) * 1080;

        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        particle.style.setProperty('--rot', `${rotacion}deg`);
        particle.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
        
        particle.style.animationDelay = `${Math.random() * 2}s`;
        particle.style.animationDuration = `${2 + Math.random() * 1.5}s`;

        box.appendChild(particle);
    }
}

// ================= MENÚ SUPERIOR Y MODALES =================

let soundEnabled = true;

document.addEventListener('DOMContentLoaded', () => {
    setupTopMenu();
});

function setupTopMenu() {
    const btnSound = document.getElementById('btn-sound');
    const btnFullscreen = document.getElementById('btn-fullscreen');
    const btnHelp = document.getElementById('btn-help');

    if (btnSound) {
        btnSound.addEventListener('click', () => {
            soundEnabled = !soundEnabled;
            btnSound.textContent = soundEnabled ? '🔊' : 'Wait... 🔇';
            btnSound.title = soundEnabled ? 'Sonido: ON' : 'Sonido: OFF';
        });
    }

    if (btnFullscreen) {
        btnFullscreen.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(err => {
                    console.error("Error al intentar modo pantalla completa:", err);
                });
                btnFullscreen.textContent = '⏹️';
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
                btnFullscreen.textContent = '⛶';
            }
        });
    }

    if (btnHelp) {
        btnHelp.addEventListener('click', () => {
            mostrarModalAyuda();
        });
    }
}

function mostrarModalAyuda() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>❓ ¿Cómo Jugar?</h2>
            <p class="help-text">
                1. Elige tu grado.<br>
                2. Selecciona la materia que deseas repasar.<br>
                3. Responde un bloque rápido de 5 preguntas aleatorias.<br>
                4. Al finalizar, podrás ver cuantas preguntas has acertado y volver a jugar.
            </p>
            <button class="neon-button btn-naturales" id="close-help-btn">¡Entendido!</button>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('close-help-btn').addEventListener('click', () => {
        modal.remove();
    });
}

function mostrarModalAbandono() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content danger">
            <h2 style="color: #ff2a85; margin-bottom: 10px;">⚠️ ¿Abandonar Partida?</h2>
            <p>Si sales ahora, perderás el progreso actual y se acabará la partida. ¿Estás seguro?</p>
            <div class="modal-actions">
                <button class="neon-button btn-danger w-100" id="confirm-quit-btn">Sí, abandonar</button>
                <button class="neon-button secondary-btn w-100" id="cancel-quit-btn">Cancelar</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('cancel-quit-btn').addEventListener('click', () => {
        modal.remove();
    });

    document.getElementById('confirm-quit-btn').addEventListener('click', () => {
        modal.remove();
        volverALaPortada();
    });
}

function volverALaPortada() {
    gameContainer.className = "game-container";
    cardContent.innerHTML = `
        <h2>TRIVIA SCHOOL</h2>
        <p class="subtitle-tag">¡Aprende jugando!</p>
        <p class="mb-25">Pon a prueba tus conocimientos escolares</p>
        <button class="neon-button" id="start-btn" onclick="showGradeSelection()">ELEGIR GRADO</button>
    `;
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker registrado correctamente'))
      .catch(err => console.log('Error al registrar el Service Worker:', err));
  });
}