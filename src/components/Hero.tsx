import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-industrial-ink"></span>
            <span className="text-xs uppercase tracking-[0.3em] font-bold opacity-60">
              Preciznost. Kvalitet. BiH.
            </span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter uppercase mb-8">
            Précision, <br />
            <span className="text-industrial-accent italic">Just in Time.</span>
          </h1>
          
          <p className="text-lg md:text-xl max-w-lg opacity-80 mb-10 leading-relaxed">
            CNC proizvodnja od prototipa do serijske proizvodnje. Sa našim modernim mašinskim parkom, uvijek imamo pravo rješenje za Vas.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-industrial-ink text-industrial-bg uppercase text-sm font-bold tracking-widest flex items-center gap-3 group"
            >
              Naše usluge
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-industrial-ink uppercase text-sm font-bold tracking-widest hover:bg-industrial-ink hover:text-industrial-bg transition-colors"
            >
              Kontaktirajte nas
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-industrial-ink/5 rounded-2xl overflow-hidden border border-industrial-ink/10"
        >
          <img 
            src="https://picsum.photos/seed/cnc-machine/1200/1200" 
            alt="CNC Machine" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-industrial-bg/40 to-transparent pointer-events-none"></div>
          
          {/* Floating Stats */}
          <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
            <div className="bg-industrial-bg/90 backdrop-blur p-4 border border-industrial-ink/10">
              <div className="text-3xl font-display font-bold">40+</div>
              <div className="text-[10px] uppercase tracking-widest opacity-60">Godina iskustva</div>
            </div>
            <div className="bg-industrial-bg/90 backdrop-blur p-4 border border-industrial-ink/10">
              <div className="text-3xl font-display font-bold">CNC</div>
              <div className="text-[10px] uppercase tracking-widest opacity-60">Vrhunska tehnologija</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Text */}
      <div className="absolute -bottom-20 -left-20 text-[20vw] font-display font-black opacity-[0.02] select-none pointer-events-none whitespace-nowrap">
        CNC MANUFACTURING
      </div>
    </section>
  );
}
