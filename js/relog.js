const d=document;
export function digitalClock(clock, btnPlay, btnStop){
    let clocktempo;
    d.addEventListener("click", e=>{
        if(e.target.matches(btnPlay)){
           clocktempo= setInterval(()=>{
                let clockHour= new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`
            },1000)/* creo una var clockhour y la igualo a un new date, 
            despues busco con sleector a la etiqueta clock y le pongo dentro (inner) un h3 con la variable clockhour*/
            e.target.disabled= true; // deshabilidto el boton para que no se puede reactivar indefinidamente
        }

        if(e.target.matches(btnStop)){
           clearInterval(clocktempo);
           d.querySelector(clock).innerHTML = null;
           d.querySelector(btnPlay).disabled= false;
        }
        
    })
}
export function alarm(sound, alarmON,alarmOff){
    let alarmTempo;
    // creo etiqueta audio en html
    const $alarm = d.createElement("audio");
    // le pego sound en la variable src de audio
    $alarm.src = sound;
    d.addEventListener("click",e=>{
        if(e.target.matches(alarmON)){
            // creo un setTimeout de 10s con una funcion automatica 
            // para que prenda el contenido de la etiqueta audio
            alarmTempo = setTimeout(()=> {
                $alarm.currentTime=30
                $alarm.play()  
                                        },5000
            
            );
            e.target.disabled = true;
        }
        if(e.target.matches(alarmOff)){
            d.querySelector(alarmON).disabled= false;
            clearTimeout(alarmTempo);
            $alarm.pause();
            $alarm.currentTime=30;
            
        }

    })

}