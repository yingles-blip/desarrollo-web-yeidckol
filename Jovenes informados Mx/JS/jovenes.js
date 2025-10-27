// --- DATOS DE LOS PERRITOS ---
const perros = [
  // Machos
  { id: 1, name: "Rayo", genero: "macho", image: "img/rayo.jpeg", description: "Perrito lleno de energía que ama correr y explorar. Es muy apegado a las personas y disfruta de los paseos sin correa, buscando siempre nuevas aventuras." },
  { id: 2, name: "Manchas", genero: "macho", image: "img/manchas.jpeg", description: "Un perro muy alegre y juguetón, ideal para familias con niños. Es un compañero cariñoso y leal que disfruta de las caricias y los momentos de diversión." },
  { id: 3, name: "Paco", genero: "macho", image: "img/paco.jpeg", description: "Perrito energético y sociable que se lleva bien con otros perros y personas. Es muy inteligente y disfruta aprendiendo trucos, siendo perfecto para una familia activa." },
  { id: 4, name: "Guardián", genero: "macho", image: "img/guardian.jpeg", description: "Perro con carácter protector y leal, ideal para familias que buscan un compañero seguro y noble. Es tranquilo, equilibrado y se adapta bien a la convivencia con otros animales." },
  { id: 5, name: "Trueno", genero: "macho", image: "img/trueno.jpeg", description: "Un perrito joven y amistoso, lleno de entusiasmo. Le encanta jugar a la pelota y es un compañero cariñoso y leal para cualquier aventura familiar." },
  
  // Hembras
  { id: 6, name: "Nala", genero: "hembra", image: "img/nala.avif", description: "Cachorrita dulce y juguetona con una personalidad encantadora. Está buscando una familia amorosa que le ofrezca un hogar cálido y lleno de diversión." },
  { id: 7, name: "Estrella", genero: "hembra", image: "img/estrella.jpeg", description: "Perrita entusiasta y simpática que ama los paseos y los juegos. Es muy afectuosa y se adapta a momentos tanto activos como de calma, ideal para cualquier hogar." },
  { id: 8, name: "Tala", genero: "hembra", image: "img/tala.jpeg", description: "Perrita curiosa y atenta con un toque único en sus orejas. Su mirada noble y su naturaleza cariñosa la convierten en una compañera que siempre busca un cariño." },
  { id: 9, name: "Cacao y Canela", genero: "hembra", image: "img/cacao y canela.jpeg", description: "Dos cachorras que representan la tranquilidad y la inocencia. Canela es de color beige y Cacao, de un negro brillante. Son la imagen perfecta de un hogar lleno de paz." },
  { id: 10, name: "Luna", genero: "hembra", image: "img/luna.jpeg", description: "Perrita dulce y sociable que ama explorar y jugar en espacios abiertos. Disfruta de la compañía familiar y de las caricias, mostrando siempre su lado más tierno." },
];

// Obtener los contenedores y botones del DOM
const perrosContainer = document.getElementById("perros-container");
const filterButtons = document.querySelectorAll(".filter-btn");

// Función para renderizar las tarjetas de los perros
function renderPerros(genero) {
    let perrosToRender = [];
    if (genero === "all") {
        perrosToRender = perros;
    } else {
        perrosToRender = perros.filter(perro => perro.genero === genero);
    }

    // Limpia el contenedor antes de renderizar
    perrosContainer.innerHTML = '';

    if (!perrosToRender || perrosToRender.length === 0) {
        perrosContainer.innerHTML = '<p class="text-center w-100">No hay perritos disponibles para esta categoría.</p>';
        return;
    }

    // Crea y agrega las tarjetas de los perros
    perrosToRender.forEach(perro => {
        const cardHtml = `
            <figure class="perro-card" data-gender="${perro.genero}">
                <img src="${perro.image}" alt="Perro en adopción, nombre: ${perro.name}">
                <figcaption>
                ${perro.name}
            </figcaption>
                <div class="card-description">
                    <p>${perro.description}</p>
                </div>
            </figure>
        `;
        perrosContainer.innerHTML += cardHtml;
    });
}

// Agrega event listeners a los botones de filtro
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const genero = button.dataset.category;

        // Remueve la clase 'active' de todos los botones
        filterButtons.forEach(btn => btn.classList.remove("active"));
        // Agrega la clase 'active' al botón clickeado
        button.classList.add("active");
        
        // Renderiza las tarjetas con el filtro seleccionado
        renderPerros(genero);
    });
});

// Renderizar todos los perros al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    renderPerros('all');
});

// Función para el botón de volver al inicio
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}