🌍 Turismo Jujuy: Proyecto de Desarrollo Web Completo
🚀 Descripción General
Este proyecto es una plataforma web integral dedicada a la promoción turística de la provincia de Jujuy. El sitio ha sido diseñado bajo una arquitectura de "Multi-Page Application" (MPA), asegurando que cada sección cumpla una función específica dentro del funnel de conversión de un turista: desde la inspiración hasta el contacto.

🛠️ Tecnologías y Metodología
HTML5 & CSS3: Sin frameworks externos (Vanilla CSS) para demostrar dominio de las bases del diseño web.

Layouts Híbridos: Uso combinado de Flexbox para componentes lineales (Nav, Footers, Listas) y CSS Grid para estructuras bidimensionales (Galerías, Blog).

GitHub Pages: Implementación de CI/CD básico mediante despliegue automático.

📋 Arquitectura de Páginas (Detalle Técnico)
1. index.html (Home / Landing Page)
Hero Section: Presentación visual de alto impacto con una imagen de la Quebrada de Humahuaca y un Call to Action (CTA).

Mega Menú: Navegación sofisticada que permite acceder a subcategorías de destinos sin sobrecargar la interfaz principal.

Resumen de Propuesta: Introducción a las regiones (Puna, Quebrada, Valles y Yungas).

2. destinos.html (Galería de Exploración)
Grid de Destinos: Implementación de una grilla responsiva que muestra puntos clave como Purmamarca, Salinas Grandes e Iruya.

Efectos UI: Tarjetas con estados hover que revelan información adicional, utilizando opacity y transform para no interrumpir la navegación.

3. agencias.html (Directorio de Servicios)
Estructura de Listado: Organización de agencias de viajes locales autorizadas.

Componentes Repetibles: Uso de clases CSS modulares para asegurar que todas las tarjetas de agencias mantengan consistencia visual y alineación.

4. precios.html (Tarifario y Cotizaciones)
Tablas Responsivas: Presentación de costos estimados de excursiones y traslados.

Diseño Limpio: Enfoque en la legibilidad de datos numéricos, utilizando fuentes monoespaciadas o bien alineadas para facilitar la comparación de precios.

5. blog.html (Sección Editorial y Comunidad)
Layout Editorial Complejo: Implementación de un diseño tipo revista con una noticia principal destacada (grid-column: span 2) y flujo denso (grid-auto-flow: dense) para optimizar el espacio.

Sistema de Filtros: Filtrado por categorías (Cultura, Aventura, Gastronomía) mediante selectores CSS nativos (:checked), eliminando la dependencia de JavaScript para tareas de visualización.

Módulo de Comentarios: Interfaz de interacción social con avatares generados puramente mediante pseudo-elementos CSS.

6. contacto.html (Conversión y Soporte)
Formulario Validado: Estructura de captura de datos con tipos de input específicos (email, tel) para mejorar la experiencia en dispositivos móviles.

Integración de Mapa: Espacio reservado para la ubicación geográfica de las oficinas de turismo.

⚙️ Características Técnicas Globales
Variables CSS (Root): Centralización de la paleta de colores (tonos tierra y verdes yungas) para una identidad visual cohesiva en todas las páginas.

Responsive Design: Media queries personalizadas que adaptan la navegación y las grillas de 3 columnas a 1 columna en móviles.

Optimización de Activos: Gestión de imágenes mediante background-position: center y object-fit: cover para mantener la calidad visual en diferentes resoluciones.

📂 Organización de Archivos
/css: Hojas de estilo modulares (layout, componentes, animaciones).

/img: Recursos fotográficos organizados por regiones.

*.html: Archivos de estructura para cada sección.

¿Cómo instalarlo?
Clonar el repositorio.

Ejecutar a través de un servidor local (ej. Live Server en VS Code).