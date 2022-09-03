var songfail = new Audio ("audio/AUD-20200714-WA0013.m4a")
var songpass = new Audio ("audio/AUD-20200621-WA0012.m4a")
var songaverage = new Audio ("audio/AUD-20200616-WA0019.mp3")
var songcredit = new Audio ("audio/AUD-20200617-WA0066.mp3")
var songgood = new Audio ("audio/AUD-20200617-WA0066.mp3")
var songexcellent = new Audio ("audio/AUD-20200610-WA0017.m4a")


function gradeMe(){
    var scoreOfUser = Number(userScore.value)

    if(scoreOfUser>=0 && scoreOfUser<40) {
        // alert(display.value)
        display.value = "F - Fail"
        // alert("Fail")
        songfail.play()
        // divGuy.innerText = "fail"
        display.style.color = "red"
    }
    else if(scoreOfUser>=40 && scoreOfUser<45){
        display.value = "E - Pass"
        songpass.play()
        display.style.color = "orange"
        // alert("Pass")
    }
    else if(scoreOfUser>=45 && scoreOfUser<50){
        display.value = "D - Average"
        songaverage.play()
        display.style.color = "orange"
        // alert("Average")
    }
    else if(scoreOfUser>=50 && scoreOfUser<60){
        display.value = "C - Credit"
        songcredit.play()
        display.style.color = "green"
        // alert("Credit")
    }
    else if(scoreOfUser>=60 && scoreOfUser<70){
        display.value = "B - Good"
        display.style.color = "green"
        // alert("Good")
    }

    else if(scoreOfUser>=70 && scoreOfUser<=100){
        display.value = "A - Excellent"
        songexcellent.play()
        display.style.color = "green"
        // alert("Excellent")
    }
   
    else{
        display.value = "Not recognised"
        display.style.color = "black"
        alert("Unrecognised")
    }
    }