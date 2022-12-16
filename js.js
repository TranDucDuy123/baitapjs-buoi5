/*
ex1
input: lấy dữ liệu từ người nhập điểm 3 môn, điểm chuẫn, khu vực ưu tiên , đối tượng ưu tiên

algorithm:  tạo 3 biến diem1 diem2 diem3 dom tới input-1 input-2 input-3
            khuvuc và doituong là 2 biến lấy ra option từ 2 thẻ select combo-1 và combo-2
            - khuvuc là điểm ưu tiên theo 3 khu vực A:2 B:1 C:0,5
            - doituong là điểm theo 3 đối tượng ưu tiên 1:2.5 2:1.5 3:1
            diemtong = diem1 + diem2 + diem3 + khuvuc + doituong
            diemchuan dom tới input #diemchuan

output:
    so sánh diemtong và diemchuan 
    nếu : diemtong>=diemchuan thì in ra màn hình đậu
            diemtong<diemchuan thì in ra rớt
*/



function choose1() {
    choose("tab-1");
    unchoose("tab-2");
    unchoose("tab-3");
    unchoose("tab-4");
    document.getElementById(`layout-1`).style.display = "flex";
    document.getElementById(`layout-2`).style.display = "none";
}

function choose2() {
    choose("tab-2");
    unchoose("tab-1");
    unchoose("tab-3");
    unchoose("tab-4");
    document.getElementById(`layout-1`).style.display = "none";
    document.getElementById(`layout-2`).style.display = "flex";
}

function choose3() {
    choose("tab-3");
    unchoose("tab-1");
    unchoose("tab-2");
    unchoose("tab-4");
}

function choose4() {
    choose("tab-4");
    unchoose("tab-1");
    unchoose("tab-2");
    unchoose("tab-3");
}

var choose = function (tab) {
    var selectEL = document.getElementById(tab);
    selectEL.style.background = "lightcoral";
    selectEL.style.color = "aliceblue";
    selectEL.style.border = " #FF0099 solid 3px";
    selectEL.style.borderRight = " none";
};

var unchoose = function (tab) {
    var selectEL = document.getElementById(tab);
    selectEL.style.backgroundColor = "aliceblue";
    selectEL.style.color = "lightsalmon";
    selectEL.style.border = " #ecb1d5 solid  3px";
    selectEL.style.borderRight = " #FF0099 solid 3px";
};

function check() {
    const diem1 = document.getElementById("input-1").value * 1;
    const diem2 = document.getElementById("input-2").value * 1;
    const diem3 = document.getElementById("input-3").value * 1;
    const diemchuanEL = document.getElementById("diemchuan").Value * 1;
    const u = document.getElementById('combo-1');
    const v = document.getElementById('combo-2');
    let khuvuc = u.options[u.selectedIndex].value * 1;
    let doituong = v.options[v.selectedIndex].value * 1;
    const diemchuan = document.getElementById('diemchuan').value * 1;
    var diemtong = diem1 + diem2 + diem3 + doituong + khuvuc;

    if (diemtong >= diemchuan) {
        document.getElementById(`output-1`).innerHTML = "đậu";
    } else
        document.getElementById(`output-1`).innerHTML = "rớt";
}





/*
ex2:


*/
var gia1 = 500;
var gia2 = 650;
var gia3 = 850;
var gia4 = 1100;
var gia5 = 13000;

function tinhTien() {
    const hotenEL = document.getElementById('text-ten').value;
    const kwEL = document.getElementById('kw').value * 1;
    var tongtien;
    if (kwEL < 50) {
        tongtien = kwEL * gia1;
    } else if (kwEL > 50 && kwEL < 100) {
        tongtien = kwEL * gia2;
    } else if (kwEL > 100 && kwEL < 200) {
        tongtien = kwEL * gia3;
    } else if (kwEL > 200 && kwEL > 350) {
        tongtien = kwEL * 1100
    } else {
        tongtien = kwEL * 1300;
    }
    document.getElementById(`output-ten`).innerHTML = "Họ tên:" + hotenEL;
    document.getElementById(`output-tien`).innerHTML = "Tổng tiền điện" + tongtien + "đ";
}