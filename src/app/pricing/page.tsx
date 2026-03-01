"use client";

import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#ff3366] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl w-full z-10"
            >
                <div className="text-center mb-16">
                    <Link href="/" className="inline-block px-4 py-1.5 rounded-full bg-[#ffffff10] border border-[#ffffff20] mb-6 text-xs md:text-sm font-medium tracking-widest uppercase text-gray-300 hover:text-white hover:bg-[#ffffff20] transition-colors">
                        ← Back to Aerosissor
                    </Link>
                    <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">Transparent <span className="text-[#ff3366]">Pricing</span></h1>
                    <p className="text-xl text-gray-400">Simple, predictable pricing for long-form gaming content.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Singular Edit Plan */}
                    <div className="bg-[#0f0f0f] border border-[#ffffff10] rounded-3xl p-10 flex flex-col shadow-2xl relative overflow-hidden group hover:border-[#ffffff20] transition-all">
                        <h2 className="text-2xl font-bold mb-2">Long-Form Edit</h2>
                        <p className="text-gray-400 text-sm mb-8 h-10">Starting from up to 10 minutes of edited video, with raw footage of 60 minutes or less.</p>

                        <div className="mb-8 flex items-baseline gap-2">
                            <span className="text-5xl font-black text-white">$25</span>
                            <span className="text-gray-500 font-medium">starting</span>
                        </div>

                        <ul className="space-y-4 mb-10 flex-grow">
                            <li className="flex items-start gap-3">
                                <Check size={20} className="text-[#ff3366] shrink-0 mt-0.5" />
                                <span className="text-gray-300">Up to 10 mins polished edit</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check size={20} className="text-[#ff3366] shrink-0 mt-0.5" />
                                <span className="text-gray-300">Up to 60 mins raw footage</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check size={20} className="text-[#ff3366] shrink-0 mt-0.5" />
                                <span className="text-gray-300">1 Revision Included</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check size={20} className="text-[#ff3366] shrink-0 mt-0.5" />
                                <span className="text-gray-300">High-retention structure</span>
                            </li>
                        </ul>

                        <div className="p-4 bg-[#ff3366]/10 border border-[#ff3366]/20 rounded-xl mb-8 flex items-center gap-3">
                            <Info size={18} className="text-[#ff3366]" />
                            <p className="text-xs text-[#ff3366] font-medium tracking-wide">100% upfront payment required.</p>
                        </div>

                        <a href="/#contact" className="w-full block bg-white text-black font-semibold text-center py-4 rounded-xl hover:bg-gray-200 transition-colors">
                            Request Edit
                        </a>
                    </div>

                    {/* Retainer Plan */}
                    <div className="bg-gradient-to-b from-[#ff3366]/10 to-[#0f0f0f] border border-[#ff3366]/30 rounded-3xl p-10 flex flex-col shadow-[0_0_50px_rgba(255,51,102,0.1)] relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#ff3366] to-[#ff8c42]"></div>

                        <div className="absolute top-8 right-8 px-3 py-1 bg-[#ff3366] text-white text-xs font-bold rounded-full uppercase tracking-widest">
                            Creator
                        </div>

                        <h2 className="text-2xl font-bold mb-2">Monthly Retainer</h2>
                        <p className="text-gray-400 text-sm mb-8 h-10">For series-based creators who want consistent long-form uploads.</p>

                        <div className="mb-8 flex flex-col">
                            <span className="text-4xl font-black text-white">Custom Pricing</span>
                            <span className="text-[#ff3366] font-medium mt-1">Paid monthly in advance</span>
                        </div>

                        <ul className="space-y-4 mb-10 flex-grow">
                            <li className="flex items-start gap-3">
                                <Check size={20} className="text-[#ff3366] shrink-0 mt-0.5" />
                                <span className="text-gray-300">Consistent upload schedule</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check size={20} className="text-[#ff3366] shrink-0 mt-0.5" />
                                <span className="text-gray-300">Established workflow & style</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check size={20} className="text-[#ff3366] shrink-0 mt-0.5" />
                                <span className="text-gray-300">Priority delivery handling</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check size={20} className="text-[#ff3366] shrink-0 mt-0.5" />
                                <span className="text-gray-300">Direct communication</span>
                            </li>
                        </ul>

                        <div className="mt-auto">
                            <p className="text-xs text-center text-gray-500 italic mb-6">
                                *Final pricing depends on footage length and complexity.
                            </p>
                            <a href="/#contact" className="w-full block bg-[#ff3366] text-white font-semibold text-center py-4 rounded-xl hover:bg-[#ff1a53] transition-colors shadow-[0_0_30px_rgba(255,51,102,0.3)] hover:shadow-[0_0_40px_rgba(255,51,102,0.5)]">
                                Discuss Retainer
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
