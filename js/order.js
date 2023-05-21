

var order_list = document.getElementsByClassName('order_list');
for (var i = 0; i < order_list.length; i++) {
  (function(index) {
    order_list[index].addEventListener('click', function() {
      alert("준비중인 페이지입니다.")
    });
  })(i);
}

