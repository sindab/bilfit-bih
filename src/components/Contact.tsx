import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-industrial-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8">
              Stupimo u <br />
              <span className="text-industrial-accent italic">Kontakt</span>
            </h2>
            <p className="text-lg opacity-70 mb-12 max-w-md">
              Imate projekat ili trebate ponudu? Naš tim je spreman da odgovori na sve vaše zahtjeve u najkraćem roku.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-industrial-ink text-industrial-bg">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-50 mb-1 font-bold">Telefon</div>
                  <a href="tel:+38765686423" className="text-xl font-display font-bold hover:text-industrial-accent transition-colors">
                    +387 65 686 423
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-industrial-ink text-industrial-bg">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-50 mb-1 font-bold">E-mail</div>
                  <a href="mailto:office@bilfit.ba" className="text-xl font-display font-bold hover:text-industrial-accent transition-colors">
                    office@bilfit.ba
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-industrial-ink text-industrial-bg">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-50 mb-1 font-bold">Lokacija</div>
                  <div className="text-xl font-display font-bold">
                    Bosna i Hercegovina
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 border border-industrial-ink/5 shadow-2xl rounded-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-widest opacity-60">Ime i Prezime</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-industrial-bg border border-industrial-ink/10 focus:border-industrial-accent outline-none transition-colors"
                    placeholder="Vaše ime"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-widest opacity-60">E-mail</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-industrial-bg border border-industrial-ink/10 focus:border-industrial-accent outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest opacity-60">Predmet</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-industrial-bg border border-industrial-ink/10 focus:border-industrial-accent outline-none transition-colors"
                  placeholder="Upit za lasersko rezanje"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest opacity-60">Poruka</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-industrial-bg border border-industrial-ink/10 focus:border-industrial-accent outline-none transition-colors resize-none"
                  placeholder="Opišite vaš projekat..."
                ></textarea>
              </div>
              <button className="w-full py-4 bg-industrial-ink text-industrial-bg uppercase text-sm font-bold tracking-widest flex items-center justify-center gap-3 hover:bg-industrial-accent transition-colors group">
                Pošalji poruku
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
