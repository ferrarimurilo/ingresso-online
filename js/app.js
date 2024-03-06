function comprar(){
    let tipoDoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);

    if(quantidade<=0){alert("Insira um valor maior que zero")}else{
   
        if(tipoDoIngresso=="inferior"){
        comprarInferior(quantidade);
          };

        if(tipoDoIngresso=="superior"){
        comprarSuperior(quantidade);
        }

         if(tipoDoIngresso=="pista"){
        comprarPista(quantidade);
        }

}};

function comprarInferior(quantidade) {
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    if(quantidade>qtdInferior) {
        alert("Quantidade indisponível");
    }   else{
        qtdInferior = qtdInferior - quantidade;
        document.getElementById("qtd-inferior").textContent = qtdInferior;
        alert("Compra concluída com sucesso");};
};

function comprarSuperior(quantidade){
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    if(quantidade>qtdSuperior) {
        alert("Quantidade indisponível");
    }   else{
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById("qtd-superior").textContent = qtdSuperior;
        alert("Compra concluída com sucesso");};
}

function comprarPista(quantidade){
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    if(quantidade>qtdPista) {
        alert("Quantidade indisponível");
    }   else{
        qtdPista = qtdPista - quantidade;
        document.getElementById("qtd-pista").textContent = qtdPista;
        alert("Compra concluída com sucesso");};
}