const d= document,
w= window;

export default function inteligentVideo(){

   const $videos=d.querySelectorAll("video[data-smart-video]");
    console.log($videos);
   const cb = (entries) =>{
       entries.forEach(entry => {
           if(entry.isIntersecting){
            entry.target.play()
            
           }else{
               entry.target.pause()
           }
           //el evento se ejecuta si hay un cambio de pantalla o viñeta
           //document.visilityState me retorna si estoy viendo la pagina o estoy en otra viñeta.
           w.addEventListener("visibilityChange",e=>d.visibilityState==="visible")

           
        });
   }
    const observer = new IntersectionObserver(cb,{
        //rootmargin en pixeles sirve para achicar o agrandar la vision del observador
        //positivo aleja, negativo achica
        threshold:0.5
    });
    $videos.forEach(el=> observer.observe(el))
}