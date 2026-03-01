"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "100 Days in Hardcore Survival",
        description: "A fast-paced, narrative-driven 100 days survival edit focused on high-stakes moments and smooth pacing. Watch time increased by 40% compared to channel average.",
        videoId: "dQw4w9WgXcQ", // Placeholder, user will replace
    },
    {
        title: "RPG Playthrough: The Final Boss",
        description: "Story-heavy edit with cinematic cuts and immersive sound design. Emphasizes character dialogue without losing viewer interest in slow sections.",
        videoId: "dQw4w9WgXcQ",
    },
    {
        title: "Stream Highlight: The Perfect Raid",
        description: "Distilled a 6-hour VOD into a highly engaging 20-minute highlight reel, maintaining the live energy while removing downtime.",
        videoId: "dQw4w9WgXcQ",
    }
];

export default function Work() {
    return (
        <div className="pt-32 pb-24 px-6 flex flex-col flex-1 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Selected <span className="text-[#ff3366]">Work</span></h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    A few examples that show my editing style, pacing, and approach to long-form gaming content.
                </p>
                <p className="text-sm text-gray-500 mt-4 italic">
                    *Note: These may include some self-initiated or recreated edits to demonstrate style.*
                </p>
            </motion.div>

            <div className="space-y-24">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center"
                    >
                        <div className={`w-full md:w-3/5 ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
                            <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#1a1a1a] border border-[#ffffff10] shadow-2xl group">
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity z-10 bg-black/20">
                                    <span className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-xs tracking-widest text-white/70 uppercase">Video Placeholder</span>
                                </div>
                                <iframe
                                    src={`https://www.youtube.com/embed/${project.videoId}?rel=0`}
                                    title={project.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full relative z-20"
                                ></iframe>
                            </div>
                        </div>

                        <div className={`w-full md:w-2/5 ${idx % 2 !== 0 ? 'md:order-1' : ''}`}>
                            <div className="flex flex-col">
                                <span className="text-[#ff3366] text-sm font-bold tracking-widest uppercase mb-2">Project 0{idx + 1}</span>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h2>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
