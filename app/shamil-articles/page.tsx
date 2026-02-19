"use client"

import Image from "next/image"
import { useState } from "react"
import {
    BookOpen,
    Share2,
    Bookmark,
    TrendingUp,
    Clock,
    Search,
    ChevronRight,
    Play
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function ShamilArticlesPage() {
    const { language } = useLanguage()
    const isAr = language === 'ar'

    // Content
    const content = {
        en: {
            hero: {
                badge: "Knowledge Hub",
                title: "Shamil Articles: Knowledge for Everyone.",
                description: "Dive into a world of curated articles covering technology, design, and innovation. Read, learn, and share.",
                download: "Start Reading",
                explore: "Browse Topics"
            },
            features: {
                title: "Redefining Reading",
                items: [
                    { icon: BookOpen, title: "Immersive Reading", desc: "Clean, distraction-free interface for the best reading experience." },
                    { icon: Bookmark, title: "Save for Later", desc: "Bookmark articles to read them whenever you have time." },
                    { icon: TrendingUp, title: "Trending Topics", desc: "Stay ahead with the most discussed topics in the industry." },
                    { icon: Share2, title: "Share Wisdom", desc: "Easily share insights and articles with your network." }
                ]
            }
        },
        ar: {
            hero: {
                badge: "مركز المعرفة",
                title: "مقالات شامل: المعرفة للجميع.",
                description: "غوص في عالم من المقالات المختارة التي تغطي التكنولوجيا، التصميم، والابتكار. اقرأ، تعلم، وشارك.",
                download: "ابدأ القراءة",
                explore: "تصفح المواضيع"
            },
            features: {
                title: "إعادة تعريف القراءة",
                items: [
                    { icon: BookOpen, title: "قراءة غامرة", desc: "واجهة نظيفة وخالية من المشتتات لأفضل تجربة قراءة." },
                    { icon: Bookmark, title: "حفظ لوقت لاحق", desc: "احفظ المقالات لتقرأها في أي وقت يناسبك." },
                    { icon: TrendingUp, title: "مواضيع رائجة", desc: "ابق في المقدمة مع أكثر المواضيع مناقشة في الصناعة." },
                    { icon: Share2, title: "شارك الحكمة", desc: "شارك الأفكار والمقالات بسهولة مع شبكتك." }
                ]
            }
        }
    }

    const t = content[language]

    return (
        <div className={`min-h-screen bg-background text-foreground ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
            <Header />

            <main className="overflow-x-hidden">
                {/* Hero Section */}
                <section className="relative px-4 py-20 lg:py-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
                    <div className="absolute inset-0 opacity-20 z-[-1]" style={{
                        backgroundImage: `url('/images/shamil-articles/1.jpeg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(8px)'
                    }} />

                    <div className="container relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 border border-teal-500/30 text-teal-500 text-sm font-medium mb-8 animate-fade-in-up">
                            <BookOpen className="w-4 h-4" />
                            {t.hero.badge}
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 animate-gradient-x">
                            Shamil Articles
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-10 leading-relaxed">
                            {t.hero.description}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-foreground text-background rounded-full font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                                {t.hero.download}
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 bg-secondary/80 backdrop-blur-sm border border-border text-foreground rounded-full font-bold text-lg hover:bg-secondary transition-all flex items-center justify-center gap-2">
                                <Search className="w-5 h-5" />
                                {t.hero.explore}
                            </button>
                        </div>
                    </div>
                </section>

                {/* Features Showcase */}
                <section className="py-24 bg-secondary/10 relative">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Feature Text */}
                            <div className="order-2 lg:order-1 space-y-8">
                                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                    {isAr ? "نظام قراءة،" : "Reading System,"} <br />
                                    <span className="text-primary">{isAr ? "مصمم لك." : "Designed for you."}</span>
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    {isAr
                                        ? "تجربة قراءة سلسة وممتعة، مع إمكانية الوصول إلى مكتبة ضخمة من المقالات في مختلف المجالات."
                                        : "A seamless and enjoyable reading experience, with access to a vast library of articles across various fields."}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                    {t.features.items.map((item, idx) => (
                                        <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all">
                                            <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-teal-500/10 flex items-center justify-center text-teal-500">
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold mb-1">{item.title}</h3>
                                                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Feature Visual */}
                            <div className="order-1 lg:order-2 relative flex justify-center">
                                <div className="relative z-10 w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                                    <Image
                                        src="/images/shamil-articles/2.jpeg"
                                        alt="App Interface"
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-8 left-6 right-6 text-white">
                                        <div className="text-xs font-bold uppercase tracking-wider mb-2 bg-blue-500 w-fit px-2 py-1 rounded">Technology</div>
                                        <h3 className="text-xl font-bold leading-tight mb-2">The Future of AI in Design</h3>
                                        <div className="flex items-center gap-2 text-xs text-white/80">
                                            <Clock className="w-3 h-3" />
                                            <span>5 min read</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Second Image Card behind */}
                                <div className="absolute top-10 -right-4 w-[280px] h-[550px] bg-gray-800 rounded-[2.5rem] opacity-50 z-0 transform rotate-[10deg]" />

                                {/* Decorative Blobs */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery / Articles Grid */}
                <section className="py-24 overflow-hidden bg-background">
                    <div className="container mx-auto px-4 mb-12 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">{isAr ? "الأكثر قراءة" : "Most Read"}</h2>
                        <p className="text-muted-foreground">{isAr ? "استكشف المقالات التي تلهم العالم" : "Explore articles that inspire the world"}</p>
                    </div>

                    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] py-10" dir="ltr">
                        <div className="flex items-center gap-6 animate-infinite-scroll">
                            {[...Array(2)].map((_, groupIdx) => (
                                <div key={groupIdx} className="flex gap-6">
                                    {[3, 4, 5, 1, 2].map((num) => (
                                        <div key={num} className="shrink-0 w-[300px] md:w-[350px] h-[250px] rounded-3xl overflow-hidden shadow-xl border border-border/50 transition-transform hover:scale-105 group relative cursor-pointer">
                                            <Image
                                                src={`/images/shamil-articles/${num}.jpeg`}
                                                alt={`Article ${num}`}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                                                <h4 className="font-bold text-lg mb-1 line-clamp-2">Understanding the nuances of modern UI design systems</h4>
                                                <p className="text-xs text-white/80 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                                    Read Article <ChevronRight className="w-3 h-3" />
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 px-4 bg-secondary/5">
                    <div className="container mx-auto max-w-[1000px] text-center">
                        <div className="p-12 md:p-24 rounded-[3rem] bg-gradient-to-br from-teal-900 to-blue-900 text-white relative overflow-hidden ring-1 ring-white/10">
                            <BookOpen className="w-32 h-32 absolute -top-4 -right-4 text-white/5 rotate-12" />
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">{isAr ? "ابدأ رحلتك المعرفية" : "Start Your Journey"}</h2>
                            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto relative z-10">
                                {isAr ? "انضم إلى آلاف القراء واكتشف عالماً من المعرفة في تطبيق واحد." : "Join thousands of readers and discover a world of knowledge in one app."}
                            </p>
                            <button className="px-10 py-4 bg-white text-teal-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-white/20 relative z-10">
                                {t.hero.download}
                            </button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}
