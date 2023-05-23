function loadDetail(){
    //Url로 전달된 값에서 no=값만 추출해서 fetch할 Url만들기
    var presentUrl=window.location.search;
    var novalue = presentUrl.substring(4,presentUrl.length);
    var phpUrl="./network/loadShareDetail.php?no="+novalue;

    //서버에서 db데이터 불러오기
    fetch(phpUrl)
    .then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
        console.log(data);

        var str=data.rimg;
        var imgUrl= str.substring(1,str.length);

        var main_img = document.getElementById('main_img');
        var title_share = document.getElementById('title_share');
        var name_share = document.getElementById('name_share');
        var date_share = document.getElementById('date_share');
        var text_share = document.getElementById('text_share');
        

        main_img.src = imgUrl;
        title_share.textContent = data.title;
        name_share.textContent = data.id;
        date_share.textContent = data.date;
        text_share.textContent = data.review;
        // //최외곽 id로 찾아오기
        // var conshell=document.getElementById('share_container');
        // // div imagebox 노드 생성
        // var ibox=document.createElement('div');
        // conshell.appendChild(ibox);
        // ibox.setAttribute('class','imagebox');

        // //div ibox 노드의 style 속성값 지정     
        // //서버에서 불러온 리뷰이미지 주소
        // var str=data.rimg;
        // //상대경로를 수정
        // var imgUrl= str.substring(1,str.length);
        // var str2="background-image: url("+imgUrl+")";
        // console.log(str2); //속성값 확인용 로그
        // ibox.setAttribute('style',str2);

        // //div profilebox 노드 생성
        // var pbox = document.createElement('div');
        // conshell.appendChild(pbox);
        // pbox.setAttribute('class', "profilebox");
        
        // //div class=profilebox의 자식노드 div id=user 생성
        // var user=document.createElement('div');
        // pbox.appendChild(user);
        // user.setAttribute('id',"user");

        // //div id=user 에 자식노드 3개 img 1개 p 2개 생성
        // var pfimg= document.createElement('img');
        // user.appendChild(pfimg);
        // //서버에서 불러온 리뷰이미지 주소
        // var str=data.pimg;
        // pfimg.setAttribute('src',str);
        // //상대경로를 수정 (저장시 ../인데 불러올땐 ./이어야 함)
        // // var imgUrl= str.substring(1,str.length);
        // // pfimg.setAttribute('src',imgUrl);
        // // pfimg.setAttribute('alt',"profile image");
        // var nickname=document.createElement('p');
        // var date=document.createElement('p');
        // user.appendChild(nickname);
        // user.appendChild(date);
        // nickname.setAttribute('id','name');
        // date.setAttribute('id','date');
        // //name와 date에 db의 값 id, date 추가
        // nickname.innerHTML=data.id;
        // date.innerHTML=data.date;
        // //div class=profilebox에 div id=cont 노드 추가
        // var cont=document.createElement('div');
        // pbox.appendChild(cont);
        // cont.setAttribute('id','cont');
        // var title=document.createElement('p');
        // var text=document.createElement('p');
        // cont.appendChild(title);
        // cont.appendChild(text);
        // //서버에서 불러온 title과 review값 추가
        // title.innerHTML=data.title;
        // text.innerHTML=data.review;
    })

}