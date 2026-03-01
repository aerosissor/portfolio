"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Volume2, VolumeX, Mail, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Header() {
    const pathname = usePathname();
    const [isPlaying, setIsPlaying] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio("/logo-sound.mp3");
        audioRef.current.volume = 0.5;

        const handleEnded = () => setIsPlaying(false);
        audioRef.current.addEventListener('ended', handleEnded);

        return () => {
            audioRef.current?.removeEventListener('ended', handleEnded);
        };
    }, []);

    const toggleSound = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsPlaying(false);
        } else {
            audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.error("Audio play failed:", e));
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-[#ffffff10]">
            <div className="max-w-7xl mx-auto px-4 md:px-6 h-24 flex items-center justify-between">

                {/* Left: Logo / Sound */}
                <div className="flex items-center w-auto md:w-1/3">
                    <button
                        onClick={toggleSound}
                        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#ffffff0a] hover:bg-[#ffffff15] transition-all border border-[#ffffff10] text-[#ff3366] overflow-hidden"
                        aria-label="Play signature sound"
                        title="Play signature sound"
                    >
                        <div className="absolute inset-0 bg-[#ff3366] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        {isPlaying ? <Volume2 size={20} className="animate-pulse" /> : <VolumeX size={20} />}
                    </button>
                </div>

                {/* Center: Brand */}
                <div className="flex flex-col items-center justify-center flex-1 w-auto md:w-1/3 text-center">
                    <Link href="/" className="flex flex-col items-center group px-2">
                        <h1 className="text-2xl md:text-[28px] font-bold tracking-tight text-white group-hover:text-[#ff3366] transition-colors leading-none">
                            Aerosissor
                        </h1>
                        <p className="text-[10px] md:text-xs text-gray-400 mt-2 uppercase tracking-[0.2em] font-sans">
                            Long-Form Gaming Video Editor
                        </p>
                    </Link>
                </div>

                {/* Right: Contact & Nav */}
                <div className="flex items-center justify-end w-auto md:w-1/3">
                    <nav className="hidden lg:flex items-center space-x-8 mr-8">
                        <Link href="/work" className={`text-sm tracking-wide transition-colors ${pathname === '/work' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Work</Link>
                        <Link href="/services" className={`text-sm tracking-wide transition-colors ${pathname === '/services' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Services</Link>
                        <Link href="/pricing" target="_blank" className={`text-sm tracking-wide transition-colors text-gray-400 hover:text-white`}>Pricing</Link>
                    </nav>

                    <Link href="/#contact" className="hidden md:flex items-center space-x-2 bg-white text-black px-6 py-2.5 rounded-full font-medium hover:bg-gray-200 transition-colors text-sm">
                        <span>Contact</span>
                    </Link>

                    {/* Mobile menu toggle */}
                    <button
                        className="md:hidden ml-4 text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-24 left-0 right-0 bg-[#0a0a0a] border-b border-[#ffffff10] p-6 flex flex-col space-y-4">
                    <Link href="/work" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-white">Work</Link>
                    <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-white">Services</Link>
                    <Link href="/pricing" target="_blank" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-white">Pricing</Link>
                    <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="bg-white text-black px-6 py-3 rounded-full font-medium text-center mt-4">Contact Me</Link>
                </div>
            )}
        </header>
    );
}
