/*Factory Function
function criaCalculadora(){
    return {
        //Atributos
        display: document.querySelector('.display'),


        //Métodos
        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },

        clearDisplay(){
            this.display.value = '';      
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta(){
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida!');
                    return
                }

                this.display.value = String(conta);
            } catch (e){
                alert('Conta inválida!');
                return;
            }
        },

        cliqueBotoes(){
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();*/



// Constructor Function
function Calculadora() {
    //Atributos
    this.display = document.querySelector('.display');

    //Métodos
    //Inicia a calculadora
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    //Captura tecla enter
    this.capturaEnter = () => {
        document.addEventListener('keypress', e =>{
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    };

    //Capturar os cliques nos elementos
    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    //Adicionar elemento no display quando clicado
    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus(); //Volta o foco para o display para não pressionar tecla indevida
    };

    //Limpar o display
    this.clear = () => this.display.value = '';

    //Deletar um elemento
    this.del = () => this.display.value = this.display.value.slice(0, -1);

    //Realiza conta
    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta){
                alert('Conta Inválida!');
                this.display.value = '';
                return;
            };

            this.display.value = conta;
        } catch(e){
            alert('Conta Inválida!');
            this.display.value = '';
            return;
        }
    };
}

const calculadora = new Calculadora();
calculadora.inicia();