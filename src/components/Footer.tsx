"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp, Mail, Youtube } from "lucide-react";

const faqs = [
    {
        category: "General Services",
        questions: [
            { q: "What type of content do you edit?", a: "I edit long-form gaming videos for YouTube, including full episodes, survival series, RPG playthroughs, and story-driven gameplay content." },
            { q: "Do you edit YouTube Shorts, Reels, or TikToks?", a: "No. I specialize exclusively in long-form gaming content. This allows me to focus on pacing, storytelling, and immersion rather than short-form edits." },
            { q: "Why do you only focus on long-form videos?", a: "Long-form editing requires a different mindset—story structure, rhythm, and viewer retention over extended durations. This is where my workflow and strengths deliver the most value." },
            { q: "What games or genres do you work with?", a: "I work with most gaming genres including survival, RPG, sandbox, and story-based games. If you’re unsure whether your content is a fit, feel free to reach out." },
        ]
    },
    {
        category: "Portfolio & Experience",
        questions: [
            { q: "Are the videos on your portfolio client work?", a: "Some samples may include self-initiated edits or recreated gameplay edits created to demonstrate editing style, pacing, and storytelling approach." },
            { q: "Do you work with small or new YouTube channels?", a: "Yes. You don’t need a large audience to work with me. I focus on quality editing and consistency, regardless of channel size." },
            { q: "Do you guarantee views or growth?", a: "No. While good editing improves watchability and retention, channel growth depends on many factors such as content, consistency, thumbnails, and audience interest." },
        ]
    },
    {
        category: "Workflow & Process",
        questions: [
            { q: "How does the editing process work?", a: "1. You share raw footage via Google Drive, Dropbox, or a similar platform\n2. I edit the video based on the agreed scope\n3. You review and send timestamped revision notes\n4. Final delivery after revisions are completed" },
            { q: "How do I send you my raw footage?", a: "You can upload your footage to Google Drive, Dropbox, OneDrive, or any cloud service and share the download link." },
            { q: "How will I receive the final edited video?", a: "The final video will be delivered via Google Drive or a downloadable link in high-quality format, ready for YouTube upload." },
            { q: "What video format do you deliver?", a: "Final videos are delivered in standard YouTube-ready formats (MP4, H.264/H.265 unless otherwise requested)." },
        ]
    },
    {
        category: "Revisions & Feedback",
        questions: [
            { q: "How many revisions do you offer?", a: "Each project includes up to 1 revision round, provided the feedback stays within the original scope." },
            { q: "What counts as a revision?", a: "Revisions include changes like pacing adjustments, cut refinements, audio balance, or timing tweaks. Major creative changes or new directions may require additional charges." },
            { q: "How should I send revision feedback?", a: "Timestamped notes (e.g., “12:45 – cut tighter” or “18:10 – reduce music”) are preferred for faster turnaround." },
        ]
    },
    {
        category: "Pricing & Payments",
        questions: [
            { q: "How much do you charge?", a: "Pricing depends on video length, footage complexity, and editing requirements. Starting prices are listed on the website, with final quotes shared before work begins." },
            { q: "Do you require payment before starting?", a: "Yes. Smaller projects require 100% upfront payment. Larger projects require 50% upfront and 50% before final delivery." },
            { q: "Why do you take advance payment?", a: "Advance payment secures project time and protects both parties by confirming commitment before work begins." },
            { q: "What payment methods do you accept?", a: "Payments are accepted via PayPal and other agreed online payment methods depending on client location." },
            { q: "Are payments refundable?", a: "Payments are non-refundable once work has started. However, revisions are provided to ensure satisfaction within the agreed scope." },
        ]
    },
    {
        category: "Monthly & Recurring Clients",
        questions: [
            { q: "Do you offer monthly or recurring plans?", a: "Yes. Monthly retainer plans are available for creators who upload consistently and need ongoing long-form editing." },
            { q: "How does a monthly retainer work?", a: "You pay once at the beginning of the month, and I edit a fixed number of long-form videos during that period based on our agreement." },
            { q: "Do I need to repeat the process every time for recurring work?", a: "No. Once we establish your style, format, and workflow, future edits follow the same structure, making the process faster and smoother." },
        ]
    },
    {
        category: "Turnaround & Availability",
        questions: [
            { q: "What is your turnaround time?", a: "Turnaround time depends on video length and current workload. Estimated delivery time is shared before starting each project." },
            { q: "Do you offer urgent or priority delivery?", a: "Priority delivery may be available for an additional fee, depending on availability." },
        ]
    },
    {
        category: "Legal & Safety",
        questions: [
            { q: "Will my content remain private?", a: "Yes. Your raw footage and final videos are treated as confidential and will not be shared without permission." },
            { q: "Do you use my content for promotion?", a: "Only with your explicit permission. Otherwise, your content remains private." },
            { q: "Do you offer contracts?", a: "Yes. A simple service agreement is provided to outline scope, payment, and delivery terms." },
        ]
    }
];

export default function Footer() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleFaq = (idx: string) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <footer className="bg-[#050505] border-t border-[#ffffff10] pt-20 pb-10 mt-auto">
            <div className="max-w-4xl mx-auto px-6 mb-20">
                <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>

                <div className="space-y-8">
                    {faqs.map((section, sIdx) => (
                        <div key={sIdx}>
                            <h3 className="text-xl font-semibold mb-4 text-[#ff3366]">{section.category}</h3>
                            <div className="space-y-3">
                                {section.questions.map((faq, qIdx) => {
                                    const id = `${sIdx}-${qIdx}`;
                                    const isOpen = openIndex === id;
                                    return (
                                        <div key={qIdx} className="border border-[#ffffff10] rounded-xl overflow-hidden bg-[#0a0a0a]">
                                            <button
                                                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                                                onClick={() => toggleFaq(id)}
                                            >
                                                <span className="font-medium pr-4">{faq.q}</span>
                                                {isOpen ? <ChevronUp size={20} className="text-[#ff3366] flex-shrink-0" /> : <ChevronDown size={20} className="text-gray-500 flex-shrink-0" />}
                                            </button>

                                            {isOpen && (
                                                <div className="px-6 pb-5 text-gray-400 whitespace-pre-line text-sm leading-relaxed">
                                                    {faq.a}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-[#ffffff10] flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-xl font-bold tracking-tight text-white">Aerosissor</h2>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-sans">
                        Long-Form Gaming Video Editor
                    </p>
                </div>

                <div className="flex items-center space-x-6">
                    <a href="mailto:aerosissor.no.1@gmail.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                        <Mail size={16} />
                        aerosissor.no.1@gmail.com
                    </a>
                    <a href="https://www.youtube.com/@MeAerosissor" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#ff0000] transition-colors flex items-center gap-2 text-sm">
                        <Youtube size={16} />
                        YouTube
                    </a>
                </div>

                <div className="text-xs text-gray-600">
                    © {new Date().getFullYear()} Aerosissor. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
