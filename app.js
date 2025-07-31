import express from 'express'
const api = express();
api.use(express.json());


//SOMAR ROTA
api.get('/calculadora/somar/:num1/:num2', (req, resp) => {
  let n1 = Number(req.params.num1);
  let n2 = Number(req.params.num2);
  let soma = n1 + n2;
  resp.send({
    soma: soma
  });
})
//SOMAR QUERY
api.get('/calculadora/v2/somar', (req, resp) => {
    let n1 = Number(req.query.num1);
    let n2 = Number(req.query.num2);
    let soma = n1 + n2
    resp.send({
        soma: soma
    })
})
//SUBTRAIR ROTA
api.get('/calculadora/subtrair/:num1/:num2', (req, resp) => {
  let n1 = Number(req.params.num1);
  let n2 = Number(req.params.num2);
  let subtracao = n1 - n2;
  resp.send({
    subtracao: subtracao
  });
})
//DIVISÃO ROTA
api.get('/calculadora/divisao/:num1/:num2', (req, resp) => {
  let n1 = Number(req.params.num1);
  let n2 = Number(req.params.num2);
  let divisao = n1 / n2;
  resp.send({
    divisao: divisao
  });
})
//MULTIPLICAÇÃO ROTA
api.get('/calculadora/mult/:num1/:num2', (req, resp) => {
  let n1 = Number(req.params.num1);
  let n2 = Number(req.params.num2);
  let mult = n1 * n2;
  resp.send({
    multiplicacao: mult
  });
})
//MENSAGEM SOZINHA
api.get('/mensagem', (req, resp) => {
    resp.send({ 
        mensagem: `Eu amo minha ex`
    })
})
//MENSAGEM COM QUERY
api.get('/mensagem/ola', (req,resp) => {
    let ser = req.query.nome ?? ''
    resp.send(`Olá ${ser}`)
})
//MEDIA COM CORPPO
api.post('/media', (req,resp) => {
    let n1 = req.body.nota1;
    let n2 = req.body.nota2;
    let n3 = req.body.nota3;
    let name = req.body.nome;

    let media = (n1+n2+n3) / 3;
    resp.send({
        media: media
    });
})
//DOBRO COM VETOR
api.post('/dobro', (req,resp) => {
    let num = req.body.numeros
    let num2 = []
    for(let i = 0; i < num.length; i++){
        num2[i] = num[i] * 2
    }
    resp.send({
        numeros: num,
        dobro: num2})
})

//PEDIDO LOJA
api.post('/loja/pedido', (req,resp)=> {
    let total = req.body.total;
    let parcelas = req.body.parc;
    let cupom = req.query.cupom;


    if(parcelas > 1){
        let juros = total * 0.05;
        total += juros
    }
    if(cupom == "QUERO50") {
        total -= 50;
    }
    resp.send(`O total do pedido ficou em ${total}`)
})

//PEDIDO LOJA COMPLETO
api.post('/loja/pedido/completo', (req,resp)=> {
    let parcelas = req.body.parcelas;
    let itens = req.body.itens;
    let cupom = req.query.cupom;
    let total = 0;

    for(let produto of itens){
        total += produto.prec
    }
    if (parcelas > 1) {
        let juros = total * 0.05
        total += juros
    }
    if (cupom == 'QUERO50') {
        total -= 50;
    }
    let valorParcela = total / parcelas
    let qtdParcela = parcelas
    resp.send({
        total: total,
        valorParcela: valorParcela,
        qtdParcelas: qtdParcela
    })
})
//mensagem de funcionamento
api.listen(5010, () => console.log('... api upada'));
