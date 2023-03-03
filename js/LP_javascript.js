//-------------------------------------whole page-------------------------------------
$("*").each(function () {
    var $this = $(this);
    if (parseInt($this.css("fontSize")) < 14) {
        $this.css({ "font-size": "14px" });
    } else if (parseInt($this.css("fontSize")) > 45) {
        $this.css({ "font-size": "45px" });
    }
});

//-------------------------------------ourwork-------------------------------------
//當點擊 input 前一個id被點選 // previous id prop('checked',true)
$("#ourWorkSliderPre").on("click", function (e) {
    var currentImg = $('input[type = "radio"]:checked').prop("value");
    var i = parseInt(currentImg.split("s")[1]);
    $('input[type = "radio"]')
        .filter(`#s${i - 1}`)
        .prop("checked", true);
    switch (i) {
        case 1:
            $('input[type = "radio"]')
                .filter(`#s${i + 4}`)
                .prop("checked", true);
            break;
        case 2:
        case 3:
        case 4:
        case 5:
            $('input[type = "radio"]')
                .filter(`#s${i - 1}`)
                .prop("checked", true);
            break;

        default:
            break;
    }
});

$("#ourWorkSliderNxt").on("click", function (e) {
    var currentImg = $('input[type = "radio"]:checked').prop("value");
    var i = parseInt(currentImg.split("s")[1]);
    console.log(i);
    switch (i) {
        case 5:
            $('input[type = "radio"]')
                .filter(`#s${i - 4}`)
                .prop("checked", true);
            break;
        case 1:
        case 2:
        case 3:
        case 4:
            $('input[type = "radio"]')
                .filter(`#s${i + 1}`)
                .prop("checked", true);
            break;

        default:
            break;
    }
});

//-------------------------------------copyright-------------------------------------
const year = d.getFullYear();
let copyright = document.querySelector("#footerCompanyInfo > p");
copyright.innerHTML = `&copy; ${year} Rakuda Corp. All rights reserved.`;
console.log(copyright.innerHTML);
