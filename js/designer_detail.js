(function () {
//    动态生成列表
    var idData=document.querySelector('#idData');
    for (var i=0;i<8;i++){
        idData.innerHTML+=`<tr><td><div class="row case module-cont">
                    <div class="card-bx col-md-4 col-sm-4 col-xs-6">
                        <a href="#">
                            <div class="img-ct">
                                <img src="../image/company_img01.jpg"/></div>
                            <div class="card-info">
                                <p class="card-name ect">蔡先生</p>
                                <p class="card-detail">333m² / 公寓 / 其他 / 全包</p>
                                <p class="card-cost ect">
                                    <span>
                                        11
                                    </span>
                                    万
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="card-bx col-md-4 col-sm-4 col-xs-6 second_img">
                        <a href="#">
                            <div class="img-ct">
                                <img src="../image/company_img01.jpg"/></div>
                            <div class="card-info">
                                <p class="card-name ect">蔡先生</p>
                                <p class="card-detail">333m² / 公寓 / 其他 / 全包</p>
                                <p class="card-cost ect">
                                    <span>
                                        11
                                    </span>
                                    万
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="card-bx col-md-4 col-sm-4 col-xs-6 ">
                        <a href="#">
                            <div class="img-ct">
                                <img src="../image/company_img01.jpg"/></div>
                            <div class="card-info">
                                <p class="card-name ect">蔡先生</p>
                                <p class="card-detail">333m² / 公寓 / 其他 / 全包</p>
                                <p class="card-cost ect">
                                    <span>
                                        11
                                    </span>
                                    万
                                </p>
                            </div>
                        </a>
                    </div>

                </div></td></tr>`
    }

})();

//    分页开始

function goPage(pno) {
    var itable = document.getElementById("idData");
    var num = itable.rows.length;//表格所有行数(所有记录数)
    console.log(num);
    var totalPage = 0;//总页数
    var pageSize = 5;//每页显示行数
    //总共分几页
    if (num / pageSize > parseInt(num / pageSize)) {
        totalPage = parseInt(num / pageSize) + 1;
    } else {
        totalPage = parseInt(num / pageSize);
    }
    var currentPage = pno;//当前页数
    var startRow = (currentPage - 1) * pageSize + 1;//开始显示的行  31
    var endRow = currentPage * pageSize;//结束显示的行   40
    endRow = (endRow > num) ? num : endRow;    //40
    console.log(endRow);
    //遍历显示数据实现分页
    for (var i = 1; i < (num + 1); i++) {
        var irow = itable.rows[i - 1];
        if (i >= startRow && i <= endRow) {
            irow.style.display = "table-row";
        } else {
            irow.style.display = "none";
        }
    }
    var pageEnd = document.getElementById("pageEnd");
    var tempStr = "";



    if (currentPage > 1) {
        tempStr += "<span class='btn btn-default' href=\"#\" onClick=\"goPage(" + (1) + ")\">首页</span>";
        tempStr += "<span class='btn btn-default page_1' href=\"#\" onClick=\"goPage(" + (currentPage - 1) + ")\">上一页</span>"
    } else {
        tempStr += "<span class='btn btn-default'>首页</span>";
        tempStr += "<span class='btn btn-default page_1'>上一页</span>";
    }

    for (var pageIndex = 1; pageIndex < totalPage + 1; pageIndex++) {
        tempStr += "<a onclick=\"goPage(" + pageIndex + ")\"><span class='btn btn-default'>" + pageIndex + "</span></a>";
    }

    if (currentPage < totalPage) {
        tempStr += "<span class='btn btn-default page_1' href=\"#\" onClick=\"goPage(" + (currentPage + 1) + ")\">下一页</span>";
        tempStr += "<span class='btn btn-default' href=\"#\" onClick=\"goPage(" + (totalPage) + ")\">尾页</span>";
    } else {
        tempStr += "<span class='btn btn-default page_1'>下一页</span>";
        tempStr += "<span class='btn btn-default'>尾页</span>";
    }
    document.querySelector("#barcon").innerHTML = tempStr;
}
goPage(1)


//    分页结束