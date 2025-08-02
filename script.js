// Interactive heartbeat website
document.addEventListener('DOMContentLoaded', function() {
    const heartbeatDot = document.querySelector('.heartbeat-dot');
    const container = document.querySelector('.container');
    
    // Add click interaction to change colors
    heartbeatDot.addEventListener('click', function() {
        const colors = [
            { name: 'Pure White', bg: 'radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5))', shadow: 'rgba(255, 255, 255, 0.8)', border: 'rgba(255, 255, 255, 0.8)' },
            { name: 'Crystal Clear', bg: 'radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.4))', shadow: 'rgba(255, 255, 255, 0.7)', border: 'rgba(255, 255, 255, 0.7)' },
            { name: 'Pearl White', bg: 'radial-gradient(circle, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6))', shadow: 'rgba(255, 255, 255, 0.9)', border: 'rgba(255, 255, 255, 0.9)' },
            { name: 'Frosted Glass', bg: 'radial-gradient(circle, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.3))', shadow: 'rgba(255, 255, 255, 0.6)', border: 'rgba(255, 255, 255, 0.6)' },
            { name: 'Liquid Silver', bg: 'radial-gradient(circle, rgba(240, 248, 255, 0.9), rgba(240, 248, 255, 0.7), rgba(240, 248, 255, 0.5))', shadow: 'rgba(240, 248, 255, 0.8)', border: 'rgba(240, 248, 255, 0.8)' },
            { name: 'Milk White', bg: 'radial-gradient(circle, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.45))', shadow: 'rgba(255, 255, 255, 0.75)', border: 'rgba(255, 255, 255, 0.75)' },
            { name: 'Diamond Clear', bg: 'radial-gradient(circle, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6))', shadow: 'rgba(255, 255, 255, 1)', border: 'rgba(255, 255, 255, 1)' }
        ];
        
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        heartbeatDot.style.background = randomColor.bg;
        heartbeatDot.style.boxShadow = `
            0 0 20px ${randomColor.shadow},
            0 0 40px ${randomColor.shadow},
            0 0 60px ${randomColor.shadow},
            0 0 80px ${randomColor.shadow},
            inset 0 0 20px ${randomColor.shadow}
        `;
        heartbeatDot.style.borderColor = randomColor.border;
        
        // Update pulse rings color
        const pulseRings = document.querySelectorAll('.pulse-ring');
        pulseRings.forEach(ring => {
            ring.style.borderColor = randomColor.border;
        });
        
        console.log(`Changed to ${randomColor.name} fluid`);
    });
    
    // Add mouse movement effect
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        // Subtle movement based on mouse position
        heartbeatDot.style.transform = `translate(${(x - 0.5) * 20}px, ${(y - 0.5) * 20}px) scale(1)`;
    });
    
    // Add keyboard interaction
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case ' ':
                // Spacebar toggles animation
                heartbeatDot.style.animationPlayState = 
                    heartbeatDot.style.animationPlayState === 'paused' ? 'running' : 'paused';
                break;
            case 'ArrowUp':
                // Increase animation speed
                const currentDuration = parseFloat(getComputedStyle(heartbeatDot).animationDuration);
                heartbeatDot.style.animationDuration = Math.max(0.5, currentDuration - 0.1) + 's';
                break;
            case 'ArrowDown':
                // Decrease animation speed
                const currentDuration2 = parseFloat(getComputedStyle(heartbeatDot).animationDuration);
                heartbeatDot.style.animationDuration = Math.min(3, currentDuration2 + 0.1) + 's';
                break;
        }
    });
    
    // Add touch support for mobile
    heartbeatDot.addEventListener('touchstart', function(e) {
        e.preventDefault();
        heartbeatDot.click();
    });
    
    // Add window resize handler
    window.addEventListener('resize', function() {
        // Recalculate positions if needed
        heartbeatDot.style.transform = 'translate(0, 0) scale(1)';
    });
    
    // Add some ambient effects
    let ambientTimer = 0;
    setInterval(function() {
        ambientTimer += 0.1;
        const ambientGlow = Math.sin(ambientTimer) * 0.2 + 0.8;
        heartbeatDot.style.filter = `brightness(${ambientGlow}) drop-shadow(0 0 10px rgba(255, 255, 255, ${ambientGlow * 0.5}))`;
    }, 100);
    
    console.log('Fluid heartbeat website loaded! Click the dot to change fluid colors, use spacebar to pause/resume, and arrow keys to control speed.');
}); 