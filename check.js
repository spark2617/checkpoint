var titulo=document.getElementById('titulo')
var descricao=document.getElementById("descricao")
var url=document.getElementById("url")
var submit=document.querySelector("button")
var forms=document.getElementById("form")
var invalido=document.querySelector(".invalido")
var div=document.querySelector(".tela")

   
   
   
/*
    if(titulo.value===""|| titulo.value==null){
        p.preventDefault();
        titulo.className="invalido"
         
    }
    if(descricao.value===""|| descricao.value==null){
        p.preventDefault();
        descricao.className="invalido"
         
    }
    
    if(url.value===""|| url.value==null){
        p.preventDefault();
        url.className="invalido" 
         
        
    }
    
    */
   
    
        function teste(){
            div.innerHTML+=`
    
            <div class="card">
                <h3 class="tituloDiv" >${titulo.value}</h3>
                <img class="img" src="${url.value}">
                <p class="descricao">${descricao.value}</p>
            </div>
        
        `
            
            
        }
        
    


