// Acessa o body do nosso HTML para podermos manipulá-lo
const body = document.body;

// Cria um novo elemento de botão
const botaoMudarCor = document.createElement('button');

// Define o texto que aparecerá dentro do botão
botaoMudarCor.innerText = 'Clique para mudar a cor!';

// Adiciona um pouco de estilo para o nosso botão
botaoMudarCor.style.padding = '10px 20px';
botaoMudarCor.style.fontSize = '16px';
botaoMudarCor.style.cursor = 'pointer';
botaoMudarCor.style.margin = '20px';
botaoMudarCor.style.backgroundColor = '#4CAF50'; // Uma cor verde bonita
botaoMudarCor.style.color = 'white';
botaoMudarCor.style.border = 'none';
botaoMudarCor.style.borderRadius = '5px';

// Adiciona o botão ao corpo da página
body.appendChild(botaoMudarCor);

// Adiciona um "ouvinte de evento" ao botão. Quando ele é clicado,
// a função dentro dele é executada
botaoMudarCor.addEventListener('click', () => {
  // Define uma lista de cores que podemos usar
  const cores = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFC300'];

  // Gera um número aleatório entre 0 e o número total de cores
  const indiceAleatorio = Math.floor(Math.random() * cores.length);

  // Usa o número aleatório para escolher uma cor da nossa lista
  const corSelecionada = cores[indiceAleatorio];

  // Muda a cor de fundo do body para a cor selecionada
  body.style.backgroundColor = corSelecionada;

  // Mostra no console qual cor foi escolhida
  console.log(`A cor de fundo mudou para: ${corSelecionada}`);
});