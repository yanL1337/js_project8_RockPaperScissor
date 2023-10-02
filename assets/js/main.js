const auswahl = document.querySelectorAll(".rounds");
let lange = document.querySelectorAll(".choose");
const radios = document.querySelector(".auswahl");
const runden = document.querySelector(".counter");
const rundeFrom = document.querySelector("#roundFrom");
const rundeTill = document.querySelector("#roundTill");
const playerChoose = document.querySelector(".turnPlayer");
const compChoose = document.querySelector(".turnComp");
const pPoints = document.querySelector("#countPlayer");
const cPoints = document.querySelector("#countComp");
const commentary = document.querySelector("#commentary");

let rounds = 0;
let count = 0;
let compTurn = 0;
let pointsPlayer = 0;
let pointsComp = 0;
let commentaryText = "";
const items = ["✊", "✋", "✌️"];

lange.forEach((elt) => {
  elt.addEventListener("change", (event) => {
    rounds = Number(event.target.value);
  });
});

auswahl.forEach((elt) => {
  elt.addEventListener("click", () => {
    event.preventDefault;
    count++;
    if (count > rounds) {
      alert(
        `GAME OVER Winner ist der ${
          pointsPlayer > pointsComp ? "Spieler" : "Computer"
        }`
      );
      window.location.replace("index.html");
    }
    compTurn = Math.floor(Math.random() * 3);
    radios.classList.add("hide");
    runden.classList.remove("hide");

    rundeFrom.innerHTML = count;
    rundeTill.innerHTML = rounds;

    playerChoose.innerHTML = elt.innerHTML;
    compChoose.innerHTML = items[compTurn];

    switch (true) {
      case elt.textContent.trim() === items[compTurn]:
        pointsComp++;
        pointsPlayer++;
        commentaryText = `${elt.textContent.trim()} und ${
          items[compTurn]
        } ergibt unentschieden`;

        break;

      case elt.textContent.trim() === "✋" && items[compTurn] === "✊":
      case elt.textContent.trim() === "✌️" && items[compTurn] === "✋":
      case elt.textContent.trim() === "✊" && items[compTurn] === "✌️":
        pointsPlayer++;
        commentaryText = `${elt.textContent.trim()} Beats ${items[compTurn]}`;
        break;

      default:
        pointsComp++;
        commentaryText = `${items[compTurn]} Beats ${elt.textContent.trim()} `;
        break;
    }
    commentary.innerHTML = commentaryText;
    cPoints.innerHTML = pointsComp;
    pPoints.innerHTML = pointsPlayer;
  });
});
