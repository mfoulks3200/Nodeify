function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var dotsx = new Array();
var dotsy = new Array();
var dotsa = new Array();
var dotss = new Array();
var ctx;

$(document).ready(function(){
	
	for(var i=0;i<getRandomInt(10,30);i++){
		ctx = $('#canvas')[0].getContext("2d");
		ctx.fillStyle = "#8CC84B";
		ctx.beginPath();
		var height = $('#canvas').height();
		var width = $('#canvas').width();
		dotsx[i] = getRandomInt(0, width);
		dotsy[i] = getRandomInt(0, height);
		dotsa[i] = getRandomInt(0, 360);
		dotss[i] = Math.random() / 5 + 0.001;
		ctx.arc(dotsx[i], dotsy[i], 3, 0, Math.PI*2, true);
		ctx.closePath();
		ctx.fill();
	}
});

function render(){
	setInterval(function(){
		ctx.beginPath();
		ctx.fillStyle = "#FFFFFF";
		ctx.fillRect(0,0,$('#canvas').width(),$('#canvas').height());
		for(var i = 0;i<dotsx.length;i++){
			ctx.fillStyle = "#8CC84B";
			dotsy[i] = dotsy[i] + Math.sin(dotsa[i])*dotss[i];
			dotsx[i] = dotsx[i] + Math.cos(dotsa[i])*dotss[i];
			if(dotsx[i] < "10"){
				dotsa[i] = dotsa[i] + 180;
			}
			if(dotsx[i] > $('#canvas').width()-10){
				dotsa[i] = dotsa[i] - 180;
			}
			if(dotsy[i] < "10"){
				dotsa[i] = dotsa[i] + 180;
			}
			if(dotsy[i] > $('#canvas').height()-10){
				dotsa[i] = dotsa[i] - 180;
			}
			ctx.arc(dotsx[i], dotsy[i], 3, 0, Math.PI*2, true);
			ctx.closePath();
			ctx.fill();
			for(var f = 0;f<dotsx.length;f++){
				ctx.beginPath();
				ctx.moveTo(dotsx[i], dotsy[i]);
				ctx.lineTo(dotsx[f], dotsy[f]);
				ctx.strokeStyle = "#8CC84B";
				ctx.stroke();
				ctx.closePath();
			}
		}
		var img=document.getElementById("nodeify");
		ctx.drawImage(img,75,100);
	},1);
}

render();