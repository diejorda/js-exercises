const d= document,
w = window,
n= navigator;
export default function networkStatus(){
    //creo evento window para la conexion
    const isOnLine = () => {
      const  $div = d.createElement("div");

        if(n.onLine){
            $div.textContent= "Conexion reestablecida";
            $div.classList.remove("offline");
            $div.classList.add("online");
            
        }else{
            $div.textContent= `Conexion perdida`;
            $div.classList.remove("online");
            $div.classList.add("offline");
           
        }
        d.body.insertAdjacentElement("afterbegin",$div);
        setTimeout(()=>d.body.removeChild($div),2000);
    }

    w.addEventListener("online",e=>isOnLine())
    w.addEventListener("offline",e=>isOnLine())
    

}

