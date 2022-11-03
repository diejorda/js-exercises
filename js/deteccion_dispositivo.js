const d=document,
nv = navigator,
ua = nv.userAgent

export default function detectDispositive(id){
    console.log(ua);
    // user agent nos da un monton de info del navegador y dispositivo
    // es una cadena de texto.
    const $id =  d.getElementById(id),
        isMobile = {
            android:() => ua.match(/android/i),
            ios: () => ua.match(iphone|ipad|ipod/i),
            windows: ()=> ua.match(/windows phone/i),
            any: function() {
                return this.android()||this.ios()||this.windows();
            },
        },
        isDesktop = {
            linux: () => ua.match(/linux/i),
            mac:()=> ua.match(/mac os/i),
            windows:()=>ua.match(/windows nt/i),
            any: function () {
                return this.linux()||this.mac()|| this.windows();
            }
        },
        isBrowser={
            // deberia completarlo con todos los browsers
        };


}