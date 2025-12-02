# Refaccionaria Motos MX – Página Demo

Esta es una **página web demo** desarrollada para una refaccionaria de motos.  
Incluye catálogo dinámico con productos cargados desde un archivo JSON, buscador en tiempo real, modo oscuro, diseño responsivo y componentes reutilizables (header y footer).

## Demo en línea
🔗 **https://refaccionaria-demo.netlify.app/**

> Reemplaza el enlace anterior con la URL real de tu Netlify.

---

## Tecnologías utilizadas

- **HTML5**
- **CSS3 (Responsive + Animaciones + Dark Mode)**
- **JavaScript Vanilla**
- **JSON para catálogo**
- **Netlify (deploy)**
- **GitHub (repositorio)**

---

## Características principales

### Catálogo dinámico
- Productos cargados desde `productos.json`
- Imágenes, nombres y precios generados automáticamente
- Botón directo para pedir por WhatsApp

### Buscador en tiempo real
Permite filtrar productos sin recargar la página.

### Modo oscuro
- Guardado en `localStorage`
- Cambia suavemente entre claro/oscuro

### Componentes reutilizables
`header.html` y `footer.html` se cargan dinámicamente con `fetch()`, permitiendo editar solo una vez y aplicarse a todas las páginas.

### 100% Responsive
Compatible con:
- Celulares
- Tablets
- Laptops
- PC

Incluye menú hamburguesa funcional.

## Estructura del proyecto
📦 refaccionaria-demo
┣ 📂 componentes
┃ ┣ header.html
┃ ┗ footer.html
┣ 📜 index.html
┣ 📜 catalogo.html
┣ 📜 contacto.html
┣ 📜 nosotros.html
┣ 📜 productos.json
┣ 📜 styles.css
┣ 📜 scripts.js
┗ 📜 README.md

## Instalación local

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repo.git
Abre la carpeta en VS Code.

Inicia un servidor local (extensión recomendada):

Live Server

Abrir index.html.

 Cómo editar los productos

Edita el archivo productos.json:

[
  {
    "nombre": "Aceite 20W50",
    "precio": "$120 MXN",
    "imagen": "img/aceite.jpg"
  }
]

 Contacto para pedidos (WhatsApp)

Todos los productos incluyen un botón automático que abre conversación con el número:

+52 998 204 3315

Puedes modificar este número desde scripts.js.

 Licencia

Este proyecto está bajo la Licencia MIT.
Puedes usarlo, modificarlo y adaptarlo libremente.

 Autor

Cristopher Uriel Santiago De la o
cris.delao12pg@gmail.com