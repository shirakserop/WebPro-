

var canvas = document.getElementById('myCanvas'),
         c = canvas.getContext('2d'),
         W = canvas.width = window.innerWidth;
         H = canvas.height = window.innerHeight;

         c.fillStyle = "black";
         c.fillRect(0,0,W,H);


              // var life = 0,
              // maxLife = 100;

function particale (x,y,radius,color){
  this.x = x;
  this.y = y;
  this.vy = 0.05;
  this.vx = 0.05;
  this.radius = radius;
  this.color = color;
//  life++;
}

particale.prototype.draw = function(){
    // c.fillStyle = this.color;
    // c.fillRect(this.x,this.y,this.radius,this.radius);
    c.strokeStyle = this.color;
    c.strokeRect(this.x,this.y,this.radius,this.radius);
    c.strokeStyle = "red ";
    c.strokeText("text",this.x,this.y);
}

particale.prototype.update = function (){

  // if(life > maxLife){
  //     life = 1;
  // }

  this.x += this.vx;
  this.y += this.vy;

  this.draw();
}



function add_circle(x,y,radius){
  this.x = x;
  this.y = y;
  this.vx = 0.05;
  this.vy = 0.05; 
  this.radius= radius;


  this.draw = function(){
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI * 2);
    c.fillStyle = "red";
    c.fill();
  }

  this.update = function(){

    this.x += this.vx;
    this.y += this.vy;

    this.draw();
  }


}






     setInterval(function(){


          c.clearRect(0,0,W,H);
          var add_circles = [];
          var circles = [];
      for (var j = 0; j < 200; j++) {
           var x = Math.random() *  W;
           var y = Math.random() * H;
           var radius = 20;
           var color = "rgba(150,105,180,0.5)";

           var circle = new particale(x,y,radius,color);
           circles.push(circle);
       }

         for(var i=0; i < 100; i++){

           var x,y,radius,add_circleO;
           x = Math.random() * W;
           y = Math.random() * H;
           radius = Math.random() * 8 ;
           add_circleO = new add_circle(x,y,radius);

                add_circles.push(add_circleO);
         }

    for(var k = 0; k < add_circles.length; k++){
        add_circles[k].update();
    }


     for (var i = 0; i < circles.length; i++) {
       circles[i].update();
     }

   },60);
