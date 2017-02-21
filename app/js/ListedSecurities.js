let xhttp = new XMLHttpRequest();
let url = 'ftp://ftp.nasdaqtrader.com/symboldirectory/nasdaqlisted.txt';

xhttp.open("GET",  url, true);
xhttp.send();



let entireFile = '';
let lines = '';

xhttp.onreadystatechange = function () {
    console.log("Server is working?");
    if (this.readyState == 4 && this.status == 200) {
        /*entireFile = xhttp.responseText;
lines = entireFile.split("\n");*/
        console.log("hello");
    }
}
