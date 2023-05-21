var urlParams = new URLSearchParams(window.location.search);
var image = urlParams.get('image');
document.getElementById('image').style.backgroundImage = 'url(' + image + ')';

var brand = urlParams.get('brand');
document.getElementById('brand').textContent = brand;
var name = urlParams.get('description');
document.getElementById('title').textContent = name;
var price = urlParams.get('price');
document.getElementById('price').textContent = price;



function setInfoInMobile(jsonData){
    const data = JSON.parse(jsonData);

    
    // 데이터 처리
    const brand = data.brand;
    const image = data.image;
    const description = data.description;
    const price = data.price;

    document.getElementById('image').style.backgroundImage = 'url(' + image + ')';
    document.getElementById('brand').textContent = brand;
    document.getElementById('title').textContent = description;
    document.getElementById('price').textContent = price;
}