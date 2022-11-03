const d= document,
w= window; // ingreso una class
export function scrollTopBtn(unBtn){
    const $scrollbtn = d.querySelector(unBtn)

    // evento scroll de la ventana
    w.addEventListener("scroll",e=>{
       
        if(d.documentElement.scrollTop>800){
         //console.log(d.documentElement.scrollTop)
         //console.log($scrollbtn)
         $scrollbtn.classList.remove("hidden")}
         
        else{$scrollbtn.classList.add("hidden");}
        // me retorna la posicion de la ventana en px
        //console.log(d.documentElement.scrollTop);

    })

    d.addEventListener("click", e=>{
        if(e.target.matches(unBtn)||e.target.matches(`${unBtn} *`)){
            d.documentElement.scrollTop = 0;
        }

    })



}