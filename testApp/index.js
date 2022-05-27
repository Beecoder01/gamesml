window.addEventListener('load', () => { registerSW(); }); async function registerSW() 
{ 
    if ('serviceWorker' in navigator) { 
        try { 
            await navigator.serviceWorker.register('./sw.js'); 
            console.log(`SW registration success`);
        } catch (e) { 
            console.log(`SW registration failed`); 
        } 
    } 
}

if (!isConnect) {
    console.log(isConnect);
    document.getElementById("sText").innerText = `No Internet!`;
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "block";

    btn2.addEventListener('click', (e)=>{
        location.reload();
    });
}

btn1.addEventListener('click',(e) =>{
    console.log("started");
    localStorage.setItem("installed", true);
    location.reload();
})