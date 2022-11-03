const d= document;

export default function sliderMove(){
    const $right=d.querySelector(".foward-btn"),
    $left = d.querySelector(".back-btn"),
    $slides = d.querySelectorAll(".slider-slide");
    let i=0;
    
    d.addEventListener("click",e=>{
        
        if(e.target === $right){
            e.preventDefault();/*para que no se valla arriba de la pagina*/
            $slides[i].classList.remove("active");
            i++;
            
            if(i==$slides.length) i=0;
            $slides[i].classList.add("active")
        }
        if(e.target === $left){
            e.preventDefault();
            $slides[i].classList.remove("active");
            i--;
            if(i<0) i=$slides.length-1;
            $slides[i].classList.add("active");
        }
        

    })
    setInterval(() => {
        $slides[i].classList.remove("active");
        i++;
        if(i==$slides.length) i=0;
        $slides[i].classList.add("active");
        

    }, 10000);
}