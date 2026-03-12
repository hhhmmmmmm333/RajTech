"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Globe, Zap, Cpu, BarChart3 } from "lucide-react"

const features = [
    {
        title: "SAFE Risk Detection",
        description: "Scan every incoming and outgoing transaction for known malicious contracts using Binance's global threat database.",
        icon: Shield,
        color: "text-[#fcd535]",
        bg: "bg-[#fcd535]/10"
    },
    {
        title: "Portfolio Analytics",
        description: "Institutional-grade asset tracking and historical performance data visualized in real-time.",
        icon: BarChart3,
        color: "text-[#fcd535]",
        bg: "bg-[#fcd535]/10"
    },
    {
        title: "End-to-End Privacy",
        description: "Zero-knowledge proofs ensure your wallet data remains private. We analyze, we don't store.",
        icon: Lock,
        color: "text-[#fcd535]",
        bg: "bg-[#fcd535]/10"
    },
    {
        title: "500+ Chains Supported",
        description: "Native support for BNB Chain, Ethereum, Solana, Bitcoin, and all major Layer 2 networks.",
        icon: Globe,
        color: "text-[#fcd535]",
        bg: "bg-[#fcd535]/10"
    },
    {
        title: "Predictive Smart Alerts",
        description: "Get notified immediately if a protocol you've interacted with shows signs of irregular activity.",
        icon: Zap,
        color: "text-[#fcd535]",
        bg: "bg-[#fcd535]/10"
    },
    {
        title: "AI Analysis Engine",
        description: "Proprietary Binance AI models identify honeypots and social engineering patterns before you sign.",
        icon: Cpu,
        color: "text-[#fcd535]",
        bg: "bg-[#fcd535]/10"
    }
]

export default function Features() {
    return (
        <section id="features" className="py-24 bg-[#0b0e11]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Binance <span className="text-[#fcd535]">Security</span> Ecosystem</h2>
                    <p className="text-lg text-[#848e9c]">Professional tools designed to provide the highest level of security for your digital assets.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#1e2329] p-8 rounded-2xl hover:border-[#fcd535]/30 border border-white/5 transition-all group"
                        >
                            <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6 border border-[#fcd535]/20 group-hover:scale-110 transition-transform`}>
                                <feature.icon className={feature.color} size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-[#848e9c] text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
