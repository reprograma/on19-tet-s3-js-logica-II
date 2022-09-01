/*
  Como no scopohell, tente criar um pesadelo de ifs
  depois quebre de propósito em apenas um local (tem que ser apenas um local)
  Depois compartilhe com suas colegas para ver
  quem consegue achar o bug
*/

// Exemplo

let x = 1;
let y = 10;
let z = true;
let resp = '';

if (x >= 1) {
  if (x !== 2) {
    if (y === 11) {
      resp = 'Falhou';
    } else {
      if (z) {  // <== mudando pra !z dá certo!
        resp = 'Falhou';
      } else {
        resp = 'Eba!';
      }
    }
  } else {
    resp = 'Falhou';
  }
} else {
  resp = 'Falhou';
}

if (resp === 'Eba!') {
  console.log("\nVocê acertou!\n");
} else {
  console.log("\nTente de novo!\n");
}
