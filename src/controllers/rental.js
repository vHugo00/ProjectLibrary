const modelAluguel = require("../models/rental.js");

const dbAlugueis = [];

const indexAlugueis = () => dbAlugueis;

const showAluguel = id => dbAlugueis.find(el => el.id == id);

const storeAluguel = body => {
  const novo = modelAluguel(body);

  if (novo) {
    dbAlugueis.push(novo);
    return 201;
  }

  return 400;
};

const updateAluguel = (body, id) => {
  const novo = modelAluguel(body, parseInt(id));
  const indice = dbAlugueis.findIndex(el => el.id == id);

  if (novo && indice != -1) {
    dbAlugueis[indice] = novo;
    return 200;
  }

  return 400;
};

const destroyAluguel = id => {
  const indice = dbAlugueis.findIndex(el => el.id == id);
  if (indice != -1) {
    dbAlugueis.splice(indice, 1);
  }
};

module.exports = {
  indexAlugueis,
  showAluguel,
  storeAluguel,
  updateAluguel,
  destroyAluguel
};
