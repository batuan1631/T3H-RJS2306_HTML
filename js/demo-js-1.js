//variable - bien
/* var x = 10; // x la ky hieu ma coder thich dat gi va no se dai dien cho gia tri di theo
var y = "hello"
console.log(5+3);
x=x+10
console.log(x);
console.log(y);
 */
/* if(x > 15){
    console.log("x > 15");
}else{
    console.log("x < 15");
} */

/* if(x > 15){
    alert("x > 15");
}else{
    alert("x < 15");
} */

/* if(x > 15){
    var msg = prompt("vui long nhap so dien thoai");
    console.log(msg);
    alert(msg);
}else{
    var msg = prompt("vui long nhap dia chi");
    console.log(msg);
    alert(msg);
} */

/* var username = prompt("nhap ten");
var phone = prompt("nhap so dien thoai");
var address = prompt("nhap dia chi");
var email = prompt("email");
alert(username+ " || " +phone+ " || " +address+ " || " +email); */


/* for(var i=0; i<10; i++){
    var kq = prompt("Nhap 1 so tu 0 -> 100");
    console.log(kq);
} */

/* 
var ran = parseInt(Math.random()*100);
for(var i=0; i<10; i++){

    var n = prompt("Nhap vao 1 so bat ki");
    n = parseInt(n);

    for(; n<0 || n>100;){
        var n = prompt("nhap so bat ki");
        n = parseInt(n);
    }

    if(n==ran){
        alert("trung giai");
        break;
    }else{
        alert("khong trung");
    }
} */


do{
    var tiengui = prompt("nhap vao so tien gui");
    tiengui = parseInt(tiengui);
}while(tiengui<=0)

do{
    var phantram = prompt("nhap vao phan tram theo nam");
    phantram = parseFloat(phantram);
}while(phantram<=0)

do{
    var sonam = prompt("nhap vao so nam");
    sonam = parseInt(sonam);
}while(sonam<=0)


for(var i=0; i<sonam; i++){
    var lai = tiengui * phantram/100;
    tiengui = tiengui + lai;
}

alert("Sau khi gui xong se nhan duoc: "+tiengui);