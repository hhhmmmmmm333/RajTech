"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react"

export default function ContactUs() {
    return (
        <section id="contact" className="py-24 bg-[#0b0e11] relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 right-1/2 w-[600px] h-[600px] bg-[#fcd535]/5 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fcd535]/10 border border-[#fcd535]/20 text-[#fcd535] text-xs font-bold uppercase tracking-wider mb-6">
                                <MessageSquare size={14} />
                                Get In Touch
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Contact <span className="text-[#fcd535]">Our Experts</span></h2>
                            <p className="text-lg text-[#848e9c] mb-12 leading-relaxed">
                                Have questions about your wallet security or our analysis reports? Our 24/7 specialized support team is here to help you navigate the blockchain safely.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 rounded-2xl bg-[#1e2329] flex items-center justify-center shrink-0 border border-white/5 group-hover:border-[#fcd535]/30 transition-all text-[#fcd535]">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-2 text-lg">Phoneline Support (India)</h4>
                                        <div className="space-y-1">
                                            <p className="text-[#848e9c] text-base hover:text-white transition-colors cursor-pointer">+91 98765 43210</p>
                                            <p className="text-[#848e9c] text-base hover:text-white transition-colors cursor-pointer">+91 91234 56789</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 rounded-2xl bg-[#1e2329] flex items-center justify-center shrink-0 border border-white/5 group-hover:border-[#fcd535]/30 transition-all text-[#fcd535]">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-2 text-lg">Email Inquiry</h4>
                                        <p className="text-[#848e9c] text-base hover:text-white transition-colors cursor-pointer">support@binance-analysis.com</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 rounded-2xl bg-[#1e2329] flex items-center justify-center shrink-0 border border-white/5 group-hover:border-[#fcd535]/30 transition-all text-[#fcd535]">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-2 text-lg">Regional Office</h4>
                                        <p className="text-[#848e9c] text-base">Level 15, Tech Park, Mumbai, MH, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#1e2329] p-8 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl"
                        >
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#848e9c] uppercase tracking-wider ml-1">Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full bg-[#0b0e11] border border-white/5 rounded-xl py-4 px-6 text-white outline-none focus:border-[#fcd535]/50 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#848e9c] uppercase tracking-wider ml-1">Email</label>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full bg-[#0b0e11] border border-white/5 rounded-xl py-4 px-6 text-white outline-none focus:border-[#fcd535]/50 transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#848e9c] uppercase tracking-wider ml-1">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="Security Concern / Feedback"
                                        className="w-full bg-[#0b0e11] border border-white/5 rounded-xl py-4 px-6 text-white outline-none focus:border-[#fcd535]/50 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#848e9c] uppercase tracking-wider ml-1">Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Describe your inquiry details..."
                                        className="w-full bg-[#0b0e11] border border-white/5 rounded-xl py-4 px-6 text-white outline-none focus:border-[#fcd535]/50 transition-all resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full gradient-bg px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 shadow-lg shadow-[#fcd535]/10 flex items-center justify-center gap-3 group transition-all"
                                >
                                    Send Message
                                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
