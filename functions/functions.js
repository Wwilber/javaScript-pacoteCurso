// *** CRIAR FUNÇÃO DENTRO DE VARIÁVEIS:

// FUNCTION EXPRESSION
// FUNCTION ANONYMOUS
// parâmetros(parameters):
const sum = function(number1,number2) {
    console.log(number1 + number2);

};

// EXECUTAR A FUNÇÃO ANÔNIMA:
sum(2,3); // passando os arguments - argumentos.

// RETORNANDO VALORES:
// FUNCTION EXPRESSION
// FUNCTION ANONYMOUS
// parâmetros(parameters):
const sum2 = function(number1,number2) {
    total = (number1 + number2);
    return total;
};

// EXECUTAR A FUNÇÃO ANÔNIMA:
let number1 = 34;
let number2 = 25;
console.log(`o número 1 é ${number1}`);
console.log(`o número 2 é ${number2}`);
console.log(`a soma é ${sum2(number1,number2)}`);
console.log(`a soma é ${total}`);

// Exemplo 2: Função é um liquidificador:

function fazerSuco(fruta1,fruta2){
    return 'suco de:  ' + fruta1 + fruta2;
}

const copo = fazerSuco('banana', 'maçã');

console.log(copo);


// function scope:

let subject = 'create video';
function createThink(subject){
    subject = 'study';
    return subject;
}
console.log(subject);
console.log(createThink(subject));
console.log(subject);


// function hoisting: como se a função fosse criada antes de ser chamada - o JS reorganiza o código.

sayMyName2(); // chamamento da função 

    function sayMyName2(){ // criação da função
        console.log('alguma coisa');
    }


    // constante ou var recebendo uma função anônima ou expressão de função - não funciona o hoisting: 
    
    // sayMyName(); // chamamento da função 
    // const sayMyName = function(){ // criação da função
    //    console.log('alguma coisa');
    //  }

    const sayMyName1 = () => { 
        console.log('teste');
    }
    sayMyName1();

    const teste = (name) => { 
        console.log(name);
    }
    teste('joao');


    function testesim(name){
        name();
    }
    testesim(
        () => {
            console.log('wilber');
        }
    )    

    