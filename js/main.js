$(document).ready(function() {
    // Esto oculta los elementos para que jQuery los haga aparecer
    $("#titulo-hero, #subtitulo-hero, #contenedor-boton").hide();

    // Animación en cadena
    $("#titulo-hero").fadeIn(1500, function() {
        $("#subtitulo-hero").slideDown(1000, function() {
            $("#contenedor-boton").fadeIn(800);
        });
    });
});

$(document).ready(function() {
    // Función para animar los contadores
    $('.numero').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).data('target') // Lee el número del data-target
        }, {
            duration: 3000, // Duración de la animación (3 segundos)
            easing: 'swing', // Efecto de aceleración suave
            step: function (now) {
                // Actualiza el texto del div con el número actual
                $(this).text(Math.ceil(now) + "+");
            }
        });
    });
});

$(document).ready(function() {

    // --- 1. LÓGICA DE FILTRADO (Galería y Tabla) ---
    $('#filtros-jquery .btn-filtro').click(function() {
        // Cambiar estado visual de los botones
        $('.btn-filtro').removeClass('active');
        $(this).addClass('active');

        const categoria = $(this).attr('data-filter');

        // Seleccionamos solo la galería y las filas de la tabla
        const elementos = $('.item-destinos, .fila-destino');

        if (categoria === 'todos') {
            elementos.show(400);
        } else {
            // Escondemos todo lo que no sea la categoría
            elementos.hide(300);
            
            // Filtramos y mostramos solo lo seleccionado
            elementos.filter('.' + categoria).show(500);
            
            // Refresco rápido para asegurar que el grid Masonry se acomode
            $('.galeria-masonry').hide(0).show(0);
        }
    });

    // --- 2. EFECTO ZOOM DINÁMICO ---
    $('.item-destinos').hover(
        function() {
            $(this).find('img').css('transform', 'scale(1.15)');
        }, 
        function() {
            $(this).find('img').css('transform', 'scale(1)');
        }
    );

});

$(document).ready(function() {

    // --- 1. EFECTO FLIP (Giro de cartas) ---
    // Usamos toggleClass para que al hacer click gire y al volver a hacer click regrese
    $('.agencia-card').click(function(e) {
        // Evitamos que el giro ocurra si clickean en el botón de contacto o enlaces
        if (!$(e.target).is('a, .btn-agencia')) {
            $(this).find('.card-inner').toggleClass('flipped');
        }
    });

    // Botón "Volver" dentro de la carta (opcional para mejor UX)
    $('.btn-volver').click(function(e) {
        e.stopPropagation(); // Evita conflictos con el click del padre
        $(this).closest('.card-inner').removeClass('flipped');
    });


    // --- 2. SISTEMA DE RATING (Estrellas) ---
    $('.star').on('click', function(e) {
        e.stopPropagation(); // Importante: que no se gire la carta al calificar
        
        const valor = $(this).data('value');
        const contenedor = $(this).parent();

        // 1. Limpiamos todas las estrellas de este contenedor
        contenedor.find('.star').removeClass('active');

        // 2. Pintamos la estrella clickeada y todas las anteriores
        $(this).addClass('active');
        $(this).prevAll().addClass('active');

        // 3. Actualizamos el texto de calificación
        contenedor.siblings('.rating-text').find('.val-rating').text(valor);
        
        // Efecto visual de confirmación
        console.log("Agencia " + contenedor.data('agencia') + " calificada con: " + valor);
    });

    // Efecto Hover en estrellas (opcional, para que se iluminen al pasar el mouse)
    $('.star').on('mouseenter', function() {
        $(this).addClass('active').prevAll().addClass('active');
    }).on('mouseleave', function() {
        // Al salir, que vuelvan a quedar como estaban (lógica de estado)
        // (Esto se puede pulir más, pero para el parcial está perfecto así)
    });

});