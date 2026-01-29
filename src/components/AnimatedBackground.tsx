import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let connections: Connection[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        const colors = ['#00ffff', '#ff00ff', '#8b5cf6', '#00ff88'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvasWidth) this.vx *= -1;
        if (this.y < 0 || this.y > canvasHeight) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    class Connection {
      startX: number;
      startY: number;
      endX: number;
      endY: number;
      progress: number;
      speed: number;
      color: string;

      constructor(canvasWidth: number, canvasHeight: number) {
        const isHorizontal = Math.random() > 0.5;
        if (isHorizontal) {
          this.startX = 0;
          this.endX = canvasWidth;
          this.startY = Math.random() * canvasHeight;
          this.endY = this.startY + (Math.random() - 0.5) * 200;
        } else {
          this.startY = 0;
          this.endY = canvasHeight;
          this.startX = Math.random() * canvasWidth;
          this.endX = this.startX + (Math.random() - 0.5) * 200;
        }
        this.progress = 0;
        this.speed = Math.random() * 0.005 + 0.002;
        const colors = ['#00ffff', '#ff00ff', '#8b5cf6'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.progress += this.speed;
        return this.progress < 1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const currentX = this.startX + (this.endX - this.startX) * this.progress;
        const currentY = this.startY + (this.endY - this.startY) * this.progress;
        
        const gradient = ctx.createLinearGradient(this.startX, this.startY, currentX, currentY);
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(0.5, this.color + '40');
        gradient.addColorStop(1, this.color);

        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw glowing dot at the end
        ctx.beginPath();
        ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const init = () => {
      resizeCanvas();
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 15, 28, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Add new circuit connections occasionally
      if (Math.random() < 0.02 && connections.length < 5) {
        connections.push(new Connection(canvas.width, canvas.height));
      }

      // Update and draw connections
      connections = connections.filter(conn => {
        const active = conn.update();
        if (active) conn.draw(ctx);
        return active;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      init();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, hsl(222 47% 5%) 0%, hsl(260 50% 8%) 50%, hsl(222 47% 5%) 100%)' }}
      />
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-neon-purple/10 via-transparent to-transparent" />
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 z-0 circuit-pattern opacity-30" />
      {/* Holographic grid */}
      <div className="absolute inset-0 z-0 holo-grid" />
    </>
  );
};

export default AnimatedBackground;
