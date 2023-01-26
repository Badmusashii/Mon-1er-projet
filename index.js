const qui = document.querySelector(".qui-je-suis");
const voyages = document.querySelector(".mes-voyages");
const fiston = document.querySelector(".mon-fiston");
const contact = document.querySelector(".contact");

qui.addEventListener("dblclick", () => {
  qui.classList.add("qui-je-suis-clicked");
});

window.addEventListener("mousemove", (e) => {
  if (e.target.className != "qui-je-suis qui-je-suis-clicked") {
    qui.classList.remove("qui-je-suis-clicked");
  }
});

voyages.addEventListener("dblclick", () => {
  voyages.classList.add("voyages-clicked");
  voyages.innerHTML = `<img src="./img/mes-voyages/j1.jpg" width=30% height=74px>
  <img src="./img/mes-voyages/j2.jpg" width=30% height=74px>
  <img src="./img/mes-voyages/j3.jpg" width=30% height=74px>
  <img src="./img/mes-voyages/j4.jpg" width=30% height=74px>`;
});

window.addEventListener("mousemove", (e) => {
  if (
    e.target.className != `mes-voyages voyages-clicked` &&
    e.target.height != "74"
  ) {
    voyages.classList.remove("voyages-clicked");
    voyages.innerHTML = `<p>Mes voyages</p>
    <div class="img">
    </div>`;
  }
});

fiston.addEventListener("dblclick", () => {
  fiston.classList.add("fiston-clicked");
  fiston.innerHTML = `<img src="./img/mon-fiston/trevor1.jpg" width=30% height=74px>
  <img src="./img/mon-fiston/trevor2.jpg" width=30% height=74px>
  <img src="./img/mon-fiston/trevor3.jpg" width=30% height=74px>
  <img src="./img/mon-fiston/trevor4.jpg" width=30% height=74px>`;
});

window.addEventListener("mousemove", (e) => {
  if (
    e.target.className != `mon-fiston fiston-clicked` &&
    e.target.height != "74"
  ) {
    fiston.classList.remove("fiston-clicked");
    fiston.innerHTML = `<p>Mon fiston</p>
    <div class="img">
    </div>`;
  }
});

contact.addEventListener("dblclick", () => {
  contact.classList.add("contact-clicked");
  contact.innerHTML = `<p>Tel : 06000000000</p>
  <div class="nous-trouver">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10495.43238787195!2d2.3587078341308594!3d48.879981642582585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e72ebc10f6f%3A0xae5593252035142c!2zR2FyZSBkZSBs4oCZRXN0!5e0!3m2!1sfr!2sfr!4v1674731972764!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>`;
});

window.addEventListener("mousemove", (e) => {
  if (
    e.target.className != "contact contact-clicked" &&
    e.target.localName != `iframe` &&
    e.target.innerText != `Tel : 06000000000`
  ) {
    contact.classList.remove("contact-clicked");
    contact.innerHTML = `<p>Mes coordonnées</p>`;
  }
});
