// Interactive heartbeat website
document.addEventListener('DOMContentLoaded', function() {
    const heartbeatDot = document.querySelector('.heartbeat-dot');
    const container = document.querySelector('.container');
    
    // Add click interaction to change colors
    heartbeatDot.addEventListener('click', function() {
        const colors = [
            '#ff0066', // Pink
            '#00ff66', // Green
            '#0066ff', // Blue
            '#ff6600', // Orange
            '#ff00ff', // Magenta
            '#ffff00', // Yellow
            '#00ffff'  // Cyan
        ];
        
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        heartbeatDot.style.background = `radial-gradient(circle, ${randomColor}, ${randomColor}dd, ${randomColor})`;
        heartbeatDot.style.boxShadow = `
            0 0 20px ${randomColor},
            0 0 40px ${randomColor},
            0 0 60px ${randomColor},
            0 0 80px ${randomColor},
            inset 0 0 20px ${randomColor}80
        `;
        
        // Update pulse rings color
        const pulseRings = document.querySelectorAll('.pulse-ring');
        pulseRings.forEach(ring => {
            ring.style.borderColor = randomColor;
        });
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
        const ambientGlow = Math.sin(ambientTimer) * 0.3 + 0.7;
        heartbeatDot.style.filter = `brightness(${ambientGlow})`;
    }, 100);
    
    console.log('Heartbeat website loaded! Click the dot to change colors, use spacebar to pause/resume, and arrow keys to control speed.');
}); 