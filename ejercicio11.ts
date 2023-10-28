let costIni:number = 500
var cost:number = 0
let costw:number = 500
var selection:number = 0
var selection1:number = 0
var selection2:number = 0

do{
    selection = 2;
}while(selection !== 1 && selection !== 2)

switch(selection){

    case 1:
        do{
            selection1 = 2;
        }while(selection !== 1 && selection !== 2)
        if(selection1==1){
            console.log("Es justo el pago del servicio!")
        }else{
            console.log(`Dinero suficiente, su devuelta es de $${1000 - costIni}`)
        }
        
    break;
    case 2:
        do{
            selection1 = 2;
        }while(selection1 !== 1 && selection !== 2)
        if(selection1 == 1){
            console.log(`Dienero suficiente para el pago, su devuelta es de $${2000 - costIni}`)
        }else{
            console.log(`Dinero suficiente, su devuelta es de $${5000 - costIni}`)
        }

    break;

}
console.log("¡Vuelve pronto!")