//-------------------------------------whole page-------------------------------------
$("*").each(function () {
    var $this = $(this);
    if (parseInt($this.css("fontSize")) < 14) {
        $this.css({ "font-size": "14px" });
    } else if (parseInt($this.css("fontSize")) > 45) {
        $this.css({ "font-size": "45px" });
    }
});

//-------------------------------------navbar-------------------------------------
// scroll functions
// $(window).scroll(function(e) {

//     // add padding-top to bady (if necessary)
//     // navbar_height = document.querySelector('.navbar').offsetHeight;
//     // document.body.style.paddingTop = navbar_height + 'px';
//     // add/remove class to navbar when scrolling to hide/show
//     var scroll = $(window).scrollTop();
//     if (scroll >0) {
//         $('.navbar').addClass("navbar-hide");
//     } else {
//         $('.navbar').removeClass("navbar-hide");
//     }

// });
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

//-------------------------------------three cards-------------------------------------

$(".myCards").on({
    mouseover: function () {
        $(this).find("img:first-child").css("display", "block");
        $(this).find("img:last-child").css({
            filter: "blur(2px)",
            transform: "scale(1.4)",
            transition: ".4s ease-in-out",
        });
    },
    mouseleave: function () {
        $(this).find("img:first-child").css("display", "none");
        $(this).find("img:last-child").css({
            filter: "blur(0px)",
            transform: "scale(1)",
            transition: ".4s ease-in-out",
        });
    },
});

//-------------------------------------contact section-------------------------------------
// check for working hours
var d = new Date();
// var myDay = 3;   //  test
// var myTime = 12;  // test
var myDay = d.getDay(); //0-6
var myTime = d.getHours(); //0-23
$("#contactCardBtn1").on("click", function () {
    if (myDay > 0 && myDay < 6) {
        if (myTime > 8 && myTime < 17) {
            if (myTime == 12) {
                // lunch break
                $("#alertBox").css("display", "block");
                console.log("nope");
            } else {
                // window.open('tel:+886422990057');    //test
                window.open("tel:+886422369615");
            }
        } else {
            // not working hours
            $("#alertBox").css("display", "block");
            console.log("nope");
        }
    } else {
        // not working hours
        $("#alertBox").css("display", "block");
        console.log("nope");
    }
});
// close the alert box
$("#alertBox button").on("click", function () {
    $("#alertBox").css("display", "none");
});
// contact form
function openForm() {
    window.open(
        "formEN.html",
        "_blank" // open in a new tab
    );
}
function openFormTW() {
    window.open(
        "formTW.html",
        "_blank" // open in a new tab
    );
}
//-------------------------------------form page-------------------------------------
$("#submitBtn").on("click", function () {
    var myBody = $("#clientDescription").val();
    var mySubject = $("#clientSubject").val();
    var myHref =
        "mailto:linkpac@seed.net.tw" +
        "?" +
        "subject=" +
        mySubject +
        "&" +
        "body=" +
        "本信件透過網頁表單填寫：" +
        myBody;
    window.open(myHref);
    var wndMail = window.open(myHref);
    if (wndMail) {
        wndMail.close();
    }
});

// var addresses = "";//between the speech mark goes the receptient. Seperate addresses with a ;
// var body = ""//write the message text between the speech marks or put a variable in the place of the speech marks
// var subject = ""//between the speech marks goes the subject of the message
// var href = "mailto:" + addresses + "?"
//          + "subject=" + subject + "&"
//          + "body=" + body;
// var wndMail;
// wndMail = window.open(href, "_blank", "scrollbars=yes,resizable=yes,width=10,height=10");
// if(wndMail)
// {
//     wndMail.close();
// }
$("#resetBtn").on("click", function () {
    $("#clientInput input").reset();
});
//-------------------------------------copyright-------------------------------------
const year = d.getFullYear();
let copyright = document.querySelector("#footerCompanyInfo > p");
copyright.innerHTML = `&copy; ${year} LINK PAC All rights reserved.`;
console.log(copyright.innerHTML);