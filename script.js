// Carne - 400gr por pessoa + de 6horas - 650
// Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");



function calcular (){
    console.log ("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) /2 * criancas); 
    let qtdCerveja = cervejaPP(duracao) * adultos;
    let qtdBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) /2 * criancas);

    resultado.innerHTML = `<p> Você vai precisar de:</p>`
    resultado.innerHTML += `<p><img src="./imagens/meat.png"/>  ${qtdTotalCarne/1000}kg de Carne</p>`
    resultado.innerHTML += `<p><img src="./imagens/beer.png"/>  ${qtdCerveja/1000} Latas de Cerveja</p>`
    resultado.innerHTML += `<p><img src="./imagens/juice.png"/> ${qtdBebida/2000} L de bebida</p><br><br>`
    
    


function carnePP(duracao){
    if (duracao >= 6){
        return 650;
    } else {
        return 400;
    }
}
function cervejaPP(duracao){
    if (duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}
function bebidaPP(duracao){
    if (duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}
}
