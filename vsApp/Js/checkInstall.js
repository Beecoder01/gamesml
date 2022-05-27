var isConnect = false;
// check connection
if (window.navigator.onLine) {
    isConnect = true;
    if (localStorage.getItem("installed")) {
        setTimeout(() => {
        window.open("https://vs4apps.blogspot.com/", '_self');
        // alert("proceed success"); 
        }, 1500);
        
    } 
} else {
    isConnect = false;
}