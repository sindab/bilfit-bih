import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8">
                O <span className="text-industrial-accent italic">Nama</span>
              </h2>
              <div className="space-y-6 text-lg opacity-80 leading-relaxed">
                <p>
                  Bilfit AG je švicarska kompanija sa preko 40 godina tradicije u preciznoj CNC proizvodnji. Naša posvećenost izvrsnosti i inovacijama učinila nas je pouzdanim partnerom u industrijama kao što su automobilska, vazduhoplovna i medicinska tehnologija.
                </p>
                <p>
                  Predstavništvo u Bosni i Hercegovini, pod vodstvom <span className="font-bold text-industrial-ink">Danijela Vurdića</span>, predstavlja most između švicarskog kvaliteta i lokalne stručnosti. Naš cilj je pružiti vrhunsku uslugu mašinske obrade metala na domaćem tržištu, koristeći najsavremenije tehnologije i procese.
                </p>
                <p className="italic border-l-4 border-industrial-accent pl-6 py-2">
                  "Naša vizija je jednostavna: pružiti preciznost koja nadmašuje očekivanja, svaki put i na vrijeme."
                </p>
              </div>
            </motion.div>
            
            {/* Decorative background element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-industrial-accent/20"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-industrial-ink rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/29976478/pexels-photo-29976478.jpeg" 
                alt="Bilfit Workshop" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Info Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-10 -left-10 md:left-10 bg-industrial-bg p-8 border border-industrial-ink/10 shadow-xl max-w-xs"
            >
              <div className="text-sm font-mono uppercase tracking-widest opacity-60 mb-4">Predstavnik za BiH</div>
              <div className="text-2xl font-display font-bold mb-2">DANIJEL VURDIĆ</div>
              <div className="h-1 w-12 bg-industrial-accent mb-4"></div>
              <p className="text-sm opacity-70">
                Vođa proizvodnje sa dugogodišnjim iskustvom u CNC tehnologijama i upravljanju projektima.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
