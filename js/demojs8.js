// string json - string dinh dang du lieu loai json
var data = `{
    "coord":{"lon":105.8412,"lat":21.0245},
    "weather":[
        {
            "id":500,
            "main":"Rain",
            "description":"light rain",
            "icon":"10n"
        }
    ],
    "base":"stations",
    "main":{
        "temp":29,
        "feels_like":36,
        "temp_min":29,
        "temp_max":29,
        "pressure":1005,
        "humidity":88,
        "sea_level":1005,
        "grnd_level":1003
    },
    "visibility":10000,
    "wind":{"speed":2.41,"deg":302,"gust":3.97},
    "rain":{"1h":0.65},
    "clouds":{"all":72},
    "dt":1692880646,
    "sys":{
        "type":1,
        "id":9308,
        "country":"VN",
        "sunrise":1692830288,
        "sunset":1692876040
    },
    "timezone":25200,
    "id":1581130,
    "name":"Hanoi",
    "cod":200
}`;

//chuyen no ve object (object json) trong js
data = JSON.parse(data);
//lay ra dung thong tin ben trong can dung
var tp = data.main.temp;
var t = document.getElementById("temp");
t.innerText = tp;

document.getElementById("humd").innerText = data.main.humidity;
document.getElementById("press").innerText = data.main.pressure;
document.getElementById("city").innerText = data.name+" ,"+data.sys.country;
document.getElementById("des").innerText = data.weather[0].description;
document.getElementById("imgx").src = "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";


//data2
var data2 = `{
    "id":1,
    "title":"iPhone 9",
    "description":"An apple mobile which is nothing like apple",
    "price":549,
    "discountPercentage":12.96,
    "rating":4.69,
    "stock":94,
    "brand":"Apple",
    "category":"smartphones",
    "thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images":[
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
}`

data2 = JSON.parse(data2);
document.getElementById("card-title").innerText = data2.title;
document.getElementById("price").innerText = data2.price;
document.getElementById("card-text").innerText = data2.description;
document.getElementById("img1").src = data2.thumbnail;

//dung mang lay anh
/* var mangimages = data2.images;
for(var i=0; i<mangimages.length; i++){
    document.getElementById("imglist").innerHTML += `<img src="${mangimages[i]}"/>`;
} */



//call API
var url = `https://api.openweathermap.org/data/2.5/weather?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
fetch(url)
.then(data3=>data3.json())
.then(
    data3=>{
        var tp = data3.main.temp;
        var t = document.getElementById("temp3");
        t.innerText = tp;
        document.getElementById("humd3").innerText = data3.main.humidity;
        document.getElementById("press3").innerText = data3.main.pressure;
        document.getElementById("city3").innerText = data3.name+" ,"+data3.sys.country;
        document.getElementById("des3").innerText = data3.weather[0].description;
        document.getElementById("imgx3").src = "https://openweathermap.org/img/wn/"+data3.weather[0].icon+"@2x.png";
    }
)

var url4 = `https://dummyjson.com/products/4`
fetch(url4)
.then(data4=>data4.json())
.then(
    data4=>{
        document.getElementById("card-title5").innerText = data4.title;
        document.getElementById("price5").innerText = data4.price;
        document.getElementById("card-text5").innerText = data4.description;
        document.getElementById("img5").src = data4.thumbnail;
    }
)


//lay danh sach san pham
var listproduct = `https://dummyjson.com/products`;
fetch(listproduct)
.then(dataproduct=>dataproduct.json())
.then(
    dataproduct=>{
        for(var i=0; i<dataproduct.length; i++){
            document.getElementById("lstproduct").innerHTML += `${dataproduct[i]}`;
        }
        document.getElementById("pro-img").src = dataproduct[i].thumbnail;
    }
)


