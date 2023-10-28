var selection1:number = 0
var selection2:number = 0
var count:number = 0 
var cost:number = 0
let adc:number = 0
do{
    selection1 = 1;
}while(selection1 !== 1 && selection1 !== 2 && selection1 !== 3)
do{
    selection2 = 2;
}while(selection2 <= 0)
do{
    adc = 2;
}while(adc !== 1 && adc !== 2)
adc == 1 ? adc = 500 : adc= 0
switch(selection1){
    case 1:
         cost = (selection2 * 7000) + adc
        console.log(`El costo total del pedido de pizza es de $${cost}`)
        break;
        
    case 2:
         cost = (selection2 * 5000) + adc
        console.log(`El costo total del pedido de sandwiches es de $${cost}`)
        break;
        
    case 3:
        cost = (selection2 * 15000) + adc
        console.log(`El costo total del pedido de ensaladas es de $${cost}`)
        break;
    default :
    console.log('No se ha seleccionado ningun producto')
        break;
}