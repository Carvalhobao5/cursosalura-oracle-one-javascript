console.log("Glória DEUS!");

var botaoBusca= document.querySelector("#buscar-paciente");

botaoBusca.addEventListener("click",function(){
    
    var xhr= new XMLHttpRequest();
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
    var erroAjax= document.querySelector("#erro-ajax");
    xhr.addEventListener("load",function(){
        if(xhr.status==200){
        erroAjax.classList.add("esconde-dados");
        var resposta=xhr.responseText;
        
        var pacientes= JSON.parse(resposta);
        
        pacientes.forEach(function(paciente){
            adcionaPacienteNaTabela(paciente);
        });
    }else{
        alert("Erro: "+xhr.status);
        
        erroAjax.classList.remove("esconde-dados");
    }
    });
    xhr.send();
    
    /*http://www.transparencia.gov.br/api-de-dados/servidores/remuneracao?cpf=48192848353&mesAno=201910&pagina=1*/
    
   //xhr.close();
    
    //https://api-pacientes.herokuapp.com/pacientes
});