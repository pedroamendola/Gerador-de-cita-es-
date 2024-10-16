// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('quobtn'); // Seleciona o botão pelo ID
    const textElement = document.querySelector('.text'); // Seleciona o elemento de texto
    const authorElement = document.querySelector('.author'); // Seleciona o elemento do autor

    const quotes = [
        { text: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.", author: "John Lennon" },
        { text: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.", author: "Winston Churchill" },
        { text: "A única forma de fazer um ótimo trabalho é amar o que você faz.", author: "Steve Jobs" },
        { text: "O melhor jeito de prever o futuro é criá-lo.", author: "Peter Drucker" },
        { text: "Você não pode atravessar o mar apenas olhando para a água.", author: "Rabindranath Tagore" }
    ];

    // Adiciona o listener para o botão
    button.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * quotes.length); // Gera um índice aleatório
        const randomQuote = quotes[randomIndex]; // Seleciona uma citação aleatória
        textElement.textContent = randomQuote.text; // Atualiza o texto da citação
        authorElement.textContent = randomQuote.author; // Atualiza o autor da citação
    });
});