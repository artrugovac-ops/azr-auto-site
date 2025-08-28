import type { Config } from "tailwindcss"
const config: Config = {content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],theme:{extend:{colors:{brand:"#0a0a0a",accent:{DEFAULT:"#D9D9D9",dark:"#9CA3AF",light:"#F3F4F6"}},boxShadow:{soft:"0 12px 30px rgba(0,0,0,.08)"}}},plugins:[]}
export default config
