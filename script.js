// Espera o documento inteiro ser carregado antes de rodar o código.
// Isso garante que todos os elementos HTML já existam no momento em que o JS tentar acessá-los.
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os elementos com as classes .quadrado1, .quadrado2 e .quadrado3.
    // Retorna uma NodeList (uma espécie de "array" de elementos HTML).
    const cards = document.querySelectorAll('.quadrado1, .quadrado2, .quadrado3, .quadrado4');

    // Para cada elemento encontrado (cada "quadrado"), adiciona um evento de clique.
    cards.forEach(card => {

        // Adiciona um ouvinte de evento de clique.
        // Quando o usuário clicar nesse quadrado, a função abaixo será executada.
        card.addEventListener('click', () => {

            // Alterna a classe "open" no elemento.
            // Se a classe "open" não existe, ela é adicionada e a função retorna true.
            // Se já existe, é removida e retorna false.
            const isOpen = card.classList.toggle('open');

            // Se o card acabou de ser aberto (isOpen = true):
            if (isOpen) {
                // Define largura e altura maiores (expande o quadrado).
                card.style.width = '450px';
                card.style.height = '600px';

                // Acessa o <p> dentro do card e aumenta sua altura máxima, mostrando o texto.
                const p = card.querySelector('p');
                if (p) p.style.maxHeight = '550px';

                const img = card.querySelector('img');
                if (img) img.style.maxHeight = '550px';

                // Acessa o <h2> dentro de .sla4 e aumenta a fonte para aparecer.
                const h2 = card.querySelector('.sla4 h2');
                if (h2) h2.style.fontSize = '30px';

                // Deixa o quadrado mais arredondado, mas menos "circular".
                card.style.borderRadius = '20px';
            }

            // Caso o card esteja sendo fechado (isOpen = false):
            else {
                // Reduz o tamanho novamente (volta ao estado original).
                card.style.width = '50px';
                card.style.height = '50px';

                // Esconde o texto, voltando a maxHeight = 0.
                const p = card.querySelector('p');
                if (p) p.style.maxHeight = '0';

                // Reduz o tamanho do título para 0 (fica invisível).
                const h2 = card.querySelector('.sla4 h2');
                if (h2) h2.style.fontSize = '0';

                // Volta o formato circular.
                card.style.borderRadius = '50px';
            }
        });
    });
});


document.querySelector('.imagem1 p').onclick = function () {
    document.querySelector('.imagem1 p').style.backdropFilter = "0px";
    document.querySelector('.imagem1 p').style.display = "none";
}

document.querySelector('.imagem2 p').onclick = function () {
    document.querySelector('.imagem2 p').style.backdropFilter = "0px";
    document.querySelector('.imagem2 p').style.display = "none";
}

document.querySelector('.imagem3 p').onclick = function () {
    document.querySelector('.imagem3 p').style.backdropFilter = "0px";
    document.querySelector('.imagem3 p').style.display = "none";
}

document.querySelector('.imagem4 p').onclick = function () {
    document.querySelector('.imagem4 p').style.backdropFilter = "0px";
    document.querySelector('.imagem4 p').style.display = "none";
}

document.querySelector('.imagem5 p').onclick = function () {
    document.querySelector('.imagem5 p').style.backdropFilter = "0px";
    document.querySelector('.imagem5 p').style.display = "none";
}

document.querySelector('.imagem6 p').onclick = function () {
    document.querySelector('.imagem6 p').style.backdropFilter = "0px";
    document.querySelector('.imagem6 p').style.display = "none";
}