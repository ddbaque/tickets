// Obtén el elemento body del documento
const body = document.body;

// Crea elementos para el encabezado, productos y totales
const header = document.createElement("div");
const products = document.createElement("div");
const totals = document.createElement("div");

// Agrega contenido a los elementos
header.innerHTML =
  "<h1>Restaurante XYZ</h1><p>Dirección: Calle 123, Ciudad</p>";
products.innerHTML =
  "<h2>Productos:</h2><ul><li>Producto 1 - $10.00</li><li>Producto 2 - $15.00</li></ul>";
totals.innerHTML = "<h2>Total: $25.00</h2>";

// Agrega los elementos al body del documento
body.appendChild(header);
body.appendChild(products);
body.appendChild(totals);
