// populating contents:
document.getElementById('root').innerHTML =
`
<iframe src="https://vs4apps.blogspot.com/" width="100%"  frameborder="0" id="disIframe"></iframe>
    <div class="wrapper" id="display">
        <h1 id="mText">VS Apps</h1>
        <h4 id="sText">Click to Start App</h4>
        <button id="btn1" class="button">START</button>
        <button id="btn2" class="button">RETRY</button>
        <button id="addBtn" class="button">A2HS</button>
    </div>
`;

// def variables:
const sText = document.getElementById("sText");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const addBtn = document.getElementById("addBtn");
const display = document.getElementById("display");
const disIframe = document.getElementById("disIframe");

// onload:
// iframe hidden via style.css
btn1.style.display = "none";
btn2.style.display = "none";


//check internet connection:
if (!isConnect) {
    console.log("internet:"+ isConnect);
    sText.innerText = `No Internet!`;
    btn1.style.display = "none";
    addBtn.style.display = "none";
    btn2.style.display = "block";

    btn2.addEventListener('click', (e) => {
        location.reload();
    });
}

//btn1 on click
// btn1.addEventListener('click', (e) => {
//     console.log("started");
//     localStorage.setItem("installed", true);
//     location.reload();
// });

//load data on internet connection true:
/*
if (loadData) {
    document.getElementById("display").style.display = "none";
    document.getElementById("disIframe").style.display = "block";
    document.getElementsByTagName('body')[0].style.background = 'unset';
    document.getElementsByTagName('body')[0].classList.add('backgroundLoadData');
    console.log(loadData);
} else {
    console.log(loadData);
}
*/

// here adding btn3 work:
let pm;
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e)=>{
    // stop chrome 67+:
    e.preventDefault();
    // store e for later use
    pm = e;
    addBtn.style.display = 'block';
    //btn3 on click
    addBtn.addEventListener('click', (e) => {
        addBtn.style.display = 'none';
        pm.prompt();
        pm.userChoice.then((result)=>{
            if (result.outcome === 'accepted') {
                console.log("user installed the app");
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

