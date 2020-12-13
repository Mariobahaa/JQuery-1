function hideAll() {
    $("#sasm").hide();

    $("#gal").hide();

    $("#opt").hide();

    $("#sub").hide();
    
    $("#sube").hide();
    
    $("#abc").hide();
}

hideAll();

$("#bt1").click(function () {
    hideAll();
    $("#sasm").fadeIn(1000).show();
});

$("#bt2").click(function () {
    hideAll();
    $("#gal").fadeIn(600).show();
});

$("#bt4").click(function () {
    hideAll();
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


$("#bt3").click(function(){
    hideAll();
    $("#abc").slideDown(500);
})

var uname;
var pass;
var age;
var comp;
$("#send").click(function () {
    uname = $("#uname").val(); $("#uname").val('');
    pass = $("#pass").val(); $("#pass").val('');
    age = $("#age").val();  $("#age").val('');
    comp = $("#comp").val(); $("#comp").val('');
    $("#sub").fadeOut(1200).hide();
    $("#sube").fadeIn(800).show();
    $("#sube").css("text-align","left");    
    //console.log(uname);
    $("#sube").children()[0].append(uname);
    console.log(age);
    $("#sube").children()[5].append(age);
    console.log(comp);
    $("#sube").children()[10].append(comp);
});

$("#edit").click(function(){
    hideAll();
    $("#sub").fadeIn(600);
    
});
