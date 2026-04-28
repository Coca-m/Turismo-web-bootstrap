1. Sección: Home (Página Principal)
A. Navegación y Estructura (Navbar & Mega Menú)
Requerimiento: Implementar una barra de navegación funcional, responsiva y con menús desplegables complejos.

Implementación Técnica: Se utilizó el componente navbar de Bootstrap 5, extendiendo su funcionalidad mediante un Mega Menú personalizado con CSS. Se aplicaron clases de utilidad (dropdown, d-flex) para organizar los enlaces por categorías.

Justificación: El uso de un Mega Menú mejora la Arquitectura de Información, permitiendo al usuario acceder a destinos o servicios específicos de Jujuy con un solo clic, reduciendo la tasa de rebote.

B. Identidad Visual (Hero Section & Animaciones)
Requerimiento: Crear un impacto visual inmediato con contenido multimedia y textos dinámicos.

Implementación Técnica: El Hero integra un contenedor con imagen de fondo en alta resolución y un sistema de textos animados mediante jQuery. Se utilizaron los métodos .fadeIn() y .animate() para secuenciar la aparición de los mensajes de bienvenida.

Justificación: Las animaciones controladas por jQuery aumentan el engagement del usuario y refuerzan el concepto de dinamismo del sitio turístico.

C. Interactividad y Datos (Destinos & Contadores)
Requerimiento: Presentar destinos turísticos y estadísticas de forma atractiva.

Implementación Técnica: * Cards: Se implementaron tarjetas de Bootstrap con efectos de Hover en CSS3 (transform: scale y box-shadow) para dar profundidad.

Contador Animado: Se desarrolló un script en jQuery que detecta el scroll del usuario y anima números de forma ascendente utilizando una función de temporizador incremental.

Justificación: El contador dinámico funciona como prueba social, validando el éxito de la plataforma mediante métricas visuales atractivas.

D. Sección de Cierre (Carousel & Footer)
Requerimiento: Incluir testimonios, datos de contacto, redes y ubicación.

Implementación Técnica: * Testimonios: Uso del componente carousel de Bootstrap con transición suave.

Footer Multi-sección: Integra un formulario de contacto validado, íconos de FontAwesome para redes sociales y un mapa de Google Maps embebido mediante iframe responsivo.

Justificación: Proporcionar múltiples canales de contacto y la ubicación exacta mejora la confianza del usuario (UX) y facilita la conversión.

2. Sección: Destinos (Exploración Interactiva)
A. Sistema de Filtrado Dinámico
Requerimiento: Implementar filtros funcionales para categorizar destinos.

Implementación Técnica: Se utilizó jQuery para capturar eventos de clic en los botones de categoría. La lógica aplica los métodos .hide() para ocultar todos los elementos y .fadeIn() (o .show()) combinado con el selector de clase correspondiente para mostrar los resultados filtrados.

Justificación: El filtrado del lado del cliente proporciona una respuesta instantánea al usuario sin recargar la página, mejorando significativamente la fluidez de la navegación.

B. Maquetación Adaptativa (Grid System)
Requerimiento: Garantizar que los destinos se visualicen correctamente en cualquier tamaño de pantalla.

Implementación Técnica: Se implementó un Grid de Bootstrap 5 utilizando clases de columnas dinámicas (col-12, col-md-6, col-lg-4). Esto permite que la grilla colapse de 3 columnas en escritorio a 2 en tablets y 1 en dispositivos móviles.

Justificación: Esta adaptabilidad asegura que el contenido sea legible y accesible, cumpliendo con los estándares de diseño Mobile-First.

C. Experiencia de Usuario (Efectos de Zoom)
Requerimiento: Añadir interactividad visual a las tarjetas de destino.

Implementación Técnica: Se combinaron Transformaciones CSS3 (scale) con disparadores de jQuery (mouseenter / mouseleave). Al posicionar el cursor, se activa una transición suave que resalta la imagen del destino.

Justificación: Los micro-movimientos actúan como feedback visual, indicando al usuario que el elemento es interactivo y mejorando la estética moderna del sitio.

D. Visualización de Tarifas (Tabla de Precios)
Requerimiento: Presentar costos de servicios en un formato tabular legible y responsivo.

Implementación Técnica: Se utilizó la etiqueta <table> de HTML5 envuelta en un contenedor con la clase .table-responsive de Bootstrap. Esto genera un scroll horizontal automático en pantallas pequeñas para evitar que la tabla rompa el diseño.

Justificación: La organización tabular permite comparar precios y servicios de forma eficiente, mientras que la propiedad responsiva garantiza que la información crítica no se pierda en dispositivos móviles.

3. Sección: Agencias (Interactividad Avanzada)
A. Interfaz Dinámica (Cards con Efecto Flip)
Requerimiento: Implementar tarjetas que muestren información adicional al interactuar, optimizando el espacio.

Implementación Técnica: Se utilizó una estructura de contenedores anidados (front y back) controlados mediante Transformaciones CSS3 (rotateY). La activación del giro se gestionó con jQuery mediante el método .toggleClass(), permitiendo que el usuario alterne entre la imagen de la agencia y sus datos de contacto con un clic.

Justificación: El efecto flip permite mantener una estética limpia y minimalista, revelando información secundaria solo cuando el usuario demuestra interés, lo que reduce la carga cognitiva.

B. Feedback del Usuario (Sistema de Rating con Estrellas)
Requerimiento: Permitir una valoración visual de los servicios de las agencias.

Implementación Técnica: Se desarrolló un componente de valoración utilizando iconos de FontAwesome. Mediante jQuery, se programaron eventos de click para cambiar el estado visual de las estrellas. Se utilizaron selectores como .prevAll() y .nextAll() para iluminar dinámicamente el rango de estrellas seleccionado por el usuario.

Justificación: Incluir un sistema de rating interactivo simula una plataforma de reputación real, aumentando la verosimilitud del proyecto y demostrando el manejo de lógica condicional en el DOM.

4. Sección: Contacto (Comunicación y Validación)
A. Integridad de Datos (Validación en Tiempo Real)
Requerimiento: Asegurar que los datos ingresados por el usuario sean correctos antes del envío.

Implementación Técnica: Se utilizó jQuery para monitorear el evento .on('input') en cada campo del formulario. Mediante el método .val() se extrae el contenido y se aplica lógica de expresiones regulares (Regex) para validar formatos de email y longitud de texto, aplicando clases de Bootstrap (is-valid / is-invalid) de forma dinámica.

Justificación: La validación en tiempo real mejora la experiencia del usuario al corregir errores al instante, evitando la frustración de recargar la página para ver fallos de validación.

B. Gestión de Estados (Spinner de Carga)
Requerimiento: Indicar visualmente que se está procesando una acción.

Implementación Técnica: Se integró el componente .spinner-border de Bootstrap dentro del botón de envío. Mediante jQuery, se activa su visibilidad al disparar el evento submit y se deshabilita el botón temporalmente para evitar múltiples envíos.

Justificación: El uso de indicadores de carga previene la incertidumbre del usuario durante el tiempo de respuesta del sistema, cumpliendo con las heurísticas de visibilidad del estado del sistema.

C. Confirmación de Acción (Modal de Éxito)
Requerimiento: Notificar al usuario que su mensaje fue enviado correctamente.

Implementación Técnica: Una vez validado el formulario, se dispara un Modal de Bootstrap programáticamente mediante jQuery. Este modal contiene un mensaje de éxito y un botón de cierre que reinicia los campos del formulario.

Justificación: El modal actúa como una confirmación definitiva, cerrando el flujo de interacción de manera clara y profesional.

D. Layout Adaptable (Flexbox & Grid)
Requerimiento: Diseñar un formulario que se adapte a cualquier resolución.

Implementación Técnica: Se combinó el sistema de Grid de Bootstrap para la estructura principal (mapa vs. formulario) con Flexbox para el alineamiento interno de los iconos y botones.

Justificación: Esta arquitectura híbrida garantiza que los elementos mantengan su proporción y legibilidad tanto en pantallas panorámicas como en móviles.

5. Sección: Precios (Comparativa y Ayuda Visual)
A. Organización de Datos (Tabla Comparativa)
Requerimiento: Presentar diferentes planes o servicios de forma que sea fácil compararlos.

Implementación Técnica: Se diseñó una estructura tabular utilizando clases de Bootstrap 5 para diferenciar columnas de servicios, características y precios. Se aplicaron estilos específicos para resaltar la columna del "Plan Recomendado".

Justificación: La disposición comparativa facilita la toma de decisiones del usuario al visualizar rápidamente las diferencias de valor entre las opciones ofrecidas.

B. Interactividad de Fila (Hover Dinámico)
Requerimiento: Mejorar el enfoque visual del usuario mientras explora la tabla.

Implementación Técnica: Mediante CSS3 y jQuery, se implementó un efecto de resaltado (hover) que cambia el color de fondo y añade una sombra suave a la fila o columna sobre la que se encuentra el puntero.

Justificación: Este feedback visual actúa como guía, evitando errores de lectura en tablas con múltiples datos y mejorando la usabilidad general.

C. Asistencia al Usuario (Tooltips de Bootstrap)
Requerimiento: Proporcionar información adicional sin recargar el diseño.

Implementación Técnica: Se integraron Tooltips de Bootstrap, inicializados mediante un script global de jQuery. Se configuraron para aparecer al pasar el mouse sobre términos técnicos o iconos de información, extrayendo el contenido del atributo title o data-bs-title.

Justificación: Los tooltips permiten mantener una interfaz limpia y minimalista, ofreciendo explicaciones detalladas solo cuando el usuario las solicita de forma activa.

6. Sección: Blog / Revista ("¿Qué pasa en Jujuy?")
A. Composición Editorial (Layout tipo Revista)
Requerimiento: Crear una interfaz de noticias atractiva con jerarquía visual clara.

Implementación Técnica: Se utilizó un sistema híbrido que combina Bootstrap 5 para la estructura de columnas y CSS personalizado para el estilo de las tarjetas (.art-card). Se empleó una noticia principal destacada (Hero post) seguida de una grilla secundaria organizada mediante las clases row-cols-md-3.

Justificación: El diseño tipo revista permite organizar gran cantidad de información sin saturar al lector, guiando el ojo primero hacia la noticia más relevante (jerarquía) y luego hacia las secundarias.

B. Segmentación de Contenido (Filtro por Categorías)
Requerimiento: Permitir que el usuario filtre noticias por temas de interés (Cultura, Aventura, Gastronomía).

Implementación Técnica: Implementación de lógica en jQuery utilizando selectores de clase y atributos data-filter. El script gestiona la visibilidad de los elementos mediante los métodos .hide() y .fadeIn(), tratando a la noticia principal y a la grilla como entidades relacionadas pero independientes.

Justificación: Facilita la descubribilidad del contenido, permitiendo que el usuario encuentre lo que busca rápidamente sin necesidad de recargas de página, lo que optimiza la retención en el sitio.

C. Interacción Comunitaria (Comentarios Simulados)
Requerimiento: Incluir una sección de feedback para simular la interacción de una comunidad real.

Implementación Técnica: Se diseñó una caja de comentarios utilizando Flexbox para la alineación de avatares creados íntegramente con CSS puro (sin imágenes externas).

Justificación: Demuestra la capacidad de crear elementos gráficos complejos con código (optimizando tiempos de carga) y añade un nivel de realismo y dinamismo social al proyecto.

D. Dinamismo Visual (Animaciones al hacer Scroll)
Requerimiento: Incorporar efectos visuales que se activen a medida que el usuario navega por la página.

Implementación Técnica: Se utilizó la API de Intersection Observer integrada con clases de jQuery. Los elementos con la clase .reveal permanecen ocultos y se desplazan hacia arriba mediante transiciones de CSS una vez que entran en el área de visión (Viewport).

Justificación: Esta técnica de Lazy Animation mejora la percepción de modernidad y fluidez del sitio, además de jerarquizar la aparición del contenido de forma orgánica.

7. Módulo Educativo: Simulación de Phishing
A. Enfoque Ético y Preventivo
Requerimiento: Crear un entorno de aprendizaje seguro para identificar ataques de ingeniería social sin comprometer datos reales.

Implementación Técnica: Se implementó una Simulación de Phishing mediante un Modal de Bootstrap que incluye una advertencia de seguridad explícita (clase .alert-warning). Se bloqueó cualquier posibilidad de envío de datos, centrando la interacción únicamente en el análisis visual.

Justificación: Cumple con las normativas de seguridad informática al educar al usuario de forma lúdica, transformando una amenaza potencial en una oportunidad de aprendizaje práctico.

B. Interfaz de Análisis (Ejemplos Educativos)
Requerimiento: Presentar señales claras de fraude en un formato realista.

Implementación Técnica: El modal recrea un correo electrónico falso utilizando componentes de diseño específicos. Se insertaron "puntos de interés" (hotspots) con el atributo data-error en elementos críticos como el remitente sospechoso, el sentido de urgencia en el asunto y enlaces externos dudosos.

Justificación: Al replicar la anatomía de un ataque real, se entrena el "ojo crítico" del usuario para detectar inconsistencias técnicas antes de que ocurra un incidente de seguridad.

C. Aprendizaje Interactivo (Feedback con jQuery)
Requerimiento: El usuario debe identificar errores y recibir retroalimentación inmediata.

Implementación Técnica: Se desarrolló una lógica en jQuery que permite al usuario seleccionar las señales de fraude. Mediante el uso de un Set en JavaScript para evitar duplicados y el método .append(), el sistema genera un reporte de resultados dinámico que explica técnica y conceptualmente por qué cada elemento marcado es peligroso.

Justificación: La retroalimentación inmediata (Feedback Loop) es una de las técnicas más efectivas en la educación digital, ya que refuerza el conocimiento en el momento exacto de la interacción.