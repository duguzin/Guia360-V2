const toggleMenuOpen = () => document.body.classList.toggle("open");
const togglePesquisaOpen = () => document.body.classList.toggle("open-pesquisa");
const toggleMenuApostilaOpen = () => document.body.classList.toggle("open-apostila");
const questionElement = document.getElementById('question');
const nextButton = document.getElementById('next-button');
const resultElement = document.getElementById('result');
const questionNumberElement = document.getElementById('question-number');
const progressBar = document.getElementById('progress-bar');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 400) {
    document.getElementById("btnVoltarTopo").classList.add("show");
  } else {
    document.getElementById("btnVoltarTopo").classList.remove("show");
  }
}

function voltarAoTopo() {
  document.body.scrollTop = 0; // Para navegadores que suportam o scrollTop
  document.documentElement.scrollTop = 0; // Para navegadores modernos
}

            
function filtrarPc(event) {
  var input = document.getElementById('inputBusca');
  var searchTerm = input.value.trim();

  // Verifica se o evento e a tecla Enter (código 13) estão disponíveis
  if (event && event.key === 'Enter' && searchTerm !== "") {
    // Redireciona para a página busca.html com o termo de pesquisa como parâmetro
    window.location.href = "busca.html?search=" + encodeURIComponent(searchTerm);
  }
}

function filtrar(event) {
  var input = document.getElementById('nav-input');
  var searchTerm = input.value.trim();

  // Verifica se o evento e a tecla Enter (código 13) estão disponíveis
  if (event && event.key === 'Enter' && searchTerm !== "") {
    // Redireciona para a página busca.html com o termo de pesquisa como parâmetro
    window.location.href = "busca.html?search=" + encodeURIComponent(searchTerm);
  }
}
  
  

  


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
