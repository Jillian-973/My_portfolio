let profil = document.getElementById("profil");
let comptetence = document.getElementById("compétence");
let portfolio = document.getElementById("portfolio");
let contact = document.getElementById("contact");
let qui = document.getElementById("qui");

profil.addEventListener("click", function(){
    window.scroll({
        top : 37,
        behavior : "smooth",
    });
})

qui.addEventListener("click", function(){
    window.scroll({
        top : 37,
        behavior : "smooth",
    });
})

comptetence.addEventListener("click", function(){
    window.scroll({
        top : 1100,
        behavior : "smooth",
    });
})

portfolio.addEventListener("click", function(){
    window.scroll({
        top : 1904,
        behavior : "smooth",
    });
})



contact.addEventListener("click", function(){
    window.scroll({
        top : 10000,
        behavior : "smooth",
    });
})