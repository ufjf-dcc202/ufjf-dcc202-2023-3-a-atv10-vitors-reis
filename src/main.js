import {getMaria, getJoao} from"./JoaoEMariao.js"
import { deJoaoParaMaria } from "./joaoEMaria.js";

console.log("MAIN");
setMaria(4);
setJoao(2);



let maria = getMaria();
let joao = getJoao();

deJoaoParaMaria();

maria = getMaria();
joao = getJoao();


console.log(maria,joao);