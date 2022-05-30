// populating contents:
document.getElementById('root').innerHTML =
`
<iframe src="https://vs4apps.blogspot.com/" width="100%"  frameborder="0" id="disIframe"></iframe>
    <div class="wrapper" id="display">
        <h1 id="mText">VS Apps</h1>
        <h4 id="sText">Click to Start App</h4>
        <button id="addBtn" class="button">A2HS</button>
        <button id="retry" class="button">RETRY</button>
    </div>
`;

// def variables:
const sText = document.getElementById("sText");
const addBtn = document.getElementById("addBtn");
const retry = document.getElementById("retry");
const display = document.getElementById("display");
const disIframe = document.getElementById("disIframe");

// onload:
// iframe hidden via style.css
retry.style.display = "none";


//check internet connection:
if (!isConnect) {
    console.log("internet:"+ isConnect);
    sText.innerText = `No Internet!`;
    addBtn.style.display = "none";
    retry.style.display = "block";

    retry.addEventListener('click', (e) => {
        location.reload();
    });
}

// load data when 1. "installed" == true in localstorage && internet connection is true:
if (loadData) {
    //1. show iframe:
    disIframe.style.display = "block";
    //2. hide wrapper display:
    display.style.display = "none";
    //3. adding extras: loading bg:
    document.getElementsByTagName('body')[0].style.background = 'unset';
    document.getElementsByTagName('body')[0].classList.add('backgroundLoadData');
}

// here adding addBtn beforeinstallprompt:
let pm;
addBtn.style.display = 'none';
window.addEventListener('beforeinstallprompt', (e)=>{
    // stop chrome 67+:
    e.preventDefault();
    // store e for later use
    pm = e;
    addBtn.style.display = 'block';
    //addBtn on click
    addBtn.addEventListener('click', (e) => {
        addBtn.style.display = 'none';
        pm.prompt();
        pm.userChoice.then((result)=>{
            if (result.outcome === 'accepted') {
                console.log("installed the app");
                localStorage.setItem("installed", true);
            }else{
                console.log("user declined install");
                alert("user declined install");
                pm = null;
                location.reload();
            }
            pm = null;
        });
    });
});
