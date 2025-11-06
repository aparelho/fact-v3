import React from 'react';
import { Plus } from 'lucide-react';

export default function Mobile() {
  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      {/* Fixed Header */}
      <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[372px] bg-[rgba(23,23,23,0.5)] backdrop-blur-md rounded-xl px-4 py-2">
        <div className="flex items-center justify-between gap-4">
          <div className="text-white font-medium text-sm">FACT</div>
          <nav className="flex items-center gap-4 text-white text-sm">
            <a href="#platform">Platform</a>
            <a href="#faq">FAQ</a>
            <a href="#demo">Try demo</a>
            <button className="bg-white text-black px-4 py-2 rounded-lg text-xs uppercase font-medium">
              Scan Now
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-md mx-auto px-6 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-normal leading-[0.97] mb-6">
            Fail-proof protection against next-gen counterfeits.
          </h1>
          <button className="bg-[rgba(23,23,23,0.22)] text-white px-6 py-3 rounded-2xl">
            Discover
          </button>
        </div>

        {/* Hero Card */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[355px] bg-[rgba(55,57,57,0.5)] backdrop-blur-xl rounded-2xl p-4">
          <div className="flex gap-4">
            <div className="w-24 h-24 bg-gray-700 rounded-2xl flex-shrink-0" />
            <div className="flex-1">
              <p className="text-white/60 text-xs mb-2">Case Study</p>
              <p className="text-white text-sm leading-tight">
                Discover why cryptographed wallets of NFC generated info are unbreakable
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="max-w-md mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-[#322d2a] rounded-full" />
          <h2 className="text-[#322d2a] text-xs uppercase tracking-wider font-mono">VALUE</h2>
        </div>
        <p className="text-[#322d2a] text-2xl leading-tight">
          Safeguard authenticity in the alcohol industry with blockchain-verified NFC technology.
          Instantly confirm every bottle's origin and protect consumers, brands, and regulators from counterfeit threats.
        </p>
      </section>

      {/* Image Cards */}
      <section className="max-w-md mx-auto px-6 space-y-4 mb-12">
        <div className="relative h-[346px] bg-gray-800 rounded-[60px] overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-[rgba(23,23,23,0.5)] backdrop-blur-xl px-6 py-4 rounded-full text-white text-sm">
              From industry
            </div>
          </div>
        </div>
        <div className="relative h-[346px] bg-gray-800 rounded-[60px] overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-[rgba(23,23,23,0.5)] backdrop-blur-xl px-6 py-4 rounded-full text-white text-sm">
              To final customer
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-md mx-auto px-6 mb-12">
        <div className="bg-[#f0efe9] rounded-[44px] p-10">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-2 h-2 bg-[#322d2a] rounded-sm" />
            <h2 className="text-[#322d2a] text-xs uppercase tracking-wider font-mono">FAQ</h2>
          </div>

          <div className="space-y-6">
            {/* First item is open */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-[#322d2a] text-2xl">Cryptography</h3>
                <div className="w-12 h-12 bg-white rounded-3xl flex items-center justify-center">
                  <Plus className="w-6 h-6 rotate-45" />
                </div>
              </div>
              <p className="text-[#322d2a] text-xs uppercase tracking-wider font-mono leading-relaxed">
                Every product is equipped with a secure NFC tag, uniquely linked to a blockchain record that cannot be altered or duplicated.
              </p>
            </div>

            {['Blockchain Verified', 'No App Required', 'Global Tracking', 'Analytics Dashboard', 'Extended Durability'].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <h3 className="text-[#322d2a] text-2xl">{item}</h3>
                <div className="w-12 h-12 bg-white rounded-3xl flex items-center justify-center">
                  <Plus className="w-6 h-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-md mx-auto px-6 mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-[#322d2a] rounded-full" />
          <h2 className="text-[#322d2a] text-xs uppercase tracking-wider font-mono">Mission</h2>
        </div>
        <p className="text-[#322d2a] text-2xl leading-tight mb-8">
          Our mission is to protect the world's leading brands from counterfeiting — and to shield consumers from deception, harm, or even death caused by fake products.
        </p>

        <div className="relative h-[346px] bg-black rounded-[60px] overflow-hidden mb-8">
          <div className="absolute inset-0 opacity-60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px]">
            <div className="w-full h-full bg-white/10 rounded-full" />
          </div>
        </div>

        <p className="text-[#322d2a] text-2xl leading-tight">
          Protect brand reputation, reduce counterfeiting losses, and gain valuable supply chain insights.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="max-w-md mx-auto px-6 mb-12">
        <div className="bg-[#f0efe9] rounded-[44px] p-10">
          <h2 className="text-[#322d2a] text-2xl text-center mb-10">How it works</h2>

          <div className="space-y-8">
            {[
              {
                title: 'Tag Integration',
                description: 'AI Workers are always on to identify tasks and get them done.'
              },
              {
                title: 'Consumer Scans',
                description: 'Combines knowledge, policy checks, and takes action to deliver complete, compliant outcomes.'
              },
              {
                title: 'Instant Verification',
                description: 'Completes the task autonomously, logging every step along the way - but keeps you in the loop when an escalation is needed.'
              }
            ].map((step, index) => (
              <div key={index} className="border-t border-[#c0bebc] pt-6">
                <h3 className="text-[#20201f] text-xl mb-4">{step.title}</h3>
                <p className="text-[#8a8784] text-lg leading-relaxed mb-8">
                  {step.description}
                </p>
                <div className="h-[319px] bg-[rgba(122,118,114,0.47)] rounded-[60px] flex items-center justify-center">
                  <div className="w-[238px] h-[214px] bg-[#d9d9d9] rounded-[32px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-md mx-auto px-6 pb-12">
        <div className="bg-[#141414] rounded-[32px] p-8 pt-32">
          <h2 className="text-[#fbfaf9] text-4xl leading-none mb-8">
            Fight Against<br />Counterfeit Tech
          </h2>

          <div className="space-y-4 mb-8">
            <div className="bg-[#262626] rounded-2xl p-4 flex items-center gap-4">
              <div className="w-11 h-11 bg-[rgba(245,177,177,0.2)] rounded-full flex-shrink-0" />
              <p className="text-[#fbfaf9] text-sm flex-1">
                See our State-of-the-Art technology in action, book a demo now.
              </p>
            </div>

            <button className="w-full bg-[#fbfaf9] text-[#141414] py-4 rounded-xl flex items-center justify-center gap-4 font-medium">
              <div className="w-2 h-2 bg-[#82d895] rounded-full" />
              Book a demo
            </button>
          </div>

          <div className="flex items-center justify-between text-[#8a8784] text-sm">
            <div className="flex items-center gap-2">
              <span>©</span>
              <span className="uppercase text-xs">2025 FACT LLC.</span>
            </div>
            <div className="flex items-center gap-6 uppercase text-xs">
              <a href="#linkedin">Linkedin</a>
              <a href="#medium">Medium</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
