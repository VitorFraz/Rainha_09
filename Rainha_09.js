/*
*/

//#31
var soma = 0;
var numero;

while (true) {
  numero = Number(prompt("Digite um número (ou 0 para encerrar):"));

  if (numero === 0) {
    break;
  }

  soma += numero;
}

alert("A soma dos números é: " + soma);


// #32
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numeros_pares = filtrar_pares(numeros);
alert(numeros_pares);

function filtrar_pares(arr) {
    let pares = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            pares.push(arr[i]);
        }
    }

    return pares;
}


// #33
function contar_letras(palavra) {
    var maiusculas = 0;
    var minusculas = 0;

    for (var letra of palavra) {
        if (letra >= 'A' && letra <= 'Z') {
            maiusculas++;
        } else if (letra >= 'a' && letra <= 'z') {
            minusculas++;
        }
    }

    return {maiusculas, minusculas};
}

let palavra = prompt("Digite uma palavra:");

let resultado = contar_letras(palavra);

alert("MAIÚSCULAS: " + resultado.maiusculas + " e as minúsculas: " + resultado.minusculas);




// #34
function primo(num) {
    if (num < 2) return false;
    for (let n = 2; n <= Math.sqrt(num); n++) {
        if (num % n === 0) {
            return false;
        }
    }
    return true;
}

let numero_03 = parseInt(prompt("Digite um número:"));

let primos = [];

for (var n = 1; n <= numero_03; n++) {
    if (primo(n)) {
        primos.push(n);
    }
}

alert("Números primos de 1 até " + numero_03 + " : " + primos.join(", "));

//EXPLICAÇÃO: A função Math.sqrt() em JavaScript calcula a raiz quadrada de um número. Ela funciona de acordo com o valor se é o número do qual você quer encontrar a raiz quadrada e faz o retorna a raiz quadrada de valor. Se o valor for negativo, retorna como um não um numero ou NaN.

// #35
function palindromo(str) {
  
    var cleanStr = str.replace(/\W/g, '').toLowerCase();
    
    var reversedStr = cleanStr.split('').reverse().join('');
    
    return cleanStr === reversedStr;
}

var palavra_02 = prompt("Digite uma palavra ou frase:");
if (palindromo(palavra_02)) {
    alert("É um palíndromo!");
} else {
    alert("Não é um palíndromo.");
}


// #59

document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = document.getElementById('expense-amount').value;
    
    addExpense(expenseName, expenseAmount);
    
    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';
});

function addExpense(name, amount) {
    const expenseList = document.getElementById('expense-list');
    const li = document.createElement('li');
    li.textContent = `${name}: R$${amount}`;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        expenseList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    expenseList.appendChild(li);
}
