function generarExcusa() {
    let who =['El perro', 'Mi abuela','El cartero','Mi pájaro'];
    let action =['se comió', 'orinó en', 'aplastó','rompió'];
    let what =['mi tarea', 'mi teléfono','el coche'];
    let when =['antes de la clase', 'cuando estaba durmiendo', 'mientras hacía ejercicio','durante mi almuerzo','mientras estaba rezando'];
    let subject =who[randomNumberFromArray(who)];
    let verb =action[randomNumberFromArray(action)];
    let object = what[randomNumberFromArray(what)];
    let moment = when[randomNumberFromArray(when)];

    let excusa = `${subject} ${verb} ${object} ${moment}.`;
    
    document.getElementById("excusa").innerText = excusa;
}

function randomNumberFromArray(array){
    let randomNumber = Math.floor(Math.random() * array.length) 
    return randomNumber
}   
window.onload = generarExcusa();
 