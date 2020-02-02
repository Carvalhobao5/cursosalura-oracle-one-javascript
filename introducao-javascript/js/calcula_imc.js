console.log("Glória a DEUS!");
//texto.textContent=("Nem só de pão vive o homem, mas de toda palavra que saí da boca de DEUS!");

var texto=document.querySelector(".titulo");
var botaoAdcionar=document.querySelector("#adicionar-paciente");

var trPacientes= document.querySelectorAll(".paciente");

texto.textContent="Tabela Clientes";

for(var i=0; i<trPacientes.length;i++){    
        var trPaciente= trPacientes[i];
        
        var tdPeso= trPaciente.querySelector(".info-peso");
        var tdNome= trPaciente.querySelector(".info-nome");
        var nome= tdNome.textContent;
        var peso=tdPeso.textContent;

        var tdAltura= trPaciente.querySelector(".info-altura");
        var altura= tdAltura.textContent;

        var tdImc=trPaciente.querySelector(".info-imc");

        var pesoValido= validaPeso(peso);
        var alturaValida= validaAltura(altura);

        if(!alturaValida && !pesoValido){
            tdImc.textContent="Dados inválidos";
            trPaciente.classList.add("paciente-invalido");            
        }else if(!alturaValida){
            tdImc.textContent="Altura inválida";
            tdAltura.classList.add("campo_paciente_invalido");
        }else if(!pesoValido){
            tdImc.textContent="Peso inválido";
            tdPeso.classList.add("campo_paciente_invalido");
          
        }
        
        if(pesoValido && alturaValida){
            tdImc.textContent=calculaIMC(peso,altura);
            trPaciente.classList.add("paciente-valido");
        }   
        
}


function obtemPacienteDoFormulario(form) {
    var paciente={            
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(peso,altura)
    }
}
function calculaIMC(peso,altura){
    
    var imc= peso/(altura*altura);
    return  imc.toFixed(2);
}

function validaPeso(peso){
    if(peso>0 && peso<400){
        return true;
    }else{
        return false;
    }
}
function validaAltura(altura){
    if(altura>0 && altura<2.40){
        return true;
    }else{
        return false;
    }
}