const d = document;
let x=0;
let y=0;

export function moveBall(e,selectorBall,selectorStage){
    const $ball = d.querySelector(selectorBall);
    const $stage = d.querySelector(selectorStage);
    // con getBoundingClientRect retorno los limites de posicion de los elementos
    // bottom, height, left,right,top,width,y,x
    const limitBall = $ball.getBoundingClientRect()
    const limitStage = $stage.getBoundingClientRect()
    
    // uso los key code de las flechas
        
    switch(e.keyCode){
        case 37:
            if(limitBall.left-5>limitStage.left){ 
                e.preventDefault();
                x--;}
            break
        case 38:
            if(limitBall.top-5>limitStage.top){ 
                e.preventDefault();
                y--;}
            break
        case 39:
            if(limitBall.right+5<limitStage.right){ 
                e.preventDefault();
                x++;}
            break
        case 40:
            if(limitBall.bottom+5<limitStage.bottom){ 
                e.preventDefault();
                y++;}
            break
        default:
            break
        }
        $ball.style.transform=`translate(${x*10}px,${y*10}px)`;
        console.log(`${x},${y}`);


}

export function shorcuts(e){
        if(e.key==="a"&& e.altKey){
            alert("tocaste a+alt")
        }
        if(e.key=="a" && e.ctrlKey){
            alert("tocaste a+ctrl")
        }
        if(e.key=="A" ){
            alert("tocaste a+shift")
        }
    }
// key up cuando soltamos
// key up cuando la presionamos 
// key press mientras la tengo apretada
// cada tecla tiene keycode para interpretar
// ejemplo el keycode de enter es el 13
// igualmetne se puede hacer key="a"