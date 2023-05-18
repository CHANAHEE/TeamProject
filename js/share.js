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
function loadItems(){
    fetch('./network/loadShare.php')
    .then(function(response){
        return response.json();
    }).then(function(review){
        console.log(review[0].rimg);
        // var a="";    
        for(var i=0;i<review.length;i++){

            //container(최외곽) div 불러오기
            var conshell=document.getElementById('shell');
            //div box 노드 생성
            var box = document.createElement('div');
            conshell.appendChild(box);
            box.setAttribute('class',"box");
            //div box노드의 자식 a card 노드 생성
            var card = document.createElement('a');
            box.appendChild(card);
            //a card 노드의 href속성값 설정
            card.setAttribute('href',"#");
            //a card 노드의 class 속성값 설정
            card.setAttribute('class',"card");

            //a card 노드의 자식 div image 노드 생성
            var image= document.createElement('div');
            card.appendChild(image);
            //div image 노드의 class 속성값 지정
            // var cls=document.createAttribute('class');
            // cls.value="image"
            image.setAttribute('class',"image");

            //div image 노드의 style 속성값 지정     
            //서버에서 불러온 리뷰이미지 주소
            var str=review[i].rimg;
            //상대경로를 수정
            var imgUrl= str.substring(1,str.length);
            var str2="background-image: url("+imgUrl+")";
            console.log(str2); //속성값 확인용 로그
            image.setAttribute('style',str2);

            //a card 노드의 자식 article 노드 생성
            var art=document.createElement('article');
            card.appendChild(art);
            //article 노드의 자식 h1 노드 생성
            var hh=document.createElement('h1');
            art.appendChild(hh);
            hh.innerHTML=review[i].id;
            //article 노드의 자식 p 노드 생성
            var pp=document.createElement('p');
            art.appendChild(pp);
            pp.innerHTML=review[i].title;   
        };
    });
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
