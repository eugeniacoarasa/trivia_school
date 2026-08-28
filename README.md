# 🎓 Trivia School

![Versión](https://img.shields.io/badge/version-1.2.0-blue.svg)
![Estado](https://img.shields.io/badge/estado-activo-brightgreen.svg)
![PWA](https://img.shields.io/badge/PWA-enabled-orange.svg)

**Trivia School** es una aplicación web interactiva (PWA) diseñada para reforzar el aprendizaje de estudiantes de nivel primario mediante cuestionarios dinámicos organizados por materias y grados escolares.

---

## 🚀 Características principales

- **Contenido curricular por grados:** Bancos de preguntas específicos para 3.º, 4.º, 5.º y 6.º grado (Ciencias Naturales y Ciencias Sociales).
- **Sugerencias de repaso personalizadas:** Retroalimentación al finalizar cada trivia basada en los temas de las preguntas erradas.
- **Soporte PWA (Offline & Instalable):** Service Worker integrado (`sw.js`) para almacenar en caché los recursos clave y permitir el uso fluido sin conexión continua.
- **Interfaz moderna e interactiva:** Estilos CSS adaptables con efectos translúcidos y diseño accesible.

---

## 🛠️ Tecnologías utilizadas

* **HTML5** — Estructura semántica de la aplicación.
* **CSS3** — Diseños adaptativos (Responsive Design) e interfaz de usuario.
* **JavaScript (ES6+)** — Lógica del juego, manejo de estados y módulos de preguntas.
* **Service Worker / PWA** — Gestión de caché y soporte offline.
* **Git & GitHub** — Control de versiones y despliegue.

---

## 📂 Estructura del proyecto

```text
trivia_school/
├── images/             # Iconos, fondos y recursos visuales
├── index.html          # Punto de entrada de la aplicación
├── style.css           # Estilos globales y componentes UI
├── script.js          # Lógica principal del cuestionario
├── sw.js              # Service Worker para almacenamiento en caché
├── manifest.json      # Configuración de PWA
├── preguntas_3.js     # Banco de preguntas para 3° Grado
├── preguntas_4.js     # Banco de preguntas para 4° Grado
├── preguntas_5.js     # Banco de preguntas para 5° Grado
└── preguntas_6.js     # Banco de preguntas para 6° Grado
````
---

## 💻 Instalación local
### Clonar el repositorio:

#### Bash
git clone [https://github.com/eugeniacoarasa/trivia_school.git](https://github.com/eugeniacoarasa/trivia_school.git)

#### Entrar al directorio del proyecto:

#### Bash
cd trivia_school

#### Abrir el archivo index.html en tu navegador de preferencia o mediante un servidor local (como Live Server en VS Code).

---

## 📌 Historial de versiones

### v1.2.0: 
Estandarización de contenidos de 5° Grado, rediseño de UI en componentes de navegación y actualización de caché PWA.

### v1.1.0: 
Estructuración de módulos independientes por nivel escolar.

### v1.0.0: 
Lanzamiento de la versión inicial base.

---

Creado con ❤️ por [Eugenia Coarasa](https://github.com/eugeniacoarasa)


