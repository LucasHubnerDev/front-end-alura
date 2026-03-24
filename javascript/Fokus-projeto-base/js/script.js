const html = document.querySelector("html");

const img = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");

const alternarMusica = document.querySelector("#alternar-musica");
const startPauseBt = document.querySelector("#start-pause");

// cache dos elementos do botão
const startPauseText = startPauseBt.querySelector("span");
const startPauseImg = startPauseBt.querySelector("img");

const btns = [
  {
    element: document.querySelector(".app__card-button--foco"),
    contexto: "foco",
    appTitle: "Otimize sua produtividade,",
    appTitleStrong: "mergulhe no que importa.",
    temporizador: 5
  },
  {
    element: document.querySelector(".app__card-button--curto"),
    contexto: "descanso-curto",
    appTitle: "Que tal dar uma respirada?",
    appTitleStrong: "Faça uma pausa curta!",
    temporizador: 300
  },
  {
    element: document.querySelector(".app__card-button--longo"),
    contexto: "descanso-longo",
    appTitle: "Hora de voltar à superfície,",
    appTitleStrong: "Faça uma pausa longa.",
    temporizador: 900
  },
];

const musica = new Audio("./sons/luna-rise-part-one.mp3");
const fxPlay = new Audio("./sons/play.wav");
const fxPause = new Audio("./sons/pause.mp3");
const fxTimeEnd = new Audio("./sons/beep.mp3");

const timer = document.querySelector("#timer");

musica.loop = true;

let tempoDecorridoEmSegundos = 1500;
let id = null;

const desactive = () => {
  btns.forEach(({ element }) => {
    element.classList.remove("active");
  });
};

btns.forEach(({ element, contexto, appTitle, appTitleStrong, temporizador }) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("active")) return;

    // pausa antes de trocar o modo
    pausarTemporizador();

    tempoDecorridoEmSegundos = temporizador;
    viewTime();

    desactive();

    html.setAttribute("data-contexto", contexto);

    titulo.innerHTML = `${appTitle}<br />
      <strong class="app__title-strong">${appTitleStrong}</strong>`;

    img.setAttribute("src", `./imagens/${contexto}.png`);

    element.classList.add("active");
  });
});

alternarMusica.addEventListener("change", () => {
  if (alternarMusica.checked) {
    musica.play().catch((err) => {
      console.warn("Autoplay bloqueado:", err);
    });
  } else {
    musica.pause();
  }
});

const pausarTemporizador = () => {
  if (!fxPlay.paused) {
    fxPlay.pause();
  }

  startPauseText.textContent = "Iniciar";
  startPauseImg.src = "./imagens/play_arrow.png";

  fxPause.play();

  clearInterval(id);
  id = null;
};

const iniciarTemporizador = () => {
  if (id) return pausarTemporizador();
  if (tempoDecorridoEmSegundos === 0) return;

  startPauseImg.src = "./imagens/pause.png";

  if (fxPlay.paused) {
    fxPlay.play();
  }

  startPauseText.textContent = "Pausar";

  id = setInterval(() => {
    tempoDecorridoEmSegundos--;
    viewTime();

    if (tempoDecorridoEmSegundos === 0) {
      clearInterval(id);
      id = null;

      fxTimeEnd.play();

      startPauseImg.src = "./imagens/play_arrow.png";
      startPauseText.textContent = "Iniciar";

      const focoAtivo = html.getAttribute("data-contexto") == "foco"
      if(focoAtivo) {
        const event = new CustomEvent("focoFinalizado")
        document.dispatchEvent(event)
      }
    }
  }, 1000);
};

const viewTime = () => {
  const minutos = Math.floor(tempoDecorridoEmSegundos / 60);
  const segundos = tempoDecorridoEmSegundos % 60;

  const minutosFormatados = String(minutos).padStart(2, "0");
  const segundosFormatados = String(segundos).padStart(2, "0");

  timer.textContent = `${minutosFormatados}:${segundosFormatados}`;
};

startPauseBt.addEventListener("click", iniciarTemporizador);

viewTime();