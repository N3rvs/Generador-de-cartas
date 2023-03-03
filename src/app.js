window.onload = function() {
  let paloArriba = document.querySelector("#simboloArriba");
  let numero = document.querySelector("#numero");
  let paloAbajo = document.querySelector("#simboloAbajo");

  const palos = ["corazon", "diamante", "pica", "trebol"];
  const valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const eleccionCarta = (palos, valores) => {
    const carta = [];
    carta.push(palos[Math.floor(Math.random() * palos.length)]);
    carta.push(valores[Math.floor(Math.random() * valores.length)]);
    return carta;
  };
  const asignarColor = arr => {
    if (arr[0] === "corazon" && arr[0] === "diamante") {
      paloArriba.style.color = "red";
      numero.style.color = "red";
      paloAbajo.style.color = "red";
    } else {
      paloArriba.style.color = "black";
      numero.style.color = "black";
      paloAbajo.style.color = "black";
    }
  };
  const asignarPalo = arr => {
    if (arr[0] === "corazon") {
      paloArriba.textContent = "♥";
      paloAbajo.textContent = "♥";
    } else if (arr[0] === "diamante") {
      paloArriba.textContent = "♦";
      paloAbajo.textContent = "♦";
    } else if (arr[0] === "trebol") {
      paloArriba.textContent = "♣";
      paloAbajo.textContent = "♣";
    } else {
      paloArriba.textContent = "♠";
      paloAbajo.textContent = "♠";
    }
  };
  const asignarValor = arr => {
    numero.innerHTML = arr[1];
  };
  const generacionCarta = () => {
    const carta = eleccionCarta(palos, valores);
    asignarColor(carta);
    asignarPalo(carta);
    asignarValor(carta);
  };

  generacionCarta();
  document.querySelector(".boton").addEventListener("click", generacionCarta);
};
