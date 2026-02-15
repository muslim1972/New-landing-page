"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Video, Users, Share2, Download, Smartphone, Monitor } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function ShamilChatPage() {
    const { language } = useLanguage()
    const isAr = language === 'ar'

    const content = {
        en: {
            hero: {
                badge: "New Release 2.0",
                title: "ShamilChat: Where Privacy Meets Speed",
                description: "Experience the next generation of messaging. End-to-end encryption, crystal clear calls, and a design that gets out of your way.",
                download: "Download Now",
                learnMore: "Learn More"
            },
            features: {
                title: "Why ShamilChat?",
                subtitle: "Built for those who demand excellence.",
                items: [
                    { icon: Shield, title: "Unbreakable Security", desc: "Every message, call, and file is end-to-end encrypted. Only you and the recipient can read them." },
                    { icon: Video, title: "HD Video Calls", desc: "Connect with friends and family in 4K clarity, even on low-bandwidth networks." },
                    { icon: Users, title: "Super Groups", desc: "Create groups with up to 200,000 members. Admin tools, precise controls, and more." },
                    { icon: Share2, title: "Unlimited Sharing", desc: "Send media and files of any type and size. Your history is securely stored in the cloud." }
                ]
            },
            gallery: {
                title: "A Glimpse Inside",
                subtitle: "Beautifully crafted interfaces for every device."
            },
            cta: {
                title: "Ready to switch?",
                subtitle: "Join millions who trust ShamilChat for their daily communication.",
                btn: "Get ShamilChat"
            }
        },
        ar: {
            hero: {
                badge: "إصدار جديد ٢.٠",
                title: "شامل شات: حيث تلتقي الخصوصية بالسرعة",
                description: "جرب الجيل القادم من المراسلة. تشفير من طرف إلى طرف، مكالمات بوضوح الكريستال، وتصميم انسيابي.",
                download: "حمل الأن",
                learnMore: "اعرف المزيد"
            },
            features: {
                title: "لماذا شامل شات؟",
                subtitle: "صُمم لمن يطلب التميز.",
                items: [
                    { icon: Shield, title: "حماية غير قابلة للكسر", desc: "كل رسالة، مكالمة، وملف مشفر من طرف إلى طرف. لا أحد سواك والمستلم يمكنه قراءتها." },
                    { icon: Video, title: "مكالمات فيديو HD", desc: "تواصل مع الأصدقاء والعائلة بوضوح 4K، حتى على الشبكات الضعيفة." },
                    { icon: Users, title: "مجموعات فائقة", desc: "أنشئ مجموعات تضم حتى 200,000 عضو. أدوات مشرفين وتحكم دقيق." },
                    { icon: Share2, title: "مشاركة بلا حدود", desc: "أرسل الوسائط والملفات بأي نوع وحجم. سجلك محفوظ بأمان في السحابة." }
                ]
            },
            gallery: {
                title: "نظرة من الداخل",
                subtitle: "واجهات مصممة ببراعة لكل جهاز."
            },
            cta: {
                title: "جاهز للتغيير؟",
                subtitle: "انضم إلى الملايين الذين يثقون بشامل شات لتواصلهم اليومي.",
                btn: "احصل على شامل شات"
            }
        }
    }

    const t = content[language]

    return (
        <div className={`min-h-screen bg-background text-foreground ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
            <Header />

            <main className="overflow-x-hidden">
                {/* Hero Section */}
                <section className="relative px-4 py-20 lg:pt-32 pb-40 overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10" />

                    <div className="container mx-auto max-w-[1200px]">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                            {/* Text Content */}
                            <div className="flex-1 text-center lg:text-start z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6 animate-fade-in">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                    </span>
                                    {t.hero.badge}
                                </div>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                                    {t.hero.title}
                                </h1>
                                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                                    {t.hero.description}
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                    <button className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-primary/25">
                                        <Download className="w-5 h-5" />
                                        {t.hero.download}
                                    </button>
                                    <button className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-secondary text-foreground font-semibold hover:bg-secondary/80 transition-all">
                                        {t.hero.learnMore}
                                        <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
                                    </button>
                                </div>
                            </div>

                            {/* 3D Phone Mockup Showcase */}
                            <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none">
                                <div className="relative z-10 transform transition-transform hover:scale-105 duration-700">
                                    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                                        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                                        <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                                        <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                                        <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800 relative">
                                            <Image
                                                src="/images/shamil-chat/1.jpg"
                                                alt="App Screenshot"
                                                fill
                                                className="object-cover"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* Floating Elements (Glass Cards) */}
                                <div className="absolute top-1/2 -right-12 lg:-right-0 p-4 bg-background/60 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl animate-bounce-slow hidden sm:block">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <Shield className="w-5 h-5 text-green-500" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground">Status</p>
                                            <p className="font-bold text-sm">Encrypted</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-20 -left-12 lg:-left-8 p-4 bg-background/60 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl animate-bounce-slow delay-700 hidden sm:block">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                                            <Video className="w-5 h-5 text-blue-500" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground">Call Quality</p>
                                            <p className="font-bold text-sm">4K Ultra HD</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-24 bg-secondary/30 relative">
                    <div className="container mx-auto max-w-[1200px] px-4">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.features.title}</h2>
                            <p className="text-muted-foreground text-lg">{t.features.subtitle}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {t.features.items.map((feature, idx) => (
                                <div key={idx} className="group p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Gallery / Showcase */}
                <section className="py-24 overflow-hidden">
                    <div className="container mx-auto px-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.gallery.title}</h2>
                        <p className="text-muted-foreground">{t.gallery.subtitle}</p>
                    </div>

                    {/* Marquee/Scroll */}
                    <div className="flex gap-6 overflow-x-auto pb-8 snap-x px-4 no-scrollbar lg:justify-center lg:flex-wrap">
                        {[2, 3, 4, 5, 6].map((num) => (
                            <div key={num} className="snap-center shrink-0 w-[240px] md:w-[280px] rounded-3xl overflow-hidden shadow-xl border border-border/50 transition-transform hover:scale-105">
                                <div className="relative aspect-[9/19]">
                                    <Image
                                        src={`/images/shamil-chat/${num}.jpg`}
                                        alt={`Screen ${num}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 px-4">
                    <div className="container mx-auto max-w-[1000px]">
                        <div className="rounded-[3rem] bg-gradient-to-br from-primary to-purple-700 text-white p-12 md:p-24 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-[80px]" />

                            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">{t.cta.title}</h2>
                            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto relative z-10">{t.cta.subtitle}</p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
                                <button className="px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                                    <Smartphone className="w-5 h-5" />
                                    {t.cta.btn} for Mobile
                                </button>
                                <button className="px-8 py-4 bg-primary/20 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-lg hover:bg-primary/30 transition-colors flex items-center gap-2">
                                    <Monitor className="w-5 h-5" />
                                    Desktop
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}
