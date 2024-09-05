const modelLivro = require("../models/book.js");

const dbLivros = [];

const indexLivros = () => dbLivros;

const showLivro = id => dbLivros.find(el => el.id == id);

const storeLivro = body => {
  const novo = modelLivro(body);

  if (novo) {
    dbLivros.push(novo);
    return 201;
  }

  return 400;
};

const updateLivro = (body, id) => {
  const novo = modelLivro(body, parseInt(id));
  const indice = dbLivros.findIndex(el => el.id == id);

  if (novo && indice != -1) {
    dbLivros[indice] = novo;
    return 200;
  }

  return 400;
};

const destroyLivro = id => {
  const indice = dbLivros.findIndex(el => el.id == id);
  if (indice != -1) {
    dbLivros.splice(indice, 1);
  }
};

module.exports = {
  indexLivros,
  showLivro,
  storeLivro,
  updateLivro,
  destroyLivro
};
