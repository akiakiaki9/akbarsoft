"use client";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function Join() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        theme: "WANT TO JOIN TO TEAM",
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("https://formspree.io/f/mpwaljag", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setIsOpen(false), 2000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div className="join">
            <div className="join-blok">
                <p className="join-blok__p-1">Join Us</p>
                <h1>Interested in joining our team?</h1>
                <p className="join-blok__p-2">
                    Be part of a dynamic, innovative environment where creativity meets
                    technology. Let's build the future together!
                </p>
                <button className="grad-button" onClick={() => setIsOpen(true)}>
                    CONTACT US
                </button>
            </div>

            {isOpen && (
                <div className="join-modal-overlay" onClick={() => setIsOpen(false)}>
                    <div className="join-modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="join-modal-content__header">
                            <h2>Contact Us</h2>
                            <IoCloseSharp className="join__close" onClick={() => setIsOpen(false)} />
                        </div>
                        <p>Leave your details, and we will get back to you soon!</p>
                        <form className="join-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                minLength={3}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="About you"
                                value={formData.message}
                                onChange={handleChange}
                                minLength={10}
                                required
                            ></textarea>
                            <button className="grad-button" type="submit">
                                {status === "loading" ? "Sending..." : "Send"}
                            </button>
                            {status === "success" && <p className="success-msg">Message sent successfully!</p>}
                            {status === "error" && <p className="error-msg">Something went wrong. Try again!</p>}
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};