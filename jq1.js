$("#sasm").hide();

$("#gal").hide();

$("#bt1").click( function(){$("#sasm").fadeIn(1000).show();});

$("#bt2").click( function(){$("#gal").fadeIn(600).show();});


var active = 1;

$("#left").click( function(){active--; console.log(active+".jpg") ;if (active ==0){ active = 1;}
                            $("#shown").attr("src",active+".jpg");});

$("#right").click( function(){active++; console.log(active+".jpg") ;if(active>=9) {active = 8; }
                            $("#shown").attr("src",active+".jpg");});
