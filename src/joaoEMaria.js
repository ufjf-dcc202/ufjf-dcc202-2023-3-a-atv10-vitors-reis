let joao = 1;
let maria = 2;

function setJoao(valor) {
    if (valor >= 0){
        joao  = valor;
}else{
    joao = 0;
}
}

function setMaria(valor) {
    if (valor >= 0){
        maria = valor;
}else{
    maria = 0;
}
}


function getMaria(){
    return maria;
}
function getJoao(){
    return joao;
}
function deJoaoParaMaria(){
    maria = joao+maria;
    joao = 0;
}
function deMariaParaJoao(){
    joao = maria+joao;
    maria = 0;
}

export{getJoao,getMaria,deJoaoParaMaria,deMariaParaJoao,setJoao,setMaria};
