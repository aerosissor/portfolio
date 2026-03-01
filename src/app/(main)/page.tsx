"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 md:px-6 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff3366] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#ffffff10] border border-[#ffffff20] mb-8"
          >
            <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-gray-300">
              Editing for YouTube Creators
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500"
          >
            Long-Form Gaming <br />
            <span className="text-[#ff3366] text-transparent bg-clip-text bg-gradient-to-r from-[#ff3366] to-[#ff8c42]">Video Editing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Clean, story-driven edits focused on pacing, immersion, and viewer retention.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a href="#contact" className="px-8 py-4 rounded-full bg-[#ff3366] text-white font-semibold text-lg hover:bg-[#ff1a53] hover:scale-105 active:scale-95 transition-all w-full sm:w-auto text-center transform shadow-[0_0_40px_rgba(255,51,102,0.4)]">
              Work With Me
            </a>
            <a href="/work" className="px-8 py-4 rounded-full bg-[#ffffff10] text-white font-semibold text-lg hover:bg-[#ffffff20] border border-[#ffffff10] hover:scale-105 active:scale-95 transition-all w-full sm:w-auto text-center transform">
              View Portfolio
            </a>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 border-t border-[#ffffff10] bg-[#050505]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-8 text-white"
          >
            I don&apos;t edit to impress — <span className="text-[#ff3366]">I edit to enhance.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 leading-relaxed font-sans"
          >
            Editing isn&apos;t about showing off effects. It&apos;t about making the creator the hero of the video. Every cut, sound, and movement exists for one reason: to make the story clearer, stronger, and easier to watch.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]/50 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
