const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if(event.type === 'touchstart') event.preventDefault(); //Eliminar os 2 clicks do touchstart
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');

  //acessibilidade em relação a expanção do menu
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);

  //trocar mensagem de abrir menu para fechar menu aria-label
  if(active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar-menu');
  }else {
    event.currentTarget.setAttribute('aria-label', 'Abrir-menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);