var isConnect = false;
var loadData = false;
// check connection
if (window.navigator.onLine) {
    isConnect = true;
    if (localStorage.getItem("installed")) {
        loadData = true;
    } 
} else {
    isConnect = false;
}