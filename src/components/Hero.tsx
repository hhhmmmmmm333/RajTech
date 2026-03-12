"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ShieldCheck, ArrowRight, Zap } from "lucide-react"

export default function Hero() {
    const scrollToAnalyzer = () => {
        document.getElementById("main-button")?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section id = "main-btn" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl aspect-square bg-[#FCD535]/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FCD535]/5 blur-[100px] rounded-full -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fcd535]/10 border border-[#fcd535]/20 text-[#fcd535] text-xs font-bold uppercase tracking-wider mb-6">
                            <ShieldCheck size={14} />
                            The World's Leading Blockchain Ecosystem
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white text-wrap">
                            Secure Your <span className="gradient-text">Crypto Future</span> with Binance Analysis
                        </h1>
                        <p className="text-xl text-[#848e9c] mb-8 max-w-xl leading-relaxed">
                            Analyze wallet health, detect risks, and protect your digital assets with Binance's institutional-grade security engine. Real-time scanning, zero private keys required.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={scrollToAnalyzer}
                                className="gradient-bg px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 group"
                            >
                                Check Now
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="mt-10 flex items-center gap-8 text-sm text-[#848e9c]">
                            <div className="flex items-center gap-2">
                                <Zap size={16} className="text-[#fcd535]" />
                                <span>Instant Scanning</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ShieldCheck size={16} className="text-[#fcd535]" />
                                <span>Binance Secured</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-square w-full max-w-lg mx-auto">
                            {/* Decorative Frame */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#fcd535]/10 to-transparent rounded-3xl blur-2xl -z-10" />
                            <div className="glass rounded-[2rem] p-4 h-full relative overflow-hidden bg-black/40">
                                <Image
                                    src="/hero.png"
                                    alt="Binance Analytics Dashboard"
                                    fill
                                    className="object-cover rounded-2xl p-2 opacity-80"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
