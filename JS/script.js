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


// COLOUR CHANGE IF STATEMENT

    if ( time2 == 9 ){
        $("#textArea1").removeClass("future");
        $("#textArea1").addClass("present");
    }
    else if ( time2 == 10 ){
        $("#textArea2").removeClass("future");
        $("#textArea2").addClass("present");
        pastNine ();
    }
    else if ( time2 == 11 ){
        $("#textArea3").removeClass("future");
        $("#textArea3").addClass("present");
        pastNine ();
        pastTen ();

    }
    else if ( time2 == 12 ){
        $("#textArea4").removeClass("future");
        $("#textArea4").addClass("present");
        pastNine ();
        pastTen ();
        pastElev ();
    }
    else if ( time2 == 13 ){
        $("#textArea5").removeClass("future");
        $("#textArea5").addClass("present");
        pastNine ();
        pastTen ();
        pastElev ();
        pastTwe ();
    }
    else if ( time2 == 14 ){
        $("#textArea6").removeClass("future");
        $("#textArea6").addClass("present");
        pastNine ();
        pastTen ();
        pastElev ();
        pastTwe ();
        pastThir ();
    }
    else if ( time2 == 15 ){
        $("#textArea7").removeClass("future");
        $("#textArea7").addClass("present");
        pastNine ();
        pastTen ();
        pastElev ();
        pastTwe ();
        pastThir ();
        pastFourteen ();
    }
    else if ( time2 == 16 ){
        $("#textArea8").removeClass("future");
        $("#textArea8").addClass("present");
        pastNine ();
        pastTen ();
        pastElev ();
        pastTwe ();
        pastThir ();
        pastFourteen ();
        pastFifteen ();
    }
    else if ( time2 > 17 ){
        pastNine ();
        pastTen ();
        pastElev ();
        pastTwe ();
        pastThir ();
        pastFourteen ();
        pastFifteen ();
        pastSixteen ();
    }
    else {
        // $("#textArea2").addClass("past");
    }


// COLOUR CHANGE FUNCTION FOR PAST TIME
function pastNine (){
    $("#textArea1").removeClass("future");
    $("#textArea1").addClass("past");
}

function pastTen () {
    $("#textArea2").removeClass("future");
    $("#textArea2").addClass("past");
}

function pastElev ()  {
    $("#textArea3").removeClass("future");
    $("#textArea3").addClass("past");
}

function pastTwe (){
    $("#textArea3").removeClass("future");
    $("#textArea3").addClass("past");
}

function pastThir (){
    $("#textArea4").removeClass("future");
    $("#textArea4").addClass("past");
}

function pastFourteen ()  {
    $("#textArea5").removeClass("future");
    $("#textArea5").addClass("past");
}

function pastFifteen () {
    $("#textArea6").removeClass("future");
    $("#textArea6").addClass("past");
}
function pastSixteen () {
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


