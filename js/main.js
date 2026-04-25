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