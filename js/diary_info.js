/**
 *Created by Lenovo-HXL on 2019/1/21.
 */
(function () {
    // 收藏
    var pg_click=document.querySelector('#pg-block-click');
    var span=pg_click.children[0];
    var txt=pg_click.lastChild;

    pg_click.onclick=function () {
        // alert(span.classList);
        span.classList.toggle('collect-icon');
        if (txt.nodeValue=='已收藏') {
            txt.nodeValue='收藏';
        }else {
            txt.nodeValue='已收藏';
        }
    };


    // 目录固定
    var catalog=document.querySelector(".write_diary"),
        H = 0,
        Y = catalog;
    while (Y) {
        H += Y.offsetTop;
        Y = Y.offsetParent;
    }
    window.onscroll = function()
    {
        var s = document.body.scrollTop || document.documentElement.scrollTop;
        if(s>H) {
            catalog.style = "position:fixed;top:80px;left:76.8%;right:auto; width:15.1%;"
        } else {
            catalog.style = ""
        }
    }


    // 评论
    var comment=document.querySelector("#comment");
    var comment_txt=document.querySelector("#comment_txt");
    var comment_content=document.querySelector(".comment_content");
    var second_floor=document.querySelectorAll(".second_floor");
    comment.onclick=function () {
        if (comment_txt.value) {
            comment_content.innerHTML += createFirstFloor();
            comment_txt.value="";
        } else {
            alert("评论内容不能为空")
        }
    };
    // 展开评论和回复评论

    comment_content.onclick=function (event) {
        var node=event.target;
        if (node.className==="comment_reply"){
            node.parentElement.parentElement.nextElementSibling.classList.toggle("hidden");
            for (var sf of second_floor){
                if (sf.style.display==="none"){
                    sf.style.display="flex";
                }
            }
        }else if(node.className==="reply_btn"){
            if (node.previousElementSibling.value){
                var comment_num=node.parentElement.parentElement.parentElement.children[2].children[1].children[0];

                if (comment_num.innerText) {
                    comment_num.innerText=parseInt(comment_num.innerText.substring(0,1))+1 +"条评论";
                }else{
                    comment_num.innerText="1条评论";
                }
                node.parentElement.parentElement.classList.toggle("hidden");
                node.parentElement.parentElement.parentElement.innerHTML += createSecondFloor(node);
            }else {
                alert("回复内容不能为空")
            }
        }else if(node.className==="reply_btn02"){
            var comment_num=node.parentElement.parentElement.parentElement.children[2].children[1].children[0];

            if (node.previousElementSibling.value){
                if (comment_num.innerText) {
                    comment_num.innerText=parseInt(comment_num.innerText.substring(0,1))+1 +"条评论";
                }else{
                    comment_num.innerText="1条评论";
                }
                node.parentElement.parentElement.classList.toggle("hidden");
                node.parentElement.parentElement.parentElement.parentElement.parentElement.innerHTML +=createSecondFloor(node);
            }else {
                alert("回复内容不能为空")
            }
        }
        else if(node.className==="comment_num"){
            for (var sf of second_floor){
                if (sf.style.display==="none"){
                    sf.style.display="flex";
                }else {
                    sf.style.display="none";
                }
            }
        }
    };


    //生成一层
    function createFirstFloor(){
        var a=`<div class="first_floor">
                <div class="user_icon">
                    <img src="../image/user_icon01.jpg" alt="">
                </div>
                <div class="comment_main">
                    <div class="nickname">
                        <span>小猪佩奇</span>
                    </div>
                    <div class="comment_txt">
                        <p>${comment_txt.value}</p>
                    </div>
                    <div class="comment_footer">
                        <div class="comment_time">
                            <span>${getNowFormatDate()}</span>
                        </div>
                        <div class="comment_num_reply">
                            <a href="###" class="comment_num"></a>
                            <a href="###" class="comment_reply">回复</a>
                        </div>
                    </div>
                    <div class="reply_box hidden">
                        <form action="#">
                            <textarea rows=3 cols=27 id="reply_txt" name="comment_text" placeholder="你怎么看~~~"></textarea>
                            <button type="button" class="reply_btn">回复</button>
                        </form>
                    </div>
                </div>
            </div>`
        return a;
    }

    // 生成二楼
    function createSecondFloor(node) {
        var reply_man=node.parentElement.parentElement.parentElement.children[0].children[0].innerText;
        var a=`<div class="second_floor" style="display: flex;">
                        <div class="user_icon">
                            <img src="../image/user_icon01.jpg" alt="">
                        </div>
                        <div class="comment_main">
                            <div class="nickname">
                                <span class="reply_man">乔治</span>
                                <span>回复</span>
                                <span class="promulgator">${reply_man}</span>
                            </div>
                            <div class="comment_txt">
                                <p>${node.previousElementSibling.value}</p>
                            </div>
                            <div class="comment_footer">
                                <div class="comment_time">
                                    <span>${getNowFormatDate()}</span>
                                </div>
                                <div class="comment_num_reply">
                                    <a href="###" class="comment_num"></a>
                                    <a href="###" class="comment_reply">回复</a>
                                </div>
                            </div>
                            <div class="reply_box hidden">
                                <form action="#">
                                    <textarea rows=3 cols=27 class="reply_txt" name="comment_text" placeholder="请发表你的看法~~~"></textarea>
                                    <button type="button" class="reply_btn02">回复</button>
                                </form>
                            </div>
                        </div>
                    </div>`;
        return a;
    }


    // 获取当前时间
    function getNowFormatDate() {
        var date = new Date();
        var seperator1 = "/";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    }
    
    
    var diary_items=document.querySelector(".diary_items");
    for (var i=0;i<8;i++){
        diary_items.innerHTML += `<div class="diary_item">
                                <div class="stage_title">前期<br>准备</div>
                                <div class="stage_content">
                                    <div class="public_time">
                                        <span>${getNowFormatDate()}</span>
                                    </div>
                                    <div class="content">
                                        <p>山区小镇，没有一家照相馆的时候，我的小学毕业照是县上的照相师傅到我们完小拍摄的山区小镇，没有一家照相馆的时候，我的小学毕业照是县上的照相师傅到我们完小拍摄的山区小镇，没有一家照相馆的时候，我的小学毕业照是县上的照相师傅到我们完小拍摄的山区小镇，没有一家照相馆的时候，我的小学毕业照是县上的照相师傅到我们完小拍摄的山区小镇，没有一家照相馆的时候，我的小学毕业照是县上的照相师傅到我们完小拍摄的山区小镇，没有一家照相馆的时候，我的小学毕业照是县上的照相师傅到我们完小拍摄的。</p>
                                    </div>
                                    <div class="diary_image">
                                        <img src="../image/diary_01.jpg" alt="">
                                        <img src="../image/diary_02.jpg" alt="">
                                        <img src="../image/diary_03.jpg" alt="">
                                        <img src="../image/diary_04.jpg" alt="">
                                    </div>
                                </div>
                            </div>`

    }


})();