window.addEventListener("load", function () {
    var sounds1 = document.querySelector(".sound1");
    var sounds2 = document.querySelector(".sound2");
    var sounds3 = document.querySelector(".sound3");
    var sounds4 = document.querySelector(".sound4");
    var sounds5 = document.querySelector(".sound5");
    var sounds6 = document.querySelector(".sound6");
    var pads1 = document.querySelector(".pad1");
    var pads2 = document.querySelector(".pad2");
    var pads3 = document.querySelector(".pad3");
    var pads4 = document.querySelector(".pad4");
    var pads5 = document.querySelector(".pad5");
    var pads6 = document.querySelector(".pad6");
    var videos =document.querySelector(".video");

  

    var visual = document.querySelector(".visual");
    var colors = ["coral", "lightsteelblue", "darkseagreen", "lightskyblue", "darkcyan", "lightgrey"];



    pads1.addEventListener("click", function () {

        checkPlay(sounds1);
        
    });


    pads2.addEventListener("click", function () {

        checkPlay(sounds2);
        
    });


    pads3.addEventListener("click", function () {

        checkPlay(sounds3);
    });
    pads4.addEventListener("click", function () {

        checkPlay(sounds4);
    });
    pads5.addEventListener("click", function () {

        checkPlay(sounds5);
    });
    pads6.addEventListener("click", function () {

        checkPlay(sounds6);
    });

    function checkPlay(sounds) {    
        if (sounds.paused) {
            sounds.play();
            videos.play();

        } else {
            sounds.pause();
            videos.pause();

        }

    }


});
    

    








