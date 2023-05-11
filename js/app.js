const headerToggleBtn = document.querySelector(".hamburg__open-btn");
const headerInnerWrapper = document.querySelector(".header__content");

const hamburgImg = document.getElementById("hamburgopen");

headerToggleBtn.addEventListener("click", () => {
  headerInnerWrapper.classList.add("show-nav");
});

let toggle = true;
hamburgImg.addEventListener("click", () => {
  toggle = !toggle;

  if (toggle) {
    hamburgImg.src = "image/open.svg";
    hamburgImg.addEventListener("click", () => {
      alert("Image is not found");
    });
  } else {
    hamburgImg.src = "image/hamburgclose.svg";
    headerToggleBtn.addEventListener("click", () => {
      headerInnerWrapper.classList.add("show-nav");
    });
  }
});
