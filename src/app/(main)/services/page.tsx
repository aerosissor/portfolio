"use client";

import { motion } from "framer-motion";
import { MonitorPlay, Tent, Swords, BookOpen, Radio } from "lucide-react";

export default function Services() {
    const services = [
        { title: "Full Episodes", icon: <MonitorPlay size={32} />, desc: "Complete gameplay videos edited for maximum retention and clear narrative flow." },
        { title: "Survival Series", icon: <Tent size={32} />, desc: "Turning 100 days or long survival grinds into fast-paced, engaging stories." },
        { title: "RPG Playthroughs", icon: <Swords size={32} />, desc: "Balancing cinematic story beats with crucial character progression and combat." },
        { title: "Story-Based Gameplay", icon: <BookOpen size={32} />, desc: "Emphasizing dialogue, atmosphere, and tension for immersive single-player games." },
        { title: "Livestreams (VODs)", icon: <Radio size={32} />, desc: "Condensing hours of unedited stream footage into highly structured highlight videos." }
    ];

    return (
        <div className="pt-32 pb-24 px-6 flex flex-col flex-1 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-20 text-center"
            >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">How I Help <span className="text-[#ff3366]">Gaming Creators</span></h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    I specialize in transforming raw, unpolished gaming footage into a cohesive, high-retention journey for your audience.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
                {services.map((svc, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 * idx }}
                        className="group bg-[#0f0f0f] border border-[#ffffff0a] hover:border-[#ff3366]/50 rounded-3xl p-8 transition-all hover:bg-[#151515] hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(255,51,102,0.1)] relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff3366] rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></div>

                        <div className="w-16 h-16 rounded-2xl bg-[#ffffff0a] flex items-center justify-center text-[#ff3366] mb-6 group-hover:scale-110 transition-transform">
                            {svc.icon}
                        </div>

                        <h3 className="text-2xl font-bold mb-3">{svc.title}</h3>
                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                            {svc.desc}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Call to action connecting to services */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-24 p-10 bg-gradient-to-br from-[#101010] to-[#050505] border border-[#ffffff10] rounded-3xl text-center flex flex-col items-center"
            >
                <h2 className="text-3xl font-bold mb-4">Ready to upgrade your videos?</h2>
                <p className="text-gray-400 mb-8 max-w-xl">Whether it&apos;s a quick 10-minute highlight or a massive 100-day survival epic, I&apos;m ready to bring your vision to life.</p>
                <a href="/#contact" className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all w-full md:w-auto text-center">
                    Get a Quote
                </a>
            </motion.div>
        </div>
    );
}
