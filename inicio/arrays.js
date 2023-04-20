const valores = [7.7 , 8.9 , 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //quando tenta acessar um indice(array) que não existe retorna undefined (mas não para aplicacao continua funcionando)

valores[4] = 10
console.log(valores)
console.log(valores.length) //mostra quantos elementos possui dentro do Array

valores.push({id: 3}, false, null, 'teste') //push adiciona mais arrays
console.log(valores)

console.log(valores.pop()) //remove o ultimo valor do array e retorna
delete valores[1] //deleta a posicao do array
console.log(valores)

console.log(typeof valores)