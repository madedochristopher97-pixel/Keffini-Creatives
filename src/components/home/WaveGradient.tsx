import { useEffect, useRef } from 'react'
import { WAVE_FRAGMENT } from './waveShader'

// Same settings the original Framer hero used
const COLORS = [[255, 54, 36], [74, 88, 176], [255, 174, 0], [226, 158, 255]]
const U = { u_blendAmount: 0.54, u_maskSoftness: 0.74, u_seed: 32, u_waveAmplitude: 2.1, u_waveAngle: 105, u_waveFreqX: 0.9, u_waveFreqY: 6, u_waveSpeed: 1.5 }

const VERT = `#version 300 es
in vec2 p; out vec2 v_uv;
void main(){ v_uv = p * 0.5 + 0.5; gl_Position = vec4(p, 0.0, 1.0); }`

const FRAG_HEAD = `#version 300 es
precision highp float;
in vec2 v_uv; out vec4 fragColor;
uniform vec2 u_resolution; uniform float u_time;
uniform float u_blendAmount, u_maskSoftness, u_seed, u_waveAmplitude, u_waveAngle, u_waveFreqX, u_waveFreqY, u_waveSpeed;
uniform vec4 u_colors[4]; const int u_colors_length = 4;
`

/** WebGL2 wave-gradient background (the shader from the Framer hero). Renders at half resolution; static frame for reduced motion. */
export default function WaveGradient({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = ref.current
    const gl = canvas?.getContext('webgl2', { antialias: false, alpha: false })
    if (!canvas || !gl) return
    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!
      gl.shaderSource(s, src); gl.compileShader(s)
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.warn(gl.getShaderInfoLog(s)); return null }
      return s
    }
    const vs = compile(gl.VERTEX_SHADER, VERT), fs = compile(gl.FRAGMENT_SHADER, FRAG_HEAD + WAVE_FRAGMENT)
    if (!vs || !fs) return
    const prog = gl.createProgram()!
    gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { console.warn(gl.getProgramInfoLog(prog)); return }
    gl.useProgram(prog)
    const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)
    for (const [k, v] of Object.entries(U)) gl.uniform1f(gl.getUniformLocation(prog, k), v)
    gl.uniform4fv(gl.getUniformLocation(prog, 'u_colors'), COLORS.flatMap(c => [c[0] / 255, c[1] / 255, c[2] / 255, 1]))
    const uRes = gl.getUniformLocation(prog, 'u_resolution'), uTime = gl.getUniformLocation(prog, 'u_time')

    const resize = () => {
      const w = Math.max(2, Math.round(canvas.clientWidth * 0.5)), h = Math.max(2, Math.round(canvas.clientHeight * 0.5))
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h }
      gl.viewport(0, 0, w, h); gl.uniform2f(uRes, w, h)
    }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0, visible = true
    const t0 = performance.now()
    const draw = (now: number) => {
      resize()
      gl.uniform1f(uTime, reduce ? 4 : (now - t0) / 1000)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
      if (!reduce && visible) raf = requestAnimationFrame(draw)
    }
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      cancelAnimationFrame(raf)
      if (visible) raf = requestAnimationFrame(draw)
    })
    io.observe(canvas)
    raf = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(raf); io.disconnect() }
  }, [])
  return <canvas ref={ref} className={className} aria-hidden="true" />
}
