window.onload = function() {
    const canvas = document.getElementById('gravityCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particlesArray = [];

    const touch = {
        x: null,
        y: null
    }


    document.addEventListener('mousemove', function(event) {
        touch.x = event.x;
        touch.y = event.y;
        for(let i = 0; i < 1; i++) {
            particlesArray.push(new Particle());
        }

    });

    class Particle{
        constructor(){
            this.x = touch.x;
            this.y = touch.y;
            // this.radius = Math.random()*15 + 1;
            this.radius = 15;
            this.velocityX = (Math.random()-0.5)*3.5;
            // this.velocityY = (Math.random()-0.5)*3.5;
            this.velocityY = 2;
            this.color = '#fff';
            this.p;
        }

        update(){
            
            this.x += this.velocityX;
            if(this.velocityY >= this.p){
                this.velocityY = this.p;
            }
            else
                this.velocityY += 0.1;
            this.y += this.velocityY;
            if(this.x - this.radius <= 0|| this.x + this.radius >= canvas.width){
                this.velocityX = -this.velocityX;
            }
            if(this.y + this.radius <= 0|| this.y + this.radius >= canvas.height){
                this.velocityY = -this.velocityY;
            }
            
        }

        draw(){
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
            ctx.fill();
        }
    }

    function handleParticles(){
        for(let i = 0; i < particlesArray.length; i++){
            particlesArray[i].p = particlesArray[i].y;
            particlesArray[i].update();
            particlesArray[i].draw();


        }
    }
    function animate(){
        ctx.fillStyle = 'rgba(0,0,0,0.31)'
        ctx.fillRect(0,0,canvas.width,canvas.height);
        handleParticles();
        requestAnimationFrame(animate);
    }
    animate();
}