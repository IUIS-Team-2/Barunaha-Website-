import React, { useRef, useEffect } from 'react';

const InteractiveParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    const mouse = {
      x: null,
      y: null,
      radius: 350 // Radius within which particles start orbiting
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.6 + 0.2;
        this.orbitRadius = Math.random() * 120 + 30; // How far they orbit from the cursor
        this.orbitSpeed = (Math.random() * 0.03 + 0.01) * (Math.random() > 0.5 ? 1 : -1);
      }

      update() {
        let isOrbiting = false;
        
        if (mouse.x !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
             isOrbiting = true;
             // Revolve around mouse
             this.angle += this.orbitSpeed;
             
             // Calculate target orbit position
             const targetX = mouse.x + Math.cos(this.angle) * this.orbitRadius;
             const targetY = mouse.y + Math.sin(this.angle) * this.orbitRadius;
             
             // Ease towards the target position for smooth magnetic capture
             this.x += (targetX - this.x) * 0.05;
             this.y += (targetY - this.y) * 0.05;
          }
        }
        
        if (!isOrbiting) {
            // Normal free drift floating upward slowly
            this.y -= this.speed;
            this.x += Math.sin(this.angle) * 0.3;
            this.angle += 0.005;
            
            // Wrap around the screen
            if (this.y < -10) {
              this.y = canvas.height + 10;
              this.x = Math.random() * canvas.width;
            }
            if (this.x < -10) this.x = canvas.width + 10;
            if (this.x > canvas.width + 10) this.x = -10;
        }
      }

      draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        
        // Reset shadow for performance
        ctx.shadowBlur = 0;
      }
    }

    const initParticles = () => {
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 7000);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[5]"
      style={{ display: 'block' }}
    />
  );
};

export default InteractiveParticles;
