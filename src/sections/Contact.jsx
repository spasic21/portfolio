import {forwardRef, Suspense, useEffect, useState} from "react";
import emailjs from '@emailjs/browser';
import {RiArrowRightUpLine} from "react-icons/ri";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import Avatar from "../components/Avatar.jsx";

const Contact = forwardRef((props, ref) => {
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);
    const [animationName, setAnimationName] = useState("idle");

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

                        {statusMessage && (
                            <p className={`text-center text-sm mt-2 ${statusMessage.type === "success" ? "text-green-400" : "text-red-400"}`}>
                                {statusMessage.text}
                            </p>
                        )}
                    </form>
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