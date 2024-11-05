
function escolherComputador() {
    const escolhas = ['pedra', 'papel', 'tesoura'];
    const escolhaAleatoria = escolhas[Math.floor(Math.random() * 3)];
    return escolhaAleatoria;
  }
  
  function determinarVencedor(jogador, computador) {
    if (jogador === computador) {
      return 'Empate!';
    }
  
    if (
      (jogador === 'pedra' && computador === 'tesoura') ||
      (jogador === 'papel' && computador === 'pedra') ||
      (jogador === 'tesoura' && computador === 'papel')
    ) {
      return 'Você venceu!';
    } else {
      return 'Você perdeu!';
    }
  }
  

  function jogar(escolhaJogador) {
    const escolhaComputador = escolherComputador();
    const resultado = determinarVencedor(escolhaJogador, escolhaComputador);
  

    document.getElementById('resultadoJogo').textContent = `Você escolheu: ${escolhaJogador} | O computador escolheu: ${escolhaComputador}`;
    document.getElementById('vencedor').textContent = resultado;
  }
  

  document.getElementById('pedra').addEventListener('click', () => jogar('pedra'));
  document.getElementById('papel').addEventListener('click', () => jogar('papel'));
  document.getElementById('tesoura').addEventListener('click', () => jogar('tesoura'));