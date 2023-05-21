var name_s = sessionStorage.getItem('name');
var title_s = document.getElementById('title_shop')

if(name_s != null){
  title_s.innerHTML = "🪑 " + name_s + " 님을 위한 상품"
}else{
  title_s.innerHTML = "🪑 유저님을 위한 집들이"
}


var content = document.getElementsByClassName('content');
for (var i = 0; i < content.length; i++) {
  (function(index) {
    content[index].addEventListener('click', function() {
      var brand =  document.getElementsByClassName('brand')[index].textContent;

      var imageElement = document.getElementsByClassName('image')[index];
      var imageUrl = imageElement.style.backgroundImage;
      imageUrl = imageUrl.replace('url("', '').replace('")', '');

      var description = document.getElementsByClassName('name')[index].textContent;
      var price = document.getElementsByClassName('price')[index].textContent;

      var url = "http://tjdrjs0803.dothome.co.kr/TeamProject/shop_detail.html" +
        "?image=" + encodeURIComponent(imageUrl) +
        "&brand=" + encodeURIComponent(brand) +
        "&description=" + encodeURIComponent(description) +
        "&price=" + encodeURIComponent(price);
      location.href = url;

      openShopDetail_m(brand,imageUrl,description,price)
    });
  })(i);
}

var box = document.getElementsByClassName('box');
for (var i = 0; i < box.length; i++) {
  (function(index) {
    box[index].addEventListener('click', function() {
      location.href = "./prepare_page.html";
      openPrepare_m();
    });
  })(i);
}



function openShopDetail_m(brand,image,description,price){
  main.openShopDetail_m(brand,image,description,price);
}

function openPrepare_m(){
  main.openPrepare_m();
}