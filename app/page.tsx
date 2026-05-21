"use client"

import React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Hero3D from "@/components/hero-3d"
import AppEcosystem from "@/components/app-ecosystem"
import InfiniteSlider from "@/components/infinite-slider"
import { useLanguage } from "@/lib/language-context"
import { CONTENT } from "@/lib/content"
import { Shield, Zap, Sparkles, Terminal, Smartphone } from "lucide-react"

export default function Page() {
  const { language } = useLanguage()
  const content = CONTENT[language]
  const hero = content.hero
  const isRtl = language === "ar"

  const SLIDER_ITEMS = content.slider.map((img, index) => ({
    id: index.toString(),
    image: img,
    label: ""
  }))

  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Header */}
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Neon Grid Decorative Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_50%)] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Hero Text Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-start space-y-8 animate-in fade-in-up duration-1000">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
                <Terminal className="w-3.5 h-3.5" />
                <span>{hero.author.studio}</span>
                {hero.author.name && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-indigo-500/40" />
                    <span>{hero.author.name}</span>
                  </>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] text-balance">
                {language === "ar" ? (
                  <>
                    نطوع التكنولوجيا لخدمتكم مع{" "}
                    <span className="bg-gradient-to-r from-cyan-600 via-indigo-650 to-purple-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                      حماية خصوصيتكم
                    </span>
                  </>
                ) : (
                  <>
                    Cultivating Innovation whilst restoring the{" "}
                    <span className="bg-gradient-to-r from-cyan-600 via-indigo-650 to-purple-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                      Sanctity of Privacy
                    </span>
                  </>
                )}
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-light">
                {hero.description.join(" ")}
              </p>

              {/* Interactive buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">
                <a
                  href="#ecosystem"
                  className="w-full sm:w-auto px-8 py-4 bg-slate-950 dark:bg-white text-white dark:text-black text-center font-bold rounded-2xl hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-lg hover:shadow-indigo-500/10 active:scale-95 cursor-pointer"
                >
                  {language === "ar" ? "استكشف التطبيقات" : "Explore Apps"}
                </a>
                
                <a
                  href="/apk/ShamilApp.apk"
                  download
                  className="w-full sm:w-auto px-8 py-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-center font-bold rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Smartphone className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>{language === "ar" ? "تحميل شامل آب (APK)" : "Download Shamil App"}</span>
                </a>
              </div>
            </div>

            {/* 3D Visual Content Card */}
            <div className="lg:col-span-5 w-full aspect-[4/3] lg:aspect-square relative max-w-[500px] mx-auto lg:max-w-none animate-in fade-in zoom-in-95 duration-1000">
              <div className="w-full h-full rounded-3xl overflow-hidden border border-border/80 bg-card/45 shadow-2xl relative">
                <Hero3D />
              </div>
            </div>

          </div>
        </section>

        {/* Apps Ecosystem Showcase Section */}
        <div id="ecosystem">
          <AppEcosystem />
        </div>

        {/* Pillars / Values Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden border-t border-border">
          <div className="mx-auto max-w-7xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Pillar 1: Privacy */}
              <div className="p-8 rounded-3xl bg-card/45 border border-border flex flex-col space-y-4 hover:border-indigo-500/30 transition-all">
                <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-500 dark:text-purple-400 w-fit">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {language === "ar" ? "الخصوصية المطلقة" : "Absolute Privacy"}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {language === "ar" 
                    ? "تطبيقاتنا مصممة من الصفر لحماية بياناتك الشخصية عبر تشفير تام وحظر كامل للتتبع الخارجي."
                    : "Our apps are designed from the ground up to secure your personal data with end-to-end encryption."}
                </p>
              </div>

              {/* Pillar 2: Performance */}
              <div className="p-8 rounded-3xl bg-card/45 border border-border flex flex-col space-y-4 hover:border-indigo-500/30 transition-all">
                <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 w-fit">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {language === "ar" ? "سرعة الاستجابة" : "High Performance"}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {language === "ar" 
                    ? "خوارزميات برمجية متطورة تضمن سرعة البرق في نقل البيانات والاستجابة الفائقة تحت أي ظرف."
                    : "Sophisticated algorithms guarantee lightning-fast data transmission and response times under any condition."}
                </p>
              </div>

              {/* Pillar 3: Simplicity */}
              <div className="p-8 rounded-3xl bg-card/45 border border-border flex flex-col space-y-4 hover:border-indigo-500/30 transition-all">
                <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 w-fit">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {language === "ar" ? "سهولة الاستخدام" : "Fluid Experience"}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {language === "ar" 
                    ? "واجهات مستخدم انسيابية بتصميم زجاجي عصري يجمع بين جمالية المظهر وسهولة التفاعل."
                    : "Seamless user interfaces combining premium visual aesthetics with simple, intuitive interactions."}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Gallery / Slider Loop Section */}
        <section className="py-20 bg-gradient-to-b from-background to-background/95 overflow-hidden border-t border-border">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              {language === "ar" ? "لمحات من المنظومة" : "Screenshots Gallery"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {language === "ar" ? "شاشات تعكس الابتكار والبساطة" : "Visualizing innovation & elegant simplicity"}
            </p>
          </div>
          <InfiniteSlider items={SLIDER_ITEMS} />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
