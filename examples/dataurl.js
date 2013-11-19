var qrcode=require('../index.js');
var url = 'http://www.sunzhongkui.me';
var dataURL = qrcode.toDataURL(url, 4);
console.log(dataURL);