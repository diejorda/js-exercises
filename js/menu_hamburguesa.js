export default function hamburguerMenu(panelBtn,panel,menuLink){
const d= document;
d.addEventListener("click",e=>{
    if(e.target.matches(panelBtn)||e.target.matches(`${panelBtn} *`)/* todos los hijos de panelbtn es decir las lineas tambien*/)
    {
        d.querySelector(panel).classList.toggle("is-active");
        d.querySelector(panelBtn).classList.toggle("is-active");
    }
    if(e.target.matches(menuLink))
    {
        d.querySelector(panel).classList.remove("is-active");
        d.querySelector(panelBtn).classList.remove("is-active");
    }
})
}