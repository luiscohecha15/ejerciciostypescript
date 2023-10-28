var selection1:number = 0
var selection2:number = 0
var count:number = 0 
do{
    selection1 = 1;
}while(selection1 !== 1 && selection1 !== 2)
do{
    count = 12;
    if(count < 10){
        console.log("El numero de stickers debe ser mayor a 10")
    }
}while(count < 10)
switch(selection1){
    case 1:
        let sticLittle = count * 4000
        console.log(`El precio de los ${count} stickers pequeños es de $${sticLittle}`)
        break;
        
    case 2:
        let sticBig = count * 6000
        console.log(`El precio de los ${count} stickers grandes es de $${sticBig}`)
        break;
}