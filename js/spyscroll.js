const d= document;
export default function scrollSpy(){
    //creo una variable con todas las etiquetas section(clase)  que tenga el atributos con el data-scroll-spy
    const $sections=d.querySelectorAll("section[data-scroll-spy]")
    // creo la callback
    const cb= (entries) => {
       // console.log("entries",entries);
        //el observador esta tomando mucha info de la pantalla por lo tanto me 
        //retorna mas de una entry. Luego tendre que achicar los px que observa el observer
        // cada entry tiene una propiedad que se llama isIntersecting
        // retorna un bool cuando la entry esta interactuando en la pantalla
        // ademas posee un atributo target que targetea a si mismo
           entries.forEach((entry)=>{
            // creo una const que me traiga el atributo id de cada entrada (en este caso las secciones)
            //console.log(entry);
            const id= entry.target.getAttribute("id");
           // console.log(id);
            if(entry.isIntersecting){
                //si la seccion esta intersecting busco en el documento el elemento que
                //sea un link que tenga el data atribute requerido
                //y que posea un href con la misma id que la entry que nos proporciona el observer
                // luego en la misma accion a ese elemento del nav le agrego una clase css "active"
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
            }
            else{// si la intersecion ya pasa ser falsa, se remueve la clase.
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
            }
        }
     )
    }
    //intersectionObserver es un api del dom que recibe 2 parametros.
    //una funcion callback y una lista de opciones del treshold
    const observer = new IntersectionObserver(cb,{
        //rootmargin en pixeles sirve para achicar o agrandar la vision del observador
        //positivo aleja, negativo achica
        rootMargin:"-330px"
    });

    // por cada una de las etiquetas en la variable section
    // le asigno el observer con el metodo observar
        // dentro de observe() coloco cual es el target que voy a estar observando
        // en este caso es el mismo elemento
    $sections.forEach(el=> observer.observe(el))
    
}