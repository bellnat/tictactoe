strike = true;
let createTable = function(){

    let table = document.getElementById("TABLE");
    let row1 = document.createElement("TR");
    let row2 = document.createElement("TR");
    let row3 = document.createElement("TR");
    let row4 = document.createElement("TR");
    let data1 = document.createElement("TD");
    let data2 = document.createElement("TD");
    let data3 = document.createElement("TD");
    let data4 = document.createElement("TD");
    let data5 = document.createElement("TD");
    let data6 = document.createElement("TD");
    let data7 = document.createElement("TD");
    let data8 = document.createElement("TD");
    let data9 = document.createElement("TD");

    data1.innerText = "SPACE";
    data2.innerText = "SPACE";
    data3.innerText = "SPACE";
    data4.innerText = "SPACE";
    data5.innerText = "SPACE";
    data6.innerText = "SPACE";
    data7.innerText = "SPACE";
    data8.innerText = "SPACE";
    data9.innerText = "SPACE";

    data1.onclick = function(){togglePicture(this)};
    data2.onclick = function(){togglePicture(this)};
    data3.onclick = function(){togglePicture(this)};
    data4.onclick = function(){togglePicture(this)};
    data5.onclick = function(){togglePicture(this)};
    data6.onclick = function(){togglePicture(this)};
    data7.onclick = function(){togglePicture(this)};
    data8.onclick = function(){togglePicture(this)};
    data9.onclick = function(){togglePicture(this)};

    row2.appendChild(data1);
    row2.appendChild(data2);
    row2.appendChild(data3);

    row3.appendChild(data4);
    row3.appendChild(data5);
    row3.appendChild(data6);
    row4.appendChild(data7);
    row4.appendChild(data8);
    row4.appendChild(data9);

    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);
    table.appendChild(row4);

    let content = document.getElementById("content");
    content.appendChild(table);
};

let togglePicture = function(){
    if(strike === true){
        innerText = "X";
        strike = false;
    }else if(strike === false){
        innerText = "O";
        strike = true;
    }
};