// var sv = {
//     name: "Nguyen Van A",
//     age: 18,
//     tel: "0123456789",
//     address: "Ha Noi"
// }

var fullname =prompt("Input fullname: ");
var birth =prompt("Input bithday: ");
var email =prompt("Input email: ");
var address =prompt("Input adrress: ");

// var name = prompt("nhap ten");
var people = document.getElementById("fullname");
// people.innerText="Xin chao"+name;
people.innerHTML = "<i>Fullname: "+fullname+"</i>";
var people = document.getElementById("birthday");
people.innerHTML = "<i>Birth: "+birth+"</i>";
var people = document.getElementById("email");
people.innerHTML = "<i>Emal: "+email+"</i>";
var people = document.getElementById("address");
people.innerHTML = "<i>Addrees: "+address+"</i>";