// khai bao 1 array
var arr = [];
// vi tri cac phan tu theo thu tu 0 1 2 3..
/* arr [0] = 15;
arr [1] = "hello";
arr [2] = 30;

for(var i=0; i<=10; i++){
    // c1
    arr[i] = prompt("nhap gia tri cho ptu: "+i);
    // c2
    var x = prompt("nhap gia tri ptu");
    arr.push(x);
} */

// nhap vao mang 10 ptu , tim so lon nhat trong mang
/* for(var i=0; i<=10; i++){
    arr[i] = prompt("nhap gia tri cho ptu: "+i);
    // gan gia tri lon nhat vao so dau tien
    var max = arr[0];
    for(var j=0; j<arr.length; j++){
        if(max<arr[j]){
            max = arr[i];
        }
    }
}
alert("so lon nhat trong mang: "+max); */
// tim gia tri nho nhat trong mang
// B1 nhap gia tri tu ban phim
/* for(var i=0; i<10; i++){
    var x = prompt("nhap vao phan tu thu: "+i);
    arr.push(x);
} */
// B2 so sanh so dau tien voi cac so con lai
// gan gia tri nho nhat cho vi tri dau tien
/* var min = arr[0];
for(var i=1; i<arr.length; i++){
    if(min>arr[i]){
        min = arr[i];
    }
} */
// alert("so nho nhat trong mang: "+min);

// foreach
/* arr.map((e,i)=>{
});
 */
// sap xep mang theo thu tu tu be den lon
/* arr.sort();

x=15;
arr.includes(x); */
// kiem tra xong trong mang co gia tri x khong
/* if(arr.includes(x)){
    alert("trong mang co gia tri"+x);
} */

// luckynumber

/* var ran = parseInt(Math.random()*100);

do{
    var n = prompt("nhap vao so ngau nhien tu 0->99: ");
    n = parseInt(n);
    if(n>=0 && n<=99 && !arr.includes(n)){
        arr.push(n);
    }
}while(arr.length<5);

var check = false;

for(var i=0; i<arr.length; i++){
    if(arr[i] == ran){
        alert("trung giai");
        check = true;
        break;
    }
    
}
if(check  == false){
    alert("khong trung giai");
} */

/* VIETLOT
nguoi choi mua 5 so khac nhau 0->45
he thong se ngau nhien sinh ra 5 so khac nhau
doi chieu 5 so nguoi choi chon voi bo 5 so ngau nhien kia 
khong nhat thiet phai dung thu tu 
neu trung 3/5 so: 10 trieu
neu trung 4/5 so: 100 trieu
trung 5/5: jackpot */

var ran = parseInt(Math.random()*5);
do{
    var number = prompt("chon mot so 0->45");
    number = parseInt(number);
    if(number>=0 && number<=45 && !arr.includes(number)){
        arr.push(number);
    }

}while(arr.length < 5)
var check = false;
for(var i=0; i<arr.length; i++){
    if(arr[i] == ran){
        alert("ban trung 10tr");
        check = true;
        break;
    }
    // if(arr[i] == ran == 4){
    //     alert("ban trung 100tr");
    //     check = true;
    //     break;
    // }if(arr[i] == ran == 5){
    //     alert("ban trung jackpot");
    //     check = true;
    //     break;
    // }
}
if(check  == false){
    alert("khong trung giai");
}


