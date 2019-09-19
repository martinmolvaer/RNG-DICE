var body = document.getElementById("main-container");

function getImage () {
    var images = [
     "dice-1-hi.png",
     "dice-2-hi.png",
     "d5.png",
     "d3.png",
     "d4.png",
     "d6.png",
    ];
    
    return images[Math.floor(Math.random()*images.length)];
    }

function addImage() {
    var image = getImage();

    if (document.getElementById('popImg') ){
       document.getElementById('popImg').remove(); 
    }

    var x = document.createElement("IMG");
    x.src = image;
    x.id = "popImg"
    document.getElementById("img").appendChild(x);

}