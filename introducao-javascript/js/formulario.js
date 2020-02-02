console.log("Glória a DEUS!");

/*DECLARACAO DE VARIAVEIS GERAIS*/
var form=document.querySelector("#form-adciona");
var botaoAdcionar=document.querySelector("#adicionar-paciente");
var tabela=document.querySelector("#tabela-pacientes");

/*FIM DA DECLAÇÃO DE VARIAVES GERAIS*/

/*DECLAÇÃO DE FUNCOES*/

function adcionaPacienteNaTabela(paciente){
    var pacienteTR= montaTR(paciente);
    tabela.appendChild(pacienteTR);
    
}
function adcionaItemTabela(event){
    
    event.preventDefault();    
    
    var paciente = obtemPacienteDoFormulario(form);
    var erros= validaPaciente(paciente);
    
    if(!validaPaciente(paciente)){
        alert("Dados inválidos!");
        return;
    }
    if(erros.length>0){
        exibeMensagemErro(erros);
        return;
    }
    form.reset();
    
    var mensagensErros= document.querySelector("#mensagens-erros");
    mensagensErros.innerHTML="";
    adcionaPacienteNaTabela(paciente);
}
function obtemPacienteDoFormulario(form) {
    var paciente={
                    
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value,form.altura.value)
    }
    return paciente;
}
function montaTR(paciente){
    var pacienteTR= document.createElement("tr");
    pacienteTR.classList.add("paciente");

    pacienteTR.appendChild(montaTD(paciente.nome,"info-nome"));
    pacienteTR.appendChild(montaTD(paciente.peso,"info-peso"));
    pacienteTR.appendChild(montaTD(paciente.altura,"info-altura"));
    pacienteTR.appendChild(montaTD(paciente.gordura,"info-gordura"));
    pacienteTR.appendChild(montaTD(paciente.imc,"info-imc"));

    return pacienteTR;

}
function montaTD(dado,classe){
    var td=document.createElement("td");
    td.textContent=dado;
    td.classList.add(classe);

    return td;
}
function validaPaciente(paciente){
    var erros=[];
    var mensagem="não pode ficar sem preenchimento!";
    var caracterErro="*";
    
    if(paciente.nome.length==0) erros.push(caracterErro+"O campo nome "+mensagem);
    
    if (paciente.peso.length==0) erros.push(caracterErro+"O campo peso "+mensagem);
    
    if (paciente.altura.length==0) erros.push(caracterErro+"O campo altura "+mensagem);
    
    if (paciente.gordura==0) erros.push(caracterErro+"O campo gordura "+mensagem);
    
    if(!validaPeso(paciente.peso)) erros.push(caracterErro+"Peso inválido!");
    
    if(!validaAltura(paciente.altura)) erros.push(caracterErro+"Altura inválida!");
    return erros;
}
function exibeMensagemErro(erros){
    var listaErros= document.querySelector("#mensagens-erros");
    listaErros.innerHTML="";
    erros.forEach(function(erro){
                  var itemLista= document.createElement("li");
                    itemLista.textContent=erro;
                    listaErros.appendChild(itemLista);
                  });
}

botaoAdcionar.addEventListener("click",adcionaItemTabela);
