window.addEventListener('load', () => { registerSW(); }); async function registerSW() 
{ 
    if ('serviceWorker' in navigator) { 
        try { 
            await navigator.serviceWorker.register('../sw.js'); 
            console.log(`SW registration success`);
        } catch (e) { 
            console.log(`SW registration failed`); 
        } 
    } 
}

// showing install prompt using button
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    btn1.addEventListener('click', (e) => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log("accepted");
                localStorage.setItem("installed", true);
                location.reload();
            } else {
                console.log("dismissed");
            }
            deferredPrompt = null;
        });
    });
});

if (!isConnect) {
    console.log(isConnect);
    document.getElementById("sText").innerText = `No Internet!`;
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "block";

    btn2.addEventListener('click', (e)=>{
        location.reload();
    });
}