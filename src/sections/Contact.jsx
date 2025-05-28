import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const formRef = useRef();
    const [loading, setLoading] = useState(false);

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
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-96 flex items-center flex-col">
                <div className="">
                    <h3 className="head-text">Contact Me</h3>
                    <p className="sub-text">
                        Hello
                    </p>
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
                                required
                                className="field-input"
                                placeholder="John Doe"
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
                                required
                                className="field-input"
                                placeholder="johndoe@gmail.com"
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
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Hi, I wanna give you a job..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default Contact;