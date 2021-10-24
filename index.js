const express = require ('express');
const app = express();

app.get('/',(req,res) => {
    res.status(200).send({menssage: 'Meu novo repositorio clonado'})
})

app.listen(4001), () => {
    comsole.log('Api inicializada na porta 4001');
}