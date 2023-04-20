const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 //evitar atributos com espaco , mas é possivel

console.log(prod1)

const prod2 = {
    nome:'Camisa Polo',
    preco:79.90,
    obj: {                  //é possivel criar um objeto dentro de outro objeto
        blabla:1,
        obj:{
            blabla:2
        }
    }
}

console.log(prod2)