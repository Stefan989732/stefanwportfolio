'use client'

import { useState } from "react";
import { FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = useState(false); // Add loading state

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true); // Start loading

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (data.success) {
                alert("Message sent successfully!");
                setForm({ name: "", email: "", message: "" }); // Reset form
            } else {
                alert("Failed: " + (data.error || "Unknown error"));
            }
        } catch (error) {
            alert("Network error. Please try again.");
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className='px-3 text-[var(--text-primary)] grid md:grid-cols-2 sm-grid-cols-1 items-center gap-8'>
            <section className="bg-[var(--surface)] rounded-xl shadow-xl/30 border-2 border-t-4 border-[var(--accent)] py-12">
                <div className="p-6">
                    <h1 className="font-semibold text-4xl pb-4">Contact</h1>
                    <p className="font-semibold text-xl mb-6 text-[var(--text-secondary)]">Neem gerust contact op, ik reageer meestal binnen 24 uur op emails.</p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Naam"
                            required
                            className="border p-3 rounded"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            disabled={loading} // Disable inputs during loading
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            required
                            className="border p-3 rounded"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            disabled={loading}
                        />

                        <textarea
                            placeholder="Bericht"
                            required
                            className="border p-3 rounded h-32"
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            disabled={loading}
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[var(--accent)] text-[var(--background)] p-3 rounded flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--accent)]/90 transition-all"
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Versturen...
                                </>
                            ) : (
                                "Verstuur bericht"
                            )}
                        </button>
                    </form>
                </div>
            </section>

            <section className="bg-[var(--surface)] rounded-xl shadow-xl/30 border-2 border-t-4 border-[var(--accent)] py-12">
                <div className="p-4">
                    <p className="pb-4"><MdEmail className="inline h-8 w-8" /> stefan.wurpel@hotmail.com</p>
                    <p className="py-4"><a target="blank" href="https://www.linkedin.com/in/stefan-wurpel-4890bb215/"><FaLinkedin className="inline h-8 w-8" /> Stefan Wurpel</a></p>
                    <p className="py-4"><FaPhoneSquareAlt className="inline h-8 w-8" /> +31 6 81849719</p>
                    <p className="pt-4"><MdLocationPin className="inline h-8 w-8" /> Bergen op Zoom, Nederland</p>
                </div>
            </section>
        </div>
    )
}
