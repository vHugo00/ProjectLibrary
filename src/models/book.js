let proxIdLivro = 1;

const modelLivro = (body, id = proxIdLivro++) => {
  if (
    body.titulo != undefined &&
    body.autor != undefined &&
    body.ano != undefined &&
    body.genero != undefined &&
    body.titulo != "" &&
    body.autor != "" &&
    body.ano > 0 &&
    body.genero != ""
  ) {
    return {
      id,
      titulo: body.titulo,
      autor: body.autor,
      ano: body.ano,
      genero: body.genero
    };
  }
};

module.exports = modelLivro;
