
var name_s = sessionStorage.getItem('name');
var title_s = document.getElementById('title_shop')

if(name_s != "null"){
  title_s.innerHTML = "🪑 " + name_s + " 님을 위한 상품"
}
