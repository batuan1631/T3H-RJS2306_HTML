// var n = 0;
// function changeX(){//khai bao ham
//     n++;
//     var h1x = document.getElementById("number");
//     h1x.innerText = n;
// }

// changeX();//thuc thi ham

// // event


// var p = 0;
// function tranformX(){
//     p = p+45;
//     var tran = document.getElementById("clock");
//     tran.style.transform = p;
// }

// tranformX();

// var x = 100;
// function downX(){
//     var s = setInterval(
//         function(){
//             x--;
//             var h1x = document.getElementById("number");
//             h1x.innerText = x;
//             if(x<=0){
//                 clearInterval(s);
//             } 
//         },1000
//     )
// }
// downX();



var min = 10;
var sec = 0;
function demnguoc(){
    var demphut = setInterval(function(){
        var m = document.getElementById("min");
        m.innerText = min >= 10 ? min : "0" + min;
        var s = document.getElementById("sec");
        s.innerText = sec;
        sec--;
        if(sec<0){
            sec=59;
            min--;
        }
        if(min<=0){
            clearInterval(demphut);
        }
    },1000);
}
demnguoc();