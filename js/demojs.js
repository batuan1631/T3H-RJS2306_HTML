var chooses = [];
var randoms = [];


while (chooses.length<5){
    var c = prompt("nhap vao so tu 0 den 45");
    c = parseInt(c);
    if(c>=0 && c<=45){
        chooses.push(c);
    }
}