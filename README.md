# Más que 50: Tu historia continúa

Página web estática para la campaña académica **“Más que 50: tu historia continúa”**, orientada a personas mayores de 50 años de la localidad de Engativá, Bogotá.

## Objetivo

Motivar a personas mayores de 50 años a reconocer nuevas metas personales, explorar oportunidades de formación, empleo, emprendimiento y bienestar, y fortalecer su proyecto de vida mediante una experiencia digital clara, accesible e intuitiva.

## Estructura del sitio

- Inicio de campaña.
- Explicación de la campaña.
- Beneficios de aprender después de los 50.
- Ruta de participación sin mencionar cronograma interno.
- Encuesta inicial pre-test.
- Historias inspiradoras.
- Módulo de proyecto de vida.
- Recomendador de rutas.
- Oportunidades institucionales.
- Indicadores de impacto.
- ODS relacionados.
- Preguntas frecuentes.
- Mapa de Engativá.
- Encuesta final post-test.

## Archivos

- `index.html`: estructura principal de la página.
- `styles.css`: estilos visuales, diseño adaptable y accesibilidad.
- `script.js`: menú móvil, accesibilidad, videos, formularios, recomendador, chatbot, animaciones y contadores.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- GitHub Pages

## Publicación en GitHub Pages

1. Crear un repositorio en GitHub.
2. Subir los archivos `index.html`, `styles.css`, `script.js` y `README.md`.
3. Entrar a **Settings**.
4. Ir a **Pages**.
5. En **Branch**, seleccionar `main` y carpeta `/root`.
6. Guardar.
7. Abrir la URL pública generada por GitHub Pages.

## Nota

Los formularios son demostrativos. Para una implementación real con recolección de datos, se recomienda integrar Google Forms, Firebase, Supabase o un formulario con backend, incluyendo autorización de tratamiento de datos personales.


## Enlaces incluidos
- Betowa SENA
- SENA
- Cursos virtuales SENA Zajuna
- Cursos gratuitos Bogotá
- Oportunidades 50+ Secretaría de Desarrollo Económico
- Área Andina
- Ministerio de Educación
- Bogotá

## Cómo cambiar los videos de Storytime
En `index.html`, busca los botones con el atributo `data-video`.
Ejemplo:

```html
<button data-video="https://www.youtube.com/embed/ID_DEL_VIDEO">Ver storytime</button>
```

Para usar un video de YouTube:
1. Abre el video en YouTube.
2. Copia el ID del video. Está después de `v=` en la URL.
3. Reemplaza el enlace por: `https://www.youtube.com/embed/ID_DEL_VIDEO`.

También puedes abrir YouTube, seleccionar **Compartir > Insertar**, copiar el enlace del `iframe` y usar solo la URL que aparece en `src`.

Recomendación: usa videos cortos, con subtítulos, buen audio y relacionados con estudio, emprendimiento, hobbies o proyecto de vida después de los 50 años.
