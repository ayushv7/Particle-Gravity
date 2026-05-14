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
        for(let i = 0; i < 2.5; i++) {
            particlesArray.push(new Particle());
        }

    });

    class Particle{
        constructor(){
            this.x = touch.x;
            this.y = touch.y;
            this.radius = Math.random()*15 + 1;
            this.velocityX = (Math.random()-0.5)*3.5;
            this.velocityY = (Math.random()-0.5)*3.5;
            this.color = '#fff';
        }

        update(){
            this.x += this.velocityX;
            this.y += this.velocityY + 2.5;

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
            particlesArray[i].update();
            particlesArray[i].draw();

        }
    }
    function animate(){
        ctx.fillStyle = 'rgba(0,0,0,1)'
        ctx.fillRect(0,0,canvas.width,canvas.height);
        handleParticles();
        requestAnimationFrame(animate);
    }
    animate();
}