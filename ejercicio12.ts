var equipos:any = [];
var resultados:any = [];

for (var i = 0; i < 3; i++) {
    var equipo:String = "Barcelona " + (i + 1) 
    equipos.push(equipo);
    
    var fechaResultados:Array<number> = [];
    for (var j = 0; j < 3; j++) {
        var resultado:any = "Ingrese el marcador para " + equipo + " en la fecha " + (j + 1) + ":"
        fechaResultados.push(resultado);
    }
    resultados.push(fechaResultados);
}


var puntos:Array<number> = [0, 0, 0]; // Inicialización de puntos para los 3 equipos
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        if (resultados[i][j] > resultados[i][(j + 1) % 3]) {
            puntos[i] += 3; // Victoria
        } else if (resultados[i][j] === resultados[i][(j + 1) % 3]) {
            puntos[i] += 1; // Empate
        }
    }
}

var ranking:any = [];
for (var i = 0; i < 3; i++) {
    ranking.push({ equipo: equipos[i], puntos: puntos[i] });
}


ranking.sort(function(a, b) {
    return b.puntos - a.puntos;
});

console.log("Ranking de Equipos:");
for (var i = 0; i < 3; i++) {
    console.log((i + 1) + ". " + ranking[i].equipo + " - Puntos: " + ranking[i].puntos);
}