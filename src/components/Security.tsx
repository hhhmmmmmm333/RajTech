"use client"

import { ShieldCheck, Lock, EyeOff, BadgeCheck, ExternalLink } from "lucide-react"

export default function Security() {
    return (
        <section id="security" className="py-24 bg-[#0b0e11]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-[#1e2329] rounded-[2rem] p-8 md:p-16 relative overflow-hidden border border-white/5">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#fcd535]" />

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fcd535]/10 border border-[#fcd535]/20 text-[#fcd535] text-xs font-bold uppercase tracking-wider mb-6">
                                <BadgeCheck size={14} />
                                Institutional Security
                            </div>
                            <h2 className="text-4xl font-bold mb-6 text-white">Your Assets Are <span className="text-[#fcd535]">SAFE</span></h2>
                            <p className="text-lg text-[#848e9c] mb-8 leading-relaxed">
                                Trust is our most valuable asset. We've built Binance Analysis with a transparency-first approach, ensuring institutional-grade protection for every user.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Non-Custodial Analysis",
                                        desc: "We never ask for or store your private keys, seed phrases, or passwords. Your keys, your crypto.",
                                        icon: Lock
                                    },
                                    {
                                        title: "Encrypted Data Transmission",
                                        desc: "All analysis requests are processed through military-grade encrypted tunnels.",
                                        icon: EyeOff
                                    },
                                    {
                                        title: "Public Database Only",
                                        desc: "Our engine exclusively interacts with verified public blockchain data.",
                                        icon: ShieldCheck
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#0b0e11] flex items-center justify-center shrink-0 border border-white/10 text-[#fcd535]">
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-white">{item.title}</h4>
                                            <p className="text-[#848e9c] text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent shadow-2xl">
                                <div className="bg-[#0b0e11] rounded-[2.4rem] p-8 md:p-10 border border-white/5">
                                    <h3 className="text-2xl font-bold mb-6 text-white text-wrap">Transparency Report</h3>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-white/[0.02] rounded-xl border border-white/5 flex items-center justify-between">
                                            <span className="text-sm text-[#848e9c]">Encryption Status</span>
                                            <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold">AES-256 ACTIVE</span>
                                        </div>
                                        <div className="p-4 bg-white/[0.02] rounded-xl border border-white/5 flex items-center justify-between">
                                            <span className="text-sm text-[#848e9c]">Binance Insurance (SAFE)</span>
                                            <span className="text-xs text-[#fcd535] font-bold">COVERED</span>
                                        </div>
                                        <div className="p-4 bg-white/[0.02] rounded-xl border border-white/5 flex items-center justify-between">
                                            <span className="text-sm text-[#848e9c]">Proof of Reserves</span>
                                            <span className="text-xs text-[#fcd535] underline cursor-pointer flex items-center gap-1">
                                                Verify on Binance <ExternalLink size={12} />
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-white/5 text-center">
                                        <p className="text-xs text-[#848e9c] italic">
                                            "Binance Analysis uses non-custodial scanning — we never request private keys or recovery phrases."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
