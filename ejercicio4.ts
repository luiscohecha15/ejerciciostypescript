var count = Number(prompt("Cuantas prendas traes para el mismo servicio"))
var selection1:number = 0;
var selection2:number = 0;

do{
    selection1 = Number(prompt("Seleccione el tipo de servicio: \n1.Lavado \n2.Planchado"))
}while(selection1 !== 1 && selection1 !== 2)
if (selection1 === 1){
    do{
        selection2 = Number(prompt("Seleccione el tipo de lavado: \n 1.Seco \n 2.Normal"))
    }while(selection2 !== 1 && selection2 !==2)
    if (selection2 === 1){
        let val11 = count * 4000
        alert(`El precio total del servicio es de $${val11}`)

    }else if(selection2 === 2){
        let val12 = count * 3000
        alert(`El precio total del servicio es de $${val12}`)
    }
    
}else if(selection1 === 2){
    let val2 = (count * 2000) + 4000
    alert(`El precio total del planchado es de $${val2}, ya viene incluido los $4000 del domicilio`)
}else{
    alert('No se ha seleccionado ningun servicio')
}