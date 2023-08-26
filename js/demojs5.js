function demo1(){
    console.log("demo 1 action");
}
function demo2(){
    console.log("demo 2 action");
}

function input1(){
    var ipxx = document.getElementById("ipx");
    var v  = ipxx.value;
    console.log("input 1.."+v);
}

function input2(){
    var ipxx = document.getElementById("ipx");
    var v = ipxx.value;
    var ctx = document.getElementById("ct");
    ctx.innerText = v;
}

function change1(){
    var slxx = document.getElementById("slx");
    var v = slxx.value;
    console.log(v);
}

var dg = 0;
function fan(){
    setInterval(
        function(){}
    )
}