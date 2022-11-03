import hamburguerMenu from "./menu_hamburguesa.js";
import { digitalClock,alarm } from "./relog.js";
import { moveBall, shorcuts } from "./teclado.js";
import { countDown } from "./cuenta-regresiva.js";
import { scrollTopBtn } from "./btn_scroll.js";
import { nightmodetoggle } from "./nightmode.js";
import responsiveMedia from "./responsive.js";
import detectDispositive from "./deteccion_dispositivo.js";
import networkStatus from "./deteccion_red.js";
import getGLocation from "./geoloc_detect.js";
import searchFilter from "./filtro_busquedas.js";
import sort from "./sorteo.js";
import sliderMove from "./slider.js";
import scrollSpy from "./spyscroll.js";
import inteligentVideo from "./videoInteligente.js";
import formSend from "./form-send-fetch.js";
const d=document;
const contenidoMovil = "https://youtu.be/_zmjCoWvXYg*/";
const contedoEscritorio='<iframe width="560" height="315" src="https://www.youtube.com/embed/_zmjCoWvXYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

d.addEventListener("DOMContentLoaded", e=> {
    hamburguerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/weAreAlarm.mp3","#activar-alarma","#desactivar-alarma");
    countDown("countdown","Sep 02,2022 00:00:00","llego septiembre");
    scrollTopBtn(".scroll-tp-btn");
    responsiveMedia("youtube","(min-width:1024px)",contenidoMovil,contedoEscritorio);
    detectDispositive("user-device");
    networkStatus();
    getGLocation("geolocation");
    searchFilter(".card-filter",".card");
    sort("#btn-sort",".player");
    sliderMove();
    scrollSpy();
    inteligentVideo();
    formSend();
    
})

d.addEventListener("keydown",e=>{
shorcuts(e);
moveBall(e,".ball",".stage")
})
// se coloca esta funcion afuera por que dentro de ella
// hay un evenlistener ContenLoaded y no se puede tener dos.
nightmodetoggle(".btn-nightmode","nightmode")