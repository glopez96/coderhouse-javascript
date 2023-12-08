let nombre= prompt("Bienvenid@ a Kumelen!! La tienda Nº1 de Perfumeria y Art. de limpieza de Wilde \nPor favor, decime tu nombre:");

while(nombre =="" || nombre == null){
    error();
    nombre= prompt("Bienvenido a Kumelen!! La tienda Nº1 de Perfumeria y Art. de limpieza de Wilde \nPor favor, decime tu nombre:");
}

let categoria;

function error(){alert("Ingresaste un dato no valido")}

function compraRealizada(producto, precio){
    alert("Compraste "+producto+"!! Total a pagar: "+precio)
}


categoria = prompt("Hola, "+nombre+" ¿Que desea comprar hoy?\n\n1. Perfumeria\n2. Articulos de Limpieza\n\n0. Para salir");

while(categoria =="" || categoria == null){
    error();
    categoria = prompt("Hola, "+nombre+" ¿Que desea comprar hoy?\n\n1. Perfumeria\n2. Articulos de Limpieza\n\n0. Para salir");
}
switch(categoria) {
    case "1":
    let perfumeria = prompt("Estos son los articulos disponibles, por favor seleccione uno \n\n1. Ciel: $8.000 \n2. One Million: $22.000 \n3. Invictus: $25.000\n4. Paco Rabbane: $35,000");
    switch(perfumeria){ 
        case "1":
            compraRealizada("Perfume Ciel","$8.000");
            break;

        case "2":
            compraRealizada("Perfume One Milion","$22.000");
            break;

        case "3":
            compraRealizada("Perfume Invictus","$25.000");
            break;

        case "4":
            compraRealizada("Perfume Paco Rabbane","$35.000");
            break;

        case null:
            error()
            break
        case "":
            error()
            break

        default: 
            error()}
            break;
case "2": 
        let limpieza = prompt("Estos son los articulos disponibles, por favor seleccione uno:\n\n1. Desodorante de pisos Poett: $400\n2. Papel Higienico Higienol 80 metros: $1550\n3. Rollo de cocina Sussex 50metros x 3: $900\n4. Lavandina Ayudin x 2L: $600\n5. Escobillon Samanta: $900")
        switch(limpieza){
        
        case "1":
            compraRealizada("Desodorante de pisos Poett", "$400")
            break;
            
        case "2":
            compraRealizada("Papel Higienico Higienol 80 metros","$1.550");
            break;
            
        case "3":
            compraRealizada("Rollo de cocina Sussex!","$900");
            break;
    
        case "4":
            compraRealizada("Lavandina Ayudin x 2L","$600");
            break;
            
        case "5":
            compraRealizada("Escobillon Samanta","$900");
            break;
        
        case null:
            error()
            break
        case "":
            error()
            break
            
        default:error()}
        break; 
    }