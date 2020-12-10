function hideAll() {
    $("#sasm").hide();

    $("#gal").hide();
    
    $("#opt").hide();
    
    $("#sub").hide();
}

hideAll();

$("#bt1").click(function () { hideAll();
    $("#sasm").fadeIn(1000).show();
});

$("#bt2").click(function () { hideAll();
    $("#gal").fadeIn(600).show();
});

$("#bt4").click(function () { hideAll();
    $("#sub").fadeIn(600).show();
});
var active = 1;

$("#left").click(function () {
    active--;
    console.log(active + ".jpg");
    if (active == 0) {
        active = 1;
    }
    $("#shown").attr("src", active + ".jpg");
});

$("#right").click(function () {
    active++;
    console.log(active + ".jpg");
    if (active >= 9) {
        active = 8;
    }
    $("#shown").attr("src", active + ".jpg");
});

var uname;
var pass;
var age;
var comp;
$("#send").click(function(){
    uname = $("#uname").val(); console.log(uname);
    //debugger;
    pass = $("#pass").html();
    age = $("#age").html();
    comp = $("#comp").html();
});
