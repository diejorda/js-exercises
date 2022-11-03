const d= document;
const ls= localStorage;
 // retorna los elementos que tengan data-dark
// en este caso html solo
export function nightmodetoggle(unBtn, classDark){
    var $selector = d.querySelectorAll("[data-dark]");
    function darkMode() {
        $selector.forEach(el => el.classList.add(classDark));
        $btn.textContent = sun;
        ls.setItem( "theme", "dark")
    }
    function lightMode(){$selector.forEach(el => el.classList.remove(classDark))
        $btn.textContent = moon;
        ls.setItem( "theme", "light")// guardo en el local storage nuestro modo actual

    }
    const $btn= d.querySelector(unBtn);
    let moon="🌙",
    sun="🌞";
    d.addEventListener("click", e =>{
        if(e.target.matches(unBtn)||e.target.matches(`${unBtn} *`)){
            
            if($btn.textContent === moon){ darkMode();
                  }
                
            else{
                lightMode();
                }
                                                                    }})

    // creo una variable local storage para guardar el estado de dark o lightmode
    d.addEventListener("DOMContentLoaded", (e)=> {
        // si no tengo valor previo creo uno y le pongo light
        if(ls.getItem("theme")===null){
            ls.setItem(//nombre, value
                "theme", "light"
                )

        }
        if(ls.getItem("theme") === "light"){lightMode()}

        if(ls.getItem("theme")==="dark"){ darkMode()}

    }
    )
                                                                }


        
    
   
        
       

        
    