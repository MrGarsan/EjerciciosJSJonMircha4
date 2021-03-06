//12) Programa una función que determine si un número es primo (Aquel que solo es divisible por sí mismo y 1).
console.log("%cEjercicio 12", "font-weight:bold; font-size:12px");

const primo = (numero = undefined) => {
  // Verificadores
  const texto = new RegExp("^([0-9])*$", "ig");
  if (numero === undefined) return console.warn("Inserte un número válido.");
  if (Math.sign(numero) === -1)
    return console.error(
      "Ingresastes un número negativo, ingresa uno positivo."
    );
  if (!texto.test(numero))
    return console.error(
      "Ingresastes un texto, objeto o array, ingresa un número válido."
    );
  if (numero === 1 || numero === 0)
    return console.error(`El 0 y el 1 no son válidos para esta función.`);
  if (numero === 2) return console.info("El numero 2 es un número primo.");

  //Numero primo
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0)
      return console.log(`El número ${numero} no es un número primo.`);
    else return console.log(`El número ${numero} es un número primo.`);
  }
};

primo(5);

//13) Programa una función que determine si un número es par o impar.
console.log("%cEjercicio 13", "font-weight:bold; font-size:12px");
const parOImpar = (numero) => {
  // Verificadores
  const texto = new RegExp("^([0-9])*$", "ig");
  if (numero === undefined) return console.warn("Inserte un número válido.");
  if (Math.sign(numero) === -1)
    return console.error(
      "Ingresastes un número negativo, ingresa uno positivo."
    );
  if (!texto.test(numero))
    return console.error(
      "Ingresastes un texto, objeto o array, ingresa un número válido."
    );

  //Par o Impar
  numero % 2 === 0
    ? console.info(`El número ${numero} es par.`)
    : console.info(`El número ${numero} es impar.`);
};

parOImpar(4);

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa
console.log("%cEjercicio 14", "font-weight:bold; font-size:12px");
const conversorTemperatura = (grado = undefined, unidad = "") => {
  //Variables y constantes
  const numero = new RegExp("^([0-9])*$", "ig");
  const texto = new RegExp("^([C,F])*$", "ig");
  let farenheit = grado * (9 / 5) + 32;
  let celsius = (grado - 32) * (5 / 9);
  //Verificadores
  if (grado === undefined) return console.warn("Inserte un número válido.");
  if (!numero.test(grado))
    return console.error(
      "Ingresastes un texto, objeto o array, ingresa un número válido."
    );

  if (!unidad)
    return console.warn("Inserte una unidad termométrica válida Ej. C o F");
  if (typeof !unidad === "string")
    return console.error(
      "Ingresastes un numero, objeto o array, ingresa un texto válido Ej C o F."
    );
  if (!texto.test(unidad))
    return console.error(
      "Ingresaste otro texto diferente a una unidad termométrica válida. Inserte C para Celsius o F para Farenheit."
    );

  // Conversor de temperatura
  //Hacemos los datos de unidad termométrica en minuscula.
  unidad = unidad.toLowerCase();
  //Celsius a Farenheit
  if (unidad === "c") {
    let unidadF = unidad.replace("c", "F");
    return console.log(
      `${grado}°${unidad} representan ${farenheit}°${unidadF}.`
    );
  }
  //Farenheit a Celsius
  if (unidad === "f") {
    let unidadC = unidad.replace("f", "C");
    return console.log(`${grado}°${unidad} representan ${celsius}°${unidadC}.`);
  }
};

conversorTemperatura(5, "f");

console.log(
  "%c4ta Ronda de ejercicios hecha, gracias Jon, hecho por Codereggs",
  "color:lightblue; font-size:20px"
);
