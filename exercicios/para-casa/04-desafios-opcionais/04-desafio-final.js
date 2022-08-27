/*
  Tente criar um programa que junte o máximo possível de tudo
  o que vimos essa semana! Tente junta pegar input de usuário,
  argumentos de linha de comando, condicionais e funções em algo
  bem louco! E não esqueça de compartilhar com todo mundo.
*/

const computerSelection = () => {
  switch(Math.floor(Math.random() * 4)){
      case 0:
        return 'petra';
        break;
      case 1:
        return 'pedra';
        break;        
      case 2:
        return 'papel';
        break;
      case 3: 
        return 'tesoura'
        break;
  }
}

const playerSelection = (choice) => {
  switch(choice.toLowerCase()){
      case 'petra':
        return 'petra';
        break;
      case 'pedra':
        return 'pedra';
        break;            
      case 'papel':
        return 'papel';
        break;
      case 'tesoura':
        return 'tesoura';
        break;
}
}

const playRound = (player, computer) => {
  console.log('Sua escolha: ' + player.toUpperCase(), " vs. Escolha da maquina: " + computer.toUpperCase(), '\n')
  switch(computer){
    case 'pedra':
        switch(player){
            case 'pedra':
              console.log('empate!');
              break;
            case 'papel':
              console.log('papel come pedra, você ganhou!');
              break;
            case 'tesoura':
              console.log('pedra quebra tesoura, você perdeu!');
              break;
            case 'petra':
              console.log('Petra ganha de tudo, você ganhou!')
              break;
        }
        break;
    case 'papel':
        switch(player){
            case 'pedra':
                console.log('papel eats pedra, você perdeu!');
                break;
            case 'papel':
                console.log('empate!');
                break;
            case 'tesoura':
                console.log('papel é dilacerado pela tesoura, você ganhou!');
                break;
            case 'petra':
              console.log('Petra ganha de tudo, você venceu!')
              break;
        }
        break;
    case 'tesoura':
        switch(player){
            case 'pedra':
              console.log('pedra quebra tesoura, você ganhou!');             
                break;
            case 'papel':
              console.log('papel é dilacerado pela tesoura, você perdeu!');           
                break;
            case 'tesoura':
              console.log('tesoura com tesoura também é bacana, todo mundo vence!💕');
                break;
            case 'petra':
              console.log('tesoura é a única coisa capaz de furar a pele macia de Petra, você perdeu! e o mundo todo também 🤧')
              break;
        }
        break;
    case 'petra':
        switch(player){
            case 'tesoura':
                console.log('tesoura é a única coisa capaz de furar a pele macia de Petra, você ganhou? se você considera assassinato uma vitória...')
                break;
            case 'papel' || 'pedra':
                console.log('Petra ganha de tudo, você perdeu!')
                break;
            case 'petra':
                console.log('Petra empata com Petra')
                break;
        }
        break;
    }
  }

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nPetra, Papel ou Tesoura?\n', escolha => {
  playRound(playerSelection(escolha), computerSelection())
  
  

  readline.close();
});

readline.on('close', () => {
  console.log('\nObrigada por jogar!');
  process.exit(0);
});