// share.html의 js
// ------------------------------------------------------------
function toWrite(){
    var ask=confirm("리뷰를 쓰러갑니다.");
    if(ask){
        window.location.href="./share_write.html"
    }else{
        window.location.href="./share.html"
    }
}

// share_write.html의 js
// ------------------------------------------------------------
// 이미지 업로드 미리보기 js
function setThumbnail(input) {
if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
    document.getElementById('preview').src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
    } else {
        document.getElementById('preview').src = "";
    }
}

// 리뷰등록 submit 기능처리
