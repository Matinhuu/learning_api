import express from 'express';
const nome = express();

nome.get('/mensagem',(req,resp) => {
    resp.send(`helloworld`)
})
nome.listen(5001,
    () => console.log(`--> QUERO VOLTAR COM MINHA EX <-- `)); 