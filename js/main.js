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