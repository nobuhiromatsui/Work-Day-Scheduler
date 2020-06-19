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


var seconds = (moment().seconds())
console.log(seconds);

// creating button index
var textAreaIndex = $(".future").data("class", i);
console.log(textAreaIndex[i]);

// // creating textarea index
// var textIndex = $(".inputText").data("id", i);
// console.log(textIndex);

 
// if ( )
$("#textArea1" ).removeClass("future");
$("#textArea1").addClass("present");






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

});




// Keep text
function keep() {

    var nine = localStorage.getItem("9");
    var ten = localStorage.getItem("10");
    var eleven = localStorage.getItem("11");
    var twelve = localStorage.getItem("12");
    var thirteen = localStorage.getItem("13");
    var fourteen = localStorage.getItem("14");

    $("#input1").html(nine);
    $("#input2").html(ten);
    $("#input3").html(eleven);
    $("#input4").html(twelve);
    $("#input5").html(thirteen);
    $("#input6").html(fourteen);

}

keep();


