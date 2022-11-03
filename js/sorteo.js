const d= document;
//un boton para iniciar el sorte y una clase a sortear
export default function sort(btn,classASortear){

    // creo funcion getWinner, es una funcion auto ejecutada
    // crea un conjunto del dom con todos los elementos con la clase a sortear
    // genera un numero al azar con mathrandom y lo multiplica por el largo del conjunto del dom creado anteriormente
    // crea una const winner con un elemento al azar del conjunto del dom creado
   const getWinner = (classASortear)=>{
       const $players = d.querySelectorAll(classASortear),
        random = Math.floor(Math.random()*$players.length),
        winner = $players[random];  
        console.log(winner)
        //retorna el textContent del ganador

        return `El ganador es ${winner.textContent}`
    }
   
    //cuando se haga click si el evento esta en el btn
    // crea una variable con el retorno de la funcion getWinner
    // la imprime en un alert y en un console log.
    d.addEventListener("click",e=>{
        if(e.target.matches(btn)){
            let result = getWinner(classASortear);
            alert(result);
            console.log(result)


        }
    })
}