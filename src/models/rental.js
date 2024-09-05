let proxIdAluguel = 1;

const modelAluguel = (body, id = proxIdAluguel++) => {
  if (
    body.livro_id != undefined &&
    body.estudante_id != undefined &&
    body.data_aluguel != undefined &&
    body.data_aluguel != "" &&
    (!body.data_devolucao || body.data_devolucao !== "")
  ) {
    return {
      id,
      livro_id: body.livro_id,
      estudante_id: body.estudante_id,
      data_aluguel: body.data_aluguel,
      data_devolucao: body.data_devolucao || null
    };
  }
};

module.exports = modelAluguel;
