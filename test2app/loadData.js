// populating contents:
document.getElementById('root').innerHTML =
`
<iframe src="https://vs4apps.blogspot.com/" width="100%"  frameborder="0" id="show"></iframe>
    <div class="wrapper" id="display">
        <h1 id="mText">VS Apps</h1>
        <h4 id="sText">Click to Start App</h4>
        <button id="btn1" class="button">START</a>
        <button id="btn2" class="button">RETRY</a>
    </div>
`;

//check internet connection:
if (!isConnect) {
    console.log(isConnect);
    document.getElementById("sText").innerText = `No Internet!`;
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "block";
    document.getElementById("display").style.display = "block";
    document.getElementById("show").style.display = "none";

    btn2.addEventListener('click', (e) => {
        location.reload();
    });
}

//btn1 on click
btn1.addEventListener('click', (e) => {
    console.log("started");
    localStorage.setItem("installed", true);
    location.reload();
});

//load data on internet connection true:
if (loadData) {
    document.getElementById("display").style.display = "none";
    document.getElementById("show").style.display = "block";
    document.getElementsByTagName('body')[0].style.background = 'unset';
    document.getElementsByTagName('body')[0].classList.add('backgroundLoadData');
    console.log(loadData);
} else {
    console.log(loadData);
}
