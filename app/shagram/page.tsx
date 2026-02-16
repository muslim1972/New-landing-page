"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import {
    Camera,
    Music,
    Film,
    Mic,
    Clock,
    Globe,
    ChevronLeft,
    ChevronRight,
    X,
    Newspaper,
    TrendingUp,
    Share2,
    Play
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function ShaGramPage() {
    const { language } = useLanguage()
    const isAr = language === 'ar'
    const [isNewsOpen, setIsNewsOpen] = useState(false)

    // Content
    const content = {
        en: {
            hero: {
                badge: "The Future of Social",
                title: "ShaGram: Share Life, beautifully.",
                description: "Share your moments with photos, videos, audio, and professional-grade montages. A world-first in social networking.",
                download: "Download Now",
                explore: "Explore Features"
            },
            features: {
                title: "Redefining Social Media",
                items: [
                    { icon: Film, title: "Pro Montage", desc: "Built-in professional editing tools to turn your clips into cinematic masterpieces." },
                    { icon: Mic, title: "Voice-Overs", desc: "Add your voice or any audio track to the background of your slides and stories." },
                    { icon: Clock, title: "24h Diaries", desc: "Share your daily journey with stories that last for 24 hours." },
                    { icon: Globe, title: "Live News", desc: "Stay updated with a dedicated news feed from top global channels." }
                ]
            },
            news: {
                title: "Latest News",
                placeholder: "Pull to see latest headlines..."
            }
        },
        ar: {
            hero: {
                badge: "مستقبل التواصل",
                title: "شاغرام: شارك الحياة، بجمال.",
                description: "شارك لحظاتك بالصور والفيديو والصوت، مع أدوات مونتاج احترافية ولأول مرة في برامج التواصل.",
                download: "حمل الأن",
                explore: "اكتشف المميزات"
            },
            features: {
                title: "إعادة تعريف التواصل الاجتماعي",
                items: [
                    { icon: Film, title: "مونتاج احترافي", desc: "أدوات تحرير مدمجة لتحويل مقاطعك إلى تحف سينمائية." },
                    { icon: Mic, title: "تعليق صوتي", desc: "أضف صوتك أو أي مقطع صوتي إلى خلفية الشرائح والقصص." },
                    { icon: Clock, title: "يوميات 24 ساعة", desc: "شارك رحلتك اليومية مع قصص تستمر لمدة 24 ساعة." },
                    { icon: Globe, title: "أخبار مباشرة", desc: "ابحث عن الخبر اليقين مع شريط أخبار مخصص من أفضل القنوات العالمية." }
                ]
            },
            news: {
                title: "آخر الأخبار",
                placeholder: "اسحب لرؤية العناوين..."
            }
        }
    }

    const t = content[language]

    return (
        <div className={`min-h-screen bg-background text-foreground ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
            <Header />

            {/* News Sidebar - Collapsible */}
            <div
                className={`fixed top-0 bottom-0 z-40 bg-card border-l border-border shadow-2xl transition-all duration-300 ease-in-out ${isNewsOpen ? (isAr ? 'left-0 translate-x-0' : 'right-0 translate-x-0') : (isAr ? 'left-0 -translate-x-full' : 'right-0 translate-x-full')
                    }`}
                style={{ width: '320px', paddingTop: '80px' }}
            >
                {/* Toggle Handle */}
                <button
                    onClick={() => setIsNewsOpen(!isNewsOpen)}
                    className={`absolute top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-2 rounded-l-xl shadow-lg hover:bg-primary/90 transition-all ${isAr ? '-right-10 rounded-r-xl rounded-l-none' : '-left-10'
                        }`}
                >
                    {isNewsOpen ? <X className="w-6 h-6" /> : <Newspaper className="w-6 h-6 animate-pulse" />}
                </button>

                <div className="h-full flex flex-col p-6 overflow-y-auto">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-red-500" />
                        {t.news.title}
                    </h3>

                    {/* Mock News Items */}
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="p-4 rounded-xl bg-secondary/50 border border-border/50 hover:bg-secondary transition-colors cursor-pointer group">
                                <span className="text-xs text-muted-foreground mb-2 block">Breaking - 2m ago</span>
                                <h4 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">
                                    {isAr ? "عنوان خبر عاجل ومهم جداً يحدث الآن في العالم التقني..." : "Breaking news headline happening right now in the tech world..."}
                                </h4>
                                <div className="h-24 w-full bg-muted rounded-lg relative overflow-hidden">
                                    <Image
                                        src={`/images/shamil-shagram/${(i % 6) + 1}.jpeg`}
                                        alt="News"
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <main className="overflow-x-hidden">
                {/* Hero Section with Montage Background Feel */}
                <section className="relative px-4 py-20 lg:py-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
                    {/* Stylized Background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
                    <div className="absolute inset-0 opacity-20 z-[-1]" style={{
                        backgroundImage: `url('/images/shamil-shagram/2.jpeg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(8px)'
                    }} />

                    <div className="container relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-pink-500/30 text-pink-500 text-sm font-medium mb-8 animate-fade-in-up">
                            <Camera className="w-4 h-4" />
                            {t.hero.badge}
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
                            ShaGram
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-10 leading-relaxed">
                            {t.hero.description}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-foreground text-background rounded-full font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                                {t.hero.download}
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 bg-secondary/80 backdrop-blur-sm border border-border text-foreground rounded-full font-bold text-lg hover:bg-secondary transition-all flex items-center justify-center gap-2">
                                <Play className="w-5 h-5 fill-current" />
                                {t.hero.explore}
                            </button>
                        </div>
                    </div>
                </section>

                {/* Features Showcase (Montage & Audio) */}
                <section className="py-24 bg-secondary/10 relative">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Feature Text */}
                            <div className="order-2 lg:order-1 space-y-8">
                                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                    {isAr ? "أدوات مونتاج،" : "Pro-Level Montage,"} <br />
                                    <span className="text-primary">{isAr ? "في جيبك." : "Right in your pocket."}</span>
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    {isAr
                                        ? "لأول مرة، قم بتحرير الماكرو، إضافة الانتقالات، ومزج الصوتيات مباشرة داخل التطبيق. لا حاجة لتطبيقات خارجية."
                                        : "For the first time, edit macros, add transitions, and mix audio directly within the app. No external tools needed."}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                    {t.features.items.map((item, idx) => (
                                        <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all">
                                            <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center text-pink-500">
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

                            {/* Feature Visual / Phone Mockup */}
                            <div className="order-1 lg:order-2 relative flex justify-center">
                                <div className="relative z-10 w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden">
                                    {/* Screen Content - A Montage UI mockup */}
                                    <div className="relative h-full w-full">
                                        <Image
                                            src="/images/shamil-shagram/1.jpeg"
                                            alt="Montage UI"
                                            fill
                                            className="object-cover"
                                        />
                                        {/* Overlay UI elements to simulate Montage Edit Mode */}
                                        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/90 to-transparent p-6 text-white">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex gap-2">
                                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                                        <Music className="w-5 h-5" />
                                                    </div>
                                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                                        <Mic className="w-5 h-5" />
                                                    </div>
                                                </div>
                                                <button className="px-4 py-2 bg-pink-500 rounded-full text-xs font-bold">Export 4K</button>
                                            </div>
                                            <div className="h-12 w-full bg-white/10 rounded-lg overflow-hidden flex items-center gap-0.5 px-1 relative">
                                                {/* Timeline representation */}
                                                <div className="h-full w-1/3 bg-blue-500/50 rounded-l-md border-r border-white/20"></div>
                                                <div className="h-full w-1/4 bg-green-500/50 border-r border-white/20"></div>
                                                <div className="h-full w-1/3 bg-yellow-500/50 rounded-r-md"></div>
                                                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Decorative Blobs */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Infinite Gallery Loop */}
                <section className="py-24 overflow-hidden bg-background">
                    <div className="container mx-auto px-4 mb-12 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">{isAr ? "بكل لحظة" : "Every Moment"}</h2>
                        <p className="text-muted-foreground">{isAr ? "شارك يومياتك وذكرياتك بتنسيق ساحر" : "Share your diaries and memories in style"}</p>
                    </div>

                    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] py-10" dir="ltr">
                        <div className="flex items-center gap-6 animate-infinite-scroll">
                            {/* Duplicated for loop - using 1-6.jpeg */}
                            {[...Array(2)].map((_, groupIdx) => (
                                <div key={groupIdx} className="flex gap-6">
                                    {[1, 2, 3, 4, 5, 6].map((num) => (
                                        <div key={num} className="shrink-0 w-[240px] md:w-[280px] rounded-3xl overflow-hidden shadow-xl border border-border/50 transition-transform hover:scale-105 group relative">
                                            <div className="relative aspect-[9/19]">
                                                <Image
                                                    src={`/images/shamil-shagram/${num}.jpeg`}
                                                    alt={`ShaGram Screen ${num}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                                {/* Instagram-story like overlay */}
                                                <div className="absolute top-4 left-4 right-4 flex gap-1 z-10">
                                                    <div className="h-1 flex-1 bg-white/50 rounded-full overflow-hidden">
                                                        <div className="h-full w-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[5s] ease-linear" />
                                                    </div>
                                                </div>
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
                        <div className="p-12 md:p-24 rounded-[3rem] bg-gradient-to-br from-indigo-900 to-purple-900 text-white relative overflow-hidden ring-1 ring-white/10">
                            <Share2 className="w-32 h-32 absolute -top-4 -right-4 text-white/5 rotate-12" />
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">{isAr ? "انضم إلى مجتمع المبدعين" : "Join the Creator Community"}</h2>
                            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto relative z-10">
                                {isAr ? "حمّل شاغرام الآن وابدأ في سرد قصتك." : "Download ShaGram today and start telling your story."}
                            </p>
                            <button className="px-10 py-4 bg-white text-purple-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-white/20 relative z-10">
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
