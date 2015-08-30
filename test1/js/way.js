(function loadXMLDoc(url){//返回店铺信息
    var xmlhttp;
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            text = JSON.parse(xmlhttp.responseText);
            // console.log(text)
            data0();
            data1();
            data2();
            data3();
            data4();
            data5();
        }
    }
    xmlhttp.open("POST","http://kaohe.zeroling.com/kaohe/list",true);
    xmlhttp.send();
})();
function data0(){//第一个数据
    var title = document.getElementById('title');//店名
    var imgurl = document.getElementById('imgurl');//店店图片
    var good = document.getElementById('good')//赞
    var num = document.getElementById('num');//人数
    var star = document.getElementById('star');//星级
    var money = document.getElementById('money');//人均消费
    var big_num = document.getElementById('big_num');//折扣
    var where = document.getElementById('where');//距离
    var qiang = document.getElementById('qiang');
    var xue = document.getElementById('xue');
    var pin = document.getElementById('pin');
    imgurl.src = text.data[0].imgUrl;
    title.innerHTML = text.data[0].title;
    for (var i = 0; i < 10;) {
        if (text.data[0].stars == i) {
            star.src = "img/star" + i + ".png"
        }
        i = i + 0.5;
    }
    if (text.data[0].good > 0) {
        good.src = "img/good.png";
        num.innerHTML = text.data[0].people + "位朋友";
    }
    else{
        good.style.display = "none";
        num.innerHTML = text.data[0].people + "人已分享";
    }
    money.innerHTML = "人均" + text.data[0].average + "元";
    where.innerHTML = text.data[0].distance;
    big_num.innerHTML = text.data[0].discount;

    if (text.data[0].flag == "qiang|pingpai") {
        xue.style.display = "none";
    }
    if (text.data[0].flag == "xue") {
        qiang.style.display = "none";
        pin.style.display = "none";
    }
}
function data1(){//第二个数据
    var title = document.getElementById('title1');//店名
    var imgurl = document.getElementById('imgurl1');//店店图片
    var good = document.getElementById('good1')//赞
    var num = document.getElementById('num1');//人数
    var star = document.getElementById('star1');//星级
    var money = document.getElementById('money1');//人均消费
    var big_num = document.getElementById('big_num1');//折扣
    var where = document.getElementById('where1');//距离
    var qiang = document.getElementById('qiang1');
    var xue = document.getElementById('xue1');
    var pin = document.getElementById('pin1');
    imgurl.src = text.data[1].imgUrl;
    title.innerHTML = text.data[1].title;
    for (var i = 0; i < 10;) {
        if (text.data[1].stars == i) {
            star1.src = "img/star" + i + ".png";
        }
        i = i + 0.5;
    }
    if (text.data[1].good > 0) {
        good.src = "img/good.png";
        num.innerHTML = text.data[1].people + "位朋友";
    }
    else{
        good.style.display = "none";
        num.innerHTML = text.data[1].people + "人已分享";
    }
    money.innerHTML = "人均" + text.data[1].average + "元";
    where.innerHTML = text.data[1].distance;
    big_num.innerHTML = text.data[1].discount;

    if (text.data[1].flag == "qiang|pingpai") {
        xue.style.display = "none";
    }
    if (text.data[1].flag == "xue") {
        qiang.style.display = "none";
        pin.style.display = "none";
    }
}
function data2(){//第三个数据
    var title = document.getElementById('title2');//店名
    var imgurl = document.getElementById('imgurl2');//店店图片
    var good = document.getElementById('good2')//赞
    var num = document.getElementById('num2');//人数
    var star = document.getElementById('star2');//星级
    var money = document.getElementById('money2');//人均消费
    var big_num = document.getElementById('big_num2');//折扣
    var where = document.getElementById('where2');//距离
    var qiang = document.getElementById('qiang2');
    var xue = document.getElementById('xue2');
    var pin = document.getElementById('pin2');
    imgurl.src = text.data[2].imgUrl;
    title.innerHTML = text.data[2].title;
    for (var i = 0; i < 10;) {
        if (text.data[2].stars == i) {
            star2.src = "img/star" + i + ".png";
        }
        i = i + 0.5;
    }
    if (text.data[2].good > 0) {
        good.src = "../img/good.png";
        num.innerHTML = text.data[2].people + "位朋友";
    }
    else{
        good.style.display = "none";
        num.innerHTML = text.data[2].people + "人已分享";
    }
    money.innerHTML = "人均" + text.data[2].average + "元";
    where.innerHTML = text.data[2].distance;
    big_num.innerHTML = text.data[2].discount;

    if (text.data[2].flag == "qiang|pingpai") {
        xue.style.display = "none";
    }
    if (text.data[2].flag == "xue") {
        qiang.style.display = "none";
        pin.style.display = "none";
    }
}
function data3(){//第一个数据
    var title = document.getElementById('title3');//店名
    var imgurl = document.getElementById('imgurl3');//店店图片
    var good = document.getElementById('good3')//赞
    var num = document.getElementById('num3');//人数
    var star = document.getElementById('star3');//星级
    var money = document.getElementById('money3');//人均消费
    var big_num = document.getElementById('big_num3');//折扣
    var where = document.getElementById('where3');//距离
    var qiang = document.getElementById('qiang3');
    var xue = document.getElementById('xue3');
    var pin = document.getElementById('pin3');
    imgurl.src = text.data[0].imgUrl;
    title.innerHTML = text.data[0].title;
    for (var i = 0; i < 10;) {
        if (text.data[0].stars == i) {
            star3.src = "img/star" + i + ".png"
        }
        i = i + 0.5;
    }
    if (text.data[0].good > 0) {
        good.src = "img/good.png";
        num.innerHTML = text.data[0].people + "位朋友";
    }
    else{
        good.style.display = "none";
        num.innerHTML = text.data[0].people + "人已分享";
    }
    money.innerHTML = "人均" + text.data[0].average + "元";
    where.innerHTML = text.data[0].distance;
    big_num.innerHTML = text.data[0].discount;

    if (text.data[0].flag == "qiang|pingpai") {
        xue.style.display = "none";
    }
    if (text.data[0].flag == "xue") {
        qiang.style.display = "none";
        pin.style.display = "none";
    }
}
function data4(){//第二个数据
    var title = document.getElementById('title4');//店名
    var imgurl = document.getElementById('imgurl4');//店店图片
    var good = document.getElementById('good4')//赞
    var num = document.getElementById('num4');//人数
    var star = document.getElementById('star4');//星级
    var money = document.getElementById('money4');//人均消费
    var big_num = document.getElementById('big_num4');//折扣
    var where = document.getElementById('where4');//距离
    var qiang = document.getElementById('qiang4');
    var xue = document.getElementById('xue4');
    var pin = document.getElementById('pin4');
    imgurl.src = text.data[1].imgUrl;
    title.innerHTML = text.data[1].title;
    for (var i = 0; i < 10;) {
        if (text.data[1].stars == i) {
            star4.src = "img/star" + i + ".png";
        }
        i = i + 0.5;
    }
    if (text.data[1].good > 0) {
        good.src = "img/good.png";
        num.innerHTML = text.data[1].people + "位朋友";
    }
    else{
        good.style.display = "none";
        num.innerHTML = text.data[1].people + "人已分享";
    }
    money.innerHTML = "人均" + text.data[1].average + "元";
    where.innerHTML = text.data[1].distance;
    big_num.innerHTML = text.data[1].discount;

    if (text.data[1].flag == "qiang|pingpai") {
        xue.style.display = "none";
    }
    if (text.data[1].flag == "xue") {
        qiang.style.display = "none";
        pin.style.display = "none";
    }
}
function data5(){//第三个数据
    var title = document.getElementById('title5');//店名
    var imgurl = document.getElementById('imgurl5');//店店图片
    var good = document.getElementById('good5')//赞
    var num = document.getElementById('num5');//人数
    var star = document.getElementById('star5');//星级
    var money = document.getElementById('money5');//人均消费
    var big_num = document.getElementById('big_num5');//折扣
    var where = document.getElementById('where5');//距离
    var qiang = document.getElementById('qiang5');
    var xue = document.getElementById('xue5');
    var pin = document.getElementById('pin5');
    imgurl.src = text.data[2].imgUrl;
    title.innerHTML = text.data[2].title;
    for (var i = 0; i < 10;) {
        if (text.data[2].stars == i) {
            star5.src = "img/star" + i + ".png";
        }
        i = i + 0.5;
    }
    if (text.data[2].good > 0) {
        good.src = "../img/good.png";
        num.innerHTML = text.data[2].people + "位朋友";
    }
    else{
        good.style.display = "none";
        num.innerHTML = text.data[2].people + "人已分享";
    }
    money.innerHTML = "人均" + text.data[2].average + "元";
    where.innerHTML = text.data[2].distance;
    big_num.innerHTML = text.data[2].discount;

    if (text.data[2].flag == "qiang|pingpai") {
        xue.style.display = "none";
    }
    if (text.data[2].flag == "xue") {
        qiang.style.display = "none";
        pin.style.display = "none";
    }
}

function getScrollTop () {//滚动条位置
    var scrollTop = document.body.scrollTop; 
    console.log(scrollTop)
    return scrollTop; 
} 
function getClientHeight () {//当前可视范围高度
    var clientHeight = document.documentElement.clientHeight;
    console.log(clientHeight)
    return clientHeight;
}
function getScrollHeight () { //页面总高度
    var scrollHeight = document.documentElement.scrollHeight;
    console.log(scrollHeight)
    return scrollHeight;
} 
window.onscroll = function () { 
    if (getScrollTop() + getClientHeight() == getScrollHeight()) { 
        console.log("到达底部"); 
        var newnode = document.createElement("div"); 
        newnode.setAttribute("class","wait")
        newnode.innerHTML = "我已经跪了"; 
        document.body.appendChild(newnode); 
        var newline = document.createElement("br"); 
        document.body.appendChild(newline); 
    } 
} 
