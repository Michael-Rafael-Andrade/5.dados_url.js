const http = require('node:http');
const url = require('node:url');
const porta = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    if(req.url.startsWith('/paginaMedia')){
        paginaMedia(req, res);
    } else {
        paginaPrincipal(req, res);
    }
});

server.listen(porta, hostname, () => {
    console.log('Servidor rodando no endereço http://${hostname}:${porta}');
});

function paginaPrincipal(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8'});
    res.end(`
        <html>
            <head>
                <title>
                    Página Principal
                </title>
                <meta charset="UTF-8"/>
            </head>
            <body>
                <h2>Informe os números abaixo para o aplicativo poder calcular a média: </h2>
                <fieldset>
                    <legend>Formulário</legend>
                    <form method="get" action="/paginaMedia"/>
                        <label for="num1">Número 1:</label>
                        <p><input type="number" name="num1" id="num1"></p>
                        <label for="num2">Número 2:</label>
                        <p><input type="number" name="num2" id="num2"></p>
                        <label for="num3">Número 3:</label>
                        <p><input type="number" name="num3" id="num3"></p>
                        <p><button type="submit">Enviar</button>
                    </form>
                </fieldset>
            </body>
        </html
    `);
}

function paginaMedia(req, res){
    res.writeHead(200, { 'Const-Type': 'text/html; charset="UTF-8"' });
    let parametros = new url.URLSearchParams(req.url);
    let numero1 = parseFloat(parametros.get('/paginaMedia?num1'));
    let numero2 = parseFloat(parametros.get('num2'));
    let numero3 = parseFloat(parametros.get('num3'));
    let media = (numero1 + numero2 + numero3) / 3;
    res.end(`
            <html>
                <head>
                    <meta charset="UTF-8"/>
                    <title>
                        Página Média
                    </title>
                </head>
                <body>
                    <h1>Resultado da Operação</h1>
                    <h2>Média dos 3 números: ${media}</h2>
                </body>
            </html>
        `);
}