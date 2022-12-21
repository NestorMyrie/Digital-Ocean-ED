const productsSubMenu = document.getElementById("productsSubMenu");
const navarProductsButton = document.querySelector(".products");
const blockBgBack = document.getElementById("bg-back");
const Menu_links_collection = document.getElementById("Menu_links_collection");

// Para que este panel funcione correctamente se debe colocar un botton tipo A con el mismo nombre de clase
//que se le debe de poner como id al contenedor que queremos mostrar
//tambien los elementos a mostrar deben de tener esta clase .navItems

const mainmenu = document.getElementById("mainmenu");

mainmenu?.addEventListener("click", (ele) => {
  if (ele.target.tagName === "A") {
    ele.preventDefault();

    // Verificamos que el enlace tenga una clase indetificadora
    try {
      if (ele.target.className !== "") {
        const panel = document.getElementById(`${ele.target.className}`);

        //
        //Removemo el active a los elementos que lo tengan
        [...blockBgBack.childNodes]
          .filter((elemento) => elemento.tagName == "DIV")
          .map((removingActive) =>
            removingActive.classList.remove("navItemActive")
          );
        //

        panel.classList.add("navItemActive");
        blockBgBack.classList.add("block-bg-back");

        //desactivamos el menu dandole afuera
        blockBgBack.addEventListener("click", () => {
          blockBgBack.classList.remove("block-bg-back");
          panel.classList.remove("navItemActive");
        });
      }
    } catch {
      console.error("error", "Elemento en el Dom no encontrado");
    }
  }
});
const franja1 = document.getElementById("firstColumnAnimation");
const franja2 = document.getElementById("secondColumnAnimation");

//Mobilidad de contenedor scrollbar
function scrollXTo(position = "l", elem) {
  const maxScrollWidth = elem.scrollWidth - elem.clientWidth;
  let incrementValue = position==='l'?0:maxScrollWidth;
  let isEnd = position=='l'?false:true;

  if(position=='r'){
    elem.scrollTo({ left: incrementValue });
  }
  setInterval(() => {
    //Si la animacion no ha acabado
    if (!isEnd) {
      //verifiqcamos que el vamor del scroll no sea mayor o igual al scroll maximo, si si lo es damos la animacion
      //como finalizada
      if (incrementValue >=  maxScrollWidth) {
        isEnd = true;
        return;
      }
      //si no a acabado seguimos incrementando
      incrementValue += 2;
      elem.scrollTo({ left: incrementValue , behavior: 'smooth'});
    } else {
      if (incrementValue <= 0) {
        isEnd = false;
        return;
      }
      incrementValue -= 2;
      elem.scrollTo({ left: incrementValue , behavior: 'smooth'});
    }
  }, 100);

}

scrollXTo("r", franja2);
scrollXTo("l", franja1);
