console.log("Glória a DEUS!");

var selecionaPaciente= document.querySelectorAll("#tabela-pacientes");


selecionaPaciente.forEach(function(selecionaPaciente){
    selecionaPaciente.addEventListener("dblclick",function(event){
        event.target.parentNode.classList.add("fadeOut");
        
        setTimeout(function(){
            event.target.parentElement.remove();    
        },500);
        
    });
});