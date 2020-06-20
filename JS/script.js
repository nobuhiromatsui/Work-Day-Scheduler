// display time
var time = moment().format('LLLL');
console.log(time);
var timeOutput = $("#currentDay").html(time);


var time2 = moment().format('HH');
console.log(time2);

// text index
var i = 0;

//hours passed
var a = moment().startOf('day').fromNow();
console.log(a);


// creating button index
// var textAreaIndex = $(".future").data("class", i);
// console.log(textAreaIndex[i]);
 
// var hourVal = $(".saveBtn").data("name");
// console.log(hourVal);

// for (var i = 0; i < 8; i++) {
//     var timeCheck = $("#input" + i).data("input");
//     console.log(timeCheck);

    if ( time2 == 9 ){
        $("#textArea1").removeClass("future");
        $("#textArea1").addClass("present");
    }
    else if ( time2 == 10 ){
        $("#textArea2").removeClass("future");
        $("#textArea2").addClass("present");
    }
    else if ( time2 == 11 ){
        $("#textArea3").removeClass("future");
        $("#textArea3").addClass("present");
    }
    else if ( time2 == 12 ){
        $("#textArea4").removeClass("future");
        $("#textArea4").addClass("present");
    }
    else if ( time2 == 13 ){
        $("#textArea5").removeClass("future");
        $("#textArea5").addClass("present");
    }
    else if ( time2 == 14 ){
        $("#textArea6").removeClass("future");
        $("#textArea6").addClass("present");
    }else if ( time2 == 15 ){
        $("#textArea7").removeClass("future");
        $("#textArea7").addClass("present");
    }
    else if ( time2 == 16 ){
        $("#textArea8").removeClass("future");
        $("#textArea8").addClass("present");
    }
    else {
        $("#textArea2").addClass("past");
    }
// }

if ( time2 > 9 || time2 > 10 || time2 > 11 || time2 > 12 || time2 > 13 || time2 > 14 || time2 > 15  || time2 > 16  ){
    $("#textArea1").removeClass("future");
    $("#textArea1").addClass("past");

    $("#textArea2").removeClass("future");
    $("#textArea2").addClass("past");

    $("#textArea3").removeClass("future");
    $("#textArea3").addClass("past");

    $("#textArea4").removeClass("future");
    $("#textArea4").addClass("past");

    $("#textArea5").removeClass("future");
    $("#textArea5").addClass("past");

    $("#textArea6").removeClass("future");
    $("#textArea6").addClass("past");

    $("#textArea7").removeClass("future");
    $("#textArea7").addClass("past");

}







// Save button function - store input to local storage
$(".saveBtn").on("click", function () {
    var click = $(this).data("name");
    console.log(click);

    localStorage.setItem("9", $("#input1").val());
    localStorage.setItem("10", $("#input2").val());
    localStorage.setItem("11", $("#input3").val());
    localStorage.setItem("12", $("#input4").val());
    localStorage.setItem("13", $("#input5").val());
    localStorage.setItem("14", $("#input6").val());
    localStorage.setItem("15", $("#input7").val());
    localStorage.setItem("16", $("#input8").val());

});

// Keep text
function keep() {

    var nine = localStorage.getItem("9");
    var ten = localStorage.getItem("10");
    var eleven = localStorage.getItem("11");
    var twelve = localStorage.getItem("12");
    var thirteen = localStorage.getItem("13");
    var fourteen = localStorage.getItem("14");
    var fifteen = localStorage.getItem("15");
    var sixteen = localStorage.getItem("16");

    $("#input1").html(nine);
    $("#input2").html(ten);
    $("#input3").html(eleven);
    $("#input4").html(twelve);
    $("#input5").html(thirteen);
    $("#input6").html(fourteen);
    $("#input7").html(fifteen);
    $("#input8").html(sixteen);

}

keep();


