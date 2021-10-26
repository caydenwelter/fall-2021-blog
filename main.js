function preLoad(){
    var c = this.document.getElementById("cover");
    var loader = this.document.getElementById("loader");
    this.window.setTimeout(function(){
       var op = 1.0;
       setInterval(function(){
           op-= 0.1;
           c.style.opacity = op.toString();
           loader.style.opacity = op.toString();
       }, 10);
        this.window.setTimeout(function(){
            loader.style.visibility = "hidden";
            c.style.visibility = "hidden";
        }, 100);
   }, 1000);
}

function setUpLoader(){
    var loader = document.getElementById("loader");
    var size = window.innerWidth;
    var width = (size*0.1).toString();
    loader.style.width = width;
    var height = width;
    loader.style.height = height;
    loader.style.top = window.innerHeight/2 - height;
    loader.style.right = window.innerWidth/2 - width/2;
    loader.style.visibility = "visible";
}