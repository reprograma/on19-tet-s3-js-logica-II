const listaDePaises = [
  { 
    nome: "noruega",
    idh: 0.944
  },
  { 
    nome: "qatar",
    idh: 0.850
  },
  { 
    nome: "canadá",
    idh: 0.913
  },  
  { 
    nome: "brasil",
    idh: 0.755,
  },
  { 
    nome: "japão",
    idh: 0.891
  },
  { 
    nome: "vietnã",
    idh: 0.666
  },
  { 
    nome: "afeganistão",
    idh: 0.465
  },
  { 
    nome: "camarões",
    idh: 0.512,
  }
]

const listaDePaises2 = [
  { 
    nome: "peru",
    idh: 0.999
  },
  { 
    nome: "frança",
    idh: 0.200
  }
]
// for while for/of

function classificarPaisesPorIdh(parametro_lista) {
  let idhpaises = {}
  for(let pais of parametro_lista) {
    if(pais.idh >=  0 && pais.idh < 0.5) {
      idhpaises[pais.nome] = 'IDH é muito baixo'
    } else if (pais.idh >= 0.5 && pais.idh < 0.6) {
      idhpaises[pais.nome] = 'IDH é baixo'
    } else if (pais.idh >= 0.6 && pais.idh < 0.7) {
      idhpaises[pais.nome] = 'IDH é médio'
    } else if (pais.idh >= 0.7 && pais.idh < 0.8) {
      idhpaises[pais.nome] = 'IDH é alto'
    } else if (pais.idh >= 0.8 && pais.idh <= 1) {
      idhpaises[pais.nome] = 'IDH é muito alto'
    } else {
      idhpaises[pais.nome] = 'IDH inválido'
    }
  }
  console.table(idhpaises)
}

classificarPaisesPorIdh(listaDePaises)
console.log('-------------------------------------')
classificarPaisesPorIdh(listaDePaises2)

//saída de dados
/*
const idhPaises = {
  noruega: "IDH é muito alto",
  qatar: "IDH é muito alto",
  canada: "IDH é muito alto",
  brasil: "classifiaçãp",
  japao: "classifiaçãp",
  vietna: "classifiaçãp",
  afeganistao: "classifiaçãp",
  camaroes: "classifiaçãp"
}
*/
