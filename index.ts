type hero = {
    nome : string;
    vulgo : string;
    telefone : string;
};

function ligarPara(heroi: hero) {
    console.log('ligando para' + heroi.telefone)
}

ligarPara({
    nome : 'Steve',
    vulgo : 'Capitão América',
    telefone : '11 8888888'
});


