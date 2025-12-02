document.addEventListener("DOMContentLoaded", function () {

  /* ===========================
        MODO OSCURO
  ============================ */
  const toggle = document.getElementById("darkModeToggle");
  const prefersDark = localStorage.getItem("modoOscuro") === "true";

  if (toggle) {
    // Transición suave al cargar
    document.body.style.transition = "background 0.3s, color 0.3s";

    document.body.classList.toggle("dark", prefersDark);
    toggle.checked = prefersDark;

    toggle.addEventListener("change", () => {
      document.body.classList.toggle("dark");
      localStorage.setItem("modoOscuro", toggle.checked);
    });
  }

  /* ===========================
      CARGAR HEADER Y FOOTER
  ============================ */

  // ---- HEADER ----
  fetch("componentes/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

// Ajustar padding del body según la altura real del header
const headerElem = document.querySelector("header");
if (headerElem) {
  const headerAltura = headerElem.offsetHeight;
  document.body.style.paddingTop = headerAltura + "px";
}

      // Reasignar eventos porque el header se cargó dinámicamente
      const menuToggle = document.getElementById("menu-toggle");
      const menu = document.getElementById("menu");

      if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
          menu.classList.toggle("activo");
        });

        // Cerrar el menú al hacer clic fuera
        document.addEventListener("click", (e) => {
          if (
            menu.classList.contains("activo") &&
            !menu.contains(e.target) &&
            e.target !== menuToggle
          ) {
            menu.classList.remove("activo");
          }
        });
      }
    })
    .catch(err => {
      console.error("Error cargando header:", err);
    });

  // ---- FOOTER ----
  fetch("componentes/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(err => {
      console.error("Error cargando footer:", err);
    });


  /* ===========================
       PRODUCTOS Y BUSCADOR (JSON)
  ============================ */
  const contenedor = document.getElementById("productos");
  const buscador = document.getElementById("buscador");

  // Función para pintar productos
  function mostrarProductos(lista, filtro = "") {
    if (!contenedor) return;

    contenedor.innerHTML = "";

    const filtroSanitizado = filtro.trim().toLowerCase();

    const filtrados = lista.filter(p =>
      p.nombre.toLowerCase().includes(filtroSanitizado)
    );

    if (filtrados.length === 0) {
      contenedor.innerHTML = "<p>No se encontraron refacciones.</p>";
      return;
    }

    filtrados.forEach(p => {
      const div = document.createElement("div");
      div.className = "producto";
      div.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}" loading="lazy">
        <h3>${p.nombre}</h3>
        <p>${p.precio}</p>
        <a href="https://wa.me/529982043315?text=Hola,%20quiero%20más%20info%20sobre%20${encodeURIComponent(p.nombre)}"
           target="_blank" class="btn">Pedir por WhatsApp</a>
      `;
      contenedor.appendChild(div);
    });
  }

  // Cargar productos solo si existe el catálogo
  if (contenedor && buscador) {
    fetch("productos.json")
      .then(res => res.json())
      .then(productos => {

        // Validar JSON
        if (!Array.isArray(productos) || productos.length === 0) {
          contenedor.innerHTML = "<p>No hay productos disponibles.</p>";
          return;
        }

        // Mostrar todo al inicio
        mostrarProductos(productos);

        // Buscador
        buscador.addEventListener("input", () => {
          mostrarProductos(productos, buscador.value);
        });
      })
      .catch(error => {
        console.error("Error cargando productos.json:", error);
        contenedor.innerHTML = "<p>Error al cargar los productos.</p>";
      });
  }

});
