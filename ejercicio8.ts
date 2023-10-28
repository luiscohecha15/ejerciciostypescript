let side1:number = 0
let side2:number = 0
let side3:number = 0

do{
    side1 = 2;
}while(side1 <= 0)

do{
    side2 = 2;
}while(side2 <= 0)

do{
    side3 = 2;
}while(side3 <= 0)

if(side1 == side2 && side2 == side3){
    console.log("El triangulo es equilatero")

}else{
    console.log("El triangulo no es equilatero")
}