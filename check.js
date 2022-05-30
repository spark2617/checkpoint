var titulo=document.getElementById('titulo')
var descricao=document.getElementById("descricao")
var url=document.getElementById("url")
var submit=document.querySelector("button")
var div=document.querySelector(".tela")

submit.addEventListener("click",function(){
    function colocarCard(){
        div.innerHTML+=`
        <div class="card">
            <h3 class="tituloDiv" >${titulo.value}</h3>
            <img class="img" src="${url.value}">
            <p class="descricao">${descricao.value}</p>
        </div>
    `}   
    titulo.value===""?titulo.className="invalido":titulo.className="valido"
    descricao.value===""?descricao.className="invalido":descricao.className="valido"
    url.value===""?url.className="invalido":url.className="valido"
    titulo.value==="" || descricao.value==="" || url.value===""? "":colocarCard()
})
    
        
    


