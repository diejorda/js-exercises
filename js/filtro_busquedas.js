const d= document;

export default function searchFilter(claseInputSearch,claseSobreLaQBusca){
//primer paramentro hace referencia al input en el que va a buscar y el segundo ahce referencia en donde va a filtrar   
   d.addEventListener("keyup",e=>{
       if(e.target.matches(claseInputSearch)){
       // target seria el input
       //dentro de todos los que posean la clase que se busca.
       //dentro de su contenido de texto en minuscula,
       //busco si incluye el valor
       //? si da true remuevo la clase filter (css class que posee un display none)
       //: si da false adquiero la clase filter
       d.querySelectorAll(claseSobreLaQBusca).forEach(el=>
        el.textContent.toLowerCase().includes(e.target.value)
            ?el.classList.remove("filter")
            :el.classList.add("filter")
            );
       
        if(e.key==="Escape")e.target.value="";

       }
   })
}