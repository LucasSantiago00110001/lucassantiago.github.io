import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function About() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a);

    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      100
    );
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    mountRef.current.innerHTML = '';
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(1, 0.35, 160, 32);
    const material = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      metalness: 0.65,
      roughness: 0.3,
    });
    const knot = new THREE.Mesh(geometry, material);
    scene.add(knot);

    const glow = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.8, 0),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true, transparent: true, opacity: 0.15 })
    );
    scene.add(glow);

    const ambient = new THREE.AmbientLight(0xffffff, 1.5);
    const point = new THREE.PointLight(0xffffff, 40);
    point.position.set(3, 3, 4);
    scene.add(ambient, point);

    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      knot.rotation.x += 0.006;
      knot.rotation.y += 0.01;
      glow.rotation.y -= 0.004;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto grid min-h-screen w-full max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-muted-foreground">
            About Me
          </p>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Desenvolvedor júnior focado em Node.js, Web e Flutter
          </h1>
          <p className="max-w-xl text-lg leading-8 text-muted-foreground">
            Gosto de construir interfaces modernas, APIs bem organizadas e experiências
            mobile com Flutter. Estou em constante evolução para entregar soluções limpas,
            rápidas e funcionais.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="text-sm text-muted-foreground">Stack principal</p>
              <p className="mt-2 font-medium">Node.js • TypeScript • React • Flutter</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="text-sm text-muted-foreground">Foco atual</p>
              <p className="mt-2 font-medium">Backend, frontend e apps mobile</p>
            </div>
          </div>
        </div>

        <div className="relative h-[420px] overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
          <div ref={mountRef} className="h-full w-full" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/20 via-transparent to-transparent" />
        </div>
      </section>
    </main>
  );
}