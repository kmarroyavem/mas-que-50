# Más que 50: Tu historia continúa

Micrositio académico responsive para la campaña **Más que 50: tu historia continúa**, orientada a personas mayores de 50 años de la Localidad de Engativá.

## Archivos del proyecto

- `index.html`: estructura principal de la página.
- `styles.css`: diseño visual responsive para celular, tablet y computador.
- `script.js`: menú móvil, accesibilidad, chatbot, videos, animaciones y contadores.
- `README.md`: instrucciones del proyecto.

## Secciones incluidas

1. Inicio moderno tipo landing page.
2. Ruta de funcionamiento de la campaña.
3. Evaluación inicial.
4. Storytimes audiovisuales.
5. Orientador interactivo.
6. Oportunidades institucionales: Betowa, SENA, Área Andina, Bogotá y Fondo Emprender.
7. Indicadores animados.
8. ODS 3, 4 y 8.
9. Preguntas frecuentes.
10. Mapa de Engativá.
11. Evaluación final.
12. Chatbot orientador.
13. Panel de accesibilidad.

## Cómo publicar en GitHub Pages

1. Entra a tu repositorio de GitHub.
2. Haz clic en **Add file**.
3. Selecciona **Upload files**.
4. Sube estos cuatro archivos: `index.html`, `styles.css`, `script.js`, `README.md`.
5. Baja hasta **Commit changes**.
6. Escribe un mensaje como: `Actualización página Más que 50`.
7. Haz clic en el botón verde **Commit changes**.
8. Entra a **Settings > Pages** y verifica que esté activa la publicación desde `main` y `/root`.

## Cómo cambiar los videos de storytime

En `index.html`, busca esta parte:

```html
<button data-video="https://www.youtube.com/embed/ID_VIDEO_1">Ver storytime</button>
```

Debes reemplazar `ID_VIDEO_1` por el ID real del video de YouTube.

Ejemplo: si el enlace normal es:

```text
https://www.youtube.com/watch?v=abc123XYZ
```

El enlace embed debe quedar así:

```html
<button data-video="https://www.youtube.com/embed/abc123XYZ">Ver storytime</button>
```

También puedes subir videos propios a YouTube como **No listado** y usar el enlace embed.

## Recomendaciones para los videos

- Duración sugerida: 30 segundos a 2 minutos.
- Grabar en formato horizontal si se usará como video principal.
- Agregar subtítulos para accesibilidad.
- Usar buena iluminación y audio claro.
- Evitar lenguaje que estigmatice la edad.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Google Fonts
- GitHub Pages

## Objetivo académico

Promover el aprendizaje permanente, el bienestar emocional, la construcción del proyecto de vida y la conexión con oportunidades reales para personas mayores de 50 años.
