import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function FluidImageHero() {
  const sectionRef = useRef(null); // Section ref for localized events
  const containerRef = useRef(null);
  const customCursorRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const customCursor = customCursorRef.current;
    if (!container || !section) return;

    let frameId;
    let isDisposed = false; 
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement); 

    // Mouse positions start in center default state
    const mouse = new THREE.Vector2(0.5, 0.5);
    const targetMouse = new THREE.Vector2(0.5, 0.5);
    
    const cursorDOM = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const targetCursorDOM = { x: window.innerWidth / 2, y: window.innerHeight / 2 }; 

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: new THREE.Texture() },
        uMouse: { value: mouse },
        uTime: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform sampler2D uTexture;
        uniform vec2 uMouse;
        uniform float uTime;

        void main() {
          vec2 uv = vUv; 
          vec2 baseWave = vec2(
            sin(uv.y * 4.0 + uTime * 0.8) * 0.005,
            cos(uv.x * 4.0 + uTime * 0.8) * 0.005
          );
          uv += baseWave; 
          vec2 diff = uv - uMouse;
          float dist = length(diff);
          float radius = 0.45;

          float influence = smoothstep(radius, 0.0, dist);
          vec2 displacement = normalize(diff + 0.0001) * influence * 0.08;
          uv += displacement; 
          vec2 rgbShift = displacement * 0.25 + baseWave * 0.1;

          float r = texture2D(uTexture, uv + rgbShift).r;
          float g = texture2D(uTexture, uv).g;
          float b = texture2D(uTexture, uv - rgbShift).b;

          vec3 color = vec3(r, g, b);
          float glow = influence * 0.15;
          color += glow;

          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh); 

    const loader = new THREE.TextureLoader();
    loader.load("/images/hero-bg.png", (texture) => {
      if (isDisposed) return;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      material.uniforms.uTexture.value = texture;
    });

    const startTime = performance.now(); 

    const animate = () => {
      frameId = requestAnimationFrame(animate); 
      
      // Smooth interpolation to target positioning
      mouse.x += (targetMouse.x - mouse.x) * 0.08; 
      mouse.y += (targetMouse.y - mouse.y) * 0.08;
      material.uniforms.uMouse.value.copy(mouse);  
      material.uniforms.uTime.value = (performance.now() - startTime) * 0.001;  

      if (customCursor) {
        cursorDOM.x += (targetCursorDOM.x - cursorDOM.x) * 0.1; 
        cursorDOM.y += (targetCursorDOM.y - cursorDOM.y) * 0.1;
        customCursor.style.transform = `translate3d(${cursorDOM.x}px, ${cursorDOM.y}px, 0) translate(-50%, -50%)`;
      }

      renderer.render(scene, camera);
    };

    frameId = requestAnimationFrame(animate); 

    // CRITICAL: Handlers are bound locally to the specific section bounding box
    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      
      // Calculate coordinates relative ONLY to this container
      targetMouse.x = (e.clientX - rect.left) / rect.width;
      targetMouse.y = 1 - (e.clientY - rect.top) / rect.height;

      targetCursorDOM.x = e.clientX;
      targetCursorDOM.y = e.clientY;
    };

    // When mouse leaves this specific section, smoothly reset values
    const handleMouseLeave = () => {
      // 0.5, 0.5 is the exact center (Effect neutral zone)
      targetMouse.x = 0.5;
      targetMouse.y = 0.5;
      
      if (customCursor) {
        customCursor.style.opacity = "0"; // Smooth fade out the trailing cursor glow
      }
    };

    const handleMouseEnter = () => {
      if (customCursor) {
        customCursor.style.opacity = "1"; // Fade back in instantly upon entrance
      }
    };

    const resize = () => {
      if (!container) return;
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    // Added event listeners locally to the section element instead of window
    section.addEventListener("mousemove", handleMouseMove, { passive: true });
    section.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    section.addEventListener("mouseenter", handleMouseEnter, { passive: true });
    window.addEventListener("resize", resize, { passive: true }); 

    return () => {
      isDisposed = true;
      cancelAnimationFrame(frameId);
      
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
      section.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("resize", resize); 

      mesh.geometry.dispose();
      material.dispose();
      if (material.uniforms.uTexture.value) {
        material.uniforms.uTexture.value.dispose();
      }
      renderer.dispose();
      
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen overflow-hidden bg-black w-full"
    > 
      {/* Background WebGL Viewport */}
      <div ref={containerRef} className="absolute inset-0 z-0" />  
      
      {/* Custom Section Bound Cursor */}
      <div
        ref={customCursorRef}
        className="pointer-events-none fixed top-0 left-0 z-50 h-32 w-32 rounded-full blur-3xl bg-white/20 mix-blend-screen will-change-transform invisible md:visible opacity-0 transition-opacity duration-500 ease-out"
        style={{
          transform: "translate3d(0,0,0) translate(-50%, -50%)",
        }}
      />

      {/* Main UI Header Contents */}
      <div className="relative z-10 flex h-full items-center px-6 md:px-10 pointer-events-none">
        <h1 className="text-white text-5xl md:text-[10rem] font-black leading-[1.2] md:leading-[1] uppercase select-none tracking-normal">
          Digital
          <br />
          Design
          <br />
          Experience
        </h1>
      </div>
    </section>
  );
}