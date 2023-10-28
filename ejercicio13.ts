var selection:number = 0
var selection1:number = 0

do{
    selection = 1;
}while(selection !== 1 && selection !== 2 && selection !== 3)

switch(selection){
    case 1:
        do{
        selection1 = 1;
        }while(selection1!== 1 && selection1!== 2)
        if(selection1 == 1){
            console.log("Captiva: Color blanco perlado, $120.000.000, sí hay disponibilidad")
        }else{
            console.log("Tracker: Color negro, $100.000.000, no hay disponibilidad")
        }
        break;
    case 2:
        do{
        selection1 = 1;
        }while(selection1!== 1 && selection1!== 2)
        if(selection1 == 1){
            console.log("Modelo A: color rojo, $90.000.000, sí hay disponibilidad")
        }else{
            console.log("Modelo B: color rojo, $99.000.000, sí hay disponibilidad")
        }
        break;
    case 3:
        do{
        selection1 = 1;
        }while(selection1!== 1 && selection1!== 2)
        if(selection1 == 1){
            console.log("Referencia X: Color azul, precio $110.000.000, no hay disponiblidad")
        }else{
            console.log("Referencia Y: Color azul, precio $115.000.000, sí hay disponiblidad")
        }
        break;
}