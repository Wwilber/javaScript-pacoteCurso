<!--
1.PRIMEIROS PASSOS:
1.1.SINTAXE: Maneira CORRETA de se escrever o código.
    #A IMPORTâNCIA DA SINTAXE:
        * Toda linguagem tem uma maneira correta de se escrever;
        * Uma boa comunicação necessita de uma boa sintaxe;
        * 82% dos erros para iniciantes de programação.  

1.2.TRÊS MANEIRAS DE EXECUTAR O JAVASCRIPT:
    1.2.1.DEVTOOLS - F12 - ABA: console;
    1.2.2.CODEPEN - console;
    1.2.3.VSCODE:
        - cria arquivo HTML, exemplo: index.html como o código javascript;
        - executa o index no navegador;
        - reveal in file - abre a pasta do arquivo;
        - clica 2 vezes pra abrir no navegador;
        - quando carregar clica F12. 
    
1.3. LOCALIZAR DE ARQUIVOS:
    * ./ - diretório local;
    
1.4. COMENTÁRIOS E OUTRAS FUNCÕES:
    //      - comentário em linha;
    /* */   - comentário em bloco;
    alt z - quebra linha VSC. 

2.TIPOS  DE DADOS
# GRAMÁTICA:
    * Elementos da Linguagem e suas combinações;
    * A arte de falar e escrever corretamente.
    
## VOCABULÁRIO:
    * Conjunto de termos e expressões;
    * Agrupamento de palavras.

* Precisamos saber como escrever;
* Precisamos saber os significados;
* precisamos continuar aprendendo, para crescer nosso vocabulário.

### DINÂMICA DO CURSO:
* Conceitos e escrita

> vamos aprender os tipos de ddos mais utilizados na linguagem: Você sabia que é possível aprender 80% de uma linguagem nova, com cerca de 20% do vocabulário? (até menos)

#### ORGANIZAR O CÓDIGO DE JAVASCRIPT:
    - criar arquivos com extensão .js;
    - minúsculo
    - sem caracter especial;

aula 02.01 - String:
    * Cadeia de caracteres:
        ** // aspas duplas:                                     Ex: console.log("Mayk");
        ** // aspas simples:                                    Ex: console.log('"Mayk"'); 
        ** // template literals ou template strings.            Ex: console.log (`Maik ${1 + 1}`); uso da crase

aula 02.02 - Number:
    * números:
        33, -33  // inteiros: podem ser positivos ou negativos - exemplo: console.log(33)
        12.5 // reais -float - exemplo: console.log(12.5/3)
        NaN // Not a Numbem(não número).
        Infinity // infinito

        console.log(33);
        console.log(33/3);
        console.log(12 === Infinity);

aula 02.03 - Boolean:
    * somente dois valores:
        true  // verdadeiro;
        false // falso.
        console.log(false);

aula 02.04 - Undefined vs null:
    * undefined:
        - indefinido - .
    
    * null:
        - nulo;
        - objeto que não possui nada dentro;
        - diferente de indefinido.

aula 02.05 - Object
    * Objeto;
    * Propriedade / atributos - características;
    * Funcionalidades / Métodos - ação.
    { propriedade: "valor" }
    Exemplo Objeto:
    console.log({
        name: "wilber",
        idade: 36
    })
    Exemplo 2:
    console.log({
        name: "wilber",
        idade: 39,
        andar: function(){
            console.log('andar')
        }
    })

aula 02.06 - array (vetores)
    * Uma lista
    * Agrupamento de dado
      ["Mayke", 36]  
      Exemplo:
        console.log(["Leite",
            "ovos",
            48,
            5
        ])

##### TIPOS DE DADOS (CONCLUSÃO):
    Conforme o ECMAScript(órgão que padroniza ao JS) standard(padrão) temos 9 tipos de dados:

    * Data types:
        - Primitive / Primitive value
        - Structural
        - Structural Primitive
    
## PRIMITIVOS:
* String 
* Number
* Boolean
* undefined
* Symbol
* BigInt 

## ESTRUTURAIS:
* Object
    * Array
    * Map
    * Set
    * Date
    * ...
* Function

## PRIMITIVO ESTRUTURAL / Structural Root Primitive
* null


3. VARIÁVEIS: 

aula 3.01. Conhecendo as variáveis:
    - Nomes simbólicos para receber algum valor;
    - Atalhos de código
    - Identificadores
    - 3 palavras reservadas para criar uma variável:
        * var 
        * let
        * const   

    // variável do tipo: var
        var clima = "Quente"
        clima = "mais Frio"
        console.log(clima)

    // variável do tipo: let
        let clima2 = "Quente"
        clima2 = "Frio"
        console.log(clima2)

    // variável do tipo: constante - não muda
        const clima3 = "Morno"
        console.log(clima3)

aula 3.02. Tipos dinâmicos:

    O JS é uma linguagem fracamente tipada e dinâmica:
        - Variáveis não precisam ter um tipo priviamente definido;
        - Podemos mudar o conteúdo da variável - tipo dinâmico;
        - Typeof = mostra o tipo da variável consultada: 
            Exemplo:
                let clima = true    // variável clima é tipo boolean 
                clima = ""          // alterou o tipo da variável Boolean para string - por isso é uma linguagem DINÂMICA.    
                console.log(typeof clima)

aula 3.03. Scope: Escopo determina a visibilidade de alguma variável no JS.
    3.03.01. Scope e Var:
        ## SCOPE:
            # Block Statement = Declaração de Bloco:
            - Vamos iniciar um bloco;
            { // INÍCIO DO BLOCO
                coloca o código aqui dentro do bloco
            } // FIM DO BLOCO
            * o bloco cria um novo escopo onde chamamos de block-scoped.

        ## VAR: 
            - var é local e também global e poderá funcionar fora de um escopo de bloco. Exemplo:
                <script>

                    console.log('> existe x antes do bloco?' x)
                    {
                        var x = 0
                    }
                    console.log('> existe x depois do bloco"',x)
                </script>
    
    3.03.02. Scope Let e Const: São locais e só funcionam no escopo onde foi criada
                <script>
                    console.log('> existe y antes do bloco?' y)
                    {
                        var y = 0
                    }
                    console.log('> existe y depois do bloco"',y)
                </script>
                - CONST: não se muda o valor, o que pode acontecer é criar a vari - const com mesmo nome em escopo diferente.
    
    3.03.03. Nomeando variáveis:
        ## CRIAR NOMES:
        - JS é case-sensitive(sensível ao caso - significa que maiúscula e minúscula são diferentes);
        - JS aceita a cadeia de caracteres unicode - pode colocar "" e acentuações no nome das variáveis.

    * Posso:
        - Iniciar com esses caracteres especiais $_;
        - Iniciar com letras;
        - Colocar acentos;
        - Letras maiúsculas e minúsculas fazem diferença

    * Não Posso:
        - Iniciar com números;
        colocar espaços vazios nos nomes.

    * Ideal:
        - Criar nomes que fazem sentido;
        - Que explique o que a variável é ou faz;
        - CamelCase = nomePessoa;
        - Snake_Case = nome_pessoa;
        - Escrever em inglês.

4. PRATICANDO E AVANÇANDO:
aula 4.03. Concatenando e interpolando variáveis:
        04.03.02. Agrupando variáveis:
            let name, age, isHuman;
            name = "mike";
            age = 18;
            isHuman = true;
            console.log(name, age, human);
            console.log('o ' + name + ' tem ' + age + ' anos e é humano: ' + isHuman);

        4.03.03. Concatenando: 
            console.log('o ' + name + ' tem ' + age + ' anos e é humano: ' + isHuman);
    
        4.03.04. Interpolando valores com template literals or template strings: usa a crase "``"
            console.log(` o ${name} tem ${age} anos `)

        4.04. Object:
            const person = {
                name = 'John',
                age = 30,
                weight = 88.6,
                isAdmin = true
            }
            console.log('${person.name} tem ${person.age} anos)

    4.05. Array
            const animals = [
                'Lion',
                'Monkey',
                'Cat'
            ]

    // Acessar valores dentro do Array:
    console.log(animals);

EXERCÍCIOS:
<script>

// 1. DECLARE UMA VARIÁVEL DE NOME weight:
    let weight;

// 2. QUE TIPO DE DADO É A VARIÁVEL ACIMA: undefined
    console.log(typeof weight);

// 3. DECLARA UMA VARIÁVEL E ATRIBUA VALORES PARA CADA UM DOS DADOS:
  // * name: String;
  // * age: Number (integer);
  // * stars: Number (float);
  // * isSubscribed: Boolean. 

    let name, age, stars, isSubscribed;
    name = "Wilber";
    age = 48;
    stars = 10.5;
    isSubscribed = true;

  // 4. A VARIÁVEL STUDENT É DE QUE TIPO DE DADOS: object
  // 4.1. ATRIBUA A ELA AS MESMAS PROPRIEDADES E VALORES DO EXERCÍCIO 3:
    let student = {
        name2: 'Wilber',
        age2: 48,
        stars: 10.5,
        isSubscribed: true
    };
    console.log(name + ' de idade ' + age + ' pesa ' + stars + ' kg');

    console.log(`${student.name2} de idade ${student.age2} e pesa ${student.stars} kg`);

// 5. DECLARE UMA VARIÁVEL DO TIPO ARRAY, DE NOME students E ATRIBUA A ELA NENHUM VALOR, OU SEJA, SOMENTE O ARRAY VAZIO:
    let students = [];
    
// 6. RETRIBUA VALOR PARA A VARIÁVEL ACIMA, COLOCANDO DENTRO DELA O OBJETO STUDENT DA QUESTÃO 4(NÃO COPIAR E COLAR O    OBJETO, MAS USAR O OBJETO CRIADO E INSERIR ELE NO ARRAY).
    // let students = [
    //    student
    // ];

// 7. COLOQUE NO CONSOLE O VALOR DA POSIÇÃO ZERO DO ARRAY ACIMA:
    console.log(students[0]);

// 8. CRIE UM NOVO student E COLOQUE NA POSIÇÃO 1 DO ARRAY students:
let john = {
        name3: 'John',
        age3: 33,
        stars3: 20.5,
        isSubscribed3: false
    };

students = [
    student,
    john
];

console.log(students);

// 9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.
console.log(a);
var a = 1;
</script>

5. FUNÇÕES:
aula 5.01. funções: 
    // *** CRIAR UM APLICATIVO DE FRASES MOTIVACIONAIS:

    // Declaration - declaração(criação) da função:
    // Function statement

    function createPhrases() {
        console.log('Estudar é muito bom');
        console.log('Paciência e persistência');
        console.log('Revisão é mãe do aprendizado');
    };

// Para executar a função:
// rodar, chamar, invocar
// execute, run, call, invoke

    createPhrases();
    createPhrases();
    console.log('fim do programa!');

aula 5.02. argumentos e parâmetros:

    // FUNCTION EXPRESSION
    // FUNCTION ANONYMOUS

    // parâmetros(parameters):
    const sum = function(number1,number2) {
        console.log(number1 + number2);
    };

    // EXECUTAR A FUNÇÃO ANÔNIMA:
    sum(2,3); // passando os arguments - argumentos.

aula 5.03. retornando valores dentro da função:
    // RETORNANDO VALORES:
    // FUNCTION EXPRESSION / FUNCTION ANONYMOUS
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

aula 5.04. outra maneira de entender funções:
    
    // Exemplo 2: Função é um liquidificador:

        function fazerSuco(fruta1,fruta2){
            return 'suco de:  ' + fruta1 + fruta2;
        }
        const copo = fazerSuco('banana', 'maçã');
        console.log(copo);

aula 5.05. fuction scope:
    
    let subject = 'create video';
    function createThink(subject){
        subject = 'study';
        return subject;
    }
    console.log(subject);
    console.log(createThink(subject));
    console.log(subject);

aula 5.06. function hoisting:
    sayMyName();

    function sayMyName(){
        console.log('alguma coisa');
    }

// constante ou var recebendo uma função anônima ou expressão de função - não funciona o hoisting: 
    *** chamamento da função:
    sayMyName();  
    
    *** criação da função
    const sayMyName = function(){ 
        console.log('alguma coisa');
    }

aula 5.07. arrow function: jeito mais moderno de escrever funções / mais compacto
    const sayMyName = () => { 
        console.log('alguma coisa');
    }
    sayMyName();

aula 5.08. callback function: é uma função que tá passando como parâmetro para outra função - chame de volta.
    function testeCallback(name){
        name());
    }
    testeCallBack(
        () => {
            console.log('wilber');
        }
    )    

aula 6.06. Maiúscula e minúscula:
    // Transforme minúscula em maiúsucla e o contrário também:
    
    let word = "Programar é muito bacana";
    6.06.01. Transforma minúscula em maiúscula:
    console.log(word.toUpperCase());

    6.06.02. Transforma maiúscula em minúscula:
    console.log(word.toLowerCase());
->
