"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Our Team", href: "#our-team" },
    { name: "Security", href: "#security" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Contact", href: "#contact" },
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToAnalyzer = () => {
        document.getElementById("check-wallet")?.scrollIntoView({ behavior: "smooth" })
        setIsMobileMenuOpen(false)
    }

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-[#0b0e11]/90 backdrop-blur-md border-white/5 py-3"
                    : "bg-transparent border-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative w-8 h-8">
                            <Image
                                src="/binance-logo.png"
                                alt="Binance Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white uppercase">BnbScan</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-[#848e9c] hover:text-[#fcd535] transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:block">
                        <button
                            onClick={scrollToAnalyzer}
                            className="gradient-bg px-6 py-2 rounded-lg font-bold text-sm hover:brightness-110 transition-all"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0b0e11] border-b border-white/5 p-4 space-y-4 animate-in slide-in-from-top duration-300">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block text-base font-medium text-[#848e9c] hover:text-[#fcd535] py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <button
                        onClick={scrollToAnalyzer}
                        className="w-full gradient-bg px-6 py-3 rounded-xl font-bold text-base"
                    >
                        Get Started
                    </button>
                </div>
            )}
        </header>
    )
}
