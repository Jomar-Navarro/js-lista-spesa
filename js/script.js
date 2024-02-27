console.log('js-lista-spesa');

  const listaSpesa = [
  'Uova',
  'Latte',
  'Bistecca',
  'Monster Energy',
  'Biscotti',
  'Patatine',
  'Acqua',
  'Pane',
  'Pasta',
  'Guanciale',
  'Pecorino',
  'Pollo',
  'Farina',
];

let i = 0;

while (i < listaSpesa.length) {
  const articoli = listaSpesa[i];
  i++;
  document.querySelector('ol').innerHTML += `
  <li>${articoli}</li>
  `;
  console.log(articoli);
}

