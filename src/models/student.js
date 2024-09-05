let proxIdEstudante = 1;

const modelEstudante = (body, id = proxIdEstudante++) => {
  if (
    body.nome != undefined &&
    body.matricula != undefined &&
    body.curso != undefined &&
    body.ano != undefined &&
    body.nome != "" &&
    body.matricula != "" &&
    body.curso != "" &&
    body.ano > 0
  ) {
    return {
      id,
      nome: body.nome,
      matricula: body.matricula,
      curso: body.curso,
      ano: body.ano
    };
  }
};

module.exports = modelEstudante;
