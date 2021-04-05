//NAVEGAÇÃO POR TABS
function initTabMenu() {
  const imgs = document.querySelectorAll('.js-tabmenu li');
  const section = document.querySelectorAll('.js-content section');
  
  section[0].classList.add('active');
  
  if(imgs.length && section.length) {
    function activeSection(index){
      section.forEach((section) => {
        section.classList.remove('active');
      });
      section[index].classList.add('active');
    }

    imgs.forEach((imgs, index) => {
      imgs.addEventListener('click', () => {
        activeSection(index);
      })
    });
  }
}

initTabMenu();

// ACCORDION LIST
function initAccordionList() {
  const termosFaq = document.querySelectorAll('.js-accordionList dt');

  termosFaq[0].classList.toggle('active');
  termosFaq[0].nextElementSibling.classList.toggle('active');

  if (termosFaq.length) {
    function activeAccordion() {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active');
    }

    termosFaq.forEach((termo) => {
      termo.addEventListener('click', activeAccordion);
    })
  }
}
initAccordionList();

//SCROLL-SUAVE-LINK-INTERNO
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();

  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  const topo = section.offsetTop;

  section.scrollIntoView({
    behavior: 'smooth',
  });

  //passo com dois parametros x ou y, ou pode passar opcao como objeto
  //top: valor que o scroll vai descer, behavior smooth faz o scroll suave
  /*window.scrollTo({
    top: topo,
    behavior: 'smooth',
  }); */
}

linksInternos.forEach((links) => {
  links.addEventListener('click', scrollToSection);
});

//ANIMAÇÃO AO SCROLL
const section = document.querySelectorAll('.js-scroll');
const metadaTela = window.innerHeight * 0.6;
section[0].classList.add('anima');

function animaScroll() {
  section.forEach((section) => {
    const top = section.getBoundingClientRect().top - metadaTela;
    
    if(top < 0) {
      section.classList.add('anima');
    } else if (top > 0) { 
      section.classList.remove('anima');
    }

  })
}

window.addEventListener('scroll', animaScroll);


