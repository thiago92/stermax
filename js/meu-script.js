//atraso para o fechamento do dropdown
document.addEventListener("DOMContentLoaded", function() {
var dropdown = document.querySelector(".dropdown");
var submenu = dropdown.querySelector(".sub-menu");
var timeout;

// Função para exibir o submenu
function showSubMenu() {
    clearTimeout(timeout);
    submenu.style.display = "block";
}

// Função para ocultar o submenu com atraso
function hideSubMenu() {
    timeout = setTimeout(function() {
    submenu.style.display = "none";
    }, 500); // Ajuste o valor do atraso em milissegundos aqui (500 = 0,5 segundos)
}

// Evento de passar o cursor sobre o dropdown
dropdown.addEventListener("mouseenter", showSubMenu);

// Evento de tirar o cursor do dropdown
dropdown.addEventListener("mouseleave", hideSubMenu);

// Evento de passar o cursor sobre o submenu
submenu.addEventListener("mouseenter", showSubMenu);

// Evento de tirar o cursor do submenu
submenu.addEventListener("mouseleave", hideSubMenu);
});

//navMenu fixada do topo
window.addEventListener("scroll", function() {
    var navMenu = document.querySelector(".navMenu");
    var navTopo = document.querySelector(".navTopo");
  
    if (window.scrollY > 50) {
        navMenu.classList.add("fixed-top");
        navTopo.style.marginBottom = navMenu.offsetHeight + "px";
    } else {
        navMenu.classList.remove("fixed-top");
        navTopo.style.marginBottom = "0";
      }
});

//Form do telefone
let tel = $("input[name=tel]");
    tel.mask('(00) 0 0000-0000', {reverse: false});

//Evento para form
$(document).ready(function() {
  $('#enviarBtn').on('click', function() {
    $('.erro-mensagem').remove(); // Remover as mensagens de erro existentes

    var nome = $('#nome').val();
    var email = $('#email').val();
    var atendimento = $('#inputState').val();
    var tel = $('#tel').val();
    var mensagem = $('#mensagem').val();

    if (!nome) {
      $('#nome').after('<div class="erro-mensagem">Falta preencher este campo</div>');
    } else {
      $('#nome').next('.erro-mensagem').hide();
    }

    if (!email) {
      $('#email').after('<div class="erro-mensagem">Falta preencher este campo</div>');
    } else if (!validarEmail(email)) {
      $('#email').after('<div class="erro-mensagem">Digite um e-mail válido</div>');
    } else {
      $('#email').next('.erro-mensagem').hide();
    }

    if (atendimento === '') {
      $('#inputState').after('<div class="erro-mensagem">Falta preencher este campo</div>');
    } else {
      $('#inputState').next('.erro-mensagem').hide();
    }

    if (!tel) {
      $('#tel').after('<div class="erro-mensagem">Falta preencher este campo</div>');
    } else {
      $('#tel').next('.erro-mensagem').hide();
    }

    if (!mensagem) {
      $('#mensagem').after('<div class="erro-mensagem">Falta preencher este campo</div>');
    } else {
      $('#mensagem').next('.erro-mensagem').hide();
    }

    if (nome && email && validarEmail(email) && atendimento !== 'Atendimento ao cliente' && tel && mensagem) {
      alert('Todos os campos foram preenchidos. O formulário pode ser enviado.');
    }
  });

  function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});

//Botão no navbar no modo responsivo
document.getElementById('toggle-button').addEventListener('click', function() {
  var icon = document.getElementById('toggle-icon');
  var logo = document.getElementById('logo-img');

  if (icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

//Evento de clique para o dropdown no modo responsivo
var dropdowns = document.getElementsByClassName("meu-dropdown-btn");

for (var i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener("click", function() {
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

// Adicione este código se você quiser que o dropdown seja fechado ao clicar fora dele
window.onclick = function(event) {
  if (!event.target.matches('.meu-dropdown-btn')) {
    var dropdownContents = document.getElementsByClassName("meu-dropdown-content");
    for (var i = 0; i < dropdownContents.length; i++) {
      var openDropdown = dropdownContents[i];
      if (openDropdown.style.display === 'block') {
        openDropdown.style.display = 'none';
      }
    }
  }
}

// Meus accordion na página do F.A.Q
const accordion_item = document.querySelectorAll(".accordion_item");

accordion_item.forEach((item) => {
  const accordion_header_item = item.querySelector(".accordion_header");

  accordion_header_item.addEventListener("click", () => {
    const accordion_content_item = item.querySelector(".accordion_content");

    const item_actived = document.querySelector(".active");

    VerifyActive(item, accordion_content_item, item_actived);
  });
});

function VerifyActive(item, content, content_actived) {
  const icon_item = item.querySelector(".icon");
  const icon_item_active = document.querySelectorAll(".icon");

  icon_item_active.forEach((item) => (item.innerHTML = '<i class="fa-solid fa-plus"></i>'));

  if (content_actived) {
    content_actived.style.height = 0;
    content_actived.classList.remove("active");
  }

  if (content !== content_actived) {
    icon_item.innerHTML = '<i class="fa-solid fa-minus"></i>';
    content.classList.add("active");
    content.style.height = content.scrollHeight + 10 + "px";
  }
}








