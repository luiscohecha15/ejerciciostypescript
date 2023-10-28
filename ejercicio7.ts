var selection1:number = 0
var selection2:number = 0
let time:number = 0
var count:number = 0
var cost:number = 0
do{
    selection1 = 1;
}while(selection1 !== 1 && selection1 !== 2)
switch(selection1){
    case 1:
        do{
            time = 5;
        }while(time <= 0)
        do{
            selection2 = 2;
        }while(selection2 !== 1 && selection2 !== 2)
        if(selection2==1){
            cost = time * 500
            console.log(`El total de la multa a pagar es de $${cost}`)
        }else{
            cost = time * 600
            console.log(`El total de la multa a pagar es de $${cost}`)
        }
        break;
    case 2:
        do{
            count = 1;
        }while(count <= 0)
        cost = count * 10000
        console.log(`El total de la multa a pagar por perdida es de $${cost}`)
}