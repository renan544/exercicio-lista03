let contadora =0
let acumuladora = 0

while(contadora<5){
    let numero = parseInt(prompt("digite um numero :"))
    acumuladora = acumuladora+numero

    contadora++
}
let media = acumuladora/5
console.log("a media dos numeros digitados é :"+media)