import {forwardRef, Suspense, useEffect, useState} from "react";
import emailjs from '@emailjs/browser';
import {RiArrowRightUpLine, RiCheckLine, RiGithubFill, RiLinkedinFill, RiMailLine} from "react-icons/ri";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import Avatar from "../components/Avatar.jsx";

const Contact = forwardRef((props, ref) => {
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);
    const [animationName, setAnimationName] = useState("idle");
    const [copied, setCopied] = useState(false);

    const email = "aspasic21@gmail.com";

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${email}`;
        }
    };

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        if (statusMessage) {
            const timer = setTimeout(() => setStatusMessage(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [statusMessage]);

    const handleChange = ({target: {name, value}}) => {
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Aleksandar Spasic",
                    from_email: form.email,
                    to_email: 'aspasic21@gmail.com',
                    message: form.message
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )

            setLoading(false);
            setStatusMessage({ type: "success", text: "Your message has been sent!" });

            setForm({
                name: "",
                email: "",
                message: ""
            });

        } catch (error) {
            setLoading(false);
            console.log(error);
            setStatusMessage({ type: "error", text: "Something went wrong. Please try again." });
        }
    }

    return (
        <section ref={ref} className="c-space my-20 scroll-mt-20">
            <div className="min-h-96 grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
                <div>
                    <p className="eyebrow">Send a Signal &middot; Get in Touch</p>
                    <h3 className="head-text">Contact Me</h3>
                    <form onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">
                                Full Name
                            </span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                onPointerOver={() => setAnimationName('clapping')}
                                onFocus={() => setAnimationName('clapping')}
                                onPointerOut={() => setAnimationName('idle')}
                                required
                                className="field-input"
                                placeholder="Aleksandar Spasic"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">
                                Email
                            </span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                onPointerOver={() => setAnimationName('cheering')}
                                onFocus={() => setAnimationName('cheering')}
                                onPointerOut={() => setAnimationName('idle')}
                                required
                                className="field-input"
                                placeholder="aspasic21@gmail.com"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">
                                Message
                            </span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                onPointerOver={() => setAnimationName('dancing')}
                                onFocus={() => setAnimationName('dancing')}
                                onPointerOut={() => setAnimationName('idle')}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="I'd love to discuss an opportunity..."
                            />
                        </label>

                        <button
                            className="field-btn"
                            type="submit"
                            disabled={loading}
                            onPointerOver={() => setAnimationName('salute')}
                            onPointerOut={() => setAnimationName('idle')}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                            <RiArrowRightUpLine className="field-btn_arrow"/>
                        </button>

                        <p
                            role="status"
                            aria-live="polite"
                            className={`text-center text-sm min-h-[1.25rem] font-mono ${statusMessage ? (statusMessage.type === "success" ? "text-teal" : "text-rust") : ""}`}
                        >
                            {statusMessage?.text}
                        </p>
                    </form>

                    {/* Fallback hailing frequencies — for anyone who'd rather skip the form */}
                    <div className="mt-8 flex flex-col gap-3">
                        <p className="eyebrow">Or Send Word</p>
                        <div className="flex flex-wrap gap-3">
                            <button
                                type="button"
                                onClick={copyEmail}
                                aria-label={copied ? "Email address copied" : `Copy email address ${email}`}
                                className={`contact-link ${copied ? "border-gold/60 text-gold" : ""}`}
                            >
                                {copied ? <RiCheckLine className="w-5 h-5"/> : <RiMailLine className="w-5 h-5"/>}
                                {copied ? "Copied!" : email}
                            </button>
                            <a href="https://github.com/spasic21" target="_blank" rel="noreferrer" className="contact-link">
                                <RiGithubFill className="w-5 h-5"/> GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/aleksandar-spasic-628094a6" target="_blank" rel="noreferrer" className="contact-link">
                                <RiLinkedinFill className="w-5 h-5"/> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                <div className="work-canvas">
                    <Canvas>
                        <ambientLight intensity={7} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penubra={1} />
                        <directionalLight position={[10, 10, 10]} intensity={1} />
                        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                        <Suspense fallback={<CanvasLoader />}>
                            <Avatar position-y={-2} scale={2} animationName={animationName}/>
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </section>
    );
});

export default Contact;