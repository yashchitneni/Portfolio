var JSFtp = require("jsftp");

var ftp = new JSFtp({
    host: "nasdaq.com"
});

ftp.get('ftp://ftp.nasdaqtrader.com/symboldirectory/nasdaqlisted.txt', 'nasdaq.txt', function (hadErr) {
    if (hadErr)
        console.error('There was an error retrieving the file.');
    else
        console.log('File copied successfully!');
});
