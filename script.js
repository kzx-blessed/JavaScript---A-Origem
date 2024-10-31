function creator() { 
    alert("Brendan Eich é um programador de computadores americano e criador da linguagem de programação JavaScript.");
}

function c1() {
    alert("Javascript é uma linguagem de programação leve que os desenvolvedores usam para criar interações mais dinâmicas ao desenvolver páginas da Web, aplicativos, servidores, jogos, etc. ")
}

function c2() {
    alert("Concebido como uma linguagem do lado do servidor por Brendan Eich (então empregado pela Netscape Corporation), o JavaScript logo chegou ao Netscape Navigator 2.0 em setembro de 1995.")
}

function c3() {
    alert("o JavaScript foi originalmente chamado de Mocha, depois LiveScript e só então o nome JavaScript foi escolhido, porque a Netscape, empresa criadora da linguagem, queria ganhar fama em cima do sucesso do Java.")
}

const item1 = document.getElementById("item1");
const button = document.getElementById("changeColorBtn");

    item1.style.backgroundColor = "rgb(20, 23, 37)";
    changeColorBtn.style.backgroundColor = "blue";

function mudarCorDeFundo() {

    if (item1.style.backgroundColor === "rgb(20, 23, 37)" && changeColorBtn.style.backgroundColor === "blue") {

      item1.style.transition = "background-color 1s";
      changeColorBtn.style.transition = "background-color 0.5s";

       item1.style.backgroundColor = "red";
       changeColorBtn.style.backgroundColor = "rgb(117, 23, 16)";

    } else {

      item1.style.transition = "background-color 1s";
      changeColorBtn.style.transition = "background-color 0.5s";

      item1.style.backgroundColor = "rgb(20, 23, 37)";
      changeColorBtn.style.backgroundColor = "blue";
    }

  }

  let count = 0;

    document.getElementById('clickCounterBtn').addEventListener('click', function() {
    count++;
    document.getElementById('counter').textContent = "Cliques: " + count;
});

const textToToggle = document.getElementById('textToToggle');
const toggleTextBtn = document.getElementById('toggleTextBtn');

toggleTextBtn.addEventListener('click', function() {
if (textToToggle.style.display === 'none') {
textToToggle.style.display = 'block';
toggleTextBtn.textContent = 'Esconder';
} else {
textToToggle.style.display = 'none';
toggleTextBtn.textContent = 'Mostrar';
}
});

function mudarTexto() {
    document.getElementById('titulo').innerText = 'Texto alterado pelo JavaScript!';
    }
