// Number picker com JS

// variavel

let numberInput = prompt("Digite um número entre 1 e 10")

if(numberInput >= 1 && numberInput <= 10) {
    alert(`O número ${numberInput} ao quadrado é ${numberInput * numberInput}! Recarregue a página para descobrir outros números`)
} else {
    alert("O número que você digitou é inválido :c tente novamente recarregando a página")
}