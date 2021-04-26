//console.log('JS externo funcionou!!')
//console.log(window);

//alert('Seja bem vindo!'); // mensagem para usuário

//let adulto = confirm('Você tem mais de 18 anos?'); // retorna booleano

let nomeUsuario = prompt('Qual seu nome?'); // retorna texto inserido pelo usuário

console.log(nomeUsuario);

let elementHeader = document.querySelector('.olaUsuario');

elementHeader.innerText = `Olá, ${nomeUsuario}`;

let logo = document.getElementById('logo');
console.log(logo);

logo.style.color = 'orange'

const toggleMode = () => {
    document.body.classList.toggle('dark-mode');
}
