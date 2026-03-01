"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            channelLink: formData.get("channelLink"),
            budget: formData.get("budget"),
            helpText: formData.get("helpText"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Error("Failed to send message.");
            }

            setIsSuccess(true);
            (e.target as HTMLFormElement).reset();
        } catch (err: any) {
            setError(err.message || "Something went wrong.");
        } finally {
            setIsSubmitting(false);
            // Reset success state after 5 seconds
            if (isSuccess || !error) {
                setTimeout(() => setIsSuccess(false), 5000);
            }
        }
    };

    return (
        <div className="bg-[#0f0f0f] border border-[#ffffff10] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#ff3366] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

            <div className="mb-10 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Let&apos;s Work Together</h2>
                <p className="text-gray-400 text-lg">
                    If you&apos;re a gaming creator looking for clean, focused long-form editing, feel free to reach out. I&apos;m happy to discuss your content and see if we&apos;re a good fit.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300">Name <span className="text-[#ff3366]">*</span></label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ff3366] focus:border-transparent transition-all outline-none text-white"
                            placeholder="Your name"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">Email <span className="text-[#ff3366]">*</span></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ff3366] focus:border-transparent transition-all outline-none text-white"
                            placeholder="your@email.com"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="channelLink" className="text-sm font-medium text-gray-300">Channel Link</label>
                        <input
                            type="url"
                            id="channelLink"
                            name="channelLink"
                            className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ff3366] focus:border-transparent transition-all outline-none text-white"
                            placeholder="https://youtube.com/..."
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="budget" className="text-sm font-medium text-gray-300">Budget</label>
                        <input
                            type="text"
                            id="budget"
                            name="budget"
                            className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ff3366] focus:border-transparent transition-all outline-none text-white"
                            placeholder="e.g. $50/video"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="helpText" className="text-sm font-medium text-gray-300">What do you need help with? <span className="text-[#ff3366]">*</span></label>
                    <textarea
                        id="helpText"
                        name="helpText"
                        required
                        rows={4}
                        className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ff3366] focus:border-transparent transition-all outline-none text-white resize-y"
                        placeholder="Tell me about your videos, style, and goals..."
                    ></textarea>
                </div>

                {error && (
                    <div className="text-red-500 text-sm bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                        {error}
                    </div>
                )}

                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={isSubmitting || isSuccess}
                        className={`w-full md:w-auto px-8 py-4 rounded-xl flex items-center justify-center space-x-2 font-semibold transition-all ${isSuccess ? 'bg-green-600 text-white' : 'bg-white text-black hover:bg-gray-200'} disabled:opacity-70 disabled:cursor-not-allowed`}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 size={20} className="animate-spin" />
                                <span>Sending...</span>
                            </>
                        ) : isSuccess ? (
                            <>
                                <CheckCircle size={20} />
                                <span>Message Sent!</span>
                            </>
                        ) : (
                            <>
                                <Send size={20} />
                                <span>Send Message</span>
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
