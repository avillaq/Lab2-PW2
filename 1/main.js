document.addEventListener('DOMContentLoaded',init);
function init(){
    let date = new Date();
    let day = date.getDay();

    let greeting = document.querySelector("#greeting");
    greeting.innerHTML = `Hola, hoy es ${getCurrentDay(day)}`;

    console.log(`Hola, hoy es ${getCurrentDay(day)}`);

    
    function getCurrentDay(n){
        let days = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
        return days[n];
    }
}