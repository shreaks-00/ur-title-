document.addEventListener('DOMContentLoaded', () => {
    // --- 0. Two-Part Typing Animation ---
    const part1 = document.getElementById('hero-part1');
    const part2 = document.getElementById('hero-part2');
    const cursor1 = document.getElementById('cursor-1');
    const cursor2 = document.getElementById('cursor-2');
    
    if (part1 && part2) {
        const text1 = "YouTube Title Generator";
        const text2 = "That Actually Gets Clicks.";
        let i = 0;
        let j = 0;
        
        function typeWriter() {
            if (i < text1.length) {
                part1.textContent += text1.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            } else if (i === text1.length && j === 0) {
                // Done with part 1, switch cursors and pause briefly
                cursor1.classList.add('hidden');
                cursor2.classList.remove('hidden');
                j++;
                setTimeout(typeWriter, 300);
            } else if (j <= text2.length) {
                part2.textContent += text2.charAt(j - 1);
                j++;
                setTimeout(typeWriter, 50);
            } else {
                // Blink final cursor
                setInterval(() => {
                    cursor2.style.borderColor = cursor2.style.borderColor === 'transparent' ? '#caff00' : 'transparent';
                }, 500);
            }
        }
        setTimeout(typeWriter, 300);
    }

    // --- 1. Creative Coding: Scroll Reveal Intersection Observer ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    
    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

    // --- 2. Motion Graphics: Magnetic Button Effect ---
    const magneticBtns = document.querySelectorAll('.btn-premium');
    magneticBtns.forEach(btn => {
        // Only apply on non-touch devices
        if (window.matchMedia("(pointer: fine)").matches) {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.02)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        }
    });

    // --- 3. Kinematic Typography: Recursive Split text ---
    const splitElements = document.querySelectorAll('.split-words');
    let delayCounter = 0;
    splitElements.forEach(el => {
        const wrapWords = (node) => {
            if (node.nodeType === 3) { 
                const words = node.nodeValue.split(/(\s+)/);
                if (words.length > 0 && node.nodeValue.trim().length > 0) {
                    const fragment = document.createDocumentFragment();
                    words.forEach((word) => {
                        if (word.trim().length > 0) {
                            const span = document.createElement('span');
                            span.className = 'word-stagger';
                            span.textContent = word;
                            span.style.animationDelay = `${delayCounter * 0.08}s`;
                            delayCounter++;
                            fragment.appendChild(span);
                        } else {
                            fragment.appendChild(document.createTextNode(word));
                        }
                    });
                    node.parentNode.replaceChild(fragment, node);
                }
            } else if (node.nodeType === 1 && !node.classList.contains('word-stagger')) {
                Array.from(node.childNodes).forEach(wrapWords);
            }
        };
        Array.from(el.childNodes).forEach(wrapWords);
    });

    // --- 4. Functional Demo Logic ---
    const analyzeBtn = document.getElementById('demo-analyze-btn');
    const demoInput = document.getElementById('demo-input');
    const demoStateWaiting = document.getElementById('demo-state-waiting');
    const demoStateLoading = document.getElementById('demo-state-loading');
    const demoStateResult = document.getElementById('demo-state-result');
    const demoOriginalTitle = document.getElementById('demo-original-title');
    const demoAITitle = document.getElementById('demo-state-result')?.querySelector('.font-outfit.font-black');
    const demoAIScore = document.getElementById('demo-state-result')?.querySelector('.text-red-400, .text-indigo-400');

    if (analyzeBtn && demoInput) {
        analyzeBtn.addEventListener('click', async () => {
            const val = demoInput.value.trim();
            if (!val) {
                demoInput.focus();
                return;
            }

            // UI State Transformation
            demoStateWaiting.classList.add('hidden');
            demoStateResult.classList.add('hidden');
            demoStateLoading.classList.remove('hidden');
            analyzeBtn.disabled = true;
            analyzeBtn.textContent = "Analyzing...";

            try {
                // Real AI Call via secure proxy
                const response = await fetch('/api/generate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        messages: [
                            { 
                                role: "system", 
                                content: "You are an elite viral YouTube strategist. Rewrite the provided title for maximum CTR. Keep it human and high-curiosity. Output JSON: { \"score\": 0-10, \"best_result\": \"String\" }" 
                            },
                            { role: "user", content: `Rewrite this title: "${val}"` }
                        ],
                        model: "llama-3.3-70b-versatile",
                        response_format: { type: "json_object" }
                    })
                });

                if (!response.ok) throw new Error('API Error');

                const data = await response.json();
                const output = JSON.parse(data.choices?.[0]?.message?.content || "{}");

                // Update UI with real data
                if (demoOriginalTitle) demoOriginalTitle.textContent = val;
                if (demoAITitle) demoAITitle.textContent = output.best_result || "Viral Title Generated";
                
                if (demoAIScore) {
                    const score = output.score || 9;
                    demoAIScore.textContent = `Score: ${score}/10`;
                    demoAIScore.classList.toggle('text-red-400', score < 6);
                    demoAIScore.classList.toggle('text-indigo-400', score >= 6);
                }

                demoStateLoading.classList.add('hidden');
                demoStateResult.classList.remove('hidden');
            } catch (err) {
                console.error("Demo failed:", err);
                demoStateLoading.classList.add('hidden');
                demoStateWaiting.classList.remove('hidden');
                alert("The AI is currently busy. Please try again or head to the main tool page!");
            } finally {
                analyzeBtn.disabled = false;
                analyzeBtn.textContent = "Analyze Title";
            }
        });
    }

    // Connect to tool.html
    const tryFreeBtns = document.querySelectorAll('a[href="tool.html"]');
    tryFreeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Optional: you can pass the demo input to tool.html via localStorage if desired
            if (demoInput && demoInput.value.trim()) {
                localStorage.setItem('ur_title_initial_prompt', demoInput.value.trim());
            }
        });
    });
});

// Premium Ambient Orb Background System
(function initParticles() {
    const canvas = document.getElementById('particles-bg');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height, particles = [];
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    window.addEventListener('mousemove', (event) => {
        targetMouseX = (event.clientX / window.innerWidth) - 0.5;
        targetMouseY = (event.clientY / window.innerHeight) - 0.5;
    });

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Orb {
        constructor() {
            this.isPurple = Math.random() > 0.5;
            this.reset();
            this.y = Math.random() * height; 
        }
        reset() {
            this.size = Math.random() * 4 + 1;
            this.x = Math.random() * width;
            this.y = height + this.size * 2;
            this.speedY = -(Math.random() * 0.5 + 0.1);
            this.speedX = (Math.random() - 0.5) * 0.3;
            // random base opacity
            this.baseOpacity = Math.random() * 0.4 + 0.1;
            // phase for pulsing
            this.pulsePhase = Math.random() * Math.PI * 2;
            this.pulseSpeed = Math.random() * 0.02 + 0.01;
            this.depth = Math.random() * 2 + 0.5; 
        }
        update() {
            // Parallax mouse effect
            mouseX += (targetMouseX - mouseX) * 0.05;
            mouseY += (targetMouseY - mouseY) * 0.05;

            this.x += this.speedX + (mouseX * this.depth);
            this.y += this.speedY + (mouseY * this.depth * 0.5);
            this.pulsePhase += this.pulseSpeed;

            if (this.y < -this.size * 2 || this.x < -100 || this.x > width + 100) {
                this.reset();
                this.y = height + this.size;
            }
        }
        draw() {
            // Pulsing opacity
            let currentOpacity = this.baseOpacity + (Math.sin(this.pulsePhase) * 0.2);
            if (currentOpacity < 0) currentOpacity = 0;

            const radGrad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
            const r = this.isPurple ? 123 : 202;
            const g = this.isPurple ? 77 : 255;
            const b = this.isPurple ? 255 : 0;
            
            radGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${currentOpacity})`);
            radGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

            ctx.fillStyle = radGrad;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function createOrbs() {
        const pCount = Math.floor(window.innerWidth / 12);
        for (let i = 0; i < pCount; i++) {
            particles.push(new Orb());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    createOrbs();
    animate();
})();

// --- Glitch Navigation Effect (GSAP) ---
class NavigationEffect {
  constructor(navigation) {
    this.previous = null;
    this.current = null;
    this.navigation = navigation;
    if(!this.navigation) return;
    this.anchors = this.navigation.querySelectorAll("a.nav-glitch-link");

    this.anchors.forEach((anchor) => {
      // Setup Initial Hover / active logic
      anchor.addEventListener("mouseenter", () => {
          if(!anchor.classList.contains('active')) {
              this.handleHover(anchor);
          }
      });
      anchor.addEventListener("mouseleave", () => {
          if(!anchor.classList.contains('active')) {
              this.handleLeave(anchor);
          }
      });
      anchor.addEventListener("click", (e) => {
        this.handlePrevious();
        this.handleCurrent(anchor);
      });
    });
  }

  animate(node, animationConfig = {}) {
    if(node && node.length > 0) gsap.to(node, animationConfig);
  }

  handleHover(current) {
    const blueNode = current.querySelectorAll(".blue-icon");
    const pinkNode = current.querySelectorAll(".pink-icon");
    this.animate(blueNode, { duration: 0.3, x: -3, opacity: 0.8, ease: "power1.out" });
    this.animate(pinkNode, { duration: 0.3, x: 3, opacity: 0.8, ease: "power1.out" });
  }

  handleLeave(current) {
    const blueNode = current.querySelectorAll(".blue-icon");
    const pinkNode = current.querySelectorAll(".pink-icon");
    this.animate(blueNode, { duration: 0.3, x: 10, opacity: 0, ease: "power1.in" });
    this.animate(pinkNode, { duration: 0.3, x: -10, opacity: 0, ease: "power1.in" });
  }

  handleCurrent(current) {
    this.current = current;
    this.current.classList.add("active");
    const blueNode = this.current.querySelectorAll(".blue-icon");
    const pinkNode = this.current.querySelectorAll(".pink-icon");

    this.animate(blueNode, {
      duration: 1.6,
      ease: "elastic.out(1.4, 0.1)",
      x: 0,
      opacity: 1
    });

    this.animate(pinkNode, {
      duration: 1.6,
      ease: "elastic.out(1.4, 0.1)",
      x: 0,
      opacity: 1
    });
  }

  handlePrevious() {
    this.previous = document.querySelector(".nav-glitch-link.active");
    if (this.previous) {
      this.previous.classList.remove("active");
      const blueNode = this.previous.querySelectorAll(".blue-icon");
      const pinkNode = this.previous.querySelectorAll(".pink-icon");

      gsap.killTweensOf([blueNode, pinkNode]);

      this.animate(blueNode, {
        duration: 0.2,
        ease: "power1.out",
        x: 10,
        opacity: 0
      });

      this.animate(pinkNode, {
        duration: 0.2,
        ease: "power2.inOut",
        x: -10,
        opacity: 0
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
    // Small delay to ensure lucide icons are rendered before GSAP grabs them
    setTimeout(() => {
        new NavigationEffect(document.getElementById("glitch-nav"));
    }, 100);
});
