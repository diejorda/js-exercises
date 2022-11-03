const d= document;
export function countDown(id, limitDate, finalMassage){
    const $countDown= d.getElementById(id),
    countDownDate = new Date(limitDate).getTime()
    // con getTime obtengo la data en milisegundo para operar mejor
    let countdownTempo=setInterval(()=>{
        let now= new Date().getTime(),
        limitTime= countDownDate-now,
        days= Math.floor(limitTime/(1000*60*60*24)),
        hours=("0"+ Math.floor((limitTime%(1000*60*60*24))/(1000*60*60))).slice(-2),
        minutes= ("0"+ Math.floor((limitTime%(1000*60*60))/(1000*60))).slice(-2),
        seconds=("0"+ Math.floor((limitTime%(1000*60))/(1000))).slice(-2);
        //limiTime me va cuanto me falta.
        
        $countDown.innerHTML = `<h3>Faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`;
         if(limitTime<=0){
             clearInterval(countdownTempo);
             $countDown.innerHTML= `<h3>${finalMassage}</h3>`;
         }
    },1000);
}