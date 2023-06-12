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

  //animação própria
  $(document).ready(function() {
    $('#carouselExampleCaptions').on('slide.bs.carousel', function(e) {
      var $currentSlide = $(e.relatedTarget).find('.animacaoFadeInUpBig');
      $currentSlide.addClass('fadeInUpBig');
    });
  });
  

  