let name1: string = "Luis";
console.log(`Bienvenido usuario ${name1}`)
var cost:number = 0
var selection1:number = 0;
while(cost <= 0){
    cost = 100000;
}
do{
    selection1 = 1;
}while(selection1 !== 1 && selection1 !== 2)

switch(selection1){
    case 1:
        var comiInm:number = cost*0.1
        break;
    case 2:
        var comiInm:number = cost*0.2
        break;
}
console.log(`El precio que recibe el propietario es de ${cost-comiInm}\nLo que recibe la inmoviliaria es ${comiInm}`)
console.log(`Hasta la proxima ${name1}`)
