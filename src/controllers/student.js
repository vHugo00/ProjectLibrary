const modelEstudante = require("../models/student.js");

const dbEstudantes = [];

const indexEstudantes = () => dbEstudantes;

const showEstudante = id => dbEstudantes.find(el => el.id == id);

const storeEstudante = body => {
  const novo = modelEstudante(body);

  if (novo) {
    dbEstudantes.push(novo);
    return 201;
  }

  return 400;
};

const updateEstudante = (body, id) => {
  const novo = modelEstudante(body, parseInt(id));
  const indice = dbEstudantes.findIndex(el => el.id == id);

  if (novo && indice != -1) {
    dbEstudantes[indice] = novo;
    return 200;
  }

  return 400;
};

const destroyEstudante = id => {
  const indice = dbEstudantes.findIndex(el => el.id == id);
  if (indice != -1) {
    dbEstudantes.splice(indice, 1);
  }
};

module.exports = {
  indexEstudantes,
  showEstudante,
  storeEstudante,
  updateEstudante,
  destroyEstudante
};
