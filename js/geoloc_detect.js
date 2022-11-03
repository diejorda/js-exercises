const d =document,
n = navigator;

export default function getGLocation(unID){
   const $gl = d.getElementById(unID),
   options = { 
    enableHighAccuracy:true,// mejora las condiciones de la pc para buscar la geo
    tiemout:5000,// un timeout de busqueda
    maximuAge: 0}//es para que no se guarden en el cache las lecturas//};
// para saber la localizacion uso get current position, 
// pide una funcion en caso de exito y una de falla para manejar el error
// y la tercera las opciones
// por lo tanto creo las funciones auto ejecutadas const succes y error
const error = (err)=>{
    console.log(`Error: ${err.code} , ${err.message}`);
    $gl.innerHTML= `<p>Error: ${err.code} , ${err.message}</p>`;}
const success = (position)=>{
    let coords = position.coords;
    $gl.innerHTML=

    `<p>Localizacion:</p>
    <ul>
        <li>Latitud:${coords.latitude}</li>
        <li>Longitud:${coords.longitude}</li>
        <li>Precision:${coords.accuracy}</li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},17z" target="_blank" rel="noopener"> Ver en Google Maps </a>`;
   // dato el watchPosition es un listener de la geo para seguimiento.
    console.log(position);}
n.geolocation.getCurrentPosition(success,error,options)
   
}