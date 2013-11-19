
qrcode-js
========

This is a node.js wrapper for the qrcode JavaScript library (http://www.d-project.com/qrcode)

Install
========

`npm install qrcode-js`
 
Example
========

    var qrcode=require('qrcode-js');
    var url = 'http://www.sunzhongkui.me';
    var base64 = qrcode.toDataURL(url, 4);
