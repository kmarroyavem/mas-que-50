# Más que 50: Tu historia continúa

Versión simplificada del micrositio académico con 6 secciones, pensada para personas mayores de 50 años.

## Archivos incluidos

- `index.html`: estructura principal de la página.
- `styles.css`: diseño moderno, responsive y accesible.
- `script.js`: menú móvil, accesibilidad, formularios, videos y animaciones.
- `README.md`: instrucciones de uso.

## Estructura final de la página

1. Hero principal con imagen de mujer adulta feliz.
2. Encuesta inicial.
3. Story Time con tarjetas de video.
4. Descubre nuevas oportunidades.
5. Encuesta final.
6. Pie de página.

## Secciones eliminadas

- Ruta sencilla 01-04.
- Indicadores de impacto.
- ODS.
- Mapa de Engativá.
- Preguntas frecuentes.
- Chat flotante.

## Enlaces incluidos

- SENA.
- Betowa SENA.
- Área Andina.
- Empleo para mayores de 50.
- Fondo Emprender.
- Cursos gratuitos Bogotá.

## Cómo publicar en GitHub Pages

1. Entra a tu repositorio de GitHub.
2. Haz clic en **Add file**.
3. Selecciona **Upload files**.
4. Sube estos cuatro archivos: `index.html`, `styles.css`, `script.js`, `README.md`.
5. Baja hasta **Commit changes**.
6. Escribe un mensaje como: `Actualización página Más que 50 versión simplificada`.
7. Haz clic en **Commit changes**.
8. Entra a **Settings > Pages** y verifica que la publicación esté activa desde `main` y `/root`.

## Cómo cambiar los videos de Story Time

En `index.html`, busca una línea como esta:

```html
<button data-video="https://www.youtube.com/embed/ID_VIDEO_1">Ver historia</button>
```

Reemplaza `ID_VIDEO_1` por el ID real del video de YouTube.

Ejemplo:

Enlace normal:

```text
https://www.youtube.com/watch?v=abc123XYZ
```

Debe quedar así:

```html
<button data-video="https://www.youtube.com/embed/abc123XYZ">Ver historia</button>
```

## Recomendación para Google Forms

La página trae formularios visuales en HTML para mostrar la encuesta inicial y final.

Si necesitas guardar respuestas y estadísticas reales, crea dos formularios en Google Forms:

- Encuesta inicial.
- Encuesta final.

Luego puedes reemplazar cada formulario HTML por un botón o iframe de Google Forms.

También puedes dejar el diseño como está para la sustentación y usar enlaces externos a Google Forms cuando ya tengas los formularios listos.
