"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Award, Trophy, Star, Users, Briefcase, Zap } from "lucide-react"

const reasons = [
    "Lightning-fast verification in under 10 seconds",
    "Multi-chain support beyond just USDT networks",
    "24/7 customer support from security experts",
    "Regular security audits by leading third-party firms",
    "Free tier available with premium AI-powered capabilities"
]

const achievements = [
    { icon: Award, label: "Top 10 Security Tools 2024", desc: "Recognized as a leading blockchain tool." },
    { icon: Trophy, label: "Best Innovation Award 2024", desc: "Winner for our advanced AI-based detection." },
    { icon: CheckCircle2, label: "Zero False Positives", desc: "Industry-leading accuracy in threat assessment." },
    { icon: Briefcase, label: "Trusted by Enterprise Clients", desc: "Chosen by large-scale institutions worldwide." },
    { icon: Star, label: "ISO 27001 Certified", desc: "Meets international information security standards." },
    { icon: Users, label: "100k+ Successful Verifications", desc: "Trusted by thousands of users daily." }
]

export default function WhyChooseUs() {
    return (
        <section id="why-choose-us" className="py-24 bg-[#0b0e11] relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#fcd535]/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#fcd535]/5 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Why Choose <span className="text-[#fcd535]">BnbScan</span>?</h2>
                        <p className="text-lg text-[#848e9c] mb-10 leading-relaxed max-w-xl">
                            Our unique approach to blockchain security combines cutting-edge AI and human expertise to provide you with the most reliable protection in the market.
                        </p>
                        <div className="grid sm:grid-cols-1 gap-6">
                            {reasons.map((reason, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-[#fcd535]/10 flex items-center justify-center shrink-0 border border-[#fcd535]/20 group-hover:scale-110 transition-transform">
                                        <CheckCircle2 className="text-[#fcd535]" size={20} />
                                    </div>
                                    <p className="text-[#848e9c] font-medium transition-colors group-hover:text-white">{reason}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#1e2329] p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden"
                    >
                        {/* Glowing lines pattern */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#fcd535]/10 to-transparent -z-10" />
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-[#fcd535] flex items-center justify-center shadow-lg shadow-[#fcd535]/20">
                                <Zap className="text-[#0b0e11]" size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Real-Time Performance</h3>
                                <p className="text-sm text-[#848e9c]">Built on high-speed BSC nodes</p>
                            </div>
                        </div>
                        <p className="text-[#848e9c] mb-10 leading-relaxed">
                            Every verification is processed through our institutional-grade infrastructure, cross-referenced with over 5 million daily transaction patterns to ensure complete peace of mind.
                        </p>
                        <div className="p-6 bg-[#0b0e11] rounded-2xl border border-white/5 text-center">
                            <p className="text-[#fcd535] text-4xl font-bold mb-2">99.9%</p>
                            <p className="text-[#848e9c] text-sm uppercase font-bold tracking-widest">Accuracy Guarantee</p>
                        </div>
                    </motion.div>
                </div>

                {/* Achievements Grid */}
                <div className="pt-24 border-t border-white/5">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Our <span className="text-[#fcd535]">Achievements</span></h2>
                        <p className="text-[#848e9c]">Setting new benchmarks in blockchain security every day.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {achievements.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="p-8 bg-[#1e2329] rounded-[2rem] border border-white/5 hover:border-[#fcd535]/30 transition-all flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#0b0e11] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black group-hover:shadow-[#fcd535]/10 border border-white/5">
                                    <item.icon className="text-[#fcd535]" size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{item.label}</h4>
                                <p className="text-sm text-[#848e9c] leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
