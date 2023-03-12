const episodes = [
  {
    img: "./src/img/episodes/episode1.jpeg",
    title: "1 - When You're Lost in the Darkness",
    description:
      " In 2003, a mass fungal infection of mutated Cordyceps sparks a global pandemic. Joel flees with his daughter, Sarah, and brother, Tommy, from their Texas home; Sarah is killed by asoldier.",
  },

  {
    img: "./src/img/episodes/episode2.png",
    title: "2 - Infected",
    description:
      " Two days before the worldwide outbreak, in Jakarta, Indonesia, the government shows an infected corpse to a mycologist, who tells them there is no cure or vaccine.",
  },
  {
    img: "./src/img/episodes/episode3.jpg",
    title: "3 - Long, Long Time",
    description:
      " Joel and Ellie begin the hike to meet with Bill and Frank. Ellie sees evidence of the government's execution of innocents during the early days of the pandemic.",
  },
  {
    img: "./src/img/episodes/episode4.jpg",
    title: "4 - Please Hold to My Hand",
    description:
      " Traveling through Missouri, Joel and Ellie are forced to take a detour through Kansas City, where they are ambushed.",
  },
  {
    img: "./src/img/episodes/episode5.png",
    title: "5 - Resist and Survive",
    description:
      " While trying to evade the rebels, Joel and Ellie cross paths with Kansas City's most wanted man. Kathleen continues her hunt.",
  },
  {
    img: "./src/img/episodes/episode6.jpg",
    title: "6 - Kinship",
    description:
      " After ignoring the locals' advice, Joel and Ellie enter dangerous territory in search of the Fireflies and Tommy.",
  },
  {
    img: "./src/img/episodes/episode7.jpg",
    title: "7 - What We Leave Behind",
    description:
      " As Joel struggles to survive, Ellie remembers the night everything changed.",
  },
  {
    img: "./src/img/episodes/episode8.jpg",
    title: "8 - When We Most Need It",
    description:
      " Ellie comes across a vengeful group of survivors and catches the attention of their leader. A weakened Joel faces a new threat.",
  },
];

//1. acessar a lista de produtos através do DOM
const list = document.querySelector(".episodes-list");

//2. Criar uma função para percorrer todo os meus episódios que estão listadas na variável episodes

function addCard(episodes) {
  for (let i = 0; i < episodes.length; i++) {
    //3. Criar uma função que renderize epidio a episodia

    renderCard(episodes[i]);
  }
}

addCard(episodes);

function renderCard(episodio) {
  const listItem = document.createElement("li");
  listItem.classList.add("card");

  listItem.innerHTML = `
  <img
  src=${episodio.img}
  alt=${episodio.title}
/>
<div class="card-text">
  <h4>${episodio.title}</h4>
  <p>
  ${episodio.description}
  </p>
</div>
  `;

  list.appendChild(listItem);
}
