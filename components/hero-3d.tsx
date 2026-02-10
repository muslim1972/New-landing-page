"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { Monitor, Cpu, Code2, BrainCircuit } from "lucide-react"

export default function Hero3D() {
    const containerRef = useRef<HTMLDivElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)
    const [activeIcon, setActiveIcon] = useState(0)

    useEffect(() => {
        if (!containerRef.current) return

        // Scene Setup
        const scene = new THREE.Scene()
        scene.fog = new THREE.FogExp2(0x020617, 0.1)

        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.z = 6

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        // Check if canvas already exists to avoid duplication on strict mode re-renders
        const existingCanvas = containerRef.current.querySelector('canvas')
        if (existingCanvas) {
            containerRef.current.removeChild(existingCanvas)
        }
        containerRef.current.appendChild(renderer.domElement)

        // Textures
        const createCharTexture = (char: string) => {
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')
            if (!ctx) return new THREE.Texture()

            canvas.width = 64; canvas.height = 64
            ctx.fillStyle = '#38bdf8'
            ctx.font = 'Bold 45px monospace'
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText(char, 32, 32)
            return new THREE.CanvasTexture(canvas)
        }

        const texture0 = createCharTexture('0')
        const texture1 = createCharTexture('1')

        // Particles
        const geometry0 = new THREE.BufferGeometry()
        const geometry1 = new THREE.BufferGeometry()
        const pos0 = [], pos1 = []
        const count = 1200

        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 25
            const y = (Math.random() - 0.5) * 25
            const z = (Math.random() - 0.5) * 25
            if (Math.random() > 0.5) pos0.push(x, y, z)
            else pos1.push(x, y, z)
        }

        geometry0.setAttribute('position', new THREE.Float32BufferAttribute(pos0, 3))
        geometry1.setAttribute('position', new THREE.Float32BufferAttribute(pos1, 3))

        const mat0 = new THREE.PointsMaterial({ size: 0.2, map: texture0, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false })
        const mat1 = new THREE.PointsMaterial({ size: 0.2, map: texture1, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false })

        const particles0 = new THREE.Points(geometry0, mat0)
        const particles1 = new THREE.Points(geometry1, mat1)

        scene.add(particles0)
        scene.add(particles1)

        // Animation Loop
        let targetX = 0, targetY = 0
        let animationId: number

        const animate = () => {
            animationId = requestAnimationFrame(animate)
            const time = Date.now() * 0.0002

            // Rotate particles
            particles0.rotation.y += 0.0005
            particles1.rotation.y += 0.001

            // Wave movement
            const positions0 = particles0.geometry.attributes.position.array as Float32Array
            for (let i = 1; i < positions0.length; i += 3) {
                positions0[i] -= 0.005 + (Math.sin(time + i) * 0.002)
                if (positions0[i] < -12) positions0[i] = 12
            }
            particles0.geometry.attributes.position.needsUpdate = true

            const positions1 = particles1.geometry.attributes.position.array as Float32Array
            for (let i = 1; i < positions1.length; i += 3) {
                positions1[i] -= 0.005 + (Math.sin(time + i) * 0.002)
                if (positions1[i] < -12) positions1[i] = 12
            }
            particles1.geometry.attributes.position.needsUpdate = true

            // Camera sway
            camera.position.x += (targetX - camera.position.x) * 0.02
            camera.position.y += (-targetY - camera.position.y) * 0.02
            camera.lookAt(scene.position)

            renderer.render(scene, camera)
        }

        animate()

        // Event Listeners
        const handleMove = (x: number, y: number) => {
            if (!cardRef.current) return
            const rotY = ((x - window.innerWidth / 2) / window.innerWidth) * 40
            const rotX = ((y - window.innerHeight / 2) / window.innerHeight) * -40

            cardRef.current.style.setProperty('--rotate-x', `${rotX}deg`)
            cardRef.current.style.setProperty('--rotate-y', `${rotY}deg`)

            targetX = x * 0.0005
            targetY = y * 0.0005
        }

        const mouseMoveHandler = (e: MouseEvent) => handleMove(e.clientX, e.clientY)
        const touchMoveHandler = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                handleMove(e.touches[0].clientX, e.touches[0].clientY)
            }
        }
        const resizeHandler = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener('mousemove', mouseMoveHandler)
        window.addEventListener('touchmove', touchMoveHandler)
        window.addEventListener('resize', resizeHandler)

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
            window.removeEventListener('touchmove', touchMoveHandler)
            window.removeEventListener('resize', resizeHandler)
            cancelAnimationFrame(animationId)
            if (containerRef.current && renderer.domElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                containerRef.current.removeChild(renderer.domElement)
            }
            geometry0.dispose()
            geometry1.dispose()
            mat0.dispose()
            mat1.dispose()
        }
    }, [])

    // Icon Carousel Interval
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIcon(prev => (prev + 1) % 4)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative w-full h-screen overflow-hidden bg-[#020617] font-sans">
            <div id="canvas-container" ref={containerRef} className="absolute inset-0 z-0" />

            <div
                ref={cardRef}
                className="content-overlay absolute top-1/2 left-1/2 w-[90%] max-w-[400px] p-10 text-center text-white z-10 bg-slate-900/70 rounded-3xl backdrop-blur-md border border-sky-400/40 shadow-2xl transition-transform duration-100 ease-out"
                style={{
                    transform: 'translate(-50%, -50%) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))',
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                }}
            >
                <div className="icon-carousel h-20 mb-5 flex justify-center items-center relative">
                    <BrainCircuit className={`absolute w-16 h-16 text-sky-400 transition-all duration-700 ${activeIcon === 0 ? 'opacity-100 scale-100 translate-z-12' : 'opacity-0 scale-50 translate-z-5'}`} />
                    <Monitor className={`absolute w-16 h-16 text-sky-400 transition-all duration-700 ${activeIcon === 1 ? 'opacity-100 scale-100 translate-z-12' : 'opacity-0 scale-50 translate-z-5'}`} />
                    <Code2 className={`absolute w-16 h-16 text-sky-400 transition-all duration-700 ${activeIcon === 2 ? 'opacity-100 scale-100 translate-z-12' : 'opacity-0 scale-50 translate-z-5'}`} />
                    <Cpu className={`absolute w-16 h-16 text-sky-400 transition-all duration-700 ${activeIcon === 3 ? 'opacity-100 scale-100 translate-z-12' : 'opacity-0 scale-50 translate-z-5'}`} />
                </div>

                <h1 className="text-3xl font-bold m-0 bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shine translate-z-8">
                    هندسة الحلول الذكية
                </h1>
                <p className="text-lg text-slate-400 mt-4 translate-z-5">
                    تحويل الأفكار المعقدة إلى واقع رقمي بسيط.
                </p>
            </div>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sky-400/40 text-xs tracking-[2px] z-20">
                تفاعل ثلاثي الأبعاد • 010101
            </div>
        </section>
    )
}
