function projectCheems(string){
    console.clear();
    let powerCheem = "m",
        countM = 0;
        stmtrminmg = [];
    string = string.split("");
    for(let i = 0; i < string.length; i++){
        countM++;
        if(countM === 3){               //Que tan agresivo quieres tu cheems: 1 super agresivo, +5 tu cheems no tan agresivo
            countM = 0;
            stmtrminmg.push(powerCheem);
        }
        stmtrminmg.push(string[i]);
    }
    console.log(stmtrminmg.join(""));
}

let cadenaDeTexto = "El cheemsificador de texto funciona";
projectCheems(cadenaDeTexto);
//Elm chmeemmsifmicamdorm dem temxtom fumncimona

// //Ejemplos
    // console.log(string);
    // //String a Array
    // string = string.split("");
    // console.log(string);
    // //Array a String
    // string = string.join("");
    // console.log(string);
//Linea 8-9
    // if(string[i] === " "){
    // }