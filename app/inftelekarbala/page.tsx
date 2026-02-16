"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, Wallet, Megaphone, FileText, Bell, CheckCircle2, ChevronDown } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function InfTeleKarbalaPage() {
    const { language } = useLanguage()
    const isAr = language === 'ar'

    const content = {
        en: {
            hero: {
                title: "InfTeleKarbala: Calculated Management",
                subtitle: "The unified backbone for Administration, Finance, and Media.",
                desc: "Transforming routine paper chaos into a streamlined, digital symphony. Real-time connections between every department and employee.",
                cta: "Request Demo"
            },
            stats: [
                { label: "Departments", value: "3+" },
                { label: "Efficiency", value: "100%" },
                { label: "Paperless", value: "True" },
            ],
            modules: [
                { icon: Building2, title: "Administration", desc: "Leaves, HR records, and employee affairs managed with a click." },
                { icon: Wallet, title: "Finance", desc: "Automated salary processing, loan tracking, and financial transparency." },
                { icon: Megaphone, title: "Media", desc: "Unified corporate identity, news broadcasting, and digital announcements." },
            ],
            features: {
                title: "Why InfTeleKarbala?",
                list: [
                    { title: "Instant Notifications", desc: "Never miss an update. Employees receive real-time alerts for actions that concern them." },
                    { title: "Paperless Workflow", desc: "Say goodbye to red tape. Submit requests, get approvals, and archive documents digitally." },
                    { title: "Secure Archives", desc: "Every record is encrypted, backed up, and easily retrievable by authorized personnel." },
                    { title: "Employee Dashboard", desc: "A personal space for every staff member to track their standing, tasks, and requests." }
                ]
            },
            gallery: {
                title: "Interface Gallery",
            }
        },
        ar: {
            hero: {
                title: "InfTeleKarbala: الإدارة المحسوبة",
                subtitle: "العمود الفقري الموحد للإدارة، المالية، والإعلام.",
                desc: "نحول الفوضى الورقية الروتينية إلى سيمفونية رقمية انسيابية. ربط فوري وشامل بين جميع الأقسام والموظفين.",
                cta: "اطلب تجربة"
            },
            stats: [
                { label: "الأقسام المربوطة", value: "+٣" },
                { label: "كفاءة", value: "١٠٠٪" },
                { label: "بلا ورق", value: "حقيقة" },
            ],
            modules: [
                { icon: Building2, title: "الإدارة", desc: "إدارة الإجازات، سجلات الموارد البشرية، وشؤون الموظفين بضغطة زر." },
                { icon: Wallet, title: "المالية", desc: "معالجة آلية للرواتب، تتبع السلف، وشفافية مالية مطلقة." },
                { icon: Megaphone, title: "الإعلام", desc: "هوية مؤسسية موحدة، بث الأخبار، والإعلانات الرقمية." },
            ],
            features: {
                title: "لماذا InfTeleKarbala؟",
                list: [
                    { title: "إشعارات فورية", desc: "لا تفوت أي تحديث. يتلقى الموظفون تنبيهات فورية للإجراءات التي تخصهم." },
                    { title: "سير عمل بلا ورق", desc: "وداعاً للروتين. قدم الطلبات، احصل على الموافقات، وأرشف المستندات رقمياً." },
                    { title: "أرشيف آمن", desc: "كل سجل مشفر، منسوخ احتياطياً، ويمكن استرجاعه بسهولة من قبل المخولين." },
                    { title: "لوحة تحكم الموظف", desc: "مساحة شخصية لكل موظف لمتابعة موقفه، مهامه، وطلباته." }
                ]
            },
            gallery: {
                title: "معرض الواجهات",
            }
        }
    }

    const t = content[language]

    return (
        <div className={`min-h-screen bg-slate-50 text-slate-900 ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
            <Header />

            <main className="overflow-x-hidden">
                {/* Hero Section with Video Background */}
                {/* Hero Section with Video Background */}
                <section className="relative w-full bg-black flex items-center justify-center">
                    <video
                        autoPlay
                        controls
                        loop
                        playsInline
                        poster="/images/Shamil-InfTele/TeleMaegment (1).jpeg"
                        className="w-full h-auto max-h-[90vh] object-contain mx-auto"
                    >
                        <source src="/images/Shamil-InfTele/Personnel Management.mp4" type="video/mp4" />
                    </video>
                </section>

                {/* Stats Bar */}
                <div className="container mx-auto px-4 py-8">
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row justify-around items-center gap-8 text-center">
                        {t.stats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col gap-1">
                                <span className="text-3xl md:text-4xl font-bold text-blue-600">{stat.value}</span>
                                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Core Modules */}
                <section className="py-24 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-[1200px]">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {t.modules.map((mod, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2 group">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <mod.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-slate-800">{mod.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{mod.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Detailed Features */}
                <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                    {/* Abstract Shapes */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />

                    <div className="container mx-auto max-w-[1200px] px-4 relative z-10">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="flex-1">
                                <h2 className="text-3xl md:text-5xl font-bold mb-8">{t.features.title}</h2>
                                <div className="space-y-8">
                                    {t.features.list.map((item, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className="mt-1 shrink-0">
                                                <CheckCircle2 className="w-6 h-6 text-green-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold mb-2 text-slate-100">{item.title}</h4>
                                                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 w-full relative">
                                {/* Featured Image Collage */}
                                <div className="relative h-[600px] w-full">
                                    <div className="absolute top-0 right-0 w-3/4 h-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700/50 z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                        <Image src="/images/Shamil-InfTele/TeleMaegment (1).jpeg" alt="Dashboard" fill className="object-cover" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-3/4 h-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700/50 z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                        <Image src="/images/Shamil-InfTele/TeleMaegment (2).jpeg" alt="Mobile View" fill className="object-cover" />
                                    </div>
                                    {/* Floating Icon */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-xl z-30 animate-pulse">
                                        <Bell className="w-10 h-10 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Grid */}
                <section className="py-24 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-[1440px]">
                        <h2 className="text-3xl font-bold text-center mb-16 text-slate-800">{t.gallery.title}</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {[3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <div key={num} className="group relative aspect-video rounded-xl overflow-hidden shadow-md cursor-pointer">
                                    <Image
                                        src={`/images/Shamil-InfTele/TeleMaegment (${num}).jpeg`}
                                        alt={`Screenshot ${num}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}
