var urlParams = new URLSearchParams(window.location.search);
var image = urlParams.get('image');
document.getElementById('image').style.backgroundImage = 'url(' + image + ')';

var brand = urlParams.get('brand');
document.getElementById('brand').textContent = brand;
var name = urlParams.get('description');
document.getElementById('title').textContent = name;
var price = urlParams.get('price');
document.getElementById('price').textContent = price;
