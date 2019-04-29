window.ondevicemotion = function(event) { 
	var ax = event.accelerationIncludingGravity.x
	var ay = event.accelerationIncludingGravity.y
	var az = event.accelerationIncludingGravity.z

	document.querySelector("#x_acc").innerHTML = "X = " + ax;
	document.querySelector("#y_acc").innerHTML = "Y = " + ay;
	document.querySelector("#z_acc").innerHTML = "Z = " + az;
}

window.addEventListener("deviceorientation", function(event) {
	document.querySelector("#mag_alpha").innerHTML = "alpha = " + event.alpha;
	document.querySelector("#mag_beta").innerHTML = "beta = " + event.beta;
	document.querySelector("#mag_gamma").innerHTML = "gamma = " + event.gamma;
}, true);

window.ondevicemotion = function(event) { 
	ralpha = event.rotationRate.alpha;
	rbeta = event.rotationRate.beta;
	rgamma = event.rotationRate.gamma;
	
	var img = new Image();
	img.src = "img/compass.svg";
	half_width = img.naturalWidth / 2;
	half_height = img.naturalHeight / 2;

	var c = document.getElementById("myCanvas");
	var context = c.getContext("2d");
	var canvasWidth = 600;
	var canvasHeight = 600; 
	
	context.clearRect(0, 0, canvasWidth, canvasHeight);
	context.translate(canvasWidth/2, canvasWidth/2);
	context.rotate( 0.895 * rgamma * (Math.PI / 180));
	context.translate(-canvasWidth/2, -canvasWidth/2);
	context.drawImage(img, canvasWidth/2 - half_width, canvasHeight/2 - half_height);
}

var angle = 0;
var lastAngle = 0;

function watchCompass() {

      var suc = function(a){
      var angle = roundNyc(a.magneticHeading);

   l1 = angle -  lastAngle;
   l2 = 360 - l1;

  if( Math.abs(l1) >=  Math.abs(l2)){ 

   r =   (lastAngle - l2) ; 

  }else{

   r =  angle ; 

  }    

   lastAngle = r;     
   l1 = 0;
   l2 = 0;

document.getElementById('mycompass').style.webkitTransform = 'rotateZ(' + -r + 'deg)';

      };
      var fail = function(){};
      var opt = {};
      opt.frequency = 50;
      timer = navigator.compass.watchHeading(suc,fail,opt);
    } 