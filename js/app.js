const headerToggleBtn = document.querySelector('.hamburg__open-btn')
const headerInnerWrapper = document.querySelector('.header__content')


  const  hamburgImg = document.getElementById("hamburgopen")
let toggle = true;

headerToggleBtn.addEventListener('click', () => {
  headerInnerWrapper.classList.add('show-nav');
})

hamburgImg.addEventListener('click', () => {
  toggle = !toggle;
  if(toggle){
    hamburgImg.src = "image/hamburgopen.svg";
    headerToggleBtn.addEventListener('click', () => {
      headerInnerWrapper.classList.remove('show-nav');
    })
  } else{
    hamburgImg.src="image/hamburgclose.svg"
    headerToggleBtn.addEventListener('click', () => {
      headerInnerWrapper.classList.add('show-nav');
    })
  }
})
