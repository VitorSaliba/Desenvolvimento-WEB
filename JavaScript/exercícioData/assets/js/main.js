const h1 = document.querySelector(".container h1");
const data = new Date();

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function getDate(){
    let diaSemana = data.getDay();
    let numeroDia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    let hora = data.getHours();
    let min = data.getMinutes();
    let diaSemanaTexto;
    let mesTexto;
    
    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            break
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            break
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            break
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            break
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            break
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            break
        case 6:
            diaSemanaTexto = 'Sábado';
            break
    }

    switch(mes){
        case 1:
            mesTexto = 'Janeiro';
            break
        case 2:
            mesTexto = 'Fevereiro';
            break
        case 3:
            mesTexto = 'Março';
            break
        case 4:
            mesTexto = 'Abril';
            break
        case 5:
            mesTexto = 'Maio';
            break
        case 6:
            mesTexto = 'Junho';
            break
        case 7:
            mesTexto = 'Julho';
            break
        case 8:
            mesTexto = 'Agosto';
            break
        case 9:
            mesTexto = 'Setembro';
            break
        case 10:
            mesTexto = 'Outubro';
            break
        case 11:
            mesTexto = 'Novembro';
            break
        case 12:
            mesTexto = 'Dezembro';
            break
    }

    h1.innerHTML = `${diaSemanaTexto}, ${numeroDia} de ${mesTexto} de ${ano} ` + `${zeroAEsquerda(hora)}:${zeroAEsquerda(min)}`
}

getDate();

/* Simplificado:

const h1 = document.querySelector(".container h1");
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes)

*/