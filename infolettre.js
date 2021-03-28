let infolettre = document.querySelector(".btnInfolettre");
let accueilSection = document.querySelector(".mainContent");
let accueilSection1 = document.querySelector(".svgImg");
let infoSection = document.querySelector(".infolettre");
let fermer = document.querySelector(".fermer");

infolettre.addEventListener("click" , () =>{
    infoSection.classList.remove("displayNone");
    accueilSection.classList.add("displayNone");
    accueilSection1.classList.add("displayNone");
});

fermer.addEventListener("click" , () =>{
    infoSection.classList.add("displayNone");
    accueilSection.classList.remove("displayNone");
    accueilSection1.classList.remove("displayNone");
});

infoSection.addEventListener("mouseover",() =>{
    infoSection.setAttribute("style" , "transform:scale(1)");
});

infoSection.addEventListener("mouseleave",() =>{
    infoSection.setAttribute("style" , "transform:scale(0.7)");
});