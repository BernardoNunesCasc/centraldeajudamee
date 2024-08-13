
let botoes = [];

let tutoriais = [];

let faqs = [];

function loadBotoes(func) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    botoes = JSON.parse(xhr.response);
    func();
  });

  xhr.addEventListener('error', () => {
    gerarHTMLerror();
  })

  xhr.open('GET', 'http://localhost:3512/botoes');
  xhr.send();
}

function loadTutos(func) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    tutoriais = JSON.parse(xhr.response);
    func();
  });

  xhr.addEventListener('error', () => {
    gerarHTMLerror();
  })

  xhr.open('GET', 'http://localhost:3512/tutoriais');
  xhr.send();


}


function loadFaqs(func) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    faqs = JSON.parse(xhr.response);
    func();
  });

  xhr.addEventListener('error', () => {
    gerarHTMLerror();
  })

  xhr.open('GET', 'http://localhost:3512/faqs');
  xhr.send();



}

function gerarHTMLerror() {
  const errorHTML = `
    <div class="error-container">
            <div class="error-img-container">
                <img src="images/404 Error-amico.png">
            </div>
            <div class="error-text">
                <p>Ops! Ocorreu um erro, volte novamente mais tarde.</p>
            </div>
        </div>
  `

  const footer = document.querySelector("footer");
  footer.classList.add('footer-error');

  const search = document.querySelector('.search-bar-container');

  search.classList.add('hide');

  document.querySelector("main").innerHTML = errorHTML;
}

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  document.querySelector('.loader-screen').classList.toggle("loading");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(document.body.firstChild);
    document.querySelector('.loader-screen').classList.add("loaded");
  })
})



