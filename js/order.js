

var order_list = document.getElementsByClassName('order_list');
for (var i = 0; i < order_list.length; i++) {
  (function(index) {
    order_list[index].addEventListener('click', function() {
      location.href = "./prepare_page.html";
    });
  })(i);
}
