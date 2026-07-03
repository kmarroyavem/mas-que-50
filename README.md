# Más que 50: Tu historia continúa

Versión simplificada del micrositio de la campaña **Más que 50: tu historia continúa**.

## Archivos incluidos

- `index.html`: estructura de la página.
- `styles.css`: diseño moderno, responsive y accesible.
- `script.js`: menú móvil, accesibilidad, videos y animaciones.
- `README.md`: instrucciones de uso.

## Secciones principales

1. Inicio moderno y llamativo.
2. Ruta sencilla de navegación.
3. Encuesta inicial.
4. Story time.
5. Botones principales de acceso:
   - Betowa SENA
   - SENA
   - Área Andina
   - Cursos gratuitos Bogotá
   - Fondo Emprender
   - Oportunidades laborales
6. Encuesta final.
7. Accesibilidad: aumentar texto, disminuir texto y alto contraste.

## Cómo conectar las encuestas con Google Forms

En `index.html`, busca estos enlaces:

```html
https://forms.gle/PEGA_AQUI_TU_FORMULARIO_INICIAL
```

y

```html
https://forms.gle/PEGA_AQUI_TU_FORMULARIO_FINAL
```

Reemplázalos por los enlaces reales de tus formularios de Google Forms.

## Cómo cambiar los videos de Story Time

En `index.html`, busca:

```html
<button data-video="https://www.youtube.com/embed/ID_VIDEO_1">Ver video</button>
```

Cambia `ID_VIDEO_1` por el ID real del video de YouTube.

Ejemplo:

Enlace normal:

```text
https://www.youtube.com/watch?v=abc123XYZ
```

Debe quedar así:

```html
<button data-video="https://www.youtube.com/embed/abc123XYZ">Ver video</button>
```

## Cómo publicar en GitHub Pages

1. Entra al repositorio de GitHub.
2. Haz clic en **Add file > Upload files**.
3. Sube `index.html`, `styles.css`, `script.js` y `README.md`.
4. Baja hasta **Commit changes**.
5. Entra a **Settings > Pages**.
6. Verifica que esté publicado desde la rama `main` y carpeta `/root`.

## Nota

Esta versión elimina elementos adicionales como mapa, chatbot, métricas y demasiados botones para que la navegación sea más clara para personas mayores de 50 años.
