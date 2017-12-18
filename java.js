

var canvas = document.getElementById('myCanvas'),
         c = canvas.getContext('2d'),
         W = canvas.width = window.innerWidth;
         H = canvas.height = window.innerHeight;

         c.fillStyle = "black";
         c.fillRect(0,0,W,H);

         var circles = [],
              life = 0;
              maxLife = 100;

function particale (x,y,radius,color){
  this.x = x;
  this.y = y;
  this.vy = 2;
  this.vx = 2;
  this.radius = radius;
  this.color = color;
  life++;
}

particale.prototype.draw = function(){
    // c.fillStyle = this.color;
    // c.fillRect(this.x,this.y,this.radius,this.radius);
    c.strokeStyle = this.color;
    c.strokeRect(this.x,this.y,this.radius,this.radius);
}

particale.prototype.update = function (){

  if(life > maxLife){
      life = 1;
  }

  this.x += this.vx;
  this.y += this.vy;

  this.draw();
}










     setInterval(function(){

     c.clearRect(0,0,W,H);


     for (var j = 0; j < 200; j++) {

       var x = Math.random() *  W;
       var y = Math.random() * H;
       var radius = 20;
       var color = "rgba(150,105,180,0.5)";

           var circle = new particale(x,y,radius,color);
           circles.push(circle);
         }

     for (var i = 0; i < circles.length; i++) {
       circles[i].update();
     }

   },1000);
