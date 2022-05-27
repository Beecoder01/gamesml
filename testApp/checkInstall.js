var isConnect = false;
// check connection
if (window.navigator.onLine) {
    isConnect = true;
    if (localStorage.getItem("installed")) {
        // window.open("https://vs4apps.blogspot.com/", '_self');
        alert("opening url")
    } 
} else {
    isConnect = false;
}