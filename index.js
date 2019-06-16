const maxParts = 300;

function drawRain() {	
	let canvas = document.querySelector('canvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	if(canvas.getContext) {
		let ctx = canvas.getContext('2d');
		let w = canvas.width;
		let h = canvas.height;
		
		let particles = [];
		for(let i = 0; i < maxParts; i++) {
			particles.push({
				value: Math.floor(Math.random() * 2),
				x: Math.random() * w,
				y: Math.random() * h,
				l: Math.random() * 1,
				xs: Math.random() * 2 - 1,
				ys: Math.random() * 4 + 4
			});
		}
	  
		function draw() {
			ctx.clearRect(0, 0, w, h);
			particles.forEach((p) => {
				ctx.font = "2em Monospace";
				ctx.fillStyle = "rgba(60, 180, 60, 0.8)";
				ctx.fillText(p.value, p.x, p.y);
			});
			move();
		}
	  
		function move() {
			particles.forEach((p) => {
				p.x += p.xs;
				p.y += p.ys;
				if (p.x > w || p.y > h) {
					p.x = Math.random() * w;
					p.y = -20;
				}
			});
		}

		setInterval(draw, 30);
	}
}

window.addEventListener("load", drawRain);