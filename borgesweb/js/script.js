let botaoMobile = document.getElementById('bnt-mob');
let menuMobile = document.getElementById('menu-mob-lista');

function handleClick() {
  botaoMobile.classList.toggle('ativo');
  menuMobile.classList.toggle('ativo');
}

botaoMobile.addEventListener('click', handleClick);

function mudarTituloPag(id) {
  document.title = `Web Borges | ${id}`;
}
