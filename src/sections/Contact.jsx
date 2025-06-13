import {Suspense, useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import {RiArrowRightUpLine} from "react-icons/ri";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import Avatar from "../components/Avatar.jsx";

const Contact = () => {

    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [animationName, setAnimationName] = useState("idle");

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = ({target: {name, value}}) => {
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Service and Template IDs are from EmailJS service.

        try {
            await emailjs.send('service_hetr3km',
                'template_8k6zafm',
                {
                    from_name: form.name,
                    to_name: "Aleksandar Spasic",
                    from_email: form.email,
                    to_email: 'aspasic21@gmail.com',
                    message: form.message
                },
                "95nlsr1n4b_1AB4D4"
            )

            setLoading(false);

            alert("Your message has ben sent!");

            setForm({
                name: "",
                email: "",
                message: ""
            });

        }catch (error) {
            setLoading(false);
            console.log(error);
            alert("Something went wrong!");
        }
    }

    return (
        <section className="c-space my-20 scroll-mt-20" id="contact">
            <div className="min-h-96 grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
                <div>
                    <h3 className="head-text">Contact Me</h3>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
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
                                placeholder="Hi, I wanna give you a job..."
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
};

export default Contact;