import React, { useState } from 'react';
import { Sparkles, XCircle, Zap, VideoOff, Play, Check } from 'lucide-react';

const UrTitleLanding = () => {
  const [demoState, setDemoState] = useState('waiting');
  const [demoInput, setDemoInput] = useState('');

  const handleAnalyze = () => {
    if (!demoInput.trim()) return;
    setDemoState('loading');
    setTimeout(() => {
      setDemoState('result');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#a1a1aa] font-sans antialiased overflow-x-hidden selection:bg-indigo-500/30">

      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-500" />
            <span className="font-outfit font-black text-white tracking-widest text-sm italic uppercase">UR TITLE</span>
          </div>
          <a href="tool.html" className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-600/20">
            Try It Free
          </a>
        </div>
      </nav>

      {/* 1. HERO */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite]"></span>
            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">AI-POWERED CTR ENGINE</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-outfit font-black text-white leading-tight mb-8 tracking-tighter">
            <span className="text-indigo-500">YouTube Title Generator</span> That Fixes Why Your Videos Get No Views
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-12 font-medium">
            Test your title before you post. Get an instant score, see why it's weak, and instantly generate psychological hooks that actually get clicks.
          </p>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <a href="tool.html" className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-zinc-200 transition-all hover:-translate-y-1 shadow-2xl">
                Try It Free →
              </a>
              <a href="#demo" className="w-full sm:w-auto bg-white/5 backdrop-blur-xl text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/10 border border-white/5 transition-all">
                See Example
              </a>
            </div>
            <div className="flex gap-4 text-xs font-bold uppercase tracking-widest mt-2 text-zinc-500">
              <span className="flex items-center gap-1"><Check className="w-3 h-3 text-indigo-500" /> No login required</span>
              <span className="flex items-center gap-1"><Check className="w-3 h-3 text-indigo-500" /> Takes 5 seconds</span>
            </div>
          </div>

          {/* FAKE INTERACTIVE PREVIEW */}
          <div className="mt-20 relative px-4">
            <div className="bg-zinc-950/80 backdrop-blur-xl rounded-[32px] p-4 md:p-8 max-w-3xl mx-auto shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-transparent"></div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
                </div>
              </div>
              <div className="w-full bg-zinc-900 border border-white/10 rounded-2xl p-4 text-left mb-6 flex justify-between items-center opacity-70">
                <span className="text-zinc-500 italic">"How to make money fast..."</span>
                <div className="px-3 py-1 rounded bg-indigo-600 font-black text-white text-[10px] uppercase">Analyze</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left relative z-10">
                <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
                  <div className="text-[10px] font-bold text-red-400 mb-2 uppercase">SCORE: 2/10</div>
                  <div className="text-lg font-outfit font-black text-white italic line-through decoration-red-500/50">How to make money fast</div>
                  <div className="text-[11px] text-zinc-500 mt-2">"Too generic. Zero curiosity."</div>
                </div>
                <div className="p-6 rounded-2xl bg-indigo-600 text-white shadow-xl shadow-indigo-600/20">
                  <div className="text-[10px] font-bold text-indigo-200 mb-2 uppercase">AI REWRITE</div>
                  <div className="text-lg font-outfit font-black leading-tight">The Brutal Truth About Making Money Online</div>
                  <div className="mt-4 flex items-center gap-2">
                    <Zap className="w-4 h-4 fill-white text-white" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">High Curiosity Gap</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PAIN SECTION */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-outfit font-black text-white mb-12 leading-tight">
            If nobody clicks, your content <span className="text-red-500 underline decoration-red-500/30">doesn't exist.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/5 p-6 rounded-2xl flex items-center gap-4 text-left">
              <XCircle className="w-6 h-6 text-red-500 shrink-0" />
              <span className="text-lg font-bold text-white">You spend hours editing</span>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/5 p-6 rounded-2xl flex items-center gap-4 text-left">
              <XCircle className="w-6 h-6 text-red-500 shrink-0" />
              <span className="text-lg font-bold text-white">Nobody clicks</span>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/5 p-6 rounded-2xl flex items-center gap-4 text-left">
              <XCircle className="w-6 h-6 text-red-500 shrink-0" />
              <span className="text-lg font-bold text-white">CTR is dead</span>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/5 p-6 rounded-2xl flex items-center gap-4 text-left">
              <XCircle className="w-6 h-6 text-red-500 shrink-0" />
              <span className="text-lg font-bold text-white">Algorithm ignores you</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. REFRAME SECTION */}
      <section className="py-24 px-6 bg-indigo-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-outfit font-black leading-tight tracking-tight">
            You don't have a content problem.<br />
            <span className="opacity-50">You have a click problem.</span>
          </h2>
        </div>
      </section>

      {/* 4. SOLUTION */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-outfit font-black text-white mb-4 uppercase">YouTube Title Optimization In Seconds</h2>
          <p className="text-zinc-500 font-bold mb-16 uppercase tracking-widest text-xs">A viral title generator that actually works</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/5 backdrop-blur-xl border border-white/5 p-10 rounded-[32px] hover:border-indigo-500/50 transition-all relative overflow-hidden">
              <div className="text-5xl font-black text-indigo-500/10 absolute -right-2 -top-4 font-outfit text-[120px]">1</div>
              <h3 className="text-2xl font-outfit font-black text-white mb-2 uppercase relative z-10">Paste Your Title</h3>
              <p className="text-zinc-400 relative z-10 font-medium">Dump your initial, boring idea into the engine.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/5 p-10 rounded-[32px] hover:border-indigo-500/50 transition-all relative overflow-hidden">
              <div className="text-5xl font-black text-indigo-500/10 absolute -right-2 -top-4 font-outfit text-[120px]">2</div>
              <h3 className="text-2xl font-outfit font-black text-white mb-2 uppercase relative z-10">Get Instant Score</h3>
              <p className="text-zinc-400 relative z-10 font-medium">Our AI analyzes your psychological hook and destroys weak phrasing.</p>
            </div>
            <div className="bg-indigo-500/5 backdrop-blur-xl border border-indigo-500/30 p-10 rounded-[32px] transition-all relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent"></div>
              <div className="text-5xl font-black text-indigo-500/20 absolute -right-2 -top-4 font-outfit text-[120px]">3</div>
              <h3 className="text-2xl font-outfit font-black text-white mb-2 uppercase relative z-10">Get Better Version</h3>
              <p className="text-zinc-300 relative z-10 font-medium">Instantly receive 10+ variations guaranteed to improve youtube CTR.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LIVE DEMO */}
      <section id="demo" className="py-32 px-6 overflow-hidden border-t border-white/5">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[48px] border border-white/10 relative shadow-2xl">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 blur-[60px] rounded-full"></div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-outfit font-black text-white mb-4 uppercase italic">Test Your Title Now</h2>
            <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Find out why nobody is clicking.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative mb-8">
              <textarea
                value={demoInput}
                onChange={(e) => setDemoInput(e.target.value)}
                className="w-full bg-zinc-950 border border-white/10 rounded-2xl p-6 text-xl text-white font-medium focus:outline-none focus:border-indigo-500 transition-colors h-32 placeholder:text-zinc-800 resize-none"
                placeholder="Enter your boring title..."
              />
              <button
                onClick={handleAnalyze}
                className="absolute bottom-4 right-4 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-600/30"
              >
                Analyze Title
              </button>
            </div>

            <div className="space-y-4 select-none">
              {demoState === 'waiting' && (
                <div className="p-4 rounded-xl text-center border border-dashed border-zinc-800 opacity-50 bg-white/5">
                  <span className="text-[10px] font-black tracking-widest uppercase italic">Awaiting Input...</span>
                </div>
              )}

              {demoState === 'loading' && (
                <div className="p-6 rounded-2xl bg-zinc-900 border border-white/5 opacity-80">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-[10px] font-black tracking-widest uppercase text-indigo-400">Analyzing Psychology</span>
                  </div>
                </div>
              )}

              {demoState === 'result' && (
                <div className="relative p-8 rounded-[32px] bg-zinc-950 border border-indigo-500/30 overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-indigo-500/5"></div>
                  <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                    <div className="w-full md:w-1/3 bg-red-500/10 p-6 rounded-2xl text-center border border-red-500/20">
                      <span className="text-[10px] font-black tracking-widest uppercase text-red-400 block mb-2">Score: 3/10</span>
                      <div className="text-white text-sm font-medium line-through decoration-red-500 opacity-70 break-words">{demoInput}</div>
                    </div>
                    <div className="w-full md:w-2/3 bg-indigo-500 text-white p-6 rounded-2xl shadow-lg shadow-indigo-500/20">
                      <span className="text-[10px] font-black tracking-widest uppercase text-indigo-200 block mb-2">AI Rewrite Generated</span>
                      <div className="text-xl font-outfit font-black italic">They Lied To You About Growing On YouTube</div>
                      <a href="tool.html" className="mt-4 inline-flex items-center gap-2 bg-zinc-950 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase hover:bg-zinc-800 transition-colors">
                        Analyze & Fix Completely →
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6. BEFORE / AFTER */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-outfit font-black text-white text-center mb-16 uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">The Difference Is Obvious</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl opacity-60 grayscale border border-red-500/20 relative">
              <div className="absolute top-4 left-4 text-[10px] font-black text-red-500 uppercase tracking-widest bg-red-500/10 px-2 py-1 rounded">Before</div>
              <h4 className="text-xl font-bold text-zinc-400 mt-6">How to grow on YouTube</h4>
            </div>
            <div className="bg-indigo-500/5 backdrop-blur-xl p-8 rounded-3xl border border-indigo-500/30 relative">
              <div className="absolute top-4 left-4 text-[10px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2 py-1 rounded">After</div>
              <h4 className="text-2xl font-outfit font-black text-white mt-6 leading-tight">You're Growing on YouTube Wrong (Do This Instead)</h4>
            </div>

            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl opacity-60 grayscale border border-red-500/20 relative">
              <div className="absolute top-4 left-4 text-[10px] font-black text-red-500 uppercase tracking-widest bg-red-500/10 px-2 py-1 rounded">Before</div>
              <h4 className="text-xl font-bold text-zinc-400 mt-6">My morning routine for productivity</h4>
            </div>
            <div className="bg-indigo-500/5 backdrop-blur-xl p-8 rounded-3xl border border-indigo-500/30 relative">
              <div className="absolute top-4 left-4 text-[10px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2 py-1 rounded">After</div>
              <h4 className="text-2xl font-outfit font-black text-white mt-6 leading-tight">I Woke Up At 5AM For 30 Days (And Will Never Do It Again)</h4>
            </div>

          </div>
          <div className="text-center mt-16">
            <a href="tool.html" className="inline-flex items-center gap-2 bg-white text-black px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl">
              Fix Your Titles Now
            </a>
          </div>
        </div>
      </section>

      {/* 7. SOCIAL PROOF */}
      <section className="py-32 px-6 border-t border-white/5 bg-zinc-950 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-outfit font-black text-white text-center mb-16 uppercase">They Thought Their Content Sucked.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors"><p className="text-white italic text-sm font-medium leading-relaxed">"I thought my content sucked. It was just my titles."</p></div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors"><p className="text-white italic text-sm font-medium leading-relaxed">"My CTR went from 2% to 9% overnight. It's almost unfair."</p></div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors"><p className="text-white italic text-sm font-medium leading-relaxed">"Used this as a tiktok hook generator. My last 3 videos hit completely different algorithms."</p></div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors"><p className="text-white italic text-sm font-medium leading-relaxed">"I deleted my old videos, generated new titles with this, re-uploaded, and they went viral."</p></div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors"><p className="text-white italic text-sm font-medium leading-relaxed">"The ultimate instagram caption generator for real engagement."</p></div>
          </div>
        </div>
      </section>

      {/* 8. SEO CONTENT BLOCK */}
      <section className="py-32 px-6 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-black text-indigo-500 uppercase tracking-[0.5em] text-center mb-16">The CTR Playbook</h2>
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-outfit font-black text-white mb-3 uppercase">Why Your Videos Get No Views</h3>
              <p className="text-zinc-400 mb-2 font-medium">Algorithms serve content based on human psychology. If your title is boring, nobody clicks it.</p>
              <p className="text-zinc-400 font-medium">Using a <strong className="text-white">youtube seo title tool</strong> ensures your ideas trigger an emotional response instantly.</p>
            </div>
            <div>
              <h3 className="text-2xl font-outfit font-black text-white mb-3 uppercase">How to Improve YouTube CTR</h3>
              <p className="text-zinc-400 mb-2 font-medium">You need to create a curiosity gap. Stop summarizing your video.</p>
              <p className="text-zinc-400 font-medium">Instead, use our engine to <strong className="text-white">increase video views</strong> by learning how to tease the payoff without revealing it.</p>
            </div>
            <div>
              <h3 className="text-2xl font-outfit font-black text-white mb-3 uppercase">Best YouTube Title Generator</h3>
              <p className="text-zinc-400 mb-2 font-medium">Generic tools just add "Ultimate Guide" to your text. UR Title acts as a brutal psychological strategist.</p>
              <p className="text-zinc-400 font-medium">We built the ultimate <strong className="text-white">clickbait title generator</strong> so you never have to guess again.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. OBJECTION HANDLING */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between gap-12 text-center md:text-left">
          <div className="flex-1">
            <strong className="text-white block mb-2 font-black uppercase tracking-wider">Do I need login?</strong>
            <span className="text-zinc-400 font-medium text-sm">No. Click the button and start pasting.</span>
          </div>
          <div className="flex-1">
            <strong className="text-white block mb-2 font-black uppercase tracking-wider">Is this free?</strong>
            <span className="text-zinc-400 font-medium text-sm">Yes. 100% free forever for basic variations.</span>
          </div>
          <div className="flex-1">
            <strong className="text-white block mb-2 font-black uppercase tracking-wider">Will this actually work?</strong>
            <span className="text-zinc-400 font-medium text-sm">If your content is good, fixing your title works 100% of the time.</span>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-outfit font-black text-white mb-6 uppercase leading-[0.9] tracking-tighter">
            Stop guessing your titles. <br />
            <span className="text-indigo-500">Start testing them.</span>
          </h2>
          <a href="tool.html" className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-16 py-8 rounded-[32px] font-black uppercase tracking-widest text-xl transition-all hover:scale-110 active:scale-95 shadow-2xl shadow-indigo-600/30 mt-12 mb-8">
            Try It Free {'->'}
          </a>
          <div className="flex justify-center gap-6 text-[10px] font-black text-zinc-500 uppercase tracking-widest">
            <span className="flex items-center gap-1"><Check className="w-3 h-3 text-indigo-500" /> No login required</span>
            <span className="flex items-center gap-1"><Check className="w-3 h-3 text-indigo-500" /> Takes 5 seconds</span>
          </div>
        </div>
      </section>

      {/* Fixed Floating CTA */}
      <div className="fixed bottom-6 w-full flex justify-center pointer-events-none z-50">
        <a href="tool.html" className="pointer-events-auto bg-white text-black px-6 py-3 rounded-full font-black uppercase tracking-widest text-xs shadow-2xl hover:scale-105 active:scale-95 transition-transform flex items-center gap-2">
          <Zap className="w-4 h-4 text-indigo-500 fill-indigo-500" /> Fix Your Title
        </a>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">
        © 2024 UR Title. No more dead CTR.
      </footer>
    </div>
  );
};

export default UrTitleLanding;
