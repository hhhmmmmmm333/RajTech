"use client"

import { motion } from "framer-motion"
import { Webhook, Database, Fingerprint, FileText } from "lucide-react"

const steps = [
    {
        title: "Linking Address",
        description: "Open using your Web3 wallet. No login or seed phrase required for scanning.",
        icon: Webhook,
    },
    {
        title: "Scan Network",
        description: "Binance nodes fetch your transaction history across 500+ supported blockchains.",
        icon: Database,
    },
    {
        title: "AI Risk Analysis",
        description: "Our proprietary AI models scan for malicious patterns and honeypot interactions.",
        icon: Fingerprint,
    },
    {
        title: "Safety Report",
        description: "Get a comprehensive SAFE report with immediate security recommendations.",
        icon: FileText,
    }
]

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden bg-[#0b0e11]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/3 text-wrap">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-wrap">How It <span className="text-[#fcd535]">Works</span></h2>
                        <p className="text-lg text-[#848e9c] mb-8 leading-relaxed">
                            We've simplified blockchain security. Professional institutional-grade analysis in seconds without ever needing to expose your private information.
                        </p>
                        <div className="p-6 bg-[#fcd535]/5 border border-[#fcd535]/20 rounded-2xl">
                            <div className="text-[#fcd535] font-bold mb-2 flex items-center gap-2">
                                <Fingerprint size={20} />
                                Trustless Architecture
                            </div>
                            <p className="text-sm text-[#848e9c]">
                                Binance Analysis uses read-only public data. We never ask for permissions to spend or move your funds.
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-[#1e2329] p-8 rounded-2xl relative group border border-white/5"
                            >
                                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-lg font-bold border-2 border-[#0b0e11] shadow-xl">
                                    {index + 1}
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-[#0b0e11] flex items-center justify-center mb-6 text-[#fcd535] border border-white/5">
                                    <step.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                                <p className="text-[#848e9c] text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
