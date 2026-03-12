"use client"

import Link from "next/link"
import Image from "next/image"
import { Twitter, Github, Linkedin, MessageCircle } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-[#0b0e11] pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/binance-logo.png"
                                    alt="Binance Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white uppercase">Binance</span>
                        </Link>
                        <p className="text-[#848e9c] text-sm max-w-sm leading-relaxed mb-6">
                            Binance is the world's leading blockchain ecosystem and cryptocurrency infrastructure provider with a financial product suite that includes the largest digital asset exchange by volume.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Github, Linkedin, MessageCircle].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all text-[#848e9c] hover:text-[#fcd535]">
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-white text-wrap">Company</h4>
                        <ul className="space-y-4 text-sm text-[#848e9c]">
                            <li><Link href="#about" className="hover:text-[#fcd535] transition-colors">Our Story</Link></li>
                            <li><Link href="#about" className="hover:text-[#fcd535] transition-colors">Our Mission</Link></li>
                            <li><Link href="#why-choose-us" className="hover:text-[#fcd535] transition-colors">Why Choose Us</Link></li>
                            <li><Link href="#our-team" className="hover:text-[#fcd535] transition-colors">Our Team</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-white text-wrap">Support</h4>
                        <ul className="space-y-4 text-sm text-[#848e9c]">
                            <li><Link href="#" className="hover:text-[#fcd535] transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-[#fcd535] transition-colors">API Reference</Link></li>
                            <li><Link href="#" className="hover:text-[#fcd535] transition-colors">Security Guide</Link></li>
                            <li><Link href="#" className="hover:text-[#fcd535] transition-colors">Listing Application</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-white text-wrap">Service</h4>
                        <ul className="space-y-4 text-sm text-[#848e9c]">
                            <li><Link href="#" className="hover:text-[#fcd535] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-[#fcd535] transition-colors">Terms of Use</Link></li>
                            <li><Link href="#" className="hover:text-[#fcd535] transition-colors">Cookie Policy</Link></li>
                            <li><Link href="#" className="hover:text-[#fcd535] transition-colors">Risk Warning</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-[#848e9c]">
                        © {new Date().getFullYear()} BINANCE. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-xs text-[#848e9c] hover:text-[#fcd535] flex items-center gap-1 group">
                            System Status <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
