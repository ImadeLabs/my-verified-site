import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  FileCheck, 
  CheckCircle, 
  Building2,
  Clock,
  PhoneCall,
  Scale,
  Search,
  Users
} from 'lucide-react';

export default function DueDiligenceConsultancy() {
  const whatsappNumber = "+2348105105757";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=I%20wish%20to%20request%20due%20diligence%20for%20an%20Abuja%20property.`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Top Banner */}
      <div className="bg-[#064e3b] text-emerald-50 py-3 px-4 text-center text-xs font-bold tracking-widest uppercase">
        <span className="flex items-center justify-center gap-2">
          <Scale size={14} /> Professional Real Estate Due Diligence & Technical Representation
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="text-2xl font-black text-slate-900 flex items-center gap-2">
          <div className="bg-emerald-700 p-1.5 rounded text-white">
            <ShieldCheck size={24} />
          </div>
          VERIFIED<span className="text-emerald-700 tracking-tighter">CITY</span>
        </div>
        <div className="hidden md:flex gap-8 font-semibold text-sm uppercase tracking-wider text-slate-600">
          <a href="#services" className="hover:text-emerald-700 transition-colors">Services</a>
          <a href="#process" className="hover:text-emerald-700 transition-colors">The Process</a>
        </div>
        <a href={whatsappLink} className="bg-slate-900 text-white px-6 py-2.5 rounded-md font-bold text-sm hover:bg-slate-800 transition-all">
          CONTACT US
        </a>
      </nav>

      {/* Hero Section */}
      <header className="px-6 py-20 md:py-32 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold bg-emerald-100 text-emerald-800 rounded-sm border-l-4 border-emerald-700">
            ENGINEERING & LEGAL VERIFICATION
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.05]">
            Investing in <br />
            <span className="text-emerald-700 text-6xl md:text-7xl">Abuja Real Estate?</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            The Abuja property market is high-yield but high-risk. We provide professional 
            <b> due diligence</b> and <b>client representation</b> to ensure your investment 
            is legally secure and structurally sound before you commit funds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={whatsappLink}
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-5 rounded-md font-black shadow-xl flex items-center justify-center gap-3 transition-all"
            >
              REQUEST DUE DILIGENCE <Zap size={20} fill="white" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-100 relative z-10">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileCheck className="text-emerald-700" /> Consult Services
            </h3>
            <ul className="space-y-4">
              <ConsultList item="AGIS Title & Ownership Verification" />
              <ConsultList item="Physical Boundary & Beacon Audit" />
              <ConsultList item="Structural Engineering Site Inspections" />
              <ConsultList item="Zoning & FCDA Approval Checks" />
              <ConsultList item="Diaspora Representation & Closing" />
            </ul>
            <div className="mt-8 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-emerald-700 flex items-center justify-center text-white font-bold">EC</div>
                <div>
                  <p className="text-sm font-bold">Engr. Cornelius</p>
                  <p className="text-xs text-slate-500">Lead Consultant, Civil Engineer</p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative Square */}
          <div className="absolute -bottom-6 -right-6 h-64 w-64 bg-emerald-50 rounded-2xl -z-0"></div>
        </div>
      </header>

      {/* The 3-Hour Express Section */}
      <section className="bg-slate-900 py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6">3-Hour Express <br/><span className="text-emerald-400 text-2xl uppercase tracking-widest font-bold">Preliminary Audit</span></h2>
            <p className="text-slate-400 text-lg mb-8">
              Time is of the essence in competitive real estate. Our consulting team can provide a high-level 
              preliminary report on any FCT plot or estate within 3 hours. 
            </p>
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-2">
                 <Clock className="text-emerald-400" />
                 <span className="font-bold">Fast Turnaround</span>
               </div>
               <div className="flex items-center gap-2">
                 <ShieldCheck className="text-emerald-400" />
                 <span className="font-bold">Zero-Scam Guarantee</span>
               </div>
            </div>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
             <h4 className="font-bold mb-4 text-emerald-400 uppercase tracking-tighter text-sm italic">Status: Accepting New Consultations</h4>
             <p className="text-slate-300 mb-6 font-medium leading-relaxed">
               "We act as your eyes on the ground. For diaspora investors, this is the bridge between 
               investment and security."
             </p>
             <a href={whatsappLink} className="text-white font-black flex items-center gap-2 group underline decoration-emerald-500 underline-offset-8">
                SPEAK WITH A CONSULTANT <PhoneCall size={18} className="group-hover:translate-x-1 transition-transform" />
             </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Investment Protection Suite</h2>
          <p className="text-slate-500 font-medium">Professional consulting for land and property acquisitions in Abuja.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Search size={32} />} 
            title="AGIS Verification" 
            desc="Exposing double allocations, fake title documents, and AGIS file status."
          />
          <ServiceCard 
            icon={<Building2 size={32} />} 
            title="Structural Audit" 
            desc="Engineering assessment of existing buildings before you commit to purchase."
          />
          <ServiceCard 
            icon={<Users size={32} />} 
            title="Client Representation" 
            desc="We handle physical site visits and document retrieval for clients outside Abuja."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-6 border-t border-slate-200 text-center">
        <div className="text-2xl font-black text-slate-900 mb-4">VERIFIED CITY</div>
        <p className="text-slate-500 text-sm max-w-md mx-auto mb-8">
          A specialized consultancy providing due diligence, engineering audits, and local 
          representation for real estate investors in Abuja, FCT.
        </p>
        <div className="flex justify-center gap-6 mb-8 font-bold text-sm text-slate-700">
           <span>ABUJA</span>
           <span>LAGOS</span>
           <span>DIASPORA SUPPORT</span>
        </div>
        <div className="text-xs text-slate-400">
          © {new Date().getFullYear()} Verified City Consult. Powered by Engineering Excellence.
        </div>
      </footer>
    </div>
  );
}

function ConsultList({ item }: { item: string }) {
  return (
    <li className="flex items-center gap-3 font-semibold text-slate-700">
      <CheckCircle size={18} className="text-emerald-700" /> {item}
    </li>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-10 bg-white border border-slate-200 rounded-sm hover:border-emerald-700 transition-all hover:shadow-2xl shadow-slate-200/50 group">
      <div className="mb-6 text-emerald-700 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}