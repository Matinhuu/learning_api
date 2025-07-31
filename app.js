import express from 'express'
const api = express();

api.get('/calculadora/somar/:num1/:num2', (req, resp) => {
  let n1 = Number(req.params.num1);
  let n2 = Number(req.params.num2);
  let soma = n1 + n2;
  resp.send({
    resultado: soma
  });
})

api.get('/calculadora/subtrair/:num1/:num2', (req, resp) => {
  let n1 = Number(req.params.num1);
  let n2 = Number(req.params.num2);
  let subtracao = n1 - n2;
  resp.send({
    resultado: subtracao
  });
})

api.get('/calculadora/divisao/:num1/:num2', (req, resp) => {
  let n1 = Number(req.params.num1);
  let n2 = Number(req.params.num2);
  let divisao = n1 / n2;
  resp.send({
    resultado: divisao
  });
})

api.get('/calculadora/mult/:num1/:num2', (req, resp) => {
  let n1 = Number(req.params.num1);
  let n2 = Number(req.params.num2);
  let mult = n1 * n2;
  resp.send({
    resultado: mult
  });
})

api.get('/mensagem', (req, resp) => {
    resp.send({ 
        mensagem: `Eu amo minha ex`
    })
})
api.listen(5010, () => console.log('... funcionou :) '));
