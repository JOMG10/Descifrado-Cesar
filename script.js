const buttonCifrar = document.getElementById("buttonCifrar");
const resultado = document.getElementById("resultado");
const alfabeto = [  "A",  "B",  "C",  "D",  "E",  "F",  "G",  "H",  "I",  "J",  "K",  "L",  "M",  "N",  "O",  "P",  "Q",  "R",  "S",  "T",  "U",  "V",  "W",  "X",  "Y",  "Z", ];
const rango = document.getElementById("rango");
const inputCifrar = document.getElementById("inputCifrar");

const buttonDescifrar = document.getElementById("buttonDescifrar");
const resultadoD = document.getElementById("resultadoD");
const rangoD = document.getElementById("rangoD");
const inputDescifrar = document.getElementById("inputDescifrar");

buttonCifrar.addEventListener("click", (e) => {
  e.preventDefault();
  const dato = [...inputCifrar.value.toUpperCase()];

  let resultadoFinal = "";

  dato.forEach((dato) => {
    alfabeto.forEach((letra, i) => {
      if (dato === letra) {
        const resultados = (i + parseFloat(rango.value)) % alfabeto.length;
        resultadoFinal += cifrador(resultados);
      }
    });
  });

  resultado.textContent = resultadoFinal;
});

const cifrador = (res) => {
  return alfabeto[res];
};

/*---------------------------------------desifrar---------------------------------------------*/

buttonDescifrar.addEventListener("click", (e) => {
  e.preventDefault();

  const dato = [...inputDescifrar.value.toUpperCase()];

  let resultadoFinal = "";

  dato.forEach((dato) => {
    alfabeto.forEach((letra, i) => {
      if (dato === letra) {
        // Cambia la dirección del rango para descifrar
        const resultados =
          (i - parseFloat(rangoD.value) + alfabeto.length) % alfabeto.length;
        resultadoFinal += descifrador(resultados);
      }
    });
  });

  resultadoD.textContent = resultadoFinal;
});

const descifrador = (res) => {
  return alfabeto[res];
};
