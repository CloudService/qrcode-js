
var qrcode = require('./lib/qrcode.js');

module.exports = {
    toBase64: function(text, size){
        var qr = qrcode(4, 'M');
        qr.addData(text);
        qr.make();
        var base64 = qr.createImgBase64(size);
        return base64;
    },
    toDataURL: function(text, size){
        var base64 = this.toBase64(text, size);        
        var dataURL = 'data:image/gif;base64,' + base64; 
        return dataURL;
    }
};
