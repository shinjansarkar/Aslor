import React, { useState } from 'react';
import { Layers, Lightbulb, BatteryCharging, ShieldCheck, Sun, Zap, Droplets, Flame, Radio, Cpu, Eye, ArrowUpRight } from 'lucide-react';

export default function SolarSolutionsCatalog({ onOpenLightbox }) {
  const [activeTab, setActiveTab] = useState('systems'); // 'systems' | 'equipment' | 'components'

  const systemTypes = [
    {
      id: 'on-grid',
      title: '1. On-Grid Solar Systems',
      subtitle: 'Grid-Tied System with Net Metering',
      badge: 'Home & Commercial',
      icon: Sun,
      description: 'Connected directly to the utility grid. Generates clean solar energy during the day, uses utility grid power when solar is low, and feeds excess electricity back into the grid for credits via Bidirectional Net Metering.',
      features: ['Bidirectional Net-Metering (WBSEDCL)', 'Zero battery replacement costs', 'Eligible for PM Surya Ghar Subsidies']
    },
    {
      id: 'off-grid',
      title: '2. Off-Grid Solar Systems',
      subtitle: '100% Independent Standalone Power',
      badge: 'Remote & Farmhouses',
      icon: BatteryCharging,
      description: 'Operates entirely independently of the utility grid. Includes a solar charge controller and deep-cycle battery bank to store energy for round-the-clock power in remote locations.',
      features: ['Complete grid independence', '24/7 Power even in total blackouts', 'Deep-cycle solar battery storage']
    },
    {
      id: 'hybrid',
      title: '3. Hybrid Solar Systems',
      subtitle: 'Grid-Tied + Lithium Battery Backup',
      badge: 'Maximum Reliability',
      icon: Cpu,
      description: 'Combines the advantages of both on-grid and off-grid configurations. Enables net-metering grid export credits plus instant lithium-ion battery backup during power outages.',
      features: ['Net-metering grid export credits', 'Automatic battery backup', 'Smart hybrid inverter load management']
    },
    {
      id: 'fencing',
      title: '4. Solar Fencing Systems',
      subtitle: 'Solar-Powered High-Voltage Security',
      badge: 'Agri & Industrial Security',
      icon: ShieldCheck,
      description: 'Solar-powered security system to electrify perimeter fences. Uses solar modules to power an energizer that delivers short, high-voltage non-lethal electrical pulses to protect property.',
      features: ['Non-lethal high-voltage pulsed defense', 'Protects against intruders & wild animals', 'Ideal for tea gardens, farms & factories']
    }
  ];

  const equipmentSolutions = [
    {
      title: 'Solar Street Lights',
      tag: 'Smart Outdoor Lighting',
      icon: Lightbulb,
      description: 'Integrated outdoor lighting fixtures powered by solar energy for roads, streets, pathways, and public areas with dusk-to-dawn smart sensors.'
    },
    {
      title: 'Solar Water Heater',
      tag: 'Renewable Thermal Hot Water',
      icon: Flame,
      description: 'High-efficiency solar thermal technology to heat water without electricity. Ideal for homes, hotels, hospitals, and pool heating.'
    },
    {
      title: 'Solar Water Pump',
      tag: 'Efficient Water Draw',
      icon: Droplets,
      description: 'Solar-powered pumping systems to draw water from boreholes, wells, or reservoirs for agricultural irrigation, livestock, and domestic use.'
    },
    {
      title: 'Solar Home Lighting System',
      tag: 'Multipurpose Portable Kit',
      icon: Radio,
      description: 'Multipurpose small-scale energy kit featuring emergency light, study lamp, high-beam torch light, and mobile phone charging ports.'
    }
  ];

  const componentsList = [
    {
      name: 'Certified Solar Smart Inverters',
      desc: 'High-efficiency micro and string inverters with real-time app monitoring, MPPT tracking, and IP65 casing.',
      icon: Cpu
    },
    {
      name: 'UV-Resistant Solar Cables',
      desc: 'Double-insulated solar DC cables engineered for maximum conductivity, zero leakage, and extreme thermal resilience.',
      icon: Zap
    },
    {
      name: 'Galvanized Mounting Structures',
      desc: 'Hot-dip galvanized heavy-duty steel structures engineered to withstand high wind speeds up to 170 km/h.',
      icon: Layers
    }
  ];

  return (
    <section id="catalog" className="py-24 relative bg-[#0a0d0b]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Area */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-lime-400 uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-lime-400" />
            <span>Systems & Equipment Catalog</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Our Solar Energy <span className="font-serif-title italic text-lime-400">Solutions</span>
          </h2>

          <p className="text-neutral-400 text-base">
            Comprehensive solar energy systems and premium components tailored to your needs.
          </p>

          {/* Lightbox Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button 
              onClick={() => onOpenLightbox('/types-of-solar-guide.webp')}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-200 hover:text-white hover:border-lime-500/40 transition-all cursor-pointer"
            >
              <Eye className="w-4 h-4 text-lime-400" />
              <span>View "Types of Solar Systems" Infographic ↗</span>
            </button>

            <button 
              onClick={() => onOpenLightbox('/premium-solar-solutions.webp')}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-200 hover:text-white hover:border-lime-500/40 transition-all cursor-pointer"
            >
              <Eye className="w-4 h-4 text-amber-400" />
              <span>View "Premium Equipment" Infographic ↗</span>
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-[#121614] border border-white/10 gap-2">
            <button 
              onClick={() => setActiveTab('systems')}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'systems' ? 'bg-lime-400 text-black shadow-md' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Types of Solar Systems (1-4)
            </button>
            <button 
              onClick={() => setActiveTab('equipment')}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'equipment' ? 'bg-lime-400 text-black shadow-md' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Specialized Solar Equipment (5-8)
            </button>
            <button 
              onClick={() => setActiveTab('components')}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'components' ? 'bg-lime-400 text-black shadow-md' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Core Components & Inverters
            </button>
          </div>
        </div>

        {/* TAB 1: System Types */}
        {activeTab === 'systems' && (
          <div className="grid md:grid-cols-2 gap-6">
            {systemTypes.map((sys) => {
              const IconComp = sys.icon;
              return (
                <div key={sys.id} className="card-classy p-6 space-y-4 text-left flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-lime-400/10 text-lime-300 border border-lime-400/20">
                        {sys.badge}
                      </span>
                      <IconComp className="w-5 h-5 text-lime-400" />
                    </div>

                    <h3 className="text-xl font-semibold text-white">{sys.title}</h3>
                    <p className="text-xs text-amber-300 font-medium">{sys.subtitle}</p>

                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {sys.description}
                    </p>

                    <div className="space-y-1.5 pt-1">
                      {sys.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"></span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 2: Specialized Equipment */}
        {activeTab === 'equipment' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentSolutions.map((eq, idx) => {
              const IconComp = eq.icon;
              return (
                <div key={idx} className="card-classy p-6 space-y-4 text-left flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wide">
                      {eq.tag}
                    </span>
                    <h3 className="text-lg font-semibold text-white">{eq.title}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {eq.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 3: Components */}
        {activeTab === 'components' && (
          <div className="grid md:grid-cols-3 gap-6">
            {componentsList.map((comp, idx) => {
              const IconComp = comp.icon;
              return (
                <div key={idx} className="card-classy p-6 space-y-3 text-left">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{comp.name}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {comp.desc}
                  </p>
                  <div className="pt-2 text-xs font-semibold text-lime-400 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" /> BIS & ISO Certified Manufacturing
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
