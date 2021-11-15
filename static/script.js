/*Abre e fecha menu lateral em modo mobile*/

const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click", () => {
    menuMobile.classList.contains("bi-list")
        ? menuMobile.classList.replace("bi-list", "bi-x")
        : menuMobile.classList.replace("bi-x","bi-list"); 
    body.classList.toggle("menu-nav-active");
});


/*Fecha o menu quando clicar em algum item da navbar e muda o icone para list*/

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () =>{
        if (body.classList.contains("menu-nav-active")){
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})

/*Animação do Portfólio*/

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85 ; 

    item.forEach((element) => {
        if(windowTop > element.offsetTop){
            element.classList.add("animate");
        }else {
            element.classList.remove("animate");
        }
    });
};

animeScroll();

/*Barra Lateral de Scroll*/
window.addEventListener("scroll", ()=>{
    animeScroll();
})


/*Ação de Enviar Mensagem*/
const buttonEnvio = document.querySelector("#button-envio")
const buttonEnvioDownload = document.querySelector("#button-envio-download")

buttonEnvio.addEventListener("click",  ()=>{
    buttonEnvioDownload.style.display = "block"; 
    buttonEnvio.style.display = "none"; 
})

setTimeout (() =>{
    document.querySelector("#alertaenvio").style.display = "none"; 
}, 5000)