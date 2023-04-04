let moto = [
    {
        id: 1,
        nameCarl: "Suzuki Impulse 125 Fi",
        image: "https://muaxe.minhlongmoto.com/wp-content/uploads/2020/08/suzuki-impulse-trang-nau-bac.png",
        image2: "https://muaxe.minhlongmoto.com/wp-content/uploads/2020/08/phanh-Suzuki-Impulse-125.jpg",
        price: 31500000,
        made: "Từ Suzuki Việt Nam",
        cubicmeter: "50-125cc",
        type: "Xe tay ga",
        promotion: "Khuyến mãi",
        company: "SUZUKI"
    },
    {
        id: 2,
        nameCarl: "Suzuki Burgman 125 Street",
        image: "https://muaxe.minhlongmoto.com/wp-content/uploads/2021/02/burgman-125-trang.jpg",
        image2: "https://muaxe.minhlongmoto.com/wp-content/uploads/2021/02/burgman-125-den.jpg",
        price: 44500000,
        made: "Từ Suzuki Việt Nam",
        cubicmeter: "50-125cc",
        type: "Xe tay ga",
        promotion: "Khuyến mãi",
        company: "SUZUKI"
    },
    {
        id: 3,
        nameCarl: "Honda CB15OX",
        image: "https://muaxe.minhlongmoto.com/wp-content/uploads/2022/02/cb150x-xanh-reu.jpg",
        image2: "https://muaxe.minhlongmoto.com/wp-content/uploads/2022/02/cb150x-do-600x600.jpg",
        price: 73000000,
        made: "Từ Honda Việt Nam",
        cubicmeter: "150cc",
        type: "Xe Côn Tay",
        promotion: "Khuyến mãi",
        company: "Honda"
    },
    {
        id: 4,
        nameCarl: "Honda Vario 160",
        image: "https://muaxe.minhlongmoto.com/wp-content/uploads/2022/03/vario-160-cbs-den-tem-do.jpg",
        image2: "https://muaxe.minhlongmoto.com/wp-content/uploads/2022/03/vario-160-cbs-do-nham-600x600.jpg",
        price: 49500000,
        made: "Từ Honda Indonesia",
        cubicmeter: "155 - 160cc",
        type: "Xe tay ga",
        promotion: "Khuyến mãi",
        company: "Honda"
    },
    {
        id: 5,
        nameCarl: "Yamaha R15V4",
        image: "https://muaxe.minhlongmoto.com/wp-content/uploads/2022/03/r15v4-mau-den-600x600.jpg",
        image2: "https://muaxe.minhlongmoto.com/wp-content/uploads/2022/03/r15v4-mau-do-trang-600x600.jpg",
        price: 87000000,
        made: "Từ Yamaha Indonesia",
        cubicmeter: "155 - 160cc",
        type: "Xe côn tay",
        promotion: "Khuyến mãi",
        company: "YAMAHA"
    },
    {
        id: 6,
        nameCarl: "Legend 250 Twin",
        image: "https://muaxe.minhlongmoto.com/wp-content/uploads/2020/12/Legend-250-Twin-Den-Nham.jpg",
        image2: "https://muaxe.minhlongmoto.com/wp-content/uploads/2020/12/gpx-legend-250-twin.jpg",
        price: 73000000,
        made: "Từ GPX Thái Lan",
        cubicmeter: "200 - 350cc",
        type: "Xe côn tay, Xe PKL",
        promotion: "Khuyến mãi",
        company: "GPX"
    },
    {
        id: 7,
        nameCarl: "GPX Legend 150 Fi",
        image: "https://muaxe.minhlongmoto.com/wp-content/uploads/2021/04/gpx-legend-150-fi.jpg",
        image2: "https://muaxe.minhlongmoto.com/wp-content/uploads/2021/04/legend-150-fi-mau-den-bong.jpg",
        price: 59000000,
        made: "Từ GPX Thái Lan",
        cubicmeter: "150cc",
        type: "Xe côn tay",
        promotion: "Khuyến mãi",
        company: "GPX"
    },
    {
        id: 8,
        nameCarl: "GPX PoPz 110",
        image: "https://muaxe.minhlongmoto.com/wp-content/uploads/2022/04/popz-110-mau-do.jpg",
        image2: "https://muaxe.minhlongmoto.com/wp-content/uploads/2022/04/popz-110-mau-cam.jpg",
        price: 35500000,
        made: "Từ GPX Thái Lan",
        cubicmeter: "50 - 125cc",
        type: "Xe Số",
        promotion: "Khuyến mãi",
        company: "GPX"
    },
    {
        id: 9,
        nameCarl: "Honda SH350i",
        image: "https://muaxe.minhlongmoto.com/wp-content/uploads/2022/04/sh350-cao-cap-do.jpg",
        image2: "https://muaxe.minhlongmoto.com/wp-content/uploads/2022/04/sh350-dac-biet-den.jpg",
        price: 150000000,
        made: "Từ Honda Việt Nam",
        cubicmeter: "200 - 350cc",
        type: "Xe Tay Ga, Xe PKL",
        promotion: "Khuyến mãi",
        company: "Honda"
    },
    {
        id: 10,
        nameCarl: "Yamaha R3",
        image: "https://muaxe.minhlongmoto.com/wp-content/uploads/2021/04/yamaha-r3-mau-den.jpg",
        image2: "https://muaxe.minhlongmoto.com/wp-content/uploads/2021/04/yamaha-r3-mau-xanh.jpg",
        price: 99000000,
        made: "Từ Yamaha Indonesia",
        cubicmeter: "200 - 350cc",
        type: "Xe côn tay,Xe PKL",
        promotion: "Khuyến mãi",
        company: "YAMMAHA   "
    }


]
print(moto)



function print(moto) {
    document.getElementById("carl").innerHTML = "";
    for (let i = 0; i < moto.length; i++) {
        document.getElementById("carl").innerHTML +=
            `
            <div class="produc">
            <div  class="idd"><span>${moto[i].id}</span></div>   
                <span class="km">${moto[i].promotion}</span>
                <img class = "img1"  style="width: 200px; display: none;"
                    src="${moto[i].image}" alt=“”>
                    <img class = "img2" style="width: 200px;"
                    src="${moto[i].image2}" alt=“”>
                    <br>
                <div class="name">
                    <span >${moto[i].company}</span>
                </div>
            
                <span class="namee" >
                    <p> <a href="">${moto[i].nameCarl}</a></p>
                </span>
                <span  class="small">
                ${formatCurrency(moto[i].price)}
                </span>
                <p class = "demii">
                ${moto[i].made}
                </p>
                    <p class="demo">Phân Khối:
                    ${moto[i].cubicmeter}
                    </p>
                <p class="demi">
                    Loại xe:${moto[i].type}
                </p>
                <span class="delete"> <button onclick="Delete(${moto[i].id})">Delete</button> </span> 
                <span class="edit"> <button onclick="Edit(${moto[i].id})">Edit</button> </span>
            </div>`
    }
}


function formatCurrency(number) {
    if (isNaN(+number)) {
        return '0 ₫'
    }
    else {
        const price = (+number).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        return price
    }

}



function on1() {

    document.getElementsByClassName("timkiem1")[0].innerHTML = "";
    let a = document.getElementsByClassName("text")[0].value;
    for (let i = 0; i < moto.length; i++) {
        if (a.toLowerCase() == moto[i].company.toLowerCase()) {
            document.getElementsByClassName("timkiem1")[0].innerHTML +=
                ` <div class = "timkiem2">
             <img class="searchImg" src="${moto[i].image}" alt="">
               <p class = "searchName">${moto[i].nameCarl}</p> 
             <p class="searchCrice" >${formatCurrency(moto[i].price)}</p>   
    </div>
        `

        }

    }
}
function add() {
    let input = document.getElementsByClassName("Moreproducts")[0];
    if (input.style.display == "none") {
        input.style.display = "inline-block"
    }
    else {
        input.style.display = "none"
    }

}

function addform() {
    let addText = {
        id: document.forms["dulieu"]["id"].value,
        nameCarl: document.forms["dulieu"]["nameCarl"].value,
        image: document.forms["dulieu"]["image"].value,
        image2: document.forms["dulieu"]["image2"].value,
        price: document.forms["dulieu"]["price"].value,
        made: document.forms["dulieu"]["made"].value,
        cubicmeter: document.forms["dulieu"]["cubicmeter"].value,
        type: document.forms["dulieu"]["type"].value,
        promotion: document.forms["dulieu"]["promotion"].value,
        company: document.forms["dulieu"]["company"].value
    }

    moto.push(addText);
    print(moto);
    add();

}

function Delete(x) {
    for (let i = 0; i < moto.length; i++) {
        if (moto[i].id == x) {
            moto.splice(i, 1)
            print(moto)

        }
    }
}


function Edit(x) {
    for (let i = 0; i < moto.length; i++) {
        if (moto[i].id == x) {
            adds()
            document.forms["dulieu2"]["id"].value = moto[i].id
            document.forms["dulieu2"]["nameCarl"].value = moto[i].nameCarl;
            document.forms["dulieu2"]["image"].value = moto[i].image;
            document.forms["dulieu2"]["image2"].value = moto[i].image2;
            document.forms["dulieu2"]["price"].value = moto[i].price;
            document.forms["dulieu2"]["made"].value = moto[i].made;
            document.forms["dulieu2"]["cubicmeter"].value = moto[i].cubicmeter;
            document.forms["dulieu2"]["type"].value = moto[i].type;
            document.forms["dulieu2"]["promotion"].value = moto[i].promotion;
            document.forms["dulieu2"]["company"].value = moto[i].company;

        }
    }
}
function adds() {
    let input = document.getElementsByClassName("Edits")[0];
    if (input.style.display == "none") {
        input.style.display = "inline-block"
    }
    else {
        input.style.display = "none"
    }

}

function edit_1() {
    let editText = {
        id: document.forms["dulieu2"]["id"].value,
        nameCarl: document.forms["dulieu2"]["nameCarl"].value,
        image: document.forms["dulieu2"]["image"].value,
        image2: document.forms["dulieu2"]["image2"].value,
        price: document.forms["dulieu2"]["price"].value,
        made: document.forms["dulieu2"]["made"].value,
        cubicmeter: document.forms["dulieu2"]["cubicmeter"].value,
        type: document.forms["dulieu2"]["type"].value,
        promotion: document.forms["dulieu2"]["promotion"].value,
        company: document.forms["dulieu2"]["company"].value,
    }
    let index = moto.findIndex((c) => c.id == editText.id)
    if (index >= 0) {
        moto.splice(index, 1, editText)
    }
    else {

        moto.push(editText);
    }
    print(moto);
    adds();
}

function clos() {
    add();
}

function close() {
    adds();
}
