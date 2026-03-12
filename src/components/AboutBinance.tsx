"use client"

import { motion } from "framer-motion"
import { Target, History, Rocket, Heart } from "lucide-react"

export default function AboutBinance() {
    return (
        <section id="about" className="py-24 bg-[#0b0e11] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fcd535]/10 border border-[#fcd535]/20 text-[#fcd535] text-xs font-bold uppercase tracking-wider mb-6">
                            <History size={14} />
                            Our Journey
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Our <span className="text-[#fcd535]">Story</span></h2>
                        <div className="space-y-6 text-lg text-[#848e9c] leading-relaxed">
                            <p>
                                Founded in 2023, BnbScan emerged from a simple yet ambitious goal: to restore trust in the decentralized world. As the Web3 landscape grew, so did the complexity of threats, leaving many users vulnerable.
                            </p>
                            <p>
                                What started as a specialized research project into smart contract vulnerabilities has evolved into the world's most trusted real-time blockchain analysis platform. Our team of elite security engineers and data scientists recognized that security shouldn't just be reactive—it should be predictive.
                            </p>
                            <p>
                                Today, we provide the backbone for thousands of secure transactions daily, leveraging the vast resources and institutional-grade security infrastructure of the BSC ecosystem.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-[#fcd535]/5 blur-[100px] rounded-full -z-10" />
                        <div className="bg-[#1e2329] p-8 md:p-12 rounded-[3rem] border border-white/5 relative shadow-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fcd535]/10 border border-[#fcd535]/20 text-[#fcd535] text-xs font-bold uppercase tracking-wider mb-6">
                                <Target size={14} />
                                Our Purpose
                            </div>
                            <h3 className="text-3xl font-bold mb-6 text-white">Our <span className="text-[#fcd535]">Mission</span></h3>
                            <p className="text-[#848e9c] text-lg mb-8 leading-relaxed">
                                Our mission is to create a safer cryptocurrency ecosystem by providing accessible tools that empower users to verify the security and legitimacy of their digital assets before every transaction.
                            </p>
                            <div className="grid gap-6">
                                <div className="flex gap-4 p-4 bg-white/[0.02] rounded-2xl border border-white/5">
                                    <div className="w-12 h-12 rounded-xl bg-[#fcd535]/10 flex items-center justify-center shrink-0 border border-[#fcd535]/20">
                                        <Rocket className="text-[#fcd535]" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Global Vision</h4>
                                        <p className="text-sm text-[#848e9c]">A future where crypto transactions are as trusted as traditional banking.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 bg-white/[0.02] rounded-2xl border border-white/5">
                                    <div className="w-12 h-12 rounded-xl bg-[#fcd535]/10 flex items-center justify-center shrink-0 border border-[#fcd535]/20">
                                        <Heart className="text-[#fcd535]" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">User First</h4>
                                        <p className="text-sm text-[#848e9c]">Prioritizing safety and accessibility for everyone, everywhere.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
