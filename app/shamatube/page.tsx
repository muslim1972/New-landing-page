"use client"

import Image from "next/image"
import {
    Play,
    Upload,
    Search,
    Heart,
    Smile,
    ShieldAlert,
    UserX,
    Download,
    Tv,
    Share2,
    ThumbsUp,
    MessageCircle
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function ShamaTubePage() {
    const { language } = useLanguage()
    const isAr = language === 'ar'

    const content = {
        en: {
            hero: {
                badge: "The New Era of Video",
                title: "ShamaTube: Watch. Share. Connect.",
                description: "A complete video platform where you can upload, share, and discover content. Create your own channel and engage with a community that values privacy and expression.",
                start: "Start Watching",
                upload: "Upload Video"
            },
            features: {
                channel: {
                    title: "Your Own Channel",
                    desc: "Create and customize your personal channel. Build your audience and share your passion with the world."
                },
                reactions: {
                    title: "Express More",
                    desc: "Why just 'Like'? React with a full range of emojis to truly express how you feel about a video."
                },
                privacy: {
                    title: "Safety First",
                    desc: "Advanced privacy tools including blocking, hiding content, and robust reporting systems to keep the community safe."
                },
                interaction: {
                    title: "Full Interaction",
                    desc: "Search, play, download, and share. Everything you need in one powerful app."
                }
            },
            cta: {
                title: "Ready to go viral?",
                btn: "Get ShamaTube"
            }
        },
        ar: {
            hero: {
                badge: "عصر الفيديو الجديد",
                title: "شاماتيوب: شاهد. شارك. تواصل.",
                description: "منصة فيديو متكاملة حيث يمكنك رفع، مشاركة، واكتشاف المحتوى. أنشئ قناتك الخاصة وتفاعل مع مجتمع يقدر الخصوصية والتعبير.",
                start: "ابدأ المشاهدة",
                upload: "رفع فيديو"
            },
            features: {
                channel: {
                    title: "قناتك الخاصة",
                    desc: "أنشئ وخصص قناتك الشخصية. ابني جمهورك وشارك شغفك مع العالم."
                },
                reactions: {
                    title: "عبر أكثر",
                    desc: "لماذا الاكتفاء بـ 'إعجاب'؟ تفاعل بمجموعة كاملة من الإيموجي لتعبر بصدق عن شعورك تجاه الفيديو."
                },
                privacy: {
                    title: "الأمان أولاً",
                    desc: "أدوات خصوصية متقدمة تشمل الحظر، إخفاء المحتوى، ونظام تبليغ قوي للحفاظ على أمان المجتمع."
                },
                interaction: {
                    title: "تفاعل كامل",
                    desc: "بحث، تشغيل، تحميل، ومشاركة. كل ما تحتاجه في تطبيق واحد قوي."
                }
            },
            cta: {
                title: "جاهز لتكون النجم؟",
                btn: "احصل على شاماتيوب"
            }
        }
    }

    const t = content[language]

    return (
        <div className={`min-h-screen bg-background text-foreground ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
            <Header />

            <main className="overflow-x-hidden">
                {/* Hero Section */}
                <section className="relative px-4 py-20 lg:py-32 overflow-hidden flex items-center justify-center min-h-[90vh] bg-black text-white">
                    {/* Dynamic Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-black to-slate-900 z-0" />
                    <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20 z-0" />

                    <div className="container relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 text-center md:text-start">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-500 text-sm font-medium mb-8 animate-fade-in-up">
                                <Tv className="w-4 h-4" />
                                {t.hero.badge}
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6">
                                <span className="text-red-600">Shama</span>Tube
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 leading-relaxed mx-auto md:mx-0">
                                {t.hero.description}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                                <button className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-red-900/20">
                                    <Play className="w-5 h-5 fill-current" />
                                    {t.hero.start}
                                </button>
                                <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                                    <Upload className="w-5 h-5" />
                                    {t.hero.upload}
                                </button>
                            </div>
                        </div>

                        {/* Hero Image/Mockup */}
                        <div className="flex-1 relative w-full flex justify-center perspective-1000">
                            <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700 ease-out">
                                <Image
                                    src="/images/shamil-shamatube/1.jpeg"
                                    alt="ShamaTube UI"
                                    fill
                                    className="object-cover rounded-[2.5rem] opacity-90"
                                />
                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full bg-red-600/80 backdrop-blur-md flex items-center justify-center animate-pulse">
                                        <Play className="w-8 h-8 text-white fill-current ml-1" />
                                    </div>
                                </div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute top-10 -right-10 w-24 h-24 bg-red-600 rounded-full blur-3xl opacity-50 animate-bounce-slow" />
                            <div className="absolute bottom-10 -left-10 w-32 h-32 bg-purple-600 rounded-full blur-3xl opacity-50 animate-bounce-slow delay-500" />
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-24 bg-background relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Feature 1: Channels */}
                            <div className="group p-8 rounded-3xl bg-secondary/30 border border-border/50 hover:bg-secondary transition-all hover:-translate-y-2">
                                <div className="w-14 h-14 rounded-2xl bg-red-100 dark:bg-red-900/20 text-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Tv className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{t.features.channel.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{t.features.channel.desc}</p>
                            </div>

                            {/* Feature 2: Reactions */}
                            <div className="group p-8 rounded-3xl bg-secondary/30 border border-border/50 hover:bg-secondary transition-all hover:-translate-y-2">
                                <div className="w-14 h-14 rounded-2xl bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Smile className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{t.features.reactions.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{t.features.reactions.desc}</p>
                                <div className="flex gap-2 mt-4 text-2xl animate-bounce-slow">
                                    <span>😂</span><span>❤️</span><span>😮</span><span>🔥</span>
                                </div>
                            </div>

                            {/* Feature 3: Privacy */}
                            <div className="group p-8 rounded-3xl bg-secondary/30 border border-border/50 hover:bg-secondary transition-all hover:-translate-y-2">
                                <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-900/20 text-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <ShieldAlert className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{t.features.privacy.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{t.features.privacy.desc}</p>
                            </div>

                            {/* Feature 4: Interaction */}
                            <div className="group p-8 rounded-3xl bg-secondary/30 border border-border/50 hover:bg-secondary transition-all hover:-translate-y-2">
                                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Download className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{t.features.interaction.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{t.features.interaction.desc}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Showcase / Gallery */}
                <section className="py-24 bg-card overflow-hidden">
                    <div className="container mx-auto px-4 mb-12 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">{isAr ? "نظرة داخل التطبيق" : "Inside the App"}</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">{isAr ? "واجهة مستخدم عصرية وسهلة الاستخدام، صممت لتضع المحتوى في المركز." : "Modern, intuitive UI designed to put content center stage."}</p>
                    </div>

                    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] py-10" dir="ltr">
                        <div className="flex items-center gap-6 animate-infinite-scroll">
                            {/* Duplicated for loop - using 1-8.jpeg */}
                            {[...Array(2)].map((_, groupIdx) => (
                                <div key={groupIdx} className="flex gap-6">
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                        <div key={num} className="shrink-0 w-[240px] md:w-[280px] rounded-3xl overflow-hidden shadow-xl border border-border/50 transition-transform hover:scale-105 group relative bg-black">
                                            <div className="relative aspect-[9/19]">
                                                <Image
                                                    src={`/images/shamil-shamatube/${num}.jpeg`}
                                                    alt={`App Screen ${num}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                                <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white/90">
                                                    <Heart className="w-5 h-5" />
                                                    <MessageCircle className="w-5 h-5" />
                                                    <Share2 className="w-5 h-5" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Big Search/Download Feature Highlight */}
                <section className="py-24 px-4 bg-background">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="flex-1 relative order-2 lg:order-1">
                                <div className="relative z-10 w-full max-w-md mx-auto aspect-square bg-gradient-to-tr from-red-600 to-orange-500 rounded-[3rem] p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                                    <div className="w-full h-full bg-black rounded-[2.8rem] overflow-hidden relative">
                                        <Image
                                            src="/images/shamil-shamatube/3.jpeg"
                                            alt="Search Feature"
                                            fill
                                            className="object-cover opacity-80"
                                        />
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                                            <Search className="w-10 h-10 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 text-center lg:text-start order-1 lg:order-2">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">{isAr ? "ابحث. حمّل. شاهد." : "Search. Download. Watch."}</h2>
                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                    {isAr ? "محرك بحث قوي يوصلك لما تريد بسرعة. مع إمكانية تحميل الفيديوهات بجودة عالية للمشاهدة لاحقاً بدون إنترنت." : "Powerful search engine getting you to what you want, fast. Download videos in high quality to watch later, offline."}
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                    <div className="px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-medium flex items-center gap-2">
                                        <Search className="w-5 h-5 text-primary" />
                                        {isAr ? "بحث ذكي" : "Smart Search"}
                                    </div>
                                    <div className="px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-medium flex items-center gap-2">
                                        <Download className="w-5 h-5 text-primary" />
                                        {isAr ? "تحميل سريع" : "Fast Download"}
                                    </div>
                                    <div className="px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-medium flex items-center gap-2">
                                        <ShieldAlert className="w-5 h-5 text-primary" />
                                        {isAr ? "حظر وإلغاء" : "Block & Report"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 px-4">
                    <div className="container mx-auto max-w-4xl text-center">
                        <div className="p-12 rounded-[3rem] bg-gradient-to-r from-red-600 to-red-800 text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-700" />

                            <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">{t.cta.title}</h2>
                            <button className="px-10 py-5 bg-white text-red-700 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-white/20 relative z-10 hover:-translate-y-1">
                                {t.cta.btn}
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
