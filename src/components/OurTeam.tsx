"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Briefcase, Code, Shield } from "lucide-react"

const team = [
    {
        name: "Alex Thompson",
        role: "Chief Security Officer",
        desc: "Ex-Google Labs security lead with over a decade of experience in cybersecurity.",
        icon: Shield,
        socials: ["#", "#", "#"]
    },
    {
        name: "Elena Rodriguez",
        role: "Head of Blockchain Development",
        desc: "Specialist in smart contract architecture and multi-chain protocol development.",
        icon: Code,
        socials: ["#", "#", "#"]
    },
    {
        name: "Marcus Chen",
        role: "Lead Data Scientist",
        desc: "Passionate about building AI models for predictive theft analysis and threat detection.",
        icon: Briefcase,
        socials: ["#", "#", "#"]
    }
]

export default function OurTeam() {
    return (
        <section id="our-team" className="py-24 bg-[#0b0e11] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fcd535]/10 border border-[#fcd535]/20 text-[#fcd535] text-xs font-bold uppercase tracking-wider mb-6">
                        <Code size={14} />
                        The Experts Behind Binance
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our <span className="text-[#fcd535]">Team</span></h2>
                    <p className="text-lg text-[#848e9c] max-w-2xl mx-auto">
                        Our team consists of blockchain developers, cybersecurity experts, and financial technology specialists who are passionate about creating a safer cryptocurrency environment.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-[#1e2329] p-10 rounded-[2.5rem] border border-white/5 hover:border-[#fcd535]/30 transition-all flex flex-col items-center text-center group relative overflow-hidden"
                        >
                            {/* Profile Background Glow */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#fcd535]/5 blur-[60px] -z-10 group-hover:bg-[#fcd535]/10 transition-colors" />

                            <div className="w-20 h-20 rounded-full bg-[#0b0e11] flex items-center justify-center mb-6 shadow-xl border-4 border-[#1e2329] group-hover:scale-110 transition-transform shadow-black/50 overflow-hidden relative">
                                <member.icon className="text-[#fcd535]" size={36} />
                            </div>

                            <h4 className="text-2xl font-bold text-white mb-2">{member.name}</h4>
                            <p className="text-[#fcd535] text-sm font-bold uppercase tracking-wider mb-4 px-3 py-1 bg-[#fcd535]/10 rounded-full">{member.role}</p>
                            <p className="text-sm text-[#848e9c] leading-relaxed mb-8">
                                {member.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
