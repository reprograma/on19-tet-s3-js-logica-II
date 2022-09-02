console.clear();

let nome = "Giu";

{
  nome = "Gabriela";
  {
    let nome = "João";
    console.log("1", nome)
  }
}

let saudacao;

if (true) {
  if (false) {
    saudacao = "Que lindo dia"
  } else {
    saudacao = "que chato"
  }
}

console.log("final", saudacao);
