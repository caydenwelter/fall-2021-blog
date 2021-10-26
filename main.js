function preLoad(){
   this.window.setTimeout(function(){
       var c = this.document.getElementById("cover");
       var loader = this.document.getElementById("loader");
       var op;
       for(op = 1.0; op > 0.0; op -= 0.1){
          window.setTimeout(function(){
              c.style.opacity = op.toString();
              loader.style.opacity = op.toString();
          }, 100)
       }
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