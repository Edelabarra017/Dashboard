export function saludando() {
  alert("hola");
}

const btnLlamador = document.getElementById("btnLlamador");
const navdash = document.querySelector(".navdash");

btnLlamador.addEventListener("click", () => {
  navdash.classList.toggle("oculto");
});
window.boton1 = boton1;
window.boton2 = boton2;
window.boton3 = boton3;
export async function boton1() {
  limpiarCanva();
  crearcanvas();
  await llamarapi1();
}

export async function boton2() {
  limpiarCanva();
  crearcanvas();
  await llamarapi2();
}

export async function boton3() {
  limpiarCanva();
  crearcanvas();
  await llamarapi3();
}

async function llamarApi(url, startIndex, endIndex) {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    const eur = data.eur;
    const keys = Object.keys(eur).slice(startIndex, endIndex);
    const values = keys.map((key) => eur[key]);

    createChart(keys, values);
  } catch (error) {
    console.error(error);
  }
}

async function llamarapi1() {
  await llamarApi(
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json",
    0,
    5
  );
}

async function llamarapi2() {
  await llamarApi(
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json",
    5,
    10
  );
}

async function llamarapi3() {
  await llamarApi(
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json",
    10,
    15
  );
}

function createChart(labels, data) {
  const ctx = document.getElementById("myChart").getContext("2d");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "EUR Values",
          data: data,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
window.limpiarCanva = limpiarCanva;
function limpiarCanva() {
  $("#caja").html("");
}

function crearcanvas() {
  var caja = document.getElementById("caja");
  var canvas = document.createElement("canvas");

  canvas.id = "myChart";
  caja.appendChild(canvas);
}
