const d = document;

export default function formSend(){
const $form = d.querySelector(".contact-form");
    
d.addEventListener("submit",e=>{
    e.preventDefault();
    if(e.target===$form){
        fetch("https://formsubmit.co/ajax/diejordatrading@gmail.com",{
            method:"POST",
            body:new FormData(e.target),
            mode: "cors"
        })
            .then(res=>res.ok ?res.json():Promise.reject(res))
            .then(json =>{
                console.log(json);
                $form.reset();
            })
            .catch(err =>{
                console.log(err);
            })

    }
})


}