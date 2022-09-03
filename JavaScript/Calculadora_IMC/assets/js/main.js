//Capturar o evento de submit do formulário
const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    let inputAltura = document.querySelector("#altura")
    let altura = Number(inputAltura.value)
    
    let inputPeso = document.querySelector("#peso")
    let peso = Number(inputPeso.value)

    let p1 = document.querySelector("#p1")
    p1.style.color = 'black'
    let p2 = document.querySelector("#p2")
    p2.style.color = 'black'
    let p3 = document.querySelector("#p3")
    p3.style.color = 'black'
    let p4 = document.querySelector("#p4")
    p4.style.color = 'black'
    let p5 = document.querySelector("#p5")
    p5.style.color = 'black'
    let p6 = document.querySelector("#p6")
    p6.style.color = 'black'

    if (!peso) {
        setResultado('Peso inválido!', false)
        return
    }

    if (!altura) {
        setResultado('Altura inválida!', false)
        return
    }

    let imc = (peso / (altura * altura)).toFixed(2)

    const msg = `Seu IMC é ${imc}`
    
    setResultado(msg, true)

    if (imc < 18.5){
        p1.style.color = 'red'
    } else if (imc >= 18.5 && imc <= 24.9){
        p2.style.color = 'red'
    } else if (imc >= 25 && imc <= 29.9){ 
        p3.style.color = 'red'
    } else if (imc >= 30 && imc <= 34.9){
        p4.style.color = 'red'
    } else if (imc >= 35 && imc <= 39.9){
        p5.style.color = 'red'
    } else if  (imc >= 40){
        p6.style.color = 'red'
    }
})


function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
    const p = document.createElement('p')

    if (isValid){
        p.classList.add('paragrafo-resultado')
    } else{
        p.classList.add('bad')
    }

    p.classList.add('paragrafo-resultado')
    p.innerHTML = msg
    resultado.appendChild(p)
}