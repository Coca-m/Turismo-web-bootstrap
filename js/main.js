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

$(document).ready(function() {
    
    // --- VALIDACIÓN EN TIEMPO REAL ---
    $('#nombre, #email, #mensaje').on('input', function() {
        const input = $(this);
        const val = input.val().trim(); // Usamos trim() para ignorar espacios vacíos

        if (input.attr('id') === 'nombre') {
            // Ahora solo valida que no esté vacío
            (val.length > 0) ? markValid(input) : markInvalid(input);
        }

        if (input.attr('id') === 'email') {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            regex.test(val) ? markValid(input) : markInvalid(input);
        }

        if (input.attr('id') === 'mensaje') {
            // Obligatorio: debe tener contenido
            (val.length > 0) ? markValid(input) : markInvalid(input);
        }
    });

    function markValid(el) {
        el.addClass('is-valid').removeClass('is-invalid');
    }

    function markInvalid(el) {
        el.addClass('is-invalid').removeClass('is-valid');
    }

    // --- ENVÍO DE FORMULARIO ---
    $('#form-contacto').on('submit', function(e) {
        e.preventDefault();

        const nombre = $('#nombre').val().trim();
        const email = $('#email').val().trim();
        const mensaje = $('#mensaje').val().trim();

        // CONTROL TÉCNICO: Si algún campo está vacío o es inválido
        if (nombre === "" || email === "" || mensaje === "" || $('.is-invalid').length > 0) {
            
            // Forzamos el estado de error visual si intentó enviar vacío
            if(nombre === "") markInvalid($('#nombre'));
            if(email === "") markInvalid($('#email'));
            if(mensaje === "") markInvalid($('#mensaje'));

            alert("⚠️ Error: Todos los campos son obligatorios, incluyendo tu consulta.");
            return; // Cortamos la ejecución aquí, no hay Spinner ni Modal
        }

        // Si pasó el control, procedemos con el envío
        const btn = $('#btn-submit');
        const spinner = $('#spinner-carga');
        const btnText = $('.btn-text');

        btn.prop('disabled', true);
        btnText.text('Enviando...');
        spinner.removeClass('d-none');

        setTimeout(function() {
            const myModal = new bootstrap.Modal(document.getElementById('modal-exito'));
            myModal.show();

            $('#form-contacto')[0].reset();
            $('.form-control-custom').removeClass('is-valid is-invalid');
            
            btn.prop('disabled', false);
            btnText.text('Enviar Mensaje');
            spinner.addClass('d-none');
        }, 2000);
    });
});

$(document).ready(function() {
    
    // --- 1. ACTIVACIÓN DE TOOLTIPS (Bootstrap 5) ---
    // Esta línea busca todos los elementos con data-bs-toggle="tooltip" y los activa
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // --- 2. HOVER DINÁMICO EXTRA (Opcional con jQuery) ---
    // Si querés que al pasar el mouse por una celda de precio, esta se agrande un poco
    $('.tabla-precios td').hover(
        function() {
            if($(this).text().includes('$')) {
                $(this).css({'color': 'var(--color-secundario)', 'transform': 'scale(1.1)', 'transition': '0.2s'});
            }
        }, 
        function() {
            if($(this).text().includes('$')) {
                $(this).css({'color': 'var(--color-primario)', 'transform': 'scale(1)'});
            }
        }
    );
});

$(document).ready(function() {

    // --- 1. FECHA ACTUAL ---
    const fechaElemento = $('#fecha-actual');
    if (fechaElemento.length) {
        const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        fechaElemento.text(new Date().toLocaleDateString('es-AR', opciones));
    }

    // --- 2. FILTRADO LÓGICO ---
    $('.btn-filter').on('click', function() {
        const categoria = $(this).data('filter');

        // UI: Cambiar estado activo del botón
        $('.btn-filter').removeClass('active');
        $(this).addClass('active');

        if (categoria === 'all') {
            // Mostramos todo
            $('.art-card.principal').fadeIn(400);
            $('.filter-item').fadeIn(400);
        } else {
            // A) Noticia Principal: Se muestra solo si tiene la clase
            if ($('.art-card.principal').hasClass(categoria)) {
                $('.art-card.principal').fadeIn(400);
            } else {
                $('.art-card.principal').hide();
            }

            // B) Noticias de la Grilla (filter-item)
            $('.filter-item').hide(); // Escondemos todas las columnas
            $('.filter-item.' + categoria).fadeIn(400); // Mostramos las que coincidan
        }
    });

    // --- 3. ANIMACIÓN REVEAL (Intersection Observer) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('active');
            }
        });
    }, { threshold: 0.1 });

    $('.reveal').each(function() {
        observer.observe(this);
    });
});