function compras (trabalho1 , trabalho2){
    const comprarSorvete = trabalho1 || trabalho2    // || tipo Ou um OU outro trabalho precisa ser verdadeiro
    const comprarTv50 = trabalho1 && trabalho2       // && os dois trabalhos precisam ser verdadeiros
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel =!comprarSorvete //operador unário

    return {comprarSorvete , comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true , true))
console.log(compras (true , false))
console.log(compras(false , true))
console.log(compras (false, false))
