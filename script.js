let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

// Función para desplazarse horizontalmente
function scrollHorizontal(containerId, direction) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const scrollAmount = 320; // Define la cantidad de desplazamiento en píxeles (ancho tarjeta + gap)
    
    container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
    });
}

// Lógica del Modal de Convocatoria
document.addEventListener("DOMContentLoaded", function() {
    // Mostrar el modal cuando la página carga
    const modal = document.getElementById("modal-convocatoria");
    if (modal) {
        // Un pequeño retraso para que no sea tan agresivo
        setTimeout(() => {
            modal.style.display = "flex";
        }, 1000);
    }
});

function cerrarModal() {
    const modal = document.getElementById("modal-convocatoria");
    if (modal) {
        modal.style.display = "none";
    }
}
