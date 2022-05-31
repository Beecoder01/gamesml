
// def variables:
const installMe = document.getElementById("installMe");

// adding install beforeinstallprompt:
let pm;
installMe.classList.add('d-none');
window.addEventListener('beforeinstallprompt', (e)=>{
    // stop chrome 67+:
    e.preventDefault();
    // store e for later use
    pm = e;
    installMe.classList.remove('d-none');
    //addBtn on click
    installMe.addEventListener('click', (e) => {
        installMe.classList.add('d-none');
        pm.prompt();
        pm.userChoice.then((result)=>{
            if (result.outcome === 'accepted') {
                console.log("installed the app");
            }else{
                console.log("user declined install");
            }
            pm = null;
        });
    });
});


// no internet part:
if (!isInternet) {
var bd = document.querySelector('body');
bd.innerHTML = "";
bd.style.backgroundColor = "white";
bd.innerHTML = 
`
<section data-bs-version="5.1" class="features3  m-0" id="00features3-1f">
    <div class="container-fluid m-0">
        <div class="row pt-3 justify-content-center">
            <div class="item features-image сol-12 col-md-6 col-lg-4 active">
                <div class="item-wrapper rounded shadow border">
                    <div class="item-img">
                        <div class="container d-flex justify-content-center pt-3">NO INTERNET!</div>
                    </div>
                    <div class="item-content">
                    </div>
                    <div class="mbr-section-btn item-footer mt-2 text-center">
                        <a onclick="location.reload()" class="btn btn-primary item-btn display-7" style="min-width: 100px;">Retry</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`; 
}
for (let i = 0; i < 3 ;i++) {
    document.getElementsByClassName('w_80')[i].style = "min-width:200px";
}
