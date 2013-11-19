var qrcode=require('../index.js');
var url = 'http://www.sunzhongkui.me';
var base64 = qrcode.toBase64(url, 4);
console.log(base64);