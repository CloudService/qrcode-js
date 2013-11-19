var qrcode=require('../index.js');
var url = 'http://www.sunzhongkui.me';
var base64 = qrcode.toDataURL(url, 4);
console.log(base64);