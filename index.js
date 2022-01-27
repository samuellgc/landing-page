var express = require('express');
var app = express();
const path = require('path')

app.set('view engine', 'ejs')

app.use(express.static("public"))

app.set('views', path.join(__dirname, 'views'))

const data =  {
    titulo: "CONSULTOR DE NEGÓCIOS - VENDAS PUBLICIDADE",
    requisitos: "Graduação em Marketing ou Publicidade e Propaganda. Experiência com Vendas. Conhecimento de gestão de indicadores, negociação e informática.",
    atividades: "Planejamento de vendas, visita a clientes, desenvolvimento de propostas comerciais e plano de mídias, acompanhamento de indicadorese elaboração de orçamentos.",
    perfil: "Comunicativo, negociador, ágil e responsável.",
    horario: "8 - 18h"
}

app.get('/', function(req, res) {
    res.render('../views/template.ejs', {...data});
});

app.listen(8080, () => console.log('server is running'))