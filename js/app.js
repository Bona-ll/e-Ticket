function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipo.value == 'pista') {
        comprarPista(qtd);
    } else if(tipo.value == 'superior'){
        comprarSuperior(qtd);
    } if(tipo.value == 'inferior') {
        comprarInferior(qtd);
    }

}

function comprarInferior(qtd) {
    let qtdInf = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdInf) {
        alert('Quantidade indisponivel para o tipo Inferior');
    } else {
        qtdInf = qtdInf - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInf;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd){
    let qtdSup = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSup) {
        alert('Quantidade indisponivel para o tipo Superior');
    } else {
        qtdSup = qtdSup - qtd;
        document.getElementById('qtd-superior').textContent = qtdSup;
        alert('Compra realizada com sucesso!');
    }
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdPista) {
        alert('Quantidade indisponivel para o tipo pista.');

    }else{
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}