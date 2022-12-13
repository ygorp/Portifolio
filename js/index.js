const btnMobile = document.getElementById('btn-mobile');
const btnAbout = document.getElementById('btn-about');
const homecell = document.getElementById('link-btn1');
const comunica = document.getElementById('link-btn2');

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

function orcamento() {
  window.open('https://api.whatsapp.com/send?phone=5527992037927', '_blank');
}
function linkBtn1() {
  window.open('https://loja-homecell.vercel.app/', '_blank');
}
function linkBtn2() {
  window.open('https://projeto-pei-multivix.vercel.app/', '_blank');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

btnAbout.addEventListener('click', orcamento);
homecell.addEventListener('click', linkBtn1);
comunica.addEventListener('click', linkBtn2);

//
//