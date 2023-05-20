  function logout(){
    sessionStorage.removeItem("name");
    location.href='index.html'
  }

  var name = sessionStorage.getItem("name");
  var imgPath = sessionStorage.getItem("imgPath");
  function checkUserInfo(){
    if(name != 'null'){
      var loginbox = document.getElementById("button_index");
      loginbox.style.display = "none";

      var userInfo = document.getElementById("userInfo_index");
      userInfo.style.display = "flex";

      var nickname = document.getElementById("nickname_index");
      nickname.innerHTML = name;

      var profileImage = document.getElementById("img_profile");
      profileImage.src = imgPath;
    }else{
      var userInfo = document.getElementById("userInfo_index");
      userInfo.style.display = "none";
    }
  }


  function openHome(){
    var target = document.getElementById('target');
    fetch ('./home.html').then((response) => response.text())
                .then((data) => {
                  closeSideBar();
                  target.innerHTML = data
                  var scriptElement = document.createElement('script');
                  scriptElement.src = './js/contents_block_v.js';
                  document.body.appendChild(scriptElement);

                  checkUserInfo();
                });
  }          

  function openShare(){
    var target = document.getElementById('target');
    fetch ('./share.html').then((response) => response.text())
                .then((data) => {
                  closeSideBar();
                  target.innerHTML = data
                  var scriptElement = document.createElement('script');
                  scriptElement.type = 'text/javascript'
                  scriptElement.src = './js/open_share.js';
                  target.appendChild(scriptElement);
                });
  }

  function openShop(){
    var target = document.getElementById('target');
    fetch ('./shop.html').then((response) => response.text())
                .then((data) => {
                    closeSideBar();
                    target.innerHTML = data;
                    var scriptElement = document.createElement('script');
                    scriptElement.src = './js/shop.js';
                    document.body.appendChild(scriptElement);
                });
  }

  function openOrder(){
    var target = document.getElementById('target');
    fetch ('./order.html').then((response) => response.text())
                .then((data) => {
                  closeSideBar();
                  target.innerHTML = data    
                  var scriptElement = document.createElement('script');
                  scriptElement.src = './js/order.js';
                  document.body.appendChild(scriptElement);                  
                });
  }
  
  function openWrite(){
    var isSignIn = sessionStorage.getItem("name");
    if(isSignIn == null){
      location.href = "./login.html";
    }else{
      var target = document.getElementById('target');
      fetch ('./share_write.html').then((response) => response.text())
                  .then((data) => {
                    target.innerHTML = data
                  });
    }
  }


  var menuicon = document.getElementById('menuicon');
  menuicon.onclick = function(){openSideBar()};

  var close = document.getElementById('close')
  close.onclick = function(){closeSideBar()};

  function openSideBar(){
    document.getElementById('sidebar').style.left = "0px";
    document.getElementById('super').style.backgroundColor = "#888888";
    document.getElementById('section').style.opacity = 0.4;
    document.getElementById('title_container').style.opacity = 0.4;
    document.getElementById('title_container').style.backgroundColor = "#888888";
    document.getElementById('logo_container').style.backgroundColor = "#888888";
    document.getElementById('edit_button').style.backgroundColor = "#999999";
    document.getElementById('edit_button').style.color = "#777777 "
    document.getElementById('menuicon_label').style.visibility = "hidden"
  }

  function closeSideBar(){
    document.getElementById('sidebar').style.left = "-100%";
    document.getElementById('super').style.backgroundColor = "transparent";
    document.getElementById('section').style.opacity = 1;
    document.getElementById('title_container').style.opacity = 1;
    document.getElementById('title_container').style.backgroundColor = "transparent";
    document.getElementById('logo_container').style.backgroundColor = "transparent";
    document.getElementById('edit_button').style.backgroundColor = "#17BCE0";
    document.getElementById('edit_button').style.color = "white"
    document.getElementById('menuicon_label').style.visibility = "visible"
    document.getElementById('menuicon_label').checked = false
  }