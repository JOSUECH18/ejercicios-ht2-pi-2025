const productos = [
  { nombre: 'Zapatos', precio: 100 },
  { nombre: 'Camisa', precio: 80 },
  { nombre: 'Pantalón', precio: 120 },
  { nombre: 'Corbata', precio: 50 },
];

const productosConIVA = productos.map(producto => {
  const precioConIVA = +(producto.precio * 1.12).toFixed(2);
  return {
    nombre: producto.nombre,
    precio: producto.precio,
    precioConIVA: precioConIVA
  };
});

console.log(" Productos con IVA:");
console.log(productosConIVA);


const filtrados = productosConIVA.filter(producto => producto.precioConIVA >= 100);

console.log(" Productos con IVA >= $100:");
console.log(filtrados);


const ordenados = [...productosConIVA].sort((a, b) => a.precioConIVA - b.precioConIVA);

console.log(" Productos ordenados por precio con IVA (menor a mayor):");
console.log(ordenados);
