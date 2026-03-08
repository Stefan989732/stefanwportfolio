'use client'

import { useState } from "react";
import { FaLinkedin, FaPhoneSquareAlt, } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";

export default function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(form)
        });
        alert("Message sent!");
    };

    return (
        <div className='px-3 text-[var(--text-primary)] grid md:grid-cols-2 sm-grid-cols-1 items-center gap-8'>

            <section className="bg-[var(--surface)]  rounded-xl shadow-xl/30 border-2 border-t-4 border-[var(--accent)] py-12">

                <div className="p-6">

                    <h1 className="font-semibold text-2xl mb-6">
                        contact
                    </h1>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        <input
                            type="text"
                            placeholder="Naam"
                            required
                            className="border p-3 rounded"
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            required
                            className="border p-3 rounded"
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />

                        <textarea
                            placeholder="Bericht"
                            required
                            className="border p-3 rounded h-32"
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                        />

                        <button
                            disabled
                            type="submit"
                            className="bg-[var(--accent)] bg-gray-400 text-white p-3 rounded"
                        >
                            Verstuur bericht
                        </button>

                    </form>

                </div>

            </section>

            <section className="bg-[var(--surface)] rounded-xl shadow-xl/30 border-2 border-t-4 border-[var(--accent)] py-12">
                <div className="p-4">

                    <p className="pb-4"><MdEmail className="inline h-8 w-8" />Stefan.wurpel@hotmail.com</p>
                    <p className="py-4"><a target="blank" href="https://www.linkedin.com/in/stefan-wurpel-4890bb215/"><FaLinkedin className="inline h-8 w-8" />Stefan Wurpel</a></p>
                    <p className="py-4"><FaPhoneSquareAlt className="inline h-8 w-8" /> +31681849719</p>
                    <p className="pt-4"><MdLocationPin className="inline h-8 w-8" /> Bergen op Zoom, Nederland</p>
                </div>
            </section>

        </div>
    )
}