console.log("Glória a DEUS");

var campoPesquisa= document.querySelector("#filtrar-tabela");

campoPesquisa.addEventListener("input",function(){
    console.log(this.value);

var pacientes=document.querySelectorAll(".paciente");

if(this.value.length>0){
   for(var i=0; i<pacientes.length;i++){
        var paciente=pacientes[i];
        var tdNome= paciente.querySelector(".info-nome");
        var nome= tdNome.textContent;
        var expressaoRegular= new RegExp(this.value,"i");
        
       if(!expressaoRegular.test(nome)){
            paciente.classList.add("esconde-dados");
        }else{
            paciente.classList.remove("esconde-dados");
        }
    }
}else{
        for(var i=0; i<pacientes.length;i++){
            var paciente=pacientes[i];
            paciente.classList.remove("esconde-dados");
        }
    }
});