import { motion } from "motion/react";
import { Scissors, RotateCw, Box, ShieldCheck, Layers, Settings } from "lucide-react";

const services = [
  {
    id: "01",
    title: "CNC Lasersko Rezanje",
    description: "Precizno rezanje metala najsavremenijim laserskim tehnologijama za vrhunske rezultate.",
    icon: Scissors,
  },
  {
    id: "02",
    title: "CNC Tokarenje",
    description: "Visokoprecizna obrada rotacionih dijelova sa fokusom na tolerancije i kvalitet površine.",
    icon: RotateCw,
  },
  {
    id: "03",
    title: "CNC Glodanje",
    description: "Kompleksna 3D i 5-osna obrada dijelova od različitih materijala.",
    icon: Box,
  },
  {
    id: "04",
    title: "Kontrola Kvaliteta",
    description: "3D mjerenja i rigorozne provjere osiguravaju da svaki komad zadovoljava standarde.",
    icon: ShieldCheck,
  },
  {
    id: "05",
    title: "Površinska Obrada",
    description: "Lakiranje, plastifikacija i druge metode zaštite i estetskog uređenja metala.",
    icon: Layers,
  },
  {
    id: "06",
    title: "Montaža Sklopova",
    description: "Sastavljanje gotovih baugrupa i funkcionalno testiranje prije isporuke.",
    icon: Settings,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-industrial-ink text-industrial-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6">
              Naše <span className="text-industrial-accent italic">Usluge</span>
            </h2>
            <p className="opacity-60 text-lg">
              Specijalizirani smo za visokokvalitetnu mašinsku obradu metala, pružajući rješenja za najzahtjevnije industrije širom Evrope.
            </p>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-sm font-mono opacity-40 uppercase tracking-widest mb-2">Sektor / Proizvodnja</div>
            <div className="text-2xl font-display font-bold">CNC TEHNOLOGIJA</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-industrial-bg/10 border border-industrial-bg/10">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-industrial-ink p-10 hover:bg-industrial-bg hover:text-industrial-ink transition-all duration-300 group cursor-default"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-4 border border-industrial-bg/20 group-hover:border-industrial-ink/20 transition-colors">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                <span className="font-mono text-xs opacity-40 group-hover:opacity-100">{service.id}</span>
              </div>
              <h3 className="text-2xl font-display font-bold uppercase mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="opacity-60 group-hover:opacity-80 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
