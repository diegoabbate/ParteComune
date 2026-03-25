import React, { useState } from 'react';
import { 
  ArrowRight, 
  BarChart3, 
  CheckCircle2, 
  ChevronRight, 
  Globe2, 
  MapPin, 
  Menu, 
  ShieldCheck, 
  Users, 
  X 
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-200 selection:text-orange-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-orange-500 text-white">
              <Globe2 className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Parte Comune</span>
          </div>
          
          <div className="hidden md:flex md:items-center md:gap-8">
            <a href="#chi-siamo" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Chi Siamo</a>
            <a href="#programma" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Programma</a>
            <a href="#trasparenza" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Trasparenza</a>
            <a href="#territori" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Territori</a>
          </div>

          <div className="hidden md:flex md:items-center md:gap-4">
            <button className="text-sm font-medium text-slate-900 hover:text-orange-500 transition-colors">Accedi</button>
            <button className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 transition-all active:scale-95">
              Partecipa Ora
            </button>
          </div>

          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 py-6 shadow-lg">
            <div className="flex flex-col space-y-4">
              <a href="#chi-siamo" className="text-base font-medium text-slate-900">Chi Siamo</a>
              <a href="#programma" className="text-base font-medium text-slate-900">Programma</a>
              <a href="#trasparenza" className="text-base font-medium text-slate-900">Trasparenza</a>
              <a href="#territori" className="text-base font-medium text-slate-900">Territori</a>
              <hr className="my-2 border-slate-200" />
              <button className="w-full rounded-full bg-slate-100 px-5 py-3 text-center text-base font-semibold text-slate-900">Accedi</button>
              <button className="w-full rounded-full bg-orange-500 px-5 py-3 text-center text-base font-semibold text-white shadow-sm">Partecipa Ora</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-32 lg:pb-32 xl:pb-36">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-400">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2 animate-pulse"></span>
              Oltre 15.000 cittadini attivi in 120 comuni
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              La politica dei <span className="text-orange-500">fatti</span>, <br className="hidden sm:block" />
              non delle promesse.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
              Siamo il movimento civico che misura i risultati. Nessuna ideologia, solo competenze, trasparenza radicale e impatto reale sui territori. Riprendiamoci la cosa pubblica.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-orange-400 transition-all active:scale-95">
                Unisciti al Movimento <ArrowRight className="h-5 w-5" />
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all">
                Scopri il Programma
              </button>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              L'iscrizione richiede 2 minuti. Nessun costo obbligatorio.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof / Credibility Bar */}
      <div className="border-b border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-900">120+</div>
              <div className="mt-1 text-sm font-medium text-slate-500 uppercase tracking-wider">Sezioni Locali</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">100%</div>
              <div className="mt-1 text-sm font-medium text-slate-500 uppercase tracking-wider">Bilanci Pubblici</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">45</div>
              <div className="mt-1 text-sm font-medium text-slate-500 uppercase tracking-wider">Proposte di Legge</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">15k</div>
              <div className="mt-1 text-sm font-medium text-slate-500 uppercase tracking-wider">Membri Attivi</div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem -> Solution Framing */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Stanchi delle solite parole?
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              La politica tradizionale parla per slogan. Noi lavoriamo per obiettivi misurabili. Ecco cosa ci rende radicalmente diversi.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Differentiator 1 */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Competenza sui Dati</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Ogni nostra proposta è basata su dati reali e studi di fattibilità. Non promettiamo ciò che non possiamo finanziare o realizzare.
              </p>
            </div>

            {/* Differentiator 2 */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Trasparenza Radicale</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Pubblichiamo ogni euro speso e ricevuto. I nostri bilanci e i KPI delle nostre azioni sono sempre accessibili a tutti i cittadini.
              </p>
            </div>

            {/* Differentiator 3 */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md sm:col-span-2 lg:col-span-1">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Impatto Locale</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Il cambiamento parte dai territori. Diamo potere e risorse alle sezioni locali per risolvere i problemi quotidiani delle comunità.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Initiatives (Results) */}
      <section className="bg-slate-900 py-24 sm:py-32 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Cosa abbiamo fatto</h2>
              <p className="mt-4 text-lg text-slate-400">Non chiediamo fiducia cieca. Chiediamo di giudicarci dai risultati ottenuti sui territori.</p>
            </div>
            <a href="#" className="mt-6 md:mt-0 flex items-center text-orange-400 hover:text-orange-300 font-medium transition-colors">
              Vedi tutte le azioni <ChevronRight className="ml-1 h-5 w-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl bg-slate-800 p-8 border border-slate-700 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                  Completato
                </span>
                <span className="text-sm text-slate-400">Milano</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Riqualificazione Ex-Scalo Farini</h3>
              <p className="text-slate-300 mb-6">Abbiamo guidato la raccolta firme e il progetto tecnico per convertire l'area in un parco pubblico, bloccando la speculazione edilizia.</p>
              <div className="flex items-center gap-2 text-sm font-medium text-orange-400">
                Leggi il report d'impatto <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-slate-800 p-8 border border-slate-700 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
                  In corso
                </span>
                <span className="text-sm text-slate-400">Nazionale</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Legge "Trasparenza Appalti"</h3>
              <p className="text-slate-300 mb-6">Proposta di legge scritta con esperti del settore per digitalizzare e rendere pubblici tutti i dati degli appalti PNRR in tempo reale.</p>
              <div className="flex items-center gap-2 text-sm font-medium text-orange-400">
                Supporta la campagna <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Funnel / How it works */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Come puoi fare la differenza</h2>
            <p className="mt-4 text-lg text-slate-600">Il cambiamento non si delega. Si costruisce insieme, passo dopo passo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10"></div>
            
            <div className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-slate-50 border-8 border-white shadow-sm mb-6">
                <span className="text-2xl font-bold text-slate-900">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Informati</h3>
              <p className="text-slate-600">Iscriviti alla newsletter per ricevere analisi basate sui dati e aggiornamenti sulle nostre battaglie, senza spam.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange-50 border-8 border-white shadow-sm mb-6">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Unisciti</h3>
              <p className="text-slate-600">Diventa membro di Parte Comune. Partecipa alle votazioni interne e contribuisci a definire il programma.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-slate-900 border-8 border-white shadow-sm mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Agisci</h3>
              <p className="text-slate-600">Trova la sezione locale più vicina a te. Organizza eventi, proponi soluzioni e candidati per il tuo territorio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Final CTA */}
      <section className="relative overflow-hidden bg-orange-500 py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 right-0 -z-10 h-[800px] w-[800px] rounded-full bg-orange-400/50 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Pronto a cambiare le cose?
            </h2>
            <p className="mt-6 text-lg leading-8 text-orange-50">
              Inizia ricevendo il nostro "Bollettino della Trasparenza". Una volta a settimana, i dati e i fatti che la politica tradizionale non ti racconta.
            </p>
            <form className="mt-10 flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input 
                type="email" 
                placeholder="La tua email" 
                required
                className="min-w-0 flex-auto rounded-full border-0 bg-white/10 px-6 py-4 text-white placeholder:text-orange-100 shadow-sm ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              />
              <button 
                type="submit" 
                className="flex-none rounded-full bg-white px-8 py-4 text-sm font-semibold text-orange-600 shadow-sm hover:bg-orange-50 transition-colors"
              >
                Iscriviti
              </button>
            </form>
            <p className="mt-4 text-xs text-orange-200">
              Rispettiamo la tua privacy. Cancellati quando vuoi.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4 text-white">
                <Globe2 className="h-6 w-6 text-orange-500" />
                <span className="text-xl font-bold">Parte Comune</span>
              </div>
              <p className="text-sm">Il movimento civico per la trasparenza e la competenza.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Il Movimento</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Chi Siamo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Il Programma</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Le Persone</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Statuto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Trasparenza</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Bilanci</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Donazioni</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Come votiamo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Partecipa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Iscriviti</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dona</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trova Sezione</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contatti</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2026 Parte Comune. Tutti i diritti riservati.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
