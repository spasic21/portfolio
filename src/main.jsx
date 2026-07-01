import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import gsap from 'gsap'
import Flip from 'gsap/Flip'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import './index.css'
import App from './App.jsx'

gsap.registerPlugin(Flip, ScrollTrigger);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
    </StrictMode>
)
