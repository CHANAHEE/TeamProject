  function readImage(event) {
    var reader = new FileReader();

        reader.onload = function(event) {
          var parent=document.getElementById("image_container");
          var preimg= document.getElementById("preview");
          var img = document.createElement("img");
          img.setAttribute("id","preview");
          img.setAttribute("class","previewbox");
          img.setAttribute("src", event.target.result);
          img.setAttribute("alt","preview");
          // img.setAttribute("style","width=300px; height=300px");
          parent.replaceChild(img,preimg);
        };

        reader.readAsDataURL(event.target.files[0]);
  }