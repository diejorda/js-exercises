const d= document,
w = window;
export default function responsiveMedia(id,mediaQuery,mobileContent,descktopContent){
let breakpoint = w.matchMedia(mediaQuery);

if(breakpoint.matches){
d.getElementById(id).innerHTML = descktopContent;
}
else{d.getElementById(id).innerHTML =`link: ${mobileContent}`;}


}

