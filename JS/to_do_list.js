let pregunta;
let lista_tareas=[];

alert("BienvenidX")

function preguntar() {
    return (pregunta=prompt('¿Tienes alguna tarea? Responde SI o NO'))
}

function registro_tareas() {
    nueva_tarea= prompt("Escribe tu tarea, si no tienes más, escribe TERMINAR")
    lista_tareas.push(nueva_tarea);
    if (nueva_tarea !== "TERMINAR" && lista_tareas !== "terminar") {
        return console.log(lista_tareas);}
}

for (let i=0; i < 1; i++) {
    preguntar();
    if (pregunta == "SI" || pregunta == "si") {
        for(let i=0; i<8; i++){
            if (lista_tareas === "TERMINAR" || lista_tareas === "terminar"){
                console.log("--Proceso finalizado--");
                break;
            }
            else{
                registro_tareas();
            }
        }
    }
    else if (pregunta=="NO" || pregunta=="no"){
        alert("Que tengas un buen día");
        break;
    }
    else{
        alert("No se puede proceder");
    }
}
