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

//FORMULÁRIO

class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);

    if(this.form) {
      this.url = this.form.getAttribute("action");
    }
  }

  displaySuccess() {
    this.form.innerHTML = this.settings.success;
  }

  displayError() {
    this.form.innerHTML = this.settings.error;
  }

  init() {
    if(this.form) this.formButton.addEventListener("click", () => this.displaySuccess());
    return this;
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "<h1 class='succes'>Mensagem enviada!</h1>",
  error: "<h1 class='error'>Não foi possivel enviar sua mensagem.</h1>",
});
formSubmit.init();